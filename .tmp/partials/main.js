(function(module) {
try {
  module = angular.module('tbk.vishy-ui');
} catch (e) {
  module = angular.module('tbk.vishy-ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/main.html',
    '<style>\n' +
    '  .main-info {\n' +
    '    margin-top: 13px;\n' +
    '    text-align: center;\n' +
    '    /*opacity: 0.9; <- this destroys the z-index: if active #myElement is not over navbar anymore. */\n' +
    '  }\n' +
    '\n' +
    '  .main-info h2 {\n' +
    '    font-size: 2.5em;\n' +
    '  }\n' +
    '\n' +
    '  #main-showcase #myElement {\n' +
    '    font-size: 1.5em;\n' +
    '    border: 3px solid #333;\n' +
    '    border-radius: 25px;\n' +
    '    position: relative;\n' +
    '    background-color: #e5e5e5;\n' +
    '    cursor: pointer;\n' +
    '    padding: 40px;\n' +
    '    width: 300px;\n' +
    '    margin: 0 auto;\n' +
    '    z-index: 99999;\n' +
    '    opacity: 0.77;\n' +
    '  }\n' +
    '\n' +
    '  #main-showcase .vissense-metrics-container {\n' +
    '    font-size: 10px;\n' +
    '    margin: 0px;\n' +
    '    position: fixed;\n' +
    '    right: 42px;\n' +
    '    bottom: 13px;\n' +
    '    width: 500px;\n' +
    '    height: 130px;\n' +
    '    z-index: 99999;\n' +
    '    background-color: rgba(242, 242, 242, 0.9);\n' +
    '  }\n' +
    '\n' +
    '  #main-showcase .vissense-metrics-container .vissense-flexbox .box {\n' +
    '    font-size: 12px;\n' +
    '    padding: 6px;\n' +
    '    width: 120px;\n' +
    '    text-align: center;\n' +
    '  }\n' +
    '\n' +
    '  .visible-xs .vissense-metrics-container,\n' +
    '  .visible-sm .vissense-metrics-container {\n' +
    '    margin-top: 30px;\n' +
    '    z-index: 1;\n' +
    '    min-width: 600px;\n' +
    '\n' +
    '    position: relative !important;\n' +
    '    left: initial !important;\n' +
    '    bottom: initial !important;\n' +
    '    width: initial !important;\n' +
    '    height: initial !important;\n' +
    '  }\n' +
    '</style><div class="container"><div data-tbk-vishy-bubbles-animation=""></div><div class="main-info" data-ng-controller="ShowcaseCtrl"><h2>This element <span data-ng-hide="model.running">will be</span> <span data-ng-show="model.running">is being</span> <strong>monitored</strong>.</h2><p style="text-align: center;">See the <a data-ui-sref="showcase.home">Showcase</a> for more information.</p><p style="margin-bottom: 33px;"></p><div id="main-showcase"><div style="text-align: center; margin: 20px 0 30px 0;"><button class="btn btn-primary btn-lg" data-ng-click="start([\'myElement\']);" data-ng-hide="model.running">Start recording</button> <button class="btn btn-danger btn-lg" data-ng-click="stop();" data-ng-show="model.running">Stop recording (auto-stop in {{model.autoStopCountdown}}s)</button></div><div id="myElement" data-tbk-draggable=""><div vishy-showcase-default-draggable-element="myElement"></div></div><div data-ng-if="model.running"><div class="visible-xs visible-sm" data-vissense-metrics-infocard="myElement" data-inactive-after="{{model.inactiveAfter}}" data-hidden="{{model.hidden}}"></div><div class="visible-md visible-lg" data-vissense-metrics-infocard="myElement" data-inactive-after="{{model.inactiveAfter}}" data-hidden="{{model.hidden}}"></div></div></div></div></div>');
}]);
})();
