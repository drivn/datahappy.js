!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=t.apply(r,n);function u(t){e(i,o,a,u,c,"next",t)}function c(t){e(i,o,a,u,c,"throw",t)}u(void 0)}))}}function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),o.forEach((function(e){n(t,e,r[e])}))}return t}function a(t){if(Array.isArray(t))return t}function u(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function l(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}function f(t,e){return a(t)||u(t)||l(t,e)||c()}function p(t){return function(t){if(Array.isArray(t))return s(t)}(t)||u(t)||l(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h,d={},m=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=S(i,r);if(u){if(u===m)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?d:p,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",m={};function y(){}function g(){}function v(){}var w={};c(w,a,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(O([])));_&&_!==r&&n.call(_,a)&&(w=_);var k=v.prototype=y.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,i,u){var c=l(t[o],t,a);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function U(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(U,this),this.reset(!0)}function O(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return g.prototype=v,c(k,"constructor",v),c(v,"constructor",g),g.displayName=c(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},x(L.prototype),c(L.prototype,i,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(k),c(k,u,"Generator"),c(k,a,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(d);try{regeneratorRuntime=m}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=m:Function("r","regeneratorRuntime = r")(m)}var y=new Uint8Array(16);function g(){if(!h&&!(h="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return h(y)}var v=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var w=function(t){return"string"==typeof t&&v.test(t)},b=[],_=0;_<256;++_)b.push((_+256).toString(16).substr(1));var k=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(b[t[e+0]]+b[t[e+1]]+b[t[e+2]]+b[t[e+3]]+"-"+b[t[e+4]]+b[t[e+5]]+"-"+b[t[e+6]]+b[t[e+7]]+"-"+b[t[e+8]]+b[t[e+9]]+"-"+b[t[e+10]]+b[t[e+11]]+b[t[e+12]]+b[t[e+13]]+b[t[e+14]]+b[t[e+15]]).toLowerCase();if(!w(r))throw TypeError("Stringified UUID is invalid");return r};var x,L=function(t,e,r){var n=(t=t||{}).random||(t.rng||g)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(var o=0;o<16;++o)e[r+o]=n[o];return e}return k(n)},S=function(){var t=localStorage.getItem("dh_anonymous_id");return t||(t=L(),localStorage.setItem("dh_anonymous_id",t),t)},U=function(){return window.analytics||window.rudderanalytics||null},I=(x=r(t(d).mark((function e(){var r;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=U())||!r.ready){t.next=9;break}return t.next=4,new Promise((function(t){return r.ready(t)}));case 4:if(!((r=U())&&r.user&&r.user()&&r.user().anonymousId)){t.next=7;break}return t.abrupt("return",r.user().anonymousId());case 7:if(!r||!r.getAnonymousId){t.next=9;break}return t.abrupt("return",r.getAnonymousId());case 9:return t.abrupt("return",S());case 10:case"end":return t.stop()}}),e)}))),function(){return x.apply(this,arguments)}),E={anonymousId:I,userId:function(){var t=U();if(t){if(t.user&&t.user()&&t.user().id)return t.user().id();if(t.getUserId)return t.getUserId()}return null},trackPageview:function(t,e){var r=U();if(!r||!r.page)return!1;var n={};return t&&(n.context={campaign:o({},t.utm_source&&{source:t.utm_source},t.utm_medium&&{medium:t.utm_medium},t.utm_campaign&&{name:t.utm_campaign},t.utm_term&&{term:t.utm_term},t.utm_content&&{content:t.utm_content})}),r.page(o({},e),n),!0},identifyUser:function(t){var e=U();e&&e.identify(t)}},O=function(){var e=r(t(d).mark((function e(r,n,o){var a,i;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(datahappy.apiHost){t.next=3;break}return console.error("apiHost not set – skipping"),t.abrupt("return");case 3:if(E.userId()){t.next=6;break}return console.error("User ID is not set – skipping"),t.abrupt("return");case 6:return t.next=8,j(r,n,o);case 8:return a=t.sent,t.next=11,fetch("".concat(datahappy.apiHost,"/events/track/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 11:return i=t.sent,t.abrupt("return",i.text());case 13:case"end":return t.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}();function j(t,e,r){return T.apply(this,arguments)}function T(){return(T=r(t(d).mark((function e(r,n,a){var i,u,c,s;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=datahappy.getFtUTMs(),u=datahappy.getLtUTMs(),c=datahappy.getFBCookies(),t.next=5,E.anonymousId();case 5:return s=t.sent,t.abrupt("return",{anonymousId:s,userId:E.userId(),event:r,properties:o({},n,a&&{traits:a},i&&{ftUTMs:i},u&&{ltUTMs:u},c),context:{page:{url:window.location.origin+window.location.pathname},userAgent:navigator.userAgent,locale:navigator.language},channel:"web",timestamp:(new Date).toISOString()});case 7:case"end":return t.stop()}}),e)})))).apply(this,arguments)}var A={trackConversion:O},P=function(){var e=r(t(d).mark((function e(r){var n,o,a;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.anonymousId();case 2:n=t.sent,(o=document.createElement("script")).type="text/javascript",o.text="!function(f,b,e,v,n,t,s)\n    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n    n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n    n.queue=[];t=b.createElement(e);t.async=!0;\n    t.src=v;s=b.getElementsByTagName(e)[0];\n    s.parentNode.insertBefore(t,s)}(window, document,'script',\n    'https://connect.facebook.net/en_US/fbevents.js');\n    fbq('init', '".concat(r,"', { external_id: '").concat(n,"' });\n    fbq('track', 'PageView');"),(a=document.getElementsByTagName("script")[0]).parentNode.insertBefore(o,a);case 8:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R={loadSnippet:P},M=function(){var e=r(t(d).mark((function e(r){var n,o,a,i,u,c;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=datahappy.appDownloadLinks,o=new URL(r||n.baseURL),a=o.searchParams,(i=datahappy.getFtUTMs())&&(i.utm_source&&((u=n.sourceMappings[i.utm_source.toLowerCase()])?o.pathname="/".concat(u):a.set("adgroup","".concat(i.utm_source," / ").concat(i.utm_medium))),i.utm_campaign&&a.set("campaign",i.utm_campaign),i.utm_term&&!a.has("adgroup")&&a.set("adgroup",i.utm_term),i.utm_content&&a.set("creative",i.utm_content),i.utm_source&&a.set("source",i.utm_source),i.utm_medium&&a.set("medium",i.utm_medium)),t.next=7,E.anonymousId();case 7:return(c=t.sent)&&a.set("label",c),o.search=a.toString(),t.abrupt("return",o.href);case 11:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D={generateAppDownloadURL:M},N=function(){var e=r(t(d).mark((function e(r){var n,o,a,i,u,c;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=datahappy.appDownloadLinks,o=new URL(n.baseURL),a=o.searchParams,i=datahappy.getFtUTMs(),a.set("pid","website"),i&&(i.utm_source&&a.set("pid",i.utm_source),i.utm_campaign&&a.set("c",i.utm_campaign),i.utm_medium&&a.set("af_channel",i.utm_medium),i.utm_term&&a.set("af_adset",i.utm_term),i.utm_content&&a.set("af_ad",i.utm_content)),a.set("af_ua",navigator.userAgent),t.next=9,E.anonymousId();case 9:return u=t.sent,a.set("dh_external_id",u),(c=datahappy.getFBCookies())&&c.fbp&&a.set("dh_fbp",c.fbp),c&&c.fbc&&a.set("dh_fbc",c.fbc),a.set("af_js_web","true"),o.search=a.toString(),t.abrupt("return",o.href);case 17:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C={generateAppDownloadURL:N},F={};F.init=function(e){var n,o,a,i;Object.assign(this,e),(n=new URLSearchParams(window.location.search).get("dh_uid"))&&E.identifyUser(n),function(){var t=F.currentUTMs(),e=document.referrer&&new URL(document.referrer).hostname||null;if(!t&&e&&e!==location.hostname){var r=e.match(/google|bing|baidu|yandex|duckduckgo/i);t=null!==r?{utm_source:r[0],utm_medium:"organic"}:{utm_source:e.replace("www.",""),utm_medium:"referral"}}if(!t)return;F.getFtUTMs()||localStorage.setItem("dh_utms_ft",JSON.stringify(t));localStorage.setItem("dh_utms_lt",JSON.stringify(t))}(),this.trackPageview(),this.pixels&&this.pixels.facebook&&this.pixels.facebook.pixelId&&R.loadSnippet(this.pixels.facebook.pixelId),this.appDownloadLinks&&(o=0,a=setInterval((function(){var e=document.querySelectorAll(F.appDownloadLinks.ctaSelector);e.length?(F.debug&&console.log("Updating app download CTAs:",e),e.forEach((function(e){e.addEventListener("click",r(t(d).mark((function r(){var n;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F.generateAppDownloadURL(e);case 2:(n=t.sent)&&e.setAttribute("href",n);case 4:case"end":return t.stop()}}),r)}))))})),clearInterval(a)):(o+=1,F.debug&&console.log("Download CTAs not found (attempt ".concat(o,")")),8===o&&clearInterval(a))}),F.appDownloadLinks.interval||250)),this.linker&&(i=document.querySelectorAll("a[href^='".concat(F.linker,"']")),F.debug&&console.log("Linking links:",i),i.forEach((function(t){t.addEventListener("click",(function(){var e=new URLSearchParams,r=E.userId();r&&e.set("dh_uid",r);var n=window.datahappy.getLtUTMs(""),o=!0,a=!1,i=void 0;try{for(var u,c=Object.entries(n)[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var s=f(u.value,2),l=s[0],p=s[1];e.set(l,p)}}catch(t){a=!0,i=t}finally{try{o||null==c.return||c.return()}finally{if(a)throw i}}if(e.toString()){var h=new URL(t),d=h.searchParams,m=!0,y=!1,g=void 0;try{for(var v,w=e.entries()[Symbol.iterator]();!(m=(v=w.next()).done);m=!0){var b=f(v.value,2),_=b[0],k=b[1];d.set(_,k)}}catch(t){y=!0,g=t}finally{try{m||null==w.return||w.return()}finally{if(y)throw g}}h.search=d.toString(),t.setAttribute("href",h.href)}}))}))),this.initialized=!0},F.ready=function(t){this.initialized&&t()},F.trackPageview=function(){var t=this.getFtUTMs(),e=this.getLtUTMs("_lt"),r=E.trackPageview(t,e);window.fbq&&window.fbq("track","PageView"),r||this.hooks&&this.hooks.trackPageview&&this.hooks.trackPageview(t,e)},F.trackConversion=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;A.trackConversion(t,e,r)},F.generateAppDownloadURL=r(t(d).mark((function e(){var r,n=arguments;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.length>0&&void 0!==n[0]?n[0]:null,"adjust"!==this.appDownloadLinks.provider){t.next=3;break}return t.abrupt("return",D.generateAppDownloadURL(r));case 3:if("appsflyer"!==this.appDownloadLinks.provider){t.next=5;break}return t.abrupt("return",C.generateAppDownloadURL(r));case 5:return t.abrupt("return",null);case 6:case"end":return t.stop()}}),e,this)}))),F.currentUTMs=function(){var t=new URLSearchParams(window.location.search),e={},r=!0,n=!1,o=void 0;try{for(var a,i=t.entries()[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var u=f(a.value,2),c=u[0],s=u[1];c.includes("utm_")&&(e[c]=s)}}catch(t){n=!0,o=t}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}return Object.keys(e).length?e:null},F.getFtUTMs=function(){var t=localStorage.getItem("dh_utms_ft");return t?JSON.parse(t):null},F.getLtUTMs=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=localStorage.getItem("dh_utms_lt");if(!e)return null;var r=JSON.parse(e);return o({},r.utm_campaign&&n({},"utm_campaign".concat(t),r.utm_campaign),r.utm_source&&n({},"utm_source".concat(t),r.utm_source),r.utm_medium&&n({},"utm_medium".concat(t),r.utm_medium),r.utm_term&&n({},"utm_term".concat(t),r.utm_term),r.utm_content&&n({},"utm_content".concat(t),r.utm_content))},F.getFBCookies=function(){var t=document.cookie.split("; ").filter((function(t){return t.includes("_fbp=")})).map((function(t){return t.split("_fbp=")[1]})),e=document.cookie.split("; ").filter((function(t){return t.includes("_fbc=")})).map((function(t){return t.split("_fbc=")[1]})),r=o({},(t=t.length&&t[0]||null)&&{fbp:t},(e=e.length&&e[0]||null)&&{fbc:e});return Object.keys(r).length?r:null};var q=window.datahappy&&window.datahappy.buffered||null;F.version=window.datahappy.version,window.datahappy=F,q&&function(t){var e,r=!0,n=!1,o=void 0;try{for(var s,f=t[Symbol.iterator]();!(r=(s=f.next()).done);r=!0){var h,d=s.value,m=a(e=d)||u(e)||l(e,i)||c(),y=m[0],g=m.slice(1);(h=F)[y].apply(h,p(g))}}catch(t){n=!0,o=t}finally{try{r||null==f.return||f.return()}finally{if(n)throw o}}}(q)}();
