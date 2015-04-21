(function(module) {
try {
  module = angular.module('tbk.vishy-ui');
} catch (e) {
  module = angular.module('tbk.vishy-ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/demos/demo_fire_callbacks.html',
    '<section data-tbk-default-demo-navigation=""></section><style>\n' +
    '  .log-container {\n' +
    '    font-size: 0.8em;\n' +
    '\n' +
    '    height: 400px;\n' +
    '    margin-bottom: 30px;\n' +
    '\n' +
    '    overflow-y: scroll;\n' +
    '  }\n' +
    '\n' +
    '  .log {\n' +
    '    padding: 5px;\n' +
    '    margin-bottom: 3px;\n' +
    '  }\n' +
    '\n' +
    '</style><header class="container"><h2>[Demo] Fire Callbacks Demo</h2></header><section class="styleguide__editorial-header"><div class="editorial-header"><div class="container"><p class="editorial-header__excerpt g-wide--pull-1">This demo demonstrates the events fired during monitoring a target elements visibility.</p><p class="g-wide--pull-1">Move the element around to update the table content with triggered events. Notice the behaviour of the "visible" event - it will always be triggered when transitioning from "hidden" but it wont fire when changing from "fullyvisible" to "visible" (while instead a "visibilitychange" event will be triggered).</p></div></div></section><div class="container" id="draggable-example-container"><div class=""><div class="log-container" style="margin-top: 26px;"><table class="table-3" style="margin-top: 0;"><thead><tr><th>time</th><th>event</th><th>description</th></tr></thead><tbody><tr data-ng-repeat="event in model.events | reverse" class="log alert" data-ng-class="{ \'color--danger\': event.name == \'hidden\', \'color--green\': event.name == \'fullyvisible\', \'color--yellow\': event.name == \'visible\', \'color--highlight\': event.name == \'visibilitychange\', \'color--learning\': event.name == \'percentagechange\' }"><td class="pull-right"><i class="fa fa-clock-o"></i> {{event.time | date:\'MMM d, y h:mm:ss.sss a\'}}</td><td>{{event.name}}</td><td>{{event.description}}</td></tr></tbody></table></div><div style="margin-bottom: 20px;"><div id="example1" class="default-draggable-element" data-tbk-draggable="" data-vissense-monitor="" on-visibilitychange="addEvent(\'visibilitychange\', \'Element became hidden\')" on-percentagechange="addPercentageEvent(newValue, oldValue)" on-hidden="addEvent(\'hidden\', \'Element became hidden\')" on-visible="addEvent(\'visible\', \'Element became visible\')" on-fullyvisible="addEvent(\'fullyvisible\', \'Element became fully visible\')"><div tbk-default-draggable-element="example1"></div></div></div></div><h3>Code</h3><pre data-tbk-code-prettify="">\n' +
    'var element = document.getElementById(\'example1\');\n' +
    'var visobj = new VisSense(element);\n' +
    '\n' +
    'var vismon = visobj.monitor({\n' +
    '  strategy: new VisSense.VisMon.Strategy.PollingStrategy(1000),\n' +
    '  fullyvisible: function() { ... },\n' +
    '  hidden: function() { ... },\n' +
    '  visible: function() { ... },\n' +
    '  update: function() { ... },\n' +
    '  percentagechange: function(newValue, oldValue) { ... },\n' +
    '  visibilitychange: function() { ... }\n' +
    '}).start();\n' +
    '</pre><div data-ng-repeat="i in [1,2,3,4,5,6]" style="height: 100px;"></div></div>');
}]);
})();
