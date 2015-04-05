(function (VisSense, Utils) {
  'use strict';

  // temporary -> Everything in here should be
  // considered to be an own plugin
  VisSense.Helpers = function () {
  };
  VisSense.Helpers.createTimeReport = function (metrics) {
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

  VisSense.Helpers.newInitialStateEventStrategy = function (eventName) {
    return {
      init: function (monitor) {
        console.log('[InitialRequestEventStrategy] init');
        var stopSendingInitialRequestEvents = monitor.on('update', function (monitor) {
          var state = monitor.state();
          monitor._pubsub.publish(eventName, [state]);
          stopSendingInitialRequestEvents();
        });
      }
    };
  };

  VisSense.Helpers.createTimeReportEventStrategy = function (eventName, options) {
    return {
      start: function () {
        console.log('[TimeReportEventStrategy] start');
      },
      stop: function (monitor) {
        monitor.metrics().update();

        var timeReport = VisSense.Helpers.createTimeReport(monitor.metrics());

        monitor._pubsub.publish(eventName, [timeReport]);

        console.log('[TimeReportEventStrategy] stop');
      }
    };
  };

  // TODO: externalize to percentage-time-test repository.
  // should only be a strategy that emits an event
  // TODO: make "publish(..)" in VisSense publicly available..
  VisSense.Helpers.createPercentageTimeTestEventStrategy = function (eventName, options) {
    var registerPercentageTimeTestHook = function (monitor, percentageTimeTestConfig) {
      var cancelTest = Utils.noop;
      var unregisterVisibleHook = monitor.on('visible', Utils.once(function (monitor) {
        cancelTest = monitor.visobj().onPercentageTimeTestPassed(function () {

          monitor.metrics().update();

          var report = {
            monitorState: monitor.state(),
            testConfig: percentageTimeTestConfig,
            timeReport: VisSense.Helpers.createTimeReport(monitor.metrics())
          };

          monitor._pubsub.publish(eventName, [report]);
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
        console.log('[PercentageTimeTestEventStrategy] init');

        if (!Utils.isFunction(monitor.metrics)) {
          throw new Error('monitor.metrisc is not a function. Is a MetricsStrategy defined?');
        }
        cancel = registerPercentageTimeTestHook(monitor, options);
      },
      stop: function () {
        cancel();
        console.log('[PercentageTimeTestEventStrategy] stop');
      }
    };
  };


})(VisSense, VisSense.Utils);
