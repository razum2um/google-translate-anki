       //      	function saveNote(from, to) {
			    // 	var body = {"action": "addNote", "version": 5, "params": {"note": {"fields": {"Front": from, "Back": to}, "modelName": "Basic", "deckName": "Default"}}};
			    // 	fetch("http://localhost:8765", { method: "POST", body: JSON(body) }).then(r => r.json()).then(x => console.log("saved", x))
			    // };
			    
/* Copyright 2014 Google */
(function() {
	chrome.runtime.onMessage.addListener(function() {
		var args = Array.prototype.slice.call(arguments);
		console.log('args', args);
	})
    var h, aa = aa || {},
        n = this,
        p = function(a) {
            return void 0 !== a
        },
        q = function(a) {
            return "string" == typeof a
        },
        r = function(a) {
            return "number" == typeof a
        },
        t = function() {},
        ba = function(a) {
            a.fb = void 0;
            a.N = function() {
                return a.fb ? a.fb : a.fb = new a
            }
        },
        u = function(a) {
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
        w = function(a) {
            return "array" == u(a)
        },
        ca = function(a) {
            var b = u(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        x = function(a) {
            return "function" == u(a)
        },
        y = function(a) {
            var b =
                typeof a;
            return "object" == b && null != a || "function" == b
        },
        da = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ea = 0,
        fa = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ha = function(a, b, c) {
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
        z = function(a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ?
                z = fa : z = ha;
            return z.apply(null, arguments)
        },
        A = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        },
        ia = Date.now || function() {
            return +new Date
        },
        B = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.m = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.ce = function(a, c, f) {
                for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
                return b.prototype[c].apply(a, d)
            }
        };
    var C = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, C);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    B(C, Error);
    C.prototype.name = "CustomError";
    var ja;
    var ka = function(a, b) {
            for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
            return d + c.join("%s")
        },
        la = String.prototype.trim ? function(a) {
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
            a = la(String(a)).split(".");
            b = la(String(b)).split(".");
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
        },
        xa = function(a) {
            return String(a).replace(/\-([a-z])/g, function(a, c) {
                return c.toUpperCase()
            })
        },
        ya = function(a) {
            var b = q(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
            return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
                return b + e.toUpperCase()
            })
        };
    var za = function(a, b) {
        b.unshift(a);
        C.call(this, ka.apply(null, b));
        b.shift()
    };
    B(za, C);
    za.prototype.name = "AssertionError";
    var Aa = function(a, b, c, d) {
            var e = "Assertion failed";
            if (c) {
                e += ": " + c;
                var f = d
            } else a && (e += ": " + a, f = b);
            throw new za("" + e, f || []);
        },
        D = function(a, b, c) {
            a || Aa("", null, b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Ba = function(a, b) {
            throw new za("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        },
        Ca = function(a, b, c) {
            r(a) || Aa("Expected number but got %s: %s.", [u(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Da = function(a, b, c) {
            q(a) || Aa("Expected string but got %s: %s.", [u(a), a],
                b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Ea = function(a, b, c) {
            x(a) || Aa("Expected function but got %s: %s.", [u(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Fa = function(a, b, c) {
            y(a) || Aa("Expected object but got %s: %s.", [u(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Ga = function(a, b, c) {
            y(a) && 1 == a.nodeType || Aa("Expected Element but got %s: %s.", [u(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Ia = function(a, b, c, d) {
            a instanceof b || Aa("Expected instanceof %s but got %s.", [Ha(b), Ha(a)],
                c, Array.prototype.slice.call(arguments, 3));
            return a
        },
        Ha = function(a) {
            return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
        };
    var Ja = Array.prototype.indexOf ? function(a, b, c) {
            D(null != a.length);
            return Array.prototype.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (q(a)) return q(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Ka = Array.prototype.forEach ? function(a, b, c) {
            D(null != a.length);
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        La = Array.prototype.filter ? function(a,
            b, c) {
            D(null != a.length);
            return Array.prototype.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, g = q(a) ? a.split("") : a, k = 0; k < d; k++)
                if (k in g) {
                    var l = g[k];
                    b.call(c, l, k, a) && (e[f++] = l)
                }
            return e
        },
        Ma = Array.prototype.map ? function(a, b, c) {
            D(null != a.length);
            return Array.prototype.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = q(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
            return e
        },
        Na = Array.prototype.some ? function(a, b, c) {
            D(null != a.length);
            return Array.prototype.some.call(a,
                b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return !0;
            return !1
        },
        Oa = Array.prototype.every ? function(a, b, c) {
            D(null != a.length);
            return Array.prototype.every.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && !b.call(c, e[f], f, a)) return !1;
            return !0
        },
        Qa = function(a) {
            a: {
                var b = Pa;
                for (var c = a.length, d = q(a) ? a.split("") : a, e = 0; e < c; e++)
                    if (e in d && b.call(void 0, d[e], e, a)) {
                        b = e;
                        break a
                    }
                b = -1
            }
            return 0 > b ? null : q(a) ? a.charAt(b) : a[b]
        },
        Ra = function(a, b) {
            return 0 <= Ja(a, b)
        },
        Sa = function(a, b) {
            b = Ja(a, b);
            var c;
            if (c = 0 <= b) D(null != a.length), Array.prototype.splice.call(a, b, 1);
            return c
        },
        Ta = function(a) {
            return Array.prototype.concat.apply([], arguments)
        },
        Ua = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        };
    var Va;
    a: {
        var Wa = n.navigator;
        if (Wa) {
            var Xa = Wa.userAgent;
            if (Xa) {
                Va = Xa;
                break a
            }
        }
        Va = ""
    }
    var E = function(a) {
        return -1 != Va.indexOf(a)
    };
    var Ya = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        Za = function(a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a)) return !0;
            return !1
        },
        $a = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        },
        ab = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        },
        bb = function(a, b) {
            for (var c in a)
                if (a[c] == b) return !0;
            return !1
        },
        cb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        db = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < cb.length; f++) c = cb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        },
        eb = function(a) {
            var b = arguments.length;
            if (1 == b && w(arguments[0])) return eb.apply(null, arguments[0]);
            if (b % 2) throw Error("Uneven number of arguments");
            for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
            return c
        },
        fb = function(a) {
            var b = arguments.length;
            if (1 == b && w(arguments[0])) return fb.apply(null, arguments[0]);
            for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
            return c
        };
    var gb = function() {
        return (E("Chrome") || E("CriOS")) && !E("Edge")
    };
    var hb = function() {
            return E("iPhone") && !E("iPod") && !E("iPad")
        },
        ib = function() {
            return hb() || E("iPad") || E("iPod")
        };
    var jb = function(a) {
        jb[" "](a);
        return a
    };
    jb[" "] = t;
    var kb = function(a, b) {
            try {
                return jb(a[b]), !0
            } catch (c) {}
            return !1
        },
        mb = function(a, b) {
            var c = lb;
            return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
        };
    var nb = E("Opera"),
        F = E("Trident") || E("MSIE"),
        ob = E("Edge"),
        pb = ob || F,
        G = E("Gecko") && !(-1 != Va.toLowerCase().indexOf("webkit") && !E("Edge")) && !(E("Trident") || E("MSIE")) && !E("Edge"),
        H = -1 != Va.toLowerCase().indexOf("webkit") && !E("Edge"),
        qb = H && E("Mobile"),
        rb = E("Macintosh"),
        sb = E("Windows"),
        tb = E("Android"),
        ub = hb(),
        vb = E("iPad"),
        wb = E("iPod"),
        xb = ib(),
        yb = function() {
            var a = n.document;
            return a ? a.documentMode : void 0
        },
        zb;
    a: {
        var Ab = "",
            Bb = function() {
                var a = Va;
                if (G) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (ob) return /Edge\/([\d\.]+)/.exec(a);
                if (F) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (H) return /WebKit\/(\S+)/.exec(a);
                if (nb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Bb && (Ab = Bb ? Bb[1] : "");
        if (F) {
            var Cb = yb();
            if (null != Cb && Cb > parseFloat(Ab)) {
                zb = String(Cb);
                break a
            }
        }
        zb = Ab
    }
    var Db = zb,
        lb = {},
        I = function(a) {
            return mb(a, function() {
                return 0 <= wa(Db, a)
            })
        },
        Fb = function(a) {
            return Number(Eb) >= a
        },
        Gb;
    var Hb = n.document;
    Gb = Hb && F ? yb() || ("CSS1Compat" == Hb.compatMode ? parseInt(Db, 10) : 5) : void 0;
    var Eb = Gb;
    var Ib = E("Firefox"),
        Jb = hb() || E("iPod"),
        Kb = E("iPad"),
        Lb = E("Android") && !(gb() || E("Firefox") || E("Opera") || E("Silk")),
        Mb = gb(),
        Nb = E("Safari") && !(gb() || E("Coast") || E("Opera") || E("Edge") || E("Silk") || E("Android")) && !ib();
    var Ob = function() {},
        Pb = "function" == typeof Uint8Array,
        Sb = function(a, b, c) {
            a.b = null;
            b || (b = []);
            a.o = void 0;
            a.c = -1;
            a.a = b;
            a: {
                if (a.a.length) {
                    b = a.a.length - 1;
                    var d = a.a[b];
                    if (d && "object" == typeof d && !w(d) && !(Pb && d instanceof Uint8Array)) {
                        a.i = b - a.c;
                        a.h = d;
                        break a
                    }
                }
                a.i = Number.MAX_VALUE
            }
            a.j = {};
            if (c)
                for (b = 0; b < c.length; b++) d = c[b], d < a.i ? (d += a.c, a.a[d] = a.a[d] || Qb) : (Rb(a), a.h[d] = a.h[d] || Qb)
        },
        Qb = Object.freeze ? Object.freeze([]) : [],
        Rb = function(a) {
            var b = a.i + a.c;
            a.a[b] || (a.h = a.a[b] = {})
        },
        Tb = function(a, b, c) {
            b < a.i ? a.a[b + a.c] =
                c : (Rb(a), a.h[b] = c)
        },
        Ub = function(a) {
            if (a.b)
                for (var b in a.b) {
                    var c = a.b[b];
                    if (w(c))
                        for (var d = 0; d < c.length; d++) c[d] && c[d].wa();
                    else c && c.wa()
                }
        };
    Ob.prototype.wa = function() {
        Ub(this);
        return this.a
    };
    Ob.prototype.toString = function() {
        Ub(this);
        return this.a.toString()
    };
    var Vb = function(a) {
            return function() {
                return a
            }
        },
        Wb = function(a, b) {
            for (var c = 0; c < b.length - 2; c += 3) {
                var d = b.charAt(c + 2);
                d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
                d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
                a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
            }
            return a
        },
        Xb = null,
        Yb = function(a) {
            if (null !== Xb) var b = Xb;
            else {
                b = Vb(String.fromCharCode(84));
                var c = Vb(String.fromCharCode(75));
                b = [b(), b()];
                b[1] = c();
                b = (Xb = window[b.join(c())] || "") || ""
            }
            var d = Vb(String.fromCharCode(116));
            c = Vb(String.fromCharCode(107));
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
            for (f = 0; f < e.length; f++) a += e[f], a = Wb(a, "+-a^+6");
            a = Wb(a, "+-3^+b+-f");
            a ^= Number(d[1]) || 0;
            0 > a && (a = (a & 2147483647) + 2147483648);
            a %= 1E6;
            return c + (a.toString() + "." +
                (a ^ b))
        };
    var Zb = Object.freeze || function(a) {
        return a
    };
    var $b = !F || Fb(9),
        ac = !F || Fb(9),
        bc = F && !I("9");
    !H || I("528");
    G && I("1.9b") || F && I("8") || nb && I("9.5") || H && I("528");
    G && !I("8") || F && I("9");
    var cc = function() {
        if (!n.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        n.addEventListener("test", t, b);
        n.removeEventListener("test", t, b);
        return a
    }();
    var dc = function() {
        this.C = this.C;
        this.G = this.G
    };
    dc.prototype.C = !1;
    dc.prototype.X = function() {
        this.C || (this.C = !0, this.s())
    };
    var ec = function(a, b) {
        a.C ? p(void 0) ? b.call(void 0) : b() : (a.G || (a.G = []), a.G.push(p(void 0) ? z(b, void 0) : b))
    };
    dc.prototype.s = function() {
        if (this.G)
            for (; this.G.length;) this.G.shift()()
    };
    var fc = function(a) {
        a && "function" == typeof a.X && a.X()
    };
    var gc = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.pa = !1;
        this.Mb = !0
    };
    gc.prototype.stopPropagation = function() {
        this.pa = !0
    };
    gc.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.Mb = !1
    };
    var ic = function(a, b) {
        gc.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.kb = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.ea = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            (b = a.relatedTarget) ?
            G && (kb(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            null === d ? (this.offsetX = H || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = H || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX ||
                0, this.screenY = d.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.key = a.key || "";
            this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.kb = rb ? a.metaKey : a.ctrlKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = q(a.pointerType) ? a.pointerType : hc[a.pointerType] || "";
            this.state = a.state;
            this.ea = a;
            a.defaultPrevented && this.preventDefault()
        }
    };
    B(ic, gc);
    var jc = Zb([1, 4, 2]),
        hc = Zb({
            2: "touch",
            3: "pen",
            4: "mouse"
        }),
        kc = function(a) {
            return ($b ? 0 == a.ea.button : "click" == a.type ? !0 : !!(a.ea.button & jc[0])) && !(H && rb && a.ctrlKey)
        };
    ic.prototype.stopPropagation = function() {
        ic.m.stopPropagation.call(this);
        this.ea.stopPropagation ? this.ea.stopPropagation() : this.ea.cancelBubble = !0
    };
    ic.prototype.preventDefault = function() {
        ic.m.preventDefault.call(this);
        var a = this.ea;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, bc) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var lc = "closure_listenable_" + (1E6 * Math.random() | 0),
        mc = function(a) {
            return !(!a || !a[lc])
        },
        nc = 0;
    var oc = function(a, b, c, d, e) {
            this.listener = a;
            this.proxy = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Na = e;
            this.key = ++nc;
            this.removed = this.Ka = !1
        },
        pc = function(a) {
            a.removed = !0;
            a.listener = null;
            a.proxy = null;
            a.src = null;
            a.Na = null
        };
    var qc = function(a) {
        this.src = a;
        this.a = {};
        this.b = 0
    };
    qc.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.a[f];
        a || (a = this.a[f] = [], this.b++);
        var g = rc(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Ka = !1)) : (b = new oc(b, this.src, f, !!d, e), b.Ka = c, a.push(b));
        return b
    };
    qc.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.a)) return !1;
        var e = this.a[a];
        b = rc(e, b, c, d);
        return -1 < b ? (pc(e[b]), D(null != e.length), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1
    };
    var sc = function(a, b) {
        var c = b.type;
        if (!(c in a.a)) return !1;
        var d = Sa(a.a[c], b);
        d && (pc(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
        return d
    };
    qc.prototype.removeAll = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.a)
            if (!a || c == a) {
                for (var d = this.a[c], e = 0; e < d.length; e++) ++b, pc(d[e]);
                delete this.a[c];
                this.b--
            }
        return b
    };
    qc.prototype.La = function(a, b) {
        a = this.a[a.toString()];
        var c = [];
        if (a)
            for (var d = 0; d < a.length; ++d) {
                var e = a[d];
                e.capture == b && c.push(e)
            }
        return c
    };
    qc.prototype.Ca = function(a, b, c, d) {
        a = this.a[a.toString()];
        var e = -1;
        a && (e = rc(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    qc.prototype.hasListener = function(a, b) {
        var c = p(a),
            d = c ? a.toString() : "",
            e = p(b);
        return Za(this.a, function(a) {
            for (var f = 0; f < a.length; ++f)
                if (!(c && a[f].type != d || e && a[f].capture != b)) return !0;
            return !1
        })
    };
    var rc = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.removed && f.listener == b && f.capture == !!c && f.Na == d) return e
        }
        return -1
    };
    var tc = "closure_lm_" + (1E6 * Math.random() | 0),
        uc = {},
        vc = 0,
        xc = function(a, b, c, d, e) {
            if (d && d.once) return wc(a, b, c, d, e);
            if (w(b)) {
                for (var f = 0; f < b.length; f++) xc(a, b[f], c, d, e);
                return null
            }
            c = yc(c);
            return mc(a) ? a.listen(b, c, y(d) ? !!d.capture : !!d, e) : zc(a, b, c, !1, d, e)
        },
        zc = function(a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var g = y(e) ? !!e.capture : !!e,
                k = Ac(a);
            k || (a[tc] = k = new qc(a));
            c = k.add(b, c, d, g, f);
            if (c.proxy) return c;
            d = Bc();
            c.proxy = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) cc || (e = g), void 0 === e && (e = !1),
                a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(Cc(b.toString()), d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            vc++;
            return c
        },
        Bc = function() {
            var a = Dc,
                b = ac ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        wc = function(a, b, c, d, e) {
            if (w(b)) {
                for (var f = 0; f < b.length; f++) wc(a, b[f], c, d, e);
                return null
            }
            c = yc(c);
            return mc(a) ? a.ib(b, c, y(d) ? !!d.capture : !!d, e) : zc(a, b, c, !0, d, e)
        },
        Ec = function(a, b, c, d, e) {
            if (w(b))
                for (var f =
                        0; f < b.length; f++) Ec(a, b[f], c, d, e);
            else d = y(d) ? !!d.capture : !!d, c = yc(c), mc(a) ? a.S(b, c, d, e) : a && (a = Ac(a)) && (b = a.Ca(b, c, d, e)) && Fc(b)
        },
        Fc = function(a) {
            if (r(a) || !a || a.removed) return !1;
            var b = a.src;
            if (mc(b)) return sc(b.I, a);
            var c = a.type,
                d = a.proxy;
            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(Cc(c), d);
            vc--;
            (c = Ac(b)) ? (sc(c, a), 0 == c.b && (c.src = null, b[tc] = null)) : pc(a);
            return !0
        },
        Gc = function(a) {
            if (a)
                if (mc(a)) a.I && a.I.removeAll(void 0);
                else if (a = Ac(a)) {
                var b = 0,
                    c;
                for (c in a.a)
                    for (var d =
                            a.a[c].concat(), e = 0; e < d.length; ++e) Fc(d[e]) && ++b
            }
        },
        Cc = function(a) {
            return a in uc ? uc[a] : uc[a] = "on" + a
        },
        Ic = function(a, b, c, d) {
            var e = !0;
            if (a = Ac(a))
                if (b = a.a[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.capture == c && !f.removed && (f = Hc(f, d), e = e && !1 !== f)
                    }
            return e
        },
        Hc = function(a, b) {
            var c = a.listener,
                d = a.Na || a.src;
            a.Ka && Fc(a);
            return c.call(d, b)
        },
        Dc = function(a, b) {
            if (a.removed) return !0;
            if (!ac) {
                if (!b) a: {
                    b = ["window", "event"];
                    for (var c = n, d = 0; d < b.length; d++)
                        if (c = c[b[d]], null == c) {
                            b = null;
                            break a
                        }
                    b =
                    c
                }
                d = b;
                b = new ic(d, this);
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
                        if (e || void 0 == d.returnValue) d.returnValue = !0
                    }
                    d = [];
                    for (e = b.currentTarget; e; e = e.parentNode) d.push(e);a = a.type;
                    for (e = d.length - 1; !b.pa && 0 <= e; e--) {
                        b.currentTarget = d[e];
                        var f = Ic(d[e], a, !0, b);
                        c = c && f
                    }
                    for (e = 0; !b.pa && e < d.length; e++) b.currentTarget = d[e],
                    f = Ic(d[e], a, !1, b),
                    c = c && f
                }
                return c
            }
            return Hc(a, new ic(b, this))
        },
        Ac = function(a) {
            a = a[tc];
            return a instanceof qc ? a : null
        },
        Jc = "__closure_events_fn_" +
        (1E9 * Math.random() >>> 0),
        yc = function(a) {
            D(a, "Listener can not be null.");
            if (x(a)) return a;
            D(a.handleEvent, "An object listener must have handleEvent method.");
            a[Jc] || (a[Jc] = function(b) {
                return a.handleEvent(b)
            });
            return a[Jc]
        };
    var Kc = function(a) {
            if (a.classList) return a.classList;
            a = a.className;
            return q(a) && a.match(/\S+/g) || []
        },
        Lc = function(a, b) {
            return a.classList ? a.classList.contains(b) : Ra(Kc(a), b)
        },
        Mc = function(a, b) {
            a.classList ? a.classList.add(b) : Lc(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
        },
        Nc = function(a, b) {
            if (a.classList) Ka(b, function(b) {
                Mc(a, b)
            });
            else {
                var c = {};
                Ka(Kc(a), function(a) {
                    c[a] = !0
                });
                Ka(b, function(a) {
                    c[a] = !0
                });
                a.className = "";
                for (var d in c) a.className += 0 < a.className.length ? " " + d : d
            }
        },
        Oc = function(a, b) {
            a.classList ?
                a.classList.remove(b) : Lc(a, b) && (a.className = La(Kc(a), function(a) {
                    return a != b
                }).join(" "))
        },
        Pc = function(a, b) {
            a.classList ? Ka(b, function(b) {
                Oc(a, b)
            }) : a.className = La(Kc(a), function(a) {
                return !Ra(b, a)
            }).join(" ")
        };
    var Qc = !F || Fb(9),
        Rc = !G && !F || F && Fb(9) || G && I("1.9.1"),
        Sc = F && !I("9");
    var Tc = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var Vc = function() {
        this.a = "";
        this.b = Uc
    };
    Vc.prototype.ka = !0;
    Vc.prototype.Y = function() {
        return this.a
    };
    Vc.prototype.toString = function() {
        return "Const{" + this.a + "}"
    };
    var Wc = function(a) {
            if (a instanceof Vc && a.constructor === Vc && a.b === Uc) return a.a;
            Ba("expected object of type Const, got '" + a + "'");
            return "type_error:Const"
        },
        Uc = {},
        Xc = function(a) {
            var b = new Vc;
            b.a = a;
            return b
        };
    Xc("");
    var Zc = function() {
        this.a = "";
        this.b = Yc
    };
    h = Zc.prototype;
    h.ka = !0;
    h.Y = function() {
        return this.a
    };
    h.eb = !0;
    h.ua = function() {
        return 1
    };
    h.toString = function() {
        return "TrustedResourceUrl{" + this.a + "}"
    };
    var $c = function(a) {
            if (a instanceof Zc && a.constructor === Zc && a.b === Yc) return a.a;
            Ba("expected object of type TrustedResourceUrl, got '" + a + "' of type " + u(a));
            return "type_error:TrustedResourceUrl"
        },
        Yc = {},
        ad = function(a) {
            var b = new Zc;
            b.a = a;
            return b
        };
    var cd = function() {
        this.a = "";
        this.b = bd
    };
    h = cd.prototype;
    h.ka = !0;
    h.Y = function() {
        return this.a
    };
    h.eb = !0;
    h.ua = function() {
        return 1
    };
    h.toString = function() {
        return "SafeUrl{" + this.a + "}"
    };
    var dd = function(a) {
            if (a instanceof cd && a.constructor === cd && a.b === bd) return a.a;
            Ba("expected object of type SafeUrl, got '" + a + "' of type " + u(a));
            return "type_error:SafeUrl"
        },
        ed = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        gd = function(a) {
            if (a instanceof cd) return a;
            a = a.ka ? a.Y() : String(a);
            ed.test(a) || (a = "about:invalid#zClosurez");
            return fd(a)
        },
        bd = {},
        fd = function(a) {
            var b = new cd;
            b.a = a;
            return b
        };
    fd("about:blank");
    var id = function() {
        this.a = "";
        this.b = hd
    };
    id.prototype.ka = !0;
    var hd = {};
    id.prototype.Y = function() {
        return this.a
    };
    id.prototype.toString = function() {
        return "SafeStyle{" + this.a + "}"
    };
    var jd = function(a) {
            var b = new id;
            b.a = a;
            return b
        },
        kd = jd(""),
        pd = function(a) {
            if (a instanceof cd) return 'url("' + dd(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
            if (a instanceof Vc) a = Wc(a);
            else {
                a = String(a);
                var b = a.replace(ld, "$1").replace(md, "url");
                if (nd.test(b)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b && c ? a = od(a) : (Ba("String value requires balanced quotes, got: " + a), a = "zClosurez")
                } else Ba("String value allows only [-,.\"'%_!# a-zA-Z0-9] and simple functions, got: " +
                    a), a = "zClosurez"
            }
            D(!/[{;}]/.test(a), "Value does not allow [{;}].");
            return a
        },
        nd = /^[-,."'%_!# a-zA-Z0-9]+$/,
        md = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
        ld = /\b(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-0-9a-z.%, ]+\)/g,
        od = function(a) {
            return a.replace(md, function(a, c, d, e) {
                var b = "";
                d = d.replace(/^(['"])(.*)\1$/, function(a, c, d) {
                    b = c;
                    return d
                });
                a = gd(d).Y();
                return c + b + a + b + e
            })
        };
    var rd = function() {
        this.a = "";
        this.c = qd;
        this.b = null
    };
    h = rd.prototype;
    h.eb = !0;
    h.ua = function() {
        return this.b
    };
    h.ka = !0;
    h.Y = function() {
        return this.a
    };
    h.toString = function() {
        return "SafeHtml{" + this.a + "}"
    };
    var sd = function(a) {
            if (a instanceof rd && a.constructor === rd && a.c === qd) return a.a;
            Ba("expected object of type SafeHtml, got '" + a + "' of type " + u(a));
            return "type_error:SafeHtml"
        },
        ud = function(a) {
            if (a instanceof rd) return a;
            var b = null;
            a.eb && (b = a.ua());
            a = ua(a.ka ? a.Y() : String(a));
            return td(a, b)
        },
        vd = /^[a-zA-Z0-9-]+$/,
        wd = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        xd = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        yd = function(a) {
            var b = 0,
                c = "",
                d = function(a) {
                    w(a) ? Ka(a, d) : (a = ud(a), c += sd(a), a = a.ua(), 0 == b ? b = a : 0 != a && b != a && (b = null))
                };
            Ka(arguments, d);
            return td(c, b)
        },
        qd = {},
        td = function(a, b) {
            var c = new rd;
            c.a = a;
            c.b = b;
            return c
        };
    td("<!DOCTYPE html>", 0);
    var zd = td("", 0);
    td("<br>", 0);
    var Ad = {
            MATH: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        Bd = function(a, b) {
            if (Ad[a.tagName.toUpperCase()]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a.tagName + ".");
            a.innerHTML = sd(b)
        },
        Cd = function(a, b) {
            var c = (c = a && a.ownerDocument) && (c.defaultView || c.parentWindow) || n;
            if ("undefined" != typeof c.HTMLScriptElement && "undefined" != typeof c.Location && "undefined" != typeof c.Element) {
                c = a && (a instanceof c.HTMLScriptElement || !(a instanceof c.Location || a instanceof c.Element));
                var d = y(a) ?
                    a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : void 0 === a ? "undefined" : null === a ? "null" : typeof a;
                D(c, "Argument is not a %s (or a non-Element, non-Location mock); got: %s", "HTMLScriptElement", d)
            }
            a.src = $c(b)
        };
    var L = function(a, b) {
        this.x = p(a) ? a : 0;
        this.y = p(b) ? b : 0
    };
    L.prototype.toString = function() {
        return "(" + this.x + ", " + this.y + ")"
    };
    var Dd = function(a, b) {
        return new L(a.x - b.x, a.y - b.y)
    };
    L.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    L.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    L.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    L.prototype.translate = function(a, b) {
        a instanceof L ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), r(b) && (this.y += b));
        return this
    };
    var Ed = function(a, b) {
        this.width = a;
        this.height = b
    };
    h = Ed.prototype;
    h.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    };
    h.aspectRatio = function() {
        return this.width / this.height
    };
    h.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    h.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    h.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Hd = function(a) {
            return a ? new Fd(Gd(a)) : ja || (ja = new Fd)
        },
        Id = function(a, b) {
            return q(b) ? a.getElementById(b) : b
        },
        Jd = function(a, b) {
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
                            "function" == typeof g.split && Ra(g.split(/\s+/), a) && (f[d++] = b)
                        }
                        f.length = d;
                        a = f
                    } else a = e;
                    a = a[0] || null
                }
            }
            return a || null
        },
        Ld = function(a, b) {
            Ya(b, function(b, d) {
                b && b.ka && (b = b.Y());
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Kd.hasOwnProperty(d) ? a.setAttribute(Kd[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        },
        Kd = {
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
        Od = function(a) {
            var b = Md(a);
            a = Nd(a);
            return F && I("10") && a.pageYOffset != b.scrollTop ? new L(b.scrollLeft, b.scrollTop) : new L(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        },
        Md = function(a) {
            return a.scrollingElement ? a.scrollingElement : !H && Pd(a) ? a.documentElement : a.body || a.documentElement
        },
        Nd = function(a) {
            return a.parentWindow || a.defaultView
        },
        Rd = function(a, b, c, d) {
            function e(c) {
                c && b.appendChild(q(c) ? a.createTextNode(c) : c)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                !ca(f) || y(f) && 0 < f.nodeType ? e(f) : Ka(Qd(f) ? Ua(f) : f, e)
            }
        },
        Sd = function(a, b) {
            return a.createElement(String(b))
        },
        Pd = function(a) {
            return "CSS1Compat" == a.compatMode
        },
        Td = function(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        },
        Ud = function(a, b) {
            if (!a || !b) return !1;
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) &
                16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        },
        Gd = function(a) {
            D(a, "Node cannot be null or undefined.");
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        Vd = function(a, b) {
            D(null != a, "goog.dom.setTextContent expects a non-null value for node");
            if ("textContent" in a) a.textContent = b;
            else if (3 == a.nodeType) a.data = String(b);
            else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
                a.firstChild.data = String(b)
            } else {
                for (var c; c = a.firstChild;) a.removeChild(c);
                c = Gd(a);
                a.appendChild(c.createTextNode(String(b)))
            }
        },
        Wd = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        Xd = {
            IMG: " ",
            BR: "\n"
        },
        Yd = function(a) {
            if (F && !I("9")) {
                var b = a.getAttributeNode("tabindex");
                b = null != b && b.specified
            } else b = a.hasAttribute("tabindex");
            b && (a = a.tabIndex, b = r(a) && 0 <= a && 32768 > a);
            return b
        },
        Zd = function(a, b) {
            b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
        },
        ae = function(a) {
            var b = [];
            $d(a, b, !1);
            return b.join("")
        },
        $d = function(a, b, c) {
            if (!(a.nodeName in Wd))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,
                    "")) : b.push(a.nodeValue);
                else if (a.nodeName in Xd) b.push(Xd[a.nodeName]);
            else
                for (a = a.firstChild; a;) $d(a, b, c), a = a.nextSibling
        },
        Qd = function(a) {
            if (a && "number" == typeof a.length) {
                if (y(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (x(a)) return "function" == typeof a.item
            }
            return !1
        },
        Fd = function(a) {
            this.a = a || n.document || document
        };
    h = Fd.prototype;
    h.l = function(a) {
        return Id(this.a, a)
    };
    h.setProperties = Ld;
    h.vb = function(a, b, c) {
        var d = this.a,
            e = arguments,
            f = String(e[0]),
            g = e[1];
        if (!Qc && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', ua(g.name), '"');
            if (g.type) {
                f.push(' type="', ua(g.type), '"');
                var k = {};
                db(k, g);
                delete k.type;
                g = k
            }
            f.push(">");
            f = f.join("")
        }
        f = d.createElement(f);
        g && (q(g) ? f.className = g : w(g) ? f.className = g.join(" ") : Ld(f, g));
        2 < e.length && Rd(d, f, e, 2);
        return f
    };
    h.Ub = function(a, b) {
        Rd(Gd(a), a, arguments, 1)
    };
    h.getChildren = function(a) {
        return Rc && void 0 != a.children ? a.children : La(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    };
    h.contains = Ud;
    var be = "StopIteration" in n ? n.StopIteration : {
            message: "StopIteration",
            stack: ""
        },
        ce = function() {};
    ce.prototype.next = function() {
        throw be;
    };
    ce.prototype.i = function() {
        return this
    };
    var de = function(a, b) {
        this.b = {};
        this.a = [];
        this.h = this.c = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            a instanceof de ? (c = a.fa(), d = a.O()) : (c = ab(a), d = $a(a));
            for (var e = 0; e < c.length; e++) this.set(c[e], d[e])
        }
    };
    de.prototype.O = function() {
        ee(this);
        for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
        return a
    };
    de.prototype.fa = function() {
        ee(this);
        return this.a.concat()
    };
    de.prototype.clear = function() {
        this.b = {};
        this.h = this.c = this.a.length = 0
    };
    de.prototype.remove = function(a) {
        return ge(this.b, a) ? (delete this.b[a], this.c--, this.h++, this.a.length > 2 * this.c && ee(this), !0) : !1
    };
    var ee = function(a) {
        if (a.c != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                ge(a.b, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.c != a.a.length) {
            var e = {};
            for (c = b = 0; b < a.a.length;) d = a.a[b], ge(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            a.a.length = c
        }
    };
    de.prototype.get = function(a, b) {
        return ge(this.b, a) ? this.b[a] : b
    };
    de.prototype.set = function(a, b) {
        ge(this.b, a) || (this.c++, this.a.push(a), this.h++);
        this.b[a] = b
    };
    de.prototype.forEach = function(a, b) {
        for (var c = this.fa(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    de.prototype.i = function(a) {
        ee(this);
        var b = 0,
            c = this.h,
            d = this,
            e = new ce;
        e.next = function() {
            if (c != d.h) throw Error("The map has changed since the iterator was created");
            if (b >= d.a.length) throw be;
            var e = d.a[b++];
            return a ? e : d.b[e]
        };
        return e
    };
    var ge = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var he = function(a) {
            if (a.O && "function" == typeof a.O) return a.O();
            if (q(a)) return a.split("");
            if (ca(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return $a(a)
        },
        ie = function(a, b, c) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
            else if (ca(a) || q(a)) Ka(a, b, c);
            else {
                if (a.fa && "function" == typeof a.fa) var d = a.fa();
                else if (a.O && "function" == typeof a.O) d = void 0;
                else if (ca(a) || q(a)) {
                    d = [];
                    for (var e = a.length, f = 0; f < e; f++) d.push(f)
                } else d = ab(a);
                e = he(a);
                f = e.length;
                for (var g = 0; g < f; g++) b.call(c,
                    e[g], d && d[g], a)
            }
        };
    var je = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        ke = function(a, b) {
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
    var le = function(a, b, c) {
            this.b = this.a = null;
            this.c = a || null;
            this.i = !!c
        },
        me = function(a) {
            a.a || (a.a = new de, a.b = 0, a.c && ke(a.c, function(b, c) {
                a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
            }))
        };
    le.prototype.add = function(a, b) {
        me(this);
        this.c = null;
        a = ne(this, a);
        var c = this.a.get(a);
        c || this.a.set(a, c = []);
        c.push(b);
        this.b = Ca(this.b) + 1;
        return this
    };
    le.prototype.remove = function(a) {
        me(this);
        a = ne(this, a);
        return ge(this.a.b, a) ? (this.c = null, this.b = Ca(this.b) - this.a.get(a).length, this.a.remove(a)) : !1
    };
    le.prototype.clear = function() {
        this.a = this.c = null;
        this.b = 0
    };
    var oe = function(a, b) {
        me(a);
        b = ne(a, b);
        return ge(a.a.b, b)
    };
    h = le.prototype;
    h.forEach = function(a, b) {
        me(this);
        this.a.forEach(function(c, d) {
            Ka(c, function(c) {
                a.call(b, c, d, this)
            }, this)
        }, this)
    };
    h.fa = function() {
        me(this);
        for (var a = this.a.O(), b = this.a.fa(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    h.O = function(a) {
        me(this);
        var b = [];
        if (q(a)) oe(this, a) && (b = Ta(b, this.a.get(ne(this, a))));
        else {
            a = this.a.O();
            for (var c = 0; c < a.length; c++) b = Ta(b, a[c])
        }
        return b
    };
    h.set = function(a, b) {
        me(this);
        this.c = null;
        a = ne(this, a);
        oe(this, a) && (this.b = Ca(this.b) - this.a.get(a).length);
        this.a.set(a, [b]);
        this.b = Ca(this.b) + 1;
        return this
    };
    h.get = function(a, b) {
        a = a ? this.O(a) : [];
        return 0 < a.length ? String(a[0]) : b
    };
    h.toString = function() {
        if (this.c) return this.c;
        if (!this.a) return "";
        for (var a = [], b = this.a.fa(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.O(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.c = a.join("&")
    };
    var ne = function(a, b) {
        b = String(b);
        a.i && (b = b.toLowerCase());
        return b
    };
    le.prototype.h = function(a) {
        for (var b = 0; b < arguments.length; b++) ie(arguments[b], function(a, b) {
            this.add(b, a)
        }, this)
    };
    var pe = {
            fe: !0
        },
        qe = {
            ee: !0
        },
        re = {
            ge: !0
        },
        se = function() {
            throw Error("Do not instantiate directly");
        };
    se.prototype.sa = null;
    se.prototype.ha = function() {
        return this.content
    };
    se.prototype.toString = function() {
        return this.content
    };
    var te = function(a, b) {
        this.content = String(a);
        this.sa = null != b ? b : null
    };
    B(te, se);
    te.prototype.aa = re;
    var ue = function() {
        se.call(this)
    };
    B(ue, se);
    ue.prototype.aa = pe;
    var ve = function() {
        se.call(this)
    };
    B(ve, se);
    ve.prototype.aa = qe;
    ve.prototype.sa = 1;
    var ze = function(a, b, c) {
            D(a, "Soy template may not be null.");
            a = a(b || we, void 0, void 0);
            c = Sd((c || Hd()).a, "DIV");
            a = xe(a);
            b = a.match(ye);
            D(!b, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", b && b[0], a);
            c.innerHTML = a;
            1 == c.childNodes.length && (a = c.firstChild, 1 == a.nodeType && (c = a));
            return c
        },
        xe = function(a) {
            if (!y(a)) return String(a);
            if (a instanceof se) {
                if (a.aa === pe) return Da(a.ha());
                if (a.aa ===
                    re) return ua(a.ha())
            }
            Ba("Soy template output is unsafe for use as HTML: " + a);
            return "zSoyz"
        },
        ye = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,
        we = {};
    var Ae = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    h = Ae.prototype;
    h.toString = function() {
        return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
    };
    h.contains = function(a) {
        return this && a ? a instanceof Ae ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    h.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    h.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    h.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    h.translate = function(a, b) {
        a instanceof L ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (Ca(a), this.left += a, this.right += a, r(b) && (this.top += b, this.bottom += b));
        return this
    };
    var Be = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    h = Be.prototype;
    h.toString = function() {
        return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
    };
    h.contains = function(a) {
        return a instanceof L ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    h.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    h.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    h.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    h.translate = function(a, b) {
        a instanceof L ? (this.left += a.x, this.top += a.y) : (this.left += Ca(a), r(b) && (this.top += b));
        return this
    };
    var De = function(a, b, c) {
            if (q(b))(b = Ce(a, b)) && (a.style[b] = c);
            else
                for (var d in b) {
                    c = a;
                    var e = b[d],
                        f = Ce(c, d);
                    f && (c.style[f] = e)
                }
        },
        Ee = {},
        Ce = function(a, b) {
            var c = Ee[b];
            if (!c) {
                var d = xa(b);
                c = d;
                void 0 === a.style[d] && (d = (H ? "Webkit" : G ? "Moz" : F ? "ms" : nb ? "O" : null) + ya(d), void 0 !== a.style[d] && (c = d));
                Ee[b] = c
            }
            return c
        },
        Fe = function(a, b) {
            var c = Gd(a);
            return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
        },
        Ge = function(a, b) {
            return Fe(a, b) || (a.currentStyle ?
                a.currentStyle[b] : null) || a.style && a.style[b]
        },
        Ie = function(a, b, c) {
            if (b instanceof L) {
                var d = b.x;
                b = b.y
            } else d = b, b = c;
            a.style.left = He(d);
            a.style.top = He(b)
        },
        Je = function(a) {
            try {
                var b = a.getBoundingClientRect()
            } catch (c) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
            F && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
            return b
        },
        Ke = function(a) {
            if (F && !Fb(8)) return D(a && "offsetParent" in a), a.offsetParent;
            var b = Gd(a),
                c = Ge(a,
                    "position"),
                d = "fixed" == c || "absolute" == c;
            for (a = a.parentNode; a && a != b; a = a.parentNode)
                if (11 == a.nodeType && a.host && (a = a.host), c = Ge(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
            return null
        },
        Me = function(a) {
            for (var b = new Ae(0, Infinity, Infinity, 0), c = Hd(a), d = c.a.body, e = c.a.documentElement, f = Md(c.a); a = Ke(a);)
                if (!(F && 0 == a.clientWidth || H && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" !=
                    Ge(a, "overflow")) {
                    var g = Le(a),
                        k = new L(a.clientLeft, a.clientTop);
                    g.x += k.x;
                    g.y += k.y;
                    b.top = Math.max(b.top, g.y);
                    b.right = Math.min(b.right, g.x + a.clientWidth);
                    b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
                    b.left = Math.max(b.left, g.x)
                }
            d = f.scrollLeft;
            f = f.scrollTop;
            b.left = Math.max(b.left, d);
            b.top = Math.max(b.top, f);
            c = (Nd(c.a) || window).document;
            c = Pd(c) ? c.documentElement : c.body;
            c = new Ed(c.clientWidth, c.clientHeight);
            b.right = Math.min(b.right, d + c.width);
            b.bottom = Math.min(b.bottom, f + c.height);
            return 0 <= b.top && 0 <=
                b.left && b.bottom > b.top && b.right > b.left ? b : null
        },
        Le = function(a) {
            var b = Gd(a);
            Fa(a, "Parameter is required");
            var c = new L(0, 0);
            var d = b ? Gd(b) : document;
            d = !F || Fb(9) || Pd(Hd(d).a) ? d.documentElement : d.body;
            if (a == d) return c;
            a = Je(a);
            b = Od(Hd(b).a);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        },
        Oe = function(a, b) {
            a = Ne(a);
            b = Ne(b);
            return new L(a.x - b.x, a.y - b.y)
        },
        Pe = function(a) {
            a = Je(a);
            return new L(a.left, a.top)
        },
        Ne = function(a) {
            D(a);
            if (1 == a.nodeType) return Pe(a);
            a = a.changedTouches ? a.changedTouches[0] : a;
            return new L(a.clientX,
                a.clientY)
        },
        He = function(a) {
            "number" == typeof a && (a += "px");
            return a
        },
        Re = function(a) {
            var b = Qe;
            if ("none" != Ge(a, "display")) return b(a);
            var c = a.style,
                d = c.display,
                e = c.visibility,
                f = c.position;
            c.visibility = "hidden";
            c.position = "absolute";
            c.display = "inline";
            a = b(a);
            c.display = d;
            c.position = f;
            c.visibility = e;
            return a
        },
        Qe = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = H && !b && !c;
            return p(b) && !d || !a.getBoundingClientRect ? new Ed(b, c) : (a = Je(a), new Ed(a.right - a.left, a.bottom - a.top))
        },
        Se = function(a) {
            var b = Le(a);
            a = Re(a);
            return new Be(b.x, b.y, a.width, a.height)
        },
        Te = function(a, b) {
            a.style.display = b ? "" : "none"
        },
        Ue = function(a) {
            return "rtl" == Ge(a, "direction")
        },
        Ve = G ? "MozUserSelect" : H || ob ? "WebkitUserSelect" : null,
        We = function(a, b) {
            if (/^\d+px?$/.test(b)) return parseInt(b, 10);
            var c = a.style.left,
                d = a.runtimeStyle.left;
            a.runtimeStyle.left = a.currentStyle.left;
            a.style.left = b;
            b = a.style.pixelLeft;
            a.style.left = c;
            a.runtimeStyle.left = d;
            return +b
        },
        Xe = function(a, b) {
            return (b = a.currentStyle ? a.currentStyle[b] : null) ? We(a, b) : 0
        },
        Ye = {
            thin: 2,
            medium: 4,
            thick: 6
        },
        Ze = function(a, b) {
            if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
            b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
            return b in Ye ? Ye[b] : We(a, b)
        };
    var bf = function(a, b, c, d, e, f) {
            if (!(F || ob || H && I("525"))) return !0;
            if (rb && e) return $e(a);
            if (e && !d) return !1;
            r(b) && (b = af(b));
            e = 17 == b || 18 == b || rb && 91 == b;
            if ((!c || rb) && e || rb && 16 == b && (d || f)) return !1;
            if ((H || ob) && d && c) switch (a) {
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
            if (F && d && b == a) return !1;
            switch (a) {
                case 13:
                    return !0;
                case 27:
                    return !(H || ob)
            }
            return $e(a)
        },
        $e = function(a) {
            if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (H || ob) && 0 == a) return !0;
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
        af = function(a) {
            if (G) a = cf(a);
            else if (rb && H) switch (a) {
                case 93:
                    a = 91
            }
            return a
        },
        cf = function(a) {
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
    var M = function() {
        dc.call(this);
        this.I = new qc(this);
        this.Rb = this;
        this.Qa = null
    };
    B(M, dc);
    M.prototype[lc] = !0;
    h = M.prototype;
    h.lb = function(a) {
        this.Qa = a
    };
    h.addEventListener = function(a, b, c, d) {
        xc(this, a, b, c, d)
    };
    h.removeEventListener = function(a, b, c, d) {
        Ec(this, a, b, c, d)
    };
    h.dispatchEvent = function(a) {
        df(this);
        var b = this.Qa;
        if (b) {
            var c = [];
            for (var d = 1; b; b = b.Qa) c.push(b), D(1E3 > ++d, "infinite loop")
        }
        b = this.Rb;
        d = a.type || a;
        if (q(a)) a = new gc(a, b);
        else if (a instanceof gc) a.target = a.target || b;
        else {
            var e = a;
            a = new gc(d, b);
            db(a, e)
        }
        e = !0;
        if (c)
            for (var f = c.length - 1; !a.pa && 0 <= f; f--) {
                var g = a.currentTarget = c[f];
                e = ef(g, d, !0, a) && e
            }
        a.pa || (g = a.currentTarget = b, e = ef(g, d, !0, a) && e, a.pa || (e = ef(g, d, !1, a) && e));
        if (c)
            for (f = 0; !a.pa && f < c.length; f++) g = a.currentTarget = c[f], e = ef(g, d, !1, a) && e;
        return e
    };
    h.s = function() {
        M.m.s.call(this);
        this.I && this.I.removeAll(void 0);
        this.Qa = null
    };
    h.listen = function(a, b, c, d) {
        df(this);
        return this.I.add(String(a), b, !1, c, d)
    };
    h.ib = function(a, b, c, d) {
        return this.I.add(String(a), b, !0, c, d)
    };
    h.S = function(a, b, c, d) {
        return this.I.remove(String(a), b, c, d)
    };
    var ef = function(a, b, c, d) {
        b = a.I.a[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.removed && g.capture == c) {
                var k = g.listener,
                    l = g.Na || g.src;
                g.Ka && sc(a.I, g);
                e = !1 !== k.call(l, d) && e
            }
        }
        return e && 0 != d.Mb
    };
    M.prototype.La = function(a, b) {
        return this.I.La(String(a), b)
    };
    M.prototype.Ca = function(a, b, c, d) {
        return this.I.Ca(String(a), b, c, d)
    };
    M.prototype.hasListener = function(a, b) {
        return this.I.hasListener(p(a) ? String(a) : void 0, b)
    };
    var df = function(a) {
        D(a.I, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };
    var ff = function(a, b) {
        M.call(this);
        a && this.attach(a, b)
    };
    B(ff, M);
    h = ff.prototype;
    h.va = null;
    h.Oa = null;
    h.gb = null;
    h.Pa = null;
    h.M = -1;
    h.ma = -1;
    h.Sa = !1;
    var gf = {
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
        hf = {
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
        jf = F || ob || H && I("525"),
        kf = rb && G;
    h = ff.prototype;
    h.Wb = function(a) {
        if (H || ob)
            if (17 == this.M && !a.ctrlKey || 18 == this.M && !a.altKey || rb && 91 == this.M && !a.metaKey) this.ma = this.M = -1; - 1 == this.M && (a.ctrlKey && 17 != a.keyCode ? this.M = 17 : a.altKey && 18 != a.keyCode ? this.M = 18 : a.metaKey && 91 != a.keyCode && (this.M = 91));
        jf && !bf(a.keyCode, this.M, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.ma = af(a.keyCode), kf && (this.Sa = a.altKey))
    };
    h.Yb = function(a) {
        this.ma = this.M = -1;
        this.Sa = a.altKey
    };
    h.handleEvent = function(a) {
        var b = a.ea,
            c = b.altKey;
        if (F && "keypress" == a.type) {
            var d = this.ma;
            var e = 13 != d && 27 != d ? b.keyCode : 0
        } else(H || ob) && "keypress" == a.type ? (d = this.ma, e = 0 <= b.charCode && 63232 > b.charCode && $e(d) ? b.charCode : 0) : nb && !H ? (d = this.ma, e = $e(d) ? b.keyCode : 0) : (d = b.keyCode || this.ma, e = b.charCode || 0, kf && (c = this.Sa), rb && 63 == e && 224 == d && (d = 191));
        var f = d = af(d);
        d ? 63232 <= d && d in gf ? f = gf[d] : 25 == d && a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in hf && (f = hf[b.keyIdentifier]);
        a = f == this.M;
        this.M = f;
        b = new lf(f,
            e, a, b);
        b.altKey = c;
        this.dispatchEvent(b)
    };
    h.l = function() {
        return this.va
    };
    h.attach = function(a, b) {
        this.Pa && this.detach();
        this.va = a;
        this.Oa = xc(this.va, "keypress", this, b);
        this.gb = xc(this.va, "keydown", this.Wb, b, this);
        this.Pa = xc(this.va, "keyup", this.Yb, b, this)
    };
    h.detach = function() {
        this.Oa && (Fc(this.Oa), Fc(this.gb), Fc(this.Pa), this.Pa = this.gb = this.Oa = null);
        this.va = null;
        this.ma = this.M = -1
    };
    h.s = function() {
        ff.m.s.call(this);
        this.detach()
    };
    var lf = function(a, b, c, d) {
        ic.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.charCode = b;
        this.repeat = c
    };
    B(lf, ic);
    var mf, nf = {
        jc: "activedescendant",
        oc: "atomic",
        pc: "autocomplete",
        rc: "busy",
        uc: "checked",
        vc: "colindex",
        Ac: "controls",
        Cc: "describedby",
        Fc: "disabled",
        Hc: "dropeffect",
        Ic: "expanded",
        Jc: "flowto",
        Lc: "grabbed",
        Pc: "haspopup",
        Rc: "hidden",
        Tc: "invalid",
        Uc: "label",
        Vc: "labelledby",
        Wc: "level",
        ad: "live",
        ld: "multiline",
        md: "multiselectable",
        qd: "orientation",
        rd: "owns",
        sd: "posinset",
        ud: "pressed",
        yd: "readonly",
        Ad: "relevant",
        Bd: "required",
        Fd: "rowindex",
        Id: "selected",
        Kd: "setsize",
        Md: "sort",
        Zd: "valuemax",
        $d: "valuemin",
        ae: "valuenow",
        be: "valuetext"
    };
    var of = {
        kc: "alert",
        lc: "alertdialog",
        mc: "application",
        nc: "article",
        qc: "banner",
        sc: "button",
        tc: "checkbox",
        wc: "columnheader",
        xc: "combobox",
        yc: "complementary",
        zc: "contentinfo",
        Bc: "definition",
        Dc: "dialog",
        Ec: "directory",
        Gc: "document",
        Kc: "form",
        Mc: "grid",
        Nc: "gridcell",
        Oc: "group",
        Qc: "heading",
        Sc: "img",
        Xc: "link",
        Yc: "list",
        Zc: "listbox",
        $c: "listitem",
        bd: "log",
        cd: "main",
        dd: "marquee",
        ed: "math",
        fd: "menu",
        gd: "menubar",
        hd: "menuitem",
        jd: "menuitemcheckbox",
        kd: "menuitemradio",
        nd: "navigation",
        od: "note",
        pd: "option",
        td: "presentation",
        vd: "progressbar",
        wd: "radio",
        xd: "radiogroup",
        zd: "region",
        Cd: "row",
        Dd: "rowgroup",
        Ed: "rowheader",
        Gd: "scrollbar",
        Hd: "search",
        Jd: "separator",
        Ld: "slider",
        Nd: "spinbutton",
        Od: "status",
        TAB: "tab",
        Pd: "tablist",
        Qd: "tabpanel",
        Rd: "textbox",
        Sd: "textinfo",
        Td: "timer",
        Ud: "toolbar",
        Vd: "tooltip",
        Wd: "tree",
        Xd: "treegrid",
        Yd: "treeitem"
    };
    fb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));
    var pf = function(a, b, c) {
        w(c) && (c = c.join(" "));
        D(b, "ARIA attribute cannot be empty.");
        D(bb(nf, b), "No such ARIA attribute " + b);
        var d = "aria-" + b;
        "" === c || void 0 == c ? (mf || (mf = {
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
        }), c = mf, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    };
    var qf = function(a) {
        dc.call(this);
        this.b = a;
        this.a = {}
    };
    B(qf, dc);
    var rf = [];
    qf.prototype.listen = function(a, b, c, d) {
        w(b) || (b && (rf[0] = b.toString()), b = rf);
        for (var e = 0; e < b.length; e++) {
            var f = xc(a, b[e], c || this.handleEvent, d || !1, this.b || this);
            if (!f) break;
            this.a[f.key] = f
        }
        return this
    };
    qf.prototype.ib = function(a, b, c, d) {
        return sf(this, a, b, c, d)
    };
    var sf = function(a, b, c, d, e, f) {
        if (w(c))
            for (var g = 0; g < c.length; g++) sf(a, b, c[g], d, e, f);
        else {
            b = wc(b, c, d || a.handleEvent, e, f || a.b || a);
            if (!b) return a;
            a.a[b.key] = b
        }
        return a
    };
    qf.prototype.S = function(a, b, c, d, e) {
        if (w(b))
            for (var f = 0; f < b.length; f++) this.S(a, b[f], c, d, e);
        else c = c || this.handleEvent, d = y(d) ? !!d.capture : !!d, e = e || this.b || this, c = yc(c), d = !!d, b = mc(a) ? a.Ca(b, c, d, e) : a ? (a = Ac(a)) ? a.Ca(b, c, d, e) : null : null, b && (Fc(b), delete this.a[b.key]);
        return this
    };
    qf.prototype.removeAll = function() {
        Ya(this.a, function(a, b) {
            this.a.hasOwnProperty(b) && Fc(a)
        }, this);
        this.a = {}
    };
    qf.prototype.s = function() {
        qf.m.s.call(this);
        this.removeAll()
    };
    qf.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var tf = function() {};
    ba(tf);
    tf.prototype.a = 0;
    var N = function(a) {
        M.call(this);
        this.h = a || Hd();
        this.ra = uf;
        this.K = null;
        this.L = !1;
        this.a = null;
        this.o = void 0;
        this.u = this.R = this.i = null;
        this.Ja = !1
    };
    B(N, M);
    N.prototype.Qb = tf.N();
    var uf = null,
        vf = function(a, b) {
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
        wf = function(a, b) {
            if (a.i && a.i.u) {
                var c = a.i.u,
                    d = a.K;
                d in c && delete c[d];
                c = a.i.u;
                if (null !== c && b in c) throw Error('The object already contains the key "' + b + '"');
                c[b] = a
            }
            a.K = b
        };
    N.prototype.l = function() {
        return this.a
    };
    var xf = function(a) {
            a = a.a;
            D(a, "Can not call getElementStrict before rendering/decorating.");
            return a
        },
        yf = function(a) {
            a.o || (a.o = new qf(a));
            return a.o
        };
    N.prototype.lb = function(a) {
        if (this.i && this.i != a) throw Error("Method not supported");
        N.m.lb.call(this, a)
    };
    N.prototype.Xa = function() {
        this.a = Sd(this.h.a, "DIV")
    };
    var zf = function(a, b) {
            if (a.L) throw Error("Component already rendered");
            a.a || a.Xa();
            b ? b.insertBefore(a.a, null) : a.h.a.body.appendChild(a.a);
            a.i && !a.i.L || a.ba()
        },
        Af = function(a, b) {
            if (a.L) throw Error("Component already rendered");
            if (b && a.xb(b)) {
                a.Ja = !0;
                var c = Gd(b);
                a.h && a.h.a == c || (a.h = Hd(b));
                a.rb(b);
                a.ba()
            } else throw Error("Invalid element to decorate");
        };
    h = N.prototype;
    h.xb = function() {
        return !0
    };
    h.rb = function(a) {
        this.a = a
    };
    h.ba = function() {
        this.L = !0;
        Bf(this, function(a) {
            !a.L && a.l() && a.ba()
        })
    };
    h.Ba = function() {
        Bf(this, function(a) {
            a.L && a.Ba()
        });
        this.o && this.o.removeAll();
        this.L = !1
    };
    h.s = function() {
        this.L && this.Ba();
        this.o && (this.o.X(), delete this.o);
        Bf(this, function(a) {
            a.X()
        });
        !this.Ja && this.a && Td(this.a);
        this.i = this.a = this.u = this.R = null;
        N.m.s.call(this)
    };
    h.Ya = function() {
        return this.a
    };
    var Bf = function(a, b) {
        a.R && Ka(a.R, b, void 0)
    };
    N.prototype.removeChild = function(a, b) {
        if (a) {
            var c = q(a) ? a : a.K || (a.K = ":" + (a.Qb.a++).toString(36));
            this.u && c ? (a = this.u, a = (null !== a && c in a ? a[c] : void 0) || null) : a = null;
            if (c && a) {
                var d = this.u;
                c in d && delete d[c];
                Sa(this.R, a);
                b && (a.Ba(), a.a && Td(a.a));
                b = a;
                if (null == b) throw Error("Unable to set parent component");
                b.i = null;
                N.m.lb.call(b, null)
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };
    var Cf = function() {},
        Df;
    ba(Cf);
    var Ef = {
        button: "pressed",
        checkbox: "checked",
        menuitem: "selected",
        menuitemcheckbox: "checked",
        menuitemradio: "checked",
        radio: "checked",
        tab: "selected",
        treeitem: "selected"
    };
    Cf.prototype.Za = function() {};
    Cf.prototype.Da = function(a) {
        return a.h.vb("DIV", Ff(this, a).join(" "), a.ha())
    };
    var Hf = function(a, b, c) {
        if (a = a.l ? a.l() : a) {
            var d = [b];
            F && !I("7") && (d = Gf(Kc(a), b), d.push(b));
            (c ? Nc : Pc)(a, d)
        }
    };
    Cf.prototype.yb = function() {
        return !0
    };
    Cf.prototype.ia = function(a, b) {
        b.id && wf(a, b.id);
        b && b.firstChild ? If(a, b.firstChild.nextSibling ? Ua(b.childNodes) : b.firstChild) : a.Ea = null;
        var c = 0,
            d = this.F(),
            e = this.F(),
            f = !1,
            g = !1,
            k = !1,
            l = Ua(Kc(b));
        Ka(l, function(a) {
            f || a != d ? g || a != e ? c |= Jf(this, a) : g = !0 : (f = !0, e == d && (g = !0));
            1 == Jf(this, a) && (Ga(b), Yd(b) && Zd(b, !1))
        }, this);
        a.w = c;
        f || (l.push(d), e == d && (g = !0));
        g || l.push(e);
        (a = a.U) && l.push.apply(l, a);
        if (F && !I("7")) {
            var m = Gf(l);
            0 < m.length && (l.push.apply(l, m), k = !0)
        }
        if (!f || !g || a || k) b.className = l.join(" ");
        return b
    };
    Cf.prototype.Gb = function(a) {
        null == a.ra && (a.ra = Ue(a.L ? a.a : a.h.a.body));
        a.ra && this.Ab(a.l(), !0);
        a.b() && this.Ra(a, a.oa)
    };
    var Kf = function(a, b) {
        if (a = a.Za()) {
            D(b, "The element passed as a first parameter cannot be null.");
            var c = b.getAttribute("role") || null;
            a != c && (a ? (D(bb( of , a), "No such ARIA role " + a), b.setAttribute("role", a)) : b.removeAttribute("role"))
        }
    };
    h = Cf.prototype;
    h.$a = function(a, b) {
        var c = !b;
        b = F || nb ? a.getElementsByTagName("*") : null;
        if (Ve) {
            if (c = c ? "none" : "", a.style && (a.style[Ve] = c), b) {
                a = 0;
                for (var d; d = b[a]; a++) d.style && (d.style[Ve] = c)
            }
        } else if (F || nb)
            if (c = c ? "on" : "", a.setAttribute("unselectable", c), b)
                for (a = 0; d = b[a]; a++) d.setAttribute("unselectable", c)
    };
    h.Ab = function(a, b) {
        Hf(a, this.F() + "-rtl", b)
    };
    h.zb = function(a) {
        var b;
        return a.H & 32 && (b = a.l()) ? Yd(b) : !1
    };
    h.Ra = function(a, b) {
        var c;
        if (a.H & 32 && (c = a.l())) {
            if (!b && a.w & 32) {
                try {
                    c.blur()
                } catch (d) {}
                a.w & 32 && a.Bb()
            }
            Yd(c) != b && Zd(c, b)
        }
    };
    h.ab = function(a, b, c) {
        var d = a.l();
        if (d) {
            var e = Lf(this, b);
            e && Hf(a, e, c);
            this.Z(d, b, c)
        }
    };
    h.Z = function(a, b, c) {
        Df || (Df = {
            1: "disabled",
            8: "selected",
            16: "checked",
            64: "expanded"
        });
        D(a, "The element passed as a first parameter cannot be null.");
        b = Df[b];
        var d = a.getAttribute("role") || null;
        d && (d = Ef[d] || b, b = "checked" == b || "selected" == b ? d : b);
        b && pf(a, b, c)
    };
    h.F = function() {
        return "goog-control"
    };
    var Ff = function(a, b) {
            var c = a.F(),
                d = [c],
                e = a.F();
            e != c && d.push(e);
            c = b.getState();
            for (e = []; c;) {
                var f = c & -c;
                e.push(Lf(a, f));
                c &= ~f
            }
            d.push.apply(d, e);
            (a = b.U) && d.push.apply(d, a);
            F && !I("7") && d.push.apply(d, Gf(d));
            return d
        },
        Gf = function(a, b) {
            var c = [];
            b && (a = Ta(a, [b]));
            Ka([], function(d) {
                !Oa(d, A(Ra, a)) || b && !Ra(d, b) || c.push(d.join("_"))
            });
            return c
        },
        Lf = function(a, b) {
            a.a || Mf(a);
            return a.a[b]
        },
        Jf = function(a, b) {
            if (!a.v) {
                a.a || Mf(a);
                var c = a.a,
                    d = {},
                    e;
                for (e in c) d[c[e]] = e;
                a.v = d
            }
            a = parseInt(a.v[b], 10);
            return isNaN(a) ? 0 : a
        },
        Mf = function(a) {
            var b = a.F();
            var c = -1 != b.replace(/\xa0|\s/g, " ").indexOf(" ");
            D(!c, "ControlRenderer has an invalid css class: '" + b + "'");
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
    var Nf = function() {};
    B(Nf, Cf);
    ba(Nf);
    h = Nf.prototype;
    h.Za = function() {
        return "button"
    };
    h.Z = function(a, b, c) {
        switch (b) {
            case 8:
            case 16:
                D(a, "The button DOM element cannot be null.");
                pf(a, "pressed", c);
                break;
            default:
            case 64:
            case 1:
                Nf.m.Z.call(this, a, b, c)
        }
    };
    h.Da = function(a) {
        var b = Nf.m.Da.call(this, a),
            c = a.v;
        b && (c ? b.title = c : b.removeAttribute("title"));
        (c = a.W) && this.Wa(b, c);
        a.H & 16 && this.Z(b, 16, !!(a.w & 16));
        return b
    };
    h.ia = function(a, b) {
        b = Nf.m.ia.call(this, a, b);
        var c = this.Va(b);
        a.W = c;
        a.v = b.title;
        a.H & 16 && this.Z(b, 16, !!(a.w & 16));
        return b
    };
    h.Va = t;
    h.Wa = t;
    h.F = function() {
        return "goog-button"
    };
    var Of = function(a, b) {
            if (!a) throw Error("Invalid class name " + a);
            if (!x(b)) throw Error("Invalid decorator function " + b);
        },
        Pf = {};
    var O = function(a, b, c) {
        N.call(this, c);
        if (!b) {
            b = this.constructor;
            for (var d; b;) {
                d = b[da] || (b[da] = ++ea);
                if (d = Pf[d]) break;
                b = b.m ? b.m.constructor : null
            }
            b = d ? x(d.N) ? d.N() : new d : null
        }
        this.c = b;
        this.Ea = p(a) ? a : null
    };
    B(O, N);
    h = O.prototype;
    h.Ea = null;
    h.w = 0;
    h.H = 39;
    h.Aa = 255;
    h.oa = !0;
    h.U = null;
    h.cb = !0;
    var Rf = function(a) {
            a.L && 0 != a.cb && Qf(a, !1);
            a.cb = !1
        },
        Sf = function(a, b) {
            b && (a.U ? Ra(a.U, b) || a.U.push(b) : a.U = [b], Hf(a, b, !0))
        };
    h = O.prototype;
    h.Xa = function() {
        var a = this.c.Da(this);
        this.a = a;
        Kf(this.c, a);
        this.c.$a(a, !1);
        this.oa || (Te(a, !1), a && pf(a, "hidden", !0))
    };
    h.Ya = function() {
        return this.l()
    };
    h.xb = function(a) {
        return this.c.yb(a)
    };
    h.rb = function(a) {
        this.a = a = this.c.ia(this, a);
        Kf(this.c, a);
        this.c.$a(a, !1);
        this.oa = "none" != a.style.display
    };
    h.ba = function() {
        O.m.ba.call(this);
        var a = this.c,
            b = xf(this);
        D(this);
        D(b);
        this.oa || pf(b, "hidden", !this.oa);
        this.b() || a.Z(b, 1, !this.b());
        this.H & 8 && a.Z(b, 8, this.isSelected());
        this.H & 16 && a.Z(b, 16, !!(this.w & 16));
        this.H & 64 && a.Z(b, 64, !!(this.w & 64));
        this.c.Gb(this);
        this.H & -2 && (this.cb && Qf(this, !0), this.H & 32 && (a = this.l())) && (b = this.j || (this.j = new ff), b.attach(a), yf(this).listen(b, "key", this.Xb).listen(a, "focus", this.Vb).listen(a, "blur", this.Bb))
    };
    var Qf = function(a, b) {
        var c = yf(a),
            d = a.l();
        b ? (c.listen(d, "mouseover", a.Eb).listen(d, "mousedown", a.Fa).listen(d, "mouseup", a.Ga).listen(d, "mouseout", a.Db), a.Ma != t && c.listen(d, "contextmenu", a.Ma), F && (I(9) || c.listen(d, "dblclick", a.Cb), a.D || (a.D = new Tf(a), ec(a, A(fc, a.D))))) : (c.S(d, "mouseover", a.Eb).S(d, "mousedown", a.Fa).S(d, "mouseup", a.Ga).S(d, "mouseout", a.Db), a.Ma != t && c.S(d, "contextmenu", a.Ma), F && (I(9) || c.S(d, "dblclick", a.Cb), fc(a.D), a.D = null))
    };
    O.prototype.Ba = function() {
        O.m.Ba.call(this);
        this.j && this.j.detach();
        this.oa && this.b() && this.c.Ra(this, !1)
    };
    O.prototype.s = function() {
        O.m.s.call(this);
        this.j && (this.j.X(), delete this.j);
        delete this.c;
        this.D = this.U = this.Ea = null
    };
    O.prototype.ha = function() {
        return this.Ea
    };
    var If = function(a, b) {
            a.Ea = b
        },
        Uf = function(a) {
            a = a.ha();
            if (!a) return "";
            if (!q(a))
                if (w(a)) a = Ma(a, ae).join("");
                else {
                    if (Sc && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
                    else {
                        var b = [];
                        $d(a, b, !0);
                        a = b.join("")
                    }
                    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
                    a = a.replace(/\u200B/g, "");
                    Sc || (a = a.replace(/ +/g, " "));
                    " " != a && (a = a.replace(/^\s*/, ""))
                }
            return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
        };
    O.prototype.b = function() {
        return !(this.w & 1)
    };
    O.prototype.setEnabled = function(a) {
        var b = this.i;
        b && "function" == typeof b.b && !b.b() || !Vf(this, 1, !a) || (a || (Wf(this, !1), Xf(this, !1)), this.oa && this.c.Ra(this, a), Yf(this, 1, !a, !0))
    };
    var Xf = function(a, b) {
            Vf(a, 2, b) && Yf(a, 2, b)
        },
        Wf = function(a, b) {
            Vf(a, 4, b) && Yf(a, 4, b)
        };
    O.prototype.isSelected = function() {
        return !!(this.w & 8)
    };
    O.prototype.T = function(a) {
        Vf(this, 32, a) && Yf(this, 32, a)
    };
    O.prototype.getState = function() {
        return this.w
    };
    var Yf = function(a, b, c, d) {
            d || 1 != b ? a.H & b && c != !!(a.w & b) && (a.c.ab(a, b, c), a.w = c ? a.w | b : a.w & ~b) : a.setEnabled(!c)
        },
        Zf = function(a) {
            if (a.L && a.w & 32) throw Error("Component already rendered");
            a.w & 32 && Yf(a, 32, !1);
            a.H &= -33
        },
        P = function(a, b) {
            return !!(a.Aa & b) && !!(a.H & b)
        },
        Vf = function(a, b, c) {
            return !!(a.H & b) && !!(a.w & b) != c && (!(0 & b) || a.dispatchEvent(vf(b, c))) && !a.C
        };
    h = O.prototype;
    h.Eb = function(a) {
        (!a.relatedTarget || !Ud(this.l(), a.relatedTarget)) && this.dispatchEvent("enter") && this.b() && P(this, 2) && Xf(this, !0)
    };
    h.Db = function(a) {
        a.relatedTarget && Ud(this.l(), a.relatedTarget) || !this.dispatchEvent("leave") || (P(this, 4) && Wf(this, !1), P(this, 2) && Xf(this, !1))
    };
    h.Ma = t;
    h.Fa = function(a) {
        this.b() && (P(this, 2) && Xf(this, !0), kc(a) && (P(this, 4) && Wf(this, !0), this.c && this.c.zb(this) && this.l().focus()));
        kc(a) && a.preventDefault()
    };
    h.Ga = function(a) {
        this.b() && (P(this, 2) && Xf(this, !0), this.w & 4 && this.Ha(a) && P(this, 4) && Wf(this, !1))
    };
    h.Cb = function(a) {
        this.b() && this.Ha(a)
    };
    h.Ha = function(a) {
        if (P(this, 16)) {
            var b = !(this.w & 16);
            Vf(this, 16, b) && Yf(this, 16, b)
        }
        P(this, 8) && Vf(this, 8, !0) && Yf(this, 8, !0);
        P(this, 64) && (b = !(this.w & 64), Vf(this, 64, b) && Yf(this, 64, b));
        b = new gc("action", this);
        a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.kb = a.kb);
        return this.dispatchEvent(b)
    };
    h.Vb = function() {
        P(this, 32) && this.T(!0)
    };
    h.Bb = function() {
        P(this, 4) && Wf(this, !1);
        P(this, 32) && this.T(!1)
    };
    h.Xb = function(a) {
        return this.oa && this.b() && this.bb(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
    };
    h.bb = function(a) {
        return 13 == a.keyCode && this.Ha(a)
    };
    if (!x(O)) throw Error("Invalid component class " + O);
    if (!x(Cf)) throw Error("Invalid renderer class " + Cf);
    var $f = O[da] || (O[da] = ++ea);
    Pf[$f] = Cf;
    Of("goog-control", function() {
        return new O(null)
    });
    var Tf = function(a) {
        dc.call(this);
        this.b = a;
        this.a = !1;
        this.c = new qf(this);
        ec(this, A(fc, this.c));
        a = xf(this.b);
        this.c.listen(a, "mousedown", this.i).listen(a, "mouseup", this.j).listen(a, "click", this.h)
    };
    B(Tf, dc);
    var ag = !F || Fb(9);
    Tf.prototype.i = function() {
        this.a = !1
    };
    Tf.prototype.j = function() {
        this.a = !0
    };
    var bg = function(a, b) {
        if (!ag) return a.button = 0, a.type = b, a;
        var c = document.createEvent("MouseEvents");
        c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
        return c
    };
    Tf.prototype.h = function(a) {
        if (this.a) this.a = !1;
        else {
            var b = a.ea,
                c = b.button,
                d = b.type,
                e = bg(b, "mousedown");
            this.b.Fa(new ic(e, a.currentTarget));
            e = bg(b, "mouseup");
            this.b.Ga(new ic(e, a.currentTarget));
            ag || (b.button = c, b.type = d)
        }
    };
    Tf.prototype.s = function() {
        this.b = null;
        Tf.m.s.call(this)
    };
    var cg = function() {};
    B(cg, Nf);
    ba(cg);
    h = cg.prototype;
    h.Za = function() {};
    h.Da = function(a) {
        Rf(a);
        a.Aa &= -256;
        Zf(a);
        return a.h.vb("BUTTON", {
            "class": Ff(this, a).join(" "),
            disabled: !a.b(),
            title: a.v || "",
            value: a.W || ""
        }, Uf(a) || "")
    };
    h.yb = function(a) {
        return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
    };
    h.ia = function(a, b) {
        Rf(a);
        a.Aa &= -256;
        Zf(a);
        if (b.disabled) {
            var c = Da(Lf(this, 1));
            Mc(b, c)
        }
        return cg.m.ia.call(this, a, b)
    };
    h.Gb = function(a) {
        yf(a).listen(a.l(), "click", a.Ha)
    };
    h.$a = t;
    h.Ab = t;
    h.zb = function(a) {
        return a.b()
    };
    h.Ra = t;
    h.ab = function(a, b, c) {
        cg.m.ab.call(this, a, b, c);
        (a = a.l()) && 1 == b && (a.disabled = c)
    };
    h.Va = function(a) {
        return a.value
    };
    h.Wa = function(a, b) {
        a && (a.value = b)
    };
    h.Z = t;
    var dg = function(a, b, c) {
        O.call(this, a, b || cg.N(), c)
    };
    B(dg, O);
    dg.prototype.s = function() {
        dg.m.s.call(this);
        delete this.W;
        delete this.v
    };
    dg.prototype.ba = function() {
        dg.m.ba.call(this);
        if (this.H & 32) {
            var a = this.l();
            a && yf(this).listen(a, "keyup", this.bb)
        }
    };
    dg.prototype.bb = function(a) {
        return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Ha(a) : 32 == a.keyCode
    };
    Of("goog-button", function() {
        return new dg(null)
    });
    F && I(8);
    var eg = function(a) {
            if (null != a) switch (a.sa) {
                case 1:
                    return 1;
                case -1:
                    return -1;
                case 0:
                    return 0
            }
            return null
        },
        gg = function(a) {
            return null != a && a.aa === pe ? (D(a.constructor === ue), a) : a instanceof rd ? fg(sd(a), a.ua()) : fg(ua(String(String(a))), eg(a))
        },
        fg = function(a) {
            function b(a) {
                this.content = a
            }
            b.prototype = a.prototype;
            return function(a, d) {
                a = new b(String(a));
                void 0 !== d && (a.sa = d);
                return a
            }
        }(ue);
    (function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            a = String(a);
            if (!a) return "";
            a = new b(a);
            void 0 !== d && (a.sa = d);
            return a
        }
    })(ue);
    var R = function(a) {
            return null != a && a.aa === pe ? (D(a.constructor === ue), String(String(a.ha()).replace(hg, "").replace(ig, "&lt;")).replace(jg, kg)) : ua(String(a))
        },
        lg = {
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
        kg = function(a) {
            return lg[a]
        },
        jg = /[\x00\x22\x27\x3c\x3e]/g,
        mg = /^(?!on|src|(?:style|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i,
        hg = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        ig = /</g;
    var ng = function(a) {
        a = a || {};
        var b = a.content,
            c = fg,
            d = '<div role="button"' + (a.id ? ' id="' + R(a.id) + '"' : "") + ' class="';
        var e = a || {};
        var f = "goog-inline-block jfk-button ",
            g = e.style;
        switch (y(g) ? g.toString() : g) {
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
            " jfk-button-narrow" : "") + (e.checked ? " jfk-button-checked" : "") + (e.Sb ? " " + e.Sb : "") + (e.disabled ? " jfk-button-disabled" : "");
        d = d + R(new te(f, void 0)) + '"' + (a.disabled ? ' aria-disabled="true"' : ' tabindex="' + (a.gc ? R(a.gc) : "0") + '"') + (a.title ? a.ic ? ' data-tooltip="' + R(a.title) + '"' : ' title="' + R(a.title) + '"' : "") + (a.value ? ' value="' + R(a.value) + '"' : "");
        a.attributes ? (a = a.attributes, null != a && a.aa === qe ? (D(a.constructor === ve), a = a.ha().replace(/([^"'\s])$/, "$1 ")) : (a = String(a), mg.test(a) || (Ba("Bad value `%s` for |filterHtmlAttributes", [a]), a = "zSoyz")), a = " " + a) : a = "";
        return c(d + a + ">" + gg(null != b ? b : "") + "</div>")
    };
    ng.a = "jfk.templates.button.strict";
    var og = function(a, b, c) {
        this.h = c;
        this.c = a;
        this.i = b;
        this.b = 0;
        this.a = null
    };
    og.prototype.get = function() {
        if (0 < this.b) {
            this.b--;
            var a = this.a;
            this.a = a.next;
            a.next = null
        } else a = this.c();
        return a
    };
    var pg = function(a, b) {
        a.i(b);
        a.b < a.h && (a.b++, b.next = a.a, a.a = b)
    };
    var qg = function(a) {
            n.setTimeout(function() {
                throw a;
            }, 0)
        },
        rg, sg = function() {
            var a = n.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !E("Presto") && (a = function() {
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
                a = z(function(a) {
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
            if ("undefined" !== typeof a && !E("Trident") && !E("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (p(c.next)) {
                        c = c.next;
                        var a = c.pb;
                        c.pb = null;
                        a()
                    }
                };
                return function(a) {
                    d.next = {
                        pb: a
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
                    n.setTimeout(a, 0)
                }
        };
    var tg = function() {
            this.b = this.a = null
        },
        vg = new og(function() {
            return new ug
        }, function(a) {
            a.reset()
        }, 100);
    tg.prototype.add = function(a, b) {
        var c = vg.get();
        c.set(a, b);
        this.b ? this.b.next = c : (D(!this.a), this.a = c);
        this.b = c
    };
    tg.prototype.remove = function() {
        var a = null;
        this.a && (a = this.a, this.a = this.a.next, this.a || (this.b = null), a.next = null);
        return a
    };
    var ug = function() {
        this.next = this.b = this.a = null
    };
    ug.prototype.set = function(a, b) {
        this.a = a;
        this.b = b;
        this.next = null
    };
    ug.prototype.reset = function() {
        this.next = this.b = this.a = null
    };
    var Ag = function(a, b) {
            wg || xg();
            yg || (wg(), yg = !0);
            zg.add(a, b)
        },
        wg, xg = function() {
            if (-1 != String(n.Promise).indexOf("[native code]")) {
                var a = n.Promise.resolve(void 0);
                wg = function() {
                    a.then(Bg)
                }
            } else wg = function() {
                var a = Bg;
                !x(n.setImmediate) || n.Window && n.Window.prototype && !E("Edge") && n.Window.prototype.setImmediate == n.setImmediate ? (rg || (rg = sg()), rg(a)) : n.setImmediate(a)
            }
        },
        yg = !1,
        zg = new tg,
        Bg = function() {
            for (var a; a = zg.remove();) {
                try {
                    a.a.call(a.b)
                } catch (b) {
                    qg(b)
                }
                pg(vg, a)
            }
            yg = !1
        };
    var Cg = function(a) {
            a.prototype.then = a.prototype.then;
            a.prototype.$goog_Thenable = !0
        },
        Dg = function(a) {
            if (!a) return !1;
            try {
                return !!a.$goog_Thenable
            } catch (b) {
                return !1
            }
        };
    var Gg = function(a, b) {
            this.a = 0;
            this.o = void 0;
            this.h = this.b = this.c = null;
            this.i = this.j = !1;
            if (a != t) try {
                var c = this;
                a.call(b, function(a) {
                    Eg(c, 2, a)
                }, function(a) {
                    if (!(a instanceof Fg)) try {
                        if (a instanceof Error) throw a;
                        throw Error("Promise rejected.");
                    } catch (e) {}
                    Eg(c, 3, a)
                })
            } catch (d) {
                Eg(this, 3, d)
            }
        },
        Hg = function() {
            this.next = this.h = this.c = this.b = this.a = null;
            this.i = !1
        };
    Hg.prototype.reset = function() {
        this.h = this.c = this.b = this.a = null;
        this.i = !1
    };
    var Ig = new og(function() {
            return new Hg
        }, function(a) {
            a.reset()
        }, 100),
        Jg = function(a, b, c) {
            var d = Ig.get();
            d.b = a;
            d.c = b;
            d.h = c;
            return d
        };
    Gg.prototype.then = function(a, b, c) {
        null != a && Ea(a, "opt_onFulfilled should be a function.");
        null != b && Ea(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
        return Kg(this, x(a) ? a : null, x(b) ? b : null, c)
    };
    Cg(Gg);
    Gg.prototype.cancel = function(a) {
        0 == this.a && Ag(function() {
            var b = new Fg(a);
            Lg(this, b)
        }, this)
    };
    var Lg = function(a, b) {
            if (0 == a.a)
                if (a.c) {
                    var c = a.c;
                    if (c.b) {
                        for (var d = 0, e = null, f = null, g = c.b; g && (g.i || (d++, g.a == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                        e && (0 == c.a && 1 == d ? Lg(c, b) : (f ? (d = f, D(c.b), D(null != d), d.next == c.h && (c.h = d), d.next = d.next.next) : Mg(c), Ng(c, e, 3, b)))
                    }
                    a.c = null
                } else Eg(a, 3, b)
        },
        Pg = function(a, b) {
            a.b || 2 != a.a && 3 != a.a || Og(a);
            D(null != b.b);
            a.h ? a.h.next = b : a.b = b;
            a.h = b
        },
        Kg = function(a, b, c, d) {
            var e = Jg(null, null, null);
            e.a = new Gg(function(a, g) {
                e.b = b ? function(c) {
                        try {
                            var e = b.call(d, c);
                            a(e)
                        } catch (m) {
                            g(m)
                        }
                    } :
                    a;
                e.c = c ? function(b) {
                    try {
                        var e = c.call(d, b);
                        !p(e) && b instanceof Fg ? g(b) : a(e)
                    } catch (m) {
                        g(m)
                    }
                } : g
            });
            e.a.c = a;
            Pg(a, e);
            return e.a
        };
    Gg.prototype.C = function(a) {
        D(1 == this.a);
        this.a = 0;
        Eg(this, 2, a)
    };
    Gg.prototype.G = function(a) {
        D(1 == this.a);
        this.a = 0;
        Eg(this, 3, a)
    };
    var Eg = function(a, b, c) {
            if (0 == a.a) {
                a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                a.a = 1;
                a: {
                    var d = c,
                        e = a.C,
                        f = a.G;
                    if (d instanceof Gg) {
                        null != e && Ea(e, "opt_onFulfilled should be a function.");
                        null != f && Ea(f, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
                        Pg(d, Jg(e || t, f || null, a));
                        var g = !0
                    } else if (Dg(d)) d.then(e, f, a),
                    g = !0;
                    else {
                        if (y(d)) try {
                            var k = d.then;
                            if (x(k)) {
                                Qg(d, k, e, f, a);
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
                    (a.o = c, a.a = b, a.c = null, Og(a), 3 != b || c instanceof Fg || Rg(a, c))
            }
        },
        Qg = function(a, b, c, d, e) {
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
        Og = function(a) {
            a.j || (a.j = !0, Ag(a.u, a))
        },
        Mg = function(a) {
            var b = null;
            a.b && (b = a.b, a.b = b.next, b.next = null);
            a.b || (a.h = null);
            null != b && D(null != b.b);
            return b
        };
    Gg.prototype.u = function() {
        for (var a; a = Mg(this);) Ng(this, a, this.a, this.o);
        this.j = !1
    };
    var Ng = function(a, b, c, d) {
            if (3 == c && b.c && !b.i)
                for (; a && a.i; a = a.c) a.i = !1;
            if (b.a) b.a.c = null, Sg(b, c, d);
            else try {
                b.i ? b.b.call(b.h) : Sg(b, c, d)
            } catch (e) {
                Tg.call(null, e)
            }
            pg(Ig, b)
        },
        Sg = function(a, b, c) {
            2 == b ? a.b.call(a.h, c) : a.c && a.c.call(a.h, c)
        },
        Rg = function(a, b) {
            a.i = !0;
            Ag(function() {
                a.i && Tg.call(null, b)
            })
        },
        Tg = qg,
        Fg = function(a) {
            C.call(this, a)
        };
    B(Fg, C);
    Fg.prototype.name = "cancel";
    var Vg = function(a, b, c) {
        if (x(a)) c && (a = z(a, c));
        else if (a && "function" == typeof a.handleEvent) a = z(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : n.setTimeout(a, b || 0)
    };
    var Wg = function() {
        if (sb) {
            var a = /Windows NT ([0-9.]+)/;
            return (a = a.exec(Va)) ? a[1] : "0"
        }
        return rb ? (a = /10[_.][0-9_.]+/, (a = a.exec(Va)) ? a[0].replace(/_/g, ".") : "10") : tb ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(Va)) ? a[1] : "") : ub || vb || wb ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(Va)) ? a[1].replace(/_/g, ".") : "") : ""
    }();
    var Xg = function(a) {
            return (a = a.exec(Va)) ? a[1] : ""
        },
        Yg = function() {
            if (Ib) return Xg(/Firefox\/([0-9.]+)/);
            if (F || ob || nb) return Db;
            if (Mb) return ib() ? Xg(/CriOS\/([0-9.]+)/) : Xg(/Chrome\/([0-9.]+)/);
            if (Nb && !ib()) return Xg(/Version\/([0-9.]+)/);
            if (Jb || Kb) {
                var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Va);
                if (a) return a[1] + "." + a[2]
            } else if (Lb) return (a = Xg(/Android\s+([0-9.]+)/)) ? a : Xg(/Version\/([0-9.]+)/);
            return ""
        }(),
        Zg = function(a) {
            return 0 <= wa(Yg, a)
        };
    var $g = function(a, b) {
        return (b & 8 && Ue(a) ? b ^ 4 : b) & -9
    };
    var ah = function() {};
    ah.prototype.wb = function() {};
    var bh = function(a, b) {
        this.c = a;
        this.j = !!b;
        this.h = {
            0: this.c + "-arrowright",
            1: this.c + "-arrowup",
            2: this.c + "-arrowdown",
            3: this.c + "-arrowleft"
        }
    };
    B(bh, ah);
    h = bh.prototype;
    h.Ta = 2;
    h.nb = 20;
    h.Ua = 3;
    h.jb = -5;
    h.wb = function(a, b, c) {
        D(this.i, "Must call setElements first.");
        b = this.Ta;
        2 == b && (b = 0);
        a = this.Ua;
        var d = 2 == this.Ta ? ch(this.Ua) ? this.a.offsetHeight / 2 : this.a.offsetWidth / 2 : this.nb;
        if (this.b) {
            var e = dh(a, b),
                f = this.b;
            var g = Re(f);
            g = (ch(a) ? g.height / 2 : g.width / 2) - d;
            var k = $g(f, e),
                l;
            if (l = Me(f)) f = Se(f), f = new Ae(f.top, f.left + f.width, f.top + f.height, f.left), ch(a) ? f.top < l.top && !(k & 1) ? g -= l.top - f.top : f.bottom > l.bottom && k & 1 && (g -= f.bottom - l.bottom) : f.left < l.left && !(k & 4) ? g -= l.left - f.left : f.right > l.right && k & 4 && (g -= f.right -
                l.right);
            k = ch(a) ? new L(this.jb, g) : new L(g, this.jb);
            g = a ^ 3;
            ch(a) && "rtl" == this.b.dir && (g = a);
            l = this.b;
            f = dh(g, b);
            g = this.a;
            D(g);
            var m = g.offsetParent;
            if (m) {
                var v = "HTML" == m.tagName || "BODY" == m.tagName;
                if (!v || "static" != Ge(m, "position")) {
                    var J = Le(m);
                    if (!v) {
                        v = Ue(m);
                        var K;
                        if (K = v) {
                            K = Nb && Zg(10);
                            var Y;
                            if (Y = xb) Y = 0 <= wa(Wg, 10);
                            K = G || K || Y
                        }
                        v = K ? -m.scrollLeft : !v || pb && I("8") || "visible" == Ge(m, "overflowX") ? m.scrollLeft : m.scrollWidth - m.clientWidth - m.scrollLeft;
                        J = Dd(J, new L(v, m.scrollTop))
                    }
                }
            }
            J = J || new L;
            m = Se(l);
            if (v = Me(l)) {
                var Q =
                    new Be(v.left, v.top, v.right - v.left, v.bottom - v.top);
                v = Math.max(m.left, Q.left);
                K = Math.min(m.left + m.width, Q.left + Q.width);
                v <= K && (Y = Math.max(m.top, Q.top), Q = Math.min(m.top + m.height, Q.top + Q.height), Y <= Q && (m.left = v, m.top = Y, m.width = K - v, m.height = Q - Y))
            }
            v = Hd(l);
            Y = Hd(g);
            if (v.a != Y.a) {
                K = v.a.body;
                Y = Nd(Y.a);
                Q = new L(0, 0);
                var ma = (ma = Gd(K)) ? Nd(ma) : window;
                if (kb(ma, "parent")) {
                    var fe = K;
                    do {
                        var Ug = ma == Y ? Le(fe) : Pe(D(fe));
                        Q.x += Ug.x;
                        Q.y += Ug.y
                    } while (ma && ma != Y && ma != ma.parent && (fe = ma.frameElement) && (ma = ma.parent))
                }
                K = Dd(Q, Le(K));
                !F || Fb(9) || Pd(v.a) || (K = Dd(K, Od(v.a)));
                m.left += K.x;
                m.top += K.y
            }
            l = $g(l, f);
            f = m.left;
            l & 4 ? f += m.width : l & 2 && (f += m.width / 2);
            f = new L(f, m.top + (l & 1 ? m.height : 0));
            f = Dd(f, J);
            k && (f.x += (l & 4 ? -1 : 1) * k.x, f.y += (l & 1 ? -1 : 1) * k.y);
            l = f;
            l = new L(l.x, l.y);
            k = $g(g, e);
            e = Re(g);
            f = new Ed(e.width, e.height);
            l = new L(l.x, l.y);
            f = new Ed(f.width, f.height);
            if (c || 0 != k) k & 4 ? l.x -= f.width + (c ? c.right : 0) : k & 2 ? l.x -= f.width / 2 : c && (l.x += c.left), k & 1 ? l.y -= f.height + (c ? c.bottom : 0) : c && (l.y += c.top);
            c = new Be(0, 0, 0, 0);
            c.left = l.x;
            c.top = l.y;
            c.width = f.width;
            c.height =
                f.height;
            Ie(g, new L(c.left, c.top));
            f = new Ed(c.width, c.height);
            e == f || e && f && e.width == f.width && e.height == f.height || (c = f, e = Gd(g), k = Pd(Hd(e).a), !F || I("10") || k && I("8") ? (g = g.style, G ? g.MozBoxSizing = "border-box" : H ? g.WebkitBoxSizing = "border-box" : g.boxSizing = "border-box", g.width = Math.max(c.width, 0) + "px", g.height = Math.max(c.height, 0) + "px") : (e = g.style, k ? (F ? (k = Xe(g, "paddingLeft"), l = Xe(g, "paddingRight"), f = Xe(g, "paddingTop"), J = Xe(g, "paddingBottom"), k = new Ae(f, l, J, k)) : (k = Fe(g, "paddingLeft"), l = Fe(g, "paddingRight"),
                    f = Fe(g, "paddingTop"), J = Fe(g, "paddingBottom"), k = new Ae(parseFloat(f), parseFloat(l), parseFloat(J), parseFloat(k))), F && !Fb(9) ? (l = Ze(g, "borderLeft"), f = Ze(g, "borderRight"), J = Ze(g, "borderTop"), g = Ze(g, "borderBottom"), g = new Ae(J, f, g, l)) : (l = Fe(g, "borderLeftWidth"), f = Fe(g, "borderRightWidth"), J = Fe(g, "borderTopWidth"), g = Fe(g, "borderBottomWidth"), g = new Ae(parseFloat(J), parseFloat(f), parseFloat(g), parseFloat(l))), e.pixelWidth = c.width - g.left - k.left - k.right - g.right, e.pixelHeight = c.height - g.top - k.top - k.bottom - g.bottom) :
                (e.pixelWidth = c.width, e.pixelHeight = c.height)));
            this.j && (g = parseFloat(this.a.style.left), c = parseFloat(this.a.style.top), D(!isNaN(g) && !isNaN(c), "Could not parse position."), isFinite(g) && 0 == g % 1 && isFinite(c) && 0 == c % 1 || Ie(this.a, Math.round(g), Math.round(c)))
        }
        eh(this, a, b, d)
    };
    var eh = function(a, b, c, d) {
            var e = a.i;
            Ya(a.h, function(a) {
                Oc(e, a)
            }, a);
            Mc(e, a.h[b]);
            e.style.top = e.style.left = e.style.right = e.style.bottom = "";
            a.b ? (c = Oe(a.b, a.a), d = fh(a.b, b), ch(b) ? e.style.top = gh(c.y + d.y, a.a.offsetHeight - 15) + "px" : e.style.left = gh(c.x + d.x, a.a.offsetWidth - 15) + "px") : e.style[0 == c ? ch(b) ? "top" : "left" : ch(b) ? "bottom" : "right"] = d + "px"
        },
        gh = function(a, b) {
            return 15 > b ? 15 : Math.min(Math.max(a, 15), b)
        },
        dh = function(a, b) {
            switch (a) {
                case 2:
                    return 0 == b ? 1 : 5;
                case 1:
                    return 0 == b ? 0 : 4;
                case 0:
                    return 0 == b ? 12 : 13;
                default:
                    return 0 ==
                        b ? 8 : 9
            }
        },
        fh = function(a, b) {
            var c = 0,
                d = 0;
            a = Re(a);
            switch (b) {
                case 2:
                    c = a.width / 2;
                    break;
                case 1:
                    c = a.width / 2;
                    d = a.height;
                    break;
                case 0:
                    d = a.height / 2;
                    break;
                case 3:
                    c = a.width, d = a.height / 2
            }
            return new L(c, d)
        },
        ch = function(a) {
            return 0 == a || 3 == a
        };
    var S = function(a, b, c, d) {
        dg.call(this, a, hh.N(), b);
        this.V = c || 0;
        this.$ = d || 0;
        this.Ia = !1
    };
    B(S, dg);
    S.prototype.setEnabled = function(a) {
        this.b() != a && (S.m.setEnabled.call(this, a), ih(this))
    };
    S.prototype.T = function(a) {
        S.m.T.call(this, a);
        jh(this, !1)
    };
    S.prototype.Fa = function(a) {
        S.m.Fa.call(this, a);
        this.b() && jh(this, !0)
    };
    S.prototype.Ga = function(a) {
        S.m.Ga.call(this, a);
        this.b() && jh(this, !0)
    };
    var jh = function(a, b) {
            a.l() && (a = a.l(), b ? Mc(a, "jfk-button-clear-outline") : Oc(a, "jfk-button-clear-outline"))
        },
        ih = function(a) {
            a.l() && kh(a.c, a)
        },
        hh = function() {
            this.G = this.F() + "-standard";
            this.b = this.F() + "-action";
            this.C = this.F() + "-primary";
            this.i = this.F() + "-default";
            this.j = this.F() + "-flat";
            this.u = this.F() + "-narrow";
            this.o = this.F() + "-mini";
            this.h = this.F() + "-contrast"
        };
    B(hh, Nf);
    ba(hh);
    h = hh.prototype;
    h.na = function(a, b, c) {
        a && c.V != a && (c.V = a, ih(c));
        b && c.$ != b && (c.$ = b, ih(c))
    };
    h.F = function() {
        return "jfk-button"
    };
    h.Da = function(a) {
        Ia(a, S, "Button is expected to be instance of jfk.Button");
        var b = a.h,
            c = ze(ng, {
                disabled: !a.b(),
                checked: !!(a.w & 16),
                style: a.V,
                title: a.v,
                ic: a.Ia,
                value: a.W,
                width: a.$
            }, b);
        b.Ub(c, a.ha());
        this.ia(a, c);
        return c
    };
    h.ia = function(a, b) {
        hh.m.ia.call(this, a, b);
        this.c || (this.c = eb(this.G, A(this.na, 0, null), this.b, A(this.na, 2, null), this.C, A(this.na, 3, null), this.i, A(this.na, 1, null), this.j, A(this.na, 4, null), this.o, A(this.na, 5, null), this.h, A(this.na, 6, null), this.u, A(this.na, null, 1)));
        for (var c = Kc(b), d = 0; d < c.length; ++d) {
            var e = this.c[c[d]];
            e && e(a)
        }
        if (c = b.getAttribute("data-tooltip")) a.v = c, a.Ia = !0;
        return b
    };
    h.Va = function(a) {
        return a.getAttribute("value") || ""
    };
    h.Wa = function(a, b) {
        a && a.setAttribute("value", b)
    };
    var kh = function(a, b) {
        function c(a, b) {
            (a ? d : e).push(b)
        }
        D(b.l(), "Button element must already exist when updating style.");
        var d = [],
            e = [],
            f = b.V;
        c(0 == f, a.G);
        c(2 == f, a.b);
        c(3 == f, a.C);
        c(4 == f, a.j);
        c(5 == f, a.o);
        c(1 == f, a.i);
        c(6 == f, a.h);
        c(1 == b.$, a.u);
        c(!b.b(), a.F() + "-disabled");
        Pc(b.l(), e);
        Nc(b.l(), d)
    };
    var lh = function() {
        S.call(this, "", void 0, 4);
        // debugger;
        Sf(this, "jfk-button-flat");
        Sf(this, "gtx-audio-button");
        Sf(this, "no-audio");
        this.ya = this.za = "";
        yf(this).listen(this, "action", this.Pb)
    };
    B(lh, S);
    lh.prototype.Pb = function() {
        chrome.runtime.sendMessage({
            audioSrc: mh(this.za, this.ya)
        })
    };
    var ph = function(a, b, c) {
            var d = c.toLowerCase();
            d in nh && oh[nh[d.toLowerCase()]] >= b.length ? (a.U && Sa(a.U, "no-audio") && (0 == a.U.length && (a.U = null), Hf(a, "no-audio", !1)), a.za = b, a.ya = c) : Sf(a, "no-audio")
        },
        mh = function(a, b) {
            return "https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=" + b + Yb(a) + "&q=" + encodeURIComponent(String(a))
        };
    var qh = function(a) {
            a = String(a).toLowerCase().replace("_", "-");
            if ("zh-cn" == a) return "zh-CN";
            if ("zh-tw" == a) return "zh-TW";
            var b = a.indexOf("-");
            a = 0 <= b ? a.substring(0, b) : a;
            return "zh" == a ? "zh-CN" : a
        },
        rh = function(a) {
            a = chrome.i18n.getMessage(a);
            return chrome.i18n.getMessage(a)
        };
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    var sh = function(a, b) {
        this.i = [];
        this.R = a;
        this.D = b || null;
        this.h = this.a = !1;
        this.c = void 0;
        this.C = this.G = this.o = !1;
        this.j = 0;
        this.b = null;
        this.u = 0
    };
    sh.prototype.cancel = function(a) {
        if (this.a) this.c instanceof sh && this.c.cancel();
        else {
            if (this.b) {
                var b = this.b;
                delete this.b;
                a ? b.cancel(a) : (b.u--, 0 >= b.u && b.cancel())
            }
            this.R ? this.R.call(this.D, this) : this.C = !0;
            this.a || th(this, new uh)
        }
    };
    sh.prototype.v = function(a, b) {
        this.o = !1;
        vh(this, a, b)
    };
    var vh = function(a, b, c) {
            a.a = !0;
            a.c = c;
            a.h = !b;
            wh(a)
        },
        yh = function(a) {
            if (a.a) {
                if (!a.C) throw new xh;
                a.C = !1
            }
        },
        th = function(a, b) {
            yh(a);
            zh(b);
            vh(a, !1, b)
        },
        zh = function(a) {
            D(!(a instanceof sh), "An execution sequence may not be initiated with a blocking Deferred.")
        },
        Ah = function(a, b, c, d) {
            D(!a.G, "Blocking Deferreds can not be re-used");
            a.i.push([b, c, d]);
            a.a && wh(a)
        };
    sh.prototype.then = function(a, b, c) {
        var d, e, f = new Gg(function(a, b) {
            d = a;
            e = b
        });
        Ah(this, d, function(a) {
            a instanceof uh ? f.cancel() : e(a)
        });
        return f.then(a, b, c)
    };
    Cg(sh);
    sh.prototype.isError = function(a) {
        return a instanceof Error
    };
    var Bh = function(a) {
            return Na(a.i, function(a) {
                return x(a[1])
            })
        },
        wh = function(a) {
            if (a.j && a.a && Bh(a)) {
                var b = a.j,
                    c = Ch[b];
                c && (n.clearTimeout(c.K), delete Ch[b]);
                a.j = 0
            }
            a.b && (a.b.u--, delete a.b);
            b = a.c;
            for (var d = c = !1; a.i.length && !a.o;) {
                var e = a.i.shift(),
                    f = e[0],
                    g = e[1];
                e = e[2];
                if (f = a.h ? g : f) try {
                    var k = f.call(e || a.D, b);
                    p(k) && (a.h = a.h && (k == b || a.isError(k)), a.c = b = k);
                    if (Dg(b) || "function" === typeof n.Promise && b instanceof n.Promise) d = !0, a.o = !0
                } catch (l) {
                    b = l, a.h = !0, Bh(a) || (c = !0)
                }
            }
            a.c = b;
            d && (k = z(a.v, a, !0), d = z(a.v, a, !1), b instanceof sh ? (Ah(b, k, d), b.G = !0) : b.then(k, d));
            c && (b = new Dh(b), Ch[b.K] = b, a.j = b.K)
        },
        xh = function() {
            C.call(this)
        };
    B(xh, C);
    xh.prototype.message = "Deferred has already fired";
    xh.prototype.name = "AlreadyCalledError";
    var uh = function() {
        C.call(this)
    };
    B(uh, C);
    uh.prototype.message = "Deferred was canceled";
    uh.prototype.name = "CanceledError";
    var Dh = function(a) {
        this.K = n.setTimeout(z(this.b, this), 0);
        this.a = a
    };
    Dh.prototype.b = function() {
        D(Ch[this.K], "Cannot throw an error that is not scheduled.");
        delete Ch[this.K];
        throw this.a;
    };
    var Ch = {};
    var Ih = function(a, b) {
            var c = b || {};
            b = c.document || document;
            var d = $c(a),
                e = Sd(document, "SCRIPT"),
                f = {
                    Nb: e,
                    qa: void 0
                },
                g = new sh(Eh, f),
                k = null,
                l = null != c.timeout ? c.timeout : 5E3;
            0 < l && (k = window.setTimeout(function() {
                Fh(e, !0);
                th(g, new Gh(1, "Timeout reached for loading script " + d))
            }, l), f.qa = k);
            e.onload = e.onreadystatechange = function() {
                e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Fh(e, c.Tb || !1, k), yh(g), zh(null), vh(g, !0, null))
            };
            e.onerror = function() {
                Fh(e, !0, k);
                th(g, new Gh(0, "Error while loading script " +
                    d))
            };
            f = c.attributes || {};
            db(f, {
                type: "text/javascript",
                charset: "UTF-8"
            });
            Ld(e, f);
            Cd(e, a);
            Hh(b).appendChild(e);
            return g
        },
        Hh = function(a) {
            var b;
            return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement
        },
        Eh = function() {
            if (this && this.Nb) {
                var a = this.Nb;
                a && "SCRIPT" == a.tagName && Fh(a, !0, this.qa)
            }
        },
        Fh = function(a, b, c) {
            null != c && n.clearTimeout(c);
            a.onload = t;
            a.onerror = t;
            a.onreadystatechange = t;
            b && window.setTimeout(function() {
                Td(a)
            }, 0)
        },
        Gh = function(a, b) {
            var c = "Jsloader error (code #" +
                a + ")";
            b && (c += ": " + b);
            C.call(this, c);
            this.code = a
        };
    B(Gh, C);
    var Jh = function(a, b) {
            this.b = a instanceof Zc ? a : ad(String(a));
            this.a = b ? b : "callback";
            this.qa = 5E3
        },
        Kh = 0;
    Jh.prototype.send = function(a, b, c, d) {
        if (a) {
            var e = {};
            for (f in a) e[f] = a[f];
            a = e
        } else a = {};
        d = d || "_" + (Kh++).toString(36) + ia().toString(36);
        e = "_callbacks___" + d;
        b && (n[e] = Lh(d, b), a[this.a] = e);
        b = {
            timeout: this.qa,
            Tb: !0
        };
        e = $c(this.b);
        var f = /\?/.test(e) ? "&" : "?";
        for (l in a)
            for (var g = w(a[l]) ? a[l] : [a[l]], k = 0; k < g.length; k++) null != g[k] && (e += f + encodeURIComponent(l) + "=" + encodeURIComponent(String(g[k])), f = "&");
        var l = ad(e);
        l = Ih(l, b);
        Ah(l, null, Mh(d, a, c), void 0);
        return {
            K: d,
            sb: l
        }
    };
    Jh.prototype.cancel = function(a) {
        a && (a.sb && a.sb.cancel(), a.K && Nh(a.K, !1))
    };
    var Mh = function(a, b, c) {
            return function() {
                Nh(a, !1);
                c && c(b)
            }
        },
        Lh = function(a, b) {
            return function(c) {
                Nh(a, !0);
                b.apply(void 0, arguments)
            }
        },
        Nh = function(a, b) {
            a = "_callbacks___" + a;
            if (n[a])
                if (b) try {
                    delete n[a]
                } catch (c) {
                    n[a] = void 0
                } else n[a] = t
        };
    var Ph = function(a) {
            this.h = [];
            chrome.i18n.getAcceptLanguages(z(this.C, this));
            this.c = "";
            this.a = "1";
            this.i = !0;
            this.b = [];
            this.j = [];
            this.u = !!a;
            chrome.storage.local.get(null, z(this.v, this));
            Oh(this)
        },
        Qh = !!chrome.i18n.detectLanguage,
        Rh = function(a) {
            if ("" != a.c) a = a.c;
            else a: {
                for (var b = 0; b < a.h.length; b++) {
                    var c = qh(a.h[b]);
                    if (a.b[c]) {
                        a = c;
                        break a
                    }
                }
                a = "en"
            }
            return a
        };
    Ph.prototype.v = function(a) {
        "gtxTargetLang" in a && (this.c = a.gtxTargetLang);
        "gtxShowBubble" in a && (this.a = a.gtxShowBubble);
        "gtxDetectLanguage" in a && (this.i = a.gtxDetectLanguage);
        "gtxSourceLangList" in a && (this.j = Sh(this, a.gtxSourceLangList));
        "gtxTargetLangList" in a && (this.b = Sh(this, a.gtxTargetLangList));
        this.loaded = !0;
        if (this.u) {
            var b = (new Date).getTime(),
                c = "gtxTimeStamp" in a ? a.gtxTimeStamp : 0,
                d = chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : "en";
            a = "gtxDisplayLanguage" in a ? a.gtxDisplayLanguage : "";
            (864E5 < Math.abs(b - c) || d != a) && (new Jh("https://translate.googleapis.com/translate_a/l", "cb")).send({
                client: "gtx",
                hl: d
            }, z(this.G, this, d))
        }
    };
    var Sh = function(a, b) {
        var c = [],
            d;
        for (d in b) c.push({
            code: d,
            name: b[d]
        });
        c.sort(a.o);
        a = {};
        for (b = 0; b < c.length; b++) a[c[b].code] = c[b].name;
        return a
    };
    Ph.prototype.o = function(a, b) {
        return a.name.localeCompare(b.name)
    };
    var Oh = function(a) {
        chrome.storage.onChanged.addListener(function(b) {
            b.gtxTargetLang && (a.c = b.gtxTargetLang.newValue);
            b.gtxShowBubble && (a.a = b.gtxShowBubble.newValue)
        })
    };
    Ph.prototype.C = function(a) {
        this.h = a
    };
    var Uh = function(a) {
        var b = Th;
        a = qh(a);
        return a == Rh(b) ? !0 : !1
    };
    Ph.prototype.G = function(a, b) {
        var c = (new Date).getTime(),
            d = {};
        d.gtxSourceLangList = b.sl;
        d.gtxTargetLangList = b.tl;
        d.gtxDisplayLanguage = a;
        d.gtxTimeStamp = c;
        chrome.storage.local.set(d);
        this.j = b.sl;
        this.b = b.tl
    };
    var Wh = function(a) {
        var b = Vh;
        if ("sl" == a) return b.j;
        if ("tl" == a) return b.b;
        throw Error("Invalid input for getLangList()");
    };
    var extId = chrome.runtime.id;
    var Xh = function(a) {
        var b = "";
        if (a.query)
            if (a.Ob) {
       //      	b += ('<script>' + 
       //      	'function saveNote(from, to) {' +
			    // 	'var body = {"action": "addNote", "version": 5, "params": {"note": {"fields": {"Front": from, "Back": to}, "modelName": "Basic", "deckName": "Default"}}};' +
			    // 	'fetch("http://localhost:8765", { method: "POST", body: JSON(body) }).then(r => r.json()).then(x => console.log("saved", x))' +
			    // '};' +
			    // '</script>');

// gg(a.hc) + '</div><div class="gtx-target-audio"><div class="jfk-button-img"></div></div><div class="gtx-body" href=\'chrome.runtime.sendMessage("' + extId + '",{"gtx.anki": ["' + gg(a.query) + '","' + gg(a.Ob) + '"]}); return false;\'>' +
                    
                b += '<div class="gtx-language"><select class="gtx-lang-selector">';
                for (var c = a.fc, d = c.length, e = 0; e < d; e++) {
                    var f = c[e];
                    b += "auto" != f ? '<option value="' + gg(f[0]) + '"' + (f[0] == a.ec ? " selected" : "") + ">" + gg(f[1]) + "</option>" : ""
                }
                b += '</select></div><div class="gtx-source-audio"><div class="jfk-button-img"></div></div><div class="gtx-body">' + 
                	gg(a.query) + '</div><br><div class="gtx-language">' + 
                	gg(a.hc) + '</div><div class="gtx-target-audio"><div class="jfk-button-img"></div></div><div class="gtx-body gtx-target" data-source="' + gg(a.query) + '">' +
                    gg(a.Ob) + "</div>";
                if (a.ub) {
                    b += '<table style="width: 95%">';
                    c = a.ub;
                    d = c.length;
                    for (e = 0; e < d; e++) {
                        f = c[e];
                        b += '<tr><td class="gtx-td"><div class="gtx-pos">' + gg(f.pos) + '</div></td><td class="gtx-td">';
                        if (a.popup) {
                            f = f.terms;
                            for (var g = f.length, k = 0; k < g; k++) b += (0 != k ? ", " : "") + gg(f[k])
                        } else
                            for (f = f.terms, g = f.length, k = 0; k < g; k++) {
                                var l = f[k];
                                b += 3 > k ? (0 != k ? ", " : "") + gg(l) : ""
                            }
                        b += "</td></tr>"
                    }
                    b += "</table>"
                }
                b += "<br>"
            } else b += "No translation results for <b>" + gg(a.query) + "</b>.";
        return b
    };
    Xh.a = "extension.translation";
    var oh = [0, 200],
        nh = {
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
    var Yh = function() {
        this.b = [];
        this.a = {};
        this.c = !1;
        this.o = 1;
        this.h = {};
        xc(window, "beforeunload", this.j, !1, this)
    };
    ba(Yh);
    var Zh = function(a, b, c) {
            if (null == b) return "1";
            switch (u(b)) {
                case "string":
                    return a = b, !(64 < a.length) || null != c && c || (a = a.substr(0, 64)), encodeURIComponent(String(a));
                case "number":
                    return "" + b;
                case "boolean":
                    return b ? "1" : "0";
                case "array":
                    var d = [],
                        e;
                    for (e in b) d.push(Zh(a, b[e], c));
                    return d.join(",");
                case "object":
                    d = [];
                    for (e in b) d.push($h(a, e, b[e], c));
                    return d.join(",");
                default:
                    return ""
            }
        },
        $h = function(a, b, c, d) {
            return [encodeURIComponent(String(b)), Zh(a, c, d || "smtalt" == b)].join("=")
        };
    Yh.prototype.log = function(a, b) {
        this.b.push([a, b]);
        this.c || (this.c = !0, Vg(this.i, 0, this))
    };
    Yh.prototype.i = function() {
        for (var a = 0; a < this.b.length; a++) {
            var b = this.b[a];
            ai(this, "/gen204?" + $h(this, b[0], b[1]) + "")
        }
        this.b = [];
        this.c = !1
    };
    var ai = function(a, b) {
        var c = new Image,
            d = a.o++;
        a.h[d] = c;
        c.onload = c.onerror = function() {
            delete Yh.N().h[d]
        };
        c.src = b;
        c = null
    };
    Yh.prototype.j = function() {
        this.i();
        for (var a in this.a)
            if (0 != this.a[a]) {
                var b = a;
                ai(this, "/gen204?" + $h(this, b, this.a[b][1]) + "");
                b in this.a && (n.clearTimeout(this.a[b][0]), delete this.a[b])
            }
    };
    var bi = function(a, b, c, d, e) {
        this.reset(a, b, c, d, e)
    };
    bi.prototype.a = null;
    var ci = 0;
    bi.prototype.reset = function(a, b, c, d, e) {
        "number" == typeof e || ci++;
        d || ia();
        this.b = b;
        delete this.a
    };
    bi.prototype.getMessage = function() {
        return this.b
    };
    var di = function(a) {
            this.h = a;
            this.b = this.c = this.a = null
        },
        ei = function(a, b) {
            this.name = a;
            this.value = b
        };
    ei.prototype.toString = function() {
        return this.name
    };
    var fi = new ei("SEVERE", 1E3),
        gi = new ei("CONFIG", 700),
        hi = new ei("FINE", 500);
    di.prototype.getChildren = function() {
        this.b || (this.b = {});
        return this.b
    };
    var ii = function(a) {
        if (a.c) return a.c;
        if (a.a) return ii(a.a);
        Ba("Root logger has no level set.");
        return null
    };
    di.prototype.log = function(a, b, c) {
        if (a.value >= ii(this).value)
            for (x(b) && (b = b()), a = new bi(a, String(b), this.h), c && (a.a = c), c = this; c;) c = c.a
    };
    var ji = {},
        ki = null,
        li = function(a) {
            ki || (ki = new di(""), ji[""] = ki, ki.c = gi);
            var b;
            if (!(b = ji[a])) {
                b = new di(a);
                var c = a.lastIndexOf("."),
                    d = a.substr(c + 1);
                c = li(a.substr(0, c));
                c.getChildren()[d] = b;
                b.a = c;
                ji[a] = b
            }
            return b
        };
    var mi = function(a, b) {
        a && a.log(hi, b, void 0)
    };
    var ni = function() {};
    ni.prototype.a = null;
    var pi = function(a) {
        var b;
        (b = a.a) || (b = {}, oi(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
        return b
    };
    var qi, ri = function() {};
    B(ri, ni);
    var si = function(a) {
            return (a = oi(a)) ? new ActiveXObject(a) : new XMLHttpRequest
        },
        oi = function(a) {
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
    qi = new ri;
    var ti = function(a) {
        M.call(this);
        this.headers = new de;
        this.T = a || null;
        this.b = !1;
        this.R = this.a = null;
        this.ra = this.i = "";
        this.h = 0;
        this.j = "";
        this.c = this.W = this.u = this.V = !1;
        this.o = 0;
        this.v = null;
        this.za = "";
        this.D = this.$ = !1
    };
    B(ti, M);
    var ui = ti.prototype,
        vi = li("goog.net.XhrIo");
    ui.P = vi;
    var wi = /^https?$/i,
        xi = ["POST", "PUT"],
        yi = [],
        zi = function(a, b, c, d) {
            var e = new ti;
            yi.push(e);
            b && e.listen("complete", b);
            e.ib("ready", e.Ia);
            e.send(a, c, d, void 0)
        };
    ti.prototype.Ia = function() {
        this.X();
        Sa(yi, this)
    };
    ti.prototype.send = function(a, b, c, d) {
        if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.i + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.i = a;
        this.j = "";
        this.h = 0;
        this.ra = b;
        this.V = !1;
        this.b = !0;
        this.a = this.T ? si(this.T) : si(qi);
        this.R = this.T ? pi(this.T) : pi(qi);
        this.a.onreadystatechange = z(this.ya, this);
        try {
            mi(this.P, Ai(this, "Opening Xhr")), this.W = !0, this.a.open(b, String(a), !0), this.W = !1
        } catch (f) {
            mi(this.P, Ai(this, "Error opening Xhr: " + f.message));
            Bi(this, f);
            return
        }
        a = c || "";
        var e = new de(this.headers);
        d && ie(d, function(a, b) {
            e.set(b, a)
        });
        d = Qa(e.fa());
        c = n.FormData && a instanceof n.FormData;
        !Ra(xi, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(a, b) {
            this.a.setRequestHeader(b, a)
        }, this);
        this.za && (this.a.responseType = this.za);
        "withCredentials" in this.a && this.a.withCredentials !== this.$ && (this.a.withCredentials = this.$);
        try {
            Ci(this), 0 < this.o && (this.D = Di(this.a), mi(this.P, Ai(this, "Will abort after " + this.o + "ms if incomplete, xhr2 " +
                this.D)), this.D ? (this.a.timeout = this.o, this.a.ontimeout = z(this.qa, this)) : this.v = Vg(this.qa, this.o, this)), mi(this.P, Ai(this, "Sending request")), this.u = !0, this.a.send(a), this.u = !1
        } catch (f) {
            mi(this.P, Ai(this, "Send error: " + f.message)), Bi(this, f)
        }
    };
    var Di = function(a) {
            return F && I(9) && r(a.timeout) && p(a.ontimeout)
        },
        Pa = function(a) {
            return "content-type" == a.toLowerCase()
        };
    ti.prototype.qa = function() {
        "undefined" != typeof aa && this.a && (this.j = "Timed out after " + this.o + "ms, aborting", this.h = 8, mi(this.P, Ai(this, this.j)), this.dispatchEvent("timeout"), this.abort(8))
    };
    var Bi = function(a, b) {
            a.b = !1;
            a.a && (a.c = !0, a.a.abort(), a.c = !1);
            a.j = b;
            a.h = 5;
            Ei(a);
            Fi(a)
        },
        Ei = function(a) {
            a.V || (a.V = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
        };
    ti.prototype.abort = function(a) {
        this.a && this.b && (mi(this.P, Ai(this, "Aborting")), this.b = !1, this.c = !0, this.a.abort(), this.c = !1, this.h = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Fi(this))
    };
    ti.prototype.s = function() {
        this.a && (this.b && (this.b = !1, this.c = !0, this.a.abort(), this.c = !1), Fi(this, !0));
        ti.m.s.call(this)
    };
    ti.prototype.ya = function() {
        this.C || (this.W || this.u || this.c ? Gi(this) : this.Ja())
    };
    ti.prototype.Ja = function() {
        Gi(this)
    };
    var Gi = function(a) {
            if (a.b && "undefined" != typeof aa)
                if (a.R[1] && 4 == Hi(a) && 2 == Ii(a)) mi(a.P, Ai(a, "Local request error detected and ignored"));
                else if (a.u && 4 == Hi(a)) Vg(a.ya, 0, a);
            else if (a.dispatchEvent("readystatechange"), 4 == Hi(a)) {
                mi(a.P, Ai(a, "Request complete"));
                a.b = !1;
                try {
                    if (Ji(a)) a.dispatchEvent("complete"), a.dispatchEvent("success");
                    else {
                        a.h = 6;
                        try {
                            var b = 2 < Hi(a) ? a.a.statusText : ""
                        } catch (c) {
                            mi(a.P, "Can not get status: " + c.message), b = ""
                        }
                        a.j = b + " [" + Ii(a) + "]";
                        Ei(a)
                    }
                } finally {
                    Fi(a)
                }
            }
        },
        Fi = function(a, b) {
            if (a.a) {
                Ci(a);
                var c = a.a,
                    d = a.R[0] ? t : null;
                a.a = null;
                a.R = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {
                    (a = a.P) && a.log(fi, "Problem encountered resetting onreadystatechange: " + e.message, void 0)
                }
            }
        },
        Ci = function(a) {
            a.a && a.D && (a.a.ontimeout = null);
            a.v && (n.clearTimeout(a.v), a.v = null)
        },
        Ji = function(a) {
            var b = Ii(a);
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
                if (b = 0 === b) a = String(a.i).match(je)[1] || null, !a && n.self && n.self.location && (a = n.self.location.protocol,
                    a = a.substr(0, a.length - 1)), b = !wi.test(a ? a.toLowerCase() : "");
                c = b
            }
            return c
        },
        Hi = function(a) {
            return a.a ? a.a.readyState : 0
        },
        Ii = function(a) {
            try {
                return 2 < Hi(a) ? a.a.status : -1
            } catch (b) {
                return -1
            }
        },
        Ki = function(a) {
            try {
                return a.a ? a.a.responseText : ""
            } catch (b) {
                return mi(a.P, "Can not get responseText: " + b.message), ""
            }
        },
        Ai = function(a, b) {
            return b + " [" + a.ra + " " + a.i + " " + Ii(a) + "]"
        };
    var Li = !1,
        Mi = function(a) {
            if (a = a.match(/[\d]+/g)) a.length = 3
        };
    (function() {
        if (navigator.plugins && navigator.plugins.length) {
            var a = navigator.plugins["Shockwave Flash"];
            if (a && (Li = !0, a.description)) {
                Mi(a.description);
                return
            }
            if (navigator.plugins["Shockwave Flash 2.0"]) {
                Li = !0;
                return
            }
        }
        if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], Li = !(!a || !a.enabledPlugin))) {
            Mi(a.enabledPlugin.description);
            return
        }
        try {
            var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
            Li = !0;
            Mi(b.GetVariable("$version"));
            return
        } catch (c) {}
        try {
            b =
                new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
            Li = !0;
            return
        } catch (c) {}
        try {
            b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), Li = !0, Mi(b.GetVariable("$version"))
        } catch (c) {}
    })();
    var Ni = function() {
        F ? Zg(9) : Mb && Zg(25) || F && Zg(8) || ob || Ib && Zg(19) || nb && Zg(12.1) || Nb && Zg(5.1) || Kb && Zg(3.2) || Lb && Zg(2.1)
    };
    ba(Ni);
    var Pi = function(a) {
        Sb(this, a, Oi)
    };
    B(Pi, Ob);
    var Oi = [26],
        Qi = function(a) {
            Sb(this, a, null)
        };
    B(Qi, Ob);
    var Ri = function() {
        Ni.N()
    };
    ba(Ri);
    Ri.prototype.store = function(a) {
        Tb(a, 65, 0);
        Tb(a, 16, "");
        Tb(a, 14, "");
        Tb(a, 1, "");
        Tb(a, 50, "");
        Tb(a, 52, "");
        Tb(a, 32, 0)
    };
    var Si = function() {
        this.a = Ri.N()
    };
    B(Si, dc);
    ba(Si);
    var Ti = function(a, b, c) {
            this.type = a;
            this.label = b;
            D(!p(c) || "m" == a, "Only messages should give a message descriptor.")
        },
        Ui = function(a) {
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
                    D("Message descriptors must provide a default value.")
            }
        },
        T = function(a) {
            p(void 0) || Ui(a);
            new Ti(a, 1, void 0)
        },
        U = function(a) {
            p(void 0) || Ui(a);
            new Ti(a, 2, void 0)
        },
        V = function(a, b) {
            new Ti(a,
                3, b)
        };
    T("d");
    U("d");
    V("d");
    T("f");
    U("f");
    V("f");
    T("i");
    U("i");
    V("i");
    T("j");
    U("j");
    V("j", void 0);
    V("j", void 0);
    T("u");
    U("u");
    V("u");
    T("v");
    U("v");
    V("v", void 0);
    V("v", void 0);
    T("b");
    U("b");
    V("b");
    T("e");
    U("e");
    V("e");
    T("s");
    U("s");
    V("s");
    T("B");
    U("B");
    V("B");
    T("x");
    U("x");
    V("x");
    T("y");
    U("y");
    V("y");
    T("g");
    U("g");
    V("g");
    T("h");
    U("h");
    V("h");
    T("n");
    U("n");
    V("n");
    T("o");
    U("o");
    V("o", void 0);
    V("o", void 0);
    var W = function(a) {
        this.data = a || []
    };
    W.prototype.wa = function() {
        return this.data
    };
    var X = function(a) {
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
                    if (g.A)
                        if (g.g)
                            for (c[k] = [], e = 0; e < a[d].length; e++) c[k].push(g.A(a[d][e]));
                        else c[k] = g.A(a[d]);
                else c[k] = a[d]
            }
        return c
    };
    W.prototype.toString = function() {
        return JSON.stringify(X(this))
    };
    var Z = function(a, b) {
        var c = [];
        a = new a(c);
        var d = Ia(a, W).a(),
            e;
        for (e in b) {
            var f = D(d[e]),
                g = b[e];
            if (f.B)
                if (g instanceof Array) {
                    var k = [];
                    for (var l = 0; l < g.length; l++) k.push(f.B(g[l]).wa())
                } else k = f.B(g).wa();
            else k = g;
            c[f.f] = k
        }
        return a
    };
    var Vi = function(a) {
        this.data = a || []
    };
    B(Vi, W);
    var Wi = function(a) {
        this.data = a || []
    };
    B(Wi, W);
    var Xi = {
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
    Vi.prototype.a = function() {
        return Xi
    };
    var Yi = {
        example: {
            f: 0,
            B: function(a) {
                return Z(Vi, a)
            },
            A: function(a) {
                return X(new Vi(a))
            },
            g: !0
        }
    };
    Wi.prototype.a = function() {
        return Yi
    };
    var Zi = function(a) {
        this.data = a || []
    };
    B(Zi, W);
    var $i = function(a) {
        this.data = a || []
    };
    B($i, W);
    var aj = function(a) {
        this.data = a || []
    };
    B(aj, W);
    var bj = function(a) {
        this.data = a || []
    };
    B(bj, W);
    var cj = function(a) {
        this.data = a || []
    };
    B(cj, W);
    var dj = function(a) {
        this.data = a || []
    };
    B(dj, W);
    var ej = function(a) {
        this.data = a || []
    };
    B(ej, W);
    var fj = function(a) {
        this.data = a || []
    };
    B(fj, W);
    var gj = function(a) {
        this.data = a || []
    };
    B(gj, W);
    var hj = function(a) {
        this.data = a || []
    };
    B(hj, W);
    var ij = function(a) {
        this.data = a || []
    };
    B(ij, W);
    var jj = function(a) {
        this.data = a || []
    };
    B(jj, W);
    var kj = function(a) {
        this.data = a || []
    };
    B(kj, W);
    var lj = function(a) {
        this.data = a || []
    };
    B(lj, W);
    var mj = function(a) {
        this.data = a || []
    };
    B(mj, W);
    var nj = function(a) {
        this.data = a || []
    };
    B(nj, W);
    var oj = {
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
    Zi.prototype.a = function() {
        return oj
    };
    var pj = {
        src_phrase: {
            f: 0,
            g: !1
        },
        alternative: {
            f: 2,
            B: function(a) {
                return Z(aj, a)
            },
            A: function(a) {
                return X(new aj(a))
            },
            g: !0
        },
        srcunicodeoffsets: {
            f: 3,
            B: function(a) {
                return Z(bj, a)
            },
            A: function(a) {
                return X(new bj(a))
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
    $i.prototype.a = function() {
        return pj
    };
    var qj = {
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
    aj.prototype.a = function() {
        return qj
    };
    var rj = {
        begin: {
            f: 0,
            g: !1
        },
        end: {
            f: 1,
            g: !1
        }
    };
    bj.prototype.a = function() {
        return rj
    };
    var sj = {
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
    cj.prototype.a = function() {
        return sj
    };
    var tj = {
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
    dj.prototype.a = function() {
        return tj
    };
    var uj = {
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
            B: function(a) {
                return Z(dj, a)
            },
            A: function(a) {
                return X(new dj(a))
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
    ej.prototype.a = function() {
        return uj
    };
    var vj = {
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
    fj.prototype.a = function() {
        return vj
    };
    var wj = {
        pos: {
            f: 0,
            g: !1
        },
        entry: {
            f: 1,
            B: function(a) {
                return Z(fj, a)
            },
            A: function(a) {
                return X(new fj(a))
            },
            g: !0
        },
        base_form: {
            f: 2,
            g: !1
        }
    };
    gj.prototype.a = function() {
        return wj
    };
    var xj = {
        synonym: {
            f: 0,
            g: !0
        },
        definition_id: {
            f: 1,
            g: !1
        }
    };
    hj.prototype.a = function() {
        return xj
    };
    var yj = {
        pos: {
            f: 0,
            g: !1
        },
        entry: {
            f: 1,
            B: function(a) {
                return Z(hj, a)
            },
            A: function(a) {
                return X(new hj(a))
            },
            g: !0
        },
        base_form: {
            f: 2,
            g: !1
        }
    };
    ij.prototype.a = function() {
        return yj
    };
    var zj = {
        word: {
            f: 0,
            g: !0
        }
    };
    jj.prototype.a = function() {
        return zj
    };
    var Aj = {
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
    kj.prototype.a = function() {
        return Aj
    };
    var Bj = {
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
    lj.prototype.a = function() {
        return Bj
    };
    var Cj = {
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
    mj.prototype.a = function() {
        return Cj
    };
    mj.prototype.getTitle = function() {
        var a = this.data[0];
        return null != a ? a : ""
    };
    mj.prototype.setTitle = function(a) {
        this.data[0] = a
    };
    var Dj = {
        sentences: {
            f: 0,
            B: function(a) {
                return Z(cj, a)
            },
            A: function(a) {
                return X(new cj(a))
            },
            g: !0
        },
        dict: {
            f: 1,
            B: function(a) {
                return Z(ej, a)
            },
            A: function(a) {
                return X(new ej(a))
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
            B: function(a) {
                return Z(Zi, a)
            },
            A: function(a) {
                return X(new Zi(a))
            },
            g: !0
        },
        alternative_translations: {
            f: 5,
            B: function(a) {
                return Z($i, a)
            },
            A: function(a) {
                return X(new $i(a))
            },
            g: !0
        },
        confidence: {
            f: 6,
            g: !1
        },
        spell: {
            f: 7,
            B: function(a) {
                return Z(kj, a)
            },
            A: function(a) {
                return X(new kj(a))
            },
            g: !1
        },
        autocorrection: {
            f: 10,
            g: !1
        },
        ld_result: {
            f: 8,
            B: function(a) {
                return Z(lj, a)
            },
            A: function(a) {
                return X(new lj(a))
            },
            g: !1
        },
        server_time: {
            f: 9,
            g: !1
        },
        synsets: {
            f: 11,
            B: function(a) {
                return Z(ij, a)
            },
            A: function(a) {
                return X(new ij(a))
            },
            g: !0
        },
        definitions: {
            f: 12,
            B: function(a) {
                return Z(gj, a)
            },
            A: function(a) {
                return X(new gj(a))
            },
            g: !0
        },
        examples: {
            f: 13,
            B: function(a) {
                return Z(Wi, a)
            },
            A: function(a) {
                return X(new Wi(a))
            },
            g: !1
        },
        related_words: {
            f: 14,
            B: function(a) {
                return Z(jj, a)
            },
            A: function(a) {
                return X(new jj(a))
            },
            g: !1
        },
        knowledge_results: {
            f: 15,
            B: function(a) {
                return Z(mj,
                    a)
            },
            A: function(a) {
                return X(new mj(a))
            },
            g: !0
        }
    };
    nj.prototype.a = function() {
        return Dj
    };
    var Ej = function(a, b) {
            this.c = a;
            this.a = "";
            b && (this.a = b);
            this.b = 0;
            this.i = Si.N()
        },
        Fj = function(a) {
            a = a.O("q").join("");
            return Yb(a)
        },
        Gj = function(a, b, c, d, e) {
            c = c.toString();
            c += Fj(d);
            d = d.toString();
            var f = "POST";
            b += "?" + c;
            2E3 > b.length + d.length && (f = "GET", b += "&" + d, d = "");
            ++a.b;
            zi(b, function(b) {
                --a.b;
                e(b)
            }, f, d)
        };
    Ej.prototype.h = function(a, b, c) {
        c = c.target;
        if (!Ji(c) || "[" != Ki(c)[0] && "{" != Ki(c)[0]) {
            a = c.h;
            var d = a in Hj ? Hj[a] : 0;
            var e = this.i;
            a = new Pi;
            e.a.store(a);
            Tb(a, 31, 148);
            e = new Qi;
            Tb(e, 1, 156);
            d && Tb(e, 5, d);
            a.b || (a.b = {});
            d = e ? e.wa() : e;
            a.b[63] = e;
            Tb(a, 63, d);
            a = Yh.N();
            d = String(c.i);
            e = Ki(c);
            a.log("invalidResponse", {
                q: d.substring(0, 500),
                ql: d.length,
                r: e.substring(0, 500),
                rl: e.length
            });
            b && b(Ii(c))
        } else {
            b = Ki(c);
            c = {
                "class": "trans.common.TranslationAPI",
                func: "handleSingleResult_",
                url: String(c.i)
            };
            try {
                d = JSON.parse(b)
            } catch (f) {
                throw a =
                    Yh.N(), c.js = b, c.error = f.message, a.log("jsonParseErr", c), f;
            }
            w(d) && (d = new nj(d));
            a(d)
        }
    };
    var Ij = {},
        Hj = (Ij[1] = 15, Ij[2] = 16, Ij[3] = 17, Ij[4] = 18, Ij[5] = 19, Ij[6] = 20, Ij[7] = 21, Ij[8] = 22, Ij[9] = 23, Ij);
    var Vh = new Ph,
        Jj = function() {};
    ba(Jj);
    var Kj = function(a, b, c, d) {
        if ("" != a) {
            window.selection = a;
            a = new Ej("gtx", "https://translate.googleapis.com");
            var e = chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : "en";
            d = d ? d : "auto";
            var f = Rh(Vh);
            c = new le("source=" + c);
            var g = window.selection,
                k = a.a + "/translate_a/single",
                l = new le,
                m = new le;
            l.set("client", a.c);
            l.set("sl", d);
            l.set("tl", f);
            l.set("hl", e);
            e = ["t", "bd"];
            l.remove("dt");
            0 < e.length && (l.c = null, l.a.set(ne(l, "dt"), Ua(e)), l.b = Ca(l.b) + e.length);
            l.set("dj", "1");
            c && l.h(c);
            m.set("q", g);
            Gj(a, k, l, m, z(a.h,
                a, b, void 0))
        }
    };
    Jj.prototype.a = function(a, b, c, d) {
        if (null != d) {
            for (var e = d.src, f = Rh(Vh), g = [], k = [], l = d.sentences, m = 0; m < l.length; m++) g.push(l[m].orig), k.push(l[m].trans);
            g = g.join("");
            k = k.join("");
            l = Wh("tl")[f].toUpperCase();
            m = Wh("sl");
            var v = [],
                J;
            for (J in m) v.push([J, m[J]]);
            d = {
                query: b,
                Ob: k,
                hc: l,
                ec: e,
                fc: v,
                ub: d.dict,
                popup: a
            };
            D(Xh, "Soy template may not be null.");
            c.innerHTML = xe(Xh(d || we));
            d = Jd("gtx-lang-selector", c);
            xc(d, "change", z(this.b, this, a, b, c), !1, this);
            
            var targets = c.getElementsByClassName("gtx-target");
			for (var i = 0; i < targets.length; i++) {
				var target = targets[i];
	            xc(target, 'click', function(e) {
	            	var from = e.target.getAttribute('data-source');
	            	var to = e.target.innerText;
	            	// console.log('from', from, 'to', to, 'args(event)', Array.from(arguments));
                    chrome.storage.local.get(['ankiDeckNameSel', 'ankiModelNameSel'], ({ankiDeckNameSel, ankiModelNameSel, ankiConnectUrl}) => {
                        url = ankiConnectUrl || 'http://localhost:8765';
                        model = ankiModelNameSel || 'Basic';
                        deck = ankiDeckNameSel || 'Default';
                    	var body = {
                            "action": "addNote",
                            "version": 5,
                            "params": {"note": {"fields": {"Front": from, "Back": to},
                                                "modelName": model,
                                                "deckName": deck}}};
    	            	fetch(url, { method: "POST", body: JSON.stringify(body) }).then(r => r.json()).then(data => {
    	            		e.target.style.color = data.error ? 'red' : 'green';
    	            	})
                    });
	            }, !1, this);
	        }

            b = new lh;
            d = Jd("gtx-source-audio", c);
            Af(b, d);
            ph(b, g, e);
            b = new lh;
            // debugger;
            g = Jd("gtx-target-audio", c);
            Af(b, g);
            ph(b, k, f);
            e = "https://translate.google.com/?source=gtx_m#" + e + "/" + f + "/" + encodeURIComponent(window.selection);
            a ? (a = Id(document, "more"), a.setAttribute("href", e), c = new S("", void 0, 4), zf(c, Id(document, "new-translation")), Te(Id(document, "new-translation"), !0), c = Id(document, "translate-page"), Vd(a, rh("MSG_OPEN_IN_TRANSLATE")), c.className = "gtx-a", c.setAttribute("style", "margin-left: 0px;"), Te(a, !0)) : (a = Sd(document, "a"), a.id = "off", a.className = "gtx-a", a.setAttribute("target",
                "_blank"), Vd(a, rh("MSG_FOOTER_OPTIONS").toUpperCase()), a.setAttribute("href", chrome.runtime.getURL("options.html")), c.appendChild(a), a = Sd(document, "a"), a.id = "more", a.setAttribute("class", "gtx-a"), a.setAttribute("target", "_blank"), Vd(a, rh("MSG_MORE")), a.setAttribute("href", e), a.setAttribute("style", "color: #A2A2A2; float: right; padding-top: 16px;"), c.appendChild(a))
        } else Vd(Id(document, "translation"), rh("MSG_TRANSLATION_ERROR"))
    };
    Jj.prototype.b = function(a, b, c, d) {
        Kj(b, z(this.a, this, a, b, c), "ls", d.target.value)
    };
    var Lj = function() {},
        Mj = new Lj,
        Nj = ["click", G ? "keypress" : "keydown", "keyup"];
    Lj.prototype.listen = function(a, b, c, d, e) {
        var f = function(a) {
            var c = yc(b),
                e = a.target;
            e = y(e) && 1 == e.nodeType ? a.target.getAttribute("role") || null : null;
            // debugger;
            "click" == a.type && kc(a) ? c.call(d, a) : 13 != a.keyCode && 3 != a.keyCode || "keyup" == a.type ? 32 != a.keyCode || "keyup" != a.type || "button" != e && "tab" != e || (c.call(d, a), a.preventDefault()) : (a.type = "keypress", c.call(d, a))
        };
        f.ac = b;
        f.cc = d;
        e ? e.listen(a, Nj, f, c) : xc(a, Nj, f, c)
    };
    Lj.prototype.S = function(a, b, c, d, e) {
        for (var f, g = 0; f = Nj[g]; g++) {
            var k = a;
            var l = f;
            var m = !!c;
            l = mc(k) ? k.La(l, m) : k ? (k = Ac(k)) ? k.La(l, m) : [] : [];
            for (k = 0; m = l[k]; k++) {
                var v = m.listener;
                if (v.ac == b && v.cc == d) {
                    e ? e.S(a, f, m.listener, c, d) : Ec(a, f, m.listener, c, d);
                    break
                }
            }
        }
    };
    var Oj = function() {
        M.call(this);
        this.b = 0
    };
    B(Oj, M);
    Oj.prototype.onStop = function() {
        this.dispatchEvent("stop")
    };
    var Pj = function(a, b) {
            w(b) || (b = [b]);
            D(0 < b.length, "At least one Css3Property should be specified.");
            b = Ma(b, function(a) {
                if (q(a)) return a;
                Fa(a, "Expected css3 property to be an object.");
                var b = a.Lb + " " + a.duration + "s " + a.timing + " " + a.tb + "s";
                D(a.Lb && r(a.duration) && a.timing && r(a.tb), "Unexpected css3 property value: %s", b);
                return b
            });
            De(a, "transition", b.join(","))
        },
        Qj = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(function() {
            if (F) return I("10.0");
            var a = Sd(document, "DIV"),
                b = H ? "-webkit" :
                G ? "-moz" : F ? "-ms" : nb ? "-o" : null,
                c = {
                    transition: "opacity 1s linear"
                };
            b && (c[b + "-transition"] = "opacity 1s linear");
            b = {
                style: c
            };
            if (!vd.test("div")) throw Error("Invalid tag name <div>.");
            if ("DIV" in xd) throw Error("Tag name <div> is not allowed for SafeHtml.");
            c = null;
            var d = "";
            if (b)
                for (m in b) {
                    if (!vd.test(m)) throw Error('Invalid attribute name "' + m + '".');
                    var e = b[m];
                    if (null != e) {
                        var f = m;
                        var g = e;
                        if (g instanceof Vc) g = Wc(g);
                        else if ("style" == f.toLowerCase()) {
                            e = void 0;
                            if (!y(g)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' +
                                typeof g + " given: " + g);
                            if (!(g instanceof id)) {
                                var k = g;
                                g = "";
                                for (e in k) {
                                    if (!/^[-_a-zA-Z0-9]+$/.test(e)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + e);
                                    var l = k[e];
                                    null != l && (l = w(l) ? Ma(l, pd).join(" ") : pd(l), g += e + ":" + l + ";")
                                }
                                g ? (e = g, D(!/[<>]/.test(e), "Forbidden characters in style string: " + e), g = jd(g)) : g = kd
                            }
                            g instanceof id && g.constructor === id && g.b === hd ? e = g.a : (Ba("expected object of type SafeStyle, got '" + g + "' of type " + u(g)), e = "type_error:SafeStyle");
                            g = e
                        } else {
                            if (/^on/i.test(f)) throw Error('Attribute "' +
                                f + '" requires goog.string.Const value, "' + g + '" given.');
                            if (f.toLowerCase() in wd)
                                if (g instanceof Zc) g = $c(g);
                                else if (g instanceof cd) g = dd(g);
                            else if (q(g)) g = gd(g).Y();
                            else throw Error('Attribute "' + f + '" on tag "div" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + g + '" given.');
                        }
                        g.ka && (g = g.Y());
                        D(q(g) || r(g), "String or number value expected, got " + typeof g + " with value: " + g);
                        f = f + '="' + ua(String(g)) + '"';
                        d += " " + f
                    }
                }
            var m = "<div" + d;
            d = void 0;
            null != d ? w(d) || (d = [d]) : d = [];
            !0 === Tc.div ? (D(!d.length,
                "Void tag <div> does not allow content."), m += ">") : (c = yd(d), m += ">" + sd(c) + "</div>", c = c.ua());
            (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? c = 0 : c = null);
            b = td(m, c);
            Bd(a, b);
            a = a.firstChild;
            D(a.nodeType == Node.ELEMENT_NODE);
            b = a.style[xa("transition")];
            return "" != ("undefined" !== typeof b ? b : a.style[Ce(a, "transition")] || "")
        });
    var Rj = function(a, b, c, d, e) {
        Oj.call(this);
        this.a = a;
        this.i = b;
        this.j = c;
        this.c = d;
        this.o = w(e) ? e : [e]
    };
    B(Rj, Oj);
    h = Rj.prototype;
    h.play = function() {
        if (1 == this.b) return !1;
        this.dispatchEvent("begin");
        this.dispatchEvent("play");
        ia();
        this.b = 1;
        if (Qj()) return De(this.a, this.j), this.h = Vg(this.bc, void 0, this), !0;
        this.mb(!1);
        return !1
    };
    h.bc = function() {
        Re(this.a);
        Pj(this.a, this.o);
        De(this.a, this.c);
        this.h = Vg(z(this.mb, this, !1), 1E3 * this.i)
    };
    h.stop = function() {
        1 == this.b && this.mb(!0)
    };
    h.mb = function(a) {
        De(this.a, "transition", "");
        n.clearTimeout(this.h);
        De(this.a, this.c);
        ia();
        this.b = 0;
        if (a) this.onStop();
        else this.dispatchEvent("finish");
        this.dispatchEvent("end")
    };
    h.s = function() {
        this.stop();
        Rj.m.s.call(this)
    };
    h.pause = function() {
        D(!1, "Css3 transitions does not support pause action.")
    };
    var Sj = function(a, b, c, d) {
        return new Rj(a, .218, {
            opacity: c
        }, {
            opacity: d
        }, {
            Lb: "opacity",
            duration: .218,
            timing: b,
            tb: 0
        })
    };
    var Uj = function(a, b) {
        M.call(this);
        this.a = new qf(this);
        a = a || null;
        Tj(this);
        this.J = a;
        b && (this.xa = b)
    };
    B(Uj, M);
    h = Uj.prototype;
    h.J = null;
    h.ob = null;
    h.ga = !1;
    h.hb = -1;
    h.xa = "toggle_display";
    h.l = function() {
        return this.J
    };
    var Tj = function(a) {
        if (a.ga) throw Error("Can not change this state of the popup while showing.");
    };
    Uj.prototype.b = t;
    var Vj = function(a, b) {
        a.ga && a.dispatchEvent({
            type: "beforehide",
            target: b
        }) && (a.a && a.a.removeAll(), a.ga = !1, ia(), a.c ? (wc(a.c, "end", A(a.qb, b), !1, a), a.c.play()) : a.qb(b))
    };
    h = Uj.prototype;
    h.qb = function(a) {
        "toggle_display" == this.xa ? this.$b() : "move_offscreen" == this.xa && (this.J.style.top = "-10000px");
        this.dispatchEvent({
            type: "hide",
            target: a
        })
    };
    h.$b = function() {
        this.J.style.visibility = "hidden";
        Te(this.J, !1)
    };
    h.Kb = function() {
        this.dispatchEvent("show")
    };
    h.Jb = function(a) {
        a = a.target;
        Ud(this.J, a) || Wj(this, a) || 150 > ia() - this.hb || Vj(this, a)
    };
    h.Ib = function(a) {
        var b = Gd(this.J);
        if ("undefined" != typeof document.activeElement) {
            if (a = b.activeElement, !a || Ud(this.J, a) || "BODY" == a.tagName) return
        } else if (a.target != b) return;
        150 > ia() - this.hb || Vj(this)
    };
    var Wj = function(a, b) {
        return Na(a.ob || [], function(a) {
            return b === a || Ud(a, b)
        })
    };
    Uj.prototype.s = function() {
        Uj.m.s.call(this);
        this.a.X();
        fc(this.h);
        fc(this.c);
        delete this.J;
        delete this.a;
        delete this.ob
    };
    var Xj = function(a, b) {
        this.i = b || void 0;
        Uj.call(this, a)
    };
    B(Xj, Uj);
    Xj.prototype.b = function() {
        if (this.i) {
            var a = !this.ga && "move_offscreen" != this.xa,
                b = this.l();
            a && (b.style.visibility = "hidden", Te(b, !0));
            this.i.wb(b, 8, this.j);
            a && Te(b, !1)
        }
    };
    var Yj = function(a) {
        var b = '<div class="' + R("jfk-bubble") + '" role="alertdialog"' + (a.uid ? ' aria-describedby="' + R(a.uid) + '"' : "") + '><div class="' + R("jfk-bubble-content-id") + '"' + (a.uid ? ' id="' + R(a.uid) + '"' : "") + "></div>";
        if (a.dc) {
            a = b;
            b = '<div class="' + R("jfk-bubble-closebtn-id") + " " + R("jfk-bubble-closebtn") + '" aria-label="';
            var c = "Close".replace(jg, kg);
            b = a + (b + c + '" role="button" tabindex=0></div>')
        }
        b += '<div class="' + R("jfk-bubble-arrow-id") + " " + R("jfk-bubble-arrow") + '"><div class="' + R("jfk-bubble-arrowimplbefore") +
            '"></div><div class="' + R("jfk-bubble-arrowimplafter") + '"></div></div></div>';
        return fg(b)
    };
    Yj.a = "jfk.templates.bubble.main";
    var Zj = function(a) {
        N.call(this, a);
        this.v = new bh("jfk-bubble", !0);
        this.c = new Xj;
        this.V = []
    };
    B(Zj, N);
    Zj.prototype.T = !1;
    var ak = function(a, b) {
        a = a.Ya();
        if (b && a)
            if (q(b)) Vd(a, b);
            else if (b instanceof ue) {
            if (b.aa === re) b = ud(b.toString());
            else {
                if (b.aa !== pe) throw Error("Sanitized content was not of kind TEXT or HTML.");
                var c = Xc("Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value.");
                var d = b.toString();
                b = b.sa;
                Da(Wc(c), "must provide justification");
                D(!/^[\s\xa0]*$/.test(Wc(c)), "must provide non-empty justification");
                b = td(d, b || null)
            }
            Bd(a, b)
        } else b instanceof rd ? Bd(a, b) : (Bd(a, zd), a.appendChild(b))
    };
    h = Zj.prototype;
    h.Ya = function() {
        return this.a ? Jd("jfk-bubble-content-id", this.a || this.h.a) : null
    };
    h.Xa = function() {
        this.a = ze(Yj, {
            dc: !0,
            uid: "bubble-" + (this[da] || (this[da] = ++ea))
        }, this.h);
        ak(this, this.$);
        Te(this.l(), !1);
        var a = this.c,
            b = this.l();
        Tj(a);
        a.J = b;
        if (!qb) {
            a = this.c;
            b = Sj(this.l(), "ease-out", 0, 1);
            var c = Sj(this.l(), "ease-in", 1, 0);
            a.h = b;
            a.c = c
        }
        Nc(this.l(), this.V)
    };
    h.ba = function() {
        Zj.m.ba.call(this);
        yf(this).listen(this.c, ["beforeshow", "show", "beforehide", "hide"], this.Zb);
        var a = yf(this),
            b = this.a ? Jd("jfk-bubble-closebtn-id", this.a || this.h.a) : null;
        Mj.listen(b, A(this.Hb, !1), void 0, a.b || a, a);
        a = this.l();
        D(a, "getElement() returns null.");
        b = this.a ? Jd("jfk-bubble-arrow-id", this.a || this.h.a) : null;
        D(b, "No arrow element is found!");
        var c = this.v;
        c.a = a;
        c.i = b;
        a = this.c;
        a.i = this.v || void 0;
        a.ga && a.b()
    };
    h.Hb = function(a) {
        var b = this.c;
        b.h && b.h.stop();
        b.c && b.c.stop();
        if (a) {
            if (!b.ga && b.dispatchEvent("beforeshow")) {
                if (!b.J) throw Error("Caller must call setElement before trying to show the popup");
                b.b();
                a = Gd(b.J);
                b.a.listen(a, "mousedown", b.Jb, !0);
                if (F) {
                    try {
                        var c = a.activeElement
                    } catch (e) {}
                    for (; c && "IFRAME" == c.nodeName;) {
                        try {
                            var d = c.contentDocument || c.contentWindow.document
                        } catch (e) {
                            break
                        }
                        a = d;
                        c = a.activeElement
                    }
                    b.a.listen(a, "mousedown", b.Jb, !0);
                    b.a.listen(a, "deactivate", b.Ib)
                } else b.a.listen(a, "blur", b.Ib);
                "toggle_display" == b.xa ? (b.J.style.visibility = "visible", Te(b.J, !0)) : "move_offscreen" == b.xa && b.b();
                b.ga = !0;
                b.hb = ia();
                b.h ? (wc(b.h, "end", b.Kb, !1, b), b.h.play()) : b.Kb()
            }
        } else Vj(b)
    };
    h.s = function() {
        this.c.X();
        delete this.c;
        Zj.m.s.call(this)
    };
    h.Fb = function() {
        Ne(this.l());
        return !1
    };
    h.Zb = function(a) {
        if ("show" == a.type || "hide" == a.type) {
            var b = yf(this),
                c = this.h;
            c = F ? Nd(c.a) : c.a;
            "show" == a.type ? b.listen(c, "scroll", this.Fb) : b.S(c, "scroll", this.Fb)
        }
        b = this.dispatchEvent(a.type);
        this.T && "hide" == a.type && this.X();
        return b
    };
    var bk = function(a) {
            Zj.call(this);
            this.T = !0;
            D(!this.L, "Must call addClassName() before rendering");
            this.V.push("gtx-bubble");
            this.v.b = a;
            this.c.ga && this.c.b();
            var b = 2;
            parseInt(a.style.top, 10) - Md(document).scrollTop + parseInt(a.style.height, 10) / 2 < window.innerHeight / 2 && (b = 1);
            var c = 2;
            a = parseInt(a.style.left, 10) + parseInt(a.style.width, 10) / 2;
            217 >= a ? c = 0 : a >= window.innerWidth - 217 && (c = 1);
            D(!this.L, "Must call setPosition() before rendering");
            a = this.v;
            null != b && (a.Ua = b);
            null != c && (a.Ta = c);
            r(0) && (a.nb = Math.max(0,
                15));
            r(-10) && (a.jb = -10)
        },
        ck, dk;
    B(bk, Zj);
    bk.prototype.s = function() {
        bk.m.s.call(this);
        chrome.runtime.sendMessage({
            bubbleClosed: !0
        });
        Td(Id(document, "gtx-anchor"))
    };
    bk.prototype.j = null;
    bk.prototype.D = null;
    bk.prototype.W = function(a, b) {
        var c = document.createElement("style");
        c.innerHTML = b;
        this.D.appendChild(c);
        b = this.j;
        D(q(b) || b.nodeType || b instanceof ue || b instanceof rd, "Content must be a string or HTML.");
        this.$ = b;
        ak(this, b);
        c = this.j.cloneNode(!1);
        c.id = "bubble-content";
        c.className = "gtx-content";
        this.D.appendChild(c);
        b = document.createElement("div");
        b.className = "content";
        b.setAttribute("style", "margin: 0");
        c.appendChild(b);
        c = this.j.cloneNode(!1);
        c.id = "translation";
        c.style.display = "inline";
        b.appendChild(c);
        ek.a(!1, window.selection, c, a);
        this.c.ga && this.c.b()
    };
    var gk = function(a, b, c) {
            var d = Id(document, "gtx-trans");
            Gc(d);
            Td(d);
            Kj(b, A(fk, a), "icon", c)
        },
        kk = function(a) {
            if ("0" != Th.a) {
                var b = window.getSelection(),
                    c = b.toString().trim();
                hk(c) && (Qh ? ik(b, function(d) {
                    if (!Uh(d)) {
                        if ("zh" == d || "zh-Hant" == d) d = "zh-CN";
                        jk(a, b, c, d)
                    }
                }) : !Qh && "1" == Th.a && Th.i && Uh(ck) || jk(a, b, c))
            }
        },
        lk = function(a, b, c) {
            if (a) {
                var d = a.innerText || a.textContent || "";
                d = decodeURIComponent(encodeURIComponent(d.trim()));
                chrome.i18n.detectLanguage(d, function(d) {
                    d.isReliable ? c(d.languages[0].language) : 0 < b ? lk(a.parentNode,
                        b - 1, c) : c("")
                })
            } else c("")
        },
        jk = function(a, b, c, d) {
            b = b.getRangeAt(0).getBoundingClientRect();
            if (0 != b.top || 0 != b.left)
                if ("1" == Th.a) {
                    var e = Sd(document, "div");
                    e.className = "gtx-trans-icon";
                    var f = Sd(document, "div");
                    f.appendChild(e);
                    f.id = "gtx-trans";
                    f.style.position = "absolute";
                    f.style.left = a.clientX + Md(document).scrollLeft - 13 + "px";
                    a = a.clientY;
                    a - b.top > b.height / 2 ? a = b.bottom + 1 : a = b.top - 1 - 27;
                    f.style.top = a + Md(document).scrollTop + "px";
                    document.body.appendChild(f);
                    xc(f, "click", A(gk, b, c, d))
                } else Kj(c, A(fk, b), "bubble",
                    d)
        },
        ik = function(a, b) {
            var c = a.toString().trim();
            c = decodeURIComponent(encodeURIComponent(c));
            chrome.i18n.detectLanguage(c, function(c) {
                var d = null;
                if (c.isReliable) return d = c.languages[0].language, b(d);
                lk(a.anchorNode, 3, function(a) {
                    b(a)
                })
            })
        },
        hk = function(a) {
            var b = /^[0-9!@#$\u20ac\u00a3%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
            return 0 < a.length && !Jd("gtx-bubble") && 250 > a.length && !b.test(a) && 400 < window.innerWidth
        },
        fk = function(a, b) {
            if ("1" == Th.a || b.src != Rh(Th)) {
                var c = Sd(document, "div");
                c.id = "gtx-anchor";
                c.style.position =
                    "absolute";
                c.style.visibility = "hidden";
                c.style.left = String(a.left + Md(document).scrollLeft + "px");
                c.style.top = String(a.top + Md(document).scrollTop + "px");
                c.style.width = String(a.right - a.left + 1 + "px");
                c.style.height = String(a.height + "px");
                document.body.appendChild(c);
                window.a = new bk(c);
                zf(window.a, document.body);
                a = window.a;
                a.j = document.createElement("div");
                a.j.id = "gtx-host";
                a.j.setAttribute("style", "min-width: 200px; max-width: 400px;");
                a.j.createShadowRoot ? a.D = a.j.createShadowRoot() : a.D = a.j.webkitCreateShadowRoot();
                mk(chrome.runtime.getURL("popup_css_compiled.css"), z(a.W, a, b));
                window.a.Hb(!0)
            }
        },
        mk = function(a, b) {
            var c = new XMLHttpRequest;
            c.open("GET", a, !0);
            c.onload = function() {
                var a = null;
                200 === c.status && (a = c.response);
                return b(a)
            };
            c.send()
        };
    chrome.runtime.onMessage.addListener(function(a) {
    	console.log('onMessage.addListener, a=', a)
    	//debugger;
        a["gtx.detected"] && (ck = a["gtx.detected"], kk(dk))
    });
    var Th = new Ph,
        ek = Jj.N();
    xc(window, "mouseup", function(a) {
    	// debugger;
        if (0 == a.button && !Id(document, "gtx-trans")) {
            try {
            	// debugger;
                chrome.runtime.sendMessage({
                    test: 1
                })
            } catch (b) {
                return
            }
            Qh || "1" != Th.a || !Th.i || ck ? window.setTimeout(A(kk, a), 0) : (dk = a, chrome.runtime.sendMessage({
                detectLanguage: 1
            }))
        }
    });
    xc(window, "mousedown", function(a) {
        var b = Id(document, "gtx-trans");
        b && (Ud(b, a.target) ? a.preventDefault() : (Gc(b), Td(b)));
        a.target instanceof HTMLElement && -1 != a.target.className.indexOf("jfk-bubble-closebtn") && a.preventDefault()
    }, !0);
    var nk = function() {
            window.a && window.a.X()
        },
        ok = ["disposeWindowBubble"],
        pk = n;
    ok[0] in pk || !pk.execScript || pk.execScript("var " + ok[0]);
    for (var qk; ok.length && (qk = ok.shift());) !ok.length && p(nk) ? pk[qk] = nk : pk[qk] && pk[qk] !== Object.prototype[qk] ? pk = pk[qk] : pk = pk[qk] = {};
})();