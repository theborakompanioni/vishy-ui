(function(module) {
try {
  module = angular.module('tbk.vishy-ui');
} catch (e) {
  module = angular.module('tbk.vishy-ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/modules/dashboard/sections/time-report/browser.html',
    '<div class="row"><div class="col-sm-12"><div class="chart-wrapper"><div class="chart-title">Average Time Visible By Browser</div><div class="chart-stage"><div tbk-vishy-default-areachart="" data-interval="hourly" data-timeframe="today" data-group-by="browser.name" data-target-property="report.timeVisible" data-event-collection="visibility-time-report" data-analysis-type="average"></div></div><div class="chart-notes">The average time the element was visible grouped by browser.</div></div></div></div><div class="row"><div class="col-sm-12"><div class="chart-wrapper"><div class="chart-title">Median Time Visible By Browser</div><div class="chart-stage"><div tbk-vishy-default-areachart="" data-interval="hourly" data-timeframe="today" data-group-by="browser.name" data-target-property="report.timeVisible" data-event-collection="visibility-time-report" data-analysis-type="median"></div></div><div class="chart-notes">The median time the element was visible grouped by browser.</div></div></div></div>');
}]);
})();
