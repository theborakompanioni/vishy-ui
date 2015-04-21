(function(module) {
try {
  module = angular.module('tbk.vishy-ui');
} catch (e) {
  module = angular.module('tbk.vishy-ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/modules/showcase/directives/default-draggable-element.html',
    '<div style="text-align: center"><i class="fa fa-fw fa-bullseye fa-lg"></i><br><span>Drag me!</span><br><span data-vissense-percentage="{{ elementId }}"></span></div>');
}]);
})();
