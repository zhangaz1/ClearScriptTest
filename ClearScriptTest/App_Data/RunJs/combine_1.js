'use strict';

if (typeof window === 'undefined') {
    this.window = this;
}

(function () { function n(n) { function t(t, r, e, u, i, o) { for (; i >= 0 && o > i; i += n){ var a = u ? u[i] : i; e = r(e, t[a], a, t) } return e } return function (r, e, u, i) { e = b(e, i, 4); var o = !k(r) && m.keys(r), a = (o || r).length, c = n > 0 ? 0 : a - 1; return arguments.length < 3 && (u = r[o ? o[c] : c], c += n), t(r, e, u, o, c, a) } } function t(n) { return function (t, r, e) { r = x(r, e); for (var u = O(t), i = n > 0 ? 0 : u - 1; i >= 0 && u > i; i += n)if (r(t[i], i, t)) return i; return -1 } } function r(n, t, r) { return function (e, u, i) { var o = 0, a = O(e); if ("number" == typeof i) n > 0 ? o = i >= 0 ? i : Math.max(i + a, o) : a = i >= 0 ? Math.min(i + 1, a) : i + a + 1; else if (r && i && a) return i = r(e, u), e[i] === u ? i : -1; if (u !== u) return i = t(l.call(e, o, a), m.isNaN), i >= 0 ? i + o : -1; for (i = n > 0 ? o : a - 1; i >= 0 && a > i; i += n)if (e[i] === u) return i; return -1 } } function e(n, t) { var r = I.length, e = n.constructor, u = m.isFunction(e) && e.prototype || a, i = "constructor"; for (m.has(n, i) && !m.contains(t, i) && t.push(i); r--;)i = I[r], i in n && n[i] !== u[i] && !m.contains(t, i) && t.push(i) } var u = this, i = u._, o = Array.prototype, a = Object.prototype, c = Function.prototype, f = o.push, l = o.slice, s = a.toString, p = a.hasOwnProperty, h = Array.isArray, v = Object.keys, g = c.bind, y = Object.create, d = function () { }, m = function (n) { return n instanceof m ? n : this instanceof m ? void (this._wrapped = n) : new m(n) }; "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), exports._ = m) : u._ = m, m.VERSION = "1.8.3"; var b = function (n, t, r) { if (t === void 0) return n; switch (null == r ? 3 : r) { case 1: return function (r) { return n.call(t, r) }; case 2: return function (r, e) { return n.call(t, r, e) }; case 3: return function (r, e, u) { return n.call(t, r, e, u) }; case 4: return function (r, e, u, i) { return n.call(t, r, e, u, i) } }return function () { return n.apply(t, arguments) } }, x = function (n, t, r) { return null == n ? m.identity : m.isFunction(n) ? b(n, t, r) : m.isObject(n) ? m.matcher(n) : m.property(n) }; m.iteratee = function (n, t) { return x(n, t, 1 / 0) }; var _ = function (n, t) { return function (r) { var e = arguments.length; if (2 > e || null == r) return r; for (var u = 1; e > u; u++)for (var i = arguments[u], o = n(i), a = o.length, c = 0; a > c; c++){ var f = o[c]; t && r[f] !== void 0 || (r[f] = i[f]) } return r } }, j = function (n) { if (!m.isObject(n)) return {}; if (y) return y(n); d.prototype = n; var t = new d; return d.prototype = null, t }, w = function (n) { return function (t) { return null == t ? void 0 : t[n] } }, A = Math.pow(2, 53) - 1, O = w("length"), k = function (n) { var t = O(n); return "number" == typeof t && t >= 0 && A >= t }; m.each = m.forEach = function (n, t, r) { t = b(t, r); var e, u; if (k(n)) for (e = 0, u = n.length; u > e; e++)t(n[e], e, n); else { var i = m.keys(n); for (e = 0, u = i.length; u > e; e++)t(n[i[e]], i[e], n) } return n }, m.map = m.collect = function (n, t, r) { t = x(t, r); for (var e = !k(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; u > o; o++){ var a = e ? e[o] : o; i[o] = t(n[a], a, n) } return i }, m.reduce = m.foldl = m.inject = n(1), m.reduceRight = m.foldr = n(-1), m.find = m.detect = function (n, t, r) { var e; return e = k(n) ? m.findIndex(n, t, r) : m.findKey(n, t, r), e !== void 0 && e !== -1 ? n[e] : void 0 }, m.filter = m.select = function (n, t, r) { var e = []; return t = x(t, r), m.each(n, function (n, r, u) { t(n, r, u) && e.push(n) }), e }, m.reject = function (n, t, r) { return m.filter(n, m.negate(x(t)), r) }, m.every = m.all = function (n, t, r) { t = x(t, r); for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++){ var o = e ? e[i] : i; if (!t(n[o], o, n)) return !1 } return !0 }, m.some = m.any = function (n, t, r) { t = x(t, r); for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++){ var o = e ? e[i] : i; if (t(n[o], o, n)) return !0 } return !1 }, m.contains = m.includes = m.include = function (n, t, r, e) { return k(n) || (n = m.values(n)), ("number" != typeof r || e) && (r = 0), m.indexOf(n, t, r) >= 0 }, m.invoke = function (n, t) { var r = l.call(arguments, 2), e = m.isFunction(t); return m.map(n, function (n) { var u = e ? t : n[t]; return null == u ? u : u.apply(n, r) }) }, m.pluck = function (n, t) { return m.map(n, m.property(t)) }, m.where = function (n, t) { return m.filter(n, m.matcher(t)) }, m.findWhere = function (n, t) { return m.find(n, m.matcher(t)) }, m.max = function (n, t, r) { var e, u, i = -1 / 0, o = -1 / 0; if (null == t && null != n) { n = k(n) ? n : m.values(n); for (var a = 0, c = n.length; c > a; a++)e = n[a], e > i && (i = e) } else t = x(t, r), m.each(n, function (n, r, e) { u = t(n, r, e), (u > o || u === -1 / 0 && i === -1 / 0) && (i = n, o = u) }); return i }, m.min = function (n, t, r) { var e, u, i = 1 / 0, o = 1 / 0; if (null == t && null != n) { n = k(n) ? n : m.values(n); for (var a = 0, c = n.length; c > a; a++)e = n[a], i > e && (i = e) } else t = x(t, r), m.each(n, function (n, r, e) { u = t(n, r, e), (o > u || 1 / 0 === u && 1 / 0 === i) && (i = n, o = u) }); return i }, m.shuffle = function (n) { for (var t, r = k(n) ? n : m.values(n), e = r.length, u = Array(e), i = 0; e > i; i++)t = m.random(0, i), t !== i && (u[i] = u[t]), u[t] = r[i]; return u }, m.sample = function (n, t, r) { return null == t || r ? (k(n) || (n = m.values(n)), n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, t)) }, m.sortBy = function (n, t, r) { return t = x(t, r), m.pluck(m.map(n, function (n, r, e) { return { value: n, index: r, criteria: t(n, r, e) } }).sort(function (n, t) { var r = n.criteria, e = t.criteria; if (r !== e) { if (r > e || r === void 0) return 1; if (e > r || e === void 0) return -1 } return n.index - t.index }), "value") }; var F = function (n) { return function (t, r, e) { var u = {}; return r = x(r, e), m.each(t, function (e, i) { var o = r(e, i, t); n(u, e, o) }), u } }; m.groupBy = F(function (n, t, r) { m.has(n, r) ? n[r].push(t) : n[r] = [t] }), m.indexBy = F(function (n, t, r) { n[r] = t }), m.countBy = F(function (n, t, r) { m.has(n, r) ? n[r]++ : n[r] = 1 }), m.toArray = function (n) { return n ? m.isArray(n) ? l.call(n) : k(n) ? m.map(n, m.identity) : m.values(n) : [] }, m.size = function (n) { return null == n ? 0 : k(n) ? n.length : m.keys(n).length }, m.partition = function (n, t, r) { t = x(t, r); var e = [], u = []; return m.each(n, function (n, r, i) { (t(n, r, i) ? e : u).push(n) }), [e, u] }, m.first = m.head = m.take = function (n, t, r) { return null == n ? void 0 : null == t || r ? n[0] : m.initial(n, n.length - t) }, m.initial = function (n, t, r) { return l.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t))) }, m.last = function (n, t, r) { return null == n ? void 0 : null == t || r ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - t)) }, m.rest = m.tail = m.drop = function (n, t, r) { return l.call(n, null == t || r ? 1 : t) }, m.compact = function (n) { return m.filter(n, m.identity) }; var S = function (n, t, r, e) { for (var u = [], i = 0, o = e || 0, a = O(n); a > o; o++){ var c = n[o]; if (k(c) && (m.isArray(c) || m.isArguments(c))) { t || (c = S(c, t, r)); var f = 0, l = c.length; for (u.length += l; l > f;)u[i++] = c[f++] } else r || (u[i++] = c) } return u }; m.flatten = function (n, t) { return S(n, t, !1) }, m.without = function (n) { return m.difference(n, l.call(arguments, 1)) }, m.uniq = m.unique = function (n, t, r, e) { m.isBoolean(t) || (e = r, r = t, t = !1), null != r && (r = x(r, e)); for (var u = [], i = [], o = 0, a = O(n); a > o; o++){ var c = n[o], f = r ? r(c, o, n) : c; t ? (o && i === f || u.push(c), i = f) : r ? m.contains(i, f) || (i.push(f), u.push(c)) : m.contains(u, c) || u.push(c) } return u }, m.union = function () { return m.uniq(S(arguments, !0, !0)) }, m.intersection = function (n) { for (var t = [], r = arguments.length, e = 0, u = O(n); u > e; e++){ var i = n[e]; if (!m.contains(t, i)) { for (var o = 1; r > o && m.contains(arguments[o], i); o++); o === r && t.push(i) } } return t }, m.difference = function (n) { var t = S(arguments, !0, !0, 1); return m.filter(n, function (n) { return !m.contains(t, n) }) }, m.zip = function () { return m.unzip(arguments) }, m.unzip = function (n) { for (var t = n && m.max(n, O).length || 0, r = Array(t), e = 0; t > e; e++)r[e] = m.pluck(n, e); return r }, m.object = function (n, t) { for (var r = {}, e = 0, u = O(n); u > e; e++)t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1]; return r }, m.findIndex = t(1), m.findLastIndex = t(-1), m.sortedIndex = function (n, t, r, e) { r = x(r, e, 1); for (var u = r(t), i = 0, o = O(n); o > i;){ var a = Math.floor((i + o) / 2); r(n[a]) < u ? i = a + 1 : o = a } return i }, m.indexOf = r(1, m.findIndex, m.sortedIndex), m.lastIndexOf = r(-1, m.findLastIndex), m.range = function (n, t, r) { null == t && (t = n || 0, n = 0), r = r || 1; for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; e > i; i++ , n += r)u[i] = n; return u }; var E = function (n, t, r, e, u) { if (!(e instanceof t)) return n.apply(r, u); var i = j(n.prototype), o = n.apply(i, u); return m.isObject(o) ? o : i }; m.bind = function (n, t) { if (g && n.bind === g) return g.apply(n, l.call(arguments, 1)); if (!m.isFunction(n)) throw new TypeError("Bind must be called on a function"); var r = l.call(arguments, 2), e = function () { return E(n, e, t, this, r.concat(l.call(arguments))) }; return e }, m.partial = function (n) { var t = l.call(arguments, 1), r = function () { for (var e = 0, u = t.length, i = Array(u), o = 0; u > o; o++)i[o] = t[o] === m ? arguments[e++] : t[o]; for (; e < arguments.length;)i.push(arguments[e++]); return E(n, r, this, this, i) }; return r }, m.bindAll = function (n) { var t, r, e = arguments.length; if (1 >= e) throw new Error("bindAll must be passed function names"); for (t = 1; e > t; t++)r = arguments[t], n[r] = m.bind(n[r], n); return n }, m.memoize = function (n, t) { var r = function (e) { var u = r.cache, i = "" + (t ? t.apply(this, arguments) : e); return m.has(u, i) || (u[i] = n.apply(this, arguments)), u[i] }; return r.cache = {}, r }, m.delay = function (n, t) { var r = l.call(arguments, 2); return setTimeout(function () { return n.apply(null, r) }, t) }, m.defer = m.partial(m.delay, m, 1), m.throttle = function (n, t, r) { var e, u, i, o = null, a = 0; r || (r = {}); var c = function () { a = r.leading === !1 ? 0 : m.now(), o = null, i = n.apply(e, u), o || (e = u = null) }; return function () { var f = m.now(); a || r.leading !== !1 || (a = f); var l = t - (f - a); return e = this, u = arguments, 0 >= l || l > t ? (o && (clearTimeout(o), o = null), a = f, i = n.apply(e, u), o || (e = u = null)) : o || r.trailing === !1 || (o = setTimeout(c, l)), i } }, m.debounce = function (n, t, r) { var e, u, i, o, a, c = function () { var f = m.now() - o; t > f && f >= 0 ? e = setTimeout(c, t - f) : (e = null, r || (a = n.apply(i, u), e || (i = u = null))) }; return function () { i = this, u = arguments, o = m.now(); var f = r && !e; return e || (e = setTimeout(c, t)), f && (a = n.apply(i, u), i = u = null), a } }, m.wrap = function (n, t) { return m.partial(t, n) }, m.negate = function (n) { return function () { return !n.apply(this, arguments) } }, m.compose = function () { var n = arguments, t = n.length - 1; return function () { for (var r = t, e = n[t].apply(this, arguments); r--;)e = n[r].call(this, e); return e } }, m.after = function (n, t) { return function () { return --n < 1 ? t.apply(this, arguments) : void 0 } }, m.before = function (n, t) { var r; return function () { return --n > 0 && (r = t.apply(this, arguments)), 1 >= n && (t = null), r } }, m.once = m.partial(m.before, 2); var M = !{ toString: null }.propertyIsEnumerable("toString"), I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"]; m.keys = function (n) { if (!m.isObject(n)) return []; if (v) return v(n); var t = []; for (var r in n) m.has(n, r) && t.push(r); return M && e(n, t), t }, m.allKeys = function (n) { if (!m.isObject(n)) return []; var t = []; for (var r in n) t.push(r); return M && e(n, t), t }, m.values = function (n) { for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++)e[u] = n[t[u]]; return e }, m.mapObject = function (n, t, r) { t = x(t, r); for (var e, u = m.keys(n), i = u.length, o = {}, a = 0; i > a; a++)e = u[a], o[e] = t(n[e], e, n); return o }, m.pairs = function (n) { for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++)e[u] = [t[u], n[t[u]]]; return e }, m.invert = function (n) { for (var t = {}, r = m.keys(n), e = 0, u = r.length; u > e; e++)t[n[r[e]]] = r[e]; return t }, m.functions = m.methods = function (n) { var t = []; for (var r in n) m.isFunction(n[r]) && t.push(r); return t.sort() }, m.extend = _(m.allKeys), m.extendOwn = m.assign = _(m.keys), m.findKey = function (n, t, r) { t = x(t, r); for (var e, u = m.keys(n), i = 0, o = u.length; o > i; i++)if (e = u[i], t(n[e], e, n)) return e }, m.pick = function (n, t, r) { var e, u, i = {}, o = n; if (null == o) return i; m.isFunction(t) ? (u = m.allKeys(o), e = b(t, r)) : (u = S(arguments, !1, !1, 1), e = function (n, t, r) { return t in r }, o = Object(o)); for (var a = 0, c = u.length; c > a; a++){ var f = u[a], l = o[f]; e(l, f, o) && (i[f] = l) } return i }, m.omit = function (n, t, r) { if (m.isFunction(t)) t = m.negate(t); else { var e = m.map(S(arguments, !1, !1, 1), String); t = function (n, t) { return !m.contains(e, t) } } return m.pick(n, t, r) }, m.defaults = _(m.allKeys, !0), m.create = function (n, t) { var r = j(n); return t && m.extendOwn(r, t), r }, m.clone = function (n) { return m.isObject(n) ? m.isArray(n) ? n.slice() : m.extend({}, n) : n }, m.tap = function (n, t) { return t(n), n }, m.isMatch = function (n, t) { var r = m.keys(t), e = r.length; if (null == n) return !e; for (var u = Object(n), i = 0; e > i; i++){ var o = r[i]; if (t[o] !== u[o] || !(o in u)) return !1 } return !0 }; var N = function (n, t, r, e) { if (n === t) return 0 !== n || 1 / n === 1 / t; if (null == n || null == t) return n === t; n instanceof m && (n = n._wrapped), t instanceof m && (t = t._wrapped); var u = s.call(n); if (u !== s.call(t)) return !1; switch (u) { case "[object RegExp]": case "[object String]": return "" + n == "" + t; case "[object Number]": return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t; case "[object Date]": case "[object Boolean]": return +n === +t }var i = "[object Array]" === u; if (!i) { if ("object" != typeof n || "object" != typeof t) return !1; var o = n.constructor, a = t.constructor; if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in t) return !1 } r = r || [], e = e || []; for (var c = r.length; c--;)if (r[c] === n) return e[c] === t; if (r.push(n), e.push(t), i) { if (c = n.length, c !== t.length) return !1; for (; c--;)if (!N(n[c], t[c], r, e)) return !1 } else { var f, l = m.keys(n); if (c = l.length, m.keys(t).length !== c) return !1; for (; c--;)if (f = l[c], !m.has(t, f) || !N(n[f], t[f], r, e)) return !1 } return r.pop(), e.pop(), !0 }; m.isEqual = function (n, t) { return N(n, t) }, m.isEmpty = function (n) { return null == n ? !0 : k(n) && (m.isArray(n) || m.isString(n) || m.isArguments(n)) ? 0 === n.length : 0 === m.keys(n).length }, m.isElement = function (n) { return !(!n || 1 !== n.nodeType) }, m.isArray = h || function (n) { return "[object Array]" === s.call(n) }, m.isObject = function (n) { var t = typeof n; return "function" === t || "object" === t && !!n }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (n) { m["is" + n] = function (t) { return s.call(t) === "[object " + n + "]" } }), m.isArguments(arguments) || (m.isArguments = function (n) { return m.has(n, "callee") }), "function" != typeof /./ && "object" != typeof Int8Array && (m.isFunction = function (n) { return "function" == typeof n || !1 }), m.isFinite = function (n) { return isFinite(n) && !isNaN(parseFloat(n)) }, m.isNaN = function (n) { return m.isNumber(n) && n !== +n }, m.isBoolean = function (n) { return n === !0 || n === !1 || "[object Boolean]" === s.call(n) }, m.isNull = function (n) { return null === n }, m.isUndefined = function (n) { return n === void 0 }, m.has = function (n, t) { return null != n && p.call(n, t) }, m.noConflict = function () { return u._ = i, this }, m.identity = function (n) { return n }, m.constant = function (n) { return function () { return n } }, m.noop = function () { }, m.property = w, m.propertyOf = function (n) { return null == n ? function () { } : function (t) { return n[t] } }, m.matcher = m.matches = function (n) { return n = m.extendOwn({}, n), function (t) { return m.isMatch(t, n) } }, m.times = function (n, t, r) { var e = Array(Math.max(0, n)); t = b(t, r, 1); for (var u = 0; n > u; u++)e[u] = t(u); return e }, m.random = function (n, t) { return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1)) }, m.now = Date.now || function () { return (new Date).getTime() }; var B = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" }, T = m.invert(B), R = function (n) { var t = function (t) { return n[t] }, r = "(?:" + m.keys(n).join("|") + ")", e = RegExp(r), u = RegExp(r, "g"); return function (n) { return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, t) : n } }; m.escape = R(B), m.unescape = R(T), m.result = function (n, t, r) { var e = null == n ? void 0 : n[t]; return e === void 0 && (e = r), m.isFunction(e) ? e.call(n) : e }; var q = 0; m.uniqueId = function (n) { var t = ++q + ""; return n ? n + t : t }, m.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }; var K = /(.)^/, z = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" }, D = /\\|'|\r|\n|\u2028|\u2029/g, L = function (n) { return "\\" + z[n] }; m.template = function (n, t, r) { !t && r && (t = r), t = m.defaults({}, t, m.templateSettings); var e = RegExp([(t.escape || K).source, (t.interpolate || K).source, (t.evaluate || K).source].join("|") + "|$", "g"), u = 0, i = "__p+='"; n.replace(e, function (t, r, e, o, a) { return i += n.slice(u, a).replace(D, L), u = a + t.length, r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"), t }), i += "';\n", t.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n"; try { var o = new Function(t.variable || "obj", "_", i) } catch (a) { throw a.source = i, a } var c = function (n) { return o.call(this, n, m) }, f = t.variable || "obj"; return c.source = "function(" + f + "){\n" + i + "}", c }, m.chain = function (n) { var t = m(n); return t._chain = !0, t }; var P = function (n, t) { return n._chain ? m(t).chain() : t }; m.mixin = function (n) { m.each(m.functions(n), function (t) { var r = m[t] = n[t]; m.prototype[t] = function () { var n = [this._wrapped]; return f.apply(n, arguments), P(this, r.apply(m, n)) } }) }, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (n) { var t = o[n]; m.prototype[n] = function () { var r = this._wrapped; return t.apply(r, arguments), "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0], P(this, r) } }), m.each(["concat", "join", "slice"], function (n) { var t = o[n]; m.prototype[n] = function () { return P(this, t.apply(this._wrapped, arguments)) } }), m.prototype.value = function () { return this._wrapped }, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function () { return "" + this._wrapped }, "function" == typeof define && define.amd && define("underscore", [], function () { return m }) }).call(this);
//# sourceMappingURL=underscore-min.map

