(function(module) {
try {
  module = angular.module('tbk.vishy-ui');
} catch (e) {
  module = angular.module('tbk.vishy-ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/modules/dashboard/sections/time-report.html',
    '<div class="row"><div class="col-sm-3"><h4>Time Reports</h4><ul class="nav nav-pills nav-stacked"><li data-ui-sref-active="active"><a data-ui-sref="dashboard.timeReport.home"><i class="fa fa-fw fa-line-chart"></i> Overview</a></li><li data-ui-sref-active="active"><a data-ui-sref="dashboard.timeReport.percentiles"><i class="fa fa-fw fa-bar-chart-o"></i> Percentiles</a></li><li data-ui-sref-active="active"><a data-ui-sref="dashboard.timeReport.browser"><i class="fa fa-fw fa-pie-chart"></i> Browser</a></li><li data-ui-sref-active="active"><a data-ui-sref="dashboard.timeReport.rawData"><i class="fa fa-fw fa-database"></i> Raw Data</a></li></ul></div><div class="col-sm-9"><ui-view></ui-view></div></div>');
}]);
})();
