(function(module) {
try {
  module = angular.module('tbk.vishy-ui');
} catch (e) {
  module = angular.module('tbk.vishy-ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/navs/bottom.html',
    '<div class="container"><div class="footer text-muted" id="footer"><div class="row"><div class="col-md-9"><p><ul class="list-unstyled"><li><strong>Vis</strong>hy</li></ul></p></div><div class="col-md-3"><ul class="pull-right list-unstyled list-inline"><li data-ui-sref-active="active"><a data-ui-sref="info.overview">Info</a></li><li data-ui-sref-active="active"><a data-ui-sref="project.home">Projects</a></li><li data-ui-sref-active="active"><a data-ui-sref="app.login">Login</a></li><li><i class="fa fa-code"></i> tbk</li></ul></div></div></div></div>');
}]);
})();
