!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=t.apply(r,n);function u(t){e(i,o,a,u,c,"next",t)}function c(t){e(i,o,a,u,c,"throw",t)}u(void 0)}))}}function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),o.forEach((function(e){n(t,e,r[e])}))}return t}function a(t){if(Array.isArray(t))return t}function u(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t,e){if(t){if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,e):void 0}}function f(t,e){return a(t)||u(t)||s(t,e)||c()}function h(t){return function(t){if(Array.isArray(t))return l(t)}(t)||u(t)||s(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p={},d=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=U(i,r);if(u){if(u===m)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=s(t,e,r);if("normal"===c.type){if(n=r.done?d:h,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",m={};function y(){}function g(){}function v(){}var w={};c(w,a,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(I([])));_&&_!==r&&n.call(_,a)&&(w=_);var L=v.prototype=y.prototype=Object.create(w);function S(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,a,i,u){var c=s(t[o],t,a);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function U(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,U(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function I(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return g.prototype=v,c(L,"constructor",v),c(v,"constructor",g),g.displayName=c(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},S(x.prototype),c(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(L),c(L,u,"Generator"),c(L,a,(function(){return this})),c(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=I,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(p);try{regeneratorRuntime=d}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=d:Function("r","regeneratorRuntime = r")(d)}var m={};function y(t,e,r){return g.apply(this,arguments)}function g(){return(g=r(t(p).mark((function e(r,n,o){var a,i;return t(p).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=v(r,n,o),t.next=3,fetch("".concat(m.apiHost,"/events/track/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:return i=t.sent,t.abrupt("return",i.text());case 5:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function v(t,e,r){var n=m.getFtUTMs(),a=m.getLtUTMs(),i=m.getFBCookies();return{anonymousId:window.rudderanalytics.getAnonymousId(),userId:window.rudderanalytics.getUserId(),event:t,properties:o({},e,r&&{traits:r},n&&{ftUTMs:n},a&&{ltUTMs:a},i),context:{page:{url:window.location.origin+window.location.pathname},userAgent:navigator.userAgent,locale:navigator.language},channel:"web",timestamp:(new Date).toISOString()}}m.init=function(t){var e,r,n,o;this.apiHost=t.apiHost||null,this.debug="debug"in t&&t.debug,(e=new URLSearchParams(window.location.search).get("dh_uid"))&&window.rudderanalytics.identify(e),function(){var t=m.currentUTMs();if(t){m.getFtUTMs()||localStorage.setItem("dh_utms_ft",JSON.stringify(t)),localStorage.setItem("dh_utms_lt",JSON.stringify(t))}}(),this.trackPageview(),this.appDownloadLinks=t.appDownloadLinks||null,this.appDownloadLinks&&(r=0,n=setInterval((function(){var t=m.appDownloadLinks.ctaClasses.map((function(t){return"a.".concat(t)})).join(),e=document.querySelectorAll(t);e.length?(m.debug&&console.log("Updating app download CTAs:",e),e.forEach((function(t){t.addEventListener("click",(function(t){var e=m.generateAppDownloadURL();this.setAttribute("href",e)}))})),clearInterval(n)):(r+=1,m.debug&&console.log("Download CTAs not found (attempt ".concat(r,")")),8===r&&clearInterval(n))}),m.appDownloadLinks.interval||250)),t.linker&&(o=t.linker,document.querySelectorAll("a[href^='"+o+"']").forEach((function(t){t.addEventListener("click",(function(){var e=new URLSearchParams,r=window.rudderanalytics.getUserId();r&&e.append("dh_uid",r);var n=window.datahappy.getLtUTMs(""),o=!0,a=!1,i=void 0;try{for(var u,c=Object.entries(n)[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var l=f(u.value,2),s=l[0],h=l[1];e.append(s,h)}}catch(t){a=!0,i=t}finally{try{o||null==c.return||c.return()}finally{if(a)throw i}}if(e.toString()){var p=new URL(t),d=p.searchParams,m=!0,y=!1,g=void 0;try{for(var v,w=e.entries()[Symbol.iterator]();!(m=(v=w.next()).done);m=!0){var b=f(v.value,2),_=b[0],L=b[1];d.append(_,L)}}catch(t){y=!0,g=t}finally{try{m||null==w.return||w.return()}finally{if(y)throw g}}p.search=d.toString(),t.setAttribute("href",p.href)}}))}))),this.initialized=!0},m.trackPageview=function(){var t=this.getFtUTMs(),e=this.getLtUTMs("_lt"),r={};t&&(r.context={campaign:o({},t.utm_source&&{source:t.utm_source},t.utm_medium&&{medium:t.utm_medium},t.utm_campaign&&{name:t.utm_campaign},t.utm_term&&{term:t.utm_term},t.utm_content&&{content:t.utm_content})}),window.rudderanalytics.page(o({},e),r)},m.trackConversion=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;window.rudderanalytics.getUserId()?y(t,e,r):console.error("User ID is not set – skipping")},m.generateAppDownloadURL=function(){var t=new URL(this.appDownloadLinks.baseURL),e=new URLSearchParams,r=this.getFtUTMs();if(r){if(r.utm_source){var n=this.appDownloadLinks.sourceMappings[r.utm_source.toLowerCase()];n&&(t.pathname="/".concat(n))}r.utm_source&&e.append("source",encodeURIComponent(r.utm_source)),r.utm_medium&&e.append("medium",encodeURIComponent(r.utm_medium)),r.utm_campaign&&e.append("campaign",encodeURIComponent(r.utm_campaign)),r.utm_term&&e.append("adgroup",encodeURIComponent(r.utm_term)),r.utm_content&&e.append("creative",encodeURIComponent(r.utm_content))}var o=window.rudderanalytics.getAnonymousId();return o&&e.append("label",o),t.search=e.toString(),t.href},m.currentUTMs=function(){var t=new URLSearchParams(window.location.search),e={},r=!0,n=!1,o=void 0;try{for(var a,i=t.entries()[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var u=f(a.value,2),c=u[0],l=u[1];c.includes("utm_")&&(e[c]=l)}}catch(t){n=!0,o=t}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}return Object.keys(e).length?e:null},m.getFtUTMs=function(){var t=localStorage.getItem("dh_utms_ft");return t?JSON.parse(t):null},m.getLtUTMs=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=localStorage.getItem("dh_utms_lt");if(!e)return null;var r=JSON.parse(e);return o({},r.utm_campaign&&n({},"utm_campaign".concat(t),r.utm_campaign),r.utm_source&&n({},"utm_source".concat(t),r.utm_source),r.utm_medium&&n({},"utm_medium".concat(t),r.utm_medium),r.utm_term&&n({},"utm_term".concat(t),r.utm_term),r.utm_content&&n({},"utm_content".concat(t),r.utm_content))},m.getFBCookies=function(){var t=document.cookie.split("; ").filter((function(t){return t.includes("_fbp=")})).map((function(t){return t.split("_fbp=")[1]})),e=document.cookie.split("; ").filter((function(t){return t.includes("_fbc=")})).map((function(t){return t.split("_fbc=")[1]})),r=o({},(t=t.length&&t[0]||null)&&{fbp:t},(e=e.length&&e[0]||null)&&{fbc:e});return Object.keys(r).length?r:null};var w,b=!0,_=!1,L=void 0;if(window.datahappy&&window.datahappy.buffered)try{for(var S,x=window.datahappy.buffered[Symbol.iterator]();!(b=(S=x.next()).done);b=!0){var U,k=S.value,O=a(w=k)||u(w)||s(w,i)||c(),E=O[0],I=O.slice(1);(U=m)[E].apply(U,h(I))}}catch(t){_=!0,L=t}finally{try{b||null==x.return||x.return()}finally{if(_)throw L}}window.datahappy=m}();
