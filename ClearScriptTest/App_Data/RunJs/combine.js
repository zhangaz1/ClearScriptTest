﻿// var _= require('./underscore-min.js');
/* eslint no-bitwise: "off" */
/* eslint no-mixed-operators: "off" */
/* eslint no-restricted-syntax: "off" */
/* eslint no-nested-ternary: "off" */
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map

var _ = exports._;

'use strict';

// ////////////////////DocType//////////////////////////////////
var NgUtil = function() {};

NgUtil.inherit = function(subclass, baseclass) {
    function Subproto() {}
    Subproto.prototype = baseclass.prototype;
    subclass.prototype = new Subproto();
    subclass.prototype.constructor = subclass;
};

NgUtil.isValidID = function(strGuid) {
    if (strGuid == null) {
        return false;
    }

    if (strGuid === '00000000-0000-0000-0000-000000000000') {
        return false;
    }

    return true;
};

NgUtil.getGUID = function() {
    // automatically generate a new GUID
    return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[x]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

NgUtil.cloneJson = function(obj) {
    return jQuery.extend(true, {}, obj);
};

NgUtil.cloneJsonUseJQuery = function(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (obj == null || typeof obj !== 'object') {
        return obj;
    }

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i += 1) {
            copy[i] = this.cloneJson(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, 'attr')) {
                copy[attr] = this.cloneJson(obj[attr]);
            }
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
};

NgUtil.getUniqueStr = function(str) {
    var guid = NgUtil.getGUID();
    if (str == null) {
        return guid;
    }
    return guid + ' ' + str;
};

NgUtil.getSafeFonts = function() {
    return [
        'Georgia',
        'Palatino Linotype',
        'Times New Roman',
        'Arial',
        'Arial Black',
        'Comic Sans MS',
        'Impact',
        'Lucida Sans Unicode',
        'Lucida Grande',
        'Tahoma',
        'Trebuchet MS',
        'Verdana',
        'Courier New',
        'Lucida Console'
    ];
};

NgUtil.repeatStr = function(str, repeatTimes) {
    var rtn = '';
    for (var i = 0; i < repeatTimes; i += 1) {
        rtn += str;
    }
    return rtn;
};

NgUtil.getRefreshWindowCallBack = function() {};

NgUtil.isExistInList = function(ls, item) {
    if (ls == null || item == null) {
        return false;
    }

    for (var i = 0; i < ls.length; i += 1) {
        if (item === ls[i]) {
            return true;
        }
    }

    return false;
};


//  判断返回的结果是否是成功的
NgUtil.isSuccess = function(data) {
    data = data.operationResult || data;
    return data && data.ResultCode === 0;
};


NgUtil.contentType = {
    CSV: 'text/csv',
    ZIP: 'application/zip',
    JSON: 'application/json'
};

NgUtil.doDownloadHtml5 = function(fileContent, fileName, fileType) {
    var downloadLink = document.createElement('a');
    downloadLink.download = fileName;
    downloadLink.href = 'data:' + fileType + ';charset=utf-8,' + encodeURIComponent(fileContent);
    downloadLink.onclick = function() {
        document.body.appendChild(downloadLink);
    };
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
};


NgUtil.doDownload = function(fileContent, fileName, fileType) {
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(new Blob([fileContent], { type: fileType }), fileName);
    } else {
        var blob = new Blob([fileContent], { type: 'text/csv' });
        saveAs(blob, fileName);
    }
};

NgUtil.doDownloadFromBase64 = function(data, fileName, fileType) {
    var byteCharacters = atob(data);
    var byteContent = [byteCharacters.length];
    for (var i = 0; i < byteCharacters.length; i += 1) {
        byteContent[i] = byteCharacters.charCodeAt(i);
    }
    var fileContent = new Uint8Array(byteContent);
    NgUtil.doDownload(fileContent, fileName, fileType);
};

NgUtil.UrlInstance = function() {
    var TENANT_ID_KEY = 't';
    var DOMAIN_ID_KEY = 'd';
    var _urlInstance = new URI(window.location.href);

    return {
        getInstanceObj: function() {
            return _urlInstance;
        },
        getQuery: function(key) {
            if (_urlInstance.hasQuery(key)) {
                return _urlInstance.query(true)[key];
            }
            return undefined;
        },
        getTenantId: function() {
            return this.getQuery(TENANT_ID_KEY);
        },
        getDomainId: function() {
            return this.getQuery(DOMAIN_ID_KEY);
        }
    };
};

// path解析不完善: 'a.b.c[0].d' 应写成 'a.b.c.0.d'
NgUtil.getValueFromObjAndPath = function(obj, path, defaultValue) {
    var value = null;
    var keys = path.split('.');

    var tempObj = obj;

    for (var i = 0, len = keys.length; i < len; i += 1) {
        var key = keys[i];

        if (_.isObject(tempObj)) {
            if (i === len - 1) {
                value = tempObj[key];
            } else {
                tempObj = tempObj[key];
            }
        } else {
            break;
        }
    }

    return (value !== null && value !== undefined) ? value : (defaultValue !== undefined ? defaultValue : null);
};

NgUtil.loadImages = function($q, imgUrls) {
    if (!$q) {
        throw new Error('arguments error.');
    }

    var promises = [];

    imgUrls.forEach(function(url) {
        var defer = $q.defer();

        var img = new Image();
        img.onload = function() {
            defer.resolve();
        };
        img.onerror = function() {
            defer.resolve();
        };
        img.src = url;

        promises.push(defer.promise);
    });

    return $q.all(promises);
};
﻿(function(window) {
    'use strict';

    var NetBrain = window.NetBrain || {};
    NetBrain.ns = function(namespace) {
        var levels;
        var nsobj;
        var i;
        if (!namespace || !namespace.length) {
            return null;
        }

        levels = namespace.split('.');
        nsobj = NetBrain;
        for (i = (levels[0] === 'NetBrain') ? 1 : 0; i < levels.length; i += 1) {
            nsobj[levels[i]] = nsobj[levels[i]] || {};
            nsobj = nsobj[levels[i]];
        }
        return nsobj;
    };
    NetBrain.Page = {};
    window.NetBrain = NetBrain;
})((typeof window)!=='undefined'?window:global);

