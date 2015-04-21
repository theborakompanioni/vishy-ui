(function (angular) {
  'use strict';

  angular.module('tbk.vishy-ui', [
    'angular-vishy',
    'tbk.githubVersion',
    'tbk.readableTime',
    'tbkBackgroundAnimations',
    'tbkBackgroundAnimations.animations.ParticleGravity',
    'tbkBackgroundAnimations.animations.Bubbles',
    'restangular',
    'org.tbk.vishy.states',

    'org.tbk.vishy.ui.project',
    'org.tbk.vishy.ui.dashboard',
    'org.tbk.vishy.ui.showcase',
    'org.tbk.vishy.ui.report'
  ])

    .config(['tbkKeenConfigProvider', function (tbkKeenConfigProvider) {
      var config = {
        projectId: "54dcbf0b46f9a74800890203",
        readKey: "f0de436f2fb5f41ddc57d01f4933056645f15ed6f0a7f44a643eaa665129560e1a2ab21ff4a8e8a79926e1444d847b33cf7ce4cf49fe0e49fa7120cb34803e6066fbf26fda801986ae8a60ea01a715a07491fc516c5b723a41dfef512a173124a65c8f15889450d295d8bc5a71e73c7c",
        writeKey: "3d4c9372032dad964bf03a00f579c78b9c410e34111b1929cf989c9eabaad11801bce63621b689f0ef4bbf7c84b47efe3fb94b27d125fc44fbd51d9f08c605b9e876c001d2105d1ba48f2fdee113b1b16e7e6847bb2b14822181262360cf668fab24ed77230e86dda8082be083b49a1e",
        protocol: "https",
        host: "api.keen.io/3.0"
        //requestType: "jsonp"            // String (optional: jsonp, xhr, beacon)
      };
      tbkKeenConfigProvider
        .projectId(config.projectId)
        .readKey(config.readKey)
        .writeKey(config.writeKey);
    }])

    .config(['tbkVishyConfigProvider', function (tbkVishyConfigProvider) {
      var config = {
        vishyId: '42',
        readKey: '%%vishy.readKey%%',
        writeKey: '%%vishy.writeKey%%',
        protocol: 'http',
        host: 'localhost',
        port: 8080,
        requestType: 'xhr'
      };

      tbkVishyConfigProvider
        .id(config.vishyId)
        .readKey(config.readKey)
        .writeKey(config.writeKey)
        .protocol(config.protocol)
        .host(config.host)
        .port(config.port)
        .requestType(config.requestType);
    }])
  ;

})(angular);
