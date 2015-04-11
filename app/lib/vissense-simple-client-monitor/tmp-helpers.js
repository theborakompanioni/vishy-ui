(function (VisSense, Utils) {
  'use strict';

  // FIXME: temporary -> Everything in here should be considered to be moved to an own plugin

  var simpleHelpers = function () {};

  simpleHelpers.createTimeReport = function (metrics) {
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

  simpleHelpers.newInitialStateEventStrategy = function (eventName) {
    return {
      init: function (monitor) {
        console.debug('[InitialRequestEventStrategy] init');
        var stopSendingInitialRequestEvents = monitor.on('update', function (monitor) {
          var state = monitor.state();
          monitor._pubsub.publish(eventName, [state]);
          stopSendingInitialRequestEvents();
        });
      }
    };
  };

  simpleHelpers.createTimeReportEventStrategy = function (eventName) {
    return {
      start: function () {
        console.debug('[TimeReportEventStrategy] start');
      },
      stop: function (monitor) {
        monitor.metrics().update();

        var timeReport = simpleHelpers.createTimeReport(monitor.metrics());

        monitor._pubsub.publish(eventName, [timeReport]);

        console.debug('[TimeReportEventStrategy] stop');
      }
    };
  };

  // TODO: externalize to percentage-time-test repository.
  // - should only be a strategy that emits an event
  // - should not depend on monitor.metrics()
  simpleHelpers.createPercentageTimeTestEventStrategy = function (eventName, options) {
    var registerPercentageTimeTestHook = function (monitor, percentageTimeTestConfig) {
      var cancelTest = Utils.noop;
      var unregisterVisibleHook = monitor.on('visible', Utils.once(function (monitor) {
        cancelTest = monitor.visobj().onPercentageTimeTestPassed(function () {

          monitor.metrics().update();

          var report = {
            monitorState: monitor.state(),
            testConfig: percentageTimeTestConfig,
            timeReport: simpleHelpers.createTimeReport(monitor.metrics())
          };

          monitor.publish(eventName, [report]);
        }, percentageTimeTestConfig);

        unregisterVisibleHook();
      }));

      return function () {
        unregisterVisibleHook();
        cancelTest();
      };
    };

    var cancel = Utils.noop;

    return {
      init: function (monitor) {
        console.debug('[PercentageTimeTestEventStrategy] init');

        if (!Utils.isFunction(monitor.metrics)) {
          throw new Error('monitor.metrisc is not a function. Is a MetricsStrategy defined?');
        }
        cancel = registerPercentageTimeTestHook(monitor, options);
      },
      stop: function () {
        cancel();
        console.debug('[PercentageTimeTestEventStrategy] stop');
      }
    };
  };


  VisSense.Client = VisSense.Client || {};
  VisSense.Client.Helpers = VisSense.Client.Helpers || {};
  VisSense.Client.Helpers.Simple = simpleHelpers;


})(VisSense, VisSense.Utils);
