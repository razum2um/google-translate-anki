/* Copyright 2014 Google */
(function() {
    var h, aa = aa || {},
        m = this,
        n = function(a) {
            return void 0 !== a
        },
        p = function(a) {
            return "string" == typeof a
        },
        ba = function(a) {
            return "number" == typeof a
        },
        q = function() {},
        r = function(a) {
            a.Ua = void 0;
            a.H = function() {
                return a.Ua ? a.Ua : a.Ua = new a
            }
        },
        ca = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice &&
                        "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        t = function(a) {
            return "array" == ca(a)
        },
        da = function(a) {
            var b = ca(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        u = function(a) {
            return "function" == ca(a)
        },
        v = function(a) {
            var b =
                typeof a;
            return "object" == b && null != a || "function" == b
        },
        ea = "closure_uid_" + (1E9 * Math.random() >>> 0),
        fa = 0,
        ha = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ia = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        w = function(a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ?
                w = ha : w = ia;
            return w.apply(null, arguments)
        },
        x = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        },
        ja = Date.now || function() {
            return +new Date
        },
        y = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.l = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Bd = function(a, c, f) {
                for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
                return b.prototype[c].apply(a, d)
            }
        };
    var z = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, z);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    y(z, Error);
    z.prototype.name = "CustomError";
    var ka;
    var la = function(a, b) {
            for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
            return d + c.join("%s")
        },
        ma = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        ua = function(a) {
            if (!na.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(oa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(pa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(qa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ra, "&quot;")); - 1 != a.indexOf("'") &&
                (a = a.replace(sa, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(ta, "&#0;"));
            return a
        },
        oa = /&/g,
        pa = /</g,
        qa = />/g,
        ra = /"/g,
        sa = /'/g,
        ta = /\x00/g,
        na = /[\x00&<>"']/,
        wa = function(a, b) {
            var c = 0;
            a = ma(String(a)).split(".");
            b = ma(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = va(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1],
                        10)) || va(0 == f[2].length, 0 == g[2].length) || va(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        va = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var xa = function(a, b) {
        b.unshift(a);
        z.call(this, la.apply(null, b));
        b.shift()
    };
    y(xa, z);
    xa.prototype.name = "AssertionError";
    var ya = function(a, b, c, d) {
            var e = "Assertion failed";
            if (c) {
                e += ": " + c;
                var f = d
            } else a && (e += ": " + a, f = b);
            throw new xa("" + e, f || []);
        },
        A = function(a, b, c) {
            a || ya("", null, b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        za = function(a, b) {
            throw new xa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        },
        Aa = function(a, b, c) {
            ba(a) || ya("Expected number but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Ba = function(a, b, c) {
            p(a) || ya("Expected string but got %s: %s.", [ca(a),
                a
            ], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Ca = function(a, b, c) {
            u(a) || ya("Expected function but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Da = function(a, b, c) {
            v(a) && 1 == a.nodeType || ya("Expected Element but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Fa = function(a, b, c, d) {
            a instanceof b || ya("Expected instanceof %s but got %s.", [Ea(b), Ea(a)], c, Array.prototype.slice.call(arguments, 3));
            return a
        },
        Ea = function(a) {
            return a instanceof Function ? a.displayName ||
                a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
        };
    var Ga = Array.prototype.indexOf ? function(a, b, c) {
            A(null != a.length);
            return Array.prototype.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (p(a)) return p(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Ha = Array.prototype.forEach ? function(a, b, c) {
            A(null != a.length);
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Ia = Array.prototype.filter ? function(a,
            b, c) {
            A(null != a.length);
            return Array.prototype.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, g = p(a) ? a.split("") : a, k = 0; k < d; k++)
                if (k in g) {
                    var l = g[k];
                    b.call(c, l, k, a) && (e[f++] = l)
                }
            return e
        },
        Ja = Array.prototype.map ? function(a, b, c) {
            A(null != a.length);
            return Array.prototype.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = p(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
            return e
        },
        Ka = Array.prototype.some ? function(a, b, c) {
            A(null != a.length);
            return Array.prototype.some.call(a,
                b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return !0;
            return !1
        },
        La = Array.prototype.every ? function(a, b, c) {
            A(null != a.length);
            return Array.prototype.every.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && !b.call(c, e[f], f, a)) return !1;
            return !0
        },
        Na = function(a) {
            a: {
                var b = Ma;
                for (var c = a.length, d = p(a) ? a.split("") : a, e = 0; e < c; e++)
                    if (e in d && b.call(void 0, d[e], e, a)) {
                        b = e;
                        break a
                    }
                b = -1
            }
            return 0 > b ? null : p(a) ? a.charAt(b) : a[b]
        },
        Oa = function(a, b) {
            return 0 <= Ga(a, b)
        },
        Pa = function(a, b) {
            b = Ga(a, b);
            var c;
            if (c = 0 <= b) A(null != a.length), Array.prototype.splice.call(a, b, 1);
            return c
        },
        Qa = function(a) {
            return Array.prototype.concat.apply([], arguments)
        },
        Ra = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        };
    var B;
    a: {
        var Sa = m.navigator;
        if (Sa) {
            var Ta = Sa.userAgent;
            if (Ta) {
                B = Ta;
                break a
            }
        }
        B = ""
    }
    var D = function(a) {
        return -1 != B.indexOf(a)
    };
    var Ua = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        Va = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        },
        Wa = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        },
        Xa = function(a, b) {
            for (var c in a)
                if (a[c] == b) return !0;
            return !1
        },
        Ya = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Za = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Ya.length; f++) c = Ya[f], Object.prototype.hasOwnProperty.call(d,
                    c) && (a[c] = d[c])
            }
        },
        $a = function(a) {
            var b = arguments.length;
            if (1 == b && t(arguments[0])) return $a.apply(null, arguments[0]);
            if (b % 2) throw Error("Uneven number of arguments");
            for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
            return c
        },
        ab = function(a) {
            var b = arguments.length;
            if (1 == b && t(arguments[0])) return ab.apply(null, arguments[0]);
            for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
            return c
        };
    var bb = function() {
        return (D("Chrome") || D("CriOS")) && !D("Edge")
    };
    var cb = function() {
        return D("iPhone") && !D("iPod") && !D("iPad")
    };
    var db = function(a) {
        db[" "](a);
        return a
    };
    db[" "] = q;
    var fb = function(a, b) {
        var c = eb;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var gb = D("Opera"),
        E = D("Trident") || D("MSIE"),
        F = D("Edge"),
        hb = D("Gecko") && !(-1 != B.toLowerCase().indexOf("webkit") && !D("Edge")) && !(D("Trident") || D("MSIE")) && !D("Edge"),
        G = -1 != B.toLowerCase().indexOf("webkit") && !D("Edge"),
        H = D("Macintosh"),
        ib = D("Windows"),
        jb = D("Android"),
        kb = cb(),
        lb = D("iPad"),
        mb = D("iPod"),
        nb = function() {
            var a = m.document;
            return a ? a.documentMode : void 0
        },
        ob;
    a: {
        var pb = "",
            qb = function() {
                var a = B;
                if (hb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (F) return /Edge\/([\d\.]+)/.exec(a);
                if (E) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (G) return /WebKit\/(\S+)/.exec(a);
                if (gb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();qb && (pb = qb ? qb[1] : "");
        if (E) {
            var rb = nb();
            if (null != rb && rb > parseFloat(pb)) {
                ob = String(rb);
                break a
            }
        }
        ob = pb
    }
    var sb = ob,
        eb = {},
        I = function(a) {
            return fb(a, function() {
                return 0 <= wa(sb, a)
            })
        },
        tb;
    var ub = m.document;
    tb = ub && E ? nb() || ("CSS1Compat" == ub.compatMode ? parseInt(sb, 10) : 5) : void 0;
    var vb = D("Firefox"),
        wb = cb() || D("iPod"),
        xb = D("iPad"),
        yb = D("Android") && !(bb() || D("Firefox") || D("Opera") || D("Silk")),
        zb = bb(),
        Ab = D("Safari") && !(bb() || D("Coast") || D("Opera") || D("Edge") || D("Silk") || D("Android")) && !(cb() || D("iPad") || D("iPod"));
    var Bb = function() {},
        Cb = "function" == typeof Uint8Array,
        Fb = function(a, b, c) {
            a.b = null;
            b || (b = []);
            a.m = void 0;
            a.c = -1;
            a.a = b;
            a: {
                if (a.a.length) {
                    b = a.a.length - 1;
                    var d = a.a[b];
                    if (d && "object" == typeof d && !t(d) && !(Cb && d instanceof Uint8Array)) {
                        a.i = b - a.c;
                        a.h = d;
                        break a
                    }
                }
                a.i = Number.MAX_VALUE
            }
            a.j = {};
            if (c)
                for (b = 0; b < c.length; b++) d = c[b], d < a.i ? (d += a.c, a.a[d] = a.a[d] || Db) : (Eb(a), a.h[d] = a.h[d] || Db)
        },
        Db = Object.freeze ? Object.freeze([]) : [],
        Eb = function(a) {
            var b = a.i + a.c;
            a.a[b] || (a.h = a.a[b] = {})
        },
        J = function(a, b, c) {
            b < a.i ? a.a[b + a.c] =
                c : (Eb(a), a.h[b] = c)
        },
        Gb = function(a) {
            if (a.b)
                for (var b in a.b) {
                    var c = a.b[b];
                    if (t(c))
                        for (var d = 0; d < c.length; d++) c[d] && c[d].qa();
                    else c && c.qa()
                }
        };
    Bb.prototype.qa = function() {
        Gb(this);
        return this.a
    };
    Bb.prototype.toString = function() {
        Gb(this);
        return this.a.toString()
    };
    var Hb = function(a) {
            return function() {
                return a
            }
        },
        Ib = function(a, b) {
            for (var c = 0; c < b.length - 2; c += 3) {
                var d = b.charAt(c + 2);
                d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
                d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
                a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
            }
            return a
        },
        Jb = null,
        Kb = function(a) {
            if (null !== Jb) var b = Jb;
            else {
                b = Hb(String.fromCharCode(84));
                var c = Hb(String.fromCharCode(75));
                b = [b(), b()];
                b[1] = c();
                b = (Jb = window[b.join(c())] || "") || ""
            }
            var d = Hb(String.fromCharCode(116));
            c = Hb(String.fromCharCode(107));
            d = [d(), d()];
            d[1] = c();
            c = "&" + d.join("") +
                "=";
            d = b.split(".");
            b = Number(d[0]) || 0;
            for (var e = [], f = 0, g = 0; g < a.length; g++) {
                var k = a.charCodeAt(g);
                128 > k ? e[f++] = k : (2048 > k ? e[f++] = k >> 6 | 192 : (55296 == (k & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512) ? (k = 65536 + ((k & 1023) << 10) + (a.charCodeAt(++g) & 1023), e[f++] = k >> 18 | 240, e[f++] = k >> 12 & 63 | 128) : e[f++] = k >> 12 | 224, e[f++] = k >> 6 & 63 | 128), e[f++] = k & 63 | 128)
            }
            a = b;
            for (f = 0; f < e.length; f++) a += e[f], a = Ib(a, "+-a^+6");
            a = Ib(a, "+-3^+b+-f");
            a ^= Number(d[1]) || 0;
            0 > a && (a = (a & 2147483647) + 2147483648);
            a %= 1E6;
            return c + (a.toString() + "." +
                (a ^ b))
        };
    var Lb = Object.freeze || function(a) {
        return a
    };
    var Mb = !E || 9 <= Number(tb),
        Nb = !E || 9 <= Number(tb),
        Ob = E && !I("9");
    !G || I("528");
    hb && I("1.9b") || E && I("8") || gb && I("9.5") || G && I("528");
    hb && !I("8") || E && I("9");
    var Pb = function() {
        if (!m.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        m.addEventListener("test", q, b);
        m.removeEventListener("test", q, b);
        return a
    }();
    var Qb = function() {
        this.D = this.D;
        this.K = this.K
    };
    Qb.prototype.D = !1;
    Qb.prototype.ka = function() {
        this.D || (this.D = !0, this.B())
    };
    var Rb = function(a, b) {
        a.D ? n(void 0) ? b.call(void 0) : b() : (a.K || (a.K = []), a.K.push(n(void 0) ? w(b, void 0) : b))
    };
    Qb.prototype.B = function() {
        if (this.K)
            for (; this.K.length;) this.K.shift()()
    };
    var Sb = function(a) {
        a && "function" == typeof a.ka && a.ka()
    };
    var Tb = function(a, b) {
        this.type = a;
        this.a = this.target = b;
        this.c = !1;
        this.ob = !0
    };
    Tb.prototype.i = function() {
        this.c = !0
    };
    Tb.prototype.h = function() {
        this.ob = !1
    };
    var K = function(a, b) {
        Tb.call(this, a ? a.type : "");
        this.relatedTarget = this.a = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.keyCode = 0;
        this.j = this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.b = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.a = b;
            if (b = a.relatedTarget) {
                if (hb) {
                    a: {
                        try {
                            db(b.nodeName);
                            var e = !0;
                            break a
                        } catch (f) {}
                        e = !1
                    }
                    e || (b = null)
                }
            } else "mouseover" ==
                c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey =
                a.shiftKey;
            this.metaKey = a.metaKey;
            this.j = H ? a.metaKey : a.ctrlKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = p(a.pointerType) ? a.pointerType : Ub[a.pointerType] || "";
            this.b = a;
            a.defaultPrevented && this.h()
        }
    };
    y(K, Tb);
    var Vb = Lb([1, 4, 2]),
        Ub = Lb({
            2: "touch",
            3: "pen",
            4: "mouse"
        }),
        Wb = function(a) {
            return Mb ? 0 == a.b.button : "click" == a.type ? !0 : !!(a.b.button & Vb[0])
        };
    K.prototype.i = function() {
        K.l.i.call(this);
        this.b.stopPropagation ? this.b.stopPropagation() : this.b.cancelBubble = !0
    };
    K.prototype.h = function() {
        K.l.h.call(this);
        var a = this.b;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Ob) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var Xb = "closure_listenable_" + (1E6 * Math.random() | 0),
        Yb = function(a) {
            return !(!a || !a[Xb])
        },
        Zb = 0;
    var $b = function(a, b, c, d, e) {
            this.listener = a;
            this.proxy = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Ia = e;
            this.key = ++Zb;
            this.removed = this.Da = !1
        },
        ac = function(a) {
            a.removed = !0;
            a.listener = null;
            a.proxy = null;
            a.src = null;
            a.Ia = null
        };
    var bc = function(a) {
        this.src = a;
        this.a = {};
        this.b = 0
    };
    bc.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.a[f];
        a || (a = this.a[f] = [], this.b++);
        var g = cc(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Da = !1)) : (b = new $b(b, this.src, f, !!d, e), b.Da = c, a.push(b));
        return b
    };
    bc.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.a)) return !1;
        var e = this.a[a];
        b = cc(e, b, c, d);
        return -1 < b ? (ac(e[b]), A(null != e.length), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1
    };
    var dc = function(a, b) {
        var c = b.type;
        c in a.a && Pa(a.a[c], b) && (ac(b), 0 == a.a[c].length && (delete a.a[c], a.b--))
    };
    bc.prototype.removeAll = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.a)
            if (!a || c == a) {
                for (var d = this.a[c], e = 0; e < d.length; e++) ++b, ac(d[e]);
                delete this.a[c];
                this.b--
            }
        return b
    };
    var ec = function(a, b, c, d, e) {
            a = a.a[b.toString()];
            b = -1;
            a && (b = cc(a, c, d, e));
            return -1 < b ? a[b] : null
        },
        cc = function(a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var f = a[e];
                if (!f.removed && f.listener == b && f.capture == !!c && f.Ia == d) return e
            }
            return -1
        };
    var fc = "closure_lm_" + (1E6 * Math.random() | 0),
        gc = {},
        hc = 0,
        jc = function(a, b, c, d, e) {
            if (d && d.once) return ic(a, b, c, d, e);
            if (t(b)) {
                for (var f = 0; f < b.length; f++) jc(a, b[f], c, d, e);
                return null
            }
            c = kc(c);
            return Yb(a) ? a.listen(b, c, v(d) ? !!d.capture : !!d, e) : lc(a, b, c, !1, d, e)
        },
        lc = function(a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var g = v(e) ? !!e.capture : !!e,
                k = mc(a);
            k || (a[fc] = k = new bc(a));
            c = k.add(b, c, d, g, f);
            if (c.proxy) return c;
            d = nc();
            c.proxy = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) Pb || (e = g), void 0 === e && (e = !1),
                a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(oc(b.toString()), d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            hc++;
            return c
        },
        nc = function() {
            var a = pc,
                b = Nb ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        ic = function(a, b, c, d, e) {
            if (t(b)) {
                for (var f = 0; f < b.length; f++) ic(a, b[f], c, d, e);
                return null
            }
            c = kc(c);
            return Yb(a) ? a.h.add(String(b), c, !0, v(d) ? !!d.capture : !!d, e) : lc(a, b, c, !0, d, e)
        },
        qc = function(a,
            b, c, d, e) {
            if (t(b))
                for (var f = 0; f < b.length; f++) qc(a, b[f], c, d, e);
            else d = v(d) ? !!d.capture : !!d, c = kc(c), Yb(a) ? a.W(b, c, d, e) : a && (a = mc(a)) && (b = ec(a, b, c, d, e)) && rc(b)
        },
        rc = function(a) {
            if (!ba(a) && a && !a.removed) {
                var b = a.src;
                if (Yb(b)) dc(b.h, a);
                else {
                    var c = a.type,
                        d = a.proxy;
                    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(oc(c), d);
                    hc--;
                    (c = mc(b)) ? (dc(c, a), 0 == c.b && (c.src = null, b[fc] = null)) : ac(a)
                }
            }
        },
        oc = function(a) {
            return a in gc ? gc[a] : gc[a] = "on" + a
        },
        tc = function(a, b, c, d) {
            var e = !0;
            if (a =
                mc(a))
                if (b = a.a[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.capture == c && !f.removed && (f = sc(f, d), e = e && !1 !== f)
                    }
            return e
        },
        sc = function(a, b) {
            var c = a.listener,
                d = a.Ia || a.src;
            a.Da && rc(a);
            return c.call(d, b)
        },
        pc = function(a, b) {
            if (a.removed) return !0;
            if (!Nb) {
                if (!b) a: {
                    b = ["window", "event"];
                    for (var c = m, d = 0; d < b.length; d++)
                        if (c = c[b[d]], null == c) {
                            b = null;
                            break a
                        }
                    b = c
                }
                d = b;
                b = new K(d, this);
                c = !0;
                if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                    a: {
                        var e = !1;
                        if (0 == d.keyCode) try {
                            d.keyCode = -1;
                            break a
                        } catch (g) {
                            e = !0
                        }
                        if (e ||
                            void 0 == d.returnValue) d.returnValue = !0
                    }
                    d = [];
                    for (e = b.a; e; e = e.parentNode) d.push(e);a = a.type;
                    for (e = d.length - 1; !b.c && 0 <= e; e--) {
                        b.a = d[e];
                        var f = tc(d[e], a, !0, b);
                        c = c && f
                    }
                    for (e = 0; !b.c && e < d.length; e++) b.a = d[e],
                    f = tc(d[e], a, !1, b),
                    c = c && f
                }
                return c
            }
            return sc(a, new K(b, this))
        },
        mc = function(a) {
            a = a[fc];
            return a instanceof bc ? a : null
        },
        uc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        kc = function(a) {
            A(a, "Listener can not be null.");
            if (u(a)) return a;
            A(a.handleEvent, "An object listener must have handleEvent method.");
            a[uc] ||
                (a[uc] = function(b) {
                    return a.handleEvent(b)
                });
            return a[uc]
        };
    var vc = function(a) {
            if (a.classList) return a.classList;
            a = a.className;
            return p(a) && a.match(/\S+/g) || []
        },
        wc = function(a, b) {
            return a.classList ? a.classList.contains(b) : Oa(vc(a), b)
        },
        xc = function(a, b) {
            a.classList ? a.classList.add(b) : wc(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
        },
        yc = function(a, b) {
            if (a.classList) Ha(b, function(b) {
                xc(a, b)
            });
            else {
                var c = {};
                Ha(vc(a), function(a) {
                    c[a] = !0
                });
                Ha(b, function(a) {
                    c[a] = !0
                });
                a.className = "";
                for (var d in c) a.className += 0 < a.className.length ? " " + d : d
            }
        },
        zc = function(a, b) {
            a.classList ?
                a.classList.remove(b) : wc(a, b) && (a.className = Ia(vc(a), function(a) {
                    return a != b
                }).join(" "))
        },
        Ac = function(a, b) {
            a.classList ? Ha(b, function(b) {
                zc(a, b)
            }) : a.className = Ia(vc(a), function(a) {
                return !Oa(b, a)
            }).join(" ")
        };
    var Bc = !E || 9 <= Number(tb),
        Cc = !hb && !E || E && 9 <= Number(tb) || hb && I("1.9.1"),
        Dc = E && !I("9");
    var Fc = function() {
        this.a = "";
        this.b = Ec
    };
    Fc.prototype.mb = !0;
    Fc.prototype.bb = function() {
        return this.a
    };
    Fc.prototype.c = function() {
        return 1
    };
    Fc.prototype.toString = function() {
        return "TrustedResourceUrl{" + this.a + "}"
    };
    var Gc = function(a) {
            if (a instanceof Fc && a.constructor === Fc && a.b === Ec) return a.a;
            za("expected object of type TrustedResourceUrl, got '" + a + "' of type " + ca(a));
            return "type_error:TrustedResourceUrl"
        },
        Ec = {},
        Hc = function(a) {
            var b = new Fc;
            b.a = a;
            return b
        };
    var Jc = function() {
        this.a = "";
        this.h = Ic;
        this.b = null
    };
    Jc.prototype.c = function() {
        return this.b
    };
    Jc.prototype.mb = !0;
    Jc.prototype.bb = function() {
        return this.a
    };
    Jc.prototype.toString = function() {
        return "SafeHtml{" + this.a + "}"
    };
    var Ic = {},
        Kc = function(a) {
            var b = new Jc;
            b.a = a;
            b.b = 0
        };
    Kc("<!DOCTYPE html>");
    Kc("");
    Kc("<br>");
    var Lc = function(a, b) {
        var c = (c = a && a.ownerDocument) && (c.defaultView || c.parentWindow) || m;
        if ("undefined" != typeof c.HTMLScriptElement && "undefined" != typeof c.Location && "undefined" != typeof c.Element) {
            c = a && (a instanceof c.HTMLScriptElement || !(a instanceof c.Location || a instanceof c.Element));
            var d = v(a) ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : void 0 === a ? "undefined" : null === a ? "null" : typeof a;
            A(c, "Argument is not a %s (or a non-Element, non-Location mock); got: %s", "HTMLScriptElement",
                d)
        }
        a.src = Gc(b)
    };
    var Oc = function(a) {
            return a ? new Mc(Nc(a)) : ka || (ka = new Mc)
        },
        L = function(a) {
            return p(a) ? document.getElementById(a) : a
        },
        Pc = function(a, b) {
            var c = b || document;
            if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
            else {
                c = document;
                var d = b || c;
                if (d.querySelectorAll && d.querySelector && a) a = d.querySelector("" + (a ? "." + a : ""));
                else {
                    b = b || c;
                    if (b.querySelectorAll && b.querySelector && a) a = b.querySelectorAll("" + (a ? "." + a : ""));
                    else if (a && b.getElementsByClassName) {
                        var e = b.getElementsByClassName(a);
                        a = e
                    } else if (e = b.getElementsByTagName("*"),
                        a) {
                        var f = {};
                        for (c = d = 0; b = e[c]; c++) {
                            var g = b.className;
                            "function" == typeof g.split && Oa(g.split(/\s+/), a) && (f[d++] = b)
                        }
                        f.length = d;
                        a = f
                    } else a = e;
                    a = a[0] || null
                }
            }
            return a || null
        },
        Rc = function(a, b) {
            Ua(b, function(b, d) {
                b && b.mb && (b = b.bb());
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Qc.hasOwnProperty(d) ? a.setAttribute(Qc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        },
        Qc = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        Tc = function(a, b, c, d) {
            function e(c) {
                c && b.appendChild(p(c) ? a.createTextNode(c) : c)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                !da(f) || v(f) && 0 < f.nodeType ? e(f) : Ha(Sc(f) ? Ra(f) : f, e)
            }
        },
        Uc = function(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        },
        Vc = function(a, b) {
            if (!a || !b) return !1;
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" !=
                typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        },
        Nc = function(a) {
            A(a, "Node cannot be null or undefined.");
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        Wc = function(a, b) {
            A(null != a, "goog.dom.setTextContent expects a non-null value for node");
            if ("textContent" in a) a.textContent = b;
            else if (3 == a.nodeType) a.data = String(b);
            else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
                a.firstChild.data = String(b)
            } else {
                for (var c; c = a.firstChild;) a.removeChild(c);
                c = Nc(a);
                a.appendChild(c.createTextNode(String(b)))
            }
        },
        Xc = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        Yc = {
            IMG: " ",
            BR: "\n"
        },
        Zc = function(a) {
            if (E && !I("9")) {
                var b = a.getAttributeNode("tabindex");
                b = null != b && b.specified
            } else b = a.hasAttribute("tabindex");
            b && (a = a.tabIndex, b = ba(a) && 0 <= a && 32768 > a);
            return b
        },
        $c = function(a, b) {
            b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
        },
        bd = function(a) {
            var b = [];
            ad(a, b, !1);
            return b.join("")
        },
        ad = function(a, b, c) {
            if (!(a.nodeName in Xc))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in Yc) b.push(Yc[a.nodeName]);
            else
                for (a = a.firstChild; a;) ad(a, b, c), a = a.nextSibling
        },
        Sc = function(a) {
            if (a && "number" == typeof a.length) {
                if (v(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (u(a)) return "function" == typeof a.item
            }
            return !1
        },
        Mc = function(a) {
            this.a = a || m.document || document
        };
    h = Mc.prototype;
    h.o = function(a) {
        return p(a) ? this.a.getElementById(a) : a
    };
    h.setProperties = Rc;
    h.Pa = function(a, b, c) {
        var d = this.a,
            e = arguments,
            f = String(e[0]),
            g = e[1];
        if (!Bc && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', ua(g.name), '"');
            if (g.type) {
                f.push(' type="', ua(g.type), '"');
                var k = {};
                Za(k, g);
                delete k.type;
                g = k
            }
            f.push(">");
            f = f.join("")
        }
        f = d.createElement(f);
        g && (p(g) ? f.className = g : t(g) ? f.className = g.join(" ") : Rc(f, g));
        2 < e.length && Tc(d, f, e, 2);
        return f
    };
    h.xb = function(a, b) {
        Tc(Nc(a), a, arguments, 1)
    };
    h.getChildren = function(a) {
        return Cc && void 0 != a.children ? a.children : Ia(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    };
    h.contains = Vc;
    var cd = "StopIteration" in m ? m.StopIteration : {
            message: "StopIteration",
            stack: ""
        },
        dd = function() {};
    dd.prototype.next = function() {
        throw cd;
    };
    dd.prototype.i = function() {
        return this
    };
    var M = function(a, b) {
        this.b = {};
        this.a = [];
        this.h = this.c = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            a instanceof M ? (c = a.V(), d = a.M()) : (c = Wa(a), d = Va(a));
            for (var e = 0; e < c.length; e++) this.set(c[e], d[e])
        }
    };
    M.prototype.M = function() {
        ed(this);
        for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
        return a
    };
    M.prototype.V = function() {
        ed(this);
        return this.a.concat()
    };
    M.prototype.clear = function() {
        this.b = {};
        this.h = this.c = this.a.length = 0
    };
    M.prototype.remove = function(a) {
        return fd(this.b, a) ? (delete this.b[a], this.c--, this.h++, this.a.length > 2 * this.c && ed(this), !0) : !1
    };
    var ed = function(a) {
        if (a.c != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                fd(a.b, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.c != a.a.length) {
            var e = {};
            for (c = b = 0; b < a.a.length;) d = a.a[b], fd(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            a.a.length = c
        }
    };
    M.prototype.get = function(a, b) {
        return fd(this.b, a) ? this.b[a] : b
    };
    M.prototype.set = function(a, b) {
        fd(this.b, a) || (this.c++, this.a.push(a), this.h++);
        this.b[a] = b
    };
    M.prototype.forEach = function(a, b) {
        for (var c = this.V(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    M.prototype.i = function(a) {
        ed(this);
        var b = 0,
            c = this.h,
            d = this,
            e = new dd;
        e.next = function() {
            if (c != d.h) throw Error("The map has changed since the iterator was created");
            if (b >= d.a.length) throw cd;
            var e = d.a[b++];
            return a ? e : d.b[e]
        };
        return e
    };
    var fd = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var gd = function(a) {
            if (a.M && "function" == typeof a.M) return a.M();
            if (p(a)) return a.split("");
            if (da(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return Va(a)
        },
        hd = function(a, b, c) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
            else if (da(a) || p(a)) Ha(a, b, c);
            else {
                if (a.V && "function" == typeof a.V) var d = a.V();
                else if (a.M && "function" == typeof a.M) d = void 0;
                else if (da(a) || p(a)) {
                    d = [];
                    for (var e = a.length, f = 0; f < e; f++) d.push(f)
                } else d = Wa(a);
                e = gd(a);
                f = e.length;
                for (var g = 0; g < f; g++) b.call(c, e[g],
                    d && d[g], a)
            }
        };
    var id = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        jd = function(a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e = null;
                    if (0 <= d) {
                        var f = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else f = a[c];
                    b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
                }
            }
        };
    var kd = function(a, b, c) {
            this.b = this.a = null;
            this.c = a || null;
            this.i = !!c
        },
        ld = function(a) {
            a.a || (a.a = new M, a.b = 0, a.c && jd(a.c, function(b, c) {
                a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
            }))
        };
    kd.prototype.add = function(a, b) {
        ld(this);
        this.c = null;
        a = md(this, a);
        var c = this.a.get(a);
        c || this.a.set(a, c = []);
        c.push(b);
        this.b = Aa(this.b) + 1;
        return this
    };
    kd.prototype.remove = function(a) {
        ld(this);
        a = md(this, a);
        return fd(this.a.b, a) ? (this.c = null, this.b = Aa(this.b) - this.a.get(a).length, this.a.remove(a)) : !1
    };
    kd.prototype.clear = function() {
        this.a = this.c = null;
        this.b = 0
    };
    var nd = function(a, b) {
        ld(a);
        b = md(a, b);
        return fd(a.a.b, b)
    };
    h = kd.prototype;
    h.forEach = function(a, b) {
        ld(this);
        this.a.forEach(function(c, d) {
            Ha(c, function(c) {
                a.call(b, c, d, this)
            }, this)
        }, this)
    };
    h.V = function() {
        ld(this);
        for (var a = this.a.M(), b = this.a.V(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    h.M = function(a) {
        ld(this);
        var b = [];
        if (p(a)) nd(this, a) && (b = Qa(b, this.a.get(md(this, a))));
        else {
            a = this.a.M();
            for (var c = 0; c < a.length; c++) b = Qa(b, a[c])
        }
        return b
    };
    h.set = function(a, b) {
        ld(this);
        this.c = null;
        a = md(this, a);
        nd(this, a) && (this.b = Aa(this.b) - this.a.get(a).length);
        this.a.set(a, [b]);
        this.b = Aa(this.b) + 1;
        return this
    };
    h.get = function(a, b) {
        a = a ? this.M(a) : [];
        return 0 < a.length ? String(a[0]) : b
    };
    h.toString = function() {
        if (this.c) return this.c;
        if (!this.a) return "";
        for (var a = [], b = this.a.V(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.M(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.c = a.join("&")
    };
    var md = function(a, b) {
        b = String(b);
        a.i && (b = b.toLowerCase());
        return b
    };
    kd.prototype.h = function(a) {
        for (var b = 0; b < arguments.length; b++) hd(arguments[b], function(a, b) {
            this.add(b, a)
        }, this)
    };
    var od = {
            Dd: !0
        },
        pd = {
            Cd: !0
        },
        qd = {
            Ed: !0
        },
        rd = function() {
            throw Error("Do not instantiate directly");
        };
    rd.prototype.va = null;
    rd.prototype.$ = function() {
        return this.content
    };
    rd.prototype.toString = function() {
        return this.content
    };
    var sd = function(a, b) {
        this.content = String(a);
        this.va = null != b ? b : null
    };
    y(sd, rd);
    sd.prototype.ga = qd;
    var td = function() {
        rd.call(this)
    };
    y(td, rd);
    td.prototype.ga = od;
    var ud = function() {
        rd.call(this)
    };
    y(ud, rd);
    ud.prototype.ga = pd;
    ud.prototype.va = 1;
    var yd = function(a, b) {
            var c = vd;
            A(c, "Soy template may not be null.");
            a.innerHTML = wd(c(b || xd, void 0, void 0))
        },
        wd = function(a) {
            if (!v(a)) return String(a);
            if (a instanceof rd) {
                if (a.ga === od) return Ba(a.$());
                if (a.ga === qd) return ua(a.$())
            }
            za("Soy template output is unsafe for use as HTML: " + a);
            return "zSoyz"
        },
        Ad = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,
        xd = {};
    var Bd = function(a, b) {
            a.style.display = b ? "" : "none"
        },
        Cd = hb ? "MozUserSelect" : G || F ? "WebkitUserSelect" : null;
    var Fd = function(a, b, c, d, e, f) {
            if (!(E || F || G && I("525"))) return !0;
            if (H && e) return Dd(a);
            if (e && !d) return !1;
            ba(b) && (b = Ed(b));
            e = 17 == b || 18 == b || H && 91 == b;
            if ((!c || H) && e || H && 16 == b && (d || f)) return !1;
            if ((G || F) && d && c) switch (a) {
                case 220:
                case 219:
                case 221:
                case 192:
                case 186:
                case 189:
                case 187:
                case 188:
                case 190:
                case 191:
                case 192:
                case 222:
                    return !1
            }
            if (E && d && b == a) return !1;
            switch (a) {
                case 13:
                    return !0;
                case 27:
                    return !(G || F)
            }
            return Dd(a)
        },
        Dd = function(a) {
            if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (G || F) && 0 == a) return !0;
            switch (a) {
                case 32:
                case 43:
                case 63:
                case 64:
                case 107:
                case 109:
                case 110:
                case 111:
                case 186:
                case 59:
                case 189:
                case 187:
                case 61:
                case 188:
                case 190:
                case 191:
                case 192:
                case 222:
                case 219:
                case 220:
                case 221:
                    return !0;
                default:
                    return !1
            }
        },
        Ed = function(a) {
            if (hb) a = Gd(a);
            else if (H && G) switch (a) {
                case 93:
                    a = 91
            }
            return a
        },
        Gd = function(a) {
            switch (a) {
                case 61:
                    return 187;
                case 59:
                    return 186;
                case 173:
                    return 189;
                case 224:
                    return 91;
                case 0:
                    return 224;
                default:
                    return a
            }
        };
    var N = function() {
        Qb.call(this);
        this.h = new bc(this);
        this.sb = this;
        this.Aa = null
    };
    y(N, Qb);
    N.prototype[Xb] = !0;
    N.prototype.Na = function(a) {
        this.Aa = a
    };
    N.prototype.removeEventListener = function(a, b, c, d) {
        qc(this, a, b, c, d)
    };
    var O = function(a, b) {
        Hd(a);
        var c = a.Aa;
        if (c) {
            var d = [];
            for (var e = 1; c; c = c.Aa) d.push(c), A(1E3 > ++e, "infinite loop")
        }
        a = a.sb;
        c = b.type || b;
        p(b) ? b = new Tb(b, a) : b instanceof Tb ? b.target = b.target || a : (e = b, b = new Tb(c, a), Za(b, e));
        e = !0;
        if (d)
            for (var f = d.length - 1; !b.c && 0 <= f; f--) {
                var g = b.a = d[f];
                e = Id(g, c, !0, b) && e
            }
        b.c || (g = b.a = a, e = Id(g, c, !0, b) && e, b.c || (e = Id(g, c, !1, b) && e));
        if (d)
            for (f = 0; !b.c && f < d.length; f++) g = b.a = d[f], e = Id(g, c, !1, b) && e;
        return e
    };
    N.prototype.B = function() {
        N.l.B.call(this);
        this.h && this.h.removeAll(void 0);
        this.Aa = null
    };
    N.prototype.listen = function(a, b, c, d) {
        Hd(this);
        return this.h.add(String(a), b, !1, c, d)
    };
    N.prototype.W = function(a, b, c, d) {
        return this.h.remove(String(a), b, c, d)
    };
    var Id = function(a, b, c, d) {
            b = a.h.a[String(b)];
            if (!b) return !0;
            b = b.concat();
            for (var e = !0, f = 0; f < b.length; ++f) {
                var g = b[f];
                if (g && !g.removed && g.capture == c) {
                    var k = g.listener,
                        l = g.Ia || g.src;
                    g.Da && dc(a.h, g);
                    e = !1 !== k.call(l, d) && e
                }
            }
            return e && 0 != d.ob
        },
        Hd = function(a) {
            A(a.h, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
        };
    var Jd = function(a, b) {
        N.call(this);
        a && this.attach(a, b)
    };
    y(Jd, N);
    h = Jd.prototype;
    h.ma = null;
    h.Ja = null;
    h.Va = null;
    h.Ka = null;
    h.J = -1;
    h.aa = -1;
    h.Oa = !1;
    var Kd = {
            3: 13,
            12: 144,
            63232: 38,
            63233: 40,
            63234: 37,
            63235: 39,
            63236: 112,
            63237: 113,
            63238: 114,
            63239: 115,
            63240: 116,
            63241: 117,
            63242: 118,
            63243: 119,
            63244: 120,
            63245: 121,
            63246: 122,
            63247: 123,
            63248: 44,
            63272: 46,
            63273: 36,
            63275: 35,
            63276: 33,
            63277: 34,
            63289: 144,
            63302: 45
        },
        Ld = {
            Up: 38,
            Down: 40,
            Left: 37,
            Right: 39,
            Enter: 13,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "U+007F": 46,
            Home: 36,
            End: 35,
            PageUp: 33,
            PageDown: 34,
            Insert: 45
        },
        Md = E || F || G && I("525"),
        Nd = H && hb;
    h = Jd.prototype;
    h.zb = function(a) {
        if (G || F)
            if (17 == this.J && !a.ctrlKey || 18 == this.J && !a.altKey || H && 91 == this.J && !a.metaKey) this.aa = this.J = -1; - 1 == this.J && (a.ctrlKey && 17 != a.keyCode ? this.J = 17 : a.altKey && 18 != a.keyCode ? this.J = 18 : a.metaKey && 91 != a.keyCode && (this.J = 91));
        Md && !Fd(a.keyCode, this.J, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.aa = Ed(a.keyCode), Nd && (this.Oa = a.altKey))
    };
    h.Bb = function(a) {
        this.aa = this.J = -1;
        this.Oa = a.altKey
    };
    h.handleEvent = function(a) {
        var b = a.b,
            c = b.altKey;
        if (E && "keypress" == a.type) var d = this.aa;
        else if ((G || F) && "keypress" == a.type) d = this.aa;
        else if (gb && !G) d = this.aa;
        else {
            d = b.keyCode || this.aa;
            var e = b.charCode || 0;
            Nd && (c = this.Oa);
            H && 63 == e && 224 == d && (d = 191)
        }(e = d = Ed(d)) ? 63232 <= d && d in Kd ? e = Kd[d] : 25 == d && a.shiftKey && (e = 9): b.keyIdentifier && b.keyIdentifier in Ld && (e = Ld[b.keyIdentifier]);
        a = e == this.J;
        this.J = e;
        b = new Od(e, 0, a, b);
        b.altKey = c;
        O(this, b)
    };
    h.o = function() {
        return this.ma
    };
    h.attach = function(a, b) {
        this.Ka && this.detach();
        this.ma = a;
        this.Ja = jc(this.ma, "keypress", this, b);
        this.Va = jc(this.ma, "keydown", this.zb, b, this);
        this.Ka = jc(this.ma, "keyup", this.Bb, b, this)
    };
    h.detach = function() {
        this.Ja && (rc(this.Ja), rc(this.Va), rc(this.Ka), this.Ka = this.Va = this.Ja = null);
        this.ma = null;
        this.aa = this.J = -1
    };
    h.B = function() {
        Jd.l.B.call(this);
        this.detach()
    };
    var Od = function(a, b, c, d) {
        K.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.repeat = c
    };
    y(Od, K);
    var Pd, Qd = {
        Hb: "activedescendant",
        Mb: "atomic",
        Nb: "autocomplete",
        Pb: "busy",
        rb: "checked",
        Sb: "colindex",
        Xb: "controls",
        Zb: "describedby",
        bc: "disabled",
        dc: "dropeffect",
        ec: "expanded",
        fc: "flowto",
        hc: "grabbed",
        lc: "haspopup",
        nc: "hidden",
        pc: "invalid",
        qc: "label",
        rc: "labelledby",
        sc: "level",
        xc: "live",
        Hc: "multiline",
        Ic: "multiselectable",
        Mc: "orientation",
        Nc: "owns",
        Oc: "posinset",
        Qc: "pressed",
        Uc: "readonly",
        Wc: "relevant",
        Xc: "required",
        ad: "rowindex",
        dd: "selected",
        fd: "setsize",
        hd: "sort",
        xd: "valuemax",
        yd: "valuemin",
        zd: "valuenow",
        Ad: "valuetext"
    };
    var Rd = {
        Ib: "alert",
        Jb: "alertdialog",
        Kb: "application",
        Lb: "article",
        Ob: "banner",
        Qb: "button",
        Rb: "checkbox",
        Tb: "columnheader",
        Ub: "combobox",
        Vb: "complementary",
        Wb: "contentinfo",
        Yb: "definition",
        $b: "dialog",
        ac: "directory",
        cc: "document",
        gc: "form",
        ic: "grid",
        jc: "gridcell",
        kc: "group",
        mc: "heading",
        oc: "img",
        tc: "link",
        uc: "list",
        vc: "listbox",
        wc: "listitem",
        yc: "log",
        zc: "main",
        Ac: "marquee",
        Bc: "math",
        Cc: "menu",
        Dc: "menubar",
        Ec: "menuitem",
        Fc: "menuitemcheckbox",
        Gc: "menuitemradio",
        Jc: "navigation",
        Kc: "note",
        Lc: "option",
        Pc: "presentation",
        Rc: "progressbar",
        Sc: "radio",
        Tc: "radiogroup",
        Vc: "region",
        Yc: "row",
        Zc: "rowgroup",
        $c: "rowheader",
        bd: "scrollbar",
        cd: "search",
        ed: "separator",
        gd: "slider",
        jd: "spinbutton",
        kd: "status",
        TAB: "tab",
        ld: "tablist",
        md: "tabpanel",
        nd: "textbox",
        od: "textinfo",
        pd: "timer",
        qd: "toolbar",
        rd: "tooltip",
        sd: "tree",
        td: "treegrid",
        ud: "treeitem"
    };
    ab("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));
    var Sd = function(a, b, c) {
        t(c) && (c = c.join(" "));
        A(b, "ARIA attribute cannot be empty.");
        A(Xa(Qd, b), "No such ARIA attribute " + b);
        var d = "aria-" + b;
        "" === c || void 0 == c ? (Pd || (Pd = {
            atomic: !1,
            autocomplete: "none",
            dropeffect: "none",
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: "vertical",
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: "none",
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }), c = Pd, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    };
    var Td = function(a) {
        Qb.call(this);
        this.b = a;
        this.a = {}
    };
    y(Td, Qb);
    var Ud = [];
    h = Td.prototype;
    h.listen = function(a, b, c, d) {
        t(b) || (b && (Ud[0] = b.toString()), b = Ud);
        for (var e = 0; e < b.length; e++) {
            var f = jc(a, b[e], c || this.handleEvent, d || !1, this.b || this);
            if (!f) break;
            this.a[f.key] = f
        }
        return this
    };
    h.W = function(a, b, c, d, e) {
        if (t(b))
            for (var f = 0; f < b.length; f++) this.W(a, b[f], c, d, e);
        else c = c || this.handleEvent, d = v(d) ? !!d.capture : !!d, e = e || this.b || this, c = kc(c), d = !!d, b = Yb(a) ? ec(a.h, String(b), c, d, e) : a ? (a = mc(a)) ? ec(a, b, c, d, e) : null : null, b && (rc(b), delete this.a[b.key]);
        return this
    };
    h.removeAll = function() {
        Ua(this.a, function(a, b) {
            this.a.hasOwnProperty(b) && rc(a)
        }, this);
        this.a = {}
    };
    h.B = function() {
        Td.l.B.call(this);
        this.removeAll()
    };
    h.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var Vd = function() {};
    r(Vd);
    Vd.prototype.a = 0;
    var P = function(a) {
        N.call(this);
        this.j = a || Oc();
        this.ia = Wd;
        this.I = null;
        this.P = !1;
        this.c = null;
        this.s = void 0;
        this.u = this.X = this.i = null;
        this.Xa = !1
    };
    y(P, N);
    P.prototype.ub = Vd.H();
    var Wd = null,
        Xd = function(a, b) {
            switch (a) {
                case 1:
                    return b ? "disable" : "enable";
                case 2:
                    return b ? "highlight" : "unhighlight";
                case 4:
                    return b ? "activate" : "deactivate";
                case 8:
                    return b ? "select" : "unselect";
                case 16:
                    return b ? "check" : "uncheck";
                case 32:
                    return b ? "focus" : "blur";
                case 64:
                    return b ? "open" : "close"
            }
            throw Error("Invalid component state");
        },
        Yd = function(a, b) {
            if (a.i && a.i.u) {
                var c = a.i.u,
                    d = a.I;
                d in c && delete c[d];
                c = a.i.u;
                if (null !== c && b in c) throw Error('The object already contains the key "' + b + '"');
                c[b] = a
            }
            a.I = b
        };
    P.prototype.o = function() {
        return this.c
    };
    var Zd = function(a) {
            a = a.c;
            A(a, "Can not call getElementStrict before rendering/decorating.");
            return a
        },
        $d = function(a) {
            a.s || (a.s = new Td(a));
            return a.s
        };
    P.prototype.Na = function(a) {
        if (this.i && this.i != a) throw Error("Method not supported");
        P.l.Na.call(this, a)
    };
    P.prototype.ra = function() {
        this.c = this.j.a.createElement("DIV")
    };
    var ae = function(a, b) {
            if (a.P) throw Error("Component already rendered");
            a.c || a.ra();
            b ? b.insertBefore(a.c, null) : a.j.a.body.appendChild(a.c);
            a.i && !a.i.P || a.U()
        },
        be = function(a, b) {
            if (a.P) throw Error("Component already rendered");
            if (b && a.cb(b)) {
                a.Xa = !0;
                var c = Nc(b);
                a.j && a.j.a == c || (a.j = Oc(b));
                a.Za(b);
                a.U()
            } else throw Error("Invalid element to decorate");
        };
    h = P.prototype;
    h.cb = function() {
        return !0
    };
    h.Za = function(a) {
        this.c = a
    };
    h.U = function() {
        this.P = !0;
        ce(this, function(a) {
            !a.P && a.o() && a.U()
        })
    };
    h.xa = function() {
        ce(this, function(a) {
            a.P && a.xa()
        });
        this.s && this.s.removeAll();
        this.P = !1
    };
    h.B = function() {
        this.P && this.xa();
        this.s && (this.s.ka(), delete this.s);
        ce(this, function(a) {
            a.ka()
        });
        !this.Xa && this.c && Uc(this.c);
        this.i = this.c = this.u = this.X = null;
        P.l.B.call(this)
    };
    var ce = function(a, b) {
        a.X && Ha(a.X, b, void 0)
    };
    P.prototype.removeChild = function(a, b) {
        if (a) {
            var c = p(a) ? a : a.I || (a.I = ":" + (a.ub.a++).toString(36));
            this.u && c ? (a = this.u, a = (null !== a && c in a ? a[c] : void 0) || null) : a = null;
            if (c && a) {
                var d = this.u;
                c in d && delete d[c];
                Pa(this.X, a);
                b && (a.xa(), a.c && Uc(a.c));
                b = a;
                if (null == b) throw Error("Unable to set parent component");
                b.i = null;
                P.l.Na.call(b, null)
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };
    var Q = function() {},
        de;
    r(Q);
    var ee = {
        button: "pressed",
        checkbox: "checked",
        menuitem: "selected",
        menuitemcheckbox: "checked",
        menuitemradio: "checked",
        radio: "checked",
        tab: "selected",
        treeitem: "selected"
    };
    Q.prototype.Ea = function() {};
    Q.prototype.na = function(a) {
        return a.j.Pa("DIV", fe(this, a).join(" "), a.$())
    };
    var he = function(a, b, c) {
        if (a = a.o ? a.o() : a) {
            var d = [b];
            E && !I("7") && (d = ge(vc(a), b), d.push(b));
            (c ? yc : Ac)(a, d)
        }
    };
    Q.prototype.eb = function() {
        return !0
    };
    Q.prototype.R = function(a, b) {
        b.id && Yd(a, b.id);
        b && b.firstChild ? ie(a, b.firstChild.nextSibling ? Ra(b.childNodes) : b.firstChild) : a.wa = null;
        var c = 0,
            d = this.A(),
            e = this.A(),
            f = !1,
            g = !1,
            k = !1,
            l = Ra(vc(b));
        Ha(l, function(a) {
            f || a != d ? g || a != e ? c |= je(this, a) : g = !0 : (f = !0, e == d && (g = !0));
            1 == je(this, a) && (Da(b), Zc(b) && $c(b, !1))
        }, this);
        a.C = c;
        f || (l.push(d), e == d && (g = !0));
        g || l.push(e);
        (a = a.O) && l.push.apply(l, a);
        if (E && !I("7")) {
            var C = ge(l);
            0 < C.length && (l.push.apply(l, C), k = !0)
        }
        if (!f || !g || a || k) b.className = l.join(" ");
        return b
    };
    Q.prototype.nb = function(a) {
        if (null == a.ia) {
            var b = a.P ? a.c : a.j.a.body;
            a: {
                var c = Nc(b);
                if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(b, null))) {
                    c = c.direction || c.getPropertyValue("direction") || "";
                    break a
                }
                c = ""
            }
            a.ia = "rtl" == (c || (b.currentStyle ? b.currentStyle.direction : null) || b.style && b.style.direction)
        }
        a.ia && this.gb(a.o(), !0);
        a.a() && this.La(a, a.ea)
    };
    var ke = function(a, b) {
        if (a = a.Ea()) {
            A(b, "The element passed as a first parameter cannot be null.");
            var c = b.getAttribute("role") || null;
            a != c && (a ? (A(Xa(Rd, a), "No such ARIA role " + a), b.setAttribute("role", a)) : b.removeAttribute("role"))
        }
    };
    h = Q.prototype;
    h.Sa = function(a, b) {
        var c = !b;
        b = E || gb ? a.getElementsByTagName("*") : null;
        if (Cd) {
            if (c = c ? "none" : "", a.style && (a.style[Cd] = c), b) {
                a = 0;
                for (var d; d = b[a]; a++) d.style && (d.style[Cd] = c)
            }
        } else if (E || gb)
            if (c = c ? "on" : "", a.setAttribute("unselectable", c), b)
                for (a = 0; d = b[a]; a++) d.setAttribute("unselectable", c)
    };
    h.gb = function(a, b) {
        he(a, this.A() + "-rtl", b)
    };
    h.fb = function(a) {
        var b;
        return a.F & 32 && (b = a.o()) ? Zc(b) : !1
    };
    h.La = function(a, b) {
        var c;
        if (a.F & 32 && (c = a.o())) {
            if (!b && a.C & 32) {
                try {
                    c.blur()
                } catch (d) {}
                a.C & 32 && a.hb()
            }
            Zc(c) != b && $c(c, b)
        }
    };
    h.Ta = function(a, b, c) {
        var d = a.o();
        if (d) {
            var e = le(this, b);
            e && he(a, e, c);
            this.S(d, b, c)
        }
    };
    h.S = function(a, b, c) {
        de || (de = {
            1: "disabled",
            8: "selected",
            16: "checked",
            64: "expanded"
        });
        A(a, "The element passed as a first parameter cannot be null.");
        b = de[b];
        var d = a.getAttribute("role") || null;
        d && (d = ee[d] || b, b = "checked" == b || "selected" == b ? d : b);
        b && Sd(a, b, c)
    };
    h.A = function() {
        return "goog-control"
    };
    var fe = function(a, b) {
            var c = a.A(),
                d = [c],
                e = a.A();
            e != c && d.push(e);
            c = b.getState();
            for (e = []; c;) {
                var f = c & -c;
                e.push(le(a, f));
                c &= ~f
            }
            d.push.apply(d, e);
            (a = b.O) && d.push.apply(d, a);
            E && !I("7") && d.push.apply(d, ge(d));
            return d
        },
        ge = function(a, b) {
            var c = [];
            b && (a = Qa(a, [b]));
            Ha([], function(d) {
                !La(d, x(Oa, a)) || b && !Oa(d, b) || c.push(d.join("_"))
            });
            return c
        },
        le = function(a, b) {
            a.a || me(a);
            return a.a[b]
        },
        je = function(a, b) {
            if (!a.K) {
                a.a || me(a);
                var c = a.a,
                    d = {},
                    e;
                for (e in c) d[c[e]] = e;
                a.K = d
            }
            a = parseInt(a.K[b], 10);
            return isNaN(a) ? 0 : a
        },
        me = function(a) {
            var b = a.A();
            var c = -1 != b.replace(/\xa0|\s/g, " ").indexOf(" ");
            A(!c, "ControlRenderer has an invalid css class: '" + b + "'");
            a.a = {
                1: b + "-disabled",
                2: b + "-hover",
                4: b + "-active",
                8: b + "-selected",
                16: b + "-checked",
                32: b + "-focused",
                64: b + "-open"
            }
        };
    var ne = function() {};
    y(ne, Q);
    r(ne);
    h = ne.prototype;
    h.Ea = function() {
        return "button"
    };
    h.S = function(a, b, c) {
        switch (b) {
            case 8:
            case 16:
                A(a, "The button DOM element cannot be null.");
                Sd(a, "pressed", c);
                break;
            default:
            case 64:
            case 1:
                ne.l.S.call(this, a, b, c)
        }
    };
    h.na = function(a) {
        var b = ne.l.na.call(this, a),
            c = a.L;
        b && (c ? b.title = c : b.removeAttribute("title"));
        (c = a.Z) && this.Ra(b, c);
        a.F & 16 && this.S(b, 16, a.oa());
        return b
    };
    h.R = function(a, b) {
        b = ne.l.R.call(this, a, b);
        var c = this.Qa(b);
        a.Z = c;
        a.L = b.title;
        a.F & 16 && this.S(b, 16, a.oa());
        return b
    };
    h.Qa = q;
    h.Ra = q;
    h.A = function() {
        return "goog-button"
    };
    var oe = function(a, b) {
            if (!a) throw Error("Invalid class name " + a);
            if (!u(b)) throw Error("Invalid decorator function " + b);
        },
        pe = {};
    var R = function(a, b, c) {
        P.call(this, c);
        if (!b) {
            b = this.constructor;
            for (var d; b;) {
                d = b[ea] || (b[ea] = ++fa);
                if (d = pe[d]) break;
                b = b.l ? b.l.constructor : null
            }
            b = d ? u(d.H) ? d.H() : new d : null
        }
        this.b = b;
        this.wa = n(a) ? a : null
    };
    y(R, P);
    h = R.prototype;
    h.wa = null;
    h.C = 0;
    h.F = 39;
    h.ua = 255;
    h.ea = !0;
    h.O = null;
    h.Ha = !0;
    var re = function(a) {
            a.P && 0 != a.Ha && qe(a, !1);
            a.Ha = !1
        },
        se = function(a, b) {
            b && (a.O ? Oa(a.O, b) || a.O.push(b) : a.O = [b], he(a, b, !0))
        };
    R.prototype.ra = function() {
        var a = this.b.na(this);
        this.c = a;
        ke(this.b, a);
        this.b.Sa(a, !1);
        this.ea || (Bd(a, !1), a && Sd(a, "hidden", !0))
    };
    R.prototype.cb = function(a) {
        return this.b.eb(a)
    };
    R.prototype.Za = function(a) {
        this.c = a = this.b.R(this, a);
        ke(this.b, a);
        this.b.Sa(a, !1);
        this.ea = "none" != a.style.display
    };
    R.prototype.U = function() {
        R.l.U.call(this);
        var a = this.b,
            b = Zd(this);
        A(this);
        A(b);
        this.ea || Sd(b, "hidden", !this.ea);
        this.a() || a.S(b, 1, !this.a());
        this.F & 8 && a.S(b, 8, this.isSelected());
        this.F & 16 && a.S(b, 16, this.oa());
        this.F & 64 && a.S(b, 64, !!(this.C & 64));
        this.b.nb(this);
        this.F & -2 && (this.Ha && qe(this, !0), this.F & 32 && (a = this.o())) && (b = this.G || (this.G = new Jd), b.attach(a), $d(this).listen(b, "key", this.Ab).listen(a, "focus", this.yb).listen(a, "blur", this.hb))
    };
    var qe = function(a, b) {
        var c = $d(a),
            d = a.o();
        b ? (c.listen(d, "mouseover", a.lb).listen(d, "mousedown", a.ya).listen(d, "mouseup", a.za).listen(d, "mouseout", a.kb), a.Fa != q && c.listen(d, "contextmenu", a.Fa), E && (I(9) || c.listen(d, "dblclick", a.jb), a.T || (a.T = new te(a), Rb(a, x(Sb, a.T))))) : (c.W(d, "mouseover", a.lb).W(d, "mousedown", a.ya).W(d, "mouseup", a.za).W(d, "mouseout", a.kb), a.Fa != q && c.W(d, "contextmenu", a.Fa), E && (I(9) || c.W(d, "dblclick", a.jb), Sb(a.T), a.T = null))
    };
    R.prototype.xa = function() {
        R.l.xa.call(this);
        this.G && this.G.detach();
        this.ea && this.a() && this.b.La(this, !1)
    };
    R.prototype.B = function() {
        R.l.B.call(this);
        this.G && (this.G.ka(), delete this.G);
        delete this.b;
        this.T = this.O = this.wa = null
    };
    R.prototype.$ = function() {
        return this.wa
    };
    var ie = function(a, b) {
            a.wa = b
        },
        ue = function(a) {
            a = a.$();
            if (!a) return "";
            if (!p(a))
                if (t(a)) a = Ja(a, bd).join("");
                else {
                    if (Dc && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
                    else {
                        var b = [];
                        ad(a, b, !0);
                        a = b.join("")
                    }
                    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
                    a = a.replace(/\u200B/g, "");
                    Dc || (a = a.replace(/ +/g, " "));
                    " " != a && (a = a.replace(/^\s*/, ""))
                }
            return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
        };
    R.prototype.a = function() {
        return !(this.C & 1)
    };
    R.prototype.setEnabled = function(a) {
        var b = this.i;
        b && "function" == typeof b.a && !b.a() || !ve(this, 1, !a) || (a || (we(this, !1), xe(this, !1)), this.ea && this.b.La(this, a), ye(this, 1, !a, !0))
    };
    var xe = function(a, b) {
            ve(a, 2, b) && ye(a, 2, b)
        },
        we = function(a, b) {
            ve(a, 4, b) && ye(a, 4, b)
        };
    h = R.prototype;
    h.isSelected = function() {
        return !!(this.C & 8)
    };
    h.oa = function() {
        return !!(this.C & 16)
    };
    h.Wa = function(a) {
        ve(this, 16, a) && ye(this, 16, a)
    };
    h.Ma = function(a) {
        ve(this, 32, a) && ye(this, 32, a)
    };
    h.getState = function() {
        return this.C
    };
    var ye = function(a, b, c, d) {
            d || 1 != b ? a.F & b && c != !!(a.C & b) && (a.b.Ta(a, b, c), a.C = c ? a.C | b : a.C & ~b) : a.setEnabled(!c)
        },
        ze = function(a) {
            if (a.P && a.C & 32) throw Error("Component already rendered");
            a.C & 32 && ye(a, 32, !1);
            a.F &= -33
        },
        S = function(a, b) {
            return !!(a.ua & b) && !!(a.F & b)
        },
        ve = function(a, b, c) {
            return !!(a.F & b) && !!(a.C & b) != c && (!(0 & b) || O(a, Xd(b, c))) && !a.D
        };
    h = R.prototype;
    h.lb = function(a) {
        (!a.relatedTarget || !Vc(this.o(), a.relatedTarget)) && O(this, "enter") && this.a() && S(this, 2) && xe(this, !0)
    };
    h.kb = function(a) {
        a.relatedTarget && Vc(this.o(), a.relatedTarget) || !O(this, "leave") || (S(this, 4) && we(this, !1), S(this, 2) && xe(this, !1))
    };
    h.Fa = q;
    h.ya = function(a) {
        this.a() && (S(this, 2) && xe(this, !0), !Wb(a) || G && H && a.ctrlKey || (S(this, 4) && we(this, !0), this.b && this.b.fb(this) && this.o().focus()));
        !Wb(a) || G && H && a.ctrlKey || a.h()
    };
    h.za = function(a) {
        this.a() && (S(this, 2) && xe(this, !0), this.C & 4 && this.pa(a) && S(this, 4) && we(this, !1))
    };
    h.jb = function(a) {
        this.a() && this.pa(a)
    };
    h.pa = function(a) {
        S(this, 16) && this.Wa(!this.oa());
        S(this, 8) && ve(this, 8, !0) && ye(this, 8, !0);
        if (S(this, 64)) {
            var b = !(this.C & 64);
            ve(this, 64, b) && ye(this, 64, b)
        }
        b = new Tb("action", this);
        a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.j = a.j);
        return O(this, b)
    };
    h.yb = function() {
        S(this, 32) && this.Ma(!0)
    };
    h.hb = function() {
        S(this, 4) && we(this, !1);
        S(this, 32) && this.Ma(!1)
    };
    h.Ab = function(a) {
        return this.ea && this.a() && this.Ga(a) ? (a.h(), a.i(), !0) : !1
    };
    h.Ga = function(a) {
        return 13 == a.keyCode && this.pa(a)
    };
    if (!u(R)) throw Error("Invalid component class " + R);
    if (!u(Q)) throw Error("Invalid renderer class " + Q);
    var Ae = R[ea] || (R[ea] = ++fa);
    pe[Ae] = Q;
    oe("goog-control", function() {
        return new R(null)
    });
    var te = function(a) {
        Qb.call(this);
        this.b = a;
        this.a = !1;
        this.c = new Td(this);
        Rb(this, x(Sb, this.c));
        a = Zd(this.b);
        this.c.listen(a, "mousedown", this.i).listen(a, "mouseup", this.j).listen(a, "click", this.h)
    };
    y(te, Qb);
    var Be = !E || 9 <= Number(tb);
    te.prototype.i = function() {
        this.a = !1
    };
    te.prototype.j = function() {
        this.a = !0
    };
    var Ce = function(a, b) {
        if (!Be) return a.button = 0, a.type = b, a;
        var c = document.createEvent("MouseEvents");
        c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
        return c
    };
    te.prototype.h = function(a) {
        if (this.a) this.a = !1;
        else {
            var b = a.b,
                c = b.button,
                d = b.type,
                e = Ce(b, "mousedown");
            this.b.ya(new K(e, a.a));
            e = Ce(b, "mouseup");
            this.b.za(new K(e, a.a));
            Be || (b.button = c, b.type = d)
        }
    };
    te.prototype.B = function() {
        this.b = null;
        te.l.B.call(this)
    };
    var De = function() {};
    y(De, ne);
    r(De);
    h = De.prototype;
    h.Ea = function() {};
    h.na = function(a) {
        re(a);
        a.ua &= -256;
        ze(a);
        return a.j.Pa("BUTTON", {
            "class": fe(this, a).join(" "),
            disabled: !a.a(),
            title: a.L || "",
            value: a.Z || ""
        }, ue(a) || "")
    };
    h.eb = function(a) {
        return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
    };
    h.R = function(a, b) {
        re(a);
        a.ua &= -256;
        ze(a);
        if (b.disabled) {
            var c = Ba(le(this, 1));
            xc(b, c)
        }
        return De.l.R.call(this, a, b)
    };
    h.nb = function(a) {
        $d(a).listen(a.o(), "click", a.pa)
    };
    h.Sa = q;
    h.gb = q;
    h.fb = function(a) {
        return a.a()
    };
    h.La = q;
    h.Ta = function(a, b, c) {
        De.l.Ta.call(this, a, b, c);
        (a = a.o()) && 1 == b && (a.disabled = c)
    };
    h.Qa = function(a) {
        return a.value
    };
    h.Ra = function(a, b) {
        a && (a.value = b)
    };
    h.S = q;
    var Ee = function(a, b, c) {
        R.call(this, a, b || De.H(), c)
    };
    y(Ee, R);
    Ee.prototype.B = function() {
        Ee.l.B.call(this);
        delete this.Z;
        delete this.L
    };
    Ee.prototype.U = function() {
        Ee.l.U.call(this);
        if (this.F & 32) {
            var a = this.o();
            a && $d(this).listen(a, "keyup", this.Ga)
        }
    };
    Ee.prototype.Ga = function(a) {
        return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.pa(a) : 32 == a.keyCode
    };
    oe("goog-button", function() {
        return new Ee(null)
    });
    E && I(8);
    var Fe = function(a) {
            if (null != a) switch (a.va) {
                case 1:
                    return 1;
                case -1:
                    return -1;
                case 0:
                    return 0
            }
            return null
        },
        He = function(a) {
            if (null != a && a.ga === od) return A(a.constructor === td), a;
            if (a instanceof Jc) {
                var b = Ge;
                if (a instanceof Jc && a.constructor === Jc && a.h === Ic) var c = a.a;
                else za("expected object of type SafeHtml, got '" + a + "' of type " + ca(a)), c = "type_error:SafeHtml";
                a = b(c, a.c())
            } else a = Ge(ua(String(String(a))), Fe(a));
            return a
        },
        Ge = function(a) {
            function b(a) {
                this.content = a
            }
            b.prototype = a.prototype;
            return function(a,
                d) {
                a = new b(String(a));
                void 0 !== d && (a.va = d);
                return a
            }
        }(td);
    (function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            a = String(a);
            if (!a) return "";
            a = new b(a);
            void 0 !== d && (a.va = d);
            return a
        }
    })(td);
    var Me = function(a) {
            return null != a && a.ga === od ? (A(a.constructor === td), String(String(a.$()).replace(Ie, "").replace(Je, "&lt;")).replace(Ke, Le)) : ua(String(a))
        },
        Ne = {
            "\x00": "&#0;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\x0B": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "-": "&#45;",
            "/": "&#47;",
            "<": "&lt;",
            "=": "&#61;",
            ">": "&gt;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        },
        Le = function(a) {
            return Ne[a]
        },
        Ke = /[\x00\x22\x27\x3c\x3e]/g,
        Oe = /^(?!on|src|(?:style|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i,
        Ie = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        Je = /</g;
    var Pe = function(a) {
        a = a || {};
        var b = a.content,
            c = Ge,
            d = '<div role="button"' + (a.id ? ' id="' + Me(a.id) + '"' : "") + ' class="';
        var e = a || {};
        var f = "goog-inline-block jfk-button ",
            g = e.style;
        switch (v(g) ? g.toString() : g) {
            case 0:
                f += "jfk-button-standard";
                break;
            case 2:
                f += "jfk-button-action";
                break;
            case 3:
                f += "jfk-button-primary";
                break;
            case 1:
                f += "jfk-button-default";
                break;
            case 4:
                f += "jfk-button-flat";
                break;
            case 5:
                f += "jfk-button-mini";
                break;
            case 6:
                f += "jfk-button-contrast";
                break;
            default:
                f += "jfk-button-standard"
        }
        f += (1 == e.width ?
            " jfk-button-narrow" : "") + (e.checked ? " jfk-button-checked" : "") + (e.vb ? " " + e.vb : "") + (e.disabled ? " jfk-button-disabled" : "");
        d = d + Me(new sd(f, void 0)) + '"' + (a.disabled ? ' aria-disabled="true"' : ' tabindex="' + (a.Eb ? Me(a.Eb) : "0") + '"') + (a.title ? a.Gb ? ' data-tooltip="' + Me(a.title) + '"' : ' title="' + Me(a.title) + '"' : "") + (a.value ? ' value="' + Me(a.value) + '"' : "");
        a.attributes ? (a = a.attributes, null != a && a.ga === pd ? (A(a.constructor === ud), a = a.$().replace(/([^"'\s])$/, "$1 ")) : (a = String(a), Oe.test(a) || (za("Bad value `%s` for |filterHtmlAttributes", [a]), a = "zSoyz")), a = " " + a) : a = "";
        return c(d + a + ">" + He(null != b ? b : "") + "</div>")
    };
    Pe.a = "jfk.templates.button.strict";
    var Qe = function(a, b, c) {
        this.h = c;
        this.c = a;
        this.i = b;
        this.b = 0;
        this.a = null
    };
    Qe.prototype.get = function() {
        if (0 < this.b) {
            this.b--;
            var a = this.a;
            this.a = a.next;
            a.next = null
        } else a = this.c();
        return a
    };
    var Se = function(a, b) {
        a.i(b);
        a.b < a.h && (a.b++, b.next = a.a, a.a = b)
    };
    var Te = function(a) {
            m.setTimeout(function() {
                throw a;
            }, 0)
        },
        Ue, Ve = function() {
            var a = m.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !D("Presto") && (a = function() {
                var a = document.createElement("IFRAME");
                a.style.display = "none";
                a.src = "";
                document.documentElement.appendChild(a);
                var b = a.contentWindow;
                a = b.document;
                a.open();
                a.write("");
                a.close();
                var c = "callImmediate" + Math.random(),
                    d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host;
                a = w(function(a) {
                    if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
                }, this);
                b.addEventListener("message", a, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        b.postMessage(c, d)
                    }
                }
            });
            if ("undefined" !== typeof a && !D("Trident") && !D("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (n(c.next)) {
                        c = c.next;
                        var a = c.Ya;
                        c.Ya = null;
                        a()
                    }
                };
                return function(a) {
                    d.next = {
                        Ya: a
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ?
                function(a) {
                    var b = document.createElement("SCRIPT");
                    b.onreadystatechange = function() {
                        b.onreadystatechange = null;
                        b.parentNode.removeChild(b);
                        b = null;
                        a();
                        a = null
                    };
                    document.documentElement.appendChild(b)
                } : function(a) {
                    m.setTimeout(a, 0)
                }
        };
    var We = function() {
            this.b = this.a = null
        },
        Ye = new Qe(function() {
            return new Xe
        }, function(a) {
            a.reset()
        }, 100);
    We.prototype.add = function(a, b) {
        var c = Ye.get();
        c.set(a, b);
        this.b ? this.b.next = c : (A(!this.a), this.a = c);
        this.b = c
    };
    We.prototype.remove = function() {
        var a = null;
        this.a && (a = this.a, this.a = this.a.next, this.a || (this.b = null), a.next = null);
        return a
    };
    var Xe = function() {
        this.next = this.b = this.a = null
    };
    Xe.prototype.set = function(a, b) {
        this.a = a;
        this.b = b;
        this.next = null
    };
    Xe.prototype.reset = function() {
        this.next = this.b = this.a = null
    };
    var cf = function(a, b) {
            Ze || $e();
            af || (Ze(), af = !0);
            bf.add(a, b)
        },
        Ze, $e = function() {
            if (-1 != String(m.Promise).indexOf("[native code]")) {
                var a = m.Promise.resolve(void 0);
                Ze = function() {
                    a.then(df)
                }
            } else Ze = function() {
                var a = df;
                !u(m.setImmediate) || m.Window && m.Window.prototype && !D("Edge") && m.Window.prototype.setImmediate == m.setImmediate ? (Ue || (Ue = Ve()), Ue(a)) : m.setImmediate(a)
            }
        },
        af = !1,
        bf = new We,
        df = function() {
            for (var a; a = bf.remove();) {
                try {
                    a.a.call(a.b)
                } catch (b) {
                    Te(b)
                }
                Se(Ye, a)
            }
            af = !1
        };
    var ef = function(a) {
            a.prototype.then = a.prototype.then;
            a.prototype.$goog_Thenable = !0
        },
        ff = function(a) {
            if (!a) return !1;
            try {
                return !!a.$goog_Thenable
            } catch (b) {
                return !1
            }
        };
    var jf = function(a, b) {
            this.a = 0;
            this.m = void 0;
            this.h = this.b = this.c = null;
            this.i = this.j = !1;
            if (a != q) try {
                var c = this;
                a.call(b, function(a) {
                    gf(c, 2, a)
                }, function(a) {
                    if (!(a instanceof hf)) try {
                        if (a instanceof Error) throw a;
                        throw Error("Promise rejected.");
                    } catch (e) {}
                    gf(c, 3, a)
                })
            } catch (d) {
                gf(this, 3, d)
            }
        },
        kf = function() {
            this.next = this.h = this.c = this.b = this.a = null;
            this.i = !1
        };
    kf.prototype.reset = function() {
        this.h = this.c = this.b = this.a = null;
        this.i = !1
    };
    var lf = new Qe(function() {
            return new kf
        }, function(a) {
            a.reset()
        }, 100),
        mf = function(a, b, c) {
            var d = lf.get();
            d.b = a;
            d.c = b;
            d.h = c;
            return d
        };
    jf.prototype.then = function(a, b, c) {
        null != a && Ca(a, "opt_onFulfilled should be a function.");
        null != b && Ca(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
        return nf(this, u(a) ? a : null, u(b) ? b : null, c)
    };
    ef(jf);
    jf.prototype.cancel = function(a) {
        0 == this.a && cf(function() {
            var b = new hf(a); of (this, b)
        }, this)
    };
    var of = function(a, b) {
        if (0 == a.a)
            if (a.c) {
                var c = a.c;
                if (c.b) {
                    for (var d = 0, e = null, f = null, g = c.b; g && (g.i || (d++, g.a == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                    e && (0 == c.a && 1 == d ? of (c, b) : (f ? (d = f, A(c.b), A(null != d), d.next == c.h && (c.h = d), d.next = d.next.next) : pf(c), qf(c, e, 3, b)))
                }
                a.c = null
            } else gf(a, 3, b)
    }, sf = function(a, b) {
        a.b || 2 != a.a && 3 != a.a || rf(a);
        A(null != b.b);
        a.h ? a.h.next = b : a.b = b;
        a.h = b
    }, nf = function(a, b, c, d) {
        var e = mf(null, null, null);
        e.a = new jf(function(a, g) {
            e.b = b ? function(c) {
                    try {
                        var e = b.call(d, c);
                        a(e)
                    } catch (C) {
                        g(C)
                    }
                } :
                a;
            e.c = c ? function(b) {
                try {
                    var e = c.call(d, b);
                    !n(e) && b instanceof hf ? g(b) : a(e)
                } catch (C) {
                    g(C)
                }
            } : g
        });
        e.a.c = a;
        sf(a, e);
        return e.a
    };
    jf.prototype.u = function(a) {
        A(1 == this.a);
        this.a = 0;
        gf(this, 2, a)
    };
    jf.prototype.D = function(a) {
        A(1 == this.a);
        this.a = 0;
        gf(this, 3, a)
    };
    var gf = function(a, b, c) {
            if (0 == a.a) {
                a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                a.a = 1;
                a: {
                    var d = c,
                        e = a.u,
                        f = a.D;
                    if (d instanceof jf) {
                        null != e && Ca(e, "opt_onFulfilled should be a function.");
                        null != f && Ca(f, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
                        sf(d, mf(e || q, f || null, a));
                        var g = !0
                    } else if (ff(d)) d.then(e, f, a),
                    g = !0;
                    else {
                        if (v(d)) try {
                            var k = d.then;
                            if (u(k)) {
                                tf(d, k, e, f, a);
                                g = !0;
                                break a
                            }
                        } catch (l) {
                            f.call(a, l);
                            g = !0;
                            break a
                        }
                        g = !1
                    }
                }
                g ||
                    (a.m = c, a.a = b, a.c = null, rf(a), 3 != b || c instanceof hf || uf(a, c))
            }
        },
        tf = function(a, b, c, d, e) {
            var f = !1,
                g = function(a) {
                    f || (f = !0, c.call(e, a))
                },
                k = function(a) {
                    f || (f = !0, d.call(e, a))
                };
            try {
                b.call(a, g, k)
            } catch (l) {
                k(l)
            }
        },
        rf = function(a) {
            a.j || (a.j = !0, cf(a.s, a))
        },
        pf = function(a) {
            var b = null;
            a.b && (b = a.b, a.b = b.next, b.next = null);
            a.b || (a.h = null);
            null != b && A(null != b.b);
            return b
        };
    jf.prototype.s = function() {
        for (var a; a = pf(this);) qf(this, a, this.a, this.m);
        this.j = !1
    };
    var qf = function(a, b, c, d) {
            if (3 == c && b.c && !b.i)
                for (; a && a.i; a = a.c) a.i = !1;
            if (b.a) b.a.c = null, vf(b, c, d);
            else try {
                b.i ? b.b.call(b.h) : vf(b, c, d)
            } catch (e) {
                wf.call(null, e)
            }
            Se(lf, b)
        },
        vf = function(a, b, c) {
            2 == b ? a.b.call(a.h, c) : a.c && a.c.call(a.h, c)
        },
        uf = function(a, b) {
            a.i = !0;
            cf(function() {
                a.i && wf.call(null, b)
            })
        },
        wf = Te,
        hf = function(a) {
            z.call(this, a)
        };
    y(hf, z);
    hf.prototype.name = "cancel";
    var xf = function(a, b, c) {
        if (u(a)) c && (a = w(a, c));
        else if (a && "function" == typeof a.handleEvent) a = w(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : m.setTimeout(a, b || 0)
    };
    (function() {
        if (ib) {
            var a = /Windows NT ([0-9.]+)/;
            return (a = a.exec(B)) ? a[1] : "0"
        }
        return H ? (a = /10[_.][0-9_.]+/, (a = a.exec(B)) ? a[0].replace(/_/g, ".") : "10") : jb ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(B)) ? a[1] : "") : kb || lb || mb ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(B)) ? a[1].replace(/_/g, ".") : "") : ""
    })();
    var yf = function(a) {
            return (a = a.exec(B)) ? a[1] : ""
        },
        zf = function() {
            if (vb) return yf(/Firefox\/([0-9.]+)/);
            if (E || F || gb) return sb;
            if (zb) return cb() || D("iPad") || D("iPod") ? yf(/CriOS\/([0-9.]+)/) : yf(/Chrome\/([0-9.]+)/);
            if (Ab && !(cb() || D("iPad") || D("iPod"))) return yf(/Version\/([0-9.]+)/);
            if (wb || xb) {
                var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(B);
                if (a) return a[1] + "." + a[2]
            } else if (yb) return (a = yf(/Android\s+([0-9.]+)/)) ? a : yf(/Version\/([0-9.]+)/);
            return ""
        }(),
        Af = function(a) {
            return 0 <= wa(zf, a)
        };
    var T = function(a, b, c, d) {
        Ee.call(this, a, Bf.H(), b);
        this.Y = c || 0;
        this.fa = d || 0;
        this.Ca = !1
    };
    y(T, Ee);
    T.prototype.setEnabled = function(a) {
        this.a() != a && (T.l.setEnabled.call(this, a), Cf(this))
    };
    T.prototype.Ma = function(a) {
        T.l.Ma.call(this, a);
        Df(this, !1)
    };
    T.prototype.ya = function(a) {
        T.l.ya.call(this, a);
        this.a() && Df(this, !0)
    };
    T.prototype.za = function(a) {
        T.l.za.call(this, a);
        this.a() && Df(this, !0)
    };
    var Df = function(a, b) {
            a.o() && (a = a.o(), b ? xc(a, "jfk-button-clear-outline") : zc(a, "jfk-button-clear-outline"))
        },
        Cf = function(a) {
            a.o() && Ef(a.b, a)
        },
        Gf = function() {
            var a = Ff("MSG_TRANSLATE");
            return new T(a, void 0, 2)
        },
        Bf = function() {
            this.D = this.A() + "-standard";
            this.b = this.A() + "-action";
            this.u = this.A() + "-primary";
            this.i = this.A() + "-default";
            this.j = this.A() + "-flat";
            this.s = this.A() + "-narrow";
            this.m = this.A() + "-mini";
            this.h = this.A() + "-contrast"
        };
    y(Bf, ne);
    r(Bf);
    h = Bf.prototype;
    h.ba = function(a, b, c) {
        a && c.Y != a && (c.Y = a, Cf(c));
        b && c.fa != b && (c.fa = b, Cf(c))
    };
    h.A = function() {
        return "jfk-button"
    };
    h.na = function(a) {
        Fa(a, T, "Button is expected to be instance of jfk.Button");
        var b = a.j;
        var c = {
            disabled: !a.a(),
            checked: a.oa(),
            style: a.Y,
            title: a.L,
            Gb: a.Ca,
            value: a.Z,
            width: a.fa
        };
        A(Pe, "Soy template may not be null.");
        var d = Pe(c || xd);
        c = (b || Oc()).a.createElement("DIV");
        d = wd(d);
        var e = d.match(Ad);
        A(!e, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", e && e[0], d);
        c.innerHTML = d;
        1 == c.childNodes.length &&
            (d = c.firstChild, 1 == d.nodeType && (c = d));
        b.xb(c, a.$());
        this.R(a, c);
        return c
    };
    h.R = function(a, b) {
        Bf.l.R.call(this, a, b);
        this.c || (this.c = $a(this.D, x(this.ba, 0, null), this.b, x(this.ba, 2, null), this.u, x(this.ba, 3, null), this.i, x(this.ba, 1, null), this.j, x(this.ba, 4, null), this.m, x(this.ba, 5, null), this.h, x(this.ba, 6, null), this.s, x(this.ba, null, 1)));
        for (var c = vc(b), d = 0; d < c.length; ++d) {
            var e = this.c[c[d]];
            e && e(a)
        }
        if (c = b.getAttribute("data-tooltip")) a.L = c, a.Ca = !0;
        return b
    };
    h.Qa = function(a) {
        return a.getAttribute("value") || ""
    };
    h.Ra = function(a, b) {
        a && a.setAttribute("value", b)
    };
    var Ef = function(a, b) {
        function c(a, b) {
            (a ? d : e).push(b)
        }
        A(b.o(), "Button element must already exist when updating style.");
        var d = [],
            e = [],
            f = b.Y;
        c(0 == f, a.D);
        c(2 == f, a.b);
        c(3 == f, a.u);
        c(4 == f, a.j);
        c(5 == f, a.m);
        c(1 == f, a.i);
        c(6 == f, a.h);
        c(1 == b.fa, a.s);
        c(!b.a(), a.A() + "-disabled");
        Ac(b.o(), e);
        yc(b.o(), d)
    };
    var Hf = function() {
        T.call(this, "", void 0, 4);
        se(this, "jfk-button-flat");
        se(this, "gtx-audio-button");
        se(this, "no-audio");
        this.sa = this.Ba = "";
        $d(this).listen(this, "action", this.tb)
    };
    y(Hf, T);
    Hf.prototype.tb = function() {
        chrome.runtime.sendMessage({
            audioSrc: If(this.Ba, this.sa)
        })
    };
    var Lf = function(a, b, c) {
            var d = c.toLowerCase();
            d in Jf && Kf[Jf[d.toLowerCase()]] >= b.length ? (a.O && Pa(a.O, "no-audio") && (0 == a.O.length && (a.O = null), he(a, "no-audio", !1)), a.Ba = b, a.sa = c) : se(a, "no-audio")
        },
        If = function(a, b) {
            return "https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=" + b + Kb(a) + "&q=" + encodeURIComponent(String(a))
        };
    var Mf = function(a) {
            a = String(a).toLowerCase().replace("_", "-");
            if ("zh-cn" == a) return "zh-CN";
            if ("zh-tw" == a) return "zh-TW";
            var b = a.indexOf("-");
            a = 0 <= b ? a.substring(0, b) : a;
            return "zh" == a ? "zh-CN" : a
        },
        Ff = function(a) {
            a = chrome.i18n.getMessage(a);
            return chrome.i18n.getMessage(a)
        };
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    var Nf = function(a, b) {
        this.i = [];
        this.L = a;
        this.G = b || null;
        this.h = this.a = !1;
        this.c = void 0;
        this.u = this.D = this.m = !1;
        this.j = 0;
        this.b = null;
        this.s = 0
    };
    Nf.prototype.cancel = function(a) {
        if (this.a) this.c instanceof Nf && this.c.cancel();
        else {
            if (this.b) {
                var b = this.b;
                delete this.b;
                a ? b.cancel(a) : (b.s--, 0 >= b.s && b.cancel())
            }
            this.L ? this.L.call(this.G, this) : this.u = !0;
            this.a || Of(this, new Pf)
        }
    };
    Nf.prototype.K = function(a, b) {
        this.m = !1;
        Qf(this, a, b)
    };
    var Qf = function(a, b, c) {
            a.a = !0;
            a.c = c;
            a.h = !b;
            Rf(a)
        },
        Tf = function(a) {
            if (a.a) {
                if (!a.u) throw new Sf;
                a.u = !1
            }
        },
        Of = function(a, b) {
            Tf(a);
            Uf(b);
            Qf(a, !1, b)
        },
        Uf = function(a) {
            A(!(a instanceof Nf), "An execution sequence may not be initiated with a blocking Deferred.")
        },
        Vf = function(a, b, c, d) {
            A(!a.D, "Blocking Deferreds can not be re-used");
            a.i.push([b, c, d]);
            a.a && Rf(a)
        };
    Nf.prototype.then = function(a, b, c) {
        var d, e, f = new jf(function(a, b) {
            d = a;
            e = b
        });
        Vf(this, d, function(a) {
            a instanceof Pf ? f.cancel() : e(a)
        });
        return f.then(a, b, c)
    };
    ef(Nf);
    Nf.prototype.isError = function(a) {
        return a instanceof Error
    };
    var Wf = function(a) {
            return Ka(a.i, function(a) {
                return u(a[1])
            })
        },
        Rf = function(a) {
            if (a.j && a.a && Wf(a)) {
                var b = a.j,
                    c = Xf[b];
                c && (m.clearTimeout(c.I), delete Xf[b]);
                a.j = 0
            }
            a.b && (a.b.s--, delete a.b);
            b = a.c;
            for (var d = c = !1; a.i.length && !a.m;) {
                var e = a.i.shift(),
                    f = e[0],
                    g = e[1];
                e = e[2];
                if (f = a.h ? g : f) try {
                    var k = f.call(e || a.G, b);
                    n(k) && (a.h = a.h && (k == b || a.isError(k)), a.c = b = k);
                    if (ff(b) || "function" === typeof m.Promise && b instanceof m.Promise) d = !0, a.m = !0
                } catch (l) {
                    b = l, a.h = !0, Wf(a) || (c = !0)
                }
            }
            a.c = b;
            d && (k = w(a.K, a, !0), d = w(a.K, a, !1), b instanceof Nf ? (Vf(b, k, d), b.D = !0) : b.then(k, d));
            c && (b = new Yf(b), Xf[b.I] = b, a.j = b.I)
        },
        Sf = function() {
            z.call(this)
        };
    y(Sf, z);
    Sf.prototype.message = "Deferred has already fired";
    Sf.prototype.name = "AlreadyCalledError";
    var Pf = function() {
        z.call(this)
    };
    y(Pf, z);
    Pf.prototype.message = "Deferred was canceled";
    Pf.prototype.name = "CanceledError";
    var Yf = function(a) {
        this.I = m.setTimeout(w(this.b, this), 0);
        this.a = a
    };
    Yf.prototype.b = function() {
        A(Xf[this.I], "Cannot throw an error that is not scheduled.");
        delete Xf[this.I];
        throw this.a;
    };
    var Xf = {};
    var cg = function(a, b) {
            var c = b || {};
            b = c.document || document;
            var d = Gc(a),
                e = document.createElement("SCRIPT"),
                f = {
                    pb: e,
                    ha: void 0
                },
                g = new Nf(Zf, f),
                k = null,
                l = null != c.timeout ? c.timeout : 5E3;
            0 < l && (k = window.setTimeout(function() {
                $f(e, !0);
                Of(g, new ag(1, "Timeout reached for loading script " + d))
            }, l), f.ha = k);
            e.onload = e.onreadystatechange = function() {
                e.readyState && "loaded" != e.readyState && "complete" != e.readyState || ($f(e, c.wb || !1, k), Tf(g), Uf(null), Qf(g, !0, null))
            };
            e.onerror = function() {
                $f(e, !0, k);
                Of(g, new ag(0, "Error while loading script " +
                    d))
            };
            f = c.attributes || {};
            Za(f, {
                type: "text/javascript",
                charset: "UTF-8"
            });
            Rc(e, f);
            Lc(e, a);
            bg(b).appendChild(e);
            return g
        },
        bg = function(a) {
            var b;
            return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement
        },
        Zf = function() {
            if (this && this.pb) {
                var a = this.pb;
                a && "SCRIPT" == a.tagName && $f(a, !0, this.ha)
            }
        },
        $f = function(a, b, c) {
            null != c && m.clearTimeout(c);
            a.onload = q;
            a.onerror = q;
            a.onreadystatechange = q;
            b && window.setTimeout(function() {
                Uc(a)
            }, 0)
        },
        ag = function(a, b) {
            var c = "Jsloader error (code #" +
                a + ")";
            b && (c += ": " + b);
            z.call(this, c);
            this.code = a
        };
    y(ag, z);
    var dg = function(a, b) {
            this.b = a instanceof Fc ? a : Hc(String(a));
            this.a = b ? b : "callback";
            this.ha = 5E3
        },
        eg = 0;
    dg.prototype.send = function(a, b, c, d) {
        if (a) {
            var e = {};
            for (f in a) e[f] = a[f];
            a = e
        } else a = {};
        d = d || "_" + (eg++).toString(36) + ja().toString(36);
        e = "_callbacks___" + d;
        b && (m[e] = fg(d, b), a[this.a] = e);
        b = {
            timeout: this.ha,
            wb: !0
        };
        e = Gc(this.b);
        var f = /\?/.test(e) ? "&" : "?";
        for (l in a)
            for (var g = t(a[l]) ? a[l] : [a[l]], k = 0; k < g.length; k++) null != g[k] && (e += f + encodeURIComponent(l) + "=" + encodeURIComponent(String(g[k])), f = "&");
        var l = Hc(e);
        l = cg(l, b);
        Vf(l, null, gg(d, a, c), void 0);
        return {
            I: d,
            $a: l
        }
    };
    dg.prototype.cancel = function(a) {
        a && (a.$a && a.$a.cancel(), a.I && hg(a.I, !1))
    };
    var gg = function(a, b, c) {
            return function() {
                hg(a, !1);
                c && c(b)
            }
        },
        fg = function(a, b) {
            return function(c) {
                hg(a, !0);
                b.apply(void 0, arguments)
            }
        },
        hg = function(a, b) {
            a = "_callbacks___" + a;
            if (m[a])
                if (b) try {
                    delete m[a]
                } catch (c) {
                    m[a] = void 0
                } else m[a] = q
        };
    var jg = function(a) {
            this.c = [];
            chrome.i18n.getAcceptLanguages(w(this.s, this));
            this.b = "";
            this.i = "1";
            this.a = [];
            this.h = [];
            this.m = !!a;
            chrome.storage.local.get(null, w(this.D, this));
            ig(this)
        },
        lg = function() {
            var a = kg;
            if ("" != a.b) a = a.b;
            else a: {
                for (var b = 0; b < a.c.length; b++) {
                    var c = Mf(a.c[b]);
                    if (a.a[c]) {
                        a = c;
                        break a
                    }
                }
                a = "en"
            }
            return a
        };
    jg.prototype.D = function(a) {
        "gtxTargetLang" in a && (this.b = a.gtxTargetLang);
        "gtxShowBubble" in a && (this.i = a.gtxShowBubble);
        "gtxSourceLangList" in a && (this.h = mg(this, a.gtxSourceLangList));
        "gtxTargetLangList" in a && (this.a = mg(this, a.gtxTargetLangList));
        this.loaded = !0;
        if (this.m) {
            var b = (new Date).getTime(),
                c = "gtxTimeStamp" in a ? a.gtxTimeStamp : 0,
                d = chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : "en";
            a = "gtxDisplayLanguage" in a ? a.gtxDisplayLanguage : "";
            (864E5 < Math.abs(b - c) || d != a) && (new dg("https://translate.googleapis.com/translate_a/l",
                "cb")).send({
                client: "gtx",
                hl: d
            }, w(this.u, this, d))
        }
    };
    var mg = function(a, b) {
        var c = [],
            d;
        for (d in b) c.push({
            code: d,
            name: b[d]
        });
        c.sort(a.j);
        a = {};
        for (b = 0; b < c.length; b++) a[c[b].code] = c[b].name;
        return a
    };
    jg.prototype.j = function(a, b) {
        return a.name.localeCompare(b.name)
    };
    var ig = function(a) {
        chrome.storage.onChanged.addListener(function(b) {
            b.gtxTargetLang && (a.b = b.gtxTargetLang.newValue);
            b.gtxShowBubble && (a.i = b.gtxShowBubble.newValue)
        })
    };
    jg.prototype.s = function(a) {
        this.c = a
    };
    jg.prototype.u = function(a, b) {
        var c = (new Date).getTime(),
            d = {};
        d.gtxSourceLangList = b.sl;
        d.gtxTargetLangList = b.tl;
        d.gtxDisplayLanguage = a;
        d.gtxTimeStamp = c;
        chrome.storage.local.set(d);
        this.h = b.sl;
        this.a = b.tl
    };
    var ng = function(a) {
        var b = kg;
        if ("sl" == a) return b.h;
        if ("tl" == a) return b.a;
        throw Error("Invalid input for getLangList()");
    };
    var vd = function(a) {
        var b = "";
        if (a.query)
            if (a.qb) {
            	var saveNote = function(from, to) {
			    	var body = {"action": "addNote", "version": 5, "params": {"note": {"fields": {"Front": from, "Back": to}, "modelName": "Basic", "deckName": "Default"}}};
			    	fetch('http://localhost:8765', { method: 'POST', body: JSON(body) }).then(r => r.json()).then(x => console.log('saved', x))
			    };

                b += '<div class="gtx-language"><select class="gtx-lang-selector">';
                for (var c = a.Db, d = c.length, e = 0; e < d; e++) {
                    var f = c[e];
                    b += "auto" != f ? '<option value="' + He(f[0]) + '"' + (f[0] == a.Cb ? " selected" : "") + ">" + He(f[1]) + "</option>" : ""
                }
                b += '</select></div><div class="gtx-source-audio"><div class="jfk-button-img"></div></div><div class="gtx-body">' + 
                	He(a.query) + '</div><br><div class="gtx-language">' + 
                	He(a.Fb) + '</div><div class="gtx-target-audio"><div class="jfk-button-img"></div></div><a class="gtx-body" onclick=\'saveNote("' + He(a.query) + '","' + He(a.qb) + '")\'>' +
                	He(a.qb) + "</a>";
                if (a.ab) {
                    b += '<table style="width: 95%">';
                    c = a.ab;
                    d = c.length;
                    for (e = 0; e < d; e++) {
                        f = c[e];
                        b += '<tr><td class="gtx-td"><div class="gtx-pos">' + He(f.pos) + '</div></td><td class="gtx-td">';
                        if (a.popup) {
                            f = f.terms;
                            for (var g = f.length, k = 0; k < g; k++) b += (0 != k ? ", " : "") + He(f[k])
                        } else
                            for (f = f.terms, g = f.length, k = 0; k < g; k++) {
                                var l = f[k];
                                b += 3 > k ? (0 != k ? ", " : "") + He(l) : ""
                            }
                        b += "</td></tr>"
                    }
                    b += "</table>"
                }
                b += "<br>"
            } else b += "No translation results for <b>" + He(a.query) + "</b>.";
        return b
    };
    vd.a = "extension.translation";
    var Kf = [0, 200],
        Jf = {
            af: 1,
            ar: 1,
            bn: 1,
            bs: 1,
            ca: 1,
            cs: 1,
            cy: 1,
            da: 1,
            de: 1,
            el: 1,
            en: 1,
            eo: 1,
            es: 1,
            fi: 1,
            fr: 1,
            hi: 1,
            hr: 1,
            hu: 1,
            hy: 1,
            id: 1,
            is: 1,
            it: 1,
            ja: 1,
            km: 1,
            ko: 1,
            la: 1,
            lv: 1,
            mk: 1,
            ne: 1,
            nl: 1,
            no: 1,
            pl: 1,
            pt: 1,
            ro: 1,
            ru: 1,
            si: 1,
            sk: 1,
            sq: 1,
            sr: 1,
            sv: 1,
            sw: 1,
            ta: 1,
            th: 1,
            tr: 1,
            vi: 1,
            uk: 1,
            zh: 1,
            "zh-cn": 1,
            "zh-tw": 1
        };
    var og = function() {
        this.b = [];
        this.a = {};
        this.c = !1;
        this.m = 1;
        this.h = {};
        jc(window, "beforeunload", this.j, !1, this)
    };
    r(og);
    var pg = function(a, b, c) {
            if (null == b) return "1";
            switch (ca(b)) {
                case "string":
                    return a = b, !(64 < a.length) || null != c && c || (a = a.substr(0, 64)), encodeURIComponent(String(a));
                case "number":
                    return "" + b;
                case "boolean":
                    return b ? "1" : "0";
                case "array":
                    var d = [],
                        e;
                    for (e in b) d.push(pg(a, b[e], c));
                    return d.join(",");
                case "object":
                    d = [];
                    for (e in b) d.push(qg(a, e, b[e], c));
                    return d.join(",");
                default:
                    return ""
            }
        },
        qg = function(a, b, c, d) {
            return [encodeURIComponent(String(b)), pg(a, c, d || "smtalt" == b)].join("=")
        };
    og.prototype.log = function(a, b) {
        this.b.push([a, b]);
        this.c || (this.c = !0, xf(this.i, 0, this))
    };
    og.prototype.i = function() {
        for (var a = 0; a < this.b.length; a++) {
            var b = this.b[a];
            rg(this, "/gen204?" + qg(this, b[0], b[1]) + "")
        }
        this.b = [];
        this.c = !1
    };
    var rg = function(a, b) {
        var c = new Image,
            d = a.m++;
        a.h[d] = c;
        c.onload = c.onerror = function() {
            delete og.H().h[d]
        };
        c.src = b;
        c = null
    };
    og.prototype.j = function() {
        this.i();
        for (var a in this.a)
            if (0 != this.a[a]) {
                var b = a;
                rg(this, "/gen204?" + qg(this, b, this.a[b][1]) + "");
                b in this.a && (m.clearTimeout(this.a[b][0]), delete this.a[b])
            }
    };
    var sg = function(a, b, c, d, e) {
        this.reset(a, b, c, d, e)
    };
    sg.prototype.a = null;
    var tg = 0;
    sg.prototype.reset = function(a, b, c, d, e) {
        "number" == typeof e || tg++;
        d || ja();
        this.b = b;
        delete this.a
    };
    sg.prototype.getMessage = function() {
        return this.b
    };
    var ug = function(a) {
            this.h = a;
            this.b = this.c = this.a = null
        },
        vg = function(a, b) {
            this.name = a;
            this.value = b
        };
    vg.prototype.toString = function() {
        return this.name
    };
    var wg = new vg("SEVERE", 1E3),
        xg = new vg("CONFIG", 700),
        yg = new vg("FINE", 500);
    ug.prototype.getChildren = function() {
        this.b || (this.b = {});
        return this.b
    };
    var zg = function(a) {
        if (a.c) return a.c;
        if (a.a) return zg(a.a);
        za("Root logger has no level set.");
        return null
    };
    ug.prototype.log = function(a, b, c) {
        if (a.value >= zg(this).value)
            for (u(b) && (b = b()), a = new sg(a, String(b), this.h), c && (a.a = c), c = this; c;) c = c.a
    };
    var Ag = {},
        Bg = null,
        Cg = function(a) {
            Bg || (Bg = new ug(""), Ag[""] = Bg, Bg.c = xg);
            var b;
            if (!(b = Ag[a])) {
                b = new ug(a);
                var c = a.lastIndexOf("."),
                    d = a.substr(c + 1);
                c = Cg(a.substr(0, c));
                c.getChildren()[d] = b;
                b.a = c;
                Ag[a] = b
            }
            return b
        };
    var Dg = function(a, b) {
        a && a.log(yg, b, void 0)
    };
    var Eg = function() {};
    Eg.prototype.a = null;
    var Gg = function(a) {
        var b;
        (b = a.a) || (b = {}, Fg(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
        return b
    };
    var Hg, Ig = function() {};
    y(Ig, Eg);
    var Jg = function(a) {
            return (a = Fg(a)) ? new ActiveXObject(a) : new XMLHttpRequest
        },
        Fg = function(a) {
            if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        return new ActiveXObject(d), a.b = d
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            return a.b
        };
    Hg = new Ig;
    var Kg = function(a) {
        N.call(this);
        this.headers = new M;
        this.X = a || null;
        this.b = !1;
        this.T = this.a = null;
        this.ia = this.j = "";
        this.i = 0;
        this.m = "";
        this.c = this.Z = this.u = this.Y = !1;
        this.s = 0;
        this.G = null;
        this.sa = "";
        this.L = this.fa = !1
    };
    y(Kg, N);
    var Lg = Kg.prototype,
        Mg = Cg("goog.net.XhrIo");
    Lg.N = Mg;
    var Ng = /^https?$/i,
        Og = ["POST", "PUT"],
        Pg = [],
        Qg = function(a, b, c, d) {
            var e = new Kg;
            Pg.push(e);
            b && e.listen("complete", b);
            e.h.add("ready", e.Ba, !0, void 0, void 0);
            e.send(a, c, d, void 0)
        };
    Kg.prototype.Ba = function() {
        this.ka();
        Pa(Pg, this)
    };
    Kg.prototype.send = function(a, b, c, d) {
        if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.j + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.j = a;
        this.m = "";
        this.i = 0;
        this.ia = b;
        this.Y = !1;
        this.b = !0;
        this.a = this.X ? Jg(this.X) : Jg(Hg);
        this.T = this.X ? Gg(this.X) : Gg(Hg);
        this.a.onreadystatechange = w(this.ra, this);
        try {
            Dg(this.N, Rg(this, "Opening Xhr")), this.Z = !0, this.a.open(b, String(a), !0), this.Z = !1
        } catch (f) {
            Dg(this.N, Rg(this, "Error opening Xhr: " + f.message));
            Sg(this, f);
            return
        }
        a = c || "";
        var e = new M(this.headers);
        d && hd(d, function(a, b) {
            e.set(b, a)
        });
        d = Na(e.V());
        c = m.FormData && a instanceof m.FormData;
        !Oa(Og, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(a, b) {
            this.a.setRequestHeader(b, a)
        }, this);
        this.sa && (this.a.responseType = this.sa);
        "withCredentials" in this.a && this.a.withCredentials !== this.fa && (this.a.withCredentials = this.fa);
        try {
            Tg(this), 0 < this.s && (this.L = Ug(this.a), Dg(this.N, Rg(this, "Will abort after " + this.s + "ms if incomplete, xhr2 " +
                this.L)), this.L ? (this.a.timeout = this.s, this.a.ontimeout = w(this.ha, this)) : this.G = xf(this.ha, this.s, this)), Dg(this.N, Rg(this, "Sending request")), this.u = !0, this.a.send(a), this.u = !1
        } catch (f) {
            Dg(this.N, Rg(this, "Send error: " + f.message)), Sg(this, f)
        }
    };
    var Ug = function(a) {
            return E && I(9) && ba(a.timeout) && n(a.ontimeout)
        },
        Ma = function(a) {
            return "content-type" == a.toLowerCase()
        };
    Kg.prototype.ha = function() {
        "undefined" != typeof aa && this.a && (this.m = "Timed out after " + this.s + "ms, aborting", this.i = 8, Dg(this.N, Rg(this, this.m)), O(this, "timeout"), this.abort(8))
    };
    var Sg = function(a, b) {
            a.b = !1;
            a.a && (a.c = !0, a.a.abort(), a.c = !1);
            a.m = b;
            a.i = 5;
            Vg(a);
            Wg(a)
        },
        Vg = function(a) {
            a.Y || (a.Y = !0, O(a, "complete"), O(a, "error"))
        };
    Kg.prototype.abort = function(a) {
        this.a && this.b && (Dg(this.N, Rg(this, "Aborting")), this.b = !1, this.c = !0, this.a.abort(), this.c = !1, this.i = a || 7, O(this, "complete"), O(this, "abort"), Wg(this))
    };
    Kg.prototype.B = function() {
        this.a && (this.b && (this.b = !1, this.c = !0, this.a.abort(), this.c = !1), Wg(this, !0));
        Kg.l.B.call(this)
    };
    Kg.prototype.ra = function() {
        this.D || (this.Z || this.u || this.c ? Xg(this) : this.Ca())
    };
    Kg.prototype.Ca = function() {
        Xg(this)
    };
    var Xg = function(a) {
            if (a.b && "undefined" != typeof aa)
                if (a.T[1] && 4 == Yg(a) && 2 == Zg(a)) Dg(a.N, Rg(a, "Local request error detected and ignored"));
                else if (a.u && 4 == Yg(a)) xf(a.ra, 0, a);
            else if (O(a, "readystatechange"), 4 == Yg(a)) {
                Dg(a.N, Rg(a, "Request complete"));
                a.b = !1;
                try {
                    if ($g(a)) O(a, "complete"), O(a, "success");
                    else {
                        a.i = 6;
                        try {
                            var b = 2 < Yg(a) ? a.a.statusText : ""
                        } catch (c) {
                            Dg(a.N, "Can not get status: " + c.message), b = ""
                        }
                        a.m = b + " [" + Zg(a) + "]";
                        Vg(a)
                    }
                } finally {
                    Wg(a)
                }
            }
        },
        Wg = function(a, b) {
            if (a.a) {
                Tg(a);
                var c = a.a,
                    d = a.T[0] ? q : null;
                a.a = null;
                a.T = null;
                b || O(a, "ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {
                    (a = a.N) && a.log(wg, "Problem encountered resetting onreadystatechange: " + e.message, void 0)
                }
            }
        },
        Tg = function(a) {
            a.a && a.L && (a.a.ontimeout = null);
            a.G && (m.clearTimeout(a.G), a.G = null)
        },
        $g = function(a) {
            var b = Zg(a);
            a: switch (b) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                    var c = !0;
                    break a;
                default:
                    c = !1
            }
            if (!c) {
                if (b = 0 === b) a = String(a.j).match(id)[1] || null, !a && m.self && m.self.location && (a = m.self.location.protocol, a = a.substr(0, a.length -
                    1)), b = !Ng.test(a ? a.toLowerCase() : "");
                c = b
            }
            return c
        },
        Yg = function(a) {
            return a.a ? a.a.readyState : 0
        },
        Zg = function(a) {
            try {
                return 2 < Yg(a) ? a.a.status : -1
            } catch (b) {
                return -1
            }
        },
        ah = function(a) {
            try {
                return a.a ? a.a.responseText : ""
            } catch (b) {
                return Dg(a.N, "Can not get responseText: " + b.message), ""
            }
        },
        Rg = function(a, b) {
            return b + " [" + a.ia + " " + a.j + " " + Zg(a) + "]"
        };
    var bh = !1,
        ch = function(a) {
            if (a = a.match(/[\d]+/g)) a.length = 3
        };
    (function() {
        if (navigator.plugins && navigator.plugins.length) {
            var a = navigator.plugins["Shockwave Flash"];
            if (a && (bh = !0, a.description)) {
                ch(a.description);
                return
            }
            if (navigator.plugins["Shockwave Flash 2.0"]) {
                bh = !0;
                return
            }
        }
        if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], bh = !(!a || !a.enabledPlugin))) {
            ch(a.enabledPlugin.description);
            return
        }
        try {
            var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
            bh = !0;
            ch(b.GetVariable("$version"));
            return
        } catch (c) {}
        try {
            b =
                new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
            bh = !0;
            return
        } catch (c) {}
        try {
            b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), bh = !0, ch(b.GetVariable("$version"))
        } catch (c) {}
    })();
    var dh = function() {
        E ? Af(9) : zb && Af(25) || E && Af(8) || F || vb && Af(19) || gb && Af(12.1) || Ab && Af(5.1) || xb && Af(3.2) || yb && Af(2.1)
    };
    r(dh);
    var fh = function(a) {
        Fb(this, a, eh)
    };
    y(fh, Bb);
    var eh = [26],
        gh = function(a) {
            Fb(this, a, null)
        };
    y(gh, Bb);
    var hh = function() {
        dh.H()
    };
    r(hh);
    hh.prototype.store = function(a) {
        J(a, 65, 0);
        J(a, 16, "");
        J(a, 14, "");
        J(a, 1, "");
        J(a, 50, "");
        J(a, 52, "");
        J(a, 32, 0)
    };
    var ih = function() {
        this.a = hh.H()
    };
    y(ih, Qb);
    r(ih);
    var jh = function(a, b, c) {
            this.type = a;
            this.label = b;
            A(!n(c) || "m" == a, "Only messages should give a message descriptor.")
        },
        kh = function(a) {
            switch (a) {
                case "d":
                case "f":
                case "i":
                case "j":
                case "u":
                case "v":
                case "x":
                case "y":
                case "g":
                case "h":
                case "n":
                case "o":
                case "e":
                    break;
                case "s":
                case "z":
                case "B":
                    break;
                case "b":
                    break;
                default:
                    A("Message descriptors must provide a default value.")
            }
        },
        U = function(a) {
            n(void 0) || kh(a);
            new jh(a, 1, void 0)
        },
        V = function(a) {
            n(void 0) || kh(a);
            new jh(a, 2, void 0)
        },
        W = function(a, b) {
            new jh(a,
                3, b)
        };
    U("d");
    V("d");
    W("d");
    U("f");
    V("f");
    W("f");
    U("i");
    V("i");
    W("i");
    U("j");
    V("j");
    W("j", void 0);
    W("j", void 0);
    U("u");
    V("u");
    W("u");
    U("v");
    V("v");
    W("v", void 0);
    W("v", void 0);
    U("b");
    V("b");
    W("b");
    U("e");
    V("e");
    W("e");
    U("s");
    V("s");
    W("s");
    U("B");
    V("B");
    W("B");
    U("x");
    V("x");
    W("x");
    U("y");
    V("y");
    W("y");
    U("g");
    V("g");
    W("g");
    U("h");
    V("h");
    W("h");
    U("n");
    V("n");
    W("n");
    U("o");
    V("o");
    W("o", void 0);
    W("o", void 0);
    var X = function(a) {
        this.data = a || []
    };
    X.prototype.qa = function() {
        return this.data
    };
    var Y = function(a) {
        var b = a.a();
        a = a.data;
        for (var c = {}, d = 0; d < a.length; d++)
            if (void 0 !== a[d] && null !== a[d]) {
                var e = !1,
                    f;
                for (f in b) {
                    var g = b[f];
                    var k = f;
                    if (g.f == d) {
                        e = !0;
                        break
                    }
                }
                if (e)
                    if (g.v)
                        if (g.g)
                            for (c[k] = [], e = 0; e < a[d].length; e++) c[k].push(g.v(a[d][e]));
                        else c[k] = g.v(a[d]);
                else c[k] = a[d]
            }
        return c
    };
    X.prototype.toString = function() {
        return JSON.stringify(Y(this))
    };
    var Z = function(a, b) {
        var c = [];
        a = new a(c);
        var d = Fa(a, X).a(),
            e;
        for (e in b) {
            var f = A(d[e]),
                g = b[e];
            if (f.w)
                if (g instanceof Array) {
                    var k = [];
                    for (var l = 0; l < g.length; l++) k.push(f.w(g[l]).qa())
                } else k = f.w(g).qa();
            else k = g;
            c[f.f] = k
        }
        return a
    };
    var lh = function(a) {
        this.data = a || []
    };
    y(lh, X);
    var mh = function(a) {
        this.data = a || []
    };
    y(mh, X);
    var nh = {
        text: {
            f: 0,
            g: !1
        },
        source: {
            f: 1,
            g: !1
        },
        link: {
            f: 2,
            g: !1
        },
        translation: {
            f: 3,
            g: !1
        },
        source_type: {
            f: 4,
            g: !1
        },
        definition_id: {
            f: 5,
            g: !1
        }
    };
    lh.prototype.a = function() {
        return nh
    };
    var oh = {
        example: {
            f: 0,
            w: function(a) {
                return Z(lh, a)
            },
            v: function(a) {
                return Y(new lh(a))
            },
            g: !0
        }
    };
    mh.prototype.a = function() {
        return oh
    };
    var ph = function(a) {
        this.data = a || []
    };
    y(ph, X);
    var qh = function(a) {
        this.data = a || []
    };
    y(qh, X);
    var rh = function(a) {
        this.data = a || []
    };
    y(rh, X);
    var sh = function(a) {
        this.data = a || []
    };
    y(sh, X);
    var th = function(a) {
        this.data = a || []
    };
    y(th, X);
    var uh = function(a) {
        this.data = a || []
    };
    y(uh, X);
    var vh = function(a) {
        this.data = a || []
    };
    y(vh, X);
    var wh = function(a) {
        this.data = a || []
    };
    y(wh, X);
    var xh = function(a) {
        this.data = a || []
    };
    y(xh, X);
    var yh = function(a) {
        this.data = a || []
    };
    y(yh, X);
    var zh = function(a) {
        this.data = a || []
    };
    y(zh, X);
    var Ah = function(a) {
        this.data = a || []
    };
    y(Ah, X);
    var Bh = function(a) {
        this.data = a || []
    };
    y(Bh, X);
    var Ch = function(a) {
        this.data = a || []
    };
    y(Ch, X);
    var Dh = function(a) {
        this.data = a || []
    };
    y(Dh, X);
    var Eh = function(a) {
        this.data = a || []
    };
    y(Eh, X);
    var Fh = {
        word: {
            f: 0,
            g: !1
        },
        styles: {
            f: 1,
            g: !0
        },
        has_preceeding_space: {
            f: 2,
            g: !1
        },
        attach_to_next_token: {
            f: 3,
            g: !1
        },
        confidence: {
            f: 4,
            g: !1
        },
        start_pos: {
            f: 5,
            g: !1
        },
        end_pos: {
            f: 6,
            g: !1
        },
        not_from_first_segment: {
            f: 7,
            g: !1
        }
    };
    ph.prototype.a = function() {
        return Fh
    };
    var Gh = {
        src_phrase: {
            f: 0,
            g: !1
        },
        alternative: {
            f: 2,
            w: function(a) {
                return Z(rh, a)
            },
            v: function(a) {
                return Y(new rh(a))
            },
            g: !0
        },
        srcunicodeoffsets: {
            f: 3,
            w: function(a) {
                return Z(sh, a)
            },
            v: function(a) {
                return Y(new sh(a))
            },
            g: !0
        },
        raw_src_segment: {
            f: 4,
            g: !1
        },
        start_pos: {
            f: 5,
            g: !1
        },
        end_pos: {
            f: 6,
            g: !1
        }
    };
    qh.prototype.a = function() {
        return Gh
    };
    var Hh = {
        word_postproc: {
            f: 0,
            g: !1
        },
        score: {
            f: 1,
            g: !1
        },
        has_preceeding_space: {
            f: 2,
            g: !1
        },
        attach_to_next_token: {
            f: 3,
            g: !1
        }
    };
    rh.prototype.a = function() {
        return Hh
    };
    var Ih = {
        begin: {
            f: 0,
            g: !1
        },
        end: {
            f: 1,
            g: !1
        }
    };
    sh.prototype.a = function() {
        return Ih
    };
    var Jh = {
        trans: {
            f: 0,
            g: !1
        },
        orig: {
            f: 1,
            g: !1
        },
        translit: {
            f: 2,
            g: !1
        },
        src_translit: {
            f: 3,
            g: !1
        },
        backend: {
            f: 4,
            g: !1
        },
        model: {
            f: 5,
            g: !0
        }
    };
    th.prototype.a = function() {
        return Jh
    };
    var Kh = {
        word: {
            f: 0,
            g: !1
        },
        reverse_translation: {
            f: 1,
            g: !0
        },
        synset_id: {
            f: 2,
            g: !0
        },
        score: {
            f: 3,
            g: !1
        },
        previous_word: {
            f: 4,
            g: !1
        }
    };
    uh.prototype.a = function() {
        return Kh
    };
    var Lh = {
        pos: {
            f: 0,
            g: !1
        },
        terms: {
            f: 1,
            g: !0
        },
        entry: {
            f: 2,
            w: function(a) {
                return Z(uh, a)
            },
            v: function(a) {
                return Y(new uh(a))
            },
            g: !0
        },
        base_form: {
            f: 3,
            g: !1
        },
        pos_enum: {
            f: 4,
            g: !1
        }
    };
    vh.prototype.a = function() {
        return Lh
    };
    var Mh = {
        gloss: {
            f: 0,
            g: !1
        },
        definition_id: {
            f: 1,
            g: !1
        },
        example: {
            f: 2,
            g: !1
        }
    };
    wh.prototype.a = function() {
        return Mh
    };
    var Nh = {
        pos: {
            f: 0,
            g: !1
        },
        entry: {
            f: 1,
            w: function(a) {
                return Z(wh, a)
            },
            v: function(a) {
                return Y(new wh(a))
            },
            g: !0
        },
        base_form: {
            f: 2,
            g: !1
        }
    };
    xh.prototype.a = function() {
        return Nh
    };
    var Oh = {
        synonym: {
            f: 0,
            g: !0
        },
        definition_id: {
            f: 1,
            g: !1
        }
    };
    yh.prototype.a = function() {
        return Oh
    };
    var Ph = {
        pos: {
            f: 0,
            g: !1
        },
        entry: {
            f: 1,
            w: function(a) {
                return Z(yh, a)
            },
            v: function(a) {
                return Y(new yh(a))
            },
            g: !0
        },
        base_form: {
            f: 2,
            g: !1
        }
    };
    zh.prototype.a = function() {
        return Ph
    };
    var Qh = {
        word: {
            f: 0,
            g: !0
        }
    };
    Ah.prototype.a = function() {
        return Qh
    };
    var Rh = {
        spell_html_res: {
            f: 0,
            g: !1
        },
        spell_res: {
            f: 1,
            g: !1
        },
        correction_type: {
            f: 2,
            g: !0
        },
        correction_translation: {
            f: 3,
            g: !1
        },
        related: {
            f: 4,
            g: !1
        },
        confident: {
            f: 5,
            g: !1
        }
    };
    Bh.prototype.a = function() {
        return Rh
    };
    var Sh = {
        srclangs: {
            f: 0,
            g: !0
        },
        extended_srclangs: {
            f: 3,
            g: !0
        },
        detected_target: {
            f: 1,
            g: !1
        },
        srclangs_confidences: {
            f: 2,
            g: !0
        }
    };
    Ch.prototype.a = function() {
        return Sh
    };
    var Th = {
        title: {
            f: 0,
            g: !1
        },
        description: {
            f: 1,
            g: !1
        },
        image_url: {
            f: 2,
            g: !1
        },
        image_ref_url: {
            f: 3,
            g: !1
        }
    };
    Dh.prototype.a = function() {
        return Th
    };
    Dh.prototype.getTitle = function() {
        var a = this.data[0];
        return null != a ? a : ""
    };
    Dh.prototype.setTitle = function(a) {
        this.data[0] = a
    };
    var Uh = {
        sentences: {
            f: 0,
            w: function(a) {
                return Z(th, a)
            },
            v: function(a) {
                return Y(new th(a))
            },
            g: !0
        },
        dict: {
            f: 1,
            w: function(a) {
                return Z(vh, a)
            },
            v: function(a) {
                return Y(new vh(a))
            },
            g: !0
        },
        src: {
            f: 2,
            g: !1
        },
        err: {
            f: 3,
            g: !1
        },
        styled_words: {
            f: 4,
            w: function(a) {
                return Z(ph, a)
            },
            v: function(a) {
                return Y(new ph(a))
            },
            g: !0
        },
        alternative_translations: {
            f: 5,
            w: function(a) {
                return Z(qh, a)
            },
            v: function(a) {
                return Y(new qh(a))
            },
            g: !0
        },
        confidence: {
            f: 6,
            g: !1
        },
        spell: {
            f: 7,
            w: function(a) {
                return Z(Bh, a)
            },
            v: function(a) {
                return Y(new Bh(a))
            },
            g: !1
        },
        autocorrection: {
            f: 10,
            g: !1
        },
        ld_result: {
            f: 8,
            w: function(a) {
                return Z(Ch, a)
            },
            v: function(a) {
                return Y(new Ch(a))
            },
            g: !1
        },
        server_time: {
            f: 9,
            g: !1
        },
        synsets: {
            f: 11,
            w: function(a) {
                return Z(zh, a)
            },
            v: function(a) {
                return Y(new zh(a))
            },
            g: !0
        },
        definitions: {
            f: 12,
            w: function(a) {
                return Z(xh, a)
            },
            v: function(a) {
                return Y(new xh(a))
            },
            g: !0
        },
        examples: {
            f: 13,
            w: function(a) {
                return Z(mh, a)
            },
            v: function(a) {
                return Y(new mh(a))
            },
            g: !1
        },
        related_words: {
            f: 14,
            w: function(a) {
                return Z(Ah, a)
            },
            v: function(a) {
                return Y(new Ah(a))
            },
            g: !1
        },
        knowledge_results: {
            f: 15,
            w: function(a) {
                return Z(Dh,
                    a)
            },
            v: function(a) {
                return Y(new Dh(a))
            },
            g: !0
        }
    };
    Eh.prototype.a = function() {
        return Uh
    };
    var Vh = function(a, b) {
            this.c = a;
            this.a = "";
            b && (this.a = b);
            this.b = 0;
            this.i = ih.H()
        },
        Wh = function(a) {
            a = a.M("q").join("");
            return Kb(a)
        },
        Xh = function(a, b, c, d, e) {
            c = c.toString();
            c += Wh(d);
            d = d.toString();
            var f = "POST";
            b += "?" + c;
            2E3 > b.length + d.length && (f = "GET", b += "&" + d, d = "");
            ++a.b;
            Qg(b, function(b) {
                --a.b;
                e(b)
            }, f, d)
        };
    Vh.prototype.h = function(a, b, c) {
        c = c.target;
        if (!$g(c) || "[" != ah(c)[0] && "{" != ah(c)[0]) {
            a = c.i;
            var d = a in Yh ? Yh[a] : 0;
            var e = this.i;
            a = new fh;
            e.a.store(a);
            J(a, 31, 148);
            e = new gh;
            J(e, 1, 156);
            d && J(e, 5, d);
            a.b || (a.b = {});
            d = e ? e.qa() : e;
            a.b[63] = e;
            J(a, 63, d);
            a = og.H();
            d = String(c.j);
            e = ah(c);
            a.log("invalidResponse", {
                q: d.substring(0, 500),
                ql: d.length,
                r: e.substring(0, 500),
                rl: e.length
            });
            b && b(Zg(c))
        } else {
            b = ah(c);
            c = {
                "class": "trans.common.TranslationAPI",
                func: "handleSingleResult_",
                url: String(c.j)
            };
            try {
                d = JSON.parse(b)
            } catch (f) {
                throw a =
                    og.H(), c.js = b, c.error = f.message, a.log("jsonParseErr", c), f;
            }
            t(d) && (d = new Eh(d));
            a(d)
        }
    };
    var Zh = {},
        Yh = (Zh[1] = 15, Zh[2] = 16, Zh[3] = 17, Zh[4] = 18, Zh[5] = 19, Zh[6] = 20, Zh[7] = 21, Zh[8] = 22, Zh[9] = 23, Zh);
    var kg = new jg,
        $h = function() {};
    r($h);
    var ai = function(a, b, c, d) {
        if ("" != a) {
            window.selection = a;
            a = new Vh("gtx", "https://translate.googleapis.com");
            var e = chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : "en";
            d = d ? d : "auto";
            var f = lg();
            c = new kd("source=" + c);
            var g = window.selection,
                k = a.a + "/translate_a/single",
                l = new kd,
                C = new kd;
            l.set("client", a.c);
            l.set("sl", d);
            l.set("tl", f);
            l.set("hl", e);
            e = ["t", "bd"];
            l.remove("dt");
            0 < e.length && (l.c = null, l.a.set(md(l, "dt"), Ra(e)), l.b = Aa(l.b) + e.length);
            l.set("dj", "1");
            c && l.h(c);
            C.set("q", g);
            Xh(a, k, l, C, w(a.h,
                a, b, void 0))
        }
    };
    $h.prototype.a = function(a, b, c, d) {
        if (null != d) {
            for (var e = d.src, f = lg(), g = [], k = [], l = d.sentences, C = 0; C < l.length; C++) g.push(l[C].orig), k.push(l[C].trans);
            g = g.join("");
            k = k.join("");
            l = ng("tl")[f].toUpperCase();
            C = ng("sl");
            var Re = [],
                zd;
            for (zd in C) Re.push([zd, C[zd]]);
            yd(c, {
                query: b,
                qb: k,
                Fb: l,
                Cb: e,
                Db: Re,
                ab: d.dict,
                popup: a
            });
            d = Pc("gtx-lang-selector", c);
            jc(d, "change", w(this.b, this, a, b, c), !1, this);
            b = new Hf;
            d = Pc("gtx-source-audio", c);
            be(b, d);
            Lf(b, g, e);
            b = new Hf;
            d = Pc("gtx-target-audio", c);
            be(b, d);
            Lf(b, k, f);
            e = "https://translate.google.com/?source=gtx_m#" +
                e + "/" + f + "/" + encodeURIComponent(window.selection);
            a ? (a = L("more"), a.setAttribute("href", e), c = new T("", void 0, 4), ae(c, L("new-translation")), Bd(L("new-translation"), !0), c = L("translate-page"), Wc(a, Ff("MSG_OPEN_IN_TRANSLATE")), c.className = "gtx-a", c.setAttribute("style", "margin-left: 0px;"), Bd(a, !0)) : (a = document.createElement("a"), a.id = "off", a.className = "gtx-a", a.setAttribute("target", "_blank"), Wc(a, Ff("MSG_FOOTER_OPTIONS").toUpperCase()), a.setAttribute("href", chrome.runtime.getURL("options.html")), c.appendChild(a),
                a = document.createElement("a"), a.id = "more", a.setAttribute("class", "gtx-a"), a.setAttribute("target", "_blank"), Wc(a, Ff("MSG_MORE")), a.setAttribute("href", e), a.setAttribute("style", "color: #A2A2A2; float: right; padding-top: 16px;"), c.appendChild(a))
        } else Wc(L("translation"), Ff("MSG_TRANSLATION_ERROR"))
    };
    $h.prototype.b = function(a, b, c, d) {
        ai(b, w(this.a, this, a, b, c), "ls", d.target.value)
    };
    var bi = function() {};
    y(bi, Q);
    r(bi);
    bi.prototype.na = function(a) {
        var b = a.j.Pa("SPAN", fe(this, a).join(" "));
        ci(this, b, a.m);
        return b
    };
    bi.prototype.R = function(a, b) {
        b = bi.l.R.call(this, a, b);
        A(b);
        var c = vc(b),
            d = !1;
        Oa(c, di(this, null)) ? d = null : Oa(c, di(this, !0)) ? d = !0 : Oa(c, di(this, !1)) && (d = !1);
        a.m = d;
        A(b, "The element cannot be null.");
        Sd(b, "checked", null == d ? "mixed" : 1 == d ? "true" : "false");
        return b
    };
    bi.prototype.Ea = function() {
        return "checkbox"
    };
    var ci = function(a, b, c) {
        if (b) {
            A(b);
            var d = di(a, c);
            A(d);
            A(b);
            wc(b, d) || (Ua(ei, function(a) {
                a = di(this, a);
                A(b);
                a == d ? xc(b, a) : zc(b, a)
            }, a), Sd(b, "checked", null == c ? "mixed" : 1 == c ? "true" : "false"))
        }
    };
    bi.prototype.A = function() {
        return "goog-checkbox"
    };
    var di = function(a, b) {
        a = a.A();
        if (1 == b) return a + "-checked";
        if (0 == b) return a + "-unchecked";
        if (null == b) return a + "-undetermined";
        throw Error("Invalid checkbox state: " + b);
    };
    var fi = function(a, b, c) {
        c = c || bi.H();
        R.call(this, null, c, b);
        this.m = n(a) ? a : !1
    };
    y(fi, R);
    var ei = {
        rb: !0,
        vd: !1,
        wd: null
    };
    h = fi.prototype;
    h.oa = function() {
        return 1 == this.m
    };
    h.Wa = function(a) {
        a != this.m && (this.m = a, ci(this.b, this.o(), this.m))
    };
    h.U = function() {
        fi.l.U.call(this);
        this.Ha && $d(this).listen(this.o(), "click", this.ib);
        Zd(this)
    };
    h.setEnabled = function(a) {
        fi.l.setEnabled.call(this, a);
        if (a = this.o()) a.tabIndex = this.a() ? 0 : -1
    };
    h.ib = function(a) {
        a.i();
        var b = this.m ? "uncheck" : "check";
        this.a() && !a.target.href && O(this, b) && (a.h(), this.Wa(this.m ? !1 : !0), O(this, "change"))
    };
    h.Ga = function(a) {
        32 == a.keyCode && (this.pa(a), this.ib(a));
        return !1
    };
    oe("goog-checkbox", function() {
        return new fi
    });
    var gi = $h.H(),
        hi = chrome.extension.getBackgroundPage();
    document.addEventListener("DOMContentLoaded", function() {
        chrome.tabs.executeScript({
            code: "disposeWindowBubble();"
        });
        ii();
        ji();
        jc(L("new-translation"), "click", ki);
        Wc(L("options-link"), Ff("MSG_FOOTER_OPTIONS"));
        Wc(L("translate-link"), Ff("MSG_FOOTER_TRANSLATE"));
        li();
        chrome.runtime.connect()
    });
    var ii = function() {
            var a = L("search-bar"),
                b = Gf(),
                c = L("text-input");
            ae(b, a);
            jc(b, "action", mi);
            jc(c, "keypress", function(a) {
                13 == a.keyCode && mi()
            });
            ni()
        },
        ji = function() {
            var a = L("translate-page");
            Wc(a, Ff("MSG_TRANSLATE_PAGE"));
            var b;
            chrome.tabs.query({
                active: !0,
                currentWindow: !0
            }, function(a) {
                b = a[0]
            });
            jc(a, "click", function() {
                hi.translate.getTranslateManager().attach(b.id);
                window.close()
            })
        },
        li = function() {
            chrome.tabs.executeScript({
                code: "window.getSelection().toString();",
                allFrames: !0
            }, function(a) {
                for (var b = 0; b <
                    a.length; b++)
                    if ("" != a[b]) {
                        oi(a[b], "popup");
                        break
                    }
            })
        },
        ki = function() {
            ni();
            Bd(L("more"), !1);
            L("text-input").focus()
        },
        ni = function() {
            L("text-input").value = "";
            Bd(L("search-bar"), !0);
            Bd(L("new-translation"), !1);
            Bd(L("more"), !1);
            yd(L("translation"))
        },
        mi = function() {
            oi(L("text-input").value, "input")
        },
        oi = function(a, b) {
            "" != a.trim() && (Bd(L("search-bar"), !1), ai(a, w(gi.a, gi, !0, a, L("translation")), b))
        };
})();