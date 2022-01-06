(function (window) {
  var datahappy = function () {
    // check if need to catch up on any buffered method calls
    if (
      window.datahappy &&
      window.datahappy.buffered &&
      window.datahappy.buffered.length
    ) {
      for (const call of window.datahappy.buffered) {
        this[call[0]](call[1]);
      }
    }
  };

  datahappy.prototype.init = function (config) {
    this.debug = "debug" in config ? config.debug : false;
    this.linker = "linker" in config ? config.linker : "";

    this._parseQuery();
    this._setFtLtUTMs();
    this.linker && this._updateHrefs();

    this.initialized = true;
  };

  datahappy.prototype.currentUTMs = function () {
    const searchParams = new URLSearchParams(window.location.search);
    var currentUTMs = {};
    for (const [key, value] of searchParams.entries()) {
      const isUTMParam = key.indexOf("utm_") > -1;
      isUTMParam && (currentUTMs[key] = value);
    }
    return currentUTMs;
  };

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

  datahappy.prototype.getLtUTMs = function (appendWith = "_lt") {
    return {
      ...(window.mixpanel.get_property("utm_campaign_lt") && {
        ["utm_campaign" + appendWith]: window.mixpanel.get_property(
          "utm_campaign_lt"
        )
      }),
      ...(window.mixpanel.get_property("utm_source_lt") && {
        ["utm_source" + appendWith]: window.mixpanel.get_property(
          "utm_source_lt"
        )
      }),
      ...(window.mixpanel.get_property("utm_medium_lt") && {
        ["utm_medium" + appendWith]: window.mixpanel.get_property(
          "utm_medium_lt"
        )
      }),
      ...(window.mixpanel.get_property("utm_term_lt") && {
        ["utm_term" + appendWith]: window.mixpanel.get_property("utm_term_lt")
      }),
      ...(window.mixpanel.get_property("utm_content_lt") && {
        ["utm_content" + appendWith]: window.mixpanel.get_property(
          "utm_content_lt"
        )
      })
    };
  };

  datahappy.prototype.getFBCookies = function () {
    var fbp = document.cookie
      .split(";")
      .filter((c) => c.includes("_fbp="))
      .map((c) => c.split("_fbp=")[1]);
    var fbc = document.cookie
      .split(";")
      .filter((c) => c.includes("_fbc="))
      .map((c) => c.split("_fbc=")[1]);
    fbp = (fbp.length && fbp[0]) || null;
    fbc = (fbc.length && fbc[0]) || null;

    return {
      ...(fbp && { fbp }),
      ...(fbc && { fbc })
    };
  };

  datahappy.prototype._parseQuery = function () {
    var searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get("dh_uid")) {
      window.analytics.identify(searchParams.get("dh_uid"));
    }
  };

  datahappy.prototype._setFtLtUTMs = function () {
    const currentUTMs = this.currentUTMs();

    var currentUTMsLt = {};
    for (const [key, value] of Object.entries(currentUTMs)) {
      currentUTMsLt[key + "_lt"] = value;
    }

    // wait for mixpanel SDK to be instantiated
    window.analytics.ready(function () {
      window.datahappy.debug && window.mixpanel.set_config({ debug: true });

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

  datahappy.prototype._updateHrefs = function () {
    const links = document.querySelectorAll("a[href^='" + this.linker + "']");
    // loop through all links containing domain of interest
    links.forEach(function (link) {
      link.addEventListener("click", function () {
        // start by constructing the params we need to add
        var urlParamsToAdd = new URLSearchParams();

        // add user id if it exists
        const uid = window.analytics.user().id();
        uid && urlParamsToAdd.append("dh_uid", uid);

        // add LT UTMs if they exist
        const ltUTMs = window.datahappy.getLtUTMs("");
        for (const [key, value] of Object.entries(ltUTMs)) {
          urlParamsToAdd.append(key, value);
        }

        const urlParamsToAddStr = urlParamsToAdd.toString();

        // only update if we have params to add
        if (urlParamsToAddStr) {
          const linkURL = new URL(link);
          // current URL may have its own search params
          const linkParams = linkURL.searchParams;

          // add to existing param set
          for (const [key, value] of urlParamsToAdd.entries()) {
            linkParams.append(key, value);
          }

          // update the search string
          linkURL.search = linkParams.toString();
          link.setAttribute("href", linkURL.href);
        }
      });
    });
  };

  window.datahappy = new datahappy();
})(window, undefined);
