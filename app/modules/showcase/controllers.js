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

            var simpleLoggingStandardMonitor =
              VisSense.Client.Simple().monitorsWithLoggingClient().custom(visobj, {
                interval: 1000,
                throttle: 100,
                inactiveAfter: $scope.model.inactiveAfter
              });

            monitors.push(simpleLoggingStandardMonitor);

            var vishyMonitor = VisSense.Client.Vishy(tbkVishyConfig, $http)
              .monitors({
                projectId: elementId
              }).custom(visobj, {
                interval: 1000,
                throttle: 100,
                inactiveAfter: $scope.model.inactiveAfter
              });

            monitors.push(vishyMonitor);
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

            /************** SegmentIo Client
             var segmentIoClient = window.analytics || {
                track: function (event, data) {
                  console.log('No client available for event ', event, data);
                }
              };

             var decoratedSegmentIoClient = {
              track: function (event, data) {
                console.log('addEvent via segmentio-client', event);

                var _data = VisUtils.extend(data, {
                  projectId: elementId
                });
                segmentIoClient.track(event, _data);
              }
            };

             var simpleSegmentIoClientMonitor = VisSense.Client.SegmentIO(decoratedSegmentIoClient)
             .monitors()
             .custom(visobj, {
                interval: 1000,
                throttle: 100,
                inactiveAfter: $scope.model.inactiveAfter
              });

             monitors.push(simpleSegmentIoClientMonitor); */

            /************** SegmentIo Client End */


            /************** Piwik Client
             var piwikClient = window._paq || [];

             var simplePiwikClientMonitor = VisSense.Client.Piwik(piwikClient).monitors({
              projectId: elementId
            })
             .custom(visobj, {
              interval: 1000,
              throttle: 100,
              inactiveAfter: $scope.model.inactiveAfter
            });

             monitors.push(simplePiwikClientMonitor); */

            /************** Google Analytics Client
             var googleMonitor = VisSense.Client.Google(window.ga || function () {
            })
             .monitors({
                projectId: elementId
              })
             .custom(visobj, {
                interval: 1000,
                throttle: 100,
                inactiveAfter: $scope.model.inactiveAfter
              });

             monitors.push(googleMonitor);
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
