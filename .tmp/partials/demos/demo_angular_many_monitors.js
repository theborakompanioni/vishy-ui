(function(module) {
try {
  module = angular.module('tbk.vishy-ui');
} catch (e) {
  module = angular.module('tbk.vishy-ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/demos/demo_angular_many_monitors.html',
    '<section data-tbk-default-demo-navigation=""></section><header class="container"><h2>[Demo] Angular Directives: vissense-monitor</h2></header><style>\n' +
    '  input#many-monitors-count {\n' +
    '    padding: 13px;\n' +
    '    min-width: 330px;\n' +
    '    margin: 3px;\n' +
    '    font-size: 2em;\n' +
    '  }\n' +
    '\n' +
    '  .vissense-monitor {\n' +
    '    margin: 10px;\n' +
    '    padding: 10px;\n' +
    '    height: 100px;\n' +
    '    width: 100px;\n' +
    '    float: left;\n' +
    '\n' +
    '    border: 1px solid #333;\n' +
    '  }\n' +
    '\n' +
    '  .vissense-monitor-hidden {\n' +
    '    background-color: red;\n' +
    '  }\n' +
    '\n' +
    '  .vissense-monitor-visible {\n' +
    '    background-color: orange;\n' +
    '  }\n' +
    '\n' +
    '  .vissense-monitor-fullyvisible {\n' +
    '    background-color: green;\n' +
    '  }\n' +
    '\n' +
    '</style><section class="styleguide__editorial-header"><div class="editorial-header"><div class="container"><p class="editorial-header__excerpt">This pages demonstrates the dynamic observation of volatile elements. You can create and destroy monitor instances with the input form below. Take a look at the console while playing with the value and/or scrolling around.</p></div></div></section><div class="container" id="draggable-example-container" style="margin-top: 30px;"><div class="clearfix"><form><label for="many-monitors-count">Active monitors:</label> <input id="many-monitors-count" class="" type="number" data-ng-model="model.monitorCount" min="1" max="{{model.monitorCountMax}}" data-ng-max="{{model.monitorCountMax}}"></form><div class="monitor-container" data-ng-repeat="i in [] | range:model.monitorCount"><div vissense-monitor="" on-fullyvisible="model.logEvent(\'fullyvisible\')" on-visible="model.logEvent(\'visible\')" on-hidden="model.logEvent(\'hidden\')"></div></div></div><br data-ng-repeat="i in [] | range:5"><div class="container"><h3>Code</h3><section class="styleguide__editorial-header"><div class="editorial-header"><div class="container"><p class="editorial-header__excerpt">The following example is made with <a href="https://github.com/vissense/angular-vissense">angular-vissense</a> - but is also quite simple to recreate with or without any other framework.</p></div></div><h4>html</h4><pre data-tbk-code-prettify="" data-lang="html">\n' +
    '&lt;form&gt;\n' +
    '  &lt;label>Amount: &lt;/label&gt;\n' +
    '  &lt;input type="number" data-ng-model="model.monitorCount" min="1" max="200"&gt;\n' +
    '&lt;/form&gt;\n' +
    '\n' +
    '&lt;div class="monitor-container" data-ng-repeat="i in [] | range:model.monitorCount"&gt;\n' +
    '  &lt;div vissense-monitor\n' +
    '       on-fullyvisible="model.logEvent(\'fullyvisible\')"\n' +
    '       on-visible="model.logEvent(\'visible\')"\n' +
    '       on-hidden="model.logEvent(\'hidden\')"&gt;\n' +
    '  &lt;/div&gt;\n' +
    '&lt;/div&gt;\n' +
    '</pre><h4>controller</h4><pre data-tbk-code-prettify="">\n' +
    'module.controller(\'ManyMonitorsDemoCtrl\', [\'$scope\',\'$log\',\n' +
    'function ($scope, $log) {\n' +
    '  $scope.model = {\n' +
    '    monitorCount: 42\n' +
    '  };\n' +
    '\n' +
    '  $scope.model.logEvent = function(description) {\n' +
    '    $log.info(description);\n' +
    '  };\n' +
    '}]);\n' +
    '</pre></section></div></div>');
}]);
})();
