/* Copyright 2014 Google */
(function() {
  var k = this,
    m = function() {},
    n = function(a) {
      var b = typeof a;
      if ("object" == b)
        if (a) {
          if (a instanceof Array) return "array";
          if (a instanceof Object) return b;
          var c = Object.prototype.toString.call(a);
          if ("[object Window]" == c) return "object";
          if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
          if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
      else if ("function" == b && "undefined" == typeof a.call) return "object";
      return b
    },
    p = function(a) {
      return "function" == n(a)
    },
    aa = function(a) {
      var b = typeof a;
      return "object" == b && null != a || "function" == b
    },
    ba = function(a, b, c) {
      return a.call.apply(a.bind, arguments)
    },
    ca = function(a, b, c) {
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
        return a.apply(b,
          arguments)
      }
    },
    q = function(a, b, c) {
      Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? q = ba : q = ca;
      return q.apply(null, arguments)
    },
    da = Date.now || function() {
      return +new Date
    },
    r = function(a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.J = b.prototype;
      a.prototype = new c;
      a.prototype.constructor = a;
      a.I = function(a, c, f) {
        for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
        return b.prototype[c].apply(a, d)
      }
    };
  var t = function(a, b) {
      return a.replace(/\{\{\$.*?\}\}/g, function(a) {
        a = a.substr(3, a.length - 5);
        return String(b[a]) || ""
      })
    },
    u = function(a) {
      a = String(a).toLowerCase().replace("_", "-");
      if ("zh-cn" == a) return "zh-CN";
      if ("zh-tw" == a) return "zh-TW";
      var b = a.indexOf("-");
      a = 0 <= b ? a.substring(0, b) : a;
      return "zh" == a ? "zh-CN" : a
    },
    ea = function(a, b) {
      return "https://translate.google.com/?source=gtx_c#auto/" + a + "/" + encodeURIComponent(b)
    };
  var v = function(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, v);
    else {
      var b = Error().stack;
      b && (this.stack = b)
    }
    a && (this.message = String(a))
  };
  r(v, Error);
  v.prototype.name = "CustomError";
  var fa = function(a, b) {
      for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
      return d + c.join("%s")
    },
    ha = String.prototype.trim ? function(a) {
      return a.trim()
    } : function(a) {
      return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    },
    w = function(a, b) {
      return a < b ? -1 : a > b ? 1 : 0
    };
  var x = function(a, b) {
    b.unshift(a);
    v.call(this, fa.apply(null, b));
    b.shift()
  };
  r(x, v);
  x.prototype.name = "AssertionError";
  var ja = function(a, b, c, d) {
      var e = "Assertion failed";
      if (c) {
        e += ": " + c;
        var f = d
      } else a && (e += ": " + a, f = b);
      throw new x("" + e, f || []);
    },
    y = function(a, b, c) {
      a || ja("", null, b, Array.prototype.slice.call(arguments, 2))
    },
    ka = function(a, b) {
      throw new x("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    },
    z = function(a, b, c) {
      p(a) || ja("Expected function but got %s: %s.", [n(a), a], b, Array.prototype.slice.call(arguments, 2))
    };
  var la = Array.prototype.some ? function(a, b, c) {
    y(null != a.length);
    return Array.prototype.some.call(a, b, c)
  } : function(a, b, c) {
    for (var d = a.length, e = "string" == typeof a ? a.split("") : a, f = 0; f < d; f++)
      if (f in e && b.call(c, e[f], f, a)) return !0;
    return !1
  };
  var ma = function(a, b) {
      for (var c in a) b.call(void 0, a[c], c, a)
    },
    na = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
    oa = function(a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < na.length; f++) c = na[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
      }
    };
  var A = function() {
    this.s = "";
    this.a = pa
  };
  A.prototype.H = !0;
  A.prototype.toString = function() {
    return "TrustedResourceUrl{" + this.s + "}"
  };
  var B = function(a) {
      if (a instanceof A && a.constructor === A && a.a === pa) return a.s;
      ka("expected object of type TrustedResourceUrl, got '" + a + "' of type " + n(a));
      return "type_error:TrustedResourceUrl"
    },
    pa = {},
    qa = function(a) {
      var b = new A;
      b.s = a;
      return b
    };
  var C;
  a: {
    var ra = k.navigator;
    if (ra) {
      var sa = ra.userAgent;
      if (sa) {
        C = sa;
        break a
      }
    }
    C = ""
  }
  var D = function(a) {
    return -1 != C.indexOf(a)
  };
  var ua = function(a, b) {
    var c = ta;
    Object.prototype.hasOwnProperty.call(c, a) || (c[a] = b(a))
  };
  var va = D("Opera"),
    E = D("Trident") || D("MSIE"),
    wa = D("Edge"),
    F = D("Gecko") && !(-1 != C.toLowerCase().indexOf("webkit") && !D("Edge")) && !(D("Trident") || D("MSIE")) && !D("Edge"),
    xa = -1 != C.toLowerCase().indexOf("webkit") && !D("Edge"),
    ya = function() {
      var a = k.document;
      return a ? a.documentMode : void 0
    },
    G;
  a: {
    var H = "",
      I = function() {
        var a = C;
        if (F) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (wa) return /Edge\/([\d\.]+)/.exec(a);
        if (E) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (xa) return /WebKit\/(\S+)/.exec(a);
        if (va) return /(?:Version)[ \/]?(\S+)/.exec(a)
      }();I && (H = I ? I[1] : "");
    if (E) {
      var J = ya();
      if (null != J && J > parseFloat(H)) {
        G = String(J);
        break a
      }
    }
    G = H
  }
  var za = G,
    ta = {},
    Aa = function(a) {
      ua(a, function() {
        for (var b = 0, c = ha(String(za)).split("."), d = ha(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
          var g = c[f] || "",
            h = d[f] || "";
          do {
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
            h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
            if (0 == g[0].length && 0 == h[0].length) break;
            b = w(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || w(0 == g[2].length, 0 == h[2].length) || w(g[2], h[2]);
            g = g[3];
            h = h[3]
          } while (0 == b)
        }
        return 0 <= b
      })
    },
    Ba;
  var Ca = k.document;
  Ba = Ca && E ? ya() || ("CSS1Compat" == Ca.compatMode ? parseInt(za, 10) : 5) : void 0;
  var K;
  if (!(K = !F && !E)) {
    var Da;
    if (Da = E) Da = 9 <= Number(Ba);
    K = Da
  }
  K || F && Aa("1.9.1");
  E && Aa("9");
  var Ea = function(a, b) {
    var c = (c = a && a.ownerDocument) && (c.defaultView || c.parentWindow) || k;
    "undefined" != typeof c.HTMLScriptElement && "undefined" != typeof c.Location && "undefined" != typeof c.Element && y(a && (a instanceof c.HTMLScriptElement || !(a instanceof c.Location || a instanceof c.Element)), "Argument is not a %s (or a non-Element, non-Location mock); got: %s", "HTMLScriptElement", aa(a) ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : void 0 === a ? "undefined" : null === a ? "null" : typeof a);
    a.src = B(b)
  };
  var Ga = function(a, b) {
      ma(b, function(b, d) {
        b && b.H && (b = b.s);
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Fa.hasOwnProperty(d) ? a.setAttribute(Fa[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
      })
    },
    Fa = {
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
    };
  var Ha = function(a, b, c) {
    this.f = c;
    this.c = a;
    this.g = b;
    this.b = 0;
    this.a = null
  };
  Ha.prototype.get = function() {
    if (0 < this.b) {
      this.b--;
      var a = this.a;
      this.a = a.next;
      a.next = null
    } else a = this.c();
    return a
  };
  var Ia = function(a, b) {
    a.g(b);
    a.b < a.f && (a.b++, b.next = a.a, a.a = b)
  };
  var Ja = function(a) {
      k.setTimeout(function() {
        throw a;
      }, 0)
    },
    Ka, La = function() {
      var a = k.MessageChannel;
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
        a = q(function(a) {
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
          if (void 0 !== c.next) {
            c = c.next;
            var a = c.w;
            c.w = null;
            a()
          }
        };
        return function(a) {
          d.next = {
            w: a
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
          k.setTimeout(a, 0)
        }
    };
  var Ma = function() {
      this.b = this.a = null
    },
    Oa = new Ha(function() {
      return new Na
    }, function(a) {
      a.reset()
    }, 100);
  Ma.prototype.add = function(a, b) {
    var c = Oa.get();
    c.set(a, b);
    this.b ? this.b.next = c : (y(!this.a), this.a = c);
    this.b = c
  };
  Ma.prototype.remove = function() {
    var a = null;
    this.a && (a = this.a, this.a = this.a.next, this.a || (this.b = null), a.next = null);
    return a
  };
  var Na = function() {
    this.next = this.b = this.a = null
  };
  Na.prototype.set = function(a, b) {
    this.a = a;
    this.b = b;
    this.next = null
  };
  Na.prototype.reset = function() {
    this.next = this.b = this.a = null
  };
  var Sa = function(a, b) {
      L || Pa();
      Qa || (L(), Qa = !0);
      Ra.add(a, b)
    },
    L, Pa = function() {
      if (-1 != String(k.Promise).indexOf("[native code]")) {
        var a = k.Promise.resolve(void 0);
        L = function() {
          a.then(Ta)
        }
      } else L = function() {
        var a = Ta;
        !p(k.setImmediate) || k.Window && k.Window.prototype && !D("Edge") && k.Window.prototype.setImmediate == k.setImmediate ? (Ka || (Ka = La()), Ka(a)) : k.setImmediate(a)
      }
    },
    Qa = !1,
    Ra = new Ma,
    Ta = function() {
      for (var a; a = Ra.remove();) {
        try {
          a.a.call(a.b)
        } catch (b) {
          Ja(b)
        }
        Ia(Oa, a)
      }
      Qa = !1
    };
  var Ua = function(a) {
      a.prototype.then = a.prototype.then;
      a.prototype.$goog_Thenable = !0
    },
    Va = function(a) {
      if (!a) return !1;
      try {
        return !!a.$goog_Thenable
      } catch (b) {
        return !1
      }
    };
  var O = function(a, b) {
      this.a = 0;
      this.i = void 0;
      this.f = this.b = this.c = null;
      this.g = this.h = !1;
      if (a != m) try {
        var c = this;
        a.call(b, function(a) {
          M(c, 2, a)
        }, function(a) {
          if (!(a instanceof N)) try {
            if (a instanceof Error) throw a;
            throw Error("Promise rejected.");
          } catch (e) {}
          M(c, 3, a)
        })
      } catch (d) {
        M(this, 3, d)
      }
    },
    Wa = function() {
      this.next = this.f = this.c = this.b = this.a = null;
      this.g = !1
    };
  Wa.prototype.reset = function() {
    this.f = this.c = this.b = this.a = null;
    this.g = !1
  };
  var Xa = new Ha(function() {
      return new Wa
    }, function(a) {
      a.reset()
    }, 100),
    Ya = function(a, b, c) {
      var d = Xa.get();
      d.b = a;
      d.c = b;
      d.f = c;
      return d
    };
  O.prototype.then = function(a, b, c) {
    null != a && z(a, "opt_onFulfilled should be a function.");
    null != b && z(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
    return Za(this, p(a) ? a : null, p(b) ? b : null, c)
  };
  Ua(O);
  O.prototype.cancel = function(a) {
    0 == this.a && Sa(function() {
      var b = new N(a);
      $a(this, b)
    }, this)
  };
  var $a = function(a, b) {
      if (0 == a.a)
        if (a.c) {
          var c = a.c;
          if (c.b) {
            for (var d = 0, e = null, f = null, g = c.b; g && (g.g || (d++, g.a == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
            e && (0 == c.a && 1 == d ? $a(c, b) : (f ? (d = f, y(c.b), y(null != d), d.next == c.f && (c.f = d), d.next = d.next.next) : ab(c), bb(c, e, 3, b)))
          }
          a.c = null
        } else M(a, 3, b)
    },
    db = function(a, b) {
      a.b || 2 != a.a && 3 != a.a || cb(a);
      y(null != b.b);
      a.f ? a.f.next = b : a.b = b;
      a.f = b
    },
    Za = function(a, b, c, d) {
      var e = Ya(null, null, null);
      e.a = new O(function(a, g) {
        e.b = b ? function(c) {
          try {
            var e = b.call(d, c);
            a(e)
          } catch (ia) {
            g(ia)
          }
        } :
          a;
        e.c = c ? function(b) {
          try {
            var e = c.call(d, b);
            void 0 === e && b instanceof N ? g(b) : a(e)
          } catch (ia) {
            g(ia)
          }
        } : g
      });
      e.a.c = a;
      db(a, e);
      return e.a
    };
  O.prototype.m = function(a) {
    y(1 == this.a);
    this.a = 0;
    M(this, 2, a)
  };
  O.prototype.o = function(a) {
    y(1 == this.a);
    this.a = 0;
    M(this, 3, a)
  };
  var M = function(a, b, c) {
      if (0 == a.a) {
        a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
        a.a = 1;
        a: {
          var d = c,
            e = a.m,
            f = a.o;
          if (d instanceof O) {
            null != e && z(e, "opt_onFulfilled should be a function.");
            null != f && z(f, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
            db(d, Ya(e || m, f || null, a));
            var g = !0
          } else if (Va(d)) d.then(e, f, a),
          g = !0;
          else {
            if (aa(d)) try {
              var h = d.then;
              if (p(h)) {
                eb(d, h, e, f, a);
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
                    (a.i = c, a.a = b, a.c = null, cb(a), 3 != b || c instanceof N || fb(a, c))
      }
    },
    eb = function(a, b, c, d, e) {
      var f = !1,
        g = function(a) {
          f || (f = !0, c.call(e, a))
        },
        h = function(a) {
          f || (f = !0, d.call(e, a))
        };
      try {
        b.call(a, g, h)
      } catch (l) {
        h(l)
      }
    },
    cb = function(a) {
      a.h || (a.h = !0, Sa(a.l, a))
    },
    ab = function(a) {
      var b = null;
      a.b && (b = a.b, a.b = b.next, b.next = null);
      a.b || (a.f = null);
      null != b && y(null != b.b);
      return b
    };
  O.prototype.l = function() {
    for (var a; a = ab(this);) bb(this, a, this.a, this.i);
    this.h = !1
  };
  var bb = function(a, b, c, d) {
      if (3 == c && b.c && !b.g)
        for (; a && a.g; a = a.c) a.g = !1;
      if (b.a) b.a.c = null, gb(b, c, d);
      else try {
        b.g ? b.b.call(b.f) : gb(b, c, d)
      } catch (e) {
        hb.call(null, e)
      }
      Ia(Xa, b)
    },
    gb = function(a, b, c) {
      2 == b ? a.b.call(a.f, c) : a.c && a.c.call(a.f, c)
    },
    fb = function(a, b) {
      a.g = !0;
      Sa(function() {
        a.g && hb.call(null, b)
      })
    },
    hb = Ja,
    N = function(a) {
      v.call(this, a)
    };
  r(N, v);
  N.prototype.name = "cancel";
  /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
  var P = function(a, b) {
    this.g = [];
    this.F = a;
    this.C = b || null;
    this.f = this.a = !1;
    this.c = void 0;
    this.m = this.o = this.i = !1;
    this.h = 0;
    this.b = null;
    this.l = 0
  };
  P.prototype.cancel = function(a) {
    if (this.a) this.c instanceof P && this.c.cancel();
    else {
      if (this.b) {
        var b = this.b;
        delete this.b;
        a ? b.cancel(a) : (b.l--, 0 >= b.l && b.cancel())
      }
      this.F ? this.F.call(this.C, this) : this.m = !0;
      this.a || ib(this, new Q)
    }
  };
  P.prototype.B = function(a, b) {
    this.i = !1;
    jb(this, a, b)
  };
  var jb = function(a, b, c) {
      a.a = !0;
      a.c = c;
      a.f = !b;
      kb(a)
    },
    lb = function(a) {
      if (a.a) {
        if (!a.m) throw new R;
        a.m = !1
      }
    },
    ib = function(a, b) {
      lb(a);
      mb(b);
      jb(a, !1, b)
    },
    mb = function(a) {
      y(!(a instanceof P), "An execution sequence may not be initiated with a blocking Deferred.")
    },
    nb = function(a, b, c, d) {
      y(!a.o, "Blocking Deferreds can not be re-used");
      a.g.push([b, c, d]);
      a.a && kb(a)
    };
  P.prototype.then = function(a, b, c) {
    var d, e, f = new O(function(a, b) {
      d = a;
      e = b
    });
    nb(this, d, function(a) {
      a instanceof Q ? f.cancel() : e(a)
    });
    return f.then(a, b, c)
  };
  Ua(P);
  P.prototype.isError = function(a) {
    return a instanceof Error
  };
  var ob = function(a) {
      return la(a.g, function(a) {
        return p(a[1])
      })
    },
    kb = function(a) {
      if (a.h && a.a && ob(a)) {
        var b = a.h,
          c = S[b];
        c && (k.clearTimeout(c.j), delete S[b]);
        a.h = 0
      }
      a.b && (a.b.l--, delete a.b);
      b = a.c;
      for (var d = c = !1; a.g.length && !a.i;) {
        var e = a.g.shift(),
          f = e[0],
          g = e[1];
        e = e[2];
        if (f = a.f ? g : f) try {
          var h = f.call(e || a.C, b);
          void 0 !== h && (a.f = a.f && (h == b || a.isError(h)), a.c = b = h);
          if (Va(b) || "function" === typeof k.Promise && b instanceof k.Promise) d = !0, a.i = !0
        } catch (l) {
          b = l, a.f = !0, ob(a) || (c = !0)
        }
      }
      a.c = b;
      d && (h = q(a.B, a, !0), d = q(a.B, a, !1),
      b instanceof P ? (nb(b, h, d), b.o = !0) : b.then(h, d));
      c && (b = new pb(b), S[b.j] = b, a.h = b.j)
    },
    R = function() {
      v.call(this)
    };
  r(R, v);
  R.prototype.message = "Deferred has already fired";
  R.prototype.name = "AlreadyCalledError";
  var Q = function() {
    v.call(this)
  };
  r(Q, v);
  Q.prototype.message = "Deferred was canceled";
  Q.prototype.name = "CanceledError";
  var pb = function(a) {
    this.j = k.setTimeout(q(this.b, this), 0);
    this.a = a
  };
  pb.prototype.b = function() {
    y(S[this.j], "Cannot throw an error that is not scheduled.");
    delete S[this.j];
    throw this.a;
  };
  var S = {};
  var tb = function(a, b) {
      var c = b || {};
      b = c.document || document;
      var d = B(a),
        e = document.createElement("SCRIPT"),
        f = {
          D: e,
          u: void 0
        },
        g = new P(qb, f),
        h = null,
        l = null != c.timeout ? c.timeout : 5E3;
      0 < l && (h = window.setTimeout(function() {
        T(e, !0);
        ib(g, new rb(1, "Timeout reached for loading script " + d))
      }, l), f.u = h);
      e.onload = e.onreadystatechange = function() {
        e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (T(e, c.G || !1, h), lb(g), mb(null), jb(g, !0, null))
      };
      e.onerror = function() {
        T(e, !0, h);
        ib(g, new rb(0, "Error while loading script " +
                    d))
      };
      f = c.attributes || {};
      oa(f, {
        type: "text/javascript",
        charset: "UTF-8"
      });
      Ga(e, f);
      Ea(e, a);
      sb(b).appendChild(e);
      return g
    },
    sb = function(a) {
      var b;
      return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement
    },
    qb = function() {
      if (this && this.D) {
        var a = this.D;
        a && "SCRIPT" == a.tagName && T(a, !0, this.u)
      }
    },
    T = function(a, b, c) {
      null != c && k.clearTimeout(c);
      a.onload = m;
      a.onerror = m;
      a.onreadystatechange = m;
      b && window.setTimeout(function() {
        a && a.parentNode && a.parentNode.removeChild(a)
      }, 0)
    },
    rb = function(a,
      b) {
      var c = "Jsloader error (code #" + a + ")";
      b && (c += ": " + b);
      v.call(this, c);
      this.code = a
    };
  r(rb, v);
  var ub = function(a, b) {
      this.b = a instanceof A ? a : qa(String(a));
      this.a = b ? b : "callback";
      this.u = 5E3
    },
    vb = 0;
  ub.prototype.send = function(a, b, c, d) {
    if (a) {
      var e = {};
      for (f in a) e[f] = a[f];
      a = e
    } else a = {};
    d = d || "_" + (vb++).toString(36) + da().toString(36);
    e = "_callbacks___" + d;
    b && (k[e] = wb(d, b), a[this.a] = e);
    b = {
      timeout: this.u,
      G: !0
    };
    e = B(this.b);
    var f = /\?/.test(e) ? "&" : "?";
    for (l in a)
      for (var g = "array" == n(a[l]) ? a[l] : [a[l]], h = 0; h < g.length; h++) null != g[h] && (e += f + encodeURIComponent(l) + "=" + encodeURIComponent(String(g[h])), f = "&");
    var l = qa(e);
    l = tb(l, b);
    nb(l, null, xb(d, a, c), void 0);
    return {
      j: d,
      A: l
    }
  };
  ub.prototype.cancel = function(a) {
    a && (a.A && a.A.cancel(), a.j && yb(a.j, !1))
  };
  var xb = function(a, b, c) {
      return function() {
        yb(a, !1);
        c && c(b)
      }
    },
    wb = function(a, b) {
      return function(c) {
        yb(a, !0);
        b.apply(void 0, arguments)
      }
    },
    yb = function(a, b) {
      a = "_callbacks___" + a;
      if (k[a])
        if (b) try {
          delete k[a]
        } catch (c) {
          k[a] = void 0
        } else k[a] = m
    };
  var U = function(a) {
      this.b = [];
      chrome.i18n.getAcceptLanguages(q(this.i, this));
      this.a = "";
      this.f = "1";
      this.c = [];
      this.h = !!a;
      chrome.storage.local.get(null, q(this.m, this));
      zb(this)
    },
    Bb = function() {
      var a = Ab;
      if ("" != a.a) a = a.a;
      else a: {
        for (var b = 0; b < a.b.length; b++) {
          var c = u(a.b[b]);
          if (a.c[c]) {
            a = c;
            break a
          }
        }
        a = "en"
      }
      return a
    };
  U.prototype.m = function(a) {
    "gtxTargetLang" in a && (this.a = a.gtxTargetLang);
    "gtxShowBubble" in a && (this.f = a.gtxShowBubble);
    "gtxSourceLangList" in a && Cb(this, a.gtxSourceLangList);
    "gtxTargetLangList" in a && (this.c = Cb(this, a.gtxTargetLangList));
    this.loaded = !0;
    if (this.h) {
      var b = (new Date).getTime(),
        c = "gtxTimeStamp" in a ? a.gtxTimeStamp : 0,
        d = chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : "en";
      a = "gtxDisplayLanguage" in a ? a.gtxDisplayLanguage : "";
      (864E5 < Math.abs(b - c) || d != a) && (new ub("https://translate.googleapis.com/translate_a/l",
        "cb")).send({
        client: "gtx",
        hl: d
      }, q(this.l, this, d))
    }
  };
  var Cb = function(a, b) {
    var c = [],
      d;
    for (d in b) c.push({
      code: d,
      name: b[d]
    });
    c.sort(a.g);
    a = {};
    for (b = 0; b < c.length; b++) a[c[b].code] = c[b].name;
    return a
  };
  U.prototype.g = function(a, b) {
    return a.name.localeCompare(b.name)
  };
  var zb = function(a) {
    chrome.storage.onChanged.addListener(function(b) {
      b.gtxTargetLang && (a.a = b.gtxTargetLang.newValue);
      b.gtxShowBubble && (a.f = b.gtxShowBubble.newValue)
    })
  };
  U.prototype.i = function(a) {
    this.b = a
  };
  U.prototype.l = function(a, b) {
    var c = (new Date).getTime(),
      d = {};
    d.gtxSourceLangList = b.sl;
    d.gtxTargetLangList = b.tl;
    d.gtxDisplayLanguage = a;
    d.gtxTimeStamp = c;
    chrome.storage.local.set(d);
    this.c = b.tl
  };
  var Db = t("(function(){({{$code}})();})();", {
      code: window.injection.toString()
    }),
    Eb = t("(function(){({{$code}})();})();", {
      code: window.injector.toString()
    });
  delete window.injector;
  delete window.injection;

  function Fb(a, b, c) {
    b = {
      pageLang: b,
      userLang: c
    };
    b.content = t(Db, b).replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/\n/g, "\\n");
    chrome.tabs.executeScript(a, {
      code: t(Eb, b)
    }, function() {
      chrome.runtime.lastError && console.error(chrome.runtime.lastError.message)
    })
  }
  var Gb = function(a) {
    this.c = a;
    this.v = this.a = !1
  };
  Gb.prototype.popup = function() {
    this.a || this.v || (this.a = !0, this.b = "", chrome.tabs.detectLanguage(this.c, q(this.f, this)))
  };
  Gb.prototype.f = function(a) {
    if (!this.v) {
      if (!a || "und" == a || a.match("invalid")) a = "auto";
      this.b = a;
      a = u(Bb());
      var b = u(this.b);
      Fb(this.c, b, a);
      this.a = !1
    }
  };
  var V = function() {
    this.a = {}
  };
  V.prototype.attach = function(a) {
    this.a[a] || (this.a[a] = new Gb(a));
    this.a[a].popup()
  };
  V.prototype.detach = function(a) {
    this.a[a] && (this.a[a].v = !0, delete this.a[a])
  };
  var Hb = new V,
    Ab = new U(!0),
    W = document.createElement("audio");
  chrome.runtime.onMessage.addListener(function(a, b) {
    a.audioSrc ? W.paused || a.audioSrc != W.src ? (W.src = a.audioSrc, W.load(), W.play()) : (W.pause(), W.currentTime = 0) : a.bubbleClosed || a.popupClosed ? W.pause() : a.detectLanguage && chrome.tabs.detectLanguage(function(a) {
      chrome.tabs.sendMessage(b.tab.id, {
        "gtx.detected": a
      })
    })
  });
  chrome.runtime.onConnect.addListener(function(a) {
    a.onDisconnect.addListener(function() {
      chrome.runtime.sendMessage({
        popupClosed: !0
      })
    })
  });
  chrome.contextMenus.create({
    id: "translate-and-anki",
    title: function(a) {
      a = chrome.i18n.getMessage(a);
      return chrome.i18n.getMessage(a)
    }("MSG_FOOTER_TRANSLATE"),
    contexts: ["selection"]
  });
  chrome.contextMenus.onClicked.addListener(function(a) {
    chrome.tabs.create({
      url: ea(Bb(), a.selectionText)
    })
  });
  var Ib = function() {
      return Hb
    },
    X = ["translate", "getTranslateManager"],
    Y = k;
  X[0] in Y || !Y.execScript || Y.execScript("var " + X[0]);
  for (var Z; X.length && (Z = X.shift());) X.length || void 0 === Ib ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = Ib;
  V.prototype.attach = V.prototype.attach;
  V.prototype.detach = V.prototype.detach;
})();