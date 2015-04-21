(function(module) {
try {
  module = angular.module('tbk.vishy-ui');
} catch (e) {
  module = angular.module('tbk.vishy-ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/modules/dashboard/sections/percentage-time-test/raw-data.html',
    '<div class="row"><div class="col-sm-12"><div class="chart-wrapper"><div class="chart-title">Raw Data</div><div class="chart-stage"><div><div tbk-vishy-visibility-percentage-time-test-raw-data-table=""></div></div></div><div class="chart-notes">This is the raw data of received visibility percentage time test events.</div></div></div></div>');
}]);
})();
