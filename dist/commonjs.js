module.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,t,n){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=60)}([function(e,t,n){function r(e){return null==e?void 0===e?s:c:(e=Object(e),a&&a in e?i(e):u(e))}var o=n(11),i=n(41),u=n(46),c="[object Null]",s="[object Undefined]",a=o?o.toStringTag:void 0;e.exports=r},function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},function(e,t,n){function r(e){if(!i(e))return!1;var t=o(e);return t==c||t==s||t==u||t==a}var o=n(0),i=n(6),u="[object AsyncFunction]",c="[object Function]",s="[object GeneratorFunction]",a="[object Proxy]";e.exports=r},function(e,t){var n=Array.isArray;e.exports=n},function(e,t,n){var r=n(16),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},function(e,t,n){function r(e){return null!=e&&i(e.length)&&!o(e)}var o=n(2),i=n(22);e.exports=r},function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},function(e,t,n){(function(e,r){function o(e,t){this._id=e,this._clearFn=t}var i=n(58).nextTick,u=Function.prototype.apply,c=Array.prototype.slice,s={},a=0;t.setTimeout=function(){return new o(u.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new o(u.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},t.setImmediate="function"==typeof e?e:function(e){var n=a++,r=!(arguments.length<2)&&c.call(arguments,1);return s[n]=!0,i(function(){s[n]&&(r?e.apply(null,r):e.call(null),t.clearImmediate(n))}),n},t.clearImmediate="function"==typeof r?r:function(e){delete s[e]}}).call(t,n(7).setImmediate,n(7).clearImmediate)},function(e,t,n){function r(e){return"number"==typeof e||i(e)&&o(e)==u}var o=n(0),i=n(1),u="[object Number]";e.exports=r},function(e,t,n){var r=n(31),o=n(14),i=n(19),u=i&&i.isRegExp,c=u?o(u):r;e.exports=c},function(e,t,n){function r(e){return"string"==typeof e||!i(e)&&u(e)&&o(e)==c}var o=n(0),i=n(3),u=n(1),c="[object String]";e.exports=r},function(e,t,n){var r=n(4),o=r.Symbol;e.exports=o},function(e,t,n){function r(e,t,n){var r=e[t];c.call(e,t)&&i(r,n)&&(void 0!==n||t in e)||o(e,t,n)}var o=n(13),i=n(20),u=Object.prototype,c=u.hasOwnProperty;e.exports=r},function(e,t,n){function r(e,t,n){"__proto__"==t&&o?o(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var o=n(15);e.exports=r},function(e,t){function n(e){return function(t){return e(t)}}e.exports=n},function(e,t,n){var r=n(40),o=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=o},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,n(59))},function(e,t){function n(e,t){return t=null==t?r:t,!!t&&("number"==typeof e||o.test(e))&&e>-1&&e%1==0&&e<t}var r=9007199254740991,o=/^(?:0|[1-9]\d*)$/;e.exports=n},function(e,t){function n(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||r;return e===n}var r=Object.prototype;e.exports=n},function(e,t,n){(function(e){var r=n(16),o="object"==typeof t&&t&&!t.nodeType&&t,i=o&&"object"==typeof e&&e&&!e.nodeType&&e,u=i&&i.exports===o,c=u&&r.process,s=function(){try{return c&&c.binding("util")}catch(e){}}();e.exports=s}).call(t,n(23)(e))},function(e,t){function n(e,t){return e===t||e!==e&&t!==t}e.exports=n},function(e,t){function n(e){return e}e.exports=n},function(e,t){function n(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}var r=9007199254740991;e.exports=n},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,configurable:!1,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,configurable:!1,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(10),u=n(9),c=n(2),s=n(8),a=function(){function e(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(r(this,e),i(t))this.eventName=t;else{if(!u(t))throw new Error("Event name to be listened should be string or regex");this.eventNameRegex=t}if(!c(n))throw new Error("Handler should be a function");if(!s(o)||parseInt(o,10)!=o)throw new Error("Execute limit should be integer");this.handler=n,this.execCount=0,this.execLimit=o}return o(e,[{key:"execute",value:function(e,t){var n=this.handler.apply(e,t);return this.execCount++,this.execLimit&&this.execCount>=this.execLimit&&this.onExpire(this),n}},{key:"testRegexWith",value:function(e){if(!i(e))throw new Error("Event name should be string");var t=this.eventNameRegex;if(!t)throw new Error("This listener is not regex");return t.test(e)}},{key:"onExpire",value:function(){}}]),e}();e.exports=a},function(e,t,n){var r=n(12),o=n(37),i=n(39),u=n(5),c=n(18),s=n(56),a=Object.prototype,f=a.hasOwnProperty,l=i(function(e,t){if(c(t)||u(t))return void o(t,s(t),e);for(var n in t)f.call(t,n)&&r(e,n,t[n])});e.exports=l},function(e,t,n){(function(t){!function(n){function r(){}function o(e,t){return function(){e.apply(t,arguments)}}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function u(e,t){for(;3===e._state;)e=e._value;return 0===e._state?void e._deferreds.push(t):(e._handled=!0,void i._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?c:s)(t.promise,e._value);var r;try{r=n(e._value)}catch(e){return void s(t.promise,e)}c(t.promise,r)}))}function c(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof i)return e._state=3,e._value=t,void a(e);if("function"==typeof n)return void l(o(n,t),e)}e._state=1,e._value=t,a(e)}catch(t){s(e,t)}}function s(e,t){e._state=2,e._value=t,a(e)}function a(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)u(e,e._deferreds[t]);e._deferreds=null}function f(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,c(t,e))},function(e){n||(n=!0,s(t,e))})}catch(e){if(n)return;n=!0,s(t,e)}}var v=setTimeout;i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(r);return u(this,new f(e,t,n)),n},i.all=function(e){var t=Array.prototype.slice.call(e);return new i(function(e,n){function r(i,u){try{if(u&&("object"==typeof u||"function"==typeof u)){var c=u.then;if("function"==typeof c)return void c.call(u,function(e){r(i,e)},n)}t[i]=u,0===--o&&e(t)}catch(e){n(e)}}if(0===t.length)return e([]);for(var o=t.length,i=0;i<t.length;i++)r(i,t[i])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)})},i._immediateFn="function"==typeof t&&function(e){t(e)}||function(e){v(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},i._setImmediateFn=function(e){i._immediateFn=e},i._setUnhandledRejectionFn=function(e){i._unhandledRejectionFn=e},"undefined"!=typeof e&&e.exports?e.exports=i:n.Promise||(n.Promise=i)}(this)}).call(t,n(7).setImmediate)},function(e,t){function n(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}e.exports=n},function(e,t,n){function r(e,t){var n=u(e),r=!n&&i(e),f=!n&&!r&&c(e),v=!n&&!r&&!f&&a(e),h=n||r||f||v,p=h?o(e.length,String):[],d=p.length;for(var y in e)!t&&!l.call(e,y)||h&&("length"==y||f&&("offset"==y||"parent"==y)||v&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||s(y,d))||p.push(y);return p}var o=n(36),i=n(53),u=n(3),c=n(54),s=n(17),a=n(55),f=Object.prototype,l=f.hasOwnProperty;e.exports=r},function(e,t,n){function r(e){return i(e)&&o(e)==u}var o=n(0),i=n(1),u="[object Arguments]";e.exports=r},function(e,t,n){function r(e){if(!u(e)||i(e))return!1;var t=o(e)?p:a;return t.test(c(e))}var o=n(2),i=n(44),u=n(6),c=n(51),s=/[\\^$.*+?()[\]{}|]/g,a=/^\[object .+?Constructor\]$/,f=Function.prototype,l=Object.prototype,v=f.toString,h=l.hasOwnProperty,p=RegExp("^"+v.call(h).replace(s,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=r},function(e,t,n){function r(e){return i(e)&&o(e)==u}var o=n(0),i=n(1),u="[object RegExp]";e.exports=r},function(e,t,n){function r(e){return u(e)&&i(e.length)&&!!N[o(e)]}var o=n(0),i=n(22),u=n(1),c="[object Arguments]",s="[object Array]",a="[object Boolean]",f="[object Date]",l="[object Error]",v="[object Function]",h="[object Map]",p="[object Number]",d="[object Object]",y="[object RegExp]",m="[object Set]",x="[object String]",b="[object WeakMap]",g="[object ArrayBuffer]",_="[object DataView]",j="[object Float32Array]",w="[object Float64Array]",L="[object Int8Array]",E="[object Int16Array]",T="[object Int32Array]",O="[object Uint8Array]",k="[object Uint8ClampedArray]",A="[object Uint16Array]",R="[object Uint32Array]",N={};N[j]=N[w]=N[L]=N[E]=N[T]=N[O]=N[k]=N[A]=N[R]=!0,N[c]=N[s]=N[g]=N[a]=N[_]=N[f]=N[l]=N[v]=N[h]=N[p]=N[d]=N[y]=N[m]=N[x]=N[b]=!1,e.exports=r},function(e,t,n){function r(e){if(!o(e))return i(e);var t=[];for(var n in Object(e))c.call(e,n)&&"constructor"!=n&&t.push(n);return t}var o=n(18),i=n(45),u=Object.prototype,c=u.hasOwnProperty;e.exports=r},function(e,t,n){function r(e,t){return u(i(e,t,o),e+"")}var o=n(21),i=n(48),u=n(49);e.exports=r},function(e,t,n){var r=n(52),o=n(15),i=n(21),u=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:i;e.exports=u},function(e,t){function n(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}e.exports=n},function(e,t,n){function r(e,t,n,r){var u=!n;n||(n={});for(var c=-1,s=t.length;++c<s;){var a=t[c],f=r?r(n[a],e[a],a,n,e):void 0;void 0===f&&(f=e[a]),u?i(n,a,f):o(n,a,f)}return n}var o=n(12),i=n(13);e.exports=r},function(e,t,n){var r=n(4),o=r["__core-js_shared__"];e.exports=o},function(e,t,n){function r(e){return o(function(t,n){var r=-1,o=n.length,u=o>1?n[o-1]:void 0,c=o>2?n[2]:void 0;for(u=e.length>3&&"function"==typeof u?(o--,u):void 0,c&&i(n[0],n[1],c)&&(u=o<3?void 0:u,o=1),t=Object(t);++r<o;){var s=n[r];s&&e(t,s,r,u)}return t})}var o=n(34),i=n(43);e.exports=r},function(e,t,n){function r(e,t){var n=i(e,t);return o(n)?n:void 0}var o=n(30),i=n(42);e.exports=r},function(e,t,n){function r(e){var t=u.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(e){}var o=c.call(e);return r&&(t?e[s]=n:delete e[s]),o}var o=n(11),i=Object.prototype,u=i.hasOwnProperty,c=i.toString,s=o?o.toStringTag:void 0;e.exports=r},function(e,t){function n(e,t){return null==e?void 0:e[t]}e.exports=n},function(e,t,n){function r(e,t,n){if(!c(n))return!1;var r=typeof t;return!!("number"==r?i(n)&&u(t,n.length):"string"==r&&t in n)&&o(n[t],e)}var o=n(20),i=n(5),u=n(17),c=n(6);e.exports=r},function(e,t,n){function r(e){return!!i&&i in e}var o=n(38),i=function(){var e=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();e.exports=r},function(e,t,n){var r=n(47),o=r(Object.keys,Object);e.exports=o},function(e,t){function n(e){return o.call(e)}var r=Object.prototype,o=r.toString;e.exports=n},function(e,t){function n(e,t){return function(n){return e(t(n))}}e.exports=n},function(e,t,n){function r(e,t,n){return t=i(void 0===t?e.length-1:t,0),function(){for(var r=arguments,u=-1,c=i(r.length-t,0),s=Array(c);++u<c;)s[u]=r[t+u];u=-1;for(var a=Array(t+1);++u<t;)a[u]=r[u];return a[t]=n(s),o(e,this,a)}}var o=n(27),i=Math.max;e.exports=r},function(e,t,n){var r=n(35),o=n(50),i=o(r);e.exports=i},function(e,t){function n(e){var t=0,n=0;return function(){var u=i(),c=o-(u-n);if(n=u,c>0){if(++t>=r)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var r=800,o=16,i=Date.now;e.exports=n},function(e,t){function n(e){if(null!=e){try{return o.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var r=Function.prototype,o=r.toString;e.exports=n},function(e,t){function n(e){return function(){return e}}e.exports=n},function(e,t,n){var r=n(29),o=n(1),i=Object.prototype,u=i.hasOwnProperty,c=i.propertyIsEnumerable,s=r(function(){return arguments}())?r:function(e){return o(e)&&u.call(e,"callee")&&!c.call(e,"callee")};e.exports=s},function(e,t,n){(function(e){var r=n(4),o=n(57),i="object"==typeof t&&t&&!t.nodeType&&t,u=i&&"object"==typeof e&&e&&!e.nodeType&&e,c=u&&u.exports===i,s=c?r.Buffer:void 0,a=s?s.isBuffer:void 0,f=a||o;e.exports=f}).call(t,n(23)(e))},function(e,t,n){var r=n(32),o=n(14),i=n(19),u=i&&i.isTypedArray,c=u?o(u):r;e.exports=c},function(e,t,n){function r(e){return u(e)?o(e):i(e)}var o=n(28),i=n(33),u=n(5);e.exports=r},function(e,t){function n(){return!1}e.exports=n},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function u(){d&&h&&(d=!1,h.length?p=h.concat(p):y=-1,p.length&&c())}function c(){if(!d){var e=o(u);d=!0;for(var t=p.length;t;){for(h=p,p=[];++y<t;)h&&h[y].run();y=-1,t=p.length}h=null,d=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function a(){}var f,l,v=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var h,p=[],d=!1,y=-1;v.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new s(e,t)),1!==p.length||d||o(c)},s.prototype.run=function(){this.fun.apply(null,this.array)},v.title="browser",v.browser=!0,v.env={},v.argv=[],v.version="",v.versions={},v.on=a,v.addListener=a,v.once=a,v.off=a,v.removeListener=a,v.removeAllListeners=a,v.emit=a,v.binding=function(e){throw new Error("process.binding is not supported")},v.cwd=function(){return"/"},v.chdir=function(e){throw new Error("process.chdir is not supported")},v.umask=function(){return 0}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return"object"===("undefined"==typeof e?"undefined":u(e))&&"object"===("undefined"==typeof t?"undefined":u(t))&&e.toString()===t.toString()}function i(e,t){var n=[];return a(t)?n=e.filter(t):e.indexOf(t)>-1&&n.push(t),n.forEach(function(t){var n=e.indexOf(t);e.splice(n,1)}),n}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(3),a=n(2),f=n(8),l=n(9),v=n(10),h=n(24),p=n(26);Object.assign=n(25);var d=function(){function e(){r(this,e),this.maxListeners_=e.defaultMaxListeners,this.maxRegexListeners_=e.defaultMaxRegexListeners,this.listeners_=[],this.regexListeners_=[],this.eventListeners_={}}return c(e,[{key:"addListener",value:function(e,t,n,r){var o=this;if(s(e)||s(t)){var i=function(){var r=s(e)?e:[e],i=s(t)?t:[t];return r.forEach(function(e){i.forEach(function(t){o.addListener(e,t,n)})}),{v:o}}();if("object"===("undefined"==typeof i?"undefined":u(i)))return i.v}var c=new h(e,t,n);if(c.eventName){if(this.eventListeners_[c.eventName]||(this.eventListeners_[c.eventName]=[]),this.eventListeners_[c.eventName].length>=this.maxListeners_)throw new Error("Max listener count reached for event: "+e);this.emit("newListener",e,t),r?this.eventListeners_[c.eventName].unshift(c):this.eventListeners_[c.eventName].push(c)}else if(c.eventNameRegex){if(this.regexListeners_.length>=this.maxRegexListeners_)throw new Error("Max regex listener count reached");this.emit("newListener",e,t),r?this.regexListeners_.unshift(c):this.regexListeners_.push(c)}return c.onExpire=this.removeListener_.bind(this),this.listeners_.push(c),this}},{key:"prependListener",value:function(e,t,n){return this.addListener(e,t,n,!0)}},{key:"prependOnceListener",value:function(e,t){return this.addListener(e,t,1,!0)}},{key:"prependManyListener",value:function(e,t,n){return this.addListener(e,n,t,!0)}},{key:"removeListener_",value:function(e){i(this.listeners_,e),e.eventName&&s(this.eventListeners_[e.eventName])?(i(this.eventListeners_[e.eventName],e),0==this.eventListeners_[e.eventName].length&&delete this.eventListeners_[e.eventName]):e.eventNameRegex&&i(this.regexListeners_,e),this.emit("removeListener",e.eventName||e.eventNameRegex,e.handler)}},{key:"removeAllListeners",value:function(e){var t=this;if(s(e))e.forEach(function(e){return t.removeAllListeners(e)});else if(v(e)&&s(this.eventListeners_[e])){var n=this.eventListeners_[e].slice();n.forEach(function(e){t.removeListener_(e)})}else l(e)?!function(){var n=e,r=t.regexListeners_.filter(function(e){return o(e.eventNameRegex,n)});r.forEach(function(e){return t.removeListener_(e)})}():(this.removeAllListeners(this.eventNames()),this.removeAllListeners(this.regexes()));return this}},{key:"removeListener",value:function(e,t){var n=this;if(s(e)||s(t))!function(){var r=s(e)?e:[e],o=s(t)?t:[t];r.forEach(function(e){o.forEach(function(t){n.removeListener(e,t)})})}();else if(v(e)&&s(this.eventListeners_[e])){var r=this.eventListeners_[e].filter(function(e){return e.handler==t});r.forEach(function(e){return n.removeListener_(e)})}else{if(!l(e))throw new Error("Event name should be string or regex.");!function(){var r=e,i=n.regexListeners_.filter(function(e){return o(e.eventNameRegex,r)&&e.handler==t});i.forEach(function(e){return n.removeListener_(e)})}()}return this}},{key:"eventNames",value:function(){return Object.keys(this.eventListeners_)}},{key:"regexes",value:function(){return this.regexListeners_.map(function(e){return e.eventNameRegex})}},{key:"getMaxListeners",value:function(){return this.maxListeners_}},{key:"setMaxListeners",value:function(e){if(!f(e)||parseInt(e,10)!=e)throw new Error("n must be integer");return this.maxListeners_=e,this}},{key:"getMaxRegexListeners",value:function(){return this.maxRegexListeners_}},{key:"setMaxRegexListeners",value:function(e){if(!f(e)||parseInt(e,10)!=e)throw new Error("n must be integer");return this.maxRegexListeners_=e,this}},{key:"listenerCount",value:function(e){if(v(e))return this.eventListeners_[e]?this.eventListeners_[e].length:0;if(l(e))return this.regexListeners_.filter(function(t){return o(e,t.eventNameRegex)}).length;throw new Error("Event name should be string or regex.")}},{key:"listeners",value:function(e){if(v(e))return this.eventListeners_[e]?this.eventListeners_[e].map(function(e){return e.handler}):[];if(l(e))return this.regexListeners_.filter(function(t){return o(e,t.eventNameRegex)}).map(function(e){return e.handler});throw new Error("Event name should be string or regex.")}},{key:"on",value:function(e,t){return this.addListener(e,t)}},{key:"once",value:function(e,t){return this.addListener(e,t,1)}},{key:"many",value:function(e,t,n){return this.addListener(e,n,t)}},{key:"emit",value:function(e){for(var t=this,n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];if(s(e)){var i=function(){var n=[];return e.forEach(function(e){var o=t.emit.apply(t,[e].concat(r));n=n.concat(o)}),{v:n}}();if("object"===("undefined"==typeof i?"undefined":u(i)))return i.v}else if(!v(e))throw new Error("Event name should be string");var c=[],a={name:e};if(this.eventListeners_[e]){var f=this.eventListeners_[e].map(function(e){return e.execute(Object.assign({},e,{event:a}),r)});c=c.concat(f)}var l=this.regexListeners_.filter(function(t){return t.testRegexWith(e)}).map(function(e){return e.execute(Object.assign({},e,{event:a}),r)});return c=c.concat(l),c.length>0&&c}},{key:"emitAsync",value:function(){return p.all(this.emit.apply(this,arguments))}}]),e}();d.defaultMaxListeners=10,d.defaultMaxRegexListeners=10,d.Listener=h,e.exports=d}]);
//# sourceMappingURL=commonjs.js.map