(function (window) {
  const datahappy = function () {
    // catch up to any buffered method calls
    if (window.datahappy && window.datahappy.buffered) {
      for (const call of window.datahappy.buffered) {
        this[call[0]](call[1]);
      }
    }
  };

  datahappy.prototype.init = function (config) {
    this.apiHost = config.apiHost || null;
    this.debug = "debug" in config ? config.debug : false;

    parseQuery();
    updateStoredUTMs();
    trackPageview();

    config.linker && updateOutboundLinks(config.linker);
    config.adjust && updateAppDownloadCTAs(config.adjust);

    this.initialized = true;
  };

  datahappy.prototype.trackConversion = (eventName, properties, traits=null) => {
    if (!window.rudderanalytics.getUserId()) {
      console.error("User ID is not set – skipping");
      return;
    }

    invokeTrackingService(eventName, properties, traits);
  };

  datahappy.prototype.currentUTMs = function () {
    const searchParams = new URLSearchParams(window.location.search);

    const currentUTMs = {};
    for (const [key, value] of searchParams.entries())
      if (key.includes("utm_")) currentUTMs[key] = value;
    
    if (Object.keys(currentUTMs).length) return currentUTMs;
    else return null;
  };

  datahappy.prototype.getFtUTMs = function () {
    const ftUTMs = localStorage.getItem("dh_utms_ft");

    if (ftUTMs) return JSON.parse(ftUTMs);
    else return null;
  };

  datahappy.prototype.getLtUTMs = function (appendWith="") {
    const ltUTMsJSON = localStorage.getItem("dh_utms_lt");

    if (!ltUTMsJSON) return null;

    const ltUTMs = JSON.parse(ltUTMsJSON);

    return {
      ...(ltUTMs.utm_campaign && { ["utm_campaign" + appendWith]: ltUTMs.utm_campaign }),
      ...(ltUTMs.utm_source && { ["utm_source" + appendWith]: ltUTMs.utm_source }),
      ...(ltUTMs.utm_medium && { ["utm_medium" + appendWith]: ltUTMs.utm_medium }),
      ...(ltUTMs.utm_term && { ["utm_term" + appendWith]: ltUTMs.utm_term }),
      ...(ltUTMs.utm_content && { ["utm_content" + appendWith]: ltUTMs.utm_content })
    };
  };

  datahappy.prototype.getFBCookies = function () {
    let fbp = document.cookie
      .split(";")
      .filter((c) => c.includes("_fbp="))
      .map((c) => c.split("_fbp=")[1]);
    let fbc = document.cookie
      .split(";")
      .filter((c) => c.includes("_fbc="))
      .map((c) => c.split("_fbc=")[1]);
    fbp = (fbp.length && fbp[0]) || null;
    fbc = (fbc.length && fbc[0]) || null;

    const fbCookies = {
      ...(fbp && { fbp }),
      ...(fbc && { fbc })
    };

    if (Object.keys(fbCookies).length) return fbCookies;
    else return null;
  };

  function parseQuery () {
    const uid = new URLSearchParams(window.location.search).get("dh_uid");
    uid && window.rudderanalytics.identify(uid);
  };

  function updateStoredUTMs() {
    const currentUTMs = window.datahappy.currentUTMs();

    // we only need to do something if we have new UTMs
    if (currentUTMs) {
      const ftUTMs = window.datahappy.getFtUTMs();

      // equivalent to MP's set_once
      if (!ftUTMs) localStorage.setItem('dh_utms_ft', JSON.stringify(currentUTMs));

      // always update LT UTMs
      localStorage.setItem('dh_utms_lt', JSON.stringify(currentUTMs));
    }
  }

  function trackPageview() {
    const ftUTMs = window.datahappy.getFtUTMs();
    const ltUTMs = window.datahappy.getLtUTMs("_lt");

    window.rudderanalytics.page({ ...ltUTMs }, {
      context: {
        campaign: {
          ...(ftUTMs.utm_source && { source: ftUTMs.utm_source }),
          ...(ftUTMs.utm_medium && { medium: ftUTMs.utm_medium }),
          ...(ftUTMs.utm_campaign && { name: ftUTMs.utm_campaign }),
          ...(ftUTMs.utm_term && { term: ftUTMs.utm_term }),
          ...(ftUTMs.utm_content && { content: ftUTMs.utm_content })
        }
      }
    });
  }

  function updateOutboundLinks(linker) {
    const links = document.querySelectorAll("a[href^='" + linker + "']");
    // loop through all links containing domain of interest
    links.forEach(function (link) {
      link.addEventListener("click", function () {
        // start by constructing the params we need to add
        const urlParamsToAdd = new URLSearchParams();

        // add user id if it exists
        const uid = window.rudderanalytics.getUserId();
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
  }

  function updateAppDownloadCTAs(adjust) {
    const links = document.querySelectorAll(".cta-app-download");
    links.forEach(link => {
      link.addEventListener("click", () => {
        const linkURL = new URL(link);
        const utms = window.datahappy.getFtUTMs();

        if (utms.utm_source) {
          const trackerToken = adjust[utms.utm_source.toLowerCase()];
          trackerToken && (linkURL.pathname = `/${trackerToken}`);
        }

        const searchParams = new URLSearchParams();

        utms.utm_source && searchParams.append("source", encodeURIComponent(utms.utm_source));
        utms.utm_medium && searchParams.append("medium", encodeURIComponent(utms.utm_medium));
        utms.utm_campaign && searchParams.append("campaign", encodeURIComponent(utms.utm_campaign));
        utms.utm_term && searchParams.append("adgroup", encodeURIComponent(utms.utm_term));
        utms.utm_content && searchParams.append("creative", encodeURIComponent(utms.utm_content));

        // add anonymousId as label
        const anonymousId = window.rudderanalytics.getAnonymousId();
        anonymousId && searchParams.append("label", anonymousId);

        linkURL.search = searchParams.toString();
        link.setAttribute("href", linkURL.href);
      });
    });
  }

  async function invokeTrackingService(eventName, properties, traits) {
    const payload = buildPayload(eventName, properties, traits);
    // console.log(JSON.stringify(payload, null, 2));

    const response = await fetch(`${window.datahappy.apiHost}/events/track/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    return response.text();
  }

  function buildPayload(event, properties, traits) {
    const ftUTMs = window.datahappy.getFtUTMs();
    const ltUTMs = window.datahappy.getLtUTMs();
    const fb = window.datahappy.getFBCookies();

    return {
      anonymousId: window.rudderanalytics.getAnonymousId(),
      userId: window.rudderanalytics.getUserId(),
      event: event,
      properties: {
        ...properties,
        ...(traits && { traits }),
        ...(ftUTMs && { ftUTMs }),
        ...(ltUTMs && { ltUTMs }),
        ...fb
      },
      context: {
        page: { url: window.location.origin + window.location.pathname },
        userAgent: navigator.userAgent,
        locale: navigator.language
      },
      channel: "web",
      timestamp: new Date().toISOString()
    }
  }

  window.datahappy = new datahappy();
})(window, undefined);
