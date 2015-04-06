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

  var createTimeReport = function (metrics) {
    var report = {};
    report.timeHidden = metrics.getMetric('time.hidden').get();
    report.timeVisible = metrics.getMetric('time.visible').get();
    report.timeFullyVisible = metrics.getMetric('time.fullyvisible').get();
    report.timeRelativeVisible = metrics.getMetric('time.relativeVisible').get();
    report.duration = metrics.getMetric('time.duration').get();

    report.percentage = {
      current: metrics.getMetric('percentage').get(),
      max: metrics.getMetric('percentage.max').get(),
      min: metrics.getMetric('percentage.min').get()
    };

    return report;
  };

  var sendPercentageTimeTestEventStrategy = (function () {
    return function (client, monitorId, config) {
      var sendPercentageTimeTestEvent = function (percentageTimeTestReport) {
        console.log('[PercentageTimeTestEventStrategy] send event');

        send(client, 'visibility-percentage-time-test', {
          monitorId: monitorId,
          test: percentageTimeTestReport
        });
      };

      var registerPercentageTimeTestHook = function (monitor, percentageTimeTestConfig) {
        var cancelTest = Utils.noop;
        var unregister = monitor.on('visible', Utils.once(function (monitor) {
          cancelTest = monitor.visobj().onPercentageTimeTestPassed(function () {

            monitor.metrics().update();

            var report = {
              monitorState: monitor.state(),
              testConfig: percentageTimeTestConfig,
              timeReport: createTimeReport(monitor.metrics())
            };

            sendPercentageTimeTestEvent(report);
          }, percentageTimeTestConfig);

          unregister();
        }));

        return function () {
          unregister();
          cancelTest();
        };
      };

      var cancel = Utils.noop;

      return {
        init: function (monitor) {
          console.log('[PercentageTimeTestEventStrategy] init');
          cancel = registerPercentageTimeTestHook(monitor, config);
        },
        stop: function () {
          cancel();
          console.log('[PercentageTimeTestEventStrategy] stop');
        }
      };
    };
  })();

  var sendInitialRequestEventStrategy = (function () {
    return function (client, config) {
      var sendVisibilityEvent = function (state) {
        console.log('[InitialRequestEventStrategy] send event');
        send(client, 'visibility-initial-request', {
          monitorId: config.monitorId,
          initial: true,
          state: state
        });
      };

      return {
        init: function (monitor) {
          console.log('[InitialRequestEventStrategy] init');
          var stopSendingInitialRequestEvents = monitor.on('update', function (monitor) {
            var state = monitor.state();
            sendVisibilityEvent(state);
            stopSendingInitialRequestEvents();
          });
        }
      };
    };
  })();

  var sendTimeReportEventStrategy = (function () {
    return function (client, config) {

      var sendTimeReportEvent = function (timeReport) {
        console.log('[TimeReportEventStrategy] send event');

        send(client, 'visibility-time-report', {
          monitorId: config.monitorId,
          report: timeReport
        });
      };

      return {
        start: function () {
          console.log('[TimeReportEventStrategy] start');
        },
        stop: function (monitor) {
          monitor.metrics().update();

          var timeReport = createTimeReport(monitor.metrics());
          sendTimeReportEvent(timeReport);

          console.log('[TimeReportEventStrategy] stop');
        }
      };
    };
  })();

  var createMonitorConfig = function (client, monitorConfig) {
    var config = Utils.defaults(monitorConfig, {
      //update: function () { console.log('VishyClientMonitor update'); },
      strategy: [
        new VisSense.VisMon.Strategy.PollingStrategy({interval: 1000}),
        new VisSense.VisMon.Strategy.EventStrategy({debounce: 30}),
      ]
    });

    var options = {
      monitorId: uuid()
    };

    if (!Utils.isArray(config.strategy)) {
      config.strategy = [config.strategy];
    }

    var decoratedClient = {
      addEvent: function (eventCollection, data, consumer) {
        client.addEvent(eventCollection, data, consumer);
      }
    };

    config.strategy = config.strategy.concat([
      new VisSense.VisMon.Strategy.MetricsStrategy(),
      sendPercentageTimeTestEventStrategy(decoratedClient, {
        percentageLimit: 0.5,
        timeLimit: 1000,
        interval: 100
      }),
      sendPercentageTimeTestEventStrategy(decoratedClient, {
        percentageLimit: 1,
        timeLimit: 3000,
        interval: 300
      }),
      sendInitialRequestEventStrategy(decoratedClient, options),
      sendTimeReportEventStrategy(decoratedClient, options)
    ]);

    return config;
  };

  return function (client) {
    if (!Utils.isFunction(VisSense.VisMon.Strategy.MetricsStrategy)) {
      throw new Error('Cannot load MetricsStrategy. Is it included?');
    }

    return {
      monitors: function () {
        return {
          standard: function (visobj) {
            var monitorConfig = createMonitorConfig(client, {});
            return visobj.monitor(monitorConfig);
          },
          custom: function (visobj, options) {
            var monitorConfig = createMonitorConfig(client, options);
            return visobj.monitor(monitorConfig);
          }
        };
      }
    };
  };
});
