(function (VisSense, factory) {
  'use strict';

  VisSense.Client = VisSense.Client || {};
  VisSense.Client.Simple = factory(VisSense, VisSense.Utils);
})(VisSense, function (VisSense, Utils) {
  'use strict';

  var uuid = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  var viewportSize = function () {
    var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return {
      width: width,
      height: height
    };
  };

  var sessionId = uuid();

  var addStandardProperties = function (data) {
    return Utils.extend(data, {
      sessionId: sessionId,
      viewport: viewportSize()
    });
  };

  var send = function (client, eventCollection, event) {
    var data = addStandardProperties(event);

    client.addEvent(eventCollection, data, function (err/*, res*/) {
      if (err) {
        // there was an error!
        console.log('error on event ' + eventCollection);
      }
      else {
        // see sample response below
        console.info('successfully sent event ' + eventCollection);
      }

      if (console.table) {
        console.table(data);
      }
    });
  };

  return function () {
    if (!Utils.isFunction(VisSense.VisMon.Strategy.MetricsStrategy)) {
      throw new Error('Cannot load MetricsStrategy. Is it included?');
    }

    return {
      monitorsWithLoggingClient: function () {
        return this.monitors({
          addEvent: function (eventCollection, data, consumer) {
            console.log('addEvent', eventCollection);

            if (console.table) {
              console.table(data);
            }
            consumer(null, data);
          }
        });
      },
      monitors: function (externalClient) {
        var client = {
          addEvent: function (eventCollection, data, consumer) {
            externalClient.addEvent(eventCollection, data, consumer);
          }
        };

        return {
          standard: function (visobj) {
            return this.custom(visobj, {
              interval: 1000,
              throttle: 100,
              inactiveAfter: 60000
            });
          },
          custom: function (visobj, options) {
            var config = Utils.defaults(options, {
              interval: 1000,
              throttle: 100,
              inactiveAfter: 60000
            });

            var builder = VisSense.Monitor.Builder(visobj)
              .strategy(new VisSense.VisMon.Strategy.PollingStrategy({interval: config.interval}))
              .strategy(new VisSense.VisMon.Strategy.EventStrategy({throttle: config.throttle}))
              .strategy(new VisSense.VisMon.Strategy.UserActivityStrategy({
                inactiveAfter: config.inactiveAfter
              }));

            return this.prepareBuilder(builder).build();
          },
          prepareBuilder: function (builder) {
            var monitorId = uuid();

            var r = monitorId.substring(0, 7);

            return builder
              .strategy(new VisSense.VisMon.Strategy.MetricsStrategy())
              .strategy(VisSense.Client.Helpers.Simple.newInitialStateEventStrategy(r + '#initial-state'))
              .on(r + '#initial-state', function (state) {
                send(client, 'visibility-initial-request', {
                  monitorId: monitorId,
                  initial: true,
                  state: state
                });
              })
              .strategy(VisSense.Client.Helpers.Simple.createPercentageTimeTestEventStrategy(r + '#ptt50/1', {
                percentageLimit: 0.5,
                timeLimit: 1000,
                interval: 100
              }))
              .on(r + '#ptt50/1', function (data) {
                send(client, 'visibility-percentage-time-test', {
                  monitorId: monitorId,
                  test: data
                });
              })
              .strategy(VisSense.Client.Helpers.Simple.createTimeReportEventStrategy(r + '#time-summary'))
              .on(r + '#time-summary', function (timeReport) {
                send(client, 'visibility-time-report', {
                  monitorId: monitorId,
                  report: timeReport
                });
              });
          }
        };

      }
    };
  };
});
