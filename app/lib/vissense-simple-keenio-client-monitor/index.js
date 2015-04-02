(function (VisSense, Utils) {
  'use strict';

  VisSense.Client = VisSense.Client || {}

  VisSense.Client.KeenIO = function(keenClient) {
    if (!Utils.isFunction(VisSense.Client.Simple)) {
      throw new Error('Cannot load VisSense.Client.Simple. Is it included?');
    }

    var client = {
      addEvent: function (eventCollection, data, consumer) {
        keenClient.addEvent(eventCollection, data, consumer);
      }
    };

    return {
      monitors: function () {
        return {
          standard: function(visobj) {
            return VisSense.Client.Simple(client).monitors()
              .standard(this);
          },
          custom: function(visobj, config) {
            var monitorConfig = Utils.extend(config, {
              //update: function () { console.log('[keen-io-monitor] update'); },
              strategy: [
                new VisSense.VisMon.Strategy.PollingStrategy({interval: 1000}),
                new VisSense.VisMon.Strategy.EventStrategy({debounce: 30})
              ]
            });

            return VisSense.Client.Simple(client).monitors()
              .standard(this, monitorConfig);
          }
        };
      }
    };
  };
  VisSense.fn.simpleKeenIoClientMonitor = function (config, keenClient) {
    if (!Utils.isFunction(VisSense.Client.Simple)) {
      throw new Error('Cannot load VisSense.Client.Simple. Is it included?');
    }

    var monitorConfig = Utils.extend(config, {
      //update: function () { console.log('[keen-io-monitor] update'); },
      strategy: [
        new VisSense.VisMon.Strategy.PollingStrategy({interval: 1000}),
        new VisSense.VisMon.Strategy.EventStrategy({debounce: 30})
      ]
    });

    var client = {
      addEvent: function (eventCollection, data, consumer) {
        keenClient.addEvent(eventCollection, data, consumer);
      }
    };

    return VisSense.Client.Simple(client).monitors().standard(this, monitorConfig);
  };

})(VisSense, VisSense.Utils);
