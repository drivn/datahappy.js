!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function r(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){r(t,e,n[e])}))}return t}function o(t){if(Array.isArray(t))return t}function a(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t,e){if(t){if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}function l(t,e){return o(t)||a(t)||s(t,e)||u()}function f(t){return function(t){if(Array.isArray(t))return c(t)}(t)||a(t)||s(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=function(){return window.analytics||window.rudderanalytics||null},h=function(){var t=p();if(t){if(t.user&&t.user()&&t.user().anonymousId)return t.user().anonymousId();if(t.getAnonymousId)return t.getAnonymousId()}return null},d=function(){var t=p();if(t){if(t.user&&t.user()&&t.user().id)return t.user().id();if(t.getUserId)return t.getUserId()}return null},m=function(t,e){var r=p();if(!r||!r.page)return!1;var o={};return t&&(o.context={campaign:n({},t.utm_source&&{source:t.utm_source},t.utm_medium&&{medium:t.utm_medium},t.utm_campaign&&{name:t.utm_campaign},t.utm_term&&{term:t.utm_term},t.utm_content&&{content:t.utm_content})}),r.page(n({},e),o),!0},y=function(t){var e=p();e&&e.identify(t)},v={},g=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=U(i,r);if(u){if(u===m)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?d:p,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",m={};function y(){}function v(){}function g(){}var w={};c(w,a,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(E([])));_&&_!==r&&n.call(_,a)&&(w=_);var L=g.prototype=y.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,a,i,u){var c=l(t[o],t,a);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function U(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,U(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function E(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return v.prototype=g,c(L,"constructor",g),c(g,"constructor",v),v.displayName=c(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},k(S.prototype),c(S.prototype,i,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new S(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(L),c(L,u,"Generator"),c(L,a,(function(){return this})),c(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:E(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(v);try{regeneratorRuntime=g}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=g:Function("r","regeneratorRuntime = r")(g)}var w,b,_=(w=t(v).mark((function e(r,n,o){var a,i;return t(v).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(datahappy.apiHost){t.next=3;break}return console.error("apiHost not set – skipping"),t.abrupt("return");case 3:if(d()){t.next=6;break}return console.error("User ID is not set – skipping"),t.abrupt("return");case 6:return a=L(r,n,o),t.next=9,fetch("".concat(datahappy.apiHost,"/events/track/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 9:return i=t.sent,t.abrupt("return",i.text());case 11:case"end":return t.stop()}}),e)})),b=function(){var t=this,r=arguments;return new Promise((function(n,o){var a=w.apply(t,r);function i(t){e(a,n,o,i,u,"next",t)}function u(t){e(a,n,o,i,u,"throw",t)}i(void 0)}))},function(t,e,r){return b.apply(this,arguments)});function L(t,e,r){var o=datahappy.getFtUTMs(),a=datahappy.getLtUTMs(),i=datahappy.getFBCookies();return{anonymousId:h(),userId:d(),event:t,properties:n({},e,r&&{traits:r},o&&{ftUTMs:o},a&&{ltUTMs:a},i),context:{page:{url:window.location.origin+window.location.pathname},userAgent:navigator.userAgent,locale:navigator.language},channel:"web",timestamp:(new Date).toISOString()}}var k={trackConversion:_},S=function(t){var e=datahappy.appDownloadLinks,r=new URL(t||e.baseURL),n=r.searchParams,o=datahappy.getFtUTMs();if(o){if(o.utm_source){var a=e.sourceMappings[o.utm_source.toLowerCase()];a&&(r.pathname="/".concat(a))}o.utm_source&&n.append("source",encodeURIComponent(o.utm_source)),o.utm_medium&&n.append("medium",encodeURIComponent(o.utm_medium)),o.utm_campaign&&n.append("campaign",encodeURIComponent(o.utm_campaign)),o.utm_term&&n.append("adgroup",encodeURIComponent(o.utm_term)),o.utm_content&&n.append("creative",encodeURIComponent(o.utm_content))}var i=h();return i&&n.append("label",i),r.search=n.toString(),r.href},U=function(t){var e=datahappy.appDownloadLinks,r=new URL(t||e.baseURL),n=r.searchParams,o=datahappy.getFtUTMs();if(o){var a=o.utm_source?encodeURIComponent(o.utm_source):"website";n.append("pid",a),o.utm_medium&&n.append("af_channel",encodeURIComponent(o.utm_medium));var i=o.utm_campaign?encodeURIComponent(o.utm_campaign):"N/A";n.append("c",i),o.utm_term&&n.append("af_adset",encodeURIComponent(o.utm_term)),o.utm_content&&n.append("af_ad",encodeURIComponent(o.utm_content))}n.append("af_ua",encodeURIComponent(navigator.userAgent));var u=datahappy.getFBCookies();return u&&u.fbp&&n.append("af_sub1",u.fbp),u&&u.fbc&&n.append("af_sub2",u.fbc),r.search=n.toString(),r.href},x={};x.init=function(t){var e,r;Object.assign(this,t),(e=new URLSearchParams(window.location.search).get("dh_uid"))&&y(e),function(){var t=x.currentUTMs();if(t){x.getFtUTMs()||localStorage.setItem("dh_utms_ft",JSON.stringify(t)),localStorage.setItem("dh_utms_lt",JSON.stringify(t))}}(),this.trackPageview(),this.appDownloadLinks&&function(){var t=this,e=0,r=setInterval((function(){var n=document.querySelectorAll(x.appDownloadLinks.ctaSelector);if(n.length){var o=t;x.debug&&console.log("Updating app download CTAs:",n),n.forEach((function(t){var e=o;t.addEventListener("click",(function(){var r=x.generateAppDownloadURL(e);r&&t.setAttribute("href",r)}))})),clearInterval(r)}else e+=1,x.debug&&console.log("Download CTAs not found (attempt ".concat(e,")")),8===e&&clearInterval(r)}),x.appDownloadLinks.interval||250)}(),this.linker&&(r=document.querySelectorAll("a[href^='".concat(x.linker,"']")),x.debug&&console.log("Linking links:",r),r.forEach((function(t){t.addEventListener("click",(function(){var e=new URLSearchParams,r=d();r&&e.append("dh_uid",r);var n=window.datahappy.getLtUTMs(""),o=!0,a=!1,i=void 0;try{for(var u,c=Object.entries(n)[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var s=l(u.value,2),f=s[0],p=s[1];e.append(f,p)}}catch(t){a=!0,i=t}finally{try{o||null==c.return||c.return()}finally{if(a)throw i}}if(e.toString()){var h=new URL(t),m=h.searchParams,y=!0,v=!1,g=void 0;try{for(var w,b=e.entries()[Symbol.iterator]();!(y=(w=b.next()).done);y=!0){var _=l(w.value,2),L=_[0],k=_[1];m.append(L,k)}}catch(t){v=!0,g=t}finally{try{y||null==b.return||b.return()}finally{if(v)throw g}}h.search=m.toString(),t.setAttribute("href",h.href)}}))}))),this.initialized=!0},x.trackPageview=function(){var t=this.getFtUTMs(),e=this.getLtUTMs("_lt");m(t,e)||this.hooks&&this.hooks.trackPageview&&this.hooks.trackPageview(t,e)},x.trackConversion=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;k.trackConversion(t,e,r)},x.generateAppDownloadURL=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return"adjust"===this.appDownloadLinks.provider?S(t):"appsflyer"===this.appDownloadLinks.provider?U(t):null},x.currentUTMs=function(){var t=new URLSearchParams(window.location.search),e={},r=!0,n=!1,o=void 0;try{for(var a,i=t.entries()[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var u=l(a.value,2),c=u[0],s=u[1];c.includes("utm_")&&(e[c]=s)}}catch(t){n=!0,o=t}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}return Object.keys(e).length?e:null},x.getFtUTMs=function(){var t=localStorage.getItem("dh_utms_ft");return t?JSON.parse(t):null},x.getLtUTMs=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=localStorage.getItem("dh_utms_lt");if(!e)return null;var o=JSON.parse(e);return n({},o.utm_campaign&&r({},"utm_campaign".concat(t),o.utm_campaign),o.utm_source&&r({},"utm_source".concat(t),o.utm_source),o.utm_medium&&r({},"utm_medium".concat(t),o.utm_medium),o.utm_term&&r({},"utm_term".concat(t),o.utm_term),o.utm_content&&r({},"utm_content".concat(t),o.utm_content))},x.getFBCookies=function(){var t=document.cookie.split("; ").filter((function(t){return t.includes("_fbp=")})).map((function(t){return t.split("_fbp=")[1]})),e=document.cookie.split("; ").filter((function(t){return t.includes("_fbc=")})).map((function(t){return t.split("_fbc=")[1]})),r=n({},(t=t.length&&t[0]||null)&&{fbp:t},(e=e.length&&e[0]||null)&&{fbc:e});return Object.keys(r).length?r:null};var I,O=!0,E=!1,j=void 0;if(window.datahappy&&window.datahappy.buffered)try{for(var T,A=window.datahappy.buffered[Symbol.iterator]();!(O=(T=A.next()).done);O=!0){var R,P=T.value,C=o(I=P)||a(I)||s(I,i)||u(),M=C[0],F=C.slice(1);(R=x)[M].apply(R,f(F))}}catch(t){E=!0,j=t}finally{try{O||null==A.return||A.return()}finally{if(E)throw j}}window.datahappy=x}();
