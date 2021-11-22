(function (window) {
  var datahappy = function () {
    this._setFtLtUTMs();
    return;
  };

  datahappy.prototype.init = function () {};

  datahappy.prototype.getFtUTMs = function () {
    return {
      ...(window.mixpanel.get_property("utm_campaign") && {
        utm_campaign: window.mixpanel.get_property("utm_campaign")
      }),
      ...(window.mixpanel.get_property("utm_source") && {
        utm_source: window.mixpanel.get_property("utm_source")
      }),
      ...(window.mixpanel.get_property("utm_medium") && {
        utm_medium: window.mixpanel.get_property("utm_medium")
      }),
      ...(window.mixpanel.get_property("utm_term") && {
        utm_term: window.mixpanel.get_property("utm_term")
      }),
      ...(window.mixpanel.get_property("utm_content") && {
        utm_content: window.mixpanel.get_property("utm_content")
      })
    };
  };

  datahappy.prototype.getLtUTMs = function () {
    return {
      ...(window.mixpanel.get_property("utm_campaign_lt") && {
        utm_campaign_lt: window.mixpanel.get_property("utm_campaign_lt")
      }),
      ...(window.mixpanel.get_property("utm_source_lt") && {
        utm_source_lt: window.mixpanel.get_property("utm_source_lt")
      }),
      ...(window.mixpanel.get_property("utm_medium_lt") && {
        utm_medium_lt: window.mixpanel.get_property("utm_medium_lt")
      }),
      ...(window.mixpanel.get_property("utm_term_lt") && {
        utm_term_lt: window.mixpanel.get_property("utm_term_lt")
      }),
      ...(window.mixpanel.get_property("utm_content_lt") && {
        utm_content_lt: window.mixpanel.get_property("utm_content_lt")
      })
    };
  };

  datahappy.prototype._setFtLtUTMs = function () {
    const searchParams = new URLSearchParams(window.location.search);
    var currentUTMs = {};
    for (const [key, value] of searchParams.entries()) {
      const isUTMParam = key.indexOf("utm_") > -1;
      isUTMParam && (currentUTMs[key] = value);
    }
    var currentUTMsLt = {};
    for (const [key, value] of Object.entries(currentUTMs)) {
      currentUTMsLt[key + "_lt"] = value;
    }

    // wait for mixpanel SDK to be instantiated
    window.analytics.ready(function () {
      isStaging && window.mixpanel.set_config({ debug: true });

      if (Object.keys(currentUTMs).length !== 0) {
        // update LT UTMs to MP only
        // Segment handles required identify and sets as super properties
        window.analytics.identify(currentUTMsLt, {
          integrations: {
            All: false,
            Mixpanel: true
          }
        });

        // set once for first touch UTMs to MP
        window.mixpanel.people.set_once(currentUTMs);
      }

      window.analytics.page();
    });
  };

  window.datahappy = new datahappy();
})(window, undefined);
