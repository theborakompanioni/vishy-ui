(function (window, angular) {
  'use strict';

  angular.module('org.tbk.vishy.ui.showcase.controllers')

    .controller('ShowcaseCtrl', [
      '$scope', '$timeout', '$http', 'VisSense', 'VisUtils', 'tbkVishyConfig',
      function ($scope, $timeout, $http, VisSense, VisUtils, tbkVishyConfig) {
        var autoStop = 90;
        $scope.model = {
          running: false,
          autoStop: autoStop,
          autoStopCountdown: autoStop,
          inactiveAfter: 15000,
          hidden: 0.4999
        };

        var stop = angular.noop;

        var startCountdown = function () {
          var autoStopTimeoutId = $timeout(function () {
            stop();
          }, $scope.model.autoStopCountdown * 1000);

          var countDownTimeoutId = $timeout(function countDownAutoStopCountdown() {
            $scope.model.autoStopCountdown--;
            countDownTimeoutId = $timeout(function () {
              countDownAutoStopCountdown();
            }, 1000);
          }, 1000);

          return function () {
            $timeout.cancel(autoStopTimeoutId);
            $timeout.cancel(countDownTimeoutId);
          };
        };

        var start = function (ids) {
          var elementIds = ids;
          if (!VisUtils.isArray(ids)) {
            elementIds = [ids];
          }

          $scope.model.running = true;
          $scope.model.autoStopCountdown = autoStop;

          var monitors = [];
          VisUtils.forEach(elementIds, function (elementId) {
            var element = angular.element('#' + elementId)[0];
            var visobj = VisSense.of(element, {
              hidden: $scope.model.hidden
            });

            /*
            var vishyMonitor = VisSense.Client.Vishy(tbkVishyConfig, $http)
              .monitors({
                projectId: elementId
              }).custom(visobj, {
                strategy: [
                  new VisSense.VisMon.Strategy.UserActivityStrategy({
                    inactiveAfter: $scope.model.inactiveAfter
                  }),
                  new VisSense.VisMon.Strategy.PollingStrategy({interval: 1000}),
                  new VisSense.VisMon.Strategy.EventStrategy({debounce: 30})
                ]
              });

            monitors.push(vishyMonitor);*/

            VisSense.Monitor.Builder(visobj)
              .strategy(new VisSense.VisMon.Strategy.UserActivityStrategy({
                inactiveAfter: $scope.model.inactiveAfter
              }))
              .strategy(new VisSense.VisMon.Strategy.PollingStrategy({interval: 1000}))
              .strategy(new VisSense.VisMon.Strategy.EventStrategy({debounce: 30}))
              .on('visible', function() {
                console.log(elementId, ' became visible.');
              })
              .strategy(new VisSense.VisMon.Strategy.MetricsStrategy())
              .strategy(VisSense.Helpers.createPercentageTimeTestEventStrategy('ptt50/1', {
                percentageLimit: 0.5,
                timeLimit: 1000,
                interval: 100
              }))
              .on('ptt50/1', function(data) {
                console.log(elementId, ' successfully finished 50/1 Test!');
                console.table(data);
              })
              .strategy(VisSense.Helpers.createPercentageTimeTestEventStrategy('ptt100/3', {
                percentageLimit: 1,
                timeLimit: 3000,
                interval: 300
              }))
              .on('ptt100/3', function(data) {
                console.log(elementId, ' successfully finished 100/3 Test!');
                console.table(data);
              })
              .strategy(VisSense.Helpers.createTimeReportEventStrategy('time-summary'))
              .on('time-summary', function(timeReport) {
                console.log(elementId, 'observation lastet ' + timeReport.duration + 'ms');
              })
              .strategy(VisSense.Helpers.newInitialStateEventStrategy('initial-state'))
              .on('initial-state', function(state) {
                console.log(elementId, '\'s initial state is', state.state);
              })
              .build(function(monitorByBuilder) {
                monitors.push(monitorByBuilder);
              });

            /*
            var piwikMonitor = VisSense.Client.Piwik(window._paq || [])
              .monitors({
                projectId: elementId
              }).custom(visobj, {
                strategy: [
                  new VisSense.VisMon.Strategy.UserActivityStrategy({
                    inactiveAfter: $scope.model.inactiveAfter
                  }),
                  new VisSense.VisMon.Strategy.PollingStrategy({interval: 1000}),
                  new VisSense.VisMon.Strategy.EventStrategy({debounce: 30})
                ]
              });

            monitors.push(piwikMonitor);
             */
            /*
            var googleMonitor = VisSense.Client.Google(window.ga || function () {
            })
              .monitors({
                projectId: elementId
              }).custom(visobj, {
                strategy: [
                  new VisSense.VisMon.Strategy.UserActivityStrategy({
                    inactiveAfter: $scope.model.inactiveAfter
                  }),
                  new VisSense.VisMon.Strategy.PollingStrategy({interval: 1000}),
                  new VisSense.VisMon.Strategy.EventStrategy({debounce: 30})
                ]
              });

            monitors.push(googleMonitor);
            */
            /*


            var segmentIoMonitor = VisSense.Client.SegmentIO(window.analytics || {
              track: function (event, data) {
                console.log('No client available for event ', event, data);
              }
            })
              .monitors({
                projectId: elementId
              }).custom(visobj, {
                strategy: [
                  new VisSense.VisMon.Strategy.UserActivityStrategy({
                    inactiveAfter: $scope.model.inactiveAfter
                  }),
                  new VisSense.VisMon.Strategy.PollingStrategy({interval: 1000}),
                  new VisSense.VisMon.Strategy.EventStrategy({debounce: 30})
                ]
              });

            monitors.push(segmentIoMonitor);
            */
          });

          VisUtils.forEach(monitors, function (monitor) {
            monitor.start();
          });

          var cancelAutoStop = startCountdown();
          stop = function () {
            cancelAutoStop();

            VisUtils.forEach(monitors, function (monitor) {
              monitor.stop();
            });

            $scope.model.running = false;
          };
        };

        $scope.start = function (elementId) {
          start(elementId);
        };

        $scope.stop = function () {
          stop();
        };

        $scope.$on('$destroy', function () {
          stop();
        });
      }])
  ;
})(window, angular);
