parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"sC8V":[function(require,module,exports) {

},{}],"boWn":[function(require,module,exports) {
var indexOf=function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;n++)if(e[n]===t)return n;return-1},Object_keys=function(e){if(Object.keys)return Object.keys(e);var t=[];for(var n in e)t.push(n);return t},forEach=function(e,t){if(e.forEach)return e.forEach(t);for(var n=0;n<e.length;n++)t(e[n],n,e)},defineProp=function(){try{return Object.defineProperty({},"_",{}),function(e,t,n){Object.defineProperty(e,t,{writable:!0,enumerable:!1,configurable:!0,value:n})}}catch(e){return function(e,t,n){e[t]=n}}}(),globals=["Array","Boolean","Date","Error","EvalError","Function","Infinity","JSON","Math","NaN","Number","Object","RangeError","ReferenceError","RegExp","String","SyntaxError","TypeError","URIError","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","eval","isFinite","isNaN","parseFloat","parseInt","undefined","unescape"];function Context(){}Context.prototype={};var Script=exports.Script=function(e){if(!(this instanceof Script))return new Script(e);this.code=e};Script.prototype.runInContext=function(e){if(!(e instanceof Context))throw new TypeError("needs a 'context' argument.");var t=document.createElement("iframe");t.style||(t.style={}),t.style.display="none",document.body.appendChild(t);var n=t.contentWindow,r=n.eval,o=n.execScript;!r&&o&&(o.call(n,"null"),r=n.eval),forEach(Object_keys(e),function(t){n[t]=e[t]}),forEach(globals,function(t){e[t]&&(n[t]=e[t])});var c=Object_keys(n),i=r.call(n,this.code);return forEach(Object_keys(n),function(t){(t in e||-1===indexOf(c,t))&&(e[t]=n[t])}),forEach(globals,function(t){t in e||defineProp(e,t,n[t])}),document.body.removeChild(t),i},Script.prototype.runInThisContext=function(){return eval(this.code)},Script.prototype.runInNewContext=function(e){var t=Script.createContext(e),n=this.runInContext(t);return e&&forEach(Object_keys(t),function(n){e[n]=t[n]}),n},forEach(Object_keys(Script.prototype),function(e){exports[e]=Script[e]=function(t){var n=Script(t);return n[e].apply(n,[].slice.call(arguments,1))}}),exports.isContext=function(e){return e instanceof Context},exports.createScript=function(e){return exports.Script(e)},exports.createContext=Script.createContext=function(e){var t=new Context;return"object"==typeof e&&forEach(Object_keys(e),function(n){t[n]=e[n]}),t};
},{}],"g5IB":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"sNrv":[function(require,module,exports) {
var process = require("process");
var r=require("process");function t(r,t){for(var e=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}function e(r){"string"!=typeof r&&(r+="");var t,e=0,n=-1,o=!0;for(t=r.length-1;t>=0;--t)if(47===r.charCodeAt(t)){if(!o){e=t+1;break}}else-1===n&&(o=!1,n=t+1);return-1===n?"":r.slice(e,n)}function n(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}exports.resolve=function(){for(var e="",o=!1,s=arguments.length-1;s>=-1&&!o;s--){var i=s>=0?arguments[s]:r.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(e=i+"/"+e,o="/"===i.charAt(0))}return(o?"/":"")+(e=t(n(e.split("/"),function(r){return!!r}),!o).join("/"))||"."},exports.normalize=function(r){var e=exports.isAbsolute(r),s="/"===o(r,-1);return(r=t(n(r.split("/"),function(r){return!!r}),!e).join("/"))||e||(r="."),r&&s&&(r+="/"),(e?"/":"")+r},exports.isAbsolute=function(r){return"/"===r.charAt(0)},exports.join=function(){var r=Array.prototype.slice.call(arguments,0);return exports.normalize(n(r,function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r}).join("/"))},exports.relative=function(r,t){function e(r){for(var t=0;t<r.length&&""===r[t];t++);for(var e=r.length-1;e>=0&&""===r[e];e--);return t>e?[]:r.slice(t,e-t+1)}r=exports.resolve(r).substr(1),t=exports.resolve(t).substr(1);for(var n=e(r.split("/")),o=e(t.split("/")),s=Math.min(n.length,o.length),i=s,u=0;u<s;u++)if(n[u]!==o[u]){i=u;break}var f=[];for(u=i;u<n.length;u++)f.push("..");return(f=f.concat(o.slice(i))).join("/")},exports.sep="/",exports.delimiter=":",exports.dirname=function(r){if("string"!=typeof r&&(r+=""),0===r.length)return".";for(var t=r.charCodeAt(0),e=47===t,n=-1,o=!0,s=r.length-1;s>=1;--s)if(47===(t=r.charCodeAt(s))){if(!o){n=s;break}}else o=!1;return-1===n?e?"/":".":e&&1===n?"/":r.slice(0,n)},exports.basename=function(r,t){var n=e(r);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},exports.extname=function(r){"string"!=typeof r&&(r+="");for(var t=-1,e=0,n=-1,o=!0,s=0,i=r.length-1;i>=0;--i){var u=r.charCodeAt(i);if(47!==u)-1===n&&(o=!1,n=i+1),46===u?-1===t?t=i:1!==s&&(s=1):-1!==t&&(s=-1);else if(!o){e=i+1;break}}return-1===t||-1===n||0===s||1===s&&t===n-1&&t===e+1?"":r.slice(t,n)};var o="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)};
},{"process":"g5IB"}],"BIqW":[function(require,module,exports) {
var process = require("process");
var __dirname = "/home/ja/repo/date-faker/node_modules/esm";
var e=require("process"),r="/home/ja/repo/date-faker/node_modules/esm",n=function(){return this||Function("return this")()}(),{apply:t,defineProperty:o}=Reflect,{freeze:l}=Object,{hasOwnProperty:a}=Object.prototype,u=Symbol.for,{type:i,versions:s}=e,{filename:c,id:p,parent:_}=module,d=k(s,"electron"),f=d&&"renderer"===i,m="";"string"==typeof p&&p.startsWith("internal/")&&(m=O("internal/esm/loader"));var v,y,h=require("module"),{Script:b}=require("vm"),{createCachedData:g,runInNewContext:q,runInThisContext:w}=b.prototype,{sep:j}=require("path"),{readFileSync:x}=require("fs"),D=new h(p);function O(e){var r;try{var{internalBinding:n}=require("internal/bootstrap/loaders"),t=n("natives");k(t,e)&&(r=t[e])}catch(e){}return"string"==typeof r?r:""}function k(e,r){return null!=e&&t(a,e,[r])}function C(){return T(require,D,P),D.exports}function F(e,r){return C()(e,r)}function I(e,r){try{return x(e,r)}catch(e){}return null}D.filename=c,D.parent=_;var S="",M="";""!==m?(M=m,y={__proto__:null,filename:"esm.js"}):(null===(v=I((S=r+j+"node_modules"+j+".cache"+j+"esm")+j+".data.blob"))&&(v=void 0),null===(M=I(r+j+"esm"+j+"loader.js","utf8"))&&(M=""),y={__proto__:null,cachedData:v,filename:c,produceCachedData:"function"!=typeof g});var T,P,R=new b("const __global__ = this;(function (require, module, __shared__) { "+M+"\n});",y);if(T=f?t(w,R,[{__proto__:null,filename:c}]):t(q,R,[{__proto__:null,global:n},{__proto__:null,filename:c}]),P=C(),""!==S){var{dir:W}=P.package,z=W.get(S);if(void 0===z){var A=v;void 0===A&&(A=null),z={buffer:v,compile:new Map([["esm",{circular:0,code:null,codeWithTDZ:null,filename:null,firstAwaitOutsideFunction:null,firstReturnOutsideFunction:null,mtime:-1,scriptData:A,sourceType:1,transforms:0,yieldIndex:-1}]]),meta:new Map},W.set(S,z)}var{pendingScripts:B}=P,K=B.get(S);void 0===K&&(K=new Map,B.set(S,K)),K.set("esm",R)}o(F,P.symbol.package,{__proto__:null,value:!0}),o(F,P.customInspectKey,{__proto__:null,value:function(){return"esm enabled"}}),o(F,u("esm:package"),{__proto__:null,value:!0}),l(F),module.exports=F;
},{"module":"sC8V","vm":"boWn","path":"sNrv","fs":"sC8V","process":"g5IB"}],"tCUD":[function(require,module,exports) {
"use strict";function e(e){return{addYear:function(t){var n=e.getFullYear()+t;return e.setFullYear(n),e},addMonth:function(t){var n=e.getMonth()+t;return e.setMonth(n),e},addDay:function(t){var n=e.getDate()+t;return e.setDate(n),e},addHour:function(t){var n=e.getHours()+t;return e.setHours(n),e},addMinute:function(t){var n=e.getMinutes()+t;return e.setMinutes(n),e},addSecond:function(t){var n=e.getSeconds()+t;return e.setSeconds(n),e},addMillisecond:function(t){var n=e.getMilliseconds()+t;return e.setMilliseconds(n),e}}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"mx00":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./change-date"));function e(t){return t&&t.__esModule?t:{default:t}}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function r(t,e,o){return(r=n()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&u(o,n.prototype),o}).apply(null,arguments)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var o=Date,a=new Map([["year",function(e){return(0,t.default)(e).addYear}],["month",function(e){return(0,t.default)(e).addMonth}],["day",function(e){return(0,t.default)(e).addDay}],["hour",function(e){return(0,t.default)(e).addHour}],["minute",function(e){return(0,t.default)(e).addMinute}],["second",function(e){return(0,t.default)(e).addSecond}],["millisecond",function(e){return(0,t.default)(e).addMillisecond}]]),c={add:function(t,e){var n=a.get(e)(new o)(t);Date=function(){return 0===arguments.length?new o(n.toISOString()):r(o,Array.prototype.slice.call(arguments))},Date.now=new o(n.toISOString()).getTime(),Date.parse=o.parse,Date.UTC=o.UTC},reset:function(){Date=o}},f=c;exports.default=f;
},{"./change-date":"tCUD"}],"Focm":[function(require,module,exports) {
require=require("esm")(module),module.exports=require("./src/date-faker.js");
},{"esm":"BIqW","./src/date-faker.js":"mx00"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map