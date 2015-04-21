(function(module) {
try {
  module = angular.module('tbk.vishy-ui');
} catch (e) {
  module = angular.module('tbk.vishy-ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/modules/report/home.html',
    '<div class="container"><h3><strong>Vis</strong>hy Report</h3><p class="lead">Lorem ipsum</p></div>');
}]);
})();