(function(netBrain) {
    'use strict';

    netBrain.ns('LayoutTools');

    //angular.module('nb.layoutTools', []);
})(NetBrain);
(function(netBrain) {
    'use strict';

    var consts = netBrain.ns('LayoutTools.Const');

    consts.Wording = {
        InnerError: {
            UnknownCreateStrategy: 'check: is sample map createStrategy in sampleMapCreateStrategy'
        },
    };

    /**
     * template style中layer的缩放映射关系
     **/
    consts.TemplateStyleScaleMap = {
        '1': 1.2,
        '2': 1.0,
        '3': 0.8
    };

})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.argumentsChecker = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        var myTicket = Symbol();
        var myArgumentsTypes = ['Arguments', 'Array'];

        exports.default = {
            checkArgumentsTypes: checkArgumentsTypes
        };


        // return void(0);

        function checkArgumentsTypes(args, types, ticket) {
            var callBySelf = ticket === myTicket;

            if (!callBySelf) {
                checkArgumentsTypes(arguments, myArgumentsTypes, myTicket);
            }

            var length = callBySelf ? myArgumentsTypes.length : Math.min(args.length, types.length);

            for (var i = 0; i < length; i++) {
                var type = types[i];
                var value = args[i];
                var typeValidator = _['is' + type];

                if (!_.isFunction(typeValidator)) {
                    throw new Error('type error: ' + type);
                }

                if (!typeValidator(value)) {
                    throw new Error('value type error: ' + value + ' is not ' + type);
                }
            }
        }
    });
})(NetBrain);
!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var c="function"==typeof require&&require;if(!u&&c)return c(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var a=n[o]={exports:{}};t[o][0].call(a.exports,function(n){var r=t[o][1][n];return s(r?r:n)},a,a.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(t,n,r){(function(n){"use strict";function define(t,n,e){t[n]||Object[r](t,n,{writable:!0,configurable:!0,value:e})}if(t(295),t(296),t(2),n._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");n._babelPolyfill=!0;var r="defineProperty";define(String.prototype,"padLeft","".padStart),define(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(t){[][t]&&define(Array,t,Function.call.bind([][t]))})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2,295:295,296:296}],2:[function(t,n,r){t(119),n.exports=t(23).RegExp.escape},{119:119,23:23}],3:[function(t,n,r){n.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},{}],4:[function(t,n,r){var e=t(18);n.exports=function(t,n){if("number"!=typeof t&&"Number"!=e(t))throw TypeError(n);return+t}},{18:18}],5:[function(t,n,r){var e=t(117)("unscopables"),i=Array.prototype;void 0==i[e]&&t(40)(i,e,{}),n.exports=function(t){i[e][t]=!0}},{117:117,40:40}],6:[function(t,n,r){n.exports=function(t,n,r,e){if(!(t instanceof n)||void 0!==e&&e in t)throw TypeError(r+": incorrect invocation!");return t}},{}],7:[function(t,n,r){var e=t(49);n.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},{49:49}],8:[function(t,n,r){"use strict";var e=t(109),i=t(105),o=t(108);n.exports=[].copyWithin||function copyWithin(t,n){var r=e(this),u=o(r.length),c=i(t,u),f=i(n,u),a=arguments.length>2?arguments[2]:void 0,s=Math.min((void 0===a?u:i(a,u))-f,u-c),l=1;for(f<c&&c<f+s&&(l=-1,f+=s-1,c+=s-1);s-- >0;)f in r?r[c]=r[f]:delete r[c],c+=l,f+=l;return r}},{105:105,108:108,109:109}],9:[function(t,n,r){"use strict";var e=t(109),i=t(105),o=t(108);n.exports=function fill(t){for(var n=e(this),r=o(n.length),u=arguments.length,c=i(u>1?arguments[1]:void 0,r),f=u>2?arguments[2]:void 0,a=void 0===f?r:i(f,r);a>c;)n[c++]=t;return n}},{105:105,108:108,109:109}],10:[function(t,n,r){var e=t(37);n.exports=function(t,n){var r=[];return e(t,!1,r.push,r,n),r}},{37:37}],11:[function(t,n,r){var e=t(107),i=t(108),o=t(105);n.exports=function(t){return function(n,r,u){var c,f=e(n),a=i(f.length),s=o(u,a);if(t&&r!=r){for(;a>s;)if(c=f[s++],c!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}}},{105:105,107:107,108:108}],12:[function(t,n,r){var e=t(25),i=t(45),o=t(109),u=t(108),c=t(15);n.exports=function(t,n){var r=1==t,f=2==t,a=3==t,s=4==t,l=6==t,h=5==t||l,v=n||c;return function(n,c,p){for(var d,y,g=o(n),b=i(g),x=e(c,p,3),m=u(b.length),w=0,S=r?v(n,m):f?v(n,0):void 0;m>w;w++)if((h||w in b)&&(d=b[w],y=x(d,w,g),t))if(r)S[w]=y;else if(y)switch(t){case 3:return!0;case 5:return d;case 6:return w;case 2:S.push(d)}else if(s)return!1;return l?-1:a||s?s:S}}},{108:108,109:109,15:15,25:25,45:45}],13:[function(t,n,r){var e=t(3),i=t(109),o=t(45),u=t(108);n.exports=function(t,n,r,c,f){e(n);var a=i(t),s=o(a),l=u(a.length),h=f?l-1:0,v=f?-1:1;if(r<2)for(;;){if(h in s){c=s[h],h+=v;break}if(h+=v,f?h<0:l<=h)throw TypeError("Reduce of empty array with no initial value")}for(;f?h>=0:l>h;h+=v)h in s&&(c=n(c,s[h],h,a));return c}},{108:108,109:109,3:3,45:45}],14:[function(t,n,r){var e=t(49),i=t(47),o=t(117)("species");n.exports=function(t){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)||(n=void 0),e(n)&&(n=n[o],null===n&&(n=void 0))),void 0===n?Array:n}},{117:117,47:47,49:49}],15:[function(t,n,r){var e=t(14);n.exports=function(t,n){return new(e(t))(n)}},{14:14}],16:[function(t,n,r){"use strict";var e=t(3),i=t(49),o=t(44),u=[].slice,c={},f=function(t,n,r){if(!(n in c)){for(var e=[],i=0;i<n;i++)e[i]="a["+i+"]";c[n]=Function("F,a","return new F("+e.join(",")+")")}return c[n](t,r)};n.exports=Function.bind||function bind(t){var n=e(this),r=u.call(arguments,1),c=function(){var e=r.concat(u.call(arguments));return this instanceof c?f(n,e.length,e):o(n,e,t)};return i(n.prototype)&&(c.prototype=n.prototype),c}},{3:3,44:44,49:49}],17:[function(t,n,r){var e=t(18),i=t(117)("toStringTag"),o="Arguments"==e(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(t){}};n.exports=function(t){var n,r,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=u(n=Object(t),i))?r:o?e(n):"Object"==(c=e(n))&&"function"==typeof n.callee?"Arguments":c}},{117:117,18:18}],18:[function(t,n,r){var e={}.toString;n.exports=function(t){return e.call(t).slice(8,-1)}},{}],19:[function(t,n,r){"use strict";var e=t(67).f,i=t(66),o=t(86),u=t(25),c=t(6),f=t(27),a=t(37),s=t(53),l=t(55),h=t(91),v=t(28),p=t(62).fastKey,d=v?"_s":"size",y=function(t,n){var r,e=p(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r};n.exports={getConstructor:function(t,n,r,s){var l=t(function(t,e){c(t,l,n,"_i"),t._i=i(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=e&&a(e,r,t[s],t)});return o(l.prototype,{clear:function clear(){for(var t=this,n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var n=this,r=y(n,t);if(r){var e=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=e),e&&(e.p=i),n._f==r&&(n._f=e),n._l==r&&(n._l=i),n[d]--}return!!r},forEach:function forEach(t){c(this,l,"forEach");for(var n,r=u(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function has(t){return!!y(this,t)}}),v&&e(l.prototype,"size",{get:function(){return f(this[d])}}),l},def:function(t,n,r){var e,i,o=y(t,n);return o?o.v=r:(t._l=o={i:i=p(n,!0),k:n,v:r,p:e=t._l,n:void 0,r:!1},t._f||(t._f=o),e&&(e.n=o),t[d]++,"F"!==i&&(t._i[i]=o)),t},getEntry:y,setStrong:function(t,n,r){s(t,n,function(t,n){this._t=t,this._k=n,this._l=void 0},function(){for(var t=this,n=t._k,r=t._l;r&&r.r;)r=r.p;return t._t&&(t._l=r=r?r.n:t._t._f)?"keys"==n?l(0,r.k):"values"==n?l(0,r.v):l(0,[r.k,r.v]):(t._t=void 0,l(1))},r?"entries":"values",!r,!0),h(n)}}},{25:25,27:27,28:28,37:37,53:53,55:55,6:6,62:62,66:66,67:67,86:86,91:91}],20:[function(t,n,r){var e=t(17),i=t(10);n.exports=function(t){return function toJSON(){if(e(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},{10:10,17:17}],21:[function(t,n,r){"use strict";var e=t(86),i=t(62).getWeak,o=t(7),u=t(49),c=t(6),f=t(37),a=t(12),s=t(39),l=a(5),h=a(6),v=0,p=function(t){return t._l||(t._l=new d)},d=function(){this.a=[]},y=function(t,n){return l(t.a,function(t){return t[0]===n})};d.prototype={get:function(t){var n=y(this,t);if(n)return n[1]},has:function(t){return!!y(this,t)},set:function(t,n){var r=y(this,t);r?r[1]=n:this.a.push([t,n])},delete:function(t){var n=h(this.a,function(n){return n[0]===t});return~n&&this.a.splice(n,1),!!~n}},n.exports={getConstructor:function(t,n,r,o){var a=t(function(t,e){c(t,a,n,"_i"),t._i=v++,t._l=void 0,void 0!=e&&f(e,r,t[o],t)});return e(a.prototype,{delete:function(t){if(!u(t))return!1;var n=i(t);return n===!0?p(this).delete(t):n&&s(n,this._i)&&delete n[this._i]},has:function has(t){if(!u(t))return!1;var n=i(t);return n===!0?p(this).has(t):n&&s(n,this._i)}}),a},def:function(t,n,r){var e=i(o(n),!0);return e===!0?p(t).set(n,r):e[t._i]=r,t},ufstore:p}},{12:12,37:37,39:39,49:49,6:6,62:62,7:7,86:86}],22:[function(t,n,r){"use strict";var e=t(38),i=t(32),o=t(87),u=t(86),c=t(62),f=t(37),a=t(6),s=t(49),l=t(34),h=t(54),v=t(92),p=t(43);n.exports=function(t,n,r,d,y,g){var b=e[t],x=b,m=y?"set":"add",w=x&&x.prototype,S={},_=function(t){var n=w[t];o(w,t,"delete"==t?function(t){return!(g&&!s(t))&&n.call(this,0===t?0:t)}:"has"==t?function has(t){return!(g&&!s(t))&&n.call(this,0===t?0:t)}:"get"==t?function get(t){return g&&!s(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function add(t){return n.call(this,0===t?0:t),this}:function set(t,r){return n.call(this,0===t?0:t,r),this})};if("function"==typeof x&&(g||w.forEach&&!l(function(){(new x).entries().next()}))){var E=new x,O=E[m](g?{}:-0,1)!=E,F=l(function(){E.has(1)}),P=h(function(t){new x(t)}),A=!g&&l(function(){for(var t=new x,n=5;n--;)t[m](n,n);return!t.has(-0)});P||(x=n(function(n,r){a(n,x,t);var e=p(new b,n,x);return void 0!=r&&f(r,y,e[m],e),e}),x.prototype=w,w.constructor=x),(F||A)&&(_("delete"),_("has"),y&&_("get")),(A||O)&&_(m),g&&w.clear&&delete w.clear}else x=d.getConstructor(n,t,y,m),u(x.prototype,r),c.NEED=!0;return v(x,t),S[t]=x,i(i.G+i.W+i.F*(x!=b),S),g||d.setStrong(x,t,y),x}},{32:32,34:34,37:37,38:38,43:43,49:49,54:54,6:6,62:62,86:86,87:87,92:92}],23:[function(t,n,r){var e=n.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},{}],24:[function(t,n,r){"use strict";var e=t(67),i=t(85);n.exports=function(t,n,r){n in t?e.f(t,n,i(0,r)):t[n]=r}},{67:67,85:85}],25:[function(t,n,r){var e=t(3);n.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,i){return t.call(n,r,e,i)}}return function(){return t.apply(n,arguments)}}},{3:3}],26:[function(t,n,r){"use strict";var e=t(7),i=t(110),o="number";n.exports=function(t){if("string"!==t&&t!==o&&"default"!==t)throw TypeError("Incorrect hint");return i(e(this),t!=o)}},{110:110,7:7}],27:[function(t,n,r){n.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},{}],28:[function(t,n,r){n.exports=!t(34)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{34:34}],29:[function(t,n,r){var e=t(49),i=t(38).document,o=e(i)&&e(i.createElement);n.exports=function(t){return o?i.createElement(t):{}}},{38:38,49:49}],30:[function(t,n,r){n.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},{}],31:[function(t,n,r){var e=t(76),i=t(73),o=t(77);n.exports=function(t){var n=e(t),r=i.f;if(r)for(var u,c=r(t),f=o.f,a=0;c.length>a;)f.call(t,u=c[a++])&&n.push(u);return n}},{73:73,76:76,77:77}],32:[function(t,n,r){var e=t(38),i=t(23),o=t(40),u=t(87),c=t(25),f="prototype",a=function(t,n,r){var s,l,h,v,p=t&a.F,d=t&a.G,y=t&a.S,g=t&a.P,b=t&a.B,x=d?e:y?e[n]||(e[n]={}):(e[n]||{})[f],m=d?i:i[n]||(i[n]={}),w=m[f]||(m[f]={});d&&(r=n);for(s in r)l=!p&&x&&void 0!==x[s],h=(l?x:r)[s],v=b&&l?c(h,e):g&&"function"==typeof h?c(Function.call,h):h,x&&u(x,s,h,t&a.U),m[s]!=h&&o(m,s,v),g&&w[s]!=h&&(w[s]=h)};e.core=i,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,n.exports=a},{23:23,25:25,38:38,40:40,87:87}],33:[function(t,n,r){var e=t(117)("match");n.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,!"/./"[t](n)}catch(t){}}return!0}},{117:117}],34:[function(t,n,r){n.exports=function(t){try{return!!t()}catch(t){return!0}}},{}],35:[function(t,n,r){"use strict";var e=t(40),i=t(87),o=t(34),u=t(27),c=t(117);n.exports=function(t,n,r){var f=c(t),a=r(u,f,""[t]),s=a[0],l=a[1];o(function(){var n={};return n[f]=function(){return 7},7!=""[t](n)})&&(i(String.prototype,t,s),e(RegExp.prototype,f,2==n?function(t,n){return l.call(t,this,n)}:function(t){return l.call(t,this)}))}},{117:117,27:27,34:34,40:40,87:87}],36:[function(t,n,r){"use strict";var e=t(7);n.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},{7:7}],37:[function(t,n,r){var e=t(25),i=t(51),o=t(46),u=t(7),c=t(108),f=t(118),a={},s={},r=n.exports=function(t,n,r,l,h){var v,p,d,y,g=h?function(){return t}:f(t),b=e(r,l,n?2:1),x=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(o(g)){for(v=c(t.length);v>x;x++)if(y=n?b(u(p=t[x])[0],p[1]):b(t[x]),y===a||y===s)return y}else for(d=g.call(t);!(p=d.next()).done;)if(y=i(d,b,p.value,n),y===a||y===s)return y};r.BREAK=a,r.RETURN=s},{108:108,118:118,25:25,46:46,51:51,7:7}],38:[function(t,n,r){var e=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},{}],39:[function(t,n,r){var e={}.hasOwnProperty;n.exports=function(t,n){return e.call(t,n)}},{}],40:[function(t,n,r){var e=t(67),i=t(85);n.exports=t(28)?function(t,n,r){return e.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},{28:28,67:67,85:85}],41:[function(t,n,r){n.exports=t(38).document&&document.documentElement},{38:38}],42:[function(t,n,r){n.exports=!t(28)&&!t(34)(function(){return 7!=Object.defineProperty(t(29)("div"),"a",{get:function(){return 7}}).a})},{28:28,29:29,34:34}],43:[function(t,n,r){var e=t(49),i=t(90).set;n.exports=function(t,n,r){var o,u=n.constructor;return u!==r&&"function"==typeof u&&(o=u.prototype)!==r.prototype&&e(o)&&i&&i(t,o),t}},{49:49,90:90}],44:[function(t,n,r){n.exports=function(t,n,r){var e=void 0===r;switch(n.length){case 0:return e?t():t.call(r);case 1:return e?t(n[0]):t.call(r,n[0]);case 2:return e?t(n[0],n[1]):t.call(r,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(r,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(r,n[0],n[1],n[2],n[3])}return t.apply(r,n)}},{}],45:[function(t,n,r){var e=t(18);n.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},{18:18}],46:[function(t,n,r){var e=t(56),i=t(117)("iterator"),o=Array.prototype;n.exports=function(t){return void 0!==t&&(e.Array===t||o[i]===t)}},{117:117,56:56}],47:[function(t,n,r){var e=t(18);n.exports=Array.isArray||function isArray(t){return"Array"==e(t)}},{18:18}],48:[function(t,n,r){var e=t(49),i=Math.floor;n.exports=function isInteger(t){return!e(t)&&isFinite(t)&&i(t)===t}},{49:49}],49:[function(t,n,r){n.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},{}],50:[function(t,n,r){var e=t(49),i=t(18),o=t(117)("match");n.exports=function(t){var n;return e(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==i(t))}},{117:117,18:18,49:49}],51:[function(t,n,r){var e=t(7);n.exports=function(t,n,r,i){try{return i?n(e(r)[0],r[1]):n(r)}catch(n){var o=t.return;throw void 0!==o&&e(o.call(t)),n}}},{7:7}],52:[function(t,n,r){"use strict";var e=t(66),i=t(85),o=t(92),u={};t(40)(u,t(117)("iterator"),function(){return this}),n.exports=function(t,n,r){t.prototype=e(u,{next:i(1,r)}),o(t,n+" Iterator")}},{117:117,40:40,66:66,85:85,92:92}],53:[function(t,n,r){"use strict";var e=t(58),i=t(32),o=t(87),u=t(40),c=t(39),f=t(56),a=t(52),s=t(92),l=t(74),h=t(117)("iterator"),v=!([].keys&&"next"in[].keys()),p="@@iterator",d="keys",y="values",g=function(){return this};n.exports=function(t,n,r,b,x,m,w){a(r,n,b);var S,_,E,O=function(t){if(!v&&t in M)return M[t];switch(t){case d:return function keys(){return new r(this,t)};case y:return function values(){return new r(this,t)}}return function entries(){return new r(this,t)}},F=n+" Iterator",P=x==y,A=!1,M=t.prototype,I=M[h]||M[p]||x&&M[x],j=I||O(x),N=x?P?O("entries"):j:void 0,k="Array"==n?M.entries||I:I;if(k&&(E=l(k.call(new t)),E!==Object.prototype&&(s(E,F,!0),e||c(E,h)||u(E,h,g))),P&&I&&I.name!==y&&(A=!0,j=function values(){return I.call(this)}),e&&!w||!v&&!A&&M[h]||u(M,h,j),f[n]=j,f[F]=g,x)if(S={values:P?j:O(y),keys:m?j:O(d),entries:N},w)for(_ in S)_ in M||o(M,_,S[_]);else i(i.P+i.F*(v||A),n,S);return S}},{117:117,32:32,39:39,40:40,52:52,56:56,58:58,74:74,87:87,92:92}],54:[function(t,n,r){var e=t(117)("iterator"),i=!1;try{var o=[7][e]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}n.exports=function(t,n){if(!n&&!i)return!1;var r=!1;try{var o=[7],u=o[e]();u.next=function(){return{done:r=!0}},o[e]=function(){return u},t(o)}catch(t){}return r}},{117:117}],55:[function(t,n,r){n.exports=function(t,n){return{value:n,done:!!t}}},{}],56:[function(t,n,r){n.exports={}},{}],57:[function(t,n,r){var e=t(76),i=t(107);n.exports=function(t,n){for(var r,o=i(t),u=e(o),c=u.length,f=0;c>f;)if(o[r=u[f++]]===n)return r}},{107:107,76:76}],58:[function(t,n,r){n.exports=!1},{}],59:[function(t,n,r){var e=Math.expm1;n.exports=!e||e(10)>22025.465794806718||e(10)<22025.465794806718||e(-2e-17)!=-2e-17?function expm1(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:e},{}],60:[function(t,n,r){n.exports=Math.log1p||function log1p(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},{}],61:[function(t,n,r){n.exports=Math.sign||function sign(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},{}],62:[function(t,n,r){var e=t(114)("meta"),i=t(49),o=t(39),u=t(67).f,c=0,f=Object.isExtensible||function(){return!0},a=!t(34)(function(){return f(Object.preventExtensions({}))}),s=function(t){u(t,e,{value:{i:"O"+ ++c,w:{}}})},l=function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,e)){if(!f(t))return"F";if(!n)return"E";s(t)}return t[e].i},h=function(t,n){if(!o(t,e)){if(!f(t))return!0;if(!n)return!1;s(t)}return t[e].w},v=function(t){return a&&p.NEED&&f(t)&&!o(t,e)&&s(t),t},p=n.exports={KEY:e,NEED:!1,fastKey:l,getWeak:h,onFreeze:v}},{114:114,34:34,39:39,49:49,67:67}],63:[function(t,n,r){var e=t(149),i=t(32),o=t(94)("metadata"),u=o.store||(o.store=new(t(255))),c=function(t,n,r){var i=u.get(t);if(!i){if(!r)return;u.set(t,i=new e)}var o=i.get(n);if(!o){if(!r)return;i.set(n,o=new e)}return o},f=function(t,n,r){var e=c(n,r,!1);return void 0!==e&&e.has(t)},a=function(t,n,r){var e=c(n,r,!1);return void 0===e?void 0:e.get(t)},s=function(t,n,r,e){c(r,e,!0).set(t,n)},l=function(t,n){var r=c(t,n,!1),e=[];return r&&r.forEach(function(t,n){e.push(n)}),e},h=function(t){return void 0===t||"symbol"==typeof t?t:String(t)},v=function(t){i(i.S,"Reflect",t)};n.exports={store:u,map:c,has:f,get:a,set:s,keys:l,key:h,exp:v}},{149:149,255:255,32:32,94:94}],64:[function(t,n,r){var e=t(38),i=t(104).set,o=e.MutationObserver||e.WebKitMutationObserver,u=e.process,c=e.Promise,f="process"==t(18)(u);n.exports=function(){var t,n,r,a=function(){var e,i;for(f&&(e=u.domain)&&e.exit();t;){i=t.fn,t=t.next;try{i()}catch(e){throw t?r():n=void 0,e}}n=void 0,e&&e.enter()};if(f)r=function(){u.nextTick(a)};else if(o){var s=!0,l=document.createTextNode("");new o(a).observe(l,{characterData:!0}),r=function(){l.data=s=!s}}else if(c&&c.resolve){var h=c.resolve();r=function(){h.then(a)}}else r=function(){i.call(e,a)};return function(e){var i={fn:e,next:void 0};n&&(n.next=i),t||(t=i,r()),n=i}}},{104:104,18:18,38:38}],65:[function(t,n,r){"use strict";var e=t(76),i=t(73),o=t(77),u=t(109),c=t(45),f=Object.assign;n.exports=!f||t(34)(function(){var t={},n={},r=Symbol(),e="abcdefghijklmnopqrst";return t[r]=7,e.split("").forEach(function(t){n[t]=t}),7!=f({},t)[r]||Object.keys(f({},n)).join("")!=e})?function assign(t,n){for(var r=u(t),f=arguments.length,a=1,s=i.f,l=o.f;f>a;)for(var h,v=c(arguments[a++]),p=s?e(v).concat(s(v)):e(v),d=p.length,y=0;d>y;)l.call(v,h=p[y++])&&(r[h]=v[h]);return r}:f},{109:109,34:34,45:45,73:73,76:76,77:77}],66:[function(t,n,r){var e=t(7),i=t(68),o=t(30),u=t(93)("IE_PROTO"),c=function(){},f="prototype",a=function(){var n,r=t(29)("iframe"),e=o.length,i="<",u=">";for(r.style.display="none",t(41).appendChild(r),r.src="javascript:",n=r.contentWindow.document,n.open(),n.write(i+"script"+u+"document.F=Object"+i+"/script"+u),n.close(),a=n.F;e--;)delete a[f][o[e]];return a()};n.exports=Object.create||function create(t,n){var r;return null!==t?(c[f]=e(t),r=new c,c[f]=null,r[u]=t):r=a(),void 0===n?r:i(r,n)}},{29:29,30:30,41:41,68:68,7:7,93:93}],67:[function(t,n,r){var e=t(7),i=t(42),o=t(110),u=Object.defineProperty;r.f=t(28)?Object.defineProperty:function defineProperty(t,n,r){if(e(t),n=o(n,!0),e(r),i)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},{110:110,28:28,42:42,7:7}],68:[function(t,n,r){var e=t(67),i=t(7),o=t(76);n.exports=t(28)?Object.defineProperties:function defineProperties(t,n){i(t);for(var r,u=o(n),c=u.length,f=0;c>f;)e.f(t,r=u[f++],n[r]);return t}},{28:28,67:67,7:7,76:76}],69:[function(t,n,r){n.exports=t(58)||!t(34)(function(){var n=Math.random();__defineSetter__.call(null,n,function(){}),delete t(38)[n]})},{34:34,38:38,58:58}],70:[function(t,n,r){var e=t(77),i=t(85),o=t(107),u=t(110),c=t(39),f=t(42),a=Object.getOwnPropertyDescriptor;r.f=t(28)?a:function getOwnPropertyDescriptor(t,n){if(t=o(t),n=u(n,!0),f)try{return a(t,n)}catch(t){}if(c(t,n))return i(!e.f.call(t,n),t[n])}},{107:107,110:110,28:28,39:39,42:42,77:77,85:85}],71:[function(t,n,r){var e=t(107),i=t(72).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(t){return u.slice()}};n.exports.f=function getOwnPropertyNames(t){return u&&"[object Window]"==o.call(t)?c(t):i(e(t))}},{107:107,72:72}],72:[function(t,n,r){var e=t(75),i=t(30).concat("length","prototype");r.f=Object.getOwnPropertyNames||function getOwnPropertyNames(t){return e(t,i)}},{30:30,75:75}],73:[function(t,n,r){r.f=Object.getOwnPropertySymbols},{}],74:[function(t,n,r){var e=t(39),i=t(109),o=t(93)("IE_PROTO"),u=Object.prototype;n.exports=Object.getPrototypeOf||function(t){return t=i(t),e(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},{109:109,39:39,93:93}],75:[function(t,n,r){var e=t(39),i=t(107),o=t(11)(!1),u=t(93)("IE_PROTO");n.exports=function(t,n){var r,c=i(t),f=0,a=[];for(r in c)r!=u&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~o(a,r)||a.push(r));return a}},{107:107,11:11,39:39,93:93}],76:[function(t,n,r){var e=t(75),i=t(30);n.exports=Object.keys||function keys(t){return e(t,i)}},{30:30,75:75}],77:[function(t,n,r){r.f={}.propertyIsEnumerable},{}],78:[function(t,n,r){var e=t(32),i=t(23),o=t(34);n.exports=function(t,n){var r=(i.Object||{})[t]||Object[t],u={};u[t]=n(r),e(e.S+e.F*o(function(){r(1)}),"Object",u)}},{23:23,32:32,34:34}],79:[function(t,n,r){var e=t(76),i=t(107),o=t(77).f;n.exports=function(t){return function(n){for(var r,u=i(n),c=e(u),f=c.length,a=0,s=[];f>a;)o.call(u,r=c[a++])&&s.push(t?[r,u[r]]:u[r]);return s}}},{107:107,76:76,77:77}],80:[function(t,n,r){var e=t(72),i=t(73),o=t(7),u=t(38).Reflect;n.exports=u&&u.ownKeys||function ownKeys(t){var n=e.f(o(t)),r=i.f;return r?n.concat(r(t)):n}},{38:38,7:7,72:72,73:73}],81:[function(t,n,r){var e=t(38).parseFloat,i=t(102).trim;n.exports=1/e(t(103)+"-0")!==-(1/0)?function parseFloat(t){var n=i(String(t),3),r=e(n);return 0===r&&"-"==n.charAt(0)?-0:r}:e},{102:102,103:103,38:38}],82:[function(t,n,r){var e=t(38).parseInt,i=t(102).trim,o=t(103),u=/^[\-+]?0[xX]/;n.exports=8!==e(o+"08")||22!==e(o+"0x16")?function parseInt(t,n){var r=i(String(t),3);return e(r,n>>>0||(u.test(r)?16:10))}:e},{102:102,103:103,38:38}],83:[function(t,n,r){"use strict";var e=t(84),i=t(44),o=t(3);n.exports=function(){for(var t=o(this),n=arguments.length,r=Array(n),u=0,c=e._,f=!1;n>u;)(r[u]=arguments[u++])===c&&(f=!0);return function(){var e,o=this,u=arguments.length,a=0,s=0;if(!f&&!u)return i(t,r,o);if(e=r.slice(),f)for(;n>a;a++)e[a]===c&&(e[a]=arguments[s++]);for(;u>s;)e.push(arguments[s++]);return i(t,e,o)}}},{3:3,44:44,84:84}],84:[function(t,n,r){n.exports=t(38)},{38:38}],85:[function(t,n,r){n.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},{}],86:[function(t,n,r){var e=t(87);n.exports=function(t,n,r){for(var i in n)e(t,i,n[i],r);return t}},{87:87}],87:[function(t,n,r){var e=t(38),i=t(40),o=t(39),u=t(114)("src"),c="toString",f=Function[c],a=(""+f).split(c);t(23).inspectSource=function(t){return f.call(t)},(n.exports=function(t,n,r,c){var f="function"==typeof r;f&&(o(r,"name")||i(r,"name",n)),t[n]!==r&&(f&&(o(r,u)||i(r,u,t[n]?""+t[n]:a.join(String(n)))),t===e?t[n]=r:c?t[n]?t[n]=r:i(t,n,r):(delete t[n],i(t,n,r)))})(Function.prototype,c,function toString(){return"function"==typeof this&&this[u]||f.call(this)})},{114:114,23:23,38:38,39:39,40:40}],88:[function(t,n,r){n.exports=function(t,n){var r=n===Object(n)?function(t){return n[t]}:n;return function(n){return String(n).replace(t,r)}}},{}],89:[function(t,n,r){n.exports=Object.is||function is(t,n){return t===n?0!==t||1/t===1/n:t!=t&&n!=n}},{}],90:[function(t,n,r){var e=t(49),i=t(7),o=function(t,n){if(i(t),!e(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};n.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(n,r,e){try{e=t(25)(Function.call,t(70).f(Object.prototype,"__proto__").set,2),e(n,[]),r=!(n instanceof Array)}catch(t){r=!0}return function setPrototypeOf(t,n){return o(t,n),r?t.__proto__=n:e(t,n),t}}({},!1):void 0),check:o}},{25:25,49:49,7:7,70:70}],91:[function(t,n,r){"use strict";var e=t(38),i=t(67),o=t(28),u=t(117)("species");n.exports=function(t){var n=e[t];o&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},{117:117,28:28,38:38,67:67}],92:[function(t,n,r){var e=t(67).f,i=t(39),o=t(117)("toStringTag");n.exports=function(t,n,r){t&&!i(t=r?t:t.prototype,o)&&e(t,o,{configurable:!0,value:n})}},{117:117,39:39,67:67}],93:[function(t,n,r){var e=t(94)("keys"),i=t(114);n.exports=function(t){return e[t]||(e[t]=i(t))}},{114:114,94:94}],94:[function(t,n,r){var e=t(38),i="__core-js_shared__",o=e[i]||(e[i]={});n.exports=function(t){return o[t]||(o[t]={})}},{38:38}],95:[function(t,n,r){var e=t(7),i=t(3),o=t(117)("species");n.exports=function(t,n){var r,u=e(t).constructor;return void 0===u||void 0==(r=e(u)[o])?n:i(r)}},{117:117,3:3,7:7}],96:[function(t,n,r){var e=t(34);n.exports=function(t,n){return!!t&&e(function(){n?t.call(null,function(){},1):t.call(null)})}},{34:34}],97:[function(t,n,r){var e=t(106),i=t(27);n.exports=function(t){return function(n,r){var o,u,c=String(i(n)),f=e(r),a=c.length;return f<0||f>=a?t?"":void 0:(o=c.charCodeAt(f),o<55296||o>56319||f+1===a||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):o:t?c.slice(f,f+2):(o-55296<<10)+(u-56320)+65536)}}},{106:106,27:27}],98:[function(t,n,r){var e=t(50),i=t(27);n.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(t))}},{27:27,50:50}],99:[function(t,n,r){var e=t(32),i=t(34),o=t(27),u=/"/g,c=function(t,n,r,e){var i=String(o(t)),c="<"+n;return""!==r&&(c+=" "+r+'="'+String(e).replace(u,"&quot;")+'"'),c+">"+i+"</"+n+">"};n.exports=function(t,n){var r={};r[t]=n(c),e(e.P+e.F*i(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",r)}},{27:27,32:32,34:34}],100:[function(t,n,r){var e=t(108),i=t(101),o=t(27);n.exports=function(t,n,r,u){var c=String(o(t)),f=c.length,a=void 0===r?" ":String(r),s=e(n);if(s<=f||""==a)return c;var l=s-f,h=i.call(a,Math.ceil(l/a.length));return h.length>l&&(h=h.slice(0,l)),u?h+c:c+h}},{101:101,108:108,27:27}],101:[function(t,n,r){"use strict";var e=t(106),i=t(27);n.exports=function repeat(t){var n=String(i(this)),r="",o=e(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(n+=n))1&o&&(r+=n);return r}},{106:106,27:27}],102:[function(t,n,r){var e=t(32),i=t(27),o=t(34),u=t(103),c="["+u+"]",f="​
",a=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),l=function(t,n,r){var i={},c=o(function(){return!!u[t]()||f[t]()!=f}),a=i[t]=c?n(h):u[t];r&&(i[r]=a),e(e.P+e.F*c,"String",i)},h=l.trim=function(t,n){return t=String(i(t)),1&n&&(t=t.replace(a,"")),2&n&&(t=t.replace(s,"")),t};n.exports=l},{103:103,27:27,32:32,34:34}],103:[function(t,n,r){n.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},{}],104:[function(t,n,r){var e,i,o,u=t(25),c=t(44),f=t(41),a=t(29),s=t(38),l=s.process,h=s.setImmediate,v=s.clearImmediate,p=s.MessageChannel,d=0,y={},g="onreadystatechange",b=function(){var t=+this;if(y.hasOwnProperty(t)){var n=y[t];delete y[t],n()}},x=function(t){b.call(t.data)};h&&v||(h=function setImmediate(t){for(var n=[],r=1;arguments.length>r;)n.push(arguments[r++]);return y[++d]=function(){c("function"==typeof t?t:Function(t),n)},e(d),d},v=function clearImmediate(t){delete y[t]},"process"==t(18)(l)?e=function(t){l.nextTick(u(b,t,1))}:p?(i=new p,o=i.port2,i.port1.onmessage=x,e=u(o.postMessage,o,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(e=function(t){s.postMessage(t+"","*")},s.addEventListener("message",x,!1)):e=g in a("script")?function(t){f.appendChild(a("script"))[g]=function(){f.removeChild(this),b.call(t)}}:function(t){setTimeout(u(b,t,1),0)}),n.exports={set:h,clear:v}},{18:18,25:25,29:29,38:38,41:41,44:44}],105:[function(t,n,r){var e=t(106),i=Math.max,o=Math.min;n.exports=function(t,n){return t=e(t),t<0?i(t+n,0):o(t,n)}},{106:106}],106:[function(t,n,r){var e=Math.ceil,i=Math.floor;n.exports=function(t){return isNaN(t=+t)?0:(t>0?i:e)(t)}},{}],107:[function(t,n,r){var e=t(45),i=t(27);n.exports=function(t){return e(i(t))}},{27:27,45:45}],108:[function(t,n,r){var e=t(106),i=Math.min;n.exports=function(t){return t>0?i(e(t),9007199254740991):0}},{106:106}],109:[function(t,n,r){var e=t(27);n.exports=function(t){return Object(e(t))}},{27:27}],110:[function(t,n,r){var e=t(49);n.exports=function(t,n){if(!e(t))return t;var r,i;if(n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!e(i=r.call(t)))return i;if(!n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},{49:49}],111:[function(t,n,r){"use strict";if(t(28)){var e=t(58),i=t(38),o=t(34),u=t(32),c=t(113),f=t(112),a=t(25),s=t(6),l=t(85),h=t(40),v=t(86),p=t(106),d=t(108),y=t(105),g=t(110),b=t(39),x=t(89),m=t(17),w=t(49),S=t(109),_=t(46),E=t(66),O=t(74),F=t(72).f,P=t(118),A=t(114),M=t(117),I=t(12),j=t(11),N=t(95),k=t(130),R=t(56),T=t(54),L=t(91),C=t(9),U=t(8),G=t(67),D=t(70),W=G.f,B=D.f,V=i.RangeError,z=i.TypeError,K=i.Uint8Array,J="ArrayBuffer",Y="Shared"+J,q="BYTES_PER_ELEMENT",X="prototype",$=Array[X],H=f.ArrayBuffer,Z=f.DataView,Q=I(0),tt=I(2),nt=I(3),rt=I(4),et=I(5),it=I(6),ot=j(!0),ut=j(!1),ct=k.values,ft=k.keys,at=k.entries,st=$.lastIndexOf,lt=$.reduce,ht=$.reduceRight,vt=$.join,pt=$.sort,dt=$.slice,yt=$.toString,gt=$.toLocaleString,bt=M("iterator"),xt=M("toStringTag"),mt=A("typed_constructor"),wt=A("def_constructor"),St=c.CONSTR,_t=c.TYPED,Et=c.VIEW,Ot="Wrong length!",Ft=I(1,function(t,n){return Nt(N(t,t[wt]),n)}),Pt=o(function(){return 1===new K(new Uint16Array([1]).buffer)[0]}),At=!!K&&!!K[X].set&&o(function(){new K(1).set({})}),Mt=function(t,n){if(void 0===t)throw z(Ot);var r=+t,e=d(t);if(n&&!x(r,e))throw V(Ot);return e},It=function(t,n){var r=p(t);if(r<0||r%n)throw V("Wrong offset!");return r},jt=function(t){if(w(t)&&_t in t)return t;throw z(t+" is not a typed array!")},Nt=function(t,n){if(!(w(t)&&mt in t))throw z("It is not a typed array constructor!");return new t(n)},kt=function(t,n){return Rt(N(t,t[wt]),n)},Rt=function(t,n){for(var r=0,e=n.length,i=Nt(t,e);e>r;)i[r]=n[r++];return i},Tt=function(t,n,r){W(t,n,{get:function(){return this._d[r]}})},Lt=function from(t){var n,r,e,i,o,u,c=S(t),f=arguments.length,s=f>1?arguments[1]:void 0,l=void 0!==s,h=P(c);if(void 0!=h&&!_(h)){for(u=h.call(c),e=[],n=0;!(o=u.next()).done;n++)e.push(o.value);c=e}for(l&&f>2&&(s=a(s,arguments[2],2)),n=0,r=d(c.length),i=Nt(this,r);r>n;n++)i[n]=l?s(c[n],n):c[n];return i},Ct=function of(){for(var t=0,n=arguments.length,r=Nt(this,n);n>t;)r[t]=arguments[t++];return r},Ut=!!K&&o(function(){gt.call(new K(1))}),Gt=function toLocaleString(){return gt.apply(Ut?dt.call(jt(this)):jt(this),arguments)},Dt={copyWithin:function copyWithin(t,n){return U.call(jt(this),t,n,arguments.length>2?arguments[2]:void 0)},every:function every(t){return rt(jt(this),t,arguments.length>1?arguments[1]:void 0)},fill:function fill(t){return C.apply(jt(this),arguments)},filter:function filter(t){return kt(this,tt(jt(this),t,arguments.length>1?arguments[1]:void 0))},find:function find(t){return et(jt(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function findIndex(t){
return it(jt(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function forEach(t){Q(jt(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function indexOf(t){return ut(jt(this),t,arguments.length>1?arguments[1]:void 0)},includes:function includes(t){return ot(jt(this),t,arguments.length>1?arguments[1]:void 0)},join:function join(t){return vt.apply(jt(this),arguments)},lastIndexOf:function lastIndexOf(t){return st.apply(jt(this),arguments)},map:function map(t){return Ft(jt(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function reduce(t){return lt.apply(jt(this),arguments)},reduceRight:function reduceRight(t){return ht.apply(jt(this),arguments)},reverse:function reverse(){for(var t,n=this,r=jt(n).length,e=Math.floor(r/2),i=0;i<e;)t=n[i],n[i++]=n[--r],n[r]=t;return n},some:function some(t){return nt(jt(this),t,arguments.length>1?arguments[1]:void 0)},sort:function sort(t){return pt.call(jt(this),t)},subarray:function subarray(t,n){var r=jt(this),e=r.length,i=y(t,e);return new(N(r,r[wt]))(r.buffer,r.byteOffset+i*r.BYTES_PER_ELEMENT,d((void 0===n?e:y(n,e))-i))}},Wt=function slice(t,n){return kt(this,dt.call(jt(this),t,n))},Bt=function set(t){jt(this);var n=It(arguments[1],1),r=this.length,e=S(t),i=d(e.length),o=0;if(i+n>r)throw V(Ot);for(;o<i;)this[n+o]=e[o++]},Vt={entries:function entries(){return at.call(jt(this))},keys:function keys(){return ft.call(jt(this))},values:function values(){return ct.call(jt(this))}},zt=function(t,n){return w(t)&&t[_t]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},Kt=function getOwnPropertyDescriptor(t,n){return zt(t,n=g(n,!0))?l(2,t[n]):B(t,n)},Jt=function defineProperty(t,n,r){return!(zt(t,n=g(n,!0))&&w(r)&&b(r,"value"))||b(r,"get")||b(r,"set")||r.configurable||b(r,"writable")&&!r.writable||b(r,"enumerable")&&!r.enumerable?W(t,n,r):(t[n]=r.value,t)};St||(D.f=Kt,G.f=Jt),u(u.S+u.F*!St,"Object",{getOwnPropertyDescriptor:Kt,defineProperty:Jt}),o(function(){yt.call({})})&&(yt=gt=function toString(){return vt.call(this)});var Yt=v({},Dt);v(Yt,Vt),h(Yt,bt,Vt.values),v(Yt,{slice:Wt,set:Bt,constructor:function(){},toString:yt,toLocaleString:Gt}),Tt(Yt,"buffer","b"),Tt(Yt,"byteOffset","o"),Tt(Yt,"byteLength","l"),Tt(Yt,"length","e"),W(Yt,xt,{get:function(){return this[_t]}}),n.exports=function(t,n,r,f){f=!!f;var a=t+(f?"Clamped":"")+"Array",l="Uint8Array"!=a,v="get"+t,p="set"+t,y=i[a],g=y||{},b=y&&O(y),x=!y||!c.ABV,S={},_=y&&y[X],P=function(t,r){var e=t._d;return e.v[v](r*n+e.o,Pt)},A=function(t,r,e){var i=t._d;f&&(e=(e=Math.round(e))<0?0:e>255?255:255&e),i.v[p](r*n+i.o,e,Pt)},M=function(t,n){W(t,n,{get:function(){return P(this,n)},set:function(t){return A(this,n,t)},enumerable:!0})};x?(y=r(function(t,r,e,i){s(t,y,a,"_d");var o,u,c,f,l=0,v=0;if(w(r)){if(!(r instanceof H||(f=m(r))==J||f==Y))return _t in r?Rt(y,r):Lt.call(y,r);o=r,v=It(e,n);var p=r.byteLength;if(void 0===i){if(p%n)throw V(Ot);if(u=p-v,u<0)throw V(Ot)}else if(u=d(i)*n,u+v>p)throw V(Ot);c=u/n}else c=Mt(r,!0),u=c*n,o=new H(u);for(h(t,"_d",{b:o,o:v,l:u,e:c,v:new Z(o)});l<c;)M(t,l++)}),_=y[X]=E(Yt),h(_,"constructor",y)):T(function(t){new y(null),new y(t)},!0)||(y=r(function(t,r,e,i){s(t,y,a);var o;return w(r)?r instanceof H||(o=m(r))==J||o==Y?void 0!==i?new g(r,It(e,n),i):void 0!==e?new g(r,It(e,n)):new g(r):_t in r?Rt(y,r):Lt.call(y,r):new g(Mt(r,l))}),Q(b!==Function.prototype?F(g).concat(F(b)):F(g),function(t){t in y||h(y,t,g[t])}),y[X]=_,e||(_.constructor=y));var I=_[bt],j=!!I&&("values"==I.name||void 0==I.name),N=Vt.values;h(y,mt,!0),h(_,_t,a),h(_,Et,!0),h(_,wt,y),(f?new y(1)[xt]==a:xt in _)||W(_,xt,{get:function(){return a}}),S[a]=y,u(u.G+u.W+u.F*(y!=g),S),u(u.S,a,{BYTES_PER_ELEMENT:n,from:Lt,of:Ct}),q in _||h(_,q,n),u(u.P,a,Dt),L(a),u(u.P+u.F*At,a,{set:Bt}),u(u.P+u.F*!j,a,Vt),u(u.P+u.F*(_.toString!=yt),a,{toString:yt}),u(u.P+u.F*o(function(){new y(1).slice()}),a,{slice:Wt}),u(u.P+u.F*(o(function(){return[1,2].toLocaleString()!=new y([1,2]).toLocaleString()})||!o(function(){_.toLocaleString.call([1,2])})),a,{toLocaleString:Gt}),R[a]=j?I:N,e||j||h(_,bt,N)}}else n.exports=function(){}},{105:105,106:106,108:108,109:109,11:11,110:110,112:112,113:113,114:114,117:117,118:118,12:12,130:130,17:17,25:25,28:28,32:32,34:34,38:38,39:39,40:40,46:46,49:49,54:54,56:56,58:58,6:6,66:66,67:67,70:70,72:72,74:74,8:8,85:85,86:86,89:89,9:9,91:91,95:95}],112:[function(t,n,r){"use strict";var e=t(38),i=t(28),o=t(58),u=t(113),c=t(40),f=t(86),a=t(34),s=t(6),l=t(106),h=t(108),v=t(72).f,p=t(67).f,d=t(9),y=t(92),g="ArrayBuffer",b="DataView",x="prototype",m="Wrong length!",w="Wrong index!",S=e[g],_=e[b],E=e.Math,O=e.RangeError,F=e.Infinity,P=S,A=E.abs,M=E.pow,I=E.floor,j=E.log,N=E.LN2,k="buffer",R="byteLength",T="byteOffset",L=i?"_b":k,C=i?"_l":R,U=i?"_o":T,G=function(t,n,r){var e,i,o,u=Array(r),c=8*r-n-1,f=(1<<c)-1,a=f>>1,s=23===n?M(2,-24)-M(2,-77):0,l=0,h=t<0||0===t&&1/t<0?1:0;for(t=A(t),t!=t||t===F?(i=t!=t?1:0,e=f):(e=I(j(t)/N),t*(o=M(2,-e))<1&&(e--,o*=2),t+=e+a>=1?s/o:s*M(2,1-a),t*o>=2&&(e++,o/=2),e+a>=f?(i=0,e=f):e+a>=1?(i=(t*o-1)*M(2,n),e+=a):(i=t*M(2,a-1)*M(2,n),e=0));n>=8;u[l++]=255&i,i/=256,n-=8);for(e=e<<n|i,c+=n;c>0;u[l++]=255&e,e/=256,c-=8);return u[--l]|=128*h,u},D=function(t,n,r){var e,i=8*r-n-1,o=(1<<i)-1,u=o>>1,c=i-7,f=r-1,a=t[f--],s=127&a;for(a>>=7;c>0;s=256*s+t[f],f--,c-=8);for(e=s&(1<<-c)-1,s>>=-c,c+=n;c>0;e=256*e+t[f],f--,c-=8);if(0===s)s=1-u;else{if(s===o)return e?NaN:a?-F:F;e+=M(2,n),s-=u}return(a?-1:1)*e*M(2,s-n)},W=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},B=function(t){return[255&t]},V=function(t){return[255&t,t>>8&255]},z=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},K=function(t){return G(t,52,8)},J=function(t){return G(t,23,4)},Y=function(t,n,r){p(t[x],n,{get:function(){return this[r]}})},q=function(t,n,r,e){var i=+r,o=l(i);if(i!=o||o<0||o+n>t[C])throw O(w);var u=t[L]._b,c=o+t[U],f=u.slice(c,c+n);return e?f:f.reverse()},X=function(t,n,r,e,i,o){var u=+r,c=l(u);if(u!=c||c<0||c+n>t[C])throw O(w);for(var f=t[L]._b,a=c+t[U],s=e(+i),h=0;h<n;h++)f[a+h]=s[o?h:n-h-1]},$=function(t,n){s(t,S,g);var r=+n,e=h(r);if(r!=e)throw O(m);return e};if(u.ABV){if(!a(function(){new S})||!a(function(){new S(.5)})){S=function ArrayBuffer(t){return new P($(this,t))};for(var H,Z=S[x]=P[x],Q=v(P),tt=0;Q.length>tt;)(H=Q[tt++])in S||c(S,H,P[H]);o||(Z.constructor=S)}var nt=new _(new S(2)),rt=_[x].setInt8;nt.setInt8(0,2147483648),nt.setInt8(1,2147483649),!nt.getInt8(0)&&nt.getInt8(1)||f(_[x],{setInt8:function setInt8(t,n){rt.call(this,t,n<<24>>24)},setUint8:function setUint8(t,n){rt.call(this,t,n<<24>>24)}},!0)}else S=function ArrayBuffer(t){var n=$(this,t);this._b=d.call(Array(n),0),this[C]=n},_=function DataView(t,n,r){s(this,_,b),s(t,S,b);var e=t[C],i=l(n);if(i<0||i>e)throw O("Wrong offset!");if(r=void 0===r?e-i:h(r),i+r>e)throw O(m);this[L]=t,this[U]=i,this[C]=r},i&&(Y(S,R,"_l"),Y(_,k,"_b"),Y(_,R,"_l"),Y(_,T,"_o")),f(_[x],{getInt8:function getInt8(t){return q(this,1,t)[0]<<24>>24},getUint8:function getUint8(t){return q(this,1,t)[0]},getInt16:function getInt16(t){var n=q(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function getUint16(t){var n=q(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function getInt32(t){return W(q(this,4,t,arguments[1]))},getUint32:function getUint32(t){return W(q(this,4,t,arguments[1]))>>>0},getFloat32:function getFloat32(t){return D(q(this,4,t,arguments[1]),23,4)},getFloat64:function getFloat64(t){return D(q(this,8,t,arguments[1]),52,8)},setInt8:function setInt8(t,n){X(this,1,t,B,n)},setUint8:function setUint8(t,n){X(this,1,t,B,n)},setInt16:function setInt16(t,n){X(this,2,t,V,n,arguments[2])},setUint16:function setUint16(t,n){X(this,2,t,V,n,arguments[2])},setInt32:function setInt32(t,n){X(this,4,t,z,n,arguments[2])},setUint32:function setUint32(t,n){X(this,4,t,z,n,arguments[2])},setFloat32:function setFloat32(t,n){X(this,4,t,J,n,arguments[2])},setFloat64:function setFloat64(t,n){X(this,8,t,K,n,arguments[2])}});y(S,g),y(_,b),c(_[x],u.VIEW,!0),r[g]=S,r[b]=_},{106:106,108:108,113:113,28:28,34:34,38:38,40:40,58:58,6:6,67:67,72:72,86:86,9:9,92:92}],113:[function(t,n,r){for(var e,i=t(38),o=t(40),u=t(114),c=u("typed_array"),f=u("view"),a=!(!i.ArrayBuffer||!i.DataView),s=a,l=0,h=9,v="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<h;)(e=i[v[l++]])?(o(e.prototype,c,!0),o(e.prototype,f,!0)):s=!1;n.exports={ABV:a,CONSTR:s,TYPED:c,VIEW:f}},{114:114,38:38,40:40}],114:[function(t,n,r){var e=0,i=Math.random();n.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+i).toString(36))}},{}],115:[function(t,n,r){var e=t(38),i=t(23),o=t(58),u=t(116),c=t(67).f;n.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:e.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},{116:116,23:23,38:38,58:58,67:67}],116:[function(t,n,r){r.f=t(117)},{117:117}],117:[function(t,n,r){var e=t(94)("wks"),i=t(114),o=t(38).Symbol,u="function"==typeof o,c=n.exports=function(t){return e[t]||(e[t]=u&&o[t]||(u?o:i)("Symbol."+t))};c.store=e},{114:114,38:38,94:94}],118:[function(t,n,r){var e=t(17),i=t(117)("iterator"),o=t(56);n.exports=t(23).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[e(t)]}},{117:117,17:17,23:23,56:56}],119:[function(t,n,r){var e=t(32),i=t(88)(/[\\^$*+?.()|[\]{}]/g,"\\$&");e(e.S,"RegExp",{escape:function escape(t){return i(t)}})},{32:32,88:88}],120:[function(t,n,r){var e=t(32);e(e.P,"Array",{copyWithin:t(8)}),t(5)("copyWithin")},{32:32,5:5,8:8}],121:[function(t,n,r){"use strict";var e=t(32),i=t(12)(4);e(e.P+e.F*!t(96)([].every,!0),"Array",{every:function every(t){return i(this,t,arguments[1])}})},{12:12,32:32,96:96}],122:[function(t,n,r){var e=t(32);e(e.P,"Array",{fill:t(9)}),t(5)("fill")},{32:32,5:5,9:9}],123:[function(t,n,r){"use strict";var e=t(32),i=t(12)(2);e(e.P+e.F*!t(96)([].filter,!0),"Array",{filter:function filter(t){return i(this,t,arguments[1])}})},{12:12,32:32,96:96}],124:[function(t,n,r){"use strict";var e=t(32),i=t(12)(6),o="findIndex",u=!0;o in[]&&Array(1)[o](function(){u=!1}),e(e.P+e.F*u,"Array",{findIndex:function findIndex(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),t(5)(o)},{12:12,32:32,5:5}],125:[function(t,n,r){"use strict";var e=t(32),i=t(12)(5),o="find",u=!0;o in[]&&Array(1)[o](function(){u=!1}),e(e.P+e.F*u,"Array",{find:function find(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),t(5)(o)},{12:12,32:32,5:5}],126:[function(t,n,r){"use strict";var e=t(32),i=t(12)(0),o=t(96)([].forEach,!0);e(e.P+e.F*!o,"Array",{forEach:function forEach(t){return i(this,t,arguments[1])}})},{12:12,32:32,96:96}],127:[function(t,n,r){"use strict";var e=t(25),i=t(32),o=t(109),u=t(51),c=t(46),f=t(108),a=t(24),s=t(118);i(i.S+i.F*!t(54)(function(t){Array.from(t)}),"Array",{from:function from(t){var n,r,i,l,h=o(t),v="function"==typeof this?this:Array,p=arguments.length,d=p>1?arguments[1]:void 0,y=void 0!==d,g=0,b=s(h);if(y&&(d=e(d,p>2?arguments[2]:void 0,2)),void 0==b||v==Array&&c(b))for(n=f(h.length),r=new v(n);n>g;g++)a(r,g,y?d(h[g],g):h[g]);else for(l=b.call(h),r=new v;!(i=l.next()).done;g++)a(r,g,y?u(l,d,[i.value,g],!0):i.value);return r.length=g,r}})},{108:108,109:109,118:118,24:24,25:25,32:32,46:46,51:51,54:54}],128:[function(t,n,r){"use strict";var e=t(32),i=t(11)(!1),o=[].indexOf,u=!!o&&1/[1].indexOf(1,-0)<0;e(e.P+e.F*(u||!t(96)(o)),"Array",{indexOf:function indexOf(t){return u?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},{11:11,32:32,96:96}],129:[function(t,n,r){var e=t(32);e(e.S,"Array",{isArray:t(47)})},{32:32,47:47}],130:[function(t,n,r){"use strict";var e=t(5),i=t(55),o=t(56),u=t(107);n.exports=t(53)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,i(1)):"keys"==n?i(0,r):"values"==n?i(0,t[r]):i(0,[r,t[r]])},"values"),o.Arguments=o.Array,e("keys"),e("values"),e("entries")},{107:107,5:5,53:53,55:55,56:56}],131:[function(t,n,r){"use strict";var e=t(32),i=t(107),o=[].join;e(e.P+e.F*(t(45)!=Object||!t(96)(o)),"Array",{join:function join(t){return o.call(i(this),void 0===t?",":t)}})},{107:107,32:32,45:45,96:96}],132:[function(t,n,r){"use strict";var e=t(32),i=t(107),o=t(106),u=t(108),c=[].lastIndexOf,f=!!c&&1/[1].lastIndexOf(1,-0)<0;e(e.P+e.F*(f||!t(96)(c)),"Array",{lastIndexOf:function lastIndexOf(t){if(f)return c.apply(this,arguments)||0;var n=i(this),r=u(n.length),e=r-1;for(arguments.length>1&&(e=Math.min(e,o(arguments[1]))),e<0&&(e=r+e);e>=0;e--)if(e in n&&n[e]===t)return e||0;return-1}})},{106:106,107:107,108:108,32:32,96:96}],133:[function(t,n,r){"use strict";var e=t(32),i=t(12)(1);e(e.P+e.F*!t(96)([].map,!0),"Array",{map:function map(t){return i(this,t,arguments[1])}})},{12:12,32:32,96:96}],134:[function(t,n,r){"use strict";var e=t(32),i=t(24);e(e.S+e.F*t(34)(function(){function F(){}return!(Array.of.call(F)instanceof F)}),"Array",{of:function of(){for(var t=0,n=arguments.length,r=new("function"==typeof this?this:Array)(n);n>t;)i(r,t,arguments[t++]);return r.length=n,r}})},{24:24,32:32,34:34}],135:[function(t,n,r){"use strict";var e=t(32),i=t(13);e(e.P+e.F*!t(96)([].reduceRight,!0),"Array",{reduceRight:function reduceRight(t){return i(this,t,arguments.length,arguments[1],!0)}})},{13:13,32:32,96:96}],136:[function(t,n,r){"use strict";var e=t(32),i=t(13);e(e.P+e.F*!t(96)([].reduce,!0),"Array",{reduce:function reduce(t){return i(this,t,arguments.length,arguments[1],!1)}})},{13:13,32:32,96:96}],137:[function(t,n,r){"use strict";var e=t(32),i=t(41),o=t(18),u=t(105),c=t(108),f=[].slice;e(e.P+e.F*t(34)(function(){i&&f.call(i)}),"Array",{slice:function slice(t,n){var r=c(this.length),e=o(this);if(n=void 0===n?r:n,"Array"==e)return f.call(this,t,n);for(var i=u(t,r),a=u(n,r),s=c(a-i),l=Array(s),h=0;h<s;h++)l[h]="String"==e?this.charAt(i+h):this[i+h];return l}})},{105:105,108:108,18:18,32:32,34:34,41:41}],138:[function(t,n,r){"use strict";var e=t(32),i=t(12)(3);e(e.P+e.F*!t(96)([].some,!0),"Array",{some:function some(t){return i(this,t,arguments[1])}})},{12:12,32:32,96:96}],139:[function(t,n,r){"use strict";var e=t(32),i=t(3),o=t(109),u=t(34),c=[].sort,f=[1,2,3];e(e.P+e.F*(u(function(){f.sort(void 0)})||!u(function(){f.sort(null)})||!t(96)(c)),"Array",{sort:function sort(t){return void 0===t?c.call(o(this)):c.call(o(this),i(t))}})},{109:109,3:3,32:32,34:34,96:96}],140:[function(t,n,r){t(91)("Array")},{91:91}],141:[function(t,n,r){var e=t(32);e(e.S,"Date",{now:function(){return(new Date).getTime()}})},{32:32}],142:[function(t,n,r){"use strict";var e=t(32),i=t(34),o=Date.prototype.getTime,u=function(t){return t>9?t:"0"+t};e(e.P+e.F*(i(function(){return"0385-07-25T07:06:39.999Z"!=new Date(-5e13-1).toISOString()})||!i(function(){new Date(NaN).toISOString()})),"Date",{toISOString:function toISOString(){if(!isFinite(o.call(this)))throw RangeError("Invalid time value");var t=this,n=t.getUTCFullYear(),r=t.getUTCMilliseconds(),e=n<0?"-":n>9999?"+":"";return e+("00000"+Math.abs(n)).slice(e?-6:-4)+"-"+u(t.getUTCMonth()+1)+"-"+u(t.getUTCDate())+"T"+u(t.getUTCHours())+":"+u(t.getUTCMinutes())+":"+u(t.getUTCSeconds())+"."+(r>99?r:"0"+u(r))+"Z"}})},{32:32,34:34}],143:[function(t,n,r){"use strict";var e=t(32),i=t(109),o=t(110);e(e.P+e.F*t(34)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function toJSON(t){var n=i(this),r=o(n);return"number"!=typeof r||isFinite(r)?n.toISOString():null}})},{109:109,110:110,32:32,34:34}],144:[function(t,n,r){var e=t(117)("toPrimitive"),i=Date.prototype;e in i||t(40)(i,e,t(26))},{117:117,26:26,40:40}],145:[function(t,n,r){var e=Date.prototype,i="Invalid Date",o="toString",u=e[o],c=e.getTime;new Date(NaN)+""!=i&&t(87)(e,o,function toString(){var t=c.call(this);return t===t?u.call(this):i})},{87:87}],146:[function(t,n,r){var e=t(32);e(e.P,"Function",{bind:t(16)})},{16:16,32:32}],147:[function(t,n,r){"use strict";var e=t(49),i=t(74),o=t(117)("hasInstance"),u=Function.prototype;o in u||t(67).f(u,o,{value:function(t){if("function"!=typeof this||!e(t))return!1;if(!e(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},{117:117,49:49,67:67,74:74}],148:[function(t,n,r){var e=t(67).f,i=t(85),o=t(39),u=Function.prototype,c=/^\s*function ([^ (]*)/,f="name",a=Object.isExtensible||function(){return!0};f in u||t(28)&&e(u,f,{configurable:!0,get:function(){try{var t=this,n=(""+t).match(c)[1];return o(t,f)||!a(t)||e(t,f,i(5,n)),n}catch(t){return""}}})},{28:28,39:39,67:67,85:85}],149:[function(t,n,r){"use strict";var e=t(19);n.exports=t(22)("Map",function(t){return function Map(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function get(t){var n=e.getEntry(this,t);return n&&n.v},set:function set(t,n){return e.def(this,0===t?0:t,n)}},e,!0)},{19:19,22:22}],150:[function(t,n,r){var e=t(32),i=t(60),o=Math.sqrt,u=Math.acosh;e(e.S+e.F*!(u&&710==Math.floor(u(Number.MAX_VALUE))&&u(1/0)==1/0),"Math",{acosh:function acosh(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},{32:32,60:60}],151:[function(t,n,r){function asinh(t){return isFinite(t=+t)&&0!=t?t<0?-asinh(-t):Math.log(t+Math.sqrt(t*t+1)):t}var e=t(32),i=Math.asinh;e(e.S+e.F*!(i&&1/i(0)>0),"Math",{asinh:asinh})},{32:32}],152:[function(t,n,r){var e=t(32),i=Math.atanh;e(e.S+e.F*!(i&&1/i(-0)<0),"Math",{atanh:function atanh(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},{32:32}],153:[function(t,n,r){var e=t(32),i=t(61);e(e.S,"Math",{cbrt:function cbrt(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},{32:32,61:61}],154:[function(t,n,r){var e=t(32);e(e.S,"Math",{clz32:function clz32(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},{32:32}],155:[function(t,n,r){var e=t(32),i=Math.exp;e(e.S,"Math",{cosh:function cosh(t){return(i(t=+t)+i(-t))/2}})},{32:32}],156:[function(t,n,r){var e=t(32),i=t(59);e(e.S+e.F*(i!=Math.expm1),"Math",{expm1:i})},{32:32,59:59}],157:[function(t,n,r){var e=t(32),i=t(61),o=Math.pow,u=o(2,-52),c=o(2,-23),f=o(2,127)*(2-c),a=o(2,-126),s=function(t){return t+1/u-1/u};e(e.S,"Math",{fround:function fround(t){var n,r,e=Math.abs(t),o=i(t);return e<a?o*s(e/a/c)*a*c:(n=(1+c/u)*e,r=n-(n-e),r>f||r!=r?o*(1/0):o*r)}})},{32:32,61:61}],158:[function(t,n,r){var e=t(32),i=Math.abs;e(e.S,"Math",{hypot:function hypot(t,n){for(var r,e,o=0,u=0,c=arguments.length,f=0;u<c;)r=i(arguments[u++]),f<r?(e=f/r,o=o*e*e+1,f=r):r>0?(e=r/f,o+=e*e):o+=r;return f===1/0?1/0:f*Math.sqrt(o)}})},{32:32}],159:[function(t,n,r){var e=t(32),i=Math.imul;e(e.S+e.F*t(34)(function(){return i(4294967295,5)!=-5||2!=i.length}),"Math",{imul:function imul(t,n){var r=65535,e=+t,i=+n,o=r&e,u=r&i;return 0|o*u+((r&e>>>16)*u+o*(r&i>>>16)<<16>>>0)}})},{32:32,34:34}],160:[function(t,n,r){var e=t(32);e(e.S,"Math",{log10:function log10(t){return Math.log(t)/Math.LN10}})},{32:32}],161:[function(t,n,r){var e=t(32);e(e.S,"Math",{log1p:t(60)})},{32:32,60:60}],162:[function(t,n,r){var e=t(32);e(e.S,"Math",{log2:function log2(t){return Math.log(t)/Math.LN2}})},{32:32}],163:[function(t,n,r){var e=t(32);e(e.S,"Math",{sign:t(61)})},{32:32,61:61}],164:[function(t,n,r){var e=t(32),i=t(59),o=Math.exp;e(e.S+e.F*t(34)(function(){return!Math.sinh(-2e-17)!=-2e-17}),"Math",{sinh:function sinh(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},{32:32,34:34,59:59}],165:[function(t,n,r){var e=t(32),i=t(59),o=Math.exp;e(e.S,"Math",{tanh:function tanh(t){var n=i(t=+t),r=i(-t);return n==1/0?1:r==1/0?-1:(n-r)/(o(t)+o(-t))}})},{32:32,59:59}],166:[function(t,n,r){var e=t(32);e(e.S,"Math",{trunc:function trunc(t){return(t>0?Math.floor:Math.ceil)(t)}})},{32:32}],167:[function(t,n,r){"use strict";var e=t(38),i=t(39),o=t(18),u=t(43),c=t(110),f=t(34),a=t(72).f,s=t(70).f,l=t(67).f,h=t(102).trim,v="Number",p=e[v],d=p,y=p.prototype,g=o(t(66)(y))==v,b="trim"in String.prototype,x=function(t){var n=c(t,!1);if("string"==typeof n&&n.length>2){n=b?n.trim():h(n,3);var r,e,i,o=n.charCodeAt(0);if(43===o||45===o){if(r=n.charCodeAt(2),88===r||120===r)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+n}for(var u,f=n.slice(2),a=0,s=f.length;a<s;a++)if(u=f.charCodeAt(a),u<48||u>i)return NaN;return parseInt(f,e)}}return+n};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function Number(t){var n=arguments.length<1?0:t,r=this;return r instanceof p&&(g?f(function(){y.valueOf.call(r)}):o(r)!=v)?u(new d(x(n)),r,p):x(n)};for(var m,w=t(28)?a(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;w.length>S;S++)i(d,m=w[S])&&!i(p,m)&&l(p,m,s(d,m));p.prototype=y,y.constructor=p,t(87)(e,v,p)}},{102:102,110:110,18:18,28:28,34:34,38:38,39:39,43:43,66:66,67:67,70:70,72:72,87:87}],168:[function(t,n,r){var e=t(32);e(e.S,"Number",{EPSILON:Math.pow(2,-52)})},{32:32}],169:[function(t,n,r){var e=t(32),i=t(38).isFinite;e(e.S,"Number",{isFinite:function isFinite(t){return"number"==typeof t&&i(t)}})},{32:32,38:38}],170:[function(t,n,r){var e=t(32);e(e.S,"Number",{isInteger:t(48)})},{32:32,48:48}],171:[function(t,n,r){var e=t(32);e(e.S,"Number",{isNaN:function isNaN(t){return t!=t}})},{32:32}],172:[function(t,n,r){var e=t(32),i=t(48),o=Math.abs;e(e.S,"Number",{isSafeInteger:function isSafeInteger(t){return i(t)&&o(t)<=9007199254740991}})},{32:32,48:48}],173:[function(t,n,r){var e=t(32);e(e.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},{32:32}],174:[function(t,n,r){var e=t(32);e(e.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},{32:32}],175:[function(t,n,r){var e=t(32),i=t(81);e(e.S+e.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},{32:32,81:81}],176:[function(t,n,r){var e=t(32),i=t(82);e(e.S+e.F*(Number.parseInt!=i),"Number",{parseInt:i})},{32:32,82:82}],177:[function(t,n,r){"use strict";var e=t(32),i=t(106),o=t(4),u=t(101),c=1..toFixed,f=Math.floor,a=[0,0,0,0,0,0],s="Number.toFixed: incorrect invocation!",l="0",h=function(t,n){for(var r=-1,e=n;++r<6;)e+=t*a[r],a[r]=e%1e7,e=f(e/1e7)},v=function(t){for(var n=6,r=0;--n>=0;)r+=a[n],a[n]=f(r/t),r=r%t*1e7},p=function(){for(var t=6,n="";--t>=0;)if(""!==n||0===t||0!==a[t]){var r=String(a[t]);n=""===n?r:n+u.call(l,7-r.length)+r}return n},d=function(t,n,r){return 0===n?r:n%2===1?d(t,n-1,r*t):d(t*t,n/2,r)},y=function(t){for(var n=0,r=t;r>=4096;)n+=12,r/=4096;for(;r>=2;)n+=1,r/=2;return n};e(e.P+e.F*(!!c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!t(34)(function(){c.call({})})),"Number",{toFixed:function toFixed(t){var n,r,e,c,f=o(this,s),a=i(t),g="",b=l;if(a<0||a>20)throw RangeError(s);if(f!=f)return"NaN";if(f<=-1e21||f>=1e21)return String(f);if(f<0&&(g="-",f=-f),f>1e-21)if(n=y(f*d(2,69,1))-69,r=n<0?f*d(2,-n,1):f/d(2,n,1),r*=4503599627370496,n=52-n,n>0){for(h(0,r),e=a;e>=7;)h(1e7,0),e-=7;for(h(d(10,e,1),0),e=n-1;e>=23;)v(1<<23),e-=23;v(1<<e),h(1,1),v(2),b=p()}else h(0,r),h(1<<-n,0),b=p()+u.call(l,a);return a>0?(c=b.length,b=g+(c<=a?"0."+u.call(l,a-c)+b:b.slice(0,c-a)+"."+b.slice(c-a))):b=g+b,b}})},{101:101,106:106,32:32,34:34,4:4}],178:[function(t,n,r){"use strict";var e=t(32),i=t(34),o=t(4),u=1..toPrecision;e(e.P+e.F*(i(function(){return"1"!==u.call(1,void 0)})||!i(function(){u.call({})})),"Number",{toPrecision:function toPrecision(t){var n=o(this,"Number#toPrecision: incorrect invocation!");return void 0===t?u.call(n):u.call(n,t)}})},{32:32,34:34,4:4}],179:[function(t,n,r){var e=t(32);e(e.S+e.F,"Object",{assign:t(65)})},{32:32,65:65}],180:[function(t,n,r){var e=t(32);e(e.S,"Object",{create:t(66)})},{32:32,66:66}],181:[function(t,n,r){var e=t(32);e(e.S+e.F*!t(28),"Object",{defineProperties:t(68)})},{28:28,32:32,68:68}],182:[function(t,n,r){var e=t(32);e(e.S+e.F*!t(28),"Object",{defineProperty:t(67).f})},{28:28,32:32,67:67}],183:[function(t,n,r){var e=t(49),i=t(62).onFreeze;t(78)("freeze",function(t){return function freeze(n){return t&&e(n)?t(i(n)):n}})},{49:49,62:62,78:78}],184:[function(t,n,r){var e=t(107),i=t(70).f;t(78)("getOwnPropertyDescriptor",function(){return function getOwnPropertyDescriptor(t,n){return i(e(t),n)}})},{107:107,70:70,78:78}],185:[function(t,n,r){t(78)("getOwnPropertyNames",function(){return t(71).f})},{71:71,78:78}],186:[function(t,n,r){var e=t(109),i=t(74);t(78)("getPrototypeOf",function(){return function getPrototypeOf(t){return i(e(t))}})},{109:109,74:74,78:78}],187:[function(t,n,r){var e=t(49);t(78)("isExtensible",function(t){return function isExtensible(n){return!!e(n)&&(!t||t(n))}})},{49:49,78:78}],188:[function(t,n,r){var e=t(49);t(78)("isFrozen",function(t){return function isFrozen(n){return!e(n)||!!t&&t(n)}})},{49:49,78:78}],189:[function(t,n,r){var e=t(49);t(78)("isSealed",function(t){return function isSealed(n){return!e(n)||!!t&&t(n)}})},{49:49,78:78}],190:[function(t,n,r){var e=t(32);e(e.S,"Object",{is:t(89)})},{32:32,89:89}],191:[function(t,n,r){var e=t(109),i=t(76);t(78)("keys",function(){return function keys(t){return i(e(t))}})},{109:109,76:76,78:78}],192:[function(t,n,r){var e=t(49),i=t(62).onFreeze;t(78)("preventExtensions",function(t){return function preventExtensions(n){return t&&e(n)?t(i(n)):n}})},{49:49,62:62,78:78}],193:[function(t,n,r){var e=t(49),i=t(62).onFreeze;t(78)("seal",function(t){return function seal(n){return t&&e(n)?t(i(n)):n}})},{49:49,62:62,78:78}],194:[function(t,n,r){var e=t(32);e(e.S,"Object",{setPrototypeOf:t(90).set})},{32:32,90:90}],195:[function(t,n,r){"use strict";var e=t(17),i={};i[t(117)("toStringTag")]="z",i+""!="[object z]"&&t(87)(Object.prototype,"toString",function toString(){return"[object "+e(this)+"]"},!0)},{117:117,17:17,87:87}],196:[function(t,n,r){var e=t(32),i=t(81);e(e.G+e.F*(parseFloat!=i),{parseFloat:i})},{32:32,81:81}],197:[function(t,n,r){var e=t(32),i=t(82);e(e.G+e.F*(parseInt!=i),{parseInt:i})},{32:32,82:82}],198:[function(t,n,r){"use strict";var e,i,o,u=t(58),c=t(38),f=t(25),a=t(17),s=t(32),l=t(49),h=t(3),v=t(6),p=t(37),d=t(95),y=t(104).set,g=t(64)(),b="Promise",x=c.TypeError,m=c.process,w=c[b],m=c.process,S="process"==a(m),_=function(){},E=!!function(){try{var n=w.resolve(1),r=(n.constructor={})[t(117)("species")]=function(t){t(_,_)};return(S||"function"==typeof PromiseRejectionEvent)&&n.then(_)instanceof r}catch(t){}}(),O=function(t,n){return t===n||t===w&&n===o},F=function(t){var n;return!(!l(t)||"function"!=typeof(n=t.then))&&n},P=function(t){return O(w,t)?new A(t):new i(t)},A=i=function(t){var n,r;this.promise=new t(function(t,e){if(void 0!==n||void 0!==r)throw x("Bad Promise constructor");n=t,r=e}),this.resolve=h(n),this.reject=h(r)},M=function(t){try{t()}catch(t){return{error:t}}},I=function(t,n){if(!t._n){t._n=!0;var r=t._c;g(function(){for(var e=t._v,i=1==t._s,o=0,u=function(n){var r,o,u=i?n.ok:n.fail,c=n.resolve,f=n.reject,a=n.domain;try{u?(i||(2==t._h&&k(t),t._h=1),u===!0?r=e:(a&&a.enter(),r=u(e),a&&a.exit()),r===n.promise?f(x("Promise-chain cycle")):(o=F(r))?o.call(r,c,f):c(r)):f(e)}catch(t){f(t)}};r.length>o;)u(r[o++]);t._c=[],t._n=!1,n&&!t._h&&j(t)})}},j=function(t){y.call(c,function(){var n,r,e,i=t._v;if(N(t)&&(n=M(function(){S?m.emit("unhandledRejection",i,t):(r=c.onunhandledrejection)?r({promise:t,reason:i}):(e=c.console)&&e.error&&e.error("Unhandled promise rejection",i)}),t._h=S||N(t)?2:1),t._a=void 0,n)throw n.error})},N=function(t){if(1==t._h)return!1;for(var n,r=t._a||t._c,e=0;r.length>e;)if(n=r[e++],n.fail||!N(n.promise))return!1;return!0},k=function(t){y.call(c,function(){var n;S?m.emit("rejectionHandled",t):(n=c.onrejectionhandled)&&n({promise:t,reason:t._v})})},R=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),I(n,!0))},T=function(t){var n,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw x("Promise can't be resolved itself");(n=F(t))?g(function(){var e={_w:r,_d:!1};try{n.call(t,f(T,e,1),f(R,e,1))}catch(t){R.call(e,t)}}):(r._v=t,r._s=1,I(r,!1))}catch(t){R.call({_w:r,_d:!1},t)}}};E||(w=function Promise(t){v(this,w,b,"_h"),h(t),e.call(this);try{t(f(T,this,1),f(R,this,1))}catch(t){R.call(this,t)}},e=function Promise(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},e.prototype=t(86)(w.prototype,{then:function then(t,n){var r=P(d(this,w));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=S?m.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&I(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),A=function(){var t=new e;this.promise=t,this.resolve=f(T,t,1),this.reject=f(R,t,1)}),s(s.G+s.W+s.F*!E,{Promise:w}),t(92)(w,b),t(91)(b),o=t(23)[b],s(s.S+s.F*!E,b,{reject:function reject(t){var n=P(this),r=n.reject;return r(t),n.promise}}),s(s.S+s.F*(u||!E),b,{resolve:function resolve(t){if(t instanceof w&&O(t.constructor,this))return t;var n=P(this),r=n.resolve;return r(t),n.promise}}),s(s.S+s.F*!(E&&t(54)(function(t){w.all(t).catch(_)})),b,{all:function all(t){var n=this,r=P(n),e=r.resolve,i=r.reject,o=M(function(){var r=[],o=0,u=1;p(t,!1,function(t){var c=o++,f=!1;r.push(void 0),u++,n.resolve(t).then(function(t){f||(f=!0,r[c]=t,--u||e(r))},i)}),--u||e(r)});return o&&i(o.error),r.promise},race:function race(t){var n=this,r=P(n),e=r.reject,i=M(function(){p(t,!1,function(t){n.resolve(t).then(r.resolve,e)})});return i&&e(i.error),r.promise}})},{104:104,117:117,17:17,23:23,25:25,3:3,32:32,37:37,38:38,49:49,54:54,58:58,6:6,64:64,86:86,91:91,92:92,95:95}],199:[function(t,n,r){var e=t(32),i=t(3),o=t(7),u=(t(38).Reflect||{}).apply,c=Function.apply;e(e.S+e.F*!t(34)(function(){u(function(){})}),"Reflect",{apply:function apply(t,n,r){var e=i(t),f=o(r);return u?u(e,n,f):c.call(e,n,f)}})},{3:3,32:32,34:34,38:38,7:7}],200:[function(t,n,r){var e=t(32),i=t(66),o=t(3),u=t(7),c=t(49),f=t(34),a=t(16),s=(t(38).Reflect||{}).construct,l=f(function(){function F(){}return!(s(function(){},[],F)instanceof F)}),h=!f(function(){s(function(){})});e(e.S+e.F*(l||h),"Reflect",{construct:function construct(t,n){o(t),u(n);var r=arguments.length<3?t:o(arguments[2]);if(h&&!l)return s(t,n,r);if(t==r){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var e=[null];return e.push.apply(e,n),new(a.apply(t,e))}var f=r.prototype,v=i(c(f)?f:Object.prototype),p=Function.apply.call(t,v,n);return c(p)?p:v}})},{16:16,3:3,32:32,34:34,38:38,49:49,66:66,7:7}],201:[function(t,n,r){var e=t(67),i=t(32),o=t(7),u=t(110);i(i.S+i.F*t(34)(function(){Reflect.defineProperty(e.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function defineProperty(t,n,r){o(t),n=u(n,!0),o(r);try{return e.f(t,n,r),!0}catch(t){return!1}}})},{110:110,32:32,34:34,67:67,7:7}],202:[function(t,n,r){var e=t(32),i=t(70).f,o=t(7);e(e.S,"Reflect",{deleteProperty:function deleteProperty(t,n){var r=i(o(t),n);return!(r&&!r.configurable)&&delete t[n]}})},{32:32,7:7,70:70}],203:[function(t,n,r){"use strict";var e=t(32),i=t(7),o=function(t){this._t=i(t),this._i=0;var n,r=this._k=[];for(n in t)r.push(n)};t(52)(o,"Object",function(){var t,n=this,r=n._k;do if(n._i>=r.length)return{value:void 0,done:!0};while(!((t=r[n._i++])in n._t));return{value:t,done:!1}}),e(e.S,"Reflect",{enumerate:function enumerate(t){return new o(t)}})},{32:32,52:52,7:7}],204:[function(t,n,r){var e=t(70),i=t(32),o=t(7);i(i.S,"Reflect",{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(t,n){return e.f(o(t),n)}})},{32:32,7:7,70:70}],205:[function(t,n,r){var e=t(32),i=t(74),o=t(7);e(e.S,"Reflect",{getPrototypeOf:function getPrototypeOf(t){return i(o(t))}})},{32:32,7:7,74:74}],206:[function(t,n,r){function get(t,n){var r,u,a=arguments.length<3?t:arguments[2];return f(t)===a?t[n]:(r=e.f(t,n))?o(r,"value")?r.value:void 0!==r.get?r.get.call(a):void 0:c(u=i(t))?get(u,n,a):void 0}var e=t(70),i=t(74),o=t(39),u=t(32),c=t(49),f=t(7);u(u.S,"Reflect",{get:get})},{32:32,39:39,49:49,7:7,70:70,74:74}],207:[function(t,n,r){var e=t(32);e(e.S,"Reflect",{has:function has(t,n){return n in t;
}})},{32:32}],208:[function(t,n,r){var e=t(32),i=t(7),o=Object.isExtensible;e(e.S,"Reflect",{isExtensible:function isExtensible(t){return i(t),!o||o(t)}})},{32:32,7:7}],209:[function(t,n,r){var e=t(32);e(e.S,"Reflect",{ownKeys:t(80)})},{32:32,80:80}],210:[function(t,n,r){var e=t(32),i=t(7),o=Object.preventExtensions;e(e.S,"Reflect",{preventExtensions:function preventExtensions(t){i(t);try{return o&&o(t),!0}catch(t){return!1}}})},{32:32,7:7}],211:[function(t,n,r){var e=t(32),i=t(90);i&&e(e.S,"Reflect",{setPrototypeOf:function setPrototypeOf(t,n){i.check(t,n);try{return i.set(t,n),!0}catch(t){return!1}}})},{32:32,90:90}],212:[function(t,n,r){function set(t,n,r){var c,l,h=arguments.length<4?t:arguments[3],v=i.f(a(t),n);if(!v){if(s(l=o(t)))return set(l,n,r,h);v=f(0)}return u(v,"value")?!(v.writable===!1||!s(h))&&(c=i.f(h,n)||f(0),c.value=r,e.f(h,n,c),!0):void 0!==v.set&&(v.set.call(h,r),!0)}var e=t(67),i=t(70),o=t(74),u=t(39),c=t(32),f=t(85),a=t(7),s=t(49);c(c.S,"Reflect",{set:set})},{32:32,39:39,49:49,67:67,7:7,70:70,74:74,85:85}],213:[function(t,n,r){var e=t(38),i=t(43),o=t(67).f,u=t(72).f,c=t(50),f=t(36),a=e.RegExp,s=a,l=a.prototype,h=/a/g,v=/a/g,p=new a(h)!==h;if(t(28)&&(!p||t(34)(function(){return v[t(117)("match")]=!1,a(h)!=h||a(v)==v||"/a/i"!=a(h,"i")}))){a=function RegExp(t,n){var r=this instanceof a,e=c(t),o=void 0===n;return!r&&e&&t.constructor===a&&o?t:i(p?new s(e&&!o?t.source:t,n):s((e=t instanceof a)?t.source:t,e&&o?f.call(t):n),r?this:l,a)};for(var d=(function(t){t in a||o(a,t,{configurable:!0,get:function(){return s[t]},set:function(n){s[t]=n}})}),y=u(s),g=0;y.length>g;)d(y[g++]);l.constructor=a,a.prototype=l,t(87)(e,"RegExp",a)}t(91)("RegExp")},{117:117,28:28,34:34,36:36,38:38,43:43,50:50,67:67,72:72,87:87,91:91}],214:[function(t,n,r){t(28)&&"g"!=/./g.flags&&t(67).f(RegExp.prototype,"flags",{configurable:!0,get:t(36)})},{28:28,36:36,67:67}],215:[function(t,n,r){t(35)("match",1,function(t,n,r){return[function match(r){"use strict";var e=t(this),i=void 0==r?void 0:r[n];return void 0!==i?i.call(r,e):new RegExp(r)[n](String(e))},r]})},{35:35}],216:[function(t,n,r){t(35)("replace",2,function(t,n,r){return[function replace(e,i){"use strict";var o=t(this),u=void 0==e?void 0:e[n];return void 0!==u?u.call(e,o,i):r.call(String(o),e,i)},r]})},{35:35}],217:[function(t,n,r){t(35)("search",1,function(t,n,r){return[function search(r){"use strict";var e=t(this),i=void 0==r?void 0:r[n];return void 0!==i?i.call(r,e):new RegExp(r)[n](String(e))},r]})},{35:35}],218:[function(t,n,r){t(35)("split",2,function(n,r,e){"use strict";var i=t(50),o=e,u=[].push,c="split",f="length",a="lastIndex";if("c"=="abbc"[c](/(b)*/)[1]||4!="test"[c](/(?:)/,-1)[f]||2!="ab"[c](/(?:ab)*/)[f]||4!="."[c](/(.?)(.?)/)[f]||"."[c](/()()/)[f]>1||""[c](/.?/)[f]){var s=void 0===/()??/.exec("")[1];e=function(t,n){var r=String(this);if(void 0===t&&0===n)return[];if(!i(t))return o.call(r,t,n);var e,c,l,h,v,p=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),y=0,g=void 0===n?4294967295:n>>>0,b=new RegExp(t.source,d+"g");for(s||(e=new RegExp("^"+b.source+"$(?!\\s)",d));(c=b.exec(r))&&(l=c.index+c[0][f],!(l>y&&(p.push(r.slice(y,c.index)),!s&&c[f]>1&&c[0].replace(e,function(){for(v=1;v<arguments[f]-2;v++)void 0===arguments[v]&&(c[v]=void 0)}),c[f]>1&&c.index<r[f]&&u.apply(p,c.slice(1)),h=c[0][f],y=l,p[f]>=g)));)b[a]===c.index&&b[a]++;return y===r[f]?!h&&b.test("")||p.push(""):p.push(r.slice(y)),p[f]>g?p.slice(0,g):p}}else"0"[c](void 0,0)[f]&&(e=function(t,n){return void 0===t&&0===n?[]:o.call(this,t,n)});return[function split(t,i){var o=n(this),u=void 0==t?void 0:t[r];return void 0!==u?u.call(t,o,i):e.call(String(o),t,i)},e]})},{35:35,50:50}],219:[function(t,n,r){"use strict";t(214);var e=t(7),i=t(36),o=t(28),u="toString",c=/./[u],f=function(n){t(87)(RegExp.prototype,u,n,!0)};t(34)(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?f(function toString(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):c.name!=u&&f(function toString(){return c.call(this)})},{214:214,28:28,34:34,36:36,7:7,87:87}],220:[function(t,n,r){"use strict";var e=t(19);n.exports=t(22)("Set",function(t){return function Set(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function add(t){return e.def(this,t=0===t?0:t,t)}},e)},{19:19,22:22}],221:[function(t,n,r){"use strict";t(99)("anchor",function(t){return function anchor(n){return t(this,"a","name",n)}})},{99:99}],222:[function(t,n,r){"use strict";t(99)("big",function(t){return function big(){return t(this,"big","","")}})},{99:99}],223:[function(t,n,r){"use strict";t(99)("blink",function(t){return function blink(){return t(this,"blink","","")}})},{99:99}],224:[function(t,n,r){"use strict";t(99)("bold",function(t){return function bold(){return t(this,"b","","")}})},{99:99}],225:[function(t,n,r){"use strict";var e=t(32),i=t(97)(!1);e(e.P,"String",{codePointAt:function codePointAt(t){return i(this,t)}})},{32:32,97:97}],226:[function(t,n,r){"use strict";var e=t(32),i=t(108),o=t(98),u="endsWith",c=""[u];e(e.P+e.F*t(33)(u),"String",{endsWith:function endsWith(t){var n=o(this,t,u),r=arguments.length>1?arguments[1]:void 0,e=i(n.length),f=void 0===r?e:Math.min(i(r),e),a=String(t);return c?c.call(n,a,f):n.slice(f-a.length,f)===a}})},{108:108,32:32,33:33,98:98}],227:[function(t,n,r){"use strict";t(99)("fixed",function(t){return function fixed(){return t(this,"tt","","")}})},{99:99}],228:[function(t,n,r){"use strict";t(99)("fontcolor",function(t){return function fontcolor(n){return t(this,"font","color",n)}})},{99:99}],229:[function(t,n,r){"use strict";t(99)("fontsize",function(t){return function fontsize(n){return t(this,"font","size",n)}})},{99:99}],230:[function(t,n,r){var e=t(32),i=t(105),o=String.fromCharCode,u=String.fromCodePoint;e(e.S+e.F*(!!u&&1!=u.length),"String",{fromCodePoint:function fromCodePoint(t){for(var n,r=[],e=arguments.length,u=0;e>u;){if(n=+arguments[u++],i(n,1114111)!==n)throw RangeError(n+" is not a valid code point");r.push(n<65536?o(n):o(((n-=65536)>>10)+55296,n%1024+56320))}return r.join("")}})},{105:105,32:32}],231:[function(t,n,r){"use strict";var e=t(32),i=t(98),o="includes";e(e.P+e.F*t(33)(o),"String",{includes:function includes(t){return!!~i(this,t,o).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},{32:32,33:33,98:98}],232:[function(t,n,r){"use strict";t(99)("italics",function(t){return function italics(){return t(this,"i","","")}})},{99:99}],233:[function(t,n,r){"use strict";var e=t(97)(!0);t(53)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})})},{53:53,97:97}],234:[function(t,n,r){"use strict";t(99)("link",function(t){return function link(n){return t(this,"a","href",n)}})},{99:99}],235:[function(t,n,r){var e=t(32),i=t(107),o=t(108);e(e.S,"String",{raw:function raw(t){for(var n=i(t.raw),r=o(n.length),e=arguments.length,u=[],c=0;r>c;)u.push(String(n[c++])),c<e&&u.push(String(arguments[c]));return u.join("")}})},{107:107,108:108,32:32}],236:[function(t,n,r){var e=t(32);e(e.P,"String",{repeat:t(101)})},{101:101,32:32}],237:[function(t,n,r){"use strict";t(99)("small",function(t){return function small(){return t(this,"small","","")}})},{99:99}],238:[function(t,n,r){"use strict";var e=t(32),i=t(108),o=t(98),u="startsWith",c=""[u];e(e.P+e.F*t(33)(u),"String",{startsWith:function startsWith(t){var n=o(this,t,u),r=i(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),e=String(t);return c?c.call(n,e,r):n.slice(r,r+e.length)===e}})},{108:108,32:32,33:33,98:98}],239:[function(t,n,r){"use strict";t(99)("strike",function(t){return function strike(){return t(this,"strike","","")}})},{99:99}],240:[function(t,n,r){"use strict";t(99)("sub",function(t){return function sub(){return t(this,"sub","","")}})},{99:99}],241:[function(t,n,r){"use strict";t(99)("sup",function(t){return function sup(){return t(this,"sup","","")}})},{99:99}],242:[function(t,n,r){"use strict";t(102)("trim",function(t){return function trim(){return t(this,3)}})},{102:102}],243:[function(t,n,r){"use strict";var e=t(38),i=t(39),o=t(28),u=t(32),c=t(87),f=t(62).KEY,a=t(34),s=t(94),l=t(92),h=t(114),v=t(117),p=t(116),d=t(115),y=t(57),g=t(31),b=t(47),x=t(7),m=t(107),w=t(110),S=t(85),_=t(66),E=t(71),O=t(70),F=t(67),P=t(76),A=O.f,M=F.f,I=E.f,j=e.Symbol,N=e.JSON,k=N&&N.stringify,R="prototype",T=v("_hidden"),L=v("toPrimitive"),C={}.propertyIsEnumerable,U=s("symbol-registry"),G=s("symbols"),D=s("op-symbols"),W=Object[R],B="function"==typeof j,V=e.QObject,z=!V||!V[R]||!V[R].findChild,K=o&&a(function(){return 7!=_(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,n,r){var e=A(W,n);e&&delete W[n],M(t,n,r),e&&t!==W&&M(W,n,e)}:M,J=function(t){var n=G[t]=_(j[R]);return n._k=t,n},Y=B&&"symbol"==typeof j.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof j},q=function defineProperty(t,n,r){return t===W&&q(D,n,r),x(t),n=w(n,!0),x(r),i(G,n)?(r.enumerable?(i(t,T)&&t[T][n]&&(t[T][n]=!1),r=_(r,{enumerable:S(0,!1)})):(i(t,T)||M(t,T,S(1,{})),t[T][n]=!0),K(t,n,r)):M(t,n,r)},X=function defineProperties(t,n){x(t);for(var r,e=g(n=m(n)),i=0,o=e.length;o>i;)q(t,r=e[i++],n[r]);return t},$=function create(t,n){return void 0===n?_(t):X(_(t),n)},H=function propertyIsEnumerable(t){var n=C.call(this,t=w(t,!0));return!(this===W&&i(G,t)&&!i(D,t))&&(!(n||!i(this,t)||!i(G,t)||i(this,T)&&this[T][t])||n)},Z=function getOwnPropertyDescriptor(t,n){if(t=m(t),n=w(n,!0),t!==W||!i(G,n)||i(D,n)){var r=A(t,n);return!r||!i(G,n)||i(t,T)&&t[T][n]||(r.enumerable=!0),r}},Q=function getOwnPropertyNames(t){for(var n,r=I(m(t)),e=[],o=0;r.length>o;)i(G,n=r[o++])||n==T||n==f||e.push(n);return e},tt=function getOwnPropertySymbols(t){for(var n,r=t===W,e=I(r?D:m(t)),o=[],u=0;e.length>u;)!i(G,n=e[u++])||r&&!i(W,n)||o.push(G[n]);return o};B||(j=function Symbol(){if(this instanceof j)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),n=function(r){this===W&&n.call(D,r),i(this,T)&&i(this[T],t)&&(this[T][t]=!1),K(this,t,S(1,r))};return o&&z&&K(W,t,{configurable:!0,set:n}),J(t)},c(j[R],"toString",function toString(){return this._k}),O.f=Z,F.f=q,t(72).f=E.f=Q,t(77).f=H,t(73).f=tt,o&&!t(58)&&c(W,"propertyIsEnumerable",H,!0),p.f=function(t){return J(v(t))}),u(u.G+u.W+u.F*!B,{Symbol:j});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;nt.length>rt;)v(nt[rt++]);for(var nt=P(v.store),rt=0;nt.length>rt;)d(nt[rt++]);u(u.S+u.F*!B,"Symbol",{for:function(t){return i(U,t+="")?U[t]:U[t]=j(t)},keyFor:function keyFor(t){if(Y(t))return y(U,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){z=!0},useSimple:function(){z=!1}}),u(u.S+u.F*!B,"Object",{create:$,defineProperty:q,defineProperties:X,getOwnPropertyDescriptor:Z,getOwnPropertyNames:Q,getOwnPropertySymbols:tt}),N&&u(u.S+u.F*(!B||a(function(){var t=j();return"[null]"!=k([t])||"{}"!=k({a:t})||"{}"!=k(Object(t))})),"JSON",{stringify:function stringify(t){if(void 0!==t&&!Y(t)){for(var n,r,e=[t],i=1;arguments.length>i;)e.push(arguments[i++]);return n=e[1],"function"==typeof n&&(r=n),!r&&b(n)||(n=function(t,n){if(r&&(n=r.call(this,t,n)),!Y(n))return n}),e[1]=n,k.apply(N,e)}}}),j[R][L]||t(40)(j[R],L,j[R].valueOf),l(j,"Symbol"),l(Math,"Math",!0),l(e.JSON,"JSON",!0)},{107:107,110:110,114:114,115:115,116:116,117:117,28:28,31:31,32:32,34:34,38:38,39:39,40:40,47:47,57:57,58:58,62:62,66:66,67:67,7:7,70:70,71:71,72:72,73:73,76:76,77:77,85:85,87:87,92:92,94:94}],244:[function(t,n,r){"use strict";var e=t(32),i=t(113),o=t(112),u=t(7),c=t(105),f=t(108),a=t(49),s=t(38).ArrayBuffer,l=t(95),h=o.ArrayBuffer,v=o.DataView,p=i.ABV&&s.isView,d=h.prototype.slice,y=i.VIEW,g="ArrayBuffer";e(e.G+e.W+e.F*(s!==h),{ArrayBuffer:h}),e(e.S+e.F*!i.CONSTR,g,{isView:function isView(t){return p&&p(t)||a(t)&&y in t}}),e(e.P+e.U+e.F*t(34)(function(){return!new h(2).slice(1,void 0).byteLength}),g,{slice:function slice(t,n){if(void 0!==d&&void 0===n)return d.call(u(this),t);for(var r=u(this).byteLength,e=c(t,r),i=c(void 0===n?r:n,r),o=new(l(this,h))(f(i-e)),a=new v(this),s=new v(o),p=0;e<i;)s.setUint8(p++,a.getUint8(e++));return o}}),t(91)(g)},{105:105,108:108,112:112,113:113,32:32,34:34,38:38,49:49,7:7,91:91,95:95}],245:[function(t,n,r){var e=t(32);e(e.G+e.W+e.F*!t(113).ABV,{DataView:t(112).DataView})},{112:112,113:113,32:32}],246:[function(t,n,r){t(111)("Float32",4,function(t){return function Float32Array(n,r,e){return t(this,n,r,e)}})},{111:111}],247:[function(t,n,r){t(111)("Float64",8,function(t){return function Float64Array(n,r,e){return t(this,n,r,e)}})},{111:111}],248:[function(t,n,r){t(111)("Int16",2,function(t){return function Int16Array(n,r,e){return t(this,n,r,e)}})},{111:111}],249:[function(t,n,r){t(111)("Int32",4,function(t){return function Int32Array(n,r,e){return t(this,n,r,e)}})},{111:111}],250:[function(t,n,r){t(111)("Int8",1,function(t){return function Int8Array(n,r,e){return t(this,n,r,e)}})},{111:111}],251:[function(t,n,r){t(111)("Uint16",2,function(t){return function Uint16Array(n,r,e){return t(this,n,r,e)}})},{111:111}],252:[function(t,n,r){t(111)("Uint32",4,function(t){return function Uint32Array(n,r,e){return t(this,n,r,e)}})},{111:111}],253:[function(t,n,r){t(111)("Uint8",1,function(t){return function Uint8Array(n,r,e){return t(this,n,r,e)}})},{111:111}],254:[function(t,n,r){t(111)("Uint8",1,function(t){return function Uint8ClampedArray(n,r,e){return t(this,n,r,e)}},!0)},{111:111}],255:[function(t,n,r){"use strict";var e,i=t(12)(0),o=t(87),u=t(62),c=t(65),f=t(21),a=t(49),s=u.getWeak,l=Object.isExtensible,h=f.ufstore,v={},p=function(t){return function WeakMap(){return t(this,arguments.length>0?arguments[0]:void 0)}},d={get:function get(t){if(a(t)){var n=s(t);return n===!0?h(this).get(t):n?n[this._i]:void 0}},set:function set(t,n){return f.def(this,t,n)}},y=n.exports=t(22)("WeakMap",p,d,f,!0,!0);7!=(new y).set((Object.freeze||Object)(v),7).get(v)&&(e=f.getConstructor(p),c(e.prototype,d),u.NEED=!0,i(["delete","has","get","set"],function(t){var n=y.prototype,r=n[t];o(n,t,function(n,i){if(a(n)&&!l(n)){this._f||(this._f=new e);var o=this._f[t](n,i);return"set"==t?this:o}return r.call(this,n,i)})}))},{12:12,21:21,22:22,49:49,62:62,65:65,87:87}],256:[function(t,n,r){"use strict";var e=t(21);t(22)("WeakSet",function(t){return function WeakSet(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function add(t){return e.def(this,t,!0)}},e,!1,!0)},{21:21,22:22}],257:[function(t,n,r){"use strict";var e=t(32),i=t(11)(!0);e(e.P,"Array",{includes:function includes(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),t(5)("includes")},{11:11,32:32,5:5}],258:[function(t,n,r){var e=t(32),i=t(64)(),o=t(38).process,u="process"==t(18)(o);e(e.G,{asap:function asap(t){var n=u&&o.domain;i(n?n.bind(t):t)}})},{18:18,32:32,38:38,64:64}],259:[function(t,n,r){var e=t(32),i=t(18);e(e.S,"Error",{isError:function isError(t){return"Error"===i(t)}})},{18:18,32:32}],260:[function(t,n,r){var e=t(32);e(e.P+e.R,"Map",{toJSON:t(20)("Map")})},{20:20,32:32}],261:[function(t,n,r){var e=t(32);e(e.S,"Math",{iaddh:function iaddh(t,n,r,e){var i=t>>>0,o=n>>>0,u=r>>>0;return o+(e>>>0)+((i&u|(i|u)&~(i+u>>>0))>>>31)|0}})},{32:32}],262:[function(t,n,r){var e=t(32);e(e.S,"Math",{imulh:function imulh(t,n){var r=65535,e=+t,i=+n,o=e&r,u=i&r,c=e>>16,f=i>>16,a=(c*u>>>0)+(o*u>>>16);return c*f+(a>>16)+((o*f>>>0)+(a&r)>>16)}})},{32:32}],263:[function(t,n,r){var e=t(32);e(e.S,"Math",{isubh:function isubh(t,n,r,e){var i=t>>>0,o=n>>>0,u=r>>>0;return o-(e>>>0)-((~i&u|~(i^u)&i-u>>>0)>>>31)|0}})},{32:32}],264:[function(t,n,r){var e=t(32);e(e.S,"Math",{umulh:function umulh(t,n){var r=65535,e=+t,i=+n,o=e&r,u=i&r,c=e>>>16,f=i>>>16,a=(c*u>>>0)+(o*u>>>16);return c*f+(a>>>16)+((o*f>>>0)+(a&r)>>>16)}})},{32:32}],265:[function(t,n,r){"use strict";var e=t(32),i=t(109),o=t(3),u=t(67);t(28)&&e(e.P+t(69),"Object",{__defineGetter__:function __defineGetter__(t,n){u.f(i(this),t,{get:o(n),enumerable:!0,configurable:!0})}})},{109:109,28:28,3:3,32:32,67:67,69:69}],266:[function(t,n,r){"use strict";var e=t(32),i=t(109),o=t(3),u=t(67);t(28)&&e(e.P+t(69),"Object",{__defineSetter__:function __defineSetter__(t,n){u.f(i(this),t,{set:o(n),enumerable:!0,configurable:!0})}})},{109:109,28:28,3:3,32:32,67:67,69:69}],267:[function(t,n,r){var e=t(32),i=t(79)(!0);e(e.S,"Object",{entries:function entries(t){return i(t)}})},{32:32,79:79}],268:[function(t,n,r){var e=t(32),i=t(80),o=t(107),u=t(70),c=t(24);e(e.S,"Object",{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(t){for(var n,r=o(t),e=u.f,f=i(r),a={},s=0;f.length>s;)c(a,n=f[s++],e(r,n));return a}})},{107:107,24:24,32:32,70:70,80:80}],269:[function(t,n,r){"use strict";var e=t(32),i=t(109),o=t(110),u=t(74),c=t(70).f;t(28)&&e(e.P+t(69),"Object",{__lookupGetter__:function __lookupGetter__(t){var n,r=i(this),e=o(t,!0);do if(n=c(r,e))return n.get;while(r=u(r))}})},{109:109,110:110,28:28,32:32,69:69,70:70,74:74}],270:[function(t,n,r){"use strict";var e=t(32),i=t(109),o=t(110),u=t(74),c=t(70).f;t(28)&&e(e.P+t(69),"Object",{__lookupSetter__:function __lookupSetter__(t){var n,r=i(this),e=o(t,!0);do if(n=c(r,e))return n.set;while(r=u(r))}})},{109:109,110:110,28:28,32:32,69:69,70:70,74:74}],271:[function(t,n,r){var e=t(32),i=t(79)(!1);e(e.S,"Object",{values:function values(t){return i(t)}})},{32:32,79:79}],272:[function(t,n,r){"use strict";var e=t(32),i=t(38),o=t(23),u=t(64)(),c=t(117)("observable"),f=t(3),a=t(7),s=t(6),l=t(86),h=t(40),v=t(37),p=v.RETURN,d=function(t){return null==t?void 0:f(t)},y=function(t){var n=t._c;n&&(t._c=void 0,n())},g=function(t){return void 0===t._o},b=function(t){g(t)||(t._o=void 0,y(t))},x=function(t,n){a(t),this._c=void 0,this._o=t,t=new m(this);try{var r=n(t),e=r;null!=r&&("function"==typeof r.unsubscribe?r=function(){e.unsubscribe()}:f(r),this._c=r)}catch(n){return void t.error(n)}g(this)&&y(this)};x.prototype=l({},{unsubscribe:function unsubscribe(){b(this)}});var m=function(t){this._s=t};m.prototype=l({},{next:function next(t){var n=this._s;if(!g(n)){var r=n._o;try{var e=d(r.next);if(e)return e.call(r,t)}catch(t){try{b(n)}finally{throw t}}}},error:function error(t){var n=this._s;if(g(n))throw t;var r=n._o;n._o=void 0;try{var e=d(r.error);if(!e)throw t;t=e.call(r,t)}catch(t){try{y(n)}finally{throw t}}return y(n),t},complete:function complete(t){var n=this._s;if(!g(n)){var r=n._o;n._o=void 0;try{var e=d(r.complete);t=e?e.call(r,t):void 0}catch(t){try{y(n)}finally{throw t}}return y(n),t}}});var w=function Observable(t){s(this,w,"Observable","_f")._f=f(t)};l(w.prototype,{subscribe:function subscribe(t){return new x(t,this._f)},forEach:function forEach(t){var n=this;return new(o.Promise||i.Promise)(function(r,e){f(t);var i=n.subscribe({next:function(n){try{return t(n)}catch(t){e(t),i.unsubscribe()}},error:e,complete:r})})}}),l(w,{from:function from(t){var n="function"==typeof this?this:w,r=d(a(t)[c]);if(r){var e=a(r.call(t));return e.constructor===n?e:new n(function(t){return e.subscribe(t)})}return new n(function(n){var r=!1;return u(function(){if(!r){try{if(v(t,!1,function(t){if(n.next(t),r)return p})===p)return}catch(t){if(r)throw t;return void n.error(t)}n.complete()}}),function(){r=!0}})},of:function of(){for(var t=0,n=arguments.length,r=Array(n);t<n;)r[t]=arguments[t++];return new("function"==typeof this?this:w)(function(t){var n=!1;return u(function(){if(!n){for(var e=0;e<r.length;++e)if(t.next(r[e]),n)return;t.complete()}}),function(){n=!0}})}}),h(w.prototype,c,function(){return this}),e(e.G,{Observable:w}),t(91)("Observable")},{117:117,23:23,3:3,32:32,37:37,38:38,40:40,6:6,64:64,7:7,86:86,91:91}],273:[function(t,n,r){var e=t(63),i=t(7),o=e.key,u=e.set;e.exp({defineMetadata:function defineMetadata(t,n,r,e){u(t,n,i(r),o(e))}})},{63:63,7:7}],274:[function(t,n,r){var e=t(63),i=t(7),o=e.key,u=e.map,c=e.store;e.exp({deleteMetadata:function deleteMetadata(t,n){var r=arguments.length<3?void 0:o(arguments[2]),e=u(i(n),r,!1);if(void 0===e||!e.delete(t))return!1;if(e.size)return!0;var f=c.get(n);return f.delete(r),!!f.size||c.delete(n)}})},{63:63,7:7}],275:[function(t,n,r){var e=t(220),i=t(10),o=t(63),u=t(7),c=t(74),f=o.keys,a=o.key,s=function(t,n){var r=f(t,n),o=c(t);if(null===o)return r;var u=s(o,n);return u.length?r.length?i(new e(r.concat(u))):u:r};o.exp({getMetadataKeys:function getMetadataKeys(t){return s(u(t),arguments.length<2?void 0:a(arguments[1]))}})},{10:10,220:220,63:63,7:7,74:74}],276:[function(t,n,r){var e=t(63),i=t(7),o=t(74),u=e.has,c=e.get,f=e.key,a=function(t,n,r){var e=u(t,n,r);if(e)return c(t,n,r);var i=o(n);return null!==i?a(t,i,r):void 0};e.exp({getMetadata:function getMetadata(t,n){return a(t,i(n),arguments.length<3?void 0:f(arguments[2]))}})},{63:63,7:7,74:74}],277:[function(t,n,r){var e=t(63),i=t(7),o=e.keys,u=e.key;e.exp({getOwnMetadataKeys:function getOwnMetadataKeys(t){return o(i(t),arguments.length<2?void 0:u(arguments[1]))}})},{63:63,7:7}],278:[function(t,n,r){var e=t(63),i=t(7),o=e.get,u=e.key;e.exp({getOwnMetadata:function getOwnMetadata(t,n){return o(t,i(n),arguments.length<3?void 0:u(arguments[2]))}})},{63:63,7:7}],279:[function(t,n,r){var e=t(63),i=t(7),o=t(74),u=e.has,c=e.key,f=function(t,n,r){var e=u(t,n,r);if(e)return!0;var i=o(n);return null!==i&&f(t,i,r)};e.exp({hasMetadata:function hasMetadata(t,n){return f(t,i(n),arguments.length<3?void 0:c(arguments[2]))}})},{63:63,7:7,74:74}],280:[function(t,n,r){var e=t(63),i=t(7),o=e.has,u=e.key;e.exp({hasOwnMetadata:function hasOwnMetadata(t,n){return o(t,i(n),arguments.length<3?void 0:u(arguments[2]))}})},{63:63,7:7}],281:[function(t,n,r){var e=t(63),i=t(7),o=t(3),u=e.key,c=e.set;e.exp({metadata:function metadata(t,n){return function decorator(r,e){c(t,n,(void 0!==e?i:o)(r),u(e))}}})},{3:3,63:63,7:7}],282:[function(t,n,r){var e=t(32);e(e.P+e.R,"Set",{toJSON:t(20)("Set")})},{20:20,32:32}],283:[function(t,n,r){"use strict";var e=t(32),i=t(97)(!0);e(e.P,"String",{at:function at(t){return i(this,t)}})},{32:32,97:97}],284:[function(t,n,r){"use strict";var e=t(32),i=t(27),o=t(108),u=t(50),c=t(36),f=RegExp.prototype,a=function(t,n){this._r=t,this._s=n};t(52)(a,"RegExp String",function next(){var t=this._r.exec(this._s);return{value:t,done:null===t}}),e(e.P,"String",{matchAll:function matchAll(t){if(i(this),!u(t))throw TypeError(t+" is not a regexp!");var n=String(this),r="flags"in f?String(t.flags):c.call(t),e=new RegExp(t.source,~r.indexOf("g")?r:"g"+r);return e.lastIndex=o(t.lastIndex),new a(e,n)}})},{108:108,27:27,32:32,36:36,50:50,52:52}],285:[function(t,n,r){"use strict";var e=t(32),i=t(100);e(e.P,"String",{padEnd:function padEnd(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},{100:100,32:32}],286:[function(t,n,r){"use strict";var e=t(32),i=t(100);e(e.P,"String",{padStart:function padStart(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},{100:100,32:32}],287:[function(t,n,r){"use strict";t(102)("trimLeft",function(t){return function trimLeft(){return t(this,1)}},"trimStart")},{102:102}],288:[function(t,n,r){"use strict";t(102)("trimRight",function(t){return function trimRight(){return t(this,2)}},"trimEnd")},{102:102}],289:[function(t,n,r){t(115)("asyncIterator")},{115:115}],290:[function(t,n,r){t(115)("observable")},{115:115}],291:[function(t,n,r){var e=t(32);e(e.S,"System",{global:t(38)})},{32:32,38:38}],292:[function(t,n,r){for(var e=t(130),i=t(87),o=t(38),u=t(40),c=t(56),f=t(117),a=f("iterator"),s=f("toStringTag"),l=c.Array,h=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],v=0;v<5;v++){var p,d=h[v],y=o[d],g=y&&y.prototype;if(g){g[a]||u(g,a,l),g[s]||u(g,s,d),c[d]=l;for(p in e)g[p]||i(g,p,e[p],!0)}}},{117:117,130:130,38:38,40:40,56:56,87:87}],293:[function(t,n,r){var e=t(32),i=t(104);e(e.G+e.B,{setImmediate:i.set,clearImmediate:i.clear})},{104:104,32:32}],294:[function(t,n,r){var e=t(38),i=t(32),o=t(44),u=t(83),c=e.navigator,f=!!c&&/MSIE .\./.test(c.userAgent),a=function(t){return f?function(n,r){return t(o(u,[].slice.call(arguments,2),"function"==typeof n?n:Function(n)),r)}:t};i(i.G+i.B+i.F*f,{setTimeout:a(e.setTimeout),setInterval:a(e.setInterval)})},{32:32,38:38,44:44,83:83}],295:[function(t,n,r){t(243),t(180),t(182),t(181),t(184),t(186),t(191),t(185),t(183),t(193),t(192),t(188),t(189),t(187),t(179),t(190),t(194),t(195),t(146),t(148),t(147),t(197),t(196),t(167),t(177),t(178),t(168),t(169),t(170),t(171),t(172),t(173),t(174),t(175),t(176),t(150),t(151),t(152),t(153),t(154),t(155),t(156),t(157),t(158),t(159),t(160),t(161),t(162),t(163),t(164),t(165),t(166),t(230),t(235),t(242),t(233),t(225),t(226),t(231),t(236),t(238),t(221),t(222),t(223),t(224),t(227),t(228),t(229),t(232),t(234),t(237),t(239),t(240),t(241),t(141),t(143),t(142),t(145),t(144),t(129),t(127),t(134),t(131),t(137),t(139),t(126),t(133),t(123),t(138),t(121),t(136),t(135),t(128),t(132),t(120),t(122),t(125),t(124),t(140),t(130),t(213),t(219),t(214),t(215),t(216),t(217),t(218),t(198),t(149),t(220),t(255),t(256),t(244),t(245),t(250),t(253),t(254),t(248),t(251),t(249),t(252),t(246),t(247),t(199),t(200),t(201),t(202),t(203),t(206),t(204),t(205),t(207),t(208),t(209),t(210),t(212),t(211),t(257),t(283),t(286),t(285),t(287),t(288),t(284),t(289),t(290),t(268),t(271),t(267),t(265),t(266),t(269),t(270),t(260),t(282),t(291),t(259),t(261),t(263),t(262),t(264),t(273),t(274),t(276),t(275),t(278),t(277),t(279),t(280),t(281),t(258),t(272),t(294),t(293),t(292),n.exports=t(23)},{120:120,121:121,122:122,123:123,124:124,125:125,126:126,127:127,128:128,129:129,130:130,131:131,132:132,133:133,134:134,135:135,136:136,137:137,138:138,139:139,140:140,141:141,142:142,143:143,144:144,145:145,146:146,147:147,148:148,149:149,150:150,151:151,152:152,153:153,154:154,155:155,156:156,157:157,158:158,159:159,160:160,161:161,162:162,163:163,164:164,165:165,166:166,167:167,168:168,169:169,170:170,171:171,172:172,173:173,174:174,175:175,176:176,177:177,178:178,179:179,180:180,181:181,182:182,183:183,184:184,185:185,186:186,187:187,188:188,189:189,190:190,191:191,192:192,193:193,194:194,195:195,196:196,197:197,198:198,199:199,200:200,201:201,202:202,203:203,204:204,205:205,206:206,207:207,208:208,209:209,210:210,211:211,212:212,213:213,214:214,215:215,216:216,217:217,218:218,219:219,220:220,221:221,222:222,223:223,224:224,225:225,226:226,227:227,228:228,229:229,23:23,230:230,231:231,232:232,233:233,234:234,235:235,236:236,237:237,238:238,239:239,240:240,241:241,242:242,243:243,244:244,245:245,246:246,247:247,248:248,249:249,250:250,251:251,252:252,253:253,254:254,255:255,256:256,257:257,258:258,259:259,260:260,261:261,262:262,263:263,264:264,265:265,266:266,267:267,268:268,269:269,270:270,271:271,272:272,273:273,274:274,275:275,276:276,277:277,278:278,279:279,280:280,281:281,282:282,283:283,284:284,285:285,286:286,287:287,288:288,289:289,290:290,291:291,292:292,293:293,294:294}],296:[function(t,n,r){(function(t){!function(t){"use strict";function wrap(t,n,r,e){var i=Object.create((n||Generator).prototype),o=new Context(e||[]);return i._invoke=makeInvokeMethod(t,r,o),i}function tryCatch(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}function defineIteratorMethods(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function AwaitArgument(t){this.arg=t}function AsyncIterator(t){function invoke(n,r,e,i){var o=tryCatch(t[n],t,r);if("throw"!==o.type){var u=o.arg,c=u.value;return c instanceof AwaitArgument?Promise.resolve(c.arg).then(function(t){invoke("next",t,e,i)},function(t){invoke("throw",t,e,i)}):Promise.resolve(c).then(function(t){u.value=t,e(u)},i)}i(o.arg)}function enqueue(t,r){function callInvokeWithMethodAndArg(){return new Promise(function(n,e){invoke(t,r,n,e)})}return n=n?n.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}"object"==typeof process&&process.domain&&(invoke=process.domain.bind(invoke));var n;this._invoke=enqueue}function makeInvokeMethod(t,n,e){var i=a;return function invoke(o,u){if(i===l)throw new Error("Generator is already running");if(i===h){if("throw"===o)throw u;return doneResult()}for(;;){var c=e.delegate;if(c){if("return"===o||"throw"===o&&c.iterator[o]===r){e.delegate=null;var f=c.iterator.return;if(f){var p=tryCatch(f,c.iterator,u);if("throw"===p.type){o="throw",u=p.arg;continue}}if("return"===o)continue}var p=tryCatch(c.iterator[o],c.iterator,u);if("throw"===p.type){e.delegate=null,o="throw",u=p.arg;continue}o="next",u=r;var d=p.arg;if(!d.done)return i=s,d;e[c.resultName]=d.value,e.next=c.nextLoc,e.delegate=null}if("next"===o)e.sent=e._sent=u;else if("throw"===o){if(i===a)throw i=h,u;e.dispatchException(u)&&(o="next",u=r)}else"return"===o&&e.abrupt("return",u);i=l;var p=tryCatch(t,n,e);if("normal"===p.type){i=e.done?h:s;var d={value:p.arg,done:e.done};if(p.arg!==v)return d;e.delegate&&"next"===o&&(u=r)}else"throw"===p.type&&(i=h,o="throw",u=p.arg)}}}function pushTryEntry(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function resetTryEntry(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,u=function next(){for(;++i<t.length;)if(e.call(t,i))return next.value=t[i],next.done=!1,next;return next.value=r,next.done=!0,next};return u.next=u}}return{next:doneResult}}function doneResult(){return{value:r,done:!0}}var r,e=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",u=i.toStringTag||"@@toStringTag",c="object"==typeof n,f=t.regeneratorRuntime;if(f)return void(c&&(n.exports=f));f=t.regeneratorRuntime=c?n.exports:{},f.wrap=wrap;var a="suspendedStart",s="suspendedYield",l="executing",h="completed",v={},p=GeneratorFunctionPrototype.prototype=Generator.prototype;GeneratorFunction.prototype=p.constructor=GeneratorFunctionPrototype,GeneratorFunctionPrototype.constructor=GeneratorFunction,GeneratorFunctionPrototype[u]=GeneratorFunction.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===GeneratorFunction||"GeneratorFunction"===(n.displayName||n.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(p),t},f.awrap=function(t){return new AwaitArgument(t)},defineIteratorMethods(AsyncIterator.prototype),f.async=function(t,n,r,e){var i=new AsyncIterator(wrap(t,n,r,e));return f.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},defineIteratorMethods(p),p[o]=function(){return this},p[u]="Generator",p.toString=function(){return"[object Generator]"},f.keys=function(t){var n=[];for(var r in t)n.push(r);return n.reverse(),function next(){for(;n.length;){var r=n.pop();if(r in t)return next.value=r,next.done=!1,next}return next.done=!0,next}},f.values=values,Context.prototype={constructor:Context,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.tryEntries.forEach(resetTryEntry),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],n=t.completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){function handle(r,e){return o.type="throw",o.arg=t,n.next=r,!!e}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var u=e.call(i,"catchLoc"),c=e.call(i,"finallyLoc");
if(u&&c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&e.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=n,o?this.next=o.finallyLoc:this.complete(u),v},complete:function(t,n){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&n&&(this.next=n)},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),v}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var i=e.arg;resetTryEntry(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:values(t),resultName:n,nextLoc:r},v}}}("object"==typeof t?t:"object"==typeof window?window:"object"==typeof self?self:this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
                                                                               constructor: {
                                                                                   value: subClass,
                                                                                   enumerable: false,
                                                                                   writable: true,
                                                                                   configurable: true
                                                                               }
                                                                           });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);

        if (parent === null) {
            return undefined;
        } else {
            return get(parent, property, receiver);
        }
    } else if ("value" in desc) {
        return desc.value;
    } else {
        var getter = desc.get;

        if (getter === undefined) {
            return undefined;
        }

        return getter.call(receiver);
    }
};


function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }

        return arr2;
    } else {
        return Array.from(arr);
    }
}




















(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.layoutBaseConfig = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.default = {
            commonNodeSize: 150,
            nodeDistance: 30
        };
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.defaultOptions = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        var forceK = 120;
        var forceNodeDistance = 10;

        exports.default = {
        // island
            margin: 100,
            padding: 150,

            // sanderIsland
            horizontal: 10,
            vertical: 10,

            // node
            width: 150,
            height: 100,

            // tree
            levelDistance: 220,
            nodeDistance: 5,
            direction: 'down', // 'up/down/left/right'
            levelSize: 12,

            // tree layoutBase
            base: 1.07,
            scale: 0.17,
            tries: 3,

            // force
            forceNodeDistance: forceNodeDistance,
            forceTries: 3,
            forceK: forceK,
            forceGravitationFactor: 30, // 引力参数
            forceGravitationBase: forceK, // 引力参数
            forceRepulsionFactor: 3380 * forceK, // 斥力参数
            forceRepulsionBase: forceK * 0.75,
            repulsionRange: 4, // 检查斥力时xy范围
            repulsionRangeMin: 1, // 检查斥力时xy范围
            p2pFactor: 1.7, // p2p放大比例
            minForce: forceK / 3, // 终止条件&move的最大范围
            forceLimitFactor: 0.13, // force限制缩放比
            decayA: 77,
            decayB: 67,

            // symmetric
            symmetricTries: 300,
            epsilon: 0.000001,
            T: 20,
            hv: 0.75,

            circleTreeRadius: 60,

            // path
            pathL2HSpace: 300,
            pathL2WSpace: 300,
            pathL3HSpace: 300,
            pathL3WSpace: 200,
            pathL2LineHSpace: 260,
            pathL2LineWSpace: 195,
            pathL3LineHSpace: 200,
            pathL3LineWSpace: 150
        };
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.defaultOptions = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        var forceK = 120;
        var forceNodeDistance = 10;

        exports.default = {
        // island
            margin: 100,
            padding: 150,

            // sanderIsland
            horizontal: 10,
            vertical: 10,

            // node
            width: 150,
            height: 100,

            // tree
            levelDistance: 220,
            nodeDistance: 5,
            direction: 'down', // 'up/down/left/right'
            levelSize: 12,

            // tree layoutBase
            base: 1.07,
            scale: 0.17,
            tries: 3,

            // force
            forceNodeDistance: forceNodeDistance,
            forceTries: 3,
            forceK: forceK,
            forceGravitationFactor: 30, // 引力参数
            forceGravitationBase: forceK, // 引力参数
            forceRepulsionFactor: 3380 * forceK, // 斥力参数
            forceRepulsionBase: forceK * 0.75,
            repulsionRange: 4, // 检查斥力时xy范围
            repulsionRangeMin: 1, // 检查斥力时xy范围
            p2pFactor: 1.7, // p2p放大比例
            minForce: forceK / 3, // 终止条件&move的最大范围
            forceLimitFactor: 0.13, // force限制缩放比
            decayA: 77,
            decayB: 67,

            // symmetric
            symmetricTries: 300,
            epsilon: 0.000001,
            T: 20,
            hv: 0.75,

            circleTreeRadius: 60,

            // path
            pathL2HSpace: 300,
            pathL2WSpace: 300,
            pathL3HSpace: 300,
            pathL3WSpace: 200,
            pathL2LineHSpace: 260,
            pathL2LineWSpace: 195,
            pathL3LineHSpace: 200,
            pathL3LineWSpace: 150
        };
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.point = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        // _classCallCheck
        // _createClass
        var Point = (function () {
            function Point() {
                var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

                _classCallCheck(this, Point);

                this.x = x;
                this.y = y;
            }

            _createClass(Point, [{
                key: 'toString',
                value: function() {
                    return [this.x, this.y].join(',');
                }
            }, {
                key: 'getCopy',
                value: function() {
                    return new Point(this.x, this.y);
                }
            }, {
                key: 'convertToLocation',
                value: function() {
                    return Math.floor(this.x) + ' ' + Math.floor(this.y);
                }
            }, {
                key: 'distance',
                value: function() {
                    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
                }
            }, {
                key: 'zoom',
                value: function(scale) {
                    this.x *= scale;
                    this.y *= scale;
                    return this;
                }
            }, {
                key: 'rotate',
                value: function(pt, angle) {
                    angle %= 360;
                    var rad = angle * Math.PI / 180;

                    var diffX = this.x - pt.x;
                    var diffY = this.y - pt.y;
                    var sinRad = Math.sin(rad);
                    var cosRad = Math.cos(rad);

                    var x = diffX * cosRad - diffY * sinRad + pt.x;
                    var y = diffX * sinRad + diffY * cosRad + pt.y;

                    this.x = x;
                    this.y = y;

                    return this;
                }
            }, {
                key: 'flip',
                value: function(pt, isHorizontal) {
                    var x = this.x;
                    var y = this.y;

                    if (isHorizontal === true) {
                        x = pt.x * 2 - x;
                    } else {
                        y = pt.y * 2 - y;
                    }

                    this.x = x;
                    this.y = y;

                    return this;
                }
            }], [{
                key: 'parseFromLocation',
                value: function(location) {
                    location = location || ' ';
                    location = location.split(' ');
                    var x = parseFloat(location[0]);
                    var y = parseFloat(location[1]);

                    if (isNaN(x)) {
                        x = 0;
                    }
                    if (isNaN(y)) {
                        y = 0;
                    }

                    return new Point(x, y);
                }
            }]);

            return Point;
        })();

        exports.default = Point;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.point);
        global.position = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _point) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _point2 = _interopRequireDefault(_point);

        // _interopRequireDefault

        // _classCallCheck
        // _createClass
        // _possibleConstructorReturn
        // _inherits
        var Position = (function (_Point) {
            _inherits(Position, _Point);

            function Position() {
                var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

                _classCallCheck(this, Position);

                return _possibleConstructorReturn(this, (Position.__proto__ || Object.getPrototypeOf(Position)).call(this, x, y));
            }

            _createClass(Position, [{
                key: 'getCopy',
                value: function() {
                    return new Position(this.x, this.y);
                }
            }, {
                key: 'offset',
                value: function(_offset) {
                    this.x += _offset.x;
                    this.y += _offset.y;
                    return this;
                }
            }, {
                key: 'getOffsetFrom',
                value: function(spot) {
                    return new Position(this.x - spot.x, this.y - spot.y);
                }
            }, {
                key: 'getOffsetTo',
                value: function(spot) {
                    return new Position(spot.x - this.x, spot.y - this.y);
                }
            }, {
                key: 'moveTo',
                value: function(point) {
                    this.x = point.x;
                    this.y = point.y;
                    return this;
                }
            }, {
                key: 'getCounterforce',
                value: function() {
                    return new Position(-this.x, -this.y);
                }
            }], [{
                key: 'parseFromLocation',
                value: function(location) {
                    var point = _point2.default.parseFromLocation(location);
                    return new Position(point.x, point.y);
                }
            }]);

            return Position;
        })(_point2.default);

        exports.default = Position;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.size = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        // _classCallCheck
        var Size = function() {
            var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            _classCallCheck(this, Size);

            this.width = width;
            this.height = height;
        };

        exports.default = Size;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.point);
        global.rect = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _point) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _point2 = _interopRequireDefault(_point);

        // _interopRequireDefault

        // _classCallCheck
        // _createClass
        var Rect = (function () {
            function Rect(rect) {
                _classCallCheck(this, Rect);

                this.left = rect.left || 0;
                this.top = rect.top || 0;
                this.right = rect.right || 0;
                this.bottom = rect.bottom || 0;
                var centerX = (this.left + this.right) / 2;
                var centerY = (this.top + this.bottom) / 2;
                this.center = new _point2.default(centerX, centerY);

                this.width = this.right - this.left;
                this.height = this.bottom - this.top;
            }

            _createClass(Rect, [{
                key: 'containsPoint',
                value: function(pt) {
                    return this.left <= pt.x && this.right >= pt.x && this.top <= pt.y && this.bottom >= pt.y;
                }
            }]);

            return Rect;
        })();

        exports.default = Rect;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.rect, global.point);
        global.bounds = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _rect, _point) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _rect2 = _interopRequireDefault(_rect);

        var _point2 = _interopRequireDefault(_point);

        // _interopRequireDefault

        // _classCallCheck
        // _createClass
        // _possibleConstructorReturn
        // _inherits
        var Bounds = (function (_Rect) {
            _inherits(Bounds, _Rect);

            function Bounds(bd, spot) {
                _classCallCheck(this, Bounds);

                var _this = _possibleConstructorReturn(this, (Bounds.__proto__ || Object.getPrototypeOf(Bounds)).call(this, bd));

                var x = 0,
                    y = 0;
                if (spot) {
                    x = spot.x;
                    y = spot.y;
                } else {
                    x = _this.center.x;
                    y = _this.center.y;
                }
                _this.spot = new _point2.default(x, y);
                return _this;
            }

            _createClass(Bounds, [{
                key: 'getCurrentBounds',
                value: function(pt) {
                    if (!pt) {
                        return this;
                    }

                    var left = 0,
                        top = 0,
                        right = 0,
                        bottom = 0;
                    var spotX = this.spot.x;
                    var spotY = this.spot.y;
                    left = pt.x - (spotX - this.left);
                    top = pt.y - (spotY - this.top);
                    right = pt.x + (this.right - spotX);
                    bottom = pt.y + (this.bottom - spotY);

                    var newBounds = Bounds.parseFrom({
                        left: left,
                        top: top,
                        right: right,
                        bottom: bottom
                    }, pt);

                    return newBounds;
                }
            }], [{
                key: 'parseFrom',
                value: function(bd, spot) {
                    return new Bounds(bd, spot);
                }
            }]);

            return Bounds;
        })(_rect2.default);

        exports.default = Bounds;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.position);
        global.angle = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _position) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _position2 = _interopRequireDefault(_position);

        // _interopRequireDefault

        var Pi = Math.PI;
        var piAngle = 180;

        exports.default = {
            getAngle: getAngle,
            getRadian: getRadian,

            getVerticalByRadian: getVerticalByRadian,
            getVerticalByAngle: getVerticalByAngle,

            convertAngleToRadian: convertAngleToRadian,
            convertRadianToAngle: convertRadianToAngle,

            rotateAngle: rotateAngle,
            rotateDown: function(target) {
                return target;
            },
            rotateUp: rotateSpecialAngle(Pi),
            rotateLeft: rotateSpecialAngle(Pi / 2),
            rotateRight: rotateSpecialAngle(-Pi / 2)
        };


        // return void(0);

        function getVerticalByRadian(radian) {
            return (radian + Pi / 2) % Pi;
        }

        function getVerticalByAngle(angle) {
            return (angle + 90) % 180;
        }

        function getRadian(from, to) {
            return Math.atan2(to.y - from.y, to.x - from.x);
        }

        function getAngle(from, to) {
            return convertRadianToAngle(getRadian(from, to));
        }

        function convertRadianToAngle(radian) {
            return radian / Pi * piAngle;
        }

        function convertAngleToRadian(angle) {
            return angle / piAngle * Pi;
        }

        function rotateSpecialAngle(angle) {
            var cos = Math.cos(angle),
                sin = Math.sin(angle);
            return function (target, dot) {
                return rotate(cos, sin, target, dot);
            };
        }

        function rotateAngle(angle, target, dot) {
            angle %= Math.PI * 2;
            var cos = Math.cos(angle),
                sin = Math.sin(angle);

            return rotate(cos, sin, target, dot);
        }

        function rotate(cos, sin, target, dot) {
            var x = target.x,
                y = target.y,
                sx = dot.x,
                sy = dot.y;

            var nx = (x - sx) * cos - (y - sy) * sin + sx,
                ny = (x - sx) * sin + (y - sy) * cos + sy;

            return new _position2.default(nx, ny);
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.common = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        // _toConsumableArray

        exports.default = {
            createEmptyDic: createEmptyDic,
            keys: keys,
            breadthFirstTraversal: breadthFirstTraversal
        };


        // return void(0);

        function createEmptyDic() {
            return Object.create(null);
        }

        function keys(obj) {
            return Object.getOwnPropertyNames(obj);
        }

        function breadthFirstTraversal(tree) {
            return {
                eachNode: eachNode
            };

            // return void(0);

            function eachNode(nodeOperator) {
                var seeds = [tree];
                var nextSeeds = [];

                var perNode = function(node) {
                    nodeOperator(node);
                    nextSeeds = nextSeeds.concat([].concat(_toConsumableArray(node.subTrees.values())));
                };

                while (seeds.length) {
                    _.each(seeds, perNode);

                    seeds = nextSeeds;
                    nextSeeds = [];
                }
            }
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.position, global.size);
        global.getIslandArea = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _position, _size) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.default = getIslandArea;

        var _position2 = _interopRequireDefault(_position);

        var _size2 = _interopRequireDefault(_size);

        // _interopRequireDefault

        function getIslandArea(island) {
            var padding = island.options.padding;

            var left = 0;
            var top = 0;
            var right = 0;
            var bottom = 0;

            if (island.nodes.size === 0) {
                left = top = right = bottom = 0;
            } else {
                left = Infinity;
                top = Infinity;
                right = -Infinity;
                bottom = -Infinity;
            }

            var nodes = island.nodes.values();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = null;

            var _iterator = nodes[Symbol.iterator]();
            try {
                for (var _step;
                    !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                    _iteratorNormalCompletion = true) {
                    var node = _step.value;

                    var offset = node.offset;
                    left = Math.min(left, offset.x);
                    top = Math.min(top, offset.y);
                    right = Math.max(right, offset.x);
                    bottom = Math.max(bottom, offset.y);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return {
                spot: new _position2.default(left, top),
                size: new _size2.default(right - left + padding, bottom - top + padding)
            };
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.position);
        global.moveIslandSpot = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _position) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.default = moveIslandSpot;

        var _position2 = _interopRequireDefault(_position);

        // _interopRequireDefault

        function moveIslandSpot(island, from, to) {
            to = to || new _position2.default(0, 0);
            var offset = to.getOffsetFrom(from);
            offsetIsland(island, offset);
        }

        function offsetIsland(island, offset) {
            var nodes = island.nodes.values();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = null;

            var _iterator = nodes[Symbol.iterator]();
            try {
                for (var _step;
                    !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                    _iteratorNormalCompletion = true) {
                    var node = _step.value;

                    node.offset = node.offset.offset(offset);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.point, global.angle);
        global.rotateIsland = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _point, _angle) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.default = rotateIsland;

        var _point2 = _interopRequireDefault(_point);

        var _angle2 = _interopRequireDefault(_angle);

        // _interopRequireDefault

        var rotaters = {
            up: _angle2.default.rotateUp,
            down: _angle2.default.rotateDown,
            left: _angle2.default.rotateLeft,
            right: _angle2.default.rotateRight
        };

        // return void(0);

        function rotateIsland(island, direction) {
            if (!needRotate(direction)) {
                return;
            }

            var rotater = createSpecialRotater(island, direction);

            var subTrees = island.nodes.values();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = null;

            var _iterator = subTrees[Symbol.iterator]();
            try {
                for (var _step;
                    !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                    _iteratorNormalCompletion = true) {
                    var subTree = _step.value;

                    subTree.offset = rotater(subTree.offset);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }

        function needRotate(direction) {
            return direction !== 'down';
        }

        function createSpecialRotater(island, direction) {
            var islandArea = island.getArea();
            var size = islandArea.size;
            var dot = new _point2.default(size.width / 2, size.height / 2);
            var rotater = rotaters[direction];

            return function (position) {
                return rotater(position, dot);
            };
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.point);
        global.rotateTool = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _point) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _point2 = _interopRequireDefault(_point);

        // _interopRequireDefault

        var roatateTool = {};

        /**
     * 旋转
     *
     * @param {Array} nodes [{key: string, location: string}]
     * @param {Object} destPt {x, y}
     * @param {Number} angle 度数
     * @returns {Array} 旋转后的结果
     */
        roatateTool.rotate = function (nodes, destPt, angle) {
            var result = [];

            destPt = new _point2.default(destPt.x, destPt.y);
            nodes.forEach(function (node) {
                var pt = _point2.default.parseFromLocation(node.location);

                pt.rotate(destPt, angle);

                result.push({
                    key: node.key,
                    location: pt.convertToLocation()
                });
            });

            return result;
        };

        exports.default = roatateTool;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.point);
        global.flipTool = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _point) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _point2 = _interopRequireDefault(_point);

        // _interopRequireDefault

        var flipTool = {};

        /**
     * 翻转函数入口
     *
     * @param {Array} nodes [{key: string, location: string}]
     * @param {Object} destPt {x: string, y: string}
     * @param {Boolean} isHorizontal true: 水平翻转
     * @returns {Array} 翻转后的结果
     */
        flipTool.flip = function (nodes, destPt, isHorizontal) {
            var result = [];

            destPt = new _point2.default(destPt.x, destPt.y);
            nodes.forEach(function (node) {
                var pt = _point2.default.parseFromLocation(node.location);

                pt.flip(destPt, isHorizontal);

                result.push({
                    key: node.key,
                    location: pt.convertToLocation()
                });
            });

            return result;
        };

        flipTool.flipHorizontal = function (nodes, destPt) {
            var result = flipTool.flip(nodes, destPt, true);
            return result;
        };

        flipTool.flipVertical = function (nodes, destPt) {
            var result = flipTool.flip(nodes, destPt, false);
            return result;
        };

        exports.default = flipTool;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.bounds);
        global.boundsTool = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _bounds) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _bounds2 = _interopRequireDefault(_bounds);

        // _interopRequireDefault

        var boundsTool = {};

        boundsTool.calcBounds = function (nodes) {
        // check node instanceof Node

            var left,
                top,
                right,
                bottom;

            nodes.forEach(function (node) {
                var bounds = node.bounds;
                bounds = bounds.getCurrentBounds(node.offset);
                if (_.isUndefined(left)) {
                    left = bounds.left;
                    top = bounds.top;
                    right = bounds.right;
                    bottom = bounds.bottom;
                } else {
                    left = Math.min(left, bounds.left);
                    top = Math.min(top, bounds.top);
                    right = Math.max(right, bounds.right);
                    bottom = Math.max(bottom, bounds.bottom);
                }
            });

            var bounds = new _bounds2.default({
                left: left,
                top: top,
                right: right,
                bottom: bottom
            });

            return bounds;
        };

        exports.default = boundsTool;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.lockTool = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        var lockTool = {};

        lockTool.lockNodes = function (nodes) {
        // check node instanceof Node ?

            nodes.forEach(function (node) {
                node.locked = true;
            });
        };

        exports.default = lockTool;
    });
})(NetBrain);
(function(netBrain) {
    'use strict';

    var internalGlobal = netBrain.ns('LayoutTools.internalGlobal');

    var Position = internalGlobal.position.default;

    var boundsTool = internalGlobal.boundsTool.default;

    function moveSomeNodesNearOtherNodes(nodes, destNodes) {
        var bounds = boundsTool.calcBounds(_.filter(Array.from(destNodes.values()), function(node) {
            return node.canMove();
        }));
        var centerX = bounds.center.x;
        var centerY = bounds.center.y;

        var r = bounds.right - centerX;
        nodes.forEach(function(node) {
            var x = getRandomNumber() * r + centerX;
            var y = getRandomNumber() * r + centerY;
            if (node.canMove()) {
                node.offset.moveTo(new Position(x, y));
            }
        });
    }

    /**
     * (-1, 1)
     * @return {[type]} [description]
     */
    function getRandomNumber() {
        return Math.random() * (Math.random() > 0.5 ? 1 : -1);
    }

    internalGlobal.moveSomeNodesNearOtherNodesTool = {
        default: moveSomeNodesNearOtherNodes
    };
})(NetBrain);(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.link = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        // _classCallCheck
        var Link = function(originalLink) {
            _classCallCheck(this, Link);

            this.from = originalLink.from;
            this.to = originalLink.to;

            this.originalLink = originalLink;
        };

        exports.default = Link;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.position, global.bounds);
        global.node = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _position, _bounds) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _position2 = _interopRequireDefault(_position);

        var _bounds2 = _interopRequireDefault(_bounds);

        // _interopRequireDefault

        // _classCallCheck
        // _createClass
        var Node = (function () {
            function Node(originalNode, locked) {
                _classCallCheck(this, Node);

                this.id = originalNode.key;

                // pinned 外部传入 用于锁定图元，禁止移动 不可修改
                this.pinned = !!originalNode.pinned;

                // locked layout Tools中使用，可更改，默认值为pinned
                this.locked = locked;

                // node的bounds 不可修改
                this.bounds = _bounds2.default.parseFrom(originalNode.bounds || {}); // comment for temp test

                this._offset = _position2.default.parseFromLocation(originalNode.location);

                this.originalNode = originalNode;

                this.fromLinks = new Set();
                this.toLinks = new Set();
                this.allLinks = new Set();

                this.fromNeighbors = new Map();
                this.toNeighbors = new Map();
                this.allNeighbors = new Map();
            }

            _createClass(Node, [{
                key: 'addFromLink',
                value: function(link) {
                    this.fromLinks.add(link);
                    this.allLinks.add(link);
                }
            }, {
                key: 'addToLink',
                value: function(link) {
                    this.toLinks.add(link);
                    this.allLinks.add(link);
                }
            }, {
                key: 'addFromNeighbor',
                value: function(neighbor) {
                    this.fromNeighbors.set(neighbor.id, neighbor);
                    this.allNeighbors.set(neighbor.id, neighbor);
                }
            }, {
                key: 'addToNeighbor',
                value: function(neighbor) {
                    this.toNeighbors.set(neighbor.id, neighbor);
                    this.allNeighbors.set(neighbor.id, neighbor);
                }
            }, {
                key: 'canMove',
                value: function() {
                    return !this.pinned && !this.locked;
                }
            }, {
                key: 'updatePositionByIslandPosition',
                value: function(islandPosition) {
                    var position = new _position2.default(islandPosition.x, islandPosition.y);
                    position.offset(this.offset);
                    this.offset = position;
                }
            }, {
                key: 'toLocJson',
                value: function() {
                    return {
                        key: this.id,
                        location: this.offset.convertToLocation(),
                        position: this.offset.getCopy()
                    };
                }
            }, {
                key: 'offset',
                get: function() {
                    return this._offset;
                },
                set: function(offset) {
                    this._offset = offset;
                }
            }, {
                key: 'fixed',
                get: function() {
                    return !this.canMove();
                }
            }]);

            return Node;
        })();

        exports.default = Node;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.node);
        global.treeNode = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _node) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _node2 = _interopRequireDefault(_node);

        // _interopRequireDefault

        // _classCallCheck
        // _possibleConstructorReturn
        // _inherits
        var TreeNode = (function (_Node) {
            _inherits(TreeNode, _Node);

            function TreeNode(originalNode, locked, options) {
                _classCallCheck(this, TreeNode);

                var _this = _possibleConstructorReturn(this, (TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).call(this, originalNode, locked));

                _this.options = options;
                return _this;
            }

            return TreeNode;
        })(_node2.default);

        exports.default = TreeNode;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.position);
        global.tree = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _position) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _position2 = _interopRequireDefault(_position);

        // _interopRequireDefault

        // _classCallCheck
        // _createClass
        var Tree = (function () {
            function Tree(node, parentTree) {
                _classCallCheck(this, Tree);

                this.id = node.id;

                this.options = node.options;

                this.node = node;
                // node.tree = this;

                this.parentTree = parentTree;
                this.rootTree = parentTree && parentTree.rootTree || this;

                this.subTrees = new Map();
                this.allSubTrees = new Map();

                this.elseNeighbors = new Map();

                this.hasSetElseOffset = false;
                this._elseOffsets = [];
                this._elseOffset = NaN;

                this._options = null;

                this.resetCacheInfo();

                if (parentTree) {
                    parentTree.addSubTree(this);
                } else {
                // 特殊：只有root中allSubTrees包含自身
                    this.addToAllSubTrees(this);
                }
            }

            _createClass(Tree, [{
                key: 'resetCacheInfo',
                value: function() {
                    this._height = NaN;
                    this._width = NaN;
                    this._radianWidthRate = NaN;
                    this._radianWidth = NaN;
                    this._radianStep = NaN;
                    this._level = NaN;
                    this._maxLevel = NaN;
                }
            }, {
                key: 'addSubTree',
                value: function(subTree) {
                    this.resetCacheInfo();

                    this.subTrees.set(subTree.id, subTree);
                    subTree.parentTree = this;

                    this.addToAllSubTrees(subTree);
                }
            }, {
                key: 'removeSubTree',
                value: function(subTree) {
                    this.resetCacheInfo();

                    this.subTrees.delete(subTree.id);
                    subTree.parentTree = null;

                    this.removeFromAllSubTree(subTree);
                }
            }, {
                key: 'addToAllSubTrees',
                value: function(subTree) {
                    this.resetCacheInfo();

                    this.allSubTrees.set(subTree.id, subTree);

                    if (this.parentTree) {
                        this.parentTree.addToAllSubTrees(subTree);
                    }
                }
            }, {
                key: 'removeFromAllSubTree',
                value: function(subTree) {
                    this.resetCacheInfo();

                    this.allSubTrees.delete(subTree.id);

                    if (this.parentTree) {
                        this.parentTree.removeFromAllSubTree(subTree);
                    }
                }
            }, {
                key: 'getHighestSubTree',
                value: function() {
                    var subTrees = this.subTrees.values();
                    var maxHeightSubTree = subTrees.next().value;

                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = null;

                    var _iterator = subTrees[Symbol.iterator]();
                    try {
                        for (var _step;
                            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                            _iteratorNormalCompletion = true) {
                            var child = _step.value;

                            if (child.height > maxHeightSubTree.height) {
                                maxHeightSubTree = child;
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    return maxHeightSubTree;
                }
            }, {
                key: 'resetElseOffset',
                value: function() {
                    this.clearElseOffsetCache();
                    this._elseOffsets = [];
                    this.hasSetElseOffset = false;
                }
            }, {
                key: 'clearElseOffsetCache',
                value: function() {
                    this._elseOffset = NaN;
                    this.parentTree && this.parentTree.clearElseOffsetCache();
                }
            }, {
                key: 'horizontalMove',
                value: function(xOffset) {
                    var offset = new _position2.default(xOffset, 0);
                    offsetTree(this, offset);
                }
            }, {
                key: 'width',
                get: function() {
                    if (isNaN(this._width)) {
                        this._width = calcWidth(this);
                    }
                    return this._width;
                }
            }, {
                key: 'radianWidthRate',
                get: function() {
                    if (isNaN(this._radianWidthRate)) {
                        this._radianWidthRate = calcRadianWidthRate(this);
                    }

                    return this._radianWidthRate;
                }
            }, {
                key: 'radianWidth',
                get: function() {
                    if (isNaN(this._radianWidth)) {
                        this._radianWidth = calcRadianWidth(this);
                    }

                    // TODO: for test
                    this.node.originalNode.radianWidth = this._radianWidth.toFixed(3);

                    return this._radianWidth;
                }
            }, {
                key: 'radianStep',
                get: function() {
                    if (isNaN(this._radianStep)) {
                        this._radianStep = calcRadianStep(this);
                    }
                    return this._radianStep;
                }
            }, {
                key: 'level',
                get: function() {
                    if (isNaN(this._level)) {
                        this._level = calcLevel(this);
                    }
                    return this._level;
                }
            }, {
                key: 'maxLevel',
                get: function() {
                    if (isNaN(this._maxLevel)) {
                        this._maxLevel = calcMaxLevel(this);
                    }
                    return this._maxLevel;
                }
            }, {
                key: 'isRootTree',
                get: function() {
                    return this === this.rootTree;
                }
            }, {
                key: 'height',
                get: function() {
                    if (isNaN(this._height)) {
                        this._height = calcHeight(this);
                    }
                    return this._height;
                }
            }, {
                key: 'offset',
                get: function() {
                    return this.node.offset;
                },
                set: function(value) {
                    this.node.offset = value;
                }
            }, {
                key: 'elseOffset',
                get: function() {
                    if (isNaN(this._elseOffset)) {
                        var elseOffset = calcElseOffset(this._elseOffsets);

                        elseOffset = getMaxAbsOffset(elseOffset, this.subTrees.values());

                        this._elseOffset = elseOffset;
                    }

                    // TODO: for test
                    // this.node.originalNode.elseOffset = this._elseOffset.toFixed(1);

                    return this._elseOffset;
                },
                set: function(value) {
                    this.clearElseOffsetCache();

                    if (!this.hasSetElseOffset) {
                        this._elseOffsets.push(value);
                    }
                }
            }]);

            return Tree;
        })();

        exports.default = Tree;


        function offsetTree(tree, offset) {
            tree.offset = tree.offset.offset(offset);
            var allSubTrees = tree.allSubTrees.values();
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = null;

            var _iterator2 = allSubTrees[Symbol.iterator]();
            try {
                for (var _step2;
                    !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
                    _iteratorNormalCompletion2 = true) {
                    var subTree = _step2.value;

                    subTree.offset = subTree.offset.offset(offset);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }

        function getMaxAbsOffset(currentElseOffset, subTrees) {
            var maxElseOffset = currentElseOffset;

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = null;

            var _iterator3 = subTrees[Symbol.iterator]();
            try {
                for (var _step3;
                    !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done);
                    _iteratorNormalCompletion3 = true) {
                    var subTree = _step3.value;

                    var subElseOffset = subTree.elseOffset;
                    if (Math.abs(subElseOffset) > Math.abs(maxElseOffset)) {
                        maxElseOffset = subElseOffset;
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return maxElseOffset;
        }

        function calcElseOffset(offsets) {
            return average(offsets);
        }

        function average(arr) {
            var total = sum(arr);
            return total / (arr.length || 1);
        }

        function sum(arr) {
            var total = 0;
            arr.forEach(function (n) {
                return total += n;
            });
            return total;
        }

        function calcHeight(tree) {
            return tree.subTrees.size === 0 ? tree.options.height : tree.options.levelDistance + tree.getHighestSubTree().height;
        }

        function calcWidth(tree) {
            return tree.subTrees.size === 0 ? tree.options.width : tree.options.nodeDistance * (tree.subTrees.size - 1) + sumChildrenWidth(tree.subTrees);
        }

        function calcRadianWidthRate(tree) {
            var divisor = tree.level - 1;
            var thisWidth = divisor ? 1 / divisor : divisor;

            return tree.subTrees.size === 0 ? thisWidth : Math.max(thisWidth, sumChildrenRadianWidthRate(tree.subTrees));
        }

        function calcRadianWidth(tree) {
            var divisor = tree.rootTree.radianWidthRate || 1;
            return tree.radianWidthRate / divisor * 2 * Math.PI;
        }

        function sumChildrenRadianWidthRate(subTrees) {
            var sum2 = 0;
            var trees = subTrees.values();
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = null;

            var _iterator4 = trees[Symbol.iterator]();
            try {
                for (var _step4;
                    !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done);
                    _iteratorNormalCompletion4 = true) {
                    var tree = _step4.value;

                    sum2 += tree.radianWidthRate;
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            return sum2;
        }

        function calcRadianStep(tree) {
            var divisor = tree.subTrees.size + (tree.isRootTree ? 0 : 1);
            return 2 * Math.PI / (divisor || 1);
        }

        function calcLevel(tree) {
            return tree.parentTree ? tree.parentTree.level + 1 : 1;
        }

        function calcMaxLevel(tree) {
            var maxLevel = 1;

            if (tree.subTrees.size === 0) {
                return maxLevel;
            }

            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = null;

            var _iterator5 = tree.subTrees.values()[Symbol.iterator]();
            try {
                for (var _step5;
                    !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done);
                    _iteratorNormalCompletion5 = true) {
                    var subTree = _step5.value;

                    if (subTree.maxLevel >= maxLevel) {
                        maxLevel = subTree.maxLevel + 1;
                    }
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            return maxLevel;
        }

        function sumChildrenWidth(subTrees) {
            var sum2 = 0;
            var trees = subTrees.values();
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = null;

            var _iterator6 = trees[Symbol.iterator]();
            try {
                for (var _step6;
                    !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done);
                    _iteratorNormalCompletion6 = true) {
                    var tree = _step6.value;

                    sum2 += tree.width;
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            return sum2;
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.defaultOptions);
        global.topoData = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _defaultOptions) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _defaultOptions2 = _interopRequireDefault(_defaultOptions);

        // _interopRequireDefault

        // _classCallCheck
        var TopoData = function(options) {
            _classCallCheck(this, TopoData);

            this.options = Object.assign({}, _defaultOptions2.default, options);

            this.nodes = new Map();
            this.links = new Set();
        };

        exports.default = TopoData;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.position, global.getIslandArea, global.moveIslandSpot, global.rotateIsland);
        global.island = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _position, _getIslandArea, _moveIslandSpot, _rotateIsland) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _position2 = _interopRequireDefault(_position);

        var _getIslandArea2 = _interopRequireDefault(_getIslandArea);

        var _moveIslandSpot2 = _interopRequireDefault(_moveIslandSpot);

        var _rotateIsland2 = _interopRequireDefault(_rotateIsland);

        // _interopRequireDefault

        // _classCallCheck
        // _createClass
        var Island = (function () {
            function Island(options) {
                _classCallCheck(this, Island);

                this.options = options;

                this.fixedNodes = new Map();

                this.nodes = new Map();
                this.links = new Set();

                this._position = new _position2.default();

                this._watchNodes();
            }

            _createClass(Island, [{
                key: 'rotateDirection',
                value: function(direction) {
                    (0, _rotateIsland2.default)(this, direction);
                }
            }, {
                key: 'moveSpot',
                value: function() {
                    if (!this.isAbsolute) {
                        (0, _moveIslandSpot2.default)(this, this.getSpot());
                    }
                }
            }, {
                key: 'annexAnotherSingleIsland',
                value: function(anotherIsland) {
                    this._annexNodes(anotherIsland);
                }
            }, {
                key: 'annexAnotherAbsolutIsland',
                value: function(anotherIsland) {
                    var link = {
                        from: this.getAnyFixedNode().id,
                        to: anotherIsland.getAnyFixedNode().id
                    };
                    this._addVirtualLink(link, anotherIsland);

                    this._annexNodes(anotherIsland);
                    this._annexLinks(anotherIsland);
                }
            }, {
                key: '_addVirtualLink',
                value: function(link, anotherIsland) {
                    var fromNode = this.nodes.get(link.from);
                    var toNode = anotherIsland.nodes.get(link.to);

                    fromNode.addToNeighbor(toNode);
                    toNode.addFromNeighbor(fromNode);
                }
            }, {
                key: '_annexNodes',
                value: function(anotherIsland) {
                    var otherNodes = anotherIsland.nodes.values();
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = null;

                    var _iterator = otherNodes[Symbol.iterator]();
                    try {
                        for (var _step;
                            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                            _iteratorNormalCompletion = true) {
                            var node = _step.value;

                            this.nodes.set(node.id, node);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
            }, {
                key: '_annexLinks',
                value: function(anotherIsland) {
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = null;

                    var _iterator2 = anotherIsland.links[Symbol.iterator]();
                    try {
                        for (var _step2;
                            !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
                            _iteratorNormalCompletion2 = true) {
                            var link = _step2.value;

                            this.links.add(link);
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }
            }, {
                key: 'getArea',
                value: function() {
                    return (0, _getIslandArea2.default)(this);
                }
            }, {
                key: 'getSpot',
                value: function() {
                    return this.getArea().spot;
                }
            }, {
                key: 'getSize',
                value: function() {
                    return this.getArea().size;
                }
            }, {
                key: 'getAnyFixedNode',
                value: function() {
                    return this.fixedNodes.values().next().value || null;
                }
            }, {
                key: '_watchNodes',
                value: function() {
                    var fixedNodes = this.fixedNodes;
                    var nodes = this.nodes;
                    var set = nodes.set;
                    nodes.set = function (key, node) {
                        if (node.fixed) {
                            fixedNodes.set(node.id, node);
                        }
                        set.apply(nodes, arguments);
                    };
                }
            }, {
                key: 'position',
                get: function() {
                    return this._position;
                },
                set: function(value) {
                    this._position = value;
                    updateAllNodesPosition(this.nodes.values(), value);
                }
            }, {
                key: 'isAbsolute',
                get: function() {
                    return this.getAnyFixedNode() !== null;
                }
            }, {
                key: 'isSingleNodeIsland',
                get: function() {
                    return this.nodes.size === 1;
                }
            }]);

            return Island;
        })();

        exports.default = Island;


        // return void(0);

        function updateAllNodesPosition(nodes, position) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = null;

            var _iterator3 = nodes[Symbol.iterator]();
            try {
                for (var _step3;
                    !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done);
                    _iteratorNormalCompletion3 = true) {
                    var node = _step3.value;

                    node.updatePositionByIslandPosition(position);
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.islandGroup = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        // _toConsumableArray

        // _classCallCheck
        // _createClass
        var IslandGroup = (function () {
            function IslandGroup(options) {
                _classCallCheck(this, IslandGroup);

                this.options = options;

                this.absoluteIsland = null;
                this.sanderIsland = null;
                this.islands = new Set();

                this._watchIslands();
            }

            _createClass(IslandGroup, [{
                key: 'getAbsoluteIsland',
                value: function() {
                    return this.absoluteIsland;
                }
            }, {
                key: 'getSanderIsland',
                value: function() {
                    return this.sanderIsland;
                }
            }, {
                key: 'getCommonIslands',
                value: function() {
                    return [].concat(_toConsumableArray(this.islands));
                // return _.difference(
                //     [...this.islands],
                //     [this.getAbsoluteIsland()],
                // );
                }
            }, {
                key: 'getAllIslands',
                value: function() {
                    var islands = [this.absoluteIsland, this.sanderIsland, [].concat(_toConsumableArray(this.islands))];

                    return _.flatten(islands, true).filter(function (i) {
                        return i;
                    });
                }
            }, {
                key: '_watchIslands',
                value: function() {
                    var group = this;
                    var islands = this.islands;
                    var add = islands.add;

                    islands.add = function (island) {
                        if (island.isAbsolute) {
                            if (group.absoluteIsland) {
                                group.absoluteIsland.annexAnotherAbsolutIsland(island);
                            } else {
                                group.absoluteIsland = island;
                            // add.apply(islands, arguments);
                            }
                        } else if (island.isSingleNodeIsland) {
                            if (group.sanderIsland) {
                                group.sanderIsland.annexAnotherSingleIsland(island);
                            } else {
                                group.sanderIsland = island;
                            // add.apply(islands, arguments);
                            }
                        } else {
                            add.apply(islands, arguments);
                        }
                    };
                }
            }]);

            return IslandGroup;
        })();

        exports.default = IslandGroup;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.node);
        global.baseLayout = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _node) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _node2 = _interopRequireDefault(_node);

        // _interopRequireDefault

        // _classCallCheck
        // _createClass
        var BaseLayout = (function () {
            function BaseLayout() {
                _classCallCheck(this, BaseLayout);

                this.layoutName = 'BaseLayout';
                this.nodeType = _node2.default;
            }

            /**
         * Layout入口，需要被覆盖
         *
         * @returns {undefined}
         * @memberof BaseLayout
         */


            _createClass(BaseLayout, [{
                key: 'layout',
                value: function() {
                    throw new Error(this.layoutName + ' should be override');
                }
            }, {
                key: 'getLayoutName',
                value: function() {
                    return this.layoutName;
                }
            }, {
                key: 'getNodeType',
                value: function() {
                    return this.nodeType;
                }
            }, {
                key: 'generateResult',
                value: function(nodes) {
                    var result = [];

                    nodes.forEach(function (node) {
                        result.push(node.toLocJson());
                    });

                    return result;
                }
            }]);

            return BaseLayout;
        })();

        exports.default = BaseLayout;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.setTopoDataRelations = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.default = setTopoDataRelations;
        function setTopoDataRelations(topoData) {
            var nodes = topoData.nodes;
            var links = topoData.links;

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = null;

            var _iterator = links[Symbol.iterator]();
            try {
                for (var _step;
                    !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                    _iteratorNormalCompletion = true) {
                    var link = _step.value;

                    var fromNode = nodes.get(link.from);
                    var toNode = nodes.get(link.to);

                    link.fromNode = fromNode;
                    link.toNode = toNode;

                    if (fromNode) {
                        fromNode.addFromLink(link);
                    }

                    if (toNode) {
                        toNode.addToLink(link);
                    }

                    if (fromNode && toNode) {
                        fromNode.addToNeighbor(toNode);
                        toNode.addFromNeighbor(fromNode);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.link, global.topoData, global.setTopoDataRelations);
        global.convert = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _link, _topoData, _setTopoDataRelations) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.default = convert;

        var _link2 = _interopRequireDefault(_link);

        var _topoData2 = _interopRequireDefault(_topoData);

        var _setTopoDataRelations2 = _interopRequireDefault(_setTopoDataRelations);

        // _interopRequireDefault

        function convert(originalData, NodeType, options) {
            var topoData = new _topoData2.default(options);

            convertNodes(originalData, topoData, NodeType, topoData.options);
            convertLinks(originalData, topoData);

            (0, _setTopoDataRelations2.default)(topoData);

            return topoData;
        }

        function convertNodes(originalData, topoData, NodeType, options) {
            var lockedNodes = new Set();
            _.each(originalData.lockedNodes, function (id) {
                return lockedNodes.add(id);
            });

            var nodes = topoData.nodes;
            originalData.nodeDataArray.forEach(function (originalNode) {
                var locked = lockedNodes.has(originalNode.key);
                var node = new NodeType(originalNode, locked, options);
                nodes.set(node.id, node);
            });
        }

        function convertLinks(originalData, topoData) {
            var nodes = topoData.nodes;
            var links = topoData.links;
            originalData.linkDataArray.forEach(function (originalLink) {
                var link = new _link2.default(originalLink);
                if (nodes.has(link.from) && nodes.has(link.to)) {
                    links.add(link);
                }
            });
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.island, global.islandGroup);
        global.split = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _island, _islandGroup) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.default = split;

        var _island2 = _interopRequireDefault(_island);

        var _islandGroup2 = _interopRequireDefault(_islandGroup);

        // _interopRequireDefault

        // for test:
        split._getFirstNodeAsSeeds = getFirstNodeAsSeeds;

        function split(topoData) {
            var islandGroup = new _islandGroup2.default(topoData.options);

            while (topoData.nodes.size > 0) {
                islandGroup.islands.add(pickIsland(topoData));
            }

            return islandGroup;
        }

        function pickIsland(topoData) {
            var island = new _island2.default(topoData.options);
            var seeds = getFirstNodeAsSeeds(topoData);

            while (seeds.size > 0) {
                seeds = addSeedsToIsland(topoData, seeds, island);
            }

            return island;
        }

        function addSeedsToIsland(topoData, seeds, island) {
            var newSeeds = new Set();

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = null;

            var _iterator = seeds[Symbol.iterator]();
            try {
                for (var _step;
                    !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                    _iteratorNormalCompletion = true) {
                    var node = _step.value;

                    var nodeId = node.id;
                    island.nodes.set(nodeId, node);
                    topoData.nodes.delete(nodeId);

                    addAllLinksToIsland(node, island);

                    pickSeedsInAllNeighbors(node, island.nodes, newSeeds);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return newSeeds;
        }

        function addAllLinksToIsland(node, island) {
            addFromLinks(node, island);
            addToLinks(node, island);
        }

        function addFromLinks(node, island) {
            addLinksToIsland(node.fromLinks, island);
        }

        function addToLinks(node, island) {
            addLinksToIsland(node.toLinks, island);
        }

        function addLinksToIsland(links, island) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = null;

            var _iterator2 = links[Symbol.iterator]();
            try {
                for (var _step2;
                    !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
                    _iteratorNormalCompletion2 = true) {
                    var link = _step2.value;

                    island.links.add(link);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }

        function pickSeedsInAllNeighbors(node, passedNodes, newSeeds) {
            pickSeedsInFromNeighbors(node, passedNodes, newSeeds);
            pickSeedsInToNeighbors(node, passedNodes, newSeeds);
        }

        function pickSeedsInFromNeighbors(node, passedNodes, newSeeds) {
            pickSeedsInNeighbors(node.fromNeighbors, passedNodes, newSeeds);
        }

        function pickSeedsInToNeighbors(node, passedNodes, newSeeds) {
            pickSeedsInNeighbors(node.toNeighbors, passedNodes, newSeeds);
        }

        function pickSeedsInNeighbors(neighbors, passedNodes, newSeeds) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = null;

            var _iterator3 = neighbors.values()[Symbol.iterator]();
            try {
                for (var _step3;
                    !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done);
                    _iteratorNormalCompletion3 = true) {
                    var node = _step3.value;

                    if (!passedNodes.has(node.id)) {
                        newSeeds.add(node);
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }

        function getFirstNodeAsSeeds(topoData) {
            var firstNode = getFirstNode(topoData);
            return new Set([firstNode]);
        }

        function getFirstNode(topoData) {
            var nodes = topoData.nodes;
            var firstNodeId = nodes.keys().next().value;
            return nodes.get(firstNodeId);
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.defaultOptions, global.position, global.baseLayout);
        global.sanderIslandLayout = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _defaultOptions, _position, _baseLayout) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _defaultOptions2 = _interopRequireDefault(_defaultOptions);

        var _position2 = _interopRequireDefault(_position);

        var _baseLayout2 = _interopRequireDefault(_baseLayout);

        // _interopRequireDefault

        // _classCallCheck
        // _createClass
        // _possibleConstructorReturn
        // _inherits
        var horizontalDistance = _defaultOptions2.default.horizontal + _defaultOptions2.default.width;
        var verticalDistance = _defaultOptions2.default.vertical + _defaultOptions2.default.height;

        var SanderIslandLayout = (function (_BaseLayout) {
            _inherits(SanderIslandLayout, _BaseLayout);

            function SanderIslandLayout(props) {
                _classCallCheck(this, SanderIslandLayout);

                return _possibleConstructorReturn(this, (SanderIslandLayout.__proto__ || Object.getPrototypeOf(SanderIslandLayout)).call(this, props));
            }

            _createClass(SanderIslandLayout, [{
                key: 'layout',
                value: function(island) {
                    var width = Math.sqrt(island.nodes.size) * horizontalDistance;
                    var startX = 0;
                    var startY = 0;

                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = null;

                    var _iterator = island.nodes.values()[Symbol.iterator]();
                    try {
                        for (var _step;
                            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                            _iteratorNormalCompletion = true) {
                            var node = _step.value;

                            node.offset = new _position2.default(startX, startY);
                            startX += horizontalDistance;
                            if (startX > width) {
                                startX = 0;
                                startY += verticalDistance;
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    return this.generateResult(island.nodes);
                }
            }]);

            return SanderIslandLayout;
        })(_baseLayout2.default);

        exports.default = SanderIslandLayout;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.baseLayout, global.position, global.sanderIslandLayout);
        global.islandGroupLayout = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _baseLayout, _position, _sanderIslandLayout) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _baseLayout2 = _interopRequireDefault(_baseLayout);

        var _position2 = _interopRequireDefault(_position);

        var _sanderIslandLayout2 = _interopRequireDefault(_sanderIslandLayout);

        // _interopRequireDefault

        // _classCallCheck
        // _createClass
        // _possibleConstructorReturn
        // _get

        // _inherits
        var IslandGroupLayout = (function (_BaseLayout) {
            _inherits(IslandGroupLayout, _BaseLayout);

            function IslandGroupLayout(props) {
                _classCallCheck(this, IslandGroupLayout);

                return _possibleConstructorReturn(this, (IslandGroupLayout.__proto__ || Object.getPrototypeOf(IslandGroupLayout)).call(this, props));
            }

            _createClass(IslandGroupLayout, [{
                key: 'layout',
                value: function(islandGroup, layouter) {
                    layoutAbsoluteIsland(islandGroup, layouter);
                    layoutSanderIsland(islandGroup);
                    layoutEachCommonIsland(islandGroup, layouter);

                    layoutIslands(islandGroup);

                    return this.generateResult(islandGroup);
                }
            }, {
                key: 'generateResult',
                value: function(islandGroup) {
                    var nodeLocations = [];
                    var allIslands = islandGroup.getAllIslands();
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = null;

                    var _iterator = allIslands[Symbol.iterator]();
                    try {
                        for (var _step;
                            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                            _iteratorNormalCompletion = true) {
                            var island = _step.value;

                            nodeLocations.push(_get(IslandGroupLayout.prototype.__proto__ || Object.getPrototypeOf(IslandGroupLayout.prototype), 'generateResult', this).call(this, island.nodes));
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    return _.flatten(nodeLocations, true);
                }
            }]);

            return IslandGroupLayout;
        })(_baseLayout2.default);

        exports.default = IslandGroupLayout;


        function layoutAbsoluteIsland(islandGroup, layouter) {
            var island = islandGroup.getAbsoluteIsland();
            if (island) {
                layouter.layout(island);
            }
        }

        function layoutSanderIsland(islandGroup) {
            var island = islandGroup.getSanderIsland();
            if (island) {
                var sanderIslandLayouter = new _sanderIslandLayout2.default();
                sanderIslandLayouter.layout(island);
            }
        }

        function layoutEachCommonIsland(islandGroup, layouter) {
            var islands = islandGroup.islands;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = null;

            var _iterator2 = islands[Symbol.iterator]();
            try {
                for (var _step2;
                    !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
                    _iteratorNormalCompletion2 = true) {
                    var island = _step2.value;

                    layouter.layout(island);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }

        function layoutIslands(islandGroup) {
            var options = islandGroup.options;

            var viewportStart = (islandGroup.options.viewportStart || new _position2.default()).getCopy();
            var leftStart = viewportStart.x;
            var topStart = viewportStart.y;
            var maxHeight = 0;
            var sideLength = getSuggestionSideLength(islandGroup);
            var maxX = leftStart + sideLength;

            var absoluteIsland = islandGroup.getAbsoluteIsland();
            if (absoluteIsland) {
                var area = absoluteIsland.getArea();
                absoluteIsland.position = new _position2.default(); // no offset

                leftStart = area.spot.x + area.size.width + options.margin;
                topStart = area.spot.y;
                maxHeight = area.size.height;
            }

            var islandsArr = islandGroup.getCommonIslands();
            islandsArr = sortRelativeIslandsBySize(islandsArr);

            var sanderIsland = islandGroup.getSanderIsland();
            if (sanderIsland) {
                islandsArr.unshift(sanderIsland);
            }

            islandsArr.forEach(function (island) {
                island.moveSpot();

                var size = island.getSize();

                var needNewRow = leftStart + size.width > maxX && leftStart !== viewportStart.x;

                if (needNewRow) {
                    leftStart = viewportStart.x;
                    topStart += maxHeight + options.margin;
                    maxHeight = 0;
                }

                island.position = new _position2.default(leftStart, topStart);

                leftStart += size.width + options.margin;
                if (size.height > maxHeight) {
                    maxHeight = size.height;
                }
            });
        }

        function sortRelativeIslandsBySize(islandsArr) {
            return islandsArr.sort(function (islandA, islandB) {
                return islandA.nodes.size > islandB.nodes.size;
            });
        }

        function getSuggestionSideLength(islandGroup) {
            var islands = islandGroup.islands;
            if (islandGroup.options.viewportWidth) {
                return islandGroup.options.viewportWidth;
            }

            var sumWidth = 0;
            var sumHeight = 0;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = null;

            var _iterator3 = islands[Symbol.iterator]();
            try {
                for (var _step3;
                    !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done);
                    _iteratorNormalCompletion3 = true) {
                    var island = _step3.value;

                    var options = island.options;
                    var size = island.getSize();
                    sumWidth += size.width + options.margin;
                    sumHeight += size.height + options.margin;
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return Math.sqrt(sumWidth * sumHeight);
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.baseLayout);
        global.geometryLayout = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _baseLayout) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _baseLayout2 = _interopRequireDefault(_baseLayout);

        // _interopRequireDefault

        // _classCallCheck
        // _possibleConstructorReturn
        // _inherits
        var GeometryLayout = (function (_BaseLayout) {
            _inherits(GeometryLayout, _BaseLayout);

            function GeometryLayout(props) {
                _classCallCheck(this, GeometryLayout);

                var _this = _possibleConstructorReturn(this, (GeometryLayout.__proto__ || Object.getPrototypeOf(GeometryLayout)).call(this, props));

                _this.layoutName = 'GeometryLayout';
                return _this;
            }

            return GeometryLayout;
        })(_baseLayout2.default);

        exports.default = GeometryLayout;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.tree);
        global.buildTree = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _tree) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.default = treeLayoutBuildTree;

        var _tree2 = _interopRequireDefault(_tree);

        // _interopRequireDefault

        function treeLayoutBuildTree(node, parentTree) {
            var tree = new _tree2.default(node, parentTree);

            var trees = [tree];
            while (trees.length) {
                trees = addNextLevelTree(trees);
            }

            return tree;
        }

        function addNextLevelTree(trees) {
            var newTrees = [];

            trees.sort(function (treeA, treeB) {
                return treeA.node.allNeighbors.size - treeB.node.allNeighbors.size;
            });

            trees.forEach(function (tree) {
                var allNeighbors = tree.node.allNeighbors.values();
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = null;

                var _iterator = allNeighbors[Symbol.iterator]();
                try {
                    for (var _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                        _iteratorNormalCompletion = true) {
                        var neighbor = _step.value;

                        var newTree = addNeighborToTree(neighbor, tree);

                        if (newTree) {
                            newTrees.push(newTree);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            });

            return newTrees;
        }

        function addNeighborToTree(node, tree) {
            var rootTree = tree.rootTree;

            if (!rootTree.allSubTrees.has(node.id)) {
                return new _tree2.default(node, tree);
            }
            if (node.id !== tree.parentTree.id) {
                var elseTree = rootTree.allSubTrees.get(node.id);
                tree.elseNeighbors.set(elseTree.id, elseTree);
            }

            return null;
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.buildTree);
        global.findRoot = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _buildTree) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.default = treeLayoutFindRoot;

        var _buildTree2 = _interopRequireDefault(_buildTree);

        // _interopRequireDefault

        function treeLayoutFindRoot(island) {
            if (island.options.rootNodeId) {
                return island.nodes.get(island.options.rootNodeId);
            }

            var nodes = island.nodes;
            var roots = findRoots(nodes, island.options);
            var isBigData = nodes.size > 200 && roots.length > 10;

            return isBigData ? roots[0] : pickGoodRoot(roots);
        }

        function pickGoodRoot(roots) {
            var minLevel = Infinity;
            var goodRoots = [];

            roots.forEach(function (root) {
                var tree = (0, _buildTree2.default)(root);
                if (tree.maxLevel < minLevel) {
                    minLevel = tree.maxLevel;
                    goodRoots = [root];
                } else if (tree.maxLevel === minLevel) {
                    goodRoots.push(root);
                }
            });

            var randomIndex = Math.floor(Math.random() * goodRoots.length);
            return goodRoots[randomIndex];
        }

        function findRoots(nodesMap, options) {
            var root = null;
            var roots = [];

            var nodes = nodesMap.values();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = null;

            var _iterator = nodes[Symbol.iterator]();
            try {
                for (var _step;
                    !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                    _iteratorNormalCompletion = true) {
                    var node = _step.value;

                    if (!node.priority) {
                        node.priority = options.getTreeRootPriority(node.originalNode);
                    }

                    if (root === null) {
                        root = node;
                        roots = [root];
                    }

                    var samePriority = node.priority === root.priority && node.allLinks.size === root.allLinks.size;

                    if (samePriority) {
                        roots.push(root);
                    } else {
                        var nodeIsBatterRoot = node.priority < root.priority || node.priority === root.priority && node.allLinks.size < root.allLinks.size;

                        if (nodeIsBatterRoot) {
                            root = node;
                            roots = [root];
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return roots;
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.common, global.defaultOptions);
        global.splitBigLevel = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _common, _defaultOptions) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.default = splitBigLevel;

        var _common2 = _interopRequireDefault(_common);

        var _defaultOptions2 = _interopRequireDefault(_defaultOptions);

        // _interopRequireDefault

        // _toConsumableArray

        function splitBigLevel(tree) {
            _common2.default.breadthFirstTraversal(tree).eachNode(splitIfNeed);
        }

        function splitIfNeed(tree) {
            var levelSize = _defaultOptions2.default.levelSize;
            var need = tree.subTrees.size > levelSize;

            if (!need) {
                return;
            }

            var subTrees = [].concat(_toConsumableArray(tree.subTrees.values()));
            subTrees = _.sortBy(subTrees, getOrder);

            var targetParent = subTrees[levelSize - 1];
            targetParent.isVirtualRoot = true;

            var subTreesToMoveDown = subTrees.slice(levelSize);

            _.each(subTreesToMoveDown, function (subTreeToMoveDown) {
                tree.removeSubTree(subTreeToMoveDown);
                targetParent.addSubTree(subTreeToMoveDown);
            });
        }

        function getOrder(tree) {
            var order = tree.subTrees.size;

            // let neighbors = [...tree.elseNeighbors.values()];
            //
            // _.each(neighbors, function(neighbor) {
            //     if(neighbor.level > tree.level) {
            //         // order++;
            //     } else if(neighbor.level < tree.level) {
            //         // order--;
            //     }
            // });

            return order;
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.position);
        global.setRelativePosition = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _position) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _position2 = _interopRequireDefault(_position);

        // _interopRequireDefault

        var _slicedToArray = (function () {
            function sliceIterator(arr, i) {
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = null;

                var _i = arr[Symbol.iterator]();
                try {
                    for (var _s;
                        !(_n = (_s = _i.next()).done);
                        _n = true) {
                        _arr.push(_s.value);

                        if (i && _arr.length === i) break;
                    }
                } catch (err) {
                    _d = true;
                    _e = err;
                } finally {
                    try {
                        if (!_n && _i.return) _i.return();
                    } finally {
                        if (_d) throw _e;
                    }
                }

                return _arr;
            }

            return function (arr, i) {
                if (Array.isArray(arr)) {
                    return arr;
                } else if (Symbol.iterator in Object(arr)) {
                    return sliceIterator(arr, i);
                }
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
            };
        })();

        // _toConsumableArray

        exports.default = {
            bySubTreesCounter: setRelativePositionBySubTreesCounter,
            byOffset: setRelativePositionByOffset
        };


        // return void(0);

        function setRelativePositionBySubTreesCounter(tree) {
            doSetRelativePosition(tree, sortSubTreesBySubTreesCounter);
        }

        function setRelativePositionByOffset(tree) {
            doSetRelativePosition(tree, sortSubTreesByOffset);
        }

        function doSetRelativePosition(tree, sorter) {
            var leftStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            var left = leftStart + (tree.width - tree.options.width) / 2;
            var top = (tree.level - 1) * tree.options.levelDistance;

            tree.offset = new _position2.default(left, top);

            var childStart = leftStart;

            var subTrees = [].concat(_toConsumableArray(tree.subTrees.values()));
            var sortedSubTrees = sorter(subTrees);

            sortedSubTrees.forEach(function (subTree) {
                doSetRelativePosition(subTree, sorter, childStart);
                childStart += subTree.width + tree.options.nodeDistance;
            });
        }

        function sortSubTreesBySubTreesCounter(subTrees) {
            var _$partition = _.partition(subTrees, function (subTree) {
                    return subTree.isVirtualRoot;
                }),
                _$partition2 = _slicedToArray(_$partition, 2),
                virtualRoot = _$partition2[0],
                otherSubTrees = _$partition2[1];

            otherSubTrees = otherSubTrees.sort(function (treeA, treeB) {
                return treeA.maxLevel !== treeB.maxLevel ? treeA.maxLevel - treeB.maxLevel : treeA.allSubTrees.size !== treeB.allSubTrees.size ? treeA.allSubTrees.size - treeB.allSubTrees.size : treeA.subTrees.size - treeB.subTrees.size;
            });

            var sortedSubTrees = virtualRoot;

            var flag = true;
            var subTree = otherSubTrees.shift();
            while (subTree) {
                if (flag) {
                    sortedSubTrees.push(subTree);
                } else {
                    sortedSubTrees.unshift(subTree);
                }
                flag = !flag;
                subTree = otherSubTrees.shift();
            }

            return sortedSubTrees;
        }

        function sortSubTreesByOffset(subTrees) {
            subTrees = subTrees.sort(function (treeA, treeB) {
                return treeA.offset.x - treeB.offset.x;
            });
            return subTrees;
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.setRelativePosition);
        global.reduceCross = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _setRelativePosition) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.default = reduceCross;

        var _setRelativePosition2 = _interopRequireDefault(_setRelativePosition);

        // _interopRequireDefault

        var scale = 0;
        var base = 0;
        var tries = 0;

        function reduceCross(rootTree) {
            var options = rootTree.options;
            scale = options.scale;
            base = options.base;
            tries = options.tries;

            for (var i = 0; i < tries; i++) {
                beautifySubTree(rootTree);
            }
        }

        function beautifySubTree(rootTree) {
            var subTrees = getAllSubTrees(rootTree);
            resetElseOffset(subTrees);
            updateAllSubTreeElseOffset(subTrees);
            applyElseOffset(subTrees);
            _setRelativePosition2.default.byOffset(rootTree);
        }

        function resetElseOffset(subTrees) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = null;

            var _iterator = subTrees.values()[Symbol.iterator]();
            try {
                for (var _step;
                    !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                    _iteratorNormalCompletion = true) {
                    var subTree = _step.value;

                    subTree.resetElseOffset();
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }

        function applyElseOffset(subTrees) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = null;

            var _iterator2 = subTrees.values()[Symbol.iterator]();
            try {
                for (var _step2;
                    !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
                    _iteratorNormalCompletion2 = true) {
                    var subTree = _step2.value;

                    var offset = subTree.offset;
                    offset.x += subTree.elseOffset;
                    subTree.offset = offset;
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }

        function updateAllSubTreeElseOffset(subTrees) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = null;

            var _iterator3 = subTrees.values()[Symbol.iterator]();
            try {
                for (var _step3;
                    !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done);
                    _iteratorNormalCompletion3 = true) {
                    var subTree = _step3.value;

                    updateSubTreeElseOffset(subTree);
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }

        function updateSubTreeElseOffset(subTree) {
            var elseNeighbors = subTree.elseNeighbors.values();

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = null;

            var _iterator4 = elseNeighbors[Symbol.iterator]();
            try {
                for (var _step4;
                    !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done);
                    _iteratorNormalCompletion4 = true) {
                    var elseNeighbor = _step4.value;

                    var distance = elseNeighbor.offset.x - subTree.offset.x;
                    var currentOffset = (distance - subTree.options.nodeDistance - subTree.options.width / 2 - elseNeighbor.options.width / 2) / 2;

                    var random = Math.random() * scale;

                    subTree.elseOffset = currentOffset + (subTree.options.nodeDistance + subTree.options.width) * (base + random);

                    elseNeighbor.elseOffset = -(currentOffset +
                // subTree.options.nodeDistance +
                elseNeighbor.options.width * (base + scale - random));
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            subTree.hasSetElseOffset = true;
        }

        function getAllSubTrees(rootTree) {
            var subTrees = new Map();

            var allSubTrees = rootTree.allSubTrees.values();
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = null;

            var _iterator5 = allSubTrees[Symbol.iterator]();
            try {
                for (var _step5;
                    !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done);
                    _iteratorNormalCompletion5 = true) {
                    var subTree = _step5.value;

                    if (subTree.level > 1) {
                        subTrees.set(subTree.id, subTree);
                    }
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            return subTrees;
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.common, global.defaultOptions);
        global.correctVirtualRootOffset = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _common, _defaultOptions) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.default = correctVirtualRootOffset;

        var _common2 = _interopRequireDefault(_common);

        var _defaultOptions2 = _interopRequireDefault(_defaultOptions);

        // _interopRequireDefault

        function correctVirtualRootOffset(tree) {
            if (_defaultOptions2.default.levelSize % 2 === 1) {
                return;
            }

            _common2.default.breadthFirstTraversal(tree).eachNode(correctSubTreeIfNeed);
        }

        function correctSubTreeIfNeed(tree) {
            if (!tree.isVirtualRoot) {
                return;
            }

            var offsetX = (_defaultOptions2.default.width + _defaultOptions2.default.nodeDistance) / 2;

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = null;

            var _iterator = tree.subTrees.values()[Symbol.iterator]();
            try {
                for (var _step;
                    !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                    _iteratorNormalCompletion = true) {
                    var subTree = _step.value;

                    subTree.horizontalMove(offsetX);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.middleLeafNodes = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.default = middleLeafNodes;
        function middleLeafNodes(rootTree) {
            var allLeafTrees = selectAllHasElseNeighborLeafSubTrees(rootTree);
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = null;

            var _iterator = allLeafTrees.values()[Symbol.iterator]();
            try {
                for (var _step;
                    !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                    _iteratorNormalCompletion = true) {
                    var leafTree = _step.value;

                    middleLeafNode(leafTree);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }

        function middleLeafNode(leafTree) {
            var x = leafTree.parentTree.offset.x;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = null;

            var _iterator2 = leafTree.elseNeighbors.values()[Symbol.iterator]();
            try {
                for (var _step2;
                    !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
                    _iteratorNormalCompletion2 = true) {
                    var neighbor = _step2.value;

                    var shouldMiddle = !hasBrother(leafTree) || isLowerThanNeighbor(leafTree, neighbor);
                    if (!shouldMiddle) {
                        return;
                    }
                    x += neighbor.offset.x;
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            var offsetX = x / (leafTree.elseNeighbors.size + 1);
            if (!isThereTree(offsetX, leafTree, leafTree.rootTree.allSubTrees)) {
                leafTree.offset.x = offsetX;
            }
        }

        function isThereTree(offsetX, leafTree, allSubTrees) {
            var level = leafTree.level;
            var nodeFullWidth = leafTree.options.width + leafTree.options.nodeDistance - 2;
            var start = offsetX - nodeFullWidth;
            var end = offsetX + nodeFullWidth;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = null;

            var _iterator3 = allSubTrees.values()[Symbol.iterator]();
            try {
                for (var _step3;
                    !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done);
                    _iteratorNormalCompletion3 = true) {
                    var tree = _step3.value;

                    if (tree.level === level && tree !== leafTree) {
                        var offset = tree.offset;
                        if (start < offset.x && offset.x < end) {
                            return true;
                        }
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return false;
        }

        function hasBrother(tree) {
            return tree.parentTree.subTrees.size > 1;
        }

        function isLowerThanNeighbor(leafTree, neighbor) {
            return leafTree.level > neighbor.level;
        }

        function selectAllHasElseNeighborLeafSubTrees(rootTree) {
            var predicate = function(tree) {
                return isJustOneLevel(tree) && hasElseNeighbor(tree);
            };
            return selectSubTrees(rootTree, predicate);
        }

        function isJustOneLevel(tree) {
            return tree.maxLevel === 1;
        }

        function hasElseNeighbor(tree) {
            return tree.elseNeighbors.size > 0;
        }

        function selectSubTrees(rootTree, predicate) {
            var leaves = new Map();

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = null;

            var _iterator4 = rootTree.allSubTrees.values()[Symbol.iterator]();
            try {
                for (var _step4;
                    !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done);
                    _iteratorNormalCompletion4 = true) {
                    var subTree = _step4.value;

                    if (predicate(subTree)) {
                        leaves.set(subTree.id, subTree);
                    }
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            return leaves;
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.common, global.defaultOptions);
        global.shrink = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _common, _defaultOptions) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.default = shrink;

        var _common2 = _interopRequireDefault(_common);

        var _defaultOptions2 = _interopRequireDefault(_defaultOptions);

        // _interopRequireDefault

        // _toConsumableArray

        var minDistance = getMinDistance();

        function shrink(tree) {
            var deepNode = findDeepNode(tree);
            var shrinkInfo = createEmptyShrinkInfo();

            var currentLevelTree = deepNode || tree;
            do {
                shrinkLevel(currentLevelTree, shrinkInfo);
                currentLevelTree = currentLevelTree.parentTree;
            } while (currentLevelTree !== tree.parentTree);

            return shrinkInfo;
        }

        function createEmptyShrinkInfo() {
            return {
                left: _common2.default.createEmptyDic(),
                right: _common2.default.createEmptyDic()
            };
        }

        function shrinkLevel(currentTree, shrinkInfo) {
            var subTrees = getSortedSubtrees(currentTree);
            var mainIndex = subTrees.indexOf(shrinkInfo.currentTree);
            if (mainIndex !== -1) {
                var leftTrees = subTrees.slice(0, mainIndex);
                var rightTrees = subTrees.slice(mainIndex + 1);

                shrinkLeftSubTrees(leftTrees, shrinkInfo);
                shrinkRightSubTrees(rightTrees, shrinkInfo);
                middleCurrentNode(currentTree, subTrees);
                currentTree.resetCacheInfo();
            }
            updateShrinkInfo(currentTree, shrinkInfo);
        }

        function middleCurrentNode(tree, subTrees) {
            var offset = tree.offset;
            offset.x = middle(subTrees);
            tree.offset = offset;
        }

        function middle(trees) {
            var left = trees[0].offset.x;
            var right = trees[trees.length - 1].offset.x;
            var middle2 = (left + right) / 2;
            return middle2;
        }

        function shrinkLeftSubTrees(leftTrees, shrinkInfo) {
            if (leftTrees.length < 1) {
                return;
            }

            var leftTree = leftTrees.pop();
            while (leftTree) {
                shrinkLeftTree(leftTree, shrinkInfo);
                leftTree = leftTrees.pop();
            }
        }

        function shrinkLeftTree(leftTree, shrinkInfo) {
            var leftShrinkInfo = shrink(leftTree);
            var distance = getLeftDistance(shrinkInfo, leftShrinkInfo);
            var xOffset = distance - minDistance;

            if (xOffset > 0) {
                leftTree.horizontalMove(xOffset);
                moveShrinkInfo(leftShrinkInfo, xOffset);
            }
            mergeLeftShrinkInfo(shrinkInfo, leftShrinkInfo);
        }

        function mergeLeftShrinkInfo(shrinkInfo, leftShrinkInfo) {
            var levels = _common2.default.keys(leftShrinkInfo.left);
            var left = shrinkInfo.left;
            var leftLeft = leftShrinkInfo.left;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = null;

            var _iterator = levels[Symbol.iterator]();
            try {
                for (var _step;
                    !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                    _iteratorNormalCompletion = true) {
                    var level = _step.value;

                    left[level] = leftLeft[level];
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }

        function getLeftDistance(shrinkInfo, leftShrinkInfo) {
            var distance = Infinity;
            var levels = _common2.default.keys(leftShrinkInfo.right);
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = null;

            var _iterator2 = levels[Symbol.iterator]();
            try {
                for (var _step2;
                    !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
                    _iteratorNormalCompletion2 = true) {
                    var level = _step2.value;

                    var currentDistance = shrinkInfo.left[level] - leftShrinkInfo.right[level];
                    if (currentDistance < distance) {
                        distance = currentDistance;
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return distance;
        }

        function shrinkRightSubTrees(rightTrees, shrinkInfo) {
            if (rightTrees.length < 1) {
                return;
            }

            var rightTree = rightTrees.shift();
            while (rightTree) {
                shrinkRightTree(rightTree, shrinkInfo);
                rightTree = rightTrees.shift();
            }
        }

        function shrinkRightTree(rightTree, shrinkInfo) {
            var rightShrinkInfo = shrink(rightTree);
            var distance = getRightDistance(shrinkInfo, rightShrinkInfo);
            var xOffset = distance - minDistance;

            if (xOffset > 0) {
                rightTree.horizontalMove(-xOffset);
                moveShrinkInfo(rightShrinkInfo, -xOffset);
            }
            mergeRightShrinkInfo(shrinkInfo, rightShrinkInfo);
        }

        function mergeRightShrinkInfo(shrinkInfo, rightShrinkInfo) {
            var levels = _common2.default.keys(rightShrinkInfo.right);
            var right = shrinkInfo.right;
            var rightRight = rightShrinkInfo.right;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = null;

            var _iterator3 = levels[Symbol.iterator]();
            try {
                for (var _step3;
                    !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done);
                    _iteratorNormalCompletion3 = true) {
                    var level = _step3.value;

                    right[level] = rightRight[level];
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }

        function getRightDistance(shrinkInfo, rightShrinkInfo) {
            var distance = Infinity;
            var levels = _common2.default.keys(rightShrinkInfo.right);
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = null;

            var _iterator4 = levels[Symbol.iterator]();
            try {
                for (var _step4;
                    !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done);
                    _iteratorNormalCompletion4 = true) {
                    var level = _step4.value;

                    var currentDistance = rightShrinkInfo.left[level] - shrinkInfo.right[level];
                    if (currentDistance < distance) {
                        distance = currentDistance;
                    }
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            return distance;
        }

        function moveShrinkInfo(shrinkInfo, xOffset) {
            var levels = _common2.default.keys(shrinkInfo.left);
            var left = shrinkInfo.left;
            var right = shrinkInfo.right;

            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = null;

            var _iterator5 = levels[Symbol.iterator]();
            try {
                for (var _step5;
                    !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done);
                    _iteratorNormalCompletion5 = true) {
                    var level = _step5.value;

                    left[level] += xOffset;
                    right[level] += xOffset;
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }
        }

        function updateShrinkInfo(currentTree, shrinkInfo) {
            shrinkInfo.currentTree = currentTree;
            var level = currentTree.level;

            shrinkInfo.left[level] = shrinkInfo.right[level] = currentTree.offset.x;
        }

        function getSortedSubtrees(tree) {
            return [].concat(_toConsumableArray(tree.subTrees.values())).sort(function (a, b) {
                return a.offset.x - b.offset.x;
            });
        }

        function findDeepNode(tree) {
            var maxLevel = tree.level + tree.maxLevel - 1;
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = null;

            var _iterator6 = tree.allSubTrees.values()[Symbol.iterator]();
            try {
                for (var _step6;
                    !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done);
                    _iteratorNormalCompletion6 = true) {
                    var subTree = _step6.value;

                    if (subTree.level === maxLevel) {
                        return subTree;
                    }
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            return tree;
        }

        function getMinDistance() {
            return _defaultOptions2.default.width + _defaultOptions2.default.nodeDistance;
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.treeNode, global.geometryLayout, global.findRoot, global.buildTree, global.splitBigLevel, global.setRelativePosition, global.reduceCross, global.correctVirtualRootOffset, global.middleLeafNodes, global.shrink);
        global.treeLayout = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _treeNode, _geometryLayout, _findRoot, _buildTree, _splitBigLevel, _setRelativePosition, _reduceCross, _correctVirtualRootOffset, _middleLeafNodes, _shrink) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _treeNode2 = _interopRequireDefault(_treeNode);

        var _geometryLayout2 = _interopRequireDefault(_geometryLayout);

        var _findRoot2 = _interopRequireDefault(_findRoot);

        var _buildTree2 = _interopRequireDefault(_buildTree);

        var _splitBigLevel2 = _interopRequireDefault(_splitBigLevel);

        var _setRelativePosition2 = _interopRequireDefault(_setRelativePosition);

        var _reduceCross2 = _interopRequireDefault(_reduceCross);

        var _correctVirtualRootOffset2 = _interopRequireDefault(_correctVirtualRootOffset);

        var _middleLeafNodes2 = _interopRequireDefault(_middleLeafNodes);

        var _shrink2 = _interopRequireDefault(_shrink);

        // _interopRequireDefault

        // _classCallCheck
        // _createClass
        // _possibleConstructorReturn
        // _inherits
        var TreeLayout = (function (_GeometryLayout) {
            _inherits(TreeLayout, _GeometryLayout);

            function TreeLayout(props) {
                _classCallCheck(this, TreeLayout);

                var _this = _possibleConstructorReturn(this, (TreeLayout.__proto__ || Object.getPrototypeOf(TreeLayout)).call(this, props));

                _this.layoutName = 'TreeLayout';
                _this.nodeType = _treeNode2.default;
                return _this;
            }

            _createClass(TreeLayout, [{
                key: 'layout',
                value: function(island) {
                    var tree = TreeLayout.doTreeLayout(island);
                    var direction = tree.options.direction;
                    island.rotateDirection(direction);

                    return this.generateResult(island.nodes);
                }
            }, {
                key: 'getLayoutName',
                value: function() {
                    return this.layoutName;
                }
            }, {
                key: 'getNodeType',
                value: function() {
                    return this.nodeType;
                }
            }], [{
                key: 'doTreeLayout',
                value: function(island) {
                    var root = (0, _findRoot2.default)(island);
                    var tree = (0, _buildTree2.default)(root);

                    (0, _splitBigLevel2.default)(tree);

                    _setRelativePosition2.default.bySubTreesCounter(tree);

                    (0, _reduceCross2.default)(tree);

                    (0, _shrink2.default)(tree);

                    (0, _correctVirtualRootOffset2.default)(tree);

                    (0, _middleLeafNodes2.default)(tree);

                    return tree;
                }
            }]);

            return TreeLayout;
        })(_geometryLayout2.default);

        exports.default = TreeLayout;
    });
})(NetBrain);
(function(netBrain) {
    var qmap = netBrain.ns('Map');

    var defaultDistance = 140;
    var defaultMaxEjectDistance = 600;

    var customConfig = [
        ['DEVICE', 'DEVICE', {dis: 210}],
        ['DEVICE', 'SITE', {dis: 250, maxEjectDis: 1000}],
        ['DEVICE', 'DMVPN', {dis: 210}],
        ['DEVICE', 'WAN', {dis: 210}],
        ['DEVICE', 'MPLS', {dis: 250, maxEjectDis: 1000}],
        ['SITE', 'MPLS', {dis: 300, maxEjectDis: 1500}],
        ['SITE', 'SITE', {dis: 300, maxEjectDis: 1500}]
    ];

    function buildDict(customConfig) {
        var dict = {};
        for (var i = 0, len = customConfig.length; i < len; i++) {
            var config = customConfig[i];
            //var key = config.slice(0, 2).sort().join('-');
            var key = config[0] + '-' + config[1];
            var value = config[2];

            dict[key] = value;

            key = config[0] + '-' + config[1];
            dict[key] = value;
        }

        return dict;
    }

    var disDict = buildDict(customConfig);

    function getDeviceType(node) {
        var type = '';

        if(netBrain.Map.CategoryMgr.isDeviceCategory(node.category)) {
            let devType = node.devType;
            if(devType === 1024) {
                type = 'MPLS';
            } else {
                type = 'DEVICE';
            }
        } else if(netBrain.Map.CategoryMgr.isMedia(node.category)) {
            let devType = node.devType;
            if(devType) {
                type = devType.toUpperCase();
            } else {
                type = 'MEDIA';
            }
        } else if(netBrain.Map.CategoryMgr.isSite(node.category)) {
            type = 'SITE';
        } else {
            type = 'DEVICE';
        }

        return type;
    }

    function getDis(node1, node2) {
        var type1 = getDeviceType(node1);
        var type2 = getDeviceType(node2);
        var key = type1 + '-' + type2;

        var obj = disDict[key];
        return obj && obj.dis || defaultDistance;
    }

    function getMaxEjectDis(node1, node2) {
        var type1 = getDeviceType(node1);
        var type2 = getDeviceType(node2);
        var key = type1 + '-' + type2;

        var obj = disDict[key];
        return obj && obj.maxEjectDis || defaultMaxEjectDistance;
    }

    var symmetricLayoutHelper = {
        getExpectDis: getDis,
        getMaxEjectDistance: getMaxEjectDis
    };

    qmap.symmetricLayoutHelper = symmetricLayoutHelper;


})(NetBrain);(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.symmetricLayoutConfig = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        var config = {
            symmetricTries: 300,
            epsilon: 0.000001,
            T: 20,

            expectDistance: 200,
            maxEjectDistance: 600
        };

        exports.default = config;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.geometryLayout, global.position, global.symmetricLayoutConfig);
        global.symmetricLayout = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _geometryLayout, _position, _symmetricLayoutConfig) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _geometryLayout2 = _interopRequireDefault(_geometryLayout);

        var _position2 = _interopRequireDefault(_position);

        var _symmetricLayoutConfig2 = _interopRequireDefault(_symmetricLayoutConfig);

        // _interopRequireDefault

        // _classCallCheck
        // _createClass
        // _possibleConstructorReturn
        // _inherits
        var SymmetricLayout = (function (_GeometryLayout) {
            _inherits(SymmetricLayout, _GeometryLayout);

            function SymmetricLayout(props) {
                _classCallCheck(this, SymmetricLayout);

                var _this = _possibleConstructorReturn(this, (SymmetricLayout.__proto__ || Object.getPrototypeOf(SymmetricLayout)).call(this, props));

                _this.offsetXObject = {};
                _this.offsetYObject = {};

                _this.lastOffsetObj = {};
                _this.last2OffsetObj = {};

                _this.layoutName = 'SymmetricLayout';
                return _this;
            }

            /**
         * 平衡布局入口
         *
         * @param {Map} nodes 需要参与layout的节点
         * @param {Set} links 需要参与layout的链接
         * @param {Object} options 自定义配置函数
         * @returns {Array} layout后的设备坐标信息数组
         * @memberof SymmetricLayout
         */


            _createClass(SymmetricLayout, [{
                key: 'layout',
                value: function(nodes, links, options) {
                    this.layoutWithOutResult(nodes, links, options);

                    var result = this.generateResult(nodes);
                    return result;
                }
            }, {
                key: 'layoutWithOutResult',
                value: function(nodes, links, options) {
                    options = this.options = Object.assign(SymmetricLayout.getDefaultConfig(), options);

                    this.lastOffsetObj = {};
                    this.last2OffsetObj = {};

                    var tries = getSymmetricTries(options);

                    initLoc(nodes);

                    var nodeArray = Array.from(nodes);

                    // 布局到平衡状态, 不安全~~, 应该加次数退出
                    var i = 0;
                    while (i < tries && !this.symmetric(nodes, links, options, nodeArray)) {
                        i++;
                    }
                }
            }, {
                key: 'symmetric',
                value: function(nodes, links, options, nodeArray) {
                    this.offsetXObject = {};
                    this.offsetYObject = {};

                    this.calcEjectBetweenNodes(nodeArray);
                    this.calcCondenseWithLinks(links);
                    var flag = this.offsetNodes(nodes);
                    return flag;
                }
            }, {
                key: 'calcEjectBetweenNodes',
                value: function(nodes) {
                    var options = this.options;
                    var epsilon = options.epsilon;

                    var offsetXObject = this.offsetXObject;
                    var offsetYObject = this.offsetYObject;

                    nodes.forEach(function (arr) {
                        var key = arr[0];
                        offsetXObject[key] = 0;
                        offsetYObject[key] = 0;
                    });

                    // 节点之间的斥力（正值）
                    // nodes.forEach(function(node1, key1) {
                    for (var i = 0, iLen = nodes.length; i < iLen; i++) {
                        var node1 = nodes[i][1];
                        var key1 = nodes[i][0];
                        var point1 = node1.offset;
                        var node1Locked = !node1.canMove();

                        // nodes.forEach(function(node2, key2) {
                        for (var j = i + 1, jLen = nodes.length; j < jLen; j++) {
                            var node2 = nodes[j][1];
                            var key2 = nodes[j][0];
                            var node2Locked = !node2.canMove();

                            if (node1Locked && node2Locked || key1 === key2) continue;

                            var point2 = node2.offset;

                            var diffX = point1.x - point2.x;
                            var diffY = point1.y - point2.y;

                            var dis = Math.max(epsilon, Math.sqrt(diffX * diffX + diffY * diffY));

                            var maxEjectDistance = getMaxEjectDistance(node1, node2, options);
                            if (dis > 0 && dis < maxEjectDistance) {
                                var k = getK(node1, node2, options);

                                var force = k * k / dis;

                                var offsetX = diffX / dis * force;
                                var offsetY = diffY / dis * force;

                                if (!node1Locked) {
                                    offsetXObject[key1] += offsetX;
                                    offsetYObject[key1] += offsetY;
                                } else {
                                    offsetXObject[key2] -= offsetX;
                                    offsetYObject[key2] -= offsetY;
                                }

                                if (!node2Locked) {
                                    offsetXObject[key2] -= offsetX;
                                    offsetYObject[key2] -= offsetY;
                                } else {
                                    offsetXObject[key1] += offsetX;
                                    offsetYObject[key1] += offsetY;
                                }
                            }
                        }
                    }
                }
            }, {
                key: 'calcCondenseWithLinks',
                value: function(links) {
                    var options = this.options;
                    var epsilon = options.epsilon;
                    var offsetXObject = this.offsetXObject;
                    var offsetYObject = this.offsetYObject;

                    var map = new Map();

                    // 连接线之间的引力（负数）
                    links.forEach(function (link) {
                        var fromId = link.from;
                        var toId = link.to;

                        var key = [fromId, toId].sort().join('<->');
                        if (map.get(key)) {
                            return;
                        }

                        map.set(key, true);

                        var fromNode = link.fromNode;
                        var toNode = link.toNode;

                        if (!fromNode || !toNode) return;

                        var fromPoint = fromNode.offset;
                        var toPoint = toNode.offset;
                        var diffX = fromPoint.x - toPoint.x;
                        var diffY = fromPoint.y - toPoint.y;

                        var dis = Math.max(epsilon, Math.sqrt(diffX * diffX + diffY * diffY));

                        var k = getK(fromNode, toNode, options);
                        var force = dis * dis / k;

                        var offsetX = diffX / dis * force;
                        var offsetY = diffY / dis * force;

                        var fromNodeIsLocked = !fromNode.canMove();
                        var toNodeIsLocked = !toNode.canMove();

                        if (!fromNodeIsLocked) {
                            offsetXObject[fromId] -= offsetX;
                            offsetYObject[fromId] -= offsetY;
                        } else if (!toNodeIsLocked) {
                            offsetXObject[toId] += offsetX;
                            offsetYObject[toId] += offsetY;
                        }

                        if (!toNodeIsLocked) {
                            offsetXObject[toId] += offsetX;
                            offsetYObject[toId] += offsetY;
                        } else if (!fromNodeIsLocked) {
                            offsetXObject[fromId] -= offsetX;
                            offsetYObject[fromId] -= offsetY;
                        }
                    });
                }
            }, {
                key: 'offsetNodes',
                value: function(nodes) {
                    var options = this.options;
                    var epsilon = options.epsilon;
                    var T = options.T;
                    var offsetXObject = this.offsetXObject;
                    var offsetYObject = this.offsetYObject;

                    var offsetMaxX = T;
                    var offsetMaxY = T;
                    var offsetMinX = -T;
                    var offsetMinY = -T;

                    var limitOffset = options.limitOffset;

                    nodes.forEach(function (node, key) {
                        if (!node.canMove()) return;
                        var offsetX = offsetXObject[key];
                        var offsetY = offsetYObject[key];

                        var dis = Math.max(epsilon, Math.sqrt(offsetX * offsetX + offsetY * offsetY));

                        offsetMaxX = Math.max(offsetX, offsetMaxX);
                        offsetMaxY = Math.max(offsetY, offsetMaxY);
                        offsetMinX = Math.min(offsetX, offsetMinX);
                        offsetMinY = Math.min(offsetY, offsetMinY);

                        var temp = T;

                        var xDisp = offsetX / dis * Math.min(dis, temp);
                        var yDisp = offsetY / dis * Math.min(dis, temp);

                        if (isNaN(xDisp)) {
                        // comment for sonaqube: --console.log(dis, xDisp, temp, offsetX)
                            throw new Error();
                        }

                        var newOffset = new _position2.default(xDisp, yDisp);
                        if (_.isFunction(limitOffset)) {
                            newOffset = limitOffset(key, newOffset);
                        }

                        node.offset.offset(newOffset);
                    });

                    return false; // 效果不太理想，暂时忽略
                // comment for sonaqube:  let isOk = this.isGoodOffset(offsetMaxX, offsetMaxY, offsetMinX, offsetMinY);
                // comment for sonaqube:  return isOk;
                }
            }], [{
                key: 'getDefaultConfig',
                value: function() {
                    var config = Object.assign({}, _symmetricLayoutConfig2.default);
                    return config;
                }
            }]);

            return SymmetricLayout;
        })(_geometryLayout2.default);

        function getSymmetricTries(options) {
        // 这里应该根据该岛node个数，该岛最远两个node之间距离求出尝试次数，
        // 并且应该根据平衡布局两次的效果判断是否已达到期望效果
        // 暂时先固定次数，在优化平衡布局时修改，应该挪到symmetric layout里面
            return options.symmetricTries || 100;
        }

        function getK(node1, node2, options) {
        // 这里应该先判断是否有用户传入的函数，没有则走默认的，有函数则调用函数
            var result = options.expectDistance; // options指定？

            if (_.isFunction(result)) {
                result = result(node1.originalNode, node2.originalNode);
            }

            return result;
        }

        function getMaxEjectDistance(node1, node2, options) {
        // 这里应该先判断是否有用户传入的函数，没有则走默认的，有函数则调用函数
            var result = options.maxEjectDistance; // options指定？
            if (_.isFunction(result)) {
                result = result(node1.originalNode, node2.originalNode);
            }

            return result;
        }

        function randomIfHaveSameLocation(node, locationsDic) {
            var offset = node.offset;
            if (!_.isNumber(offset.x) || !_.isNumber(offset.y)) {
                throw new Error('offset x and y must be Number.');
            }

            while (locationsDic.x[offset.x]) {
                offset.offset(new _position2.default(Math.random(), 0));
            }
            locationsDic.x[offset.x] = true;

            while (locationsDic.y[offset.y]) {
                offset.offset(new _position2.default(0, Math.random()));
            }
            locationsDic.y[offset.y] = true;
        }

        /**
     * 初始化数据坐标（微调），为了避免坐标重复（x、y）
     *
     * @param {Map} nodes 需要参与layout的节点
     * @returns {undefined}
     */
        function initLoc(nodes) {
            var nodeArr = Array.from(nodes.values());
            var parts = _.partition(nodeArr, function (node) {
                return !node.canMove();
            });

            var locationsDic = {
                x: {},
                y: {}
            };
            _.each(parts[0], function (node) {
                var offset = node.offset;
                locationsDic.x[offset.x] = true;
                locationsDic.y[offset.y] = true;
            });
            _.each(parts[1], function (node) {
                return randomIfHaveSameLocation(node, locationsDic);
            });
        }

        exports.default = SymmetricLayout;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.symmetricLayout);
        global.symmetricLayoutForIsland = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _symmetricLayout) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _symmetricLayout2 = _interopRequireDefault(_symmetricLayout);

        // _interopRequireDefault

        // _classCallCheck
        // _createClass
        // _possibleConstructorReturn
        // _get

        // _inherits
        var SymmetricLayoutForIsland = (function (_SymmetricLayout) {
            _inherits(SymmetricLayoutForIsland, _SymmetricLayout);

            function SymmetricLayoutForIsland(props) {
                _classCallCheck(this, SymmetricLayoutForIsland);

                var _this = _possibleConstructorReturn(this, (SymmetricLayoutForIsland.__proto__ || Object.getPrototypeOf(SymmetricLayoutForIsland)).call(this, props));

                _this.layoutName = 'SymmetricLayoutForIsland';
                return _this;
            }

            _createClass(SymmetricLayoutForIsland, [{
                key: 'layout',
                value: function(island) {
                    return _get(SymmetricLayoutForIsland.prototype.__proto__ || Object.getPrototypeOf(SymmetricLayoutForIsland.prototype), 'layout', this).call(this, island.nodes, island.links, island.options);
                }
            }, {
                key: 'getLayoutName',
                value: function() {
                    return this.layoutName;
                }
            }]);

            return SymmetricLayoutForIsland;
        })(_symmetricLayout2.default);

        exports.default = SymmetricLayoutForIsland;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.layeredTool = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        var layeredTool = {};

        var TemplateStyleScaleMap = netBrain.LayoutTools.Const.TemplateStyleScaleMap;

        /**
     * 规则
     * 1、每一个style中layer使用的tag不会重
     * 2、判断一个node的tag中的第一个是否属于其中某个layer，如果都不属于，则依次往后取
     *      注：在9月5号要求修改为从后向前匹配
     * 3、如果一个node中的所有tag都未匹配上layer则属于unassign
     * @param {Array} nodes node列表
     * @param {Object} styleInfo templateStyle
     * @returns {Object} result
     */
        layeredTool.layered = function (nodes, styleInfo) {
            var result = {
                name: styleInfo.name,
                id: styleInfo.id,
                orientation: styleInfo.orientation

            };

            var tagInfo = buildTagInfo(styleInfo.layers);

            var layerArr = [];
            _.each(styleInfo.layers, function (tmpLayer) {
                var obj = {
                    tags: [],
                    maxNodeCount: tmpLayer.maximumDeviceCount,
                    scale: convertScale(tmpLayer.scale)
                };

                _.each(tmpLayer.associateTags, function (tag) {
                    obj.tags.push({
                        name: tag,
                        devices: []
                    });
                });

                layerArr.push(obj);
            });

            var unAssignedDevices = [];
            var assignLength = 0;
            nodes.forEach(function (node) {
                if (!_.isArray(node.tags) || node.tags.length === 0) {
                    unAssignedDevices.push(node);
                    return;
                }

                var layerInfo = getLayerInfo(tagInfo, node);
                var layerIndex = layerInfo.index;
                if (layerIndex != -1) {
                    var layer = layerArr[layerIndex];
                    if (!layer) return;

                    addNodeToLayer(node, layer, layerInfo.tag);
                    assignLength++;
                } else {
                    unAssignedDevices.push(node);
                }
            });

            result.layers = layerArr;
            result.unAssignedDevices = unAssignedDevices;
            result.matchedCount = assignLength;
            result.unAssignedCount = unAssignedDevices.length;

            return result;
        };

        function convertScale(scaleType) {
            return TemplateStyleScaleMap[scaleType] || 1.0;
        }

        function addNodeToLayer(node, layer, tag) {
            var currTagInfo = _.find(layer.tags, function (obj) {
                return obj.name.toUpperCase() === tag.toUpperCase();
            });

            if (!currTagInfo) {
                currTagInfo = {
                    name: tag,
                    devices: []
                };

                layer.tags.push(currTagInfo);
            }
            currTagInfo.devices.push(node);
        }

        function getLayerInfo(tagInfo, node) {
            var result = {
                index: -1,
                tag: null
            };
            var tags = node.tags;

            for (var i = tags.length - 1; i >= 0; i--) {
                var tag = tags[i];
                var tmpIndex = tagInfo[tag.toUpperCase()];

                if (_.isNumber(tmpIndex)) {
                    result = {
                        index: tmpIndex,
                        tag: tag
                    };
                    break;
                }
            }

            return result;
        }

        function buildTagInfo(layers) {
            var tagInfo = {};
            _.each(layers, function (layer, i) {
                var associateTags = layer.associateTags;
                var layerIndex = i;
                _.each(associateTags, function (tag) {
                    tagInfo[tag.toUpperCase()] = layerIndex;
                });
            });

            return tagInfo;
        }

        exports.default = layeredTool;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.node);
        global.layerNode = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _node) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _node2 = _interopRequireDefault(_node);

        // _interopRequireDefault

        // _classCallCheck
        // _possibleConstructorReturn
        // _inherits
        var LayerNode = (function (_Node) {
            _inherits(LayerNode, _Node);

            function LayerNode(originalNode, locked) {
                _classCallCheck(this, LayerNode);

                var _this = _possibleConstructorReturn(this, (LayerNode.__proto__ || Object.getPrototypeOf(LayerNode)).call(this, originalNode, locked));

                _this.tags = originalNode.tags;
                return _this;
            }

            return LayerNode;
        })(_node2.default);

        exports.default = LayerNode;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.layer = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        // _classCallCheck
        // _createClass
        var Layer = (function () {
            function Layer(layerInfo) {
                _classCallCheck(this, Layer);

                this.level = layerInfo.level;
                this.maxNodeCount = layerInfo.maxNodeCount || 1000;
                this.scale = layerInfo.scale;

                this.tags = new Set();
                this.nodes = new Map();
                this.fixedNodes = new Map();
            }

            _createClass(Layer, [{
                key: 'add',
                value: function(node) {
                    this.nodes.set(node.id, node);

                    if (node.fixed) {
                        this.fixedNodes.set(node.id, node);
                    }
                }
            }, {
                key: 'addTag',
                value: function(tag) {
                    this.tags.add(tag);
                }
            }, {
                key: 'getNodeById',
                value: function(id) {
                    return this.nodes.get(id);
                }
            }, {
                key: 'actualSize',
                get: function() {
                    return Math.min(this.maxNodeCount || Infinity, // ensure have maxNodeCount
                        this.nodes.size);
                }
            }]);

            return Layer;
        })();

        exports.default = Layer;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.layerGroup = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        // _toConsumableArray

        // _classCallCheck
        // _createClass
        var LayerGroup = (function () {
            function LayerGroup(groupInfo) {
                _classCallCheck(this, LayerGroup);

                this.id = groupInfo.id;
                this.name = groupInfo.name;
                this.orientation = groupInfo.orientation;

                this.layers = new Set();
                this.links = new Set();
                this.assignNodes = new Map();
                this.unassignNodes = new Map();
                this.allNodes = new Map();
            }

            _createClass(LayerGroup, [{
                key: 'add',
                value: function(layer) {
                    var _this = this;

                    this.layers.add(layer);

                    layer.nodes.forEach(function (node) {
                        _this.addAssignNode(node);
                    });
                }
            }, {
                key: 'addLink',
                value: function(link) {
                    this.links.add(link);

                    var fromNode = this.allNodes.get(link.from);
                    var toNode = this.allNodes.get(link.to);

                    if (fromNode) {
                        link.fromNode = fromNode;
                        fromNode.addFromLink(link);
                        fromNode.addToNeighbor(toNode);
                    }

                    if (toNode) {
                        link.toNode = toNode;
                        toNode.addToLink(link);
                        toNode.addToNeighbor(fromNode);
                    }
                }
            }, {
                key: 'addAssignNode',
                value: function(node) {
                    this.assignNodes.set(node.id, node);
                    this.allNodes.set(node.id, node);
                }
            }, {
                key: 'addUnassignNode',
                value: function(node) {
                    this.unassignNodes.set(node.id, node);
                    this.allNodes.set(node.id, node);
                }
            }, {
                key: 'getAllNodes',
                value: function() {
                    return [].concat(_toConsumableArray(this.allNodes.values()));
                }
            }, {
                key: 'getFixedNodes',
                value: function() {
                    return this.getAllNodes().filter(function (node) {
                        return node.fixed;
                    });
                }
            }]);

            return LayerGroup;
        })();

        exports.default = LayerGroup;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.baseLayout, global.layerGroup, global.layer, global.layerNode, global.link, global.position, global.boundsTool, global.lockTool, global.symmetricLayout);
        global.templateStyleLayout = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _baseLayout, _layerGroup, _layer, _layerNode, _link, _position, _boundsTool, _lockTool, _symmetricLayout) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _baseLayout2 = _interopRequireDefault(_baseLayout);

        var _layerGroup2 = _interopRequireDefault(_layerGroup);

        var _layer2 = _interopRequireDefault(_layer);

        var _layerNode2 = _interopRequireDefault(_layerNode);

        var _link2 = _interopRequireDefault(_link);

        var _position2 = _interopRequireDefault(_position);

        var _boundsTool2 = _interopRequireDefault(_boundsTool);

        var _lockTool2 = _interopRequireDefault(_lockTool);

        var _symmetricLayout2 = _interopRequireDefault(_symmetricLayout);

        // _interopRequireDefault

        function _toConsumableArray(arr) {
            if (Array.isArray(arr)) {
                for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

                return arr2;
            }
            return Array.from(arr);
        }

        // _classCallCheck
        // _createClass
        // _possibleConstructorReturn
        // _inherits
        var TemplateStyleLayout = (function (_BaseLayout) {
            _inherits(TemplateStyleLayout, _BaseLayout);

            function TemplateStyleLayout(props) {
                _classCallCheck(this, TemplateStyleLayout);

                var _this = _possibleConstructorReturn(this, (TemplateStyleLayout.__proto__ || Object.getPrototypeOf(TemplateStyleLayout)).call(this, props));

                _this.layerGroup = null;

                _this.layoutName = 'TemplateStyleLayout';
                _this.nodeType = _layerNode2.default;
                return _this;
            }

            /**
         * 转换函数，将传来的数据转为布局对应的模型
         *
         * @param {Object} layerGroupInfo 分层数据信息
         * @param {Array} linkInfos links数据
         * @returns {LayerGroup} layerGroup实例
         * @memberof TemplateStyleLayout
         */


            _createClass(TemplateStyleLayout, [{
                key: 'convert',
                value: function(layerGroupInfo, linkInfos) {
                    var _this2 = this;

                    linkInfos = linkInfos || [];

                    var layerGroup = this.convertLayerGroup(layerGroupInfo);

                    // assign
                    _.each(layerGroupInfo.layers, function (layerInfo, i) {
                        layerInfo.level = i;
                        var layer = _this2.convertLayer(layerInfo);

                        // 每个layer的node权重是一样的
                        _.each(layerInfo.tags, function (tagInfo) {
                            layer.addTag(tagInfo.name);

                            _.each(tagInfo.devices, function (deviceInfo) {
                                var node = _this2.converLayerNode(deviceInfo);
                                layer.add(node);
                            });
                        });

                        layerGroup.add(layer);
                    });

                    // unassign
                    _.each(layerGroupInfo.unAssignedDevices, function (deviceInfo) {
                        var node = _this2.converLayerNode(deviceInfo);

                        layerGroup.addUnassignNode(node);
                    });

                    // links
                    linkInfos.forEach(function (linkInfo) {
                        var link = _this2.convertLink(linkInfo);

                        layerGroup.addLink(link);
                    });

                    this.layerGroup = layerGroup;

                    return layerGroup;
                }
            }, {
                key: 'convertLayerGroup',
                value: function(groupInfo) {
                    var group = new _layerGroup2.default({
                        id: groupInfo.id,
                        name: groupInfo.name,
                        orientation: groupInfo.orientation
                    });

                    return group;
                }
            }, {
                key: 'convertLayer',
                value: function(layerInfo) {
                    var layer = new _layer2.default({
                        level: layerInfo.level,
                        maxNodeCount: layerInfo.maxNodeCount,
                        scale: layerInfo.scale
                    });

                    return layer;
                }
            }, {
                key: 'converLayerNode',
                value: function(nodeInfo) {
                    var node = new _layerNode2.default(nodeInfo, nodeInfo.locked);

                    return node;
                }
            }, {
                key: 'convertLink',
                value: function(linkInfo) {
                    var link = new _link2.default(linkInfo);

                    return link;
                }
            }, {
                key: 'getBestStartPos',
                value: function() {
                    return new _position2.default();

                /* let layerGroup = this.layerGroup;
                 let pos = new Position();
                 // 用于判断是否计算完毕
                let calculated = calcPosFromLayers([...layerGroup.layers], pos);

                if (!calculated) {
                    calcPosFromUnassignNodes(layerGroup.unassignNodes, pos);
                }

                return pos; */
                }
            }, {
                key: 'layoutUnassignNodes',
                value: function() {
                    var layerGroup = this.layerGroup;

                    // 先看效果 是否需要将 unassign 坐标改为 layers 周围
                    layerGroup.unassignNodes.forEach(function (node) {
                        node.offset = new _position2.default(Math.random() * 200, Math.random() * 200);
                    });

                    var assignNodes = layerGroup.assignNodes;
                    _lockTool2.default.lockNodes(assignNodes);

                    var nodes = new Map();
                    assignNodes.forEach(function (node) {
                        nodes.set(node.id, node);
                    });

                    layerGroup.unassignNodes.forEach(function (node) {
                        nodes.set(node.id, node);
                    });

                    var symmetricLayout = new _symmetricLayout2.default();
                    symmetricLayout.layoutWithOutResult(nodes, layerGroup.links);
                }
            }, {
                key: 'generateResult',
                value: function() {
                    var layerGroup = this.layerGroup;

                    var result = [];
                    layerGroup.assignNodes.forEach(function (node) {
                        result.push(node.toLocJson());
                    });

                    layerGroup.unassignNodes.forEach(function (node) {
                        result.push(node.toLocJson());
                    });

                    return result;
                }
            }]);

            return TemplateStyleLayout;
        })(_baseLayout2.default);

        function calcPosFromLayers(layers, pos) {
            var calculated = false;

            _.find(layers, function (layer) {
                var fixedNodes = layer.fixedNodes;
                if (fixedNodes.count > 0) {
                    var bounds = _boundsTool2.default.calcBounds(fixedNodes);

                    pos.moveTo(bounds.left, bounds.top);
                    calculated = true;
                }

                return calculated;
            });

            return calculated;
        }

        function calcPosFromUnassignNodes(nodes, pos) {
            var calculated = false;
            var nodeArr = [].concat(_toConsumableArray(nodes));

            var fixedNodes = new Map();
            _.each(nodeArr, function (node) {
                fixedNodes.set(node.id, node);
            });

            if (fixedNodes.count > 0) {
                var bounds = _boundsTool2.default.calcBounds(fixedNodes);

                pos.moveTo(bounds.left, bounds.top);
            }

            return calculated;
        }

        exports.default = TemplateStyleLayout;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.parallelStyleLayoutConfig = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        var config = {
            layerSpace: 200,
            nodeHSpace: 200,
            nodeVSpace: 100,

            layerMaxLine: 1000,
            align: 'left' // center
        };

        exports.default = config;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.position);
        global.parallelSortNodes = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _position) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.default = reduceCross;

        var _position2 = _interopRequireDefault(_position);

        // _interopRequireDefault

        var pi = Math.PI;
        var pi2 = 2 * pi;

        function reduceCross(goalLocations, goodLocations, layerGroup) {
            layerGroup.layers.forEach(function (layer) {
                reduceCrossLayer(goalLocations, goodLocations, layer.nodes);
            });
        }

        function reduceCrossLayer(goalLocations, goodLocations, assignNodes) {
            goalLocations = _.filter(goalLocations, function (item) {
                return assignNodes.has(item.key);
            });
            goodLocations = _.filter(goodLocations, function (item) {
                return assignNodes.has(item.key);
            });

            prepareBaseInfo(goalLocations);
            prepareBaseInfo(goodLocations);

            var matchResult = mapping(goalLocations, goodLocations);

            matchResult.forEach(function (item) {
                var node = assignNodes.get(item.key);
                node.offset = item.position;
            });
        }

        function mapping(goalLocations, goodLocations) {
            var join = [];

            goalLocations.forEach(function (goal) {
                goodLocations.forEach(function (good) {
                    join.push({
                        goal: goal.key,
                        good: good.key,
                        diff: getDiff(goal.rate, good.rate),
                        position: goal.position
                    });
                });
            });

            join = _.sortBy(join, 'diff');
            // join.reverse();

            var result = [];

            var _loop = function() {
                var current = join.shift();
                result.push({
                    key: current.good,
                    location: current.position.convertToLocation(),
                    position: current.position
                });

                join = _.filter(join, function (item) {
                    return item.goal !== current.goal && item.good !== current.good;
                });
            };

            while (join.length > 0) {
                _loop();
            }

            return result;
        }

        function getDiff(rate1, rate2) {
            var diff = Math.abs(rate1 - rate2);
            return diff < pi ? diff : pi2 - diff;
        }

        function prepareBaseInfo(locations) {
            var center = getCenter(locations);
            // let distanceSum = 0;

            locations.forEach(function (node) {
                var vector = node.position.getOffsetFrom(center);
                node.vector = vector;

                node.rate = Math.atan2(vector.y, vector.x);
            // node.distance = node.vector.distance();
            //
            // distanceSum += node.distance;
            });

            locations.center = center;
        // locations.averageDistance = distanceSum / locations.length;
        }

        function getCenter(locations) {
            var counter = locations.length;

            var xSum = 0;
            var ySum = 0;

            locations.forEach(function (node) {
                var position = node.position;
                xSum += position.x;
                ySum += position.y;
            });

            return new _position2.default(xSum / counter, ySum / counter);
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.templateStyleLayout, global.symmetricLayout, global.parallelStyleLayoutConfig, global.position, global.point, global.boundsTool, global.parallelSortNodes);
        global.parallelStyleLayout = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _templateStyleLayout, _symmetricLayout, _parallelStyleLayoutConfig, _position, _point, _boundsTool, _parallelSortNodes) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _templateStyleLayout2 = _interopRequireDefault(_templateStyleLayout);

        var _symmetricLayout2 = _interopRequireDefault(_symmetricLayout);

        var _parallelStyleLayoutConfig2 = _interopRequireDefault(_parallelStyleLayoutConfig);

        var _position2 = _interopRequireDefault(_position);

        var _point2 = _interopRequireDefault(_point);

        var _boundsTool2 = _interopRequireDefault(_boundsTool);

        var _parallelSortNodes2 = _interopRequireDefault(_parallelSortNodes);

        var internalGlobal = netBrain.ns('LayoutTools.internalGlobal');
        var moveSomeNodesNearOtherNodesTool = internalGlobal.moveSomeNodesNearOtherNodesTool.default;

        // _interopRequireDefault

        // _toConsumableArray

        // _classCallCheck
        // _createClass
        // _possibleConstructorReturn
        // _inherits
        var ParallelStyleLayout = (function (_TemplateStyleLayout) {
            _inherits(ParallelStyleLayout, _TemplateStyleLayout);

            function ParallelStyleLayout(props) {
                _classCallCheck(this, ParallelStyleLayout);

                var _this = _possibleConstructorReturn(this, (ParallelStyleLayout.__proto__ || Object.getPrototypeOf(ParallelStyleLayout)).call(this, props));

                _this.layoutName = 'ParallelStyleLayout';
                return _this;
            }

            /**
         * layout入口
         *
         * @param {Object} layerGroupInfo 分层数据信息
         * @param {Array} linkInfos links数据
         * @param {Object} customOptions 用户自定义信息
         * @returns {Array} [{key, location}]
         * @memberof ParallelStyleLayout
         */


            _createClass(ParallelStyleLayout, [{
                key: 'layout',
                value: function(layerGroupInfo, linkInfos, customOptions) {
                    this.options = Object.assign(ParallelStyleLayout.getDefaultConfig(), customOptions);

                    this.convert(layerGroupInfo, linkInfos);

                    // console.log('******* parallel start *******');
                    // console.log(this.layerGroup);
                    /* this.layerGroup.layers.forEach((layer) => {
                    let hostNames = [];
                    layer.nodes.forEach((node) => {
                        hostNames.push(node.originalNode.hostName);
                    });
                     console.log(layer.level, Array.from(layer.tags), hostNames);
                }); */
                    // console.log('******* parallel end *******');

                    var startPos = this.getBestStartPos();

                    // 摆放layers
                    this.layoutLayers(startPos);

                    // 摆放其它
                    // this.layoutUnassignNodes();

                    var layerGroup = this.layerGroup;
                    moveSomeNodesNearOtherNodesTool(layerGroup.unassignNodes, layerGroup.assignNodes);

                    // 生成数据结果
                    var result = this.generateResult();

                    return result;
                }
            }, {
                key: 'layoutLayers',
                value: function(startPos) {
                    var _this2 = this;

                    var layerGroup = this.layerGroup;

                    var layers = layerGroup.layers;
                    var layerBoundsMap = new Map();

                    var layerSpace = this.options.layerSpace;
                    layers.forEach(function (layer) {
                        _this2.layoutLayer(layer, startPos);

                        var bounds = _boundsTool2.default.calcBounds([].concat(_toConsumableArray(layer.nodes.values())).filter(function (node) {
                            return node.canMove();
                        }));

                        layerBoundsMap.set(layer.level, bounds);

                        startPos.offset(new _position2.default(0, bounds.height + layerSpace));
                    });

                    var oldData = this.generateResult();

                    // symmetric layout
                    var symmetricLayout = new _symmetricLayout2.default();
                    symmetricLayout.layout(layerGroup.allNodes, layerGroup.links, {
                        limitOffset: function(nodeId, offset) {
                            var newOffset = _limitOffset(layerGroup, layerBoundsMap, nodeId, offset);
                            return newOffset;
                        }
                    });

                    var newData = this.generateResult();

                    (0, _parallelSortNodes2.default)(oldData, newData, layerGroup);

                    this.layerBoundsMap = layerBoundsMap;
                    // 纠正一遍坐标
                    this.update();

                    // 居中对齐
                    if (this.options.align === 'center') {
                        this.alignCenter();
                    }
                }
            }, {
                key: 'alignCenter',
                value: function() {
                    var layerGroup = this.layerGroup;
                    var layerMaxLine = this.options.layerMaxLine;
                    var groupBounds = _boundsTool2.default.calcBounds([].concat(_toConsumableArray(layerGroup.assignNodes.values())).filter(function (node) {
                        return node.canMove();
                    }));

                    layerGroup.layers.forEach(function (layer) {
                        var maxNodeCount = layer.maxNodeCount;
                        var nodes = [].concat(_toConsumableArray(layer.nodes.values()));

                        var line = Math.min(nodes.length / maxNodeCount, layerMaxLine);

                        var _loop = function(i, len) {
                            var startIndex = i * maxNodeCount;
                            var endIndex = startIndex + (i === line - 1 ? nodes.length - i * maxNodeCount : maxNodeCount);

                            var currNodes = nodes.slice(startIndex, endIndex);
                            var bounds = _boundsTool2.default.calcBounds(currNodes.filter(function (node) {
                                return node.canMove();
                            }));

                            var offsetX = groupBounds.center.x - bounds.center.x;

                            currNodes.forEach(function (node) {
                                node.offset.offset(new _position2.default(offsetX, 0));
                            });
                        };

                        for (var i = 0, len = line; i < len; i++) {
                            _loop(i, len);
                        }
                    });
                }
            }, {
                key: 'update',
                value: function() {
                    var _this3 = this;

                    var startPos = new _position2.default();
                    var layerSpace = this.options.layerSpace;
                    var layerBoundsMap = this.layerBoundsMap;
                    this.layerGroup.layers.forEach(function (layer) {
                        var bounds = layerBoundsMap.get(layer.level);

                        _this3.layoutLayer(layer, startPos);

                        var offsetY = bounds.height;
                        if (offsetY !== 0) {
                            offsetY += layerSpace;
                        }

                        startPos.offset(new _position2.default(0, offsetY));
                    });

                    return this.generateResult();
                }
            }, {
                key: 'layoutLayer',
                value: function(layer, startPos) {
                    var maxNodeCount = layer.maxNodeCount;

                    var options = this.options;
                    var nodeVSpace = options.nodeVSpace;
                    var nodeHSpace = options.nodeHSpace;
                    var layerMaxLine = options.layerMaxLine;
                    var align = options.align;

                    var startX = startPos.x;
                    var startY = startPos.y;
                    var i = 0;
                    layer.nodes.forEach(function (node) {
                        var x = 0,
                            y = 0;

                        var line = Math.floor(i / maxNodeCount) + 1;
                        if (line <= layerMaxLine) {
                            x = startX + i % maxNodeCount * nodeHSpace;
                            y = startY + (line - 1) * nodeVSpace;
                        } else {
                            var tmpIndex = i - (layerMaxLine - 1) * maxNodeCount;
                            if (align === 'center' && tmpIndex >= maxNodeCount) {
                                var overflowIndex = tmpIndex - (maxNodeCount - 1);
                                if (overflowIndex % 2 === 1) {
                                    x = startX + (maxNodeCount + Math.floor(overflowIndex / 2)) * nodeHSpace;
                                } else {
                                    x = startX - Math.floor(overflowIndex / 2) * nodeHSpace;
                                }
                            } else {
                                x = startX + tmpIndex * nodeHSpace;
                            }
                            y = startY + (layerMaxLine - 1) * nodeVSpace;
                        }
                        if (node.canMove()) {
                            node.offset = new _position2.default(x, y);
                        }
                        i++;
                    });
                }
            }], [{
                key: 'getDefaultConfig',
                value: function() {
                    var config = Object.assign({}, _parallelStyleLayoutConfig2.default);
                    return config;
                }
            }]);

            return ParallelStyleLayout;
        })(_templateStyleLayout2.default);

        /**
     * 限制范围函数（平衡布局用）
     *
     * @param {LayerGroup} layerGroup layerGroup实例
     * @param {Map} layerBoundsMap 每层layer所占范围
     * @param {String} nodeId 节点标识
     * @param {Position} offset 偏移量
     * @returns {Position} 调整后的偏移量
     */
        function _limitOffset(layerGroup, layerBoundsMap, nodeId, offset) {
            var layer = getLayerByNodeId(layerGroup, nodeId);
            if (!layer) return offset;

            var node = layer.getNodeById(nodeId);
            if (node.fixed) return offset;

            var bounds = layerBoundsMap.get(layer.level);
            var loc = node.offset;

            var newPoint = getNearPoint(bounds, loc, offset);

            offset.moveTo(new _position2.default(newPoint.x - loc.x, newPoint.y - loc.y));

            return offset;
        }

        /**
     * 获取范围内的接近点
     *
     * @param {Bounds} bounds 所在范围
     * @param {Point} pt 移动的点
     * @param {Position} offset 偏移量
     * @returns {Point} 新的点
     */
        function getNearPoint(bounds, pt, offset) {
            if (offset.x === 0 && offset.y === 0) return offset;
            var epsilon = 0.000001;

            var newPoint = new _point2.default(pt.x + offset.x, pt.y + offset.y);

            if (!bounds.containsPoint(newPoint)) {
                var diffX = 0;
                var diffY = 0;
                if (newPoint.x < bounds.left) {
                    diffX = bounds.left - newPoint.x;
                }
                if (newPoint.x > bounds.right) {
                    diffX = newPoint.x - bounds.right;
                }

                if (newPoint.y < bounds.top) {
                    diffY = bounds.top - newPoint.y;
                }
                if (newPoint.y > bounds.bottom) {
                    diffY = newPoint.y - bounds.bottom;
                }

                var scale = Math.min(diffX / (offset.x || epsilon), diffY / (offset.y || epsilon));

                newPoint = new _point2.default(pt.x + offset.x * scale, pt.y + offset.y * scale);

                newPoint = new _point2.default(pt.x, pt.y);
            }

            return newPoint;
        }

        /**
     * 根据设备Id找到对应层
     *
     * @param {LayerGroup} layerGroup layerGroup实例
     * @param {String} nodeId 节点标识
     * @returns {Layer} 节点所在Layer
     */
        function getLayerByNodeId(layerGroup, nodeId) {
            var layer = _.find([].concat(_toConsumableArray(layerGroup.layers)), function (tmpLayer) {
                return tmpLayer.nodes.has(nodeId);
            });

            return layer;
        }

        exports.default = ParallelStyleLayout;
    });
})(NetBrain);
(function(netBrain) {
    'use strict';

    var internalGlobal = netBrain.ns('LayoutTools.internalGlobal');

    var config = {
    };

    internalGlobal.symmetryStyleLayoutConfig = {
        default: config
    };
})(NetBrain);(function(netBrain) {
    'use strict';

    var internalGlobal = netBrain.ns('LayoutTools.internalGlobal');

    var TemplateStyleLayout = internalGlobal.templateStyleLayout.default;
    var symmetryStyleLayoutConfig = internalGlobal.symmetryStyleLayoutConfig.default;

    var moveSomeNodesNearOtherNodesTool = internalGlobal.moveSomeNodesNearOtherNodesTool.default;

    function SymmetryStyleLayout() {
        TemplateStyleLayout.apply(this, arguments);

        this.layoutName = 'SymmetryStyleLayout';
    }

    NgUtil.inherit(SymmetryStyleLayout, TemplateStyleLayout);

    SymmetryStyleLayout.prototype.layout = function(layerGroupInfo, linkInfos, customOptions) {
        // convert
        // 根据层次关系，将每层之间有关系的node分到N个不同的组里面
        // l1: [A, B, C], l2: [D, E, F, G]   A<->D B<->E/F C<->G 包括子集
        // 对N个不同组之间进行布局
        //  E F
        // A B C
        //  D G
        this.options = _.extend(symmetryStyleLayoutConfig, customOptions);
        this.convert(layerGroupInfo, linkInfos);

        var startPos = this.getBestStartPos();



        var layerGroup = this.layerGroup;
        moveSomeNodesNearOtherNodesTool(layerGroup.unassignNodes, layerGroup.assignNodes);

        // 生成数据结果
        var result = this.generateResult();

        return result;
    };

    internalGlobal.symmetryStyleLayout = {
        default: SymmetryStyleLayout
    };
})(NetBrain);(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.argumentsChecker);
        global.jaccard = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _argumentsChecker) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.calculateJaccardCoefficient = exports.getJaccardCoefficient = undefined;

        var _argumentsChecker2 = _interopRequireDefault(_argumentsChecker);

        // _interopRequireDefault

        exports.getJaccardCoefficient = getJaccardCoefficient;
        exports.calculateJaccardCoefficient = calculateJaccardCoefficient;


        function getJaccardCoefficient(arrA, arrB) {
            if (arguments.length !== 2) {
                throw new Error('getJaccardCoefficient called must two params: arrA, arrB');
            }

            _argumentsChecker2.default.checkArgumentsTypes(arguments, ['Array', 'Array']);

            var intersect = _.intersection(arrA, arrB).length;
            var union = _.union(arrA, arrB).length;

            return calculateJaccardCoefficient(intersect, union);
        }

        function calculateJaccardCoefficient(intersect, union) {
            return union === 0 ? 0 : intersect / union;
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.jaccard);
        global.calculator = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _jaccard) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.calculateSimilarityCoefficient = exports.getSimilarityCoefficient = undefined;
        exports.getSimilarityCoefficient = getSimilarityCoefficient;
        exports.calculateSimilarityCoefficient = calculateSimilarityCoefficient;


        function getSimilarityCoefficient(arrA, arrB) {
            return (0, _jaccard.getJaccardCoefficient)(arrA, arrB);
        }

        function calculateSimilarityCoefficient(intersect, union) {
            return (0, _jaccard.calculateJaccardCoefficient)(intersect, union);
        }
    });
})(NetBrain);
(function (netBrain) {
    'use strict';

    var internalGlobal = netBrain.ns('LayoutTools.internalGlobal');

    internalGlobal.advancedCalculatorConfig = {
        templateStyleWeights: {
            device: 0.25, // device 匹配情况
            tag: 0.25, // tag 匹配情况
            layer: 0.25, // layer 匹配情况
            deviceInLayer: 0.25 // deviceInLayer 分布情况
        }
    };

})(NetBrain);
(function (netBrain) {
    'use strict';

    var internalGlobal = netBrain.ns('LayoutTools.internalGlobal');

    var jaccard = internalGlobal.jaccard;
    var config = internalGlobal.advancedCalculatorConfig.templateStyleWeights;

    internalGlobal.advancedCalculator = {
        calculateSimilarityCoefficient: calculateSimilarityCoefficient,
        forTest: {
            calculateDevice: calculateDevice,
            calculateTag: calculateTag,
            calculateLayer: calculateLayer,
            calculateDeviceInLayer: calculateDeviceInLayer
        }
    };

    // return void(0);

    function calculateSimilarityCoefficient(fullMatchInfo) {
        return calculateDevice(fullMatchInfo.device) * config.device +
            calculateTag(fullMatchInfo.tag) * config.tag +
            calculateLayer(fullMatchInfo.layers) * config.layer +
            calculateDeviceInLayer(fullMatchInfo.layers) * config.deviceInLayer;
    }

    function calculateDeviceInLayer(layers) {
        var sums = _.chain(layers)
            .reduce(function (memo, layer) {
                memo.size += layer.size;
                memo.devices += layer.devices;

                return memo;
            }, {
                size: 0,
                devices: 0
            })
            .value();

        if(sums.size === 0 || sums.devices === 0){
            return 0;
        }

        var diff = _.chain(layers)
            .reduce(function (memo, layer) {
                return memo + Math.abs(
                    layer.size / sums.size - layer.devices / sums.devices
                );
            }, 0)
            .value();

        return 1 - (diff / 2);
    }

    function calculateLayer(layers) {
        var matched = _.filter(layers, function (layer) {
            return layer.devices > 0;
        }).length;

        return jaccard.calculateJaccardCoefficient(matched, layers.length);
    }

    function calculateTag(tag) {
        return jaccard.getJaccardCoefficient(tag.map, tag.style);
    }

    function calculateDevice(device) {
        return jaccard.calculateJaccardCoefficient(device.matched, device.total);
    }

})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.level = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        // _classCallCheck
        // _createClass
        var Level = (function () {
            function Level() {
                var levelIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

                _classCallCheck(this, Level);

                this.levelIndex = levelIndex;

                this.subLevels = [];

                this.allLocations = [];
            }

            _createClass(Level, [{
                key: 'addSubLevel',
                value: function(subLevel) {
                    this.subLevels.push(subLevel);
                }
            }, {
                key: 'addLocation',
                value: function(location) {
                    this.allLocations.push(location);
                }
            }]);

            return Level;
        })();

        var SubLevel = (function () {
            function SubLevel(parent) {
                var subLevelIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

                _classCallCheck(this, SubLevel);

                this.parent = parent;
                this.subLevelIndex = subLevelIndex;

                this.locations = [];
            }

            _createClass(SubLevel, [{
                key: 'addLocation',
                value: function(location) {
                    this.locations.push(location);
                    this.parent.addLocation(location);
                }
            }]);

            return SubLevel;
        })();

        var Location = function(parent) {
            _classCallCheck(this, Location);

            this.id = _.uniqueId();

            this.parent = parent;

        // this.x; // sub level index
        // this.y; // index in sub level
        // this.position; // position on map
        };

        exports.Level = Level;
        exports.SubLevel = SubLevel;
        exports.Location = Location;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.position);
        global.seekTheCenter = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _position) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.default = seekTheCenter;

        var _position2 = _interopRequireDefault(_position);

        // _interopRequireDefault

        function seekTheCenter(context) {
            var assignNodes = context.layerGroup.assignNodes;
            var center = new _position2.default();

            assignNodes.forEach(function (node) {
                return center.offset(node.offset);
            });

            center.x /= assignNodes.size;
            center.y /= assignNodes.size;

            context.layoutInfo.center = center;
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.moveUnassignNodesToCenter = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.default = moveUnassignNodesToCenter;
        function moveUnassignNodesToCenter(context) {
            var unassignNodes = context.layerGroup.unassignNodes;
            var center = context.layoutInfo.center;

            unassignNodes.forEach(function (node) {
                return node.offset = center.getCopy();
            });
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.symmetricLayout);
        global.symmetricLayoutUnassignNodes = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _symmetricLayout) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.default = symmetricLayoutUnassignNodes;

        var _symmetricLayout2 = _interopRequireDefault(_symmetricLayout);

        // _interopRequireDefault

        function symmetricLayoutUnassignNodes(context) {
            var links = context.links;

            var layerGroup = context.layerGroup;
            var assignNodes = layerGroup.assignNodes;
            var allNodes = layerGroup.allNodes;

            assignNodes.forEach(function (node) {
                return node.locked = true;
            });

            var symmetricLayouter = new _symmetricLayout2.default();
            symmetricLayouter.layout(allNodes, links);
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.spaceHelper = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.getNodeSpace = getNodeSpace;
        exports.getLevelSplitSpace = getLevelSplitSpace;


        function getNodeSpace(context) {
            var options = context.options;
            return options.commonNodeSize + options.nodeDistance;
        }

        function getLevelSplitSpace(context) {
            return getNodeSpace(context) * context.options.splitSize;
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.symmetricLayout, global.symmetricLayoutForIsland, global.islandGroupLayoutFromLayerGroup);
        global.prepareBySymmetricLayout = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _symmetricLayout, _symmetricLayoutForIsland, _islandGroupLayoutFromLayerGroup) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.prepareBySymmetricLayoutByIsland = exports.prepareBySymmetricLayout = undefined;

        var _symmetricLayout2 = _interopRequireDefault(_symmetricLayout);

        var _symmetricLayoutForIsland2 = _interopRequireDefault(_symmetricLayoutForIsland);

        // _interopRequireDefault

        exports.prepareBySymmetricLayout = prepareBySymmetricLayout;
        exports.prepareBySymmetricLayoutByIsland = prepareBySymmetricLayoutByIsland;


        function prepareBySymmetricLayoutByIsland(context) {
            var islandGroupLayoutFromLayerGroup = new _islandGroupLayoutFromLayerGroup.IslandGroupLayoutFromLayerGroupByIsland();
            var symmetricLayouter = new _symmetricLayoutForIsland2.default();

            context.tempLocations = islandGroupLayoutFromLayerGroup.layout(context.layerGroup, symmetricLayouter, context.options);
        }

        function prepareBySymmetricLayout(context) {
            var symmetricLayouter = new _symmetricLayout2.default();
            symmetricLayouter.layout(context.allNodesMap, context.links);
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.position);
        global.reduceCross = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _position) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.default = reduceCross;

        var _position2 = _interopRequireDefault(_position);

        // _interopRequireDefault

        // _toConsumableArray

        var pi = Math.PI;
        var pi2 = 2 * pi;

        function reduceCross(context) {
            var layers = [].concat(_toConsumableArray(context.layerGroup.layers));
            var levels = context.levelInfos;

            _.each(layers, function (layer, index) {
                reduceCrossLayer(layer.nodes, levels[index].allLocations);
            });
        }

        function reduceCrossLayer(nodesMap, goalLocations) {
            var nodes = [].concat(_toConsumableArray(nodesMap.values()));
            var goodLocations = nodes.map(function (node) {
                return {
                    id: node.id,
                    position: node.offset.getCopy()
                };
            });

            prepareBaseInfo(goalLocations);
            prepareBaseInfo(goodLocations);

            var matchResult = mapping(goalLocations, goodLocations);

            matchResult.forEach(function (item) {
                var node = nodesMap.get(item.id);
                node.offset = item.position.getCopy();
            });
        }

        function mapping(goalLocations, goodLocations) {
            var join = [];

            goalLocations.forEach(function (goal) {
                goodLocations.forEach(function (good) {
                    join.push({
                        goal: goal.id,
                        good: good.id,
                        diff: getDiff(goal.rate, good.rate),
                        position: goal.position
                    });
                });
            });

            join = _.sortBy(join, 'diff');
            // join.reverse();

            var result = [];

            var _loop = function() {
                var current = join.shift();
                result.push({
                    id: current.good,
                    position: current.position
                });

                join = _.filter(join, function (item) {
                    return item.goal !== current.goal && item.good !== current.good;
                });
            };

            while (join.length > 0) {
                _loop();
            }

            return result;
        }

        function getDiff(rate1, rate2) {
            var diff = Math.abs(rate1 - rate2);
            return diff < pi ? diff : pi2 - diff;
        }

        function prepareBaseInfo(locations) {
            var center = getCenter(locations);
            // let distanceSum = 0;

            locations.forEach(function (node) {
                var vector = node.position.getOffsetFrom(center);
                node.vector = vector;

                node.rate = Math.atan2(vector.y, vector.x);
            // node.distance = node.vector.distance();
            //
            // distanceSum += node.distance;
            });

            locations.center = center;
        // locations.averageDistance = distanceSum / locations.length;
        }

        function getCenter(locations) {
            var counter = locations.length;

            var xSum = 0;
            var ySum = 0;

            locations.forEach(function (node) {
                var position = node.position;
                xSum += position.x;
                ySum += position.y;
            });

            return new _position2.default(xSum / counter, ySum / counter);
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.layoutBaseConfig);
        global.defaultPetalLayoutConfig = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _layoutBaseConfig) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _layoutBaseConfig2 = _interopRequireDefault(_layoutBaseConfig);

        // _interopRequireDefault

        exports.default = _.extend({}, _layoutBaseConfig2.default, {
            startAt: -Math.PI / 2,
            direction: 1,
            splitSize: 3, // 扇区间间隔，默认一个node位置，此数作为系数使用，如：1.5倍node大小
            useDeviation: false // 使用分割校正
        });
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.calculateRadianUnit = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.default = calculateRadianUnit;
        var pi = Math.PI;
        var pi2 = 2 * pi;

        function calculateRadianUnit(context) {
            var levels = context.levelInfos;

            var counter = _.chain(levels).map(function (level) {
                return level.actualSize * level.scale;
            }) // TODO: temp: infinity
                .reduce(function (memo, num) {
                    return memo + num;
                }, 0).value();

            if (levels.length > 1) {
                counter += levels.length * context.options.splitSize;
            }

            counter = counter || 1;
            context.layoutInfo.randianUnit = pi2 / counter;
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.spaceHelper);
        global.calculateRadius = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _spaceHelper) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.default = calculateRadius;
        function calculateRadius(context) {
            context.layoutInfo.radius = (0, _spaceHelper.getNodeSpace)(context) / context.layoutInfo.randianUnit / 2;
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.position, global.level, global.calculateRadianUnit, global.calculateRadius, global.spaceHelper);
        global.distributePetalLevelInfo = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _position, _level, _calculateRadianUnit, _calculateRadius, _spaceHelper) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.default = distributePetalLevelInfo;

        var _position2 = _interopRequireDefault(_position);

        var _calculateRadianUnit2 = _interopRequireDefault(_calculateRadianUnit);

        var _calculateRadius2 = _interopRequireDefault(_calculateRadius);

        // _interopRequireDefault

        // _toConsumableArray

        function distributePetalLevelInfo(context) {
            var layers = [].concat(_toConsumableArray(context.layerGroup.layers));

            var levelInfos = _.map(layers, createBlankLevel);
            levelInfos = _.sortBy(levelInfos, 'levelIndex');

            context.levelInfos = levelInfos;
            (0, _calculateRadianUnit2.default)(context);
            (0, _calculateRadius2.default)(context);

            initLevelSpace(context);
            initLocations(context);

            alignCenterAloneNode(context);
        }

        function alignCenterAloneNode(context) {
            _.each(context.levelInfos, function (levelInfo) {
                _.each(levelInfo.subLevels, function (subLevel) {
                    if (subLevel.locations.length === 1) {
                        var angle = (subLevel.startAt + subLevel.endAt) / 2;

                        updateLocationPosition(subLevel.locations[0], angle, subLevel.radius, context);
                    }
                });
            });
        }

        function initLocations(context) {
            _.each(context.levelInfos, function (levelInfo) {
                var lastSubLevel = createFirstSubLevel(levelInfo, context);
                levelInfo.addSubLevel(lastSubLevel);

                while (lastSubLevel.toIndex < levelInfo.layer.nodes.size - 1) {
                    lastSubLevel = createSubLevel(levelInfo, lastSubLevel, context);
                    levelInfo.addSubLevel(lastSubLevel);
                }
            });
        }

        function createSubLevel(parent, lastSubLevel, context) {
            var subLevel = new _level.SubLevel(parent, lastSubLevel.subLevelIndex + 1);

            subLevel.radius = lastSubLevel.radius + (0, _spaceHelper.getNodeSpace)(context);

            calculateSubLevelStartAndEnd(subLevel, context);

            subLevel.size = Math.floor(subLevel.radius / context.layoutInfo.radius * parent.actualSize);

            subLevel.fromIndex = lastSubLevel.toIndex + 1;
            subLevel.size = Math.min(subLevel.size, parent.layer.nodes.size - subLevel.fromIndex);
            subLevel.toIndex = subLevel.fromIndex + subLevel.size - 1;

            calculateSubLevelRandianUnit(subLevel, context);

            addLocations(subLevel, context);

            return subLevel;
        }

        function createFirstSubLevel(parent, context) {
            var subLevel = new _level.SubLevel(parent, 0);

            subLevel.radius = context.layoutInfo.radius;
            subLevel.size = parent.actualSize;

            calculateSubLevelStartAndEnd(subLevel, context);

            calculateSubLevelRandianUnit(subLevel, context);

            subLevel.fromIndex = 0;
            subLevel.toIndex = subLevel.size - 1;

            addLocations(subLevel, context);

            return subLevel;
        }

        function calculateSubLevelRandianUnit(subLevel, context) {
            var space = subLevel.endAt - subLevel.startAt;
            var size = subLevel.size - 1 || 1;
            subLevel.randianUnit = space * context.options.direction / size;
        }

        function calculateSubLevelStartAndEnd(subLevel, context) {
            var options = context.options;

            var needDeviation = options.useDeviation && context.levelInfos.length > 1;
            var currentLevelDeviation = needDeviation ? calculateDeviation(subLevel.radius, context) : 0;

            currentLevelDeviation *= options.direction;

            var parent = subLevel.parent;
            subLevel.startAt = parent.startAt - currentLevelDeviation;
            subLevel.endAt = parent.endAt + currentLevelDeviation;
        }

        function calculateDeviation(currentRadius, context) {
            var splitSize = context.options.splitSize;
            var deviation = Math.asin(splitSize * (0, _spaceHelper.getNodeSpace)(context) / 2 / currentRadius);
            return splitSize * context.layoutInfo.randianUnit / 2 - deviation;
        }

        function addLocations(subLevel, context) {
            while (subLevel.locations.length < subLevel.size) {
                var location = createLocation(subLevel, context);
                subLevel.addLocation(location);
            }
        }

        function createLocation(subLevel, context) {
            var location = new _level.Location(subLevel);

            location.x = subLevel.locations.length;
            location.y = subLevel.subLevelIndex;

            var options = context.options;
            var radius = subLevel.radius;
            var angle = subLevel.startAt + options.direction * (location.x * subLevel.randianUnit);

            updateLocationPosition(location, angle, radius, context);

            return location;
        }

        function updateLocationPosition(location, angle, radius, context) {
            var x = Math.cos(angle) * radius;
            var y = Math.sin(angle) * radius;
            var offset = new _position2.default(x, y);

            location.position = context.layoutInfo.center.getCopy().offset(offset);
        }

        function initLevelSpace(context) {
            var options = context.options;
            var randianUnit = context.layoutInfo.randianUnit;

            var lastLevel = null;
            _.each(context.levelInfos, function (levelInfo) {
                var startAt = levelInfo.levelIndex === 0 ? options.startAt : lastLevel.endAt + options.direction * options.splitSize * randianUnit;

                levelInfo.startAt = startAt;
                levelInfo.endAt = startAt + options.direction * levelInfo.actualSize * randianUnit * levelInfo.scale;

                lastLevel = levelInfo;
            });
        }

        function createBlankLevel(layer) {
            var level = new _level.Level(layer.level);

            level.actualSize = Math.min(layer.nodes.size, layer.maxNodeCount);
            level.scale = layer.scale;

            level.layer = layer;

            return level;
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.templateStyleLayout, global.defaultPetalLayoutConfig, global.prepareBySymmetricLayout, global.seekTheCenter, global.distributePetalLevelInfo, global.moveUnassignNodesToCenter, global.symmetricLayoutUnassignNodes, global.reduceCross);
        global.petalLayout = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _templateStyleLayout, _defaultPetalLayoutConfig, _prepareBySymmetricLayout, _seekTheCenter, _distributePetalLevelInfo, _moveUnassignNodesToCenter, _symmetricLayoutUnassignNodes, _reduceCross) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _templateStyleLayout2 = _interopRequireDefault(_templateStyleLayout);

        var _defaultPetalLayoutConfig2 = _interopRequireDefault(_defaultPetalLayoutConfig);

        var _seekTheCenter2 = _interopRequireDefault(_seekTheCenter);

        var _distributePetalLevelInfo2 = _interopRequireDefault(_distributePetalLevelInfo);

        var _moveUnassignNodesToCenter2 = _interopRequireDefault(_moveUnassignNodesToCenter);

        var _symmetricLayoutUnassignNodes2 = _interopRequireDefault(_symmetricLayoutUnassignNodes);

        var _reduceCross2 = _interopRequireDefault(_reduceCross);

        // _interopRequireDefault

        // _toConsumableArray

        // _classCallCheck
        // _createClass
        // _possibleConstructorReturn
        // _inherits
        var PetalLayout = (function (_TemplateStyleLayout) {
            _inherits(PetalLayout, _TemplateStyleLayout);

            function PetalLayout(props) {
                _classCallCheck(this, PetalLayout);

                var _this = _possibleConstructorReturn(this, (PetalLayout.__proto__ || Object.getPrototypeOf(PetalLayout)).call(this, props));

                _this.layoutName = 'PetalLayout';
                return _this;
            }

            _createClass(PetalLayout, [{
                key: 'getLayoutName',
                value: function() {
                    return this.layoutName;
                }
            }, {
                key: 'layout',
                value: function(layerGroupInfo, links, customizeOptions) {
                    var options = _.extend({}, _defaultPetalLayoutConfig2.default, customizeOptions);
                    this.convert(layerGroupInfo, links);
                    var layerGroup = this.layerGroup;
                    var allNodes = layerGroup.getAllNodes();
                    var allNodesMap = layerGroup.allNodes;

                    var context = {
                        options: options,
                        layerGroup: layerGroup,
                        links: [].concat(_toConsumableArray(layerGroup.links)),
                        allNodes: allNodes,
                        allNodesMap: allNodesMap,
                        layoutInfo: {},
                        currentLayerInfo: {}
                    };

                    this.context = context; // for test

                    // 先使用symmetricLayout
                    (0, _prepareBySymmetricLayout.prepareBySymmetricLayout)(context);

                    // 选定扇形圆心的位置
                    (0, _seekTheCenter2.default)(context);

                    // 计算分层和位置信息
                    (0, _distributePetalLevelInfo2.default)(context);

                    // 优化交叉
                    (0, _reduceCross2.default)(context);

                    // 把unassignNodes移动到中心位置
                    (0, _moveUnassignNodesToCenter2.default)(context);

                    // 对unassignNodes进行平衡布局
                    // symmetricLayoutUnassignNodes(context);

                    return this.getLocations();
                }
            }, {
                key: 'getLocations',
                value: function() {
                    var allNodes = this.layerGroup.getAllNodes();
                    return this.generateResult(allNodes);
                }
            }]);

            return PetalLayout;
        })(_templateStyleLayout2.default);

        exports.default = PetalLayout;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.petalLayout, global.moveUnassignNodesToCenter, global.symmetricLayoutUnassignNodes);
        global.petalLayoutAutoUnassignNodes = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _petalLayout, _moveUnassignNodesToCenter, _symmetricLayoutUnassignNodes) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _petalLayout2 = _interopRequireDefault(_petalLayout);

        var _moveUnassignNodesToCenter2 = _interopRequireDefault(_moveUnassignNodesToCenter);

        var _symmetricLayoutUnassignNodes2 = _interopRequireDefault(_symmetricLayoutUnassignNodes);

        // _interopRequireDefault

        // _classCallCheck
        // _createClass
        // _possibleConstructorReturn
        // _get

        // _inherits
        var PetalLayoutAutoUnassignNodes = (function (_PetalLayout) {
            _inherits(PetalLayoutAutoUnassignNodes, _PetalLayout);

            function PetalLayoutAutoUnassignNodes(props) {
                _classCallCheck(this, PetalLayoutAutoUnassignNodes);

                var _this = _possibleConstructorReturn(this, (PetalLayoutAutoUnassignNodes.__proto__ || Object.getPrototypeOf(PetalLayoutAutoUnassignNodes)).call(this, props));

                _this.layoutName = 'PetalLayout';
                return _this;
            }

            _createClass(PetalLayoutAutoUnassignNodes, [{
                key: 'getLayoutName',
                value: function() {
                    return this.layoutName;
                }
            }, {
                key: 'layout',
                value: function(layerGroupInfo, links, customizeOptions) {
                    _get(PetalLayoutAutoUnassignNodes.prototype.__proto__ || Object.getPrototypeOf(PetalLayoutAutoUnassignNodes.prototype), 'layout', this).call(this, layerGroupInfo, links, customizeOptions);

                    // 布局未匹配节点和media
                    (0, _moveUnassignNodesToCenter2.default)(this.context);
                    (0, _symmetricLayoutUnassignNodes2.default)(this.context);

                    return this.getLocations();
                }
            }]);

            return PetalLayoutAutoUnassignNodes;
        })(_petalLayout2.default);

        exports.default = PetalLayoutAutoUnassignNodes;
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.layoutBaseConfig);
        global.defaultRingLayoutConfig = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _layoutBaseConfig) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _layoutBaseConfig2 = _interopRequireDefault(_layoutBaseConfig);

        // _interopRequireDefault

        exports.default = _.extend({}, _layoutBaseConfig2.default, {
            startAt: Math.PI / 2, // 环形布局位置摆放的起始角度，默认90度位置起（即PI/2）
            direction: -1, // 摆放方向，-1即顺时针方向，1逆时针方向（此值与我们理解的相反，因为gojs中y轴是向下的）
            splitSize: 1.5 // Layer间间隔，默认一个nodeSpace倍数，此数作为系数使用，如：1.5倍
        });
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.position, global.level, global.spaceHelper);
        global.distributeRingLevelInfo = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _position, _level, _spaceHelper) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.default = distributeRingLevelInfo;

        var _position2 = _interopRequireDefault(_position);

        // _interopRequireDefault

        // _toConsumableArray

        var pi = Math.PI;
        var pi2 = 2 * pi;

        function distributeRingLevelInfo(context) {
            var levelInfos = [];
            var layers = [].concat(_toConsumableArray(context.layerGroup.layers));
            var nodeSpace = (0, _spaceHelper.getNodeSpace)(context);

            var lastLevelInfo = null;
            _.each(layers, function (layer) {
                lastLevelInfo = createLevelInfo(layer, lastLevelInfo, context);
                lastLevelInfo.endRadius = lastLevelInfo.startRadius + lastLevelInfo.subLevels.length * nodeSpace;

                levelInfos.push(lastLevelInfo);
            });

            context.levelInfos = levelInfos;
        }

        /**
     * 创建level信息
     * @param { Object } layer - 根据layer生成level
     * @param { Object } lastLevelInfo - 上一层level信息
     * @param { Object } context - 上下文信息
     * @returns { Level } - 无返回值
     */
        function createLevelInfo(layer, lastLevelInfo, context) {
            var matLevel = lastLevelInfo || getMatLevelInfo();
            var levelSplitSpace = (0, _spaceHelper.getLevelSplitSpace)(context);

            var currentLevel = new _level.Level(matLevel.levelIndex + 1);
            currentLevel.startRadius = matLevel.endRadius + levelSplitSpace;

            var lastSubLevel = getMatSubLevelInfo();
            while (lastSubLevel.toIndex < layer.nodes.size - 1) {
                lastSubLevel = createSubLevels(currentLevel, lastSubLevel, layer, context);
                currentLevel.addSubLevel(lastSubLevel);
            }

            return currentLevel;
        }

        function createSubLevels(parentLevel, lastSubLevel, layer, context) {
            var matSubLevel = lastSubLevel || getMatSubLevelInfo();
            var currentSubLevel = new _level.SubLevel(parentLevel, matSubLevel.subLevelIndex + 1);

            var subLevelBaseInfo = getSubLevelBaseInfo(parentLevel, lastSubLevel, currentSubLevel, layer, context);

            _.extend(currentSubLevel, subLevelBaseInfo);
            addLocations(currentSubLevel, context);

            return currentSubLevel;
        }

        function addLocations(subLevel, context) {
            while (subLevel.locations.length < subLevel.size) {
                var location = createLocation(subLevel, context);
                subLevel.addLocation(location);
            }
        }

        function createLocation(subLevel, context) {
            var location = new _level.Location(subLevel);

            location.x = subLevel.locations.length;
            location.y = subLevel.subLevelIndex;

            var options = context.options;
            var radius = subLevel.radius;
            var angle = options.startAt + options.direction * (location.x * subLevel.randianUnit);
            var x = Math.cos(angle) * radius;
            var y = Math.sin(angle) * radius;
            var offset = new _position2.default(x, y);
            location.position = context.layoutInfo.center.getCopy().offset(offset);

            return location;
        }

        function getSubLevelBaseInfo(parentLevel, lastSubLevel, currentSubLevel, layer, context) {
            if (currentSubLevel.subLevelIndex === 0) {
                return getFirstSubLevelBaseInfo(parentLevel, layer, context);
            }

            var fromIndex = lastSubLevel.toIndex;
            var nodeSpace = (0, _spaceHelper.getNodeSpace)(context);
            var radius = lastSubLevel.radius + nodeSpace;

            var size = Math.min(Math.floor(pi2 * radius / nodeSpace), layer.nodes.size - fromIndex);
            var randianUnit = pi2 / (size || 1);

            var toIndex = fromIndex + size;

            return {
                size: size,
                randianUnit: randianUnit,
                radius: radius,
                fromIndex: fromIndex,
                toIndex: toIndex
            };
        }

        function getFirstSubLevelBaseInfo(parentLevel, layer, context) {
            var size = Math.min(layer.maxNodeCount, layer.nodes.size);
            var randianUnit = pi2 / (size || 1);

            var nodeSpace = (0, _spaceHelper.getNodeSpace)(context);

            var radius = nodeSpace / randianUnit / 2;

            radius = Math.max(radius, parentLevel.startRadius);

            return {
                size: size,
                randianUnit: randianUnit,
                radius: radius,
                fromIndex: 0,
                toIndex: size
            };
        }

        function getMatSubLevelInfo() {
        // 为第一层做垫子的sub层
            var matSubLevel = new _level.SubLevel(null, -1);

            _.extend(matSubLevel, {
                size: 0,
                fromIndex: 0,
                toIndex: -1
            });

            return matSubLevel;
        }

        function getMatLevelInfo() {
        // 为第一层做垫子的层
            var matLevel = new _level.Level(-1);

            matLevel.startRadius = 0;
            matLevel.endRadius = 0;

            return matLevel;
        }
    });
})(NetBrain);
(function(netBrain) {
    (function (global, factory) {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.templateStyleLayout, global.defaultRingLayoutConfig, global.prepareBySymmetricLayout, global.seekTheCenter, global.distributeRingLevelInfo, global.moveUnassignNodesToCenter, global.symmetricLayoutUnassignNodes, global.reduceCross);
        global.ringLayout = mod.exports;
    })(netBrain.ns('LayoutTools.internalGlobal'), function (exports, _templateStyleLayout, _defaultRingLayoutConfig, _prepareBySymmetricLayout, _seekTheCenter, _distributeRingLevelInfo, _moveUnassignNodesToCenter, _symmetricLayoutUnassignNodes, _reduceCross) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _templateStyleLayout2 = _interopRequireDefault(_templateStyleLayout);

        var _defaultRingLayoutConfig2 = _interopRequireDefault(_defaultRingLayoutConfig);

        var _seekTheCenter2 = _interopRequireDefault(_seekTheCenter);

        var _distributeRingLevelInfo2 = _interopRequireDefault(_distributeRingLevelInfo);

        var _moveUnassignNodesToCenter2 = _interopRequireDefault(_moveUnassignNodesToCenter);

        var _symmetricLayoutUnassignNodes2 = _interopRequireDefault(_symmetricLayoutUnassignNodes);

        var _reduceCross2 = _interopRequireDefault(_reduceCross);

        // _interopRequireDefault

        // _toConsumableArray

        // _classCallCheck
        // _createClass
        // _possibleConstructorReturn
        // _inherits
        var RingLayout = (function (_TemplateStyleLayout) {
            _inherits(RingLayout, _TemplateStyleLayout);

            function RingLayout(props) {
                _classCallCheck(this, RingLayout);

                var _this = _possibleConstructorReturn(this, (RingLayout.__proto__ || Object.getPrototypeOf(RingLayout)).call(this, props));

                _this.layoutName = 'RingLayout';
                return _this;
            }

            _createClass(RingLayout, [{
                key: 'getLayoutName',
                value: function() {
                    return this.layoutName;
                }
            }, {
                key: 'layout',
                value: function(layerGroupInfo, links, customizeOptions) {
                    var options = _.extend({}, _defaultRingLayoutConfig2.default, customizeOptions);
                    this.convert(layerGroupInfo, links);
                    var layerGroup = this.layerGroup;
                    var allNodes = layerGroup.getAllNodes();
                    var allNodesMap = layerGroup.allNodes;

                    var context = {
                        options: options,
                        layerGroup: layerGroup,
                        links: [].concat(_toConsumableArray(layerGroup.links)),
                        allNodes: allNodes,
                        allNodesMap: allNodesMap,
                        layoutInfo: {},
                        currentLayerInfo: {}
                    };

                    this.context = context; // for test

                    // 先使用symmetricLayout
                    (0, _prepareBySymmetricLayout.prepareBySymmetricLayout)(context);

                    // 选定扇形圆心的位置
                    (0, _seekTheCenter2.default)(context);

                    // 计算分层和位置信息
                    (0, _distributeRingLevelInfo2.default)(context);

                    // 优化交叉
                    (0, _reduceCross2.default)(context);

                    // 把unassignNodes移动到中心位置
                    (0, _moveUnassignNodesToCenter2.default)(context);

                    // 对unassignNodes进行平衡布局
                    // symmetricLayoutUnassignNodes(context);

                    return this.getLocations();
                }
            }, {
                key: 'getLocations',
                value: function() {
                    var allNodes = this.layerGroup.getAllNodes();
                    return this.generateResult(allNodes);
                }
            }]);

            return RingLayout;
        })(_templateStyleLayout2.default);

        exports.default = RingLayout;
    });
})(NetBrain);
(function(netBrain) {
    'use strict';

    var internalGlobal = netBrain.ns('LayoutTools.internalGlobal');
    var Link = internalGlobal.link.default;

    function MapInfo() {
        this.nodes = new Map();
        this.links = new Set();
    }

    MapInfo.prototype.fromData = function(data, Node) {
        this.nodes.clear();
        this.links.clear();

        this.convertNodes(data.nodeDataArray, Node);
        this.convertLinks(data.linkDataArray);
    };

    MapInfo.prototype.convertNodes = function(nodeDataArray, Node) {
        var nodes = this.nodes;

        _.each(nodeDataArray, function(nodeInfo) {
            var node = new Node(nodeInfo);

            nodes.set(node.id, node);
        });
    };

    MapInfo.prototype.convertLinks = function(linkDataArray) {
        var nodes = this.nodes;
        var links = this.links;

        _.each(linkDataArray, function(linkInfo) {
            var link = new Link(linkInfo);

            links.add(link);

            var fromNode = nodes.get(link.from);
            var toNode = nodes.get(link.to);

            if (fromNode) {
                link.fromNode = fromNode;
                fromNode.addFromLink(link);
                fromNode.addToNeighbor(toNode);
            }

            if (toNode) {
                link.toNode = toNode;
                toNode.addToLink(link);
                toNode.addToNeighbor(fromNode);
            }
        });
    };

    internalGlobal.mapInfo = {
        default: MapInfo
    };
})(NetBrain);(function(netBrain) {
    'use strict';

    var internalGlobal = netBrain.ns('LayoutTools.internalGlobal');

    var BaseLayout = internalGlobal.baseLayout.default;
    var MapInfo = internalGlobal.mapInfo.default;

    function SampleMapLayout() {
        BaseLayout.apply(this, arguments);

        this.layoutName = 'SampleMapLayout';

        this.currMapInfo = new MapInfo();
        this.originMapInfo = new MapInfo();

        this.matchedNodes = new Map();
        this.unmatchedNodes = new Map();
    }

    NgUtil.inherit(SampleMapLayout, BaseLayout);

    SampleMapLayout.prototype.convert = function(currMapData, originMapData) {
        this.currMapInfo.fromData(currMapData, this.nodeType);
        this.originMapInfo.fromData(originMapData, this.nodeType);
    };

    SampleMapLayout.prototype.getLocations = function() {
        var matchedLocations = this.generateResult(this.matchedNodes);
        var unmatchedLocations = this.generateResult(this.unmatchedNodes);
        var result = matchedLocations.concat(unmatchedLocations);

        return result;
    };

    internalGlobal.sampleMapLayout = {
        default: SampleMapLayout
    };
})(NetBrain);(function(netBrain) {
    'use strict';

    var internalGlobal = netBrain.ns('LayoutTools.internalGlobal');

    var config = {
        getDeviceKey: function(node) {
            var hostName = node.hostName;
            if (_.isArray(hostName)) {
                hostName = hostName.join('\n');
            }

            return hostName || '';
        }
    };

    internalGlobal.sampleMapByDeviceConfig = {
        default: config
    };
})(NetBrain);(function(netBrain) {
    'use strict';

    var internalGlobal = netBrain.ns('LayoutTools.internalGlobal');

    var Node = internalGlobal.node.default;

    function SampleMapByDeviceNode(originNode) {
        Node.apply(this, arguments);

        this.hostName = originNode.hostName;
    }

    NgUtil.inherit(SampleMapByDeviceNode, Node);

    internalGlobal.sampleMapByDeviceNode = {
        default: SampleMapByDeviceNode
    };
})(NetBrain);(function(netBrain) {
    'use strict';

    var internalGlobal = netBrain.ns('LayoutTools.internalGlobal');

    var SampleMapLayout = internalGlobal.sampleMapLayout.default;
    var SampleMapByDeviceNode = internalGlobal.sampleMapByDeviceNode.default;
    var SampleMapByDeviceConfig = internalGlobal.sampleMapByDeviceConfig.default;

    var moveSomeNodesNearOtherNodesTool = internalGlobal.moveSomeNodesNearOtherNodesTool.default;

    function SampleMapByDeviceLayout() {
        SampleMapLayout.apply(this, arguments);

        this.layoutName = 'SampleMapByDeviceLayout';
        this.nodeType = SampleMapByDeviceNode;
    }

    NgUtil.inherit(SampleMapByDeviceLayout, SampleMapLayout);

    SampleMapByDeviceLayout.prototype.layout = function(currMapData, originMapData, customOptions) {
        this.options = _.extend(SampleMapByDeviceConfig, customOptions);

        this.convert(currMapData, originMapData);

        this.diff();

        // var result = this.generateResult(this.matchedNodes);
        moveSomeNodesNearOtherNodesTool(this.unmatchedNodes, this.matchedNodes);
        var result = this.getLocations();

        return result;
    };

    SampleMapByDeviceLayout.prototype.diff = function() {
        var currNodes = this.currMapInfo.nodes;
        var originNodes = this.originMapInfo.nodes;

        var matchedNodes = this.matchedNodes;
        var unmatchedNodes = this.unmatchedNodes;

        var options = this.options;
        var getDeviceKey = options.getDeviceKey;

        var originHostNameMap = new Map();
        originNodes.forEach(function(node) {
            var key = getDeviceKey(node);

            if (key) {
                originHostNameMap.set(key, node);
            }
        });

        currNodes.forEach(function(node) {
            var key = getDeviceKey(node);
            if (!key) return;
            var originNode = originHostNameMap.get(key);

            if (originNode) {
                node.offset.moveTo(originNode.offset);

                matchedNodes.set(node.id, node);
            } else {
                unmatchedNodes.set(node.id, node);
            }
        });
    };

    internalGlobal.sampleMapByDeviceLayout = {
        default: SampleMapByDeviceLayout
    };
})(NetBrain);(function(netBrain) {
    'use strict';

    var internalGlobal = netBrain.ns('LayoutTools.internalGlobal');

    var SampleMapByDeviceLayout = internalGlobal.sampleMapByDeviceLayout.default;

    var sampleMapByDeviceMatchResultsTool = {
        match: matchFun
    };

    function matchFun(currMapData, originMapData) {
        var deviceLayout = new SampleMapByDeviceLayout();

        deviceLayout.layout(currMapData, originMapData);

        var matchedNodes = deviceLayout.matchedNodes;
        var unmatchedNodes = deviceLayout.unmatchedNodes;

        var results = {
            matchedNodes: [],
            unmatchedNodes: []
        };

        matchedNodes.forEach(function(node) {
            results.matchedNodes.push(node.originalNode);
        });

        unmatchedNodes.forEach(function(node) {
            results.unmatchedNodes.push(node.originalNode);
        });

        return results;
    }

    internalGlobal.sampleMapByDeviceMatchResultsTool = {
        default: matchFun
    };
})(NetBrain);(function(netBrain) {
    'use strict';

    var internalGlobal = netBrain.ns('LayoutTools.internalGlobal');

    var BaseNode = internalGlobal.node.default;

    function TagNode(originalNode, locked) {
        BaseNode.apply(this, arguments);

        this.tags = originalNode.tags;
    }

    NgUtil.inherit(TagNode, BaseNode);

    internalGlobal.tagNode = {
        default: TagNode
    };
})(NetBrain);(function(netBrain) {
    'use strict';

    var internalGlobal = netBrain.ns('LayoutTools.internalGlobal');

    var Position = internalGlobal.position.default;

    function TagInfo() {
        this.tagMap = new Map();

        this.nodes = new Map();
    }

    TagInfo.prototype.fromData = function(data, Node) {
        var tagMap = this.tagMap;
        var allNodes = this.nodes;

        _.each(data, function(info) {
            var tagName = info.tag;
            var devices = info.devices;

            var mapNodes = new Map();
            _.each(devices, function(device) {
                var node = new Node(device);

                mapNodes.set(node.id, node);
                allNodes.set(node.id, node);
            });

            tagMap.set(formatTagName(tagName), mapNodes);
        });
    };

    TagInfo.prototype.getNodeSetByTagName = function(tagName) {
        var nodeSet = this.tagMap.get(tagName);

        return nodeSet;
    };

    TagInfo.prototype.getPositionsByTagName = function(tagName) {
        var positions = new Set();

        var nodes = this.tagMap.get(tagName);
        nodes.forEach(function(node) {
            var pos = node.offset;

            positions.add(new Position(pos.x, pos.y));
        });

        return positions;
    };

    TagInfo.prototype.fromMatchedNodes = function(matched) {
        this.clear();

        var tagMap = this.tagMap;
        var allNodes = this.nodes;

        _.each(matched, function(obj) {
            var tagName = obj.tag;

            var mapNodes = new Map();
            _.each(obj.nodes, function(node) {
                mapNodes.set(node.id, node);
                allNodes.set(node.id, node);
            });

            tagMap.set(formatTagName(tagName), mapNodes);
        });
    };

    TagInfo.prototype.clear = function() {
        this.tagMap.clear();
    };

    function formatTagName(tagName) {
        return tagName.toUpperCase();
    }

    internalGlobal.tagInfo = {
        default: TagInfo
    };
})(NetBrain);(function(netBrain) {
    'use strict';

    var internalGlobal = netBrain.ns('LayoutTools.internalGlobal');

    var Position = internalGlobal.position.default;

    function sortNodes(currLocs, originLocs) {
        return reduceCross(currLocs, originLocs);
    }

    function reduceCross(goalLocations, goodLocations) {
        prepareBaseInfo(goalLocations);
        prepareBaseInfo(goodLocations);

        var matchResult = mapping(goalLocations, goodLocations);

        matchResult = matchResult.slice(0, goodLocations.length);

        var result = [];
        _.each(matchResult, function(item) {
            result.push({
                id: item.goalKey,
                position: item.position
            });
        });

        return result;
    }

    function prepareBaseInfo(locations) {
        var center = getCenter(locations);

        locations.forEach(function(node) {
            var vector = node.offset.getOffsetFrom(center);
            node.vector = vector;

            node.rate = Math.atan2(vector.y, vector.x);
        });

        locations.center = center;
    }

    function getCenter(locations) {
        var counter = locations.length;

        var xSum = 0;
        var ySum = 0;

        locations.forEach(function(node) {
            var position = node.offset;
            xSum += position.x;
            ySum += position.y;
        });

        return new Position(xSum / counter, ySum / counter);
    }

    function mapping(goalLocations, goodLocations) {
        var join = [];

        goalLocations.forEach(function(goal) {
            goodLocations.forEach(function(good) {
                join.push({
                    goal: goal.id,
                    good: good.id,
                    diff: getDiff(goal.rate, good.rate),
                    position: good.offset
                });
            });
        });

        join = _.sortBy(join, 'diff');

        var result = [];
        while (join.length > 0) {
            var current = join.shift();
            result.push({
                key: current.good,
                goalKey: current.goal,
                location: current.position.convertToLocation(),
                position: current.position
            });

            join = _.filter(join, function(item) {
                return item.goal !== current.goal && item.good !== current.good;
            });
        }

        return result;
    }

    function getDiff(rate1, rate2) {
        var pi = Math.PI;
        var pi2 = 2 * pi;

        var diff = Math.abs(rate1 - rate2);
        return diff < pi ? diff : pi2 - diff;
    }

    internalGlobal.sampleMapByTagSortNodesTool = {
        default: sortNodes
    };
})(NetBrain);(function(netBrain) {
    'use strict';

    var internalGlobal = netBrain.ns('LayoutTools.internalGlobal');

    /**
     * 先不在这里处理tag位置数量的问题
     *
     * {
     *     matched: {tag: '', nodes: []},
     *     unmatched: []
     * }
     */
    function matchFun(nodes, originMapData) {
        var tagInfo = buildTagInfo(originMapData);
        var unmatchedNodes = [];

        nodes.forEach(function(node) {
            var nodeTags = node.tags;
            if (!_.isArray(nodeTags)) return;

            var matchFlag = false;
            for (var i = nodeTags.length - 1; i >= 0; i--) {
                var tmpTag = nodeTags[i].toUpperCase();

                var tagObj = tagInfo[tmpTag];
                if (tagObj) {
                    tagObj.nodes.push(node);
                    matchFlag = true;
                    break;
                }
            }

            if (!matchFlag) {
                unmatchedNodes.push(node);
            }
        });

        return {
            matched: tagInfo,
            unmatched: unmatchedNodes
        };
    }

    function buildTagInfo(originMapData) {
        var tagInfo = {};
        _.each(originMapData, function(tagObj) {
            var tagName = tagObj.tag;

            tagInfo[tagName.toUpperCase()] = {
                tag: tagName,
                count: tagObj.devices.length,
                nodes: []
            };
        });

        return tagInfo;
    }

    internalGlobal.sampleMapByTagMatchNodeTool = {
        default: matchFun
    };
})(NetBrain);(function(netBrain) {
    'use strict';

    var internalGlobal = netBrain.ns('LayoutTools.internalGlobal');

    var sampleMapByTagMatchNodeTool = internalGlobal.sampleMapByTagMatchNodeTool.default;
    var MapInfo = internalGlobal.mapInfo.default;
    var TagNode = internalGlobal.tagNode.default;

    var sampleMapByTagMatchResultsTool = {
        match: matchFun
    };

    function matchFun(currMapData, originMapData) {
        var result = {
            matchedNodes: [],
            unmatchedNodes: []
        };

        var mapInfo = new MapInfo();
        mapInfo.fromData(currMapData, TagNode);

        var matchInfo = sampleMapByTagMatchNodeTool(mapInfo.nodes, originMapData);

        _.each(matchInfo.matched, function(obj) {
            _.each(obj.nodes, function(node) {
                result.matchedNodes.push(node.originalNode);
            });
        });

        _.each(matchInfo.unmatched, function(node) {
            result.unmatchedNodes.push(node.originalNode);
        });

        return result;
    }

    internalGlobal.sampleMapByTagMatchResultsTool = {
        default: matchFun
    };
})(NetBrain);(function(netBrain) {
    'use strict';

    var internalGlobal = netBrain.ns('LayoutTools.internalGlobal');

    var SampleMapLayout = internalGlobal.sampleMapLayout.default;
    var SymmetricLayout = internalGlobal.symmetricLayout.default;

    var TagNode = internalGlobal.tagNode.default;
    var TagInfo = internalGlobal.tagInfo.default;
    var MapInfo = internalGlobal.mapInfo.default;

    var sampleMapByTagMatchNodeTool = internalGlobal.sampleMapByTagMatchNodeTool.default;
    var sampleMapByTagSortNodesTool = internalGlobal.sampleMapByTagSortNodesTool.default;

    var moveSomeNodesNearOtherNodesTool = internalGlobal.moveSomeNodesNearOtherNodesTool.default;

    function SampleMapByTagLayout() {
        SampleMapLayout.apply(this, arguments);

        this.layoutName = 'SampleMapByTagLayout';
        this.nodeType = TagNode;

        this.currMapInfo = new MapInfo();
        this.currTagInfo = new TagInfo();
        this.originTagInfo = new TagInfo();

        this.matchedNodes = new Map();
        this.unmatchedNodes = new Map();
    }

    NgUtil.inherit(SampleMapByTagLayout, SampleMapLayout);

    SampleMapByTagLayout.prototype.layout = function(currMapData, originMapData) {
        this.convert(currMapData, originMapData);

        // 先进行平衡布局使之节点摆放在合适位置
        var symmetricLayout = new SymmetricLayout();
        symmetricLayout.layout(this.currMapInfo.nodes, this.currMapInfo.links);

        this.updateNodesLocations();

        // var locations = this.generateResult(this.matchedNodes);
        moveSomeNodesNearOtherNodesTool(this.unmatchedNodes, this.matchedNodes);
        var locations = this.getLocations();

        return locations;
    };

    SampleMapByTagLayout.prototype.convert = function(currMapData, originMapData) {
        this.currMapInfo.fromData(currMapData, this.nodeType);

        this.originTagInfo.fromData(originMapData, this.nodeType);

        var matchInfo = sampleMapByTagMatchNodeTool(this.currMapInfo.nodes, originMapData);
        this.currTagInfo.fromMatchedNodes(matchInfo.matched);

        this.diff();
    };

    SampleMapByTagLayout.prototype.diff = function() {
        var matchedNodes = this.matchedNodes;
        var unmatchedNodes = this.unmatchedNodes;

        this.currTagInfo.nodes.forEach(function(node) {
            matchedNodes.set(node.id, node);
        });

        this.currMapInfo.nodes.forEach(function(node) {
            if (!matchedNodes.has(node.id)) {
                unmatchedNodes.set(node.id, node);
            }
        });
    };

    SampleMapByTagLayout.prototype.updateNodesLocations = function() {
        var _this = this;
        var currTagInfo = this.currTagInfo;
        var originTagInfo = this.originTagInfo;

        var noMoveNodes = new Map();

        currTagInfo.tagMap.forEach(function(tagNodeMap, tagName) {
            var originTagNodeSet = originTagInfo.getNodeSetByTagName(tagName);

            var currTagNodeArr = Array.from(tagNodeMap.values());
            var originTagNodeArr = Array.from(originTagNodeSet.values());

            var newLocations = sampleMapByTagSortNodesTool(currTagNodeArr, originTagNodeArr);

            var tempTagNodeMap = new Map();
            tagNodeMap.forEach(function(node) {
                tempTagNodeMap.set(node.id, node);
            });

            _.each(newLocations, function(item) {
                var id = item.id;

                var node = tempTagNodeMap.get(id);
                if (!node) return;

                node.offset.moveTo(item.position);

                tempTagNodeMap.delete(id);
            });

            tempTagNodeMap.forEach(function(node) {
                noMoveNodes.set(node.id, node);
            });
        });

        this.moveNodesToUnmatchedNodes(noMoveNodes);
    };

    SampleMapByTagLayout.prototype.moveNodesToUnmatchedNodes = function(noMoveNodes) {
        var matchedNodes = this.matchedNodes;
        var unmatchedNodes = this.unmatchedNodes;

        noMoveNodes.forEach(function(node) {
            matchedNodes.delete(node.id);

            unmatchedNodes.set(node.id, node);
        });
    };

    internalGlobal.sampleMapByTagLayout = {
        default: SampleMapByTagLayout
    };
})(NetBrain);(
    function(netBrain) {
        'use strict';

        var LayoutTools = netBrain.ns('LayoutTools');
        var apiNS = netBrain.ns('LayoutTools.PublicApi');

        publish(apiNS);

        // return void(0);

        /**
         *  将layoutTools中需要在项目中调用的Model、Tool等以api方式公布出来
         *      1：方便使用
         *      2：方便控制和替换
         *      3：尽量不要公布不必要的和私有的东西
         * @param { object } api : 存放api的名称空间
         * @return { undefined }
         */
        function publish(api) {
            var internal = LayoutTools.internalGlobal;

            api.Models = {
                Position: internal.position.default,
                Node: internal.node.default,
                Link: internal.link.default
            };

            api.Layouts = {
                SymmetricLayout: internal.symmetricLayout.default,
                SymmetricLayoutForIsland: internal.symmetricLayoutForIsland.default,
                TreeLayout: internal.treeLayout.default,
                IslandGroupLayout: internal.islandGroupLayout.default,

                ParallelStyleLayout: internal.parallelStyleLayout.default,
                SymmetryStyleLayout: internal.symmetryStyleLayout.default,
                PetalLayout: internal.petalLayout.default,
                RingLayout: internal.ringLayout.default,

                SampleMapByDeviceLayout: internal.sampleMapByDeviceLayout.default,
                SampleMapByTagLayout: internal.sampleMapByTagLayout.default
            };

            api.Utils = {
                convert: internal.convert.default,
                split: internal.split.default
            };

            api.Tools = {
                rotateTool: internal.rotateTool.default,
                flipTool: internal.flipTool.default,
                layeredTool: internal.layeredTool.default,
                sampleMapByDeviceMatchResultsTool: internal.sampleMapByDeviceMatchResultsTool.default,
                sampleMapByTagMatchResultsTool: internal.sampleMapByTagMatchResultsTool.default
            };

            api.Similarity = {
                calculateSimilarityCoefficient: internal.calculator.calculateSimilarityCoefficient,
                calculateSimilarityCoefficientAdvanced: internal.advancedCalculator.calculateSimilarityCoefficient
            };
        }
    }
)(NetBrain);
(function(netBrain) {
    var nsMap = netBrain.ns('Map');
    var api = netBrain.ns('LayoutTools.PublicApi');

    var IslandGroupLayout = api.Layouts.IslandGroupLayout;
    var SymmetricLayoutForIsland = api.Layouts.SymmetricLayoutForIsland;

    var layoutType = {
        ParallelStyle: 1,
        SymmetryStyle: 2,
        RingStyle: 4,
        SampleMapByTag: 5
    };

    var layoutToolsHelperForC = {};

    layoutToolsHelperForC.layout = function(type, page, param) {

        switch(type) {
            case layoutType.ParallelStyle:
                page = layoutToolsHelperForC.parallelStyleLayout(page, param);
                break;
            case layoutType.SymmetryStyle:
                page = layoutToolsHelperForC.symmetryStyleLayout(page, param);
                break;
            case layoutType.RingStyle:
                page = layoutToolsHelperForC.ringStyleLayout(page, param);
                break;
            case layoutType.SampleMapByTag:
                page = layoutToolsHelperForC.sampleMapByTagLayout(page, param);
                break;
        }

        return page;
    };

    layoutToolsHelperForC.parallelStyleLayout = function(page, templateStyle) {
        var layoutGroupInfo = templateLayeredTool(page, templateStyle);
        var parallelLayout = new api.Layouts.ParallelStyleLayout();

        var linkInfos = getLinkDataArray(page);
        var nodeLocations = parallelLayout.layout(layoutGroupInfo, linkInfos);
        updatePage(page, nodeLocations);

        nodeLocations = doGeoSymmetricLayout(page, parallelLayout.layerGroup.unassignNodes);
        updatePage(page, nodeLocations);

        return page;
    };

    layoutToolsHelperForC.symmetryStyleLayout = function(page, templateStyle) {
        var layoutGroupInfo = templateLayeredTool(page, templateStyle);
        var symmetryLayout = new api.Layouts.SymmetryStyleLayout();

        var linkInfos = getLinkDataArray(page);
        var nodeLocations = symmetryLayout.layout(layoutGroupInfo, linkInfos);
        updatePage(page, nodeLocations);

        nodeLocations = doGeoSymmetricLayout(page, symmetryLayout.layerGroup.unassignNodes);
        updatePage(page, nodeLocations);

        return page;
    };

    layoutToolsHelperForC.ringStyleLayout = function(page, templateStyle) {
        var layoutGroupInfo = templateLayeredTool(page, templateStyle);
        var ringLayout = new api.Layouts.RingLayout();

        var linkInfos = getLinkDataArray(page);
        var nodeLocations = ringLayout.layout(layoutGroupInfo, linkInfos);
        updatePage(page, nodeLocations);

        nodeLocations = doGeoSymmetricLayout(page);
        updatePage(page, nodeLocations);

        return page;
    };

    layoutToolsHelperForC.sampleMapByTagLayout = function(page, originMap) {
        var currMapData = getSampleMapByTagData(page);

        var sampleMapByTagLayout = new api.Layouts.SampleMapByTagLayout();
        var nodeLocations = sampleMapByTagLayout.layout(currMapData, originMap.tags);

        updatePage(page, nodeLocations);

        nodeLocations = doGeoSymmetricLayout(page);
        updatePage(page, nodeLocations);

        return page;
    };

    function templateLayeredTool(page, templateStyle) {
        var nodes = getNodeDataArray(page);
        nodes = addVirtualBounds(nodes);

        var result = api.Tools.layeredTool.layered(nodes, templateStyle);

        return result;
    }

    function updatePage(page, nodeLocations) {
        var nodes = getNodeDataArray(page);
        var nodeMap = {};

        nodes.forEach(function(node) {
            nodeMap[node.key] = node;
        });

        nodeLocations.forEach(function(locInfo) {
            var node = nodeMap[locInfo.key];
            if (node) {
                node.location = locInfo.location;
            }
        });

        return page;
    }

    function addVirtualBounds(nodes) {
        nodes.forEach(function(node) {
            var location = node.location.split(' ');

            node.bounds = {
                left: location[0] / 2,
                top: location[1] / 2,
                right: 120 + location[0] * 1,
                bottom: 60 + location[1] * 1
            };
        });

        return nodes;
    }

    function getNodeDataArray(page) {
        return page.nodeDataArray;
    }

    function getLinkDataArray(page) {
        return page.linkDataArray;
    }

    function getSampleMapByTagData(page) {
        var nodeDataArray = getNodeDataArray(page);
        var linkDataArray = getLinkDataArray(page);

        nodeDataArray = addVirtualBounds(nodeDataArray);

        var data = {
            nodeDataArray: nodeDataArray,
            linkDataArray: linkDataArray
        };

        return data;
    }

    /*** symmetric ***/
    function doGeoSymmetricLayout(page, unlockedNodes) {
        var options = {};

        var newNodes = [];
        unlockedNodes.forEach(function(node) {
            newNodes.push(node.id || node.key);
        });

        options.newNodes = newNodes;

        var layout = new SymmetricLayoutForIsland();
        var originalData = buildOriginalData(page, options);
        var nodeLocations = layoutOriginalData(originalData, layout, options);

        return nodeLocations;
    }

    function buildOriginalData(page, options) {
        var nodeDataArray = getNodeDataArray(page);
        var linkDataArray = getLinkDataArray(page);

        var originalData = {
            nodeKeyProperty: 'key',
            nodeDataArray: nodeDataArray,
            linkDataArray: linkDataArray.filter(function (link) {
                return link &&
                    hasBothEnds(link) && !isPath(link);
            }),
            lockedNodes: []
        };

        updateLockedNodesByNewNodes(originalData, options.newNodes);

        return originalData;
    }

    function layoutOriginalData(originalData, layouter, options) {
        var topoData = api.Utils.convert(originalData, layouter.getNodeType(), options);
        var islandGroup = api.Utils.split(topoData);
        var islandGroupLayouter = new IslandGroupLayout();

        return islandGroupLayouter.layout(islandGroup, layouter);
    }

    function hasBothEnds(link) {
        return Boolean(link.from && link.to);
    }

    var pathEnum = {
        PathNew: 'PathNew',
        TracePath: 'TracePath'
    };
    function isPath(link) {
        return link.category === pathEnum.PathNew ||
            link.category === pathEnum.TracePath;
    }

    function updateLockedNodesByNewNodes(originalData, newNodes) {
        if (!_.isArray(newNodes)) {
            return;
        }

        var key = originalData.nodeKeyProperty;
        var lockedNodes = originalData.lockedNodes;

        var newNodesDic = Object.create(null);

        _.each(newNodes, function (id) {
            newNodesDic[id] = true;
        });

        _.each(originalData.nodeDataArray, function (node) {
            var id = node[key];
            if (!newNodesDic[id]) {
                lockedNodes.push(id);
            }
        });
    }

    nsMap.layoutToolsHelperForC = layoutToolsHelperForC;
})(NetBrain);

exports.layoutToolsHelperForC = NetBrain.ns('Map').layoutToolsHelperForC;