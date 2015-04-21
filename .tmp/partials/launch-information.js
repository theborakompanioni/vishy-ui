(function(module) {
try {
  module = angular.module('tbk.vishy-ui');
} catch (e) {
  module = angular.module('tbk.vishy-ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/launch-information.html',
    '<style>\n' +
    '  .launch-info {\n' +
    '    margin-top: 13px;\n' +
    '    text-align: center;\n' +
    '    font-size: 2em;\n' +
    '    opacity: 0.66;\n' +
    '  }\n' +
    '\n' +
    '  .launch-info h2 {\n' +
    '    font-size: 1.8em;\n' +
    '  }\n' +
    '\n' +
    '  ul.features li {\n' +
    '    color: #333;\n' +
    '    width: 230px;\n' +
    '    font-size: 1em;\n' +
    '    font-weight: 300;\n' +
    '    padding: 10px 20px 10px 20px;\n' +
    '  }\n' +
    '\n' +
    '  ul.features li a {\n' +
    '    color: #333;\n' +
    '  }\n' +
    '\n' +
    '  ul.features .fa {\n' +
    '    display: block;\n' +
    '    font-size: 2.75em;\n' +
    '  }\n' +
    '\n' +
    '  ul.features .fa.inline-bock {\n' +
    '    display: inline-block;\n' +
    '  }\n' +
    '</style><div class="container"><div data-tbk-vishy-bubbles-animation=""></div><div class="well launch-info"><h2><strong>Vis</strong>hy</h2><p style="margin-bottom: 33px;">launches in<br><span data-tbk-readable-time-countdown="" data-start="1440000000000" data-min-unit="second" data-interval="1000"></span></p><div><ul class="features list-inline list-unstyled"><li><i class="fa fa-users"></i> <a data-ui-sref="showcase.home">Showcase</a></li><li><i class="fa fa-tachometer"></i> <a data-ui-sref="dashboard.home">Dashboard</a></li><li><span style="display: block;"><i class="fa fa-desktop inline-bock"></i> <i class="fa fa-mobile inline-bock"></i></span> <a data-ui-sref="showcase.home">Demos</a></li><li><i class="fa fa-github"></i> <a data-ui-sref="showcase.home">Github</a></li></ul></div></div></div>');
}]);
})();
