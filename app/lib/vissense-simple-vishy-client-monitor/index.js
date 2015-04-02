(function (VisSense, Utils) {
  'use strict';

  VisSense.Client = VisSense.Client || {}

  VisSense.Client.Vishy = function(config, http) {
    if (!Utils.isFunction(VisSense.Client.Simple)) {
      throw new Error('Cannot load VisSense.Client.Simple. Is it included?');
    }

    var vishyConfig = Utils.defaults(config, {
      id: null,
      projectId: null,
      protocol: 'http',
      host: 'api.vishy.io',
      port: 80
    });

    if (!vishyConfig.id) {
      throw new Error('Please provide a vishy.id!');
    }
    if (!http || !http.post) {
      throw new Error('Please provide a compatible http client!');
    }

    var baseEndpoint = createBaseEndpoint(vishyConfig.protocol, vishyConfig.host, vishyConfig.port);

    return {
      monitors: function(config) {
        var moreMonitorsConfig = Utils.defaults(config, {
          projectId: vishyConfig.projectId
        });

        if (!moreMonitorsConfig.projectId) {
          throw new Error('Please provide a vishy.projectId!');
        }

        var client = {
          addEvent: function (eventCollection, data, consumer) {
            var url = baseEndpoint + '/project/' + vishyConfig.id + '/event/' + eventCollection;

            var _data = Utils.extend(data, {
              vishy: {
                id: vishyConfig.id,
                projectId: moreMonitorsConfig.projectId
              }
            });

            http.post(url, _data, {}).then(function (data) {
              consumer(null, data);
            }, function (error) {
              consumer(error);
            });
          }
        };

        return {
          standard: function (visobj) {
            var monitorConfig = createMonitorConfig({});
            return VisSense.Client.Simple(client).monitors().custom(visobj, monitorConfig);
          },
          custom: function (visobj, config) {
            var monitorConfig = createMonitorConfig(config);
            return VisSense.Client.Simple(client).monitors().custom(visobj, monitorConfig);
          }
        };
      }
    };
  };

  var createBaseEndpoint = function (protocol, host, port) {
    return protocol + '://' + host + ':' + port + '';
  };

  var createMonitorConfig = function (options) {
    var config = Utils.defaults(options, {
      //update: function () { console.log('VishyClientMonitor update'); },
      strategy: [
        new VisSense.VisMon.Strategy.PollingStrategy({interval: 1000}),
        new VisSense.VisMon.Strategy.EventStrategy({debounce: 30}),
        new VisSense.VisMon.Strategy.UserActivityStrategy({
          inactiveAfter: 15000
        })
      ]
    });

    if (!Utils.isArray(config.strategy)) {
      config.strategy = [config.strategy];
    }

    return config;
  };

})(VisSense, VisSense.Utils);
