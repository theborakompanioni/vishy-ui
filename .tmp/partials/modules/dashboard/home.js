(function(module) {
try {
  module = angular.module('tbk.vishy-ui');
} catch (e) {
  module = angular.module('tbk.vishy-ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/modules/dashboard/home.html',
    '<div class="container-fluid"><style>\n' +
    '    .module-dashboard-top-navigation {\n' +
    '      padding-bottom: 13px;\n' +
    '    }\n' +
    '  </style><div class="module-dashboard-top-navigation"><div class="pull-right" tbk-vishy-dashboard-timeframe-select=""></div><ul class="nav nav-tabs"><li data-ui-sref-active="active"><a data-ui-sref="dashboard.home">Home</a></li><li data-ui-sref-active="active"><a data-ui-sref="dashboard.overview">Overview</a></li><li data-ui-sref-active="active"><a data-ui-sref="dashboard.initialRequests">Initial Requests</a></li><li data-ui-sref-active="active"><a data-ui-sref="dashboard.percentageTimeTest">Status Requests</a></li><li data-ui-sref-active="active"><a data-ui-sref="dashboard.timeReport">Summary Requests</a></li><li data-ui-sref-active="active"><a data-ui-sref="dashboard.rawData">Raw Data</a></li></ul></div><ui-view></ui-view></div>');
}]);
})();
