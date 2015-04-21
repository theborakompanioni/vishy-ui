(function(module) {
try {
  module = angular.module('tbk.vishy-ui');
} catch (e) {
  module = angular.module('tbk.vishy-ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/demos/demo_draggable_element.html',
    '<section data-tbk-default-demo-navigation=""></section><header class="container"><h2>[Demo] Draggable Element Demo</h2></header><section class="styleguide__editorial-header"><div class="editorial-header"><div class="container"><p class="editorial-header__excerpt g-wide--pull-1">This demo lets you drag an element around the screen to explore the main features of VisSense.js, which essentially are measuring the state of the element and the percentage of the surface area within the visible area of a viewer\'s browser window on an in focus web page.</p><p class="g-wide--pull-1">In this example the element is considered "hidden" if its surface area is less than 10% and "fullyvisibile" if it is more than 90%. See the code below.</p></div></div></section><div class="container" id="draggable-example-container"><table class="table-2" style="margin-bottom: 30px;"><colgroup><col span="1"><col span="1"></colgroup><thead><tr><th>state</th><th>percentage</th></tr></thead><tbody><tr><td><span data-vissense-state="myElement" data-fullyvisible="0.9" data-hidden="0.1"></span></td><td><span data-vissense-percentage="myElement"></span></td></tr></tbody></table><div id="myElement" class="default-draggable-element" data-tbk-draggable=""><div tbk-default-draggable-element="myElement"></div></div><h3>state()</h3><section class="styleguide__editorial-header"><div class="editorial-header"><div class="container"><p class="g-wide--pull-1">Drag the element around to see the <code>state</code> property change its value.</p></div></div></section><pre data-vissense-state-debug="myElement"></pre><h3>Code</h3><pre data-tbk-code-prettify="">\n' +
    'var element = document.getElementById(\'myElement\');\n' +
    'var visobj = VisSense(element, {\n' +
    '  hidden: 0.1,\n' +
    '  fullyvisible: 0.9\n' +
    '});\n' +
    '\n' +
    'var vismon = visobj.monitor({\n' +
    '  strategy: new VisSense.VisMon.Strategy.PollingStrategy()\n' +
    '}).start();\n' +
    '\n' +
    'vismon.state();\n' +
    '  </pre><br data-ng-repeat="i in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]"></div>');
}]);
})();
