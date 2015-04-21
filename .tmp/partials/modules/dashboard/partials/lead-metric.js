(function(module) {
try {
  module = angular.module('tbk.vishy-ui');
} catch (e) {
  module = angular.module('tbk.vishy-ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/modules/dashboard/partials/lead-metric.html',
    '<div class="panel {{panelClass}}"><div class="panel-heading"><div class="row"><div class="col-xs-3"><i class="fa {{icon}} fa-5x"></i></div><div class="col-xs-9 text-right"><div data-ng-transclude=""></div></div></div></div></div>');
}]);
})();
