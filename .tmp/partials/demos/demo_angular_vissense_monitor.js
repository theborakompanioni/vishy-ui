(function(module) {
try {
  module = angular.module('tbk.vishy-ui');
} catch (e) {
  module = angular.module('tbk.vishy-ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/demos/demo_angular_vissense_monitor.html',
    '<section data-tbk-default-demo-navigation=""></section><header class="container"><h2>[Demo] Angular Directives Demo</h2></header><div class="container" id="draggable-example-container" style="margin-top: 30px;"><style>\n' +
    '#alert-container {\n' +
    '  z-index: 999;\n' +
    '  position: fixed;\n' +
    '  right: 10px;\n' +
    '  top:10px;\n' +
    '  width: 380px;\n' +
    '  font-size: 0.8em;\n' +
    '}\n' +
    '#alert-container .alert {\n' +
    '  margin: 10px;\n' +
    '  padding: 3px;\n' +
    '  box-shadow: 1px 1px 8px 2px rgba(0, 0, 0, 0.4);\n' +
    '  background-color: rgba(242,242,242,0.9);\n' +
    '}\n' +
    '</style><div id="alert-container"><div class="alert" data-ng-repeat="event in model.events | reverse" data-ng-class="{ \'color--danger\': event.name == \'hidden\', \'color--green\': event.name == \'fullyvisible\', \'color--yellow\': event.name == \'visible\', \'color--highlight\': event.name == \'visibilitychange\', \'color--learning\': event.name == \'percentagechange\' }"><div><i class="fa fa-clock-o"></i> {{event.time | date:\'MMM d, y h:mm:ss.sss a\'}}</div><div>{{event.name}}</div><div>{{event.description}}</div></div></div><div id="example1" class="default-draggable-element" data-tbk-draggable="" data-vissense-monitor="" on-visibilitychange="addEvent(\'visibilitychange\', \'Element became hidden\')" on-percentagechange="addPercentageEvent(newValue, oldValue)" on-hidden="addEvent(\'hidden\', \'Element became hidden\')" on-visible="addEvent(\'visible\', \'Element became visible\')" on-fullyvisible="addEvent(\'fullyvisible\', \'Element became fully visible\')"><div tbk-default-draggable-element="example1"></div></div><div class="lorem-ipsum"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.</p></div><h3>Code</h3><pre data-tbk-code-prettify="" data-lang="html">\n' +
    '&lt;div data-vissense-monitor\n' +
    '   on-visibilitychange="addEvent(\'visibilitychange\', \'Element became hidden\')"\n' +
    '   on-percentagechange="addPercentageEvent(newValue, oldValue)"\n' +
    '   on-hidden="addEvent(\'hidden\', \'Element became hidden\')"\n' +
    '   on-visible="addEvent(\'visible\', \'Element became visible\')"\n' +
    '   on-fullyvisible="addEvent(\'fullyvisible\', \'Element became fully visible\')"&gt;\n' +
    '  ...\n' +
    '&lt;/div&gt;\n' +
    '</pre><br data-ng-repeat="i in [1,2,3,4,5,6,7,8,9,10,11,12,13]"></div>');
}]);
})();
