(function(module) {
try {
  module = angular.module('tbk.vishy-ui');
} catch (e) {
  module = angular.module('tbk.vishy-ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/modules/showcase/home.html',
    '<style>\n' +
    '  #myElement {\n' +
    '    border: 3px solid #333;\n' +
    '    border-radius: 25px;\n' +
    '    position: relative;\n' +
    '    background-color: #e5e5e5;\n' +
    '    cursor: pointer;\n' +
    '    padding: 40px;\n' +
    '    width: 300px;\n' +
    '    margin: 0 auto;\n' +
    '    z-index: 9999;\n' +
    '  }\n' +
    '\n' +
    '  #vishy-showcase .vissense-metrics-container {\n' +
    '    font-size: 10px;\n' +
    '    margin: 0px;\n' +
    '    position: fixed;\n' +
    '    right: 42px;\n' +
    '    bottom: 13px;\n' +
    '    width: 500px;\n' +
    '    height: 130px;\n' +
    '    z-index: 99999;\n' +
    '    background-color: rgba(242, 242, 242, 0.9);\n' +
    '  }\n' +
    '\n' +
    '  #vishy-showcase .vissense-metrics-container .vissense-flexbox .box {\n' +
    '    font-size: 12px;\n' +
    '    padding: 6px;\n' +
    '    width: 120px;\n' +
    '    text-align: center;\n' +
    '  }\n' +
    '\n' +
    '  .visible-xs .vissense-metrics-container,\n' +
    '  .visible-sm .vissense-metrics-container {\n' +
    '    margin-top: 30px;\n' +
    '    z-index: 1;\n' +
    '    min-width: 600px;\n' +
    '\n' +
    '    position: relative !important;\n' +
    '    left: initial !important;\n' +
    '    bottom: initial !important;\n' +
    '    width: initial !important;\n' +
    '    height: initial !important;\n' +
    '  }\n' +
    '</style><div id="vishy-showcase" class="container"><h3><strong>Vis</strong>hy Showcase</h3><p class="lead">When the button is pressed all visibility events of an element will be monitored and recorded. Element are considered visible if more than {{model.hidden * 100 | number:1}}% of their surface area is in the viewable portion of a users browser. Elements are considered hidden when a user is idle for {{model.inactiveAfter / 1000 | number:0}} seconds. Recording will stop after {{model.autoStop}} seconds.</p><p>Navigate to the <a data-ui-sref="showcase.multi-element-showcase">multiple element showcase</a> to see more than one element monitored concurrently.</p><div style="text-align: center; margin: 20px 0 30px 0;"><button class="btn btn-primary btn-lg" data-ng-click="start([\'myElement\']);" data-ng-hide="model.running">Start recording</button> <button class="btn btn-danger btn-lg" data-ng-click="stop();" data-ng-show="model.running">Stop recording (auto-stop in {{model.autoStopCountdown}}s)</button></div><div id="myElement" data-tbk-draggable=""><div vishy-showcase-default-draggable-element="myElement"></div></div><div data-ng-if="model.running"><div class="visible-xs visible-sm" data-vissense-metrics-infocard="myElement" data-inactive-after="{{model.inactiveAfter}}" data-hidden="{{model.hidden}}"></div><div class="visible-md visible-lg" data-vissense-metrics-infocard="myElement" data-inactive-after="{{model.inactiveAfter}}" data-hidden="{{model.hidden}}"></div></div><div style="margin-top: 30px;"><table class="table table-bordered table-striped"><colgroup><col span="1"><col span="1"><col span="1"><col span="1"><col span="1"></colgroup><thead><tr><th>percentage</th><th>50/1 Test</th><th>60/1 Test</th><th>66/3 Test *</th><th>100/10 Test **</th></tr></thead><tbody><tr data-ng-if="!model.running"><td><span data-vissense-percentage="myElement"></span></td><td colspan="100"><div class="alert alert-info">Visibility Percentage Time Tests will immediately start when recording.</div></td></tr><tr data-ng-if="model.running"><td><span data-vissense-percentage="myElement"></span></td><td><span data-vissense-fifty-one-test="myElement"></span></td><td><span data-vissense-sixty-one-test="myElement"></span></td><td><span data-vissense-percentage-time-test="myElement" data-percentage-limit="0.66" data-time-limit="3000" data-interval="100"></span></td><td><span data-vissense-percentage-time-test="myElement" data-percentage-limit="1" data-time-limit="10000" data-interval="100"></span></td></tr></tbody></table><p class=""><small>* 66/3 Test: At least 66% visible for 3 seconds.</small><br><small>** 100/10 Test: Fully visible for 10 seconds.</small><br></p></div><div class="row"><div class="col-md-12"><p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p><p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p><p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p><p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p><p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p><p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p><p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p><p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p><p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p><p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p></div></div></div>');
}]);
})();
