(function(module) {
try {
  module = angular.module('tbk.vishy-ui');
} catch (e) {
  module = angular.module('tbk.vishy-ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/modules/dashboard/sections/percentage-time-test/directives/tbk-vishy-percentage-time-test-percentile-metric-chart.html',
    '<div class="chart-wrapper"><div class="chart-title">{{percentageLimit*100}}/{{timeLimit / 1000 | number:0}} Test Duration {{percentile}}% Percentile</div><div class="chart-stage"><div tbk-keen-default-metric="" data-analysis-type="percentile" data-event-collection="visibility-percentage-time-test" data-target-property="{{targetProperty}}" data-query-options="queryOptions" data-filter="tbkReadableTime">Here should be a metric.</div></div><div class="chart-notes">This means that {{100-percentile}}% of the time the element had passed the test after this value.</div></div>');
}]);
})();
