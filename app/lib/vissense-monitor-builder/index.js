(function (VisSense, Utils, factory) {
  'use strict';

  VisSense.Monitor = VisSense.Monitor || {};
  VisSense.Monitor.Builder = factory(VisSense, VisSense.Utils);

})(VisSense, VisSense.Utils, function (VisSense, Utils) {
  'use strict';

  // TODO: thats how i'll want to use the builder
  /*

   VisSense.Monitor.Builder(visobj)
   .strategy(new VisSense.VisMon.Strategy.PollingStrategy())
   .strategy(new VisSense.VisMon.Strategy.PollingStrategy())
   .strategy(new VisSense.VisMon.Strategy.PollingStrategy())
   .strategy(new VisSense.VisMon.Strategy.PollingStrategy())
   .strategy(new VisSense.VisMon.Strategy.PollingStrategy())
   .on('fullyvisible', function() {

   }).on('visible', function() {

   }).on('hidden', function() {

   })
   .build()
   .start();

   another example:
   ...

   VisSense.Monitor.Builder(visobj)
   .strategy(new VisSense.VisMon.Strategy.PollingStrategy({interval: 1000}))
   .strategy(new VisSense.VisMon.Strategy.EventStrategy({debounce: 30}))
   .strategy(new VisSense.VisMon.Strategy.UserActivityStrategy({
   inactiveAfter: 15000
   }))
   .on('update', function(monitor) {
   console.log(monitor.state().percentage + '%');
   })
   .build(function(monitorByBuilder) {
   monitorByBuilder.start();
   });


   extension are possible with:

   VisSense.Monitor.Builder.GoogleAnalytics() {
   }

   ...
   or Builder is extensible per prototype..

   Builder(visobj).enableGoogleAnalytics(window.ga).build().start();

   */

  return function (visobj) {
    var config = {};
    var strategies = [];
    var events = [];

    var productBuilt = false;
    var product = null;

    return {
      set: function (name, value) {
        config[name] = value;
        return this;
      },
      strategy: function (strategy) {
        strategies.push(strategy);
        return this;
      },
      on: function (event, handler) {
        events.push([event, handler]);
        return this;
      },
      /**
       * Creates the configured monitor.
       *
       * There is a special case in which all strategies
       * are disabled and hence the caller has to take
       * care of the update mechanism - this is especially useful
       * for testing.
       * This happens when the property 'strategy' is set to false
       * or ends up being an empty array.
       *
       * builder.set('strategy', false);
       * or
       * builder.options({
       *   strategy: false
       * });
       *
       * @param [consumer] if given will return this methods result
       * as return parameter. The built monitor is passed as first argument.
       *
       * @returns {*|VisSense.VisMon}
       */
      build: function (consumer) {
        var manufacture = function () {
          var combinedStrategies = null; // empty array disables any strategy
          var forceDisableStrategies = config.strategy === false;
          var enableStrategies = !forceDisableStrategies && (config.strategy || strategies.length > 0);

          if (!enableStrategies) {
            if (forceDisableStrategies) {
              combinedStrategies = []
            } else {
              combinedStrategies = config.strategy;
            }
          } else {
            var configStrategyIsDefined = !!config.strategy;
            var configStrategyIsArray = Utils.isArray(config.strategy);
            var configStrategyAsArray = configStrategyIsDefined ? (!configStrategyIsArray ?
              [config.strategy] : config.strategy) : [];

            combinedStrategies = configStrategyAsArray.concat(strategies);
          }

          if (combinedStrategies === []) {
            log.debug('No strategies given - update process must be handled by caller. ');
          }

          config.strategy = combinedStrategies;

          var monitor = visobj.monitor(config);

          Utils.forEach(events, function (event) {
            monitor.on(event[0], event[1]);
          });

          productBuilt = true;
          product = monitor;

          return product;
        };

        if (productBuilt) {
          log.warn('Attempt to build an already built monitor.');
        }

        var monitor = productBuilt ? product : manufacture();

        if (Utils.isFunction(consumer)) {
          return consumer(monitor);
        } else {
          return monitor;
        }
      }
    };
  };
});
