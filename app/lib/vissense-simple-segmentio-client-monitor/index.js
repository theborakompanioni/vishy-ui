(function (VisSense, Utils) {
  'use strict';

  VisSense.Client = VisSense.Client || {}

  VisSense.Client.SegmentIO = function (segmentClient) {
    if (!Utils.isFunction(VisSense.Client.Simple)) {
      throw new Error('Cannot load VisSense.Client.Simple. Is it included?');
    }

    if (!segmentClient || !segmentClient.track) {
      throw new Error('Please provide a compatible Segment.io client!');
    }

    return {
      monitors: function (config) {
        var moreMonitorsConfig = Utils.defaults(config, {
          projectId: null
        });

        var client = {
          addEvent: function (eventCollection, data, consumer) {
            var _data = Utils.extend(data, {
              projectId: moreMonitorsConfig.projectId
            });

            segmentClient.track(eventCollection, _data);

            consumer(null, data);
          }
        };

        return {
          standard: function (visobj) {
            return VisSense.Client.Simple().monitors(client).standard(visobj);
          }
        };
      }
    };
  };

})(VisSense, VisSense.Utils);