'use strict';

// ////////////////////DocType//////////////////////////////////
var NgUtil = function () { };

NgUtil.inherit = function (subclass, baseclass) {
    function Subproto() { }
    Subproto.prototype = baseclass.prototype;
    subclass.prototype = new Subproto();
    subclass.prototype.constructor = subclass;
};


NgUtil.isValidID = function (strGuid) {
    if (strGuid == null) {
        return false;
    }

    if (strGuid === '00000000-0000-0000-0000-000000000000') {
        return false;
    }

    return true;
};

NgUtil.getGUID = function () {
    // automatically generate a new GUID
    return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[x]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

NgUtil.cloneJson = function (obj) {
    return jQuery.extend(true, {}, obj);
};

NgUtil.cloneJsonUseJQuery = function (obj) {
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

NgUtil.getUniqueStr = function (str) {
    var guid = NgUtil.getGUID();
    if (str == null) {
        return guid;
    }
    return guid + ' ' + str;
};

NgUtil.getSafeFonts = function () {
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

NgUtil.repeatStr = function (str, repeatTimes) {
    var rtn = '';
    for (var i = 0; i < repeatTimes; i += 1) {
        rtn += str;
    }
    return rtn;
};

NgUtil.getRefreshWindowCallBack = function () { };

NgUtil.isExistInList = function (ls, item) {
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
NgUtil.isSuccess = function (data) {
    data = data.operationResult || data;
    return data && data.ResultCode === 0;
};


NgUtil.contentType = {
    CSV: 'text/csv',
    ZIP: 'application/zip',
    JSON: 'application/json'
};

NgUtil.doDownloadHtml5 = function (fileContent, fileName, fileType) {
    var downloadLink = document.createElement('a');
    downloadLink.download = fileName;
    downloadLink.href = 'data:' + fileType + ';charset=utf-8,' + encodeURIComponent(fileContent);
    downloadLink.onclick = function () {
        document.body.appendChild(downloadLink);
    };
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
};


NgUtil.doDownload = function (fileContent, fileName, fileType) {
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(new Blob([fileContent], { type: fileType }), fileName);
    } else {
        var blob = new Blob([fileContent], { type: 'text/csv' });
        saveAs(blob, fileName);
    }
};

NgUtil.doDownloadFromBase64 = function (data, fileName, fileType) {
    var byteCharacters = atob(data);
    var byteContent = [byteCharacters.length];
    for (var i = 0; i < byteCharacters.length; i += 1) {
        byteContent[i] = byteCharacters.charCodeAt(i);
    }
    var fileContent = new Uint8Array(byteContent);
    NgUtil.doDownload(fileContent, fileName, fileType);
};

NgUtil.UrlInstance = function () {
    var TENANT_ID_KEY = 't';
    var DOMAIN_ID_KEY = 'd';
    var _urlInstance = new URI(window.location.href);

    return {
        getInstanceObj: function () {
            return _urlInstance;
        },
        getQuery: function (key) {
            if (_urlInstance.hasQuery(key)) {
                return _urlInstance.query(true)[key];
            }
            return undefined;
        },
        getTenantId: function () {
            return this.getQuery(TENANT_ID_KEY);
        },
        getDomainId: function () {
            return this.getQuery(DOMAIN_ID_KEY);
        }
    };
};

// path解析不完善: 'a.b.c[0].d' 应写成 'a.b.c.0.d'
NgUtil.getValueFromObjAndPath = function (obj, path, defaultValue) {
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

NgUtil.loadImages = function ($q, imgUrls) {
    if (!$q) {
        throw new Error('arguments error.');
    }

    var promises = [];

    imgUrls.forEach(function (url) {
        var defer = $q.defer();

        var img = new Image();
        img.onload = function () {
            defer.resolve();
        };
        img.onerror = function () {
            defer.resolve();
        };
        img.src = url;

        promises.push(defer.promise);
    });

    return $q.all(promises);
};

﻿(function (window) {
    'use strict';

    var NetBrain = window.NetBrain || {};
    NetBrain.ns = function (namespace) {
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
 })((typeof window) !== 'undefined' ? window : global);

 (function (netBrain) {
     'use strict';

     netBrain.ns('LayoutTools');

     //angular.module('nb.layoutTools', []);
 })(NetBrain);

 (function (netBrain) {
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

 (function (netBrain) {
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




















 (function (netBrain) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
                 value: function () {
                     return [this.x, this.y].join(',');
                 }
             }, {
                 key: 'getCopy',
                 value: function () {
                     return new Point(this.x, this.y);
                 }
             }, {
                 key: 'convertToLocation',
                 value: function () {
                     return Math.floor(this.x) + ' ' + Math.floor(this.y);
                 }
             }, {
                 key: 'distance',
                 value: function () {
                     return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
                 }
             }, {
                 key: 'zoom',
                 value: function (scale) {
                     this.x *= scale;
                     this.y *= scale;
                     return this;
                 }
             }, {
                 key: 'rotate',
                 value: function (pt, angle) {
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
                 value: function (pt, isHorizontal) {
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
                 value: function (location) {
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
 (function (netBrain) {
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
                 value: function () {
                     return new Position(this.x, this.y);
                 }
             }, {
                 key: 'offset',
                 value: function (_offset) {
                     this.x += _offset.x;
                     this.y += _offset.y;
                     return this;
                 }
             }, {
                 key: 'getOffsetFrom',
                 value: function (spot) {
                     return new Position(this.x - spot.x, this.y - spot.y);
                 }
             }, {
                 key: 'getOffsetTo',
                 value: function (spot) {
                     return new Position(spot.x - this.x, spot.y - this.y);
                 }
             }, {
                 key: 'moveTo',
                 value: function (point) {
                     this.x = point.x;
                     this.y = point.y;
                     return this;
                 }
             }, {
                 key: 'getCounterforce',
                 value: function () {
                     return new Position(-this.x, -this.y);
                 }
             }], [{
                 key: 'parseFromLocation',
                 value: function (location) {
                     var point = _point2.default.parseFromLocation(location);
                     return new Position(point.x, point.y);
                 }
             }]);

             return Position;
         })(_point2.default);

         exports.default = Position;
     });
 })(NetBrain);
 (function (netBrain) {
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
         var Size = function () {
             var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
             var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

             _classCallCheck(this, Size);

             this.width = width;
             this.height = height;
         };

         exports.default = Size;
     });
 })(NetBrain);
 (function (netBrain) {
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
                 value: function (pt) {
                     return this.left <= pt.x && this.right >= pt.x && this.top <= pt.y && this.bottom >= pt.y;
                 }
             }]);

             return Rect;
         })();

         exports.default = Rect;
     });
 })(NetBrain);
 (function (netBrain) {
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
                 value: function (pt) {
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
                 value: function (bd, spot) {
                     return new Bounds(bd, spot);
                 }
             }]);

             return Bounds;
         })(_rect2.default);

         exports.default = Bounds;
     });
 })(NetBrain);
 (function (netBrain) {
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
             rotateDown: function (target) {
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
 (function (netBrain) {
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

                 var perNode = function (node) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
 (function (netBrain) {
     'use strict';

     var internalGlobal = netBrain.ns('LayoutTools.internalGlobal');

     var Position = internalGlobal.position.default;

     var boundsTool = internalGlobal.boundsTool.default;

     function moveSomeNodesNearOtherNodes(nodes, destNodes) {
         var bounds = boundsTool.calcBounds(_.filter(Array.from(destNodes.values()), function (node) {
             return node.canMove();
         }));
         var centerX = bounds.center.x;
         var centerY = bounds.center.y;

         var r = bounds.right - centerX;
         nodes.forEach(function (node) {
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
 })(NetBrain); (function (netBrain) {
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
         var Link = function (originalLink) {
             _classCallCheck(this, Link);

             this.from = originalLink.from;
             this.to = originalLink.to;

             this.originalLink = originalLink;
         };

         exports.default = Link;
     });
 })(NetBrain);
 (function (netBrain) {
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
                 value: function (link) {
                     this.fromLinks.add(link);
                     this.allLinks.add(link);
                 }
             }, {
                 key: 'addToLink',
                 value: function (link) {
                     this.toLinks.add(link);
                     this.allLinks.add(link);
                 }
             }, {
                 key: 'addFromNeighbor',
                 value: function (neighbor) {
                     this.fromNeighbors.set(neighbor.id, neighbor);
                     this.allNeighbors.set(neighbor.id, neighbor);
                 }
             }, {
                 key: 'addToNeighbor',
                 value: function (neighbor) {
                     this.toNeighbors.set(neighbor.id, neighbor);
                     this.allNeighbors.set(neighbor.id, neighbor);
                 }
             }, {
                 key: 'canMove',
                 value: function () {
                     return !this.pinned && !this.locked;
                 }
             }, {
                 key: 'updatePositionByIslandPosition',
                 value: function (islandPosition) {
                     var position = new _position2.default(islandPosition.x, islandPosition.y);
                     position.offset(this.offset);
                     this.offset = position;
                 }
             }, {
                 key: 'toLocJson',
                 value: function () {
                     return {
                         key: this.id,
                         location: this.offset.convertToLocation(),
                         position: this.offset.getCopy()
                     };
                 }
             }, {
                 key: 'offset',
                 get: function () {
                     return this._offset;
                 },
                 set: function (offset) {
                     this._offset = offset;
                 }
             }, {
                 key: 'fixed',
                 get: function () {
                     return !this.canMove();
                 }
             }]);

             return Node;
         })();

         exports.default = Node;
     });
 })(NetBrain);
 (function (netBrain) {
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
 (function (netBrain) {
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
                 value: function () {
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
                 value: function (subTree) {
                     this.resetCacheInfo();

                     this.subTrees.set(subTree.id, subTree);
                     subTree.parentTree = this;

                     this.addToAllSubTrees(subTree);
                 }
             }, {
                 key: 'removeSubTree',
                 value: function (subTree) {
                     this.resetCacheInfo();

                     this.subTrees.delete(subTree.id);
                     subTree.parentTree = null;

                     this.removeFromAllSubTree(subTree);
                 }
             }, {
                 key: 'addToAllSubTrees',
                 value: function (subTree) {
                     this.resetCacheInfo();

                     this.allSubTrees.set(subTree.id, subTree);

                     if (this.parentTree) {
                         this.parentTree.addToAllSubTrees(subTree);
                     }
                 }
             }, {
                 key: 'removeFromAllSubTree',
                 value: function (subTree) {
                     this.resetCacheInfo();

                     this.allSubTrees.delete(subTree.id);

                     if (this.parentTree) {
                         this.parentTree.removeFromAllSubTree(subTree);
                     }
                 }
             }, {
                 key: 'getHighestSubTree',
                 value: function () {
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
                 value: function () {
                     this.clearElseOffsetCache();
                     this._elseOffsets = [];
                     this.hasSetElseOffset = false;
                 }
             }, {
                 key: 'clearElseOffsetCache',
                 value: function () {
                     this._elseOffset = NaN;
                     this.parentTree && this.parentTree.clearElseOffsetCache();
                 }
             }, {
                 key: 'horizontalMove',
                 value: function (xOffset) {
                     var offset = new _position2.default(xOffset, 0);
                     offsetTree(this, offset);
                 }
             }, {
                 key: 'width',
                 get: function () {
                     if (isNaN(this._width)) {
                         this._width = calcWidth(this);
                     }
                     return this._width;
                 }
             }, {
                 key: 'radianWidthRate',
                 get: function () {
                     if (isNaN(this._radianWidthRate)) {
                         this._radianWidthRate = calcRadianWidthRate(this);
                     }

                     return this._radianWidthRate;
                 }
             }, {
                 key: 'radianWidth',
                 get: function () {
                     if (isNaN(this._radianWidth)) {
                         this._radianWidth = calcRadianWidth(this);
                     }

                     // TODO: for test
                     this.node.originalNode.radianWidth = this._radianWidth.toFixed(3);

                     return this._radianWidth;
                 }
             }, {
                 key: 'radianStep',
                 get: function () {
                     if (isNaN(this._radianStep)) {
                         this._radianStep = calcRadianStep(this);
                     }
                     return this._radianStep;
                 }
             }, {
                 key: 'level',
                 get: function () {
                     if (isNaN(this._level)) {
                         this._level = calcLevel(this);
                     }
                     return this._level;
                 }
             }, {
                 key: 'maxLevel',
                 get: function () {
                     if (isNaN(this._maxLevel)) {
                         this._maxLevel = calcMaxLevel(this);
                     }
                     return this._maxLevel;
                 }
             }, {
                 key: 'isRootTree',
                 get: function () {
                     return this === this.rootTree;
                 }
             }, {
                 key: 'height',
                 get: function () {
                     if (isNaN(this._height)) {
                         this._height = calcHeight(this);
                     }
                     return this._height;
                 }
             }, {
                 key: 'offset',
                 get: function () {
                     return this.node.offset;
                 },
                 set: function (value) {
                     this.node.offset = value;
                 }
             }, {
                 key: 'elseOffset',
                 get: function () {
                     if (isNaN(this._elseOffset)) {
                         var elseOffset = calcElseOffset(this._elseOffsets);

                         elseOffset = getMaxAbsOffset(elseOffset, this.subTrees.values());

                         this._elseOffset = elseOffset;
                     }

                     // TODO: for test
                     // this.node.originalNode.elseOffset = this._elseOffset.toFixed(1);

                     return this._elseOffset;
                 },
                 set: function (value) {
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
 (function (netBrain) {
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
         var TopoData = function (options) {
             _classCallCheck(this, TopoData);

             this.options = Object.assign({}, _defaultOptions2.default, options);

             this.nodes = new Map();
             this.links = new Set();
         };

         exports.default = TopoData;
     });
 })(NetBrain);
 (function (netBrain) {
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
                 value: function (direction) {
                     (0, _rotateIsland2.default)(this, direction);
                 }
             }, {
                 key: 'moveSpot',
                 value: function () {
                     if (!this.isAbsolute) {
                         (0, _moveIslandSpot2.default)(this, this.getSpot());
                     }
                 }
             }, {
                 key: 'annexAnotherSingleIsland',
                 value: function (anotherIsland) {
                     this._annexNodes(anotherIsland);
                 }
             }, {
                 key: 'annexAnotherAbsolutIsland',
                 value: function (anotherIsland) {
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
                 value: function (link, anotherIsland) {
                     var fromNode = this.nodes.get(link.from);
                     var toNode = anotherIsland.nodes.get(link.to);

                     fromNode.addToNeighbor(toNode);
                     toNode.addFromNeighbor(fromNode);
                 }
             }, {
                 key: '_annexNodes',
                 value: function (anotherIsland) {
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
                 value: function (anotherIsland) {
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
                 value: function () {
                     return (0, _getIslandArea2.default)(this);
                 }
             }, {
                 key: 'getSpot',
                 value: function () {
                     return this.getArea().spot;
                 }
             }, {
                 key: 'getSize',
                 value: function () {
                     return this.getArea().size;
                 }
             }, {
                 key: 'getAnyFixedNode',
                 value: function () {
                     return this.fixedNodes.values().next().value || null;
                 }
             }, {
                 key: '_watchNodes',
                 value: function () {
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
                 get: function () {
                     return this._position;
                 },
                 set: function (value) {
                     this._position = value;
                     updateAllNodesPosition(this.nodes.values(), value);
                 }
             }, {
                 key: 'isAbsolute',
                 get: function () {
                     return this.getAnyFixedNode() !== null;
                 }
             }, {
                 key: 'isSingleNodeIsland',
                 get: function () {
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
 (function (netBrain) {
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
                 value: function () {
                     return this.absoluteIsland;
                 }
             }, {
                 key: 'getSanderIsland',
                 value: function () {
                     return this.sanderIsland;
                 }
             }, {
                 key: 'getCommonIslands',
                 value: function () {
                     return [].concat(_toConsumableArray(this.islands));
                     // return _.difference(
                     //     [...this.islands],
                     //     [this.getAbsoluteIsland()],
                     // );
                 }
             }, {
                 key: 'getAllIslands',
                 value: function () {
                     var islands = [this.absoluteIsland, this.sanderIsland, [].concat(_toConsumableArray(this.islands))];

                     return _.flatten(islands, true).filter(function (i) {
                         return i;
                     });
                 }
             }, {
                 key: '_watchIslands',
                 value: function () {
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
 (function (netBrain) {
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
                 value: function () {
                     throw new Error(this.layoutName + ' should be override');
                 }
             }, {
                 key: 'getLayoutName',
                 value: function () {
                     return this.layoutName;
                 }
             }, {
                 key: 'getNodeType',
                 value: function () {
                     return this.nodeType;
                 }
             }, {
                 key: 'generateResult',
                 value: function (nodes) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
                 value: function (island) {
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
 (function (netBrain) {
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
                 value: function (islandGroup, layouter) {
                     layoutAbsoluteIsland(islandGroup, layouter);
                     layoutSanderIsland(islandGroup);
                     layoutEachCommonIsland(islandGroup, layouter);

                     layoutIslands(islandGroup);

                     return this.generateResult(islandGroup);
                 }
             }, {
                 key: 'generateResult',
                 value: function (islandGroup) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
             var predicate = function (tree) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
                 value: function (island) {
                     var tree = TreeLayout.doTreeLayout(island);
                     var direction = tree.options.direction;
                     island.rotateDirection(direction);

                     return this.generateResult(island.nodes);
                 }
             }, {
                 key: 'getLayoutName',
                 value: function () {
                     return this.layoutName;
                 }
             }, {
                 key: 'getNodeType',
                 value: function () {
                     return this.nodeType;
                 }
             }], [{
                 key: 'doTreeLayout',
                 value: function (island) {
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
 (function (netBrain) {
     var qmap = netBrain.ns('Map');

     var defaultDistance = 140;
     var defaultMaxEjectDistance = 600;

     var customConfig = [
         ['DEVICE', 'DEVICE', { dis: 210 }],
         ['DEVICE', 'SITE', { dis: 250, maxEjectDis: 1000 }],
         ['DEVICE', 'DMVPN', { dis: 210 }],
         ['DEVICE', 'WAN', { dis: 210 }],
         ['DEVICE', 'MPLS', { dis: 250, maxEjectDis: 1000 }],
         ['SITE', 'MPLS', { dis: 300, maxEjectDis: 1500 }],
         ['SITE', 'SITE', { dis: 300, maxEjectDis: 1500 }]
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

         if (netBrain.Map.CategoryMgr.isDeviceCategory(node.category)) {
             let devType = node.devType;
             if (devType === 1024) {
                 type = 'MPLS';
             } else {
                 type = 'DEVICE';
             }
         } else if (netBrain.Map.CategoryMgr.isMedia(node.category)) {
             let devType = node.devType;
             if (devType) {
                 type = devType.toUpperCase();
             } else {
                 type = 'MEDIA';
             }
         } else if (netBrain.Map.CategoryMgr.isSite(node.category)) {
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


 })(NetBrain); (function (netBrain) {
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
 (function (netBrain) {
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
                 value: function (nodes, links, options) {
                     this.layoutWithOutResult(nodes, links, options);

                     var result = this.generateResult(nodes);
                     return result;
                 }
             }, {
                 key: 'layoutWithOutResult',
                 value: function (nodes, links, options) {
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
                 value: function (nodes, links, options, nodeArray) {
                     this.offsetXObject = {};
                     this.offsetYObject = {};

                     this.calcEjectBetweenNodes(nodeArray);
                     this.calcCondenseWithLinks(links);
                     var flag = this.offsetNodes(nodes);
                     return flag;
                 }
             }, {
                 key: 'calcEjectBetweenNodes',
                 value: function (nodes) {
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
                 value: function (links) {
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
                 value: function (nodes) {
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
                 value: function () {
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
 (function (netBrain) {
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
                 value: function (island) {
                     return _get(SymmetricLayoutForIsland.prototype.__proto__ || Object.getPrototypeOf(SymmetricLayoutForIsland.prototype), 'layout', this).call(this, island.nodes, island.links, island.options);
                 }
             }, {
                 key: 'getLayoutName',
                 value: function () {
                     return this.layoutName;
                 }
             }]);

             return SymmetricLayoutForIsland;
         })(_symmetricLayout2.default);

         exports.default = SymmetricLayoutForIsland;
     });
 })(NetBrain);
 (function (netBrain) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
                 value: function (node) {
                     this.nodes.set(node.id, node);

                     if (node.fixed) {
                         this.fixedNodes.set(node.id, node);
                     }
                 }
             }, {
                 key: 'addTag',
                 value: function (tag) {
                     this.tags.add(tag);
                 }
             }, {
                 key: 'getNodeById',
                 value: function (id) {
                     return this.nodes.get(id);
                 }
             }, {
                 key: 'actualSize',
                 get: function () {
                     return Math.min(this.maxNodeCount || Infinity, // ensure have maxNodeCount
                         this.nodes.size);
                 }
             }]);

             return Layer;
         })();

         exports.default = Layer;
     });
 })(NetBrain);
 (function (netBrain) {
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
                 value: function (layer) {
                     var _this = this;

                     this.layers.add(layer);

                     layer.nodes.forEach(function (node) {
                         _this.addAssignNode(node);
                     });
                 }
             }, {
                 key: 'addLink',
                 value: function (link) {
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
                 value: function (node) {
                     this.assignNodes.set(node.id, node);
                     this.allNodes.set(node.id, node);
                 }
             }, {
                 key: 'addUnassignNode',
                 value: function (node) {
                     this.unassignNodes.set(node.id, node);
                     this.allNodes.set(node.id, node);
                 }
             }, {
                 key: 'getAllNodes',
                 value: function () {
                     return [].concat(_toConsumableArray(this.allNodes.values()));
                 }
             }, {
                 key: 'getFixedNodes',
                 value: function () {
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
 (function (netBrain) {
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
                 value: function (layerGroupInfo, linkInfos) {
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
                 value: function (groupInfo) {
                     var group = new _layerGroup2.default({
                         id: groupInfo.id,
                         name: groupInfo.name,
                         orientation: groupInfo.orientation
                     });

                     return group;
                 }
             }, {
                 key: 'convertLayer',
                 value: function (layerInfo) {
                     var layer = new _layer2.default({
                         level: layerInfo.level,
                         maxNodeCount: layerInfo.maxNodeCount,
                         scale: layerInfo.scale
                     });

                     return layer;
                 }
             }, {
                 key: 'converLayerNode',
                 value: function (nodeInfo) {
                     var node = new _layerNode2.default(nodeInfo, nodeInfo.locked);

                     return node;
                 }
             }, {
                 key: 'convertLink',
                 value: function (linkInfo) {
                     var link = new _link2.default(linkInfo);

                     return link;
                 }
             }, {
                 key: 'getBestStartPos',
                 value: function () {
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
                 value: function () {
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
                 value: function () {
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
 (function (netBrain) {
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
 (function (netBrain) {
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

             var _loop = function () {
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
 (function (netBrain) {
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
                 value: function (layerGroupInfo, linkInfos, customOptions) {
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
                 value: function (startPos) {
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
                         limitOffset: function (nodeId, offset) {
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
                 value: function () {
                     var layerGroup = this.layerGroup;
                     var layerMaxLine = this.options.layerMaxLine;
                     var groupBounds = _boundsTool2.default.calcBounds([].concat(_toConsumableArray(layerGroup.assignNodes.values())).filter(function (node) {
                         return node.canMove();
                     }));

                     layerGroup.layers.forEach(function (layer) {
                         var maxNodeCount = layer.maxNodeCount;
                         var nodes = [].concat(_toConsumableArray(layer.nodes.values()));

                         var line = Math.min(nodes.length / maxNodeCount, layerMaxLine);

                         var _loop = function (i, len) {
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
                 value: function () {
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
                 value: function (layer, startPos) {
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
                 value: function () {
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
 (function (netBrain) {
     'use strict';

     var internalGlobal = netBrain.ns('LayoutTools.internalGlobal');

     var config = {
     };

     internalGlobal.symmetryStyleLayoutConfig = {
         default: config
     };
 })(NetBrain); (function (netBrain) {
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

     SymmetryStyleLayout.prototype.layout = function (layerGroupInfo, linkInfos, customOptions) {
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
 })(NetBrain); (function (netBrain) {
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
 (function (netBrain) {
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

         if (sums.size === 0 || sums.devices === 0) {
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
 (function (netBrain) {
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
                 value: function (subLevel) {
                     this.subLevels.push(subLevel);
                 }
             }, {
                 key: 'addLocation',
                 value: function (location) {
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
                 value: function (location) {
                     this.locations.push(location);
                     this.parent.addLocation(location);
                 }
             }]);

             return SubLevel;
         })();

         var Location = function (parent) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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

             var _loop = function () {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
                 value: function () {
                     return this.layoutName;
                 }
             }, {
                 key: 'layout',
                 value: function (layerGroupInfo, links, customizeOptions) {
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
                 value: function () {
                     var allNodes = this.layerGroup.getAllNodes();
                     return this.generateResult(allNodes);
                 }
             }]);

             return PetalLayout;
         })(_templateStyleLayout2.default);

         exports.default = PetalLayout;
     });
 })(NetBrain);
 (function (netBrain) {
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
                 value: function () {
                     return this.layoutName;
                 }
             }, {
                 key: 'layout',
                 value: function (layerGroupInfo, links, customizeOptions) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
 (function (netBrain) {
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
                 value: function () {
                     return this.layoutName;
                 }
             }, {
                 key: 'layout',
                 value: function (layerGroupInfo, links, customizeOptions) {
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
                 value: function () {
                     var allNodes = this.layerGroup.getAllNodes();
                     return this.generateResult(allNodes);
                 }
             }]);

             return RingLayout;
         })(_templateStyleLayout2.default);

         exports.default = RingLayout;
     });
 })(NetBrain);
 (function (netBrain) {
     'use strict';

     var internalGlobal = netBrain.ns('LayoutTools.internalGlobal');
     var Link = internalGlobal.link.default;

     function MapInfo() {
         this.nodes = new Map();
         this.links = new Set();
     }

     MapInfo.prototype.fromData = function (data, Node) {
         this.nodes.clear();
         this.links.clear();

         this.convertNodes(data.nodeDataArray, Node);
         this.convertLinks(data.linkDataArray);
     };

     MapInfo.prototype.convertNodes = function (nodeDataArray, Node) {
         var nodes = this.nodes;

         _.each(nodeDataArray, function (nodeInfo) {
             var node = new Node(nodeInfo);

             nodes.set(node.id, node);
         });
     };

     MapInfo.prototype.convertLinks = function (linkDataArray) {
         var nodes = this.nodes;
         var links = this.links;

         _.each(linkDataArray, function (linkInfo) {
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
 })(NetBrain); (function (netBrain) {
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

     SampleMapLayout.prototype.convert = function (currMapData, originMapData) {
         this.currMapInfo.fromData(currMapData, this.nodeType);
         this.originMapInfo.fromData(originMapData, this.nodeType);
     };

     SampleMapLayout.prototype.getLocations = function () {
         var matchedLocations = this.generateResult(this.matchedNodes);
         var unmatchedLocations = this.generateResult(this.unmatchedNodes);
         var result = matchedLocations.concat(unmatchedLocations);

         return result;
     };

     internalGlobal.sampleMapLayout = {
         default: SampleMapLayout
     };
 })(NetBrain); (function (netBrain) {
     'use strict';

     var internalGlobal = netBrain.ns('LayoutTools.internalGlobal');

     var config = {
         getDeviceKey: function (node) {
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
 })(NetBrain); (function (netBrain) {
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
 })(NetBrain); (function (netBrain) {
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

     SampleMapByDeviceLayout.prototype.layout = function (currMapData, originMapData, customOptions) {
         this.options = _.extend(SampleMapByDeviceConfig, customOptions);

         this.convert(currMapData, originMapData);

         this.diff();

         // var result = this.generateResult(this.matchedNodes);
         moveSomeNodesNearOtherNodesTool(this.unmatchedNodes, this.matchedNodes);
         var result = this.getLocations();

         return result;
     };

     SampleMapByDeviceLayout.prototype.diff = function () {
         var currNodes = this.currMapInfo.nodes;
         var originNodes = this.originMapInfo.nodes;

         var matchedNodes = this.matchedNodes;
         var unmatchedNodes = this.unmatchedNodes;

         var options = this.options;
         var getDeviceKey = options.getDeviceKey;

         var originHostNameMap = new Map();
         originNodes.forEach(function (node) {
             var key = getDeviceKey(node);

             if (key) {
                 originHostNameMap.set(key, node);
             }
         });

         currNodes.forEach(function (node) {
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
 })(NetBrain); (function (netBrain) {
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

         matchedNodes.forEach(function (node) {
             results.matchedNodes.push(node.originalNode);
         });

         unmatchedNodes.forEach(function (node) {
             results.unmatchedNodes.push(node.originalNode);
         });

         return results;
     }

     internalGlobal.sampleMapByDeviceMatchResultsTool = {
         default: matchFun
     };
 })(NetBrain); (function (netBrain) {
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
 })(NetBrain); (function (netBrain) {
     'use strict';

     var internalGlobal = netBrain.ns('LayoutTools.internalGlobal');

     var Position = internalGlobal.position.default;

     function TagInfo() {
         this.tagMap = new Map();

         this.nodes = new Map();
     }

     TagInfo.prototype.fromData = function (data, Node) {
         var tagMap = this.tagMap;
         var allNodes = this.nodes;

         _.each(data, function (info) {
             var tagName = info.tag;
             var devices = info.devices;

             var mapNodes = new Map();
             _.each(devices, function (device) {
                 var node = new Node(device);

                 mapNodes.set(node.id, node);
                 allNodes.set(node.id, node);
             });

             tagMap.set(formatTagName(tagName), mapNodes);
         });
     };

     TagInfo.prototype.getNodeSetByTagName = function (tagName) {
         var nodeSet = this.tagMap.get(tagName);

         return nodeSet;
     };

     TagInfo.prototype.getPositionsByTagName = function (tagName) {
         var positions = new Set();

         var nodes = this.tagMap.get(tagName);
         nodes.forEach(function (node) {
             var pos = node.offset;

             positions.add(new Position(pos.x, pos.y));
         });

         return positions;
     };

     TagInfo.prototype.fromMatchedNodes = function (matched) {
         this.clear();

         var tagMap = this.tagMap;
         var allNodes = this.nodes;

         _.each(matched, function (obj) {
             var tagName = obj.tag;

             var mapNodes = new Map();
             _.each(obj.nodes, function (node) {
                 mapNodes.set(node.id, node);
                 allNodes.set(node.id, node);
             });

             tagMap.set(formatTagName(tagName), mapNodes);
         });
     };

     TagInfo.prototype.clear = function () {
         this.tagMap.clear();
     };

     function formatTagName(tagName) {
         return tagName.toUpperCase();
     }

     internalGlobal.tagInfo = {
         default: TagInfo
     };
 })(NetBrain); (function (netBrain) {
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
         _.each(matchResult, function (item) {
             result.push({
                 id: item.goalKey,
                 position: item.position
             });
         });

         return result;
     }

     function prepareBaseInfo(locations) {
         var center = getCenter(locations);

         locations.forEach(function (node) {
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

         locations.forEach(function (node) {
             var position = node.offset;
             xSum += position.x;
             ySum += position.y;
         });

         return new Position(xSum / counter, ySum / counter);
     }

     function mapping(goalLocations, goodLocations) {
         var join = [];

         goalLocations.forEach(function (goal) {
             goodLocations.forEach(function (good) {
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

             join = _.filter(join, function (item) {
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
 })(NetBrain); (function (netBrain) {
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

         nodes.forEach(function (node) {
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
         _.each(originMapData, function (tagObj) {
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
 })(NetBrain); (function (netBrain) {
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

         _.each(matchInfo.matched, function (obj) {
             _.each(obj.nodes, function (node) {
                 result.matchedNodes.push(node.originalNode);
             });
         });

         _.each(matchInfo.unmatched, function (node) {
             result.unmatchedNodes.push(node.originalNode);
         });

         return result;
     }

     internalGlobal.sampleMapByTagMatchResultsTool = {
         default: matchFun
     };
 })(NetBrain); (function (netBrain) {
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

     SampleMapByTagLayout.prototype.layout = function (currMapData, originMapData) {
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

     SampleMapByTagLayout.prototype.convert = function (currMapData, originMapData) {
         this.currMapInfo.fromData(currMapData, this.nodeType);

         this.originTagInfo.fromData(originMapData, this.nodeType);

         var matchInfo = sampleMapByTagMatchNodeTool(this.currMapInfo.nodes, originMapData);
         this.currTagInfo.fromMatchedNodes(matchInfo.matched);

         this.diff();
     };

     SampleMapByTagLayout.prototype.diff = function () {
         var matchedNodes = this.matchedNodes;
         var unmatchedNodes = this.unmatchedNodes;

         this.currTagInfo.nodes.forEach(function (node) {
             matchedNodes.set(node.id, node);
         });

         this.currMapInfo.nodes.forEach(function (node) {
             if (!matchedNodes.has(node.id)) {
                 unmatchedNodes.set(node.id, node);
             }
         });
     };

     SampleMapByTagLayout.prototype.updateNodesLocations = function () {
         var _this = this;
         var currTagInfo = this.currTagInfo;
         var originTagInfo = this.originTagInfo;

         var noMoveNodes = new Map();

         currTagInfo.tagMap.forEach(function (tagNodeMap, tagName) {
             var originTagNodeSet = originTagInfo.getNodeSetByTagName(tagName);

             var currTagNodeArr = Array.from(tagNodeMap.values());
             var originTagNodeArr = Array.from(originTagNodeSet.values());

             var newLocations = sampleMapByTagSortNodesTool(currTagNodeArr, originTagNodeArr);

             var tempTagNodeMap = new Map();
             tagNodeMap.forEach(function (node) {
                 tempTagNodeMap.set(node.id, node);
             });

             _.each(newLocations, function (item) {
                 var id = item.id;

                 var node = tempTagNodeMap.get(id);
                 if (!node) return;

                 node.offset.moveTo(item.position);

                 tempTagNodeMap.delete(id);
             });

             tempTagNodeMap.forEach(function (node) {
                 noMoveNodes.set(node.id, node);
             });
         });

         this.moveNodesToUnmatchedNodes(noMoveNodes);
     };

     SampleMapByTagLayout.prototype.moveNodesToUnmatchedNodes = function (noMoveNodes) {
         var matchedNodes = this.matchedNodes;
         var unmatchedNodes = this.unmatchedNodes;

         noMoveNodes.forEach(function (node) {
             matchedNodes.delete(node.id);

             unmatchedNodes.set(node.id, node);
         });
     };

     internalGlobal.sampleMapByTagLayout = {
         default: SampleMapByTagLayout
     };
 })(NetBrain); (
     function (netBrain) {
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
 (function (netBrain) {
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

     layoutToolsHelperForC.layout = function (type, page, param) {
         page = JSON.parse(page);
         param = JSON.parse(param);

         switch (type) {
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

         return JSON.stringify(page);
     };

     layoutToolsHelperForC.parallelStyleLayout = function (page, templateStyle) {
         var layoutGroupInfo = templateLayeredTool(page, templateStyle);
         var parallelLayout = new api.Layouts.ParallelStyleLayout();

         var linkInfos = getLinkDataArray(page);
         var nodeLocations = parallelLayout.layout(layoutGroupInfo, linkInfos);
         updatePage(page, nodeLocations);

         nodeLocations = doGeoSymmetricLayout(page, parallelLayout.layerGroup.unassignNodes);
         updatePage(page, nodeLocations);

         return page;
     };

     layoutToolsHelperForC.symmetryStyleLayout = function (page, templateStyle) {
         var layoutGroupInfo = templateLayeredTool(page, templateStyle);
         var symmetryLayout = new api.Layouts.SymmetryStyleLayout();

         var linkInfos = getLinkDataArray(page);
         var nodeLocations = symmetryLayout.layout(layoutGroupInfo, linkInfos);
         updatePage(page, nodeLocations);

         nodeLocations = doGeoSymmetricLayout(page, symmetryLayout.layerGroup.unassignNodes);
         updatePage(page, nodeLocations);

         return page;
     };

     layoutToolsHelperForC.ringStyleLayout = function (page, templateStyle) {
         var layoutGroupInfo = templateLayeredTool(page, templateStyle);
         var ringLayout = new api.Layouts.RingLayout();

         var linkInfos = getLinkDataArray(page);
         var nodeLocations = ringLayout.layout(layoutGroupInfo, linkInfos);
         updatePage(page, nodeLocations);

         nodeLocations = doGeoSymmetricLayout(page);
         updatePage(page, nodeLocations);

         return page;
     };

     layoutToolsHelperForC.sampleMapByTagLayout = function (page, originMap) {
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

         nodes.forEach(function (node) {
             nodeMap[node.key] = node;
         });

         nodeLocations.forEach(function (locInfo) {
             var node = nodeMap[locInfo.key];
             if (node) {
                 node.location = locInfo.location;
             }
         });

         return page;
     }

     function addVirtualBounds(nodes) {
         nodes.forEach(function (node) {
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
         unlockedNodes.forEach(function (node) {
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

 // exports.layoutToolsHelperForC = NetBrain.ns('Map').layoutToolsHelperForC;

 // console.log(NetBrain.Map.layoutToolsHelperForC.layout);