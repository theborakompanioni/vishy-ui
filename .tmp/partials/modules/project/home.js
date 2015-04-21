(function(module) {
try {
  module = angular.module('tbk.vishy-ui');
} catch (e) {
  module = angular.module('tbk.vishy-ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/modules/project/home.html',
    '<div class="container"><h3><strong>Vis</strong>hy Projects</h3><p class="lead">Lorem ipsum</p><div class="row"><div class="col-sm-12"><div class="panel panel-default"><div class="panel-heading">Projects <span data-ng-show="model.projectIds == null"><i class="fa fa-circle-o-notch fa-spin"></i></span></div><table class="table table-hover table-striped table-condensed" data-ng-show="model.projectIds.length > 0"><thead><tr><th></th><th>Project</th><th>Percentage Visible</th><th>Time Visible</th><th>Time Fully Visible</th><th>Average Initial Percentage</th><th></th></tr></thead><tbody><tr data-ng-repeat="project in model.projects"><td data-ng-click="toggleSelection(project)"><button class="btn btn-large"><i class="fa fa-check-square" data-ng-show="project.selected"></i> <i class="fa fa-square-o" data-ng-hide="project.selected"></i></button></td><td>{{ project.id }}</td><td><span data-ng-bind="project.passedPercentageTimeTestCount / project.initialRequestCount * 100 | number: 1"></span></td><td><span data-ng-bind="project.timeVisibleAverage / 1000 | number: 1"></span></td><td><span data-ng-bind="project.timeFullyVisibleAverage / 1000 | number: 1"></span></td><td><span data-ng-bind="project.initialPercentageAverage * 100 | number: 1"></span></td><td><ul class="list-unstyled list-inline"><li><a data-ui-sref="dashboard.home">Dashboard</a></li><li><a data-ui-sref="report.home">Report</a></li></ul></td></tr></tbody></table><div class="panel-footer"><div class="alert alert-info" data-ng-show="model.projectIds.length == 0">No projects found.</div></div></div></div></div><div class="row" data-ng-if="model.selectedProjectIds.length > 1"><div class="col-sm-6"><div class="panel panel-default"><div class="panel-heading">Visible Time <small class="text-muted">Average</small></div><div tbk-vishy-project-compare-piechart="" data-analysis-type="average" data-event-collection="visibility-time-report" data-target-property="report.timeVisible" data-project-ids="model.selectedProjectIds"></div></div></div><div class="col-sm-6"><div class="panel panel-default"><div class="panel-heading">Fullyvisible Time <small class="text-muted">Average</small></div><div tbk-vishy-project-compare-piechart="" data-analysis-type="average" data-event-collection="visibility-time-report" data-target-property="report.timeFullyVisible" data-project-ids="model.selectedProjectIds"></div></div></div></div></div>');
}]);
})();
