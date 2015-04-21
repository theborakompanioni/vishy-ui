(function(module) {
try {
  module = angular.module('tbk.vishy-ui');
} catch (e) {
  module = angular.module('tbk.vishy-ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/navs/header.html',
    '<div class="navbar navbar-inverse navbar-fixed-top" role="navigation" style=""><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a class="navbar-brand" data-ui-sref="home"><strong>Vis</strong>hy<sub style="font-size: 0.6em;">alpha</sub></a></div><div class="navbar-collapse collapse"><ul class="nav navbar-nav navbar-left"><li data-ui-sref-active="active"><a data-ui-sref="showcase.home">Showcase</a></li><li data-ui-sref-active="active"><a data-ui-sref="dashboard.home">Metrics</a></li></ul><ul class="nav navbar-nav navbar-right"><li style="padding-top: 15px; padding-bottom: 15px;"><span style="color:#c2ccd1; padding: 10px 15px;"><sub>v<span data-tbk-github-version="vissense/vissense"></span></sub></span></li></ul></div></div></div>');
}]);
})();
