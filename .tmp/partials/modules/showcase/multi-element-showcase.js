(function(module) {
try {
  module = angular.module('tbk.vishy-ui');
} catch (e) {
  module = angular.module('tbk.vishy-ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/modules/showcase/multi-element-showcase.html',
    '<style>\n' +
    '  #element-728x90, #element-300x250, #element-160x600, #element-160x150 {\n' +
    '    border: 3px solid #333;\n' +
    '    border-radius: 25px;\n' +
    '    position: relative;\n' +
    '    background-color: #e5e5e5;\n' +
    '    margin: 0 auto;\n' +
    '    z-index: 9999;\n' +
    '    padding: 10px;\n' +
    '  }\n' +
    '\n' +
    '  #element-728x90 {\n' +
    '    width: 728px;\n' +
    '    height: 90px;\n' +
    '  }\n' +
    '\n' +
    '  #element-300x250 {\n' +
    '    width: 300px;\n' +
    '    height: 250px;\n' +
    '  }\n' +
    '\n' +
    '  #element-160x600 {\n' +
    '    width: 160px;\n' +
    '    height: 600px;\n' +
    '  }\n' +
    '\n' +
    '  #element-160x150 {\n' +
    '    width: 160px;\n' +
    '    height: 150px;\n' +
    '  }\n' +
    '\n' +
    '  #vishy-showcase .vissense-metrics-container {\n' +
    '    font-size: 10px;\n' +
    '    z-index: 99999;\n' +
    '    background-color: rgba(242, 242, 242, 0.9);\n' +
    '\n' +
    '    margin-top: 30px;\n' +
    '\n' +
    '    min-width: 600px;\n' +
    '\n' +
    '    position: relative !important;\n' +
    '    left: initial !important;\n' +
    '    bottom: initial !important;\n' +
    '    width: initial !important;\n' +
    '    height: initial !important;\n' +
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
    '    position: relative !important;\n' +
    '    box-shadow: 1px 1px 1px 2px rgba(99, 99, 99, 0.4) !important;\n' +
    '    margin-top: 30px;\n' +
    '    z-index: 1;\n' +
    '    min-width: 600px;\n' +
    '  }\n' +
    '</style><div id="vishy-showcase" class="container"><h3><strong>Vis</strong>hy Showcase <small class="text-muted">Multiple Elementes</small></h3><p class="lead">When the button is pressed all visibility events of an element will be monitored and recorded. Element are considered visible if more than {{model.hidden * 100 | number:1}}% of their surface area is in the viewable portion of a users browser. Elements are considered hidden when a user is idle for {{model.inactiveAfter / 1000 | number:0}} seconds. Recording will stop after {{model.autoStop}} seconds.</p><div style="text-align: center; margin: 20px 0 30px 0;"><button class="btn btn-primary btn-lg" data-ng-click="start([\'element-728x90\', \'element-160x600\', \'element-160x150\', \'element-300x250\']);" data-ng-hide="model.running">Start recording</button> <button class="btn btn-danger btn-lg" data-ng-click="stop();" data-ng-show="model.running">Stop recording (auto-stop in {{model.autoStopCountdown}}s)</button></div><div class="row"><div class="col-md-12"><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p><div id="element-728x90"><span><strong>728x90</strong> <small class="text-muted" data-vissense-percentage="element-728x90"></small></span></div><div data-ng-if="model.running"><div data-vissense-metrics-infocard="element-728x90" data-inactive-after="{{model.inactiveAfter}}" data-hidden="{{model.hidden}}"></div></div><div style="margin-top: 30px;"><table class="table table-bordered table-striped"><colgroup><col span="1"><col span="1"><col span="1"><col span="1"><col span="1"></colgroup><thead><tr><th>percentage</th><th>50/1 Test</th><th>60/1 Test</th><th>66/3 Test *</th><th>100/10 Test **</th></tr></thead><tbody><tr data-ng-if="!model.running"><td><span data-vissense-percentage="element-728x90"></span></td><td colspan="100"><div class="alert alert-info">Visibility Percentage Time Tests will immediately start when recording.</div></td></tr><tr data-ng-if="model.running"><td><span data-vissense-percentage="element-728x90"></span></td><td><span data-vissense-fifty-one-test="element-728x90"></span></td><td><span data-vissense-sixty-one-test="element-728x90"></span></td><td><span data-vissense-percentage-time-test="element-728x90" data-percentage-limit="0.66" data-time-limit="3000" data-interval="100"></span></td><td><span data-vissense-percentage-time-test="element-728x90" data-percentage-limit="1" data-time-limit="10000" data-interval="100"></span></td></tr></tbody></table></div></div></div><div class="row"><div class="col-sm-5 col-md-3"><div id="element-160x600"><span><strong>160x600</strong> <small class="text-muted" data-vissense-percentage="element-160x600"></small></span></div></div><div class="col-sm-7 col-md-9"><p class="hidden-xs hidden-sm">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p><p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p><div class="row"><div class="col-sm-6 col-md-9"><p class="hidden-xs hidden-sm">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p><p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p></div><div class="col-sm-6 col-md-3"><div id="element-160x150"><span><strong>160x150</strong> <small class="text-muted" data-vissense-percentage="element-160x150"></small></span></div></div></div><div class="row"><div class="col-md-12"><div data-ng-if="model.running"><div data-vissense-metrics-infocard="element-160x150" data-inactive-after="{{model.inactiveAfter}}" data-hidden="{{model.hidden}}"></div></div><div style="margin-top: 30px;"><table class="table table-bordered table-striped"><colgroup><col span="1"><col span="1"><col span="1"><col span="1"><col span="1"></colgroup><thead><tr><th>percentage</th><th>50/1 Test</th><th>60/1 Test</th><th>66/3 Test *</th><th>100/10 Test **</th></tr></thead><tbody><tr data-ng-if="!model.running"><td><span data-vissense-percentage="element-160x150"></span></td><td colspan="100"><div class="alert alert-info">Visibility Percentage Time Tests will immediately start when recording.</div></td></tr><tr data-ng-if="model.running"><td><span data-vissense-percentage="element-160x150"></span></td><td><span data-vissense-fifty-one-test="element-160x150"></span></td><td><span data-vissense-sixty-one-test="element-160x150"></span></td><td><span data-vissense-percentage-time-test="element-160x150" data-percentage-limit="0.66" data-time-limit="3000" data-interval="100"></span></td><td><span data-vissense-percentage-time-test="element-160x150" data-percentage-limit="1" data-time-limit="10000" data-interval="100"></span></td></tr></tbody></table></div></div></div><p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p><p class="hidden-xs hidden-sm">Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</p></div></div><div class="row"><div class="col-md-12"><div data-ng-if="model.running"><div data-vissense-metrics-infocard="element-160x600" data-inactive-after="{{model.inactiveAfter}}" data-hidden="{{model.hidden}}"></div></div><div style="margin-top: 30px;"><table class="table table-bordered table-striped"><colgroup><col span="1"><col span="1"><col span="1"><col span="1"><col span="1"></colgroup><thead><tr><th>percentage</th><th>50/1 Test</th><th>60/1 Test</th><th>66/3 Test *</th><th>100/10 Test **</th></tr></thead><tbody><tr data-ng-if="!model.running"><td><span data-vissense-percentage="element-160x600"></span></td><td colspan="100"><div class="alert alert-info">Visibility Percentage Time Tests will immediately start when recording.</div></td></tr><tr data-ng-if="model.running"><td><span data-vissense-percentage="element-160x600"></span></td><td><span data-vissense-fifty-one-test="element-160x600"></span></td><td><span data-vissense-sixty-one-test="element-160x600"></span></td><td><span data-vissense-percentage-time-test="element-160x600" data-percentage-limit="0.66" data-time-limit="3000" data-interval="100"></span></td><td><span data-vissense-percentage-time-test="element-160x600" data-percentage-limit="1" data-time-limit="10000" data-interval="100"></span></td></tr></tbody></table></div></div></div><div class="row"><div class="col-sm-5 col-md-8"><p class="hidden-xs hidden-sm">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua.</p><p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p></div><div class="col-sm-7 col-md-4"><div id="element-300x250"><span><strong>300x250</strong> <small class="text-muted" data-vissense-percentage="element-300x250"></small></span></div></div></div><div class="row"><div class="col-md-12"><div data-ng-if="model.running"><div data-vissense-metrics-infocard="element-300x250" data-inactive-after="{{model.inactiveAfter}}" data-hidden="{{model.hidden}}"></div></div><div style="margin-top: 30px;"><table class="table table-bordered table-striped"><colgroup><col span="1"><col span="1"><col span="1"><col span="1"><col span="1"></colgroup><thead><tr><th>percentage</th><th>50/1 Test</th><th>60/1 Test</th><th>66/3 Test *</th><th>100/10 Test **</th></tr></thead><tbody><tr data-ng-if="!model.running"><td><span data-vissense-percentage="element-300x250"></span></td><td colspan="100"><div class="alert alert-info">Visibility Percentage Time Tests will immediately start when recording.</div></td></tr><tr data-ng-if="model.running"><td><span data-vissense-percentage="element-300x250"></span></td><td><span data-vissense-fifty-one-test="element-300x250"></span></td><td><span data-vissense-sixty-one-test="element-300x250"></span></td><td><span data-vissense-percentage-time-test="element-300x250" data-percentage-limit="0.66" data-time-limit="3000" data-interval="100"></span></td><td><span data-vissense-percentage-time-test="element-300x250" data-percentage-limit="1" data-time-limit="10000" data-interval="100"></span></td></tr></tbody></table></div></div></div><div class="row"><div class="col-md-12"><p class=""><small>* 66/3 Test: At least 66% visible for 3 seconds.</small><br><small>** 100/10 Test: Fully visible for 10 seconds.</small><br></p></div></div></div>');
}]);
})();
