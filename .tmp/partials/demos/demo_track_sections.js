(function(module) {
try {
  module = angular.module('tbk.vishy-ui');
} catch (e) {
  module = angular.module('tbk.vishy-ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/demos/demo_track_sections.html',
    '<section data-tbk-default-demo-navigation=""></section><style>\n' +
    '\n' +
    '  .section-stats-container {\n' +
    '    margin: 0px;\n' +
    '    padding: 9px;\n' +
    '    position: fixed;\n' +
    '    left: 42px;\n' +
    '    bottom: 13px;\n' +
    '    width: 600px;\n' +
    '    height: 140px;\n' +
    '    box-shadow: 3px 3px 15px 3px rgba(0, 0, 0, 0.4);\n' +
    '    z-index: 99999;\n' +
    '    background-color: rgba(242,242,242,0.9);\n' +
    '   }\n' +
    '</style><header class="container"><h2>[Demo] Track Section Demo</h2></header><div class="section-stats-container"><ul><li><a data-ng-click="scrollToElement(\'examples-section\')">section 1</a> <span data-vissense-state="examples-section"></span></li><li><a data-ng-click="scrollToElement(\'demo-section\')">section 2</a> <span data-vissense-state="demo-section"></span></li><li><a data-ng-click="scrollToElement(\'plugins-section\')">section 3</a> <span data-vissense-state="plugins-section"></span></li></ul></div><div class=""><div class="code-sample"><div class="highlight-module highlight-module--left highlight-module--learning" id="examples-section"><div class="highlight-module__container"><div class="pull-left" style="font-size: 150px; padding: 30px;"><span class="fa fa-eye"></span></div><div class="highlight-module__content g-wide--push-1 g-wide--pull-1 g-medium--push-1"><h2 class="highlight-module__title">1 Track visibility</h2><p class="highlight-module__text">immediately know when an element becomes hidden, partly visible or fully visible.</p></div></div></div></div><div class="code-sample"><div class="highlight-module highlight-module--right highlight-module--remember" id="demo-section"><div class="highlight-module__container row"><div class="pull-right" style="font-size: 150px; padding: 30px;"><span class="fa fa-paw"></span></div><div class="highlight-module__content g-wide--push-1 g-wide--pull-1 g-medium--pull-1"><h2 class="highlight-module__title">2 Observe changes</h2><p class="highlight-module__text">react on visibility changes and execute proper actions.</p></div></div></div></div><div class="code-sample"><div class="highlight-module highlight-module--left highlight-module--learning" id="plugins-section"><div class="highlight-module__container"><div class="pull-left" style="font-size: 150px; padding: 30px;"><span class="fa fa-puzzle-piece"></span></div><div class="highlight-module__content g-wide--push-1 g-wide--pull-1 g-medium--pull-1"><h2 class="highlight-module__title">3 Create extensions</h2><p class="highlight-module__text">vissense.js can be extended. checkout existing plugins or create your own extension - it\'s supereasy.</p></div></div></div></div></div><h3>Code</h3>This examples uses jQuery to fade in the sections.<pre data-tbk-code-prettify="">\n' +
    'var startOpacityMonitor = function(elementId) {\n' +
    '  var sectionElement = jQuery(\'#\' + elementId);\n' +
    '  var sectionMonitor = VisSense(sectionElement[0]).monitor({\n' +
    '    // update when user scrolls or resizes the page\n' +
    '    strategy : VisSense.VisMon.Strategy.EventStrategy({ debounce: 100 }),\n' +
    '\n' +
    '    percentagechange: function(newValue, oldValue) {\n' +
    '      var difference = newValue - oldValue;\n' +
    '      var duration = 500 * Math.max(difference, 0.5);\n' +
    '      var opacity = Math.max(newValue, 0.25);\n' +
    '      sectionElement.fadeTo(duration, opacity);\n' +
    '    }\n' +
    '  }).start();\n' +
    '\n' +
    '  return function stopOpacityMonitor() {\n' +
    '    sectionMonitor.stop();\n' +
    '  };\n' +
    '};\n' +
    '\n' +
    'var stop = startOpacityMonitor(\'examples-section\');\n' +
    '\n' +
    '...\n' +
    '\n' +
    'if (/* user leaves the page, etc. */) {\n' +
    '  stop();\n' +
    '}\n' +
    '\n' +
    '\n' +
    '</pre><br data-ng-repeat="i in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]">');
}]);
})();
