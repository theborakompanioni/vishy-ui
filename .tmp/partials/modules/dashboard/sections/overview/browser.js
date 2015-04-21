(function(module) {
try {
  module = angular.module('tbk.vishy-ui');
} catch (e) {
  module = angular.module('tbk.vishy-ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/modules/dashboard/sections/overview/browser.html',
    '<div class="row"><div class="col-sm-8"><div class="chart-wrapper"><div class="chart-title">Requests by Browser (hourly)</div><div class="chart-stage"><div tbk-vishy-browser-hourly-areachart="">Here should be an areachart.</div></div><div class="chart-notes">This is a sample text region to describe this chart.</div></div></div><div class="col-sm-4"><div class="chart-wrapper"><div class="chart-title">Requests by Browser</div><div class="chart-stage"><div tbk-vishy-default-piechart="" data-group-by="browser.name">Here should be a chart.</div></div><div class="chart-notes">Notes go down here</div></div></div></div><div class="row"><div class="col-sm-4"><div class="chart-wrapper"><div class="chart-title">Initial Requests by Browser (monthly)</div><div class="chart-stage"><div tbk-vishy-initial-browser-monthly-columnchart="">Here should be a chart.</div></div><div class="chart-notes">Notes go down here</div></div></div><div class="col-sm-4"><div class="chart-wrapper"><div class="chart-title">Initial Requests by Browser (daily)</div><div class="chart-stage"><div tbk-vishy-initial-browser-daily-columnchart="">Here should be a chart.</div></div><div class="chart-notes">Notes go down here</div></div></div><div class="col-sm-4"><div class="chart-wrapper"><div class="chart-title">Initial Requests by Browser (hourly)</div><div class="chart-stage"><div tbk-vishy-initial-browser-hourly-columnchart="">Here should be a chart.</div></div><div class="chart-notes">Notes go down here</div></div></div></div>');
}]);
})();
