(function(module) {
try {
  module = angular.module('tbk.vishy-ui');
} catch (e) {
  module = angular.module('tbk.vishy-ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/modules/dashboard/sections/overview/geolocation.html',
    '<div class="row"><div class="col-sm-4"><div class="chart-wrapper"><div class="chart-title">Geolocation (absolute)</div><div class="chart-stage"><div><div tbk-vishy-geolocation-table="" style="min-height: 100px"></div></div></div><div class="chart-notes">Absolute count of requests grouped by locale settings.</div></div></div><div class="col-sm-8"><div class="chart-wrapper"><div class="chart-title">Geolocation (relative)</div><div class="chart-stage"><div tbk-vishy-geolocation-piechart="">Here should be a chart.</div></div><div class="chart-notes">Relative count of requests grouped by locale settings.</div></div></div></div>');
}]);
})();
