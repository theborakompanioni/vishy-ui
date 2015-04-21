(function(module) {
try {
  module = angular.module('tbk.vishy-ui');
} catch (e) {
  module = angular.module('tbk.vishy-ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/demos/demo_percentage_time_test.html',
    '<section data-tbk-default-demo-navigation=""></section><header class="container"><h2>[Demo] Percentage Time Tests</h2></header><section class="styleguide__editorial-header"><div class="editorial-header"><div class="container"><p class="editorial-header__excerpt g-wide--pull-1">Percentage time tests inform you when an element has passed a viewability test. The 60/1-Test for example is passed only if at least 60% of the elements surface area is within the visible area of a viewer\'s browser window on an in focus web page for at least one second.</p><p class="g-wide--pull-1">A percentage time test will start once the target element becomes visible the first and time and restarts if the percentage falls below the percentage limit and the test has not been passed yet.</p></div></div></section><div class="container" id="draggable-example-container"><table class="table-5" style="margin-bottom: 30px;"><colgroup><col span="1"><col span="1"><col span="1"><col span="1"><col span="1"></colgroup><thead><tr><th>percentage</th><th>50/1 Test</th><th>60/1 Test</th><th>66/3 Test *</th><th>100/10 Test **</th></tr></thead><tbody><tr><td><span data-vissense-percentage="myElement"></span></td><td><span data-vissense-fifty-one-test="myElement"></span></td><td><span data-vissense-sixty-one-test="myElement"></span></td><td><span data-vissense-percentage-time-test="myElement" data-percentage-limit="0.66" ,="" data-time-limit="3000" data-interval="100"></span></td><td><span data-vissense-percentage-time-test="myElement" data-percentage-limit="1" ,="" data-time-limit="10000" data-interval="100"></span></td></tr></tbody></table><div id="myElement" class="default-draggable-element" data-tbk-draggable=""><div tbk-default-draggable-element="myElement"></div></div><section class="styleguide__editorial-header"><div class="editorial-header"><div class="container"><p class=""><small>* 66/3 Test: At least 66% visible for 3 seconds.</small><br><small>** 100/10 Test: Fully visible for 10 seconds.</small><br></p></div></div></section><h3>Code</h3><pre data-tbk-code-prettify="">\n' +
    'var element = document.getElementById(\'myElement\');\n' +
    'var visobj = VisSense(element);\n' +
    '\n' +
    '// 50/1 test\n' +
    'visobj.onPercentageTimeTestPassed(function() {\n' +
    '  ...\n' +
    '}, {\n' +
    '  percentageLimit: 0.5,\n' +
    '  timeLimit: 1000,\n' +
    '  interval: 100\n' +
    '});\n' +
    '\n' +
    '// 100/10 test\n' +
    'visobj.onPercentageTimeTestPassed(function() {\n' +
    '  ...\n' +
    '}, {\n' +
    '  percentageLimit: 1,\n' +
    '  timeLimit: 10000,\n' +
    '  interval: 100\n' +
    '});\n' +
    '</pre><br data-ng-repeat="i in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]"></div>');
}]);
})();
