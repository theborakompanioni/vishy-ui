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

    var client = {
      addEvent: function (eventCollection, data, consumer) {
        segmentClient.track(eventCollection, data);
        consumer(null, data);
      }
    };

    return {
      monitors: function () {
        return {
          standard: function (visobj) {
            return VisSense.Client.Simple().monitors(client).standard(visobj);
          },
          custom: function (visobj, options) {
            return VisSense.Client.Simple().monitors(client).custom(visobj, options);
          }
        };
      }
    };
  };

})(VisSense, VisSense.Utils);
