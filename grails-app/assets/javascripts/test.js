//# sourceMappingURL=application.js.map
/*
 MIT License - http://www.opensource.org/licenses/mit-license.php

 For usage and examples, visit:
 http://timeago.yarp.com/

 Copyright (c) 2008-2013, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
*/
(function (a, q) {
    "object" === typeof module && "object" === typeof module.exports ? module.exports = a.document ? q(a, !0) : function (a) {
        if (!a.document) throw Error("jQuery requires a window with a document");
        return q(a)
    } : q(a)
})("undefined" !== typeof window ? window : this, function (a, q) {
    function r(d) {
        var a = d.length, n = f.type(d);
        return "function" === n || f.isWindow(d) ? !1 : 1 === d.nodeType && a ? !0 : "array" === n || 0 === a || "number" === typeof a && 0 < a && a - 1 in d
    }

    function c(d, a, n) {
        if (f.isFunction(a)) return f.grep(d, function (d, f) {
            return !!a.call(d,
                f, d) !== n
        });
        if (a.nodeType) return f.grep(d, function (d) {
            return d === a !== n
        });
        if ("string" === typeof a) {
            if (Va.test(a)) return f.filter(a, d, n);
            a = f.filter(a, d)
        }
        return f.grep(d, function (d) {
            return 0 <= f.inArray(d, a) !== n
        })
    }

    function b(d, a) {
        do d = d[a]; while (d && 1 !== d.nodeType);
        return d
    }

    function e(d) {
        var a = gb[d] = {};
        f.each(d.match(ha) || [], function (d, f) {
            a[f] = !0
        });
        return a
    }

    function g() {
        F.addEventListener ? (F.removeEventListener("DOMContentLoaded", l, !1), a.removeEventListener("load", l, !1)) : (F.detachEvent("onreadystatechange",
            l), a.detachEvent("onload", l))
    }

    function l() {
        if (F.addEventListener || "load" === event.type || "complete" === F.readyState) g(), f.ready()
    }

    function p(d, a, n) {
        if (void 0 === n && 1 === d.nodeType) if (n = "data-" + a.replace(Ab, "-$1").toLowerCase(), n = d.getAttribute(n), "string" === typeof n) {
            try {
                n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Bb.test(n) ? f.parseJSON(n) : n
            } catch (B) {
            }
            f.data(d, a, n)
        } else n = void 0;
        return n
    }

    function t(d) {
        for (var a in d) if (("data" !== a || !f.isEmptyObject(d[a])) && "toJSON" !== a) return !1;
        return !0
    }

    function k(d, a, n, B) {
        if (f.acceptData(d)) {
            var b = f.expando, c = d.nodeType, h = c ? f.cache : d, e = c ? d[b] : d[b] && b;
            if (e && h[e] && (B || h[e].data) || void 0 !== n || "string" !== typeof a) {
                e || (e = c ? d[b] = K.pop() || f.guid++ : b);
                h[e] || (h[e] = c ? {} : {toJSON: f.noop});
                if ("object" === typeof a || "function" === typeof a) B ? h[e] = f.extend(h[e], a) : h[e].data = f.extend(h[e].data, a);
                d = h[e];
                B || (d.data || (d.data = {}), d = d.data);
                void 0 !== n && (d[f.camelCase(a)] = n);
                "string" === typeof a ? (n = d[a], null == n && (n = d[f.camelCase(a)])) : n = d;
                return n
            }
        }
    }

    function s(d, a, n) {
        if (f.acceptData(d)) {
            var B,
                b, c = d.nodeType, h = c ? f.cache : d, e = c ? d[f.expando] : f.expando;
            if (h[e]) {
                if (a && (B = n ? h[e] : h[e].data)) {
                    f.isArray(a) ? a = a.concat(f.map(a, f.camelCase)) : a in B ? a = [a] : (a = f.camelCase(a), a = a in B ? [a] : a.split(" "));
                    for (b = a.length; b--;) delete B[a[b]];
                    if (n ? !t(B) : !f.isEmptyObject(B)) return
                }
                if (!n && (delete h[e].data, !t(h[e]))) return;
                c ? f.cleanData([d], !0) : u.deleteExpando || h != h.window ? delete h[e] : h[e] = null
            }
        }
    }

    function L() {
        return !0
    }

    function E() {
        return !1
    }

    function C() {
        try {
            return F.activeElement
        } catch (d) {
        }
    }

    function z(d) {
        var a =
            Ka.split("|");
        d = d.createDocumentFragment();
        if (d.createElement) for (; a.length;) d.createElement(a.pop());
        return d
    }

    function h(d, a) {
        var n, B, b = 0,
            c = "undefined" !== typeof d.getElementsByTagName ? d.getElementsByTagName(a || "*") : "undefined" !== typeof d.querySelectorAll ? d.querySelectorAll(a || "*") : void 0;
        if (!c) for (c = [], n = d.childNodes || d; null != (B = n[b]); b++) !a || f.nodeName(B, a) ? c.push(B) : f.merge(c, h(B, a));
        return void 0 === a || a && f.nodeName(d, a) ? f.merge([d], c) : c
    }

    function m(d) {
        Ba.test(d.type) && (d.defaultChecked = d.checked)
    }

    function Q(d, a) {
        return f.nodeName(d, "table") && f.nodeName(11 !== a.nodeType ? a : a.firstChild, "tr") ? d.getElementsByTagName("tbody")[0] || d.appendChild(d.ownerDocument.createElement("tbody")) : d
    }

    function H(d) {
        d.type = (null !== f.find.attr(d, "type")) + "/" + d.type;
        return d
    }

    function D(d) {
        var a = Cb.exec(d.type);
        a ? d.type = a[1] : d.removeAttribute("type");
        return d
    }

    function V(d, a) {
        for (var n, B = 0; null != (n = d[B]); B++) f._data(n, "globalEval", !a || f._data(a[B], "globalEval"))
    }

    function R(d, a) {
        if (1 === a.nodeType && f.hasData(d)) {
            var n,
                B, b;
            B = f._data(d);
            var c = f._data(a, B), h = B.events;
            if (h) for (n in delete c.handle, c.events = {}, h) for (B = 0, b = h[n].length; B < b; B++) f.event.add(a, n, h[n][B]);
            c.data && (c.data = f.extend({}, c.data))
        }
    }

    function T(d, G) {
        var n, B = f(G.createElement(d)).appendTo(G.body),
            b = a.getDefaultComputedStyle && (n = a.getDefaultComputedStyle(B[0])) ? n.display : f.css(B[0], "display");
        B.detach();
        return b
    }

    function M(d) {
        var a = F, n = hb[d];
        n || (n = T(d, a), "none" !== n && n || (Ha = (Ha || f("<iframe frameborder='0' width='0' height='0'/>")).appendTo(a.documentElement),
            a = (Ha[0].contentWindow || Ha[0].contentDocument).document, a.write(), a.close(), n = T(d, a), Ha.detach()), hb[d] = n);
        return n
    }

    function N(d, a) {
        return {
            get: function () {
                var f = d();
                if (null != f) if (f) delete this.get; else return (this.get = a).apply(this, arguments)
            }
        }
    }

    function A(d, a) {
        if (a in d) return a;
        for (var f = a.charAt(0).toUpperCase() + a.slice(1), B = a, b = ib.length; b--;) if (a = ib[b] + f, a in d) return a;
        return B
    }

    function Y(d, a) {
        for (var n, b, c, h = [], e = 0, g = d.length; e < g; e++) b = d[e], b.style && (h[e] = f._data(b, "olddisplay"), n = b.style.display,
            a ? (h[e] || "none" !== n || (b.style.display = ""), "" === b.style.display && ua(b) && (h[e] = f._data(b, "olddisplay", M(b.nodeName)))) : (c = ua(b), (n && "none" !== n || !c) && f._data(b, "olddisplay", c ? n : f.css(b, "display"))));
        for (e = 0; e < g; e++) b = d[e], !b.style || a && "none" !== b.style.display && "" !== b.style.display || (b.style.display = a ? h[e] || "" : "none");
        return d
    }

    function v(d, a, f) {
        return (d = Db.exec(a)) ? Math.max(0, d[1] - (f || 0)) + (d[2] || "px") : a
    }

    function aa(d, a, n, b, c) {
        a = n === (b ? "border" : "content") ? 4 : "width" === a ? 1 : 0;
        for (var h = 0; 4 > a; a += 2) "margin" ===
        n && (h += f.css(d, n + qa[a], !0, c)), b ? ("content" === n && (h -= f.css(d, "padding" + qa[a], !0, c)), "margin" !== n && (h -= f.css(d, "border" + qa[a] + "Width", !0, c))) : (h += f.css(d, "padding" + qa[a], !0, c), "padding" !== n && (h += f.css(d, "border" + qa[a] + "Width", !0, c)));
        return h
    }

    function da(d, a, n) {
        var b = !0, c = "width" === a ? d.offsetWidth : d.offsetHeight, h = xa(d),
            e = u.boxSizing && "border-box" === f.css(d, "boxSizing", !1, h);
        if (0 >= c || null == c) {
            c = ya(d, a, h);
            if (0 > c || null == c) c = d.style[a];
            if (La.test(c)) return c;
            b = e && (u.boxSizingReliable() || c === d.style[a]);
            c = parseFloat(c) || 0
        }
        return c + aa(d, a, n || (e ? "border" : "content"), b, h) + "px"
    }

    function J(d, a, f, b, c) {
        return new J.prototype.init(d, a, f, b, c)
    }

    function ia() {
        setTimeout(function () {
            Ca = void 0
        });
        return Ca = f.now()
    }

    function O(d, a) {
        var f, b = {height: d}, c = 0;
        for (a = a ? 1 : 0; 4 > c; c += 2 - a) f = qa[c], b["margin" + f] = b["padding" + f] = d;
        a && (b.opacity = b.width = d);
        return b
    }

    function U(d, a, f) {
        for (var b, c = (Ia[a] || []).concat(Ia["*"]), h = 0, e = c.length; h < e; h++) if (b = c[h].call(f, a, d)) return b
    }

    function P(d, a) {
        var n, b, c, h, e;
        for (n in d) if (b = f.camelCase(n),
            c = a[b], h = d[n], f.isArray(h) && (c = h[1], h = d[n] = h[0]), n !== b && (d[b] = h, delete d[n]), (e = f.cssHooks[b]) && "expand" in e) for (n in h = e.expand(h), delete d[b], h) n in d || (d[n] = h[n], a[n] = c); else a[b] = c
    }

    function x(d, a, n) {
        var b, c = 0, h = Ma.length, e = f.Deferred().always(function () {
                delete g.elem
            }), g = function () {
                if (b) return !1;
                for (var a = Ca || ia(), a = Math.max(0, m.startTime + m.duration - a), f = 1 - (a / m.duration || 0), G = 0, n = m.tweens.length; G < n; G++) m.tweens[G].run(f);
                e.notifyWith(d, [m, f, a]);
                if (1 > f && n) return a;
                e.resolveWith(d, [m]);
                return !1
            },
            m = e.promise({
                elem: d,
                props: f.extend({}, a),
                opts: f.extend(!0, {specialEasing: {}}, n),
                originalProperties: a,
                originalOptions: n,
                startTime: Ca || ia(),
                duration: n.duration,
                tweens: [],
                createTween: function (a, G) {
                    var n = f.Tween(d, m.opts, a, G, m.opts.specialEasing[a] || m.opts.easing);
                    m.tweens.push(n);
                    return n
                },
                stop: function (a) {
                    var f = 0, G = a ? m.tweens.length : 0;
                    if (b) return this;
                    for (b = !0; f < G; f++) m.tweens[f].run(1);
                    a ? e.resolveWith(d, [m, a]) : e.rejectWith(d, [m, a]);
                    return this
                }
            });
        n = m.props;
        for (P(n, m.opts.specialEasing); c < h; c++) if (a =
            Ma[c].call(m, d, n, m.opts)) return a;
        f.map(n, U, m);
        f.isFunction(m.opts.start) && m.opts.start.call(d, m);
        f.fx.timer(f.extend(g, {elem: d, anim: m, queue: m.opts.queue}));
        return m.progress(m.opts.progress).done(m.opts.done, m.opts.complete).fail(m.opts.fail).always(m.opts.always)
    }

    function w(d) {
        return function (a, n) {
            "string" !== typeof a && (n = a, a = "*");
            var b, c = 0, h = a.toLowerCase().match(ha) || [];
            if (f.isFunction(n)) for (; b = h[c++];) "+" === b.charAt(0) ? (b = b.slice(1) || "*", (d[b] = d[b] || []).unshift(n)) : (d[b] = d[b] || []).push(n)
        }
    }

    function y(d,
               a, n, b) {
        function c(m) {
            var g;
            h[m] = !0;
            f.each(d[m] || [], function (d, f) {
                var m = f(a, n, b);
                if ("string" === typeof m && !e && !h[m]) return a.dataTypes.unshift(m), c(m), !1;
                if (e) return !(g = m)
            });
            return g
        }

        var h = {}, e = d === Wa;
        return c(a.dataTypes[0]) || !h["*"] && c("*")
    }

    function S(d, a) {
        var n, b, c = f.ajaxSettings.flatOptions || {};
        for (b in a) void 0 !== a[b] && ((c[b] ? d : n || (n = {}))[b] = a[b]);
        n && f.extend(!0, d, n);
        return d
    }

    function ea(d, a, n, b) {
        var c;
        if (f.isArray(a)) f.each(a, function (a, f) {
            n || Eb.test(d) ? b(d, f) : ea(d + "[" + ("object" === typeof f ? a :
                "") + "]", f, n, b)
        }); else if (n || "object" !== f.type(a)) b(d, a); else for (c in a) ea(d + "[" + c + "]", a[c], n, b)
    }

    function fa() {
        try {
            return new a.XMLHttpRequest
        } catch (d) {
        }
    }

    function ja(d) {
        return f.isWindow(d) ? d : 9 === d.nodeType ? d.defaultView || d.parentWindow : !1
    }

    var K = [], Z = K.slice, ca = K.concat, ma = K.push, Da = K.indexOf, W = {}, ka = W.toString, I = W.hasOwnProperty,
        u = {}, f = function (d, a) {
            return new f.fn.init(d, a)
        }, ra = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Na = /^-ms-/, Xa = /-([\da-z])/gi, Ea = function (d, a) {
            return a.toUpperCase()
        };
    f.fn = f.prototype =
        {
            jquery: "1.11.1", constructor: f, selector: "", length: 0, toArray: function () {
                return Z.call(this)
            }, get: function (d) {
                return null != d ? 0 > d ? this[d + this.length] : this[d] : Z.call(this)
            }, pushStack: function (d) {
                d = f.merge(this.constructor(), d);
                d.prevObject = this;
                d.context = this.context;
                return d
            }, each: function (d, a) {
                return f.each(this, d, a)
            }, map: function (d) {
                return this.pushStack(f.map(this, function (a, f) {
                    return d.call(a, f, a)
                }))
            }, slice: function () {
                return this.pushStack(Z.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            }, eq: function (d) {
                var a = this.length;
                d = +d + (0 > d ? a : 0);
                return this.pushStack(0 <= d && d < a ? [this[d]] : [])
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: ma, sort: K.sort, splice: K.splice
        };
    f.extend = f.fn.extend = function () {
        var d, a, n, b, c, h = arguments[0] || {}, e = 1, m = arguments.length, g = !1;
        "boolean" === typeof h && (g = h, h = arguments[e] || {}, e++);
        "object" === typeof h || f.isFunction(h) || (h = {});
        e === m && (h = this, e--);
        for (; e < m; e++) if (null != (c = arguments[e])) for (b in c) d = h[b], n = c[b],
        h !== n && (g && n && (f.isPlainObject(n) || (a = f.isArray(n))) ? (a ? (a = !1, d = d && f.isArray(d) ? d : []) : d = d && f.isPlainObject(d) ? d : {}, h[b] = f.extend(g, d, n)) : void 0 !== n && (h[b] = n));
        return h
    };
    f.extend({
        expando: "jQuery" + ("1.11.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (d) {
            throw Error(d);
        }, noop: function () {
        }, isFunction: function (d) {
            return "function" === f.type(d)
        }, isArray: Array.isArray || function (d) {
            return "array" === f.type(d)
        }, isWindow: function (d) {
            return null != d && d == d.window
        }, isNumeric: function (d) {
            return !f.isArray(d) &&
                0 <= d - parseFloat(d)
        }, isEmptyObject: function (d) {
            for (var a in d) return !1;
            return !0
        }, isPlainObject: function (d) {
            var a;
            if (!d || "object" !== f.type(d) || d.nodeType || f.isWindow(d)) return !1;
            try {
                if (d.constructor && !I.call(d, "constructor") && !I.call(d.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (u.ownLast) for (a in d) return I.call(d, a);
            for (a in d) ;
            return void 0 === a || I.call(d, a)
        }, type: function (d) {
            return null == d ? d + "" : "object" === typeof d || "function" === typeof d ? W[ka.call(d)] || "object" : typeof d
        },
        globalEval: function (d) {
            d && f.trim(d) && (a.execScript || function (d) {
                a.eval.call(a, d)
            })(d)
        }, camelCase: function (d) {
            return d.replace(Na, "ms-").replace(Xa, Ea)
        }, nodeName: function (d, a) {
            return d.nodeName && d.nodeName.toLowerCase() === a.toLowerCase()
        }, each: function (d, a, f) {
            var b, c = 0, h = d.length;
            b = r(d);
            if (f) if (b) for (; c < h && (b = a.apply(d[c], f), !1 !== b); c++) ; else for (c in d) {
                if (b = a.apply(d[c], f), !1 === b) break
            } else if (b) for (; c < h && (b = a.call(d[c], c, d[c]), !1 !== b); c++) ; else for (c in d) if (b = a.call(d[c], c, d[c]), !1 === b) break;
            return d
        },
        trim: function (d) {
            return null == d ? "" : (d + "").replace(ra, "")
        }, makeArray: function (d, a) {
            var n = a || [];
            null != d && (r(Object(d)) ? f.merge(n, "string" === typeof d ? [d] : d) : ma.call(n, d));
            return n
        }, inArray: function (d, a, f) {
            var b;
            if (a) {
                if (Da) return Da.call(a, d, f);
                b = a.length;
                for (f = f ? 0 > f ? Math.max(0, b + f) : f : 0; f < b; f++) if (f in a && a[f] === d) return f
            }
            return -1
        }, merge: function (d, a) {
            for (var f = +a.length, b = 0, c = d.length; b < f;) d[c++] = a[b++];
            if (f !== f) for (; void 0 !== a[b];) d[c++] = a[b++];
            d.length = c;
            return d
        }, grep: function (d, a, f) {
            for (var b =
                [], c = 0, h = d.length, e = !f; c < h; c++) f = !a(d[c], c), f !== e && b.push(d[c]);
            return b
        }, map: function (d, a, f) {
            var b, c = 0, h = d.length, e = [];
            if (r(d)) for (; c < h; c++) b = a(d[c], c, f), null != b && e.push(b); else for (c in d) b = a(d[c], c, f), null != b && e.push(b);
            return ca.apply([], e)
        }, guid: 1, proxy: function (d, a) {
            var n, b;
            "string" === typeof a && (b = d[a], a = d, d = b);
            if (f.isFunction(d)) return n = Z.call(arguments, 2), b = function () {
                return d.apply(a || this, n.concat(Z.call(arguments)))
            }, b.guid = d.guid = d.guid || f.guid++, b
        }, now: function () {
            return +new Date
        }, support: u
    });
    f.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (d, a) {
        W["[object " + a + "]"] = a.toLowerCase()
    });
    var na = function (d) {
        function a(d, f, n, b) {
            var G, c, h, e, m;
            (f ? f.ownerDocument || f : R) !== H && r(f);
            f = f || H;
            n = n || [];
            if (!d || "string" !== typeof d) return n;
            if (1 !== (e = f.nodeType) && 9 !== e) return [];
            if (K && !b) {
                if (G = Ka.exec(d)) if (h = G[1]) if (9 === e) if ((c = f.getElementById(h)) && c.parentNode) {
                    if (c.id === h) return n.push(c), n
                } else return n; else {
                    if (f.ownerDocument && (c = f.ownerDocument.getElementById(h)) &&
                        V(f, c) && c.id === h) return n.push(c), n
                } else {
                    if (G[2]) return ra.apply(n, f.getElementsByTagName(d)), n;
                    if ((h = G[3]) && S.getElementsByClassName && f.getElementsByClassName) return ra.apply(n, f.getElementsByClassName(h)), n
                }
                if (S.qsa && (!ja || !ja.test(d))) {
                    c = G = ba;
                    h = f;
                    m = 9 === e && d;
                    if (1 === e && "object" !== f.nodeName.toLowerCase()) {
                        e = D(d);
                        (G = f.getAttribute("id")) ? c = G.replace(Oa, "\\$&") : f.setAttribute("id", c);
                        c = "[id='" + c + "'] ";
                        for (h = e.length; h--;) e[h] = c + u(e[h]);
                        h = U.test(d) && y(f.parentNode) || f;
                        m = e.join(",")
                    }
                    if (m) try {
                        return ra.apply(n,
                            h.querySelectorAll(m)), n
                    } catch (B) {
                    } finally {
                        G || f.removeAttribute("id")
                    }
                }
            }
            return ca(d.replace(Ea, "$1"), f, n, b)
        }

        function f() {
            function d(f, n) {
                a.push(f + " ") > t.cacheLength && delete d[a.shift()];
                return d[f + " "] = n
            }

            var a = [];
            return d
        }

        function b(d) {
            d[ba] = !0;
            return d
        }

        function c(d) {
            var a = H.createElement("div");
            try {
                return !!d(a)
            } catch (f) {
                return !1
            } finally {
                a.parentNode && a.parentNode.removeChild(a)
            }
        }

        function h(d, a) {
            for (var f = d.split("|"), n = d.length; n--;) t.attrHandle[f[n]] = a
        }

        function e(d, a) {
            var f = a && d, n = f && 1 === d.nodeType &&
                1 === a.nodeType && (~a.sourceIndex || -2147483648) - (~d.sourceIndex || -2147483648);
            if (n) return n;
            if (f) for (; f = f.nextSibling;) if (f === a) return -1;
            return d ? 1 : -1
        }

        function m(d) {
            return function (a) {
                return "input" === a.nodeName.toLowerCase() && a.type === d
            }
        }

        function g(d) {
            return function (a) {
                var f = a.nodeName.toLowerCase();
                return ("input" === f || "button" === f) && a.type === d
            }
        }

        function k(d) {
            return b(function (a) {
                a = +a;
                return b(function (f, n) {
                    for (var b, G = d([], f.length, a), c = G.length; c--;) f[b = G[c]] && (f[b] = !(n[b] = f[b]))
                })
            })
        }

        function y(d) {
            return d &&
                "undefined" !== typeof d.getElementsByTagName && d
        }

        function l() {
        }

        function u(d) {
            for (var a = 0, f = d.length, n = ""; a < f; a++) n += d[a].value;
            return n
        }

        function x(d, a, f) {
            var n = a.dir, b = f && "parentNode" === n, G = L++;
            return a.first ? function (a, f, G) {
                for (; a = a[n];) if (1 === a.nodeType || b) return d(a, f, G)
            } : function (a, f, c) {
                var h, e, m = [E, G];
                if (c) for (; a = a[n];) {
                    if ((1 === a.nodeType || b) && d(a, f, c)) return !0
                } else for (; a = a[n];) if (1 === a.nodeType || b) {
                    e = a[ba] || (a[ba] = {});
                    if ((h = e[n]) && h[0] === E && h[1] === G) return m[2] = h[2];
                    e[n] = m;
                    if (m[2] = d(a, f, c)) return !0
                }
            }
        }

        function w(d) {
            return 1 < d.length ? function (a, f, n) {
                for (var b = d.length; b--;) if (!d[b](a, f, n)) return !1;
                return !0
            } : d[0]
        }

        function p(d, a, f, n, b) {
            for (var G, c = [], h = 0, e = d.length, m = null != a; h < e; h++) if (G = d[h]) if (!f || f(G, n, b)) c.push(G), m && a.push(h);
            return c
        }

        function I(d, f, n, c, h, e) {
            c && !c[ba] && (c = I(c));
            h && !h[ba] && (h = I(h, e));
            return b(function (b, e, m, B) {
                var g, k, y = [], l = [], ta = e.length, ga;
                if (!(ga = b)) {
                    ga = f || "*";
                    for (var u = m.nodeType ? [m] : m, x = [], w = 0, I = u.length; w < I; w++) a(ga, u[w], x);
                    ga = x
                }
                ga = !d || !b && f ? ga : p(ga, y, d, m, B);
                u = n ? h || (b ?
                    d : ta || c) ? [] : e : ga;
                n && n(ga, u, m, B);
                if (c) for (g = p(u, l), c(g, [], m, B), m = g.length; m--;) if (k = g[m]) u[l[m]] = !(ga[l[m]] = k);
                if (b) {
                    if (h || d) {
                        if (h) {
                            g = [];
                            for (m = u.length; m--;) (k = u[m]) && g.push(ga[m] = k);
                            h(null, u = [], g, B)
                        }
                        for (m = u.length; m--;) (k = u[m]) && -1 < (g = h ? J.call(b, k) : y[m]) && (b[g] = !(e[g] = k))
                    }
                } else u = p(u === e ? u.splice(ta, u.length) : u), h ? h(null, e, u, B) : ra.apply(e, u)
            })
        }

        function X(d) {
            var a, f, n, b = d.length, G = t.relative[d[0].type];
            f = G || t.relative[" "];
            for (var c = G ? 1 : 0, h = x(function (d) {
                return d === a
            }, f, !0), e = x(function (d) {
                return -1 <
                    J.call(a, d)
            }, f, !0), m = [function (d, f, n) {
                return !G && (n || f !== Z) || ((a = f).nodeType ? h(d, f, n) : e(d, f, n))
            }]; c < b; c++) if (f = t.relative[d[c].type]) m = [x(w(m), f)]; else {
                f = t.filter[d[c].type].apply(null, d[c].matches);
                if (f[ba]) {
                    for (n = ++c; n < b && !t.relative[d[n].type]; n++) ;
                    return I(1 < c && w(m), 1 < c && u(d.slice(0, c - 1).concat({value: " " === d[c - 2].type ? "*" : ""})).replace(Ea, "$1"), f, c < n && X(d.slice(c, n)), n < b && X(d = d.slice(n)), n < b && u(d))
                }
                m.push(f)
            }
            return w(m)
        }

        function W(d, f) {
            var n = 0 < f.length, c = 0 < d.length, h = function (b, h, e, m, B) {
                var g,
                    k, y, u = 0, l = "0", ta = b && [], ga = [], x = Z, w = b || c && t.find.TAG("*", B),
                    I = E += null == x ? 1 : Math.random() || .1, X = w.length;
                for (B && (Z = h !== H && h); l !== X && null != (g = w[l]); l++) {
                    if (c && g) {
                        for (k = 0; y = d[k++];) if (y(g, h, e)) {
                            m.push(g);
                            break
                        }
                        B && (E = I)
                    }
                    n && ((g = !y && g) && u--, b && ta.push(g))
                }
                u += l;
                if (n && l !== u) {
                    for (k = 0; y = f[k++];) y(ta, ga, h, e);
                    if (b) {
                        if (0 < u) for (; l--;) ta[l] || ga[l] || (ga[l] = Ya.call(m));
                        ga = p(ga)
                    }
                    ra.apply(m, ga);
                    B && !b && 0 < ga.length && 1 < u + f.length && a.uniqueSort(m)
                }
                B && (E = I, Z = x);
                return ta
            };
            return n ? b(h) : h
        }

        var Q, S, t, ea, s, D, fa, ca, Z, P, q, r, H,
            ka, K, ja, z, ma, V, ba = "sizzle" + -new Date, R = d.document, E = 0, L = 0, T = f(), M = f(), A = f(),
            Da = function (d, a) {
                d === a && (q = !0);
                return 0
            }, C = {}.hasOwnProperty, v = [], Ya = v.pop, N = v.push, ra = v.push, Na = v.slice,
            J = v.indexOf || function (d) {
                for (var a = 0, f = this.length; a < f; a++) if (this[a] === d) return a;
                return -1
            }, F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"),
            Ja = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                F + "))|)[\\x20\\t\\r\\n\\f]*\\]",
            Y = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + Ja + ")*)|.*)\\)|)",
            Ea = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g, Xa = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            da = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            O = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g, Fa = new RegExp(Y), aa = new RegExp("^" + F + "$"),
            na = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: new RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + Ja),
                PSEUDO: new RegExp("^" + Y),
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            },
            ia = /^(?:input|select|textarea|button)$/i, Va = /^h\d$/i, pa = /^[^{]+\{\s*\[native \w/,
            Ka = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, U = /[+~]/, Oa = /'|\\/g,
            oa = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig, ha = function (d, a, f) {
                d = "0x" + a - 65536;
                return d !== d || f ? a : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, d & 1023 | 56320)
            };
        try {
            ra.apply(v = Na.call(R.childNodes), R.childNodes), v[R.childNodes.length].nodeType
        } catch (la) {
            ra = {
                apply: v.length ? function (d, a) {
                    N.apply(d, Na.call(a))
                } : function (d, a) {
                    for (var f =
                        d.length, n = 0; d[f++] = a[n++];) ;
                    d.length = f - 1
                }
            }
        }
        S = a.support = {};
        s = a.isXML = function (d) {
            return (d = d && (d.ownerDocument || d).documentElement) ? "HTML" !== d.nodeName : !1
        };
        r = a.setDocument = function (d) {
            var a = d ? d.ownerDocument || d : R;
            d = a.defaultView;
            if (a === H || 9 !== a.nodeType || !a.documentElement) return H;
            H = a;
            ka = a.documentElement;
            K = !s(a);
            d && d !== d.top && (d.addEventListener ? d.addEventListener("unload", function () {
                r()
            }, !1) : d.attachEvent && d.attachEvent("onunload", function () {
                r()
            }));
            S.attributes = c(function (d) {
                d.className = "i";
                return !d.getAttribute("className")
            });
            S.getElementsByTagName = c(function (d) {
                d.appendChild(a.createComment(""));
                return !d.getElementsByTagName("*").length
            });
            S.getElementsByClassName = pa.test(a.getElementsByClassName) && c(function (d) {
                d.innerHTML = "<div class='a'></div><div class='a i'></div>";
                d.firstChild.className = "i";
                return 2 === d.getElementsByClassName("i").length
            });
            S.getById = c(function (d) {
                ka.appendChild(d).id = ba;
                return !a.getElementsByName || !a.getElementsByName(ba).length
            });
            S.getById ? (t.find.ID = function (d, a) {
                if ("undefined" !== typeof a.getElementById &&
                    K) {
                    var f = a.getElementById(d);
                    return f && f.parentNode ? [f] : []
                }
            }, t.filter.ID = function (d) {
                var a = d.replace(oa, ha);
                return function (d) {
                    return d.getAttribute("id") === a
                }
            }) : (delete t.find.ID, t.filter.ID = function (d) {
                var a = d.replace(oa, ha);
                return function (d) {
                    return (d = "undefined" !== typeof d.getAttributeNode && d.getAttributeNode("id")) && d.value === a
                }
            });
            t.find.TAG = S.getElementsByTagName ? function (d, a) {
                if ("undefined" !== typeof a.getElementsByTagName) return a.getElementsByTagName(d)
            } : function (d, a) {
                var f, n = [], b = 0, G = a.getElementsByTagName(d);
                if ("*" === d) {
                    for (; f = G[b++];) 1 === f.nodeType && n.push(f);
                    return n
                }
                return G
            };
            t.find.CLASS = S.getElementsByClassName && function (d, a) {
                if ("undefined" !== typeof a.getElementsByClassName && K) return a.getElementsByClassName(d)
            };
            z = [];
            ja = [];
            if (S.qsa = pa.test(a.querySelectorAll)) c(function (d) {
                d.innerHTML = "<select msallowclip=''><option selected=''></option></select>";
                d.querySelectorAll("[msallowclip^='']").length && ja.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                d.querySelectorAll("[selected]").length || ja.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                d.querySelectorAll(":checked").length || ja.push(":checked")
            }), c(function (d) {
                var f = a.createElement("input");
                f.setAttribute("type", "hidden");
                d.appendChild(f).setAttribute("name", "D");
                d.querySelectorAll("[name=d]").length && ja.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                d.querySelectorAll(":enabled").length || ja.push(":enabled", ":disabled");
                d.querySelectorAll("*,:x");
                ja.push(",.*:")
            });
            (S.matchesSelector = pa.test(ma = ka.matches || ka.webkitMatchesSelector || ka.mozMatchesSelector || ka.oMatchesSelector || ka.msMatchesSelector)) &&
            c(function (d) {
                S.disconnectedMatch = ma.call(d, "div");
                ma.call(d, "[s!='']:x");
                z.push("!=", Y)
            });
            ja = ja.length && new RegExp(ja.join("|"));
            z = z.length && new RegExp(z.join("|"));
            V = (d = pa.test(ka.compareDocumentPosition)) || pa.test(ka.contains) ? function (d, a) {
                var f = 9 === d.nodeType ? d.documentElement : d, n = a && a.parentNode;
                return d === n || !!(n && 1 === n.nodeType && (f.contains ? f.contains(n) : d.compareDocumentPosition && d.compareDocumentPosition(n) & 16))
            } : function (d, a) {
                if (a) for (; a = a.parentNode;) if (a === d) return !0;
                return !1
            };
            Da = d ? function (d,
                               f) {
                if (d === f) return q = !0, 0;
                var n = !d.compareDocumentPosition - !f.compareDocumentPosition;
                if (n) return n;
                n = (d.ownerDocument || d) === (f.ownerDocument || f) ? d.compareDocumentPosition(f) : 1;
                return n & 1 || !S.sortDetached && f.compareDocumentPosition(d) === n ? d === a || d.ownerDocument === R && V(R, d) ? -1 : f === a || f.ownerDocument === R && V(R, f) ? 1 : P ? J.call(P, d) - J.call(P, f) : 0 : n & 4 ? -1 : 1
            } : function (d, f) {
                if (d === f) return q = !0, 0;
                var n, b = 0;
                n = d.parentNode;
                var G = f.parentNode, c = [d], h = [f];
                if (!n || !G) return d === a ? -1 : f === a ? 1 : n ? -1 : G ? 1 : P ? J.call(P, d) -
                    J.call(P, f) : 0;
                if (n === G) return e(d, f);
                for (n = d; n = n.parentNode;) c.unshift(n);
                for (n = f; n = n.parentNode;) h.unshift(n);
                for (; c[b] === h[b];) b++;
                return b ? e(c[b], h[b]) : c[b] === R ? -1 : h[b] === R ? 1 : 0
            };
            return a
        };
        a.matches = function (d, f) {
            return a(d, null, null, f)
        };
        a.matchesSelector = function (d, f) {
            (d.ownerDocument || d) !== H && r(d);
            f = f.replace(O, "='$1']");
            if (!(!S.matchesSelector || !K || z && z.test(f) || ja && ja.test(f))) try {
                var n = ma.call(d, f);
                if (n || S.disconnectedMatch || d.document && 11 !== d.document.nodeType) return n
            } catch (b) {
            }
            return 0 <
                a(f, H, null, [d]).length
        };
        a.contains = function (d, a) {
            (d.ownerDocument || d) !== H && r(d);
            return V(d, a)
        };
        a.attr = function (d, a) {
            (d.ownerDocument || d) !== H && r(d);
            var f = t.attrHandle[a.toLowerCase()],
                f = f && C.call(t.attrHandle, a.toLowerCase()) ? f(d, a, !K) : void 0;
            return void 0 !== f ? f : S.attributes || !K ? d.getAttribute(a) : (f = d.getAttributeNode(a)) && f.specified ? f.value : null
        };
        a.error = function (d) {
            throw Error("Syntax error, unrecognized expression: " + d);
        };
        a.uniqueSort = function (d) {
            var a, f = [], n = 0, b = 0;
            q = !S.detectDuplicates;
            P = !S.sortStable &&
                d.slice(0);
            d.sort(Da);
            if (q) {
                for (; a = d[b++];) a === d[b] && (n = f.push(b));
                for (; n--;) d.splice(f[n], 1)
            }
            P = null;
            return d
        };
        ea = a.getText = function (d) {
            var a, f = "", n = 0;
            a = d.nodeType;
            if (!a) for (; a = d[n++];) f += ea(a); else if (1 === a || 9 === a || 11 === a) {
                if ("string" === typeof d.textContent) return d.textContent;
                for (d = d.firstChild; d; d = d.nextSibling) f += ea(d)
            } else if (3 === a || 4 === a) return d.nodeValue;
            return f
        };
        t = a.selectors = {
            cacheLength: 50, createPseudo: b, match: na, attrHandle: {}, find: {}, relative: {
                ">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}
            }, preFilter: {
                ATTR: function (d) {
                    d[1] = d[1].replace(oa, ha);
                    d[3] = (d[3] || d[4] || d[5] || "").replace(oa, ha);
                    "~=" === d[2] && (d[3] = " " + d[3] + " ");
                    return d.slice(0, 4)
                }, CHILD: function (d) {
                    d[1] = d[1].toLowerCase();
                    "nth" === d[1].slice(0, 3) ? (d[3] || a.error(d[0]), d[4] = +(d[4] ? d[5] + (d[6] || 1) : 2 * ("even" === d[3] || "odd" === d[3])), d[5] = +(d[7] + d[8] || "odd" === d[3])) : d[3] && a.error(d[0]);
                    return d
                }, PSEUDO: function (d) {
                    var a, f = !d[6] && d[2];
                    if (na.CHILD.test(d[0])) return null;
                    d[3] ?
                        d[2] = d[4] || d[5] || "" : f && Fa.test(f) && (a = D(f, !0)) && (a = f.indexOf(")", f.length - a) - f.length) && (d[0] = d[0].slice(0, a), d[2] = f.slice(0, a));
                    return d.slice(0, 3)
                }
            }, filter: {
                TAG: function (d) {
                    var a = d.replace(oa, ha).toLowerCase();
                    return "*" === d ? function () {
                        return !0
                    } : function (d) {
                        return d.nodeName && d.nodeName.toLowerCase() === a
                    }
                }, CLASS: function (d) {
                    var a = T[d + " "];
                    return a || (a = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + d + "([\\x20\\t\\r\\n\\f]|$)")) && T(d, function (d) {
                        return a.test("string" === typeof d.className && d.className || "undefined" !==
                            typeof d.getAttribute && d.getAttribute("class") || "")
                    })
                }, ATTR: function (d, f, n) {
                    return function (b) {
                        b = a.attr(b, d);
                        if (null == b) return "!=" === f;
                        if (!f) return !0;
                        b += "";
                        return "=" === f ? b === n : "!=" === f ? b !== n : "^=" === f ? n && 0 === b.indexOf(n) : "*=" === f ? n && -1 < b.indexOf(n) : "$=" === f ? n && b.slice(-n.length) === n : "~=" === f ? -1 < (" " + b + " ").indexOf(n) : "|=" === f ? b === n || b.slice(0, n.length + 1) === n + "-" : !1
                    }
                }, CHILD: function (d, a, f, n, b) {
                    var G = "nth" !== d.slice(0, 3), c = "last" !== d.slice(-4), h = "of-type" === a;
                    return 1 === n && 0 === b ? function (d) {
                            return !!d.parentNode
                        } :
                        function (a, f, e) {
                            var m, B, g, k, y;
                            f = G !== c ? "nextSibling" : "previousSibling";
                            var l = a.parentNode, u = h && a.nodeName.toLowerCase();
                            e = !e && !h;
                            if (l) {
                                if (G) {
                                    for (; f;) {
                                        for (B = a; B = B[f];) if (h ? B.nodeName.toLowerCase() === u : 1 === B.nodeType) return !1;
                                        y = f = "only" === d && !y && "nextSibling"
                                    }
                                    return !0
                                }
                                y = [c ? l.firstChild : l.lastChild];
                                if (c && e) for (e = l[ba] || (l[ba] = {}), m = e[d] || [], k = m[0] === E && m[1], g = m[0] === E && m[2], B = k && l.childNodes[k]; B = ++k && B && B[f] || (g = k = 0) || y.pop();) {
                                    if (1 === B.nodeType && ++g && B === a) {
                                        e[d] = [E, k, g];
                                        break
                                    }
                                } else if (e && (m = (a[ba] ||
                                    (a[ba] = {}))[d]) && m[0] === E) g = m[1]; else for (; (B = ++k && B && B[f] || (g = k = 0) || y.pop()) && ((h ? B.nodeName.toLowerCase() !== u : 1 !== B.nodeType) || !++g || (e && ((B[ba] || (B[ba] = {}))[d] = [E, g]), B !== a));) ;
                                g -= b;
                                return g === n || 0 === g % n && 0 <= g / n
                            }
                        }
                }, PSEUDO: function (d, f) {
                    var n, c = t.pseudos[d] || t.setFilters[d.toLowerCase()] || a.error("unsupported pseudo: " + d);
                    return c[ba] ? c(f) : 1 < c.length ? (n = [d, d, "", f], t.setFilters.hasOwnProperty(d.toLowerCase()) ? b(function (d, a) {
                            for (var n, b = c(d, f), G = b.length; G--;) n = J.call(d, b[G]), d[n] = !(a[n] = b[G])
                        }) :
                        function (d) {
                            return c(d, 0, n)
                        }) : c
                }
            }, pseudos: {
                not: b(function (d) {
                    var a = [], f = [], n = fa(d.replace(Ea, "$1"));
                    return n[ba] ? b(function (d, a, f, b) {
                        b = n(d, null, b, []);
                        for (var c = d.length; c--;) if (f = b[c]) d[c] = !(a[c] = f)
                    }) : function (d, b, c) {
                        a[0] = d;
                        n(a, null, c, f);
                        return !f.pop()
                    }
                }), has: b(function (d) {
                    return function (f) {
                        return 0 < a(d, f).length
                    }
                }), contains: b(function (d) {
                    return function (a) {
                        return -1 < (a.textContent || a.innerText || ea(a)).indexOf(d)
                    }
                }), lang: b(function (d) {
                    aa.test(d || "") || a.error("unsupported lang: " + d);
                    d = d.replace(oa,
                        ha).toLowerCase();
                    return function (a) {
                        var f;
                        do if (f = K ? a.lang : a.getAttribute("xml:lang") || a.getAttribute("lang")) return f = f.toLowerCase(), f === d || 0 === f.indexOf(d + "-"); while ((a = a.parentNode) && 1 === a.nodeType);
                        return !1
                    }
                }), target: function (a) {
                    var f = d.location && d.location.hash;
                    return f && f.slice(1) === a.id
                }, root: function (d) {
                    return d === ka
                }, focus: function (d) {
                    return d === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(d.type || d.href || ~d.tabIndex)
                }, enabled: function (d) {
                    return !1 === d.disabled
                }, disabled: function (d) {
                    return !0 ===
                        d.disabled
                }, checked: function (d) {
                    var a = d.nodeName.toLowerCase();
                    return "input" === a && !!d.checked || "option" === a && !!d.selected
                }, selected: function (d) {
                    d.parentNode && d.parentNode.selectedIndex;
                    return !0 === d.selected
                }, empty: function (d) {
                    for (d = d.firstChild; d; d = d.nextSibling) if (6 > d.nodeType) return !1;
                    return !0
                }, parent: function (d) {
                    return !t.pseudos.empty(d)
                }, header: function (d) {
                    return Va.test(d.nodeName)
                }, input: function (d) {
                    return ia.test(d.nodeName)
                }, button: function (d) {
                    var a = d.nodeName.toLowerCase();
                    return "input" ===
                        a && "button" === d.type || "button" === a
                }, text: function (d) {
                    var a;
                    return "input" === d.nodeName.toLowerCase() && "text" === d.type && (null == (a = d.getAttribute("type")) || "text" === a.toLowerCase())
                }, first: k(function () {
                    return [0]
                }), last: k(function (d, a) {
                    return [a - 1]
                }), eq: k(function (d, a, f) {
                    return [0 > f ? f + a : f]
                }), even: k(function (d, a) {
                    for (var f = 0; f < a; f += 2) d.push(f);
                    return d
                }), odd: k(function (d, a) {
                    for (var f = 1; f < a; f += 2) d.push(f);
                    return d
                }), lt: k(function (d, a, f) {
                    for (a = 0 > f ? f + a : f; 0 <= --a;) d.push(a);
                    return d
                }), gt: k(function (d, a, f) {
                    for (f =
                             0 > f ? f + a : f; ++f < a;) d.push(f);
                    return d
                })
            }
        };
        t.pseudos.nth = t.pseudos.eq;
        for (Q in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) t.pseudos[Q] = m(Q);
        for (Q in{submit: !0, reset: !0}) t.pseudos[Q] = g(Q);
        l.prototype = t.filters = t.pseudos;
        t.setFilters = new l;
        D = a.tokenize = function (d, f) {
            var n, b, c, h, e, m, B;
            if (e = M[d + " "]) return f ? 0 : e.slice(0);
            e = d;
            m = [];
            for (B = t.preFilter; e;) {
                if (!n || (b = Xa.exec(e))) b && (e = e.slice(b[0].length) || e), m.push(c = []);
                n = !1;
                if (b = da.exec(e)) n = b.shift(), c.push({
                    value: n,
                    type: b[0].replace(Ea, " ")
                }), e = e.slice(n.length);
                for (h in t.filter) !(b = na[h].exec(e)) || B[h] && !(b = B[h](b)) || (n = b.shift(), c.push({
                    value: n,
                    type: h,
                    matches: b
                }), e = e.slice(n.length));
                if (!n) break
            }
            return f ? e.length : e ? a.error(d) : M(d, m).slice(0)
        };
        fa = a.compile = function (d, a) {
            var f, n = [], b = [], c = A[d + " "];
            if (!c) {
                a || (a = D(d));
                for (f = a.length; f--;) c = X(a[f]), c[ba] ? n.push(c) : b.push(c);
                c = A(d, W(b, n));
                c.selector = d
            }
            return c
        };
        ca = a.select = function (d, a, f, n) {
            var b, c, G, h, e = "function" === typeof d && d, m = !n && D(d = e.selector || d);
            f = f || [];
            if (1 === m.length) {
                c = m[0] = m[0].slice(0);
                if (2 < c.length &&
                    "ID" === (G = c[0]).type && S.getById && 9 === a.nodeType && K && t.relative[c[1].type]) {
                    a = (t.find.ID(G.matches[0].replace(oa, ha), a) || [])[0];
                    if (!a) return f;
                    e && (a = a.parentNode);
                    d = d.slice(c.shift().value.length)
                }
                for (b = na.needsContext.test(d) ? 0 : c.length; b--;) {
                    G = c[b];
                    if (t.relative[h = G.type]) break;
                    if (h = t.find[h]) if (n = h(G.matches[0].replace(oa, ha), U.test(c[0].type) && y(a.parentNode) || a)) {
                        c.splice(b, 1);
                        d = n.length && u(c);
                        if (!d) return ra.apply(f, n), f;
                        break
                    }
                }
            }
            (e || fa(d, m))(n, a, !K, f, U.test(d) && y(a.parentNode) || a);
            return f
        };
        S.sortStable = ba.split("").sort(Da).join("") === ba;
        S.detectDuplicates = !!q;
        r();
        S.sortDetached = c(function (d) {
            return d.compareDocumentPosition(H.createElement("div")) & 1
        });
        c(function (d) {
            d.innerHTML = "<a href='#'></a>";
            return "#" === d.firstChild.getAttribute("href")
        }) || h("type|href|height|width", function (d, a, f) {
            if (!f) return d.getAttribute(a, "type" === a.toLowerCase() ? 1 : 2)
        });
        S.attributes && c(function (d) {
            d.innerHTML = "<input/>";
            d.firstChild.setAttribute("value", "");
            return "" === d.firstChild.getAttribute("value")
        }) ||
        h("value", function (d, a, f) {
            if (!f && "input" === d.nodeName.toLowerCase()) return d.defaultValue
        });
        c(function (d) {
            return null == d.getAttribute("disabled")
        }) || h("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (d, a, f) {
            var n;
            if (!f) return !0 === d[a] ? a.toLowerCase() : (n = d.getAttributeNode(a)) && n.specified ? n.value : null
        });
        return a
    }(a);
    f.find = na;
    f.expr = na.selectors;
    f.expr[":"] = f.expr.pseudos;
    f.unique = na.uniqueSort;
    f.text = na.getText;
    f.isXMLDoc = na.isXML;
    f.contains = na.contains;
    var oa = f.expr.match.needsContext, Oa = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Va = /^.[^:#\[\.,]*$/;
    f.filter = function (d, a, n) {
        var b = a[0];
        n && (d = ":not(" + d + ")");
        return 1 === a.length && 1 === b.nodeType ? f.find.matchesSelector(b, d) ? [b] : [] : f.find.matches(d, f.grep(a, function (d) {
            return 1 === d.nodeType
        }))
    };
    f.fn.extend({
        find: function (d) {
            var a, n = [], b = this, c = b.length;
            if ("string" !== typeof d) return this.pushStack(f(d).filter(function () {
                for (a = 0; a < c; a++) if (f.contains(b[a], this)) return !0
            }));
            for (a =
                     0; a < c; a++) f.find(d, b[a], n);
            n = this.pushStack(1 < c ? f.unique(n) : n);
            n.selector = this.selector ? this.selector + " " + d : d;
            return n
        }, filter: function (d) {
            return this.pushStack(c(this, d || [], !1))
        }, not: function (d) {
            return this.pushStack(c(this, d || [], !0))
        }, is: function (d) {
            return !!c(this, "string" === typeof d && oa.test(d) ? f(d) : d || [], !1).length
        }
    });
    var pa, F = a.document, Gb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (f.fn.init = function (d, a) {
        var n, b;
        if (!d) return this;
        if ("string" === typeof d) {
            n = "<" === d.charAt(0) && ">" === d.charAt(d.length -
                1) && 3 <= d.length ? [null, d, null] : Gb.exec(d);
            if (!n || !n[1] && a) return !a || a.jquery ? (a || pa).find(d) : this.constructor(a).find(d);
            if (n[1]) {
                if (a = a instanceof f ? a[0] : a, f.merge(this, f.parseHTML(n[1], a && a.nodeType ? a.ownerDocument || a : F, !0)), Oa.test(n[1]) && f.isPlainObject(a)) for (n in a) if (f.isFunction(this[n])) this[n](a[n]); else this.attr(n, a[n])
            } else {
                if ((b = F.getElementById(n[2])) && b.parentNode) {
                    if (b.id !== n[2]) return pa.find(d);
                    this.length = 1;
                    this[0] = b
                }
                this.context = F;
                this.selector = d
            }
            return this
        }
        if (d.nodeType) return this.context =
            this[0] = d, this.length = 1, this;
        if (f.isFunction(d)) return "undefined" !== typeof pa.ready ? pa.ready(d) : d(f);
        void 0 !== d.selector && (this.selector = d.selector, this.context = d.context);
        return f.makeArray(d, this)
    }).prototype = f.fn;
    pa = f(F);
    var Hb = /^(?:parents|prev(?:Until|All))/, Ib = {children: !0, contents: !0, next: !0, prev: !0};
    f.extend({
        dir: function (d, a, n) {
            var b = [];
            for (d = d[a]; d && 9 !== d.nodeType && (void 0 === n || 1 !== d.nodeType || !f(d).is(n));) 1 === d.nodeType && b.push(d), d = d[a];
            return b
        }, sibling: function (d, a) {
            for (var f = []; d; d =
                d.nextSibling) 1 === d.nodeType && d !== a && f.push(d);
            return f
        }
    });
    f.fn.extend({
        has: function (d) {
            var a, n = f(d, this), b = n.length;
            return this.filter(function () {
                for (a = 0; a < b; a++) if (f.contains(this, n[a])) return !0
            })
        }, closest: function (d, a) {
            for (var n, b = 0, c = this.length, h = [], e = oa.test(d) || "string" !== typeof d ? f(d, a || this.context) : 0; b < c; b++) for (n = this[b]; n && n !== a; n = n.parentNode) if (11 > n.nodeType && (e ? -1 < e.index(n) : 1 === n.nodeType && f.find.matchesSelector(n, d))) {
                h.push(n);
                break
            }
            return this.pushStack(1 < h.length ? f.unique(h) : h)
        },
        index: function (d) {
            return d ? "string" === typeof d ? f.inArray(this[0], f(d)) : f.inArray(d.jquery ? d[0] : d, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (d, a) {
            return this.pushStack(f.unique(f.merge(this.get(), f(d, a))))
        }, addBack: function (d) {
            return this.add(null == d ? this.prevObject : this.prevObject.filter(d))
        }
    });
    f.each({
        parent: function (d) {
            return (d = d.parentNode) && 11 !== d.nodeType ? d : null
        }, parents: function (d) {
            return f.dir(d, "parentNode")
        }, parentsUntil: function (d, a, n) {
            return f.dir(d,
                "parentNode", n)
        }, next: function (d) {
            return b(d, "nextSibling")
        }, prev: function (d) {
            return b(d, "previousSibling")
        }, nextAll: function (d) {
            return f.dir(d, "nextSibling")
        }, prevAll: function (d) {
            return f.dir(d, "previousSibling")
        }, nextUntil: function (d, a, n) {
            return f.dir(d, "nextSibling", n)
        }, prevUntil: function (d, a, n) {
            return f.dir(d, "previousSibling", n)
        }, siblings: function (d) {
            return f.sibling((d.parentNode || {}).firstChild, d)
        }, children: function (d) {
            return f.sibling(d.firstChild)
        }, contents: function (d) {
            return f.nodeName(d,
                "iframe") ? d.contentDocument || d.contentWindow.document : f.merge([], d.childNodes)
        }
    }, function (d, a) {
        f.fn[d] = function (n, b) {
            var c = f.map(this, a, n);
            "Until" !== d.slice(-5) && (b = n);
            b && "string" === typeof b && (c = f.filter(b, c));
            1 < this.length && (Ib[d] || (c = f.unique(c)), Hb.test(d) && (c = c.reverse()));
            return this.pushStack(c)
        }
    });
    var ha = /\S+/g, gb = {};
    f.Callbacks = function (d) {
        d = "string" === typeof d ? gb[d] || e(d) : f.extend({}, d);
        var a, n, b, c, h, m, g = [], k = !d.once && [], l = function (f) {
            n = d.memory && f;
            b = !0;
            h = m || 0;
            m = 0;
            c = g.length;
            for (a = !0; g &&
            h < c; h++) if (!1 === g[h].apply(f[0], f[1]) && d.stopOnFalse) {
                n = !1;
                break
            }
            a = !1;
            g && (k ? k.length && l(k.shift()) : n ? g = [] : y.disable())
        }, y = {
            add: function () {
                if (g) {
                    var b = g.length;
                    (function Fb(a) {
                        f.each(a, function (a, n) {
                            var b = f.type(n);
                            "function" === b ? d.unique && y.has(n) || g.push(n) : n && n.length && "string" !== b && Fb(n)
                        })
                    })(arguments);
                    a ? c = g.length : n && (m = b, l(n))
                }
                return this
            }, remove: function () {
                g && f.each(arguments, function (d, n) {
                    for (var b; -1 < (b = f.inArray(n, g, b));) g.splice(b, 1), a && (b <= c && c--, b <= h && h--)
                });
                return this
            }, has: function (d) {
                return d ?
                    -1 < f.inArray(d, g) : !(!g || !g.length)
            }, empty: function () {
                g = [];
                c = 0;
                return this
            }, disable: function () {
                g = k = n = void 0;
                return this
            }, disabled: function () {
                return !g
            }, lock: function () {
                k = void 0;
                n || y.disable();
                return this
            }, locked: function () {
                return !k
            }, fireWith: function (d, f) {
                !g || b && !k || (f = f || [], f = [d, f.slice ? f.slice() : f], a ? k.push(f) : l(f));
                return this
            }, fire: function () {
                y.fireWith(this, arguments);
                return this
            }, fired: function () {
                return !!b
            }
        };
        return y
    };
    f.extend({
        Deferred: function (d) {
            var a = [["resolve", "done", f.Callbacks("once memory"),
                    "resolved"], ["reject", "fail", f.Callbacks("once memory"), "rejected"], ["notify", "progress", f.Callbacks("memory")]],
                n = "pending", b = {
                    state: function () {
                        return n
                    }, always: function () {
                        c.done(arguments).fail(arguments);
                        return this
                    }, then: function () {
                        var d = arguments;
                        return f.Deferred(function (n) {
                            f.each(a, function (a, G) {
                                var h = f.isFunction(d[a]) && d[a];
                                c[G[1]](function () {
                                    var d = h && h.apply(this, arguments);
                                    if (d && f.isFunction(d.promise)) d.promise().done(n.resolve).fail(n.reject).progress(n.notify); else n[G[0] + "With"](this ===
                                    b ? n.promise() : this, h ? [d] : arguments)
                                })
                            });
                            d = null
                        }).promise()
                    }, promise: function (d) {
                        return null != d ? f.extend(d, b) : b
                    }
                }, c = {};
            b.pipe = b.then;
            f.each(a, function (d, f) {
                var h = f[2], e = f[3];
                b[f[1]] = h.add;
                e && h.add(function () {
                    n = e
                }, a[d ^ 1][2].disable, a[2][2].lock);
                c[f[0]] = function () {
                    c[f[0] + "With"](this === c ? b : this, arguments);
                    return this
                };
                c[f[0] + "With"] = h.fireWith
            });
            b.promise(c);
            d && d.call(c, c);
            return c
        }, when: function (d) {
            var a = 0, n = Z.call(arguments), b = n.length, c = 1 !== b || d && f.isFunction(d.promise) ? b : 0,
                h = 1 === c ? d : f.Deferred(),
                e = function (d, a, f) {
                    return function (n) {
                        a[d] = this;
                        f[d] = 1 < arguments.length ? Z.call(arguments) : n;
                        f === m ? h.notifyWith(a, f) : --c || h.resolveWith(a, f)
                    }
                }, m, g, k;
            if (1 < b) for (m = Array(b), g = Array(b), k = Array(b); a < b; a++) n[a] && f.isFunction(n[a].promise) ? n[a].promise().done(e(a, k, n)).fail(h.reject).progress(e(a, g, m)) : --c;
            c || h.resolveWith(k, n);
            return h.promise()
        }
    });
    var Pa;
    f.fn.ready = function (d) {
        f.ready.promise().done(d);
        return this
    };
    f.extend({
        isReady: !1, readyWait: 1, holdReady: function (d) {
            d ? f.readyWait++ : f.ready(!0)
        }, ready: function (d) {
            if (!0 ===
            d ? !--f.readyWait : !f.isReady) {
                if (!F.body) return setTimeout(f.ready);
                f.isReady = !0;
                !0 !== d && 0 < --f.readyWait || (Pa.resolveWith(F, [f]), f.fn.triggerHandler && (f(F).triggerHandler("ready"), f(F).off("ready")))
            }
        }
    });
    f.ready.promise = function (d) {
        if (!Pa) if (Pa = f.Deferred(), "complete" === F.readyState) setTimeout(f.ready); else if (F.addEventListener) F.addEventListener("DOMContentLoaded", l, !1), a.addEventListener("load", l, !1); else {
            F.attachEvent("onreadystatechange", l);
            a.attachEvent("onload", l);
            var b = !1;
            try {
                b = null == a.frameElement &&
                    F.documentElement
            } catch (n) {
            }
            b && b.doScroll && function ta() {
                if (!f.isReady) {
                    try {
                        b.doScroll("left")
                    } catch (d) {
                        return setTimeout(ta, 50)
                    }
                    g();
                    f.ready()
                }
            }()
        }
        return Pa.promise(d)
    };
    for (var Jb in f(u)) break;
    u.ownLast = "0" !== Jb;
    u.inlineBlockNeedsLayout = !1;
    f(function () {
        var d, a, f;
        (a = F.getElementsByTagName("body")[0]) && a.style && (d = F.createElement("div"), f = F.createElement("div"), f.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", a.appendChild(f).appendChild(d), "undefined" !== typeof d.style.zoom &&
        (d.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", u.inlineBlockNeedsLayout = d = 3 === d.offsetWidth) && (a.style.zoom = 1), a.removeChild(f))
    });
    (function () {
        var d = F.createElement("div");
        if (null == u.deleteExpando) {
            u.deleteExpando = !0;
            try {
                delete d.test
            } catch (a) {
                u.deleteExpando = !1
            }
        }
    })();
    f.acceptData = function (d) {
        var a = f.noData[(d.nodeName + " ").toLowerCase()], n = +d.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !a || !0 !== a && d.getAttribute("classid") === a
    };
    var Bb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ab = /([A-Z])/g;
    f.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (d) {
            d = d.nodeType ? f.cache[d[f.expando]] : d[f.expando];
            return !!d && !t(d)
        },
        data: function (d, a, f) {
            return k(d, a, f)
        },
        removeData: function (d, a) {
            return s(d, a)
        },
        _data: function (d, a, f) {
            return k(d, a, f, !0)
        },
        _removeData: function (d, a) {
            return s(d, a, !0)
        }
    });
    f.fn.extend({
        data: function (d, a) {
            var n, b, c, h = this[0], e = h && h.attributes;
            if (void 0 === d) {
                if (this.length && (c = f.data(h), 1 === h.nodeType && !f._data(h,
                    "parsedAttrs"))) {
                    for (n = e.length; n--;) e[n] && (b = e[n].name, 0 === b.indexOf("data-") && (b = f.camelCase(b.slice(5)), p(h, b, c[b])));
                    f._data(h, "parsedAttrs", !0)
                }
                return c
            }
            return "object" === typeof d ? this.each(function () {
                f.data(this, d)
            }) : 1 < arguments.length ? this.each(function () {
                f.data(this, d, a)
            }) : h ? p(h, d, f.data(h, d)) : void 0
        }, removeData: function (d) {
            return this.each(function () {
                f.removeData(this, d)
            })
        }
    });
    f.extend({
        queue: function (d, a, n) {
            var b;
            if (d) return a = (a || "fx") + "queue", b = f._data(d, a), n && (!b || f.isArray(n) ? b = f._data(d,
                a, f.makeArray(n)) : b.push(n)), b || []
        }, dequeue: function (d, a) {
            a = a || "fx";
            var b = f.queue(d, a), c = b.length, h = b.shift(), e = f._queueHooks(d, a), m = function () {
                f.dequeue(d, a)
            };
            "inprogress" === h && (h = b.shift(), c--);
            h && ("fx" === a && b.unshift("inprogress"), delete e.stop, h.call(d, m, e));
            !c && e && e.empty.fire()
        }, _queueHooks: function (d, a) {
            var b = a + "queueHooks";
            return f._data(d, b) || f._data(d, b, {
                empty: f.Callbacks("once memory").add(function () {
                    f._removeData(d, a + "queue");
                    f._removeData(d, b)
                })
            })
        }
    });
    f.fn.extend({
        queue: function (d, a) {
            var b =
                2;
            "string" !== typeof d && (a = d, d = "fx", b--);
            return arguments.length < b ? f.queue(this[0], d) : void 0 === a ? this : this.each(function () {
                var b = f.queue(this, d, a);
                f._queueHooks(this, d);
                "fx" === d && "inprogress" !== b[0] && f.dequeue(this, d)
            })
        }, dequeue: function (d) {
            return this.each(function () {
                f.dequeue(this, d)
            })
        }, clearQueue: function (d) {
            return this.queue(d || "fx", [])
        }, promise: function (d, a) {
            var b, c = 1, h = f.Deferred(), e = this, m = this.length, g = function () {
                --c || h.resolveWith(e, [e])
            };
            "string" !== typeof d && (a = d, d = void 0);
            for (d = d || "fx"; m--;) (b =
                f._data(e[m], d + "queueHooks")) && b.empty && (c++, b.empty.add(g));
            g();
            return h.promise(a)
        }
    });
    var Qa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, qa = ["Top", "Right", "Bottom", "Left"],
        ua = function (d, a) {
            d = a || d;
            return "none" === f.css(d, "display") || !f.contains(d.ownerDocument, d)
        }, sa = f.access = function (d, a, b, c, h, e, m) {
            var g = 0, k = d.length, y = null == b;
            if ("object" === f.type(b)) for (g in h = !0, b) f.access(d, a, g, b[g], !0, e, m); else if (void 0 !== c && (h = !0, f.isFunction(c) || (m = !0), y && (m ? (a.call(d, c), a = null) : (y = a, a = function (d, a, b) {
                return y.call(f(d),
                    b)
            })), a)) for (; g < k; g++) a(d[g], b, m ? c : c.call(d[g], g, a(d[g], b)));
            return h ? d : y ? a.call(d) : k ? a(d[0], b) : e
        }, Ba = /^(?:checkbox|radio)$/i;
    (function () {
        var d = F.createElement("input"), a = F.createElement("div"), f = F.createDocumentFragment();
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        u.leadingWhitespace = 3 === a.firstChild.nodeType;
        u.tbody = !a.getElementsByTagName("tbody").length;
        u.htmlSerialize = !!a.getElementsByTagName("link").length;
        u.html5Clone = "<:nav></:nav>" !== F.createElement("nav").cloneNode(!0).outerHTML;
        d.type = "checkbox";
        d.checked = !0;
        f.appendChild(d);
        u.appendChecked = d.checked;
        a.innerHTML = "<textarea>x</textarea>";
        u.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue;
        f.appendChild(a);
        a.innerHTML = "<input type='radio' checked='checked' name='t'/>";
        u.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
        u.noCloneEvent = !0;
        a.attachEvent && (a.attachEvent("onclick", function () {
            u.noCloneEvent = !1
        }), a.cloneNode(!0).click());
        if (null == u.deleteExpando) {
            u.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                u.deleteExpando =
                    !1
            }
        }
    })();
    (function () {
        var d, f, b = F.createElement("div");
        for (d in{
            submit: !0,
            change: !0,
            focusin: !0
        }) f = "on" + d, (u[d + "Bubbles"] = f in a) || (b.setAttribute(f, "t"), u[d + "Bubbles"] = !1 === b.attributes[f].expando)
    })();
    var X = /^(?:input|select|textarea)$/i, ba = /^key/, Ya = /^(?:mouse|pointer|contextmenu)|click/,
        Ja = /^(?:focusinfocus|focusoutblur)$/, Fa = /^([^.]*)(?:\.(.+)|)$/;
    f.event = {
        global: {},
        add: function (d, a, b, c, h) {
            var e, m, g, k, y, l, u, x, w;
            if (g = f._data(d)) {
                b.handler && (k = b, b = k.handler, h = k.selector);
                b.guid || (b.guid = f.guid++);
                (m = g.events) || (m = g.events = {});
                (y = g.handle) || (y = g.handle = function (d) {
                    return "undefined" === typeof f || d && f.event.triggered === d.type ? void 0 : f.event.dispatch.apply(y.elem, arguments)
                }, y.elem = d);
                a = (a || "").match(ha) || [""];
                for (g = a.length; g--;) e = Fa.exec(a[g]) || [], x = l = e[1], w = (e[2] || "").split(".").sort(), x && (e = f.event.special[x] || {}, x = (h ? e.delegateType : e.bindType) || x, e = f.event.special[x] || {}, l = f.extend({
                    type: x,
                    origType: l,
                    data: c,
                    handler: b,
                    guid: b.guid,
                    selector: h,
                    needsContext: h && f.expr.match.needsContext.test(h),
                    namespace: w.join(".")
                }, k), (u = m[x]) || (u = m[x] = [], u.delegateCount = 0, e.setup && !1 !== e.setup.call(d, c, w, y) || (d.addEventListener ? d.addEventListener(x, y, !1) : d.attachEvent && d.attachEvent("on" + x, y))), e.add && (e.add.call(d, l), l.handler.guid || (l.handler.guid = b.guid)), h ? u.splice(u.delegateCount++, 0, l) : u.push(l), f.event.global[x] = !0);
                d = null
            }
        },
        remove: function (d, a, b, c, h) {
            var e, m, g, k, y, l, u, x, w, I, p, X = f.hasData(d) && f._data(d);
            if (X && (l = X.events)) {
                a = (a || "").match(ha) || [""];
                for (y = a.length; y--;) if (g = Fa.exec(a[y]) || [], w =
                    p = g[1], I = (g[2] || "").split(".").sort(), w) {
                    u = f.event.special[w] || {};
                    w = (c ? u.delegateType : u.bindType) || w;
                    x = l[w] || [];
                    g = g[2] && new RegExp("(^|\\.)" + I.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    for (k = e = x.length; e--;) m = x[e], !h && p !== m.origType || b && b.guid !== m.guid || g && !g.test(m.namespace) || c && c !== m.selector && ("**" !== c || !m.selector) || (x.splice(e, 1), m.selector && x.delegateCount--, u.remove && u.remove.call(d, m));
                    k && !x.length && (u.teardown && !1 !== u.teardown.call(d, I, X.handle) || f.removeEvent(d, w, X.handle), delete l[w])
                } else for (w in l) f.event.remove(d,
                    w + a[y], b, c, !0);
                f.isEmptyObject(l) && (delete X.handle, f._removeData(d, "events"))
            }
        },
        trigger: function (d, b, n, c) {
            var h, e, m, g, k, y, l = [n || F], u = I.call(d, "type") ? d.type : d;
            k = I.call(d, "namespace") ? d.namespace.split(".") : [];
            m = h = n = n || F;
            if (3 !== n.nodeType && 8 !== n.nodeType && !Ja.test(u + f.event.triggered) && (0 <= u.indexOf(".") && (k = u.split("."), u = k.shift(), k.sort()), e = 0 > u.indexOf(":") && "on" + u, d = d[f.expando] ? d : new f.Event(u, "object" === typeof d && d), d.isTrigger = c ? 2 : 3, d.namespace = k.join("."), d.namespace_re = d.namespace ? new RegExp("(^|\\.)" +
                k.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, d.result = void 0, d.target || (d.target = n), b = null == b ? [d] : f.makeArray(b, [d]), k = f.event.special[u] || {}, c || !k.trigger || !1 !== k.trigger.apply(n, b))) {
                if (!c && !k.noBubble && !f.isWindow(n)) {
                    g = k.delegateType || u;
                    Ja.test(g + u) || (m = m.parentNode);
                    for (; m; m = m.parentNode) l.push(m), h = m;
                    h === (n.ownerDocument || F) && l.push(h.defaultView || h.parentWindow || a)
                }
                for (y = 0; (m = l[y++]) && !d.isPropagationStopped();) d.type = 1 < y ? g : k.bindType || u, (h = (f._data(m, "events") || {})[d.type] && f._data(m, "handle")) &&
                h.apply(m, b), (h = e && m[e]) && h.apply && f.acceptData(m) && (d.result = h.apply(m, b), !1 === d.result && d.preventDefault());
                d.type = u;
                if (!(c || d.isDefaultPrevented() || k._default && !1 !== k._default.apply(l.pop(), b)) && f.acceptData(n) && e && n[u] && !f.isWindow(n)) {
                    (h = n[e]) && (n[e] = null);
                    f.event.triggered = u;
                    try {
                        n[u]()
                    } catch (x) {
                    }
                    f.event.triggered = void 0;
                    h && (n[e] = h)
                }
                return d.result
            }
        },
        dispatch: function (d) {
            d = f.event.fix(d);
            var a, b, c, h, e = [], m = Z.call(arguments);
            a = (f._data(this, "events") || {})[d.type] || [];
            var g = f.event.special[d.type] ||
                {};
            m[0] = d;
            d.delegateTarget = this;
            if (!g.preDispatch || !1 !== g.preDispatch.call(this, d)) {
                e = f.event.handlers.call(this, d, a);
                for (a = 0; (c = e[a++]) && !d.isPropagationStopped();) for (d.currentTarget = c.elem, h = 0; (b = c.handlers[h++]) && !d.isImmediatePropagationStopped();) if (!d.namespace_re || d.namespace_re.test(b.namespace)) d.handleObj = b, d.data = b.data, b = ((f.event.special[b.origType] || {}).handle || b.handler).apply(c.elem, m), void 0 !== b && !1 === (d.result = b) && (d.preventDefault(), d.stopPropagation());
                g.postDispatch && g.postDispatch.call(this,
                    d);
                return d.result
            }
        },
        handlers: function (d, a) {
            var b, c, h, e, m = [], g = a.delegateCount, k = d.target;
            if (g && k.nodeType && (!d.button || "click" !== d.type)) for (; k != this; k = k.parentNode || this) if (1 === k.nodeType && (!0 !== k.disabled || "click" !== d.type)) {
                h = [];
                for (e = 0; e < g; e++) c = a[e], b = c.selector + " ", void 0 === h[b] && (h[b] = c.needsContext ? 0 <= f(b, this).index(k) : f.find(b, this, null, [k]).length), h[b] && h.push(c);
                h.length && m.push({elem: k, handlers: h})
            }
            g < a.length && m.push({elem: this, handlers: a.slice(g)});
            return m
        },
        fix: function (d) {
            if (d[f.expando]) return d;
            var a, b, c;
            a = d.type;
            var h = d, e = this.fixHooks[a];
            e || (this.fixHooks[a] = e = Ya.test(a) ? this.mouseHooks : ba.test(a) ? this.keyHooks : {});
            c = e.props ? this.props.concat(e.props) : this.props;
            d = new f.Event(h);
            for (a = c.length; a--;) b = c[a], d[b] = h[b];
            d.target || (d.target = h.srcElement || F);
            3 === d.target.nodeType && (d.target = d.target.parentNode);
            d.metaKey = !!d.metaKey;
            return e.filter ? e.filter(d, h) : d
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"], filter: function (d, a) {
                null == d.which && (d.which = null != a.charCode ? a.charCode : a.keyCode);
                return d
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (d, a) {
                var f, b, c = a.button, h = a.fromElement;
                null == d.pageX && null != a.clientX && (f = d.target.ownerDocument || F, b = f.documentElement, f = f.body, d.pageX = a.clientX + (b && b.scrollLeft || f && f.scrollLeft || 0) - (b && b.clientLeft ||
                    f && f.clientLeft || 0), d.pageY = a.clientY + (b && b.scrollTop || f && f.scrollTop || 0) - (b && b.clientTop || f && f.clientTop || 0));
                !d.relatedTarget && h && (d.relatedTarget = h === d.target ? a.toElement : h);
                d.which || void 0 === c || (d.which = c & 1 ? 1 : c & 2 ? 3 : c & 4 ? 2 : 0);
                return d
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== C() && this.focus) try {
                        return this.focus(), !1
                    } catch (d) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === C() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if (f.nodeName(this,
                        "input") && "checkbox" === this.type && this.click) return this.click(), !1
                }, _default: function (d) {
                    return f.nodeName(d.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (d) {
                    void 0 !== d.result && d.originalEvent && (d.originalEvent.returnValue = d.result)
                }
            }
        },
        simulate: function (d, a, b, c) {
            d = f.extend(new f.Event, b, {type: d, isSimulated: !0, originalEvent: {}});
            c ? f.event.trigger(d, null, a) : f.event.dispatch.call(a, d);
            d.isDefaultPrevented() && b.preventDefault()
        }
    };
    f.removeEvent = F.removeEventListener ? function (d, a, f) {
        d.removeEventListener &&
        d.removeEventListener(a, f, !1)
    } : function (d, a, f) {
        a = "on" + a;
        d.detachEvent && ("undefined" === typeof d[a] && (d[a] = null), d.detachEvent(a, f))
    };
    f.Event = function (d, a) {
        if (!(this instanceof f.Event)) return new f.Event(d, a);
        d && d.type ? (this.originalEvent = d, this.type = d.type, this.isDefaultPrevented = d.defaultPrevented || void 0 === d.defaultPrevented && !1 === d.returnValue ? L : E) : this.type = d;
        a && f.extend(this, a);
        this.timeStamp = d && d.timeStamp || f.now();
        this[f.expando] = !0
    };
    f.Event.prototype = {
        isDefaultPrevented: E, isPropagationStopped: E,
        isImmediatePropagationStopped: E, preventDefault: function () {
            var d = this.originalEvent;
            this.isDefaultPrevented = L;
            d && (d.preventDefault ? d.preventDefault() : d.returnValue = !1)
        }, stopPropagation: function () {
            var d = this.originalEvent;
            this.isPropagationStopped = L;
            d && (d.stopPropagation && d.stopPropagation(), d.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            var d = this.originalEvent;
            this.isImmediatePropagationStopped = L;
            d && d.stopImmediatePropagation && d.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"
    }, function (d, a) {
        f.event.special[d] = {
            delegateType: a, bindType: a, handle: function (d) {
                var b, c = d.relatedTarget, h = d.handleObj;
                if (!c || c !== this && !f.contains(this, c)) d.type = h.origType, b = h.handler.apply(this, arguments), d.type = a;
                return b
            }
        }
    });
    u.submitBubbles || (f.event.special.submit = {
        setup: function () {
            if (f.nodeName(this, "form")) return !1;
            f.event.add(this, "click._submit keypress._submit", function (d) {
                d = d.target;
                (d = f.nodeName(d, "input") || f.nodeName(d,
                    "button") ? d.form : void 0) && !f._data(d, "submitBubbles") && (f.event.add(d, "submit._submit", function (d) {
                    d._submit_bubble = !0
                }), f._data(d, "submitBubbles", !0))
            })
        }, postDispatch: function (d) {
            d._submit_bubble && (delete d._submit_bubble, this.parentNode && !d.isTrigger && f.event.simulate("submit", this.parentNode, d, !0))
        }, teardown: function () {
            if (f.nodeName(this, "form")) return !1;
            f.event.remove(this, "._submit")
        }
    });
    u.changeBubbles || (f.event.special.change = {
        setup: function () {
            if (X.test(this.nodeName)) {
                if ("checkbox" === this.type ||
                    "radio" === this.type) f.event.add(this, "propertychange._change", function (d) {
                    "checked" === d.originalEvent.propertyName && (this._just_changed = !0)
                }), f.event.add(this, "click._change", function (d) {
                    this._just_changed && !d.isTrigger && (this._just_changed = !1);
                    f.event.simulate("change", this, d, !0)
                });
                return !1
            }
            f.event.add(this, "beforeactivate._change", function (d) {
                d = d.target;
                X.test(d.nodeName) && !f._data(d, "changeBubbles") && (f.event.add(d, "change._change", function (d) {
                    !this.parentNode || d.isSimulated || d.isTrigger || f.event.simulate("change",
                        this.parentNode, d, !0)
                }), f._data(d, "changeBubbles", !0))
            })
        }, handle: function (d) {
            var a = d.target;
            if (this !== a || d.isSimulated || d.isTrigger || "radio" !== a.type && "checkbox" !== a.type) return d.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            f.event.remove(this, "._change");
            return !X.test(this.nodeName)
        }
    });
    u.focusinBubbles || f.each({focus: "focusin", blur: "focusout"}, function (d, a) {
        var b = function (d) {
            f.event.simulate(a, d.target, f.event.fix(d), !0)
        };
        f.event.special[a] = {
            setup: function () {
                var c = this.ownerDocument ||
                    this, h = f._data(c, a);
                h || c.addEventListener(d, b, !0);
                f._data(c, a, (h || 0) + 1)
            }, teardown: function () {
                var c = this.ownerDocument || this, h = f._data(c, a) - 1;
                h ? f._data(c, a, h) : (c.removeEventListener(d, b, !0), f._removeData(c, a))
            }
        }
    });
    f.fn.extend({
        on: function (d, a, b, c, h) {
            var e, m;
            if ("object" === typeof d) {
                "string" !== typeof a && (b = b || a, a = void 0);
                for (e in d) this.on(e, a, b, d[e], h);
                return this
            }
            null == b && null == c ? (c = a, b = a = void 0) : null == c && ("string" === typeof a ? (c = b, b = void 0) : (c = b, b = a, a = void 0));
            if (!1 === c) c = E; else if (!c) return this;
            1 === h && (m = c, c = function (d) {
                f().off(d);
                return m.apply(this, arguments)
            }, c.guid = m.guid || (m.guid = f.guid++));
            return this.each(function () {
                f.event.add(this, d, c, b, a)
            })
        }, one: function (d, a, f, b) {
            return this.on(d, a, f, b, 1)
        }, off: function (d, a, b) {
            var c;
            if (d && d.preventDefault && d.handleObj) return c = d.handleObj, f(d.delegateTarget).off(c.namespace ? c.origType + "." + c.namespace : c.origType, c.selector, c.handler), this;
            if ("object" === typeof d) {
                for (c in d) this.off(c, a, d[c]);
                return this
            }
            if (!1 === a || "function" === typeof a) b = a, a = void 0;
            !1 === b && (b = E);
            return this.each(function () {
                f.event.remove(this, d, b, a)
            })
        }, trigger: function (d, a) {
            return this.each(function () {
                f.event.trigger(d, a, this)
            })
        }, triggerHandler: function (d, a) {
            var b = this[0];
            if (b) return f.event.trigger(d, a, b, !0)
        }
    });
    var Ka = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Kb = / jQuery\d+="(?:null|\d+)"/g, jb = new RegExp("<(?:" + Ka + ")[\\s/>]", "i"), Za = /^\s+/,
        kb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        lb = /<([\w:]+)/, mb = /<tbody/i, Lb = /<|&#?\w+;/, Mb = /<(?:script|style|link)/i,
        Nb = /checked\s*(?:[^=]|=\s*.checked.)/i, nb = /^$|\/(?:java|ecma)script/i, Cb = /^true\/(.*)/,
        Ob = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, la = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3,
                "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: u.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, $a = z(F).appendChild(F.createElement("div"));
    la.optgroup = la.option;
    la.tbody = la.tfoot = la.colgroup = la.caption = la.thead;
    la.th = la.td;
    f.extend({
        clone: function (d, a, b) {
            var c, e, m, g, k, y = f.contains(d.ownerDocument, d);
            u.html5Clone || f.isXMLDoc(d) || !jb.test("<" + d.nodeName + ">") ? m = d.cloneNode(!0) : ($a.innerHTML = d.outerHTML, $a.removeChild(m = $a.firstChild));
            if (!(u.noCloneEvent && u.noCloneChecked || 1 !== d.nodeType && 11 !==
                d.nodeType || f.isXMLDoc(d))) for (c = h(m), k = h(d), g = 0; null != (e = k[g]); ++g) if (c[g]) {
                var l = c[g], x = void 0, w = void 0, I = void 0;
                if (1 === l.nodeType) {
                    x = l.nodeName.toLowerCase();
                    if (!u.noCloneEvent && l[f.expando]) {
                        I = f._data(l);
                        for (w in I.events) f.removeEvent(l, w, I.handle);
                        l.removeAttribute(f.expando)
                    }
                    if ("script" === x && l.text !== e.text) H(l).text = e.text, D(l); else if ("object" === x) l.parentNode && (l.outerHTML = e.outerHTML), u.html5Clone && e.innerHTML && !f.trim(l.innerHTML) && (l.innerHTML = e.innerHTML); else if ("input" === x && Ba.test(e.type)) l.defaultChecked =
                        l.checked = e.checked, l.value !== e.value && (l.value = e.value); else if ("option" === x) l.defaultSelected = l.selected = e.defaultSelected; else if ("input" === x || "textarea" === x) l.defaultValue = e.defaultValue
                }
            }
            if (a) if (b) for (k = k || h(d), c = c || h(m), g = 0; null != (e = k[g]); g++) R(e, c[g]); else R(d, m);
            c = h(m, "script");
            0 < c.length && V(c, !y && h(d, "script"));
            return m
        }, buildFragment: function (d, a, b, c) {
            for (var e, g, k, l, y, x, w = d.length, I = z(a), X = [], p = 0; p < w; p++) if ((g = d[p]) || 0 === g) if ("object" === f.type(g)) f.merge(X, g.nodeType ? [g] : g); else if (Lb.test(g)) {
                k =
                    k || I.appendChild(a.createElement("div"));
                l = (lb.exec(g) || ["", ""])[1].toLowerCase();
                x = la[l] || la._default;
                k.innerHTML = x[1] + g.replace(kb, "<$1></$2>") + x[2];
                for (e = x[0]; e--;) k = k.lastChild;
                !u.leadingWhitespace && Za.test(g) && X.push(a.createTextNode(Za.exec(g)[0]));
                if (!u.tbody) for (e = (g = "table" !== l || mb.test(g) ? "<table>" !== x[1] || mb.test(g) ? 0 : k : k.firstChild) && g.childNodes.length; e--;) f.nodeName(y = g.childNodes[e], "tbody") && !y.childNodes.length && g.removeChild(y);
                f.merge(X, k.childNodes);
                for (k.textContent = ""; k.firstChild;) k.removeChild(k.firstChild);
                k = I.lastChild
            } else X.push(a.createTextNode(g));
            k && I.removeChild(k);
            u.appendChecked || f.grep(h(X, "input"), m);
            for (p = 0; g = X[p++];) if (!c || -1 === f.inArray(g, c)) if (d = f.contains(g.ownerDocument, g), k = h(I.appendChild(g), "script"), d && V(k), b) for (e = 0; g = k[e++];) nb.test(g.type || "") && b.push(g);
            return I
        }, cleanData: function (d, a) {
            for (var b, c, h, e, m = 0, g = f.expando, k = f.cache, l = u.deleteExpando, y = f.event.special; null != (b = d[m]); m++) if (a || f.acceptData(b)) if (e = (h = b[g]) && k[h]) {
                if (e.events) for (c in e.events) y[c] ? f.event.remove(b,
                    c) : f.removeEvent(b, c, e.handle);
                k[h] && (delete k[h], l ? delete b[g] : "undefined" !== typeof b.removeAttribute ? b.removeAttribute(g) : b[g] = null, K.push(h))
            }
        }
    });
    f.fn.extend({
        text: function (d) {
            return sa(this, function (d) {
                return void 0 === d ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || F).createTextNode(d))
            }, null, d, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (d) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Q(this, d).appendChild(d)
            })
        }, prepend: function () {
            return this.domManip(arguments,
                function (d) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var a = Q(this, d);
                        a.insertBefore(d, a.firstChild)
                    }
                })
        }, before: function () {
            return this.domManip(arguments, function (d) {
                this.parentNode && this.parentNode.insertBefore(d, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (d) {
                this.parentNode && this.parentNode.insertBefore(d, this.nextSibling)
            })
        }, remove: function (d, a) {
            for (var b, c = d ? f.filter(d, this) : this, e = 0; null != (b = c[e]); e++) a || 1 !== b.nodeType || f.cleanData(h(b)), b.parentNode &&
            (a && f.contains(b.ownerDocument, b) && V(h(b, "script")), b.parentNode.removeChild(b));
            return this
        }, empty: function () {
            for (var d, a = 0; null != (d = this[a]); a++) {
                for (1 === d.nodeType && f.cleanData(h(d, !1)); d.firstChild;) d.removeChild(d.firstChild);
                d.options && f.nodeName(d, "select") && (d.options.length = 0)
            }
            return this
        }, clone: function (d, a) {
            d = null == d ? !1 : d;
            a = null == a ? d : a;
            return this.map(function () {
                return f.clone(this, d, a)
            })
        }, html: function (d) {
            return sa(this, function (d) {
                var a = this[0] || {}, b = 0, c = this.length;
                if (void 0 === d) return 1 ===
                a.nodeType ? a.innerHTML.replace(Kb, "") : void 0;
                if (!("string" !== typeof d || Mb.test(d) || !u.htmlSerialize && jb.test(d) || !u.leadingWhitespace && Za.test(d) || la[(lb.exec(d) || ["", ""])[1].toLowerCase()])) {
                    d = d.replace(kb, "<$1></$2>");
                    try {
                        for (; b < c; b++) a = this[b] || {}, 1 === a.nodeType && (f.cleanData(h(a, !1)), a.innerHTML = d);
                        a = 0
                    } catch (e) {
                    }
                }
                a && this.empty().append(d)
            }, null, d, arguments.length)
        }, replaceWith: function () {
            var d = arguments[0];
            this.domManip(arguments, function (a) {
                d = this.parentNode;
                f.cleanData(h(this));
                d && d.replaceChild(a,
                    this)
            });
            return d && (d.length || d.nodeType) ? this : this.remove()
        }, detach: function (d) {
            return this.remove(d, !0)
        }, domManip: function (d, a) {
            d = ca.apply([], d);
            var b, c, e, m, g = 0, k = this.length, l = this, y = k - 1, x = d[0], w = f.isFunction(x);
            if (w || 1 < k && "string" === typeof x && !u.checkClone && Nb.test(x)) return this.each(function (f) {
                var b = l.eq(f);
                w && (d[0] = x.call(this, f, b.html()));
                b.domManip(d, a)
            });
            if (k && (m = f.buildFragment(d, this[0].ownerDocument, !1, this), b = m.firstChild, 1 === m.childNodes.length && (m = b), b)) {
                e = f.map(h(m, "script"), H);
                for (c =
                         e.length; g < k; g++) b = m, g !== y && (b = f.clone(b, !0, !0), c && f.merge(e, h(b, "script"))), a.call(this[g], b, g);
                if (c) for (m = e[e.length - 1].ownerDocument, f.map(e, D), g = 0; g < c; g++) b = e[g], nb.test(b.type || "") && !f._data(b, "globalEval") && f.contains(m, b) && (b.src ? f._evalUrl && f._evalUrl(b.src) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(Ob, "")));
                m = b = null
            }
            return this
        }
    });
    f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (d, a) {
        f.fn[d] = function (d) {
            for (var b =
                0, c = [], h = f(d), e = h.length - 1; b <= e; b++) d = b === e ? this : this.clone(!0), f(h[b])[a](d), ma.apply(c, d.get());
            return this.pushStack(c)
        }
    });
    var Ha, hb = {};
    (function () {
        var d;
        u.shrinkWrapBlocks = function () {
            if (null != d) return d;
            d = !1;
            var a, f, b;
            if ((f = F.getElementsByTagName("body")[0]) && f.style) return a = F.createElement("div"), b = F.createElement("div"), b.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", f.appendChild(b).appendChild(a), "undefined" !== typeof a.style.zoom && (a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                a.appendChild(F.createElement("div")).style.width = "5px", d = 3 !== a.offsetWidth), f.removeChild(b), d
        }
    })();
    var ob = /^margin/, La = new RegExp("^(" + Qa + ")(?!px)[a-z%]+$", "i"), xa, ya, Pb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (xa = function (d) {
        return d.ownerDocument.defaultView.getComputedStyle(d, null)
    }, ya = function (d, a, b) {
        var c, h, e = d.style;
        h = (b = b || xa(d)) ? b.getPropertyValue(a) || b[a] : void 0;
        b && ("" !== h || f.contains(d.ownerDocument, d) || (h = f.style(d, a)), La.test(h) && ob.test(a) && (d = e.width, a = e.minWidth, c = e.maxWidth,
            e.minWidth = e.maxWidth = e.width = h, h = b.width, e.width = d, e.minWidth = a, e.maxWidth = c));
        return void 0 === h ? h : h + ""
    }) : F.documentElement.currentStyle && (xa = function (d) {
        return d.currentStyle
    }, ya = function (d, a, f) {
        var b, c, h, e = d.style;
        h = (f = f || xa(d)) ? f[a] : void 0;
        null == h && e && e[a] && (h = e[a]);
        if (La.test(h) && !Pb.test(a)) {
            f = e.left;
            if (c = (b = d.runtimeStyle) && b.left) b.left = d.currentStyle.left;
            e.left = "fontSize" === a ? "1em" : h;
            h = e.pixelLeft + "px";
            e.left = f;
            c && (b.left = c)
        }
        return void 0 === h ? h : h + "" || "auto"
    });
    (function () {
        function d() {
            var d,
                f, b, c;
            if ((f = F.getElementsByTagName("body")[0]) && f.style) {
                d = F.createElement("div");
                b = F.createElement("div");
                b.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
                f.appendChild(b).appendChild(d);
                d.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
                h = e = !1;
                g = !0;
                a.getComputedStyle && (h = "1%" !== (a.getComputedStyle(d, null) || {}).top, e = "4px" === (a.getComputedStyle(d,
                    null) || {width: "4px"}).width, c = d.appendChild(F.createElement("div")), c.style.cssText = d.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", d.style.width = "1px", g = !parseFloat((a.getComputedStyle(c, null) || {}).marginRight));
                d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
                c = d.getElementsByTagName("td");
                c[0].style.cssText = "margin:0;border:0;padding:0;display:none";
                if (m =
                    0 === c[0].offsetHeight) c[0].style.display = "", c[1].style.display = "none", m = 0 === c[0].offsetHeight;
                f.removeChild(b)
            }
        }

        var b, c, h, e, m, g;
        b = F.createElement("div");
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        if (c = (c = b.getElementsByTagName("a")[0]) && c.style) c.cssText = "float:left;opacity:.5", u.opacity = "0.5" === c.opacity, u.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", u.clearCloneStyle = "content-box" === b.style.backgroundClip,
            u.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, f.extend(u, {
            reliableHiddenOffsets: function () {
                null == m && d();
                return m
            }, boxSizingReliable: function () {
                null == e && d();
                return e
            }, pixelPosition: function () {
                null == h && d();
                return h
            }, reliableMarginRight: function () {
                null == g && d();
                return g
            }
        })
    })();
    f.swap = function (d, a, f, b) {
        var c, h = {};
        for (c in a) h[c] = d.style[c], d.style[c] = a[c];
        f = f.apply(d, b || []);
        for (c in a) d.style[c] = h[c];
        return f
    };
    var ab = /alpha\([^)]*\)/i, Qb = /opacity\s*=\s*([^)]*)/, Rb = /^(none|table(?!-c[ea]).+)/,
        Db = new RegExp("^(" + Qa + ")(.*)$", "i"), Sb = new RegExp("^([+-])=(" + Qa + ")", "i"),
        Tb = {position: "absolute", visibility: "hidden", display: "block"},
        pb = {letterSpacing: "0", fontWeight: "400"}, ib = ["Webkit", "O", "Moz", "ms"];
    f.extend({
        cssHooks: {
            opacity: {
                get: function (d, a) {
                    if (a) {
                        var f = ya(d, "opacity");
                        return "" === f ? "1" : f
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": u.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (d, a, b, c) {
            if (d && 3 !== d.nodeType && 8 !== d.nodeType && d.style) {
                var h, e, m, g = f.camelCase(a), k = d.style;
                a = f.cssProps[g] || (f.cssProps[g] = A(k, g));
                m = f.cssHooks[a] || f.cssHooks[g];
                if (void 0 !== b) {
                    if (e = typeof b, "string" === e && (h = Sb.exec(b)) && (b = (h[1] + 1) * h[2] + parseFloat(f.css(d, a)), e = "number"), null != b && b === b && ("number" !== e || f.cssNumber[g] || (b += "px"), u.clearCloneStyle || "" !== b || 0 !== a.indexOf("background") || (k[a] = "inherit"), !(m && "set" in m) || void 0 !== (b = m.set(d, b, c)))) try {
                        k[a] = b
                    } catch (l) {
                    }
                } else return m &&
                "get" in m && void 0 !== (h = m.get(d, !1, c)) ? h : k[a]
            }
        },
        css: function (d, a, b, c) {
            var h, e;
            e = f.camelCase(a);
            a = f.cssProps[e] || (f.cssProps[e] = A(d.style, e));
            (e = f.cssHooks[a] || f.cssHooks[e]) && "get" in e && (h = e.get(d, !0, b));
            void 0 === h && (h = ya(d, a, c));
            "normal" === h && a in pb && (h = pb[a]);
            return "" === b || b ? (d = parseFloat(h), !0 === b || f.isNumeric(d) ? d || 0 : h) : h
        }
    });
    f.each(["height", "width"], function (d, a) {
        f.cssHooks[a] = {
            get: function (d, b, c) {
                if (b) return Rb.test(f.css(d, "display")) && 0 === d.offsetWidth ? f.swap(d, Tb, function () {
                    return da(d, a,
                        c)
                }) : da(d, a, c)
            }, set: function (d, b, c) {
                var h = c && xa(d);
                return v(d, b, c ? aa(d, a, c, u.boxSizing && "border-box" === f.css(d, "boxSizing", !1, h), h) : 0)
            }
        }
    });
    u.opacity || (f.cssHooks.opacity = {
        get: function (d, a) {
            return Qb.test((a && d.currentStyle ? d.currentStyle.filter : d.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : a ? "1" : ""
        }, set: function (d, a) {
            var b = d.style, c = d.currentStyle, h = f.isNumeric(a) ? "alpha(opacity=" + 100 * a + ")" : "",
                e = c && c.filter || b.filter || "";
            b.zoom = 1;
            if ((1 <= a || "" === a) && "" === f.trim(e.replace(ab, "")) && b.removeAttribute &&
                (b.removeAttribute("filter"), "" === a || c && !c.filter)) return;
            b.filter = ab.test(e) ? e.replace(ab, h) : e + " " + h
        }
    });
    f.cssHooks.marginRight = N(u.reliableMarginRight, function (d, a) {
        if (a) return f.swap(d, {display: "inline-block"}, ya, [d, "marginRight"])
    });
    f.each({margin: "", padding: "", border: "Width"}, function (d, a) {
        f.cssHooks[d + a] = {
            expand: function (f) {
                var b = 0, c = {};
                for (f = "string" === typeof f ? f.split(" ") : [f]; 4 > b; b++) c[d + qa[b] + a] = f[b] || f[b - 2] || f[0];
                return c
            }
        };
        ob.test(d) || (f.cssHooks[d + a].set = v)
    });
    f.fn.extend({
        css: function (d,
                       a) {
            return sa(this, function (d, a, b) {
                var c, h = {}, e = 0;
                if (f.isArray(a)) {
                    b = xa(d);
                    for (c = a.length; e < c; e++) h[a[e]] = f.css(d, a[e], !1, b);
                    return h
                }
                return void 0 !== b ? f.style(d, a, b) : f.css(d, a)
            }, d, a, 1 < arguments.length)
        }, show: function () {
            return Y(this, !0)
        }, hide: function () {
            return Y(this)
        }, toggle: function (d) {
            return "boolean" === typeof d ? d ? this.show() : this.hide() : this.each(function () {
                ua(this) ? f(this).show() : f(this).hide()
            })
        }
    });
    f.Tween = J;
    J.prototype = {
        constructor: J, init: function (d, a, b, c, h, e) {
            this.elem = d;
            this.prop = b;
            this.easing =
                h || "swing";
            this.options = a;
            this.start = this.now = this.cur();
            this.end = c;
            this.unit = e || (f.cssNumber[b] ? "" : "px")
        }, cur: function () {
            var d = J.propHooks[this.prop];
            return d && d.get ? d.get(this) : J.propHooks._default.get(this)
        }, run: function (d) {
            var a, b = J.propHooks[this.prop];
            this.pos = this.options.duration ? a = f.easing[this.easing](d, this.options.duration * d, 0, 1, this.options.duration) : a = d;
            this.now = (this.end - this.start) * a + this.start;
            this.options.step && this.options.step.call(this.elem, this.now, this);
            b && b.set ? b.set(this) :
                J.propHooks._default.set(this);
            return this
        }
    };
    J.prototype.init.prototype = J.prototype;
    J.propHooks = {
        _default: {
            get: function (d) {
                return null == d.elem[d.prop] || d.elem.style && null != d.elem.style[d.prop] ? (d = f.css(d.elem, d.prop, "")) && "auto" !== d ? d : 0 : d.elem[d.prop]
            }, set: function (d) {
                if (f.fx.step[d.prop]) f.fx.step[d.prop](d); else d.elem.style && (null != d.elem.style[f.cssProps[d.prop]] || f.cssHooks[d.prop]) ? f.style(d.elem, d.prop, d.now + d.unit) : d.elem[d.prop] = d.now
            }
        }
    };
    J.propHooks.scrollTop = J.propHooks.scrollLeft = {
        set: function (d) {
            d.elem.nodeType &&
            d.elem.parentNode && (d.elem[d.prop] = d.now)
        }
    };
    f.easing = {
        linear: function (d) {
            return d
        }, swing: function (d) {
            return .5 - Math.cos(d * Math.PI) / 2
        }
    };
    f.fx = J.prototype.init;
    f.fx.step = {};
    var Ca, Ra, Ub = /^(?:toggle|show|hide)$/, qb = new RegExp("^(?:([+-])=|)(" + Qa + ")([a-z%]*)$", "i"),
        Vb = /queueHooks$/, Ma = [function (d, a, b) {
            var c, h, e, m, g, k, l = this, y = {}, x = d.style, w = d.nodeType && ua(d), I = f._data(d, "fxshow");
            b.queue || (m = f._queueHooks(d, "fx"), null == m.unqueued && (m.unqueued = 0, g = m.empty.fire, m.empty.fire = function () {
                m.unqueued || g()
            }), m.unqueued++,
                l.always(function () {
                    l.always(function () {
                        m.unqueued--;
                        f.queue(d, "fx").length || m.empty.fire()
                    })
                }));
            1 === d.nodeType && ("height" in a || "width" in a) && (b.overflow = [x.overflow, x.overflowX, x.overflowY], k = f.css(d, "display"), h = "none" === k ? f._data(d, "olddisplay") || M(d.nodeName) : k, "inline" === h && "none" === f.css(d, "float") && (u.inlineBlockNeedsLayout && "inline" !== M(d.nodeName) ? x.zoom = 1 : x.display = "inline-block"));
            b.overflow && (x.overflow = "hidden", u.shrinkWrapBlocks() || l.always(function () {
                x.overflow = b.overflow[0];
                x.overflowX =
                    b.overflow[1];
                x.overflowY = b.overflow[2]
            }));
            for (c in a) if (h = a[c], Ub.exec(h)) {
                delete a[c];
                e = e || "toggle" === h;
                if (h === (w ? "hide" : "show")) if ("show" === h && I && void 0 !== I[c]) w = !0; else continue;
                y[c] = I && I[c] || f.style(d, c)
            } else k = void 0;
            if (f.isEmptyObject(y)) "inline" === ("none" === k ? M(d.nodeName) : k) && (x.display = k); else for (c in I ? "hidden" in I && (w = I.hidden) : I = f._data(d, "fxshow", {}), e && (I.hidden = !w), w ? f(d).show() : l.done(function () {
                f(d).hide()
            }), l.done(function () {
                var a;
                f._removeData(d, "fxshow");
                for (a in y) f.style(d,
                    a, y[a])
            }), y) a = U(w ? I[c] : 0, c, l), c in I || (I[c] = a.start, w && (a.end = a.start, a.start = "width" === c || "height" === c ? 1 : 0))
        }], Ia = {
            "*": [function (d, a) {
                var b = this.createTween(d, a), c = b.cur(), h = qb.exec(a), e = h && h[3] || (f.cssNumber[d] ? "" : "px"),
                    m = (f.cssNumber[d] || "px" !== e && +c) && qb.exec(f.css(b.elem, d)), g = 1, k = 20;
                if (m && m[3] !== e) {
                    e = e || m[3];
                    h = h || [];
                    m = +c || 1;
                    do g = g || ".5", m /= g, f.style(b.elem, d, m + e); while (g !== (g = b.cur() / c) && 1 !== g && --k)
                }
                h && (m = b.start = +m || +c || 0, b.unit = e, b.end = h[1] ? m + (h[1] + 1) * h[2] : +h[2]);
                return b
            }]
        };
    f.Animation = f.extend(x,
        {
            tweener: function (d, a) {
                f.isFunction(d) ? (a = d, d = ["*"]) : d = d.split(" ");
                for (var b, c = 0, h = d.length; c < h; c++) b = d[c], Ia[b] = Ia[b] || [], Ia[b].unshift(a)
            }, prefilter: function (d, a) {
                a ? Ma.unshift(d) : Ma.push(d)
            }
        });
    f.speed = function (d, a, b) {
        var c = d && "object" === typeof d ? f.extend({}, d) : {
            complete: b || !b && a || f.isFunction(d) && d,
            duration: d,
            easing: b && a || a && !f.isFunction(a) && a
        };
        c.duration = f.fx.off ? 0 : "number" === typeof c.duration ? c.duration : c.duration in f.fx.speeds ? f.fx.speeds[c.duration] : f.fx.speeds._default;
        if (null == c.queue ||
            !0 === c.queue) c.queue = "fx";
        c.old = c.complete;
        c.complete = function () {
            f.isFunction(c.old) && c.old.call(this);
            c.queue && f.dequeue(this, c.queue)
        };
        return c
    };
    f.fn.extend({
        fadeTo: function (d, a, f, b) {
            return this.filter(ua).css("opacity", 0).show().end().animate({opacity: a}, d, f, b)
        }, animate: function (d, a, b, c) {
            var h = f.isEmptyObject(d), e = f.speed(a, b, c);
            a = function () {
                var a = x(this, f.extend({}, d), e);
                (h || f._data(this, "finish")) && a.stop(!0)
            };
            a.finish = a;
            return h || !1 === e.queue ? this.each(a) : this.queue(e.queue, a)
        }, stop: function (d,
                           a, b) {
            var c = function (d) {
                var a = d.stop;
                delete d.stop;
                a(b)
            };
            "string" !== typeof d && (b = a, a = d, d = void 0);
            a && !1 !== d && this.queue(d || "fx", []);
            return this.each(function () {
                var a = !0, h = null != d && d + "queueHooks", e = f.timers, m = f._data(this);
                if (h) m[h] && m[h].stop && c(m[h]); else for (h in m) m[h] && m[h].stop && Vb.test(h) && c(m[h]);
                for (h = e.length; h--;) e[h].elem !== this || null != d && e[h].queue !== d || (e[h].anim.stop(b), a = !1, e.splice(h, 1));
                !a && b || f.dequeue(this, d)
            })
        }, finish: function (d) {
            !1 !== d && (d = d || "fx");
            return this.each(function () {
                var a,
                    b = f._data(this), c = b[d + "queue"];
                a = b[d + "queueHooks"];
                var h = f.timers, e = c ? c.length : 0;
                b.finish = !0;
                f.queue(this, d, []);
                a && a.stop && a.stop.call(this, !0);
                for (a = h.length; a--;) h[a].elem === this && h[a].queue === d && (h[a].anim.stop(!0), h.splice(a, 1));
                for (a = 0; a < e; a++) c[a] && c[a].finish && c[a].finish.call(this);
                delete b.finish
            })
        }
    });
    f.each(["toggle", "show", "hide"], function (d, a) {
        var b = f.fn[a];
        f.fn[a] = function (d, f, c) {
            return null == d || "boolean" === typeof d ? b.apply(this, arguments) : this.animate(O(a, !0), d, f, c)
        }
    });
    f.each({
        slideDown: O("show"),
        slideUp: O("hide"),
        slideToggle: O("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (d, a) {
        f.fn[d] = function (d, f, b) {
            return this.animate(a, d, f, b)
        }
    });
    f.timers = [];
    f.fx.tick = function () {
        var d, a = f.timers, b = 0;
        for (Ca = f.now(); b < a.length; b++) d = a[b], d() || a[b] !== d || a.splice(b--, 1);
        a.length || f.fx.stop();
        Ca = void 0
    };
    f.fx.timer = function (a) {
        f.timers.push(a);
        a() ? f.fx.start() : f.timers.pop()
    };
    f.fx.interval = 13;
    f.fx.start = function () {
        Ra || (Ra = setInterval(f.fx.tick, f.fx.interval))
    };
    f.fx.stop = function () {
        clearInterval(Ra);
        Ra = null
    };
    f.fx.speeds = {slow: 600, fast: 200, _default: 400};
    f.fn.delay = function (a, b) {
        a = f.fx ? f.fx.speeds[a] || a : a;
        return this.queue(b || "fx", function (f, b) {
            var c = setTimeout(f, a);
            b.stop = function () {
                clearTimeout(c)
            }
        })
    };
    (function () {
        var a, f, b, c, h;
        f = F.createElement("div");
        f.setAttribute("className", "t");
        f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        c = f.getElementsByTagName("a")[0];
        b = F.createElement("select");
        h = b.appendChild(F.createElement("option"));
        a = f.getElementsByTagName("input")[0];
        c.style.cssText = "top:1px";
        u.getSetAttribute = "t" !== f.className;
        u.style = /top/.test(c.getAttribute("style"));
        u.hrefNormalized = "/a" === c.getAttribute("href");
        u.checkOn = !!a.value;
        u.optSelected = h.selected;
        u.enctype = !!F.createElement("form").enctype;
        b.disabled = !0;
        u.optDisabled = !h.disabled;
        a = F.createElement("input");
        a.setAttribute("value", "");
        u.input = "" === a.getAttribute("value");
        a.value = "t";
        a.setAttribute("type", "radio");
        u.radioValue = "t" === a.value
    })();
    var Wb = /\r/g;
    f.fn.extend({
        val: function (a) {
            var b,
                c, h, e = this[0];
            if (arguments.length) return h = f.isFunction(a), this.each(function (c) {
                1 === this.nodeType && (c = h ? a.call(this, c, f(this).val()) : a, null == c ? c = "" : "number" === typeof c ? c += "" : f.isArray(c) && (c = f.map(c, function (a) {
                    return null == a ? "" : a + ""
                })), b = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, c, "value") || (this.value = c))
            });
            if (e) {
                if ((b = f.valHooks[e.type] || f.valHooks[e.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(e, "value"))) return c;
                c = e.value;
                return "string" ===
                typeof c ? c.replace(Wb, "") : null == c ? "" : c
            }
        }
    });
    f.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = f.find.attr(a, "value");
                    return null != b ? b : f.trim(f.text(a))
                }
            }, select: {
                get: function (a) {
                    for (var b, c = a.options, h = a.selectedIndex, e = (a = "select-one" === a.type || 0 > h) ? null : [], m = a ? h + 1 : c.length, g = 0 > h ? m : a ? h : 0; g < m; g++) if (b = c[g], !(!b.selected && g !== h || (u.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && f.nodeName(b.parentNode, "optgroup"))) {
                        b = f(b).val();
                        if (a) return b;
                        e.push(b)
                    }
                    return e
                }, set: function (a,
                                  b) {
                    for (var c, h, e = a.options, m = f.makeArray(b), g = e.length; g--;) if (h = e[g], 0 <= f.inArray(f.valHooks.option.get(h), m)) try {
                        h.selected = c = !0
                    } catch (k) {
                        h.scrollHeight
                    } else h.selected = !1;
                    c || (a.selectedIndex = -1);
                    return e
                }
            }
        }
    });
    f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {
            set: function (a, b) {
                if (f.isArray(b)) return a.checked = 0 <= f.inArray(f(a).val(), b)
            }
        };
        u.checkOn || (f.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var Ga, rb, va = f.expr.attrHandle, bb = /^(?:checked|selected)$/i,
        za = u.getSetAttribute, Sa = u.input;
    f.fn.extend({
        attr: function (a, b) {
            return sa(this, f.attr, a, b, 1 < arguments.length)
        }, removeAttr: function (a) {
            return this.each(function () {
                f.removeAttr(this, a)
            })
        }
    });
    f.extend({
        attr: function (a, b, c) {
            var h, e, m = a.nodeType;
            if (a && 3 !== m && 8 !== m && 2 !== m) {
                if ("undefined" === typeof a.getAttribute) return f.prop(a, b, c);
                1 === m && f.isXMLDoc(a) || (b = b.toLowerCase(), h = f.attrHooks[b] || (f.expr.match.bool.test(b) ? rb : Ga));
                if (void 0 !== c) if (null === c) f.removeAttr(a, b); else {
                    if (h && "set" in h && void 0 !== (e = h.set(a,
                        c, b))) return e;
                    a.setAttribute(b, c + "");
                    return c
                } else {
                    if (h && "get" in h && null !== (e = h.get(a, b))) return e;
                    e = f.find.attr(a, b);
                    return null == e ? void 0 : e
                }
            }
        }, removeAttr: function (a, b) {
            var c, h, e = 0, m = b && b.match(ha);
            if (m && 1 === a.nodeType) for (; c = m[e++];) h = f.propFix[c] || c, f.expr.match.bool.test(c) ? Sa && za || !bb.test(c) ? a[h] = !1 : a[f.camelCase("default-" + c)] = a[h] = !1 : f.attr(a, c, ""), a.removeAttribute(za ? c : h)
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!u.radioValue && "radio" === b && f.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type",
                            b);
                        c && (a.value = c);
                        return b
                    }
                }
            }
        }
    });
    rb = {
        set: function (a, b, c) {
            !1 === b ? f.removeAttr(a, c) : Sa && za || !bb.test(c) ? a.setAttribute(!za && f.propFix[c] || c, c) : a[f.camelCase("default-" + c)] = a[c] = !0;
            return c
        }
    };
    f.each(f.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = va[b] || f.find.attr;
        va[b] = Sa && za || !bb.test(b) ? function (a, d, b) {
            var f, h;
            b || (h = va[d], va[d] = f, f = null != c(a, d, b) ? d.toLowerCase() : null, va[d] = h);
            return f
        } : function (a, d, b) {
            if (!b) return a[f.camelCase("default-" + d)] ? d.toLowerCase() : null
        }
    });
    Sa && za || (f.attrHooks.value =
        {
            set: function (a, b, c) {
                if (f.nodeName(a, "input")) a.defaultValue = b; else return Ga && Ga.set(a, b, c)
            }
        });
    za || (Ga = {
        set: function (a, b, f) {
            var c = a.getAttributeNode(f);
            c || a.setAttributeNode(c = a.ownerDocument.createAttribute(f));
            c.value = b += "";
            if ("value" === f || b === a.getAttribute(f)) return b
        }
    }, va.id = va.name = va.coords = function (a, b, f) {
        var c;
        if (!f) return (c = a.getAttributeNode(b)) && "" !== c.value ? c.value : null
    }, f.valHooks.button = {
        get: function (a, b) {
            var f = a.getAttributeNode(b);
            if (f && f.specified) return f.value
        }, set: Ga.set
    }, f.attrHooks.contenteditable =
        {
            set: function (a, b, f) {
                Ga.set(a, "" === b ? !1 : b, f)
            }
        }, f.each(["width", "height"], function (a, b) {
        f.attrHooks[b] = {
            set: function (a, d) {
                if ("" === d) return a.setAttribute(b, "auto"), d
            }
        }
    }));
    u.style || (f.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0
        }, set: function (a, b) {
            return a.style.cssText = b + ""
        }
    });
    var Xb = /^(?:input|select|textarea|button|object)$/i, Yb = /^(?:a|area)$/i;
    f.fn.extend({
        prop: function (a, b) {
            return sa(this, f.prop, a, b, 1 < arguments.length)
        }, removeProp: function (a) {
            a = f.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] =
                        void 0, delete this[a]
                } catch (b) {
                }
            })
        }
    });
    f.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
            var h, e, m;
            m = a.nodeType;
            if (a && 3 !== m && 8 !== m && 2 !== m) {
                if (m = 1 !== m || !f.isXMLDoc(a)) b = f.propFix[b] || b, e = f.propHooks[b];
                return void 0 !== c ? e && "set" in e && void 0 !== (h = e.set(a, c, b)) ? h : a[b] = c : e && "get" in e && null !== (h = e.get(a, b)) ? h : a[b]
            }
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = f.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Xb.test(a.nodeName) || Yb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    });
    u.hrefNormalized ||
    f.each(["href", "src"], function (a, b) {
        f.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    });
    u.optSelected || (f.propHooks.selected = {
        get: function (a) {
            if (a = a.parentNode) a.selectedIndex, a.parentNode && a.parentNode.selectedIndex;
            return null
        }
    });
    f.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () {
        f.propFix[this.toLowerCase()] = this
    });
    u.enctype || (f.propFix.enctype = "encoding");
    var cb = /[\t\r\n\f]/g;
    f.fn.extend({
        addClass: function (a) {
            var b,
                c, h, e, m, g = 0, k = this.length;
            b = "string" === typeof a && a;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).addClass(a.call(this, b, this.className))
            });
            if (b) for (b = (a || "").match(ha) || []; g < k; g++) if (c = this[g], h = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(cb, " ") : " ")) {
                for (m = 0; e = b[m++];) 0 > h.indexOf(" " + e + " ") && (h += e + " ");
                h = f.trim(h);
                c.className !== h && (c.className = h)
            }
            return this
        }, removeClass: function (a) {
            var b, c, h, e, m, g = 0, k = this.length;
            b = 0 === arguments.length || "string" === typeof a && a;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).removeClass(a.call(this,
                    b, this.className))
            });
            if (b) for (b = (a || "").match(ha) || []; g < k; g++) if (c = this[g], h = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(cb, " ") : "")) {
                for (m = 0; e = b[m++];) for (; 0 <= h.indexOf(" " + e + " ");) h = h.replace(" " + e + " ", " ");
                h = a ? f.trim(h) : "";
                c.className !== h && (c.className = h)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" === typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : f.isFunction(a) ? this.each(function (c) {
                    f(this).toggleClass(a.call(this, c, this.className, b), b)
                }) :
                this.each(function () {
                    if ("string" === c) for (var b, h = 0, e = f(this), m = a.match(ha) || []; b = m[h++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else if ("undefined" === c || "boolean" === c) this.className && f._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : f._data(this, "__className__") || ""
                })
        }, hasClass: function (a) {
            a = " " + a + " ";
            for (var b = 0, f = this.length; b < f; b++) if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(cb, " ").indexOf(a)) return !0;
            return !1
        }
    });
    f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function (a, b) {
            f.fn[b] = function (a, d) {
                return 0 < arguments.length ? this.on(b, null, a, d) : this.trigger(b)
            }
        });
    f.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, f) {
            return this.on(a, null, b, f)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, f, c) {
            return this.on(b, a, f, c)
        }, undelegate: function (a, b, f) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", f)
        }
    });
    var db = f.now(), eb = /\?/,
        Zb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    f.parseJSON = function (d) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(d + "");
        var b, c = null, h = f.trim(d + "");
        return h && !f.trim(h.replace(Zb, function (a, d, f, h) {
            b && d && (c = 0);
            if (0 === c) return a;
            b = f || d;
            c += !h - !f;
            return ""
        })) ? Function("return " + h)() : f.error("Invalid JSON: " + d)
    };
    f.parseXML = function (d) {
        var b, c;
        if (!d || "string" !== typeof d) return null;
        try {
            a.DOMParser ? (c = new DOMParser, b = c.parseFromString(d, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(d))
        } catch (h) {
            b = void 0
        }
        b && b.documentElement &&
        !b.getElementsByTagName("parsererror").length || f.error("Invalid XML: " + d);
        return b
    };
    var Aa, wa, $b = /#.*$/, sb = /([?&])_=[^&]*/, ac = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, bc = /^(?:GET|HEAD)$/,
        cc = /^\/\//, tb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, ub = {}, Wa = {},
        vb = "*/".concat("*");
    try {
        wa = location.href
    } catch (jc) {
        wa = F.createElement("a"), wa.href = "", wa = wa.href
    }
    Aa = tb.exec(wa.toLowerCase()) || [];
    f.extend({
        active: 0, lastModified: {}, etag: {}, ajaxSettings: {
            url: wa,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Aa[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": vb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": f.parseJSON, "text xml": f.parseXML},
            flatOptions: {url: !0, context: !0}
        }, ajaxSetup: function (a, b) {
            return b ? S(S(a,
                f.ajaxSettings), b) : S(f.ajaxSettings, a)
        }, ajaxPrefilter: w(ub), ajaxTransport: w(Wa), ajax: function (a, b) {
            function c(a, d, b, h) {
                var e, n, y, x;
                x = d;
                if (2 !== ea) {
                    ea = 2;
                    k && clearTimeout(k);
                    u = void 0;
                    g = h || "";
                    D.readyState = 0 < a ? 4 : 0;
                    h = 200 <= a && 300 > a || 304 === a;
                    if (b) {
                        y = w;
                        for (var Q = D, W, s, fa, P, Z = y.contents, ca = y.dataTypes; "*" === ca[0];) ca.shift(), void 0 === s && (s = y.mimeType || Q.getResponseHeader("Content-Type"));
                        if (s) for (P in Z) if (Z[P] && Z[P].test(s)) {
                            ca.unshift(P);
                            break
                        }
                        if (ca[0] in b) fa = ca[0]; else {
                            for (P in b) {
                                if (!ca[0] || y.converters[P +
                                " " + ca[0]]) {
                                    fa = P;
                                    break
                                }
                                W || (W = P)
                            }
                            fa = fa || W
                        }
                        fa ? (fa !== ca[0] && ca.unshift(fa), y = b[fa]) : y = void 0
                    }
                    a:{
                        b = w;
                        W = y;
                        s = D;
                        fa = h;
                        var q, H, r, Q = {}, Z = b.dataTypes.slice();
                        if (Z[1]) for (H in b.converters) Q[H.toLowerCase()] = b.converters[H];
                        for (P = Z.shift(); P;) if (b.responseFields[P] && (s[b.responseFields[P]] = W), !r && fa && b.dataFilter && (W = b.dataFilter(W, b.dataType)), r = P, P = Z.shift()) if ("*" === P) P = r; else if ("*" !== r && r !== P) {
                            H = Q[r + " " + P] || Q["* " + P];
                            if (!H) for (q in Q) if (y = q.split(" "), y[1] === P && (H = Q[r + " " + y[0]] || Q["* " + y[0]])) {
                                !0 === H ? H =
                                    Q[q] : !0 !== Q[q] && (P = y[0], Z.unshift(y[1]));
                                break
                            }
                            if (!0 !== H) if (H && b["throws"]) W = H(W); else try {
                                W = H(W)
                            } catch (ka) {
                                y = {state: "parsererror", error: H ? ka : "No conversion from " + r + " to " + P};
                                break a
                            }
                        }
                        y = {state: "success", data: W}
                    }
                    if (h) w.ifModified && ((x = D.getResponseHeader("Last-Modified")) && (f.lastModified[m] = x), (x = D.getResponseHeader("etag")) && (f.etag[m] = x)), 204 === a || "HEAD" === w.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = y.state, e = y.data, n = y.error, h = !n); else if (n = x, a || !x) x = "error", 0 > a && (a = 0);
                    D.status = a;
                    D.statusText =
                        (d || x) + "";
                    h ? p.resolveWith(I, [e, x, D]) : p.rejectWith(I, [D, x, n]);
                    D.statusCode(S);
                    S = void 0;
                    l && X.trigger(h ? "ajaxSuccess" : "ajaxError", [D, w, h ? e : n]);
                    t.fireWith(I, [D, x]);
                    l && (X.trigger("ajaxComplete", [D, w]), --f.active || f.event.trigger("ajaxStop"))
                }
            }

            "object" === typeof a && (b = a, a = void 0);
            b = b || {};
            var h, e, m, g, k, l, u, x, w = f.ajaxSetup({}, b), I = w.context || w,
                X = w.context && (I.nodeType || I.jquery) ? f(I) : f.event, p = f.Deferred(),
                t = f.Callbacks("once memory"), S = w.statusCode || {}, Q = {}, W = {}, ea = 0, s = "canceled", D = {
                    readyState: 0, getResponseHeader: function (a) {
                        var d;
                        if (2 === ea) {
                            if (!x) for (x = {}; d = ac.exec(g);) x[d[1].toLowerCase()] = d[2];
                            d = x[a.toLowerCase()]
                        }
                        return null == d ? null : d
                    }, getAllResponseHeaders: function () {
                        return 2 === ea ? g : null
                    }, setRequestHeader: function (a, d) {
                        var b = a.toLowerCase();
                        ea || (a = W[b] = W[b] || a, Q[a] = d);
                        return this
                    }, overrideMimeType: function (a) {
                        ea || (w.mimeType = a);
                        return this
                    }, statusCode: function (a) {
                        var d;
                        if (a) if (2 > ea) for (d in a) S[d] = [S[d], a[d]]; else D.always(a[D.status]);
                        return this
                    }, abort: function (a) {
                        a = a || s;
                        u && u.abort(a);
                        c(0, a);
                        return this
                    }
                };
            p.promise(D).complete =
                t.add;
            D.success = D.done;
            D.error = D.fail;
            w.url = ((a || w.url || wa) + "").replace($b, "").replace(cc, Aa[1] + "//");
            w.type = b.method || b.type || w.method || w.type;
            w.dataTypes = f.trim(w.dataType || "*").toLowerCase().match(ha) || [""];
            null == w.crossDomain && (h = tb.exec(w.url.toLowerCase()), w.crossDomain = !(!h || h[1] === Aa[1] && h[2] === Aa[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (Aa[3] || ("http:" === Aa[1] ? "80" : "443"))));
            w.data && w.processData && "string" !== typeof w.data && (w.data = f.param(w.data, w.traditional));
            y(ub, w, b, D);
            if (2 === ea) return D;
            (l = w.global) && 0 === f.active++ && f.event.trigger("ajaxStart");
            w.type = w.type.toUpperCase();
            w.hasContent = !bc.test(w.type);
            m = w.url;
            w.hasContent || (w.data && (m = w.url += (eb.test(m) ? "&" : "?") + w.data, delete w.data), !1 === w.cache && (w.url = sb.test(m) ? m.replace(sb, "$1_=" + db++) : m + (eb.test(m) ? "&" : "?") + "_=" + db++));
            w.ifModified && (f.lastModified[m] && D.setRequestHeader("If-Modified-Since", f.lastModified[m]), f.etag[m] && D.setRequestHeader("If-None-Match", f.etag[m]));
            (w.data && w.hasContent && !1 !== w.contentType || b.contentType) &&
            D.setRequestHeader("Content-Type", w.contentType);
            D.setRequestHeader("Accept", w.dataTypes[0] && w.accepts[w.dataTypes[0]] ? w.accepts[w.dataTypes[0]] + ("*" !== w.dataTypes[0] ? ", " + vb + "; q=0.01" : "") : w.accepts["*"]);
            for (e in w.headers) D.setRequestHeader(e, w.headers[e]);
            if (w.beforeSend && (!1 === w.beforeSend.call(I, D, w) || 2 === ea)) return D.abort();
            s = "abort";
            for (e in{success: 1, error: 1, complete: 1}) D[e](w[e]);
            if (u = y(Wa, w, b, D)) {
                D.readyState = 1;
                l && X.trigger("ajaxSend", [D, w]);
                w.async && 0 < w.timeout && (k = setTimeout(function () {
                        D.abort("timeout")
                    },
                    w.timeout));
                try {
                    ea = 1, u.send(Q, c)
                } catch (fa) {
                    if (2 > ea) c(-1, fa); else throw fa;
                }
            } else c(-1, "No Transport");
            return D
        }, getJSON: function (a, b, c) {
            return f.get(a, b, c, "json")
        }, getScript: function (a, b) {
            return f.get(a, void 0, b, "script")
        }
    });
    f.each(["get", "post"], function (a, b) {
        f[b] = function (a, d, c, h) {
            f.isFunction(d) && (h = h || c, c = d, d = void 0);
            return f.ajax({url: a, type: b, dataType: h, data: d, success: c})
        }
    });
    f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        f.fn[b] = function (a) {
            return this.on(b,
                a)
        }
    });
    f._evalUrl = function (a) {
        return f.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    };
    f.fn.extend({
        wrapAll: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function () {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            return f.isFunction(a) ?
                this.each(function (b) {
                    f(this).wrapInner(a.call(this, b))
                }) : this.each(function () {
                    var b = f(this), c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
        }, wrap: function (a) {
            var b = f.isFunction(a);
            return this.each(function (c) {
                f(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    f.expr.filters.hidden = function (a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !u.reliableHiddenOffsets() && "none" === (a.style &&
            a.style.display || f.css(a, "display"))
    };
    f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a)
    };
    var dc = /%20/g, Eb = /\[\]$/, wb = /\r?\n/g, ec = /^(?:submit|button|image|reset|file)$/i,
        fc = /^(?:input|select|textarea|keygen)/i;
    f.param = function (a, b) {
        var c, h = [], e = function (a, d) {
            d = f.isFunction(d) ? d() : null == d ? "" : d;
            h[h.length] = encodeURIComponent(a) + "=" + encodeURIComponent(d)
        };
        void 0 === b && (b = f.ajaxSettings && f.ajaxSettings.traditional);
        if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function () {
            e(this.name,
                this.value)
        }); else for (c in a) ea(c, a[c], b, e);
        return h.join("&").replace(dc, "+")
    };
    f.fn.extend({
        serialize: function () {
            return f.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = f.prop(this, "elements");
                return a ? f.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !f(this).is(":disabled") && fc.test(this.nodeName) && !ec.test(a) && (this.checked || !Ba.test(a))
            }).map(function (a, b) {
                var c = f(this).val();
                return null == c ? null : f.isArray(c) ? f.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(wb, "\r\n")
                    }
                }) : {name: b.name, value: c.replace(wb, "\r\n")}
            }).get()
        }
    });
    f.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
        var d;
        if (!(d = !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && fa())) a:{
            try {
                d = new a.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (b) {
            }
            d = void 0
        }
        return d
    } : fa;
    var gc = 0, Ta = {}, Ua = f.ajaxSettings.xhr();
    if (a.ActiveXObject) f(a).on("unload", function () {
        for (var a in Ta) Ta[a](void 0, !0)
    });
    u.cors = !!Ua && "withCredentials" in Ua;
    (Ua = u.ajax = !!Ua) && f.ajaxTransport(function (a) {
        if (!a.crossDomain ||
            u.cors) {
            var b;
            return {
                send: function (c, h) {
                    var e, m = a.xhr(), g = ++gc;
                    m.open(a.type, a.url, a.async, a.username, a.password);
                    if (a.xhrFields) for (e in a.xhrFields) m[e] = a.xhrFields[e];
                    a.mimeType && m.overrideMimeType && m.overrideMimeType(a.mimeType);
                    a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && m.setRequestHeader(e, c[e] + "");
                    m.send(a.hasContent && a.data || null);
                    b = function (c, e) {
                        var k, n, l;
                        if (b && (e || 4 === m.readyState)) if (delete Ta[g], b = void 0, m.onreadystatechange =
                            f.noop, e) 4 !== m.readyState && m.abort(); else {
                            l = {};
                            k = m.status;
                            "string" === typeof m.responseText && (l.text = m.responseText);
                            try {
                                n = m.statusText
                            } catch (y) {
                                n = ""
                            }
                            k || !a.isLocal || a.crossDomain ? 1223 === k && (k = 204) : k = l.text ? 200 : 404
                        }
                        l && h(k, n, l, m.getAllResponseHeaders())
                    };
                    a.async ? 4 === m.readyState ? setTimeout(b) : m.onreadystatechange = Ta[g] = b : b()
                }, abort: function () {
                    b && b(void 0, !0)
                }
            }
        }
    });
    f.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                f.globalEval(a);
                return a
            }
        }
    });
    f.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET", a.global = !1)
    });
    f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = F.head || f("head")[0] || F.documentElement;
            return {
                send: function (f, h) {
                    b = F.createElement("script");
                    b.async = !0;
                    a.scriptCharset && (b.charset = a.scriptCharset);
                    b.src = a.url;
                    b.onload = b.onreadystatechange = function (a, d) {
                        if (d || !b.readyState || /loaded|complete/.test(b.readyState)) b.onload =
                            b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, d || h(200, "success")
                    };
                    c.insertBefore(b, c.firstChild)
                }, abort: function () {
                    if (b) b.onload(void 0, !0)
                }
            }
        }
    });
    var xb = [], fb = /(=)\?(?=&|$)|\?\?/;
    f.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = xb.pop() || f.expando + "_" + db++;
            this[a] = !0;
            return a
        }
    });
    f.ajaxPrefilter("json jsonp", function (d, b, c) {
        var h, e, m,
            g = !1 !== d.jsonp && (fb.test(d.url) ? "url" : "string" === typeof d.data && !(d.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                fb.test(d.data) && "data");
        if (g || "jsonp" === d.dataTypes[0]) return h = d.jsonpCallback = f.isFunction(d.jsonpCallback) ? d.jsonpCallback() : d.jsonpCallback, g ? d[g] = d[g].replace(fb, "$1" + h) : !1 !== d.jsonp && (d.url += (eb.test(d.url) ? "&" : "?") + d.jsonp + "=" + h), d.converters["script json"] = function () {
            m || f.error(h + " was not called");
            return m[0]
        }, d.dataTypes[0] = "json", e = a[h], a[h] = function () {
            m = arguments
        }, c.always(function () {
            a[h] = e;
            d[h] && (d.jsonpCallback = b.jsonpCallback, xb.push(h));
            m && f.isFunction(e) && e(m[0]);
            m = e = void 0
        }), "script"
    });
    f.parseHTML = function (a, b, c) {
        if (!a || "string" !== typeof a) return null;
        "boolean" === typeof b && (c = b, b = !1);
        b = b || F;
        var h = Oa.exec(a);
        c = !c && [];
        if (h) return [b.createElement(h[1])];
        h = f.buildFragment([a], b, c);
        c && c.length && f(c).remove();
        return f.merge([], h.childNodes)
    };
    var yb = f.fn.load;
    f.fn.load = function (a, b, c) {
        if ("string" !== typeof a && yb) return yb.apply(this, arguments);
        var h, e, m, g = this, k = a.indexOf(" ");
        0 <= k && (h = f.trim(a.slice(k, a.length)), a = a.slice(0, k));
        f.isFunction(b) ? (c = b, b = void 0) : b && "object" === typeof b && (m =
            "POST");
        0 < g.length && f.ajax({url: a, type: m, dataType: "html", data: b}).done(function (a) {
            e = arguments;
            g.html(h ? f("<div>").append(f.parseHTML(a)).find(h) : a)
        }).complete(c && function (a, d) {
            g.each(c, e || [a.responseText, d, a])
        });
        return this
    };
    f.expr.filters.animated = function (a) {
        return f.grep(f.timers, function (b) {
            return a === b.elem
        }).length
    };
    var zb = a.document.documentElement;
    f.offset = {
        setOffset: function (a, b, c) {
            var h, e, m, g = f.css(a, "position"), k = f(a), l = {};
            "static" === g && (a.style.position = "relative");
            m = k.offset();
            e = f.css(a,
                "top");
            h = f.css(a, "left");
            ("absolute" === g || "fixed" === g) && -1 < f.inArray("auto", [e, h]) ? (h = k.position(), e = h.top, h = h.left) : (e = parseFloat(e) || 0, h = parseFloat(h) || 0);
            f.isFunction(b) && (b = b.call(a, c, m));
            null != b.top && (l.top = b.top - m.top + e);
            null != b.left && (l.left = b.left - m.left + h);
            "using" in b ? b.using.call(a, l) : k.css(l)
        }
    };
    f.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                f.offset.setOffset(this, a, b)
            });
            var b, c, h = {top: 0, left: 0}, e = (c = this[0]) && c.ownerDocument;
            if (e) {
                b = e.documentElement;
                if (!f.contains(b, c)) return h;
                "undefined" !== typeof c.getBoundingClientRect && (h = c.getBoundingClientRect());
                c = ja(e);
                return {
                    top: h.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: h.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }
            }
        }, position: function () {
            if (this[0]) {
                var a, b, c = {top: 0, left: 0}, h = this[0];
                "fixed" === f.css(h, "position") ? b = h.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), f.nodeName(a[0], "html") || (c = a.offset()), c.top += f.css(a[0], "borderTopWidth", !0), c.left += f.css(a[0],
                    "borderLeftWidth", !0));
                return {
                    top: b.top - c.top - f.css(h, "marginTop", !0),
                    left: b.left - c.left - f.css(h, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || zb; a && !f.nodeName(a, "html") && "static" === f.css(a, "position");) a = a.offsetParent;
                return a || zb
            })
        }
    });
    f.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
        var c = /Y/.test(b);
        f.fn[a] = function (h) {
            return sa(this, function (a, d, h) {
                var e = ja(a);
                if (void 0 === h) return e ? b in e ? e[b] : e.document.documentElement[d] :
                    a[d];
                e ? e.scrollTo(c ? f(e).scrollLeft() : h, c ? h : f(e).scrollTop()) : a[d] = h
            }, a, h, arguments.length, null)
        }
    });
    f.each(["top", "left"], function (a, b) {
        f.cssHooks[b] = N(u.pixelPosition, function (a, d) {
            if (d) return d = ya(a, b), La.test(d) ? f(a).position()[b] + "px" : d
        })
    });
    f.each({Height: "height", Width: "width"}, function (a, b) {
        f.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, h) {
            f.fn[h] = function (h, e) {
                var m = arguments.length && (c || "boolean" !== typeof h),
                    g = c || (!0 === h || !0 === e ? "margin" : "border");
                return sa(this, function (b, c,
                                          h) {
                    return f.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (c = b.documentElement, Math.max(b.body["scroll" + a], c["scroll" + a], b.body["offset" + a], c["offset" + a], c["client" + a])) : void 0 === h ? f.css(b, c, g) : f.style(b, c, h, g)
                }, b, m ? h : void 0, m, null)
            }
        })
    });
    f.fn.size = function () {
        return this.length
    };
    f.fn.andSelf = f.fn.addBack;
    "function" === typeof define && define.amd && define("jquery", [], function () {
        return f
    });
    var hc = a.jQuery, ic = a.$;
    f.noConflict = function (d) {
        a.$ === f && (a.$ = ic);
        d && a.jQuery === f && (a.jQuery = hc);
        return f
    };
    "undefined" === typeof q && (a.jQuery = a.$ = f);
    return f
});
+function (a) {
    function q(b) {
        return this.each(function () {
            var c = a(this), g = c.data("bs.affix"), l = "object" == typeof b && b;
            g || c.data("bs.affix", g = new r(this, l));
            if ("string" == typeof b) g[b]()
        })
    }

    var r = function (b, c) {
        this.options = a.extend({}, r.DEFAULTS, c);
        this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this));
        this.$element = a(b);
        this.affixed = this.unpin = this.pinnedOffset = null;
        this.checkPosition()
    };
    r.VERSION = "3.3.2";
    r.RESET = "affix affix-top affix-bottom";
    r.DEFAULTS = {offset: 0, target: window};
    r.prototype.getState = function (a, c, g, l) {
        var p = this.$target.scrollTop(), t = this.$element.offset(), k = this.$target.height();
        if (null != g && "top" == this.affixed) return p < g ? "top" : !1;
        if ("bottom" == this.affixed) return null != g ? p + this.unpin <= t.top ? !1 : "bottom" : p + k <= a - l ? !1 : "bottom";
        var s = null == this.affixed, t = s ? p : t.top;
        return null != g && p <= g ? "top" : null != l && t + (s ? k : c) >= a - l ? "bottom" : !1
    };
    r.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(r.RESET).addClass("affix");
        var a = this.$target.scrollTop();
        return this.pinnedOffset = this.$element.offset().top - a
    };
    r.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    };
    r.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(), c = this.options.offset, g = c.top, l = c.bottom, p = a("body").height();
            "object" != typeof c && (l = g = c);
            "function" == typeof g && (g = c.top(this.$element));
            "function" == typeof l && (l = c.bottom(this.$element));
            c = this.getState(p, b, g, l);
            if (this.affixed != c) {
                null != this.unpin && this.$element.css("top", "");
                var g = "affix" + (c ? "-" + c : ""), t = a.Event(g + ".bs.affix");
                this.$element.trigger(t);
                if (t.isDefaultPrevented()) return;
                this.affixed = c;
                this.unpin = "bottom" == c ? this.getPinnedOffset() : null;
                this.$element.removeClass(r.RESET).addClass(g).trigger(g.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == c && this.$element.offset({top: p - b - l})
        }
    };
    var c = a.fn.affix;
    a.fn.affix = q;
    a.fn.affix.Constructor = r;
    a.fn.affix.noConflict = function () {
        a.fn.affix =
            c;
        return this
    };
    a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
            var b = a(this), c = b.data();
            c.offset = c.offset || {};
            null != c.offsetBottom && (c.offset.bottom = c.offsetBottom);
            null != c.offsetTop && (c.offset.top = c.offsetTop);
            q.call(b, c)
        })
    })
}(jQuery);
+function (a) {
    var q = function (c) {
        a(c).on("click", '[data-dismiss="alert"]', this.close)
    };
    q.VERSION = "3.3.2";
    q.TRANSITION_DURATION = 150;
    q.prototype.close = function (c) {
        function b() {
            l.detach().trigger("closed.bs.alert").remove()
        }

        var e = a(this), g = e.attr("data-target");
        g || (g = (g = e.attr("href")) && g.replace(/.*(?=#[^\s]*$)/, ""));
        var l = a(g);
        c && c.preventDefault();
        l.length || (l = e.closest(".alert"));
        l.trigger(c = a.Event("close.bs.alert"));
        c.isDefaultPrevented() || (l.removeClass("in"), a.support.transition && l.hasClass("fade") ?
            l.one("bsTransitionEnd", b).emulateTransitionEnd(q.TRANSITION_DURATION) : b())
    };
    var r = a.fn.alert;
    a.fn.alert = function (c) {
        return this.each(function () {
            var b = a(this), e = b.data("bs.alert");
            e || b.data("bs.alert", e = new q(this));
            "string" == typeof c && e[c].call(b)
        })
    };
    a.fn.alert.Constructor = q;
    a.fn.alert.noConflict = function () {
        a.fn.alert = r;
        return this
    };
    a(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', q.prototype.close)
}(jQuery);
+function (a) {
    function q(b) {
        return this.each(function () {
            var c = a(this), g = c.data("bs.button"), l = "object" == typeof b && b;
            g || c.data("bs.button", g = new r(this, l));
            "toggle" == b ? g.toggle() : b && g.setState(b)
        })
    }

    var r = function (b, c) {
        this.$element = a(b);
        this.options = a.extend({}, r.DEFAULTS, c);
        this.isLoading = !1
    };
    r.VERSION = "3.3.2";
    r.DEFAULTS = {loadingText: "loading..."};
    r.prototype.setState = function (b) {
        var c = this.$element, g = c.is("input") ? "val" : "html", l = c.data();
        b += "Text";
        null == l.resetText && c.data("resetText", c[g]());
        setTimeout(a.proxy(function () {
            c[g](null ==
            l[b] ? this.options[b] : l[b]);
            "loadingText" == b ? (this.isLoading = !0, c.addClass("disabled").attr("disabled", "disabled")) : this.isLoading && (this.isLoading = !1, c.removeClass("disabled").removeAttr("disabled"))
        }, this), 0)
    };
    r.prototype.toggle = function () {
        var a = !0, c = this.$element.closest('[data-toggle="buttons"]');
        if (c.length) {
            var g = this.$element.find("input");
            "radio" == g.prop("type") && (g.prop("checked") && this.$element.hasClass("active") ? a = !1 : c.find(".active").removeClass("active"));
            a && g.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else this.$element.attr("aria-pressed",
            !this.$element.hasClass("active"));
        a && this.$element.toggleClass("active")
    };
    var c = a.fn.button;
    a.fn.button = q;
    a.fn.button.Constructor = r;
    a.fn.button.noConflict = function () {
        a.fn.button = c;
        return this
    };
    a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (b) {
        var c = a(b.target);
        c.hasClass("btn") || (c = c.closest(".btn"));
        q.call(c, "toggle");
        b.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
        a(b.target).closest(".btn").toggleClass("focus",
            /^focus(in)?$/.test(b.type))
    })
}(jQuery);
+function (a) {
    function q(b) {
        return this.each(function () {
            var c = a(this), l = c.data("bs.carousel"),
                p = a.extend({}, r.DEFAULTS, c.data(), "object" == typeof b && b),
                t = "string" == typeof b ? b : p.slide;
            l || c.data("bs.carousel", l = new r(this, p));
            if ("number" == typeof b) l.to(b); else if (t) l[t](); else p.interval && l.pause().cycle()
        })
    }

    var r = function (b, c) {
        this.$element = a(b);
        this.$indicators = this.$element.find(".carousel-indicators");
        this.options = c;
        this.paused = this.sliding = this.interval = this.$active = this.$items = null;
        this.options.keyboard &&
        this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this));
        "hover" != this.options.pause || "ontouchstart" in document.documentElement || this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    r.VERSION = "3.3.2";
    r.TRANSITION_DURATION = 600;
    r.DEFAULTS = {interval: 5E3, pause: "hover", wrap: !0, keyboard: !0};
    r.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    };
    r.prototype.cycle = function (b) {
        b || (this.paused = !1);
        this.interval && clearInterval(this.interval);
        this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval));
        return this
    };
    r.prototype.getItemIndex = function (a) {
        this.$items = a.parent().children(".item");
        return this.$items.index(a || this.$active)
    };
    r.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b);
        return ("prev" == a && 0 === c || "next" == a && c == this.$items.length -
            1) && !this.options.wrap ? b : this.$items.eq((c + ("prev" == a ? -1 : 1)) % this.$items.length)
    };
    r.prototype.to = function (a) {
        var b = this, c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(a > this.$items.length - 1 || 0 > a)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    };
    r.prototype.pause = function (b) {
        b || (this.paused = !0);
        this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end),
            this.cycle(!0));
        this.interval = clearInterval(this.interval);
        return this
    };
    r.prototype.next = function () {
        if (!this.sliding) return this.slide("next")
    };
    r.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev")
    };
    r.prototype.slide = function (b, c) {
        var l = this.$element.find(".item.active"), p = c || this.getItemForDirection(b, l), t = this.interval,
            k = "next" == b ? "left" : "right", s = this;
        if (p.hasClass("active")) return this.sliding = !1;
        var q = p[0], E = a.Event("slide.bs.carousel", {relatedTarget: q, direction: k});
        this.$element.trigger(E);
        if (!E.isDefaultPrevented()) {
            this.sliding = !0;
            t && this.pause();
            this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), (E = a(this.$indicators.children()[this.getItemIndex(p)])) && E.addClass("active"));
            var C = a.Event("slid.bs.carousel", {relatedTarget: q, direction: k});
            a.support.transition && this.$element.hasClass("slide") ? (p.addClass(b), p[0].offsetWidth, l.addClass(k), p.addClass(k), l.one("bsTransitionEnd", function () {
                p.removeClass([b, k].join(" ")).addClass("active");
                l.removeClass(["active",
                    k].join(" "));
                s.sliding = !1;
                setTimeout(function () {
                    s.$element.trigger(C)
                }, 0)
            }).emulateTransitionEnd(r.TRANSITION_DURATION)) : (l.removeClass("active"), p.addClass("active"), this.sliding = !1, this.$element.trigger(C));
            t && this.cycle();
            return this
        }
    };
    var c = a.fn.carousel;
    a.fn.carousel = q;
    a.fn.carousel.Constructor = r;
    a.fn.carousel.noConflict = function () {
        a.fn.carousel = c;
        return this
    };
    var b = function (b) {
        var c, l = a(this), p = a(l.attr("data-target") || (c = l.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""));
        if (p.hasClass("carousel")) {
            c =
                a.extend({}, p.data(), l.data());
            if (l = l.attr("data-slide-to")) c.interval = !1;
            q.call(p, c);
            l && p.data("bs.carousel").to(l);
            b.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", b).on("click.bs.carousel.data-api", "[data-slide-to]", b);
    a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
            var b = a(this);
            q.call(b, b.data())
        })
    })
}(jQuery);
+function (a) {
    function q(b) {
        var c;
        b = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(b)
    }

    function r(b) {
        return this.each(function () {
            var g = a(this), l = g.data("bs.collapse"),
                p = a.extend({}, c.DEFAULTS, g.data(), "object" == typeof b && b);
            !l && p.toggle && "show" == b && (p.toggle = !1);
            l || g.data("bs.collapse", l = new c(this, p));
            if ("string" == typeof b) l[b]()
        })
    }

    var c = function (b, g) {
        this.$element = a(b);
        this.options = a.extend({}, c.DEFAULTS, g);
        this.$trigger = a(this.options.trigger).filter('[href="#' +
            b.id + '"], [data-target="#' + b.id + '"]');
        this.transitioning = null;
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
        this.options.toggle && this.toggle()
    };
    c.VERSION = "3.3.2";
    c.TRANSITION_DURATION = 350;
    c.DEFAULTS = {toggle: !0, trigger: '[data-toggle="collapse"]'};
    c.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height"
    };
    c.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, g = this.$parent &&
                this.$parent.children(".panel").children(".in, .collapsing");
            if (g && g.length && (b = g.data("bs.collapse")) && b.transitioning) return;
            var l = a.Event("show.bs.collapse");
            this.$element.trigger(l);
            if (!l.isDefaultPrevented()) {
                g && g.length && (r.call(g, "hide"), b || g.data("bs.collapse", null));
                var p = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[p](0).attr("aria-expanded", !0);
                this.$trigger.removeClass("collapsed").attr("aria-expanded", !0);
                this.transitioning = 1;
                b = function () {
                    this.$element.removeClass("collapsing").addClass("collapse in")[p]("");
                    this.transitioning = 0;
                    this.$element.trigger("shown.bs.collapse")
                };
                if (!a.support.transition) return b.call(this);
                g = a.camelCase(["scroll", p].join("-"));
                this.$element.one("bsTransitionEnd", a.proxy(b, this)).emulateTransitionEnd(c.TRANSITION_DURATION)[p](this.$element[0][g])
            }
        }
    };
    c.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            this.$element.trigger(b);
            if (!b.isDefaultPrevented()) {
                b = this.dimension();
                this.$element[b](this.$element[b]())[0].offsetHeight;
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1);
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1);
                this.transitioning = 1;
                var g = function () {
                    this.transitioning = 0;
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!a.support.transition) return g.call(this);
                this.$element[b](0).one("bsTransitionEnd", a.proxy(g, this)).emulateTransitionEnd(c.TRANSITION_DURATION)
            }
        }
    };
    c.prototype.toggle = function () {
        this[this.$element.hasClass("in") ?
            "hide" : "show"]()
    };
    c.prototype.getParent = function () {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (b, c) {
            var l = a(c);
            this.addAriaAndCollapsedClass(q(l), l)
        }, this)).end()
    };
    c.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c);
        b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var b = a.fn.collapse;
    a.fn.collapse = r;
    a.fn.collapse.Constructor = c;
    a.fn.collapse.noConflict = function () {
        a.fn.collapse =
            b;
        return this
    };
    a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (b) {
        var c = a(this);
        c.attr("data-target") || b.preventDefault();
        b = q(c);
        c = b.data("bs.collapse") ? "toggle" : a.extend({}, c.data(), {trigger: this});
        r.call(b, c)
    })
}(jQuery);
+function (a) {
    function q(b) {
        b && 3 === b.which || (a(".dropdown-backdrop").remove(), a('[data-toggle="dropdown"]').each(function () {
            var c = a(this), l = r(c), p = {relatedTarget: this};
            l.hasClass("open") && (l.trigger(b = a.Event("hide.bs.dropdown", p)), b.isDefaultPrevented() || (c.attr("aria-expanded", "false"), l.removeClass("open").trigger("hidden.bs.dropdown", p)))
        }))
    }

    function r(b) {
        var c = b.attr("data-target");
        c || (c = (c = b.attr("href")) && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        return (c = c && a(c)) && c.length ? c : b.parent()
    }

    var c = function (b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    c.VERSION = "3.3.2";
    c.prototype.toggle = function (b) {
        var c = a(this);
        if (!c.is(".disabled, :disabled")) {
            var l = r(c);
            b = l.hasClass("open");
            q();
            if (!b) {
                if ("ontouchstart" in document.documentElement && !l.closest(".navbar-nav").length) a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", q);
                var p = {relatedTarget: this};
                l.trigger(b = a.Event("show.bs.dropdown", p));
                if (b.isDefaultPrevented()) return;
                c.trigger("focus").attr("aria-expanded", "true");
                l.toggleClass("open").trigger("shown.bs.dropdown", p)
            }
            return !1
        }
    };
    c.prototype.keydown = function (b) {
        if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
            var c = a(this);
            b.preventDefault();
            b.stopPropagation();
            if (!c.is(".disabled, :disabled")) {
                var l = r(c), p = l.hasClass("open");
                if (!p && 27 != b.which || p && 27 == b.which) return 27 == b.which && l.find('[data-toggle="dropdown"]').trigger("focus"), c.trigger("click");
                c = l.find('[role="menu"] li:not(.divider):visible a, [role="listbox"] li:not(.divider):visible a');
                c.length && (l = c.index(b.target), 38 == b.which && 0 < l && l--, 40 == b.which && l < c.length - 1 && l++, ~l || (l = 0), c.eq(l).trigger("focus"))
            }
        }
    };
    var b = a.fn.dropdown;
    a.fn.dropdown = function (b) {
        return this.each(function () {
            var g = a(this), l = g.data("bs.dropdown");
            l || g.data("bs.dropdown", l = new c(this));
            "string" == typeof b && l[b].call(g)
        })
    };
    a.fn.dropdown.Constructor = c;
    a.fn.dropdown.noConflict = function () {
        a.fn.dropdown = b;
        return this
    };
    a(document).on("click.bs.dropdown.data-api", q).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api",
        '[data-toggle="dropdown"]', c.prototype.toggle).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', c.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', c.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', c.prototype.keydown)
}(jQuery);
+function (a) {
    function q(b, c) {
        return this.each(function () {
            var g = a(this), l = g.data("bs.modal"), p = a.extend({}, r.DEFAULTS, g.data(), "object" == typeof b && b);
            l || g.data("bs.modal", l = new r(this, p));
            if ("string" == typeof b) l[b](c); else p.show && l.show(c)
        })
    }

    var r = function (b, c) {
        this.options = c;
        this.$body = a(document.body);
        this.$element = a(b);
        this.$backdrop = this.isShown = null;
        this.scrollbarWidth = 0;
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
                this.$element.trigger("loaded.bs.modal")
            },
            this))
    };
    r.VERSION = "3.3.2";
    r.TRANSITION_DURATION = 300;
    r.BACKDROP_TRANSITION_DURATION = 150;
    r.DEFAULTS = {backdrop: !0, keyboard: !0, show: !0};
    r.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a)
    };
    r.prototype.show = function (b) {
        var c = this, g = a.Event("show.bs.modal", {relatedTarget: b});
        this.$element.trigger(g);
        this.isShown || g.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal",
            '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function () {
            var g = a.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(c.$body);
            c.$element.show().scrollTop(0);
            c.options.backdrop && c.adjustBackdrop();
            c.adjustDialog();
            g && c.$element[0].offsetWidth;
            c.$element.addClass("in").attr("aria-hidden", !1);
            c.enforceFocus();
            var p = a.Event("shown.bs.modal", {relatedTarget: b});
            g ? c.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
                    c.$element.trigger("focus").trigger(p)
                }).emulateTransitionEnd(r.TRANSITION_DURATION) :
                c.$element.trigger("focus").trigger(p)
        }))
    };
    r.prototype.hide = function (b) {
        b && b.preventDefault();
        b = a.Event("hide.bs.modal");
        this.$element.trigger(b);
        this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(r.TRANSITION_DURATION) :
            this.hideModal())
    };
    r.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    };
    r.prototype.escape = function () {
        if (this.isShown && this.options.keyboard) this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
            27 == a.which && this.hide()
        }, this)); else this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    };
    r.prototype.resize = function () {
        if (this.isShown) a(window).on("resize.bs.modal",
            a.proxy(this.handleUpdate, this)); else a(window).off("resize.bs.modal")
    };
    r.prototype.hideModal = function () {
        var a = this;
        this.$element.hide();
        this.backdrop(function () {
            a.$body.removeClass("modal-open");
            a.resetAdjustments();
            a.resetScrollbar();
            a.$element.trigger("hidden.bs.modal")
        })
    };
    r.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    };
    r.prototype.backdrop = function (b) {
        var c = this, g = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var l =
                a.support.transition && g;
            this.$backdrop = a('<div class="modal-backdrop ' + g + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", a.proxy(function (a) {
                a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this));
            l && this.$backdrop[0].offsetWidth;
            this.$backdrop.addClass("in");
            b && (l ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(r.BACKDROP_TRANSITION_DURATION) : b())
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"),
            g = function () {
                c.removeBackdrop();
                b && b()
            }, a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(r.BACKDROP_TRANSITION_DURATION) : g()) : b && b()
    };
    r.prototype.handleUpdate = function () {
        this.options.backdrop && this.adjustBackdrop();
        this.adjustDialog()
    };
    r.prototype.adjustBackdrop = function () {
        this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
    };
    r.prototype.adjustDialog = function () {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    };
    r.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    };
    r.prototype.checkScrollbar = function () {
        this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight;
        this.scrollbarWidth = this.measureScrollbar()
    };
    r.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    };
    r.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", "")
    };
    r.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure";
        this.$body.append(a);
        var c = a.offsetWidth - a.clientWidth;
        this.$body[0].removeChild(a);
        return c
    };
    var c = a.fn.modal;
    a.fn.modal = q;
    a.fn.modal.Constructor = r;
    a.fn.modal.noConflict = function () {
        a.fn.modal = c;
        return this
    };
    a(document).on("click.bs.modal.data-api",
        '[data-toggle="modal"]', function (b) {
            var c = a(this), g = c.attr("href"), l = a(c.attr("data-target") || g && g.replace(/.*(?=#[^\s]+$)/, "")),
                g = l.data("bs.modal") ? "toggle" : a.extend({remote: !/#/.test(g) && g}, l.data(), c.data());
            c.is("a") && b.preventDefault();
            l.one("show.bs.modal", function (a) {
                if (!a.isDefaultPrevented()) l.one("hidden.bs.modal", function () {
                    c.is(":visible") && c.trigger("focus")
                })
            });
            q.call(l, g, this)
        })
}(jQuery);
+function (a) {
    var q = function (a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null;
        this.init("tooltip", a, b)
    };
    q.VERSION = "3.3.2";
    q.TRANSITION_DURATION = 150;
    q.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    };
    q.prototype.init = function (c, b, e) {
        this.enabled =
            !0;
        this.type = c;
        this.$element = a(b);
        this.options = this.getOptions(e);
        this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);
        c = this.options.trigger.split(" ");
        for (b = c.length; b--;) if (e = c[b], "click" == e) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != e) {
            var g = "hover" == e ? "mouseleave" : "focusout";
            this.$element.on(("hover" == e ? "mouseenter" : "focusin") + "." + this.type, this.options.selector, a.proxy(this.enter, this));
            this.$element.on(g +
                "." + this.type, this.options.selector, a.proxy(this.leave, this))
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    };
    q.prototype.getDefaults = function () {
        return q.DEFAULTS
    };
    q.prototype.getOptions = function (c) {
        c = a.extend({}, this.getDefaults(), this.$element.data(), c);
        c.delay && "number" == typeof c.delay && (c.delay = {show: c.delay, hide: c.delay});
        return c
    };
    q.prototype.getDelegateOptions = function () {
        var c = {}, b = this.getDefaults();
        this._options && a.each(this._options,
            function (a, g) {
                b[a] != g && (c[a] = g)
            });
        return c
    };
    q.prototype.enter = function (c) {
        var b = c instanceof this.constructor ? c : a(c.currentTarget).data("bs." + this.type);
        if (b && b.$tip && b.$tip.is(":visible")) b.hoverState = "in"; else {
            b || (b = new this.constructor(c.currentTarget, this.getDelegateOptions()), a(c.currentTarget).data("bs." + this.type, b));
            clearTimeout(b.timeout);
            b.hoverState = "in";
            if (!b.options.delay || !b.options.delay.show) return b.show();
            b.timeout = setTimeout(function () {
                "in" == b.hoverState && b.show()
            }, b.options.delay.show)
        }
    };
    q.prototype.leave = function (c) {
        var b = c instanceof this.constructor ? c : a(c.currentTarget).data("bs." + this.type);
        b || (b = new this.constructor(c.currentTarget, this.getDelegateOptions()), a(c.currentTarget).data("bs." + this.type, b));
        clearTimeout(b.timeout);
        b.hoverState = "out";
        if (!b.options.delay || !b.options.delay.hide) return b.hide();
        b.timeout = setTimeout(function () {
            "out" == b.hoverState && b.hide()
        }, b.options.delay.hide)
    };
    q.prototype.show = function () {
        var c = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(c);
            var b = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (!c.isDefaultPrevented() && b) {
                var e = this, c = this.tip(), b = this.getUID(this.type);
                this.setContent();
                c.attr("id", b);
                this.$element.attr("aria-describedby", b);
                this.options.animation && c.addClass("fade");
                var b = "function" == typeof this.options.placement ? this.options.placement.call(this, c[0], this.$element[0]) : this.options.placement,
                    g = /\s?auto?\s?/i, l = g.test(b);
                l && (b = b.replace(g, "") || "top");
                c.detach().css({top: 0, left: 0, display: "block"}).addClass(b).data("bs." +
                    this.type, this);
                this.options.container ? c.appendTo(this.options.container) : c.insertAfter(this.$element);
                var g = this.getPosition(), p = c[0].offsetWidth, t = c[0].offsetHeight;
                if (l) {
                    var l = b, k = this.options.container ? a(this.options.container) : this.$element.parent(),
                        k = this.getPosition(k),
                        b = "bottom" == b && g.bottom + t > k.bottom ? "top" : "top" == b && g.top - t < k.top ? "bottom" : "right" == b && g.right + p > k.width ? "left" : "left" == b && g.left - p < k.left ? "right" : b;
                    c.removeClass(l).addClass(b)
                }
                g = this.getCalculatedOffset(b, g, p, t);
                this.applyPlacement(g,
                    b);
                b = function () {
                    var a = e.hoverState;
                    e.$element.trigger("shown.bs." + e.type);
                    e.hoverState = null;
                    "out" == a && e.leave(e)
                };
                a.support.transition && this.$tip.hasClass("fade") ? c.one("bsTransitionEnd", b).emulateTransitionEnd(q.TRANSITION_DURATION) : b()
            }
        }
    };
    q.prototype.applyPlacement = function (c, b) {
        var e = this.tip(), g = e[0].offsetWidth, l = e[0].offsetHeight, p = parseInt(e.css("margin-top"), 10),
            t = parseInt(e.css("margin-left"), 10);
        isNaN(p) && (p = 0);
        isNaN(t) && (t = 0);
        c.top += p;
        c.left += t;
        a.offset.setOffset(e[0], a.extend({
            using: function (a) {
                e.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, c), 0);
        e.addClass("in");
        var t = e[0].offsetWidth, k = e[0].offsetHeight;
        "top" == b && k != l && (c.top = c.top + l - k);
        var s = this.getViewportAdjustedDelta(b, c, t, k);
        s.left ? c.left += s.left : c.top += s.top;
        g = (p = /top|bottom/.test(b)) ? 2 * s.left - g + t : 2 * s.top - l + k;
        l = p ? "offsetWidth" : "offsetHeight";
        e.offset(c);
        this.replaceArrow(g, e[0][l], p)
    };
    q.prototype.replaceArrow = function (a, b, e) {
        this.arrow().css(e ? "left" : "top", 50 * (1 - a / b) + "%").css(e ? "top" : "left", "")
    };
    q.prototype.setContent = function () {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b);
        a.removeClass("fade in top bottom left right")
    };
    q.prototype.hide = function (c) {
        function b() {
            "in" != e.hoverState && g.detach();
            e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type);
            c && c()
        }

        var e = this, g = this.tip(), l = a.Event("hide.bs." + this.type);
        this.$element.trigger(l);
        if (!l.isDefaultPrevented()) return g.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? g.one("bsTransitionEnd", b).emulateTransitionEnd(q.TRANSITION_DURATION) :
            b(), this.hoverState = null, this
    };
    q.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    };
    q.prototype.hasContent = function () {
        return this.getTitle()
    };
    q.prototype.getPosition = function (c) {
        c = c || this.$element;
        var b = c[0], e = "BODY" == b.tagName, b = b.getBoundingClientRect();
        null == b.width && (b = a.extend({}, b, {width: b.right - b.left, height: b.bottom - b.top}));
        var g = e ? {top: 0, left: 0} : c.offset();
        c = {scroll: e ? document.documentElement.scrollTop || document.body.scrollTop : c.scrollTop()};
        e = e ? {width: a(window).width(), height: a(window).height()} : null;
        return a.extend({}, b, c, e, g)
    };
    q.prototype.getCalculatedOffset = function (a, b, e, g) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - e / 2
        } : "top" == a ? {
            top: b.top - g,
            left: b.left + b.width / 2 - e / 2
        } : "left" == a ? {top: b.top + b.height / 2 - g / 2, left: b.left - e} : {
            top: b.top + b.height / 2 - g / 2,
            left: b.left + b.width
        }
    };
    q.prototype.getViewportAdjustedDelta = function (a, b, e, g) {
        var l =
            {top: 0, left: 0};
        if (!this.$viewport) return l;
        var p = this.options.viewport && this.options.viewport.padding || 0, t = this.getPosition(this.$viewport);
        /right|left/.test(a) ? (e = b.top - p - t.scroll, b = b.top + p - t.scroll + g, e < t.top ? l.top = t.top - e : b > t.top + t.height && (l.top = t.top + t.height - b)) : (g = b.left - p, b = b.left + p + e, g < t.left ? l.left = t.left - g : b > t.width && (l.left = t.left + t.width - b));
        return l
    };
    q.prototype.getTitle = function () {
        var a = this.$element, b = this.options;
        return a.attr("data-original-title") || ("function" == typeof b.title ? b.title.call(a[0]) :
            b.title)
    };
    q.prototype.getUID = function (a) {
        do a += ~~(1E6 * Math.random()); while (document.getElementById(a));
        return a
    };
    q.prototype.tip = function () {
        return this.$tip = this.$tip || a(this.options.template)
    };
    q.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    };
    q.prototype.enable = function () {
        this.enabled = !0
    };
    q.prototype.disable = function () {
        this.enabled = !1
    };
    q.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    };
    q.prototype.toggle = function (c) {
        var b = this;
        c && (b = a(c.currentTarget).data("bs." +
            this.type), b || (b = new this.constructor(c.currentTarget, this.getDelegateOptions()), a(c.currentTarget).data("bs." + this.type, b)));
        b.tip().hasClass("in") ? b.leave(b) : b.enter(b)
    };
    q.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout);
        this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type)
        })
    };
    var r = a.fn.tooltip;
    a.fn.tooltip = function (c) {
        return this.each(function () {
            var b = a(this), e = b.data("bs.tooltip"), g = "object" == typeof c && c;
            if (e || "destroy" != c) if (e || b.data("bs.tooltip", e = new q(this,
                g)), "string" == typeof c) e[c]()
        })
    };
    a.fn.tooltip.Constructor = q;
    a.fn.tooltip.noConflict = function () {
        a.fn.tooltip = r;
        return this
    }
}(jQuery);
+function (a) {
    var q = function (a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw Error("Popover requires tooltip.js");
    q.VERSION = "3.3.2";
    q.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });
    q.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype);
    q.prototype.constructor = q;
    q.prototype.getDefaults = function () {
        return q.DEFAULTS
    };
    q.prototype.setContent = function () {
        var a = this.tip(), b = this.getTitle(), e = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b);
        a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof e ? "html" : "append" : "text"](e);
        a.removeClass("fade top bottom left right in");
        a.find(".popover-title").html() || a.find(".popover-title").hide()
    };
    q.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    };
    q.prototype.getContent = function () {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    };
    q.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    q.prototype.tip = function () {
        this.$tip || (this.$tip = a(this.options.template));
        return this.$tip
    };
    var r = a.fn.popover;
    a.fn.popover = function (c) {
        return this.each(function () {
            var b = a(this), e = b.data("bs.popover"), g = "object" == typeof c && c;
            if (e || "destroy" != c) if (e || b.data("bs.popover", e = new q(this, g)), "string" == typeof c) e[c]()
        })
    };
    a.fn.popover.Constructor = q;
    a.fn.popover.noConflict = function () {
        a.fn.popover = r;
        return this
    }
}(jQuery);
+function (a) {
    function q(b, c) {
        var g = a.proxy(this.process, this);
        this.$body = a("body");
        this.$scrollElement = a(b).is("body") ? a(window) : a(b);
        this.options = a.extend({}, q.DEFAULTS, c);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", g);
        this.refresh();
        this.process()
    }

    function r(b) {
        return this.each(function () {
            var c = a(this), g = c.data("bs.scrollspy"), l = "object" == typeof b && b;
            g || c.data("bs.scrollspy",
                g = new q(this, l));
            if ("string" == typeof b) g[b]()
        })
    }

    q.VERSION = "3.3.2";
    q.DEFAULTS = {offset: 10};
    q.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    };
    q.prototype.refresh = function () {
        var b = "offset", c = 0;
        a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop());
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        var g = this;
        this.$body.find(this.selector).map(function () {
            var g =
                a(this), g = g.data("target") || g.attr("href"), p = /^#./.test(g) && a(g);
            return p && p.length && p.is(":visible") && [[p[b]().top + c, g]] || null
        }).sort(function (a, b) {
            return a[0] - b[0]
        }).each(function () {
            g.offsets.push(this[0]);
            g.targets.push(this[1])
        })
    };
    q.prototype.process = function () {
        var a = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(),
            g = this.options.offset + c - this.$scrollElement.height(), l = this.offsets, p = this.targets,
            t = this.activeTarget, k;
        this.scrollHeight != c && this.refresh();
        if (a >= g) return t !=
            (k = p[p.length - 1]) && this.activate(k);
        if (t && a < l[0]) return this.activeTarget = null, this.clear();
        for (k = l.length; k--;) t != p[k] && a >= l[k] && (!l[k + 1] || a <= l[k + 1]) && this.activate(p[k])
    };
    q.prototype.activate = function (b) {
        this.activeTarget = b;
        this.clear();
        b = a(this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]').parents("li").addClass("active");
        b.parent(".dropdown-menu").length && (b = b.closest("li.dropdown").addClass("active"));
        b.trigger("activate.bs.scrollspy")
    };
    q.prototype.clear = function () {
        a(this.selector).parentsUntil(this.options.target,
            ".active").removeClass("active")
    };
    var c = a.fn.scrollspy;
    a.fn.scrollspy = r;
    a.fn.scrollspy.Constructor = q;
    a.fn.scrollspy.noConflict = function () {
        a.fn.scrollspy = c;
        return this
    };
    a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
            var b = a(this);
            r.call(b, b.data())
        })
    })
}(jQuery);
+function (a) {
    function q(b) {
        return this.each(function () {
            var c = a(this), l = c.data("bs.tab");
            l || c.data("bs.tab", l = new r(this));
            if ("string" == typeof b) l[b]()
        })
    }

    var r = function (b) {
        this.element = a(b)
    };
    r.VERSION = "3.3.2";
    r.TRANSITION_DURATION = 150;
    r.prototype.show = function () {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), l = b.data("target");
        l || (l = (l = b.attr("href")) && l.replace(/.*(?=#[^\s]*$)/, ""));
        if (!b.parent("li").hasClass("active")) {
            var p = c.find(".active:last a"), t = a.Event("hide.bs.tab", {relatedTarget: b[0]}),
                k = a.Event("show.bs.tab", {relatedTarget: p[0]});
            p.trigger(t);
            b.trigger(k);
            k.isDefaultPrevented() || t.isDefaultPrevented() || (l = a(l), this.activate(b.closest("li"), c), this.activate(l, l.parent(), function () {
                p.trigger({type: "hidden.bs.tab", relatedTarget: b[0]});
                b.trigger({type: "shown.bs.tab", relatedTarget: p[0]})
            }))
        }
    };
    r.prototype.activate = function (b, c, l) {
        function p() {
            t.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
            b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",
                !0);
            k ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade");
            b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
            l && l()
        }

        var t = c.find("> .active"),
            k = l && a.support.transition && (t.length && t.hasClass("fade") || !!c.find("> .fade").length);
        t.length && k ? t.one("bsTransitionEnd", p).emulateTransitionEnd(r.TRANSITION_DURATION) : p();
        t.removeClass("in")
    };
    var c = a.fn.tab;
    a.fn.tab = q;
    a.fn.tab.Constructor = r;
    a.fn.tab.noConflict = function () {
        a.fn.tab =
            c;
        return this
    };
    var b = function (b) {
        b.preventDefault();
        q.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', b).on("click.bs.tab.data-api", '[data-toggle="pill"]', b)
}(jQuery);
+function (a) {
    function q() {
        var a = document.createElement("bootstrap"), c = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        }, b;
        for (b in c) if (void 0 !== a.style[b]) return {end: c[b]};
        return !1
    }

    a.fn.emulateTransitionEnd = function (q) {
        var c = !1, b = this;
        a(this).one("bsTransitionEnd", function () {
            c = !0
        });
        setTimeout(function () {
            c || a(b).trigger(a.support.transition.end)
        }, q);
        return this
    };
    a(function () {
        a.support.transition = q();
        a.support.transition &&
        (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function (q) {
                if (a(q.target).is(this)) return q.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery);
(function (a) {
    function q(b, c) {
        this.itemsArray = [];
        this.$element = a(b);
        this.$element.hide();
        this.multiple = (this.isSelect = "SELECT" === b.tagName) && b.hasAttribute("multiple");
        this.objectItems = c && c.itemValue;
        this.placeholderText = b.hasAttribute("placeholder") ? this.$element.attr("placeholder") : "";
        this.inputSize = Math.max(1, this.placeholderText.length);
        this.$container = a('<div class="bootstrap-tagsinput"></div>');
        this.$input = a('<input type="text" placeholder="' + this.placeholderText + '"/>').appendTo(this.$container);
        this.$element.after(this.$container);
        this.build(c)
    }

    function r(a, b) {
        if ("function" !== typeof a[b]) {
            var c = a[b];
            a[b] = function (a) {
                return a[c]
            }
        }
    }

    function c(a, b) {
        if ("function" !== typeof a[b]) {
            var c = a[b];
            a[b] = function () {
                return c
            }
        }
    }

    function b(a) {
        return a ? p.text(a).html() : ""
    }

    function e(a) {
        var b = 0;
        if (document.selection) a.focus(), b = document.selection.createRange(), b.moveStart("character", -a.value.length), b = b.text.length; else if (a.selectionStart || "0" == a.selectionStart) b = a.selectionStart;
        return b
    }

    function g(b, c) {
        var e =
            !1;
        a.each(c, function (a, c) {
            if ("number" === typeof c && b.which === c) return e = !0, !1;
            if (b.which === c.which) {
                var g = !c.hasOwnProperty("altKey") || b.altKey === c.altKey,
                    k = !c.hasOwnProperty("shiftKey") || b.shiftKey === c.shiftKey,
                    h = !c.hasOwnProperty("ctrlKey") || b.ctrlKey === c.ctrlKey;
                if (g && k && h) return e = !0, !1
            }
        });
        return e
    }

    var l = {
        tagClass: function (a) {
            return "label label-info"
        }, itemValue: function (a) {
            return a ? a.toString() : a
        }, itemText: function (a) {
            return this.itemValue(a)
        }, freeInput: !0, addOnBlur: !0, maxTags: 10, maxChars: 20, confirmKeys: [13,
            32, 44, 91, 188], onTagExists: function (a, b) {
            b.hide().fadeIn()
        }, trimValue: !1, allowDuplicates: !1
    };
    q.prototype = {
        constructor: q, add: function (c, e) {
            var g = this;
            if (!(g.options.maxTags && g.itemsArray.length >= g.options.maxTags || !1 !== c && !c)) {
                "string" === typeof c && g.options.trimValue && (c = a.trim(c));
                if ("object" === typeof c && !g.objectItems) throw"Can't add objects when itemValue option is not set";
                if (!c.toString().match(/^\s*$/)) {
                    g.isSelect && !g.multiple && 0 < g.itemsArray.length && g.remove(g.itemsArray[0]);
                    if ("string" === typeof c &&
                        "INPUT" === this.$element[0].tagName) {
                        var l = c.split(",");
                        if (1 < l.length) {
                            for (var p = 0; p < l.length; p++) this.add(l[p], !0);
                            e || g.pushVal();
                            return
                        }
                    }
                    l = a.Event("beforeItemAdd", {item: c, cancel: !1});
                    g.$element.trigger(l);
                    if (!l.cancel) {
                        c = l.item;
                        var q = g.options.itemValue(c), l = g.options.itemText(c), p = g.options.tagClass(c),
                            r = a.grep(g.itemsArray, function (a) {
                                return g.options.itemValue(a) === q
                            })[0];
                        r && !g.options.allowDuplicates ? g.options.onTagExists && (l = a(".tag", g.$container).filter(function () {
                            return a(this).data("item") ===
                                r
                        }), g.options.onTagExists(c, l)) : g.items().toString().length + c.length + 1 > g.options.maxInputLength || (g.itemsArray.push(c), p = a('<span class="tag ' + b(p) + '">' + b(l) + '<span data-role="remove"></span></span>'), p.data("item", c), g.findInputWrapper().before(p), p.after(" "), g.isSelect && !a('option[value="' + encodeURIComponent(q) + '"]', g.$element)[0] && (l = a("<option selected>" + b(l) + "</option>"), l.data("item", c), l.attr("value", q), g.$element.append(l)), e || g.pushVal(), g.options.maxTags !== g.itemsArray.length && g.items().toString().length !==
                        g.options.maxInputLength || g.$container.addClass("bootstrap-tagsinput-max"), g.$element.trigger(a.Event("itemAdded", {item: c})))
                    }
                }
            }
        }, remove: function (b, c) {
            var e = this;
            e.objectItems && (b = "object" === typeof b ? a.grep(e.itemsArray, function (a) {
                return e.options.itemValue(a) == e.options.itemValue(b)
            }) : a.grep(e.itemsArray, function (a) {
                return e.options.itemValue(a) == b
            }), b = b[b.length - 1]);
            if (b) {
                var g = a.Event("beforeItemRemove", {item: b, cancel: !1});
                e.$element.trigger(g);
                if (g.cancel) return;
                a(".tag", e.$container).filter(function () {
                    return a(this).data("item") ===
                        b
                }).remove();
                a("option", e.$element).filter(function () {
                    return a(this).data("item") === b
                }).remove();
                -1 !== a.inArray(b, e.itemsArray) && e.itemsArray.splice(a.inArray(b, e.itemsArray), 1)
            }
            c || e.pushVal();
            e.options.maxTags > e.itemsArray.length && e.$container.removeClass("bootstrap-tagsinput-max");
            e.$element.trigger(a.Event("itemRemoved", {item: b}))
        }, removeAll: function () {
            a(".tag", this.$container).remove();
            for (a("option", this.$element).remove(); 0 < this.itemsArray.length;) this.itemsArray.pop();
            this.pushVal()
        }, refresh: function () {
            var c =
                this;
            a(".tag", c.$container).each(function () {
                var e = a(this), g = e.data("item"), l = c.options.itemValue(g), p = c.options.itemText(g),
                    q = c.options.tagClass(g);
                e.attr("class", null);
                e.addClass("tag " + b(q));
                e.contents().filter(function () {
                    return 3 == this.nodeType
                })[0].nodeValue = b(p);
                c.isSelect && a("option", c.$element).filter(function () {
                    return a(this).data("item") === g
                }).attr("value", l)
            })
        }, items: function () {
            return this.itemsArray
        }, pushVal: function () {
            var b = this, c = a.map(b.items(), function (a) {
                return b.options.itemValue(a).toString()
            });
            b.$element.val(c, !0).trigger("change")
        }, build: function (b) {
            var k = this;
            k.options = a.extend({}, l, b);
            k.objectItems && (k.options.freeInput = !1);
            r(k.options, "itemValue");
            r(k.options, "itemText");
            c(k.options, "tagClass");
            if (k.options.typeahead) {
                var p = k.options.typeahead || {};
                c(p, "source");
                k.$input.typeahead(a.extend({}, p, {
                    source: function (b, c) {
                        function e(a) {
                            for (var b = [], m = 0; m < a.length; m++) {
                                var g = k.options.itemText(a[m]);
                                h[g] = a[m];
                                b.push(g)
                            }
                            c(b)
                        }

                        var h = this.map = {}, m = p.source(b);
                        a.isFunction(m.success) ? m.success(e) :
                            a.isFunction(m.then) ? m.then(e) : a.when(m).then(e)
                    }, updater: function (a) {
                        k.add(this.map[a])
                    }, matcher: function (a) {
                        return -1 !== a.toLowerCase().indexOf(this.query.trim().toLowerCase())
                    }, sorter: function (a) {
                        return a.sort()
                    }, highlighter: function (a) {
                        return a.replace(new RegExp("(" + this.query + ")", "gi"), "<strong>$1</strong>")
                    }
                }))
            }
            if (k.options.typeaheadjs) {
                var q = k.options.typeaheadjs || {};
                k.$input.typeahead(null, q).on("typeahead:selected", a.proxy(function (a, b) {
                    q.valueKey ? k.add(b[q.valueKey]) : k.add(b);
                    k.$input.typeahead("val",
                        "")
                }, k))
            }
            k.$container.on("click", a.proxy(function (a) {
                k.$element.attr("disabled") || k.$input.removeAttr("disabled");
                k.$input.focus()
            }, k));
            if (k.options.addOnBlur && k.options.freeInput) k.$input.on("focusout", a.proxy(function (b) {
                0 === a(".typeahead, .twitter-typeahead", k.$container).length && (k.add(k.$input.val()), k.$input.val(""))
            }, k));
            k.$container.on("keydown", "input", a.proxy(function (b) {
                var c = a(b.target), g = k.findInputWrapper();
                if (k.$element.attr("disabled")) k.$input.attr("disabled", "disabled"); else {
                    switch (b.which) {
                        case 13:
                            b.preventDefault();
                            break;
                        case 8:
                            0 === e(c[0]) && (g = g.prev()) && k.remove(g.data("item"));
                            break;
                        case 46:
                            0 === e(c[0]) && (g = g.next()) && k.remove(g.data("item"));
                            break;
                        case 37:
                            b = g.prev();
                            0 === c.val().length && b[0] && (b.before(g), c.focus());
                            break;
                        case 39:
                            b = g.next(), 0 === c.val().length && b[0] && (b.after(g), c.focus())
                    }
                    g = c.val().length;
                    Math.ceil(g / 5);
                    c.attr("size", Math.max(this.inputSize, c.val().length))
                }
            }, k));
            k.$container.on("keyup", "input", a.proxy(function (b) {
                var c = a(b.target), e = c.val().substr(0, c.val().length).trim(), h = k.options.maxChars &&
                    e.length >= k.options.maxChars;
                k.options.freeInput && (g(b, k.options.confirmKeys) || h) && (k.add(h ? e.substr(0, k.options.maxChars) : e), c.val(""), b.preventDefault());
                b = e.length;
                Math.ceil(b / 5);
                c.attr("size", Math.max(this.inputSize, b))
            }, k));
            k.$container.on("click", "[data-role=remove]", a.proxy(function (b) {
                k.$element.attr("disabled") || k.remove(a(b.target).closest(".tag").data("item"))
            }, k));
            k.options.itemValue === l.itemValue && ("INPUT" === k.$element[0].tagName ? k.add(k.$element.val()) : a("option", k.$element).each(function () {
                k.add(a(this).attr("value"),
                    !0)
            }))
        }, destroy: function () {
            this.$container.off("keypress", "input");
            this.$container.off("click", "[role=remove]");
            this.$container.remove();
            this.$element.removeData("tagsinput");
            this.$element.show()
        }, focus: function () {
            this.$input.focus()
        }, input: function () {
            return this.$input
        }, findInputWrapper: function () {
            for (var b = this.$input[0], c = this.$container[0]; b && b.parentNode !== c;) b = b.parentNode;
            return a(b)
        }
    };
    a.fn.tagsinput = function (b, c) {
        var e = [];
        this.each(function () {
            var g = a(this).data("tagsinput");
            g ? b || c ? void 0 !==
                g[b] && (g = g[b](c), void 0 !== g && e.push(g)) : e.push(g) : (g = new q(this, b), a(this).data("tagsinput", g), e.push(g), "SELECT" === this.tagName && a("option", a(this)).attr("selected", "selected"), a(this).val(a(this).val()))
        });
        return "string" == typeof b ? 1 < e.length ? e : e[0] : e
    };
    a.fn.tagsinput.Constructor = q;
    var p = a("<div />");
    a(function () {
        a("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput()
    })
})(window.jQuery);
(function (a) {
    "function" === typeof define && define.amd ? define(["jquery"], a) : "object" === typeof exports ? a(require("jquery")) : a(jQuery)
})(function (a, q) {
    function r() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function c() {
        var a = new Date;
        return r(a.getFullYear(), a.getMonth(), a.getDate())
    }

    function b(a) {
        return function () {
            return this[a].apply(this, arguments)
        }
    }

    function e(b, c) {
        function e(a, b) {
            return b.toLowerCase()
        }

        var g = a(b).data(), k = {}, l, p = new RegExp("^" + c.toLowerCase() + "([A-Z])");
        c = new RegExp("^" + c.toLowerCase());
        for (var q in g) c.test(q) && (l = q.replace(p, e), k[l] = g[q]);
        return k
    }

    function g(b) {
        var c = {};
        if (!C[b] && (b = b.split("-")[0], !C[b])) return;
        var e = C[b];
        a.each(E, function (a, b) {
            b in e && (c[b] = e[b])
        });
        return c
    }

    var l = function () {
        var b = {
            get: function (a) {
                return this.slice(a)[0]
            }, contains: function (a) {
                a = a && a.valueOf();
                for (var b = 0, c = this.length; b < c; b++) if (this[b].valueOf() === a) return b;
                return -1
            }, remove: function (a) {
                this.splice(a, 1)
            }, replace: function (b) {
                b && (a.isArray(b) || (b = [b]), this.clear(), this.push.apply(this, b))
            }, clear: function () {
                this.length =
                    0
            }, copy: function () {
                var a = new l;
                a.replace(this);
                return a
            }
        };
        return function () {
            var c = [];
            c.push.apply(c, arguments);
            a.extend(c, b);
            return c
        }
    }(), p = function (b, c) {
        a(b).data("datepicker", this);
        this._process_options(c);
        this.dates = new l;
        this.viewDate = this.o.defaultViewDate;
        this.focusDate = null;
        this.element = a(b);
        this.inputField = (this.isInput = this.element.is("input")) ? this.element : this.element.find("input");
        this.hasInput = (this.component = this.element.hasClass("date") ? this.element.find(".add-on, .input-group-addon, .btn") :
            !1) && this.inputField.length;
        this.component && 0 === this.component.length && (this.component = !1);
        this.isInline = !this.component && this.element.is("div");
        this.picker = a(z.template);
        this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow);
        this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow);
        this._buildEvents();
        this._attachEvents();
        this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) :
            this.picker.addClass("datepicker-dropdown dropdown-menu");
        this.o.rtl && this.picker.addClass("datepicker-rtl");
        this.viewMode = this.o.startView;
        this.o.calendarWeeks && this.picker.find("thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function (a, b) {
            return parseInt(b) + 1
        });
        this._allow_update = !1;
        this.setStartDate(this._o.startDate);
        this.setEndDate(this._o.endDate);
        this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);
        this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted);
        this.setDatesDisabled(this.o.datesDisabled);
        this.fillDow();
        this.fillMonths();
        this._allow_update = !0;
        this.update();
        this.showMode();
        this.isInline && this.show()
    };
    p.prototype = {
        constructor: p, _resolveViewName: function (a, b) {
            return 0 === a || "days" === a || "month" === a ? 0 : 1 === a || "months" === a || "year" === a ? 1 : 2 === a || "years" === a || "decade" === a ? 2 : 3 === a || "decades" === a || "century" === a ? 3 : 4 === a || "centuries" === a || "millennium" === a ? 4 : b === q ? !1 : b
        }, _check_template: function (b) {
            try {
                return b === q || "" === b ? !1 : 0 >= (b.match(/[<>]/g) || []).length ? !0 : 0 < a(b).length
            } catch (c) {
                return !1
            }
        }, _process_options: function (b) {
            this._o =
                a.extend({}, this._o, b);
            var e = this.o = a.extend({}, this._o);
            b = e.language;
            C[b] || (b = b.split("-")[0], C[b] || (b = L.language));
            e.language = b;
            e.startView = this._resolveViewName(e.startView, 0);
            e.minViewMode = this._resolveViewName(e.minViewMode, 0);
            e.maxViewMode = this._resolveViewName(e.maxViewMode, 4);
            e.startView = Math.min(e.startView, e.maxViewMode);
            e.startView = Math.max(e.startView, e.minViewMode);
            !0 !== e.multidate && (e.multidate = Number(e.multidate) || !1, !1 !== e.multidate && (e.multidate = Math.max(0, e.multidate)));
            e.multidateSeparator =
                String(e.multidateSeparator);
            e.weekStart %= 7;
            e.weekEnd = (e.weekStart + 6) % 7;
            var g = z.parseFormat(e.format);
            -Infinity !== e.startDate && (e.startDate = e.startDate ? e.startDate instanceof Date ? this._local_to_utc(this._zero_time(e.startDate)) : z.parseDate(e.startDate, g, e.language, e.assumeNearbyYear) : -Infinity);
            Infinity !== e.endDate && (e.endDate = e.endDate ? e.endDate instanceof Date ? this._local_to_utc(this._zero_time(e.endDate)) : z.parseDate(e.endDate, g, e.language, e.assumeNearbyYear) : Infinity);
            e.daysOfWeekDisabled = e.daysOfWeekDisabled ||
                [];
            a.isArray(e.daysOfWeekDisabled) || (e.daysOfWeekDisabled = e.daysOfWeekDisabled.split(/[,\s]*/));
            e.daysOfWeekDisabled = a.map(e.daysOfWeekDisabled, function (a) {
                return parseInt(a, 10)
            });
            e.daysOfWeekHighlighted = e.daysOfWeekHighlighted || [];
            a.isArray(e.daysOfWeekHighlighted) || (e.daysOfWeekHighlighted = e.daysOfWeekHighlighted.split(/[,\s]*/));
            e.daysOfWeekHighlighted = a.map(e.daysOfWeekHighlighted, function (a) {
                return parseInt(a, 10)
            });
            e.datesDisabled = e.datesDisabled || [];
            a.isArray(e.datesDisabled) || (e.datesDisabled =
                [e.datesDisabled]);
            e.datesDisabled = a.map(e.datesDisabled, function (a) {
                return z.parseDate(a, g, e.language, e.assumeNearbyYear)
            });
            b = String(e.orientation).toLowerCase().split(/\s+/g);
            var k = e.orientation.toLowerCase();
            b = a.grep(b, function (a) {
                return /^auto|left|right|top|bottom$/.test(a)
            });
            e.orientation = {x: "auto", y: "auto"};
            if (k && "auto" !== k) if (1 === b.length) switch (b[0]) {
                case "top":
                case "bottom":
                    e.orientation.y = b[0];
                    break;
                case "left":
                case "right":
                    e.orientation.x = b[0]
            } else k = a.grep(b, function (a) {
                return /^left|right$/.test(a)
            }),
                e.orientation.x = k[0] || "auto", k = a.grep(b, function (a) {
                return /^top|bottom$/.test(a)
            }), e.orientation.y = k[0] || "auto";
            e.defaultViewDate ? (b = e.defaultViewDate.year || (new Date).getFullYear(), e.defaultViewDate = r(b, e.defaultViewDate.month || 0, e.defaultViewDate.day || 1)) : e.defaultViewDate = c()
        }, _events: [], _secondaryEvents: [], _applyEvents: function (a) {
            for (var b = 0, c, e, g; b < a.length; b++) c = a[b][0], 2 === a[b].length ? (e = q, g = a[b][1]) : 3 === a[b].length && (e = a[b][1], g = a[b][2]), c.on(g, e)
        }, _unapplyEvents: function (a) {
            for (var b = 0,
                     c, e, g; b < a.length; b++) c = a[b][0], 2 === a[b].length ? (g = q, e = a[b][1]) : 3 === a[b].length && (g = a[b][1], e = a[b][2]), c.off(e, g)
        }, _buildEvents: function () {
            var b = {
                keyup: a.proxy(function (b) {
                    -1 === a.inArray(b.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                }, this), keydown: a.proxy(this.keydown, this), paste: a.proxy(this.paste, this)
            };
            !0 === this.o.showOnFocus && (b.focus = a.proxy(this.show, this));
            this._events = this.isInput ? [[this.element, b]] : this.component && this.hasInput ? [[this.inputField, b], [this.component, {
                click: a.proxy(this.show,
                    this)
            }]] : [[this.element, {click: a.proxy(this.show, this), keydown: a.proxy(this.keydown, this)}]];
            this._events.push([this.element, "*", {
                blur: a.proxy(function (a) {
                    this._focused_from = a.target
                }, this)
            }], [this.element, {
                blur: a.proxy(function (a) {
                    this._focused_from = a.target
                }, this)
            }]);
            this.o.immediateUpdates && this._events.push([this.element, {
                "changeYear changeMonth": a.proxy(function (a) {
                    this.update(a.date)
                }, this)
            }]);
            this._secondaryEvents = [[this.picker, {click: a.proxy(this.click, this)}], [a(window), {
                resize: a.proxy(this.place,
                    this)
            }], [a(document), {
                mousedown: a.proxy(function (a) {
                    this.element.is(a.target) || this.element.find(a.target).length || this.picker.is(a.target) || this.picker.find(a.target).length || this.isInline || this.hide()
                }, this)
            }]]
        }, _attachEvents: function () {
            this._detachEvents();
            this._applyEvents(this._events)
        }, _detachEvents: function () {
            this._unapplyEvents(this._events)
        }, _attachSecondaryEvents: function () {
            this._detachSecondaryEvents();
            this._applyEvents(this._secondaryEvents)
        }, _detachSecondaryEvents: function () {
            this._unapplyEvents(this._secondaryEvents)
        },
        _trigger: function (b, c) {
            var e = c || this.dates.get(-1), e = this._utc_to_local(e);
            this.element.trigger({
                type: b,
                date: e,
                dates: a.map(this.dates, this._utc_to_local),
                format: a.proxy(function (a, b) {
                    0 === arguments.length ? (a = this.dates.length - 1, b = this.o.format) : "string" === typeof a && (b = a, a = this.dates.length - 1);
                    b = b || this.o.format;
                    var c = this.dates.get(a);
                    return z.formatDate(c, b, this.o.language)
                }, this)
            })
        }, show: function () {
            if (!(this.inputField.prop("disabled") || this.inputField.prop("readonly") && !1 === this.o.enableOnReadonly)) return this.isInline ||
            this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && a(this.element).blur(), this
        }, hide: function () {
            if (this.isInline || !this.picker.is(":visible")) return this;
            this.focusDate = null;
            this.picker.hide().detach();
            this._detachSecondaryEvents();
            this.viewMode = this.o.startView;
            this.showMode();
            this.o.forceParse && this.inputField.val() && this.setValue();
            this._trigger("hide");
            return this
        }, destroy: function () {
            this.hide();
            this._detachEvents();
            this._detachSecondaryEvents();
            this.picker.remove();
            delete this.element.data().datepicker;
            this.isInput || delete this.element.data().date;
            return this
        }, paste: function (b) {
            var c;
            if (b.originalEvent.clipboardData && b.originalEvent.clipboardData.types && -1 !== a.inArray("text/plain", b.originalEvent.clipboardData.types)) c = b.originalEvent.clipboardData.getData("text/plain"); else if (window.clipboardData) c = window.clipboardData.getData("Text");
            else return;
            this.setDate(c);
            this.update();
            b.preventDefault()
        }, _utc_to_local: function (a) {
            return a && new Date(a.getTime() + 6E4 * a.getTimezoneOffset())
        }, _local_to_utc: function (a) {
            return a && new Date(a.getTime() - 6E4 * a.getTimezoneOffset())
        }, _zero_time: function (a) {
            return a && new Date(a.getFullYear(), a.getMonth(), a.getDate())
        }, _zero_utc_time: function (a) {
            return a && new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()))
        }, getDates: function () {
            return a.map(this.dates, this._utc_to_local)
        }, getUTCDates: function () {
            return a.map(this.dates,
                function (a) {
                    return new Date(a)
                })
        }, getDate: function () {
            return this._utc_to_local(this.getUTCDate())
        }, getUTCDate: function () {
            var a = this.dates.get(-1);
            return "undefined" !== typeof a ? new Date(a) : null
        }, clearDates: function () {
            this.inputField && this.inputField.val("");
            this.update();
            this._trigger("changeDate");
            this.o.autoclose && this.hide()
        }, setDates: function () {
            var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
            this.update.apply(this, b);
            this._trigger("changeDate");
            this.setValue();
            return this
        }, setUTCDates: function () {
            var b =
                a.isArray(arguments[0]) ? arguments[0] : arguments;
            this.update.apply(this, a.map(b, this._utc_to_local));
            this._trigger("changeDate");
            this.setValue();
            return this
        }, setDate: b("setDates"), setUTCDate: b("setUTCDates"), remove: b("destroy"), setValue: function () {
            var a = this.getFormattedDate();
            this.inputField.val(a);
            return this
        }, getFormattedDate: function (b) {
            b === q && (b = this.o.format);
            var c = this.o.language;
            return a.map(this.dates, function (a) {
                return z.formatDate(a, b, c)
            }).join(this.o.multidateSeparator)
        }, getStartDate: function () {
            return this.o.startDate
        },
        setStartDate: function (a) {
            this._process_options({startDate: a});
            this.update();
            this.updateNavArrows();
            return this
        }, getEndDate: function () {
            return this.o.endDate
        }, setEndDate: function (a) {
            this._process_options({endDate: a});
            this.update();
            this.updateNavArrows();
            return this
        }, setDaysOfWeekDisabled: function (a) {
            this._process_options({daysOfWeekDisabled: a});
            this.update();
            this.updateNavArrows();
            return this
        }, setDaysOfWeekHighlighted: function (a) {
            this._process_options({daysOfWeekHighlighted: a});
            this.update();
            return this
        },
        setDatesDisabled: function (a) {
            this._process_options({datesDisabled: a});
            this.update();
            this.updateNavArrows()
        }, place: function () {
            if (this.isInline) return this;
            var b = this.picker.outerWidth(), c = this.picker.outerHeight(), e = a(this.o.container), g = e.width(),
                k = "body" === this.o.container ? a(document).scrollTop() : e.scrollTop(), l = e.offset(), p = [];
            this.element.parents().each(function () {
                var b = a(this).css("z-index");
                "auto" !== b && 0 !== b && p.push(parseInt(b))
            });
            var e = Math.max.apply(Math, p) + this.o.zIndexOffset, q = this.component ?
                this.component.parent().offset() : this.element.offset(),
                r = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                t = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1), s = q.left - l.left,
                l = q.top - l.top;
            "body" !== this.o.container && (l += k);
            this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left");
            "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x &&
            (s -= b - t)) : 0 > q.left ? (this.picker.addClass("datepicker-orient-left"), s -= q.left - 10) : s + b > g ? (this.picker.addClass("datepicker-orient-right"), s += t - b) : this.picker.addClass("datepicker-orient-left");
            b = this.o.orientation.y;
            "auto" === b && (b = 0 > -k + l - c ? "bottom" : "top");
            this.picker.addClass("datepicker-orient-" + b);
            l = "top" === b ? l - (c + parseInt(this.picker.css("padding-top"))) : l + r;
            this.o.rtl ? this.picker.css({top: l, right: g - (s + t), zIndex: e}) : this.picker.css({
                top: l,
                left: s,
                zIndex: e
            });
            return this
        }, _allow_update: !0, update: function () {
            if (!this._allow_update) return this;
            var b = this.dates.copy(), c = [], e = !1;
            arguments.length ? (a.each(arguments, a.proxy(function (a, b) {
                b instanceof Date && (b = this._local_to_utc(b));
                c.push(b)
            }, this)), e = !0) : (c = (c = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val()) && this.o.multidate ? c.split(this.o.multidateSeparator) : [c], delete this.element.data().date);
            c = a.map(c, a.proxy(function (a) {
                return z.parseDate(a, this.o.format, this.o.language, this.o.assumeNearbyYear)
            }, this));
            c = a.grep(c, a.proxy(function (a) {
                return !this.dateWithinRange(a) ||
                    !a
            }, this), !0);
            this.dates.replace(c);
            this.viewDate = this.dates.length ? new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? new Date(this.o.startDate) : this.viewDate > this.o.endDate ? new Date(this.o.endDate) : this.o.defaultViewDate;
            e ? this.setValue() : c.length && String(b) !== String(this.dates) && this._trigger("changeDate");
            !this.dates.length && b.length && this._trigger("clearDate");
            this.fill();
            this.element.change();
            return this
        }, fillDow: function () {
            var b = this.o.weekStart, c = "<tr>";
            this.o.calendarWeeks && (this.picker.find(".datepicker-days .datepicker-switch").attr("colspan",
                function (a, b) {
                    return parseInt(b) + 1
                }), c += '<th class="cw">&#160;</th>');
            for (; b < this.o.weekStart + 7;) c += '<th class="dow', -1 < a.inArray(b, this.o.daysOfWeekDisabled) && (c += " disabled"), c += '">' + C[this.o.language].daysMin[b++ % 7] + "</th>";
            c += "</tr>";
            this.picker.find(".datepicker-days thead").append(c)
        }, fillMonths: function () {
            for (var a = this._utc_to_local(this.viewDate), b = "", c = 0; 12 > c;) var e = a && a.getMonth() === c ? " focused" : "", b = b + ('<span class="month' + e + '">' + C[this.o.language].monthsShort[c++] + "</span>");
            this.picker.find(".datepicker-months td").html(b)
        },
        setRange: function (b) {
            b && b.length ? this.range = a.map(b, function (a) {
                return a.valueOf()
            }) : delete this.range;
            this.fill()
        }, getClassNames: function (b) {
            var c = [], e = this.viewDate.getUTCFullYear(), g = this.viewDate.getUTCMonth(), k = new Date;
            b.getUTCFullYear() < e || b.getUTCFullYear() === e && b.getUTCMonth() < g ? c.push("old") : (b.getUTCFullYear() > e || b.getUTCFullYear() === e && b.getUTCMonth() > g) && c.push("new");
            this.focusDate && b.valueOf() === this.focusDate.valueOf() && c.push("focused");
            this.o.todayHighlight && b.getUTCFullYear() ===
            k.getFullYear() && b.getUTCMonth() === k.getMonth() && b.getUTCDate() === k.getDate() && c.push("today");
            -1 !== this.dates.contains(b) && c.push("active");
            this.dateWithinRange(b) || c.push("disabled");
            this.dateIsDisabled(b) && c.push("disabled", "disabled-date");
            -1 !== a.inArray(b.getUTCDay(), this.o.daysOfWeekHighlighted) && c.push("highlighted");
            this.range && (b > this.range[0] && b < this.range[this.range.length - 1] && c.push("range"), -1 !== a.inArray(b.valueOf(), this.range) && c.push("selected"), b.valueOf() === this.range[0] && c.push("range-start"),
            b.valueOf() === this.range[this.range.length - 1] && c.push("range-end"));
            return c
        }, _fill_yearsView: function (b, c, e, g, k, l, p, r) {
            var t, s, z, C, v;
            t = "";
            b = this.picker.find(b);
            k = parseInt(k / e, 10) * e;
            l = parseInt(l / g, 10) * g;
            e = parseInt(p / g, 10) * g;
            p = a.map(this.dates, function (a) {
                return parseInt(a.getUTCFullYear() / g, 10) * g
            });
            b.find(".datepicker-switch").text(k + "-" + (k + 9 * g));
            k -= g;
            for (s = -1; 11 > s; s += 1) z = [c], C = null, -1 === s ? z.push("old") : 10 === s && z.push("new"), -1 !== a.inArray(k, p) && z.push("active"), (k < l || k > e) && z.push("disabled"), k ===
            this.viewDate.getFullYear() && z.push("focused"), r !== a.noop && (v = r(new Date(k, 0, 1)), v === q ? v = {} : "boolean" === typeof v ? v = {enabled: v} : "string" === typeof v && (v = {classes: v}), !1 === v.enabled && z.push("disabled"), v.classes && (z = z.concat(v.classes.split(/\s+/))), v.tooltip && (C = v.tooltip)), t += '<span class="' + z.join(" ") + '"' + (C ? ' title="' + C + '"' : "") + ">" + k + "</span>", k += g;
            b.find("td").html(t)
        }, fill: function () {
            var b = new Date(this.viewDate), c = b.getUTCFullYear(), e = b.getUTCMonth(),
                g = -Infinity !== this.o.startDate ? this.o.startDate.getUTCFullYear() :
                    -Infinity, k = -Infinity !== this.o.startDate ? this.o.startDate.getUTCMonth() : -Infinity,
                l = Infinity !== this.o.endDate ? this.o.endDate.getUTCFullYear() : Infinity,
                p = Infinity !== this.o.endDate ? this.o.endDate.getUTCMonth() : Infinity,
                t = C[this.o.language].today || C.en.today || "", s = C[this.o.language].clear || C.en.clear || "",
                N = C[this.o.language].titleFormat || C.en.titleFormat, A;
            if (!isNaN(c) && !isNaN(e)) {
                this.picker.find(".datepicker-days .datepicker-switch").text(z.formatDate(b, N, this.o.language));
                this.picker.find("tfoot .today").text(t).toggle(!1 !==
                    this.o.todayBtn);
                this.picker.find("tfoot .clear").text(s).toggle(!1 !== this.o.clearBtn);
                this.picker.find("thead .datepicker-title").text(this.o.title).toggle("" !== this.o.title);
                this.updateNavArrows();
                this.fillMonths();
                b = r(c, e - 1, 28);
                e = z.getDaysInMonth(b.getUTCFullYear(), b.getUTCMonth());
                b.setUTCDate(e);
                b.setUTCDate(e - (b.getUTCDay() - this.o.weekStart + 7) % 7);
                e = new Date(b);
                100 > b.getUTCFullYear() && e.setUTCFullYear(b.getUTCFullYear());
                e.setUTCDate(e.getUTCDate() + 42);
                e = e.valueOf();
                for (t = []; b.valueOf() < e;) {
                    if (b.getUTCDay() ===
                        this.o.weekStart && (t.push("<tr>"), this.o.calendarWeeks)) {
                        var s = new Date(+b + (this.o.weekStart - b.getUTCDay() - 7) % 7 * 864E5),
                            s = new Date(Number(s) + (11 - s.getUTCDay()) % 7 * 864E5),
                            L = new Date(Number(L = r(s.getUTCFullYear(), 0, 1)) + (11 - L.getUTCDay()) % 7 * 864E5);
                        t.push('<td class="cw">' + ((s - L) / 864E5 / 7 + 1) + "</td>")
                    }
                    N = this.getClassNames(b);
                    N.push("day");
                    this.o.beforeShowDay !== a.noop && (s = this.o.beforeShowDay(this._utc_to_local(b)), s === q ? s = {} : "boolean" === typeof s ? s = {enabled: s} : "string" === typeof s && (s = {classes: s}), !1 === s.enabled &&
                    N.push("disabled"), s.classes && (N = N.concat(s.classes.split(/\s+/))), s.tooltip && (A = s.tooltip));
                    N = a.isFunction(a.uniqueSort) ? a.uniqueSort(N) : a.unique(N);
                    t.push('<td class="' + N.join(" ") + '"' + (A ? ' title="' + A + '"' : "") + ">" + b.getUTCDate() + "</td>");
                    A = null;
                    b.getUTCDay() === this.o.weekEnd && t.push("</tr>");
                    b.setUTCDate(b.getUTCDate() + 1)
                }
                this.picker.find(".datepicker-days tbody").empty().append(t.join(""));
                A = C[this.o.language].monthsTitle || C.en.monthsTitle || "Months";
                var v = this.picker.find(".datepicker-months").find(".datepicker-switch").text(2 >
                this.o.maxViewMode ? A : c).end().find("span").removeClass("active");
                a.each(this.dates, function (a, b) {
                    b.getUTCFullYear() === c && v.eq(b.getUTCMonth()).addClass("active")
                });
                (c < g || c > l) && v.addClass("disabled");
                c === g && v.slice(0, k).addClass("disabled");
                c === l && v.slice(p + 1).addClass("disabled");
                if (this.o.beforeShowMonth !== a.noop) {
                    var E = this;
                    a.each(v, function (b, e) {
                        var h = E.o.beforeShowMonth(new Date(c, b, 1));
                        h === q ? h = {} : "boolean" === typeof h ? h = {enabled: h} : "string" === typeof h && (h = {classes: h});
                        !1 !== h.enabled || a(e).hasClass("disabled") ||
                        a(e).addClass("disabled");
                        h.classes && a(e).addClass(h.classes);
                        h.tooltip && a(e).prop("title", h.tooltip)
                    })
                }
                this._fill_yearsView(".datepicker-years", "year", 10, 1, c, g, l, this.o.beforeShowYear);
                this._fill_yearsView(".datepicker-decades", "decade", 100, 10, c, g, l, this.o.beforeShowDecade);
                this._fill_yearsView(".datepicker-centuries", "century", 1E3, 100, c, g, l, this.o.beforeShowCentury)
            }
        }, updateNavArrows: function () {
            if (this._allow_update) {
                var a = new Date(this.viewDate), b = a.getUTCFullYear(), a = a.getUTCMonth();
                switch (this.viewMode) {
                    case 0:
                        -Infinity !==
                        this.o.startDate && b <= this.o.startDate.getUTCFullYear() && a <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({visibility: "hidden"}) : this.picker.find(".prev").css({visibility: "visible"});
                        Infinity !== this.o.endDate && b >= this.o.endDate.getUTCFullYear() && a >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({visibility: "hidden"}) : this.picker.find(".next").css({visibility: "visible"});
                        break;
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        -Infinity !== this.o.startDate && b <= this.o.startDate.getUTCFullYear() ||
                        2 > this.o.maxViewMode ? this.picker.find(".prev").css({visibility: "hidden"}) : this.picker.find(".prev").css({visibility: "visible"}), Infinity !== this.o.endDate && b >= this.o.endDate.getUTCFullYear() || 2 > this.o.maxViewMode ? this.picker.find(".next").css({visibility: "hidden"}) : this.picker.find(".next").css({visibility: "visible"})
                }
            }
        }, click: function (b) {
            b.preventDefault();
            b.stopPropagation();
            var e, g, k, l, p;
            b = a(b.target);
            b.hasClass("datepicker-switch") && this.showMode(1);
            e = b.closest(".prev, .next");
            0 < e.length && (e = z.modes[this.viewMode].navStep *
                (e.hasClass("prev") ? -1 : 1), 0 === this.viewMode ? (this.viewDate = this.moveMonth(this.viewDate, e), this._trigger("changeMonth", this.viewDate)) : (this.viewDate = this.moveYear(this.viewDate, e), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)), this.fill());
            b.hasClass("today") && !b.hasClass("day") && (this.showMode(-2), this._setDate(c(), "linked" === this.o.todayBtn ? null : "view"));
            b.hasClass("clear") && this.clearDates();
            !b.hasClass("disabled") && (b.hasClass("day") && (e = parseInt(b.text(), 10) || 1, g = this.viewDate.getUTCFullYear(),
                k = this.viewDate.getUTCMonth(), b.hasClass("old") && (0 === k ? (k = 11, --g, p = l = !0) : (--k, l = !0)), b.hasClass("new") && (11 === k ? (k = 0, g += 1, p = l = !0) : (k += 1, l = !0)), this._setDate(r(g, k, e)), p && this._trigger("changeYear", this.viewDate), l && this._trigger("changeMonth", this.viewDate)), b.hasClass("month") && (this.viewDate.setUTCDate(1), e = 1, k = b.parent().find("span").index(b), g = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(k), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode ? (this._setDate(r(g, k, e)),
                this.showMode()) : this.showMode(-1), this.fill()), b.hasClass("year") || b.hasClass("decade") || b.hasClass("century")) && (this.viewDate.setUTCDate(1), e = 1, k = 0, g = parseInt(b.text(), 10) || 0, this.viewDate.setUTCFullYear(g), b.hasClass("year") && (this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(r(g, k, e))), b.hasClass("decade") && (this._trigger("changeDecade", this.viewDate), 3 === this.o.minViewMode && this._setDate(r(g, k, e))), b.hasClass("century") && (this._trigger("changeCentury", this.viewDate),
            4 === this.o.minViewMode && this._setDate(r(g, k, e))), this.showMode(-1), this.fill());
            this.picker.is(":visible") && this._focused_from && a(this._focused_from).focus();
            delete this._focused_from
        }, _toggle_multidate: function (a) {
            var b = this.dates.contains(a);
            a || this.dates.clear();
            -1 !== b ? (!0 === this.o.multidate || 1 < this.o.multidate || this.o.toggleActive) && this.dates.remove(b) : (!1 === this.o.multidate && this.dates.clear(), this.dates.push(a));
            if ("number" === typeof this.o.multidate) for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
        },
        _setDate: function (a, b) {
            b && "date" !== b || this._toggle_multidate(a && new Date(a));
            b && "view" !== b || (this.viewDate = a && new Date(a));
            this.fill();
            this.setValue();
            b && "view" === b || this._trigger("changeDate");
            this.inputField && this.inputField.change();
            !this.o.autoclose || b && "date" !== b || this.hide()
        }, moveDay: function (a, b) {
            var c = new Date(a);
            c.setUTCDate(a.getUTCDate() + b);
            return c
        }, moveWeek: function (a, b) {
            return this.moveDay(a, 7 * b)
        }, moveMonth: function (a, b) {
            if (!a || isNaN(a.getTime())) return this.o.defaultViewDate;
            if (!b) return a;
            var c = new Date(a.valueOf()), e = c.getUTCDate(), g = c.getUTCMonth(), k = Math.abs(b), l;
            b = 0 < b ? 1 : -1;
            if (1 === k) {
                if (k = -1 === b ? function () {
                    return c.getUTCMonth() === g
                } : function () {
                    return c.getUTCMonth() !== l
                }, l = g + b, c.setUTCMonth(l), 0 > l || 11 < l) l = (l + 12) % 12
            } else {
                for (var p = 0; p < k; p++) c = this.moveMonth(c, b);
                l = c.getUTCMonth();
                c.setUTCDate(e);
                k = function () {
                    return l !== c.getUTCMonth()
                }
            }
            for (; k();) c.setUTCDate(--e), c.setUTCMonth(l);
            return c
        }, moveYear: function (a, b) {
            return this.moveMonth(a, 12 * b)
        }, moveAvailableDate: function (a, b, c) {
            do {
                a =
                    this[c](a, b);
                if (!this.dateWithinRange(a)) return !1;
                c = "moveDay"
            } while (this.dateIsDisabled(a));
            return a
        }, weekOfDateIsDisabled: function (b) {
            return -1 !== a.inArray(b.getUTCDay(), this.o.daysOfWeekDisabled)
        }, dateIsDisabled: function (b) {
            return this.weekOfDateIsDisabled(b) || 0 < a.grep(this.o.datesDisabled, function (a) {
                return b.getUTCFullYear() === a.getUTCFullYear() && b.getUTCMonth() === a.getUTCMonth() && b.getUTCDate() === a.getUTCDate()
            }).length
        }, dateWithinRange: function (a) {
            return a >= this.o.startDate && a <= this.o.endDate
        },
        keydown: function (a) {
            if (this.picker.is(":visible")) {
                var b = !1, c, e, g = this.focusDate || this.viewDate;
                switch (a.keyCode) {
                    case 27:
                        this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide();
                        a.preventDefault();
                        a.stopPropagation();
                        break;
                    case 37:
                    case 38:
                    case 39:
                    case 40:
                        if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
                        c = 37 === a.keyCode || 38 === a.keyCode ? -1 : 1;
                        if (0 === this.viewMode) a.ctrlKey ? (e = this.moveAvailableDate(g, c, "moveYear")) && this._trigger("changeYear",
                            this.viewDate) : a.shiftKey ? (e = this.moveAvailableDate(g, c, "moveMonth")) && this._trigger("changeMonth", this.viewDate) : 37 === a.keyCode || 39 === a.keyCode ? e = this.moveAvailableDate(g, c, "moveDay") : this.weekOfDateIsDisabled(g) || (e = this.moveAvailableDate(g, c, "moveWeek")); else if (1 === this.viewMode) {
                            if (38 === a.keyCode || 40 === a.keyCode) c *= 4;
                            e = this.moveAvailableDate(g, c, "moveMonth")
                        } else if (2 === this.viewMode) {
                            if (38 === a.keyCode || 40 === a.keyCode) c *= 4;
                            e = this.moveAvailableDate(g, c, "moveYear")
                        }
                        e && (this.focusDate = this.viewDate =
                            e, this.setValue(), this.fill(), a.preventDefault());
                        break;
                    case 13:
                        if (!this.o.forceParse) break;
                        g = this.focusDate || this.dates.get(-1) || this.viewDate;
                        this.o.keyboardNavigation && (this._toggle_multidate(g), b = !0);
                        this.focusDate = null;
                        this.viewDate = this.dates.get(-1) || this.viewDate;
                        this.setValue();
                        this.fill();
                        this.picker.is(":visible") && (a.preventDefault(), a.stopPropagation(), this.o.autoclose && this.hide());
                        break;
                    case 9:
                        this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
                }
                b &&
                (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.inputField && this.inputField.change())
            } else if (40 === a.keyCode || 27 === a.keyCode) this.show(), a.stopPropagation()
        }, showMode: function (a) {
            a && (this.viewMode = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, this.viewMode + a)));
            this.picker.children("div").hide().filter(".datepicker-" + z.modes[this.viewMode].clsName).show();
            this.updateNavArrows()
        }
    };
    var t = function (b, c) {
        a(b).data("datepicker", this);
        this.element = a(b);
        this.inputs =
            a.map(c.inputs, function (a) {
                return a.jquery ? a[0] : a
            });
        delete c.inputs;
        s.call(a(this.inputs), c).on("changeDate", a.proxy(this.dateUpdated, this));
        this.pickers = a.map(this.inputs, function (b) {
            return a(b).data("datepicker")
        });
        this.updateDates()
    };
    t.prototype = {
        updateDates: function () {
            this.dates = a.map(this.pickers, function (a) {
                return a.getUTCDate()
            });
            this.updateRanges()
        }, updateRanges: function () {
            var b = a.map(this.dates, function (a) {
                return a.valueOf()
            });
            a.each(this.pickers, function (a, c) {
                c.setRange(b)
            })
        }, dateUpdated: function (b) {
            if (!this.updating) {
                this.updating =
                    !0;
                var c = a(b.target).data("datepicker");
                if ("undefined" !== typeof c) {
                    var e = c.getUTCDate();
                    b = a.inArray(b.target, this.inputs);
                    var c = b - 1, g = b + 1, k = this.inputs.length;
                    if (-1 !== b) {
                        a.each(this.pickers, function (a, b) {
                            b.getUTCDate() || b.setUTCDate(e)
                        });
                        if (e < this.dates[c]) for (; 0 <= c && e < this.dates[c];) this.pickers[c--].setUTCDate(e); else if (e > this.dates[g]) for (; g < k && e > this.dates[g];) this.pickers[g++].setUTCDate(e);
                        this.updateDates();
                        delete this.updating
                    }
                }
            }
        }, remove: function () {
            a.map(this.pickers, function (a) {
                a.remove()
            });
            delete this.element.data().datepicker
        }
    };
    var k = a.fn.datepicker, s = function (b) {
        var c = Array.apply(null, arguments);
        c.shift();
        var k;
        this.each(function () {
            var l = a(this), q = l.data("datepicker"), s = "object" === typeof b && b;
            if (!q) {
                var q = e(this, "date"), r = a.extend({}, L, q, s), r = g(r.language), s = a.extend({}, L, r, q, s);
                l.hasClass("input-daterange") || s.inputs ? (a.extend(s, {inputs: s.inputs || l.find("input").toArray()}), q = new t(this, s)) : q = new p(this, s);
                l.data("datepicker", q)
            }
            "string" === typeof b && "function" === typeof q[b] && (k =
                q[b].apply(q, c))
        });
        if (k === q || k instanceof p || k instanceof t) return this;
        if (1 < this.length) throw Error("Using only allowed for the collection of a single element (" + b + " function)");
        return k
    };
    a.fn.datepicker = s;
    var L = a.fn.datepicker.defaults = {
        assumeNearbyYear: !1,
        autoclose: !1,
        beforeShowDay: a.noop,
        beforeShowMonth: a.noop,
        beforeShowYear: a.noop,
        beforeShowDecade: a.noop,
        beforeShowCentury: a.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        toggleActive: !1,
        daysOfWeekDisabled: [],
        daysOfWeekHighlighted: [],
        datesDisabled: [],
        endDate: Infinity,
        forceParse: !0,
        format: "mm/dd/yyyy",
        keyboardNavigation: !0,
        language: "en",
        minViewMode: 0,
        maxViewMode: 4,
        multidate: !1,
        multidateSeparator: ",",
        orientation: "auto",
        rtl: !1,
        startDate: -Infinity,
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        weekStart: 0,
        disableTouchKeyboard: !1,
        enableOnReadonly: !0,
        showOnFocus: !0,
        zIndexOffset: 10,
        container: "body",
        immediateUpdates: !1,
        title: "",
        templates: {leftArrow: "&laquo;", rightArrow: "&raquo;"}
    }, E = a.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    a.fn.datepicker.Constructor = p;
    var C =
        a.fn.datepicker.dates = {
            en: {
                days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                daysShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                daysMin: "Su Mo Tu We Th Fr Sa".split(" "),
                months: "January February March April May June July August September October November December".split(" "),
                monthsShort: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                today: "Today",
                clear: "Clear",
                titleFormat: "MM yyyy"
            }
        }, z = {
        modes: [{clsName: "days", navFnc: "Month", navStep: 1}, {
            clsName: "months", navFnc: "FullYear",
            navStep: 1
        }, {clsName: "years", navFnc: "FullYear", navStep: 10}, {
            clsName: "decades",
            navFnc: "FullDecade",
            navStep: 100
        }, {clsName: "centuries", navFnc: "FullCentury", navStep: 1E3}],
        isLeapYear: function (a) {
            return 0 === a % 4 && 0 !== a % 100 || 0 === a % 400
        },
        getDaysInMonth: function (a, b) {
            return [31, z.isLeapYear(a) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b]
        },
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
        parseFormat: function (a) {
            if ("function" === typeof a.toValue && "function" === typeof a.toDisplay) return a;
            var b = a.replace(this.validParts, "\x00").split("\x00");
            a = a.match(this.validParts);
            if (!b || !b.length || !a || 0 === a.length) throw Error("Invalid date format.");
            return {separators: b, parts: a}
        },
        parseDate: function (b, e, g, k) {
            function l(a, b) {
                !0 === b && (b = 10);
                100 > a && (a += 2E3, a > (new Date).getFullYear() + b && (a -= 100));
                return a
            }

            function s() {
                var a = this.slice(0, T[A].length), b = T[A].slice(0, a.length);
                return a.toLowerCase() === b.toLowerCase()
            }

            if (!b) return q;
            if (b instanceof Date) return b;
            "string" === typeof e && (e = z.parseFormat(e));
            if (e.toValue) return e.toValue(b, e, g);
            var t = /([\-+]\d+)([dmwy])/, T = b.match(/([\-+]\d+)([dmwy])/g),
                M = {d: "moveDay", m: "moveMonth", w: "moveWeek", y: "moveYear"},
                N = {yesterday: "-1d", today: "+0d", tomorrow: "+1d"}, A;
            if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(b)) {
                b = new Date;
                for (A = 0; A < T.length; A++) e = t.exec(T[A]), g = parseInt(e[1]), e = M[e[2]], b = p.prototype[e](b, g);
                return r(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate())
            }
            if ("undefined" !== typeof N[b] && (b = N[b], T = b.match(/([\-+]\d+)([dmwy])/g), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(b))) {
                b =
                    new Date;
                for (A = 0; A < T.length; A++) e = t.exec(T[A]), g = parseInt(e[1]), e = M[e[2]], b = p.prototype[e](b, g);
                return r(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate())
            }
            T = b && b.match(this.nonpunctuation) || [];
            b = new Date;
            var t = {}, L = "yyyy yy M MM m mm d dd".split(" "), M = {
                yyyy: function (a, b) {
                    return a.setUTCFullYear(k ? l(b, k) : b)
                }, yy: function (a, b) {
                    return a.setUTCFullYear(k ? l(b, k) : b)
                }, m: function (a, b) {
                    if (isNaN(a)) return a;
                    for (--b; 0 > b;) b += 12;
                    b %= 12;
                    for (a.setUTCMonth(b); a.getUTCMonth() !== b;) a.setUTCDate(a.getUTCDate() - 1);
                    return a
                },
                d: function (a, b) {
                    return a.setUTCDate(b)
                }
            }, v;
            M.M = M.MM = M.mm = M.m;
            M.dd = M.d;
            b = c();
            N = e.parts.slice();
            T.length !== N.length && (N = a(N).filter(function (b, c) {
                return -1 !== a.inArray(c, L)
            }).toArray());
            if (T.length === N.length) {
                var E;
                A = 0;
                for (E = N.length; A < E; A++) {
                    v = parseInt(T[A], 10);
                    e = N[A];
                    if (isNaN(v)) switch (e) {
                        case "MM":
                            v = a(C[g].months).filter(s);
                            v = a.inArray(v[0], C[g].months) + 1;
                            break;
                        case "M":
                            v = a(C[g].monthsShort).filter(s), v = a.inArray(v[0], C[g].monthsShort) + 1
                    }
                    t[e] = v
                }
                for (A = 0; A < L.length; A++) e = L[A], e in t && !isNaN(t[e]) &&
                (g = new Date(b), M[e](g, t[e]), isNaN(g) || (b = g))
            }
            return b
        },
        formatDate: function (b, c, e) {
            if (!b) return "";
            "string" === typeof c && (c = z.parseFormat(c));
            if (c.toDisplay) return c.toDisplay(b, c, e);
            e = {
                d: b.getUTCDate(),
                D: C[e].daysShort[b.getUTCDay()],
                DD: C[e].days[b.getUTCDay()],
                m: b.getUTCMonth() + 1,
                M: C[e].monthsShort[b.getUTCMonth()],
                MM: C[e].months[b.getUTCMonth()],
                yy: b.getUTCFullYear().toString().substring(2),
                yyyy: b.getUTCFullYear()
            };
            e.dd = (10 > e.d ? "0" : "") + e.d;
            e.mm = (10 > e.m ? "0" : "") + e.m;
            b = [];
            for (var g = a.extend([], c.separators),
                     k = 0, l = c.parts.length; k <= l; k++) g.length && b.push(g.shift()), b.push(e[c.parts[k]]);
            return b.join("")
        },
        headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
    };
    z.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' +
        z.headTemplate + "<tbody></tbody>" + z.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + z.headTemplate + z.contTemplate + z.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + z.headTemplate + z.contTemplate + z.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + z.headTemplate + z.contTemplate + z.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' +
        z.headTemplate + z.contTemplate + z.footTemplate + "</table></div></div>";
    a.fn.datepicker.DPGlobal = z;
    a.fn.datepicker.noConflict = function () {
        a.fn.datepicker = k;
        return this
    };
    a.fn.datepicker.version = "1.6.4";
    a(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function (b) {
        var c = a(this);
        c.data("datepicker") || (b.preventDefault(), s.call(c, "show"))
    });
    a(function () {
        s.call(a('[data-provide="datepicker-inline"]'))
    })
});
!function (a) {
    a.fn.datepicker.dates.kr = {
        days: "\uc77c\uc694\uc77c \uc6d4\uc694\uc77c \ud654\uc694\uc77c \uc218\uc694\uc77c \ubaa9\uc694\uc77c \uae08\uc694\uc77c \ud1a0\uc694\uc77c".split(" "),
        daysShort: "\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),
        daysMin: "\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),
        months: "1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),
        monthsShort: "1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" ")
    }
}(jQuery);
(function (a) {
    "function" === typeof define && define.amd ? define(["jquery"], a) : a(window.jQuery)
})(function (a) {
    Array.prototype.reduce || (Array.prototype.reduce = function (a) {
        var b = Object(this), c = b.length >>> 0, e = 0, g;
        if (2 === arguments.length) g = arguments[1]; else {
            for (; e < c && !(e in b);) e++;
            if (e >= c) throw new TypeError("Reduce of empty array with no initial value");
            g = b[e++]
        }
        for (; e < c; e++) e in b && (g = a(g, b[e], e, b));
        return g
    });
    "function" !== typeof Array.prototype.filter && (Array.prototype.filter = function (a) {
        for (var b = Object(this),
                 c = b.length >>> 0, e = [], g = 2 <= arguments.length ? arguments[1] : void 0, h = 0; h < c; h++) if (h in b) {
            var k = b[h];
            a.call(g, k, h, b) && e.push(k)
        }
        return e
    });
    Array.prototype.map || (Array.prototype.map = function (a, b) {
        var c, e, g;
        if (null === this) throw new TypeError(" this is null or not defined");
        var h = Object(this), k = h.length >>> 0;
        if ("function" !== typeof a) throw new TypeError(a + " is not a function");
        1 < arguments.length && (c = b);
        e = Array(k);
        for (g = 0; g < k;) {
            var l;
            g in h && (l = h[g], l = a.call(c, l, g, h), e[g] = l);
            g++
        }
        return e
    });
    var q = "function" ===
        typeof define && define.amd, r = navigator.userAgent, c = /MSIE|Trident/i.test(r), b;
    if (c) {
        var e = /MSIE (\d+[.]\d+)/.exec(r);
        e && (b = parseFloat(e[1]));
        (e = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(r)) && (b = parseFloat(e[1]))
    }
    var g = {
            isMac: -1 < navigator.appVersion.indexOf("Mac"),
            isMSIE: c,
            isFF: /firefox/i.test(r),
            isWebkit: /webkit/i.test(r),
            isSafari: /safari/i.test(r),
            browserVersion: b,
            jqueryVersion: parseFloat(a.fn.jquery),
            isSupportAmd: q,
            hasCodeMirror: q ? require.specified("CodeMirror") : !!window.CodeMirror,
            isFontInstalled: function (b) {
                var c =
                    "Comic Sans MS" === b ? "Courier New" : "Comic Sans MS", e = a("<div>").css({
                    position: "absolute",
                    left: "-9999px",
                    top: "-9999px",
                    fontSize: "200px"
                }).text("mmmmmmmmmwwwwwww").appendTo(document.body), g = e.css("fontFamily", c).width();
                b = e.css("fontFamily", b + "," + c).width();
                e.remove();
                return g !== b
            },
            isW3CRangeSupport: !!document.createRange
        }, l = function () {
            var b = 0;
            return {
                eq: function (a) {
                    return function (b) {
                        return a === b
                    }
                }, eq2: function (a, b) {
                    return a === b
                }, peq2: function (a) {
                    return function (b, c) {
                        return b[a] === c[a]
                    }
                }, ok: function () {
                    return !0
                },
                fail: function () {
                    return !1
                }, self: function (a) {
                    return a
                }, not: function (a) {
                    return function () {
                        return !a.apply(a, arguments)
                    }
                }, and: function (a, b) {
                    return function (c) {
                        return a(c) && b(c)
                    }
                }, uniqueId: function (a) {
                    var c = ++b + "";
                    return a ? a + c : c
                }, rect2bnd: function (b) {
                    var c = a(document);
                    return {
                        top: b.top + c.scrollTop(),
                        left: b.left + c.scrollLeft(),
                        width: b.right - b.left,
                        height: b.bottom - b.top
                    }
                }, invertObject: function (a) {
                    var b = {}, c;
                    for (c in a) a.hasOwnProperty(c) && (b[a[c]] = c);
                    return b
                }, namespaceToCamel: function (a, b) {
                    return (b || "") +
                        a.split(".").map(function (a) {
                            return a.substring(0, 1).toUpperCase() + a.substring(1)
                        }).join("")
                }
            }
        }(), p = function () {
            var b = function (a) {
                return a[a.length - 1]
            }, c = function (a) {
                return a.slice(1)
            }, e = function (b, c) {
                return -1 !== a.inArray(c, b)
            };
            return {
                head: function (a) {
                    return a[0]
                }, last: b, initial: function (a) {
                    return a.slice(0, a.length - 1)
                }, tail: c, prev: function (b, c) {
                    var e = a.inArray(c, b);
                    return -1 === e ? null : b[e - 1]
                }, next: function (b, c) {
                    var e = a.inArray(c, b);
                    return -1 === e ? null : b[e + 1]
                }, find: function (a, b) {
                    for (var c = 0, e = a.length; c <
                    e; c++) {
                        var g = a[c];
                        if (b(g)) return g
                    }
                }, contains: e, all: function (a, b) {
                    for (var c = 0, e = a.length; c < e; c++) if (!b(a[c])) return !1;
                    return !0
                }, sum: function (a, b) {
                    b = b || l.self;
                    return a.reduce(function (a, c) {
                        return a + b(c)
                    }, 0)
                }, from: function (a) {
                    for (var b = [], c = -1, e = a.length; ++c < e;) b[c] = a[c];
                    return b
                }, clusterBy: function (a, e) {
                    return a.length ? c(a).reduce(function (a, c) {
                        var g = b(a);
                        e(b(g), c) ? g[g.length] = c : a[a.length] = [c];
                        return a
                    }, [[a[0]]]) : []
                }, compact: function (a) {
                    for (var b = [], c = 0, e = a.length; c < e; c++) a[c] && b.push(a[c]);
                    return b
                },
                unique: function (a) {
                    for (var b = [], c = 0, g = a.length; c < g; c++) e(b, a[c]) || b.push(a[c]);
                    return b
                }
            }
        }(), t = String.fromCharCode(160), k = function () {
            var b = function (b) {
                    return b && a(b).hasClass("note-editable")
                }, c = function (b) {
                    var c;
                    if (b.hasClass("note-air-editor")) {
                        var f = p.last(b.attr("id").split("-"));
                        c = function (b) {
                            return function () {
                                return a(b + f)
                            }
                        };
                        return {
                            editor: function () {
                                return b
                            }, holder: function () {
                                return b.data("holder")
                            }, editable: function () {
                                return b
                            }, popover: c("#note-popover-"), handle: c("#note-handle-"), dialog: c("#note-dialog-")
                        }
                    }
                    c =
                        function (a, c) {
                            c = c || b;
                            return function () {
                                return c.find(a)
                            }
                        };
                    var e = b.data("options"), e = e && e.dialogsInBody ? a(document.body) : null;
                    return {
                        editor: function () {
                            return b
                        },
                        holder: function () {
                            return b.data("holder")
                        },
                        dropzone: c(".note-dropzone"),
                        toolbar: c(".note-toolbar"),
                        editable: c(".note-editable"),
                        codable: c(".note-codable"),
                        statusbar: c(".note-statusbar"),
                        popover: c(".note-popover"),
                        handle: c(".note-handle"),
                        dialog: c(".note-dialog", e)
                    }
                }, e = function (a) {
                    a = a.toUpperCase();
                    return function (b) {
                        return b && b.nodeName.toUpperCase() ===
                            a
                    }
                }, h = function (a) {
                    return a && 3 === a.nodeType
                }, m = function (a) {
                    return a && /^BR|^IMG|^HR|^IFRAME|^BUTTON/.test(a.nodeName.toUpperCase())
                }, q = function (a) {
                    return b(a) ? !1 : a && /^DIV|^P|^LI|^H[1-7]/.test(a.nodeName.toUpperCase())
                }, s = e("LI"), r = e("TABLE"), K = function (a) {
                    return !W(a) && !Z(a) && !ca(a) && !q(a) && !r(a) && !D(a)
                }, Z = function (a) {
                    return a && /^UL|^OL/.test(a.nodeName.toUpperCase())
                }, ca = e("HR"), ma = function (a) {
                    return a && /^TD|^TH/.test(a.nodeName.toUpperCase())
                }, D = e("BLOCKQUOTE"), W = function (a) {
                    return ma(a) || D(a) || b(a)
                },
                ka = e("A"), I = e("BODY"), u = e("PRE"), f = e("CODE"),
                z = g.isMSIE && 11 > g.browserVersion ? "&nbsp;" : "<br>", v = function (a) {
                    return h(a) ? a.nodeValue.length : a.childNodes.length
                }, Q = function (a) {
                    var b = v(a);
                    return 0 === b || !h(a) && 1 === b && a.innerHTML === z || p.all(a.childNodes, h) && "" === a.innerHTML ? !0 : !1
                }, R = function (a, c) {
                    for (; a;) {
                        if (c(a)) return a;
                        if (b(a)) break;
                        a = a.parentNode
                    }
                    return null
                }, V = function (a, c) {
                    c = c || l.fail;
                    var f = [];
                    R(a, function (a) {
                        b(a) || f.push(a);
                        return c(a)
                    });
                    return f
                }, H = function (a, b) {
                    b = b || l.fail;
                    for (var c = []; a && !b(a);) c.push(a),
                        a = a.nextSibling;
                    return c
                }, A = function (a, b) {
                    var c = b.nextSibling, f = b.parentNode;
                    c ? f.insertBefore(a, c) : f.appendChild(a);
                    return a
                }, T = function (b, c) {
                    a.each(c, function (a, c) {
                        b.appendChild(c)
                    });
                    return b
                }, N = function (a) {
                    return 0 === a.offset
                }, M = function (a) {
                    return a.offset === v(a.node)
                }, L = function (a) {
                    return N(a) || M(a)
                }, C = function (a, b) {
                    for (; a && a !== b;) {
                        if (0 !== Y(a)) return !1;
                        a = a.parentNode
                    }
                    return !0
                }, E = function (a, b) {
                    for (; a && a !== b;) {
                        if (Y(a) !== v(a.parentNode) - 1) return !1;
                        a = a.parentNode
                    }
                    return !0
                }, Y = function (a) {
                    for (var b =
                        0; a = a.previousSibling;) b += 1;
                    return b
                }, J = function (a) {
                    return !!(a && a.childNodes && a.childNodes.length)
                }, O = function (a, c) {
                    var f, e;
                    if (0 === a.offset) {
                        if (b(a.node)) return null;
                        f = a.node.parentNode;
                        e = Y(a.node)
                    } else J(a.node) ? (f = a.node.childNodes[a.offset - 1], e = v(f)) : (f = a.node, e = c ? 0 : a.offset - 1);
                    return {node: f, offset: e}
                }, aa = function (a, c) {
                    var f, e;
                    if (v(a.node) === a.offset) {
                        if (b(a.node)) return null;
                        f = a.node.parentNode;
                        e = Y(a.node) + 1
                    } else J(a.node) ? (f = a.node.childNodes[a.offset], e = 0) : (f = a.node, e = c ? v(a.node) : a.offset + 1);
                    return {node: f, offset: e}
                }, U = function (a, b) {
                    return a.node === b.node && a.offset === b.offset
                }, da = function (a, b) {
                    var c = b && b.isSkipPaddingBlankHTML, f = b && b.isNotSplitEdgePoint;
                    if (L(a) && (h(a.node) || f)) {
                        if (N(a)) return a.node;
                        if (M(a)) return a.node.nextSibling
                    }
                    if (h(a.node)) return a.node.splitText(a.offset);
                    var e = a.node.childNodes[a.offset], f = A(a.node.cloneNode(!1), a.node);
                    T(f, H(e));
                    c || (c = a.node, m(c) || v(c) || (c.innerHTML = z), m(f) || v(f) || (f.innerHTML = z));
                    return f
                }, ia = function (a, b, c) {
                    a = V(b.node, l.eq(a));
                    return a.length ?
                        1 === a.length ? da(b, c) : a.reduce(function (a, f) {
                            a === b.node && (a = da(b, c));
                            return da({node: f, offset: a ? k.position(a) : v(f)}, c)
                        }) : null
                }, qa = function (a) {
                    return document.createElement(a)
                }, ua = function (a, b) {
                    if (a && a.parentNode) {
                        if (a.removeNode) return a.removeNode(b);
                        var c = a.parentNode;
                        if (!b) {
                            var f = [], e, g;
                            e = 0;
                            for (g = a.childNodes.length; e < g; e++) f.push(a.childNodes[e]);
                            e = 0;
                            for (g = f.length; e < g; e++) c.insertBefore(f[e], a)
                        }
                        c.removeChild(a)
                    }
                }, sa = e("TEXTAREA"), Ba = function (a, b) {
                    var c = sa(a[0]) ? a.val() : a.html();
                    return b ? c.replace(/[\n\r]/g,
                        "") : c
                };
            return {
                NBSP_CHAR: t,
                ZERO_WIDTH_NBSP_CHAR: "\ufeff",
                blank: z,
                emptyPara: "<p>" + z + "</p>",
                makePredByNodeName: e,
                isEditable: b,
                isControlSizing: function (b) {
                    return b && a(b).hasClass("note-control-sizing")
                },
                buildLayoutInfo: c,
                makeLayoutInfo: function (b) {
                    b = a(b).closest(".note-editor, .note-air-editor, .note-air-layout");
                    if (!b.length) return null;
                    b = b.is(".note-editor, .note-air-editor") ? b : a("#note-editor-" + p.last(b.attr("id").split("-")));
                    return c(b)
                },
                isText: h,
                isVoid: m,
                isPara: q,
                isPurePara: function (a) {
                    return q(a) &&
                        !s(a)
                },
                isInline: K,
                isBlock: l.not(K),
                isBodyInline: function (a) {
                    return K(a) && !R(a, q)
                },
                isBody: I,
                isParaInline: function (a) {
                    return K(a) && !!R(a, q)
                },
                isList: Z,
                isTable: r,
                isCell: ma,
                isBlockquote: D,
                isBodyContainer: W,
                isPre: u,
                isCode: f,
                isCodeBlock: function (a) {
                    return u(a) || f(a)
                },
                isAnchor: ka,
                isDiv: e("DIV"),
                isLi: s,
                isBR: e("BR"),
                isSpan: e("SPAN"),
                isB: e("B"),
                isU: e("U"),
                isS: e("S"),
                isI: e("I"),
                isImg: e("IMG"),
                isTextarea: sa,
                isEmpty: Q,
                isEmptyAnchor: l.and(ka, Q),
                isClosestSibling: function (a, b) {
                    return a.nextSibling === b || a.previousSibling ===
                        b
                },
                withClosestSiblings: function (a, b) {
                    b = b || l.ok;
                    var c = [];
                    a.previousSibling && b(a.previousSibling) && c.push(a.previousSibling);
                    c.push(a);
                    a.nextSibling && b(a.nextSibling) && c.push(a.nextSibling);
                    return c
                },
                nodeLength: v,
                isLeftEdgePoint: N,
                isRightEdgePoint: M,
                isEdgePoint: L,
                isLeftEdgeOf: C,
                isRightEdgeOf: E,
                isLeftEdgePointOf: function (a, b) {
                    return N(a) && C(a.node, b)
                },
                isRightEdgePointOf: function (a, b) {
                    return M(a) && E(a.node, b)
                },
                prevPoint: O,
                nextPoint: aa,
                isSamePoint: U,
                isVisiblePoint: function (a) {
                    if (h(a.node) || !J(a.node) ||
                        Q(a.node)) return !0;
                    var b = a.node.childNodes[a.offset - 1];
                    a = a.node.childNodes[a.offset];
                    return b && !m(b) || a && !m(a) ? !1 : !0
                },
                prevPointUntil: function (a, b) {
                    for (; a;) {
                        if (b(a)) return a;
                        a = O(a)
                    }
                    return null
                },
                nextPointUntil: function (a, b) {
                    for (; a;) {
                        if (b(a)) return a;
                        a = aa(a)
                    }
                    return null
                },
                isCharPoint: function (a) {
                    return h(a.node) ? (a = a.node.nodeValue.charAt(a.offset - 1)) && " " !== a && a !== t : !1
                },
                walkPoint: function (a, b, c, f) {
                    for (var e = a; e;) {
                        c(e);
                        if (U(e, b)) break;
                        e = aa(e, f && a.node !== e.node && b.node !== e.node)
                    }
                },
                ancestor: R,
                singleChildAncestor: function (a,
                                               c) {
                    for (a = a.parentNode; a && 1 === v(a);) {
                        if (c(a)) return a;
                        if (b(a)) break;
                        a = a.parentNode
                    }
                    return null
                },
                listAncestor: V,
                lastAncestor: function (a, b) {
                    var c = V(a);
                    return p.last(c.filter(b))
                },
                listNext: H,
                listPrev: function (a, b) {
                    b = b || l.fail;
                    for (var c = []; a && !b(a);) c.push(a), a = a.previousSibling;
                    return c
                },
                listDescendant: function (a, b) {
                    var c = [];
                    b = b || l.ok;
                    (function Fa(f) {
                        a !== f && b(f) && c.push(f);
                        for (var e = 0, g = f.childNodes.length; e < g; e++) Fa(f.childNodes[e])
                    })(a);
                    return c
                },
                commonAncestor: function (b, c) {
                    for (var f = V(b), e = c; e; e =
                        e.parentNode) if (-1 < a.inArray(e, f)) return e;
                    return null
                },
                wrap: function (b, c) {
                    var f = b.parentNode, e = a("<" + c + ">")[0];
                    f.insertBefore(e, b);
                    e.appendChild(b);
                    return e
                },
                insertAfter: A,
                appendChildNodes: T,
                position: Y,
                hasChildren: J,
                makeOffsetPath: function (a, b) {
                    return V(b, l.eq(a)).map(Y).reverse()
                },
                fromOffsetPath: function (a, b) {
                    for (var c = a, f = 0, e = b.length; f < e; f++) c = c.childNodes.length <= b[f] ? c.childNodes[c.childNodes.length - 1] : c.childNodes[b[f]];
                    return c
                },
                splitTree: ia,
                splitPoint: function (a, b) {
                    var c = b ? q : W, f = V(a.node,
                        c), e = p.last(f) || a.node;
                    c(e) ? c = f[f.length - 2] : (c = e, e = c.parentNode);
                    (c = c && ia(c, a, {
                        isSkipPaddingBlankHTML: b,
                        isNotSplitEdgePoint: b
                    })) || e !== a.node || (c = a.node.childNodes[a.offset]);
                    return {rightNode: c, container: e}
                },
                create: qa,
                createText: function (a) {
                    return document.createTextNode(a)
                },
                remove: ua,
                removeWhile: function (a, c) {
                    for (; a && !b(a) && c(a);) {
                        var f = a.parentNode;
                        ua(a);
                        a = f
                    }
                },
                replace: function (a, b) {
                    if (a.nodeName.toUpperCase() === b.toUpperCase()) return a;
                    var c = qa(b);
                    a.style.cssText && (c.style.cssText = a.style.cssText);
                    T(c, p.from(a.childNodes));
                    A(c, a);
                    ua(a);
                    return c
                },
                html: function (b, c) {
                    var f = Ba(b);
                    c && (f = f.replace(/<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g, function (a, b, c) {
                        c = c.toUpperCase();
                        b = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(c) && !!b;
                        c = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(c);
                        return a + (b || c ? "\n" : "")
                    }), f = a.trim(f));
                    return f
                },
                value: Ba
            }
        }(), s = function () {
            var b = function (a, b) {
                    var c = a.parentElement(), e, g = document.body.createTextRange(), h, l = p.from(c.childNodes);
                    for (e = 0; e < l.length; e++) if (!k.isText(l[e])) {
                        g.moveToElementText(l[e]);
                        if (0 <= g.compareEndPoints("StartToStart", a)) break;
                        h = l[e]
                    }
                    if (0 !== e && k.isText(l[e - 1])) {
                        g = document.body.createTextRange();
                        e = null;
                        g.moveToElementText(h || c);
                        g.collapse(!h);
                        e = h ? h.nextSibling : c.firstChild;
                        c = a.duplicate();
                        c.setEndPoint("StartToStart", g);
                        for (h = c.text.replace(/[\r\n]/g, "").length; h > e.nodeValue.length && e.nextSibling;) h -= e.nodeValue.length, e = e.nextSibling;
                        b && e.nextSibling && k.isText(e.nextSibling) && h === e.nodeValue.length && (h -= e.nodeValue.length, e = e.nextSibling);
                        c = e;
                        e = h
                    }
                    return {cont: c, offset: e}
                },
                c = function (a) {
                    var b = function (a, c) {
                        var e, g;
                        if (k.isText(a)) {
                            g = k.listPrev(a, l.not(k.isText));
                            var h = p.last(g).previousSibling;
                            e = h || a.parentNode;
                            c += p.sum(p.tail(g), k.nodeLength);
                            g = !h
                        } else {
                            e = a.childNodes[c] || a;
                            if (k.isText(e)) return b(e, 0);
                            c = 0;
                            g = !1
                        }
                        return {node: e, collapseToStart: g, offset: c}
                    }, c = document.body.createTextRange();
                    a = b(a.node, a.offset);
                    c.moveToElementText(a.node);
                    c.collapse(a.collapseToStart);
                    c.moveStart("character", a.offset);
                    return c
                }, e = function (b, h, m, q) {
                    this.sc = b;
                    this.so = h;
                    this.ec = m;
                    this.eo = q;
                    var s = function () {
                        if (g.isW3CRangeSupport) {
                            var a = document.createRange();
                            a.setStart(b, h);
                            a.setEnd(m, q);
                            return a
                        }
                        a = c({node: b, offset: h});
                        a.setEndPoint("EndToEnd", c({node: m, offset: q}));
                        return a
                    };
                    this.getPoints = function () {
                        return {sc: b, so: h, ec: m, eo: q}
                    };
                    this.getStartPoint = function () {
                        return {node: b, offset: h}
                    };
                    this.getEndPoint = function () {
                        return {node: m, offset: q}
                    };
                    this.select = function () {
                        var a = s();
                        if (g.isW3CRangeSupport) {
                            var b = document.getSelection();
                            0 < b.rangeCount && b.removeAllRanges();
                            b.addRange(a)
                        } else a.select();
                        return this
                    };
                    this.normalize = function () {
                        var a = function (a, b) {
                            if (k.isVisiblePoint(a) && !k.isEdgePoint(a) || k.isVisiblePoint(a) && k.isRightEdgePoint(a) && !b || k.isVisiblePoint(a) && k.isLeftEdgePoint(a) && b || k.isVisiblePoint(a) && k.isBlock(a.node) && k.isEmpty(a.node)) return a;
                            var c = k.ancestor(a.node, k.isBlock);
                            if ((k.isLeftEdgePointOf(a, c) || k.isVoid(k.prevPoint(a).node)) && !b || (k.isRightEdgePointOf(a, c) || k.isVoid(k.nextPoint(a).node)) && b) {
                                if (k.isVisiblePoint(a)) return a;
                                b = !b
                            }
                            return (b ? k.nextPointUntil(k.nextPoint(a),
                                k.isVisiblePoint) : k.prevPointUntil(k.prevPoint(a), k.isVisiblePoint)) || a
                        }, b = a(this.getEndPoint(), !1), a = this.isCollapsed() ? b : a(this.getStartPoint(), !0);
                        return new e(a.node, a.offset, b.node, b.offset)
                    };
                    this.nodes = function (a, b) {
                        a = a || l.ok;
                        var c = b && b.includeAncestor, e = b && b.fullyContains, g = this.getStartPoint(),
                            h = this.getEndPoint(), m = [], u = [];
                        k.walkPoint(g, h, function (b) {
                            if (!k.isEditable(b.node)) {
                                var g;
                                e ? (k.isLeftEdgePoint(b) && u.push(b.node), k.isRightEdgePoint(b) && p.contains(u, b.node) && (g = b.node)) : g = c ? k.ancestor(b.node,
                                    a) : b.node;
                                g && a(g) && m.push(g)
                            }
                        }, !0);
                        return p.unique(m)
                    };
                    this.commonAncestor = function () {
                        return k.commonAncestor(b, m)
                    };
                    this.expand = function (a) {
                        var c = k.ancestor(b, a);
                        a = k.ancestor(m, a);
                        if (!c && !a) return new e(b, h, m, q);
                        var g = this.getPoints();
                        c && (g.sc = c, g.so = 0);
                        a && (g.ec = a, g.eo = k.nodeLength(a));
                        return new e(g.sc, g.so, g.ec, g.eo)
                    };
                    this.collapse = function (a) {
                        return a ? new e(b, h, b, h) : new e(m, q, m, q)
                    };
                    this.splitText = function () {
                        var a = b === m, c = this.getPoints();
                        k.isText(m) && !k.isEdgePoint(this.getEndPoint()) && m.splitText(q);
                        k.isText(b) && !k.isEdgePoint(this.getStartPoint()) && (c.sc = b.splitText(h), c.so = 0, a && (c.ec = c.sc, c.eo = q - h));
                        return new e(c.sc, c.so, c.ec, c.eo)
                    };
                    this.deleteContents = function () {
                        if (this.isCollapsed()) return this;
                        var b = this.splitText(), c = b.nodes(null, {fullyContains: !0}),
                            g = k.prevPointUntil(b.getStartPoint(), function (a) {
                                return !p.contains(c, a.node)
                            }), h = [];
                        a.each(c, function (a, b) {
                            var c = b.parentNode;
                            g.node !== c && 1 === k.nodeLength(c) && h.push(c);
                            k.remove(b, !1)
                        });
                        a.each(h, function (a, b) {
                            k.remove(b, !1)
                        });
                        return (new e(g.node,
                            g.offset, g.node, g.offset)).normalize()
                    };
                    var t = function (a) {
                        return function () {
                            var c = k.ancestor(b, a);
                            return !!c && c === k.ancestor(m, a)
                        }
                    };
                    this.isOnEditable = t(k.isEditable);
                    this.isOnList = t(k.isList);
                    this.isOnAnchor = t(k.isAnchor);
                    this.isOnCell = t(k.isCell);
                    this.isLeftEdgeOf = function (a) {
                        return k.isLeftEdgePoint(this.getStartPoint()) ? (a = k.ancestor(this.sc, a)) && k.isLeftEdgeOf(this.sc, a) : !1
                    };
                    this.isCollapsed = function () {
                        return b === m && h === q
                    };
                    this.wrapBodyInlineWithPara = function () {
                        if (k.isBodyContainer(b) && k.isEmpty(b)) return b.innerHTML =
                            k.emptyPara, new e(b.firstChild, 0, b.firstChild, 0);
                        var a = this.normalize();
                        if (k.isParaInline(b) || k.isPara(b)) return a;
                        var c;
                        if (k.isInline(a.sc)) {
                            var g = k.listAncestor(a.sc, l.not(k.isInline));
                            c = p.last(g);
                            k.isInline(c) || (c = g[g.length - 2] || a.sc.childNodes[a.so])
                        } else c = a.sc.childNodes[0 < a.so ? a.so - 1 : 0];
                        a = k.listPrev(c, k.isParaInline).reverse();
                        a = a.concat(k.listNext(c.nextSibling, k.isParaInline));
                        a.length && (c = k.wrap(p.head(a), "p"), k.appendChildNodes(c, p.tail(a)));
                        return this.normalize()
                    };
                    this.insertNode = function (a) {
                        var b =
                            this.wrapBodyInlineWithPara().deleteContents(), b = k.splitPoint(b.getStartPoint(), k.isInline(a));
                        b.rightNode ? b.rightNode.parentNode.insertBefore(a, b.rightNode) : b.container.appendChild(a);
                        return a
                    };
                    this.pasteHTML = function (b) {
                        b = a("<div></div>").html(b)[0];
                        b = p.from(b.childNodes);
                        var c = this.wrapBodyInlineWithPara().deleteContents();
                        return b.reverse().map(function (a) {
                            return c.insertNode(a)
                        }).reverse()
                    };
                    this.toString = function () {
                        var a = s();
                        return g.isW3CRangeSupport ? a.toString() : a.text
                    };
                    this.getWordRange = function (a) {
                        var b =
                            this.getEndPoint();
                        if (!k.isCharPoint(b)) return this;
                        var c = k.prevPointUntil(b, function (a) {
                            return !k.isCharPoint(a)
                        });
                        a && (b = k.nextPointUntil(b, function (a) {
                            return !k.isCharPoint(a)
                        }));
                        return new e(c.node, c.offset, b.node, b.offset)
                    };
                    this.bookmark = function (a) {
                        return {s: {path: k.makeOffsetPath(a, b), offset: h}, e: {path: k.makeOffsetPath(a, m), offset: q}}
                    };
                    this.paraBookmark = function (a) {
                        return {
                            s: {path: p.tail(k.makeOffsetPath(p.head(a), b)), offset: h},
                            e: {path: p.tail(k.makeOffsetPath(p.last(a), m)), offset: q}
                        }
                    };
                    this.getClientRects =
                        function () {
                            return s().getClientRects()
                        }
                };
            return {
                create: function (a, c, h, l) {
                    if (arguments.length) 2 === arguments.length && (h = a, l = c); else if (g.isW3CRangeSupport) {
                        var m = document.getSelection();
                        if (!m || 0 === m.rangeCount || k.isBody(m.anchorNode)) return null;
                        m = m.getRangeAt(0);
                        a = m.startContainer;
                        c = m.startOffset;
                        h = m.endContainer;
                        l = m.endOffset
                    } else {
                        var x = document.selection.createRange(), m = x.duplicate();
                        m.collapse(!1);
                        x.collapse(!0);
                        x = b(x, !0);
                        m = b(m, !1);
                        k.isText(x.node) && k.isLeftEdgePoint(x) && k.isTextNode(m.node) && k.isRightEdgePoint(m) &&
                        m.node.nextSibling === x.node && (x = m);
                        a = x.cont;
                        c = x.offset;
                        h = m.cont;
                        l = m.offset
                    }
                    return new e(a, c, h, l)
                }, createFromNode: function (a) {
                    var b = a, c = 0, e = k.nodeLength(a);
                    k.isVoid(b) && (c = k.listPrev(b).length - 1, b = b.parentNode);
                    k.isBR(a) ? (e = k.listPrev(a).length - 1, a = a.parentNode) : k.isVoid(a) && (e = k.listPrev(a).length, a = a.parentNode);
                    return this.create(b, c, a, e)
                }, createFromNodeBefore: function (a) {
                    return this.createFromNode(a).collapse(!0)
                }, createFromNodeAfter: function (a) {
                    return this.createFromNode(a).collapse()
                }, createFromBookmark: function (a,
                                                 b) {
                    var c = k.fromOffsetPath(a, b.s.path), g = b.s.offset, h = k.fromOffsetPath(a, b.e.path);
                    return new e(c, g, h, b.e.offset)
                }, createFromParaBookmark: function (a, b) {
                    var c = a.s.offset, g = a.e.offset, h = k.fromOffsetPath(p.head(b), a.s.path),
                        l = k.fromOffsetPath(p.last(b), a.e.path);
                    return new e(h, c, l, g)
                }
            }
        }(), L = function () {
            return {
                readFileAsDataURL: function (b) {
                    return a.Deferred(function (c) {
                        a.extend(new FileReader, {
                            onload: function (a) {
                                c.resolve(a.target.result)
                            }, onerror: function () {
                                c.reject(this)
                            }
                        }).readAsDataURL(b)
                    }).promise()
                },
                createImage: function (b, c) {
                    return a.Deferred(function (e) {
                        var g = a("<img>");
                        g.one("load", function () {
                            g.off("error abort");
                            e.resolve(g)
                        }).one("error abort", function () {
                            g.off("load").detach();
                            e.reject(g)
                        }).css({display: "none"}).appendTo(document.body).attr({src: b, "data-filename": c})
                    }).promise()
                }
            }
        }(), E = function () {
            var a = {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SPACE: 32,
                NUM0: 48,
                NUM1: 49,
                NUM2: 50,
                NUM3: 51,
                NUM4: 52,
                NUM5: 53,
                NUM6: 54,
                NUM7: 55,
                NUM8: 56,
                B: 66,
                E: 69,
                I: 73,
                J: 74,
                K: 75,
                L: 76,
                R: 82,
                S: 83,
                U: 85,
                V: 86,
                Y: 89,
                Z: 90,
                SLASH: 191,
                LEFTBRACKET: 219,
                BACKSLASH: 220,
                RIGHTBRACKET: 221
            };
            return {
                isEdit: function (a) {
                    return p.contains([8, 9, 13, 32], a)
                }, isMove: function (a) {
                    return p.contains([37, 38, 39, 40], a)
                }, nameFromCode: l.invertObject(a), code: a
            }
        }(), C = function (a) {
            var b = [], c = -1, e = a[0], g = function () {
                var b = s.create(), c = {s: {path: [], offset: 0}, e: {path: [], offset: 0}};
                return {contents: a.html(), bookmark: b ? b.bookmark(e) : c}
            }, h = function (b) {
                null !== b.contents && a.html(b.contents);
                null !== b.bookmark && s.createFromBookmark(e, b.bookmark).select()
            };
            this.undo = function () {
                a.html() !==
                b[c].contents && this.recordUndo();
                0 < c && (c--, h(b[c]))
            };
            this.redo = function () {
                b.length - 1 > c && (c++, h(b[c]))
            };
            this.recordUndo = function () {
                c++;
                b.length > c && (b = b.slice(0, c));
                b.push(g())
            };
            this.recordUndo()
        }, z = function () {
            var b = function (b, c) {
                if (1.9 > g.jqueryVersion) {
                    var e = {};
                    a.each(c, function (a, c) {
                        e[c] = b.css(c)
                    });
                    return e
                }
                return b.css.call(b, c)
            };
            this.fromNode = function (a) {
                a = b(a, ["font-family", "font-size", "text-align", "list-style-type", "line-height"]) || {};
                a["font-size"] = parseInt(a["font-size"], 10);
                return a
            };
            this.stylePara =
                function (b, c) {
                    a.each(b.nodes(k.isPara, {includeAncestor: !0}), function (b, e) {
                        a(e).css(c)
                    })
                };
            this.styleNodes = function (b, c) {
                b = b.splitText();
                var e = c && c.nodeName || "SPAN", g = !(!c || !c.expandClosestSibling),
                    h = !(!c || !c.onlyPartialContains);
                if (b.isCollapsed()) return [b.insertNode(k.create(e))];
                var m = k.makePredByNodeName(e), q = b.nodes(k.isText, {fullyContains: !0}).map(function (a) {
                    return k.singleChildAncestor(a, m) || k.wrap(a, e)
                });
                if (g) {
                    if (h) var s = b.nodes(), m = l.and(m, function (a) {
                        return p.contains(s, a)
                    });
                    return q.map(function (b) {
                        b =
                            k.withClosestSiblings(b, m);
                        var c = p.head(b), e = p.tail(b);
                        a.each(e, function (a, b) {
                            k.appendChildNodes(c, b.childNodes);
                            k.remove(b)
                        });
                        return p.head(b)
                    })
                }
                return q
            };
            this.current = function (b) {
                var c = a(k.isText(b.sc) ? b.sc.parentNode : b.sc), c = this.fromNode(c);
                c["font-bold"] = document.queryCommandState("bold") ? "bold" : "normal";
                c["font-italic"] = document.queryCommandState("italic") ? "italic" : "normal";
                c["font-underline"] = document.queryCommandState("underline") ? "underline" : "normal";
                c["font-strikethrough"] = document.queryCommandState("strikeThrough") ?
                    "strikethrough" : "normal";
                c["font-superscript"] = document.queryCommandState("superscript") ? "superscript" : "normal";
                c["font-subscript"] = document.queryCommandState("subscript") ? "subscript" : "normal";
                if (b.isOnList()) {
                    var e = -1 < a.inArray(c["list-style-type"], ["circle", "disc", "disc-leading-zero", "square"]);
                    c["list-style"] = e ? "unordered" : "ordered"
                } else c["list-style"] = "none";
                (e = k.ancestor(b.sc, k.isPara)) && e.style["line-height"] ? c["line-height"] = e.style.lineHeight : (e = parseInt(c["line-height"], 10) / parseInt(c["font-size"],
                    10), c["line-height"] = e.toFixed(1));
                c.anchor = b.isOnAnchor() && k.ancestor(b.sc, k.isAnchor);
                c.ancestors = k.listAncestor(b.sc, k.isEditable);
                c.range = b;
                return c
            }
        }, h = function () {
            this.insertOrderedList = function () {
                this.toggleList("OL")
            };
            this.insertUnorderedList = function () {
                this.toggleList("UL")
            };
            this.indent = function () {
                var b = this, c = s.create().wrapBodyInlineWithPara(), e = c.nodes(k.isPara, {includeAncestor: !0}),
                    e = p.clusterBy(e, l.peq2("parentNode"));
                a.each(e, function (c, e) {
                    var g = p.head(e);
                    k.isLi(g) ? b.wrapList(e, g.parentNode.nodeName) :
                        a.each(e, function (b, c) {
                            a(c).css("marginLeft", function (a, b) {
                                return (parseInt(b, 10) || 0) + 25
                            })
                        })
                });
                c.select()
            };
            this.outdent = function () {
                var b = this, c = s.create().wrapBodyInlineWithPara(), e = c.nodes(k.isPara, {includeAncestor: !0}),
                    e = p.clusterBy(e, l.peq2("parentNode"));
                a.each(e, function (c, e) {
                    var g = p.head(e);
                    k.isLi(g) ? b.releaseList([e]) : a.each(e, function (b, c) {
                        a(c).css("marginLeft", function (a, b) {
                            b = parseInt(b, 10) || 0;
                            return 25 < b ? b - 25 : ""
                        })
                    })
                });
                c.select()
            };
            this.toggleList = function (b) {
                var c = this, e = s.create().wrapBodyInlineWithPara(),
                    g = e.nodes(k.isPara, {includeAncestor: !0}), h = e.paraBookmark(g),
                    m = p.clusterBy(g, l.peq2("parentNode"));
                if (p.find(g, k.isPurePara)) {
                    var q = [];
                    a.each(m, function (a, e) {
                        q = q.concat(c.wrapList(e, b))
                    });
                    g = q
                } else e = e.nodes(k.isList, {includeAncestor: !0}).filter(function (c) {
                    return !a.nodeName(c, b)
                }), e.length ? a.each(e, function (a, c) {
                    k.replace(c, b)
                }) : g = this.releaseList(m, !0);
                s.createFromParaBookmark(h, g).select()
            };
            this.wrapList = function (a, b) {
                var c = p.head(a), e = p.last(a), g = k.isList(c.previousSibling) && c.previousSibling,
                    c = k.isList(e.nextSibling) && e.nextSibling, e = g || k.insertAfter(k.create(b || "UL"), e);
                a = a.map(function (a) {
                    return k.isPurePara(a) ? k.replace(a, "LI") : a
                });
                k.appendChildNodes(e, a);
                c && (k.appendChildNodes(e, p.from(c.childNodes)), k.remove(c));
                return a
            };
            this.releaseList = function (b, c) {
                var e = [];
                a.each(b, function (b, g) {
                    var h = p.head(g), l = p.last(g), m = c ? k.lastAncestor(h, k.isList) : h.parentNode,
                        l = 1 < m.childNodes.length ? k.splitTree(m, {
                            node: l.parentNode,
                            offset: k.position(l) + 1
                        }, {isSkipPaddingBlankHTML: !0}) : null, h = k.splitTree(m,
                        {node: h.parentNode, offset: k.position(h)}, {isSkipPaddingBlankHTML: !0});
                    g = c ? k.listDescendant(h, k.isLi) : p.from(h.childNodes).filter(k.isLi);
                    if (c || !k.isList(m.parentNode)) g = g.map(function (a) {
                        return k.replace(a, "P")
                    });
                    a.each(p.from(g).reverse(), function (a, b) {
                        k.insertAfter(b, m)
                    });
                    h = p.compact([m, h, l]);
                    a.each(h, function (b, c) {
                        var e = [c].concat(k.listDescendant(c, k.isList));
                        a.each(e.reverse(), function (a, b) {
                            k.nodeLength(b) || k.remove(b, !0)
                        })
                    });
                    e = e.concat(g)
                });
                return e
            }
        }, m = function () {
            var b = new h;
            this.insertTab =
                function (a, b, c) {
                    a = k.createText(Array(c + 1).join(k.NBSP_CHAR));
                    b = b.deleteContents();
                    b.insertNode(a, !0);
                    b = s.create(a, c);
                    b.select()
                };
            this.insertParagraph = function () {
                var c = s.create(), c = c.deleteContents(), c = c.wrapBodyInlineWithPara(), e = k.ancestor(c.sc, k.isPara),
                    g;
                if (e) {
                    if (k.isEmpty(e) && k.isLi(e)) {
                        b.toggleList(e.parentNode.nodeName);
                        return
                    }
                    g = k.splitTree(e, c.getStartPoint());
                    c = k.listDescendant(e, k.isEmptyAnchor);
                    c = c.concat(k.listDescendant(g, k.isEmptyAnchor));
                    a.each(c, function (a, b) {
                        k.remove(b)
                    })
                } else e = c.sc.childNodes[c.so],
                    g = a(k.emptyPara)[0], e ? c.sc.insertBefore(g, e) : c.sc.appendChild(g);
                s.create(g, 0).normalize().select()
            }
        }, Q = function () {
            this.tab = function (a, b) {
                var c = k.ancestor(a.commonAncestor(), k.isCell), e = k.ancestor(c, k.isTable),
                    e = k.listDescendant(e, k.isCell);
                (c = p[b ? "prev" : "next"](e, c)) && s.create(c, 0).select()
            };
            this.createTable = function (b, c) {
                for (var e = [], g = 0; g < b; g++) e.push("<td>" + k.blank + "</td>");
                for (var e = e.join(""), g = [], h = 0; h < c; h++) g.push("<tr>" + e + "</tr>");
                e = g.join("");
                return a('<table class="table table-bordered">' +
                    e + "</table>")[0]
            }
        }, H = function (b) {
            var c = this, e = new z, l = new Q, q = new m, t = new h;
            this.createRange = function (a) {
                this.focus(a);
                return s.create()
            };
            this.saveRange = function (a, b) {
                this.focus(a);
                a.data("range", s.create());
                b && s.create().collapse().select()
            };
            this.saveNode = function (a) {
                for (var b = [], c = 0, e = a[0].childNodes.length; c < e; c++) b.push(a[0].childNodes[c]);
                a.data("childNodes", b)
            };
            this.restoreRange = function (a) {
                var b = a.data("range");
                b && (b.select(), this.focus(a))
            };
            this.restoreNode = function (a) {
                a.html("");
                for (var b =
                    a.data("childNodes"), c = 0, e = b.length; c < e; c++) a[0].appendChild(b[c])
            };
            this.currentStyle = function (a) {
                var b = s.create(), b = b && b.isOnEditable() ? e.current(b.normalize()) : {};
                k.isImg(a) && (b.image = a);
                return b
            };
            this.styleFromNode = function (a) {
                return e.fromNode(a)
            };
            var r = function (a) {
                var c = k.makeLayoutInfo(a).holder();
                b.bindCustomEvent(c, a.data("callbacks"), "before.command")(a.html(), a)
            }, D = function (a) {
                var c = k.makeLayoutInfo(a).holder();
                b.bindCustomEvent(c, a.data("callbacks"), "change")(a.html(), a)
            };
            this.undo = function (a) {
                r(a);
                a.data("NoteHistory").undo();
                D(a)
            };
            this.redo = function (a) {
                r(a);
                a.data("NoteHistory").redo();
                D(a)
            };
            for (var K = this.beforeCommand = function (a) {
                r(a);
                c.focus(a)
            }, v = this.afterCommand = function (a, b) {
                a.data("NoteHistory").recordUndo();
                b || D(a)
            }, ca = "bold italic underline strikethrough superscript subscript justifyLeft justifyCenter justifyRight justifyFull formatBlock removeFormat backColor foreColor fontName".split(" "), R = 0, V = ca.length; R < V; R++) this[ca[R]] = function (a) {
                return function (b, c) {
                    K(b);
                    document.execCommand(a,
                        !1, c);
                    v(b, !0)
                }
            }(ca[R]);
            this.tab = function (a, b) {
                var c = this.createRange(a);
                c.isCollapsed() && c.isOnCell() ? l.tab(c) : (K(a), q.insertTab(a, c, b.tabsize), v(a))
            };
            this.untab = function (a) {
                a = this.createRange(a);
                a.isCollapsed() && a.isOnCell() && l.tab(a, !0)
            };
            this.insertParagraph = function (a) {
                K(a);
                q.insertParagraph(a);
                v(a)
            };
            this.insertOrderedList = function (a) {
                K(a);
                t.insertOrderedList(a);
                v(a)
            };
            this.insertUnorderedList = function (a) {
                K(a);
                t.insertUnorderedList(a);
                v(a)
            };
            this.indent = function (a) {
                K(a);
                t.indent(a);
                v(a)
            };
            this.outdent =
                function (a) {
                    K(a);
                    t.outdent(a);
                    v(a)
                };
            this.insertImage = function (a, c, e) {
                L.createImage(c, e).then(function (b) {
                    K(a);
                    var c = b.width() >= a.width() ? "100%" : b.width();
                    b.css({display: "", width: c});
                    s.create().insertNode(b[0]);
                    s.createFromNodeAfter(b[0]).select();
                    v(a)
                }).fail(function () {
                    var c = k.makeLayoutInfo(a).holder();
                    b.bindCustomEvent(c, a.data("callbacks"), "image.upload.error")()
                })
            };
            this.insertNode = function (a, b) {
                K(a);
                s.create().insertNode(b);
                s.createFromNodeAfter(b).select();
                v(a)
            };
            this.insertText = function (a, b) {
                K(a);
                var c = s.create().insertNode(k.createText(b));
                s.create(c, k.nodeLength(c)).select();
                v(a)
            };
            this.pasteHTML = function (a, b) {
                K(a);
                var c = s.create().pasteHTML(b);
                s.createFromNodeAfter(p.last(c)).select();
                v(a)
            };
            this.formatBlock = function (a, b) {
                K(a);
                b = g.isMSIE ? "<" + b + ">" : b;
                document.execCommand("FormatBlock", !1, b);
                v(a)
            };
            this.formatPara = function (a) {
                K(a);
                this.formatBlock(a, "P");
                v(a)
            };
            for (R = 1; 6 >= R; R++) this["formatH" + R] = function (a) {
                return function (b) {
                    this.formatBlock(b, "H" + a)
                }
            }(R);
            this.fontSize = function (b, c) {
                var g = s.create();
                if (g.isCollapsed()) {
                    var g = e.styleNodes(g), h = p.head(g);
                    a(g).css({"font-size": c + "px"});
                    h && !k.nodeLength(h) && (h.innerHTML = k.ZERO_WIDTH_NBSP_CHAR, s.createFromNodeAfter(h.firstChild).select(), b.data("bogus", h))
                } else K(b), a(e.styleNodes(g)).css({"font-size": c + "px"}), v(b)
            };
            this.insertHorizontalRule = function (b) {
                K(b);
                var c = s.create().insertNode(a("<HR/>")[0]);
                c.nextSibling && s.create(c.nextSibling, 0).normalize().select();
                v(b)
            };
            this.removeBogus = function (a) {
                var b = a.data("bogus");
                if (b) {
                    var c = p.find(p.from(b.childNodes),
                        k.isText), e = c.nodeValue.indexOf(k.ZERO_WIDTH_NBSP_CHAR);
                    -1 !== e && c.deleteData(e, 1);
                    k.isEmpty(b) && k.remove(b);
                    a.removeData("bogus")
                }
            };
            this.lineHeight = function (a, b) {
                K(a);
                e.stylePara(s.create(), {lineHeight: b});
                v(a)
            };
            this.unlink = function (a) {
                var b = this.createRange(a);
                b.isOnAnchor() && (b = k.ancestor(b.sc, k.isAnchor), b = s.createFromNode(b), b.select(), K(a), document.execCommand("unlink"), v(a))
            };
            this.createLink = function (b, c, g) {
                var h = c.url, f = c.text, l = c.isNewWindow;
                c = c.range || this.createRange(b);
                var m = c.toString() !==
                    f;
                g = g || k.makeLayoutInfo(b).editor().data("options");
                K(b);
                g.onCreateLink && (h = g.onCreateLink(h));
                g = [];
                m ? (f = c.insertNode(a("<A>" + f + "</A>")[0]), g.push(f)) : g = e.styleNodes(c, {
                    nodeName: "A",
                    expandClosestSibling: !0,
                    onlyPartialContains: !0
                });
                a.each(g, function (b, c) {
                    a(c).attr("href", h);
                    l ? a(c).attr("target", "_blank") : a(c).removeAttr("target")
                });
                f = s.createFromNodeBefore(p.head(g)).getStartPoint();
                g = s.createFromNodeAfter(p.last(g)).getEndPoint();
                s.create(f.node, f.offset, g.node, g.offset).select();
                v(b)
            };
            this.getLinkInfo =
                function (b) {
                    this.focus(b);
                    b = s.create().expand(k.isAnchor);
                    var c = a(p.head(b.nodes(k.isAnchor)));
                    return {
                        range: b,
                        text: b.toString(),
                        isNewWindow: c.length ? "_blank" === c.attr("target") : !1,
                        url: c.length ? c.attr("href") : ""
                    }
                };
            this.color = function (a, b) {
                var c = JSON.parse(b), e = c.foreColor, c = c.backColor;
                K(a);
                e && document.execCommand("foreColor", !1, e);
                c && document.execCommand("backColor", !1, c);
                v(a)
            };
            this.insertTable = function (a, b) {
                var c = b.split("x");
                K(a);
                s.create().deleteContents().insertNode(l.createTable(c[0], c[1]));
                v(a)
            };
            this.floatMe = function (a, b, c) {
                K(a);
                c.removeClass("pull-left pull-right");
                b && "none" !== b && c.addClass("pull-" + b);
                c.css("float", b);
                v(a)
            };
            this.imageShape = function (a, b, c) {
                K(a);
                c.removeClass("img-rounded img-circle img-thumbnail");
                b && c.addClass(b);
                v(a)
            };
            this.resize = function (a, b, c) {
                K(a);
                c.css({width: 100 * b + "%", height: ""});
                v(a)
            };
            this.resizeTo = function (a, b, c) {
                if (c) {
                    c = a.y / a.x;
                    var e = b.data("ratio");
                    a = {width: e > c ? a.x : a.y / e, height: e > c ? a.x * e : a.y}
                } else a = {width: a.x, height: a.y};
                b.css(a)
            };
            this.removeMedia = function (c,
                                         e, g) {
                K(c);
                g.detach();
                b.bindCustomEvent(a(), c.data("callbacks"), "media.delete")(g, c);
                v(c)
            };
            this.focus = function (a) {
                a.focus();
                g.isFF && !s.create().isOnEditable() && s.createFromNode(a[0]).normalize().collapse().select()
            };
            this.isEmpty = function (a) {
                return k.isEmpty(a[0]) || k.emptyPara === a.html()
            }
        }, D = function () {
            this.update = function (b, c) {
                var e = function (b, c) {
                    b.find(".dropdown-menu li a").each(function () {
                        this.className = a(this).data("value") + "" === c + "" ? "checked" : ""
                    })
                }, h = function (a, c) {
                    b.find(a).toggleClass("active",
                        c())
                };
                if (c.image) {
                    var k = a(c.image);
                    h('button[data-event="imageShape"][data-value="img-rounded"]', function () {
                        return k.hasClass("img-rounded")
                    });
                    h('button[data-event="imageShape"][data-value="img-circle"]', function () {
                        return k.hasClass("img-circle")
                    });
                    h('button[data-event="imageShape"][data-value="img-thumbnail"]', function () {
                        return k.hasClass("img-thumbnail")
                    });
                    h('button[data-event="imageShape"]:not([data-value])', function () {
                        return !k.is(".img-rounded, .img-circle, .img-thumbnail")
                    });
                    var l = k.css("float");
                    h('button[data-event="floatMe"][data-value="left"]', function () {
                        return "left" === l
                    });
                    h('button[data-event="floatMe"][data-value="right"]', function () {
                        return "right" === l
                    });
                    h('button[data-event="floatMe"][data-value="none"]', function () {
                        return "left" !== l && "right" !== l
                    });
                    var m = k.attr("style");
                    h('button[data-event="resize"][data-value="1"]', function () {
                        return !!/(^|\s)(max-)?width\s*:\s*100%/.test(m)
                    });
                    h('button[data-event="resize"][data-value="0.5"]', function () {
                        return !!/(^|\s)(max-)?width\s*:\s*50%/.test(m)
                    });
                    h('button[data-event="resize"][data-value="0.25"]', function () {
                        return !!/(^|\s)(max-)?width\s*:\s*25%/.test(m)
                    })
                } else {
                    var p = b.find(".note-fontname");
                    if (p.length) {
                        var q = c["font-family"];
                        if (q) {
                            for (var t = q.split(","), s = 0, r = t.length; s < r && (q = t[s].replace(/[\'\"]/g, "").replace(/\s+$/, "").replace(/^\s+/, ""), !g.isFontInstalled(q)); s++) ;
                            p.find(".note-current-fontname").text(q);
                            e(p, q)
                        }
                    }
                    p = b.find(".note-fontsize");
                    p.find(".note-current-fontsize").text(c["font-size"]);
                    e(p, parseFloat(c["font-size"]));
                    p = b.find(".note-height");
                    e(p, parseFloat(c["line-height"]));
                    h('button[data-event="bold"]', function () {
                        return "bold" === c["font-bold"]
                    });
                    h('button[data-event="italic"]', function () {
                        return "italic" === c["font-italic"]
                    });
                    h('button[data-event="underline"]', function () {
                        return "underline" === c["font-underline"]
                    });
                    h('button[data-event="strikethrough"]', function () {
                        return "strikethrough" === c["font-strikethrough"]
                    });
                    h('button[data-event="superscript"]', function () {
                        return "superscript" === c["font-superscript"]
                    });
                    h('button[data-event="subscript"]',
                        function () {
                            return "subscript" === c["font-subscript"]
                        });
                    h('button[data-event="justifyLeft"]', function () {
                        return "left" === c["text-align"] || "start" === c["text-align"]
                    });
                    h('button[data-event="justifyCenter"]', function () {
                        return "center" === c["text-align"]
                    });
                    h('button[data-event="justifyRight"]', function () {
                        return "right" === c["text-align"]
                    });
                    h('button[data-event="justifyFull"]', function () {
                        return "justify" === c["text-align"]
                    });
                    h('button[data-event="insertUnorderedList"]', function () {
                        return "unordered" === c["list-style"]
                    });
                    h('button[data-event="insertOrderedList"]', function () {
                        return "ordered" === c["list-style"]
                    })
                }
            };
            this.updateRecentColor = function (b, c, e) {
                b = a(b).closest(".note-color").find(".note-recent-color");
                var g = JSON.parse(b.attr("data-value"));
                g[c] = e;
                b.attr("data-value", JSON.stringify(g));
                c = "backColor" === c ? "background-color" : "color";
                b.find("i").css(c, e)
            }
        }, V = function () {
            var a = new D;
            this.update = function (b, c) {
                a.update(b, c)
            };
            this.updateRecentColor = function (b, c, e) {
                a.updateRecentColor(b, c, e)
            };
            this.activate = function (a) {
                a.find("button").not('button[data-event="codeview"]').removeClass("disabled")
            };
            this.deactivate = function (a) {
                a.find("button").not('button[data-event="codeview"]').addClass("disabled")
            };
            this.updateFullscreen = function (a, b) {
                a.find('button[data-event="fullscreen"]').toggleClass("active", b)
            };
            this.updateCodeview = function (a, b) {
                a.find('button[data-event="codeview"]').toggleClass("active", b);
                b ? this.deactivate(a) : this.activate(a)
            };
            this.get = function (a, b) {
                return k.makeLayoutInfo(a).toolbar().find("[data-name=" + b + "]")
            };
            this.setButtonState = function (a, b, c) {
                c = !1 === c ? !1 : !0;
                this.get(a, b).toggleClass("active",
                    c)
            }
        }, R = function () {
            var b = a(document);
            this.attach = function (a, b) {
                if (!b.disableResizeEditor) a.statusbar().on("mousedown", c)
            };
            var c = function (a) {
                a.preventDefault();
                a.stopPropagation();
                var c = k.makeLayoutInfo(a.target).editable(), e = c.offset().top - b.scrollTop(),
                    g = k.makeLayoutInfo(a.currentTarget || a.target).editor().data("options");
                b.on("mousemove", function (a) {
                    a = a.clientY - (e + 24);
                    a = 0 < g.minHeight ? Math.max(a, g.minHeight) : a;
                    a = 0 < g.maxHeight ? Math.min(a, g.maxHeight) : a;
                    c.height(a)
                }).one("mouseup", function () {
                    b.off("mousemove")
                })
            }
        },
        T = function () {
            var b = new D, c = function (b, c) {
                var e = c && c.isAirMode, g = c && c.isLeftTop, h = a(b), e = e ? h.offset() : h.position(),
                    g = g ? 0 : h.outerHeight(!0);
                return {left: e.left, top: e.top + g}
            }, e = function (a, b) {
                a.css({display: "block", left: b.left, top: b.top})
            };
            this.update = function (g, h, k) {
                b.update(g, h);
                var m = g.find(".note-link-popover");
                if (h.anchor) {
                    var q = m.find("a"), s = a(h.anchor).attr("href"), t = a(h.anchor).attr("target");
                    q.attr("href", s).html(s);
                    t ? q.attr("target", "_blank") : q.removeAttr("target");
                    e(m, c(h.anchor, {isAirMode: k}))
                } else m.hide();
                m = g.find(".note-image-popover");
                h.image ? e(m, c(h.image, {isAirMode: k, isLeftTop: !0})) : m.hide();
                g = g.find(".note-air-popover");
                if (k && h.range && !h.range.isCollapsed()) {
                    if (h = p.last(h.range.getClientRects())) h = l.rect2bnd(h), e(g, {
                        left: Math.max(h.left + h.width / 2 - 20, 0),
                        top: h.top + h.height
                    })
                } else g.hide()
            };
            this.updateRecentColor = function (a, b, c) {
                a.updateRecentColor(a, b, c)
            };
            this.hide = function (a) {
                a.children().hide()
            }
        }, M = function (b) {
            var c = a(document), e = function (e) {
                if (k.isControlSizing(e.target)) {
                    e.preventDefault();
                    e.stopPropagation();
                    e = k.makeLayoutInfo(e.target);
                    var g = e.handle(), h = e.popover(), l = e.editable();
                    e = e.editor();
                    var m = g.find(".note-control-selection").data("target"), p = a(m), q = p.offset(), s = c.scrollTop(),
                        t = e.data("options").airMode;
                    c.on("mousemove", function (a) {
                        b.invoke("editor.resizeTo", {x: a.clientX - q.left, y: a.clientY - (q.top - s)}, p, !a.shiftKey);
                        b.invoke("handle.update", g, {image: m}, t);
                        b.invoke("popover.update", h, {image: m}, t)
                    }).one("mouseup", function () {
                        c.off("mousemove");
                        b.invoke("editor.afterCommand", l)
                    });
                    p.data("ratio") || p.data("ratio", p.height() / p.width())
                }
            };
            this.attach = function (a) {
                a.handle().on("mousedown", e)
            };
            this.update = function (b, c, e) {
                b = b.find(".note-control-selection");
                if (c.image) {
                    var g = a(c.image);
                    e = e ? g.offset() : g.position();
                    var h = g.outerWidth(!0), g = g.outerHeight(!0);
                    b.css({display: "block", left: e.left, top: e.top, width: h, height: g}).data("target", c.image);
                    c = h + "x" + g;
                    b.find(".note-control-selection-info").text(c)
                } else b.hide()
            };
            this.hide = function (a) {
                a.children().hide()
            }
        }, N = function (b) {
            var c = a(window),
                e = a("html, body");
            this.toggle = function (a) {
                var g = a.editor(), h = a.toolbar(), k = a.editable(), l = a.codable(), m = function (a) {
                    k.css("height", a.h);
                    l.css("height", a.h);
                    l.data("cmeditor") && l.data("cmeditor").setsize(null, a.h)
                };
                g.toggleClass("fullscreen");
                (a = g.hasClass("fullscreen")) ? (k.data("orgheight", k.css("height")), c.on("resize", function () {
                    m({h: c.height() - h.outerHeight()})
                }).trigger("resize"), e.css("overflow", "hidden")) : (c.off("resize"), m({h: k.data("orgheight")}), e.css("overflow", "visible"));
                b.invoke("toolbar.updateFullscreen",
                    h, a)
            }
        }, A;
    g.hasCodeMirror && (g.isSupportAmd ? require(["CodeMirror"], function (a) {
        A = a
    }) : A = window.CodeMirror);
    var Y = function (a) {
        this.sync = function (b) {
            a.invoke("codeview.isActivated", b) && g.hasCodeMirror && b.codable().data("cmEditor").save()
        };
        this.isActivated = function (a) {
            return a.editor().hasClass("codeview")
        };
        this.toggle = function (a) {
            this.isActivated(a) ? this.deactivate(a) : this.activate(a)
        };
        this.activate = function (b) {
            var c = b.editor(), e = b.toolbar(), h = b.editable(), l = b.codable(), m = b.popover(), p = b.handle();
            b = c.data("options");
            l.val(k.html(h, b.prettifyHtml));
            l.height(h.height());
            a.invoke("toolbar.updateCodeview", e, !0);
            a.invoke("popover.hide", m);
            a.invoke("handle.hide", p);
            c.addClass("codeview");
            l.focus();
            if (g.hasCodeMirror) {
                c = A.fromTextArea(l[0], b.codemirror);
                if (b.codemirror.tern) {
                    var q = new A.TernServer(b.codemirror.tern);
                    c.ternServer = q;
                    c.on("cursorActivity", function (a) {
                        q.updateArgHints(a)
                    })
                }
                c.setSize(null, h.outerHeight());
                l.data("cmEditor", c)
            }
        };
        this.deactivate = function (b) {
            var c = b.holder(), e = b.editor(), h = b.toolbar(), l = b.editable();
            b = b.codable();
            var m = e.data("options");
            if (g.hasCodeMirror) {
                var p = b.data("cmEditor");
                b.val(p.getValue());
                p.toTextArea()
            }
            var p = k.value(b, m.prettifyHtml) || k.emptyPara, q = l.html() !== p;
            l.html(p);
            l.height(m.height ? b.height() : "auto");
            e.removeClass("codeview");
            q && a.bindCustomEvent(c, l.data("callbacks"), "change")(l.html(), l);
            l.focus();
            a.invoke("toolbar.updateCodeview", h, !1)
        }
    }, v = function (b) {
        var c = a(document);
        this.attach = function (a, b) {
            if (b.airMode || b.disableDragAndDrop) c.on("drop", function (a) {
                a.preventDefault()
            });
            else this.attachDragAndDropEvent(a, b)
        };
        this.attachDragAndDropEvent = function (e, g) {
            var h = a(), l = e.editor(), m = e.dropzone(), p = m.find(".note-dropzone-message");
            c.on("dragenter", function (a) {
                var c = b.invoke("codeview.isActivated", e), k = 0 < l.width() && 0 < l.height();
                c || h.length || !k || (l.addClass("dragover"), m.width(l.width()), m.height(l.height()), p.text(g.langInfo.image.dragImageHere));
                h = h.add(a.target)
            }).on("dragleave", function (a) {
                h = h.not(a.target);
                h.length || l.removeClass("dragover")
            }).on("drop", function () {
                h = a();
                l.removeClass("dragover")
            });
            m.on("dragenter", function () {
                m.addClass("hover");
                p.text(g.langInfo.image.dropImage)
            }).on("dragleave", function () {
                m.removeClass("hover");
                p.text(g.langInfo.image.dragImageHere)
            });
            m.on("drop", function (c) {
                var e = c.originalEvent.dataTransfer, g = k.makeLayoutInfo(c.currentTarget || c.target);
                if (e && e.files && e.files.length) c.preventDefault(), g.editable().focus(), b.insertImages(g, e.files); else {
                    c = function () {
                        g.holder().summernote("insertNode", this)
                    };
                    for (var h = 0, l = e.types.length; h < l; h++) {
                        var m =
                            e.types[h], p = e.getData(m);
                        -1 < m.toLowerCase().indexOf("text") ? g.holder().summernote("pasteHTML", p) : a(p).each(c)
                    }
                }
            }).on("dragover", !1)
        }
    }, aa = function (b) {
        var c;
        this.attach = function (h) {
            if (g.isMSIE && 10 < g.browserVersion || g.isFF) c = a("<div />").attr("contenteditable", !0).css({
                position: "absolute",
                left: -1E5,
                opacity: 0
            }), h.editable().on("keydown", function (e) {
                e.ctrlKey && e.keyCode === E.code.V && (b.invoke("saveRange", h.editable()), c.focus(), setTimeout(function () {
                    var e = h.editable(), g = c[0].firstChild;
                    if (k.isImg(g)) {
                        for (var g =
                            atob(g.src.split(",")[1]), l = new Uint8Array(g.length), m = 0; m < g.length; m++) l[m] = g.charCodeAt(m);
                        g = new Blob([l], {type: "image/png"});
                        g.name = "clipboard.png";
                        b.invoke("restoreRange", e);
                        b.invoke("focus", e);
                        b.insertImages(h, [g])
                    } else g = a("<div />").html(c.html()).html(), b.invoke("restoreRange", e), b.invoke("focus", e), g && b.invoke("pasteHTML", e, g);
                    c.empty()
                }, 0))
            }), h.editable().before(c); else h.editable().on("paste", e)
        };
        var e = function (a) {
            var c = a.originalEvent.clipboardData;
            a = k.makeLayoutInfo(a.currentTarget ||
                a.target);
            var e = a.editable();
            c && c.items && c.items.length && (c = p.head(c.items), "file" === c.kind && -1 !== c.type.indexOf("image/") && b.insertImages(a, [c.getAsFile()]), b.invoke("editor.afterCommand", e))
        }
    }, da = function (b) {
        var c = function (a, b) {
            a.toggleClass("disabled", !b);
            a.attr("disabled", !b)
        }, e = function (a, b) {
            a.on("keypress", function (a) {
                a.keyCode === E.code.ENTER && b.trigger("click")
            })
        };
        this.showLinkDialog = function (b, g, h) {
            return a.Deferred(function (a) {
                var b = g.find(".note-link-dialog"), k = b.find(".note-link-text"),
                    l = b.find(".note-link-url"), m = b.find(".note-link-btn"), p = b.find("input[type=checkbox]");
                b.one("shown.bs.modal", function () {
                    k.val(h.text);
                    k.on("input", function () {
                        c(m, k.val() && l.val());
                        h.text = k.val()
                    });
                    h.url || (h.url = h.text || "http://", c(m, h.text));
                    l.on("input", function () {
                        c(m, k.val() && l.val());
                        h.text || k.val(l.val())
                    }).val(h.url).trigger("focus").trigger("select");
                    e(l, m);
                    e(k, m);
                    p.prop("checked", h.isNewWindow);
                    m.one("click", function (c) {
                        c.preventDefault();
                        a.resolve({
                            range: h.range, url: l.val(), text: k.val(),
                            isNewWindow: p.is(":checked")
                        });
                        b.modal("hide")
                    })
                }).one("hidden.bs.modal", function () {
                    k.off("input keypress");
                    l.off("input keypress");
                    m.off("click");
                    "pending" === a.state() && a.reject()
                }).modal("show")
            }).promise()
        };
        this.show = function (a) {
            var c = a.editor(), e = a.dialog(), g = a.editable(), h = a.popover();
            a = b.invoke("editor.getLinkInfo", g);
            var k = c.data("options");
            b.invoke("editor.saveRange", g);
            this.showLinkDialog(g, e, a).then(function (a) {
                b.invoke("editor.restoreRange", g);
                b.invoke("editor.createLink", g, a, k);
                b.invoke("popover.hide",
                    h)
            }).fail(function () {
                b.invoke("editor.restoreRange", g)
            })
        }
    }, J = function (b) {
        var c = function (a, b) {
            a.on("keypress", function (a) {
                a.keyCode === E.code.ENTER && b.trigger("click")
            })
        };
        this.show = function (a) {
            var c = a.dialog(), e = a.editable();
            b.invoke("editor.saveRange", e);
            this.showImageDialog(e, c).then(function (c) {
                b.invoke("editor.restoreRange", e);
                "string" === typeof c ? b.invoke("editor.insertImage", e, c) : b.insertImages(a, c)
            }).fail(function () {
                b.invoke("editor.restoreRange", e)
            })
        };
        this.showImageDialog = function (b, e) {
            return a.Deferred(function (a) {
                var b =
                        e.find(".note-image-dialog"), g = e.find(".note-image-input"), h = e.find(".note-image-url"),
                    k = e.find(".note-image-btn");
                b.one("shown.bs.modal", function () {
                    g.replaceWith(g.clone().on("change", function () {
                        a.resolve(this.files || this.value);
                        b.modal("hide")
                    }).val(""));
                    k.click(function (c) {
                        c.preventDefault();
                        a.resolve(h.val());
                        b.modal("hide")
                    });
                    h.on("keyup paste", function (a) {
                        a = "paste" === a.type ? a.originalEvent.clipboardData.getData("text") : h.val();
                        k.toggleClass("disabled", !a);
                        k.attr("disabled", !a)
                    }).val("").trigger("focus");
                    c(h, k)
                }).one("hidden.bs.modal", function () {
                    g.off("change");
                    h.off("keyup paste keypress");
                    k.off("click");
                    "pending" === a.state() && a.reject()
                }).modal("show")
            })
        }
    }, ia = function (b) {
        this.showHelpDialog = function (b, c) {
            return a.Deferred(function (a) {
                c.find(".note-help-dialog").one("hidden.bs.modal", function () {
                    a.resolve()
                }).modal("show")
            }).promise()
        };
        this.show = function (a) {
            var c = a.dialog(), e = a.editable();
            b.invoke("editor.saveRange", e, !0);
            this.showHelpDialog(e, c).then(function () {
                b.invoke("editor.restoreRange", e)
            })
        }
    };
    a.summernote = a.summernote || {};
    a.extend(a.summernote, {
        version: "0.6.16", options: {
            width: null,
            height: null,
            minHeight: null,
            maxHeight: null,
            focus: !1,
            tabsize: 4,
            styleWithSpan: !0,
            disableLinkTarget: !1,
            disableDragAndDrop: !1,
            disableResizeEditor: !1,
            disableResizeImage: !1,
            shortcuts: !0,
            textareaAutoSync: !0,
            placeholder: !1,
            prettifyHtml: !0,
            iconPrefix: "fa fa-",
            icons: {
                font: {
                    bold: "bold",
                    italic: "italic",
                    underline: "underline",
                    clear: "eraser",
                    height: "text-height",
                    strikethrough: "strikethrough",
                    superscript: "superscript",
                    subscript: "subscript"
                },
                image: {
                    image: "picture-o",
                    floatLeft: "align-left",
                    floatRight: "align-right",
                    floatNone: "align-justify",
                    shapeRounded: "square",
                    shapeCircle: "circle-o",
                    shapeThumbnail: "picture-o",
                    shapeNone: "times",
                    remove: "trash-o"
                },
                link: {link: "link", unlink: "unlink", edit: "edit"},
                table: {table: "table"},
                hr: {insert: "minus"},
                style: {style: "magic"},
                lists: {unordered: "list-ul", ordered: "list-ol"},
                options: {help: "question", fullscreen: "arrows-alt", codeview: "code"},
                paragraph: {
                    paragraph: "align-left", outdent: "outdent", indent: "indent", left: "align-left",
                    center: "align-center", right: "align-right", justify: "align-justify"
                },
                color: {recent: "font"},
                history: {undo: "undo", redo: "repeat"},
                misc: {check: "check"}
            },
            dialogsInBody: !1,
            codemirror: {mode: "text/html", htmlMode: !0, lineNumbers: !0},
            lang: "en-US",
            direction: null,
            toolbar: [["style", ["style"]], ["font", ["bold", "italic", "underline", "clear"]], ["fontname", ["fontname"]], ["fontsize", ["fontsize"]], ["color", ["color"]], ["para", ["ul", "ol", "paragraph"]], ["height", ["height"]], ["table", ["table"]], ["insert", ["link", "picture", "hr"]],
                ["view", ["fullscreen", "codeview"]], ["help", ["help"]]],
            plugin: {},
            airMode: !1,
            airPopover: [["color", ["color"]], ["font", ["bold", "underline", "clear"]], ["para", ["ul", "paragraph"]], ["table", ["table"]], ["insert", ["link", "picture"]]],
            styleTags: "p blockquote pre h1 h2 h3 h4 h5 h6".split(" "),
            defaultFontName: "Helvetica Neue",
            fontNames: "Arial;Arial Black;Comic Sans MS;Courier New;Helvetica Neue;Helvetica;Impact;Lucida Grande;Tahoma;Times New Roman;Verdana".split(";"),
            fontNamesIgnoreCheck: [],
            fontSizes: "8 9 10 11 12 14 18 24 36".split(" "),
            colors: ["#000000 #424242 #636363 #9C9C94 #CEC6CE #EFEFEF #F7F7F7 #FFFFFF".split(" "), "#FF0000 #FF9C00 #FFFF00 #00FF00 #00FFFF #0000FF #9C00FF #FF00FF".split(" "), "#F7C6CE #FFE7CE #FFEFC6 #D6EFD6 #CEDEE7 #CEE7F7 #D6D6E7 #E7D6DE".split(" "), "#E79C9C #FFC69C #FFE79C #B5D6A5 #A5C6CE #9CC6EF #B5A5D6 #D6A5BD".split(" "), "#E76363 #F7AD6B #FFD663 #94BD7B #73A5AD #6BADDE #8C7BC6 #C67BA5".split(" "), "#CE0000 #E79439 #EFC631 #6BA54A #4A7B8C #3984C6 #634AA5 #A54A7B".split(" "), "#9C0000 #B56308 #BD9400 #397B21 #104A5A #085294 #311873 #731842".split(" "),
                "#630000 #7B3900 #846300 #295218 #083139 #003163 #21104A #4A1031".split(" ")],
            lineHeights: "1.0 1.2 1.4 1.5 1.6 1.8 2.0 3.0".split(" "),
            insertTableMaxSize: {col: 10, row: 10},
            maximumImageFileSize: null,
            oninit: null,
            onfocus: null,
            onblur: null,
            onenter: null,
            onkeyup: null,
            onkeydown: null,
            onImageUpload: null,
            onImageUploadError: null,
            onMediaDelete: null,
            onToolbarClick: null,
            onsubmit: null,
            onCreateLink: function (a) {
                -1 !== a.indexOf("@") && -1 === a.indexOf(":") && (a = "mailto:" + a);
                return a
            },
            keyMap: {
                pc: {
                    ENTER: "insertParagraph",
                    "CTRL+Z": "undo",
                    "CTRL+Y": "redo",
                    TAB: "tab",
                    "SHIFT+TAB": "untab",
                    "CTRL+B": "bold",
                    "CTRL+I": "italic",
                    "CTRL+U": "underline",
                    "CTRL+SHIFT+S": "strikethrough",
                    "CTRL+BACKSLASH": "removeFormat",
                    "CTRL+SHIFT+L": "justifyLeft",
                    "CTRL+SHIFT+E": "justifyCenter",
                    "CTRL+SHIFT+R": "justifyRight",
                    "CTRL+SHIFT+J": "justifyFull",
                    "CTRL+SHIFT+NUM7": "insertUnorderedList",
                    "CTRL+SHIFT+NUM8": "insertOrderedList",
                    "CTRL+LEFTBRACKET": "outdent",
                    "CTRL+RIGHTBRACKET": "indent",
                    "CTRL+NUM0": "formatPara",
                    "CTRL+NUM1": "formatH1",
                    "CTRL+NUM2": "formatH2",
                    "CTRL+NUM3": "formatH3",
                    "CTRL+NUM4": "formatH4",
                    "CTRL+NUM5": "formatH5",
                    "CTRL+NUM6": "formatH6",
                    "CTRL+ENTER": "insertHorizontalRule",
                    "CTRL+K": "showLinkDialog"
                }, mac: {
                    ENTER: "insertParagraph",
                    "CMD+Z": "undo",
                    "CMD+SHIFT+Z": "redo",
                    TAB: "tab",
                    "SHIFT+TAB": "untab",
                    "CMD+B": "bold",
                    "CMD+I": "italic",
                    "CMD+U": "underline",
                    "CMD+SHIFT+S": "strikethrough",
                    "CMD+BACKSLASH": "removeFormat",
                    "CMD+SHIFT+L": "justifyLeft",
                    "CMD+SHIFT+E": "justifyCenter",
                    "CMD+SHIFT+R": "justifyRight",
                    "CMD+SHIFT+J": "justifyFull",
                    "CMD+SHIFT+NUM7": "insertUnorderedList",
                    "CMD+SHIFT+NUM8": "insertOrderedList",
                    "CMD+LEFTBRACKET": "outdent",
                    "CMD+RIGHTBRACKET": "indent",
                    "CMD+NUM0": "formatPara",
                    "CMD+NUM1": "formatH1",
                    "CMD+NUM2": "formatH2",
                    "CMD+NUM3": "formatH3",
                    "CMD+NUM4": "formatH4",
                    "CMD+NUM5": "formatH5",
                    "CMD+NUM6": "formatH6",
                    "CMD+ENTER": "insertHorizontalRule",
                    "CMD+K": "showLinkDialog"
                }
            }
        }, lang: {
            "en-US": {
                font: {
                    bold: "Bold",
                    italic: "Italic",
                    underline: "Underline",
                    clear: "Remove Font Style",
                    height: "Line Height",
                    name: "Font Family",
                    strikethrough: "Strikethrough",
                    subscript: "Subscript",
                    superscript: "Superscript",
                    size: "Font Size"
                },
                image: {
                    image: "Picture",
                    insert: "Insert Image",
                    resizeFull: "Resize Full",
                    resizeHalf: "Resize Half",
                    resizeQuarter: "Resize Quarter",
                    floatLeft: "Float Left",
                    floatRight: "Float Right",
                    floatNone: "Float None",
                    shapeRounded: "Shape: Rounded",
                    shapeCircle: "Shape: Circle",
                    shapeThumbnail: "Shape: Thumbnail",
                    shapeNone: "Shape: None",
                    dragImageHere: "Drag image or text here",
                    dropImage: "Drop image or Text",
                    selectFromFiles: "Select from files",
                    maximumFileSize: "Maximum file size",
                    maximumFileSizeError: "Maximum file size exceeded.",
                    url: "Image URL",
                    remove: "Remove Image"
                },
                link: {
                    link: "Link",
                    insert: "Insert Link",
                    unlink: "Unlink",
                    edit: "Edit",
                    textToDisplay: "Text to display",
                    url: "To what URL should this link go?",
                    openInNewWindow: "Open in new window"
                },
                table: {table: "Table"},
                hr: {insert: "Insert Horizontal Rule"},
                style: {
                    style: "Style",
                    normal: "Normal",
                    blockquote: "Quote",
                    pre: "Code",
                    h1: "Header 1",
                    h2: "Header 2",
                    h3: "Header 3",
                    h4: "Header 4",
                    h5: "Header 5",
                    h6: "Header 6"
                },
                lists: {unordered: "Unordered list", ordered: "Ordered list"},
                options: {
                    help: "Help",
                    fullscreen: "Full Screen", codeview: "Code View"
                },
                paragraph: {
                    paragraph: "Paragraph",
                    outdent: "Outdent",
                    indent: "Indent",
                    left: "Align left",
                    center: "Align center",
                    right: "Align right",
                    justify: "Justify full"
                },
                color: {
                    recent: "Recent Color",
                    more: "More Color",
                    background: "Background Color",
                    foreground: "Foreground Color",
                    transparent: "Transparent",
                    setTransparent: "Set transparent",
                    reset: "Reset",
                    resetToDefault: "Reset to default"
                },
                shortcut: {
                    shortcuts: "Keyboard shortcuts",
                    close: "Close",
                    textFormatting: "Text formatting",
                    action: "Action",
                    paragraphFormatting: "Paragraph formatting",
                    documentStyle: "Document Style",
                    extraKeys: "Extra keys"
                },
                history: {undo: "Undo", redo: "Redo"}
            }
        }
    });
    var O = new function () {
        var b = function (a, b) {
            var c = b.event, e = b.value, g = b.title, h = b.className, k = b.dropdown, l = b.hide;
            return (k ? '<div class="btn-group' + (h ? " " + h : "") + '">' : "") + '<button type="button" class="btn btn-default btn-sm' + (!k && h ? " " + h : "") + (k ? " dropdown-toggle" : "") + '"' + (k ? ' data-toggle="dropdown"' : "") + (g ? ' title="' + g + '"' : "") + (c ? ' data-event="' + c + '"' :
                "") + (e ? " data-value='" + e + "'" : "") + (l ? " data-hide='" + l + "'" : "") + ' tabindex="-1">' + a + (k ? ' <span class="caret"></span>' : "") + "</button>" + (k || "") + (k ? "</div>" : "")
        }, c = function (a, c) {
            return b('<i class="' + a + '"></i>', c)
        }, e = function (b, c) {
            var f = a('<div class="' + b + ' popover bottom in" style="display: none;"><div class="arrow"></div><div class="popover-content"></div></div>');
            f.find(".popover-content").append(c);
            return f
        }, h = function (a, b, c, e) {
            return '<div class="' + a + ' modal" aria-hidden="false"><div class="modal-dialog"><div class="modal-content">' +
                (b ? '<div class="modal-header"><button type="button" class="close" aria-hidden="true" tabindex="-1">&times;</button><h4 class="modal-title">' + b + "</h4></div>" : "") + '<form class="note-modal-form"><div class="modal-body">' + c + "</div>" + (e ? '<div class="modal-footer">' + e + "</div>" : "") + "</form></div></div></div>"
        }, m = function (a, b, c) {
            b = "dropdown-menu" + (b ? " " + b : "");
            c = c || "ul";
            a instanceof Array && (a = a.join(""));
            return "<" + c + ' class="' + b + '">' + a + "</" + c + ">"
        }, q = {
            picture: function (a, b) {
                return c(b.iconPrefix + b.icons.image.image,
                    {event: "showImageDialog", title: a.image.image, hide: !0})
            }, link: function (a, b) {
                return c(b.iconPrefix + b.icons.link.link, {event: "showLinkDialog", title: a.link.link, hide: !0})
            }, table: function (a, b) {
                return c(b.iconPrefix + b.icons.table.table, {
                    title: a.table.table,
                    dropdown: m('<div class="note-dimension-picker">;<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>;<div class="note-dimension-picker-highlighted"></div>;<div class="note-dimension-picker-unhighlighted"></div>;</div>;<div class="note-dimension-display"> 1 x 1 </div>'.split(";"),
                        "note-table")
                })
            }, style: function (a, b) {
                var f = b.styleTags.reduce(function (b, c) {
                    var f = a.style["p" === c ? "normal" : c];
                    return b + '<li><a data-event="formatBlock" href="#" data-value="' + c + '">' + ("p" === c || "pre" === c ? f : "<" + c + ">" + f + "</" + c + ">") + "</a></li>"
                }, "");
                return c(b.iconPrefix + b.icons.style.style, {title: a.style.style, dropdown: m(f)})
            }, fontname: function (a, c) {
                var f = [], e = c.fontNames.reduce(function (a, b) {
                        if (!g.isFontInstalled(b) && !p.contains(c.fontNamesIgnoreCheck, b)) return a;
                        f.push(b);
                        return a + '<li><a data-event="fontName" href="#" data-value="' +
                            b + '" style="font-family:\'' + b + '\'"><i class="' + c.iconPrefix + c.icons.misc.check + '"></i> ' + b + "</a></li>"
                    }, ""),
                    h = '<span class="note-current-fontname">' + (g.isFontInstalled(c.defaultFontName) ? c.defaultFontName : f[0]) + "</span>";
                return b(h, {title: a.font.name, className: "note-fontname", dropdown: m(e, "note-check")})
            }, fontsize: function (a, c) {
                var f = c.fontSizes.reduce(function (a, b) {
                        return a + '<li><a data-event="fontSize" href="#" data-value="' + b + '"><i class="' + c.iconPrefix + c.icons.misc.check + '"></i> ' + b + "</a></li>"
                    },
                    "");
                return b('<span class="note-current-fontsize">11</span>', {
                    title: a.font.size,
                    className: "note-fontsize",
                    dropdown: m(f, "note-check")
                })
            }, color: function (a, c) {
                var f = b('<i class="' + c.iconPrefix + c.icons.color.recent + '" style="color:black;background-color:yellow;"></i>', {
                    className: "note-recent-color",
                    title: a.color.recent,
                    event: "color",
                    value: '{"backColor":"yellow"}'
                }), e = b("", {
                    title: a.color.more,
                    dropdown: m(['<li><div class="btn-group">', '<div class="note-palette-title">' + a.color.background + "</div>", '<div class="note-color-reset" data-event="backColor"',
                        ' data-value="inherit" title="' + a.color.transparent + '">' + a.color.setTransparent + "</div>", '<div class="note-color-palette" data-target-event="backColor"></div>', '</div><div class="btn-group">', '<div class="note-palette-title">' + a.color.foreground + "</div>", '<div class="note-color-reset" data-event="foreColor" data-value="inherit" title="' + a.color.reset + '">', a.color.resetToDefault, "</div>", '<div class="note-color-palette" data-target-event="foreColor"></div>', "</div></li>"])
                });
                return f + e
            }, bold: function (a,
                               b) {
                return c(b.iconPrefix + b.icons.font.bold, {event: "bold", title: a.font.bold})
            }, italic: function (a, b) {
                return c(b.iconPrefix + b.icons.font.italic, {event: "italic", title: a.font.italic})
            }, underline: function (a, b) {
                return c(b.iconPrefix + b.icons.font.underline, {event: "underline", title: a.font.underline})
            }, strikethrough: function (a, b) {
                return c(b.iconPrefix + b.icons.font.strikethrough, {
                    event: "strikethrough",
                    title: a.font.strikethrough
                })
            }, superscript: function (a, b) {
                return c(b.iconPrefix + b.icons.font.superscript, {
                    event: "superscript",
                    title: a.font.superscript
                })
            }, subscript: function (a, b) {
                return c(b.iconPrefix + b.icons.font.subscript, {event: "subscript", title: a.font.subscript})
            }, clear: function (a, b) {
                return c(b.iconPrefix + b.icons.font.clear, {event: "removeFormat", title: a.font.clear})
            }, ul: function (a, b) {
                return c(b.iconPrefix + b.icons.lists.unordered, {
                    event: "insertUnorderedList",
                    title: a.lists.unordered
                })
            }, ol: function (a, b) {
                return c(b.iconPrefix + b.icons.lists.ordered, {event: "insertOrderedList", title: a.lists.ordered})
            }, paragraph: function (a, b) {
                var f =
                        c(b.iconPrefix + b.icons.paragraph.left, {title: a.paragraph.left, event: "justifyLeft"}),
                    e = c(b.iconPrefix + b.icons.paragraph.center, {title: a.paragraph.center, event: "justifyCenter"}),
                    g = c(b.iconPrefix + b.icons.paragraph.right, {title: a.paragraph.right, event: "justifyRight"}),
                    h = c(b.iconPrefix + b.icons.paragraph.justify, {title: a.paragraph.justify, event: "justifyFull"}),
                    k = c(b.iconPrefix + b.icons.paragraph.outdent, {title: a.paragraph.outdent, event: "outdent"}),
                    l = c(b.iconPrefix + b.icons.paragraph.indent, {
                        title: a.paragraph.indent,
                        event: "indent"
                    });
                return c(b.iconPrefix + b.icons.paragraph.paragraph, {
                    title: a.paragraph.paragraph,
                    dropdown: m(['<div class="note-align btn-group">', f + e + g + h, '</div><div class="note-list btn-group">', l + k, "</div>"], "", "div")
                })
            }, height: function (a, b) {
                var f = b.lineHeights.reduce(function (a, c) {
                    return a + '<li><a data-event="lineHeight" href="#" data-value="' + parseFloat(c) + '"><i class="' + b.iconPrefix + b.icons.misc.check + '"></i> ' + c + "</a></li>"
                }, "");
                return c(b.iconPrefix + b.icons.font.height, {
                    title: a.font.height,
                    dropdown: m(f, "note-check")
                })
            }, help: function (a, b) {
                return c(b.iconPrefix + b.icons.options.help, {
                    event: "showHelpDialog",
                    title: a.options.help,
                    hide: !0
                })
            }, fullscreen: function (a, b) {
                return c(b.iconPrefix + b.icons.options.fullscreen, {event: "fullscreen", title: a.options.fullscreen})
            }, codeview: function (a, b) {
                return c(b.iconPrefix + b.icons.options.codeview, {event: "codeview", title: a.options.codeview})
            }, undo: function (a, b) {
                return c(b.iconPrefix + b.icons.history.undo, {event: "undo", title: a.history.undo})
            }, redo: function (a,
                               b) {
                return c(b.iconPrefix + b.icons.history.redo, {event: "redo", title: a.history.redo})
            }, hr: function (a, b) {
                return c(b.iconPrefix + b.icons.hr.insert, {event: "insertHorizontalRule", title: a.hr.insert})
            }
        }, s = function (g, h) {
            var f = function () {
                    for (var b = a("<div />"), c = 0, f = h.airPopover.length; c < f; c++) {
                        for (var k = h.airPopover[c], l = a('<div class="note-' + k[0] + ' btn-group">'), m = 0, p = k[1].length; m < p; m++) {
                            var s = a(q[k[1][m]](g, h));
                            s.attr("data-name", k[1][m]);
                            l.append(s)
                        }
                        b.append(l)
                    }
                    return e("note-air-popover", b.children())
                },
                k = a('<div class="note-popover" />');
            k.append(function () {
                var a = c(h.iconPrefix + h.icons.link.edit, {title: g.link.edit, event: "showLinkDialog", hide: !0}),
                    b = c(h.iconPrefix + h.icons.link.unlink, {title: g.link.unlink, event: "unlink"});
                return e("note-link-popover", '<a href="http://www.google.com" target="_blank">www.google.com</a>&nbsp;&nbsp;<div class="note-insert btn-group">' + a + b + "</div>")
            }());
            k.append(function () {
                var a = b('<span class="note-fontsize-10">100%</span>', {
                        title: g.image.resizeFull,
                        event: "resize",
                        value: "1"
                    }),
                    f = b('<span class="note-fontsize-10">50%</span>', {
                        title: g.image.resizeHalf,
                        event: "resize",
                        value: "0.5"
                    }), k = b('<span class="note-fontsize-10">25%</span>', {
                        title: g.image.resizeQuarter,
                        event: "resize",
                        value: "0.25"
                    }), l = c(h.iconPrefix + h.icons.image.floatLeft, {
                        title: g.image.floatLeft,
                        event: "floatMe",
                        value: "left"
                    }), m = c(h.iconPrefix + h.icons.image.floatRight, {
                        title: g.image.floatRight,
                        event: "floatMe",
                        value: "right"
                    }), p = c(h.iconPrefix + h.icons.image.floatNone, {
                        title: g.image.floatNone,
                        event: "floatMe",
                        value: "none"
                    }),
                    q = c(h.iconPrefix + h.icons.image.shapeRounded, {
                        title: g.image.shapeRounded,
                        event: "imageShape",
                        value: "img-rounded"
                    }), s = c(h.iconPrefix + h.icons.image.shapeCircle, {
                        title: g.image.shapeCircle,
                        event: "imageShape",
                        value: "img-circle"
                    }), t = c(h.iconPrefix + h.icons.image.shapeThumbnail, {
                        title: g.image.shapeThumbnail,
                        event: "imageShape",
                        value: "img-thumbnail"
                    }), r = c(h.iconPrefix + h.icons.image.shapeNone, {
                        title: g.image.shapeNone,
                        event: "imageShape",
                        value: ""
                    }), D = c(h.iconPrefix + h.icons.image.remove, {
                        title: g.image.remove, event: "removeMedia",
                        value: "none"
                    });
                return e("note-image-popover", (h.disableResizeImage ? "" : '<div class="btn-group">' + a + f + k + "</div>") + '<div class="btn-group">' + l + m + p + '</div><br><div class="btn-group">' + q + s + t + r + '</div><div class="btn-group">' + D + "</div>")
            }());
            h.airMode && k.append(f());
            return k
        }, t = function (a) {
            return '<div class="note-handle"><div class="note-control-selection"><div class="note-control-selection-bg"></div><div class="note-control-holder note-control-nw"></div><div class="note-control-holder note-control-ne"></div><div class="note-control-holder note-control-sw"></div><div class="' +
                (a.disableResizeImage ? "note-control-holder" : "note-control-sizing") + ' note-control-se"></div>' + (a.disableResizeImage ? "" : '<div class="note-control-selection-info"></div>') + "</div></div>"
        }, r = function (a, b) {
            var c = [], e;
            for (e in b) b.hasOwnProperty(e) && c.push('<div class="note-shortcut-col col-xs-6 note-shortcut-key">' + b[e].kbd + '</div><div class="note-shortcut-col col-xs-6 note-shortcut-name">' + b[e].text + "</div>");
            return '<div class="note-shortcut-row row"><div class="note-shortcut-col col-xs-6 note-shortcut-title col-xs-offset-6">' +
                a + '</div></div><div class="note-shortcut-row row">' + c.join('</div><div class="note-shortcut-row row">') + "</div>"
        }, D = function (a, b) {
            var c = b.extraKeys, e = [], g;
            for (g in c) c.hasOwnProperty(g) && e.push({kbd: g, text: c[g]});
            return r(a.shortcut.extraKeys, e)
        }, v = function (a, b) {
            var c = '<div class="note-shortcut note-shortcut-col col-sm-6 col-xs-12">' + r(a.shortcut.action, [{
                kbd: "\u2318 + Z",
                text: a.history.undo
            }, {kbd: "\u2318 + \u21e7 + Z", text: a.history.redo}, {kbd: "\u2318 + ]", text: a.paragraph.indent}, {
                kbd: "\u2318 + [",
                text: a.paragraph.outdent
            }, {
                kbd: "\u2318 + ENTER",
                text: a.hr.insert
            }]) + '</div><div class="note-shortcut note-shortcut-col col-sm-6 col-xs-12">', e;
            e = r(a.shortcut.textFormatting, [{kbd: "\u2318 + B", text: a.font.bold}, {
                kbd: "\u2318 + I",
                text: a.font.italic
            }, {kbd: "\u2318 + U", text: a.font.underline}, {kbd: "\u2318 + \\", text: a.font.clear}]);
            c = c + e + "</div>";
            e = '<div class="note-shortcut note-shortcut-col col-sm-6 col-xs-12">' + r(a.shortcut.documentStyle, [{
                kbd: "\u2318 + NUM0",
                text: a.style.normal
            }, {
                kbd: "\u2318 + NUM1",
                text: a.style.h1
            }, {kbd: "\u2318 + NUM2", text: a.style.h2}, {
                kbd: "\u2318 + NUM3",
                text: a.style.h3
            }, {kbd: "\u2318 + NUM4", text: a.style.h4}, {
                kbd: "\u2318 + NUM5",
                text: a.style.h5
            }, {
                kbd: "\u2318 + NUM6",
                text: a.style.h6
            }]) + '</div><div class="note-shortcut note-shortcut-col col-sm-6 col-xs-12">';
            var g;
            g = r(a.shortcut.paragraphFormatting, [{
                kbd: "\u2318 + \u21e7 + L",
                text: a.paragraph.left
            }, {kbd: "\u2318 + \u21e7 + E", text: a.paragraph.center}, {
                kbd: "\u2318 + \u21e7 + R",
                text: a.paragraph.right
            }, {
                kbd: "\u2318 + \u21e7 + J",
                text: a.paragraph.justify
            }, {kbd: "\u2318 + \u21e7 + NUM7", text: a.lists.ordered}, {
                kbd: "\u2318 + \u21e7 + NUM8",
                text: a.lists.unordered
            }]);
            c = [c, e + g + "</div>"];
            b.extraKeys && c.push('<div class="note-shortcut note-shortcut-col col-sm-6 col-xs-12">' + D(a, b) + "</div>");
            return '<div class="note-shortcut-row row">' + c.join('</div><div class="note-shortcut-row row">') + "</div>"
        }, z = {
            image: function (a, b) {
                var c = "";
                b.maximumImageFileSize && (c = Math.floor(Math.log(b.maximumImageFileSize) / Math.log(1024)), c = 1 * (b.maximumImageFileSize /
                    Math.pow(1024, c)).toFixed(2) + " " + " KMGTP"[c] + "B", c = "<small>" + a.image.maximumFileSize + " : " + c + "</small>");
                return h("note-image-dialog", a.image.insert, '<div class="form-group row note-group-select-from-files"><label>' + a.image.selectFromFiles + '</label><input class="note-image-input form-control" type="file" name="files" accept="image/*" multiple="multiple" />' + c + '</div><div class="form-group row"><label>' + a.image.url + '</label><input class="note-image-url form-control col-md-12" type="text" /></div>',
                    '<button href="#" class="btn btn-primary note-image-btn disabled" disabled>' + a.image.insert + "</button>")
            }, link: function (a, b) {
                return h("note-link-dialog", a.link.insert, '<div class="form-group row"><label>' + a.link.textToDisplay + '</label><input class="note-link-text form-control col-md-12" type="text" /></div><div class="form-group row"><label>' + a.link.url + '</label><input class="note-link-url form-control col-md-12" type="text" value="http://" /></div>' + (b.disableLinkTarget ? "" : '<div class="checkbox"><label><input type="checkbox" checked> ' +
                    a.link.openInNewWindow + "</label></div>"), '<button href="#" class="btn btn-primary note-link-btn disabled" disabled>' + a.link.insert + "</button>")
            }, help: function (a, b) {
                var c = '<a class="modal-close pull-right" aria-hidden="true" tabindex="-1">' + a.shortcut.close + '</a><div class="title">' + a.shortcut.shortcuts + "</div>",
                    e;
                e = g.isMac ? v(a, b) : v(a, b).replace(/\u2318/g, "Ctrl").replace(/\u21e7/g, "Shift");
                return h("note-help-dialog", "", c + e + '<p class="text-center"><a href="//summernote.org/" target="_blank">Summernote 0.6.16</a> \u00b7 <a href="//github.com/summernote/summernote" target="_blank">Project</a> \u00b7 <a href="//github.com/summernote/summernote/issues" target="_blank">Issues</a></p>',
                    "")
            }
        }, R = function (b, c) {
            var e = "";
            a.each(z, function (a, g) {
                e += g(b, c)
            });
            return '<div class="note-dialog">' + e + "</div>"
        }, Q = function (b, c, e) {
            var h = l.invertObject(c);
            b.find("button").each(function (b, c) {
                var e = a(c), f = h[e.data("event")];
                f && e.attr("title", function (a, b) {
                    var c;
                    c = f;
                    g.isMac && (c = c.replace("CMD", "\u2318").replace("SHIFT", "\u21e7"));
                    c = c.replace("BACKSLASH", "\\").replace("SLASH", "/").replace("LEFTBRACKET", "[").replace("RIGHTBRACKET", "]");
                    return b + " (" + c + ")"
                })
            }).tooltip({
                container: "body", trigger: "hover",
                placement: e || "top"
            }).on("click", function () {
                a(this).tooltip("hide")
            })
        }, V = function (b, c) {
            var e = c.colors;
            b.find(".note-color-palette").each(function () {
                for (var b = a(this), c = b.attr("data-target-event"), g = [], h = 0, k = e.length; h < k; h++) {
                    for (var l = e[h], m = [], p = 0, q = l.length; p < q; p++) {
                        var s = l[p];
                        m.push(['<button type="button" class="note-color-btn" style="background-color:', s, ';" data-event="', c, '" data-value="', s, '" title="', s, '" data-toggle="button" tabindex="-1"></button>'].join(""))
                    }
                    g.push('<div class="note-color-row">' +
                        m.join("") + "</div>")
                }
                b.html(g.join(""))
            })
        };
        this.createLayoutByAirMode = function (b, c) {
            var e = c.langInfo, h = c.keyMap[g.isMac ? "mac" : "pc"], k = l.uniqueId();
            b.addClass("note-air-editor note-editable panel-body");
            b.attr({id: "note-editor-" + k, contentEditable: !0});
            var m = document.body, p = a(s(e, c));
            p.addClass("note-air-layout");
            p.attr("id", "note-popover-" + k);
            p.appendTo(m);
            Q(p, h);
            V(p, c);
            h = a(t(c));
            h.addClass("note-air-layout");
            h.attr("id", "note-handle-" + k);
            h.appendTo(m);
            e = a(R(e, c));
            e.addClass("note-air-layout");
            e.attr("id",
                "note-dialog-" + k);
            e.find("button.close, a.modal-close").click(function () {
                a(this).closest(".modal").modal("hide")
            });
            e.appendTo(m)
        };
        this.createLayoutByFrame = function (b, c) {
            var e = c.langInfo, h = a('<div class="note-editor panel panel-default" />');
            c.width && h.width(c.width);
            0 < c.height && a('<div class="note-statusbar">' + (c.disableResizeEditor ? "" : '<div class="note-resizebar"><div class="note-icon-bar"></div><div class="note-icon-bar"></div><div class="note-icon-bar"></div></div>') + "</div>").prependTo(h);
            var l =
                    a('<div class="note-editing-area" />'), m = !b.is(":disabled"),
                m = a('<div class="note-editable panel-body" contentEditable="' + m + '"></div>').prependTo(l);
            c.height && m.height(c.height);
            c.direction && m.attr("dir", c.direction);
            var p = b.attr("placeholder") || c.placeholder;
            p && m.attr("data-placeholder", p);
            m.html(k.html(b) || k.emptyPara);
            a('<textarea class="note-codable"></textarea>').prependTo(l);
            m = a(s(e, c)).prependTo(l);
            V(m, c);
            Q(m, v);
            a(t(c)).prependTo(l);
            l.prependTo(h);
            l = a('<div class="note-toolbar panel-heading" />');
            v = 0;
            for (m = c.toolbar.length; v < m; v++) {
                for (var p = c.toolbar[v][1], r = a('<div class="note-' + c.toolbar[v][0] + ' btn-group" />'), w = 0, D = p.length; w < D; w++) {
                    var x = q[p[w]];
                    a.isFunction(x) && (x = a(x(e, c)), x.attr("data-name", p[w]), r.append(x))
                }
                l.append(r)
            }
            var v = c.keyMap[g.isMac ? "mac" : "pc"];
            V(l, c);
            Q(l, v, "bottom");
            l.prependTo(h);
            a('<div class="note-dropzone"><div class="note-dropzone-message"></div></div>').prependTo(h);
            l = c.dialogsInBody ? a(document.body) : h;
            a(R(e, c)).prependTo(l).find("button.close, a.modal-close").click(function () {
                a(this).closest(".modal").modal("hide")
            });
            h.insertAfter(b);
            b.hide()
        };
        this.hasNoteEditor = function (a) {
            return 0 < this.noteEditorFromHolder(a).length
        };
        this.noteEditorFromHolder = function (b) {
            return b.hasClass("note-air-editor") ? b : b.next().hasClass("note-editor") ? b.next() : a()
        };
        this.createLayout = function (a, b) {
            b.airMode ? this.createLayoutByAirMode(a, b) : this.createLayoutByFrame(a, b)
        };
        this.layoutInfoFromHolder = function (a) {
            var b = this.noteEditorFromHolder(a);
            if (b.length) return b.data("holder", a), k.buildLayoutInfo(b)
        };
        this.removeLayout = function (a, b, c) {
            c.airMode ?
                (a.removeClass("note-air-editor note-editable").removeAttr("id contentEditable"), b.popover().remove(), b.handle().remove(), b.dialog().remove()) : (a.html(b.editable().html()), c.dialogsInBody && b.dialog().remove(), b.editor().remove(), a.show())
        };
        this.getTemplate = function () {
            return {button: b, iconButton: c, dialog: h}
        };
        this.addButtonInfo = function (a, b) {
            q[a] = b
        };
        this.addDialogInfo = function (a, b) {
            z[a] = b
        }
    }, U = new function () {
        var b = this, c = this.modules = {
            editor: new H(this),
            toolbar: new V(this),
            statusbar: new R(this),
            popover: new T(this),
            handle: new M(this),
            fullscreen: new N(this),
            codeview: new Y(this),
            dragAndDrop: new v(this),
            clipboard: new aa(this),
            linkDialog: new da(this),
            imageDialog: new J(this),
            helpDialog: new ia(this)
        };
        this.invoke = function () {
            var a = p.head(p.from(arguments)), b = p.tail(p.from(arguments)), c = a.split("."), e = 1 < c.length,
                a = e && p.head(c), c = e ? p.last(c) : p.head(c), a = this.getModule(a);
            return (c = a[c]) && c.apply(a, b)
        };
        this.getModule = function (a) {
            return this.modules[a] || this.modules.editor
        };
        var e = this.bindCustomEvent = function (a, b, c) {
            return function () {
                var e =
                    b[l.namespaceToCamel(c, "on")];
                e && e.apply(a[0], arguments);
                return a.trigger("summernote." + c, arguments)
            }
        };
        this.insertImages = function (b, g) {
            var h = b.editor(), k = b.editable(), l = b.holder(), m = k.data("callbacks"), p = h.data("options");
            m.onImageUpload ? e(l, m, "image.upload")(g) : a.each(g, function (a, b) {
                var g = b.name;
                p.maximumImageFileSize && p.maximumImageFileSize < b.size ? e(l, m, "image.upload.error")(p.langInfo.image.maximumFileSizeError) : L.readFileAsDataURL(b).then(function (a) {
                    c.editor.insertImage(k, a, g)
                }).fail(function () {
                    e(l,
                        m, "image.upload.error")(p.langInfo.image.maximumFileSizeError)
                })
            })
        };
        var h = {
            showLinkDialog: function (a) {
                c.linkDialog.show(a)
            }, showImageDialog: function (a) {
                c.imageDialog.show(a)
            }, showHelpDialog: function (a) {
                c.helpDialog.show(a)
            }, fullscreen: function (a) {
                c.fullscreen.toggle(a)
            }, codeview: function (a) {
                c.codeview.toggle(a)
            }
        }, m = function (a) {
            k.isImg(a.target) && a.preventDefault()
        }, q = function (a) {
            var b = k.makeLayoutInfo(a.currentTarget || a.target);
            c.editor.removeBogus(b.editable());
            s(a)
        };
        this.updateStyleInfo = function (a,
                                         b) {
            if (a) {
                var e = b.editor().data("options").airMode;
                e || c.toolbar.update(b.toolbar(), a);
                c.popover.update(b.popover(), a, e);
                c.handle.update(b.handle(), a, e)
            }
        };
        var s = function (a) {
            var e = a.target;
            setTimeout(function () {
                var a = k.makeLayoutInfo(e), g = c.editor.currentStyle(e);
                b.updateStyleInfo(g, a)
            }, 0)
        }, t = function (a) {
            a = k.makeLayoutInfo(a.currentTarget || a.target);
            c.popover.hide(a.popover());
            c.handle.hide(a.handle())
        }, r = function (b) {
            a(b.target).closest("[data-event]").length && b.preventDefault()
        }, D = function (b) {
            var e =
                a(b.target).closest("[data-event]");
            if (e.length) {
                var g = e.attr("data-event"), l = e.attr("data-value"), m = e.attr("data-hide"),
                    q = k.makeLayoutInfo(b.target), t;
                -1 !== a.inArray(g, ["resize", "floatMe", "removeMedia", "imageShape"]) && (t = q.handle().find(".note-control-selection"), t = a(t.data("target")));
                m && e.parents(".popover").hide();
                if (a.isFunction(a.summernote.pluginEvents[g])) a.summernote.pluginEvents[g](b, c.editor, q, l); else c.editor[g] ? (m = q.editable(), m.focus(), c.editor[g](m, l, t), b.preventDefault()) : h[g] && (h[g].call(this,
                    q), b.preventDefault());
                if (-1 !== a.inArray(g, ["backColor", "foreColor"])) {
                    var f = q.editor().data("options", f);
                    (f.airMode ? c.popover : c.toolbar).updateRecentColor(p.head(e), g, l)
                }
                s(b)
            }
        };
        this.bindKeyMap = function (b, e) {
            var g = b.editor(), k = b.editable();
            k.on("keydown", function (l) {
                var m = [];
                l.metaKey && m.push("CMD");
                l.ctrlKey && !l.altKey && m.push("CTRL");
                l.shiftKey && m.push("SHIFT");
                var p = E.nameFromCode[l.keyCode];
                p && m.push(p);
                p = m.join("+");
                if (m = e[p]) {
                    p = a.summernote.pluginEvents[p];
                    if (a.isFunction(p) && p(l, c.editor, b)) return !1;
                    p = a.summernote.pluginEvents[m];
                    a.isFunction(p) ? p(l, c.editor, b) : c.editor[m] ? (c.editor[m](k, g.data("options")), l.preventDefault()) : h[m] && (h[m].call(this, b), l.preventDefault())
                } else E.isEdit(l.keyCode) && c.editor.afterCommand(k)
            })
        };
        this.attach = function (b, e) {
            e.shortcuts && !isMobile() && this.bindKeyMap(b, e.keyMap[g.isMac ? "mac" : "pc"]);
            b.editable().on("mousedown", m);
            b.editable().on("keyup mouseup", q);
            b.editable().on("scroll", t);
            c.clipboard.attach(b, e);
            c.handle.attach(b, e);
            b.popover().on("click", D);
            b.popover().on("mousedown",
                r);
            c.dragAndDrop.attach(b, e);
            e.airMode || (b.toolbar().on("click", D), b.toolbar().on("mousedown", r), c.statusbar.attach(b, e));
            (e.airMode ? b.popover() : b.toolbar()).find(".note-dimension-picker-mousecatcher").css({
                width: e.insertTableMaxSize.col + "em",
                height: e.insertTableMaxSize.row + "em"
            }).on("mousemove", function (b) {
                var c, g = a(b.target.parentNode), h = g.next(), f = g.find(".note-dimension-picker-mousecatcher"),
                    k = g.find(".note-dimension-picker-highlighted"),
                    g = g.find(".note-dimension-picker-unhighlighted");
                if (void 0 ===
                    b.offsetX) {
                    var l = a(b.target).offset();
                    c = b.pageX - l.left;
                    b = b.pageY - l.top
                } else c = b.offsetX, b = b.offsetY;
                c = Math.ceil(c / 18) || 1;
                b = Math.ceil(b / 18) || 1;
                k.css({width: c + "em", height: b + "em"});
                f.attr("data-value", c + "x" + b);
                3 < c && c < e.insertTableMaxSize.col && g.css({width: c + 1 + "em"});
                3 < b && b < e.insertTableMaxSize.row && g.css({height: b + 1 + "em"});
                h.html(c + " x " + b)
            });
            b.editor().data("options", e);
            g.isMSIE || setTimeout(function () {
                document.execCommand("styleWithCSS", 0, e.styleWithSpan)
            }, 0);
            var h = new C(b.editable());
            b.editable().data("NoteHistory",
                h);
            b.editable().data("callbacks", {
                onInit: e.onInit,
                onFocus: e.onFocus,
                onBlur: e.onBlur,
                onKeydown: e.onKeydown,
                onKeyup: e.onKeyup,
                onMousedown: e.onMousedown,
                onEnter: e.onEnter,
                onPaste: e.onPaste,
                onBeforeCommand: e.onBeforeCommand,
                onChange: e.onChange,
                onImageUpload: e.onImageUpload,
                onImageUploadError: e.onImageUploadError,
                onMediaDelete: e.onMediaDelete,
                onToolbarClick: e.onToolbarClick
            });
            h = c.editor.styleFromNode(b.editable());
            this.updateStyleInfo(h, b)
        };
        this.attachCustomEvent = function (b, c) {
            var h = b.holder(), l = b.editable(),
                m = l.data("callbacks");
            l.focus(e(h, m, "focus"));
            l.blur(e(h, m, "blur"));
            l.keydown(function (a) {
                a.keyCode === E.code.ENTER && e(h, m, "enter").call(this, a);
                e(h, m, "keydown").call(this, a)
            });
            l.keyup(e(h, m, "keyup"));
            l.on("mousedown", e(h, m, "mousedown"));
            l.on("mouseup", e(h, m, "mouseup"));
            l.on("scroll", e(h, m, "scroll"));
            l.on("paste", e(h, m, "paste"));
            l.on(g.isMSIE ? "DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted" : "input", function () {
                e(h, m, "change")(l.html(), l)
            });
            c.airMode || (b.toolbar().click(e(h, m, "toolbar.click")),
                b.popover().click(e(h, m, "popover.click")));
            k.isTextarea(p.head(h)) && h.closest("form").submit(function (a) {
                b.holder().val(b.holder().code());
                e(h, m, "submit").call(this, a, h.code())
            });
            if (k.isTextarea(p.head(h)) && c.textareaAutoSync) h.on("summernote.change", function () {
                b.holder().val(b.holder().code())
            });
            e(h, m, "init")(b);
            for (var q = 0, s = a.summernote.plugins.length; q < s; q++) a.isFunction(a.summernote.plugins[q].init) && a.summernote.plugins[q].init(b)
        };
        this.detach = function (a, b) {
            a.holder().off();
            a.editable().off();
            a.popover().off();
            a.handle().off();
            a.dialog().off();
            b.airMode || (a.dropzone().off(), a.toolbar().off(), a.statusbar().off())
        }
    };
    a.extend(a.summernote, {
        renderer: O,
        eventHandler: U,
        core: {agent: g, list: p, dom: k, range: s},
        pluginEvents: {},
        plugins: []
    });
    a.summernote.addPlugin = function (b) {
        a.summernote.plugins.push(b);
        b.buttons && a.each(b.buttons, function (a, b) {
            O.addButtonInfo(a, b)
        });
        b.dialogs && a.each(b.dialogs, function (a, b) {
            O.addDialogInfo(a, b)
        });
        b.events && a.each(b.events, function (b, c) {
            a.summernote.pluginEvents[b] =
                c
        });
        b.langs && a.each(b.langs, function (b, c) {
            a.summernote.lang[b] && a.extend(a.summernote.lang[b], c)
        });
        b.options && a.extend(a.summernote.options, b.options)
    };
    a.fn.extend({
        summernote: function () {
            var b = a.type(p.head(arguments)), c = "string" === b, e = (b = "object" === b) ? p.head(arguments) : {},
                e = a.extend({}, a.summernote.options, e);
            e.icons = a.extend({}, a.summernote.options.icons, e.icons);
            e.langInfo = a.extend(!0, {}, a.summernote.lang["en-US"], a.summernote.lang[e.lang]);
            if (!c && b) for (var b = 0, g = a.summernote.plugins.length; b <
            g; b++) {
                var h = a.summernote.plugins[b];
                e.plugin[h.name] && (a.summernote.plugins[b] = a.extend(!0, h, e.plugin[h.name]))
            }
            this.each(function (b, c) {
                var g = a(c);
                if (!O.hasNoteEditor(g)) {
                    O.createLayout(g, e);
                    var h = O.layoutInfoFromHolder(g);
                    g.data("layoutInfo", h);
                    U.attach(h, e);
                    U.attachCustomEvent(h, e)
                }
            });
            b = this.first();
            if (b.length) {
                b = O.layoutInfoFromHolder(b);
                if (c) return c = p.head(p.from(arguments)), g = p.tail(p.from(arguments)), c = [c, b.editable()].concat(g), U.invoke.apply(U, c);
                e.focus && b.editable().focus()
            }
            return this
        },
        code: function (b) {
            if (void 0 === b) {
                var c = this.first();
                if (!c.length) return;
                var e = O.layoutInfoFromHolder(c), g = e && e.editable();
                return g && g.length ? (c = U.invoke("codeview.isActivated", e), U.invoke("codeview.sync", e), c ? e.codable().val() : e.editable().html()) : k.value(c)
            }
            this.each(function (c, e) {
                var g = O.layoutInfoFromHolder(a(e));
                (g = g && g.editable()) && g.html(b)
            });
            return this
        }, destroy: function () {
            this.each(function (b, c) {
                var e = a(c);
                if (O.hasNoteEditor(e)) {
                    var g = O.layoutInfoFromHolder(e), h = g.editor().data("options");
                    U.detach(g, h);
                    O.removeLayout(e, g, h)
                }
            });
            return this
        }
    })
});
(function (a) {
    a.extend(a.summernote.lang, {
        "ko-KR": {
            font: {
                bold: "\uad75\uac8c",
                italic: "\uae30\uc6b8\uc784\uaf34",
                underline: "\ubc11\uc904",
                clear: "\uae00\uc790 \ud6a8\uacfc \uc5c6\uc560\uae30",
                height: "\uc904\uac04\uaca9",
                name: "\uae00\uaf34"
            },
            image: {
                image: "\uc0ac\uc9c4",
                insert: "\uc0ac\uc9c4 \ucd94\uac00",
                resizeFull: "\uc6d0\ubcf8 \ud06c\uae30\ub85c \ubcc0\uacbd",
                resizeHalf: "50% \ud06c\uae30\ub85c \ubcc0\uacbd",
                resizeQuarter: "25% \ud06c\uae30\ub85c \ubcc0\uacbd",
                floatLeft: "\uc67c\ucabd \uc815\ub82c",
                floatRight: "\uc624\ub978\ucabd \uc815\ub82c",
                floatNone: "\uc815\ub82c\ud558\uc9c0 \uc54a\uc74c",
                shapeRounded: "\uc2a4\ud0c0\uc77c: \ub465\uadfc \ubaa8\uc11c\ub9ac",
                shapeCircle: "\uc2a4\ud0c0\uc77c: \uc6d0\ud615",
                shapeThumbnail: "\uc2a4\ud0c0\uc77c: \uc561\uc790",
                shapeNone: "\uc2a4\ud0c0\uc77c: \uc5c6\uc74c",
                dragImageHere: "\uc0ac\uc9c4\uc744 \uc774\uacf3\uc73c\ub85c \ub04c\uc5b4\uc624\uc138\uc694",
                selectFromFiles: "\ud30c\uc77c \uc120\ud0dd",
                url: "\uc0ac\uc9c4 URL",
                remove: "\uc0ac\uc9c4 \uc0ad\uc81c"
            },
            link: {
                link: "\ub9c1\ud06c",
                insert: "\ub9c1\ud06c \ucd94\uac00",
                unlink: "\ub9c1\ud06c \uc0ad\uc81c",
                edit: "\uc218\uc815",
                textToDisplay: "\ub9c1\ud06c\uc5d0 \ud45c\uc2dc\ud560 \ub0b4\uc6a9",
                url: "\uc774\ub3d9\ud560 URL",
                openInNewWindow: "\uc0c8\ucc3d\uc73c\ub85c \uc5f4\uae30"
            },
            table: {table: "\ud14c\uc774\ube14"},
            hr: {insert: "\uad6c\ubd84\uc120 \ucd94\uac00"},
            style: {
                style: "\uc2a4\ud0c0\uc77c",
                normal: "\ubcf8\ubb38",
                blockquote: "\uc778\uc6a9\uad6c",
                pre: "\ucf54\ub4dc",
                h1: "\uc81c\ubaa9 1",
                h2: "\uc81c\ubaa9 2",
                h3: "\uc81c\ubaa9 3",
                h4: "\uc81c\ubaa9 4",
                h5: "\uc81c\ubaa9 5",
                h6: "\uc81c\ubaa9 6"
            },
            lists: {unordered: "\uae00\uba38\ub9ac \uae30\ud638", ordered: "\ubc88\ud638 \ub9e4\uae30\uae30"},
            options: {
                help: "\ub3c4\uc6c0\ub9d0",
                fullscreen: "\uc804\uccb4 \ud654\uba74",
                codeview: "\ucf54\ub4dc \ubcf4\uae30"
            },
            paragraph: {
                paragraph: "\ubb38\ub2e8 \uc815\ub82c",
                outdent: "\ub0b4\uc5b4\uc4f0\uae30",
                indent: "\ub4e4\uc5ec\uc4f0\uae30",
                left: "\uc67c\ucabd \uc815\ub82c",
                center: "\uac00\uc6b4\ub370 \uc815\ub82c",
                right: "\uc624\ub978\ucabd \uc815\ub82c",
                justify: "\uc591\ucabd \uc815\ub82c"
            },
            color: {
                recent: "\ub9c8\uc9c0\ub9c9\uc73c\ub85c \uc0ac\uc6a9\ud55c \uc0c9",
                more: "\ub2e4\ub978 \uc0c9 \uc120\ud0dd",
                background: "\ubc30\uacbd\uc0c9",
                foreground: "\uae00\uc790\uc0c9",
                transparent: "\ud22c\uba85",
                setTransparent: "\ud22c\uba85",
                reset: "\ucde8\uc18c",
                resetToDefault: "\uae30\ubcf8 \uac12\uc73c\ub85c \ubcc0\uacbd"
            },
            shortcut: {
                shortcuts: "\ud0a4\ubcf4\ub4dc \ub2e8\ucd95\ud0a4",
                close: "\ub2eb\uae30",
                textFormatting: "\uae00\uc790 \uc2a4\ud0c0\uc77c \uc801\uc6a9",
                action: "\uae30\ub2a5",
                paragraphFormatting: "\ubb38\ub2e8 \uc2a4\ud0c0\uc77c \uc801\uc6a9",
                documentStyle: "\ubb38\uc11c \uc2a4\ud0c0\uc77c \uc801\uc6a9"
            },
            history: {undo: "\uc2e4\ud589 \ucde8\uc18c", redo: "\ub2e4\uc2dc \uc2e4\ud589"}
        }
    })
})(jQuery);
(function (a) {
    "function" === typeof define && define.amd ? define(["jquery"], a) : a(window.jQuery)
})(function (a) {
    var q = a.summernote.renderer.getTemplate(), r = a.summernote.core.range, c = a.summernote.core.dom,
        b = function (a) {
            a.focus();
            a = r.create();
            a.isOnAnchor() && (a = c.ancestor(a.sc, c.isAnchor), a = r.createFromNode(a));
            return a.toString()
        }, e = function (b, c, e) {
            return a.Deferred(function (a) {
                var b = c.find(".note-video-dialog"), g = b.find(".note-video-url"), q = b.find(".note-video-btn");
                b.one("shown.bs.modal", function () {
                    g.val(e).on("input",
                        function () {
                            var a = g.val();
                            q.toggleClass("disabled", !a);
                            q.attr("disabled", !a)
                        }).trigger("focus");
                    q.click(function (c) {
                        c.preventDefault();
                        a.resolve(g.val());
                        b.modal("hide")
                    })
                }).one("hidden.bs.modal", function () {
                    g.off("input");
                    q.off("click");
                    "pending" === a.state() && a.reject()
                }).modal("show")
            })
        };
    a.summernote.addPlugin({
        name: "video", buttons: {
            video: function (a, b) {
                return q.iconButton(b.iconPrefix + "youtube-play", {
                    event: "showVideoDialog",
                    title: a.video.video,
                    hide: !0
                })
            }
        }, dialogs: {
            video: function (a) {
                return q.dialog("note-video-dialog",
                    a.video.insert, '<div class="form-group row-fluid"><label>' + a.video.url + ' <small class="text-muted">' + a.video.providers + '</small></label><input class="note-video-url form-control span12" type="text" /></div>', '<button href="#" class="btn btn-primary note-video-btn disabled" disabled>' + a.video.insert + "</button>")
            }
        }, events: {
            showVideoDialog: function (c, l, p) {
                c = p.dialog();
                var q = p.editable();
                p = b(q);
                l.saveRange(q);
                e(q, c, p).then(function (b) {
                    l.restoreRange(q);
                    a:{
                        var c = b.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/),
                            e = b.match(/\/\/instagram.com\/p\/(.[a-zA-Z0-9]*)/),
                            g = b.match(/\/\/vine.co\/v\/(.[a-zA-Z0-9]*)/),
                            p = b.match(/\/\/(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/),
                            r = b.match(/.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/),
                            h = b.match(/\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/), m = b.match(/^.+.(mp4|m4v)$/),
                            Q = b.match(/^.+.(ogg|ogv)$/), H = b.match(/^.+.(webm)$/);
                        if (c && 11 === c[1].length) b = c[1], b = a("<iframe>").attr("frameborder", 0).attr("src", "//www.youtube.com/embed/" + b).attr("width",
                            "640").attr("height", "360"); else if (e && e[0].length) b = a("<iframe>").attr("frameborder", 0).attr("src", e[0] + "/embed/").attr("width", "612").attr("height", "710").attr("scrolling", "no").attr("allowtransparency", "true"); else if (g && g[0].length) b = a("<iframe>").attr("frameborder", 0).attr("src", g[0] + "/embed/simple").attr("width", "600").attr("height", "600").attr("class", "vine-embed"); else if (p && p[3].length) b = a("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("src",
                            "//player.vimeo.com/video/" + p[3]).attr("width", "640").attr("height", "360"); else if (r && r[2].length) b = a("<iframe>").attr("frameborder", 0).attr("src", "//www.dailymotion.com/embed/video/" + r[2]).attr("width", "640").attr("height", "360"); else if (h && h[1].length) b = a("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("height", "498").attr("width", "510").attr("src", "//player.youku.com/embed/" + h[1]); else if (m || Q || H) b = a("<video controls>").attr("src", b).attr("width",
                            "640").attr("height", "360"); else {
                            b = !1;
                            break a
                        }
                        b = b[0]
                    }
                    b && l.insertNode(q, b)
                }).fail(function () {
                    l.restoreRange(q)
                })
            }
        }, langs: {
            "en-US": {
                video: {
                    video: "Video",
                    videoLink: "Video Link",
                    insert: "Insert Video",
                    url: "Video URL?",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)"
                }
            },
            "ar-AR": {
                video: {
                    video: "\u0641\u064a\u062f\u064a\u0648",
                    videoLink: "\u0631\u0627\u0628\u0637 \u0627\u0644\u0641\u064a\u062f\u064a\u0648",
                    insert: "\u0625\u062f\u0631\u0627\u062c \u0627\u0644\u0641\u064a\u062f\u064a\u0648",
                    url: "\u0631\u0627\u0628\u0637 \u0627\u0644\u0641\u064a\u062f\u064a\u0648",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion ou Youku)"
                }
            },
            "ca-ES": {
                video: {
                    video: "Video",
                    videoLink: "Enlla\u00e7 del video",
                    insert: "Inserir video",
                    url: "URL del video?",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion, o Youku)"
                }
            },
            "cs-CZ": {
                video: {
                    video: "Video",
                    videoLink: "Odkaz videa",
                    insert: "Vlo\u017eit video",
                    url: "URL videa?",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion nebo Youku)"
                }
            },
            "da-DK": {
                video: {
                    video: "Video",
                    videoLink: "Video Link",
                    insert: "Inds\u00e6t Video",
                    url: "Video URL?",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion eller Youku)"
                }
            },
            "de-DE": {
                video: {
                    video: "Video",
                    videoLink: "Video Link",
                    insert: "Video einf\u00fcgen",
                    url: "Video URL?",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion, oder Youku)"
                }
            },
            "es-ES": {
                video: {
                    video: "Video",
                    videoLink: "Link del video",
                    insert: "Insertar video",
                    url: "\u00bfURL del video?",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion, o Youku)"
                }
            },
            "es-EU": {
                video: {
                    video: "Bideoa",
                    videoLink: "Bideorako esteka",
                    insert: "Bideo berri bat txertatu",
                    url: "Bideoaren URL helbidea",
                    providers: "(YouTube, Vimeo, Vine, Instagram, edo DailyMotion)"
                }
            },
            "fa-IR": {
                video: {
                    video: "\u0648\u06cc\u062f\u06cc\u0648",
                    videoLink: "\u0644\u06cc\u0646\u06a9 \u0648\u06cc\u062f\u06cc\u0648",
                    insert: "\u0627\u0641\u0632\u0648\u062f\u0646 \u0648\u06cc\u062f\u06cc\u0648",
                    url: "\u0622\u062f\u0631\u0633 \u0648\u06cc\u062f\u06cc\u0648 \u061f",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion, \u06cc\u0627 Youku)"
                }
            },
            "fi-FI": {
                video: {
                    video: "Video",
                    videoLink: "Linkki videoon",
                    insert: "Lis\u00e4\u00e4 video",
                    url: "Videon URL-osoite?",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion tai Youku)"
                }
            },
            "fr-FR": {
                video: {
                    video: "Vid\u00e9o",
                    videoLink: "Lien vid\u00e9o",
                    insert: "Ins\u00e9rer une vid\u00e9o",
                    url: "URL de la vid\u00e9o",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion ou Youku)"
                }
            },
            "he-IL": {
                video: {
                    video: "\u05e1\u05e8\u05d8\u05d5\u05df",
                    videoLink: "\u05e7\u05d9\u05e9\u05d5\u05e8 \u05dc\u05e1\u05e8\u05d8\u05d5\u05df",
                    insert: "\u05d4\u05d5\u05e1\u05e3 \u05e1\u05e8\u05d8\u05d5\u05df",
                    url: "\u05e7\u05d9\u05e9\u05d5\u05e8 \u05dc\u05e1\u05e8\u05d8\u05d5\u05df",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion \u05d0\u05d5 Youku)"
                }
            },
            "hu-HU": {
                video: {
                    video: "Vide\u00f3",
                    videoLink: "Vide\u00f3 hivatkoz\u00e1s",
                    insert: "Vide\u00f3 besz\u00far\u00e1sa",
                    url: "Vide\u00f3 URL c\u00edme",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion, vagy Youku)"
                }
            },
            "id-ID": {
                video: {
                    video: "Video", videoLink: "Link video", insert: "Sisipkan video",
                    url: "Tautan video", providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion, atau Youku)"
                }
            },
            "it-IT": {
                video: {
                    video: "Video",
                    videoLink: "Collegamento ad un Video",
                    insert: "Inserisci Video",
                    url: "URL del Video",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion o Youku)"
                }
            },
            "ja-JP": {
                video: {
                    video: "\u52d5\u753b",
                    videoLink: "\u52d5\u753b\u30ea\u30f3\u30af",
                    insert: "\u52d5\u753b\u633f\u5165",
                    url: "\u52d5\u753b\u306eURL",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion, Youku)"
                }
            },
            "ko-KR": {
                video: {
                    video: "\ub3d9\uc601\uc0c1",
                    videoLink: "\ub3d9\uc601\uc0c1 \ub9c1\ud06c",
                    insert: "\ub3d9\uc601\uc0c1 \ucd94\uac00",
                    url: "\ub3d9\uc601\uc0c1 URL",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion, Youku \uc0ac\uc6a9 \uac00\ub2a5)"
                }
            },
            "nb-NO": {
                video: {
                    video: "Video",
                    videoLink: "Videolenke",
                    insert: "Sett inn video",
                    url: "Video-URL",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion eller Youku)"
                }
            },
            "nl-NL": {
                video: {
                    video: "Video",
                    videoLink: "Video link",
                    insert: "Video invoegen",
                    url: "URL van de video",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion of Youku)"
                }
            },
            "pl-PL": {
                video: {
                    video: "Wideo",
                    videoLink: "Adres wideo",
                    insert: "Wstaw wideo",
                    url: "Adres wideo",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion, lub Youku)"
                }
            },
            "pt-BR": {
                video: {
                    video: "V\u00eddeo",
                    videoLink: "Link para v\u00eddeo",
                    insert: "Inserir v\u00eddeo",
                    url: "URL do v\u00eddeo?",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion, ou Youku)"
                }
            },
            "ro-RO": {
                video: {
                    video: "Video",
                    videoLink: "Link video",
                    insert: "Insereaz\u0103 video",
                    url: "URL video?",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion, sau Youku)"
                }
            },
            "ru-RU": {
                video: {
                    video: "\u0412\u0438\u0434\u0435\u043e",
                    videoLink: "\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0432\u0438\u0434\u0435\u043e",
                    insert: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0432\u0438\u0434\u0435\u043e",
                    url: "URL \u0432\u0438\u0434\u0435\u043e",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion \u0438\u043b\u0438 Youku)"
                }
            },
            "sk-SK": {
                video: {
                    video: "Video",
                    videoLink: "Odkaz videa",
                    insert: "Vlo\u017ei\u0165 video",
                    url: "URL videa?",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion nebo Youku)"
                }
            },
            "sl-SI": {
                video: {
                    video: "Video",
                    videoLink: "Video povezava",
                    insert: "Vstavi video",
                    url: "Povezava do videa",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion ali Youku)"
                }
            },
            "sr-RS": {
                video: {
                    video: "\u0412\u0438\u0434\u0435\u043e",
                    videoLink: "\u0412\u0435\u0437\u0430 \u043a\u0430 \u0432\u0438\u0434\u0435\u0443",
                    insert: "\u0423\u043c\u0435\u0442\u043d\u0438 \u0432\u0438\u0434\u0435\u043e",
                    url: "URL \u0432\u0438\u0434\u0435\u043e",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion \u0438\u043b\u0438 Youku)"
                }
            },
            "sr-RS-Latin": {
                video: {
                    video: "Video",
                    videoLink: "Veza ka videu",
                    insert: "Umetni video",
                    url: "URL video",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion ili Youku)"
                }
            },
            "sv-SE": {
                video: {
                    video: "Filmklipp",
                    videoLink: "L\u00e4nk till filmklipp",
                    insert: "Infoga filmklipp",
                    url: "L\u00e4nk till filmklipp",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion eller Youku)"
                }
            },
            "th-TH": {
                video: {
                    video: "\u0e27\u0e35\u0e14\u0e35\u0e42\u0e2d",
                    videoLink: "\u0e25\u0e34\u0e07\u0e01\u0e4c\u0e02\u0e2d\u0e07\u0e27\u0e35\u0e14\u0e35\u0e42\u0e2d",
                    insert: "\u0e41\u0e17\u0e23\u0e01\u0e27\u0e35\u0e14\u0e35\u0e42\u0e2d",
                    url: "\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48 URL \u0e02\u0e2d\u0e07\u0e27\u0e35\u0e14\u0e35\u0e42\u0e2d?",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion \u0e2b\u0e23\u0e37\u0e2d Youku)"
                }
            },
            "tr-TR": {
                video: {
                    video: "Video",
                    videoLink: "Video ba\u011flant\u0131s\u0131",
                    insert: "Video ekle",
                    url: "Video ba\u011flant\u0131s\u0131?",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion veya Youku)"
                }
            },
            "uk-UA": {
                video: {
                    video: "\u0412\u0456\u0434\u0435\u043e",
                    videoLink: "\u041f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u043d\u0430 \u0432\u0456\u0434\u0435\u043e",
                    insert: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0432\u0456\u0434\u0435\u043e",
                    url: "URL \u0432\u0456\u0434\u0435\u043e",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion \u0447\u0438 Youku)"
                }
            },
            "vi-VN": {
                video: {
                    video: "Video",
                    videoLink: "\u0110\u01b0\u1eddng D\u1eabn \u0111\u1ebfn Video",
                    insert: "Ch\u00e8n Video",
                    url: "URL",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion v\u00e0 Youku)"
                }
            },
            "zh-CN": {
                video: {
                    video: "\u89c6\u9891",
                    videoLink: "\u89c6\u9891\u94fe\u63a5",
                    insert: "\u63d2\u5165\u89c6\u9891",
                    url: "\u89c6\u9891\u5730\u5740",
                    providers: "(\u4f18\u9177, Instagram, DailyMotion, Youtube\u7b49)"
                }
            },
            "zh-TW": {
                video: {
                    video: "\u5f71\u7247",
                    videoLink: "\u5f71\u7247\u9023\u7d50",
                    insert: "\u63d2\u5165\u5f71\u7247",
                    url: "\u5f71\u7247\u7db2\u5740",
                    providers: "(\u512a\u9177, Instagram, DailyMotion, Youtube\u7b49)"
                }
            }
        }
    })
});
(function (a) {
    "function" === typeof define && define.amd ? define(["jquery"], a) : a(window.jQuery)
})(function (a) {
    var q = a.summernote.renderer.getTemplate(), r = a.summernote.core.range, c = a.summernote.core.dom,
        b = function (b, c, e) {
            e = a("<div/>").text(e);
            return a('<pre class="' + (c ? "line-numbers" : "") + '"><code class="language-' + b + '">' + e.html() + "</code></pre>")[0]
        }, e = function (b) {
            b.focus();
            b = r.create().expand(c.isCodeBlock);
            var e = a(b.nodes(c.isPre)[0]), g = a(b.nodes(c.isCode)[0]);
            return {
                range: b,
                text: b.toString(),
                isShowLineNumbers: e.length ?
                    "line-numbers" === e.attr("class") : !0,
                langType: g.length ? g.attr("class") : "",
                sourceCode: g.length ? g.text() : ""
            }
        }, g = function (b, c, e) {
            return a.Deferred(function (a) {
                var b = c.find(".note-codeblock-dialog"), g = b.find(".note-codeblock-type"),
                    l = b.find(".note-codeblock-numbers"), q = b.find(".note-codeblock-source"),
                    r = b.find(".note-codeblock-btn");
                b.one("shown.bs.modal", function () {
                    g.val(e.langType).trigger("keyup").trigger("focus");
                    q.val(e.sourceCode).on("input", function () {
                        var a = q.val();
                        r.toggleClass("disabled", !a);
                        r.attr("disabled", !a)
                    });
                    r.click(function (c) {
                        c.preventDefault();
                        a.resolve(g.val(), l.is(":checked"), q.val());
                        b.modal("hide")
                    })
                }).one("hidden.bs.modal", function () {
                    g.off("keyup");
                    r.off("click");
                    "pending" === a.state() && a.reject()
                }).modal("show")
            })
        };
    a.summernote.addPlugin({
        name: "codeblock", buttons: {
            codeblock: function (a) {
                return q.button('<i class="fa fa-file-code-o"></i> ' + a.codeblock.codeblock, {
                    event: "showCodeblockDialog",
                    title: a.codeblock.codeblock,
                    hide: !0
                })
            }
        }, dialogs: {
            codeblock: function (a) {
                return q.dialog("note-codeblock-dialog",
                    a.codeblock.insert, '<div class="form-group"><label>' + a.codeblock.langType + '</label><select class="note-codeblock-type form-control span12"><option selected="selected" value="markup">HTML / Markup</option><option value="css">CSS</option><option value="sass">Sass</option><option value="javascript">JavaScript</option><option value="java">Java</option><option value="python">Python</option><option value="groovy">Groovy</option><option value="scala">Scala</option><option value="php">PHP</option><option value="bash">Bash</option><option value="coffeescript">CoffeesSript</option><option value="go">Go</option><option value="haskell">Haskell</option><option value="go">Go</option><option value="c">C</option><option value="cpp">C++</option><option value="sql">SQL</option><option value="ruby">Ruby</option><option value="aspnet">ASP.NET</option><option value="csharp">C#</option><option value="swift">Swift</option><option value="objectivec">Objective-C</option></select></div><div class="form-group"><label><input type="checkbox" class="note-codeblock-numbers"> ' +
                    a.codeblock.showLineNumbers + '</label></div><div class="form-group"><label>' + a.codeblock.sourceCode + '</label><textarea rows="10" class="form-control note-codeblock-source"></textarea></div>', '<button href="javascript://" class="btn btn-primary note-codeblock-btn disabled" disabled>' + a.codeblock.insert + "</button>")
            }
        }, events: {
            showCodeblockDialog: function (a, c, q) {
                a = q.dialog();
                var k = q.editable();
                q = e(k);
                c.saveRange(k);
                g(k, a, q).then(function (a, e, g) {
                    c.restoreRange(k);
                    c.insertNode(k, b(a, e, g))
                }).fail(function () {
                    c.restoreRange(k)
                })
            }
        },
        langs: {
            "en-US": {
                codeblock: {
                    codeblock: "Code",
                    langType: "Language type",
                    showLineNumbers: "Show line numbers",
                    sourceCode: "Source Code",
                    insert: "Insert code block"
                }
            },
            "ko-KR": {
                codeblock: {
                    codeblock: "\ucf54\ub4dc",
                    langType: "\uc5b8\uc5b4 \uc885\ub958",
                    showLineNumbers: "Show line numbers",
                    sourceCode: "Source Code",
                    insert: "\ucf54\ub4dc \ube14\ub85d \ucd94\uac00"
                }
            }
        }
    })
});
(function (a, q) {
    "object" == typeof exports ? module.exports = q() : "function" == typeof define && define.amd ? define(q) : a.Spinner = q()
})(this, function () {
    function a(a, b) {
        var c = document.createElement(a || "div"), e;
        for (e in b) c[e] = b[e];
        return c
    }

    function q(a) {
        for (var b = 1, c = arguments.length; b < c; b++) a.appendChild(arguments[b]);
        return a
    }

    function r(a, b, c, e) {
        var g = ["opacity", b, ~~(100 * a), c, e].join("-");
        c = .01 + c / e * 100;
        e = Math.max(1 - (1 - a) / b * (100 - c), a);
        var l = s.substring(0, s.indexOf("Animation")).toLowerCase();
        k[g] || (L.insertRule("@" +
            (l && "-" + l + "-" || "") + "keyframes " + g + "{0%{opacity:" + e + "}" + c + "%{opacity:" + a + "}" + (c + .01) + "%{opacity:1}" + (c + b) % 100 + "%{opacity:" + a + "}100%{opacity:" + e + "}}", L.cssRules.length), k[g] = 1);
        return g
    }

    function c(a, b) {
        var c = a.style, e, g;
        b = b.charAt(0).toUpperCase() + b.slice(1);
        for (g = 0; g < t.length; g++) if (e = t[g] + b, void 0 !== c[e]) return e;
        if (void 0 !== c[b]) return b
    }

    function b(a, b) {
        for (var e in b) a.style[c(a, e) || e] = b[e];
        return a
    }

    function e(a) {
        for (var b = 1; b < arguments.length; b++) {
            var c = arguments[b], e;
            for (e in c) void 0 === a[e] &&
            (a[e] = c[e])
        }
        return a
    }

    function g(a, b) {
        return "string" == typeof a ? a : a[b % a.length]
    }

    function l(a) {
        this.opts = e(a || {}, l.defaults, E)
    }

    function p() {
        function c(b, e) {
            return a("<" + b + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', e)
        }

        L.addRule(".spin-vml", "behavior:url(#default#VML)");
        l.prototype.lines = function (a, e) {
            function k() {
                return b(c("group", {coordsize: r + " " + r, coordorigin: -p + " " + -p}), {width: r, height: r})
            }

            function l(a, h, s) {
                q(t, q(b(k(), {
                    rotation: 360 / e.lines * a + "deg",
                    left: ~~h
                }), q(b(c("roundrect", {arcsize: e.corners}),
                    {
                        width: p,
                        height: e.width,
                        left: e.radius,
                        top: -e.width >> 1,
                        filter: s
                    }), c("fill", {color: g(e.color, a), opacity: e.opacity}), c("stroke", {opacity: 0}))))
            }

            var p = e.length + e.width, r = 2 * p, s = 2 * -(e.width + e.length) + "px",
                t = b(k(), {position: "absolute", top: s, left: s});
            if (e.shadow) for (s = 1; s <= e.lines; s++) l(s, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (s = 1; s <= e.lines; s++) l(s);
            return q(a, t)
        };
        l.prototype.opacity = function (a, b, c, e) {
            a = a.firstChild;
            e = e.shadow && e.lines || 0;
            a && b + e < a.childNodes.length &&
            (a = (a = (a = a.childNodes[b + e]) && a.firstChild) && a.firstChild) && (a.opacity = c)
        }
    }

    var t = ["webkit", "Moz", "ms", "O"], k = {}, s, L = function () {
        var b = a("style", {type: "text/css"});
        q(document.getElementsByTagName("head")[0], b);
        return b.sheet || b.styleSheet
    }(), E = {
        lines: 12,
        length: 7,
        width: 5,
        radius: 10,
        rotate: 0,
        corners: 1,
        color: "#000",
        direction: 1,
        speed: 1,
        trail: 100,
        opacity: .25,
        fps: 20,
        zIndex: 2E9,
        className: "spinner",
        top: "50%",
        left: "50%",
        position: "absolute"
    };
    l.defaults = {};
    e(l.prototype, {
        spin: function (c) {
            this.stop();
            var e = this,
                g = e.opts,
                k = e.el = b(a(0, {className: g.className}), {position: g.position, width: 0, zIndex: g.zIndex});
            b(k, {left: g.left, top: g.top});
            c && c.insertBefore(k, c.firstChild || null);
            k.setAttribute("role", "progressbar");
            e.lines(k, e.opts);
            if (!s) {
                var l = 0, p = (g.lines - 1) * (1 - g.direction) / 2, q, r = g.fps, t = r / g.speed,
                    M = (1 - g.opacity) / (t * g.trail / 100), N = t / g.lines;
                (function Y() {
                    l++;
                    for (var a = 0; a < g.lines; a++) q = Math.max(1 - (l + (g.lines - a) * N) % t * M, g.opacity), e.opacity(k, a * g.direction + p, q, g);
                    e.timeout = e.el && setTimeout(Y, ~~(1E3 / r))
                })()
            }
            return e
        },
        stop: function () {
            var a = this.el;
            a && (clearTimeout(this.timeout), a.parentNode && a.parentNode.removeChild(a), this.el = void 0);
            return this
        }, lines: function (c, e) {
            function k(c, g) {
                return b(a(), {
                    position: "absolute",
                    width: e.length + e.width + "px",
                    height: e.width + "px",
                    background: c,
                    boxShadow: g,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / e.lines * l + e.rotate) + "deg) translate(" + e.radius + "px,0)",
                    borderRadius: (e.corners * e.width >> 1) + "px"
                })
            }

            for (var l = 0, p = (e.lines - 1) * (1 - e.direction) / 2, t; l < e.lines; l++) t = b(a(), {
                position: "absolute",
                top: 1 + ~(e.width / 2) + "px",
                transform: e.hwaccel ? "translate3d(0,0,0)" : "",
                opacity: e.opacity,
                animation: s && r(e.opacity, e.trail, p + l * e.direction, e.lines) + " " + 1 / e.speed + "s linear infinite"
            }), e.shadow && q(t, b(k("#000", "0 0 4px #000"), {top: "2px"})), q(c, q(t, k(g(e.color, l), "0 0 1px rgba(0,0,0,.1)")));
            return c
        }, opacity: function (a, b, c) {
            b < a.childNodes.length && (a.childNodes[b].style.opacity = c)
        }
    });
    var C = b(a("group"), {behavior: "url(#default#VML)"});
    !c(C, "transform") && C.adj ? p() : s = c(C, "animation");
    return l
});
(function (a) {
    if ("object" == typeof exports) a(require("jquery"), require("spin")); else if ("function" == typeof define && define.amd) define(["jquery", "spin"], a); else {
        if (!window.Spinner) throw Error("Spin.js not present");
        a(window.jQuery, window.Spinner)
    }
})(function (a, q) {
    a.fn.spin = function (r, c) {
        return this.each(function () {
            var b = a(this), e = b.data();
            e.spinner && (e.spinner.stop(), delete e.spinner);
            !1 !== r && (r = a.extend({color: c || b.css("color")}, a.fn.spin.presets[r] || r), e.spinner = (new q(r)).spin(this))
        })
    };
    a.fn.spin.presets =
        {
            tiny: {lines: 8, length: 2, width: 2, radius: 3},
            small: {lines: 8, length: 4, width: 3, radius: 5},
            large: {lines: 10, length: 8, width: 4, radius: 8}
        }
});
(function (a) {
    function q(a, b) {
        "" === a.val() ? a.data("placeholder").removeClass(b.hideClass) : a.data("placeholder").addClass(b.hideClass)
    }

    function r(a, b) {
        var c = b.is("textarea"), e = parseFloat(b.css("padding-top")), k = parseFloat(b.css("padding-left")),
            q = b.offset();
        e && (q.top += e);
        k && (q.left += k);
        a.css({
            width: b.innerWidth() - (c ? 20 : 4),
            height: b.innerHeight() - 6,
            lineHeight: b.css("line-height"),
            whiteSpace: c ? "normal" : "nowrap",
            overflow: "hidden"
        }).offset(q)
    }

    function c(a, c) {
        var p = a.val();
        (function k() {
            e = requestAnimationFrame(k);
            a.val() !== p && (a.data("placeholder").addClass(c.hideClass), window.cancelAnimationFrame && cancelAnimationFrame(e), b(a, c))
        })()
    }

    function b(a, b) {
        (function t() {
            e = requestAnimationFrame(t);
            q(a, b)
        })()
    }

    var e;
    a.fn.placeHolder = function (b) {
        var l = this, p = a(this).length;
        this.options = a.extend({
            className: "placeholder",
            visibleToScreenreaders: !0,
            visibleToScreenreadersHideClass: "placeholder-hide-except-screenreader",
            visibleToNoneHideClass: "placeholder-hide",
            hideOnFocus: !1,
            removeLabelClass: "visuallyhidden",
            hiddenOverrideClass: "visuallyhidden-with-placeholder",
            forceHiddenOverride: !0,
            forceApply: !1,
            autoInit: !0
        }, b);
        this.options.hideClass = this.options.visibleToScreenreaders ? this.options.visibleToScreenreadersHideClass : this.options.visibleToNoneHideClass;
        return a(this).each(function (b) {
            function g() {
                if (!l.options.hideOnFocus && window.requestAnimationFrame) c(s, l.options); else {
                    var a = l.options;
                    s.data("placeholder").addClass(a.hideClass)
                }
            }

            var s = a(this), L = s.attr("placeholder"), E = s.attr("id"), C, z;
            if ("" === L || void 0 === L) L = s[0].attributes.placeholder.value;
            C = s.closest("label");
            s.removeAttr("placeholder");
            if (C.length || E) if (C = C.length ? C : a('label[for="' + E + '"]').first(), C.length) {
                E = a(C).find(".placeholder");
                if (E.length) return r(E, s), E.text(L), s;
                C.hasClass(l.options.removeLabelClass) && C.removeClass(l.options.removeLabelClass).addClass(l.options.hiddenOverrideClass);
                z = a("<span>").addClass(l.options.className).text(L).appendTo(C);
                (C = z.width() > s.width()) && z.attr("title", L);
                r(z, s);
                s.data("placeholder", z);
                z.data("input", s);
                z.click(function () {
                    a(this).data("input").focus()
                });
                s.focusin(g);
                s.focusout(function () {
                    q(a(this), l.options);
                    l.options.hideOnFocus || window.cancelAnimationFrame && cancelAnimationFrame(e)
                });
                q(s, l.options);
                a(document).bind("fontresize resize", function () {
                    r(z, s)
                });
                a.event.special.resize ? a("textarea").bind("resize", function (b) {
                    a(this).is(":visible") && r(z, s);
                    b.stopPropagation();
                    b.preventDefault()
                }) : a("textarea").css("resize", "none");
                b >= p - 1 && "undefined" !== typeof a.attrHooks && (a.attrHooks.placeholder = {
                    get: function (b) {
                        if ("input" === b.nodeName.toLowerCase() || "textarea" === b.nodeName.toLowerCase()) return a(b).data("placeholder") ?
                            a(a(b).data("placeholder")).text() : a(b)[0].placeholder
                    }, set: function (b, c) {
                        return a(a(b).data("placeholder")).text(c)
                    }
                });
                s.is(":focus") && g()
            }
        })
    };
    a(function () {
        var b = window.placeHolderConfig || {};
        !1 === b.autoInit || ("placeholder" in a("<input>")[0] || "placeHolder" in a("<input>")[0]) && !b.forceApply || a("input[placeholder], textarea[placeholder]").placeHolder(b)
    })
})(jQuery);
(function (a, q) {
    "object" === typeof exports && exports ? q(exports) : "function" === typeof define && define.amd ? define(["exports"], q) : q(a.Mustache = {})
})(this, function (a) {
    function q(a) {
        return "function" === typeof a
    }

    function r(a) {
        return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }

    function c(c, l) {
        function p(a) {
            "string" === typeof a && (a = a.split(z, 2));
            if (!k(a) || 2 !== a.length) throw Error("Invalid tags: " + a);
            v = new RegExp(r(a[0]) + "\\s*");
            E = new RegExp("\\s*" + r(a[1]));
            da = new RegExp("\\s*" + r("}" + a[1]))
        }

        if (!c) return [];
        var q =
            [], t = [], N = [], A = !1, H = !1, v, E, da;
        p(l || a.tags);
        for (var J = new g(c), ia, O, U, P; !J.eos();) {
            ia = J.pos;
            if (U = J.scanUntil(v)) {
                P = 0;
                for (var x = U.length; P < x; ++P) if (O = U.charAt(P), s.call(L, O) ? H = !0 : N.push(t.length), t.push(["text", O, ia, ia + 1]), ia += 1, "\n" === O) {
                    if (A && !H) for (; N.length;) delete t[N.pop()]; else N = [];
                    H = A = !1
                }
            }
            if (!J.scan(v)) break;
            A = !0;
            O = J.scan(Q) || "name";
            J.scan(C);
            "=" === O ? (U = J.scanUntil(h), J.scan(h), J.scanUntil(E)) : "{" === O ? (U = J.scanUntil(da), J.scan(m), J.scanUntil(E), O = "&") : U = J.scanUntil(E);
            if (!J.scan(E)) throw Error("Unclosed tag at " +
                J.pos);
            P = [O, U, ia, J.pos];
            t.push(P);
            if ("#" === O || "^" === O) q.push(P); else if ("/" === O) {
                O = q.pop();
                if (!O) throw Error('Unopened section "' + U + '" at ' + ia);
                if (O[1] !== U) throw Error('Unclosed section "' + O[1] + '" at ' + ia);
            } else "name" === O || "{" === O || "&" === O ? H = !0 : "=" === O && p(U)
        }
        if (O = q.pop()) throw Error('Unclosed section "' + O[1] + '" at ' + J.pos);
        return e(b(t))
    }

    function b(a) {
        for (var b = [], c, e, g = 0, h = a.length; g < h; ++g) if (c = a[g]) "text" === c[0] && e && "text" === e[0] ? (e[1] += c[1], e[3] = c[3]) : (b.push(c), e = c);
        return b
    }

    function e(a) {
        for (var b =
            [], c = b, e = [], g, h = 0, k = a.length; h < k; ++h) switch (g = a[h], g[0]) {
            case "#":
            case "^":
                c.push(g);
                e.push(g);
                c = g[4] = [];
                break;
            case "/":
                c = e.pop();
                c[5] = g[2];
                c = 0 < e.length ? e[e.length - 1][4] : b;
                break;
            default:
                c.push(g)
        }
        return b
    }

    function g(a) {
        this.tail = this.string = a;
        this.pos = 0
    }

    function l(a, b) {
        this.view = null == a ? {} : a;
        this.cache = {".": this.view};
        this.parent = b
    }

    function p() {
        this.cache = {}
    }

    var t = Object.prototype.toString, k = Array.isArray || function (a) {
        return "[object Array]" === t.call(a)
    }, s = RegExp.prototype.test, L = /\S/, E = {
        "&": "&amp;",
        "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;"
    }, C = /\s*/, z = /\s+/, h = /\s*=/, m = /\s*\}/, Q = /#|\^|\/|>|\{|&|=|!/;
    g.prototype.eos = function () {
        return "" === this.tail
    };
    g.prototype.scan = function (a) {
        a = this.tail.match(a);
        if (!a || 0 !== a.index) return "";
        a = a[0];
        this.tail = this.tail.substring(a.length);
        this.pos += a.length;
        return a
    };
    g.prototype.scanUntil = function (a) {
        a = this.tail.search(a);
        var b;
        switch (a) {
            case -1:
                b = this.tail;
                this.tail = "";
                break;
            case 0:
                b = "";
                break;
            default:
                b = this.tail.substring(0, a), this.tail = this.tail.substring(a)
        }
        this.pos +=
            b.length;
        return b
    };
    l.prototype.push = function (a) {
        return new l(a, this)
    };
    l.prototype.lookup = function (a) {
        var b = this.cache, c;
        if (a in b) c = b[a]; else {
            for (var e = this, g, h; e;) {
                if (0 < a.indexOf(".")) for (c = e.view, g = a.split("."), h = 0; null != c && h < g.length;) c = c[g[h++]]; else c = e.view[a];
                if (null != c) break;
                e = e.parent
            }
            b[a] = c
        }
        q(c) && (c = c.call(this.view));
        return c
    };
    p.prototype.clearCache = function () {
        this.cache = {}
    };
    p.prototype.parse = function (a, b) {
        var e = this.cache, g = e[a];
        null == g && (g = e[a] = c(a, b));
        return g
    };
    p.prototype.render = function (a,
                                   b, c) {
        var e = this.parse(a);
        b = b instanceof l ? b : new l(b);
        return this.renderTokens(e, b, c, a)
    };
    p.prototype.renderTokens = function (b, c, e, g) {
        function h(a) {
            return m.render(a, c, e)
        }

        for (var l = "", m = this, p, r, s = 0, t = b.length; s < t; ++s) switch (p = b[s], p[0]) {
            case "#":
                r = c.lookup(p[1]);
                if (!r) continue;
                if (k(r)) for (var z = 0, Q = r.length; z < Q; ++z) l += this.renderTokens(p[4], c.push(r[z]), e, g); else if ("object" === typeof r || "string" === typeof r) l += this.renderTokens(p[4], c.push(r), e, g); else if (q(r)) {
                    if ("string" !== typeof g) throw Error("Cannot use higher-order sections without the original template");
                    r = r.call(c.view, g.slice(p[3], p[5]), h);
                    null != r && (l += r)
                } else l += this.renderTokens(p[4], c, e, g);
                break;
            case "^":
                r = c.lookup(p[1]);
                if (!r || k(r) && 0 === r.length) l += this.renderTokens(p[4], c, e, g);
                break;
            case ">":
                if (!e) continue;
                r = q(e) ? e(p[1]) : e[p[1]];
                null != r && (l += this.renderTokens(this.parse(r), c, e, r));
                break;
            case "&":
                r = c.lookup(p[1]);
                null != r && (l += r);
                break;
            case "name":
                r = c.lookup(p[1]);
                null != r && (l += a.escape(r));
                break;
            case "text":
                l += p[1]
        }
        return l
    };
    a.name = "mustache.js";
    a.version = "0.8.1";
    a.tags = ["{{", "}}"];
    var H = new p;
    a.clearCache = function () {
        return H.clearCache()
    };
    a.parse = function (a, b) {
        return H.parse(a, b)
    };
    a.render = function (a, b, c) {
        return H.render(a, b, c)
    };
    a.to_html = function (b, c, e, g) {
        b = a.render(b, c, e);
        if (q(g)) g(b); else return b
    };
    a.escape = function (a) {
        return String(a).replace(/[&<>"'\/]/g, function (a) {
            return E[a]
        })
    };
    a.Scanner = g;
    a.Context = l;
    a.Writer = p
});
(function (a) {
    "function" === typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
})(function (a) {
    function q() {
        var e;
        e = a(this);
        if (!e.data("timeago")) {
            e.data("timeago", {datetime: b.datetime(e)});
            var l = a.trim(e.text());
            b.settings.localeTitle ? e.attr("title", e.data("timeago").datetime.toLocaleString()) : !(0 < l.length) || b.isTime(e) && e.attr("title") || e.attr("title", l)
        }
        e = e.data("timeago");
        l = b.settings;
        isNaN(e.datetime) || (0 == l.cutoff || Math.abs(c(e.datetime)) < l.cutoff) && a(this).text(r(e.datetime));
        return this
    }

    function r(a) {
        return b.inWords(c(a))
    }

    function c(a) {
        return (new Date).getTime() - a.getTime()
    }

    a.timeago = function (b) {
        return b instanceof Date ? r(b) : "string" === typeof b ? r(a.timeago.parse(b)) : "number" === typeof b ? r(new Date(b)) : r(a.timeago.datetime(b))
    };
    var b = a.timeago;
    a.extend(a.timeago, {
        settings: {
            refreshMillis: 6E4, allowPast: !0, allowFuture: !1, localeTitle: !1, cutoff: 0, strings: {
                prefixAgo: null,
                prefixFromNow: null,
                suffixAgo: "ago",
                suffixFromNow: "from now",
                inPast: "any moment now",
                seconds: "less than a minute",
                minute: "about a minute",
                minutes: "%d minutes",
                hour: "about an hour",
                hours: "about %d hours",
                day: "a day",
                days: "%d days",
                month: "about a month",
                months: "%d months",
                year: "about a year",
                years: "%d years",
                wordSeparator: " ",
                numbers: []
            }
        }, inWords: function (b) {
            function c(h, k) {
                return (a.isFunction(h) ? h(k, b) : h).replace(/%d/i, e.numbers && e.numbers[k] || k)
            }

            if (!this.settings.allowPast && !this.settings.allowFuture) throw"timeago allowPast and allowFuture settings can not both be set to false.";
            var e = this.settings.strings, q = e.prefixAgo, k = e.suffixAgo;
            this.settings.allowFuture && 0 > b && (q = e.prefixFromNow, k = e.suffixFromNow);
            if (!this.settings.allowPast && 0 <= b) return this.settings.strings.inPast;
            var r = Math.abs(b) / 1E3, L = r / 60, E = L / 60, C = E / 24, z = C / 365,
                r = 45 > r && c(e.seconds, Math.round(r)) || 90 > r && c(e.minute, 1) || 45 > L && c(e.minutes, Math.round(L)) || 90 > L && c(e.hour, 1) || 24 > E && c(e.hours, Math.round(E)) || 42 > E && c(e.day, 1) || 30 > C && c(e.days, Math.round(C)) || 45 > C && c(e.month, 1) || 365 > C && c(e.months, Math.round(C / 30)) || 1.5 > z && c(e.year, 1) || c(e.years, Math.round(z)),
                L = e.wordSeparator ||
                    "";
            void 0 === e.wordSeparator && (L = " ");
            return a.trim([q, r, k].join(L))
        }, parse: function (b) {
            b = a.trim(b);
            b = b.replace(/\.\d+/, "");
            b = b.replace(/-/, "/").replace(/-/, "/");
            b = b.replace(/T/, " ").replace(/Z/, " UTC");
            b = b.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2");
            b = b.replace(/([\+\-]\d\d)$/, " $100");
            return new Date(b)
        }, datetime: function (c) {
            c = b.isTime(c) ? a(c).attr("datetime") : a(c).attr("title");
            return b.parse(c)
        }, isTime: function (b) {
            return "time" === a(b).get(0).tagName.toLowerCase()
        }
    });
    var e = {
        init: function () {
            var c = a.proxy(q,
                this);
            c();
            var e = b.settings;
            0 < e.refreshMillis && (this._timeagoInterval = setInterval(c, e.refreshMillis))
        }, update: function (c) {
            c = b.parse(c);
            a(this).data("timeago", {datetime: c});
            b.settings.localeTitle && a(this).attr("title", c.toLocaleString());
            q.apply(this)
        }, updateFromDOM: function () {
            a(this).data("timeago", {datetime: b.parse(b.isTime(this) ? a(this).attr("datetime") : a(this).attr("title"))});
            q.apply(this)
        }, dispose: function () {
            this._timeagoInterval && (window.clearInterval(this._timeagoInterval), this._timeagoInterval =
                null)
        }
    };
    a.fn.timeago = function (a, b) {
        var c = a ? e[a] : e.init;
        if (!c) throw Error("Unknown function name '" + a + "' for timeago");
        this.each(function () {
            c.call(this, b)
        });
        return this
    };
    document.createElement("abbr");
    document.createElement("time")
});
(function (a) {
    a.extend(a.timeago.settings.strings, {
        prefixAgo: null,
        prefixFromNow: "\uc9c0\uae08\uc73c\ub85c \ubd80\ud130",
        suffixAgo: "\uc804",
        suffixFromNow: "\uc804",
        inPast: "\uc774\uc804",
        seconds: "\ubc29\uae08",
        minute: "1\ubd84",
        minutes: "%d\ubd84",
        hour: "1\uc2dc\uac04",
        hours: "%d\uc2dc\uac04",
        day: "1\uc77c",
        days: "%d\uc77c",
        month: "1\ub2ec",
        months: "%d\ub2ec",
        year: "1\ub144",
        years: "%d\ub144",
        wordSeparator: " ",
        numbers: []
    })
})(jQuery);
(function (a) {
    "function" === typeof define && define.amd ? define(["jquery"], a) : "object" === typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
})(function (a) {
    a.extend(a.fn, {
        validate: function (c) {
            if (this.length) {
                var b = a.data(this[0], "validator");
                if (b) return b;
                this.attr("novalidate", "novalidate");
                b = new a.validator(c, this[0]);
                a.data(this[0], "validator", b);
                b.settings.onsubmit && (this.on("click.validate", ":submit", function (c) {
                    b.settings.submitHandler && (b.submitButton = c.target);
                    a(this).hasClass("cancel") &&
                    (b.cancelSubmit = !0);
                    void 0 !== a(this).attr("formnovalidate") && (b.cancelSubmit = !0)
                }), this.on("submit.validate", function (c) {
                    function g() {
                        var g, p;
                        return b.settings.submitHandler ? (b.submitButton && (g = a("<input type='hidden'/>").attr("name", b.submitButton.name).val(a(b.submitButton).val()).appendTo(b.currentForm)), p = b.settings.submitHandler.call(b, b.currentForm, c), b.submitButton && g.remove(), void 0 !== p ? p : !1) : !0
                    }

                    b.settings.debug && c.preventDefault();
                    if (b.cancelSubmit) return b.cancelSubmit = !1, g();
                    if (b.form()) return b.pendingRequest ?
                        (b.formSubmitted = !0, !1) : g();
                    b.focusInvalid();
                    return !1
                }));
                return b
            }
            c && c.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        }, valid: function () {
            var c, b, e;
            a(this[0]).is("form") ? c = this.validate().form() : (e = [], c = !0, b = a(this[0].form).validate(), this.each(function () {
                (c = b.element(this) && c) || (e = e.concat(b.errorList))
            }), b.errorList = e);
            return c
        }, rules: function (c, b) {
            var e = this[0], g, l, p, q;
            if (null != e && null != e.form) {
                if (c) switch (g = a.data(e.form, "validator").settings, l = g.rules,
                    p = a.validator.staticRules(e), c) {
                    case "add":
                        a.extend(p, a.validator.normalizeRule(b));
                        delete p.messages;
                        l[e.name] = p;
                        b.messages && (g.messages[e.name] = a.extend(g.messages[e.name], b.messages));
                        break;
                    case "remove":
                        if (!b) return delete l[e.name], p;
                        q = {};
                        a.each(b.split(/\s/), function (b, c) {
                            q[c] = p[c];
                            delete p[c];
                            "required" === c && a(e).removeAttr("aria-required")
                        });
                        return q
                }
                g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(e), a.validator.attributeRules(e), a.validator.dataRules(e), a.validator.staticRules(e)),
                    e);
                g.required && (l = g.required, delete g.required, g = a.extend({required: l}, g), a(e).attr("aria-required", "true"));
                g.remote && (l = g.remote, delete g.remote, g = a.extend(g, {remote: l}));
                return g
            }
        }
    });
    a.extend(a.expr.pseudos || a.expr[":"], {
        blank: function (c) {
            return !a.trim("" + a(c).val())
        }, filled: function (c) {
            c = a(c).val();
            return null !== c && !!a.trim("" + c)
        }, unchecked: function (c) {
            return !a(c).prop("checked")
        }
    });
    a.validator = function (c, b) {
        this.settings = a.extend(!0, {}, a.validator.defaults, c);
        this.currentForm = b;
        this.init()
    };
    a.validator.format = function (c, b) {
        if (1 === arguments.length) return function () {
            var b = a.makeArray(arguments);
            b.unshift(c);
            return a.validator.format.apply(this, b)
        };
        if (void 0 === b) return c;
        2 < arguments.length && b.constructor !== Array && (b = a.makeArray(arguments).slice(1));
        b.constructor !== Array && (b = [b]);
        a.each(b, function (a, b) {
            c = c.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
                return b
            })
        });
        return c
    };
    a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (a) {
                this.lastActive = a;
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function (a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function (c, b) {
                var e = [16,
                    17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === b.which && "" === this.elementValue(c) || -1 !== a.inArray(b.keyCode, e) || (c.name in this.submitted || c.name in this.invalid) && this.element(c)
            },
            onclick: function (a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function (c, b, e) {
                "radio" === c.type ? this.findByName(c.name).addClass(b).removeClass(e) : a(c).addClass(b).removeClass(e)
            },
            unhighlight: function (c, b, e) {
                "radio" === c.type ? this.findByName(c.name).removeClass(b).addClass(e) :
                    a(c).removeClass(b).addClass(e)
            }
        }, setDefaults: function (c) {
            a.extend(a.validator.defaults, c)
        }, messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}."),
            step: a.validator.format("Please enter a multiple of {0}.")
        }, autoCreateRanges: !1, prototype: {
            init: function () {
                function c(b) {
                    !this.form &&
                    this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0]);
                    var c = a.data(this.form, "validator"), e = "on" + b.type.replace(/^validate/, ""), q = c.settings;
                    q[e] && !a(this).is(q.ignore) && q[e].call(c, this, b)
                }

                this.labelContainer = a(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm);
                this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest =
                    0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var b = this.groups = {}, e;
                a.each(this.settings.groups, function (c, e) {
                    "string" === typeof e && (e = e.split(/\s/));
                    a.each(e, function (a, e) {
                        b[e] = c
                    })
                });
                e = this.settings.rules;
                a.each(e, function (b, c) {
                    e[b] = a.validator.normalizeRule(c)
                });
                a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",
                    c).on("click.validate", "select, option, [type='radio'], [type='checkbox']", c);
                if (this.settings.invalidHandler) a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
                a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            }, form: function () {
                this.checkForm();
                a.extend(this.submitted, this.errorMap);
                this.invalid = a.extend({}, this.errorMap);
                this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]);
                this.showErrors();
                return this.valid()
            },
            checkForm: function () {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            }, element: function (c) {
                var b = this.clean(c), e = this.validationTargetFor(b), g = this, l = !0, p, q;
                void 0 === e ? delete this.invalid[b.name] : (this.prepareElement(e), this.currentElements = a(e), (q = this.groups[e.name]) && a.each(this.groups, function (a, c) {
                    c === q && a !== e.name && (b = g.validationTargetFor(g.clean(g.findByName(a)))) && b.name in g.invalid && (g.currentElements.push(b), l = g.check(b) &&
                        l)
                }), p = !1 !== this.check(e), l = l && p, this.invalid[e.name] = p ? !1 : !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(c).attr("aria-invalid", !p));
                return l
            }, showErrors: function (c) {
                if (c) {
                    var b = this;
                    a.extend(this.errorMap, c);
                    this.errorList = a.map(this.errorMap, function (a, c) {
                        return {message: a, element: b.findByName(c)[0]}
                    });
                    this.successList = a.grep(this.successList, function (a) {
                        return !(a.name in c)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap,
                    this.errorList) : this.defaultShowErrors()
            }, resetForm: function () {
                a.fn.resetForm && a(this.currentForm).resetForm();
                this.invalid = {};
                this.submitted = {};
                this.prepareForm();
                this.hideErrors();
                var c = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(c)
            }, resetElements: function (a) {
                var b;
                if (this.settings.unhighlight) for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass); else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            }, objectLength: function (a) {
                var b = 0, e;
                for (e in a) a[e] && b++;
                return b
            }, hideErrors: function () {
                this.hideThese(this.toHide)
            }, hideThese: function (a) {
                a.not(this.containers).text("");
                this.addWrapper(a).hide()
            }, valid: function () {
                return 0 === this.size()
            }, size: function () {
                return this.errorList.length
            }, focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (c) {
                }
            },
            findLastActive: function () {
                var c = this.lastActive;
                return c && 1 === a.grep(this.errorList, function (a) {
                    return a.element.name === c.name
                }).length && c
            }, elements: function () {
                var c = this, b = {};
                return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
                    var e = this.name || a(this).attr("name");
                    !e && c.settings.debug && window.console && console.error("%o has no name assigned", this);
                    this.hasAttribute("contenteditable") && (this.form =
                        a(this).closest("form")[0]);
                    return e in b || !c.objectLength(a(this).rules()) ? !1 : b[e] = !0
                })
            }, clean: function (c) {
                return a(c)[0]
            }, errors: function () {
                var c = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + c, this.errorContext)
            }, resetInternals: function () {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = a([]);
                this.toHide = a([])
            }, reset: function () {
                this.resetInternals();
                this.currentElements = a([])
            }, prepareForm: function () {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function (a) {
                this.reset();
                this.toHide = this.errorsFor(a)
            }, elementValue: function (c) {
                var b = a(c), e = c.type;
                if ("radio" === e || "checkbox" === e) return this.findByName(c.name).filter(":checked").val();
                if ("number" === e && "undefined" !== typeof c.validity) return c.validity.badInput ? "NaN" : b.val();
                c = c.hasAttribute("contenteditable") ? b.text() : b.val();
                if ("file" === e) {
                    if ("C:\\fakepath\\" === c.substr(0, 12)) return c.substr(12);
                    e = c.lastIndexOf("/");
                    if (0 <= e) return c.substr(e + 1);
                    e = c.lastIndexOf("\\");
                    return 0 <= e ?
                        c.substr(e + 1) : c
                }
                return "string" === typeof c ? c.replace(/\r/g, "") : c
            }, check: function (c) {
                c = this.validationTargetFor(this.clean(c));
                var b = a(c).rules(), e = a.map(b, function (a, b) {
                    return b
                }).length, g = !1, l = this.elementValue(c), p, q, k;
                if ("function" === typeof b.normalizer) {
                    l = b.normalizer.call(c, l);
                    if ("string" !== typeof l) throw new TypeError("The normalizer should return a string value.");
                    delete b.normalizer
                }
                for (q in b) {
                    k = {method: q, parameters: b[q]};
                    try {
                        if (p = a.validator.methods[q].call(this, l, c, k.parameters), "dependency-mismatch" ===
                        p && 1 === e) g = !0; else {
                            g = !1;
                            if ("pending" === p) {
                                this.toHide = this.toHide.not(this.errorsFor(c));
                                return
                            }
                            if (!p) return this.formatAndAdd(c, k), !1
                        }
                    } catch (r) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + c.id + ", check the '" + k.method + "' method.", r), r instanceof TypeError && (r.message += ".  Exception occurred when checking element " + c.id + ", check the '" + k.method + "' method."), r;
                    }
                }
                if (!g) return this.objectLength(b) && this.successList.push(c), !0
            }, customDataMessage: function (c,
                                            b) {
                return a(c).data("msg" + b.charAt(0).toUpperCase() + b.substring(1).toLowerCase()) || a(c).data("msg")
            }, customMessage: function (a, b) {
                var e = this.settings.messages[a];
                return e && (e.constructor === String ? e : e[b])
            }, findDefined: function () {
                for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a]
            }, defaultMessage: function (c, b) {
                "string" === typeof b && (b = {method: b});
                var e = this.findDefined(this.customMessage(c.name, b.method), this.customDataMessage(c, b.method), !this.settings.ignoreTitle && c.title ||
                    void 0, a.validator.messages[b.method], "<strong>Warning: No message defined for " + c.name + "</strong>"),
                    g = /\$?\{(\d+)\}/g;
                "function" === typeof e ? e = e.call(this, b.parameters, c) : g.test(e) && (e = a.validator.format(e.replace(g, "{$1}"), b.parameters));
                return e
            }, formatAndAdd: function (a, b) {
                var e = this.defaultMessage(a, b);
                this.errorList.push({message: e, element: a, method: b.method});
                this.errorMap[a.name] = e;
                this.submitted[a.name] = e
            }, addWrapper: function (a) {
                this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper)));
                return a
            }, defaultShowErrors: function () {
                var a, b;
                for (a = 0; this.errorList[a]; a++) b = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, b.element, this.settings.errorClass, this.settings.validClass), this.showLabel(b.element, b.message);
                this.errorList.length && (this.toShow = this.toShow.add(this.containers));
                if (this.settings.success) for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this,
                    b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            }, validElements: function () {
                return this.currentElements.not(this.invalidElements())
            }, invalidElements: function () {
                return a(this.errorList).map(function () {
                    return this.element
                })
            }, showLabel: function (c, b) {
                var e, g, l, p = this.errorsFor(c), q = this.idOrName(c), k = a(c).attr("aria-describedby");
                p.length ? (p.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                    p.html(b)) : (e = p = a("<" + this.settings.errorElement + ">").attr("id", q + "-error").addClass(this.settings.errorClass).html(b || ""), this.settings.wrapper && (e = p.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(e) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, e, a(c)) : e.insertAfter(c), p.is("label")) ? p.attr("for", q) : 0 === p.parents("label[for='" + this.escapeCssMeta(q) + "']").length && (e = p.attr("id"), k ? k.match(new RegExp("\\b" + this.escapeCssMeta(e) +
                    "\\b")) || (k += " " + e) : k = e, a(c).attr("aria-describedby", k), g = this.groups[c.name]) && (l = this, a.each(l.groups, function (b, c) {
                    c === g && a("[name='" + l.escapeCssMeta(b) + "']", l.currentForm).attr("aria-describedby", p.attr("id"))
                }));
                !b && this.settings.success && (p.text(""), "string" === typeof this.settings.success ? p.addClass(this.settings.success) : this.settings.success(p, c));
                this.toShow = this.toShow.add(p)
            }, errorsFor: function (c) {
                var b = this.escapeCssMeta(this.idOrName(c));
                c = a(c).attr("aria-describedby");
                b = "label[for='" +
                    b + "'], label[for='" + b + "'] *";
                c && (b = b + ", #" + this.escapeCssMeta(c).replace(/\s+/g, ", #"));
                return this.errors().filter(b)
            }, escapeCssMeta: function (a) {
                return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            }, idOrName: function (a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            }, validationTargetFor: function (c) {
                this.checkable(c) && (c = this.findByName(c.name));
                return a(c).not(this.settings.ignore)[0]
            }, checkable: function (a) {
                return /radio|checkbox/i.test(a.type)
            }, findByName: function (c) {
                return a(this.currentForm).find("[name='" +
                    this.escapeCssMeta(c) + "']")
            }, getLength: function (c, b) {
                switch (b.nodeName.toLowerCase()) {
                    case "select":
                        return a("option:selected", b).length;
                    case "input":
                        if (this.checkable(b)) return this.findByName(b.name).filter(":checked").length
                }
                return c.length
            }, depend: function (a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
            }, dependTypes: {
                "boolean": function (a) {
                    return a
                }, string: function (c, b) {
                    return !!a(c, b.form).length
                }, "function": function (a, b) {
                    return a(b)
                }
            }, optional: function (c) {
                var b = this.elementValue(c);
                return !a.validator.methods.required.call(this, b, c) && "dependency-mismatch"
            }, startRequest: function (c) {
                this.pending[c.name] || (this.pendingRequest++, a(c).addClass(this.settings.pendingClass), this.pending[c.name] = !0)
            }, stopRequest: function (c, b) {
                this.pendingRequest--;
                0 > this.pendingRequest && (this.pendingRequest = 0);
                delete this.pending[c.name];
                a(c).removeClass(this.settings.pendingClass);
                b && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !b && 0 ===
                    this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            }, previousValue: function (c, b) {
                b = "string" === typeof b && b || "remote";
                return a.data(c, "previousValue") || a.data(c, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(c, {method: b})
                })
            }, destroy: function () {
                this.resetForm();
                a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {required: !0},
            email: {email: !0},
            url: {url: !0},
            date: {date: !0},
            dateISO: {dateISO: !0},
            number: {number: !0},
            digits: {digits: !0},
            creditcard: {creditcard: !0}
        }, addClassRules: function (c, b) {
            c.constructor === String ? this.classRuleSettings[c] = b : a.extend(this.classRuleSettings, c)
        }, classRules: function (c) {
            var b = {};
            (c = a(c).attr("class")) && a.each(c.split(" "), function () {
                this in a.validator.classRuleSettings && a.extend(b, a.validator.classRuleSettings[this])
            });
            return b
        }, normalizeAttributeRule: function (a,
                                             b, e, g) {
            /min|max|step/.test(e) && (null === b || /number|range|text/.test(b)) && (g = Number(g), isNaN(g) && (g = void 0));
            g || 0 === g ? a[e] = g : b === e && "range" !== b && (a[e] = !0)
        }, attributeRules: function (c) {
            var b = {}, e = a(c), g = c.getAttribute("type"), l, p;
            for (l in a.validator.methods) "required" === l ? (p = c.getAttribute(l), "" === p && (p = !0), p = !!p) : p = e.attr(l), this.normalizeAttributeRule(b, g, l, p);
            b.maxlength && /-1|2147483647|524288/.test(b.maxlength) && delete b.maxlength;
            return b
        }, dataRules: function (c) {
            var b = {}, e = a(c);
            c = c.getAttribute("type");
            var g, l;
            for (g in a.validator.methods) l = e.data("rule" + g.charAt(0).toUpperCase() + g.substring(1).toLowerCase()), this.normalizeAttributeRule(b, c, g, l);
            return b
        }, staticRules: function (c) {
            var b = {}, e = a.data(c.form, "validator");
            e.settings.rules && (b = a.validator.normalizeRule(e.settings.rules[c.name]) || {});
            return b
        }, normalizeRules: function (c, b) {
            a.each(c, function (e, g) {
                if (!1 === g) delete c[e]; else if (g.param || g.depends) {
                    var l = !0;
                    switch (typeof g.depends) {
                        case "string":
                            l = !!a(g.depends, b.form).length;
                            break;
                        case "function":
                            l =
                                g.depends.call(b, b)
                    }
                    l ? c[e] = void 0 !== g.param ? g.param : !0 : (a.data(b.form, "validator").resetElements(a(b)), delete c[e])
                }
            });
            a.each(c, function (e, g) {
                c[e] = a.isFunction(g) && "normalizer" !== e ? g(b) : g
            });
            a.each(["minlength", "maxlength"], function () {
                c[this] && (c[this] = Number(c[this]))
            });
            a.each(["rangelength", "range"], function () {
                var b;
                c[this] && (a.isArray(c[this]) ? c[this] = [Number(c[this][0]), Number(c[this][1])] : "string" === typeof c[this] && (b = c[this].replace(/[\[\]]/g, "").split(/[\s,]+/), c[this] = [Number(b[0]), Number(b[1])]))
            });
            a.validator.autoCreateRanges && (null != c.min && null != c.max && (c.range = [c.min, c.max], delete c.min, delete c.max), null != c.minlength && null != c.maxlength && (c.rangelength = [c.minlength, c.maxlength], delete c.minlength, delete c.maxlength));
            return c
        }, normalizeRule: function (c) {
            if ("string" === typeof c) {
                var b = {};
                a.each(c.split(/\s/), function () {
                    b[this] = !0
                });
                c = b
            }
            return c
        }, addMethod: function (c, b, e) {
            a.validator.methods[c] = b;
            a.validator.messages[c] = void 0 !== e ? e : a.validator.messages[c];
            3 > b.length && a.validator.addClassRules(c,
                a.validator.normalizeRule(c))
        }, methods: {
            required: function (c, b, e) {
                return this.depend(e, b) ? "select" === b.nodeName.toLowerCase() ? (c = a(b).val()) && 0 < c.length : this.checkable(b) ? 0 < this.getLength(c, b) : 0 < c.length : "dependency-mismatch"
            }, email: function (a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            }, url: function (a, b) {
                return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)
            },
            date: function (a, b) {
                return this.optional(b) || !/Invalid|NaN/.test((new Date(a)).toString())
            }, dateISO: function (a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            }, number: function (a, b) {
                return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            }, digits: function (a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            }, minlength: function (c, b, e) {
                c = a.isArray(c) ? c.length : this.getLength(c, b);
                return this.optional(b) || c >= e
            }, maxlength: function (c, b, e) {
                c =
                    a.isArray(c) ? c.length : this.getLength(c, b);
                return this.optional(b) || c <= e
            }, rangelength: function (c, b, e) {
                c = a.isArray(c) ? c.length : this.getLength(c, b);
                return this.optional(b) || c >= e[0] && c <= e[1]
            }, min: function (a, b, e) {
                return this.optional(b) || a >= e
            }, max: function (a, b, e) {
                return this.optional(b) || a <= e
            }, range: function (a, b, e) {
                return this.optional(b) || a >= e[0] && a <= e[1]
            }, step: function (c, b, e) {
                var g = a(b).attr("type"), l = "Step attribute on input type " + g + " is not supported.",
                    p = ["text", "number", "range"], q = new RegExp("\\b" +
                    g + "\\b"), k = function (a) {
                        return (a = ("" + a).match(/(?:\.(\d+))?$/)) ? a[1] ? a[1].length : 0 : 0
                    }, r = !0;
                if (g && !q.test(p.join())) throw Error(l);
                g = k(e);
                if (k(c) > g || 0 !== Math.round(c * Math.pow(10, g)) % Math.round(e * Math.pow(10, g))) r = !1;
                return this.optional(b) || r
            }, equalTo: function (c, b, e) {
                e = a(e);
                if (this.settings.onfocusout && e.not(".validate-equalTo-blur").length) e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
                    a(b).valid()
                });
                return c === e.val()
            }, remote: function (c, b, e, g) {
                if (this.optional(b)) return "dependency-mismatch";
                g = "string" === typeof g && g || "remote";
                var l = this.previousValue(b, g), p, q;
                this.settings.messages[b.name] || (this.settings.messages[b.name] = {});
                l.originalMessage = l.originalMessage || this.settings.messages[b.name][g];
                this.settings.messages[b.name][g] = l.message;
                e = "string" === typeof e && {url: e} || e;
                q = a.param(a.extend({data: c}, e.data));
                if (l.old === q) return l.valid;
                l.old = q;
                p = this;
                this.startRequest(b);
                q = {};
                q[b.name] = c;
                a.ajax(a.extend(!0, {
                    mode: "abort", port: "validate" + b.name, dataType: "json", data: q, context: p.currentForm,
                    success: function (a) {
                        var e = !0 === a || "true" === a, q;
                        p.settings.messages[b.name][g] = l.originalMessage;
                        e ? (q = p.formSubmitted, p.resetInternals(), p.toHide = p.errorsFor(b), p.formSubmitted = q, p.successList.push(b), p.invalid[b.name] = !1, p.showErrors()) : (q = {}, a = a || p.defaultMessage(b, {
                            method: g,
                            parameters: c
                        }), q[b.name] = l.message = a, p.invalid[b.name] = !0, p.showErrors(q));
                        l.valid = e;
                        p.stopRequest(b, e)
                    }
                }, e));
                return "pending"
            }
        }
    });
    var q = {}, r;
    a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, e) {
        b = a.port;
        "abort" === a.mode && (q[b] && q[b].abort(),
            q[b] = e)
    }) : (r = a.ajax, a.ajax = function (c) {
        var b = ("port" in c ? c : a.ajaxSettings).port;
        return "abort" === ("mode" in c ? c : a.ajaxSettings).mode ? (q[b] && q[b].abort(), q[b] = r.apply(this, arguments), q[b]) : r.apply(this, arguments)
    });
    return a
});
(function (a) {
    "function" === typeof define && define.amd ? define(["jquery", "../jquery.validate"], a) : "object" === typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
})(function (a) {
    a.extend(a.validator.messages, {
        required: "\ud544\uc218 \ud56d\ubaa9\uc785\ub2c8\ub2e4.",
        remote: "\ud56d\ubaa9\uc744 \uc218\uc815\ud558\uc138\uc694.",
        email: "\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 E-Mail\uc8fc\uc18c\uc785\ub2c8\ub2e4.",
        url: "\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 URL\uc785\ub2c8\ub2e4.",
        date: "\uc62c\ubc14\ub978 \ub0a0\uc9dc\ub97c \uc785\ub825\ud558\uc138\uc694.",
        dateISO: "\uc62c\ubc14\ub978 \ub0a0\uc9dc(ISO)\ub97c \uc785\ub825\ud558\uc138\uc694.",
        number: "\uc720\ud6a8\ud55c \uc22b\uc790\uac00 \uc544\ub2d9\ub2c8\ub2e4.",
        digits: "\uc22b\uc790\ub9cc \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4.",
        creditcard: "\uc2e0\uc6a9\uce74\ub4dc \ubc88\ud638\uac00 \ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
        equalTo: "\uac19\uc740 \uac12\uc744 \ub2e4\uc2dc \uc785\ub825\ud558\uc138\uc694.",
        extension: "\uc62c\ubc14\ub978 \ud655\uc7a5\uc790\uac00 \uc544\ub2d9\ub2c8\ub2e4.",
        maxlength: a.validator.format("{0}\uc790\ub97c \ub118\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. "),
        minlength: a.validator.format("{0}\uc790 \uc774\uc0c1 \uc785\ub825\ud558\uc138\uc694."),
        rangelength: a.validator.format("\ubb38\uc790 \uae38\uc774\uac00 {0} \uc5d0\uc11c {1} \uc0ac\uc774\uc758 \uac12\uc744 \uc785\ub825\ud558\uc138\uc694."),
        range: a.validator.format("{0} \uc5d0\uc11c {1} \uc0ac\uc774\uc758 \uac12\uc744 \uc785\ub825\ud558\uc138\uc694."),
        max: a.validator.format("{0} \uc774\ud558\uc758 \uac12\uc744 \uc785\ub825\ud558\uc138\uc694."),
        min: a.validator.format("{0} \uc774\uc0c1\uc758 \uac12\uc744 \uc785\ub825\ud558\uc138\uc694.")
    });
    return a
});
var urlize = function () {
    function a(a, b) {
        return a.substr(a.length - b.length, b.length) == b
    }

    function q(a, b) {
        for (var c = 0, e = 0; ;) if (e = a.indexOf(b, e), -1 != e) c++, e += b.length; else break;
        return c
    }

    function r(a) {
        var b = a.indexOf(":");
        a = a.substring(0, b).toLowerCase() + a.substring(b);
        return -1 == a.indexOf("%") || a.match(l) ? encodeURI(a) : a
    }

    function c(a, b) {
        var c = a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
        b && !b.django_compatible && (c = c.replace(/\//g, "&#47;"));
        return c
    }

    function b(a) {
        a = 2 == a.length && "object" == typeof a[1] ? a[1] : {
            nofollow: a[1],
            autoescape: a[2],
            trim_url_limit: a[3],
            target: a[4]
        };
        "django_compatible" in a || (a.django_compatible = !0);
        return a
    }

    function e(e, l) {
        l = b(arguments);
        for (var H = l.django_compatible ? L : E, D = l.django_compatible ? p : t, V = l.django_compatible ? k : s, R = new RegExp("^www\\.|^(?!http)\\w[^@]+\\.(" + (l.top_level_domains || z).join("|") + ")$", "i"), H = g(e, H), T = 0; T < H.length; T++) {
            var M = H[T];
            if (-1 != M.indexOf(".") || -1 != M.indexOf("@") || -1 != M.indexOf(":")) {
                for (var N =
                    "", A = M, Y = "", v = 0; v < D.length; v++) {
                    var aa = D[v];
                    a(A, aa) && (A = A.substr(0, A.length - aa.length), Y = aa + Y)
                }
                for (v = 0; v < V.length; v++) {
                    var aa = V[v][0], da = V[v][1], J = aa;
                    A.substr(0, J.length) == J && (A = A.substr(aa.length), N += aa);
                    a(A, da) && q(A, da) == q(A, aa) + 1 && (A = A.substr(0, A.length - da.length), Y = da + Y)
                }
                v = void 0;
                aa = l.nofollow ? ' rel="nofollow"' : "";
                da = l.target ? ' target="' + l.target + '"' : "";
                A.match(C) ? v = r(A) : A.match(R) ? v = r("http://" + A) : -1 == A.indexOf(":") && A.match(h) && (v = "mailto:" + A, aa = "");
                if (v) {
                    M = A;
                    A = void 0;
                    if ("http" === l.trim || "www" ===
                        l.trim) M = M.replace(/^https?:\/\//i, "");
                    "www" === l.trim && (M = M.replace(/^www\./i, ""));
                    void 0 === A && (A = l.trim_url_limit);
                    M = A && M.length > A ? M.substr(0, A - 3) + "..." : M;
                    l.autoescape && (N = c(N, l), Y = c(Y, l), v = v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"), M = c(M, l));
                    A = '<a href="' + v + '"' + aa + da + ">" + M + "</a>";
                    0 > v.indexOf("//" + location.hostname + "/") && (A += ' <a href="' + v + '" target="_blank" title="\uc0c8\ucc3d\uc73c\ub85c \uc5f4\uae30"><i class="fa fa-external-link"></i></a>');
                    H[T] =
                        N + A + Y
                } else l.autoescape && (H[T] = c(M, l))
            } else l.autoescape && (H[T] = c(M, l))
        }
        return H.join("")
    }

    var g;
    g = g || function (a) {
        var b = String.prototype.split, c = /()??/.exec("")[1] === a;
        return function (e, g, h) {
            if ("[object RegExp]" !== Object.prototype.toString.call(g)) return b.call(e, g, h);
            var k = [],
                l = (g.ignoreCase ? "i" : "") + (g.multiline ? "m" : "") + (g.extended ? "x" : "") + (g.sticky ? "y" : ""),
                p = 0;
            g = new RegExp(g.source, l + "g");
            var q, r, s;
            e += "";
            c || (q = new RegExp("^" + g.source + "$(?!\\s)", l));
            for (h = h === a ? 4294967295 : h >>> 0; r = g.exec(e);) {
                l = r.index +
                    r[0].length;
                if (l > p && (k.push(e.slice(p, r.index)), !c && 1 < r.length && r[0].replace(q, function () {
                    for (var b = 1; b < arguments.length - 2; b++) arguments[b] === a && (r[b] = a)
                }), 1 < r.length && r.index < e.length && Array.prototype.push.apply(k, r.slice(1)), s = r[0].length, p = l, k.length >= h)) break;
                g.lastIndex === r.index && g.lastIndex++
            }
            p === e.length ? !s && g.test("") || k.push("") : k.push(e.slice(p));
            return k.length > h ? k.slice(0, h) : k
        }
    }();
    var l = /%(?![0-9A-Fa-f]{2})/, p = [".", ",", ":", ";"], t = [".", ",", ":", ";", ".)"],
        k = [["(", ")"], ["<", ">"], ["&lt;",
            "&gt;"]], s = [["(", ")"], ["<", ">"], ["&lt;", "&gt;"], ["\u201c", "\u201d"], ["\u2018", "\u2019"]],
        L = /(\s+)/, E = /([\s<>"]+)/, C = /^https?:\/\/\w/i, z = "com edu gov int mil net org".split(" "),
        h = /^\S+@\S+\.\S+$/;
    e.test = {};
    e.test.split = g;
    e.test.convert_arguments = b;
    return e
}(), autoLinker = function (a) {
    $(a).contents().each(function () {
        var a = $(this);
        if (this.nodeType == this.TEXT_NODE) a.replaceWith(urlize(this.textContent, !0, !0)); else if (!a.is("a, pre, code")) autoLinker(this); else if (a.is('a[href][target!="_blank"]')) {
            var r =
                $(this).contents();
            1 == r.length && r[0].nodeType == this.TEXT_NODE && !/^[#@]+/.test(r[0].textContent) && 0 > a.attr("href").indexOf("//" + location.hostname + "/") && (r = $("<div/>").append($(this).clone()).html(), $(this).replaceWith(r + ' <a href="' + a.attr("href") + '" target="_blank" title="\uc0c8\ucc3d\uc73c\ub85c \uc5f4\uae30"><i class="fa fa-external-link"></i></a>'))
        }
    })
}, whereToPlacePopover = function () {
    return 768 > $(window).width() ? "bottom" : "right"
};
String.prototype.trim || (String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/gm, "")
});
var isMobile = function () {
    var a = !1, q = navigator.userAgent || navigator.vendor || window.opera;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(q) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(q.substr(0,
        4))) a = !0;
    return a
};
"undefined" !== typeof jQuery && function (a) {
    a('[data-toggle="tooltip"]').tooltip();
    a.fn.spin.presets = {
        tiny: {lines: 8, length: 1, width: 2, radius: 4, color: "#56595c"},
        small: {lines: 11, length: 0, width: 3, radius: 10, shadow: !0, hwaccel: !0, color: "#56595c"},
        large: {lines: 10, length: 8, width: 4, radius: 8, color: "#56595c"}
    };
    a.ajaxSetup({
        statusCode: {
            401: function () {
                location.href = contextPath + "/login/auth?redirectUrl=" + encodedURL
            }
        }
    });
    a(".sidebar-header").click(function () {
        a(".sidebar").is(".open") ? (a(".sidebar").removeClass("open"), a(".sidebar-category-nav").removeClass("open")) :
            (a(".sidebar").addClass("open"), a(".sidebar-category-nav").addClass("open"))
    });
    a("html, body").click(function (q) {
        a(q.target).is(".sidebar-header  *, .nav-main *, .sidebar-category-nav *, #search-google-form *") || (a(".sidebar").removeClass("open"), a(".sidebar-category-nav").removeClass("open"));
        a(q.target).is("#search-google, #search-google *, #search-google-popover *") || a("#search-google").popover("hide");
        a(q.target).is("#user-func, #user-func  *, #user-func-popover *") || a("#user-func").popover("hide");
        a(q.target).is("#user-notification, #user-notification *, #notification-popover *") || a("#user-notification").popover("hide")
    });
    a.onImageUpload = function (q) {
        return function (r) {
            var c = function (b, c) {
                return a.Deferred(function (g) {
                    var l = a("<img>");
                    l.one("load", function () {
                        l.off("error abort");
                        g.resolve(l)
                    }).one("error abort", function () {
                        l.off("load").detach();
                        g.reject(l)
                    }).css({display: "none"}).appendTo(document.body).attr({src: b, "data-filename": c})
                }).promise()
            };
            r = a(".note-image-dialog .note-modal-form");
            a('<iframe src="about:blank"  style="display: none;" name="imageUploadHandlerFrame"></iframe>').appendTo("body");
            a.imageUploaded = function (a, e) {
                c(a, e).then(function (a) {
                    var b = a.width() >= q.width() ? "100%" : a.width();
                    a.css({display: "", width: b});
                    q.summernote("insertNode", a.get(0))
                })
            };
            r.attr({
                enctype: "multipart/form-data",
                target: "imageUploadHandlerFrame",
                action: contextPath + "/file/image",
                method: "post"
            });
            r[0].submit()
        }
    };
    a.extend(a.summernote.options, {
        lang: "ko-KR",
        height: 300,
        tabsize: 2,
        placeholder: "\ub0b4\uc6a9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
        prettifyHtml: !1,
        disableLinkTarget: !0,
        shortcuts: !0,
        toolbar: isMobile() ? [["style", ["style"]], ["font", ["bold", "italic", "underline", "strikethrough", "clear"]], ["color", ["color"]], ["para", ["ul", "ol", "paragraph", "table"]], ["insert", ["codeblock", "link", "picture", "video", "hr"]], ["view", ["fullscreen", "codeview", "help"]]] : [["style", ["style"]], ["font", ["bold", "italic", "underline", "strikethrough", "clear"]], ["color", ["color"]], ["para", ["ul", "ol", "table"]], ["insert", ["codeblock", "link", "picture", "video", "hr"]], ["view",
            ["fullscreen", "codeview", "help"]]]
    })
}(jQuery);