(function(module) {
try {
  module = angular.module('tbk.vishy-ui');
} catch (e) {
  module = angular.module('tbk.vishy-ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/info.html',
    '<div class="container"><h1><strong>Vis</strong>hy Info</h1><p class="lead">Lorem ipsum</p><p>This demo is running for <span data-tbk-readable-time-countup="" data-start="1424580315101" data-min-unit="hour" data-interval="1000"></span></p></div>');
}]);
})();
