function Kx(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(n, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => n[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const a of o.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = r(i);
    fetch(i.href, o);
  }
})();
var Ma =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Zd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Og = { exports: {} },
  wl = {},
  Ng = { exports: {} },
  N = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fa = Symbol.for("react.element"),
  Gx = Symbol.for("react.portal"),
  Yx = Symbol.for("react.fragment"),
  Xx = Symbol.for("react.strict_mode"),
  qx = Symbol.for("react.profiler"),
  Qx = Symbol.for("react.provider"),
  Zx = Symbol.for("react.context"),
  Jx = Symbol.for("react.forward_ref"),
  ew = Symbol.for("react.suspense"),
  tw = Symbol.for("react.memo"),
  rw = Symbol.for("react.lazy"),
  mp = Symbol.iterator;
function nw(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (mp && e[mp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Wg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ug = Object.assign,
  Hg = {};
function Fi(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Hg),
    (this.updater = r || Wg);
}
Fi.prototype.isReactComponent = {};
Fi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Kg() {}
Kg.prototype = Fi.prototype;
function Jd(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Hg),
    (this.updater = r || Wg);
}
var ef = (Jd.prototype = new Kg());
ef.constructor = Jd;
Ug(ef, Fi.prototype);
ef.isPureReactComponent = !0;
var yp = Array.isArray,
  Gg = Object.prototype.hasOwnProperty,
  tf = { current: null },
  Yg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xg(e, t, r) {
  var n,
    i = {},
    o = null,
    a = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Gg.call(t, n) && !Yg.hasOwnProperty(n) && (i[n] = t[n]);
  var s = arguments.length - 2;
  if (s === 1) i.children = r;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (n in ((s = e.defaultProps), s)) i[n] === void 0 && (i[n] = s[n]);
  return {
    $$typeof: fa,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: tf.current,
  };
}
function iw(e, t) {
  return {
    $$typeof: fa,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function rf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fa;
}
function ow(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var gp = /\/+/g;
function wu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ow("" + e.key)
    : t.toString(36);
}
function us(e, t, r, n, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (o) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case fa:
          case Gx:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = n === "" ? "." + wu(a, 0) : n),
      yp(i)
        ? ((r = ""),
          e != null && (r = e.replace(gp, "$&/") + "/"),
          us(i, t, r, "", function (u) {
            return u;
          }))
        : i != null &&
          (rf(i) &&
            (i = iw(
              i,
              r +
                (!i.key || (a && a.key === i.key)
                  ? ""
                  : ("" + i.key).replace(gp, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((a = 0), (n = n === "" ? "." : n + ":"), yp(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var l = n + wu(o, s);
      a += us(o, t, r, l, i);
    }
  else if (((l = nw(e)), typeof l == "function"))
    for (e = l.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (l = n + wu(o, s++)), (a += us(o, t, r, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function Fa(e, t, r) {
  if (e == null) return e;
  var n = [],
    i = 0;
  return (
    us(e, n, "", "", function (o) {
      return t.call(r, o, i++);
    }),
    n
  );
}
function aw(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Qe = { current: null },
  cs = { transition: null },
  sw = {
    ReactCurrentDispatcher: Qe,
    ReactCurrentBatchConfig: cs,
    ReactCurrentOwner: tf,
  };
function qg() {
  throw Error("act(...) is not supported in production builds of React.");
}
N.Children = {
  map: Fa,
  forEach: function (e, t, r) {
    Fa(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Fa(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Fa(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!rf(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
N.Component = Fi;
N.Fragment = Yx;
N.Profiler = qx;
N.PureComponent = Jd;
N.StrictMode = Xx;
N.Suspense = ew;
N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sw;
N.act = qg;
N.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var n = Ug({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (a = tf.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t)
      Gg.call(t, l) &&
        !Yg.hasOwnProperty(l) &&
        (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    n.children = s;
  }
  return { $$typeof: fa, type: e.type, key: i, ref: o, props: n, _owner: a };
};
N.createContext = function (e) {
  return (
    (e = {
      $$typeof: Zx,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Qx, _context: e }),
    (e.Consumer = e)
  );
};
N.createElement = Xg;
N.createFactory = function (e) {
  var t = Xg.bind(null, e);
  return (t.type = e), t;
};
N.createRef = function () {
  return { current: null };
};
N.forwardRef = function (e) {
  return { $$typeof: Jx, render: e };
};
N.isValidElement = rf;
N.lazy = function (e) {
  return { $$typeof: rw, _payload: { _status: -1, _result: e }, _init: aw };
};
N.memo = function (e, t) {
  return { $$typeof: tw, type: e, compare: t === void 0 ? null : t };
};
N.startTransition = function (e) {
  var t = cs.transition;
  cs.transition = {};
  try {
    e();
  } finally {
    cs.transition = t;
  }
};
N.unstable_act = qg;
N.useCallback = function (e, t) {
  return Qe.current.useCallback(e, t);
};
N.useContext = function (e) {
  return Qe.current.useContext(e);
};
N.useDebugValue = function () {};
N.useDeferredValue = function (e) {
  return Qe.current.useDeferredValue(e);
};
N.useEffect = function (e, t) {
  return Qe.current.useEffect(e, t);
};
N.useId = function () {
  return Qe.current.useId();
};
N.useImperativeHandle = function (e, t, r) {
  return Qe.current.useImperativeHandle(e, t, r);
};
N.useInsertionEffect = function (e, t) {
  return Qe.current.useInsertionEffect(e, t);
};
N.useLayoutEffect = function (e, t) {
  return Qe.current.useLayoutEffect(e, t);
};
N.useMemo = function (e, t) {
  return Qe.current.useMemo(e, t);
};
N.useReducer = function (e, t, r) {
  return Qe.current.useReducer(e, t, r);
};
N.useRef = function (e) {
  return Qe.current.useRef(e);
};
N.useState = function (e) {
  return Qe.current.useState(e);
};
N.useSyncExternalStore = function (e, t, r) {
  return Qe.current.useSyncExternalStore(e, t, r);
};
N.useTransition = function () {
  return Qe.current.useTransition();
};
N.version = "18.3.1";
Ng.exports = N;
var k = Ng.exports;
const Do = Zd(k),
  vp = Kx({ __proto__: null, default: Do }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lw = k,
  uw = Symbol.for("react.element"),
  cw = Symbol.for("react.fragment"),
  dw = Object.prototype.hasOwnProperty,
  fw = lw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  hw = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qg(e, t, r) {
  var n,
    i = {},
    o = null,
    a = null;
  r !== void 0 && (o = "" + r),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (n in t) dw.call(t, n) && !hw.hasOwnProperty(n) && (i[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) i[n] === void 0 && (i[n] = t[n]);
  return {
    $$typeof: uw,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: fw.current,
  };
}
wl.Fragment = cw;
wl.jsx = Qg;
wl.jsxs = Qg;
Og.exports = wl;
var _ = Og.exports,
  Ec = {},
  Zg = { exports: {} },
  mt = {},
  Jg = { exports: {} },
  e0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(z, V) {
    var O = z.length;
    z.push(V);
    e: for (; 0 < O; ) {
      var de = (O - 1) >>> 1,
        xe = z[de];
      if (0 < i(xe, V)) (z[de] = V), (z[O] = xe), (O = de);
      else break e;
    }
  }
  function r(z) {
    return z.length === 0 ? null : z[0];
  }
  function n(z) {
    if (z.length === 0) return null;
    var V = z[0],
      O = z.pop();
    if (O !== V) {
      z[0] = O;
      e: for (var de = 0, xe = z.length, Z = xe >>> 1; de < Z; ) {
        var Nt = 2 * (de + 1) - 1,
          Vi = z[Nt],
          at = Nt + 1,
          un = z[at];
        if (0 > i(Vi, O))
          at < xe && 0 > i(un, Vi)
            ? ((z[de] = un), (z[at] = O), (de = at))
            : ((z[de] = Vi), (z[Nt] = O), (de = Nt));
        else if (at < xe && 0 > i(un, O)) (z[de] = un), (z[at] = O), (de = at);
        else break e;
      }
    }
    return V;
  }
  function i(z, V) {
    var O = z.sortIndex - V.sortIndex;
    return O !== 0 ? O : z.id - V.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var a = Date,
      s = a.now();
    e.unstable_now = function () {
      return a.now() - s;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    y = !1,
    S = !1,
    v = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(z) {
    for (var V = r(u); V !== null; ) {
      if (V.callback === null) n(u);
      else if (V.startTime <= z)
        n(u), (V.sortIndex = V.expirationTime), t(l, V);
      else break;
      V = r(u);
    }
  }
  function C(z) {
    if (((v = !1), m(z), !S))
      if (r(l) !== null) (S = !0), Ke(P);
      else {
        var V = r(u);
        V !== null && ir(C, V.startTime - z);
      }
  }
  function P(z, V) {
    (S = !1), v && ((v = !1), p($), ($ = -1)), (y = !0);
    var O = f;
    try {
      for (
        m(V), d = r(l);
        d !== null && (!(d.expirationTime > V) || (z && !be()));

      ) {
        var de = d.callback;
        if (typeof de == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var xe = de(d.expirationTime <= V);
          (V = e.unstable_now()),
            typeof xe == "function" ? (d.callback = xe) : d === r(l) && n(l),
            m(V);
        } else n(l);
        d = r(l);
      }
      if (d !== null) var Z = !0;
      else {
        var Nt = r(u);
        Nt !== null && ir(C, Nt.startTime - V), (Z = !1);
      }
      return Z;
    } finally {
      (d = null), (f = O), (y = !1);
    }
  }
  var A = !1,
    E = null,
    $ = -1,
    L = 5,
    D = -1;
  function be() {
    return !(e.unstable_now() - D < L);
  }
  function Ot() {
    if (E !== null) {
      var z = e.unstable_now();
      D = z;
      var V = !0;
      try {
        V = E(!0, z);
      } finally {
        V ? nr() : ((A = !1), (E = null));
      }
    } else A = !1;
  }
  var nr;
  if (typeof h == "function")
    nr = function () {
      h(Ot);
    };
  else if (typeof MessageChannel < "u") {
    var ln = new MessageChannel(),
      _e = ln.port2;
    (ln.port1.onmessage = Ot),
      (nr = function () {
        _e.postMessage(null);
      });
  } else
    nr = function () {
      w(Ot, 0);
    };
  function Ke(z) {
    (E = z), A || ((A = !0), nr());
  }
  function ir(z, V) {
    $ = w(function () {
      z(e.unstable_now());
    }, V);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (z) {
      z.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || y || ((S = !0), Ke(P));
    }),
    (e.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (L = 0 < z ? Math.floor(1e3 / z) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(l);
    }),
    (e.unstable_next = function (z) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = f;
      }
      var O = f;
      f = V;
      try {
        return z();
      } finally {
        f = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (z, V) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var O = f;
      f = z;
      try {
        return V();
      } finally {
        f = O;
      }
    }),
    (e.unstable_scheduleCallback = function (z, V, O) {
      var de = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? de + O : de))
          : (O = de),
        z)
      ) {
        case 1:
          var xe = -1;
          break;
        case 2:
          xe = 250;
          break;
        case 5:
          xe = 1073741823;
          break;
        case 4:
          xe = 1e4;
          break;
        default:
          xe = 5e3;
      }
      return (
        (xe = O + xe),
        (z = {
          id: c++,
          callback: V,
          priorityLevel: z,
          startTime: O,
          expirationTime: xe,
          sortIndex: -1,
        }),
        O > de
          ? ((z.sortIndex = O),
            t(u, z),
            r(l) === null &&
              z === r(u) &&
              (v ? (p($), ($ = -1)) : (v = !0), ir(C, O - de)))
          : ((z.sortIndex = xe), t(l, z), S || y || ((S = !0), Ke(P))),
        z
      );
    }),
    (e.unstable_shouldYield = be),
    (e.unstable_wrapCallback = function (z) {
      var V = f;
      return function () {
        var O = f;
        f = V;
        try {
          return z.apply(this, arguments);
        } finally {
          f = O;
        }
      };
    });
})(e0);
Jg.exports = e0;
var pw = Jg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mw = k,
  ht = pw;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var t0 = new Set(),
  Bo = {};
function jn(e, t) {
  ki(e, t), ki(e + "Capture", t);
}
function ki(e, t) {
  for (Bo[e] = t, e = 0; e < t.length; e++) t0.add(t[e]);
}
var br = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  $c = Object.prototype.hasOwnProperty,
  yw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Sp = {},
  bp = {};
function gw(e) {
  return $c.call(bp, e)
    ? !0
    : $c.call(Sp, e)
    ? !1
    : yw.test(e)
    ? (bp[e] = !0)
    : ((Sp[e] = !0), !1);
}
function vw(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Sw(e, t, r, n) {
  if (t === null || typeof t > "u" || vw(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ze(e, t, r, n, i, o, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = i),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = a);
}
var je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    je[e] = new Ze(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  je[t] = new Ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  je[e] = new Ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  je[e] = new Ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    je[e] = new Ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  je[e] = new Ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  je[e] = new Ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  je[e] = new Ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  je[e] = new Ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var nf = /[\-:]([a-z])/g;
function of(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(nf, of);
    je[t] = new Ze(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(nf, of);
    je[t] = new Ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(nf, of);
  je[t] = new Ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  je[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
je.xlinkHref = new Ze(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  je[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function af(e, t, r, n) {
  var i = je.hasOwnProperty(t) ? je[t] : null;
  (i !== null
    ? i.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Sw(t, r, i, n) && (r = null),
    n || i === null
      ? gw(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : i.mustUseProperty
      ? (e[i.propertyName] = r === null ? (i.type === 3 ? !1 : "") : r)
      : ((t = i.attributeName),
        (n = i.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (r = i === 3 || (i === 4 && r === !0) ? "" : "" + r),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var Tr = mw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Da = Symbol.for("react.element"),
  Un = Symbol.for("react.portal"),
  Hn = Symbol.for("react.fragment"),
  sf = Symbol.for("react.strict_mode"),
  Ac = Symbol.for("react.profiler"),
  r0 = Symbol.for("react.provider"),
  n0 = Symbol.for("react.context"),
  lf = Symbol.for("react.forward_ref"),
  Rc = Symbol.for("react.suspense"),
  zc = Symbol.for("react.suspense_list"),
  uf = Symbol.for("react.memo"),
  Mr = Symbol.for("react.lazy"),
  i0 = Symbol.for("react.offscreen"),
  xp = Symbol.iterator;
function Hi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xp && e[xp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var me = Object.assign,
  ku;
function io(e) {
  if (ku === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      ku = (t && t[1]) || "";
    }
  return (
    `
` +
    ku +
    e
  );
}
var Cu = !1;
function _u(e, t) {
  if (!e || Cu) return "";
  Cu = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = n.stack.split(`
`),
          a = i.length - 1,
          s = o.length - 1;
        1 <= a && 0 <= s && i[a] !== o[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (i[a] !== o[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || i[a] !== o[s])) {
                var l =
                  `
` + i[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (Cu = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? io(e) : "";
}
function bw(e) {
  switch (e.tag) {
    case 5:
      return io(e.type);
    case 16:
      return io("Lazy");
    case 13:
      return io("Suspense");
    case 19:
      return io("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = _u(e.type, !1)), e;
    case 11:
      return (e = _u(e.type.render, !1)), e;
    case 1:
      return (e = _u(e.type, !0)), e;
    default:
      return "";
  }
}
function Mc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Hn:
      return "Fragment";
    case Un:
      return "Portal";
    case Ac:
      return "Profiler";
    case sf:
      return "StrictMode";
    case Rc:
      return "Suspense";
    case zc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case n0:
        return (e.displayName || "Context") + ".Consumer";
      case r0:
        return (e._context.displayName || "Context") + ".Provider";
      case lf:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case uf:
        return (
          (t = e.displayName || null), t !== null ? t : Mc(e.type) || "Memo"
        );
      case Mr:
        (t = e._payload), (e = e._init);
        try {
          return Mc(e(t));
        } catch {}
    }
  return null;
}
function xw(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Mc(t);
    case 8:
      return t === sf ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Zr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function o0(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ww(e) {
  var t = o0(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var i = r.get,
      o = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (a) {
          (n = "" + a), o.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (a) {
          n = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ba(e) {
  e._valueTracker || (e._valueTracker = ww(e));
}
function a0(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = o0(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function js(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Fc(e, t) {
  var r = t.checked;
  return me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function wp(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = Zr(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function s0(e, t) {
  (t = t.checked), t != null && af(e, "checked", t, !1);
}
function Dc(e, t) {
  s0(e, t);
  var r = Zr(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Bc(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && Bc(e, t.type, Zr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function kp(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function Bc(e, t, r) {
  (t !== "number" || js(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var oo = Array.isArray;
function fi(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
    for (r = 0; r < e.length; r++)
      (i = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== i && (e[r].selected = i),
        i && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + Zr(r), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === r) {
        (e[i].selected = !0), n && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function jc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return me({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Cp(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(R(92));
      if (oo(r)) {
        if (1 < r.length) throw Error(R(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: Zr(r) };
}
function l0(e, t) {
  var r = Zr(t.value),
    n = Zr(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n);
}
function _p(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function u0(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Lc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? u0(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ja,
  c0 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ja = ja || document.createElement("div"),
          ja.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ja.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function jo(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var mo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  kw = ["Webkit", "ms", "Moz", "O"];
Object.keys(mo).forEach(function (e) {
  kw.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (mo[t] = mo[e]);
  });
});
function d0(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (mo.hasOwnProperty(e) && mo[e])
    ? ("" + t).trim()
    : t + "px";
}
function f0(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        i = d0(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, i) : (e[r] = i);
    }
}
var Cw = me(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
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
    wbr: !0,
  }
);
function Ic(e, t) {
  if (t) {
    if (Cw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function Vc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Oc = null;
function cf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Nc = null,
  hi = null,
  pi = null;
function Tp(e) {
  if ((e = ma(e))) {
    if (typeof Nc != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = Pl(t)), Nc(e.stateNode, e.type, t));
  }
}
function h0(e) {
  hi ? (pi ? pi.push(e) : (pi = [e])) : (hi = e);
}
function p0() {
  if (hi) {
    var e = hi,
      t = pi;
    if (((pi = hi = null), Tp(e), t)) for (e = 0; e < t.length; e++) Tp(t[e]);
  }
}
function m0(e, t) {
  return e(t);
}
function y0() {}
var Tu = !1;
function g0(e, t, r) {
  if (Tu) return e(t, r);
  Tu = !0;
  try {
    return m0(e, t, r);
  } finally {
    (Tu = !1), (hi !== null || pi !== null) && (y0(), p0());
  }
}
function Lo(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = Pl(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(R(231, t, typeof r));
  return r;
}
var Wc = !1;
if (br)
  try {
    var Ki = {};
    Object.defineProperty(Ki, "passive", {
      get: function () {
        Wc = !0;
      },
    }),
      window.addEventListener("test", Ki, Ki),
      window.removeEventListener("test", Ki, Ki);
  } catch {
    Wc = !1;
  }
function _w(e, t, r, n, i, o, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var yo = !1,
  Ls = null,
  Is = !1,
  Uc = null,
  Tw = {
    onError: function (e) {
      (yo = !0), (Ls = e);
    },
  };
function Pw(e, t, r, n, i, o, a, s, l) {
  (yo = !1), (Ls = null), _w.apply(Tw, arguments);
}
function Ew(e, t, r, n, i, o, a, s, l) {
  if ((Pw.apply(this, arguments), yo)) {
    if (yo) {
      var u = Ls;
      (yo = !1), (Ls = null);
    } else throw Error(R(198));
    Is || ((Is = !0), (Uc = u));
  }
}
function Ln(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function v0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Pp(e) {
  if (Ln(e) !== e) throw Error(R(188));
}
function $w(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ln(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var i = r.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((n = i.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === r) return Pp(i), e;
        if (o === n) return Pp(i), t;
        o = o.sibling;
      }
      throw Error(R(188));
    }
    if (r.return !== n.return) (r = i), (n = o);
    else {
      for (var a = !1, s = i.child; s; ) {
        if (s === r) {
          (a = !0), (r = i), (n = o);
          break;
        }
        if (s === n) {
          (a = !0), (n = i), (r = o);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = o.child; s; ) {
          if (s === r) {
            (a = !0), (r = o), (n = i);
            break;
          }
          if (s === n) {
            (a = !0), (n = o), (r = i);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(R(189));
      }
    }
    if (r.alternate !== n) throw Error(R(190));
  }
  if (r.tag !== 3) throw Error(R(188));
  return r.stateNode.current === r ? e : t;
}
function S0(e) {
  return (e = $w(e)), e !== null ? b0(e) : null;
}
function b0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = b0(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var x0 = ht.unstable_scheduleCallback,
  Ep = ht.unstable_cancelCallback,
  Aw = ht.unstable_shouldYield,
  Rw = ht.unstable_requestPaint,
  ve = ht.unstable_now,
  zw = ht.unstable_getCurrentPriorityLevel,
  df = ht.unstable_ImmediatePriority,
  w0 = ht.unstable_UserBlockingPriority,
  Vs = ht.unstable_NormalPriority,
  Mw = ht.unstable_LowPriority,
  k0 = ht.unstable_IdlePriority,
  kl = null,
  Qt = null;
function Fw(e) {
  if (Qt && typeof Qt.onCommitFiberRoot == "function")
    try {
      Qt.onCommitFiberRoot(kl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var jt = Math.clz32 ? Math.clz32 : jw,
  Dw = Math.log,
  Bw = Math.LN2;
function jw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Dw(e) / Bw) | 0)) | 0;
}
var La = 64,
  Ia = 4194304;
function ao(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Os(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    a = r & 268435455;
  if (a !== 0) {
    var s = a & ~i;
    s !== 0 ? (n = ao(s)) : ((o &= a), o !== 0 && (n = ao(o)));
  } else (a = r & ~i), a !== 0 ? (n = ao(a)) : o !== 0 && (n = ao(o));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    !(t & i) &&
    ((i = n & -n), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - jt(t)), (i = 1 << r), (n |= e[r]), (t &= ~i);
  return n;
}
function Lw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Iw(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var a = 31 - jt(o),
      s = 1 << a,
      l = i[a];
    l === -1
      ? (!(s & r) || s & n) && (i[a] = Lw(s, t))
      : l <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function Hc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function C0() {
  var e = La;
  return (La <<= 1), !(La & 4194240) && (La = 64), e;
}
function Pu(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function ha(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - jt(t)),
    (e[t] = r);
}
function Vw(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var i = 31 - jt(r),
      o = 1 << i;
    (t[i] = 0), (n[i] = -1), (e[i] = -1), (r &= ~o);
  }
}
function ff(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - jt(r),
      i = 1 << n;
    (i & t) | (e[n] & t) && (e[n] |= t), (r &= ~i);
  }
}
var ee = 0;
function _0(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var T0,
  hf,
  P0,
  E0,
  $0,
  Kc = !1,
  Va = [],
  Nr = null,
  Wr = null,
  Ur = null,
  Io = new Map(),
  Vo = new Map(),
  Br = [],
  Ow =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function $p(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Nr = null;
      break;
    case "dragenter":
    case "dragleave":
      Wr = null;
      break;
    case "mouseover":
    case "mouseout":
      Ur = null;
      break;
    case "pointerover":
    case "pointerout":
      Io.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Vo.delete(t.pointerId);
  }
}
function Gi(e, t, r, n, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = ma(t)), t !== null && hf(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Nw(e, t, r, n, i) {
  switch (t) {
    case "focusin":
      return (Nr = Gi(Nr, e, t, r, n, i)), !0;
    case "dragenter":
      return (Wr = Gi(Wr, e, t, r, n, i)), !0;
    case "mouseover":
      return (Ur = Gi(Ur, e, t, r, n, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Io.set(o, Gi(Io.get(o) || null, e, t, r, n, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Vo.set(o, Gi(Vo.get(o) || null, e, t, r, n, i)), !0
      );
  }
  return !1;
}
function A0(e) {
  var t = xn(e.target);
  if (t !== null) {
    var r = Ln(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = v0(r)), t !== null)) {
          (e.blockedOn = t),
            $0(e.priority, function () {
              P0(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ds(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Gc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (Oc = n), r.target.dispatchEvent(n), (Oc = null);
    } else return (t = ma(r)), t !== null && hf(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function Ap(e, t, r) {
  ds(e) && r.delete(t);
}
function Ww() {
  (Kc = !1),
    Nr !== null && ds(Nr) && (Nr = null),
    Wr !== null && ds(Wr) && (Wr = null),
    Ur !== null && ds(Ur) && (Ur = null),
    Io.forEach(Ap),
    Vo.forEach(Ap);
}
function Yi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Kc ||
      ((Kc = !0),
      ht.unstable_scheduleCallback(ht.unstable_NormalPriority, Ww)));
}
function Oo(e) {
  function t(i) {
    return Yi(i, e);
  }
  if (0 < Va.length) {
    Yi(Va[0], e);
    for (var r = 1; r < Va.length; r++) {
      var n = Va[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    Nr !== null && Yi(Nr, e),
      Wr !== null && Yi(Wr, e),
      Ur !== null && Yi(Ur, e),
      Io.forEach(t),
      Vo.forEach(t),
      r = 0;
    r < Br.length;
    r++
  )
    (n = Br[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < Br.length && ((r = Br[0]), r.blockedOn === null); )
    A0(r), r.blockedOn === null && Br.shift();
}
var mi = Tr.ReactCurrentBatchConfig,
  Ns = !0;
function Uw(e, t, r, n) {
  var i = ee,
    o = mi.transition;
  mi.transition = null;
  try {
    (ee = 1), pf(e, t, r, n);
  } finally {
    (ee = i), (mi.transition = o);
  }
}
function Hw(e, t, r, n) {
  var i = ee,
    o = mi.transition;
  mi.transition = null;
  try {
    (ee = 4), pf(e, t, r, n);
  } finally {
    (ee = i), (mi.transition = o);
  }
}
function pf(e, t, r, n) {
  if (Ns) {
    var i = Gc(e, t, r, n);
    if (i === null) ju(e, t, n, Ws, r), $p(e, n);
    else if (Nw(i, e, t, r, n)) n.stopPropagation();
    else if (($p(e, n), t & 4 && -1 < Ow.indexOf(e))) {
      for (; i !== null; ) {
        var o = ma(i);
        if (
          (o !== null && T0(o),
          (o = Gc(e, t, r, n)),
          o === null && ju(e, t, n, Ws, r),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && n.stopPropagation();
    } else ju(e, t, n, null, r);
  }
}
var Ws = null;
function Gc(e, t, r, n) {
  if (((Ws = null), (e = cf(n)), (e = xn(e)), e !== null))
    if (((t = Ln(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = v0(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ws = e), null;
}
function R0(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (zw()) {
        case df:
          return 1;
        case w0:
          return 4;
        case Vs:
        case Mw:
          return 16;
        case k0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ir = null,
  mf = null,
  fs = null;
function z0() {
  if (fs) return fs;
  var e,
    t = mf,
    r = t.length,
    n,
    i = "value" in Ir ? Ir.value : Ir.textContent,
    o = i.length;
  for (e = 0; e < r && t[e] === i[e]; e++);
  var a = r - e;
  for (n = 1; n <= a && t[r - n] === i[o - n]; n++);
  return (fs = i.slice(e, 1 < n ? 1 - n : void 0));
}
function hs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Oa() {
  return !0;
}
function Rp() {
  return !1;
}
function yt(e) {
  function t(r, n, i, o, a) {
    (this._reactName = r),
      (this._targetInst = i),
      (this.type = n),
      (this.nativeEvent = o),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((r = e[s]), (this[s] = r ? r(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Oa
        : Rp),
      (this.isPropagationStopped = Rp),
      this
    );
  }
  return (
    me(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = Oa));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = Oa));
      },
      persist: function () {},
      isPersistent: Oa,
    }),
    t
  );
}
var Di = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  yf = yt(Di),
  pa = me({}, Di, { view: 0, detail: 0 }),
  Kw = yt(pa),
  Eu,
  $u,
  Xi,
  Cl = me({}, pa, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: gf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Xi &&
            (Xi && e.type === "mousemove"
              ? ((Eu = e.screenX - Xi.screenX), ($u = e.screenY - Xi.screenY))
              : ($u = Eu = 0),
            (Xi = e)),
          Eu);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : $u;
    },
  }),
  zp = yt(Cl),
  Gw = me({}, Cl, { dataTransfer: 0 }),
  Yw = yt(Gw),
  Xw = me({}, pa, { relatedTarget: 0 }),
  Au = yt(Xw),
  qw = me({}, Di, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Qw = yt(qw),
  Zw = me({}, Di, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Jw = yt(Zw),
  ek = me({}, Di, { data: 0 }),
  Mp = yt(ek),
  tk = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  rk = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  nk = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ik(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = nk[e]) ? !!t[e] : !1;
}
function gf() {
  return ik;
}
var ok = me({}, pa, {
    key: function (e) {
      if (e.key) {
        var t = tk[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = hs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? rk[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: gf,
    charCode: function (e) {
      return e.type === "keypress" ? hs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? hs(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  ak = yt(ok),
  sk = me({}, Cl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Fp = yt(sk),
  lk = me({}, pa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gf,
  }),
  uk = yt(lk),
  ck = me({}, Di, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dk = yt(ck),
  fk = me({}, Cl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  hk = yt(fk),
  pk = [9, 13, 27, 32],
  vf = br && "CompositionEvent" in window,
  go = null;
br && "documentMode" in document && (go = document.documentMode);
var mk = br && "TextEvent" in window && !go,
  M0 = br && (!vf || (go && 8 < go && 11 >= go)),
  Dp = " ",
  Bp = !1;
function F0(e, t) {
  switch (e) {
    case "keyup":
      return pk.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function D0(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Kn = !1;
function yk(e, t) {
  switch (e) {
    case "compositionend":
      return D0(t);
    case "keypress":
      return t.which !== 32 ? null : ((Bp = !0), Dp);
    case "textInput":
      return (e = t.data), e === Dp && Bp ? null : e;
    default:
      return null;
  }
}
function gk(e, t) {
  if (Kn)
    return e === "compositionend" || (!vf && F0(e, t))
      ? ((e = z0()), (fs = mf = Ir = null), (Kn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return M0 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var vk = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function jp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!vk[e.type] : t === "textarea";
}
function B0(e, t, r, n) {
  h0(n),
    (t = Us(t, "onChange")),
    0 < t.length &&
      ((r = new yf("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t }));
}
var vo = null,
  No = null;
function Sk(e) {
  G0(e, 0);
}
function _l(e) {
  var t = Xn(e);
  if (a0(t)) return e;
}
function bk(e, t) {
  if (e === "change") return t;
}
var j0 = !1;
if (br) {
  var Ru;
  if (br) {
    var zu = "oninput" in document;
    if (!zu) {
      var Lp = document.createElement("div");
      Lp.setAttribute("oninput", "return;"),
        (zu = typeof Lp.oninput == "function");
    }
    Ru = zu;
  } else Ru = !1;
  j0 = Ru && (!document.documentMode || 9 < document.documentMode);
}
function Ip() {
  vo && (vo.detachEvent("onpropertychange", L0), (No = vo = null));
}
function L0(e) {
  if (e.propertyName === "value" && _l(No)) {
    var t = [];
    B0(t, No, e, cf(e)), g0(Sk, t);
  }
}
function xk(e, t, r) {
  e === "focusin"
    ? (Ip(), (vo = t), (No = r), vo.attachEvent("onpropertychange", L0))
    : e === "focusout" && Ip();
}
function wk(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return _l(No);
}
function kk(e, t) {
  if (e === "click") return _l(t);
}
function Ck(e, t) {
  if (e === "input" || e === "change") return _l(t);
}
function _k(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var It = typeof Object.is == "function" ? Object.is : _k;
function Wo(e, t) {
  if (It(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var i = r[n];
    if (!$c.call(t, i) || !It(e[i], t[i])) return !1;
  }
  return !0;
}
function Vp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Op(e, t) {
  var r = Vp(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Vp(r);
  }
}
function I0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? I0(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function V0() {
  for (var e = window, t = js(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = js(e.document);
  }
  return t;
}
function Sf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Tk(e) {
  var t = V0(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    I0(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && Sf(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = r.textContent.length,
          o = Math.min(n.start, i);
        (n = n.end === void 0 ? o : Math.min(n.end, i)),
          !e.extend && o > n && ((i = n), (n = o), (o = i)),
          (i = Op(r, o));
        var a = Op(r, n);
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > n
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Pk = br && "documentMode" in document && 11 >= document.documentMode,
  Gn = null,
  Yc = null,
  So = null,
  Xc = !1;
function Np(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Xc ||
    Gn == null ||
    Gn !== js(n) ||
    ((n = Gn),
    "selectionStart" in n && Sf(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (So && Wo(So, n)) ||
      ((So = n),
      (n = Us(Yc, "onSelect")),
      0 < n.length &&
        ((t = new yf("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = Gn))));
}
function Na(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var Yn = {
    animationend: Na("Animation", "AnimationEnd"),
    animationiteration: Na("Animation", "AnimationIteration"),
    animationstart: Na("Animation", "AnimationStart"),
    transitionend: Na("Transition", "TransitionEnd"),
  },
  Mu = {},
  O0 = {};
br &&
  ((O0 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Yn.animationend.animation,
    delete Yn.animationiteration.animation,
    delete Yn.animationstart.animation),
  "TransitionEvent" in window || delete Yn.transitionend.transition);
function Tl(e) {
  if (Mu[e]) return Mu[e];
  if (!Yn[e]) return e;
  var t = Yn[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in O0) return (Mu[e] = t[r]);
  return e;
}
var N0 = Tl("animationend"),
  W0 = Tl("animationiteration"),
  U0 = Tl("animationstart"),
  H0 = Tl("transitionend"),
  K0 = new Map(),
  Wp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function rn(e, t) {
  K0.set(e, t), jn(t, [e]);
}
for (var Fu = 0; Fu < Wp.length; Fu++) {
  var Du = Wp[Fu],
    Ek = Du.toLowerCase(),
    $k = Du[0].toUpperCase() + Du.slice(1);
  rn(Ek, "on" + $k);
}
rn(N0, "onAnimationEnd");
rn(W0, "onAnimationIteration");
rn(U0, "onAnimationStart");
rn("dblclick", "onDoubleClick");
rn("focusin", "onFocus");
rn("focusout", "onBlur");
rn(H0, "onTransitionEnd");
ki("onMouseEnter", ["mouseout", "mouseover"]);
ki("onMouseLeave", ["mouseout", "mouseover"]);
ki("onPointerEnter", ["pointerout", "pointerover"]);
ki("onPointerLeave", ["pointerout", "pointerover"]);
jn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
jn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
jn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
jn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var so =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ak = new Set("cancel close invalid load scroll toggle".split(" ").concat(so));
function Up(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), Ew(n, t, void 0, e), (e.currentTarget = null);
}
function G0(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      i = n.event;
    n = n.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var a = n.length - 1; 0 <= a; a--) {
          var s = n[a],
            l = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), l !== o && i.isPropagationStopped())) break e;
          Up(i, s, u), (o = l);
        }
      else
        for (a = 0; a < n.length; a++) {
          if (
            ((s = n[a]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          Up(i, s, u), (o = l);
        }
    }
  }
  if (Is) throw ((e = Uc), (Is = !1), (Uc = null), e);
}
function oe(e, t) {
  var r = t[ed];
  r === void 0 && (r = t[ed] = new Set());
  var n = e + "__bubble";
  r.has(n) || (Y0(t, e, 2, !1), r.add(n));
}
function Bu(e, t, r) {
  var n = 0;
  t && (n |= 4), Y0(r, e, n, t);
}
var Wa = "_reactListening" + Math.random().toString(36).slice(2);
function Uo(e) {
  if (!e[Wa]) {
    (e[Wa] = !0),
      t0.forEach(function (r) {
        r !== "selectionchange" && (Ak.has(r) || Bu(r, !1, e), Bu(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Wa] || ((t[Wa] = !0), Bu("selectionchange", !1, t));
  }
}
function Y0(e, t, r, n) {
  switch (R0(t)) {
    case 1:
      var i = Uw;
      break;
    case 4:
      i = Hw;
      break;
    default:
      i = pf;
  }
  (r = i.bind(null, t, r, e)),
    (i = void 0),
    !Wc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    n
      ? i !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: i })
        : e.addEventListener(t, r, !0)
      : i !== void 0
      ? e.addEventListener(t, r, { passive: i })
      : e.addEventListener(t, r, !1);
}
function ju(e, t, r, n, i) {
  var o = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var a = n.tag;
      if (a === 3 || a === 4) {
        var s = n.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (a === 4)
          for (a = n.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = xn(s)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            n = o = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      n = n.return;
    }
  g0(function () {
    var u = o,
      c = cf(r),
      d = [];
    e: {
      var f = K0.get(e);
      if (f !== void 0) {
        var y = yf,
          S = e;
        switch (e) {
          case "keypress":
            if (hs(r) === 0) break e;
          case "keydown":
          case "keyup":
            y = ak;
            break;
          case "focusin":
            (S = "focus"), (y = Au);
            break;
          case "focusout":
            (S = "blur"), (y = Au);
            break;
          case "beforeblur":
          case "afterblur":
            y = Au;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = zp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Yw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = uk;
            break;
          case N0:
          case W0:
          case U0:
            y = Qw;
            break;
          case H0:
            y = dk;
            break;
          case "scroll":
            y = Kw;
            break;
          case "wheel":
            y = hk;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Jw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Fp;
        }
        var v = (t & 4) !== 0,
          w = !v && e === "scroll",
          p = v ? (f !== null ? f + "Capture" : null) : f;
        v = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var C = m.stateNode;
          if (
            (m.tag === 5 &&
              C !== null &&
              ((m = C),
              p !== null && ((C = Lo(h, p)), C != null && v.push(Ho(h, C, m)))),
            w)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((f = new y(f, S, null, r, c)), d.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          f &&
            r !== Oc &&
            (S = r.relatedTarget || r.fromElement) &&
            (xn(S) || S[xr]))
        )
          break e;
        if (
          (y || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          y
            ? ((S = r.relatedTarget || r.toElement),
              (y = u),
              (S = S ? xn(S) : null),
              S !== null &&
                ((w = Ln(S)), S !== w || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((y = null), (S = u)),
          y !== S)
        ) {
          if (
            ((v = zp),
            (C = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Fp),
              (C = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (w = y == null ? f : Xn(y)),
            (m = S == null ? f : Xn(S)),
            (f = new v(C, h + "leave", y, r, c)),
            (f.target = w),
            (f.relatedTarget = m),
            (C = null),
            xn(c) === u &&
              ((v = new v(p, h + "enter", S, r, c)),
              (v.target = m),
              (v.relatedTarget = w),
              (C = v)),
            (w = C),
            y && S)
          )
            t: {
              for (v = y, p = S, h = 0, m = v; m; m = Nn(m)) h++;
              for (m = 0, C = p; C; C = Nn(C)) m++;
              for (; 0 < h - m; ) (v = Nn(v)), h--;
              for (; 0 < m - h; ) (p = Nn(p)), m--;
              for (; h--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                (v = Nn(v)), (p = Nn(p));
              }
              v = null;
            }
          else v = null;
          y !== null && Hp(d, f, y, v, !1),
            S !== null && w !== null && Hp(d, w, S, v, !0);
        }
      }
      e: {
        if (
          ((f = u ? Xn(u) : window),
          (y = f.nodeName && f.nodeName.toLowerCase()),
          y === "select" || (y === "input" && f.type === "file"))
        )
          var P = bk;
        else if (jp(f))
          if (j0) P = Ck;
          else {
            P = wk;
            var A = xk;
          }
        else
          (y = f.nodeName) &&
            y.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (P = kk);
        if (P && (P = P(e, u))) {
          B0(d, P, r, c);
          break e;
        }
        A && A(e, f, u),
          e === "focusout" &&
            (A = f._wrapperState) &&
            A.controlled &&
            f.type === "number" &&
            Bc(f, "number", f.value);
      }
      switch (((A = u ? Xn(u) : window), e)) {
        case "focusin":
          (jp(A) || A.contentEditable === "true") &&
            ((Gn = A), (Yc = u), (So = null));
          break;
        case "focusout":
          So = Yc = Gn = null;
          break;
        case "mousedown":
          Xc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Xc = !1), Np(d, r, c);
          break;
        case "selectionchange":
          if (Pk) break;
        case "keydown":
        case "keyup":
          Np(d, r, c);
      }
      var E;
      if (vf)
        e: {
          switch (e) {
            case "compositionstart":
              var $ = "onCompositionStart";
              break e;
            case "compositionend":
              $ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              $ = "onCompositionUpdate";
              break e;
          }
          $ = void 0;
        }
      else
        Kn
          ? F0(e, r) && ($ = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && ($ = "onCompositionStart");
      $ &&
        (M0 &&
          r.locale !== "ko" &&
          (Kn || $ !== "onCompositionStart"
            ? $ === "onCompositionEnd" && Kn && (E = z0())
            : ((Ir = c),
              (mf = "value" in Ir ? Ir.value : Ir.textContent),
              (Kn = !0))),
        (A = Us(u, $)),
        0 < A.length &&
          (($ = new Mp($, e, null, r, c)),
          d.push({ event: $, listeners: A }),
          E ? ($.data = E) : ((E = D0(r)), E !== null && ($.data = E)))),
        (E = mk ? yk(e, r) : gk(e, r)) &&
          ((u = Us(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Mp("onBeforeInput", "beforeinput", null, r, c)),
            d.push({ event: c, listeners: u }),
            (c.data = E)));
    }
    G0(d, t);
  });
}
function Ho(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Us(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Lo(e, r)),
      o != null && n.unshift(Ho(e, o, i)),
      (o = Lo(e, t)),
      o != null && n.push(Ho(e, o, i))),
      (e = e.return);
  }
  return n;
}
function Nn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Hp(e, t, r, n, i) {
  for (var o = t._reactName, a = []; r !== null && r !== n; ) {
    var s = r,
      l = s.alternate,
      u = s.stateNode;
    if (l !== null && l === n) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((l = Lo(r, o)), l != null && a.unshift(Ho(r, l, s)))
        : i || ((l = Lo(r, o)), l != null && a.push(Ho(r, l, s)))),
      (r = r.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Rk = /\r\n?/g,
  zk = /\u0000|\uFFFD/g;
function Kp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Rk,
      `
`
    )
    .replace(zk, "");
}
function Ua(e, t, r) {
  if (((t = Kp(t)), Kp(e) !== t && r)) throw Error(R(425));
}
function Hs() {}
var qc = null,
  Qc = null;
function Zc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Jc = typeof setTimeout == "function" ? setTimeout : void 0,
  Mk = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Gp = typeof Promise == "function" ? Promise : void 0,
  Fk =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Gp < "u"
      ? function (e) {
          return Gp.resolve(null).then(e).catch(Dk);
        }
      : Jc;
function Dk(e) {
  setTimeout(function () {
    throw e;
  });
}
function Lu(e, t) {
  var r = t,
    n = 0;
  do {
    var i = r.nextSibling;
    if ((e.removeChild(r), i && i.nodeType === 8))
      if (((r = i.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(i), Oo(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = i;
  } while (r);
  Oo(t);
}
function Hr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Yp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Bi = Math.random().toString(36).slice(2),
  Xt = "__reactFiber$" + Bi,
  Ko = "__reactProps$" + Bi,
  xr = "__reactContainer$" + Bi,
  ed = "__reactEvents$" + Bi,
  Bk = "__reactListeners$" + Bi,
  jk = "__reactHandles$" + Bi;
function xn(e) {
  var t = e[Xt];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[xr] || r[Xt])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = Yp(e); e !== null; ) {
          if ((r = e[Xt])) return r;
          e = Yp(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function ma(e) {
  return (
    (e = e[Xt] || e[xr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Xn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Pl(e) {
  return e[Ko] || null;
}
var td = [],
  qn = -1;
function nn(e) {
  return { current: e };
}
function se(e) {
  0 > qn || ((e.current = td[qn]), (td[qn] = null), qn--);
}
function ne(e, t) {
  qn++, (td[qn] = e.current), (e.current = t);
}
var Jr = {},
  He = nn(Jr),
  rt = nn(!1),
  zn = Jr;
function Ci(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Jr;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in r) i[o] = t[o];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function nt(e) {
  return (e = e.childContextTypes), e != null;
}
function Ks() {
  se(rt), se(He);
}
function Xp(e, t, r) {
  if (He.current !== Jr) throw Error(R(168));
  ne(He, t), ne(rt, r);
}
function X0(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var i in n) if (!(i in t)) throw Error(R(108, xw(e) || "Unknown", i));
  return me({}, r, n);
}
function Gs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Jr),
    (zn = He.current),
    ne(He, e),
    ne(rt, rt.current),
    !0
  );
}
function qp(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(R(169));
  r
    ? ((e = X0(e, t, zn)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      se(rt),
      se(He),
      ne(He, e))
    : se(rt),
    ne(rt, r);
}
var lr = null,
  El = !1,
  Iu = !1;
function q0(e) {
  lr === null ? (lr = [e]) : lr.push(e);
}
function Lk(e) {
  (El = !0), q0(e);
}
function on() {
  if (!Iu && lr !== null) {
    Iu = !0;
    var e = 0,
      t = ee;
    try {
      var r = lr;
      for (ee = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (lr = null), (El = !1);
    } catch (i) {
      throw (lr !== null && (lr = lr.slice(e + 1)), x0(df, on), i);
    } finally {
      (ee = t), (Iu = !1);
    }
  }
  return null;
}
var Qn = [],
  Zn = 0,
  Ys = null,
  Xs = 0,
  wt = [],
  kt = 0,
  Mn = null,
  dr = 1,
  fr = "";
function pn(e, t) {
  (Qn[Zn++] = Xs), (Qn[Zn++] = Ys), (Ys = e), (Xs = t);
}
function Q0(e, t, r) {
  (wt[kt++] = dr), (wt[kt++] = fr), (wt[kt++] = Mn), (Mn = e);
  var n = dr;
  e = fr;
  var i = 32 - jt(n) - 1;
  (n &= ~(1 << i)), (r += 1);
  var o = 32 - jt(t) + i;
  if (30 < o) {
    var a = i - (i % 5);
    (o = (n & ((1 << a) - 1)).toString(32)),
      (n >>= a),
      (i -= a),
      (dr = (1 << (32 - jt(t) + i)) | (r << i) | n),
      (fr = o + e);
  } else (dr = (1 << o) | (r << i) | n), (fr = e);
}
function bf(e) {
  e.return !== null && (pn(e, 1), Q0(e, 1, 0));
}
function xf(e) {
  for (; e === Ys; )
    (Ys = Qn[--Zn]), (Qn[Zn] = null), (Xs = Qn[--Zn]), (Qn[Zn] = null);
  for (; e === Mn; )
    (Mn = wt[--kt]),
      (wt[kt] = null),
      (fr = wt[--kt]),
      (wt[kt] = null),
      (dr = wt[--kt]),
      (wt[kt] = null);
}
var ct = null,
  ut = null,
  ce = !1,
  Dt = null;
function Z0(e, t) {
  var r = Ct(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function Qp(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ct = e), (ut = Hr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ct = e), (ut = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = Mn !== null ? { id: dr, overflow: fr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = Ct(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (ct = e),
            (ut = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function rd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function nd(e) {
  if (ce) {
    var t = ut;
    if (t) {
      var r = t;
      if (!Qp(e, t)) {
        if (rd(e)) throw Error(R(418));
        t = Hr(r.nextSibling);
        var n = ct;
        t && Qp(e, t)
          ? Z0(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (ce = !1), (ct = e));
      }
    } else {
      if (rd(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (ce = !1), (ct = e);
    }
  }
}
function Zp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ct = e;
}
function Ha(e) {
  if (e !== ct) return !1;
  if (!ce) return Zp(e), (ce = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Zc(e.type, e.memoizedProps))),
    t && (t = ut))
  ) {
    if (rd(e)) throw (J0(), Error(R(418)));
    for (; t; ) Z0(e, t), (t = Hr(t.nextSibling));
  }
  if ((Zp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              ut = Hr(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ut = null;
    }
  } else ut = ct ? Hr(e.stateNode.nextSibling) : null;
  return !0;
}
function J0() {
  for (var e = ut; e; ) e = Hr(e.nextSibling);
}
function _i() {
  (ut = ct = null), (ce = !1);
}
function wf(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e);
}
var Ik = Tr.ReactCurrentBatchConfig;
function qi(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(R(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(R(147, e));
      var i = n,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (a) {
            var s = i.refs;
            a === null ? delete s[o] : (s[o] = a);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!r._owner) throw Error(R(290, e));
  }
  return e;
}
function Ka(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Jp(e) {
  var t = e._init;
  return t(e._payload);
}
function ev(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
    }
  }
  function r(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function n(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function i(p, h) {
    return (p = Xr(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function a(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, h, m, C) {
    return h === null || h.tag !== 6
      ? ((h = Ku(m, p.mode, C)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function l(p, h, m, C) {
    var P = m.type;
    return P === Hn
      ? c(p, h, m.props.children, C, m.key)
      : h !== null &&
        (h.elementType === P ||
          (typeof P == "object" &&
            P !== null &&
            P.$$typeof === Mr &&
            Jp(P) === h.type))
      ? ((C = i(h, m.props)), (C.ref = qi(p, h, m)), (C.return = p), C)
      : ((C = bs(m.type, m.key, m.props, null, p.mode, C)),
        (C.ref = qi(p, h, m)),
        (C.return = p),
        C);
  }
  function u(p, h, m, C) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = Gu(m, p.mode, C)), (h.return = p), h)
      : ((h = i(h, m.children || [])), (h.return = p), h);
  }
  function c(p, h, m, C, P) {
    return h === null || h.tag !== 7
      ? ((h = Pn(m, p.mode, C, P)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function d(p, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Ku("" + h, p.mode, m)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Da:
          return (
            (m = bs(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = qi(p, null, h)),
            (m.return = p),
            m
          );
        case Un:
          return (h = Gu(h, p.mode, m)), (h.return = p), h;
        case Mr:
          var C = h._init;
          return d(p, C(h._payload), m);
      }
      if (oo(h) || Hi(h))
        return (h = Pn(h, p.mode, m, null)), (h.return = p), h;
      Ka(p, h);
    }
    return null;
  }
  function f(p, h, m, C) {
    var P = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return P !== null ? null : s(p, h, "" + m, C);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Da:
          return m.key === P ? l(p, h, m, C) : null;
        case Un:
          return m.key === P ? u(p, h, m, C) : null;
        case Mr:
          return (P = m._init), f(p, h, P(m._payload), C);
      }
      if (oo(m) || Hi(m)) return P !== null ? null : c(p, h, m, C, null);
      Ka(p, m);
    }
    return null;
  }
  function y(p, h, m, C, P) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (p = p.get(m) || null), s(h, p, "" + C, P);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case Da:
          return (p = p.get(C.key === null ? m : C.key) || null), l(h, p, C, P);
        case Un:
          return (p = p.get(C.key === null ? m : C.key) || null), u(h, p, C, P);
        case Mr:
          var A = C._init;
          return y(p, h, m, A(C._payload), P);
      }
      if (oo(C) || Hi(C)) return (p = p.get(m) || null), c(h, p, C, P, null);
      Ka(h, C);
    }
    return null;
  }
  function S(p, h, m, C) {
    for (
      var P = null, A = null, E = h, $ = (h = 0), L = null;
      E !== null && $ < m.length;
      $++
    ) {
      E.index > $ ? ((L = E), (E = null)) : (L = E.sibling);
      var D = f(p, E, m[$], C);
      if (D === null) {
        E === null && (E = L);
        break;
      }
      e && E && D.alternate === null && t(p, E),
        (h = o(D, h, $)),
        A === null ? (P = D) : (A.sibling = D),
        (A = D),
        (E = L);
    }
    if ($ === m.length) return r(p, E), ce && pn(p, $), P;
    if (E === null) {
      for (; $ < m.length; $++)
        (E = d(p, m[$], C)),
          E !== null &&
            ((h = o(E, h, $)), A === null ? (P = E) : (A.sibling = E), (A = E));
      return ce && pn(p, $), P;
    }
    for (E = n(p, E); $ < m.length; $++)
      (L = y(E, p, $, m[$], C)),
        L !== null &&
          (e && L.alternate !== null && E.delete(L.key === null ? $ : L.key),
          (h = o(L, h, $)),
          A === null ? (P = L) : (A.sibling = L),
          (A = L));
    return (
      e &&
        E.forEach(function (be) {
          return t(p, be);
        }),
      ce && pn(p, $),
      P
    );
  }
  function v(p, h, m, C) {
    var P = Hi(m);
    if (typeof P != "function") throw Error(R(150));
    if (((m = P.call(m)), m == null)) throw Error(R(151));
    for (
      var A = (P = null), E = h, $ = (h = 0), L = null, D = m.next();
      E !== null && !D.done;
      $++, D = m.next()
    ) {
      E.index > $ ? ((L = E), (E = null)) : (L = E.sibling);
      var be = f(p, E, D.value, C);
      if (be === null) {
        E === null && (E = L);
        break;
      }
      e && E && be.alternate === null && t(p, E),
        (h = o(be, h, $)),
        A === null ? (P = be) : (A.sibling = be),
        (A = be),
        (E = L);
    }
    if (D.done) return r(p, E), ce && pn(p, $), P;
    if (E === null) {
      for (; !D.done; $++, D = m.next())
        (D = d(p, D.value, C)),
          D !== null &&
            ((h = o(D, h, $)), A === null ? (P = D) : (A.sibling = D), (A = D));
      return ce && pn(p, $), P;
    }
    for (E = n(p, E); !D.done; $++, D = m.next())
      (D = y(E, p, $, D.value, C)),
        D !== null &&
          (e && D.alternate !== null && E.delete(D.key === null ? $ : D.key),
          (h = o(D, h, $)),
          A === null ? (P = D) : (A.sibling = D),
          (A = D));
    return (
      e &&
        E.forEach(function (Ot) {
          return t(p, Ot);
        }),
      ce && pn(p, $),
      P
    );
  }
  function w(p, h, m, C) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Hn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Da:
          e: {
            for (var P = m.key, A = h; A !== null; ) {
              if (A.key === P) {
                if (((P = m.type), P === Hn)) {
                  if (A.tag === 7) {
                    r(p, A.sibling),
                      (h = i(A, m.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  A.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === Mr &&
                    Jp(P) === A.type)
                ) {
                  r(p, A.sibling),
                    (h = i(A, m.props)),
                    (h.ref = qi(p, A, m)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                r(p, A);
                break;
              } else t(p, A);
              A = A.sibling;
            }
            m.type === Hn
              ? ((h = Pn(m.props.children, p.mode, C, m.key)),
                (h.return = p),
                (p = h))
              : ((C = bs(m.type, m.key, m.props, null, p.mode, C)),
                (C.ref = qi(p, h, m)),
                (C.return = p),
                (p = C));
          }
          return a(p);
        case Un:
          e: {
            for (A = m.key; h !== null; ) {
              if (h.key === A)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  r(p, h.sibling),
                    (h = i(h, m.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  r(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = Gu(m, p.mode, C)), (h.return = p), (p = h);
          }
          return a(p);
        case Mr:
          return (A = m._init), w(p, h, A(m._payload), C);
      }
      if (oo(m)) return S(p, h, m, C);
      if (Hi(m)) return v(p, h, m, C);
      Ka(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (r(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
          : (r(p, h), (h = Ku(m, p.mode, C)), (h.return = p), (p = h)),
        a(p))
      : r(p, h);
  }
  return w;
}
var Ti = ev(!0),
  tv = ev(!1),
  qs = nn(null),
  Qs = null,
  Jn = null,
  kf = null;
function Cf() {
  kf = Jn = Qs = null;
}
function _f(e) {
  var t = qs.current;
  se(qs), (e._currentValue = t);
}
function id(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function yi(e, t) {
  (Qs = e),
    (kf = Jn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (tt = !0), (e.firstContext = null));
}
function Tt(e) {
  var t = e._currentValue;
  if (kf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Jn === null)) {
      if (Qs === null) throw Error(R(308));
      (Jn = e), (Qs.dependencies = { lanes: 0, firstContext: e });
    } else Jn = Jn.next = e;
  return t;
}
var wn = null;
function Tf(e) {
  wn === null ? (wn = [e]) : wn.push(e);
}
function rv(e, t, r, n) {
  var i = t.interleaved;
  return (
    i === null ? ((r.next = r), Tf(t)) : ((r.next = i.next), (i.next = r)),
    (t.interleaved = r),
    wr(e, n)
  );
}
function wr(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var Fr = !1;
function Pf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function nv(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function mr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Kr(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), H & 2)) {
    var i = n.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (n.pending = t),
      wr(e, r)
    );
  }
  return (
    (i = n.interleaved),
    i === null ? ((t.next = t), Tf(n)) : ((t.next = i.next), (i.next = t)),
    (n.interleaved = t),
    wr(e, r)
  );
}
function ps(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), ff(e, r);
  }
}
function em(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var i = null,
      o = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var a = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        o === null ? (i = o = a) : (o = o.next = a), (r = r.next);
      } while (r !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function Zs(e, t, r, n) {
  var i = e.updateQueue;
  Fr = !1;
  var o = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var l = s,
      u = l.next;
    (l.next = null), a === null ? (o = u) : (a.next = u), (a = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== a &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var d = i.baseState;
    (a = 0), (c = u = l = null), (s = o);
    do {
      var f = s.lane,
        y = s.eventTime;
      if ((n & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var S = e,
            v = s;
          switch (((f = t), (y = r), v.tag)) {
            case 1:
              if (((S = v.payload), typeof S == "function")) {
                d = S.call(y, d, f);
                break e;
              }
              d = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = v.payload),
                (f = typeof S == "function" ? S.call(y, d, f) : S),
                f == null)
              )
                break e;
              d = me({}, d, f);
              break e;
            case 2:
              Fr = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [s]) : f.push(s));
      } else
        (y = {
          eventTime: y,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = y), (l = d)) : (c = c.next = y),
          (a |= f);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (f = s),
          (s = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (a |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Dn |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function tm(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        i = n.callback;
      if (i !== null) {
        if (((n.callback = null), (n = r), typeof i != "function"))
          throw Error(R(191, i));
        i.call(n);
      }
    }
}
var ya = {},
  Zt = nn(ya),
  Go = nn(ya),
  Yo = nn(ya);
function kn(e) {
  if (e === ya) throw Error(R(174));
  return e;
}
function Ef(e, t) {
  switch ((ne(Yo, t), ne(Go, e), ne(Zt, ya), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Lc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Lc(t, e));
  }
  se(Zt), ne(Zt, t);
}
function Pi() {
  se(Zt), se(Go), se(Yo);
}
function iv(e) {
  kn(Yo.current);
  var t = kn(Zt.current),
    r = Lc(t, e.type);
  t !== r && (ne(Go, e), ne(Zt, r));
}
function $f(e) {
  Go.current === e && (se(Zt), se(Go));
}
var fe = nn(0);
function Js(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Vu = [];
function Af() {
  for (var e = 0; e < Vu.length; e++)
    Vu[e]._workInProgressVersionPrimary = null;
  Vu.length = 0;
}
var ms = Tr.ReactCurrentDispatcher,
  Ou = Tr.ReactCurrentBatchConfig,
  Fn = 0,
  pe = null,
  Te = null,
  $e = null,
  el = !1,
  bo = !1,
  Xo = 0,
  Vk = 0;
function Le() {
  throw Error(R(321));
}
function Rf(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!It(e[r], t[r])) return !1;
  return !0;
}
function zf(e, t, r, n, i, o) {
  if (
    ((Fn = o),
    (pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ms.current = e === null || e.memoizedState === null ? Uk : Hk),
    (e = r(n, i)),
    bo)
  ) {
    o = 0;
    do {
      if (((bo = !1), (Xo = 0), 25 <= o)) throw Error(R(301));
      (o += 1),
        ($e = Te = null),
        (t.updateQueue = null),
        (ms.current = Kk),
        (e = r(n, i));
    } while (bo);
  }
  if (
    ((ms.current = tl),
    (t = Te !== null && Te.next !== null),
    (Fn = 0),
    ($e = Te = pe = null),
    (el = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function Mf() {
  var e = Xo !== 0;
  return (Xo = 0), e;
}
function Ht() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return $e === null ? (pe.memoizedState = $e = e) : ($e = $e.next = e), $e;
}
function Pt() {
  if (Te === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Te.next;
  var t = $e === null ? pe.memoizedState : $e.next;
  if (t !== null) ($e = t), (Te = e);
  else {
    if (e === null) throw Error(R(310));
    (Te = e),
      (e = {
        memoizedState: Te.memoizedState,
        baseState: Te.baseState,
        baseQueue: Te.baseQueue,
        queue: Te.queue,
        next: null,
      }),
      $e === null ? (pe.memoizedState = $e = e) : ($e = $e.next = e);
  }
  return $e;
}
function qo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Nu(e) {
  var t = Pt(),
    r = t.queue;
  if (r === null) throw Error(R(311));
  r.lastRenderedReducer = e;
  var n = Te,
    i = n.baseQueue,
    o = r.pending;
  if (o !== null) {
    if (i !== null) {
      var a = i.next;
      (i.next = o.next), (o.next = a);
    }
    (n.baseQueue = i = o), (r.pending = null);
  }
  if (i !== null) {
    (o = i.next), (n = n.baseState);
    var s = (a = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((Fn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (n = u.hasEagerState ? u.eagerState : e(n, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((s = l = d), (a = n)) : (l = l.next = d),
          (pe.lanes |= c),
          (Dn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (a = n) : (l.next = s),
      It(n, t.memoizedState) || (tt = !0),
      (t.memoizedState = n),
      (t.baseState = a),
      (t.baseQueue = l),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (pe.lanes |= o), (Dn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function Wu(e) {
  var t = Pt(),
    r = t.queue;
  if (r === null) throw Error(R(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    i = r.pending,
    o = t.memoizedState;
  if (i !== null) {
    r.pending = null;
    var a = (i = i.next);
    do (o = e(o, a.action)), (a = a.next);
    while (a !== i);
    It(o, t.memoizedState) || (tt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (r.lastRenderedState = o);
  }
  return [o, n];
}
function ov() {}
function av(e, t) {
  var r = pe,
    n = Pt(),
    i = t(),
    o = !It(n.memoizedState, i);
  if (
    (o && ((n.memoizedState = i), (tt = !0)),
    (n = n.queue),
    Ff(uv.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || o || ($e !== null && $e.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      Qo(9, lv.bind(null, r, n, i, t), void 0, null),
      Ae === null)
    )
      throw Error(R(349));
    Fn & 30 || sv(r, t, i);
  }
  return i;
}
function sv(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function lv(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), cv(t) && dv(e);
}
function uv(e, t, r) {
  return r(function () {
    cv(t) && dv(e);
  });
}
function cv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !It(e, r);
  } catch {
    return !0;
  }
}
function dv(e) {
  var t = wr(e, 1);
  t !== null && Lt(t, e, 1, -1);
}
function rm(e) {
  var t = Ht();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Wk.bind(null, pe, e)),
    [t.memoizedState, e]
  );
}
function Qo(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function fv() {
  return Pt().memoizedState;
}
function ys(e, t, r, n) {
  var i = Ht();
  (pe.flags |= e),
    (i.memoizedState = Qo(1 | t, r, void 0, n === void 0 ? null : n));
}
function $l(e, t, r, n) {
  var i = Pt();
  n = n === void 0 ? null : n;
  var o = void 0;
  if (Te !== null) {
    var a = Te.memoizedState;
    if (((o = a.destroy), n !== null && Rf(n, a.deps))) {
      i.memoizedState = Qo(t, r, o, n);
      return;
    }
  }
  (pe.flags |= e), (i.memoizedState = Qo(1 | t, r, o, n));
}
function nm(e, t) {
  return ys(8390656, 8, e, t);
}
function Ff(e, t) {
  return $l(2048, 8, e, t);
}
function hv(e, t) {
  return $l(4, 2, e, t);
}
function pv(e, t) {
  return $l(4, 4, e, t);
}
function mv(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function yv(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), $l(4, 4, mv.bind(null, t, e), r)
  );
}
function Df() {}
function gv(e, t) {
  var r = Pt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Rf(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function vv(e, t) {
  var r = Pt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Rf(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function Sv(e, t, r) {
  return Fn & 21
    ? (It(r, t) || ((r = C0()), (pe.lanes |= r), (Dn |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (tt = !0)), (e.memoizedState = r));
}
function Ok(e, t) {
  var r = ee;
  (ee = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = Ou.transition;
  Ou.transition = {};
  try {
    e(!1), t();
  } finally {
    (ee = r), (Ou.transition = n);
  }
}
function bv() {
  return Pt().memoizedState;
}
function Nk(e, t, r) {
  var n = Yr(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    xv(e))
  )
    wv(t, r);
  else if (((r = rv(e, t, r, n)), r !== null)) {
    var i = Xe();
    Lt(r, e, n, i), kv(r, t, n);
  }
}
function Wk(e, t, r) {
  var n = Yr(e),
    i = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (xv(e)) wv(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = o(a, r);
        if (((i.hasEagerState = !0), (i.eagerState = s), It(s, a))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Tf(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (r = rv(e, t, i, n)),
      r !== null && ((i = Xe()), Lt(r, e, n, i), kv(r, t, n));
  }
}
function xv(e) {
  var t = e.alternate;
  return e === pe || (t !== null && t === pe);
}
function wv(e, t) {
  bo = el = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function kv(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), ff(e, r);
  }
}
var tl = {
    readContext: Tt,
    useCallback: Le,
    useContext: Le,
    useEffect: Le,
    useImperativeHandle: Le,
    useInsertionEffect: Le,
    useLayoutEffect: Le,
    useMemo: Le,
    useReducer: Le,
    useRef: Le,
    useState: Le,
    useDebugValue: Le,
    useDeferredValue: Le,
    useTransition: Le,
    useMutableSource: Le,
    useSyncExternalStore: Le,
    useId: Le,
    unstable_isNewReconciler: !1,
  },
  Uk = {
    readContext: Tt,
    useCallback: function (e, t) {
      return (Ht().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Tt,
    useEffect: nm,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        ys(4194308, 4, mv.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return ys(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ys(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = Ht();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = Ht();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = Nk.bind(null, pe, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ht();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: rm,
    useDebugValue: Df,
    useDeferredValue: function (e) {
      return (Ht().memoizedState = e);
    },
    useTransition: function () {
      var e = rm(!1),
        t = e[0];
      return (e = Ok.bind(null, e[1])), (Ht().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = pe,
        i = Ht();
      if (ce) {
        if (r === void 0) throw Error(R(407));
        r = r();
      } else {
        if (((r = t()), Ae === null)) throw Error(R(349));
        Fn & 30 || sv(n, t, r);
      }
      i.memoizedState = r;
      var o = { value: r, getSnapshot: t };
      return (
        (i.queue = o),
        nm(uv.bind(null, n, o, e), [e]),
        (n.flags |= 2048),
        Qo(9, lv.bind(null, n, o, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = Ht(),
        t = Ae.identifierPrefix;
      if (ce) {
        var r = fr,
          n = dr;
        (r = (n & ~(1 << (32 - jt(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = Xo++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = Vk++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Hk = {
    readContext: Tt,
    useCallback: gv,
    useContext: Tt,
    useEffect: Ff,
    useImperativeHandle: yv,
    useInsertionEffect: hv,
    useLayoutEffect: pv,
    useMemo: vv,
    useReducer: Nu,
    useRef: fv,
    useState: function () {
      return Nu(qo);
    },
    useDebugValue: Df,
    useDeferredValue: function (e) {
      var t = Pt();
      return Sv(t, Te.memoizedState, e);
    },
    useTransition: function () {
      var e = Nu(qo)[0],
        t = Pt().memoizedState;
      return [e, t];
    },
    useMutableSource: ov,
    useSyncExternalStore: av,
    useId: bv,
    unstable_isNewReconciler: !1,
  },
  Kk = {
    readContext: Tt,
    useCallback: gv,
    useContext: Tt,
    useEffect: Ff,
    useImperativeHandle: yv,
    useInsertionEffect: hv,
    useLayoutEffect: pv,
    useMemo: vv,
    useReducer: Wu,
    useRef: fv,
    useState: function () {
      return Wu(qo);
    },
    useDebugValue: Df,
    useDeferredValue: function (e) {
      var t = Pt();
      return Te === null ? (t.memoizedState = e) : Sv(t, Te.memoizedState, e);
    },
    useTransition: function () {
      var e = Wu(qo)[0],
        t = Pt().memoizedState;
      return [e, t];
    },
    useMutableSource: ov,
    useSyncExternalStore: av,
    useId: bv,
    unstable_isNewReconciler: !1,
  };
function zt(e, t) {
  if (e && e.defaultProps) {
    (t = me({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function od(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : me({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Al = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ln(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = Xe(),
      i = Yr(e),
      o = mr(n, i);
    (o.payload = t),
      r != null && (o.callback = r),
      (t = Kr(e, o, i)),
      t !== null && (Lt(t, e, i, n), ps(t, e, i));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = Xe(),
      i = Yr(e),
      o = mr(n, i);
    (o.tag = 1),
      (o.payload = t),
      r != null && (o.callback = r),
      (t = Kr(e, o, i)),
      t !== null && (Lt(t, e, i, n), ps(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = Xe(),
      n = Yr(e),
      i = mr(r, n);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Kr(e, i, n)),
      t !== null && (Lt(t, e, n, r), ps(t, e, n));
  },
};
function im(e, t, r, n, i, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, o, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Wo(r, n) || !Wo(i, o)
      : !0
  );
}
function Cv(e, t, r) {
  var n = !1,
    i = Jr,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Tt(o))
      : ((i = nt(t) ? zn : He.current),
        (n = t.contextTypes),
        (o = (n = n != null) ? Ci(e, i) : Jr)),
    (t = new t(r, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Al),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function om(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && Al.enqueueReplaceState(t, t.state, null);
}
function ad(e, t, r, n) {
  var i = e.stateNode;
  (i.props = r), (i.state = e.memoizedState), (i.refs = {}), Pf(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Tt(o))
    : ((o = nt(t) ? zn : He.current), (i.context = Ci(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (od(e, t, o, r), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Al.enqueueReplaceState(i, i.state, null),
      Zs(e, r, i, n),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ei(e, t) {
  try {
    var r = "",
      n = t;
    do (r += bw(n)), (n = n.return);
    while (n);
    var i = r;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Uu(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function sd(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var Gk = typeof WeakMap == "function" ? WeakMap : Map;
function _v(e, t, r) {
  (r = mr(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      nl || ((nl = !0), (gd = n)), sd(e, t);
    }),
    r
  );
}
function Tv(e, t, r) {
  (r = mr(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = t.value;
    (r.payload = function () {
      return n(i);
    }),
      (r.callback = function () {
        sd(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (r.callback = function () {
        sd(e, t),
          typeof n != "function" &&
            (Gr === null ? (Gr = new Set([this])) : Gr.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    r
  );
}
function am(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new Gk();
    var i = new Set();
    n.set(t, i);
  } else (i = n.get(t)), i === void 0 && ((i = new Set()), n.set(t, i));
  i.has(r) || (i.add(r), (e = sC.bind(null, e, t, r)), t.then(e, e));
}
function sm(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function lm(e, t, r, n, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = mr(-1, 1)), (t.tag = 2), Kr(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var Yk = Tr.ReactCurrentOwner,
  tt = !1;
function Ge(e, t, r, n) {
  t.child = e === null ? tv(t, null, r, n) : Ti(t, e.child, r, n);
}
function um(e, t, r, n, i) {
  r = r.render;
  var o = t.ref;
  return (
    yi(t, i),
    (n = zf(e, t, r, n, o, i)),
    (r = Mf()),
    e !== null && !tt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        kr(e, t, i))
      : (ce && r && bf(t), (t.flags |= 1), Ge(e, t, n, i), t.child)
  );
}
function cm(e, t, r, n, i) {
  if (e === null) {
    var o = r.type;
    return typeof o == "function" &&
      !Wf(o) &&
      o.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Pv(e, t, o, n, i))
      : ((e = bs(r.type, null, n, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var a = o.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : Wo), r(a, n) && e.ref === t.ref)
    )
      return kr(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Xr(o, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Pv(e, t, r, n, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Wo(o, n) && e.ref === t.ref)
      if (((tt = !1), (t.pendingProps = n = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (tt = !0);
      else return (t.lanes = e.lanes), kr(e, t, i);
  }
  return ld(e, t, r, n, i);
}
function Ev(e, t, r) {
  var n = t.pendingProps,
    i = n.children,
    o = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ne(ti, lt),
        (lt |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ne(ti, lt),
          (lt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = o !== null ? o.baseLanes : r),
        ne(ti, lt),
        (lt |= n);
    }
  else
    o !== null ? ((n = o.baseLanes | r), (t.memoizedState = null)) : (n = r),
      ne(ti, lt),
      (lt |= n);
  return Ge(e, t, i, r), t.child;
}
function $v(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ld(e, t, r, n, i) {
  var o = nt(r) ? zn : He.current;
  return (
    (o = Ci(t, o)),
    yi(t, i),
    (r = zf(e, t, r, n, o, i)),
    (n = Mf()),
    e !== null && !tt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        kr(e, t, i))
      : (ce && n && bf(t), (t.flags |= 1), Ge(e, t, r, i), t.child)
  );
}
function dm(e, t, r, n, i) {
  if (nt(r)) {
    var o = !0;
    Gs(t);
  } else o = !1;
  if ((yi(t, i), t.stateNode === null))
    gs(e, t), Cv(t, r, n), ad(t, r, n, i), (n = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var l = a.context,
      u = r.contextType;
    typeof u == "object" && u !== null
      ? (u = Tt(u))
      : ((u = nt(r) ? zn : He.current), (u = Ci(t, u)));
    var c = r.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== n || l !== u) && om(t, a, n, u)),
      (Fr = !1);
    var f = t.memoizedState;
    (a.state = f),
      Zs(t, n, a, i),
      (l = t.memoizedState),
      s !== n || f !== l || rt.current || Fr
        ? (typeof c == "function" && (od(t, r, c, n), (l = t.memoizedState)),
          (s = Fr || im(t, r, s, n, f, l, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = l)),
          (a.props = n),
          (a.state = l),
          (a.context = u),
          (n = s))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1));
  } else {
    (a = t.stateNode),
      nv(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : zt(t.type, s)),
      (a.props = u),
      (d = t.pendingProps),
      (f = a.context),
      (l = r.contextType),
      typeof l == "object" && l !== null
        ? (l = Tt(l))
        : ((l = nt(r) ? zn : He.current), (l = Ci(t, l)));
    var y = r.getDerivedStateFromProps;
    (c =
      typeof y == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== d || f !== l) && om(t, a, n, l)),
      (Fr = !1),
      (f = t.memoizedState),
      (a.state = f),
      Zs(t, n, a, i);
    var S = t.memoizedState;
    s !== d || f !== S || rt.current || Fr
      ? (typeof y == "function" && (od(t, r, y, n), (S = t.memoizedState)),
        (u = Fr || im(t, r, u, n, f, S, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(n, S, l),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(n, S, l)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = S)),
        (a.props = n),
        (a.state = S),
        (a.context = l),
        (n = u))
      : (typeof a.componentDidUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return ud(e, t, r, n, o, i);
}
function ud(e, t, r, n, i, o) {
  $v(e, t);
  var a = (t.flags & 128) !== 0;
  if (!n && !a) return i && qp(t, r, !1), kr(e, t, o);
  (n = t.stateNode), (Yk.current = t);
  var s =
    a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Ti(t, e.child, null, o)), (t.child = Ti(t, null, s, o)))
      : Ge(e, t, s, o),
    (t.memoizedState = n.state),
    i && qp(t, r, !0),
    t.child
  );
}
function Av(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Xp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Xp(e, t.context, !1),
    Ef(e, t.containerInfo);
}
function fm(e, t, r, n, i) {
  return _i(), wf(i), (t.flags |= 256), Ge(e, t, r, n), t.child;
}
var cd = { dehydrated: null, treeContext: null, retryLane: 0 };
function dd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Rv(e, t, r) {
  var n = t.pendingProps,
    i = fe.current,
    o = !1,
    a = (t.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ne(fe, i & 1),
    e === null)
  )
    return (
      nd(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = n.children),
          (e = n.fallback),
          o
            ? ((n = t.mode),
              (o = t.child),
              (a = { mode: "hidden", children: a }),
              !(n & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = a))
                : (o = Ml(a, n, 0, null)),
              (e = Pn(e, n, r, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = dd(r)),
              (t.memoizedState = cd),
              e)
            : Bf(t, a))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return Xk(e, t, a, n, s, i, r);
  if (o) {
    (o = n.fallback), (a = t.mode), (i = e.child), (s = i.sibling);
    var l = { mode: "hidden", children: n.children };
    return (
      !(a & 1) && t.child !== i
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = l),
          (t.deletions = null))
        : ((n = Xr(i, l)), (n.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = Xr(s, o)) : ((o = Pn(o, a, r, null)), (o.flags |= 2)),
      (o.return = t),
      (n.return = t),
      (n.sibling = o),
      (t.child = n),
      (n = o),
      (o = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? dd(r)
          : {
              baseLanes: a.baseLanes | r,
              cachePool: null,
              transitions: a.transitions,
            }),
      (o.memoizedState = a),
      (o.childLanes = e.childLanes & ~r),
      (t.memoizedState = cd),
      n
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (n = Xr(o, { mode: "visible", children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function Bf(e, t) {
  return (
    (t = Ml({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ga(e, t, r, n) {
  return (
    n !== null && wf(n),
    Ti(t, e.child, null, r),
    (e = Bf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Xk(e, t, r, n, i, o, a) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = Uu(Error(R(422)))), Ga(e, t, a, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = n.fallback),
        (i = t.mode),
        (n = Ml({ mode: "visible", children: n.children }, i, 0, null)),
        (o = Pn(o, i, a, null)),
        (o.flags |= 2),
        (n.return = t),
        (o.return = t),
        (n.sibling = o),
        (t.child = n),
        t.mode & 1 && Ti(t, e.child, null, a),
        (t.child.memoizedState = dd(a)),
        (t.memoizedState = cd),
        o);
  if (!(t.mode & 1)) return Ga(e, t, a, null);
  if (i.data === "$!") {
    if (((n = i.nextSibling && i.nextSibling.dataset), n)) var s = n.dgst;
    return (n = s), (o = Error(R(419))), (n = Uu(o, n, void 0)), Ga(e, t, a, n);
  }
  if (((s = (a & e.childLanes) !== 0), tt || s)) {
    if (((n = Ae), n !== null)) {
      switch (a & -a) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (n.suspendedLanes | a) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), wr(e, i), Lt(n, e, i, -1));
    }
    return Nf(), (n = Uu(Error(R(421)))), Ga(e, t, a, n);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = lC.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ut = Hr(i.nextSibling)),
      (ct = t),
      (ce = !0),
      (Dt = null),
      e !== null &&
        ((wt[kt++] = dr),
        (wt[kt++] = fr),
        (wt[kt++] = Mn),
        (dr = e.id),
        (fr = e.overflow),
        (Mn = t)),
      (t = Bf(t, n.children)),
      (t.flags |= 4096),
      t);
}
function hm(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), id(e.return, t, r);
}
function Hu(e, t, r, n, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = n),
      (o.tail = r),
      (o.tailMode = i));
}
function zv(e, t, r) {
  var n = t.pendingProps,
    i = n.revealOrder,
    o = n.tail;
  if ((Ge(e, t, n.children, r), (n = fe.current), n & 2))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && hm(e, r, t);
        else if (e.tag === 19) hm(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((ne(fe, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (r = t.child, i = null; r !== null; )
          (e = r.alternate),
            e !== null && Js(e) === null && (i = r),
            (r = r.sibling);
        (r = i),
          r === null
            ? ((i = t.child), (t.child = null))
            : ((i = r.sibling), (r.sibling = null)),
          Hu(t, !1, i, r, o);
        break;
      case "backwards":
        for (r = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Js(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = r), (r = i), (i = e);
        }
        Hu(t, !0, r, null, o);
        break;
      case "together":
        Hu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function gs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function kr(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Dn |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, r = Xr(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = Xr(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function qk(e, t, r) {
  switch (t.tag) {
    case 3:
      Av(t), _i();
      break;
    case 5:
      iv(t);
      break;
    case 1:
      nt(t.type) && Gs(t);
      break;
    case 4:
      Ef(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        i = t.memoizedProps.value;
      ne(qs, n._currentValue), (n._currentValue = i);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (ne(fe, fe.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? Rv(e, t, r)
          : (ne(fe, fe.current & 1),
            (e = kr(e, t, r)),
            e !== null ? e.sibling : null);
      ne(fe, fe.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return zv(e, t, r);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ne(fe, fe.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ev(e, t, r);
  }
  return kr(e, t, r);
}
var Mv, fd, Fv, Dv;
Mv = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
fd = function () {};
Fv = function (e, t, r, n) {
  var i = e.memoizedProps;
  if (i !== n) {
    (e = t.stateNode), kn(Zt.current);
    var o = null;
    switch (r) {
      case "input":
        (i = Fc(e, i)), (n = Fc(e, n)), (o = []);
        break;
      case "select":
        (i = me({}, i, { value: void 0 })),
          (n = me({}, n, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = jc(e, i)), (n = jc(e, n)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = Hs);
    }
    Ic(r, n);
    var a;
    r = null;
    for (u in i)
      if (!n.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var s = i[u];
          for (a in s) s.hasOwnProperty(a) && (r || (r = {}), (r[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Bo.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in n) {
      var l = n[u];
      if (
        ((s = i != null ? i[u] : void 0),
        n.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (r || (r = {}), (r[a] = ""));
            for (a in l)
              l.hasOwnProperty(a) &&
                s[a] !== l[a] &&
                (r || (r = {}), (r[a] = l[a]));
          } else r || (o || (o = []), o.push(u, r)), (r = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (o = o || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Bo.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && oe("scroll", e),
                  o || s === l || (o = []))
                : (o = o || []).push(u, l));
    }
    r && (o = o || []).push("style", r);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Dv = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function Qi(e, t) {
  if (!ce)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function Ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags & 14680064),
        (n |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags),
        (n |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function Qk(e, t, r) {
  var n = t.pendingProps;
  switch ((xf(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ie(t), null;
    case 1:
      return nt(t.type) && Ks(), Ie(t), null;
    case 3:
      return (
        (n = t.stateNode),
        Pi(),
        se(rt),
        se(He),
        Af(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ha(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Dt !== null && (bd(Dt), (Dt = null)))),
        fd(e, t),
        Ie(t),
        null
      );
    case 5:
      $f(t);
      var i = kn(Yo.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        Fv(e, t, r, n, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(R(166));
          return Ie(t), null;
        }
        if (((e = kn(Zt.current)), Ha(t))) {
          (n = t.stateNode), (r = t.type);
          var o = t.memoizedProps;
          switch (((n[Xt] = t), (n[Ko] = o), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              oe("cancel", n), oe("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              oe("load", n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < so.length; i++) oe(so[i], n);
              break;
            case "source":
              oe("error", n);
              break;
            case "img":
            case "image":
            case "link":
              oe("error", n), oe("load", n);
              break;
            case "details":
              oe("toggle", n);
              break;
            case "input":
              wp(n, o), oe("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!o.multiple }),
                oe("invalid", n);
              break;
            case "textarea":
              Cp(n, o), oe("invalid", n);
          }
          Ic(r, o), (i = null);
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var s = o[a];
              a === "children"
                ? typeof s == "string"
                  ? n.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ua(n.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    n.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ua(n.textContent, s, e),
                    (i = ["children", "" + s]))
                : Bo.hasOwnProperty(a) &&
                  s != null &&
                  a === "onScroll" &&
                  oe("scroll", n);
            }
          switch (r) {
            case "input":
              Ba(n), kp(n, o, !0);
              break;
            case "textarea":
              Ba(n), _p(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (n.onclick = Hs);
          }
          (n = i), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (a = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = u0(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                ? (e = a.createElement(r, { is: n.is }))
                : ((e = a.createElement(r)),
                  r === "select" &&
                    ((a = e),
                    n.multiple
                      ? (a.multiple = !0)
                      : n.size && (a.size = n.size)))
              : (e = a.createElementNS(e, r)),
            (e[Xt] = t),
            (e[Ko] = n),
            Mv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Vc(r, n)), r)) {
              case "dialog":
                oe("cancel", e), oe("close", e), (i = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                oe("load", e), (i = n);
                break;
              case "video":
              case "audio":
                for (i = 0; i < so.length; i++) oe(so[i], e);
                i = n;
                break;
              case "source":
                oe("error", e), (i = n);
                break;
              case "img":
              case "image":
              case "link":
                oe("error", e), oe("load", e), (i = n);
                break;
              case "details":
                oe("toggle", e), (i = n);
                break;
              case "input":
                wp(e, n), (i = Fc(e, n)), oe("invalid", e);
                break;
              case "option":
                i = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (i = me({}, n, { value: void 0 })),
                  oe("invalid", e);
                break;
              case "textarea":
                Cp(e, n), (i = jc(e, n)), oe("invalid", e);
                break;
              default:
                i = n;
            }
            Ic(r, i), (s = i);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var l = s[o];
                o === "style"
                  ? f0(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && c0(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (r !== "textarea" || l !== "") && jo(e, l)
                    : typeof l == "number" && jo(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Bo.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && oe("scroll", e)
                      : l != null && af(e, o, l, a));
              }
            switch (r) {
              case "input":
                Ba(e), kp(e, n, !1);
                break;
              case "textarea":
                Ba(e), _p(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + Zr(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (o = n.value),
                  o != null
                    ? fi(e, !!n.multiple, o, !1)
                    : n.defaultValue != null &&
                      fi(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Hs);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ie(t), null;
    case 6:
      if (e && t.stateNode != null) Dv(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(R(166));
        if (((r = kn(Yo.current)), kn(Zt.current), Ha(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[Xt] = t),
            (o = n.nodeValue !== r) && ((e = ct), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ua(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ua(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[Xt] = t),
            (t.stateNode = n);
      }
      return Ie(t), null;
    case 13:
      if (
        (se(fe),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ce && ut !== null && t.mode & 1 && !(t.flags & 128))
          J0(), _i(), (t.flags |= 98560), (o = !1);
        else if (((o = Ha(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(R(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(R(317));
            o[Xt] = t;
          } else
            _i(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ie(t), (o = !1);
        } else Dt !== null && (bd(Dt), (Dt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || fe.current & 1 ? Pe === 0 && (Pe = 3) : Nf())),
          t.updateQueue !== null && (t.flags |= 4),
          Ie(t),
          null);
    case 4:
      return (
        Pi(), fd(e, t), e === null && Uo(t.stateNode.containerInfo), Ie(t), null
      );
    case 10:
      return _f(t.type._context), Ie(t), null;
    case 17:
      return nt(t.type) && Ks(), Ie(t), null;
    case 19:
      if ((se(fe), (o = t.memoizedState), o === null)) return Ie(t), null;
      if (((n = (t.flags & 128) !== 0), (a = o.rendering), a === null))
        if (n) Qi(o, !1);
        else {
          if (Pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Js(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Qi(o, !1),
                    n = a.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (o = r),
                    (e = n),
                    (o.flags &= 14680066),
                    (a = o.alternate),
                    a === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = a.childLanes),
                        (o.lanes = a.lanes),
                        (o.child = a.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = a.memoizedProps),
                        (o.memoizedState = a.memoizedState),
                        (o.updateQueue = a.updateQueue),
                        (o.type = a.type),
                        (e = a.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return ne(fe, (fe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ve() > $i &&
            ((t.flags |= 128), (n = !0), Qi(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = Js(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Qi(o, !0),
              o.tail === null && o.tailMode === "hidden" && !a.alternate && !ce)
            )
              return Ie(t), null;
          } else
            2 * ve() - o.renderingStartTime > $i &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), Qi(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((r = o.last),
            r !== null ? (r.sibling = a) : (t.child = a),
            (o.last = a));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ve()),
          (t.sibling = null),
          (r = fe.current),
          ne(fe, n ? (r & 1) | 2 : r & 1),
          t)
        : (Ie(t), null);
    case 22:
    case 23:
      return (
        Of(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? lt & 1073741824 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ie(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function Zk(e, t) {
  switch ((xf(t), t.tag)) {
    case 1:
      return (
        nt(t.type) && Ks(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Pi(),
        se(rt),
        se(He),
        Af(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return $f(t), null;
    case 13:
      if (
        (se(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        _i();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return se(fe), null;
    case 4:
      return Pi(), null;
    case 10:
      return _f(t.type._context), null;
    case 22:
    case 23:
      return Of(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ya = !1,
  Ne = !1,
  Jk = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function ei(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        ye(e, t, n);
      }
    else r.current = null;
}
function hd(e, t, r) {
  try {
    r();
  } catch (n) {
    ye(e, t, n);
  }
}
var pm = !1;
function eC(e, t) {
  if (((qc = Ns), (e = V0()), Sf(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var i = n.anchorOffset,
            o = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, o.nodeType;
          } catch {
            r = null;
            break e;
          }
          var a = 0,
            s = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var y;
              d !== r || (i !== 0 && d.nodeType !== 3) || (s = a + i),
                d !== o || (n !== 0 && d.nodeType !== 3) || (l = a + n),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (y = d.firstChild) !== null;

            )
              (f = d), (d = y);
            for (;;) {
              if (d === e) break t;
              if (
                (f === r && ++u === i && (s = a),
                f === o && ++c === n && (l = a),
                (y = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = y;
          }
          r = s === -1 || l === -1 ? null : { start: s, end: l };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Qc = { focusedElem: e, selectionRange: r }, Ns = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var v = S.memoizedProps,
                    w = S.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : zt(t.type, v),
                      w
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (C) {
          ye(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (S = pm), (pm = !1), S;
}
function xo(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var i = (n = n.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && hd(t, r, o);
      }
      i = i.next;
    } while (i !== n);
  }
}
function Rl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function pd(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Bv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Bv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Xt], delete t[Ko], delete t[ed], delete t[Bk], delete t[jk])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function jv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function mm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || jv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function md(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = Hs));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (md(e, t, r), e = e.sibling; e !== null; ) md(e, t, r), (e = e.sibling);
}
function yd(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (yd(e, t, r), e = e.sibling; e !== null; ) yd(e, t, r), (e = e.sibling);
}
var Me = null,
  Ft = !1;
function Er(e, t, r) {
  for (r = r.child; r !== null; ) Lv(e, t, r), (r = r.sibling);
}
function Lv(e, t, r) {
  if (Qt && typeof Qt.onCommitFiberUnmount == "function")
    try {
      Qt.onCommitFiberUnmount(kl, r);
    } catch {}
  switch (r.tag) {
    case 5:
      Ne || ei(r, t);
    case 6:
      var n = Me,
        i = Ft;
      (Me = null),
        Er(e, t, r),
        (Me = n),
        (Ft = i),
        Me !== null &&
          (Ft
            ? ((e = Me),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : Me.removeChild(r.stateNode));
      break;
    case 18:
      Me !== null &&
        (Ft
          ? ((e = Me),
            (r = r.stateNode),
            e.nodeType === 8
              ? Lu(e.parentNode, r)
              : e.nodeType === 1 && Lu(e, r),
            Oo(e))
          : Lu(Me, r.stateNode));
      break;
    case 4:
      (n = Me),
        (i = Ft),
        (Me = r.stateNode.containerInfo),
        (Ft = !0),
        Er(e, t, r),
        (Me = n),
        (Ft = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ne &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        i = n = n.next;
        do {
          var o = i,
            a = o.destroy;
          (o = o.tag),
            a !== void 0 && (o & 2 || o & 4) && hd(r, t, a),
            (i = i.next);
        } while (i !== n);
      }
      Er(e, t, r);
      break;
    case 1:
      if (
        !Ne &&
        (ei(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount();
        } catch (s) {
          ye(r, t, s);
        }
      Er(e, t, r);
      break;
    case 21:
      Er(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((Ne = (n = Ne) || r.memoizedState !== null), Er(e, t, r), (Ne = n))
        : Er(e, t, r);
      break;
    default:
      Er(e, t, r);
  }
}
function ym(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new Jk()),
      t.forEach(function (n) {
        var i = uC.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(i, i));
      });
  }
}
function At(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      try {
        var o = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Me = s.stateNode), (Ft = !1);
              break e;
            case 3:
              (Me = s.stateNode.containerInfo), (Ft = !0);
              break e;
            case 4:
              (Me = s.stateNode.containerInfo), (Ft = !0);
              break e;
          }
          s = s.return;
        }
        if (Me === null) throw Error(R(160));
        Lv(o, a, i), (Me = null), (Ft = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        ye(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Iv(t, e), (t = t.sibling);
}
function Iv(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((At(t, e), Wt(e), n & 4)) {
        try {
          xo(3, e, e.return), Rl(3, e);
        } catch (v) {
          ye(e, e.return, v);
        }
        try {
          xo(5, e, e.return);
        } catch (v) {
          ye(e, e.return, v);
        }
      }
      break;
    case 1:
      At(t, e), Wt(e), n & 512 && r !== null && ei(r, r.return);
      break;
    case 5:
      if (
        (At(t, e),
        Wt(e),
        n & 512 && r !== null && ei(r, r.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          jo(i, "");
        } catch (v) {
          ye(e, e.return, v);
        }
      }
      if (n & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          a = r !== null ? r.memoizedProps : o,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && s0(i, o),
              Vc(s, a);
            var u = Vc(s, o);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                d = l[a + 1];
              c === "style"
                ? f0(i, d)
                : c === "dangerouslySetInnerHTML"
                ? c0(i, d)
                : c === "children"
                ? jo(i, d)
                : af(i, c, d, u);
            }
            switch (s) {
              case "input":
                Dc(i, o);
                break;
              case "textarea":
                l0(i, o);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? fi(i, !!o.multiple, y, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? fi(i, !!o.multiple, o.defaultValue, !0)
                      : fi(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Ko] = o;
          } catch (v) {
            ye(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((At(t, e), Wt(e), n & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          ye(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (At(t, e), Wt(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          Oo(t.containerInfo);
        } catch (v) {
          ye(e, e.return, v);
        }
      break;
    case 4:
      At(t, e), Wt(e);
      break;
    case 13:
      At(t, e),
        Wt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (If = ve())),
        n & 4 && ym(e);
      break;
    case 22:
      if (
        ((c = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((Ne = (u = Ne) || c), At(t, e), (Ne = u)) : At(t, e),
        Wt(e),
        n & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (M = e, c = e.child; c !== null; ) {
            for (d = M = c; M !== null; ) {
              switch (((f = M), (y = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  xo(4, f, f.return);
                  break;
                case 1:
                  ei(f, f.return);
                  var S = f.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (n = f), (r = f.return);
                    try {
                      (t = n),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (v) {
                      ye(n, r, v);
                    }
                  }
                  break;
                case 5:
                  ei(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    vm(d);
                    continue;
                  }
              }
              y !== null ? ((y.return = f), (M = y)) : vm(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = d.stateNode),
                      (l = d.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (s.style.display = d0("display", a)));
              } catch (v) {
                ye(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (v) {
                ye(e, e.return, v);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      At(t, e), Wt(e), n & 4 && ym(e);
      break;
    case 21:
      break;
    default:
      At(t, e), Wt(e);
  }
}
function Wt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (jv(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(R(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (jo(i, ""), (n.flags &= -33));
          var o = mm(e);
          yd(e, o, i);
          break;
        case 3:
        case 4:
          var a = n.stateNode.containerInfo,
            s = mm(e);
          md(e, s, a);
          break;
        default:
          throw Error(R(161));
      }
    } catch (l) {
      ye(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function tC(e, t, r) {
  (M = e), Vv(e);
}
function Vv(e, t, r) {
  for (var n = (e.mode & 1) !== 0; M !== null; ) {
    var i = M,
      o = i.child;
    if (i.tag === 22 && n) {
      var a = i.memoizedState !== null || Ya;
      if (!a) {
        var s = i.alternate,
          l = (s !== null && s.memoizedState !== null) || Ne;
        s = Ya;
        var u = Ne;
        if (((Ya = a), (Ne = l) && !u))
          for (M = i; M !== null; )
            (a = M),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Sm(i)
                : l !== null
                ? ((l.return = a), (M = l))
                : Sm(i);
        for (; o !== null; ) (M = o), Vv(o), (o = o.sibling);
        (M = i), (Ya = s), (Ne = u);
      }
      gm(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (M = o)) : gm(e);
  }
}
function gm(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ne || Rl(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !Ne)
                if (r === null) n.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : zt(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    i,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && tm(t, o, n);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                tm(t, a, r);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (r === null && t.flags & 4) {
                r = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && r.focus();
                    break;
                  case "img":
                    l.src && (r.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Oo(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        Ne || (t.flags & 512 && pd(t));
      } catch (f) {
        ye(t, t.return, f);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (M = r);
      break;
    }
    M = t.return;
  }
}
function vm(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (M = r);
      break;
    }
    M = t.return;
  }
}
function Sm(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Rl(4, t);
          } catch (l) {
            ye(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var i = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              ye(t, i, l);
            }
          }
          var o = t.return;
          try {
            pd(t);
          } catch (l) {
            ye(t, o, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            pd(t);
          } catch (l) {
            ye(t, a, l);
          }
      }
    } catch (l) {
      ye(t, t.return, l);
    }
    if (t === e) {
      M = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (M = s);
      break;
    }
    M = t.return;
  }
}
var rC = Math.ceil,
  rl = Tr.ReactCurrentDispatcher,
  jf = Tr.ReactCurrentOwner,
  _t = Tr.ReactCurrentBatchConfig,
  H = 0,
  Ae = null,
  ke = null,
  Be = 0,
  lt = 0,
  ti = nn(0),
  Pe = 0,
  Zo = null,
  Dn = 0,
  zl = 0,
  Lf = 0,
  wo = null,
  Je = null,
  If = 0,
  $i = 1 / 0,
  sr = null,
  nl = !1,
  gd = null,
  Gr = null,
  Xa = !1,
  Vr = null,
  il = 0,
  ko = 0,
  vd = null,
  vs = -1,
  Ss = 0;
function Xe() {
  return H & 6 ? ve() : vs !== -1 ? vs : (vs = ve());
}
function Yr(e) {
  return e.mode & 1
    ? H & 2 && Be !== 0
      ? Be & -Be
      : Ik.transition !== null
      ? (Ss === 0 && (Ss = C0()), Ss)
      : ((e = ee),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : R0(e.type))),
        e)
    : 1;
}
function Lt(e, t, r, n) {
  if (50 < ko) throw ((ko = 0), (vd = null), Error(R(185)));
  ha(e, r, n),
    (!(H & 2) || e !== Ae) &&
      (e === Ae && (!(H & 2) && (zl |= r), Pe === 4 && jr(e, Be)),
      it(e, n),
      r === 1 && H === 0 && !(t.mode & 1) && (($i = ve() + 500), El && on()));
}
function it(e, t) {
  var r = e.callbackNode;
  Iw(e, t);
  var n = Os(e, e === Ae ? Be : 0);
  if (n === 0)
    r !== null && Ep(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && Ep(r), t === 1))
      e.tag === 0 ? Lk(bm.bind(null, e)) : q0(bm.bind(null, e)),
        Fk(function () {
          !(H & 6) && on();
        }),
        (r = null);
    else {
      switch (_0(n)) {
        case 1:
          r = df;
          break;
        case 4:
          r = w0;
          break;
        case 16:
          r = Vs;
          break;
        case 536870912:
          r = k0;
          break;
        default:
          r = Vs;
      }
      r = Yv(r, Ov.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function Ov(e, t) {
  if (((vs = -1), (Ss = 0), H & 6)) throw Error(R(327));
  var r = e.callbackNode;
  if (gi() && e.callbackNode !== r) return null;
  var n = Os(e, e === Ae ? Be : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = ol(e, n);
  else {
    t = n;
    var i = H;
    H |= 2;
    var o = Wv();
    (Ae !== e || Be !== t) && ((sr = null), ($i = ve() + 500), Tn(e, t));
    do
      try {
        oC();
        break;
      } catch (s) {
        Nv(e, s);
      }
    while (!0);
    Cf(),
      (rl.current = o),
      (H = i),
      ke !== null ? (t = 0) : ((Ae = null), (Be = 0), (t = Pe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Hc(e)), i !== 0 && ((n = i), (t = Sd(e, i)))), t === 1)
    )
      throw ((r = Zo), Tn(e, 0), jr(e, n), it(e, ve()), r);
    if (t === 6) jr(e, n);
    else {
      if (
        ((i = e.current.alternate),
        !(n & 30) &&
          !nC(i) &&
          ((t = ol(e, n)),
          t === 2 && ((o = Hc(e)), o !== 0 && ((n = o), (t = Sd(e, o)))),
          t === 1))
      )
        throw ((r = Zo), Tn(e, 0), jr(e, n), it(e, ve()), r);
      switch (((e.finishedWork = i), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          mn(e, Je, sr);
          break;
        case 3:
          if (
            (jr(e, n), (n & 130023424) === n && ((t = If + 500 - ve()), 10 < t))
          ) {
            if (Os(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & n) !== n)) {
              Xe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Jc(mn.bind(null, e, Je, sr), t);
            break;
          }
          mn(e, Je, sr);
          break;
        case 4:
          if ((jr(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, i = -1; 0 < n; ) {
            var a = 31 - jt(n);
            (o = 1 << a), (a = t[a]), a > i && (i = a), (n &= ~o);
          }
          if (
            ((n = i),
            (n = ve() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * rC(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = Jc(mn.bind(null, e, Je, sr), n);
            break;
          }
          mn(e, Je, sr);
          break;
        case 5:
          mn(e, Je, sr);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return it(e, ve()), e.callbackNode === r ? Ov.bind(null, e) : null;
}
function Sd(e, t) {
  var r = wo;
  return (
    e.current.memoizedState.isDehydrated && (Tn(e, t).flags |= 256),
    (e = ol(e, t)),
    e !== 2 && ((t = Je), (Je = r), t !== null && bd(t)),
    e
  );
}
function bd(e) {
  Je === null ? (Je = e) : Je.push.apply(Je, e);
}
function nC(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var i = r[n],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!It(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function jr(e, t) {
  for (
    t &= ~Lf,
      t &= ~zl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - jt(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function bm(e) {
  if (H & 6) throw Error(R(327));
  gi();
  var t = Os(e, 0);
  if (!(t & 1)) return it(e, ve()), null;
  var r = ol(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Hc(e);
    n !== 0 && ((t = n), (r = Sd(e, n)));
  }
  if (r === 1) throw ((r = Zo), Tn(e, 0), jr(e, t), it(e, ve()), r);
  if (r === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    mn(e, Je, sr),
    it(e, ve()),
    null
  );
}
function Vf(e, t) {
  var r = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    (H = r), H === 0 && (($i = ve() + 500), El && on());
  }
}
function Bn(e) {
  Vr !== null && Vr.tag === 0 && !(H & 6) && gi();
  var t = H;
  H |= 1;
  var r = _t.transition,
    n = ee;
  try {
    if (((_t.transition = null), (ee = 1), e)) return e();
  } finally {
    (ee = n), (_t.transition = r), (H = t), !(H & 6) && on();
  }
}
function Of() {
  (lt = ti.current), se(ti);
}
function Tn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), Mk(r)), ke !== null))
    for (r = ke.return; r !== null; ) {
      var n = r;
      switch ((xf(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && Ks();
          break;
        case 3:
          Pi(), se(rt), se(He), Af();
          break;
        case 5:
          $f(n);
          break;
        case 4:
          Pi();
          break;
        case 13:
          se(fe);
          break;
        case 19:
          se(fe);
          break;
        case 10:
          _f(n.type._context);
          break;
        case 22:
        case 23:
          Of();
      }
      r = r.return;
    }
  if (
    ((Ae = e),
    (ke = e = Xr(e.current, null)),
    (Be = lt = t),
    (Pe = 0),
    (Zo = null),
    (Lf = zl = Dn = 0),
    (Je = wo = null),
    wn !== null)
  ) {
    for (t = 0; t < wn.length; t++)
      if (((r = wn[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var i = n.next,
          o = r.pending;
        if (o !== null) {
          var a = o.next;
          (o.next = i), (n.next = a);
        }
        r.pending = n;
      }
    wn = null;
  }
  return e;
}
function Nv(e, t) {
  do {
    var r = ke;
    try {
      if ((Cf(), (ms.current = tl), el)) {
        for (var n = pe.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), (n = n.next);
        }
        el = !1;
      }
      if (
        ((Fn = 0),
        ($e = Te = pe = null),
        (bo = !1),
        (Xo = 0),
        (jf.current = null),
        r === null || r.return === null)
      ) {
        (Pe = 1), (Zo = t), (ke = null);
        break;
      }
      e: {
        var o = e,
          a = r.return,
          s = r,
          l = t;
        if (
          ((t = Be),
          (s.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = s,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var y = sm(a);
          if (y !== null) {
            (y.flags &= -257),
              lm(y, a, s, o, t),
              y.mode & 1 && am(o, u, t),
              (t = y),
              (l = u);
            var S = t.updateQueue;
            if (S === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else S.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              am(o, u, t), Nf();
              break e;
            }
            l = Error(R(426));
          }
        } else if (ce && s.mode & 1) {
          var w = sm(a);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              lm(w, a, s, o, t),
              wf(Ei(l, s));
            break e;
          }
        }
        (o = l = Ei(l, s)),
          Pe !== 4 && (Pe = 2),
          wo === null ? (wo = [o]) : wo.push(o),
          (o = a);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = _v(o, l, t);
              em(o, p);
              break e;
            case 1:
              s = l;
              var h = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Gr === null || !Gr.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var C = Tv(o, s, t);
                em(o, C);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Hv(r);
    } catch (P) {
      (t = P), ke === r && r !== null && (ke = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function Wv() {
  var e = rl.current;
  return (rl.current = tl), e === null ? tl : e;
}
function Nf() {
  (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
    Ae === null || (!(Dn & 268435455) && !(zl & 268435455)) || jr(Ae, Be);
}
function ol(e, t) {
  var r = H;
  H |= 2;
  var n = Wv();
  (Ae !== e || Be !== t) && ((sr = null), Tn(e, t));
  do
    try {
      iC();
      break;
    } catch (i) {
      Nv(e, i);
    }
  while (!0);
  if ((Cf(), (H = r), (rl.current = n), ke !== null)) throw Error(R(261));
  return (Ae = null), (Be = 0), Pe;
}
function iC() {
  for (; ke !== null; ) Uv(ke);
}
function oC() {
  for (; ke !== null && !Aw(); ) Uv(ke);
}
function Uv(e) {
  var t = Gv(e.alternate, e, lt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Hv(e) : (ke = t),
    (jf.current = null);
}
function Hv(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = Zk(r, t)), r !== null)) {
        (r.flags &= 32767), (ke = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Pe = 6), (ke = null);
        return;
      }
    } else if (((r = Qk(r, t, lt)), r !== null)) {
      ke = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ke = t;
      return;
    }
    ke = t = e;
  } while (t !== null);
  Pe === 0 && (Pe = 5);
}
function mn(e, t, r) {
  var n = ee,
    i = _t.transition;
  try {
    (_t.transition = null), (ee = 1), aC(e, t, r, n);
  } finally {
    (_t.transition = i), (ee = n);
  }
  return null;
}
function aC(e, t, r, n) {
  do gi();
  while (Vr !== null);
  if (H & 6) throw Error(R(327));
  r = e.finishedWork;
  var i = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = r.lanes | r.childLanes;
  if (
    (Vw(e, o),
    e === Ae && ((ke = Ae = null), (Be = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Xa ||
      ((Xa = !0),
      Yv(Vs, function () {
        return gi(), null;
      })),
    (o = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || o)
  ) {
    (o = _t.transition), (_t.transition = null);
    var a = ee;
    ee = 1;
    var s = H;
    (H |= 4),
      (jf.current = null),
      eC(e, r),
      Iv(r, e),
      Tk(Qc),
      (Ns = !!qc),
      (Qc = qc = null),
      (e.current = r),
      tC(r),
      Rw(),
      (H = s),
      (ee = a),
      (_t.transition = o);
  } else e.current = r;
  if (
    (Xa && ((Xa = !1), (Vr = e), (il = i)),
    (o = e.pendingLanes),
    o === 0 && (Gr = null),
    Fw(r.stateNode),
    it(e, ve()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (i = t[r]), n(i.value, { componentStack: i.stack, digest: i.digest });
  if (nl) throw ((nl = !1), (e = gd), (gd = null), e);
  return (
    il & 1 && e.tag !== 0 && gi(),
    (o = e.pendingLanes),
    o & 1 ? (e === vd ? ko++ : ((ko = 0), (vd = e))) : (ko = 0),
    on(),
    null
  );
}
function gi() {
  if (Vr !== null) {
    var e = _0(il),
      t = _t.transition,
      r = ee;
    try {
      if (((_t.transition = null), (ee = 16 > e ? 16 : e), Vr === null))
        var n = !1;
      else {
        if (((e = Vr), (Vr = null), (il = 0), H & 6)) throw Error(R(331));
        var i = H;
        for (H |= 4, M = e.current; M !== null; ) {
          var o = M,
            a = o.child;
          if (M.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (M = u; M !== null; ) {
                  var c = M;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xo(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (M = d);
                  else
                    for (; M !== null; ) {
                      c = M;
                      var f = c.sibling,
                        y = c.return;
                      if ((Bv(c), c === u)) {
                        M = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = y), (M = f);
                        break;
                      }
                      M = y;
                    }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var v = S.child;
                if (v !== null) {
                  S.child = null;
                  do {
                    var w = v.sibling;
                    (v.sibling = null), (v = w);
                  } while (v !== null);
                }
              }
              M = o;
            }
          }
          if (o.subtreeFlags & 2064 && a !== null) (a.return = o), (M = a);
          else
            e: for (; M !== null; ) {
              if (((o = M), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    xo(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (M = p);
                break e;
              }
              M = o.return;
            }
        }
        var h = e.current;
        for (M = h; M !== null; ) {
          a = M;
          var m = a.child;
          if (a.subtreeFlags & 2064 && m !== null) (m.return = a), (M = m);
          else
            e: for (a = h; M !== null; ) {
              if (((s = M), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rl(9, s);
                  }
                } catch (P) {
                  ye(s, s.return, P);
                }
              if (s === a) {
                M = null;
                break e;
              }
              var C = s.sibling;
              if (C !== null) {
                (C.return = s.return), (M = C);
                break e;
              }
              M = s.return;
            }
        }
        if (
          ((H = i), on(), Qt && typeof Qt.onPostCommitFiberRoot == "function")
        )
          try {
            Qt.onPostCommitFiberRoot(kl, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (ee = r), (_t.transition = t);
    }
  }
  return !1;
}
function xm(e, t, r) {
  (t = Ei(r, t)),
    (t = _v(e, t, 1)),
    (e = Kr(e, t, 1)),
    (t = Xe()),
    e !== null && (ha(e, 1, t), it(e, t));
}
function ye(e, t, r) {
  if (e.tag === 3) xm(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        xm(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (Gr === null || !Gr.has(n)))
        ) {
          (e = Ei(r, e)),
            (e = Tv(t, e, 1)),
            (t = Kr(t, e, 1)),
            (e = Xe()),
            t !== null && (ha(t, 1, e), it(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function sC(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = Xe()),
    (e.pingedLanes |= e.suspendedLanes & r),
    Ae === e &&
      (Be & r) === r &&
      (Pe === 4 || (Pe === 3 && (Be & 130023424) === Be && 500 > ve() - If)
        ? Tn(e, 0)
        : (Lf |= r)),
    it(e, t);
}
function Kv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ia), (Ia <<= 1), !(Ia & 130023424) && (Ia = 4194304))
      : (t = 1));
  var r = Xe();
  (e = wr(e, t)), e !== null && (ha(e, t, r), it(e, r));
}
function lC(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), Kv(e, r);
}
function uC(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        i = e.memoizedState;
      i !== null && (r = i.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  n !== null && n.delete(t), Kv(e, r);
}
var Gv;
Gv = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || rt.current) tt = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (tt = !1), qk(e, t, r);
      tt = !!(e.flags & 131072);
    }
  else (tt = !1), ce && t.flags & 1048576 && Q0(t, Xs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      gs(e, t), (e = t.pendingProps);
      var i = Ci(t, He.current);
      yi(t, r), (i = zf(null, t, n, e, i, r));
      var o = Mf();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            nt(n) ? ((o = !0), Gs(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Pf(t),
            (i.updater = Al),
            (t.stateNode = i),
            (i._reactInternals = t),
            ad(t, n, e, r),
            (t = ud(null, t, n, !0, o, r)))
          : ((t.tag = 0), ce && o && bf(t), Ge(null, t, i, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (gs(e, t),
          (e = t.pendingProps),
          (i = n._init),
          (n = i(n._payload)),
          (t.type = n),
          (i = t.tag = dC(n)),
          (e = zt(n, e)),
          i)
        ) {
          case 0:
            t = ld(null, t, n, e, r);
            break e;
          case 1:
            t = dm(null, t, n, e, r);
            break e;
          case 11:
            t = um(null, t, n, e, r);
            break e;
          case 14:
            t = cm(null, t, n, zt(n.type, e), r);
            break e;
        }
        throw Error(R(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : zt(n, i)),
        ld(e, t, n, i, r)
      );
    case 1:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : zt(n, i)),
        dm(e, t, n, i, r)
      );
    case 3:
      e: {
        if ((Av(t), e === null)) throw Error(R(387));
        (n = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          nv(e, t),
          Zs(t, n, null, r);
        var a = t.memoizedState;
        if (((n = a.element), o.isDehydrated))
          if (
            ((o = {
              element: n,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Ei(Error(R(423)), t)), (t = fm(e, t, n, r, i));
            break e;
          } else if (n !== i) {
            (i = Ei(Error(R(424)), t)), (t = fm(e, t, n, r, i));
            break e;
          } else
            for (
              ut = Hr(t.stateNode.containerInfo.firstChild),
                ct = t,
                ce = !0,
                Dt = null,
                r = tv(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((_i(), n === i)) {
            t = kr(e, t, r);
            break e;
          }
          Ge(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        iv(t),
        e === null && nd(t),
        (n = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        Zc(n, i) ? (a = null) : o !== null && Zc(n, o) && (t.flags |= 32),
        $v(e, t),
        Ge(e, t, a, r),
        t.child
      );
    case 6:
      return e === null && nd(t), null;
    case 13:
      return Rv(e, t, r);
    case 4:
      return (
        Ef(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = Ti(t, null, n, r)) : Ge(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : zt(n, i)),
        um(e, t, n, i, r)
      );
    case 7:
      return Ge(e, t, t.pendingProps, r), t.child;
    case 8:
      return Ge(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return Ge(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (a = i.value),
          ne(qs, n._currentValue),
          (n._currentValue = a),
          o !== null)
        )
          if (It(o.value, a)) {
            if (o.children === i.children && !rt.current) {
              t = kr(e, t, r);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                a = o.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === n) {
                    if (o.tag === 1) {
                      (l = mr(-1, r & -r)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (o.lanes |= r),
                      (l = o.alternate),
                      l !== null && (l.lanes |= r),
                      id(o.return, r, t),
                      (s.lanes |= r);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((a = o.return), a === null)) throw Error(R(341));
                (a.lanes |= r),
                  (s = a.alternate),
                  s !== null && (s.lanes |= r),
                  id(a, r, t),
                  (a = o.sibling);
              } else a = o.child;
              if (a !== null) a.return = o;
              else
                for (a = o; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((o = a.sibling), o !== null)) {
                    (o.return = a.return), (a = o);
                    break;
                  }
                  a = a.return;
                }
              o = a;
            }
        Ge(e, t, i.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (n = t.pendingProps.children),
        yi(t, r),
        (i = Tt(i)),
        (n = n(i)),
        (t.flags |= 1),
        Ge(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (i = zt(n, t.pendingProps)),
        (i = zt(n.type, i)),
        cm(e, t, n, i, r)
      );
    case 15:
      return Pv(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : zt(n, i)),
        gs(e, t),
        (t.tag = 1),
        nt(n) ? ((e = !0), Gs(t)) : (e = !1),
        yi(t, r),
        Cv(t, n, i),
        ad(t, n, i, r),
        ud(null, t, n, !0, e, r)
      );
    case 19:
      return zv(e, t, r);
    case 22:
      return Ev(e, t, r);
  }
  throw Error(R(156, t.tag));
};
function Yv(e, t) {
  return x0(e, t);
}
function cC(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ct(e, t, r, n) {
  return new cC(e, t, r, n);
}
function Wf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function dC(e) {
  if (typeof e == "function") return Wf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === lf)) return 11;
    if (e === uf) return 14;
  }
  return 2;
}
function Xr(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = Ct(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function bs(e, t, r, n, i, o) {
  var a = 2;
  if (((n = e), typeof e == "function")) Wf(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Hn:
        return Pn(r.children, i, o, t);
      case sf:
        (a = 8), (i |= 8);
        break;
      case Ac:
        return (
          (e = Ct(12, r, t, i | 2)), (e.elementType = Ac), (e.lanes = o), e
        );
      case Rc:
        return (e = Ct(13, r, t, i)), (e.elementType = Rc), (e.lanes = o), e;
      case zc:
        return (e = Ct(19, r, t, i)), (e.elementType = zc), (e.lanes = o), e;
      case i0:
        return Ml(r, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case r0:
              a = 10;
              break e;
            case n0:
              a = 9;
              break e;
            case lf:
              a = 11;
              break e;
            case uf:
              a = 14;
              break e;
            case Mr:
              (a = 16), (n = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ct(a, r, t, i)), (t.elementType = e), (t.type = n), (t.lanes = o), t
  );
}
function Pn(e, t, r, n) {
  return (e = Ct(7, e, n, t)), (e.lanes = r), e;
}
function Ml(e, t, r, n) {
  return (
    (e = Ct(22, e, n, t)),
    (e.elementType = i0),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ku(e, t, r) {
  return (e = Ct(6, e, null, t)), (e.lanes = r), e;
}
function Gu(e, t, r) {
  return (
    (t = Ct(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function fC(e, t, r, n, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Pu(0)),
    (this.expirationTimes = Pu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Pu(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Uf(e, t, r, n, i, o, a, s, l) {
  return (
    (e = new fC(e, t, r, s, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ct(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Pf(o),
    e
  );
}
function hC(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Un,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function Xv(e) {
  if (!e) return Jr;
  e = e._reactInternals;
  e: {
    if (Ln(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (nt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (nt(r)) return X0(e, r, t);
  }
  return t;
}
function qv(e, t, r, n, i, o, a, s, l) {
  return (
    (e = Uf(r, n, !0, e, i, o, a, s, l)),
    (e.context = Xv(null)),
    (r = e.current),
    (n = Xe()),
    (i = Yr(r)),
    (o = mr(n, i)),
    (o.callback = t ?? null),
    Kr(r, o, i),
    (e.current.lanes = i),
    ha(e, i, n),
    it(e, n),
    e
  );
}
function Fl(e, t, r, n) {
  var i = t.current,
    o = Xe(),
    a = Yr(i);
  return (
    (r = Xv(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = mr(o, a)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = Kr(i, t, a)),
    e !== null && (Lt(e, i, a, o), ps(e, i, a)),
    a
  );
}
function al(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function wm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function Hf(e, t) {
  wm(e, t), (e = e.alternate) && wm(e, t);
}
function pC() {
  return null;
}
var Qv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Kf(e) {
  this._internalRoot = e;
}
Dl.prototype.render = Kf.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Fl(e, t, null, null);
};
Dl.prototype.unmount = Kf.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Bn(function () {
      Fl(null, e, null, null);
    }),
      (t[xr] = null);
  }
};
function Dl(e) {
  this._internalRoot = e;
}
Dl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = E0();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Br.length && t !== 0 && t < Br[r].priority; r++);
    Br.splice(r, 0, e), r === 0 && A0(e);
  }
};
function Gf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Bl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function km() {}
function mC(e, t, r, n, i) {
  if (i) {
    if (typeof n == "function") {
      var o = n;
      n = function () {
        var u = al(a);
        o.call(u);
      };
    }
    var a = qv(t, n, e, 0, null, !1, !1, "", km);
    return (
      (e._reactRootContainer = a),
      (e[xr] = a.current),
      Uo(e.nodeType === 8 ? e.parentNode : e),
      Bn(),
      a
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof n == "function") {
    var s = n;
    n = function () {
      var u = al(l);
      s.call(u);
    };
  }
  var l = Uf(e, 0, !1, null, null, !1, !1, "", km);
  return (
    (e._reactRootContainer = l),
    (e[xr] = l.current),
    Uo(e.nodeType === 8 ? e.parentNode : e),
    Bn(function () {
      Fl(t, l, r, n);
    }),
    l
  );
}
function jl(e, t, r, n, i) {
  var o = r._reactRootContainer;
  if (o) {
    var a = o;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var l = al(a);
        s.call(l);
      };
    }
    Fl(t, a, e, i);
  } else a = mC(r, t, e, i, n);
  return al(a);
}
T0 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = ao(t.pendingLanes);
        r !== 0 &&
          (ff(t, r | 1), it(t, ve()), !(H & 6) && (($i = ve() + 500), on()));
      }
      break;
    case 13:
      Bn(function () {
        var n = wr(e, 1);
        if (n !== null) {
          var i = Xe();
          Lt(n, e, 1, i);
        }
      }),
        Hf(e, 1);
  }
};
hf = function (e) {
  if (e.tag === 13) {
    var t = wr(e, 134217728);
    if (t !== null) {
      var r = Xe();
      Lt(t, e, 134217728, r);
    }
    Hf(e, 134217728);
  }
};
P0 = function (e) {
  if (e.tag === 13) {
    var t = Yr(e),
      r = wr(e, t);
    if (r !== null) {
      var n = Xe();
      Lt(r, e, t, n);
    }
    Hf(e, t);
  }
};
E0 = function () {
  return ee;
};
$0 = function (e, t) {
  var r = ee;
  try {
    return (ee = e), t();
  } finally {
    ee = r;
  }
};
Nc = function (e, t, r) {
  switch (t) {
    case "input":
      if ((Dc(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var i = Pl(n);
            if (!i) throw Error(R(90));
            a0(n), Dc(n, i);
          }
        }
      }
      break;
    case "textarea":
      l0(e, r);
      break;
    case "select":
      (t = r.value), t != null && fi(e, !!r.multiple, t, !1);
  }
};
m0 = Vf;
y0 = Bn;
var yC = { usingClientEntryPoint: !1, Events: [ma, Xn, Pl, h0, p0, Vf] },
  Zi = {
    findFiberByHostInstance: xn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  gC = {
    bundleType: Zi.bundleType,
    version: Zi.version,
    rendererPackageName: Zi.rendererPackageName,
    rendererConfig: Zi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Tr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = S0(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Zi.findFiberByHostInstance || pC,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var qa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!qa.isDisabled && qa.supportsFiber)
    try {
      (kl = qa.inject(gC)), (Qt = qa);
    } catch {}
}
mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yC;
mt.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Gf(t)) throw Error(R(200));
  return hC(e, t, null, r);
};
mt.createRoot = function (e, t) {
  if (!Gf(e)) throw Error(R(299));
  var r = !1,
    n = "",
    i = Qv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Uf(e, 1, !1, null, null, r, !1, n, i)),
    (e[xr] = t.current),
    Uo(e.nodeType === 8 ? e.parentNode : e),
    new Kf(t)
  );
};
mt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = S0(t)), (e = e === null ? null : e.stateNode), e;
};
mt.flushSync = function (e) {
  return Bn(e);
};
mt.hydrate = function (e, t, r) {
  if (!Bl(t)) throw Error(R(200));
  return jl(null, e, t, !0, r);
};
mt.hydrateRoot = function (e, t, r) {
  if (!Gf(e)) throw Error(R(405));
  var n = (r != null && r.hydratedSources) || null,
    i = !1,
    o = "",
    a = Qv;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (i = !0),
      r.identifierPrefix !== void 0 && (o = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
    (t = qv(t, null, e, 1, r ?? null, i, !1, o, a)),
    (e[xr] = t.current),
    Uo(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (i = r._getVersion),
        (i = i(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, i])
          : t.mutableSourceEagerHydrationData.push(r, i);
  return new Dl(t);
};
mt.render = function (e, t, r) {
  if (!Bl(t)) throw Error(R(200));
  return jl(null, e, t, !1, r);
};
mt.unmountComponentAtNode = function (e) {
  if (!Bl(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (Bn(function () {
        jl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[xr] = null);
        });
      }),
      !0)
    : !1;
};
mt.unstable_batchedUpdates = Vf;
mt.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!Bl(r)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return jl(e, t, r, !1, n);
};
mt.version = "18.3.1-next-f1338f8080-20240426";
function Zv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zv);
    } catch (e) {
      console.error(e);
    }
}
Zv(), (Zg.exports = mt);
var Yf = Zg.exports,
  Cm = Yf;
(Ec.createRoot = Cm.createRoot), (Ec.hydrateRoot = Cm.hydrateRoot);
function vC(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function SC(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var bC = (function () {
    function e(r) {
      var n = this;
      (this._insertTag = function (i) {
        var o;
        n.tags.length === 0
          ? n.insertionPoint
            ? (o = n.insertionPoint.nextSibling)
            : n.prepend
            ? (o = n.container.firstChild)
            : (o = n.before)
          : (o = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(i, o),
          n.tags.push(i);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(SC(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = vC(i);
          try {
            o.insertRule(n, o.cssRules.length);
          } catch {}
        } else i.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (n) {
          return n.parentNode && n.parentNode.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Ve = "-ms-",
  sl = "-moz-",
  Y = "-webkit-",
  Jv = "comm",
  Xf = "rule",
  qf = "decl",
  xC = "@import",
  e1 = "@keyframes",
  wC = "@layer",
  kC = Math.abs,
  Ll = String.fromCharCode,
  CC = Object.assign;
function _C(e, t) {
  return De(e, 0) ^ 45
    ? (((((((t << 2) ^ De(e, 0)) << 2) ^ De(e, 1)) << 2) ^ De(e, 2)) << 2) ^
        De(e, 3)
    : 0;
}
function t1(e) {
  return e.trim();
}
function TC(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function X(e, t, r) {
  return e.replace(t, r);
}
function xd(e, t) {
  return e.indexOf(t);
}
function De(e, t) {
  return e.charCodeAt(t) | 0;
}
function Jo(e, t, r) {
  return e.slice(t, r);
}
function Gt(e) {
  return e.length;
}
function Qf(e) {
  return e.length;
}
function Qa(e, t) {
  return t.push(e), e;
}
function PC(e, t) {
  return e.map(t).join("");
}
var Il = 1,
  Ai = 1,
  r1 = 0,
  ot = 0,
  we = 0,
  ji = "";
function Vl(e, t, r, n, i, o, a) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: i,
    children: o,
    line: Il,
    column: Ai,
    length: a,
    return: "",
  };
}
function Ji(e, t) {
  return CC(Vl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function EC() {
  return we;
}
function $C() {
  return (
    (we = ot > 0 ? De(ji, --ot) : 0), Ai--, we === 10 && ((Ai = 1), Il--), we
  );
}
function dt() {
  return (
    (we = ot < r1 ? De(ji, ot++) : 0), Ai++, we === 10 && ((Ai = 1), Il++), we
  );
}
function Jt() {
  return De(ji, ot);
}
function xs() {
  return ot;
}
function ga(e, t) {
  return Jo(ji, e, t);
}
function ea(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function n1(e) {
  return (Il = Ai = 1), (r1 = Gt((ji = e))), (ot = 0), [];
}
function i1(e) {
  return (ji = ""), e;
}
function ws(e) {
  return t1(ga(ot - 1, wd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function AC(e) {
  for (; (we = Jt()) && we < 33; ) dt();
  return ea(e) > 2 || ea(we) > 3 ? "" : " ";
}
function RC(e, t) {
  for (
    ;
    --t &&
    dt() &&
    !(we < 48 || we > 102 || (we > 57 && we < 65) || (we > 70 && we < 97));

  );
  return ga(e, xs() + (t < 6 && Jt() == 32 && dt() == 32));
}
function wd(e) {
  for (; dt(); )
    switch (we) {
      case e:
        return ot;
      case 34:
      case 39:
        e !== 34 && e !== 39 && wd(we);
        break;
      case 40:
        e === 41 && wd(e);
        break;
      case 92:
        dt();
        break;
    }
  return ot;
}
function zC(e, t) {
  for (; dt() && e + we !== 57; ) if (e + we === 84 && Jt() === 47) break;
  return "/*" + ga(t, ot - 1) + "*" + Ll(e === 47 ? e : dt());
}
function MC(e) {
  for (; !ea(Jt()); ) dt();
  return ga(e, ot);
}
function FC(e) {
  return i1(ks("", null, null, null, [""], (e = n1(e)), 0, [0], e));
}
function ks(e, t, r, n, i, o, a, s, l) {
  for (
    var u = 0,
      c = 0,
      d = a,
      f = 0,
      y = 0,
      S = 0,
      v = 1,
      w = 1,
      p = 1,
      h = 0,
      m = "",
      C = i,
      P = o,
      A = n,
      E = m;
    w;

  )
    switch (((S = h), (h = dt()))) {
      case 40:
        if (S != 108 && De(E, d - 1) == 58) {
          xd((E += X(ws(h), "&", "&\f")), "&\f") != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += ws(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += AC(S);
        break;
      case 92:
        E += RC(xs() - 1, 7);
        continue;
      case 47:
        switch (Jt()) {
          case 42:
          case 47:
            Qa(DC(zC(dt(), xs()), t, r), l);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * v:
        s[u++] = Gt(E) * p;
      case 125 * v:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            w = 0;
          case 59 + c:
            p == -1 && (E = X(E, /\f/g, "")),
              y > 0 &&
                Gt(E) - d &&
                Qa(
                  y > 32
                    ? Tm(E + ";", n, r, d - 1)
                    : Tm(X(E, " ", "") + ";", n, r, d - 2),
                  l
                );
            break;
          case 59:
            E += ";";
          default:
            if (
              (Qa((A = _m(E, t, r, u, c, i, s, m, (C = []), (P = []), d)), o),
              h === 123)
            )
              if (c === 0) ks(E, t, A, A, C, o, d, s, P);
              else
                switch (f === 99 && De(E, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ks(
                      e,
                      A,
                      A,
                      n && Qa(_m(e, A, A, 0, 0, i, s, m, i, (C = []), d), P),
                      i,
                      P,
                      d,
                      s,
                      n ? C : P
                    );
                    break;
                  default:
                    ks(E, A, A, A, [""], P, 0, s, P);
                }
        }
        (u = c = y = 0), (v = p = 1), (m = E = ""), (d = a);
        break;
      case 58:
        (d = 1 + Gt(E)), (y = S);
      default:
        if (v < 1) {
          if (h == 123) --v;
          else if (h == 125 && v++ == 0 && $C() == 125) continue;
        }
        switch (((E += Ll(h)), h * v)) {
          case 38:
            p = c > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            (s[u++] = (Gt(E) - 1) * p), (p = 1);
            break;
          case 64:
            Jt() === 45 && (E += ws(dt())),
              (f = Jt()),
              (c = d = Gt((m = E += MC(xs())))),
              h++;
            break;
          case 45:
            S === 45 && Gt(E) == 2 && (v = 0);
        }
    }
  return o;
}
function _m(e, t, r, n, i, o, a, s, l, u, c) {
  for (
    var d = i - 1, f = i === 0 ? o : [""], y = Qf(f), S = 0, v = 0, w = 0;
    S < n;
    ++S
  )
    for (var p = 0, h = Jo(e, d + 1, (d = kC((v = a[S])))), m = e; p < y; ++p)
      (m = t1(v > 0 ? f[p] + " " + h : X(h, /&\f/g, f[p]))) && (l[w++] = m);
  return Vl(e, t, r, i === 0 ? Xf : s, l, u, c);
}
function DC(e, t, r) {
  return Vl(e, t, r, Jv, Ll(EC()), Jo(e, 2, -2), 0);
}
function Tm(e, t, r, n) {
  return Vl(e, t, r, qf, Jo(e, 0, n), Jo(e, n + 1, -1), n);
}
function vi(e, t) {
  for (var r = "", n = Qf(e), i = 0; i < n; i++) r += t(e[i], i, e, t) || "";
  return r;
}
function BC(e, t, r, n) {
  switch (e.type) {
    case wC:
      if (e.children.length) break;
    case xC:
    case qf:
      return (e.return = e.return || e.value);
    case Jv:
      return "";
    case e1:
      return (e.return = e.value + "{" + vi(e.children, n) + "}");
    case Xf:
      e.value = e.props.join(",");
  }
  return Gt((r = vi(e.children, n)))
    ? (e.return = e.value + "{" + r + "}")
    : "";
}
function jC(e) {
  var t = Qf(e);
  return function (r, n, i, o) {
    for (var a = "", s = 0; s < t; s++) a += e[s](r, n, i, o) || "";
    return a;
  };
}
function LC(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var Pm = function (t) {
  var r = new WeakMap();
  return function (n) {
    if (r.has(n)) return r.get(n);
    var i = t(n);
    return r.set(n, i), i;
  };
};
function o1(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var IC = function (t, r, n) {
    for (
      var i = 0, o = 0;
      (i = o), (o = Jt()), i === 38 && o === 12 && (r[n] = 1), !ea(o);

    )
      dt();
    return ga(t, ot);
  },
  VC = function (t, r) {
    var n = -1,
      i = 44;
    do
      switch (ea(i)) {
        case 0:
          i === 38 && Jt() === 12 && (r[n] = 1), (t[n] += IC(ot - 1, r, n));
          break;
        case 2:
          t[n] += ws(i);
          break;
        case 4:
          if (i === 44) {
            (t[++n] = Jt() === 58 ? "&\f" : ""), (r[n] = t[n].length);
            break;
          }
        default:
          t[n] += Ll(i);
      }
    while ((i = dt()));
    return t;
  },
  OC = function (t, r) {
    return i1(VC(n1(t), r));
  },
  Em = new WeakMap(),
  NC = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value,
          n = t.parent,
          i = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (
        !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Em.get(n)) &&
        !i
      ) {
        Em.set(t, !0);
        for (
          var o = [], a = OC(r, o), s = n.props, l = 0, u = 0;
          l < a.length;
          l++
        )
          for (var c = 0; c < s.length; c++, u++)
            t.props[u] = o[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
      }
    }
  },
  WC = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 &&
        r.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function a1(e, t) {
  switch (_C(e, t)) {
    case 5103:
      return Y + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Y + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Y + e + sl + e + Ve + e + e;
    case 6828:
    case 4268:
      return Y + e + Ve + e + e;
    case 6165:
      return Y + e + Ve + "flex-" + e + e;
    case 5187:
      return (
        Y + e + X(e, /(\w+).+(:[^]+)/, Y + "box-$1$2" + Ve + "flex-$1$2") + e
      );
    case 5443:
      return Y + e + Ve + "flex-item-" + X(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        Y +
        e +
        Ve +
        "flex-line-pack" +
        X(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return Y + e + Ve + X(e, "shrink", "negative") + e;
    case 5292:
      return Y + e + Ve + X(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        Y +
        "box-" +
        X(e, "-grow", "") +
        Y +
        e +
        Ve +
        X(e, "grow", "positive") +
        e
      );
    case 4554:
      return Y + X(e, /([^-])(transform)/g, "$1" + Y + "$2") + e;
    case 6187:
      return (
        X(X(X(e, /(zoom-|grab)/, Y + "$1"), /(image-set)/, Y + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return X(e, /(image-set\([^]*)/, Y + "$1$`$1");
    case 4968:
      return (
        X(
          X(e, /(.+:)(flex-)?(.*)/, Y + "box-pack:$3" + Ve + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        Y +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return X(e, /(.+)-inline(.+)/, Y + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Gt(e) - 1 - t > 6)
        switch (De(e, t + 1)) {
          case 109:
            if (De(e, t + 4) !== 45) break;
          case 102:
            return (
              X(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Y +
                  "$2-$3$1" +
                  sl +
                  (De(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~xd(e, "stretch")
              ? a1(X(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (De(e, t + 1) !== 115) break;
    case 6444:
      switch (De(e, Gt(e) - 3 - (~xd(e, "!important") && 10))) {
        case 107:
          return X(e, ":", ":" + Y) + e;
        case 101:
          return (
            X(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Y +
                (De(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Y +
                "$2$3$1" +
                Ve +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (De(e, t + 11)) {
        case 114:
          return Y + e + Ve + X(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Y + e + Ve + X(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Y + e + Ve + X(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Y + e + Ve + e + e;
  }
  return e;
}
var UC = function (t, r, n, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case qf:
          t.return = a1(t.value, t.length);
          break;
        case e1:
          return vi([Ji(t, { value: X(t.value, "@", "@" + Y) })], i);
        case Xf:
          if (t.length)
            return PC(t.props, function (o) {
              switch (TC(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return vi(
                    [Ji(t, { props: [X(o, /:(read-\w+)/, ":" + sl + "$1")] })],
                    i
                  );
                case "::placeholder":
                  return vi(
                    [
                      Ji(t, {
                        props: [X(o, /:(plac\w+)/, ":" + Y + "input-$1")],
                      }),
                      Ji(t, { props: [X(o, /:(plac\w+)/, ":" + sl + "$1")] }),
                      Ji(t, { props: [X(o, /:(plac\w+)/, Ve + "input-$1")] }),
                    ],
                    i
                  );
              }
              return "";
            });
      }
  },
  HC = [UC],
  KC = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (v) {
        var w = v.getAttribute("data-emotion");
        w.indexOf(" ") !== -1 &&
          (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || HC,
      o = {},
      a,
      s = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (v) {
          for (
            var w = v.getAttribute("data-emotion").split(" "), p = 1;
            p < w.length;
            p++
          )
            o[w[p]] = !0;
          s.push(v);
        }
      );
    var l,
      u = [NC, WC];
    {
      var c,
        d = [
          BC,
          LC(function (v) {
            c.insert(v);
          }),
        ],
        f = jC(u.concat(i, d)),
        y = function (w) {
          return vi(FC(w), f);
        };
      l = function (w, p, h, m) {
        (c = h),
          y(w ? w + "{" + p.styles + "}" : p.styles),
          m && (S.inserted[p.name] = !0);
      };
    }
    var S = {
      key: r,
      sheet: new bC({
        key: r,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: o,
      registered: {},
      insert: l,
    };
    return S.sheet.hydrate(s), S;
  };
function ll() {
  return (
    (ll = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ll.apply(null, arguments)
  );
}
var s1 = { exports: {} },
  te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Re = typeof Symbol == "function" && Symbol.for,
  Zf = Re ? Symbol.for("react.element") : 60103,
  Jf = Re ? Symbol.for("react.portal") : 60106,
  Ol = Re ? Symbol.for("react.fragment") : 60107,
  Nl = Re ? Symbol.for("react.strict_mode") : 60108,
  Wl = Re ? Symbol.for("react.profiler") : 60114,
  Ul = Re ? Symbol.for("react.provider") : 60109,
  Hl = Re ? Symbol.for("react.context") : 60110,
  eh = Re ? Symbol.for("react.async_mode") : 60111,
  Kl = Re ? Symbol.for("react.concurrent_mode") : 60111,
  Gl = Re ? Symbol.for("react.forward_ref") : 60112,
  Yl = Re ? Symbol.for("react.suspense") : 60113,
  GC = Re ? Symbol.for("react.suspense_list") : 60120,
  Xl = Re ? Symbol.for("react.memo") : 60115,
  ql = Re ? Symbol.for("react.lazy") : 60116,
  YC = Re ? Symbol.for("react.block") : 60121,
  XC = Re ? Symbol.for("react.fundamental") : 60117,
  qC = Re ? Symbol.for("react.responder") : 60118,
  QC = Re ? Symbol.for("react.scope") : 60119;
function gt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Zf:
        switch (((e = e.type), e)) {
          case eh:
          case Kl:
          case Ol:
          case Wl:
          case Nl:
          case Yl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Hl:
              case Gl:
              case ql:
              case Xl:
              case Ul:
                return e;
              default:
                return t;
            }
        }
      case Jf:
        return t;
    }
  }
}
function l1(e) {
  return gt(e) === Kl;
}
te.AsyncMode = eh;
te.ConcurrentMode = Kl;
te.ContextConsumer = Hl;
te.ContextProvider = Ul;
te.Element = Zf;
te.ForwardRef = Gl;
te.Fragment = Ol;
te.Lazy = ql;
te.Memo = Xl;
te.Portal = Jf;
te.Profiler = Wl;
te.StrictMode = Nl;
te.Suspense = Yl;
te.isAsyncMode = function (e) {
  return l1(e) || gt(e) === eh;
};
te.isConcurrentMode = l1;
te.isContextConsumer = function (e) {
  return gt(e) === Hl;
};
te.isContextProvider = function (e) {
  return gt(e) === Ul;
};
te.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zf;
};
te.isForwardRef = function (e) {
  return gt(e) === Gl;
};
te.isFragment = function (e) {
  return gt(e) === Ol;
};
te.isLazy = function (e) {
  return gt(e) === ql;
};
te.isMemo = function (e) {
  return gt(e) === Xl;
};
te.isPortal = function (e) {
  return gt(e) === Jf;
};
te.isProfiler = function (e) {
  return gt(e) === Wl;
};
te.isStrictMode = function (e) {
  return gt(e) === Nl;
};
te.isSuspense = function (e) {
  return gt(e) === Yl;
};
te.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Ol ||
    e === Kl ||
    e === Wl ||
    e === Nl ||
    e === Yl ||
    e === GC ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === ql ||
        e.$$typeof === Xl ||
        e.$$typeof === Ul ||
        e.$$typeof === Hl ||
        e.$$typeof === Gl ||
        e.$$typeof === XC ||
        e.$$typeof === qC ||
        e.$$typeof === QC ||
        e.$$typeof === YC))
  );
};
te.typeOf = gt;
s1.exports = te;
var ZC = s1.exports,
  u1 = ZC,
  JC = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  e2 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  c1 = {};
c1[u1.ForwardRef] = JC;
c1[u1.Memo] = e2;
var t2 = !0;
function r2(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ";") : (n += i + " ");
    }),
    n
  );
}
var d1 = function (t, r, n) {
    var i = t.key + "-" + r.name;
    (n === !1 || t2 === !1) &&
      t.registered[i] === void 0 &&
      (t.registered[i] = r.styles);
  },
  f1 = function (t, r, n) {
    d1(t, r, n);
    var i = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var o = r;
      do t.insert(r === o ? "." + i : "", o, t.sheet, !0), (o = o.next);
      while (o !== void 0);
    }
  };
function n2(e) {
  for (var t = 0, r, n = 0, i = e.length; i >= 4; ++n, i -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(n) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var i2 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  o2 = /[A-Z]|^ms/g,
  a2 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  h1 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  $m = function (t) {
    return t != null && typeof t != "boolean";
  },
  Yu = o1(function (e) {
    return h1(e) ? e : e.replace(o2, "-$&").toLowerCase();
  }),
  Am = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(a2, function (n, i, o) {
            return (Yt = { name: i, styles: o, next: Yt }), i;
          });
    }
    return i2[t] !== 1 && !h1(t) && typeof r == "number" && r !== 0
      ? r + "px"
      : r;
  };
function ta(e, t, r) {
  if (r == null) return "";
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return (Yt = { name: r.name, styles: r.styles, next: Yt }), r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            (Yt = { name: n.name, styles: n.styles, next: Yt }), (n = n.next);
        var i = r.styles + ";";
        return i;
      }
      return s2(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var o = Yt,
          a = r(e);
        return (Yt = o), ta(e, t, a);
      }
      break;
    }
  }
  if (t == null) return r;
  var s = t[r];
  return s !== void 0 ? s : r;
}
function s2(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++) n += ta(e, t, r[i]) + ";";
  else
    for (var o in r) {
      var a = r[o];
      if (typeof a != "object")
        t != null && t[a] !== void 0
          ? (n += o + "{" + t[a] + "}")
          : $m(a) && (n += Yu(o) + ":" + Am(o, a) + ";");
      else if (
        Array.isArray(a) &&
        typeof a[0] == "string" &&
        (t == null || t[a[0]] === void 0)
      )
        for (var s = 0; s < a.length; s++)
          $m(a[s]) && (n += Yu(o) + ":" + Am(o, a[s]) + ";");
      else {
        var l = ta(e, t, a);
        switch (o) {
          case "animation":
          case "animationName": {
            n += Yu(o) + ":" + l + ";";
            break;
          }
          default:
            n += o + "{" + l + "}";
        }
      }
    }
  return n;
}
var Rm = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Yt,
  th = function (t, r, n) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var i = !0,
      o = "";
    Yt = void 0;
    var a = t[0];
    a == null || a.raw === void 0
      ? ((i = !1), (o += ta(n, r, a)))
      : (o += a[0]);
    for (var s = 1; s < t.length; s++) (o += ta(n, r, t[s])), i && (o += a[s]);
    Rm.lastIndex = 0;
    for (var l = "", u; (u = Rm.exec(o)) !== null; ) l += "-" + u[1];
    var c = n2(o) + l;
    return { name: c, styles: o, next: Yt };
  },
  l2 = function (t) {
    return t();
  },
  p1 = vp.useInsertionEffect ? vp.useInsertionEffect : !1,
  u2 = p1 || l2,
  zm = p1 || k.useLayoutEffect,
  m1 = k.createContext(typeof HTMLElement < "u" ? KC({ key: "css" }) : null);
m1.Provider;
var y1 = function (t) {
    return k.forwardRef(function (r, n) {
      var i = k.useContext(m1);
      return t(r, i, n);
    });
  },
  ra = k.createContext({}),
  c2 = function (t, r) {
    if (typeof r == "function") {
      var n = r(t);
      return n;
    }
    return ll({}, t, r);
  },
  d2 = Pm(function (e) {
    return Pm(function (t) {
      return c2(e, t);
    });
  }),
  f2 = function (t) {
    var r = k.useContext(ra);
    return (
      t.theme !== r && (r = d2(r)(t.theme)),
      k.createElement(ra.Provider, { value: r }, t.children)
    );
  },
  Ql = y1(function (e, t) {
    var r = e.styles,
      n = th([r], void 0, k.useContext(ra)),
      i = k.useRef();
    return (
      zm(
        function () {
          var o = t.key + "-global",
            a = new t.sheet.constructor({
              key: o,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            s = !1,
            l = document.querySelector(
              'style[data-emotion="' + o + " " + n.name + '"]'
            );
          return (
            t.sheet.tags.length && (a.before = t.sheet.tags[0]),
            l !== null &&
              ((s = !0), l.setAttribute("data-emotion", o), a.hydrate([l])),
            (i.current = [a, s]),
            function () {
              a.flush();
            }
          );
        },
        [t]
      ),
      zm(
        function () {
          var o = i.current,
            a = o[0],
            s = o[1];
          if (s) {
            o[1] = !1;
            return;
          }
          if ((n.next !== void 0 && f1(t, n.next, !0), a.tags.length)) {
            var l = a.tags[a.tags.length - 1].nextElementSibling;
            (a.before = l), a.flush();
          }
          t.insert("", n, a, !1);
        },
        [t, n.name]
      ),
      null
    );
  });
function h2() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return th(t);
}
var p2 = function () {
    var t = h2.apply(void 0, arguments),
      r = "animation-" + t.name;
    return {
      name: r,
      styles: "@keyframes " + r + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  g1 = String.raw,
  v1 = g1`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,
  m2 = () => _.jsx(Ql, { styles: v1 }),
  y2 = ({ scope: e = "" }) =>
    _.jsx(Ql, {
      styles: g1`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${v1}
    `,
    });
function g2(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function an(e = {}) {
  const {
      name: t,
      strict: r = !0,
      hookName: n = "useContext",
      providerName: i = "Provider",
      errorMessage: o,
      defaultValue: a,
    } = e,
    s = k.createContext(a);
  s.displayName = t;
  function l() {
    var u;
    const c = k.useContext(s);
    if (!c && r) {
      const d = new Error(o ?? g2(n, i));
      throw (
        ((d.name = "ContextError"),
        (u = Error.captureStackTrace) == null || u.call(Error, d, l),
        d)
      );
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [v2, S2] = an({ strict: !1, name: "PortalManagerContext" });
function S1(e) {
  const { children: t, zIndex: r } = e;
  return _.jsx(v2, { value: { zIndex: r }, children: t });
}
S1.displayName = "PortalManager";
var ul =
    globalThis != null && globalThis.document ? k.useLayoutEffect : k.useEffect,
  [b1, b2] = an({ strict: !1, name: "PortalContext" }),
  rh = "chakra-portal",
  x2 = ".chakra-portal",
  w2 = (e) =>
    _.jsx("div", {
      className: "chakra-portal-zIndex",
      style: {
        position: "absolute",
        zIndex: e.zIndex,
        top: 0,
        left: 0,
        right: 0,
      },
      children: e.children,
    }),
  k2 = (e) => {
    const { appendToParentPortal: t, children: r } = e,
      [n, i] = k.useState(null),
      o = k.useRef(null),
      [, a] = k.useState({});
    k.useEffect(() => a({}), []);
    const s = b2(),
      l = S2();
    ul(() => {
      if (!n) return;
      const c = n.ownerDocument,
        d = t ? s ?? c.body : c.body;
      if (!d) return;
      (o.current = c.createElement("div")),
        (o.current.className = rh),
        d.appendChild(o.current),
        a({});
      const f = o.current;
      return () => {
        d.contains(f) && d.removeChild(f);
      };
    }, [n]);
    const u =
      l != null && l.zIndex
        ? _.jsx(w2, { zIndex: l == null ? void 0 : l.zIndex, children: r })
        : r;
    return o.current
      ? Yf.createPortal(_.jsx(b1, { value: o.current, children: u }), o.current)
      : _.jsx("span", {
          ref: (c) => {
            c && i(c);
          },
        });
  },
  C2 = (e) => {
    const { children: t, containerRef: r, appendToParentPortal: n } = e,
      i = r.current,
      o = i ?? (typeof window < "u" ? document.body : void 0),
      a = k.useMemo(() => {
        const l = i == null ? void 0 : i.ownerDocument.createElement("div");
        return l && (l.className = rh), l;
      }, [i]),
      [, s] = k.useState({});
    return (
      ul(() => s({}), []),
      ul(() => {
        if (!(!a || !o))
          return (
            o.appendChild(a),
            () => {
              o.removeChild(a);
            }
          );
      }, [a, o]),
      o && a
        ? Yf.createPortal(_.jsx(b1, { value: n ? a : null, children: t }), a)
        : null
    );
  };
function Zl(e) {
  const t = { appendToParentPortal: !0, ...e },
    { containerRef: r, ...n } = t;
  return r ? _.jsx(C2, { containerRef: r, ...n }) : _.jsx(k2, { ...n });
}
Zl.className = rh;
Zl.selector = x2;
Zl.displayName = "Portal";
function _2() {
  const e = k.useContext(ra);
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var nh = k.createContext({});
nh.displayName = "ColorModeContext";
function ih() {
  const e = k.useContext(nh);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var Za = { light: "chakra-ui-light", dark: "chakra-ui-dark" };
function T2(e = {}) {
  const { preventTransition: t = !0 } = e,
    r = {
      setDataset: (n) => {
        const i = t ? r.preventTransition() : void 0;
        (document.documentElement.dataset.theme = n),
          (document.documentElement.style.colorScheme = n),
          i == null || i();
      },
      setClassName(n) {
        document.body.classList.add(n ? Za.dark : Za.light),
          document.body.classList.remove(n ? Za.light : Za.dark);
      },
      query() {
        return window.matchMedia("(prefers-color-scheme: dark)");
      },
      getSystemTheme(n) {
        var i;
        return ((i = r.query().matches) != null ? i : n === "dark")
          ? "dark"
          : "light";
      },
      addListener(n) {
        const i = r.query(),
          o = (a) => {
            n(a.matches ? "dark" : "light");
          };
        return (
          typeof i.addListener == "function"
            ? i.addListener(o)
            : i.addEventListener("change", o),
          () => {
            typeof i.removeListener == "function"
              ? i.removeListener(o)
              : i.removeEventListener("change", o);
          }
        );
      },
      preventTransition() {
        const n = document.createElement("style");
        return (
          n.appendChild(
            document.createTextNode(
              "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
            )
          ),
          document.head.appendChild(n),
          () => {
            window.getComputedStyle(document.body),
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  document.head.removeChild(n);
                });
              });
          }
        );
      },
    };
  return r;
}
var P2 = "chakra-ui-color-mode";
function E2(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get(t) {
      if (!(globalThis != null && globalThis.document)) return t;
      let r;
      try {
        r = localStorage.getItem(e) || t;
      } catch {}
      return r || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {}
    },
  };
}
var $2 = E2(P2),
  Mm = () => {};
function Fm(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function x1(e) {
  const {
      value: t,
      children: r,
      options: {
        useSystemColorMode: n,
        initialColorMode: i,
        disableTransitionOnChange: o,
      } = {},
      colorModeManager: a = $2,
    } = e,
    s = i === "dark" ? "dark" : "light",
    [l, u] = k.useState(() => Fm(a, s)),
    [c, d] = k.useState(() => Fm(a)),
    {
      getSystemTheme: f,
      setClassName: y,
      setDataset: S,
      addListener: v,
    } = k.useMemo(() => T2({ preventTransition: o }), [o]),
    w = i === "system" && !l ? c : l,
    p = k.useCallback(
      (C) => {
        const P = C === "system" ? f() : C;
        u(P), y(P === "dark"), S(P), a.set(P);
      },
      [a, f, y, S]
    );
  ul(() => {
    i === "system" && d(f());
  }, []),
    k.useEffect(() => {
      const C = a.get();
      if (C) {
        p(C);
        return;
      }
      if (i === "system") {
        p("system");
        return;
      }
      p(s);
    }, [a, s, i, p]);
  const h = k.useCallback(() => {
    p(w === "dark" ? "light" : "dark");
  }, [w, p]);
  k.useEffect(() => {
    if (n) return v(p);
  }, [n, v, p]);
  const m = k.useMemo(
    () => ({
      colorMode: t ?? w,
      toggleColorMode: t ? Mm : h,
      setColorMode: t ? Mm : p,
      forced: t !== void 0,
    }),
    [w, h, p, t]
  );
  return _.jsx(nh.Provider, { value: m, children: r });
}
x1.displayName = "ColorModeProvider";
function A2() {
  const e = ih(),
    t = _2();
  return { ...e, theme: t };
}
var Et = (...e) => e.filter(Boolean).join(" ");
function er(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function Or(e, ...t) {
  return R2(e) ? e(...t) : e;
}
var R2 = (e) => typeof e == "function",
  Mt = (e) => (e ? "" : void 0),
  Xu = (e) => (e ? !0 : void 0);
function Dm(...e) {
  return function (r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
var cl = { exports: {} };
cl.exports;
(function (e, t) {
  var r = 200,
    n = "__lodash_hash_undefined__",
    i = 800,
    o = 16,
    a = 9007199254740991,
    s = "[object Arguments]",
    l = "[object Array]",
    u = "[object AsyncFunction]",
    c = "[object Boolean]",
    d = "[object Date]",
    f = "[object Error]",
    y = "[object Function]",
    S = "[object GeneratorFunction]",
    v = "[object Map]",
    w = "[object Number]",
    p = "[object Null]",
    h = "[object Object]",
    m = "[object Proxy]",
    C = "[object RegExp]",
    P = "[object Set]",
    A = "[object String]",
    E = "[object Undefined]",
    $ = "[object WeakMap]",
    L = "[object ArrayBuffer]",
    D = "[object DataView]",
    be = "[object Float32Array]",
    Ot = "[object Float64Array]",
    nr = "[object Int8Array]",
    ln = "[object Int16Array]",
    _e = "[object Int32Array]",
    Ke = "[object Uint8Array]",
    ir = "[object Uint8ClampedArray]",
    z = "[object Uint16Array]",
    V = "[object Uint32Array]",
    O = /[\\^$.*+?()[\]{}|]/g,
    de = /^\[object .+?Constructor\]$/,
    xe = /^(?:0|[1-9]\d*)$/,
    Z = {};
  (Z[be] = Z[Ot] = Z[nr] = Z[ln] = Z[_e] = Z[Ke] = Z[ir] = Z[z] = Z[V] = !0),
    (Z[s] =
      Z[l] =
      Z[L] =
      Z[c] =
      Z[D] =
      Z[d] =
      Z[f] =
      Z[y] =
      Z[v] =
      Z[w] =
      Z[h] =
      Z[C] =
      Z[P] =
      Z[A] =
      Z[$] =
        !1);
  var Nt = typeof Ma == "object" && Ma && Ma.Object === Object && Ma,
    Vi = typeof self == "object" && self && self.Object === Object && self,
    at = Nt || Vi || Function("return this")(),
    un = t && !t.nodeType && t,
    Oi = un && !0 && e && !e.nodeType && e,
    Yh = Oi && Oi.exports === un,
    cu = Yh && Nt.process,
    Xh = (function () {
      try {
        var g = Oi && Oi.require && Oi.require("util").types;
        return g || (cu && cu.binding && cu.binding("util"));
      } catch {}
    })(),
    qh = Xh && Xh.isTypedArray;
  function Mb(g, x, T) {
    switch (T.length) {
      case 0:
        return g.call(x);
      case 1:
        return g.call(x, T[0]);
      case 2:
        return g.call(x, T[0], T[1]);
      case 3:
        return g.call(x, T[0], T[1], T[2]);
    }
    return g.apply(x, T);
  }
  function Fb(g, x) {
    for (var T = -1, F = Array(g); ++T < g; ) F[T] = x(T);
    return F;
  }
  function Db(g) {
    return function (x) {
      return g(x);
    };
  }
  function Bb(g, x) {
    return g == null ? void 0 : g[x];
  }
  function jb(g, x) {
    return function (T) {
      return g(x(T));
    };
  }
  var Lb = Array.prototype,
    Ib = Function.prototype,
    _a = Object.prototype,
    du = at["__core-js_shared__"],
    Ta = Ib.toString,
    Pr = _a.hasOwnProperty,
    Qh = (function () {
      var g = /[^.]+$/.exec((du && du.keys && du.keys.IE_PROTO) || "");
      return g ? "Symbol(src)_1." + g : "";
    })(),
    Zh = _a.toString,
    Vb = Ta.call(Object),
    Ob = RegExp(
      "^" +
        Ta.call(Pr)
          .replace(O, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    Pa = Yh ? at.Buffer : void 0,
    Jh = at.Symbol,
    ep = at.Uint8Array;
  Pa && Pa.allocUnsafe;
  var tp = jb(Object.getPrototypeOf, Object),
    rp = Object.create,
    Nb = _a.propertyIsEnumerable,
    Wb = Lb.splice,
    cn = Jh ? Jh.toStringTag : void 0,
    Ea = (function () {
      try {
        var g = pu(Object, "defineProperty");
        return g({}, "", {}), g;
      } catch {}
    })(),
    Ub = Pa ? Pa.isBuffer : void 0,
    np = Math.max,
    Hb = Date.now,
    ip = pu(at, "Map"),
    Ni = pu(Object, "create"),
    Kb = (function () {
      function g() {}
      return function (x) {
        if (!fn(x)) return {};
        if (rp) return rp(x);
        g.prototype = x;
        var T = new g();
        return (g.prototype = void 0), T;
      };
    })();
  function dn(g) {
    var x = -1,
      T = g == null ? 0 : g.length;
    for (this.clear(); ++x < T; ) {
      var F = g[x];
      this.set(F[0], F[1]);
    }
  }
  function Gb() {
    (this.__data__ = Ni ? Ni(null) : {}), (this.size = 0);
  }
  function Yb(g) {
    var x = this.has(g) && delete this.__data__[g];
    return (this.size -= x ? 1 : 0), x;
  }
  function Xb(g) {
    var x = this.__data__;
    if (Ni) {
      var T = x[g];
      return T === n ? void 0 : T;
    }
    return Pr.call(x, g) ? x[g] : void 0;
  }
  function qb(g) {
    var x = this.__data__;
    return Ni ? x[g] !== void 0 : Pr.call(x, g);
  }
  function Qb(g, x) {
    var T = this.__data__;
    return (
      (this.size += this.has(g) ? 0 : 1),
      (T[g] = Ni && x === void 0 ? n : x),
      this
    );
  }
  (dn.prototype.clear = Gb),
    (dn.prototype.delete = Yb),
    (dn.prototype.get = Xb),
    (dn.prototype.has = qb),
    (dn.prototype.set = Qb);
  function or(g) {
    var x = -1,
      T = g == null ? 0 : g.length;
    for (this.clear(); ++x < T; ) {
      var F = g[x];
      this.set(F[0], F[1]);
    }
  }
  function Zb() {
    (this.__data__ = []), (this.size = 0);
  }
  function Jb(g) {
    var x = this.__data__,
      T = $a(x, g);
    if (T < 0) return !1;
    var F = x.length - 1;
    return T == F ? x.pop() : Wb.call(x, T, 1), --this.size, !0;
  }
  function ex(g) {
    var x = this.__data__,
      T = $a(x, g);
    return T < 0 ? void 0 : x[T][1];
  }
  function tx(g) {
    return $a(this.__data__, g) > -1;
  }
  function rx(g, x) {
    var T = this.__data__,
      F = $a(T, g);
    return F < 0 ? (++this.size, T.push([g, x])) : (T[F][1] = x), this;
  }
  (or.prototype.clear = Zb),
    (or.prototype.delete = Jb),
    (or.prototype.get = ex),
    (or.prototype.has = tx),
    (or.prototype.set = rx);
  function Vn(g) {
    var x = -1,
      T = g == null ? 0 : g.length;
    for (this.clear(); ++x < T; ) {
      var F = g[x];
      this.set(F[0], F[1]);
    }
  }
  function nx() {
    (this.size = 0),
      (this.__data__ = {
        hash: new dn(),
        map: new (ip || or)(),
        string: new dn(),
      });
  }
  function ix(g) {
    var x = Ra(this, g).delete(g);
    return (this.size -= x ? 1 : 0), x;
  }
  function ox(g) {
    return Ra(this, g).get(g);
  }
  function ax(g) {
    return Ra(this, g).has(g);
  }
  function sx(g, x) {
    var T = Ra(this, g),
      F = T.size;
    return T.set(g, x), (this.size += T.size == F ? 0 : 1), this;
  }
  (Vn.prototype.clear = nx),
    (Vn.prototype.delete = ix),
    (Vn.prototype.get = ox),
    (Vn.prototype.has = ax),
    (Vn.prototype.set = sx);
  function On(g) {
    var x = (this.__data__ = new or(g));
    this.size = x.size;
  }
  function lx() {
    (this.__data__ = new or()), (this.size = 0);
  }
  function ux(g) {
    var x = this.__data__,
      T = x.delete(g);
    return (this.size = x.size), T;
  }
  function cx(g) {
    return this.__data__.get(g);
  }
  function dx(g) {
    return this.__data__.has(g);
  }
  function fx(g, x) {
    var T = this.__data__;
    if (T instanceof or) {
      var F = T.__data__;
      if (!ip || F.length < r - 1)
        return F.push([g, x]), (this.size = ++T.size), this;
      T = this.__data__ = new Vn(F);
    }
    return T.set(g, x), (this.size = T.size), this;
  }
  (On.prototype.clear = lx),
    (On.prototype.delete = ux),
    (On.prototype.get = cx),
    (On.prototype.has = dx),
    (On.prototype.set = fx);
  function hx(g, x) {
    var T = gu(g),
      F = !T && yu(g),
      U = !T && !F && up(g),
      re = !T && !F && !U && dp(g),
      le = T || F || U || re,
      K = le ? Fb(g.length, String) : [],
      ue = K.length;
    for (var $t in g)
      (le &&
        ($t == "length" ||
          (U && ($t == "offset" || $t == "parent")) ||
          (re &&
            ($t == "buffer" || $t == "byteLength" || $t == "byteOffset")) ||
          sp($t, ue))) ||
        K.push($t);
    return K;
  }
  function fu(g, x, T) {
    ((T !== void 0 && !za(g[x], T)) || (T === void 0 && !(x in g))) &&
      hu(g, x, T);
  }
  function px(g, x, T) {
    var F = g[x];
    (!(Pr.call(g, x) && za(F, T)) || (T === void 0 && !(x in g))) &&
      hu(g, x, T);
  }
  function $a(g, x) {
    for (var T = g.length; T--; ) if (za(g[T][0], x)) return T;
    return -1;
  }
  function hu(g, x, T) {
    x == "__proto__" && Ea
      ? Ea(g, x, { configurable: !0, enumerable: !0, value: T, writable: !0 })
      : (g[x] = T);
  }
  var mx = Ex();
  function Aa(g) {
    return g == null
      ? g === void 0
        ? E
        : p
      : cn && cn in Object(g)
      ? $x(g)
      : Dx(g);
  }
  function op(g) {
    return Wi(g) && Aa(g) == s;
  }
  function yx(g) {
    if (!fn(g) || Mx(g)) return !1;
    var x = Su(g) ? Ob : de;
    return x.test(Ix(g));
  }
  function gx(g) {
    return Wi(g) && cp(g.length) && !!Z[Aa(g)];
  }
  function vx(g) {
    if (!fn(g)) return Fx(g);
    var x = lp(g),
      T = [];
    for (var F in g) (F == "constructor" && (x || !Pr.call(g, F))) || T.push(F);
    return T;
  }
  function ap(g, x, T, F, U) {
    g !== x &&
      mx(
        x,
        function (re, le) {
          if ((U || (U = new On()), fn(re))) Sx(g, x, le, T, ap, F, U);
          else {
            var K = F ? F(mu(g, le), re, le + "", g, x, U) : void 0;
            K === void 0 && (K = re), fu(g, le, K);
          }
        },
        fp
      );
  }
  function Sx(g, x, T, F, U, re, le) {
    var K = mu(g, T),
      ue = mu(x, T),
      $t = le.get(ue);
    if ($t) {
      fu(g, T, $t);
      return;
    }
    var st = re ? re(K, ue, T + "", g, x, le) : void 0,
      Ui = st === void 0;
    if (Ui) {
      var bu = gu(ue),
        xu = !bu && up(ue),
        pp = !bu && !xu && dp(ue);
      (st = ue),
        bu || xu || pp
          ? gu(K)
            ? (st = K)
            : Vx(K)
            ? (st = _x(K))
            : xu
            ? ((Ui = !1), (st = wx(ue)))
            : pp
            ? ((Ui = !1), (st = Cx(ue)))
            : (st = [])
          : Ox(ue) || yu(ue)
          ? ((st = K),
            yu(K) ? (st = Nx(K)) : (!fn(K) || Su(K)) && (st = Ax(ue)))
          : (Ui = !1);
    }
    Ui && (le.set(ue, st), U(st, ue, F, re, le), le.delete(ue)), fu(g, T, st);
  }
  function bx(g, x) {
    return jx(Bx(g, x, hp), g + "");
  }
  var xx = Ea
    ? function (g, x) {
        return Ea(g, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Ux(x),
          writable: !0,
        });
      }
    : hp;
  function wx(g, x) {
    return g.slice();
  }
  function kx(g) {
    var x = new g.constructor(g.byteLength);
    return new ep(x).set(new ep(g)), x;
  }
  function Cx(g, x) {
    var T = kx(g.buffer);
    return new g.constructor(T, g.byteOffset, g.length);
  }
  function _x(g, x) {
    var T = -1,
      F = g.length;
    for (x || (x = Array(F)); ++T < F; ) x[T] = g[T];
    return x;
  }
  function Tx(g, x, T, F) {
    var U = !T;
    T || (T = {});
    for (var re = -1, le = x.length; ++re < le; ) {
      var K = x[re],
        ue = void 0;
      ue === void 0 && (ue = g[K]), U ? hu(T, K, ue) : px(T, K, ue);
    }
    return T;
  }
  function Px(g) {
    return bx(function (x, T) {
      var F = -1,
        U = T.length,
        re = U > 1 ? T[U - 1] : void 0,
        le = U > 2 ? T[2] : void 0;
      for (
        re = g.length > 3 && typeof re == "function" ? (U--, re) : void 0,
          le && Rx(T[0], T[1], le) && ((re = U < 3 ? void 0 : re), (U = 1)),
          x = Object(x);
        ++F < U;

      ) {
        var K = T[F];
        K && g(x, K, F, re);
      }
      return x;
    });
  }
  function Ex(g) {
    return function (x, T, F) {
      for (var U = -1, re = Object(x), le = F(x), K = le.length; K--; ) {
        var ue = le[++U];
        if (T(re[ue], ue, re) === !1) break;
      }
      return x;
    };
  }
  function Ra(g, x) {
    var T = g.__data__;
    return zx(x) ? T[typeof x == "string" ? "string" : "hash"] : T.map;
  }
  function pu(g, x) {
    var T = Bb(g, x);
    return yx(T) ? T : void 0;
  }
  function $x(g) {
    var x = Pr.call(g, cn),
      T = g[cn];
    try {
      g[cn] = void 0;
      var F = !0;
    } catch {}
    var U = Zh.call(g);
    return F && (x ? (g[cn] = T) : delete g[cn]), U;
  }
  function Ax(g) {
    return typeof g.constructor == "function" && !lp(g) ? Kb(tp(g)) : {};
  }
  function sp(g, x) {
    var T = typeof g;
    return (
      (x = x ?? a),
      !!x &&
        (T == "number" || (T != "symbol" && xe.test(g))) &&
        g > -1 &&
        g % 1 == 0 &&
        g < x
    );
  }
  function Rx(g, x, T) {
    if (!fn(T)) return !1;
    var F = typeof x;
    return (F == "number" ? vu(T) && sp(x, T.length) : F == "string" && x in T)
      ? za(T[x], g)
      : !1;
  }
  function zx(g) {
    var x = typeof g;
    return x == "string" || x == "number" || x == "symbol" || x == "boolean"
      ? g !== "__proto__"
      : g === null;
  }
  function Mx(g) {
    return !!Qh && Qh in g;
  }
  function lp(g) {
    var x = g && g.constructor,
      T = (typeof x == "function" && x.prototype) || _a;
    return g === T;
  }
  function Fx(g) {
    var x = [];
    if (g != null) for (var T in Object(g)) x.push(T);
    return x;
  }
  function Dx(g) {
    return Zh.call(g);
  }
  function Bx(g, x, T) {
    return (
      (x = np(x === void 0 ? g.length - 1 : x, 0)),
      function () {
        for (
          var F = arguments, U = -1, re = np(F.length - x, 0), le = Array(re);
          ++U < re;

        )
          le[U] = F[x + U];
        U = -1;
        for (var K = Array(x + 1); ++U < x; ) K[U] = F[U];
        return (K[x] = T(le)), Mb(g, this, K);
      }
    );
  }
  function mu(g, x) {
    if (!(x === "constructor" && typeof g[x] == "function") && x != "__proto__")
      return g[x];
  }
  var jx = Lx(xx);
  function Lx(g) {
    var x = 0,
      T = 0;
    return function () {
      var F = Hb(),
        U = o - (F - T);
      if (((T = F), U > 0)) {
        if (++x >= i) return arguments[0];
      } else x = 0;
      return g.apply(void 0, arguments);
    };
  }
  function Ix(g) {
    if (g != null) {
      try {
        return Ta.call(g);
      } catch {}
      try {
        return g + "";
      } catch {}
    }
    return "";
  }
  function za(g, x) {
    return g === x || (g !== g && x !== x);
  }
  var yu = op(
      (function () {
        return arguments;
      })()
    )
      ? op
      : function (g) {
          return Wi(g) && Pr.call(g, "callee") && !Nb.call(g, "callee");
        },
    gu = Array.isArray;
  function vu(g) {
    return g != null && cp(g.length) && !Su(g);
  }
  function Vx(g) {
    return Wi(g) && vu(g);
  }
  var up = Ub || Hx;
  function Su(g) {
    if (!fn(g)) return !1;
    var x = Aa(g);
    return x == y || x == S || x == u || x == m;
  }
  function cp(g) {
    return typeof g == "number" && g > -1 && g % 1 == 0 && g <= a;
  }
  function fn(g) {
    var x = typeof g;
    return g != null && (x == "object" || x == "function");
  }
  function Wi(g) {
    return g != null && typeof g == "object";
  }
  function Ox(g) {
    if (!Wi(g) || Aa(g) != h) return !1;
    var x = tp(g);
    if (x === null) return !0;
    var T = Pr.call(x, "constructor") && x.constructor;
    return typeof T == "function" && T instanceof T && Ta.call(T) == Vb;
  }
  var dp = qh ? Db(qh) : gx;
  function Nx(g) {
    return Tx(g, fp(g));
  }
  function fp(g) {
    return vu(g) ? hx(g) : vx(g);
  }
  var Wx = Px(function (g, x, T, F) {
    ap(g, x, T, F);
  });
  function Ux(g) {
    return function () {
      return g;
    };
  }
  function hp(g) {
    return g;
  }
  function Hx() {
    return !1;
  }
  e.exports = Wx;
})(cl, cl.exports);
var z2 = cl.exports;
const qt = Zd(z2);
var M2 = (e) => /!(important)?$/.test(e),
  Bm = (e) =>
    typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e,
  F2 = (e, t) => (r) => {
    const n = String(t),
      i = M2(n),
      o = Bm(n),
      a = e ? `${e}.${o}` : o;
    let s = er(r.__cssMap) && a in r.__cssMap ? r.__cssMap[a].varRef : t;
    return (s = Bm(s)), i ? `${s} !important` : s;
  };
function oh(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (o, a) => {
    var s;
    const l = F2(t, o)(a);
    let u = (s = r == null ? void 0 : r(l, a)) != null ? s : l;
    return n && (u = n(u, a)), u;
  };
}
var Ja =
  (...e) =>
  (t) =>
    e.reduce((r, n) => n(r), t);
function vt(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return (n.transform = oh({ scale: e, transform: t })), n;
  };
}
var D2 =
  ({ rtl: e, ltr: t }) =>
  (r) =>
    r.direction === "rtl" ? e : t;
function B2(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: D2(t),
    transform: r ? oh({ scale: r, compose: n }) : n,
  };
}
var w1 = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))",
];
function j2() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...w1,
  ].join(" ");
}
function L2() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...w1,
  ].join(" ");
}
var I2 = {
    "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
    filter: [
      "var(--chakra-blur)",
      "var(--chakra-brightness)",
      "var(--chakra-contrast)",
      "var(--chakra-grayscale)",
      "var(--chakra-hue-rotate)",
      "var(--chakra-invert)",
      "var(--chakra-saturate)",
      "var(--chakra-sepia)",
      "var(--chakra-drop-shadow)",
    ].join(" "),
  },
  V2 = {
    backdropFilter: [
      "var(--chakra-backdrop-blur)",
      "var(--chakra-backdrop-brightness)",
      "var(--chakra-backdrop-contrast)",
      "var(--chakra-backdrop-grayscale)",
      "var(--chakra-backdrop-hue-rotate)",
      "var(--chakra-backdrop-invert)",
      "var(--chakra-backdrop-opacity)",
      "var(--chakra-backdrop-saturate)",
      "var(--chakra-backdrop-sepia)",
    ].join(" "),
    "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  };
function O2(e) {
  return {
    "--chakra-ring-offset-shadow":
      "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow":
      "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)",
    ].join(", "),
  };
}
var N2 = {
    "row-reverse": {
      space: "--chakra-space-x-reverse",
      divide: "--chakra-divide-x-reverse",
    },
    "column-reverse": {
      space: "--chakra-space-y-reverse",
      divide: "--chakra-divide-y-reverse",
    },
  },
  kd = {
    "to-t": "to top",
    "to-tr": "to top right",
    "to-r": "to right",
    "to-br": "to bottom right",
    "to-b": "to bottom",
    "to-bl": "to bottom left",
    "to-l": "to left",
    "to-tl": "to top left",
  },
  W2 = new Set(Object.values(kd)),
  Cd = new Set([
    "none",
    "-moz-initial",
    "inherit",
    "initial",
    "revert",
    "unset",
  ]),
  U2 = (e) => e.trim();
function H2(e, t) {
  if (e == null || Cd.has(e)) return e;
  if (!(_d(e) || Cd.has(e))) return `url('${e}')`;
  const i = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
    o = i == null ? void 0 : i[1],
    a = i == null ? void 0 : i[2];
  if (!o || !a) return e;
  const s = o.includes("-gradient") ? o : `${o}-gradient`,
    [l, ...u] = a.split(",").map(U2).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0) return e;
  const c = l in kd ? kd[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (W2.has(f)) return f;
    const y = f.indexOf(" "),
      [S, v] = y !== -1 ? [f.substr(0, y), f.substr(y + 1)] : [f],
      w = _d(v) ? v : v && v.split(" "),
      p = `colors.${S}`,
      h = p in t.__cssMap ? t.__cssMap[p].varRef : S;
    return w ? [h, ...(Array.isArray(w) ? w : [w])].join(" ") : h;
  });
  return `${s}(${d.join(", ")})`;
}
var _d = (e) => typeof e == "string" && e.includes("(") && e.includes(")"),
  K2 = (e, t) => H2(e, t ?? {});
function G2(e) {
  return /^var\(--.+\)$/.test(e);
}
var Y2 = (e) => {
    const t = parseFloat(e.toString()),
      r = e.toString().replace(String(t), "");
    return { unitless: !r, value: t, unit: r };
  },
  Ut = (e) => (t) => `${e}(${t})`,
  W = {
    filter(e) {
      return e !== "auto" ? e : I2;
    },
    backdropFilter(e) {
      return e !== "auto" ? e : V2;
    },
    ring(e) {
      return O2(W.px(e));
    },
    bgClip(e) {
      return e === "text"
        ? { color: "transparent", backgroundClip: "text" }
        : { backgroundClip: e };
    },
    transform(e) {
      return e === "auto" ? j2() : e === "auto-gpu" ? L2() : e;
    },
    vh(e) {
      return e === "$100vh" ? "var(--chakra-vh)" : e;
    },
    px(e) {
      if (e == null) return e;
      const { unitless: t } = Y2(e);
      return t || typeof e == "number" ? `${e}px` : e;
    },
    fraction(e) {
      return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
    },
    float(e, t) {
      const r = { left: "right", right: "left" };
      return t.direction === "rtl" ? r[e] : e;
    },
    degree(e) {
      if (G2(e) || e == null) return e;
      const t = typeof e == "string" && !e.endsWith("deg");
      return typeof e == "number" || t ? `${e}deg` : e;
    },
    gradient: K2,
    blur: Ut("blur"),
    opacity: Ut("opacity"),
    brightness: Ut("brightness"),
    contrast: Ut("contrast"),
    dropShadow: Ut("drop-shadow"),
    grayscale: Ut("grayscale"),
    hueRotate: (e) => Ut("hue-rotate")(W.degree(e)),
    invert: Ut("invert"),
    saturate: Ut("saturate"),
    sepia: Ut("sepia"),
    bgImage(e) {
      return e == null || _d(e) || Cd.has(e) ? e : `url(${e})`;
    },
    outline(e) {
      const t = String(e) === "0" || String(e) === "none";
      return e !== null && t
        ? { outline: "2px solid transparent", outlineOffset: "2px" }
        : { outline: e };
    },
    flexDirection(e) {
      var t;
      const { space: r, divide: n } = (t = N2[e]) != null ? t : {},
        i = { flexDirection: e };
      return r && (i[r] = 1), n && (i[n] = 1), i;
    },
  },
  b = {
    borderWidths: vt("borderWidths"),
    borderStyles: vt("borderStyles"),
    colors: vt("colors"),
    borders: vt("borders"),
    gradients: vt("gradients", W.gradient),
    radii: vt("radii", W.px),
    space: vt("space", Ja(W.vh, W.px)),
    spaceT: vt("space", Ja(W.vh, W.px)),
    degreeT(e) {
      return { property: e, transform: W.degree };
    },
    prop(e, t, r) {
      return {
        property: e,
        scale: t,
        ...(t && { transform: oh({ scale: t, transform: r }) }),
      };
    },
    propT(e, t) {
      return { property: e, transform: t };
    },
    sizes: vt("sizes", Ja(W.vh, W.px)),
    sizesT: vt("sizes", Ja(W.vh, W.fraction)),
    shadows: vt("shadows"),
    logical: B2,
    blur: vt("blur", W.blur),
  },
  Cs = {
    background: b.colors("background"),
    backgroundColor: b.colors("backgroundColor"),
    backgroundImage: b.gradients("backgroundImage"),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: W.bgClip },
    bgSize: b.prop("backgroundSize"),
    bgPosition: b.prop("backgroundPosition"),
    bg: b.colors("background"),
    bgColor: b.colors("backgroundColor"),
    bgPos: b.prop("backgroundPosition"),
    bgRepeat: b.prop("backgroundRepeat"),
    bgAttachment: b.prop("backgroundAttachment"),
    bgGradient: b.gradients("backgroundImage"),
    bgClip: { transform: W.bgClip },
  };
Object.assign(Cs, { bgImage: Cs.backgroundImage, bgImg: Cs.backgroundImage });
var G = {
  border: b.borders("border"),
  borderWidth: b.borderWidths("borderWidth"),
  borderStyle: b.borderStyles("borderStyle"),
  borderColor: b.colors("borderColor"),
  borderRadius: b.radii("borderRadius"),
  borderTop: b.borders("borderTop"),
  borderBlockStart: b.borders("borderBlockStart"),
  borderTopLeftRadius: b.radii("borderTopLeftRadius"),
  borderStartStartRadius: b.logical({
    scale: "radii",
    property: { ltr: "borderTopLeftRadius", rtl: "borderTopRightRadius" },
  }),
  borderEndStartRadius: b.logical({
    scale: "radii",
    property: { ltr: "borderBottomLeftRadius", rtl: "borderBottomRightRadius" },
  }),
  borderTopRightRadius: b.radii("borderTopRightRadius"),
  borderStartEndRadius: b.logical({
    scale: "radii",
    property: { ltr: "borderTopRightRadius", rtl: "borderTopLeftRadius" },
  }),
  borderEndEndRadius: b.logical({
    scale: "radii",
    property: { ltr: "borderBottomRightRadius", rtl: "borderBottomLeftRadius" },
  }),
  borderRight: b.borders("borderRight"),
  borderInlineEnd: b.borders("borderInlineEnd"),
  borderBottom: b.borders("borderBottom"),
  borderBlockEnd: b.borders("borderBlockEnd"),
  borderBottomLeftRadius: b.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: b.radii("borderBottomRightRadius"),
  borderLeft: b.borders("borderLeft"),
  borderInlineStart: { property: "borderInlineStart", scale: "borders" },
  borderInlineStartRadius: b.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"],
    },
  }),
  borderInlineEndRadius: b.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    },
  }),
  borderX: b.borders(["borderLeft", "borderRight"]),
  borderInline: b.borders("borderInline"),
  borderY: b.borders(["borderTop", "borderBottom"]),
  borderBlock: b.borders("borderBlock"),
  borderTopWidth: b.borderWidths("borderTopWidth"),
  borderBlockStartWidth: b.borderWidths("borderBlockStartWidth"),
  borderTopColor: b.colors("borderTopColor"),
  borderBlockStartColor: b.colors("borderBlockStartColor"),
  borderTopStyle: b.borderStyles("borderTopStyle"),
  borderBlockStartStyle: b.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: b.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: b.borderWidths("borderBlockEndWidth"),
  borderBottomColor: b.colors("borderBottomColor"),
  borderBlockEndColor: b.colors("borderBlockEndColor"),
  borderBottomStyle: b.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: b.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: b.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: b.borderWidths("borderInlineStartWidth"),
  borderLeftColor: b.colors("borderLeftColor"),
  borderInlineStartColor: b.colors("borderInlineStartColor"),
  borderLeftStyle: b.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: b.borderStyles("borderInlineStartStyle"),
  borderRightWidth: b.borderWidths("borderRightWidth"),
  borderInlineEndWidth: b.borderWidths("borderInlineEndWidth"),
  borderRightColor: b.colors("borderRightColor"),
  borderInlineEndColor: b.colors("borderInlineEndColor"),
  borderRightStyle: b.borderStyles("borderRightStyle"),
  borderInlineEndStyle: b.borderStyles("borderInlineEndStyle"),
  borderTopRadius: b.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: b.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ]),
  borderLeftRadius: b.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: b.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius",
  ]),
};
Object.assign(G, {
  rounded: G.borderRadius,
  roundedTop: G.borderTopRadius,
  roundedTopLeft: G.borderTopLeftRadius,
  roundedTopRight: G.borderTopRightRadius,
  roundedTopStart: G.borderStartStartRadius,
  roundedTopEnd: G.borderStartEndRadius,
  roundedBottom: G.borderBottomRadius,
  roundedBottomLeft: G.borderBottomLeftRadius,
  roundedBottomRight: G.borderBottomRightRadius,
  roundedBottomStart: G.borderEndStartRadius,
  roundedBottomEnd: G.borderEndEndRadius,
  roundedLeft: G.borderLeftRadius,
  roundedRight: G.borderRightRadius,
  roundedStart: G.borderInlineStartRadius,
  roundedEnd: G.borderInlineEndRadius,
  borderStart: G.borderInlineStart,
  borderEnd: G.borderInlineEnd,
  borderTopStartRadius: G.borderStartStartRadius,
  borderTopEndRadius: G.borderStartEndRadius,
  borderBottomStartRadius: G.borderEndStartRadius,
  borderBottomEndRadius: G.borderEndEndRadius,
  borderStartRadius: G.borderInlineStartRadius,
  borderEndRadius: G.borderInlineEndRadius,
  borderStartWidth: G.borderInlineStartWidth,
  borderEndWidth: G.borderInlineEndWidth,
  borderStartColor: G.borderInlineStartColor,
  borderEndColor: G.borderInlineEndColor,
  borderStartStyle: G.borderInlineStartStyle,
  borderEndStyle: G.borderInlineEndStyle,
});
var X2 = {
    color: b.colors("color"),
    textColor: b.colors("color"),
    fill: b.colors("fill"),
    stroke: b.colors("stroke"),
  },
  Td = {
    boxShadow: b.shadows("boxShadow"),
    mixBlendMode: !0,
    blendMode: b.prop("mixBlendMode"),
    backgroundBlendMode: !0,
    bgBlendMode: b.prop("backgroundBlendMode"),
    opacity: !0,
  };
Object.assign(Td, { shadow: Td.boxShadow });
var q2 = {
    filter: { transform: W.filter },
    blur: b.blur("--chakra-blur"),
    brightness: b.propT("--chakra-brightness", W.brightness),
    contrast: b.propT("--chakra-contrast", W.contrast),
    hueRotate: b.propT("--chakra-hue-rotate", W.hueRotate),
    invert: b.propT("--chakra-invert", W.invert),
    saturate: b.propT("--chakra-saturate", W.saturate),
    dropShadow: b.propT("--chakra-drop-shadow", W.dropShadow),
    backdropFilter: { transform: W.backdropFilter },
    backdropBlur: b.blur("--chakra-backdrop-blur"),
    backdropBrightness: b.propT("--chakra-backdrop-brightness", W.brightness),
    backdropContrast: b.propT("--chakra-backdrop-contrast", W.contrast),
    backdropHueRotate: b.propT("--chakra-backdrop-hue-rotate", W.hueRotate),
    backdropInvert: b.propT("--chakra-backdrop-invert", W.invert),
    backdropSaturate: b.propT("--chakra-backdrop-saturate", W.saturate),
  },
  dl = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: W.flexDirection },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: b.sizes("flexBasis"),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
    gap: b.space("gap"),
    rowGap: b.space("rowGap"),
    columnGap: b.space("columnGap"),
  };
Object.assign(dl, { flexDir: dl.flexDirection });
var k1 = {
    gridGap: b.space("gridGap"),
    gridColumnGap: b.space("gridColumnGap"),
    gridRowGap: b.space("gridRowGap"),
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridColumnStart: !0,
    gridColumnEnd: !0,
    gridRowStart: !0,
    gridRowEnd: !0,
    gridAutoRows: !0,
    gridTemplate: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0,
  },
  Q2 = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: W.outline },
    outlineOffset: !0,
    outlineColor: b.colors("outlineColor"),
  },
  bt = {
    width: b.sizesT("width"),
    inlineSize: b.sizesT("inlineSize"),
    height: b.sizes("height"),
    blockSize: b.sizes("blockSize"),
    boxSize: b.sizes(["width", "height"]),
    minWidth: b.sizes("minWidth"),
    minInlineSize: b.sizes("minInlineSize"),
    minHeight: b.sizes("minHeight"),
    minBlockSize: b.sizes("minBlockSize"),
    maxWidth: b.sizes("maxWidth"),
    maxInlineSize: b.sizes("maxInlineSize"),
    maxHeight: b.sizes("maxHeight"),
    maxBlockSize: b.sizes("maxBlockSize"),
    overflow: !0,
    overflowX: !0,
    overflowY: !0,
    overscrollBehavior: !0,
    overscrollBehaviorX: !0,
    overscrollBehaviorY: !0,
    display: !0,
    aspectRatio: !0,
    hideFrom: {
      scale: "breakpoints",
      transform: (e, t) => {
        var r, n, i;
        return {
          [`@media screen and (min-width: ${
            (i =
              (n = (r = t.__breakpoints) == null ? void 0 : r.get(e)) == null
                ? void 0
                : n.minW) != null
              ? i
              : e
          })`]: { display: "none" },
        };
      },
    },
    hideBelow: {
      scale: "breakpoints",
      transform: (e, t) => {
        var r, n, i;
        return {
          [`@media screen and (max-width: ${
            (i =
              (n = (r = t.__breakpoints) == null ? void 0 : r.get(e)) == null
                ? void 0
                : n._minW) != null
              ? i
              : e
          })`]: { display: "none" },
        };
      },
    },
    verticalAlign: !0,
    boxSizing: !0,
    boxDecorationBreak: !0,
    float: b.propT("float", W.float),
    objectFit: !0,
    objectPosition: !0,
    visibility: !0,
    isolation: !0,
  };
Object.assign(bt, {
  w: bt.width,
  h: bt.height,
  minW: bt.minWidth,
  maxW: bt.maxWidth,
  minH: bt.minHeight,
  maxH: bt.maxHeight,
  overscroll: bt.overscrollBehavior,
  overscrollX: bt.overscrollBehaviorX,
  overscrollY: bt.overscrollBehaviorY,
});
var Z2 = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: b.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: b.prop("listStyleImage"),
};
function J2(e, t, r, n) {
  const i = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < i.length && e; n += 1) e = e[i[n]];
  return e === void 0 ? r : e;
}
var e_ = (e) => {
    const t = new WeakMap();
    return (n, i, o, a) => {
      if (typeof n > "u") return e(n, i, o);
      t.has(n) || t.set(n, new Map());
      const s = t.get(n);
      if (s.has(i)) return s.get(i);
      const l = e(n, i, o, a);
      return s.set(i, l), l;
    };
  },
  t_ = e_(J2),
  r_ = {
    border: "0px",
    clip: "rect(0, 0, 0, 0)",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
  },
  n_ = {
    position: "static",
    width: "auto",
    height: "auto",
    clip: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    whiteSpace: "normal",
  },
  qu = (e, t, r) => {
    const n = {},
      i = t_(e, t, {});
    for (const o in i) (o in r && r[o] != null) || (n[o] = i[o]);
    return n;
  },
  i_ = {
    srOnly: {
      transform(e) {
        return e === !0 ? r_ : e === "focusable" ? n_ : {};
      },
    },
    layerStyle: {
      processResult: !0,
      transform: (e, t, r) => qu(t, `layerStyles.${e}`, r),
    },
    textStyle: {
      processResult: !0,
      transform: (e, t, r) => qu(t, `textStyles.${e}`, r),
    },
    apply: { processResult: !0, transform: (e, t, r) => qu(t, e, r) },
  },
  Co = {
    position: !0,
    pos: b.prop("position"),
    zIndex: b.prop("zIndex", "zIndices"),
    inset: b.spaceT("inset"),
    insetX: b.spaceT(["left", "right"]),
    insetInline: b.spaceT("insetInline"),
    insetY: b.spaceT(["top", "bottom"]),
    insetBlock: b.spaceT("insetBlock"),
    top: b.spaceT("top"),
    insetBlockStart: b.spaceT("insetBlockStart"),
    bottom: b.spaceT("bottom"),
    insetBlockEnd: b.spaceT("insetBlockEnd"),
    left: b.spaceT("left"),
    insetInlineStart: b.logical({
      scale: "space",
      property: { ltr: "left", rtl: "right" },
    }),
    right: b.spaceT("right"),
    insetInlineEnd: b.logical({
      scale: "space",
      property: { ltr: "right", rtl: "left" },
    }),
  };
Object.assign(Co, {
  insetStart: Co.insetInlineStart,
  insetEnd: Co.insetInlineEnd,
});
var o_ = {
    ring: { transform: W.ring },
    ringColor: b.colors("--chakra-ring-color"),
    ringOffset: b.prop("--chakra-ring-offset-width"),
    ringOffsetColor: b.colors("--chakra-ring-offset-color"),
    ringInset: b.prop("--chakra-ring-inset"),
  },
  ae = {
    margin: b.spaceT("margin"),
    marginTop: b.spaceT("marginTop"),
    marginBlockStart: b.spaceT("marginBlockStart"),
    marginRight: b.spaceT("marginRight"),
    marginInlineEnd: b.spaceT("marginInlineEnd"),
    marginBottom: b.spaceT("marginBottom"),
    marginBlockEnd: b.spaceT("marginBlockEnd"),
    marginLeft: b.spaceT("marginLeft"),
    marginInlineStart: b.spaceT("marginInlineStart"),
    marginX: b.spaceT(["marginInlineStart", "marginInlineEnd"]),
    marginInline: b.spaceT("marginInline"),
    marginY: b.spaceT(["marginTop", "marginBottom"]),
    marginBlock: b.spaceT("marginBlock"),
    padding: b.space("padding"),
    paddingTop: b.space("paddingTop"),
    paddingBlockStart: b.space("paddingBlockStart"),
    paddingRight: b.space("paddingRight"),
    paddingBottom: b.space("paddingBottom"),
    paddingBlockEnd: b.space("paddingBlockEnd"),
    paddingLeft: b.space("paddingLeft"),
    paddingInlineStart: b.space("paddingInlineStart"),
    paddingInlineEnd: b.space("paddingInlineEnd"),
    paddingX: b.space(["paddingInlineStart", "paddingInlineEnd"]),
    paddingInline: b.space("paddingInline"),
    paddingY: b.space(["paddingTop", "paddingBottom"]),
    paddingBlock: b.space("paddingBlock"),
  };
Object.assign(ae, {
  m: ae.margin,
  mt: ae.marginTop,
  mr: ae.marginRight,
  me: ae.marginInlineEnd,
  marginEnd: ae.marginInlineEnd,
  mb: ae.marginBottom,
  ml: ae.marginLeft,
  ms: ae.marginInlineStart,
  marginStart: ae.marginInlineStart,
  mx: ae.marginX,
  my: ae.marginY,
  p: ae.padding,
  pt: ae.paddingTop,
  py: ae.paddingY,
  px: ae.paddingX,
  pb: ae.paddingBottom,
  pl: ae.paddingLeft,
  ps: ae.paddingInlineStart,
  paddingStart: ae.paddingInlineStart,
  pr: ae.paddingRight,
  pe: ae.paddingInlineEnd,
  paddingEnd: ae.paddingInlineEnd,
});
var a_ = {
    textDecorationColor: b.colors("textDecorationColor"),
    textDecoration: !0,
    textDecor: { property: "textDecoration" },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: b.shadows("textShadow"),
  },
  s_ = {
    clipPath: !0,
    transform: b.propT("transform", W.transform),
    transformOrigin: !0,
    translateX: b.spaceT("--chakra-translate-x"),
    translateY: b.spaceT("--chakra-translate-y"),
    skewX: b.degreeT("--chakra-skew-x"),
    skewY: b.degreeT("--chakra-skew-y"),
    scaleX: b.prop("--chakra-scale-x"),
    scaleY: b.prop("--chakra-scale-y"),
    scale: b.prop(["--chakra-scale-x", "--chakra-scale-y"]),
    rotate: b.degreeT("--chakra-rotate"),
  },
  l_ = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: b.prop("transitionDuration", "transition.duration"),
    transitionProperty: b.prop("transitionProperty", "transition.property"),
    transitionTimingFunction: b.prop(
      "transitionTimingFunction",
      "transition.easing"
    ),
  },
  u_ = {
    fontFamily: b.prop("fontFamily", "fonts"),
    fontSize: b.prop("fontSize", "fontSizes", W.px),
    fontWeight: b.prop("fontWeight", "fontWeights"),
    lineHeight: b.prop("lineHeight", "lineHeights"),
    letterSpacing: b.prop("letterSpacing", "letterSpacings"),
    textAlign: !0,
    fontStyle: !0,
    textIndent: !0,
    wordBreak: !0,
    overflowWrap: !0,
    textOverflow: !0,
    textTransform: !0,
    whiteSpace: !0,
    isTruncated: {
      transform(e) {
        if (e === !0)
          return {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          };
      },
    },
    noOfLines: {
      static: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "var(--chakra-line-clamp)",
      },
      property: "--chakra-line-clamp",
    },
  },
  c_ = {
    scrollBehavior: !0,
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollMargin: b.spaceT("scrollMargin"),
    scrollMarginTop: b.spaceT("scrollMarginTop"),
    scrollMarginBottom: b.spaceT("scrollMarginBottom"),
    scrollMarginLeft: b.spaceT("scrollMarginLeft"),
    scrollMarginRight: b.spaceT("scrollMarginRight"),
    scrollMarginX: b.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
    scrollMarginY: b.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
    scrollPadding: b.spaceT("scrollPadding"),
    scrollPaddingTop: b.spaceT("scrollPaddingTop"),
    scrollPaddingBottom: b.spaceT("scrollPaddingBottom"),
    scrollPaddingLeft: b.spaceT("scrollPaddingLeft"),
    scrollPaddingRight: b.spaceT("scrollPaddingRight"),
    scrollPaddingX: b.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
    scrollPaddingY: b.spaceT(["scrollPaddingTop", "scrollPaddingBottom"]),
  };
function C1(e) {
  return er(e) && e.reference ? e.reference : String(e);
}
var Jl = (e, ...t) => t.map(C1).join(` ${e} `).replace(/calc/g, ""),
  jm = (...e) => `calc(${Jl("+", ...e)})`,
  Lm = (...e) => `calc(${Jl("-", ...e)})`,
  Pd = (...e) => `calc(${Jl("*", ...e)})`,
  Im = (...e) => `calc(${Jl("/", ...e)})`,
  Vm = (e) => {
    const t = C1(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : Pd(t, -1);
  },
  Sn = Object.assign(
    (e) => ({
      add: (...t) => Sn(jm(e, ...t)),
      subtract: (...t) => Sn(Lm(e, ...t)),
      multiply: (...t) => Sn(Pd(e, ...t)),
      divide: (...t) => Sn(Im(e, ...t)),
      negate: () => Sn(Vm(e)),
      toString: () => e.toString(),
    }),
    { add: jm, subtract: Lm, multiply: Pd, divide: Im, negate: Vm }
  );
function d_(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function f_(e) {
  const t = d_(e.toString());
  return p_(h_(t));
}
function h_(e) {
  return e.includes("\\.")
    ? e
    : !Number.isInteger(parseFloat(e.toString()))
    ? e.replace(".", "\\.")
    : e;
}
function p_(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function m_(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function y_(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function g_(e, t = "") {
  return f_(`--${m_(e, t)}`);
}
function j(e, t, r) {
  const n = g_(e, r);
  return { variable: n, reference: y_(n, t) };
}
function v_(e, t) {
  const r = {};
  for (const n of t) {
    if (Array.isArray(n)) {
      const [i, o] = n;
      r[i] = j(`${e}-${i}`, o);
      continue;
    }
    r[n] = j(`${e}-${n}`);
  }
  return r;
}
function S_(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function b_(e) {
  const t = parseFloat(e.toString()),
    r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function Ed(e) {
  if (e == null) return e;
  const { unitless: t } = b_(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var _1 = (e, t) => (parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1),
  ah = (e) => Object.fromEntries(Object.entries(e).sort(_1));
function Om(e) {
  const t = ah(e);
  return Object.assign(Object.values(t), t);
}
function x_(e) {
  const t = Object.keys(ah(e));
  return new Set(t);
}
function Nm(e) {
  var t;
  if (!e) return e;
  e = (t = Ed(e)) != null ? t : e;
  const r = -0.02;
  return typeof e == "number"
    ? `${e + r}`
    : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`);
}
function lo(e, t) {
  const r = ["@media screen"];
  return (
    e && r.push("and", `(min-width: ${Ed(e)})`),
    t && r.push("and", `(max-width: ${Ed(t)})`),
    r.join(" ")
  );
}
function w_(e) {
  var t;
  if (!e) return null;
  e.base = (t = e.base) != null ? t : "0px";
  const r = Om(e),
    n = Object.entries(e)
      .sort(_1)
      .map(([a, s], l, u) => {
        var c;
        let [, d] = (c = u[l + 1]) != null ? c : [];
        return (
          (d = parseFloat(d) > 0 ? Nm(d) : void 0),
          {
            _minW: Nm(s),
            breakpoint: a,
            minW: s,
            maxW: d,
            maxWQuery: lo(null, d),
            minWQuery: lo(s),
            minMaxQuery: lo(s, d),
          }
        );
      }),
    i = x_(e),
    o = Array.from(i.values());
  return {
    keys: i,
    normalized: r,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => i.has(l));
    },
    asObject: ah(e),
    asArray: Om(e),
    details: n,
    get(a) {
      return n.find((s) => s.breakpoint === a);
    },
    media: [null, ...r.map((a) => lo(a)).slice(1)],
    toArrayValue(a) {
      if (!er(a)) throw new Error("toArrayValue: value must be an object");
      const s = o.map((l) => {
        var u;
        return (u = a[l]) != null ? u : null;
      });
      for (; S_(s) === null; ) s.pop();
      return s;
    },
    toObjectValue(a) {
      if (!Array.isArray(a))
        throw new Error("toObjectValue: value must be an array");
      return a.reduce((s, l, u) => {
        const c = o[u];
        return c != null && l != null && (s[c] = l), s;
      }, {});
    },
  };
}
var ze = {
    hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
    focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
    focusVisible: (e, t) => `${e}:focus-visible ${t}`,
    focusWithin: (e, t) => `${e}:focus-within ${t}`,
    active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
    disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
    invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
    checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
    indeterminate: (e, t) =>
      `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
    readOnly: (e, t) =>
      `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
    expanded: (e, t) =>
      `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
    placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`,
  },
  $r = (e) => T1((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"),
  ar = (e) => T1((t) => e(t, "~ &"), "[data-peer]", ".peer"),
  T1 = (e, ...t) => t.map(e).join(", "),
  eu = {
    _hover: "&:hover, &[data-hover]",
    _active: "&:active, &[data-active]",
    _focus: "&:focus, &[data-focus]",
    _highlighted: "&[data-highlighted]",
    _focusWithin: "&:focus-within",
    _focusVisible: "&:focus-visible, &[data-focus-visible]",
    _disabled:
      "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
    _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
    _before: "&::before",
    _after: "&::after",
    _empty: "&:empty",
    _expanded: "&[aria-expanded=true], &[data-expanded]",
    _checked: "&[aria-checked=true], &[data-checked]",
    _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
    _pressed: "&[aria-pressed=true], &[data-pressed]",
    _invalid: "&[aria-invalid=true], &[data-invalid]",
    _valid: "&[data-valid], &[data-state=valid]",
    _loading: "&[data-loading], &[aria-busy=true]",
    _selected: "&[aria-selected=true], &[data-selected]",
    _hidden: "&[hidden], &[data-hidden]",
    _autofill: "&:-webkit-autofill",
    _even: "&:nth-of-type(even)",
    _odd: "&:nth-of-type(odd)",
    _first: "&:first-of-type",
    _firstLetter: "&::first-letter",
    _last: "&:last-of-type",
    _notFirst: "&:not(:first-of-type)",
    _notLast: "&:not(:last-of-type)",
    _visited: "&:visited",
    _activeLink: "&[aria-current=page]",
    _activeStep: "&[aria-current=step]",
    _indeterminate:
      "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
    _groupHover: $r(ze.hover),
    _peerHover: ar(ze.hover),
    _groupFocus: $r(ze.focus),
    _peerFocus: ar(ze.focus),
    _groupFocusVisible: $r(ze.focusVisible),
    _peerFocusVisible: ar(ze.focusVisible),
    _groupActive: $r(ze.active),
    _peerActive: ar(ze.active),
    _groupDisabled: $r(ze.disabled),
    _peerDisabled: ar(ze.disabled),
    _groupInvalid: $r(ze.invalid),
    _peerInvalid: ar(ze.invalid),
    _groupChecked: $r(ze.checked),
    _peerChecked: ar(ze.checked),
    _groupFocusWithin: $r(ze.focusWithin),
    _peerFocusWithin: ar(ze.focusWithin),
    _peerPlaceholderShown: ar(ze.placeholderShown),
    _placeholder: "&::placeholder",
    _placeholderShown: "&:placeholder-shown",
    _fullScreen: "&:fullscreen",
    _selection: "&::selection",
    _rtl: "[dir=rtl] &, &[dir=rtl]",
    _ltr: "[dir=ltr] &, &[dir=ltr]",
    _mediaDark: "@media (prefers-color-scheme: dark)",
    _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
    _dark:
      ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
    _light:
      ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
    _horizontal: "&[data-orientation=horizontal]",
    _vertical: "&[data-orientation=vertical]",
  },
  P1 = Object.keys(eu);
function Wm(e, t) {
  return j(String(e).replace(/\./g, "-"), void 0, t);
}
function k_(e, t) {
  let r = {};
  const n = {};
  for (const [i, o] of Object.entries(e)) {
    const { isSemantic: a, value: s } = o,
      { variable: l, reference: u } = Wm(
        i,
        t == null ? void 0 : t.cssVarPrefix
      );
    if (!a) {
      if (i.startsWith("space")) {
        const f = i.split("."),
          [y, ...S] = f,
          v = `${y}.-${S.join(".")}`,
          w = Sn.negate(s),
          p = Sn.negate(u);
        n[v] = { value: w, var: l, varRef: p };
      }
      (r[l] = s), (n[i] = { value: s, var: l, varRef: u });
      continue;
    }
    const c = (f) => {
        const S = [String(i).split(".")[0], f].join(".");
        if (!e[S]) return f;
        const { reference: w } = Wm(S, t == null ? void 0 : t.cssVarPrefix);
        return w;
      },
      d = er(s) ? s : { default: s };
    (r = qt(
      r,
      Object.entries(d).reduce((f, [y, S]) => {
        var v, w;
        if (!S) return f;
        const p = c(`${S}`);
        if (y === "default") return (f[l] = p), f;
        const h = (w = (v = eu) == null ? void 0 : v[y]) != null ? w : y;
        return (f[h] = { [l]: p }), f;
      }, {})
    )),
      (n[i] = { value: u, var: l, varRef: u });
  }
  return { cssVars: r, cssMap: n };
}
function C_(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t) n in r && delete r[n];
  return r;
}
function __(e, t) {
  const r = {};
  for (const n of t) n in e && (r[n] = e[n]);
  return r;
}
function T_(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function Um(e, t, r = {}) {
  const { stop: n, getKey: i } = r;
  function o(a, s = []) {
    var l;
    if (T_(a) || Array.isArray(a)) {
      const u = {};
      for (const [c, d] of Object.entries(a)) {
        const f = (l = i == null ? void 0 : i(c)) != null ? l : c,
          y = [...s, f];
        if (n != null && n(a, y)) return t(a, s);
        u[f] = o(d, y);
      }
      return u;
    }
    return t(a, s);
  }
  return o(e);
}
var P_ = [
  "colors",
  "borders",
  "borderWidths",
  "borderStyles",
  "fonts",
  "fontSizes",
  "fontWeights",
  "gradients",
  "letterSpacings",
  "lineHeights",
  "radii",
  "space",
  "shadows",
  "sizes",
  "zIndices",
  "transition",
  "blur",
  "breakpoints",
];
function E_(e) {
  return __(e, P_);
}
function $_(e) {
  return e.semanticTokens;
}
function A_(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...i } = e;
  return i;
}
var R_ = (e) => P1.includes(e) || e === "default";
function z_({ tokens: e, semanticTokens: t }) {
  const r = {};
  return (
    Um(e, (n, i) => {
      n != null && (r[i.join(".")] = { isSemantic: !1, value: n });
    }),
    Um(
      t,
      (n, i) => {
        n != null && (r[i.join(".")] = { isSemantic: !0, value: n });
      },
      { stop: (n) => Object.keys(n).every(R_) }
    ),
    r
  );
}
function M_(e) {
  var t;
  const r = A_(e),
    n = E_(r),
    i = $_(r),
    o = z_({ tokens: n, semanticTokens: i }),
    a = (t = r.config) == null ? void 0 : t.cssVarPrefix,
    { cssMap: s, cssVars: l } = k_(o, { cssVarPrefix: a });
  return (
    Object.assign(r, {
      __cssVars: {
        ...{
          "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-ring-offset-width": "0px",
          "--chakra-ring-offset-color": "#fff",
          "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
          "--chakra-ring-offset-shadow": "0 0 #0000",
          "--chakra-ring-shadow": "0 0 #0000",
          "--chakra-space-x-reverse": "0",
          "--chakra-space-y-reverse": "0",
        },
        ...l,
      },
      __cssMap: s,
      __breakpoints: w_(r.breakpoints),
    }),
    r
  );
}
var sh = qt(
    {},
    Cs,
    G,
    X2,
    dl,
    bt,
    q2,
    o_,
    Q2,
    k1,
    i_,
    Co,
    Td,
    ae,
    c_,
    u_,
    a_,
    s_,
    Z2,
    l_
  ),
  F_ = Object.assign({}, ae, bt, dl, k1, Co),
  D_ = Object.keys(F_),
  B_ = [...Object.keys(sh), ...P1],
  j_ = { ...sh, ...eu },
  L_ = (e) => e in j_,
  I_ = (e) => (t) => {
    if (!t.__breakpoints) return e;
    const { isResponsive: r, toArrayValue: n, media: i } = t.__breakpoints,
      o = {};
    for (const a in e) {
      let s = Or(e[a], t);
      if (s == null) continue;
      if (((s = er(s) && r(s) ? n(s) : s), !Array.isArray(s))) {
        o[a] = s;
        continue;
      }
      const l = s.slice(0, i.length).length;
      for (let u = 0; u < l; u += 1) {
        const c = i == null ? void 0 : i[u];
        if (!c) {
          o[a] = s[u];
          continue;
        }
        (o[c] = o[c] || {}), s[u] != null && (o[c][a] = s[u]);
      }
    }
    return o;
  };
function V_(e) {
  const t = [];
  let r = "",
    n = !1;
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    o === "("
      ? ((n = !0), (r += o))
      : o === ")"
      ? ((n = !1), (r += o))
      : o === "," && !n
      ? (t.push(r), (r = ""))
      : (r += o);
  }
  return (r = r.trim()), r && t.push(r), t;
}
function O_(e) {
  return /^var\(--.+\)$/.test(e);
}
var N_ = (e, t) => e.startsWith("--") && typeof t == "string" && !O_(t),
  W_ = (e, t) => {
    var r, n;
    if (t == null) return t;
    const i = (l) => {
        var u, c;
        return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null
          ? void 0
          : c.varRef;
      },
      o = (l) => {
        var u;
        return (u = i(l)) != null ? u : l;
      },
      [a, s] = V_(t);
    return (t = (n = (r = i(a)) != null ? r : o(s)) != null ? n : o(t)), t;
  };
function U_(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e,
    i = (o, a = !1) => {
      var s, l, u;
      const c = Or(o, n),
        d = I_(c)(n);
      let f = {};
      for (let y in d) {
        const S = d[y];
        let v = Or(S, n);
        y in r && (y = r[y]), N_(y, v) && (v = W_(n, v));
        let w = t[y];
        if ((w === !0 && (w = { property: y }), er(v))) {
          (f[y] = (s = f[y]) != null ? s : {}), (f[y] = qt({}, f[y], i(v, !0)));
          continue;
        }
        let p =
          (u =
            (l = w == null ? void 0 : w.transform) == null
              ? void 0
              : l.call(w, v, n, c)) != null
            ? u
            : v;
        p = w != null && w.processResult ? i(p, !0) : p;
        const h = Or(w == null ? void 0 : w.property, n);
        if (!a && w != null && w.static) {
          const m = Or(w.static, n);
          f = qt({}, f, m);
        }
        if (h && Array.isArray(h)) {
          for (const m of h) f[m] = p;
          continue;
        }
        if (h) {
          h === "&" && er(p) ? (f = qt({}, f, p)) : (f[h] = p);
          continue;
        }
        if (er(p)) {
          f = qt({}, f, p);
          continue;
        }
        f[y] = p;
      }
      return f;
    };
  return i;
}
var E1 = (e) => (t) => U_({ theme: t, pseudos: eu, configs: sh })(e);
function ie(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    },
  };
}
function H_(e, t) {
  if (Array.isArray(e)) return e;
  if (er(e)) return t(e);
  if (e != null) return [e];
}
function K_(e, t) {
  for (let r = t + 1; r < e.length; r++) if (e[r] != null) return r;
  return -1;
}
function G_(e) {
  const t = e.__breakpoints;
  return function (n, i, o, a) {
    var s, l;
    if (!t) return;
    const u = {},
      c = H_(o, t.toArrayValue);
    if (!c) return u;
    const d = c.length,
      f = d === 1,
      y = !!n.parts;
    for (let S = 0; S < d; S++) {
      const v = t.details[S],
        w = t.details[K_(c, S)],
        p = lo(v.minW, w == null ? void 0 : w._minW),
        h = Or((s = n[i]) == null ? void 0 : s[c[S]], a);
      if (h) {
        if (y) {
          (l = n.parts) == null ||
            l.forEach((m) => {
              qt(u, { [m]: f ? h[m] : { [p]: h[m] } });
            });
          continue;
        }
        if (!y) {
          f ? qt(u, h) : (u[p] = h);
          continue;
        }
        u[p] = h;
      }
    }
    return u;
  };
}
function Y_(e) {
  return (t) => {
    var r;
    const { variant: n, size: i, theme: o } = t,
      a = G_(o);
    return qt(
      {},
      Or((r = e.baseStyle) != null ? r : {}, t),
      a(e, "sizes", i, t),
      a(e, "variants", n, t)
    );
  };
}
function Li(e) {
  return C_(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var X_ = {
    common:
      "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    colors: "background-color, border-color, color, fill, stroke",
    dimensions: "width, height",
    position: "left, right, top, bottom",
    background: "background-color, background-image, background-position",
  },
  q_ = {
    "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
    "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
    "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  Q_ = {
    "ultra-fast": "50ms",
    faster: "100ms",
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    slower: "400ms",
    "ultra-slow": "500ms",
  },
  Z_ = { property: X_, easing: q_, duration: Q_ },
  J_ = Z_,
  eT = {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1e3,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  tT = eT,
  rT = {
    none: 0,
    "1px": "1px solid",
    "2px": "2px solid",
    "4px": "4px solid",
    "8px": "8px solid",
  },
  nT = rT,
  iT = {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  oT = iT,
  aT = {
    transparent: "transparent",
    current: "currentColor",
    black: "#000000",
    white: "#FFFFFF",
    whiteAlpha: {
      50: "rgba(255, 255, 255, 0.04)",
      100: "rgba(255, 255, 255, 0.06)",
      200: "rgba(255, 255, 255, 0.08)",
      300: "rgba(255, 255, 255, 0.16)",
      400: "rgba(255, 255, 255, 0.24)",
      500: "rgba(255, 255, 255, 0.36)",
      600: "rgba(255, 255, 255, 0.48)",
      700: "rgba(255, 255, 255, 0.64)",
      800: "rgba(255, 255, 255, 0.80)",
      900: "rgba(255, 255, 255, 0.92)",
    },
    blackAlpha: {
      50: "rgba(0, 0, 0, 0.04)",
      100: "rgba(0, 0, 0, 0.06)",
      200: "rgba(0, 0, 0, 0.08)",
      300: "rgba(0, 0, 0, 0.16)",
      400: "rgba(0, 0, 0, 0.24)",
      500: "rgba(0, 0, 0, 0.36)",
      600: "rgba(0, 0, 0, 0.48)",
      700: "rgba(0, 0, 0, 0.64)",
      800: "rgba(0, 0, 0, 0.80)",
      900: "rgba(0, 0, 0, 0.92)",
    },
    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
    red: {
      50: "#FFF5F5",
      100: "#FED7D7",
      200: "#FEB2B2",
      300: "#FC8181",
      400: "#F56565",
      500: "#E53E3E",
      600: "#C53030",
      700: "#9B2C2C",
      800: "#822727",
      900: "#63171B",
    },
    orange: {
      50: "#FFFAF0",
      100: "#FEEBC8",
      200: "#FBD38D",
      300: "#F6AD55",
      400: "#ED8936",
      500: "#DD6B20",
      600: "#C05621",
      700: "#9C4221",
      800: "#7B341E",
      900: "#652B19",
    },
    yellow: {
      50: "#FFFFF0",
      100: "#FEFCBF",
      200: "#FAF089",
      300: "#F6E05E",
      400: "#ECC94B",
      500: "#D69E2E",
      600: "#B7791F",
      700: "#975A16",
      800: "#744210",
      900: "#5F370E",
    },
    green: {
      50: "#F0FFF4",
      100: "#C6F6D5",
      200: "#9AE6B4",
      300: "#68D391",
      400: "#48BB78",
      500: "#38A169",
      600: "#2F855A",
      700: "#276749",
      800: "#22543D",
      900: "#1C4532",
    },
    teal: {
      50: "#E6FFFA",
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#319795",
      600: "#2C7A7B",
      700: "#285E61",
      800: "#234E52",
      900: "#1D4044",
    },
    blue: {
      50: "#ebf8ff",
      100: "#bee3f8",
      200: "#90cdf4",
      300: "#63b3ed",
      400: "#4299e1",
      500: "#3182ce",
      600: "#2b6cb0",
      700: "#2c5282",
      800: "#2a4365",
      900: "#1A365D",
    },
    cyan: {
      50: "#EDFDFD",
      100: "#C4F1F9",
      200: "#9DECF9",
      300: "#76E4F7",
      400: "#0BC5EA",
      500: "#00B5D8",
      600: "#00A3C4",
      700: "#0987A0",
      800: "#086F83",
      900: "#065666",
    },
    purple: {
      50: "#FAF5FF",
      100: "#E9D8FD",
      200: "#D6BCFA",
      300: "#B794F4",
      400: "#9F7AEA",
      500: "#805AD5",
      600: "#6B46C1",
      700: "#553C9A",
      800: "#44337A",
      900: "#322659",
    },
    pink: {
      50: "#FFF5F7",
      100: "#FED7E2",
      200: "#FBB6CE",
      300: "#F687B3",
      400: "#ED64A6",
      500: "#D53F8C",
      600: "#B83280",
      700: "#97266D",
      800: "#702459",
      900: "#521B41",
    },
    linkedin: {
      50: "#E8F4F9",
      100: "#CFEDFB",
      200: "#9BDAF3",
      300: "#68C7EC",
      400: "#34B3E4",
      500: "#00A0DC",
      600: "#008CC9",
      700: "#0077B5",
      800: "#005E93",
      900: "#004471",
    },
    facebook: {
      50: "#E8F4F9",
      100: "#D9DEE9",
      200: "#B7C2DA",
      300: "#6482C0",
      400: "#4267B2",
      500: "#385898",
      600: "#314E89",
      700: "#29487D",
      800: "#223B67",
      900: "#1E355B",
    },
    messenger: {
      50: "#D0E6FF",
      100: "#B9DAFF",
      200: "#A2CDFF",
      300: "#7AB8FF",
      400: "#2E90FF",
      500: "#0078FF",
      600: "#0063D1",
      700: "#0052AC",
      800: "#003C7E",
      900: "#002C5C",
    },
    whatsapp: {
      50: "#dffeec",
      100: "#b9f5d0",
      200: "#90edb3",
      300: "#65e495",
      400: "#3cdd78",
      500: "#22c35e",
      600: "#179848",
      700: "#0c6c33",
      800: "#01421c",
      900: "#001803",
    },
    twitter: {
      50: "#E5F4FD",
      100: "#C8E9FB",
      200: "#A8DCFA",
      300: "#83CDF7",
      400: "#57BBF5",
      500: "#1DA1F2",
      600: "#1A94DA",
      700: "#1681BF",
      800: "#136B9E",
      900: "#0D4D71",
    },
    telegram: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
  },
  sT = aT,
  lT = {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  uT = lT,
  cT = {
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none",
    "dark-lg":
      "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px",
  },
  dT = cT,
  fT = {
    none: 0,
    sm: "4px",
    base: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px",
  },
  hT = fT,
  pT = {
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    lineHeights: {
      normal: "normal",
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fonts: {
      heading:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    },
    fontSizes: {
      "3xs": "0.45rem",
      "2xs": "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
  },
  $1 = pT,
  A1 = {
    px: "1px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
  mT = {
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    prose: "60ch",
  },
  yT = { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
  gT = { ...A1, ...mT, container: yT },
  R1 = gT,
  vT = {
    breakpoints: oT,
    zIndices: tT,
    radii: uT,
    blur: hT,
    colors: sT,
    ...$1,
    sizes: R1,
    shadows: dT,
    space: A1,
    borders: nT,
    transition: J_,
  },
  { defineMultiStyleConfig: ST, definePartsStyle: uo } = ie([
    "stepper",
    "step",
    "title",
    "description",
    "indicator",
    "separator",
    "icon",
    "number",
  ]),
  ur = j("stepper-indicator-size"),
  ri = j("stepper-icon-size"),
  ni = j("stepper-title-font-size"),
  co = j("stepper-description-font-size"),
  eo = j("stepper-accent-color"),
  bT = uo(({ colorScheme: e }) => ({
    stepper: {
      display: "flex",
      justifyContent: "space-between",
      gap: "4",
      "&[data-orientation=vertical]": {
        flexDirection: "column",
        alignItems: "flex-start",
      },
      "&[data-orientation=horizontal]": {
        flexDirection: "row",
        alignItems: "center",
      },
      [eo.variable]: `colors.${e}.500`,
      _dark: { [eo.variable]: `colors.${e}.200` },
    },
    title: { fontSize: ni.reference, fontWeight: "medium" },
    description: { fontSize: co.reference, color: "chakra-subtle-text" },
    number: { fontSize: ni.reference },
    step: {
      flexShrink: 0,
      position: "relative",
      display: "flex",
      gap: "2",
      "&[data-orientation=horizontal]": { alignItems: "center" },
      flex: "1",
      "&:last-of-type:not([data-stretch])": { flex: "initial" },
    },
    icon: { flexShrink: 0, width: ri.reference, height: ri.reference },
    indicator: {
      flexShrink: 0,
      borderRadius: "full",
      width: ur.reference,
      height: ur.reference,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&[data-status=active]": {
        borderWidth: "2px",
        borderColor: eo.reference,
      },
      "&[data-status=complete]": {
        bg: eo.reference,
        color: "chakra-inverse-text",
      },
      "&[data-status=incomplete]": { borderWidth: "2px" },
    },
    separator: {
      bg: "chakra-border-color",
      flex: "1",
      "&[data-status=complete]": { bg: eo.reference },
      "&[data-orientation=horizontal]": {
        width: "100%",
        height: "2px",
        marginStart: "2",
      },
      "&[data-orientation=vertical]": {
        width: "2px",
        position: "absolute",
        height: "100%",
        maxHeight: `calc(100% - ${ur.reference} - 8px)`,
        top: `calc(${ur.reference} + 4px)`,
        insetStart: `calc(${ur.reference} / 2 - 1px)`,
      },
    },
  })),
  xT = ST({
    baseStyle: bT,
    sizes: {
      xs: uo({
        stepper: {
          [ur.variable]: "sizes.4",
          [ri.variable]: "sizes.3",
          [ni.variable]: "fontSizes.xs",
          [co.variable]: "fontSizes.xs",
        },
      }),
      sm: uo({
        stepper: {
          [ur.variable]: "sizes.6",
          [ri.variable]: "sizes.4",
          [ni.variable]: "fontSizes.sm",
          [co.variable]: "fontSizes.xs",
        },
      }),
      md: uo({
        stepper: {
          [ur.variable]: "sizes.8",
          [ri.variable]: "sizes.5",
          [ni.variable]: "fontSizes.md",
          [co.variable]: "fontSizes.sm",
        },
      }),
      lg: uo({
        stepper: {
          [ur.variable]: "sizes.10",
          [ri.variable]: "sizes.6",
          [ni.variable]: "fontSizes.lg",
          [co.variable]: "fontSizes.md",
        },
      }),
    },
    defaultProps: { size: "md", colorScheme: "blue" },
  });
function Q(e, t = {}) {
  let r = !1;
  function n() {
    if (!r) {
      r = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function i(...c) {
    n();
    for (const d of c) t[d] = l(d);
    return Q(e, t);
  }
  function o(...c) {
    for (const d of c) d in t || (t[d] = l(d));
    return Q(e, t);
  }
  function a() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.selector])
    );
  }
  function s() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.className])
    );
  }
  function l(c) {
    const y = `chakra-${(["container", "root"].includes(c ?? "") ? [e] : [e, c])
      .filter(Boolean)
      .join("__")}`;
    return { className: y, selector: `.${y}`, toString: () => c };
  }
  return {
    parts: i,
    toPart: l,
    extend: o,
    selectors: a,
    classnames: s,
    get keys() {
      return Object.keys(t);
    },
    __type: {},
  };
}
var wT = Q("accordion")
    .parts("root", "container", "button", "panel")
    .extend("icon"),
  kT = Q("alert")
    .parts("title", "description", "container")
    .extend("icon", "spinner"),
  CT = Q("avatar")
    .parts("label", "badge", "container")
    .extend("excessLabel", "group"),
  _T = Q("breadcrumb").parts("link", "item", "container").extend("separator");
Q("button").parts();
var TT = Q("checkbox").parts("control", "icon", "container").extend("label");
Q("progress").parts("track", "filledTrack").extend("label");
var PT = Q("drawer")
    .parts("overlay", "dialogContainer", "dialog")
    .extend("header", "closeButton", "body", "footer"),
  ET = Q("editable").parts("preview", "input", "textarea"),
  $T = Q("form").parts("container", "requiredIndicator", "helperText"),
  AT = Q("formError").parts("text", "icon"),
  RT = Q("input").parts("addon", "field", "element", "group"),
  zT = Q("list").parts("container", "item", "icon"),
  MT = Q("menu")
    .parts("button", "list", "item")
    .extend("groupTitle", "icon", "command", "divider"),
  FT = Q("modal")
    .parts("overlay", "dialogContainer", "dialog")
    .extend("header", "closeButton", "body", "footer"),
  DT = Q("numberinput").parts("root", "field", "stepperGroup", "stepper");
Q("pininput").parts("field");
var BT = Q("popover")
    .parts("content", "header", "body", "footer")
    .extend("popper", "arrow", "closeButton"),
  jT = Q("progress").parts("label", "filledTrack", "track"),
  LT = Q("radio").parts("container", "control", "label"),
  IT = Q("select").parts("field", "icon"),
  VT = Q("slider").parts("container", "track", "thumb", "filledTrack", "mark"),
  OT = Q("stat").parts("container", "label", "helpText", "number", "icon"),
  NT = Q("switch").parts("container", "track", "thumb", "label"),
  WT = Q("table").parts(
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
    "tfoot",
    "caption"
  ),
  UT = Q("tabs").parts(
    "root",
    "tab",
    "tablist",
    "tabpanel",
    "tabpanels",
    "indicator"
  ),
  HT = Q("tag").parts("container", "label", "closeButton"),
  KT = Q("card").parts("container", "header", "body", "footer");
Q("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
function Cn(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class GT extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var fo = GT;
function lh(e) {
  if (typeof e != "string") throw new fo(e);
  if (e.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let t = e.trim();
  t = tP.test(e) ? qT(e) : e;
  const r = QT.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [
      ...a.slice(0, 3).map((s) => parseInt(na(s, 2), 16)),
      parseInt(na(a[3] || "f", 2), 16) / 255,
    ];
  }
  const n = ZT.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [
      ...a.slice(0, 3).map((s) => parseInt(s, 16)),
      parseInt(a[3] || "ff", 16) / 255,
    ];
  }
  const i = JT.exec(t);
  if (i) {
    const a = Array.from(i).slice(1);
    return [
      ...a.slice(0, 3).map((s) => parseInt(s, 10)),
      parseFloat(a[3] || "1"),
    ];
  }
  const o = eP.exec(t);
  if (o) {
    const [a, s, l, u] = Array.from(o).slice(1).map(parseFloat);
    if (Cn(0, 100, s) !== s) throw new fo(e);
    if (Cn(0, 100, l) !== l) throw new fo(e);
    return [...rP(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new fo(e);
}
function YT(e) {
  let t = 5381,
    r = e.length;
  for (; r; ) t = (t * 33) ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const Hm = (e) => parseInt(e.replace(/_/g, ""), 36),
  XT =
    "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm"
      .split(" ")
      .reduce((e, t) => {
        const r = Hm(t.substring(0, 3)),
          n = Hm(t.substring(3)).toString(16);
        let i = "";
        for (let o = 0; o < 6 - n.length; o++) i += "0";
        return (e[r] = `${i}${n}`), e;
      }, {});
function qT(e) {
  const t = e.toLowerCase().trim(),
    r = XT[YT(t)];
  if (!r) throw new fo(e);
  return `#${r}`;
}
const na = (e, t) =>
    Array.from(Array(t))
      .map(() => e)
      .join(""),
  QT = new RegExp(`^#${na("([a-f0-9])", 3)}([a-f0-9])?$`, "i"),
  ZT = new RegExp(`^#${na("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"),
  JT = new RegExp(
    `^rgba?\\(\\s*(\\d+)\\s*${na(
      ",\\s*(\\d+)\\s*",
      2
    )}(?:,\\s*([\\d.]+))?\\s*\\)$`,
    "i"
  ),
  eP =
    /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
  tP = /^[a-z]+$/i,
  Km = (e) => Math.round(e * 255),
  rP = (e, t, r) => {
    let n = r / 100;
    if (t === 0) return [n, n, n].map(Km);
    const i = (((e % 360) + 360) % 360) / 60,
      o = (1 - Math.abs(2 * n - 1)) * (t / 100),
      a = o * (1 - Math.abs((i % 2) - 1));
    let s = 0,
      l = 0,
      u = 0;
    i >= 0 && i < 1
      ? ((s = o), (l = a))
      : i >= 1 && i < 2
      ? ((s = a), (l = o))
      : i >= 2 && i < 3
      ? ((l = o), (u = a))
      : i >= 3 && i < 4
      ? ((l = a), (u = o))
      : i >= 4 && i < 5
      ? ((s = a), (u = o))
      : i >= 5 && i < 6 && ((s = o), (u = a));
    const c = n - o / 2,
      d = s + c,
      f = l + c,
      y = u + c;
    return [d, f, y].map(Km);
  };
function nP(e, t, r, n) {
  return `rgba(${Cn(0, 255, e).toFixed()}, ${Cn(0, 255, t).toFixed()}, ${Cn(
    0,
    255,
    r
  ).toFixed()}, ${parseFloat(Cn(0, 1, n).toFixed(3))})`;
}
function iP(e, t) {
  const [r, n, i, o] = lh(e);
  return nP(r, n, i, o - t);
}
function oP(e) {
  const [t, r, n, i] = lh(e);
  let o = (a) => {
    const s = Cn(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${o(t)}${o(r)}${o(n)}${i < 1 ? o(Math.round(i * 255)) : ""}`;
}
function aP(e, t, r, n, i) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : i;
  return e === i ? r : e;
}
var sP = (e) => Object.keys(e).length === 0,
  Ye = (e, t, r) => {
    const n = aP(e, `colors.${t}`, t);
    try {
      return oP(n), n;
    } catch {
      return r ?? "#000000";
    }
  },
  lP = (e) => {
    const [t, r, n] = lh(e);
    return (t * 299 + r * 587 + n * 114) / 1e3;
  },
  uP = (e) => (t) => {
    const r = Ye(t, e);
    return lP(r) < 128 ? "dark" : "light";
  },
  cP = (e) => (t) => uP(e)(t) === "dark",
  Ri = (e, t) => (r) => {
    const n = Ye(r, e);
    return iP(n, 1 - t);
  };
function Gm(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`,
  };
}
var dP = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, "0")}`;
function fP(e) {
  const t = dP();
  return !e || sP(e)
    ? t
    : e.string && e.colors
    ? pP(e.string, e.colors)
    : e.string && !e.colors
    ? hP(e.string)
    : e.colors && !e.string
    ? mP(e.colors)
    : t;
}
function hP(e) {
  let t = 0;
  if (e.length === 0) return t.toString();
  for (let n = 0; n < e.length; n += 1)
    (t = e.charCodeAt(n) + ((t << 5) - t)), (t = t & t);
  let r = "#";
  for (let n = 0; n < 3; n += 1) {
    const i = (t >> (n * 8)) & 255;
    r += `00${i.toString(16)}`.substr(-2);
  }
  return r;
}
function pP(e, t) {
  let r = 0;
  if (e.length === 0) return t[0];
  for (let n = 0; n < e.length; n += 1)
    (r = e.charCodeAt(n) + ((r << 5) - r)), (r = r & r);
  return (r = ((r % t.length) + t.length) % t.length), t[r];
}
function mP(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function B(e, t) {
  return (r) => (r.colorMode === "dark" ? t : e);
}
function uh(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? (t === "vertical" ? r : n) : {};
}
function z1(e) {
  return er(e) && e.reference ? e.reference : String(e);
}
var tu = (e, ...t) => t.map(z1).join(` ${e} `).replace(/calc/g, ""),
  Ym = (...e) => `calc(${tu("+", ...e)})`,
  Xm = (...e) => `calc(${tu("-", ...e)})`,
  $d = (...e) => `calc(${tu("*", ...e)})`,
  qm = (...e) => `calc(${tu("/", ...e)})`,
  Qm = (e) => {
    const t = z1(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : $d(t, -1);
  },
  cr = Object.assign(
    (e) => ({
      add: (...t) => cr(Ym(e, ...t)),
      subtract: (...t) => cr(Xm(e, ...t)),
      multiply: (...t) => cr($d(e, ...t)),
      divide: (...t) => cr(qm(e, ...t)),
      negate: () => cr(Qm(e)),
      toString: () => e.toString(),
    }),
    { add: Ym, subtract: Xm, multiply: $d, divide: qm, negate: Qm }
  );
function yP(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function gP(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function M1(e) {
  const t = gP(e.toString());
  return t.includes("\\.") ? e : yP(e) ? t.replace(".", "\\.") : e;
}
function vP(e, t = "") {
  return [t, M1(e)].filter(Boolean).join("-");
}
function SP(e, t) {
  return `var(${M1(e)}${t ? `, ${t}` : ""})`;
}
function bP(e, t = "") {
  return `--${vP(e, t)}`;
}
function Ee(e, t) {
  const r = bP(e, void 0);
  return { variable: r, reference: SP(r, xP(void 0)) };
}
function xP(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: wP, definePartsStyle: _s } = ie(NT.keys),
  _o = Ee("switch-track-width"),
  En = Ee("switch-track-height"),
  Qu = Ee("switch-track-diff"),
  kP = cr.subtract(_o, En),
  Ad = Ee("switch-thumb-x"),
  to = Ee("switch-bg"),
  CP = (e) => {
    const { colorScheme: t } = e;
    return {
      borderRadius: "full",
      p: "0.5",
      width: [_o.reference],
      height: [En.reference],
      transitionProperty: "common",
      transitionDuration: "fast",
      [to.variable]: "colors.gray.300",
      _dark: { [to.variable]: "colors.whiteAlpha.400" },
      _focusVisible: { boxShadow: "outline" },
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
      _checked: {
        [to.variable]: `colors.${t}.500`,
        _dark: { [to.variable]: `colors.${t}.200` },
      },
      bg: to.reference,
    };
  },
  _P = {
    bg: "white",
    transitionProperty: "transform",
    transitionDuration: "normal",
    borderRadius: "inherit",
    width: [En.reference],
    height: [En.reference],
    _checked: { transform: `translateX(${Ad.reference})` },
  },
  TP = _s((e) => ({
    container: {
      [Qu.variable]: kP,
      [Ad.variable]: Qu.reference,
      _rtl: { [Ad.variable]: cr(Qu).negate().toString() },
    },
    track: CP(e),
    thumb: _P,
  })),
  PP = {
    sm: _s({
      container: { [_o.variable]: "1.375rem", [En.variable]: "sizes.3" },
    }),
    md: _s({
      container: { [_o.variable]: "1.875rem", [En.variable]: "sizes.4" },
    }),
    lg: _s({
      container: { [_o.variable]: "2.875rem", [En.variable]: "sizes.6" },
    }),
  },
  EP = wP({
    baseStyle: TP,
    sizes: PP,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: $P, definePartsStyle: Si } = ie(WT.keys),
  AP = Si({
    table: {
      fontVariantNumeric: "lining-nums tabular-nums",
      borderCollapse: "collapse",
      width: "full",
    },
    th: {
      fontFamily: "heading",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "wider",
      textAlign: "start",
    },
    td: { textAlign: "start" },
    caption: {
      mt: 4,
      fontFamily: "heading",
      textAlign: "center",
      fontWeight: "medium",
    },
  }),
  fl = { "&[data-is-numeric=true]": { textAlign: "end" } },
  RP = Si((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: B("gray.600", "gray.400")(e),
        borderBottom: "1px",
        borderColor: B(`${t}.100`, `${t}.700`)(e),
        ...fl,
      },
      td: {
        borderBottom: "1px",
        borderColor: B(`${t}.100`, `${t}.700`)(e),
        ...fl,
      },
      caption: { color: B("gray.600", "gray.100")(e) },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  }),
  zP = Si((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: B("gray.600", "gray.400")(e),
        borderBottom: "1px",
        borderColor: B(`${t}.100`, `${t}.700`)(e),
        ...fl,
      },
      td: {
        borderBottom: "1px",
        borderColor: B(`${t}.100`, `${t}.700`)(e),
        ...fl,
      },
      caption: { color: B("gray.600", "gray.100")(e) },
      tbody: {
        tr: {
          "&:nth-of-type(odd)": {
            "th, td": {
              borderBottomWidth: "1px",
              borderColor: B(`${t}.100`, `${t}.700`)(e),
            },
            td: { background: B(`${t}.100`, `${t}.700`)(e) },
          },
        },
      },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  }),
  MP = { simple: RP, striped: zP, unstyled: {} },
  FP = {
    sm: Si({
      th: { px: "4", py: "1", lineHeight: "4", fontSize: "xs" },
      td: { px: "4", py: "2", fontSize: "sm", lineHeight: "4" },
      caption: { px: "4", py: "2", fontSize: "xs" },
    }),
    md: Si({
      th: { px: "6", py: "3", lineHeight: "4", fontSize: "xs" },
      td: { px: "6", py: "4", lineHeight: "5" },
      caption: { px: "6", py: "2", fontSize: "sm" },
    }),
    lg: Si({
      th: { px: "8", py: "4", lineHeight: "5", fontSize: "sm" },
      td: { px: "8", py: "5", lineHeight: "6" },
      caption: { px: "6", py: "2", fontSize: "md" },
    }),
  },
  DP = $P({
    baseStyle: AP,
    variants: MP,
    sizes: FP,
    defaultProps: { variant: "simple", size: "md", colorScheme: "gray" },
  }),
  et = j("tabs-color"),
  Bt = j("tabs-bg"),
  es = j("tabs-border-color"),
  { defineMultiStyleConfig: BP, definePartsStyle: tr } = ie(UT.keys),
  jP = (e) => {
    const { orientation: t } = e;
    return { display: t === "vertical" ? "flex" : "block" };
  },
  LP = (e) => {
    const { isFitted: t } = e;
    return {
      flex: t ? 1 : void 0,
      transitionProperty: "common",
      transitionDuration: "normal",
      _focusVisible: { zIndex: 1, boxShadow: "outline" },
      _disabled: { cursor: "not-allowed", opacity: 0.4 },
    };
  },
  IP = (e) => {
    const { align: t = "start", orientation: r } = e;
    return {
      justifyContent: {
        end: "flex-end",
        center: "center",
        start: "flex-start",
      }[t],
      flexDirection: r === "vertical" ? "column" : "row",
    };
  },
  VP = { p: 4 },
  OP = tr((e) => ({ root: jP(e), tab: LP(e), tablist: IP(e), tabpanel: VP })),
  NP = {
    sm: tr({ tab: { py: 1, px: 4, fontSize: "sm" } }),
    md: tr({ tab: { fontSize: "md", py: 2, px: 4 } }),
    lg: tr({ tab: { fontSize: "lg", py: 3, px: 4 } }),
  },
  WP = tr((e) => {
    const { colorScheme: t, orientation: r } = e,
      n = r === "vertical",
      i = n ? "borderStart" : "borderBottom",
      o = n ? "marginStart" : "marginBottom";
    return {
      tablist: { [i]: "2px solid", borderColor: "inherit" },
      tab: {
        [i]: "2px solid",
        borderColor: "transparent",
        [o]: "-2px",
        _selected: {
          [et.variable]: `colors.${t}.600`,
          _dark: { [et.variable]: `colors.${t}.300` },
          borderColor: "currentColor",
        },
        _active: {
          [Bt.variable]: "colors.gray.200",
          _dark: { [Bt.variable]: "colors.whiteAlpha.300" },
        },
        _disabled: { _active: { bg: "none" } },
        color: et.reference,
        bg: Bt.reference,
      },
    };
  }),
  UP = tr((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderTopRadius: "md",
        border: "1px solid",
        borderColor: "transparent",
        mb: "-1px",
        [es.variable]: "transparent",
        _selected: {
          [et.variable]: `colors.${t}.600`,
          [es.variable]: "colors.white",
          _dark: {
            [et.variable]: `colors.${t}.300`,
            [es.variable]: "colors.gray.800",
          },
          borderColor: "inherit",
          borderBottomColor: es.reference,
        },
        color: et.reference,
      },
      tablist: {
        mb: "-1px",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
    };
  }),
  HP = tr((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        border: "1px solid",
        borderColor: "inherit",
        [Bt.variable]: "colors.gray.50",
        _dark: { [Bt.variable]: "colors.whiteAlpha.50" },
        mb: "-1px",
        _notLast: { marginEnd: "-1px" },
        _selected: {
          [Bt.variable]: "colors.white",
          [et.variable]: `colors.${t}.600`,
          _dark: {
            [Bt.variable]: "colors.gray.800",
            [et.variable]: `colors.${t}.300`,
          },
          borderColor: "inherit",
          borderTopColor: "currentColor",
          borderBottomColor: "transparent",
        },
        color: et.reference,
        bg: Bt.reference,
      },
      tablist: {
        mb: "-1px",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
    };
  }),
  KP = tr((e) => {
    const { colorScheme: t, theme: r } = e;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        color: "gray.600",
        _selected: { color: Ye(r, `${t}.700`), bg: Ye(r, `${t}.100`) },
      },
    };
  }),
  GP = tr((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        [et.variable]: "colors.gray.600",
        _dark: { [et.variable]: "inherit" },
        _selected: {
          [et.variable]: "colors.white",
          [Bt.variable]: `colors.${t}.600`,
          _dark: {
            [et.variable]: "colors.gray.800",
            [Bt.variable]: `colors.${t}.300`,
          },
        },
        color: et.reference,
        bg: Bt.reference,
      },
    };
  }),
  YP = tr({}),
  XP = {
    line: WP,
    enclosed: UP,
    "enclosed-colored": HP,
    "soft-rounded": KP,
    "solid-rounded": GP,
    unstyled: YP,
  },
  qP = BP({
    baseStyle: OP,
    sizes: NP,
    variants: XP,
    defaultProps: { size: "md", variant: "line", colorScheme: "blue" },
  }),
  Se = v_("badge", ["bg", "color", "shadow"]),
  QP = {
    px: 1,
    textTransform: "uppercase",
    fontSize: "xs",
    borderRadius: "sm",
    fontWeight: "bold",
    bg: Se.bg.reference,
    color: Se.color.reference,
    boxShadow: Se.shadow.reference,
  },
  ZP = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = Ri(`${t}.500`, 0.6)(r);
    return {
      [Se.bg.variable]: `colors.${t}.500`,
      [Se.color.variable]: "colors.white",
      _dark: {
        [Se.bg.variable]: n,
        [Se.color.variable]: "colors.whiteAlpha.800",
      },
    };
  },
  JP = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = Ri(`${t}.200`, 0.16)(r);
    return {
      [Se.bg.variable]: `colors.${t}.100`,
      [Se.color.variable]: `colors.${t}.800`,
      _dark: { [Se.bg.variable]: n, [Se.color.variable]: `colors.${t}.200` },
    };
  },
  eE = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = Ri(`${t}.200`, 0.8)(r);
    return {
      [Se.color.variable]: `colors.${t}.500`,
      _dark: { [Se.color.variable]: n },
      [Se.shadow.variable]: `inset 0 0 0px 1px ${Se.color.reference}`,
    };
  },
  tE = { solid: ZP, subtle: JP, outline: eE },
  To = {
    baseStyle: QP,
    variants: tE,
    defaultProps: { variant: "subtle", colorScheme: "gray" },
  },
  { defineMultiStyleConfig: rE, definePartsStyle: $n } = ie(HT.keys),
  Zm = j("tag-bg"),
  Jm = j("tag-color"),
  Zu = j("tag-shadow"),
  Ts = j("tag-min-height"),
  Ps = j("tag-min-width"),
  Es = j("tag-font-size"),
  $s = j("tag-padding-inline"),
  nE = {
    fontWeight: "medium",
    lineHeight: 1.2,
    outline: 0,
    [Jm.variable]: Se.color.reference,
    [Zm.variable]: Se.bg.reference,
    [Zu.variable]: Se.shadow.reference,
    color: Jm.reference,
    bg: Zm.reference,
    boxShadow: Zu.reference,
    borderRadius: "md",
    minH: Ts.reference,
    minW: Ps.reference,
    fontSize: Es.reference,
    px: $s.reference,
    _focusVisible: { [Zu.variable]: "shadows.outline" },
  },
  iE = { lineHeight: 1.2, overflow: "visible" },
  oE = {
    fontSize: "lg",
    w: "5",
    h: "5",
    transitionProperty: "common",
    transitionDuration: "normal",
    borderRadius: "full",
    marginStart: "1.5",
    marginEnd: "-1",
    opacity: 0.5,
    _disabled: { opacity: 0.4 },
    _focusVisible: { boxShadow: "outline", bg: "rgba(0, 0, 0, 0.14)" },
    _hover: { opacity: 0.8 },
    _active: { opacity: 1 },
  },
  aE = $n({ container: nE, label: iE, closeButton: oE }),
  sE = {
    sm: $n({
      container: {
        [Ts.variable]: "sizes.5",
        [Ps.variable]: "sizes.5",
        [Es.variable]: "fontSizes.xs",
        [$s.variable]: "space.2",
      },
      closeButton: { marginEnd: "-2px", marginStart: "0.35rem" },
    }),
    md: $n({
      container: {
        [Ts.variable]: "sizes.6",
        [Ps.variable]: "sizes.6",
        [Es.variable]: "fontSizes.sm",
        [$s.variable]: "space.2",
      },
    }),
    lg: $n({
      container: {
        [Ts.variable]: "sizes.8",
        [Ps.variable]: "sizes.8",
        [Es.variable]: "fontSizes.md",
        [$s.variable]: "space.3",
      },
    }),
  },
  lE = {
    subtle: $n((e) => {
      var t;
      return { container: (t = To.variants) == null ? void 0 : t.subtle(e) };
    }),
    solid: $n((e) => {
      var t;
      return { container: (t = To.variants) == null ? void 0 : t.solid(e) };
    }),
    outline: $n((e) => {
      var t;
      return { container: (t = To.variants) == null ? void 0 : t.outline(e) };
    }),
  },
  uE = rE({
    variants: lE,
    baseStyle: aE,
    sizes: sE,
    defaultProps: { size: "md", variant: "subtle", colorScheme: "gray" },
  }),
  { definePartsStyle: hr, defineMultiStyleConfig: cE } = ie(RT.keys),
  ii = j("input-height"),
  oi = j("input-font-size"),
  ai = j("input-padding"),
  si = j("input-border-radius"),
  dE = hr({
    addon: {
      height: ii.reference,
      fontSize: oi.reference,
      px: ai.reference,
      borderRadius: si.reference,
    },
    field: {
      width: "100%",
      height: ii.reference,
      fontSize: oi.reference,
      px: ai.reference,
      borderRadius: si.reference,
      minWidth: 0,
      outline: 0,
      position: "relative",
      appearance: "none",
      transitionProperty: "common",
      transitionDuration: "normal",
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
    },
  }),
  Ar = {
    lg: {
      [oi.variable]: "fontSizes.lg",
      [ai.variable]: "space.4",
      [si.variable]: "radii.md",
      [ii.variable]: "sizes.12",
    },
    md: {
      [oi.variable]: "fontSizes.md",
      [ai.variable]: "space.4",
      [si.variable]: "radii.md",
      [ii.variable]: "sizes.10",
    },
    sm: {
      [oi.variable]: "fontSizes.sm",
      [ai.variable]: "space.3",
      [si.variable]: "radii.sm",
      [ii.variable]: "sizes.8",
    },
    xs: {
      [oi.variable]: "fontSizes.xs",
      [ai.variable]: "space.2",
      [si.variable]: "radii.sm",
      [ii.variable]: "sizes.6",
    },
  },
  fE = {
    lg: hr({ field: Ar.lg, group: Ar.lg }),
    md: hr({ field: Ar.md, group: Ar.md }),
    sm: hr({ field: Ar.sm, group: Ar.sm }),
    xs: hr({ field: Ar.xs, group: Ar.xs }),
  };
function ch(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || B("blue.500", "blue.300")(e),
    errorBorderColor: r || B("red.500", "red.300")(e),
  };
}
var hE = hr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = ch(e);
    return {
      field: {
        border: "1px solid",
        borderColor: "inherit",
        bg: "inherit",
        _hover: { borderColor: B("gray.300", "whiteAlpha.400")(e) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: { borderColor: Ye(t, n), boxShadow: `0 0 0 1px ${Ye(t, n)}` },
        _focusVisible: {
          zIndex: 1,
          borderColor: Ye(t, r),
          boxShadow: `0 0 0 1px ${Ye(t, r)}`,
        },
      },
      addon: {
        border: "1px solid",
        borderColor: B("inherit", "whiteAlpha.50")(e),
        bg: B("gray.100", "whiteAlpha.300")(e),
      },
    };
  }),
  pE = hr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = ch(e);
    return {
      field: {
        border: "2px solid",
        borderColor: "transparent",
        bg: B("gray.100", "whiteAlpha.50")(e),
        _hover: { bg: B("gray.200", "whiteAlpha.100")(e) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: { borderColor: Ye(t, n) },
        _focusVisible: { bg: "transparent", borderColor: Ye(t, r) },
      },
      addon: {
        border: "2px solid",
        borderColor: "transparent",
        bg: B("gray.100", "whiteAlpha.50")(e),
      },
    };
  }),
  mE = hr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = ch(e);
    return {
      field: {
        borderBottom: "1px solid",
        borderColor: "inherit",
        borderRadius: "0",
        px: "0",
        bg: "transparent",
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: {
          borderColor: Ye(t, n),
          boxShadow: `0px 1px 0px 0px ${Ye(t, n)}`,
        },
        _focusVisible: {
          borderColor: Ye(t, r),
          boxShadow: `0px 1px 0px 0px ${Ye(t, r)}`,
        },
      },
      addon: {
        borderBottom: "2px solid",
        borderColor: "inherit",
        borderRadius: "0",
        px: "0",
        bg: "transparent",
      },
    };
  }),
  yE = hr({
    field: { bg: "transparent", px: "0", height: "auto" },
    addon: { bg: "transparent", px: "0", height: "auto" },
  }),
  gE = { outline: hE, filled: pE, flushed: mE, unstyled: yE },
  q = cE({
    baseStyle: dE,
    sizes: fE,
    variants: gE,
    defaultProps: { size: "md", variant: "outline" },
  }),
  ey,
  vE = {
    ...((ey = q.baseStyle) == null ? void 0 : ey.field),
    paddingY: "2",
    minHeight: "20",
    lineHeight: "short",
    verticalAlign: "top",
  },
  ty,
  ry,
  SE = {
    outline: (e) => {
      var t, r;
      return (r = (t = q.variants) == null ? void 0 : t.outline(e).field) !=
        null
        ? r
        : {};
    },
    flushed: (e) => {
      var t, r;
      return (r = (t = q.variants) == null ? void 0 : t.flushed(e).field) !=
        null
        ? r
        : {};
    },
    filled: (e) => {
      var t, r;
      return (r = (t = q.variants) == null ? void 0 : t.filled(e).field) != null
        ? r
        : {};
    },
    unstyled:
      (ry = (ty = q.variants) == null ? void 0 : ty.unstyled.field) != null
        ? ry
        : {},
  },
  ny,
  iy,
  oy,
  ay,
  sy,
  ly,
  uy,
  cy,
  bE = {
    xs: (iy = (ny = q.sizes) == null ? void 0 : ny.xs.field) != null ? iy : {},
    sm: (ay = (oy = q.sizes) == null ? void 0 : oy.sm.field) != null ? ay : {},
    md: (ly = (sy = q.sizes) == null ? void 0 : sy.md.field) != null ? ly : {},
    lg: (cy = (uy = q.sizes) == null ? void 0 : uy.lg.field) != null ? cy : {},
  },
  xE = {
    baseStyle: vE,
    sizes: bE,
    variants: SE,
    defaultProps: { size: "md", variant: "outline" },
  },
  ts = Ee("tooltip-bg"),
  Ju = Ee("tooltip-fg"),
  wE = Ee("popper-arrow-bg"),
  kE = {
    bg: ts.reference,
    color: Ju.reference,
    [ts.variable]: "colors.gray.700",
    [Ju.variable]: "colors.whiteAlpha.900",
    _dark: {
      [ts.variable]: "colors.gray.300",
      [Ju.variable]: "colors.gray.900",
    },
    [wE.variable]: ts.reference,
    px: "2",
    py: "0.5",
    borderRadius: "sm",
    fontWeight: "medium",
    fontSize: "sm",
    boxShadow: "md",
    maxW: "xs",
    zIndex: "tooltip",
  },
  CE = { baseStyle: kE },
  { defineMultiStyleConfig: _E, definePartsStyle: ho } = ie(jT.keys),
  TE = (e) => {
    const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: i } = e,
      o = B(Gm(), Gm("1rem", "rgba(0,0,0,0.1)"))(e),
      a = B(`${t}.500`, `${t}.200`)(e),
      s = `linear-gradient(
    to right,
    transparent 0%,
    ${Ye(r, a)} 50%,
    transparent 100%
  )`;
    return { ...(!n && i && o), ...(n ? { bgImage: s } : { bgColor: a }) };
  },
  PE = {
    lineHeight: "1",
    fontSize: "0.25em",
    fontWeight: "bold",
    color: "white",
  },
  EE = (e) => ({ bg: B("gray.100", "whiteAlpha.300")(e) }),
  $E = (e) => ({
    transitionProperty: "common",
    transitionDuration: "slow",
    ...TE(e),
  }),
  AE = ho((e) => ({ label: PE, filledTrack: $E(e), track: EE(e) })),
  RE = {
    xs: ho({ track: { h: "1" } }),
    sm: ho({ track: { h: "2" } }),
    md: ho({ track: { h: "3" } }),
    lg: ho({ track: { h: "4" } }),
  },
  zE = _E({
    sizes: RE,
    baseStyle: AE,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  ME = (e) => typeof e == "function";
function qe(e, ...t) {
  return ME(e) ? e(...t) : e;
}
var { definePartsStyle: As, defineMultiStyleConfig: FE } = ie(TT.keys),
  Po = j("checkbox-size"),
  DE = (e) => {
    const { colorScheme: t } = e;
    return {
      w: Po.reference,
      h: Po.reference,
      transitionProperty: "box-shadow",
      transitionDuration: "normal",
      border: "2px solid",
      borderRadius: "sm",
      borderColor: "inherit",
      color: "white",
      _checked: {
        bg: B(`${t}.500`, `${t}.200`)(e),
        borderColor: B(`${t}.500`, `${t}.200`)(e),
        color: B("white", "gray.900")(e),
        _hover: {
          bg: B(`${t}.600`, `${t}.300`)(e),
          borderColor: B(`${t}.600`, `${t}.300`)(e),
        },
        _disabled: {
          borderColor: B("gray.200", "transparent")(e),
          bg: B("gray.200", "whiteAlpha.300")(e),
          color: B("gray.500", "whiteAlpha.500")(e),
        },
      },
      _indeterminate: {
        bg: B(`${t}.500`, `${t}.200`)(e),
        borderColor: B(`${t}.500`, `${t}.200`)(e),
        color: B("white", "gray.900")(e),
      },
      _disabled: {
        bg: B("gray.100", "whiteAlpha.100")(e),
        borderColor: B("gray.100", "transparent")(e),
      },
      _focusVisible: { boxShadow: "outline" },
      _invalid: { borderColor: B("red.500", "red.300")(e) },
    };
  },
  BE = { _disabled: { cursor: "not-allowed" } },
  jE = { userSelect: "none", _disabled: { opacity: 0.4 } },
  LE = { transitionProperty: "transform", transitionDuration: "normal" },
  IE = As((e) => ({ icon: LE, container: BE, control: qe(DE, e), label: jE })),
  VE = {
    sm: As({
      control: { [Po.variable]: "sizes.3" },
      label: { fontSize: "sm" },
      icon: { fontSize: "3xs" },
    }),
    md: As({
      control: { [Po.variable]: "sizes.4" },
      label: { fontSize: "md" },
      icon: { fontSize: "2xs" },
    }),
    lg: As({
      control: { [Po.variable]: "sizes.5" },
      label: { fontSize: "lg" },
      icon: { fontSize: "2xs" },
    }),
  },
  hl = FE({
    baseStyle: IE,
    sizes: VE,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: OE, definePartsStyle: Rs } = ie(LT.keys),
  NE = (e) => {
    var t;
    const r = (t = qe(hl.baseStyle, e)) == null ? void 0 : t.control;
    return {
      ...r,
      borderRadius: "full",
      _checked: {
        ...(r == null ? void 0 : r._checked),
        _before: {
          content: '""',
          display: "inline-block",
          pos: "relative",
          w: "50%",
          h: "50%",
          borderRadius: "50%",
          bg: "currentColor",
        },
      },
    };
  },
  WE = Rs((e) => {
    var t, r, n, i;
    return {
      label: (r = (t = hl).baseStyle) == null ? void 0 : r.call(t, e).label,
      container:
        (i = (n = hl).baseStyle) == null ? void 0 : i.call(n, e).container,
      control: NE(e),
    };
  }),
  UE = {
    md: Rs({ control: { w: "4", h: "4" }, label: { fontSize: "md" } }),
    lg: Rs({ control: { w: "5", h: "5" }, label: { fontSize: "lg" } }),
    sm: Rs({ control: { width: "3", height: "3" }, label: { fontSize: "sm" } }),
  },
  HE = OE({
    baseStyle: WE,
    sizes: UE,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: KE, definePartsStyle: GE } = ie(IT.keys),
  rs = j("select-bg"),
  dy,
  YE = {
    ...((dy = q.baseStyle) == null ? void 0 : dy.field),
    appearance: "none",
    paddingBottom: "1px",
    lineHeight: "normal",
    bg: rs.reference,
    [rs.variable]: "colors.white",
    _dark: { [rs.variable]: "colors.gray.700" },
    "> option, > optgroup": { bg: rs.reference },
  },
  XE = {
    width: "6",
    height: "100%",
    insetEnd: "2",
    position: "relative",
    color: "currentColor",
    fontSize: "xl",
    _disabled: { opacity: 0.5 },
  },
  qE = GE({ field: YE, icon: XE }),
  ns = { paddingInlineEnd: "8" },
  fy,
  hy,
  py,
  my,
  yy,
  gy,
  vy,
  Sy,
  QE = {
    lg: {
      ...((fy = q.sizes) == null ? void 0 : fy.lg),
      field: { ...((hy = q.sizes) == null ? void 0 : hy.lg.field), ...ns },
    },
    md: {
      ...((py = q.sizes) == null ? void 0 : py.md),
      field: { ...((my = q.sizes) == null ? void 0 : my.md.field), ...ns },
    },
    sm: {
      ...((yy = q.sizes) == null ? void 0 : yy.sm),
      field: { ...((gy = q.sizes) == null ? void 0 : gy.sm.field), ...ns },
    },
    xs: {
      ...((vy = q.sizes) == null ? void 0 : vy.xs),
      field: { ...((Sy = q.sizes) == null ? void 0 : Sy.xs.field), ...ns },
      icon: { insetEnd: "1" },
    },
  },
  ZE = KE({
    baseStyle: qE,
    sizes: QE,
    variants: q.variants,
    defaultProps: q.defaultProps,
  }),
  ec = j("skeleton-start-color"),
  tc = j("skeleton-end-color"),
  JE = {
    [ec.variable]: "colors.gray.100",
    [tc.variable]: "colors.gray.400",
    _dark: {
      [ec.variable]: "colors.gray.800",
      [tc.variable]: "colors.gray.600",
    },
    background: ec.reference,
    borderColor: tc.reference,
    opacity: 0.7,
    borderRadius: "sm",
  },
  e5 = { baseStyle: JE },
  rc = j("skip-link-bg"),
  t5 = {
    borderRadius: "md",
    fontWeight: "semibold",
    _focusVisible: {
      boxShadow: "outline",
      padding: "4",
      position: "fixed",
      top: "6",
      insetStart: "6",
      [rc.variable]: "colors.white",
      _dark: { [rc.variable]: "colors.gray.700" },
      bg: rc.reference,
    },
  },
  r5 = { baseStyle: t5 },
  { defineMultiStyleConfig: n5, definePartsStyle: ru } = ie(VT.keys),
  ia = j("slider-thumb-size"),
  oa = j("slider-track-size"),
  Lr = j("slider-bg"),
  i5 = (e) => {
    const { orientation: t } = e;
    return {
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      _disabled: { opacity: 0.6, cursor: "default", pointerEvents: "none" },
      ...uh({
        orientation: t,
        vertical: { h: "100%" },
        horizontal: { w: "100%" },
      }),
    };
  },
  o5 = (e) => ({
    ...uh({
      orientation: e.orientation,
      horizontal: { h: oa.reference },
      vertical: { w: oa.reference },
    }),
    overflow: "hidden",
    borderRadius: "sm",
    [Lr.variable]: "colors.gray.200",
    _dark: { [Lr.variable]: "colors.whiteAlpha.200" },
    _disabled: {
      [Lr.variable]: "colors.gray.300",
      _dark: { [Lr.variable]: "colors.whiteAlpha.300" },
    },
    bg: Lr.reference,
  }),
  a5 = (e) => {
    const { orientation: t } = e;
    return {
      ...uh({
        orientation: t,
        vertical: {
          left: "50%",
          transform: "translateX(-50%)",
          _active: { transform: "translateX(-50%) scale(1.15)" },
        },
        horizontal: {
          top: "50%",
          transform: "translateY(-50%)",
          _active: { transform: "translateY(-50%) scale(1.15)" },
        },
      }),
      w: ia.reference,
      h: ia.reference,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      outline: 0,
      zIndex: 1,
      borderRadius: "full",
      bg: "white",
      boxShadow: "base",
      border: "1px solid",
      borderColor: "transparent",
      transitionProperty: "transform",
      transitionDuration: "normal",
      _focusVisible: { boxShadow: "outline" },
      _disabled: { bg: "gray.300" },
    };
  },
  s5 = (e) => {
    const { colorScheme: t } = e;
    return {
      width: "inherit",
      height: "inherit",
      [Lr.variable]: `colors.${t}.500`,
      _dark: { [Lr.variable]: `colors.${t}.200` },
      bg: Lr.reference,
    };
  },
  l5 = ru((e) => ({
    container: i5(e),
    track: o5(e),
    thumb: a5(e),
    filledTrack: s5(e),
  })),
  u5 = ru({
    container: { [ia.variable]: "sizes.4", [oa.variable]: "sizes.1" },
  }),
  c5 = ru({
    container: { [ia.variable]: "sizes.3.5", [oa.variable]: "sizes.1" },
  }),
  d5 = ru({
    container: { [ia.variable]: "sizes.2.5", [oa.variable]: "sizes.0.5" },
  }),
  f5 = { lg: u5, md: c5, sm: d5 },
  h5 = n5({
    baseStyle: l5,
    sizes: f5,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  bn = Ee("spinner-size"),
  p5 = { width: [bn.reference], height: [bn.reference] },
  m5 = {
    xs: { [bn.variable]: "sizes.3" },
    sm: { [bn.variable]: "sizes.4" },
    md: { [bn.variable]: "sizes.6" },
    lg: { [bn.variable]: "sizes.8" },
    xl: { [bn.variable]: "sizes.12" },
  },
  y5 = { baseStyle: p5, sizes: m5, defaultProps: { size: "md" } },
  { defineMultiStyleConfig: g5, definePartsStyle: F1 } = ie(OT.keys),
  v5 = { fontWeight: "medium" },
  S5 = { opacity: 0.8, marginBottom: "2" },
  b5 = { verticalAlign: "baseline", fontWeight: "semibold" },
  x5 = { marginEnd: 1, w: "3.5", h: "3.5", verticalAlign: "middle" },
  w5 = F1({ container: {}, label: v5, helpText: S5, number: b5, icon: x5 }),
  k5 = {
    md: F1({
      label: { fontSize: "sm" },
      helpText: { fontSize: "sm" },
      number: { fontSize: "2xl" },
    }),
  },
  C5 = g5({ baseStyle: w5, sizes: k5, defaultProps: { size: "md" } }),
  nc = j("kbd-bg"),
  _5 = {
    [nc.variable]: "colors.gray.100",
    _dark: { [nc.variable]: "colors.whiteAlpha.100" },
    bg: nc.reference,
    borderRadius: "md",
    borderWidth: "1px",
    borderBottomWidth: "3px",
    fontSize: "0.8em",
    fontWeight: "bold",
    lineHeight: "normal",
    px: "0.4em",
    whiteSpace: "nowrap",
  },
  T5 = { baseStyle: _5 },
  P5 = {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
    color: "inherit",
    _hover: { textDecoration: "underline" },
    _focusVisible: { boxShadow: "outline" },
  },
  E5 = { baseStyle: P5 },
  { defineMultiStyleConfig: $5, definePartsStyle: A5 } = ie(zT.keys),
  R5 = { marginEnd: "2", display: "inline", verticalAlign: "text-bottom" },
  z5 = A5({ icon: R5 }),
  M5 = $5({ baseStyle: z5 }),
  { defineMultiStyleConfig: F5, definePartsStyle: D5 } = ie(MT.keys),
  Kt = j("menu-bg"),
  ic = j("menu-shadow"),
  B5 = {
    [Kt.variable]: "#fff",
    [ic.variable]: "shadows.sm",
    _dark: {
      [Kt.variable]: "colors.gray.700",
      [ic.variable]: "shadows.dark-lg",
    },
    color: "inherit",
    minW: "3xs",
    py: "2",
    zIndex: 1,
    borderRadius: "md",
    borderWidth: "1px",
    bg: Kt.reference,
    boxShadow: ic.reference,
  },
  j5 = {
    py: "1.5",
    px: "3",
    transitionProperty: "background",
    transitionDuration: "ultra-fast",
    transitionTimingFunction: "ease-in",
    _focus: {
      [Kt.variable]: "colors.gray.100",
      _dark: { [Kt.variable]: "colors.whiteAlpha.100" },
    },
    _active: {
      [Kt.variable]: "colors.gray.200",
      _dark: { [Kt.variable]: "colors.whiteAlpha.200" },
    },
    _expanded: {
      [Kt.variable]: "colors.gray.100",
      _dark: { [Kt.variable]: "colors.whiteAlpha.100" },
    },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
    bg: Kt.reference,
  },
  L5 = { mx: 4, my: 2, fontWeight: "semibold", fontSize: "sm" },
  I5 = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  V5 = { opacity: 0.6 },
  O5 = {
    border: 0,
    borderBottom: "1px solid",
    borderColor: "inherit",
    my: "2",
    opacity: 0.6,
  },
  N5 = { transitionProperty: "common", transitionDuration: "normal" },
  W5 = D5({
    button: N5,
    list: B5,
    item: j5,
    groupTitle: L5,
    icon: I5,
    command: V5,
    divider: O5,
  }),
  U5 = F5({ baseStyle: W5 }),
  { defineMultiStyleConfig: H5, definePartsStyle: Rd } = ie(FT.keys),
  oc = j("modal-bg"),
  ac = j("modal-shadow"),
  K5 = { bg: "blackAlpha.600", zIndex: "modal" },
  G5 = (e) => {
    const { isCentered: t, scrollBehavior: r } = e;
    return {
      display: "flex",
      zIndex: "modal",
      justifyContent: "center",
      alignItems: t ? "center" : "flex-start",
      overflow: r === "inside" ? "hidden" : "auto",
      overscrollBehaviorY: "none",
    };
  },
  Y5 = (e) => {
    const { isCentered: t, scrollBehavior: r } = e;
    return {
      borderRadius: "md",
      color: "inherit",
      my: t ? "auto" : "16",
      mx: t ? "auto" : void 0,
      zIndex: "modal",
      maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
      [oc.variable]: "colors.white",
      [ac.variable]: "shadows.lg",
      _dark: {
        [oc.variable]: "colors.gray.700",
        [ac.variable]: "shadows.dark-lg",
      },
      bg: oc.reference,
      boxShadow: ac.reference,
    };
  },
  X5 = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  q5 = { position: "absolute", top: "2", insetEnd: "3" },
  Q5 = (e) => {
    const { scrollBehavior: t } = e;
    return {
      px: "6",
      py: "2",
      flex: "1",
      overflow: t === "inside" ? "auto" : void 0,
    };
  },
  Z5 = { px: "6", py: "4" },
  J5 = Rd((e) => ({
    overlay: K5,
    dialogContainer: qe(G5, e),
    dialog: qe(Y5, e),
    header: X5,
    closeButton: q5,
    body: qe(Q5, e),
    footer: Z5,
  }));
function Rt(e) {
  return Rd(
    e === "full"
      ? {
          dialog: { maxW: "100vw", minH: "$100vh", my: "0", borderRadius: "0" },
        }
      : { dialog: { maxW: e } }
  );
}
var e$ = {
    xs: Rt("xs"),
    sm: Rt("sm"),
    md: Rt("md"),
    lg: Rt("lg"),
    xl: Rt("xl"),
    "2xl": Rt("2xl"),
    "3xl": Rt("3xl"),
    "4xl": Rt("4xl"),
    "5xl": Rt("5xl"),
    "6xl": Rt("6xl"),
    full: Rt("full"),
  },
  t$ = H5({ baseStyle: J5, sizes: e$, defaultProps: { size: "md" } }),
  { defineMultiStyleConfig: r$, definePartsStyle: D1 } = ie(DT.keys),
  dh = Ee("number-input-stepper-width"),
  B1 = Ee("number-input-input-padding"),
  n$ = cr(dh).add("0.5rem").toString(),
  sc = Ee("number-input-bg"),
  lc = Ee("number-input-color"),
  uc = Ee("number-input-border-color"),
  i$ = { [dh.variable]: "sizes.6", [B1.variable]: n$ },
  o$ = (e) => {
    var t, r;
    return (r = (t = qe(q.baseStyle, e)) == null ? void 0 : t.field) != null
      ? r
      : {};
  },
  a$ = { width: dh.reference },
  s$ = {
    borderStart: "1px solid",
    borderStartColor: uc.reference,
    color: lc.reference,
    bg: sc.reference,
    [lc.variable]: "colors.chakra-body-text",
    [uc.variable]: "colors.chakra-border-color",
    _dark: {
      [lc.variable]: "colors.whiteAlpha.800",
      [uc.variable]: "colors.whiteAlpha.300",
    },
    _active: {
      [sc.variable]: "colors.gray.200",
      _dark: { [sc.variable]: "colors.whiteAlpha.300" },
    },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
  },
  l$ = D1((e) => {
    var t;
    return {
      root: i$,
      field: (t = qe(o$, e)) != null ? t : {},
      stepperGroup: a$,
      stepper: s$,
    };
  });
function is(e) {
  var t, r, n;
  const i = (t = q.sizes) == null ? void 0 : t[e],
    o = { lg: "md", md: "md", sm: "sm", xs: "sm" },
    a = (n = (r = i.field) == null ? void 0 : r.fontSize) != null ? n : "md",
    s = $1.fontSizes[a];
  return D1({
    field: { ...i.field, paddingInlineEnd: B1.reference, verticalAlign: "top" },
    stepper: {
      fontSize: cr(s).multiply(0.75).toString(),
      _first: { borderTopEndRadius: o[e] },
      _last: { borderBottomEndRadius: o[e], mt: "-1px", borderTopWidth: 1 },
    },
  });
}
var u$ = { xs: is("xs"), sm: is("sm"), md: is("md"), lg: is("lg") },
  c$ = r$({
    baseStyle: l$,
    sizes: u$,
    variants: q.variants,
    defaultProps: q.defaultProps,
  }),
  by,
  d$ = {
    ...((by = q.baseStyle) == null ? void 0 : by.field),
    textAlign: "center",
  },
  f$ = {
    lg: { fontSize: "lg", w: 12, h: 12, borderRadius: "md" },
    md: { fontSize: "md", w: 10, h: 10, borderRadius: "md" },
    sm: { fontSize: "sm", w: 8, h: 8, borderRadius: "sm" },
    xs: { fontSize: "xs", w: 6, h: 6, borderRadius: "sm" },
  },
  xy,
  wy,
  h$ = {
    outline: (e) => {
      var t, r, n;
      return (n =
        (r = qe((t = q.variants) == null ? void 0 : t.outline, e)) == null
          ? void 0
          : r.field) != null
        ? n
        : {};
    },
    flushed: (e) => {
      var t, r, n;
      return (n =
        (r = qe((t = q.variants) == null ? void 0 : t.flushed, e)) == null
          ? void 0
          : r.field) != null
        ? n
        : {};
    },
    filled: (e) => {
      var t, r, n;
      return (n =
        (r = qe((t = q.variants) == null ? void 0 : t.filled, e)) == null
          ? void 0
          : r.field) != null
        ? n
        : {};
    },
    unstyled:
      (wy = (xy = q.variants) == null ? void 0 : xy.unstyled.field) != null
        ? wy
        : {},
  },
  p$ = { baseStyle: d$, sizes: f$, variants: h$, defaultProps: q.defaultProps },
  { defineMultiStyleConfig: m$, definePartsStyle: y$ } = ie(BT.keys),
  os = Ee("popper-bg"),
  g$ = Ee("popper-arrow-bg"),
  ky = Ee("popper-arrow-shadow-color"),
  v$ = { zIndex: 10 },
  S$ = {
    [os.variable]: "colors.white",
    bg: os.reference,
    [g$.variable]: os.reference,
    [ky.variable]: "colors.gray.200",
    _dark: {
      [os.variable]: "colors.gray.700",
      [ky.variable]: "colors.whiteAlpha.300",
    },
    width: "xs",
    border: "1px solid",
    borderColor: "inherit",
    borderRadius: "md",
    boxShadow: "sm",
    zIndex: "inherit",
    _focusVisible: { outline: 0, boxShadow: "outline" },
  },
  b$ = { px: 3, py: 2, borderBottomWidth: "1px" },
  x$ = { px: 3, py: 2 },
  w$ = { px: 3, py: 2, borderTopWidth: "1px" },
  k$ = {
    position: "absolute",
    borderRadius: "md",
    top: 1,
    insetEnd: 2,
    padding: 2,
  },
  C$ = y$({
    popper: v$,
    content: S$,
    header: b$,
    body: x$,
    footer: w$,
    closeButton: k$,
  }),
  _$ = m$({ baseStyle: C$ }),
  { definePartsStyle: zd, defineMultiStyleConfig: T$ } = ie(PT.keys),
  cc = j("drawer-bg"),
  dc = j("drawer-box-shadow");
function Wn(e) {
  return zd(
    e === "full"
      ? { dialog: { maxW: "100vw", h: "100vh" } }
      : { dialog: { maxW: e } }
  );
}
var P$ = { bg: "blackAlpha.600", zIndex: "modal" },
  E$ = { display: "flex", zIndex: "modal", justifyContent: "center" },
  $$ = (e) => {
    const { isFullHeight: t } = e;
    return {
      ...(t && { height: "100vh" }),
      zIndex: "modal",
      maxH: "100vh",
      color: "inherit",
      [cc.variable]: "colors.white",
      [dc.variable]: "shadows.lg",
      _dark: {
        [cc.variable]: "colors.gray.700",
        [dc.variable]: "shadows.dark-lg",
      },
      bg: cc.reference,
      boxShadow: dc.reference,
    };
  },
  A$ = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  R$ = { position: "absolute", top: "2", insetEnd: "3" },
  z$ = { px: "6", py: "2", flex: "1", overflow: "auto" },
  M$ = { px: "6", py: "4" },
  F$ = zd((e) => ({
    overlay: P$,
    dialogContainer: E$,
    dialog: qe($$, e),
    header: A$,
    closeButton: R$,
    body: z$,
    footer: M$,
  })),
  D$ = {
    xs: Wn("xs"),
    sm: Wn("md"),
    md: Wn("lg"),
    lg: Wn("2xl"),
    xl: Wn("4xl"),
    full: Wn("full"),
  },
  B$ = T$({ baseStyle: F$, sizes: D$, defaultProps: { size: "xs" } }),
  { definePartsStyle: j$, defineMultiStyleConfig: L$ } = ie(ET.keys),
  I$ = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
  },
  V$ = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: "full",
    _focusVisible: { boxShadow: "outline" },
    _placeholder: { opacity: 0.6 },
  },
  O$ = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: "full",
    _focusVisible: { boxShadow: "outline" },
    _placeholder: { opacity: 0.6 },
  },
  N$ = j$({ preview: I$, input: V$, textarea: O$ }),
  W$ = L$({ baseStyle: N$ }),
  { definePartsStyle: U$, defineMultiStyleConfig: H$ } = ie($T.keys),
  bi = j("form-control-color"),
  K$ = {
    marginStart: "1",
    [bi.variable]: "colors.red.500",
    _dark: { [bi.variable]: "colors.red.300" },
    color: bi.reference,
  },
  G$ = {
    mt: "2",
    [bi.variable]: "colors.gray.600",
    _dark: { [bi.variable]: "colors.whiteAlpha.600" },
    color: bi.reference,
    lineHeight: "normal",
    fontSize: "sm",
  },
  Y$ = U$({
    container: { width: "100%", position: "relative" },
    requiredIndicator: K$,
    helperText: G$,
  }),
  X$ = H$({ baseStyle: Y$ }),
  { definePartsStyle: q$, defineMultiStyleConfig: Q$ } = ie(AT.keys),
  xi = j("form-error-color"),
  Z$ = {
    [xi.variable]: "colors.red.500",
    _dark: { [xi.variable]: "colors.red.300" },
    color: xi.reference,
    mt: "2",
    fontSize: "sm",
    lineHeight: "normal",
  },
  J$ = {
    marginEnd: "0.5em",
    [xi.variable]: "colors.red.500",
    _dark: { [xi.variable]: "colors.red.300" },
    color: xi.reference,
  },
  eA = q$({ text: Z$, icon: J$ }),
  tA = Q$({ baseStyle: eA }),
  rA = {
    fontSize: "md",
    marginEnd: "3",
    mb: "2",
    fontWeight: "medium",
    transitionProperty: "common",
    transitionDuration: "normal",
    opacity: 1,
    _disabled: { opacity: 0.4 },
  },
  nA = { baseStyle: rA },
  iA = { fontFamily: "heading", fontWeight: "bold" },
  oA = {
    "4xl": { fontSize: ["6xl", null, "7xl"], lineHeight: 1 },
    "3xl": { fontSize: ["5xl", null, "6xl"], lineHeight: 1 },
    "2xl": { fontSize: ["4xl", null, "5xl"], lineHeight: [1.2, null, 1] },
    xl: { fontSize: ["3xl", null, "4xl"], lineHeight: [1.33, null, 1.2] },
    lg: { fontSize: ["2xl", null, "3xl"], lineHeight: [1.33, null, 1.2] },
    md: { fontSize: "xl", lineHeight: 1.2 },
    sm: { fontSize: "md", lineHeight: 1.2 },
    xs: { fontSize: "sm", lineHeight: 1.2 },
  },
  aA = { baseStyle: iA, sizes: oA, defaultProps: { size: "xl" } },
  { defineMultiStyleConfig: sA, definePartsStyle: lA } = ie(_T.keys),
  fc = j("breadcrumb-link-decor"),
  uA = {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    outline: "none",
    color: "inherit",
    textDecoration: fc.reference,
    [fc.variable]: "none",
    "&:not([aria-current=page])": {
      cursor: "pointer",
      _hover: { [fc.variable]: "underline" },
      _focusVisible: { boxShadow: "outline" },
    },
  },
  cA = lA({ link: uA }),
  dA = sA({ baseStyle: cA }),
  fA = {
    lineHeight: "1.2",
    borderRadius: "md",
    fontWeight: "semibold",
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: { boxShadow: "outline" },
    _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
    _hover: { _disabled: { bg: "initial" } },
  },
  j1 = (e) => {
    const { colorScheme: t, theme: r } = e;
    if (t === "gray")
      return {
        color: B("gray.800", "whiteAlpha.900")(e),
        _hover: { bg: B("gray.100", "whiteAlpha.200")(e) },
        _active: { bg: B("gray.200", "whiteAlpha.300")(e) },
      };
    const n = Ri(`${t}.200`, 0.12)(r),
      i = Ri(`${t}.200`, 0.24)(r);
    return {
      color: B(`${t}.600`, `${t}.200`)(e),
      bg: "transparent",
      _hover: { bg: B(`${t}.50`, n)(e) },
      _active: { bg: B(`${t}.100`, i)(e) },
    };
  },
  hA = (e) => {
    const { colorScheme: t } = e,
      r = B("gray.200", "whiteAlpha.300")(e);
    return {
      border: "1px solid",
      borderColor: t === "gray" ? r : "currentColor",
      ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":
        { marginEnd: "-1px" },
      ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":
        { marginBottom: "-1px" },
      ...qe(j1, e),
    };
  },
  pA = {
    yellow: {
      bg: "yellow.400",
      color: "black",
      hoverBg: "yellow.500",
      activeBg: "yellow.600",
    },
    cyan: {
      bg: "cyan.400",
      color: "black",
      hoverBg: "cyan.500",
      activeBg: "cyan.600",
    },
  },
  mA = (e) => {
    var t;
    const { colorScheme: r } = e;
    if (r === "gray") {
      const l = B("gray.100", "whiteAlpha.200")(e);
      return {
        bg: l,
        color: B("gray.800", "whiteAlpha.900")(e),
        _hover: {
          bg: B("gray.200", "whiteAlpha.300")(e),
          _disabled: { bg: l },
        },
        _active: { bg: B("gray.300", "whiteAlpha.400")(e) },
      };
    }
    const {
        bg: n = `${r}.500`,
        color: i = "white",
        hoverBg: o = `${r}.600`,
        activeBg: a = `${r}.700`,
      } = (t = pA[r]) != null ? t : {},
      s = B(n, `${r}.200`)(e);
    return {
      bg: s,
      color: B(i, "gray.800")(e),
      _hover: { bg: B(o, `${r}.300`)(e), _disabled: { bg: s } },
      _active: { bg: B(a, `${r}.400`)(e) },
    };
  },
  yA = (e) => {
    const { colorScheme: t } = e;
    return {
      padding: 0,
      height: "auto",
      lineHeight: "normal",
      verticalAlign: "baseline",
      color: B(`${t}.500`, `${t}.200`)(e),
      _hover: {
        textDecoration: "underline",
        _disabled: { textDecoration: "none" },
      },
      _active: { color: B(`${t}.700`, `${t}.500`)(e) },
    };
  },
  gA = {
    bg: "none",
    color: "inherit",
    display: "inline",
    lineHeight: "inherit",
    m: "0",
    p: "0",
  },
  vA = { ghost: j1, outline: hA, solid: mA, link: yA, unstyled: gA },
  SA = {
    lg: { h: "12", minW: "12", fontSize: "lg", px: "6" },
    md: { h: "10", minW: "10", fontSize: "md", px: "4" },
    sm: { h: "8", minW: "8", fontSize: "sm", px: "3" },
    xs: { h: "6", minW: "6", fontSize: "xs", px: "2" },
  },
  bA = {
    baseStyle: fA,
    variants: vA,
    sizes: SA,
    defaultProps: { variant: "solid", size: "md", colorScheme: "gray" },
  },
  { definePartsStyle: An, defineMultiStyleConfig: xA } = ie(KT.keys),
  pl = j("card-bg"),
  yr = j("card-padding"),
  L1 = j("card-shadow"),
  zs = j("card-radius"),
  I1 = j("card-border-width", "0"),
  V1 = j("card-border-color"),
  wA = An({
    container: {
      [pl.variable]: "colors.chakra-body-bg",
      backgroundColor: pl.reference,
      boxShadow: L1.reference,
      borderRadius: zs.reference,
      color: "chakra-body-text",
      borderWidth: I1.reference,
      borderColor: V1.reference,
    },
    body: { padding: yr.reference, flex: "1 1 0%" },
    header: { padding: yr.reference },
    footer: { padding: yr.reference },
  }),
  kA = {
    sm: An({
      container: { [zs.variable]: "radii.base", [yr.variable]: "space.3" },
    }),
    md: An({
      container: { [zs.variable]: "radii.md", [yr.variable]: "space.5" },
    }),
    lg: An({
      container: { [zs.variable]: "radii.xl", [yr.variable]: "space.7" },
    }),
  },
  CA = {
    elevated: An({
      container: {
        [L1.variable]: "shadows.base",
        _dark: { [pl.variable]: "colors.gray.700" },
      },
    }),
    outline: An({
      container: {
        [I1.variable]: "1px",
        [V1.variable]: "colors.chakra-border-color",
      },
    }),
    filled: An({ container: { [pl.variable]: "colors.chakra-subtle-bg" } }),
    unstyled: {
      body: { [yr.variable]: 0 },
      header: { [yr.variable]: 0 },
      footer: { [yr.variable]: 0 },
    },
  },
  _A = xA({
    baseStyle: wA,
    variants: CA,
    sizes: kA,
    defaultProps: { variant: "elevated", size: "md" },
  }),
  Eo = Ee("close-button-size"),
  ro = Ee("close-button-bg"),
  TA = {
    w: [Eo.reference],
    h: [Eo.reference],
    borderRadius: "md",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
    _hover: {
      [ro.variable]: "colors.blackAlpha.100",
      _dark: { [ro.variable]: "colors.whiteAlpha.100" },
    },
    _active: {
      [ro.variable]: "colors.blackAlpha.200",
      _dark: { [ro.variable]: "colors.whiteAlpha.200" },
    },
    _focusVisible: { boxShadow: "outline" },
    bg: ro.reference,
  },
  PA = {
    lg: { [Eo.variable]: "sizes.10", fontSize: "md" },
    md: { [Eo.variable]: "sizes.8", fontSize: "xs" },
    sm: { [Eo.variable]: "sizes.6", fontSize: "2xs" },
  },
  EA = { baseStyle: TA, sizes: PA, defaultProps: { size: "md" } },
  { variants: $A, defaultProps: AA } = To,
  RA = {
    fontFamily: "mono",
    fontSize: "sm",
    px: "0.2em",
    borderRadius: "sm",
    bg: Se.bg.reference,
    color: Se.color.reference,
    boxShadow: Se.shadow.reference,
  },
  zA = { baseStyle: RA, variants: $A, defaultProps: AA },
  MA = { w: "100%", mx: "auto", maxW: "prose", px: "4" },
  FA = { baseStyle: MA },
  DA = { opacity: 0.6, borderColor: "inherit" },
  BA = { borderStyle: "solid" },
  jA = { borderStyle: "dashed" },
  LA = { solid: BA, dashed: jA },
  IA = { baseStyle: DA, variants: LA, defaultProps: { variant: "solid" } },
  { definePartsStyle: VA, defineMultiStyleConfig: OA } = ie(wT.keys),
  NA = {
    borderTopWidth: "1px",
    borderColor: "inherit",
    _last: { borderBottomWidth: "1px" },
  },
  WA = {
    transitionProperty: "common",
    transitionDuration: "normal",
    fontSize: "md",
    _focusVisible: { boxShadow: "outline" },
    _hover: { bg: "blackAlpha.50" },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
    px: "4",
    py: "2",
  },
  UA = { pt: "2", px: "4", pb: "5" },
  HA = { fontSize: "1.25em" },
  KA = VA({ container: NA, button: WA, panel: UA, icon: HA }),
  GA = OA({ baseStyle: KA }),
  { definePartsStyle: va, defineMultiStyleConfig: YA } = ie(kT.keys),
  ft = j("alert-fg"),
  Cr = j("alert-bg"),
  XA = va({
    container: { bg: Cr.reference, px: "4", py: "3" },
    title: { fontWeight: "bold", lineHeight: "6", marginEnd: "2" },
    description: { lineHeight: "6" },
    icon: {
      color: ft.reference,
      flexShrink: 0,
      marginEnd: "3",
      w: "5",
      h: "6",
    },
    spinner: {
      color: ft.reference,
      flexShrink: 0,
      marginEnd: "3",
      w: "5",
      h: "5",
    },
  });
function fh(e) {
  const { theme: t, colorScheme: r } = e,
    n = Ri(`${r}.200`, 0.16)(t);
  return { light: `colors.${r}.100`, dark: n };
}
var qA = va((e) => {
    const { colorScheme: t } = e,
      r = fh(e);
    return {
      container: {
        [ft.variable]: `colors.${t}.600`,
        [Cr.variable]: r.light,
        _dark: { [ft.variable]: `colors.${t}.200`, [Cr.variable]: r.dark },
      },
    };
  }),
  QA = va((e) => {
    const { colorScheme: t } = e,
      r = fh(e);
    return {
      container: {
        [ft.variable]: `colors.${t}.600`,
        [Cr.variable]: r.light,
        _dark: { [ft.variable]: `colors.${t}.200`, [Cr.variable]: r.dark },
        paddingStart: "3",
        borderStartWidth: "4px",
        borderStartColor: ft.reference,
      },
    };
  }),
  ZA = va((e) => {
    const { colorScheme: t } = e,
      r = fh(e);
    return {
      container: {
        [ft.variable]: `colors.${t}.600`,
        [Cr.variable]: r.light,
        _dark: { [ft.variable]: `colors.${t}.200`, [Cr.variable]: r.dark },
        pt: "2",
        borderTopWidth: "4px",
        borderTopColor: ft.reference,
      },
    };
  }),
  JA = va((e) => {
    const { colorScheme: t } = e;
    return {
      container: {
        [ft.variable]: "colors.white",
        [Cr.variable]: `colors.${t}.600`,
        _dark: {
          [ft.variable]: "colors.gray.900",
          [Cr.variable]: `colors.${t}.200`,
        },
        color: ft.reference,
      },
    };
  }),
  eR = { subtle: qA, "left-accent": QA, "top-accent": ZA, solid: JA },
  tR = YA({
    baseStyle: XA,
    variants: eR,
    defaultProps: { variant: "subtle", colorScheme: "blue" },
  }),
  { definePartsStyle: O1, defineMultiStyleConfig: rR } = ie(CT.keys),
  wi = j("avatar-border-color"),
  $o = j("avatar-bg"),
  aa = j("avatar-font-size"),
  zi = j("avatar-size"),
  nR = {
    borderRadius: "full",
    border: "0.2em solid",
    borderColor: wi.reference,
    [wi.variable]: "white",
    _dark: { [wi.variable]: "colors.gray.800" },
  },
  iR = {
    bg: $o.reference,
    fontSize: aa.reference,
    width: zi.reference,
    height: zi.reference,
    lineHeight: "1",
    [$o.variable]: "colors.gray.200",
    _dark: { [$o.variable]: "colors.whiteAlpha.400" },
  },
  oR = (e) => {
    const { name: t, theme: r } = e,
      n = t ? fP({ string: t }) : "colors.gray.400",
      i = cP(n)(r);
    let o = "white";
    return (
      i || (o = "gray.800"),
      {
        bg: $o.reference,
        fontSize: aa.reference,
        color: o,
        borderColor: wi.reference,
        verticalAlign: "top",
        width: zi.reference,
        height: zi.reference,
        "&:not([data-loaded])": { [$o.variable]: n },
        [wi.variable]: "colors.white",
        _dark: { [wi.variable]: "colors.gray.800" },
      }
    );
  },
  aR = { fontSize: aa.reference, lineHeight: "1" },
  sR = O1((e) => ({
    badge: qe(nR, e),
    excessLabel: qe(iR, e),
    container: qe(oR, e),
    label: aR,
  }));
function Rr(e) {
  const t = e !== "100%" ? R1[e] : void 0;
  return O1({
    container: {
      [zi.variable]: t ?? e,
      [aa.variable]: `calc(${t ?? e} / 2.5)`,
    },
    excessLabel: {
      [zi.variable]: t ?? e,
      [aa.variable]: `calc(${t ?? e} / 2.5)`,
    },
  });
}
var lR = {
    "2xs": Rr(4),
    xs: Rr(6),
    sm: Rr(8),
    md: Rr(12),
    lg: Rr(16),
    xl: Rr(24),
    "2xl": Rr(32),
    full: Rr("100%"),
  },
  uR = rR({ baseStyle: sR, sizes: lR, defaultProps: { size: "md" } }),
  cR = {
    Accordion: GA,
    Alert: tR,
    Avatar: uR,
    Badge: To,
    Breadcrumb: dA,
    Button: bA,
    Checkbox: hl,
    CloseButton: EA,
    Code: zA,
    Container: FA,
    Divider: IA,
    Drawer: B$,
    Editable: W$,
    Form: X$,
    FormError: tA,
    FormLabel: nA,
    Heading: aA,
    Input: q,
    Kbd: T5,
    Link: E5,
    List: M5,
    Menu: U5,
    Modal: t$,
    NumberInput: c$,
    PinInput: p$,
    Popover: _$,
    Progress: zE,
    Radio: HE,
    Select: ZE,
    Skeleton: e5,
    SkipLink: r5,
    Slider: h5,
    Spinner: y5,
    Stat: C5,
    Switch: EP,
    Table: DP,
    Tabs: qP,
    Tag: uE,
    Textarea: xE,
    Tooltip: CE,
    Card: _A,
    Stepper: xT,
  },
  dR = {
    colors: {
      "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
      "chakra-body-bg": { _light: "white", _dark: "gray.800" },
      "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
      "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
      "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
      "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
      "chakra-placeholder-color": {
        _light: "gray.500",
        _dark: "whiteAlpha.400",
      },
    },
  },
  fR = {
    global: {
      body: {
        fontFamily: "body",
        color: "chakra-body-text",
        bg: "chakra-body-bg",
        transitionProperty: "background-color",
        transitionDuration: "normal",
        lineHeight: "base",
      },
      "*::placeholder": { color: "chakra-placeholder-color" },
      "*, *::before, &::after": { borderColor: "chakra-border-color" },
    },
  },
  hR = "ltr",
  pR = {
    useSystemColorMode: !1,
    initialColorMode: "light",
    cssVarPrefix: "chakra",
  },
  mR = {
    semanticTokens: dR,
    direction: hR,
    ...vT,
    components: cR,
    styles: fR,
    config: pR,
  };
function yR(e, t) {
  const r = {};
  return (
    Object.keys(e).forEach((n) => {
      t.includes(n) || (r[n] = e[n]);
    }),
    r
  );
}
function gR(e, t, r, n) {
  const i = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < i.length && e; n += 1) e = e[i[n]];
  return e === void 0 ? r : e;
}
var vR = (e) => {
    const t = new WeakMap();
    return (n, i, o, a) => {
      if (typeof n > "u") return e(n, i, o);
      t.has(n) || t.set(n, new Map());
      const s = t.get(n);
      if (s.has(i)) return s.get(i);
      const l = e(n, i, o, a);
      return s.set(i, l), l;
    };
  },
  N1 = vR(gR);
function W1(e, t) {
  const r = {};
  return (
    Object.keys(e).forEach((n) => {
      const i = e[n];
      t(i, n, e) && (r[n] = i);
    }),
    r
  );
}
var U1 = (e) => W1(e, (t) => t != null);
function SR(e) {
  return typeof e == "function";
}
function H1(e, ...t) {
  return SR(e) ? e(...t) : e;
}
var bR = typeof Element < "u",
  xR = typeof Map == "function",
  wR = typeof Set == "function",
  kR = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Ms(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var r, n, i;
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- !== 0; ) if (!Ms(e[n], t[n])) return !1;
      return !0;
    }
    var o;
    if (xR && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!t.has(n.value[0])) return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!Ms(n.value[1], t.get(n.value[0]))) return !1;
      return !0;
    }
    if (wR && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!t.has(n.value[0])) return !1;
      return !0;
    }
    if (kR && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- !== 0; ) if (e[n] !== t[n]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((i = Object.keys(e)), (r = i.length), r !== Object.keys(t).length))
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[n])) return !1;
    if (bR && e instanceof Element) return !1;
    for (n = r; n-- !== 0; )
      if (
        !(
          (i[n] === "_owner" || i[n] === "__v" || i[n] === "__o") &&
          e.$$typeof
        ) &&
        !Ms(e[i[n]], t[i[n]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var CR = function (t, r) {
  try {
    return Ms(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const _R = Zd(CR);
function K1(e, t = {}) {
  var r;
  const { styleConfig: n, ...i } = t,
    { theme: o, colorMode: a } = A2(),
    s = e ? N1(o, `components.${e}`) : void 0,
    l = n || s,
    u = qt(
      { theme: o, colorMode: a },
      (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
      U1(yR(i, ["children"]))
    ),
    c = k.useRef({});
  if (l) {
    const f = Y_(l)(u);
    _R(c.current, f) || (c.current = f);
  }
  return c.current;
}
function nu(e, t = {}) {
  return K1(e, t);
}
function hh(e, t = {}) {
  return K1(e, t);
}
var TR = new Set([
    ...B_,
    "textStyle",
    "layerStyle",
    "apply",
    "noOfLines",
    "focusBorderColor",
    "errorBorderColor",
    "as",
    "__css",
    "css",
    "sx",
  ]),
  PR = new Set(["htmlWidth", "htmlHeight", "htmlSize", "htmlTranslate"]);
function ER(e) {
  return PR.has(e) || !TR.has(e);
}
function $R(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const n of t)
    if (n != null)
      for (const i in n)
        Object.prototype.hasOwnProperty.call(n, i) &&
          (i in r && delete r[i], (r[i] = n[i]));
  return r;
}
var AR =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  RR = o1(function (e) {
    return (
      AR.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  zR = RR,
  MR = function (t) {
    return t !== "theme";
  },
  Cy = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? zR : MR;
  },
  _y = function (t, r, n) {
    var i;
    if (r) {
      var o = r.shouldForwardProp;
      i =
        t.__emotion_forwardProp && o
          ? function (a) {
              return t.__emotion_forwardProp(a) && o(a);
            }
          : o;
    }
    return typeof i != "function" && n && (i = t.__emotion_forwardProp), i;
  },
  FR = function (t) {
    var r = t.cache,
      n = t.serialized,
      i = t.isStringTag;
    return (
      d1(r, n, i),
      u2(function () {
        return f1(r, n, i);
      }),
      null
    );
  },
  DR = function e(t, r) {
    var n = t.__emotion_real === t,
      i = (n && t.__emotion_base) || t,
      o,
      a;
    r !== void 0 && ((o = r.label), (a = r.target));
    var s = _y(t, r, n),
      l = s || Cy(i),
      u = !l("as");
    return function () {
      var c = arguments,
        d =
          n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (o !== void 0 && d.push("label:" + o + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var f = c.length, y = 1; y < f; y++) d.push(c[y], c[0][y]);
      }
      var S = y1(function (v, w, p) {
        var h = (u && v.as) || i,
          m = "",
          C = [],
          P = v;
        if (v.theme == null) {
          P = {};
          for (var A in v) P[A] = v[A];
          P.theme = k.useContext(ra);
        }
        typeof v.className == "string"
          ? (m = r2(w.registered, C, v.className))
          : v.className != null && (m = v.className + " ");
        var E = th(d.concat(C), w.registered, P);
        (m += w.key + "-" + E.name), a !== void 0 && (m += " " + a);
        var $ = u && s === void 0 ? Cy(h) : l,
          L = {};
        for (var D in v) (u && D === "as") || ($(D) && (L[D] = v[D]));
        return (
          (L.className = m),
          (L.ref = p),
          k.createElement(
            k.Fragment,
            null,
            k.createElement(FR, {
              cache: w,
              serialized: E,
              isStringTag: typeof h == "string",
            }),
            k.createElement(h, L)
          )
        );
      });
      return (
        (S.displayName =
          o !== void 0
            ? o
            : "Styled(" +
              (typeof i == "string"
                ? i
                : i.displayName || i.name || "Component") +
              ")"),
        (S.defaultProps = t.defaultProps),
        (S.__emotion_real = S),
        (S.__emotion_base = i),
        (S.__emotion_styles = d),
        (S.__emotion_forwardProp = s),
        Object.defineProperty(S, "toString", {
          value: function () {
            return "." + a;
          },
        }),
        (S.withComponent = function (v, w) {
          return e(v, ll({}, r, w, { shouldForwardProp: _y(S, w, !0) })).apply(
            void 0,
            d
          );
        }),
        S
      );
    };
  },
  BR = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  ml = DR.bind();
BR.forEach(function (e) {
  ml[e] = ml(e);
});
var Ty,
  jR = (Ty = ml.default) != null ? Ty : ml,
  LR =
    ({ baseStyle: e }) =>
    (t) => {
      const { theme: r, css: n, __css: i, sx: o, ...a } = t,
        s = W1(a, (d, f) => L_(f)),
        l = H1(e, t),
        u = $R({}, i, l, U1(s), o),
        c = E1(u)(t.theme);
      return n ? [c, n] : c;
    };
function hc(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = ER);
  const i = LR({ baseStyle: r }),
    o = jR(e, n)(i);
  return Do.forwardRef(function (l, u) {
    const { colorMode: c, forced: d } = ih();
    return Do.createElement(o, { ref: u, "data-theme": d ? c : void 0, ...l });
  });
}
function IR() {
  const e = new Map();
  return new Proxy(hc, {
    apply(t, r, n) {
      return hc(...n);
    },
    get(t, r) {
      return e.has(r) || e.set(r, hc(r)), e.get(r);
    },
  });
}
var Ce = IR();
function Vt(e) {
  return k.forwardRef(e);
}
function VR(e = {}) {
  const {
      strict: t = !0,
      errorMessage:
        r = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
      name: n,
    } = e,
    i = k.createContext(void 0);
  i.displayName = n;
  function o() {
    var a;
    const s = k.useContext(i);
    if (!s && t) {
      const l = new Error(r);
      throw (
        ((l.name = "ContextError"),
        (a = Error.captureStackTrace) == null || a.call(Error, l, o),
        l)
      );
    }
    return s;
  }
  return [i.Provider, o, i];
}
function OR(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e,
    i = k.useMemo(() => M_(r), [r]);
  return _.jsxs(f2, { theme: i, children: [_.jsx(NR, { root: t }), n] });
}
function NR({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return _.jsx(Ql, { styles: (r) => ({ [t]: r.__cssVars }) });
}
VR({
  name: "StylesContext",
  errorMessage:
    "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ",
});
function WR() {
  const { colorMode: e } = ih();
  return _.jsx(Ql, {
    styles: (t) => {
      const r = N1(t, "styles.global"),
        n = H1(r, { theme: t, colorMode: e });
      return n ? E1(n)(t) : void 0;
    },
  });
}
var G1 = k.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  },
});
G1.displayName = "EnvironmentContext";
function Y1(e) {
  const { children: t, environment: r, disabled: n } = e,
    i = k.useRef(null),
    o = k.useMemo(
      () =>
        r || {
          getDocument: () => {
            var s, l;
            return (l = (s = i.current) == null ? void 0 : s.ownerDocument) !=
              null
              ? l
              : document;
          },
          getWindow: () => {
            var s, l;
            return (l =
              (s = i.current) == null ? void 0 : s.ownerDocument.defaultView) !=
              null
              ? l
              : window;
          },
        },
      [r]
    ),
    a = !n || !r;
  return _.jsxs(G1.Provider, {
    value: o,
    children: [
      t,
      a && _.jsx("span", { id: "__chakra_env", hidden: !0, ref: i }),
    ],
  });
}
Y1.displayName = "EnvironmentProvider";
var UR = (e) => {
    const {
        children: t,
        colorModeManager: r,
        portalZIndex: n,
        resetScope: i,
        resetCSS: o = !0,
        theme: a = {},
        environment: s,
        cssVarsRoot: l,
        disableEnvironment: u,
        disableGlobalStyle: c,
      } = e,
      d = _.jsx(Y1, { environment: s, disabled: u, children: t });
    return _.jsx(OR, {
      theme: a,
      cssVarsRoot: l,
      children: _.jsxs(x1, {
        colorModeManager: r,
        options: a.config,
        children: [
          o ? _.jsx(y2, { scope: i }) : _.jsx(m2, {}),
          !c && _.jsx(WR, {}),
          n ? _.jsx(S1, { zIndex: n, children: d }) : d,
        ],
      }),
    });
  },
  HR = (e, t) => e.find((r) => r.id === t);
function Py(e, t) {
  const r = X1(e, t),
    n = r ? e[r].findIndex((i) => i.id === t) : -1;
  return { position: r, index: n };
}
function X1(e, t) {
  for (const [r, n] of Object.entries(e)) if (HR(n, t)) return r;
}
function KR(e) {
  const t = e.includes("right"),
    r = e.includes("left");
  let n = "center";
  return (
    t && (n = "flex-end"),
    r && (n = "flex-start"),
    { display: "flex", flexDirection: "column", alignItems: n }
  );
}
function GR(e) {
  const r = e === "top" || e === "bottom" ? "0 auto" : void 0,
    n = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0,
    i = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0,
    o = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)",
    a = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: r,
    top: n,
    bottom: i,
    right: o,
    left: a,
  };
}
function YR(e, t = []) {
  const r = k.useRef(e);
  return (
    k.useEffect(() => {
      r.current = e;
    }),
    k.useCallback((...n) => {
      var i;
      return (i = r.current) == null ? void 0 : i.call(r, ...n);
    }, t)
  );
}
function XR(e, t) {
  const r = YR(e);
  k.useEffect(() => {
    if (t == null) return;
    let n = null;
    return (
      (n = window.setTimeout(() => {
        r();
      }, t)),
      () => {
        n && window.clearTimeout(n);
      }
    );
  }, [t, r]);
}
function Ey(e, t) {
  const r = k.useRef(!1),
    n = k.useRef(!1);
  k.useEffect(() => {
    if (r.current && n.current) return e();
    n.current = !0;
  }, t),
    k.useEffect(
      () => (
        (r.current = !0),
        () => {
          r.current = !1;
        }
      ),
      []
    );
}
const ph = k.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  iu = k.createContext({}),
  Sa = k.createContext(null),
  mh = typeof document < "u",
  yh = mh ? k.useLayoutEffect : k.useEffect,
  q1 = k.createContext({ strict: !1 }),
  gh = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  qR = "framerAppearId",
  Q1 = "data-" + gh(qR),
  QR = { skipAnimations: !1, useManualTiming: !1 };
class $y {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const r = this.order.indexOf(t);
    r !== -1 && (this.order.splice(r, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function ZR(e) {
  let t = new $y(),
    r = new $y(),
    n = 0,
    i = !1,
    o = !1;
  const a = new WeakSet(),
    s = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && i,
          f = d ? t : r;
        return u && a.add(l), f.add(l) && d && i && (n = t.order.length), l;
      },
      cancel: (l) => {
        r.remove(l), a.delete(l);
      },
      process: (l) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, r] = [r, t]), r.clear(), (n = t.order.length), n))
          for (let u = 0; u < n; u++) {
            const c = t.order[u];
            a.has(c) && (s.schedule(c), e()), c(l);
          }
        (i = !1), o && ((o = !1), s.process(l));
      },
    };
  return s;
}
const as = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  JR = 40;
function Z1(e, t) {
  let r = !1,
    n = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = as.reduce((d, f) => ((d[f] = ZR(() => (r = !0))), d), {}),
    a = (d) => {
      o[d].process(i);
    },
    s = () => {
      const d = performance.now();
      (r = !1),
        (i.delta = n ? 1e3 / 60 : Math.max(Math.min(d - i.timestamp, JR), 1)),
        (i.timestamp = d),
        (i.isProcessing = !0),
        as.forEach(a),
        (i.isProcessing = !1),
        r && t && ((n = !1), e(s));
    },
    l = () => {
      (r = !0), (n = !0), i.isProcessing || e(s);
    };
  return {
    schedule: as.reduce((d, f) => {
      const y = o[f];
      return (d[f] = (S, v = !1, w = !1) => (r || l(), y.schedule(S, v, w))), d;
    }, {}),
    cancel: (d) => as.forEach((f) => o[f].cancel(d)),
    state: i,
    steps: o,
  };
}
const { schedule: vh, cancel: pD } = Z1(queueMicrotask, !1);
function ez(e, t, r, n) {
  const { visualElement: i } = k.useContext(iu),
    o = k.useContext(q1),
    a = k.useContext(Sa),
    s = k.useContext(ph).reducedMotion,
    l = k.useRef();
  (n = n || o.renderer),
    !l.current &&
      n &&
      (l.current = n(e, {
        visualState: t,
        parent: i,
        props: r,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: s,
      }));
  const u = l.current;
  k.useInsertionEffect(() => {
    u && u.update(r, a);
  });
  const c = k.useRef(!!(r[Q1] && !window.HandoffComplete));
  return (
    yh(() => {
      u &&
        (vh.render(u.render),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    k.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && ((c.current = !1), (window.HandoffComplete = !0)));
    }),
    u
  );
}
function li(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function tz(e, t, r) {
  return k.useCallback(
    (n) => {
      n && e.mount && e.mount(n),
        t && (n ? t.mount(n) : t.unmount()),
        r && (typeof r == "function" ? r(n) : li(r) && (r.current = n));
    },
    [t]
  );
}
function sa(e) {
  return typeof e == "string" || Array.isArray(e);
}
function ou(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Sh = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  bh = ["initial", ...Sh];
function au(e) {
  return ou(e.animate) || bh.some((t) => sa(e[t]));
}
function J1(e) {
  return !!(au(e) || e.variants);
}
function rz(e, t) {
  if (au(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || sa(r) ? r : void 0,
      animate: sa(n) ? n : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function nz(e) {
  const { initial: t, animate: r } = rz(e, k.useContext(iu));
  return k.useMemo(() => ({ initial: t, animate: r }), [Ay(t), Ay(r)]);
}
function Ay(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Ry = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  la = {};
for (const e in Ry) la[e] = { isEnabled: (t) => Ry[e].some((r) => !!t[r]) };
function iz(e) {
  for (const t in e) la[t] = { ...la[t], ...e[t] };
}
const xh = k.createContext({}),
  eS = k.createContext({}),
  oz = Symbol.for("motionComponentSymbol");
function az({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: r,
  useVisualState: n,
  Component: i,
}) {
  e && iz(e);
  function o(s, l) {
    let u;
    const c = { ...k.useContext(ph), ...s, layoutId: sz(s) },
      { isStatic: d } = c,
      f = nz(s),
      y = n(s, d);
    if (!d && mh) {
      f.visualElement = ez(i, y, c, t);
      const S = k.useContext(eS),
        v = k.useContext(q1).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(c, v, e, S));
    }
    return _.jsxs(iu.Provider, {
      value: f,
      children: [
        u && f.visualElement
          ? _.jsx(u, { visualElement: f.visualElement, ...c })
          : null,
        r(i, s, tz(y, f.visualElement, l), y, d, f.visualElement),
      ],
    });
  }
  const a = k.forwardRef(o);
  return (a[oz] = i), a;
}
function sz({ layoutId: e }) {
  const t = k.useContext(xh).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function lz(e) {
  function t(n, i = {}) {
    return az(e(n, i));
  }
  if (typeof Proxy > "u") return t;
  const r = new Map();
  return new Proxy(t, {
    get: (n, i) => (r.has(i) || r.set(i, t(i)), r.get(i)),
  });
}
const uz = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function wh(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(uz.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const yl = {};
function cz(e) {
  Object.assign(yl, e);
}
const ba = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  In = new Set(ba);
function tS(e, { layout: t, layoutId: r }) {
  return (
    In.has(e) ||
    e.startsWith("origin") ||
    ((t || r !== void 0) && (!!yl[e] || e === "opacity"))
  );
}
const We = (e) => !!(e && e.getVelocity),
  dz = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  fz = ba.length;
function hz(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 },
  n,
  i
) {
  let o = "";
  for (let a = 0; a < fz; a++) {
    const s = ba[a];
    if (e[s] !== void 0) {
      const l = dz[s] || s;
      o += `${l}(${e[s]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, n ? "" : o)) : r && n && (o = "none"),
    o
  );
}
const rS = (e) => (t) => typeof t == "string" && t.startsWith(e),
  nS = rS("--"),
  pz = rS("var(--"),
  kh = (e) => (pz(e) ? mz.test(e.split("/*")[0].trim()) : !1),
  mz =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  yz = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  en = (e, t, r) => (r > t ? t : r < e ? e : r),
  Ii = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Ao = { ...Ii, transform: (e) => en(0, 1, e) },
  ss = { ...Ii, default: 1 },
  Ro = (e) => Math.round(e * 1e5) / 1e5,
  Ch = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  gz =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  vz =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function xa(e) {
  return typeof e == "string";
}
const wa = (e) => ({
    test: (t) => xa(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  zr = wa("deg"),
  rr = wa("%"),
  I = wa("px"),
  Sz = wa("vh"),
  bz = wa("vw"),
  zy = {
    ...rr,
    parse: (e) => rr.parse(e) / 100,
    transform: (e) => rr.transform(e * 100),
  },
  My = { ...Ii, transform: Math.round },
  iS = {
    borderWidth: I,
    borderTopWidth: I,
    borderRightWidth: I,
    borderBottomWidth: I,
    borderLeftWidth: I,
    borderRadius: I,
    radius: I,
    borderTopLeftRadius: I,
    borderTopRightRadius: I,
    borderBottomRightRadius: I,
    borderBottomLeftRadius: I,
    width: I,
    maxWidth: I,
    height: I,
    maxHeight: I,
    size: I,
    top: I,
    right: I,
    bottom: I,
    left: I,
    padding: I,
    paddingTop: I,
    paddingRight: I,
    paddingBottom: I,
    paddingLeft: I,
    margin: I,
    marginTop: I,
    marginRight: I,
    marginBottom: I,
    marginLeft: I,
    rotate: zr,
    rotateX: zr,
    rotateY: zr,
    rotateZ: zr,
    scale: ss,
    scaleX: ss,
    scaleY: ss,
    scaleZ: ss,
    skew: zr,
    skewX: zr,
    skewY: zr,
    distance: I,
    translateX: I,
    translateY: I,
    translateZ: I,
    x: I,
    y: I,
    z: I,
    perspective: I,
    transformPerspective: I,
    opacity: Ao,
    originX: zy,
    originY: zy,
    originZ: I,
    zIndex: My,
    backgroundPositionX: I,
    backgroundPositionY: I,
    fillOpacity: Ao,
    strokeOpacity: Ao,
    numOctaves: My,
  };
function _h(e, t, r, n) {
  const { style: i, vars: o, transform: a, transformOrigin: s } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const d in t) {
    const f = t[d];
    if (nS(d)) {
      o[d] = f;
      continue;
    }
    const y = iS[d],
      S = yz(f, y);
    if (In.has(d)) {
      if (((l = !0), (a[d] = S), !c)) continue;
      f !== (y.default || 0) && (c = !1);
    } else d.startsWith("origin") ? ((u = !0), (s[d] = S)) : (i[d] = S);
  }
  if (
    (t.transform ||
      (l || n
        ? (i.transform = hz(e.transform, r, c, n))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: d = "50%", originY: f = "50%", originZ: y = 0 } = s;
    i.transformOrigin = `${d} ${f} ${y}`;
  }
}
const Th = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function oS(e, t, r) {
  for (const n in t) !We(t[n]) && !tS(n, r) && (e[n] = t[n]);
}
function xz({ transformTemplate: e }, t, r) {
  return k.useMemo(() => {
    const n = Th();
    return (
      _h(n, t, { enableHardwareAcceleration: !r }, e),
      Object.assign({}, n.vars, n.style)
    );
  }, [t]);
}
function wz(e, t, r) {
  const n = e.style || {},
    i = {};
  return oS(i, n, e), Object.assign(i, xz(e, t, r)), i;
}
function kz(e, t, r) {
  const n = {},
    i = wz(e, t, r);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = i),
    n
  );
}
const Cz = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function gl(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    Cz.has(e)
  );
}
let aS = (e) => !gl(e);
function _z(e) {
  e && (aS = (t) => (t.startsWith("on") ? !gl(t) : e(t)));
}
try {
  _z(require("@emotion/is-prop-valid").default);
} catch {}
function Tz(e, t, r) {
  const n = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((aS(i) ||
        (r === !0 && gl(i)) ||
        (!t && !gl(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (n[i] = e[i]));
  return n;
}
function Fy(e, t, r) {
  return typeof e == "string" ? e : I.transform(t + r * e);
}
function Pz(e, t, r) {
  const n = Fy(t, e.x, e.width),
    i = Fy(r, e.y, e.height);
  return `${n} ${i}`;
}
const Ez = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  $z = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Az(e, t, r = 1, n = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? Ez : $z;
  e[o.offset] = I.transform(-n);
  const a = I.transform(t),
    s = I.transform(r);
  e[o.array] = `${a} ${s}`;
}
function Ph(
  e,
  {
    attrX: t,
    attrY: r,
    attrScale: n,
    originX: i,
    originY: o,
    pathLength: a,
    pathSpacing: s = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d,
  f
) {
  if ((_h(e, u, c, f), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: y, style: S, dimensions: v } = e;
  y.transform && (v && (S.transform = y.transform), delete y.transform),
    v &&
      (i !== void 0 || o !== void 0 || S.transform) &&
      (S.transformOrigin = Pz(
        v,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (y.x = t),
    r !== void 0 && (y.y = r),
    n !== void 0 && (y.scale = n),
    a !== void 0 && Az(y, a, s, l, !1);
}
const sS = () => ({ ...Th(), attrs: {} }),
  Eh = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Rz(e, t, r, n) {
  const i = k.useMemo(() => {
    const o = sS();
    return (
      Ph(o, t, { enableHardwareAcceleration: !1 }, Eh(n), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    oS(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function zz(e = !1) {
  return (r, n, i, { latestValues: o }, a) => {
    const l = (wh(r) ? Rz : kz)(n, o, a, r),
      u = Tz(n, typeof r == "string", e),
      c = r !== k.Fragment ? { ...u, ...l, ref: i } : {},
      { children: d } = n,
      f = k.useMemo(() => (We(d) ? d.get() : d), [d]);
    return k.createElement(r, { ...c, children: f });
  };
}
function lS(e, { style: t, vars: r }, n, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(n));
  for (const o in r) e.style.setProperty(o, r[o]);
}
const uS = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function cS(e, t, r, n) {
  lS(e, t, void 0, n);
  for (const i in t.attrs) e.setAttribute(uS.has(i) ? i : gh(i), t.attrs[i]);
}
function $h(e, t, r) {
  var n;
  const { style: i } = e,
    o = {};
  for (const a in i)
    (We(i[a]) ||
      (t.style && We(t.style[a])) ||
      tS(a, e) ||
      ((n = r == null ? void 0 : r.getValue(a)) === null || n === void 0
        ? void 0
        : n.liveStyle) !== void 0) &&
      (o[a] = i[a]);
  return o;
}
function dS(e, t, r) {
  const n = $h(e, t, r);
  for (const i in e)
    if (We(e[i]) || We(t[i])) {
      const o =
        ba.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      n[o] = e[i];
    }
  return n;
}
function Dy(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((r, n) => {
        (t[0][n] = r.get()), (t[1][n] = r.getVelocity());
      }),
    t
  );
}
function Ah(e, t, r, n) {
  if (typeof t == "function") {
    const [i, o] = Dy(n);
    t = t(r !== void 0 ? r : e.custom, i, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, o] = Dy(n);
    t = t(r !== void 0 ? r : e.custom, i, o);
  }
  return t;
}
function fS(e) {
  const t = k.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Md = (e) => Array.isArray(e),
  Mz = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  Fz = (e) => (Md(e) ? e[e.length - 1] || 0 : e);
function Fs(e) {
  const t = We(e) ? e.get() : e;
  return Mz(t) ? t.toValue() : t;
}
function Dz(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r },
  n,
  i,
  o
) {
  const a = { latestValues: Bz(n, i, o, e), renderState: t() };
  return r && (a.mount = (s) => r(n, s, a)), a;
}
const hS = (e) => (t, r) => {
  const n = k.useContext(iu),
    i = k.useContext(Sa),
    o = () => Dz(e, t, n, i);
  return r ? o() : fS(o);
};
function Bz(e, t, r, n) {
  const i = {},
    o = n(e, {});
  for (const f in o) i[f] = Fs(o[f]);
  let { initial: a, animate: s } = e;
  const l = au(e),
    u = J1(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = r ? r.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return (
    d &&
      typeof d != "boolean" &&
      !ou(d) &&
      (Array.isArray(d) ? d : [d]).forEach((y) => {
        const S = Ah(e, y);
        if (!S) return;
        const { transitionEnd: v, transition: w, ...p } = S;
        for (const h in p) {
          let m = p[h];
          if (Array.isArray(m)) {
            const C = c ? m.length - 1 : 0;
            m = m[C];
          }
          m !== null && (i[h] = m);
        }
        for (const h in v) i[h] = v[h];
      }),
    i
  );
}
const Ue = (e) => e,
  {
    schedule: J,
    cancel: _r,
    state: Fe,
    steps: pc,
  } = Z1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ue, !0),
  jz = {
    useVisualState: hS({
      scrapeMotionValuesFromProps: dS,
      createRenderState: sS,
      onMount: (e, t, { renderState: r, latestValues: n }) => {
        J.read(() => {
          try {
            r.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          J.render(() => {
            Ph(
              r,
              n,
              { enableHardwareAcceleration: !1 },
              Eh(t.tagName),
              e.transformTemplate
            ),
              cS(t, r);
          });
      },
    }),
  },
  Lz = {
    useVisualState: hS({
      scrapeMotionValuesFromProps: $h,
      createRenderState: Th,
    }),
  };
function Iz(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...(wh(e) ? jz : Lz),
    preloadedFeatures: r,
    useRender: zz(t),
    createVisualElement: n,
    Component: e,
  };
}
function pr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const pS = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function su(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const Vz = (e) => (t) => pS(t) && e(t, su(t));
function gr(e, t, r, n) {
  return pr(e, t, Vz(r), n);
}
const Oz = (e, t) => (r) => t(e(r)),
  vr = (...e) => e.reduce(Oz);
function mS(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? ((t = e), r) : !1;
  };
}
const By = mS("dragHorizontal"),
  jy = mS("dragVertical");
function yS(e) {
  let t = !1;
  if (e === "y") t = jy();
  else if (e === "x") t = By();
  else {
    const r = By(),
      n = jy();
    r && n
      ? (t = () => {
          r(), n();
        })
      : (r && r(), n && n());
  }
  return t;
}
function gS() {
  const e = yS(!0);
  return e ? (e(), !1) : !0;
}
class sn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function Ly(e, t) {
  const r = t ? "pointerenter" : "pointerleave",
    n = t ? "onHoverStart" : "onHoverEnd",
    i = (o, a) => {
      if (o.pointerType === "touch" || gS()) return;
      const s = e.getProps();
      e.animationState &&
        s.whileHover &&
        e.animationState.setActive("whileHover", t);
      const l = s[n];
      l && J.postRender(() => l(o, a));
    };
  return gr(e.current, r, i, { passive: !e.getProps()[n] });
}
class Nz extends sn {
  mount() {
    this.unmount = vr(Ly(this.node, !0), Ly(this.node, !1));
  }
  unmount() {}
}
class Wz extends sn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = vr(
      pr(this.node.current, "focus", () => this.onFocus()),
      pr(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const vS = (e, t) => (t ? (e === t ? !0 : vS(e, t.parentElement)) : !1);
function mc(e, t) {
  if (!t) return;
  const r = new PointerEvent("pointer" + e);
  t(r, su(r));
}
class Uz extends sn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Ue),
      (this.removeEndListeners = Ue),
      (this.removeAccessibleListeners = Ue),
      (this.startPointerPress = (t, r) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const n = this.node.getProps(),
          o = gr(
            window,
            "pointerup",
            (s, l) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: u,
                  onTapCancel: c,
                  globalTapTarget: d,
                } = this.node.getProps(),
                f = !d && !vS(this.node.current, s.target) ? c : u;
              f && J.update(() => f(s, l));
            },
            { passive: !(n.onTap || n.onPointerUp) }
          ),
          a = gr(window, "pointercancel", (s, l) => this.cancelPress(s, l), {
            passive: !(n.onTapCancel || n.onPointerCancel),
          });
        (this.removeEndListeners = vr(o, a)), this.startPress(t, r);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const a = (s) => {
              s.key !== "Enter" ||
                !this.checkPressEnd() ||
                mc("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && J.postRender(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = pr(this.node.current, "keyup", a)),
              mc("down", (s, l) => {
                this.startPress(s, l);
              });
          },
          r = pr(this.node.current, "keydown", t),
          n = () => {
            this.isPressing && mc("cancel", (o, a) => this.cancelPress(o, a));
          },
          i = pr(this.node.current, "blur", n);
        this.removeAccessibleListeners = vr(r, i);
      });
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      n && J.postRender(() => n(t, r));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !gS()
    );
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: n } = this.node.getProps();
    n && J.postRender(() => n(t, r));
  }
  mount() {
    const t = this.node.getProps(),
      r = gr(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      n = pr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = vr(r, n);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Fd = new WeakMap(),
  yc = new WeakMap(),
  Hz = (e) => {
    const t = Fd.get(e.target);
    t && t(e);
  },
  Kz = (e) => {
    e.forEach(Hz);
  };
function Gz({ root: e, ...t }) {
  const r = e || document;
  yc.has(r) || yc.set(r, {});
  const n = yc.get(r),
    i = JSON.stringify(t);
  return n[i] || (n[i] = new IntersectionObserver(Kz, { root: e, ...t })), n[i];
}
function Yz(e, t, r) {
  const n = Gz(t);
  return (
    Fd.set(e, r),
    n.observe(e),
    () => {
      Fd.delete(e), n.unobserve(e);
    }
  );
}
const Xz = { some: 0, all: 1 };
class qz extends sn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: r, margin: n, amount: i = "some", once: o } = t,
      a = {
        root: r ? r.current : void 0,
        rootMargin: n,
        threshold: typeof i == "number" ? i : Xz[i],
      },
      s = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return Yz(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(Qz(t, r)) && this.startObserver();
  }
  unmount() {}
}
function Qz({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const Zz = {
  inView: { Feature: qz },
  tap: { Feature: Uz },
  focus: { Feature: Wz },
  hover: { Feature: Nz },
};
function SS(e, t) {
  if (!Array.isArray(t)) return !1;
  const r = t.length;
  if (r !== e.length) return !1;
  for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
function lu(e, t, r) {
  const n = e.getProps();
  return Ah(n, t, r !== void 0 ? r : n.custom, e);
}
const qr = (e) => e * 1e3,
  Sr = (e) => e / 1e3,
  Jz = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  e3 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  t3 = { type: "keyframes", duration: 0.8 },
  r3 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  n3 = (e, { keyframes: t }) =>
    t.length > 2
      ? t3
      : In.has(e)
      ? e.startsWith("scale")
        ? e3(t[1])
        : Jz
      : r3;
function i3({
  when: e,
  delay: t,
  delayChildren: r,
  staggerChildren: n,
  staggerDirection: i,
  repeat: o,
  repeatType: a,
  repeatDelay: s,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Rh(e, t) {
  return e[t] || e.default || e;
}
const o3 = (e) => e !== null;
function uu(e, { repeat: t, repeatType: r = "loop" }, n) {
  const i = e.filter(o3),
    o = t && r !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || n === void 0 ? i[o] : n;
}
let Ds;
function a3() {
  Ds = void 0;
}
const Qr = {
    now: () => (
      Ds === void 0 &&
        Qr.set(
          Fe.isProcessing || QR.useManualTiming
            ? Fe.timestamp
            : performance.now()
        ),
      Ds
    ),
    set: (e) => {
      (Ds = e), queueMicrotask(a3);
    },
  },
  bS = (e) => /^0[^.\s]+$/u.test(e);
function s3(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || bS(e)
    : !0;
}
let Dd = Ue;
const xS = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  l3 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function u3(e) {
  const t = l3.exec(e);
  if (!t) return [,];
  const [, r, n, i] = t;
  return [`--${r ?? n}`, i];
}
function wS(e, t, r = 1) {
  const [n, i] = u3(e);
  if (!n) return;
  const o = window.getComputedStyle(t).getPropertyValue(n);
  if (o) {
    const a = o.trim();
    return xS(a) ? parseFloat(a) : a;
  }
  return kh(i) ? wS(i, t, r + 1) : i;
}
const c3 = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Iy = (e) => e === Ii || e === I,
  Vy = (e, t) => parseFloat(e.split(", ")[t]),
  Oy =
    (e, t) =>
    (r, { transform: n }) => {
      if (n === "none" || !n) return 0;
      const i = n.match(/^matrix3d\((.+)\)$/u);
      if (i) return Vy(i[1], t);
      {
        const o = n.match(/^matrix\((.+)\)$/u);
        return o ? Vy(o[1], e) : 0;
      }
    },
  d3 = new Set(["x", "y", "z"]),
  f3 = ba.filter((e) => !d3.has(e));
function h3(e) {
  const t = [];
  return (
    f3.forEach((r) => {
      const n = e.getValue(r);
      n !== void 0 &&
        (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Mi = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Oy(4, 13),
  y: Oy(5, 14),
};
Mi.translateX = Mi.x;
Mi.translateY = Mi.y;
const kS = (e) => (t) => t.test(e),
  p3 = { test: (e) => e === "auto", parse: (e) => e },
  CS = [Ii, I, rr, zr, bz, Sz, p3],
  Ny = (e) => CS.find(kS(e)),
  Rn = new Set();
let Bd = !1,
  jd = !1;
function _S() {
  if (jd) {
    const e = Array.from(Rn).filter((n) => n.needsMeasurement),
      t = new Set(e.map((n) => n.element)),
      r = new Map();
    t.forEach((n) => {
      const i = h3(n);
      i.length && (r.set(n, i), n.render());
    }),
      e.forEach((n) => n.measureInitialState()),
      t.forEach((n) => {
        n.render();
        const i = r.get(n);
        i &&
          i.forEach(([o, a]) => {
            var s;
            (s = n.getValue(o)) === null || s === void 0 || s.set(a);
          });
      }),
      e.forEach((n) => n.measureEndState()),
      e.forEach((n) => {
        n.suspendedScrollY !== void 0 && window.scrollTo(0, n.suspendedScrollY);
      });
  }
  (jd = !1), (Bd = !1), Rn.forEach((e) => e.complete()), Rn.clear();
}
function TS() {
  Rn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (jd = !0);
  });
}
function m3() {
  TS(), _S();
}
class zh {
  constructor(t, r, n, i, o, a = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = r),
      (this.name = n),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = a);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Rn.add(this), Bd || ((Bd = !0), J.read(TS), J.resolveKeyframes(_S)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: r,
      element: n,
      motionValue: i,
    } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const a = i == null ? void 0 : i.get(),
            s = t[t.length - 1];
          if (a !== void 0) t[0] = a;
          else if (n && r) {
            const l = n.readValue(r, s);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = s), i && a === void 0 && i.set(t[0]);
        } else t[o] = t[o - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Rn.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Rn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Mh = (e, t) => (r) =>
    !!(
      (xa(r) && vz.test(r) && r.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(r, t))
    ),
  PS = (e, t, r) => (n) => {
    if (!xa(n)) return n;
    const [i, o, a, s] = n.match(Ch);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [r]: parseFloat(a),
      alpha: s !== void 0 ? parseFloat(s) : 1,
    };
  },
  y3 = (e) => en(0, 255, e),
  gc = { ...Ii, transform: (e) => Math.round(y3(e)) },
  _n = {
    test: Mh("rgb", "red"),
    parse: PS("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
      "rgba(" +
      gc.transform(e) +
      ", " +
      gc.transform(t) +
      ", " +
      gc.transform(r) +
      ", " +
      Ro(Ao.transform(n)) +
      ")",
  };
function g3(e) {
  let t = "",
    r = "",
    n = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (r = e.substring(3, 5)),
        (n = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (r = e.substring(2, 3)),
        (n = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (r += r),
        (n += n),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(r, 16),
      blue: parseInt(n, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Ld = { test: Mh("#"), parse: g3, transform: _n.transform },
  ui = {
    test: Mh("hsl", "hue"),
    parse: PS("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      rr.transform(Ro(t)) +
      ", " +
      rr.transform(Ro(r)) +
      ", " +
      Ro(Ao.transform(n)) +
      ")",
  },
  Oe = {
    test: (e) => _n.test(e) || Ld.test(e) || ui.test(e),
    parse: (e) =>
      _n.test(e) ? _n.parse(e) : ui.test(e) ? ui.parse(e) : Ld.parse(e),
    transform: (e) =>
      xa(e) ? e : e.hasOwnProperty("red") ? _n.transform(e) : ui.transform(e),
  };
function v3(e) {
  var t, r;
  return (
    isNaN(e) &&
    xa(e) &&
    (((t = e.match(Ch)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((r = e.match(gz)) === null || r === void 0 ? void 0 : r.length) || 0) >
      0
  );
}
const ES = "number",
  $S = "color",
  S3 = "var",
  b3 = "var(",
  Wy = "${}",
  x3 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ua(e) {
  const t = e.toString(),
    r = [],
    n = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const s = t
    .replace(
      x3,
      (l) => (
        Oe.test(l)
          ? (n.color.push(o), i.push($S), r.push(Oe.parse(l)))
          : l.startsWith(b3)
          ? (n.var.push(o), i.push(S3), r.push(l))
          : (n.number.push(o), i.push(ES), r.push(parseFloat(l))),
        ++o,
        Wy
      )
    )
    .split(Wy);
  return { values: r, split: s, indexes: n, types: i };
}
function AS(e) {
  return ua(e).values;
}
function RS(e) {
  const { split: t, types: r } = ua(e),
    n = t.length;
  return (i) => {
    let o = "";
    for (let a = 0; a < n; a++)
      if (((o += t[a]), i[a] !== void 0)) {
        const s = r[a];
        s === ES
          ? (o += Ro(i[a]))
          : s === $S
          ? (o += Oe.transform(i[a]))
          : (o += i[a]);
      }
    return o;
  };
}
const w3 = (e) => (typeof e == "number" ? 0 : e);
function k3(e) {
  const t = AS(e);
  return RS(e)(t.map(w3));
}
const tn = {
    test: v3,
    parse: AS,
    createTransformer: RS,
    getAnimatableNone: k3,
  },
  C3 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function _3(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [n] = r.match(Ch) || [];
  if (!n) return e;
  const i = r.replace(n, "");
  let o = C3.has(t) ? 1 : 0;
  return n !== r && (o *= 100), t + "(" + o + i + ")";
}
const T3 = /\b([a-z-]*)\(.*?\)/gu,
  Id = {
    ...tn,
    getAnimatableNone: (e) => {
      const t = e.match(T3);
      return t ? t.map(_3).join(" ") : e;
    },
  },
  P3 = {
    ...iS,
    color: Oe,
    backgroundColor: Oe,
    outlineColor: Oe,
    fill: Oe,
    stroke: Oe,
    borderColor: Oe,
    borderTopColor: Oe,
    borderRightColor: Oe,
    borderBottomColor: Oe,
    borderLeftColor: Oe,
    filter: Id,
    WebkitFilter: Id,
  },
  Fh = (e) => P3[e];
function zS(e, t) {
  let r = Fh(e);
  return (
    r !== Id && (r = tn), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
  );
}
const E3 = new Set(["auto", "none", "0"]);
function $3(e, t, r) {
  let n = 0,
    i;
  for (; n < e.length && !i; ) {
    const o = e[n];
    typeof o == "string" && !E3.has(o) && ua(o).values.length && (i = e[n]),
      n++;
  }
  if (i && r) for (const o of t) e[o] = zS(r, i);
}
class MS extends zh {
  constructor(t, r, n, i) {
    super(t, r, n, i, i == null ? void 0 : i.owner, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: r, name: n } = this;
    if (!r.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), kh(u))) {
        const c = wS(u, r.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !c3.has(n) || t.length !== 2)) return;
    const [i, o] = t,
      a = Ny(i),
      s = Ny(o);
    if (a !== s)
      if (Iy(a) && Iy(s))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: r } = this,
      n = [];
    for (let i = 0; i < t.length; i++) s3(t[i]) && n.push(i);
    n.length && $3(t, n, r);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: r, name: n } = this;
    if (!t.current) return;
    n === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Mi[n](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (r[0] = this.measuredOrigin);
    const i = r[r.length - 1];
    i !== void 0 && t.getValue(n, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: r, name: n, unresolvedKeyframes: i } = this;
    if (!r.current) return;
    const o = r.getValue(n);
    o && o.jump(this.measuredOrigin, !1);
    const a = i.length - 1,
      s = i[a];
    (i[a] = Mi[n](r.measureViewportBox(), window.getComputedStyle(r.current))),
      s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          r.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function FS(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Uy = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (tn.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function A3(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let r = 0; r < e.length; r++) if (e[r] !== t) return !0;
}
function R3(e, t, r, n) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const o = e[e.length - 1],
    a = Uy(i, t),
    s = Uy(o, t);
  return !a || !s ? !1 : A3(e) || (r === "spring" && n);
}
class DS {
  constructor({
    autoplay: t = !0,
    delay: r = 0,
    type: n = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: a = "loop",
    ...s
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.options = {
        autoplay: t,
        delay: r,
        type: n,
        repeat: i,
        repeatDelay: o,
        repeatType: a,
        ...s,
      }),
      this.updateFinishedPromise();
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && m3(), this._resolved;
  }
  onKeyframesResolved(t, r) {
    this.hasAttemptedResolve = !0;
    const {
      name: n,
      type: i,
      velocity: o,
      delay: a,
      onComplete: s,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !R3(t, n, i, o))
      if (a) this.options.duration = 0;
      else {
        l == null || l(uu(t, this.options, r)),
          s == null || s(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, r);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: r, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, r) {
    return this.currentFinishedPromise.then(t, r);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function BS(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const z3 = 5;
function jS(e, t, r) {
  const n = Math.max(t - z3, 0);
  return BS(r - e(n), t - n);
}
const vc = 0.001,
  M3 = 0.01,
  F3 = 10,
  D3 = 0.05,
  B3 = 1;
function j3({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: r = 0,
  mass: n = 1,
}) {
  let i,
    o,
    a = 1 - t;
  (a = en(D3, B3, a)),
    (e = en(M3, F3, Sr(e))),
    a < 1
      ? ((i = (u) => {
          const c = u * a,
            d = c * e,
            f = c - r,
            y = Vd(u, a),
            S = Math.exp(-d);
          return vc - (f / y) * S;
        }),
        (o = (u) => {
          const d = u * a * e,
            f = d * r + r,
            y = Math.pow(a, 2) * Math.pow(u, 2) * e,
            S = Math.exp(-d),
            v = Vd(Math.pow(u, 2), a);
          return ((-i(u) + vc > 0 ? -1 : 1) * ((f - y) * S)) / v;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - r) * e + 1;
          return -vc + c * d;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            d = (r - u) * (e * e);
          return c * d;
        }));
  const s = 5 / e,
    l = I3(i, o, s);
  if (((e = qr(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * n;
    return { stiffness: u, damping: a * 2 * Math.sqrt(n * u), duration: e };
  }
}
const L3 = 12;
function I3(e, t, r) {
  let n = r;
  for (let i = 1; i < L3; i++) n = n - e(n) / t(n);
  return n;
}
function Vd(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const V3 = ["duration", "bounce"],
  O3 = ["stiffness", "damping", "mass"];
function Hy(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function N3(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Hy(e, O3) && Hy(e, V3)) {
    const r = j3(e);
    (t = { ...t, ...r, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function LS({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const i = e[0],
    o = e[e.length - 1],
    a = { done: !1, value: i },
    {
      stiffness: s,
      damping: l,
      mass: u,
      duration: c,
      velocity: d,
      isResolvedFromDuration: f,
    } = N3({ ...n, velocity: -Sr(n.velocity || 0) }),
    y = d || 0,
    S = l / (2 * Math.sqrt(s * u)),
    v = o - i,
    w = Sr(Math.sqrt(s / u)),
    p = Math.abs(v) < 5;
  r || (r = p ? 0.01 : 2), t || (t = p ? 0.005 : 0.5);
  let h;
  if (S < 1) {
    const m = Vd(w, S);
    h = (C) => {
      const P = Math.exp(-S * w * C);
      return (
        o - P * (((y + S * w * v) / m) * Math.sin(m * C) + v * Math.cos(m * C))
      );
    };
  } else if (S === 1) h = (m) => o - Math.exp(-w * m) * (v + (y + w * v) * m);
  else {
    const m = w * Math.sqrt(S * S - 1);
    h = (C) => {
      const P = Math.exp(-S * w * C),
        A = Math.min(m * C, 300);
      return (
        o - (P * ((y + S * w * v) * Math.sinh(A) + m * v * Math.cosh(A))) / m
      );
    };
  }
  return {
    calculatedDuration: (f && c) || null,
    next: (m) => {
      const C = h(m);
      if (f) a.done = m >= c;
      else {
        let P = y;
        m !== 0 && (S < 1 ? (P = jS(h, m, C)) : (P = 0));
        const A = Math.abs(P) <= r,
          E = Math.abs(o - C) <= t;
        a.done = A && E;
      }
      return (a.value = a.done ? o : C), a;
    },
  };
}
function Ky({
  keyframes: e,
  velocity: t = 0,
  power: r = 0.8,
  timeConstant: n = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: a,
  min: s,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    y = ($) => (s !== void 0 && $ < s) || (l !== void 0 && $ > l),
    S = ($) =>
      s === void 0
        ? l
        : l === void 0 || Math.abs(s - $) < Math.abs(l - $)
        ? s
        : l;
  let v = r * t;
  const w = d + v,
    p = a === void 0 ? w : a(w);
  p !== w && (v = p - d);
  const h = ($) => -v * Math.exp(-$ / n),
    m = ($) => p + h($),
    C = ($) => {
      const L = h($),
        D = m($);
      (f.done = Math.abs(L) <= u), (f.value = f.done ? p : D);
    };
  let P, A;
  const E = ($) => {
    y(f.value) &&
      ((P = $),
      (A = LS({
        keyframes: [f.value, S(f.value)],
        velocity: jS(m, $, f.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    E(0),
    {
      calculatedDuration: null,
      next: ($) => {
        let L = !1;
        return (
          !A && P === void 0 && ((L = !0), C($), E($)),
          P !== void 0 && $ >= P ? A.next($ - P) : (!L && C($), f)
        );
      },
    }
  );
}
const IS = (e, t, r) =>
    (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
  W3 = 1e-7,
  U3 = 12;
function H3(e, t, r, n, i) {
  let o,
    a,
    s = 0;
  do (a = t + (r - t) / 2), (o = IS(a, n, i) - e), o > 0 ? (r = a) : (t = a);
  while (Math.abs(o) > W3 && ++s < U3);
  return a;
}
function ka(e, t, r, n) {
  if (e === t && r === n) return Ue;
  const i = (o) => H3(o, 0, 1, e, r);
  return (o) => (o === 0 || o === 1 ? o : IS(i(o), t, n));
}
const K3 = ka(0.42, 0, 1, 1),
  G3 = ka(0, 0, 0.58, 1),
  VS = ka(0.42, 0, 0.58, 1),
  Y3 = (e) => Array.isArray(e) && typeof e[0] != "number",
  OS = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  NS = (e) => (t) => 1 - e(1 - t),
  Dh = (e) => 1 - Math.sin(Math.acos(e)),
  WS = NS(Dh),
  X3 = OS(Dh),
  US = ka(0.33, 1.53, 0.69, 0.99),
  Bh = NS(US),
  q3 = OS(Bh),
  Q3 = (e) =>
    (e *= 2) < 1 ? 0.5 * Bh(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Gy = {
    linear: Ue,
    easeIn: K3,
    easeInOut: VS,
    easeOut: G3,
    circIn: Dh,
    circInOut: X3,
    circOut: WS,
    backIn: Bh,
    backInOut: q3,
    backOut: US,
    anticipate: Q3,
  },
  Yy = (e) => {
    if (Array.isArray(e)) {
      Dd(e.length === 4);
      const [t, r, n, i] = e;
      return ka(t, r, n, i);
    } else if (typeof e == "string") return Dd(Gy[e] !== void 0), Gy[e];
    return e;
  },
  ca = (e, t, r) => {
    const n = t - e;
    return n === 0 ? 1 : (r - e) / n;
  },
  he = (e, t, r) => e + (t - e) * r;
function Sc(e, t, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6
      ? e + (t - e) * 6 * r
      : r < 1 / 2
      ? t
      : r < 2 / 3
      ? e + (t - e) * (2 / 3 - r) * 6
      : e
  );
}
function Z3({ hue: e, saturation: t, lightness: r, alpha: n }) {
  (e /= 360), (t /= 100), (r /= 100);
  let i = 0,
    o = 0,
    a = 0;
  if (!t) i = o = a = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t,
      l = 2 * r - s;
    (i = Sc(l, s, e + 1 / 3)), (o = Sc(l, s, e)), (a = Sc(l, s, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(a * 255),
    alpha: n,
  };
}
const bc = (e, t, r) => {
    const n = e * e,
      i = r * (t * t - n) + n;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  J3 = [Ld, _n, ui],
  e4 = (e) => J3.find((t) => t.test(e));
function Xy(e) {
  const t = e4(e);
  let r = t.parse(e);
  return t === ui && (r = Z3(r)), r;
}
const qy = (e, t) => {
    const r = Xy(e),
      n = Xy(t),
      i = { ...r };
    return (o) => (
      (i.red = bc(r.red, n.red, o)),
      (i.green = bc(r.green, n.green, o)),
      (i.blue = bc(r.blue, n.blue, o)),
      (i.alpha = he(r.alpha, n.alpha, o)),
      _n.transform(i)
    );
  },
  Od = new Set(["none", "hidden"]);
function t4(e, t) {
  return Od.has(e) ? (r) => (r <= 0 ? e : t) : (r) => (r >= 1 ? t : e);
}
function Nd(e, t) {
  return (r) => (r > 0 ? t : e);
}
function r4(e, t) {
  return (r) => he(e, t, r);
}
function jh(e) {
  return typeof e == "number"
    ? r4
    : typeof e == "string"
    ? kh(e)
      ? Nd
      : Oe.test(e)
      ? qy
      : o4
    : Array.isArray(e)
    ? HS
    : typeof e == "object"
    ? Oe.test(e)
      ? qy
      : n4
    : Nd;
}
function HS(e, t) {
  const r = [...e],
    n = r.length,
    i = e.map((o, a) => jh(o)(o, t[a]));
  return (o) => {
    for (let a = 0; a < n; a++) r[a] = i[a](o);
    return r;
  };
}
function n4(e, t) {
  const r = { ...e, ...t },
    n = {};
  for (const i in r)
    e[i] !== void 0 && t[i] !== void 0 && (n[i] = jh(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in n) r[o] = n[o](i);
    return r;
  };
}
function i4(e, t) {
  var r;
  const n = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const a = t.types[o],
      s = e.indexes[a][i[a]],
      l = (r = e.values[s]) !== null && r !== void 0 ? r : 0;
    (n[o] = l), i[a]++;
  }
  return n;
}
const o4 = (e, t) => {
  const r = tn.createTransformer(t),
    n = ua(e),
    i = ua(t);
  return n.indexes.var.length === i.indexes.var.length &&
    n.indexes.color.length === i.indexes.color.length &&
    n.indexes.number.length >= i.indexes.number.length
    ? (Od.has(e) && !i.values.length) || (Od.has(t) && !n.values.length)
      ? t4(e, t)
      : vr(HS(i4(n, i), i.values), r)
    : Nd(e, t);
};
function KS(e, t, r) {
  return typeof e == "number" && typeof t == "number" && typeof r == "number"
    ? he(e, t, r)
    : jh(e)(e, t);
}
function a4(e, t, r) {
  const n = [],
    i = r || KS,
    o = e.length - 1;
  for (let a = 0; a < o; a++) {
    let s = i(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || Ue : t;
      s = vr(l, s);
    }
    n.push(s);
  }
  return n;
}
function s4(e, t, { clamp: r = !0, ease: n, mixer: i } = {}) {
  const o = e.length;
  if ((Dd(o === t.length), o === 1)) return () => t[0];
  if (o === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = a4(t, n, i),
    s = a.length,
    l = (u) => {
      let c = 0;
      if (s > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = ca(e[c], e[c + 1], u);
      return a[c](d);
    };
  return r ? (u) => l(en(e[0], e[o - 1], u)) : l;
}
function l4(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const i = ca(0, t, n);
    e.push(he(r, 1, i));
  }
}
function u4(e) {
  const t = [0];
  return l4(t, e.length - 1), t;
}
function c4(e, t) {
  return e.map((r) => r * t);
}
function d4(e, t) {
  return e.map(() => t || VS).splice(0, e.length - 1);
}
function vl({
  duration: e = 300,
  keyframes: t,
  times: r,
  ease: n = "easeInOut",
}) {
  const i = Y3(n) ? n.map(Yy) : Yy(n),
    o = { done: !1, value: t[0] },
    a = c4(r && r.length === t.length ? r : u4(t), e),
    s = s4(a, t, { ease: Array.isArray(i) ? i : d4(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = s(l)), (o.done = l >= e), o),
  };
}
const Qy = 2e4;
function f4(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < Qy; ) (t += r), (n = e.next(t));
  return t >= Qy ? 1 / 0 : t;
}
const h4 = (e) => {
    const t = ({ timestamp: r }) => e(r);
    return {
      start: () => J.update(t, !0),
      stop: () => _r(t),
      now: () => (Fe.isProcessing ? Fe.timestamp : Qr.now()),
    };
  },
  p4 = { decay: Ky, inertia: Ky, tween: vl, keyframes: vl, spring: LS },
  m4 = (e) => e / 100;
class Lh extends DS {
  constructor({ KeyframeResolver: t = zh, ...r }) {
    super(r),
      (this.holdTime = null),
      (this.startTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: s } = this.options;
        s && s();
      });
    const { name: n, motionValue: i, keyframes: o } = this.options,
      a = (s, l) => this.onKeyframesResolved(s, l);
    n && i && i.owner
      ? (this.resolver = i.owner.resolveKeyframes(o, a, n, i))
      : (this.resolver = new t(o, a, n, i)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: r = "keyframes",
        repeat: n = 0,
        repeatDelay: i = 0,
        repeatType: o,
        velocity: a = 0,
      } = this.options,
      s = p4[r] || vl;
    let l, u;
    s !== vl &&
      typeof t[0] != "number" &&
      ((l = vr(m4, KS(t[0], t[1]))), (t = [0, 100]));
    const c = s({ ...this.options, keyframes: t });
    o === "mirror" &&
      (u = s({ ...this.options, keyframes: [...t].reverse(), velocity: -a })),
      c.calculatedDuration === null && (c.calculatedDuration = f4(c));
    const { calculatedDuration: d } = c,
      f = d + i,
      y = f * (n + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: y,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, r = !1) {
    const { resolved: n } = this;
    if (!n) {
      const { keyframes: $ } = this.options;
      return { done: !0, value: $[$.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: o,
      mirroredGenerator: a,
      mapPercentToKeyframes: s,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: d,
    } = n;
    if (this.startTime === null) return o.next(0);
    const {
      delay: f,
      repeat: y,
      repeatType: S,
      repeatDelay: v,
      onUpdate: w,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      r
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const p = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? p < 0 : p > c;
    (this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let m = this.currentTime,
      C = o;
    if (y) {
      const $ = Math.min(this.currentTime, c) / d;
      let L = Math.floor($),
        D = $ % 1;
      !D && $ >= 1 && (D = 1),
        D === 1 && L--,
        (L = Math.min(L, y + 1)),
        !!(L % 2) &&
          (S === "reverse"
            ? ((D = 1 - D), v && (D -= v / d))
            : S === "mirror" && (C = a)),
        (m = en(0, 1, D) * d);
    }
    const P = h ? { done: !1, value: l[0] } : C.next(m);
    s && (P.value = s(P.value));
    let { done: A } = P;
    !h &&
      u !== null &&
      (A = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const E =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && A));
    return (
      E && i !== void 0 && (P.value = uu(l, this.options, i)),
      w && w(P.value),
      E && this.finish(),
      P
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Sr(t.calculatedDuration) : 0;
  }
  get time() {
    return Sr(this.currentTime);
  }
  set time(t) {
    (t = qr(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const r = this.playbackSpeed !== t;
    (this.playbackSpeed = t), r && (this.time = Sr(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = h4, onPlay: r } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), r && r();
    const n = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = n - this.holdTime)
      : (!this.startTime || this.state === "finished") && (this.startTime = n),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const GS = (e) => Array.isArray(e) && typeof e[0] == "number";
function YS(e) {
  return !!(
    !e ||
    (typeof e == "string" && e in Ih) ||
    GS(e) ||
    (Array.isArray(e) && e.every(YS))
  );
}
const po = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
  Ih = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: po([0, 0.65, 0.55, 1]),
    circOut: po([0.55, 0, 1, 0.45]),
    backIn: po([0.31, 0.01, 0.66, -0.59]),
    backOut: po([0.33, 1.53, 0.69, 0.99]),
  };
function y4(e) {
  return XS(e) || Ih.easeOut;
}
function XS(e) {
  if (e) return GS(e) ? po(e) : Array.isArray(e) ? e.map(y4) : Ih[e];
}
function g4(
  e,
  t,
  r,
  {
    delay: n = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: a = "loop",
    ease: s,
    times: l,
  } = {}
) {
  const u = { [t]: r };
  l && (u.offset = l);
  const c = XS(s);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: n,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: a === "reverse" ? "alternate" : "normal",
    })
  );
}
const v4 = FS(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  S4 = new Set(["opacity", "clipPath", "filter", "transform"]),
  Sl = 10,
  b4 = 2e4;
function x4(e) {
  return e.type === "spring" || e.name === "backgroundColor" || !YS(e.ease);
}
function w4(e, t) {
  const r = new Lh({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let n = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !n.done && o < b4; ) (n = r.sample(o)), i.push(n.value), (o += Sl);
  return { times: void 0, keyframes: i, duration: o - Sl, ease: "linear" };
}
class Zy extends DS {
  constructor(t) {
    super(t);
    const { name: r, motionValue: n, keyframes: i } = this.options;
    (this.resolver = new MS(i, (o, a) => this.onKeyframesResolved(o, a), r, n)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, r) {
    var n;
    let {
      duration: i = 300,
      times: o,
      ease: a,
      type: s,
      motionValue: l,
      name: u,
    } = this.options;
    if (!(!((n = l.owner) === null || n === void 0) && n.current)) return !1;
    if (x4(this.options)) {
      const { onComplete: d, onUpdate: f, motionValue: y, ...S } = this.options,
        v = w4(t, S);
      (t = v.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = v.duration),
        (o = v.times),
        (a = v.ease),
        (s = "keyframes");
    }
    const c = g4(l.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: o,
      ease: a,
    });
    return (
      (c.startTime = Qr.now()),
      this.pendingTimeline
        ? ((c.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (c.onfinish = () => {
            const { onComplete: d } = this.options;
            l.set(uu(t, this.options, r)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: c, duration: i, times: o, type: s, ease: a, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: r } = t;
    return Sr(r);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: r } = t;
    return Sr(r.currentTime || 0);
  }
  set time(t) {
    const { resolved: r } = this;
    if (!r) return;
    const { animation: n } = r;
    n.currentTime = qr(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: r } = t;
    return r.playbackRate;
  }
  set speed(t) {
    const { resolved: r } = this;
    if (!r) return;
    const { animation: n } = r;
    n.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: r } = t;
    return r.playState;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: r } = this;
      if (!r) return Ue;
      const { animation: n } = r;
      (n.timeline = t), (n.onfinish = null);
    }
    return Ue;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: r } = t;
    r.playState === "finished" && this.updateFinishedPromise(), r.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: r } = t;
    r.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: r,
      keyframes: n,
      duration: i,
      type: o,
      ease: a,
      times: s,
    } = t;
    if (!(r.playState === "idle" || r.playState === "finished")) {
      if (this.time) {
        const {
            motionValue: l,
            onUpdate: u,
            onComplete: c,
            ...d
          } = this.options,
          f = new Lh({
            ...d,
            keyframes: n,
            duration: i,
            type: o,
            ease: a,
            times: s,
            isGenerator: !0,
          }),
          y = qr(this.time);
        l.setWithVelocity(f.sample(y - Sl).value, f.sample(y).value, Sl);
      }
      this.cancel();
    }
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: r,
      name: n,
      repeatDelay: i,
      repeatType: o,
      damping: a,
      type: s,
    } = t;
    return (
      v4() &&
      n &&
      S4.has(n) &&
      r &&
      r.owner &&
      r.owner.current instanceof HTMLElement &&
      !r.owner.getProps().onUpdate &&
      !i &&
      o !== "mirror" &&
      a !== 0 &&
      s !== "inertia"
    );
  }
}
function k4(e, t) {
  let r;
  const n = () => {
    const { currentTime: i } = t,
      a = (i === null ? 0 : i.value) / 100;
    r !== a && e(a), (r = a);
  };
  return J.update(n, !0), () => _r(n);
}
const C4 = FS(() => window.ScrollTimeline !== void 0);
class _4 {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  then(t, r) {
    return Promise.all(this.animations).then(t).catch(r);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, r) {
    for (let n = 0; n < this.animations.length; n++) this.animations[n][t] = r;
  }
  attachTimeline(t) {
    const r = this.animations.map((n) => {
      if (C4() && n.attachTimeline) n.attachTimeline(t);
      else
        return (
          n.pause(),
          k4((i) => {
            n.time = n.duration * i;
          }, t)
        );
    });
    return () => {
      r.forEach((n, i) => {
        n && n(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get duration() {
    let t = 0;
    for (let r = 0; r < this.animations.length; r++)
      t = Math.max(t, this.animations[r].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((r) => r[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
const Vh =
  (e, t, r, n = {}, i, o) =>
  (a) => {
    const s = Rh(n, e) || {},
      l = s.delay || n.delay || 0;
    let { elapsed: u = 0 } = n;
    u = u - qr(l);
    let c = {
      keyframes: Array.isArray(r) ? r : [null, r],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...s,
      delay: -u,
      onUpdate: (f) => {
        t.set(f), s.onUpdate && s.onUpdate(f);
      },
      onComplete: () => {
        a(), s.onComplete && s.onComplete();
      },
      name: e,
      motionValue: t,
      element: o ? void 0 : i,
    };
    i3(s) || (c = { ...c, ...n3(e, c) }),
      c.duration && (c.duration = qr(c.duration)),
      c.repeatDelay && (c.repeatDelay = qr(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        ((c.duration = 0), c.delay === 0 && (d = !0)),
      d && !o && t.get() !== void 0)
    ) {
      const f = uu(c.keyframes, s);
      if (f !== void 0)
        return (
          J.update(() => {
            c.onUpdate(f), c.onComplete();
          }),
          new _4([])
        );
    }
    return !o && Zy.supports(c) ? new Zy(c) : new Lh(c);
  };
function bl(e) {
  return !!(We(e) && e.add);
}
function Oh(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Nh(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class Wh {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Oh(this.subscriptions, t), () => Nh(this.subscriptions, t);
  }
  notify(t, r, n) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, r, n);
      else
        for (let o = 0; o < i; o++) {
          const a = this.subscriptions[o];
          a && a(t, r, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Jy = 30,
  T4 = (e) => !isNaN(parseFloat(e));
class P4 {
  constructor(t, r = {}) {
    (this.version = "11.2.9"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (n, i = !0) => {
        const o = Qr.now();
        this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(n),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = r.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Qr.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = T4(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new Wh());
    const n = this.events[t].add(r);
    return t === "change"
      ? () => {
          n(),
            J.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : n;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, r) {
    (this.passiveEffect = t), (this.stopPassiveEffect = r);
  }
  set(t, r = !0) {
    !r || !this.passiveEffect
      ? this.updateAndNotify(t, r)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, r, n) {
    this.set(r),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - n);
  }
  jump(t, r = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      r && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Qr.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Jy
    )
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, Jy);
    return BS(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((r) => {
        (this.hasAnimated = !0),
          (this.animation = t(r)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function da(e, t) {
  return new P4(e, t);
}
function E4(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, da(r));
}
function $4(e, t) {
  const r = lu(e, t);
  let { transitionEnd: n = {}, transition: i = {}, ...o } = r || {};
  o = { ...o, ...n };
  for (const a in o) {
    const s = Fz(o[a]);
    E4(e, a, s);
  }
}
function qS(e) {
  return e.getProps()[Q1];
}
function A4({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return (t[r] = !1), n;
}
function QS(e, t, { delay: r = 0, transitionOverride: n, type: i } = {}) {
  var o;
  let { transition: a = e.getDefaultTransition(), transitionEnd: s, ...l } = t;
  const u = e.getValue("willChange");
  n && (a = n);
  const c = [],
    d = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const y = e.getValue(
        f,
        (o = e.latestValues[f]) !== null && o !== void 0 ? o : null
      ),
      S = l[f];
    if (S === void 0 || (d && A4(d, f))) continue;
    const v = { delay: r, elapsed: 0, ...Rh(a || {}, f) };
    let w = !1;
    if (window.HandoffAppearAnimations) {
      const h = qS(e);
      if (h) {
        const m = window.HandoffAppearAnimations(h, f, y, J);
        m !== null && ((v.elapsed = m), (w = !0));
      }
    }
    y.start(
      Vh(f, y, S, e.shouldReduceMotion && In.has(f) ? { type: !1 } : v, e, w)
    );
    const p = y.animation;
    p && (bl(u) && (u.add(f), p.then(() => u.remove(f))), c.push(p));
  }
  return (
    s &&
      Promise.all(c).then(() => {
        J.update(() => {
          s && $4(e, s);
        });
      }),
    c
  );
}
function Wd(e, t, r = {}) {
  var n;
  const i = lu(
    e,
    t,
    r.type === "exit"
      ? (n = e.presenceContext) === null || n === void 0
        ? void 0
        : n.custom
      : void 0
  );
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  r.transitionOverride && (o = r.transitionOverride);
  const a = i ? () => Promise.all(QS(e, i, r)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = o;
            return R4(e, t, c + u, d, f, r);
          }
        : () => Promise.resolve(),
    { when: l } = o;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [a, s] : [s, a];
    return u().then(() => c());
  } else return Promise.all([a(), s(r.delay)]);
}
function R4(e, t, r = 0, n = 0, i = 1, o) {
  const a = [],
    s = (e.variantChildren.size - 1) * n,
    l = i === 1 ? (u = 0) => u * n : (u = 0) => s - u * n;
  return (
    Array.from(e.variantChildren)
      .sort(z4)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          a.push(
            Wd(u, t, { ...o, delay: r + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(a)
  );
}
function z4(e, t) {
  return e.sortNodePosition(t);
}
function M4(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const i = t.map((o) => Wd(e, o, r));
    n = Promise.all(i);
  } else if (typeof t == "string") n = Wd(e, t, r);
  else {
    const i = typeof t == "function" ? lu(e, t, r.custom) : t;
    n = Promise.all(QS(e, i, r));
  }
  return n.then(() => {
    J.postRender(() => {
      e.notify("AnimationComplete", t);
    });
  });
}
const F4 = [...Sh].reverse(),
  D4 = Sh.length;
function B4(e) {
  return (t) =>
    Promise.all(t.map(({ animation: r, options: n }) => M4(e, r, n)));
}
function j4(e) {
  let t = B4(e);
  const r = I4();
  let n = !0;
  const i = (l) => (u, c) => {
    var d;
    const f = lu(
      e,
      c,
      l === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (f) {
      const { transition: y, transitionEnd: S, ...v } = f;
      u = { ...u, ...v, ...S };
    }
    return u;
  };
  function o(l) {
    t = l(e);
  }
  function a(l) {
    const u = e.getProps(),
      c = e.getVariantContext(!0) || {},
      d = [],
      f = new Set();
    let y = {},
      S = 1 / 0;
    for (let w = 0; w < D4; w++) {
      const p = F4[w],
        h = r[p],
        m = u[p] !== void 0 ? u[p] : c[p],
        C = sa(m),
        P = p === l ? h.isActive : null;
      P === !1 && (S = w);
      let A = m === c[p] && m !== u[p] && C;
      if (
        (A && n && e.manuallyAnimateOnMount && (A = !1),
        (h.protectedKeys = { ...y }),
        (!h.isActive && P === null) ||
          (!m && !h.prevProp) ||
          ou(m) ||
          typeof m == "boolean")
      )
        continue;
      let $ =
          L4(h.prevProp, m) ||
          (p === l && h.isActive && !A && C) ||
          (w > S && C),
        L = !1;
      const D = Array.isArray(m) ? m : [m];
      let be = D.reduce(i(p), {});
      P === !1 && (be = {});
      const { prevResolvedValues: Ot = {} } = h,
        nr = { ...Ot, ...be },
        ln = (_e) => {
          ($ = !0),
            f.has(_e) && ((L = !0), f.delete(_e)),
            (h.needsAnimating[_e] = !0);
          const Ke = e.getValue(_e);
          Ke && (Ke.liveStyle = !1);
        };
      for (const _e in nr) {
        const Ke = be[_e],
          ir = Ot[_e];
        if (y.hasOwnProperty(_e)) continue;
        let z = !1;
        Md(Ke) && Md(ir) ? (z = !SS(Ke, ir)) : (z = Ke !== ir),
          z
            ? Ke != null
              ? ln(_e)
              : f.add(_e)
            : Ke !== void 0 && f.has(_e)
            ? ln(_e)
            : (h.protectedKeys[_e] = !0);
      }
      (h.prevProp = m),
        (h.prevResolvedValues = be),
        h.isActive && (y = { ...y, ...be }),
        n && e.blockInitialAnimation && ($ = !1),
        $ &&
          (!A || L) &&
          d.push(...D.map((_e) => ({ animation: _e, options: { type: p } })));
    }
    if (f.size) {
      const w = {};
      f.forEach((p) => {
        const h = e.getBaseTarget(p),
          m = e.getValue(p);
        m && (m.liveStyle = !0), (w[p] = h ?? null);
      }),
        d.push({ animation: w });
    }
    let v = !!d.length;
    return (
      n &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (v = !1),
      (n = !1),
      v ? t(d) : Promise.resolve()
    );
  }
  function s(l, u) {
    var c;
    if (r[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((f) => {
        var y;
        return (y = f.animationState) === null || y === void 0
          ? void 0
          : y.setActive(l, u);
      }),
      (r[l].isActive = u);
    const d = a(l);
    for (const f in r) r[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: o,
    getState: () => r,
  };
}
function L4(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !SS(t, e) : !1;
}
function hn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function I4() {
  return {
    animate: hn(!0),
    whileInView: hn(),
    whileHover: hn(),
    whileTap: hn(),
    whileDrag: hn(),
    whileFocus: hn(),
    exit: hn(),
  };
}
class V4 extends sn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = j4(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), ou(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: r } = this.node.prevProps || {};
    t !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let O4 = 0;
class N4 extends sn {
  constructor() {
    super(...arguments), (this.id = O4++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: r } = this.node.presenceContext,
      { isPresent: n } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === n) return;
    const i = this.node.animationState.setActive("exit", !t);
    r && !t && i.then(() => r(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const W4 = { animation: { Feature: V4 }, exit: { Feature: N4 } },
  eg = (e, t) => Math.abs(e - t);
function U4(e, t) {
  const r = eg(e.x, t.x),
    n = eg(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class ZS {
  constructor(
    t,
    r,
    { transformPagePoint: n, contextWindow: i, dragSnapToOrigin: o = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = wc(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          y = U4(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !y) return;
        const { point: S } = d,
          { timestamp: v } = Fe;
        this.history.push({ ...S, timestamp: v });
        const { onStart: w, onMove: p } = this.handlers;
        f ||
          (w && w(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = xc(f, this.transformPagePoint)),
          J.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: y, onSessionEnd: S, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const w = wc(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : xc(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && y && y(d, w), S && S(d, w);
      }),
      !pS(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = r),
      (this.transformPagePoint = n),
      (this.contextWindow = i || window);
    const a = su(t),
      s = xc(a, this.transformPagePoint),
      { point: l } = s,
      { timestamp: u } = Fe;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = r;
    c && c(t, wc(s, this.history)),
      (this.removeListeners = vr(
        gr(this.contextWindow, "pointermove", this.handlePointerMove),
        gr(this.contextWindow, "pointerup", this.handlePointerUp),
        gr(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), _r(this.updatePoint);
  }
}
function xc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function tg(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function wc({ point: e }, t) {
  return {
    point: e,
    delta: tg(e, JS(t)),
    offset: tg(e, H4(t)),
    velocity: K4(t, 0.1),
  };
}
function H4(e) {
  return e[0];
}
function JS(e) {
  return e[e.length - 1];
}
function K4(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let r = e.length - 1,
    n = null;
  const i = JS(e);
  for (; r >= 0 && ((n = e[r]), !(i.timestamp - n.timestamp > qr(t))); ) r--;
  if (!n) return { x: 0, y: 0 };
  const o = Sr(i.timestamp - n.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const a = { x: (i.x - n.x) / o, y: (i.y - n.y) / o };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function pt(e) {
  return e.max - e.min;
}
function Ud(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function rg(e, t, r, n = 0.5) {
  (e.origin = n),
    (e.originPoint = he(t.min, t.max, e.origin)),
    (e.scale = pt(r) / pt(t)),
    (Ud(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = he(r.min, r.max, e.origin) - e.originPoint),
    (Ud(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function zo(e, t, r, n) {
  rg(e.x, t.x, r.x, n ? n.originX : void 0),
    rg(e.y, t.y, r.y, n ? n.originY : void 0);
}
function ng(e, t, r) {
  (e.min = r.min + t.min), (e.max = e.min + pt(t));
}
function G4(e, t, r) {
  ng(e.x, t.x, r.x), ng(e.y, t.y, r.y);
}
function ig(e, t, r) {
  (e.min = t.min - r.min), (e.max = e.min + pt(t));
}
function Mo(e, t, r) {
  ig(e.x, t.x, r.x), ig(e.y, t.y, r.y);
}
function Y4(e, { min: t, max: r }, n) {
  return (
    t !== void 0 && e < t
      ? (e = n ? he(t, e, n.min) : Math.max(e, t))
      : r !== void 0 && e > r && (e = n ? he(r, e, n.max) : Math.min(e, r)),
    e
  );
}
function og(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0,
  };
}
function X4(e, { top: t, left: r, bottom: n, right: i }) {
  return { x: og(e.x, r, i), y: og(e.y, t, n) };
}
function ag(e, t) {
  let r = t.min - e.min,
    n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function q4(e, t) {
  return { x: ag(e.x, t.x), y: ag(e.y, t.y) };
}
function Q4(e, t) {
  let r = 0.5;
  const n = pt(e),
    i = pt(t);
  return (
    i > n
      ? (r = ca(t.min, t.max - n, e.min))
      : n > i && (r = ca(e.min, e.max - i, t.min)),
    en(0, 1, r)
  );
}
function Z4(e, t) {
  const r = {};
  return (
    t.min !== void 0 && (r.min = t.min - e.min),
    t.max !== void 0 && (r.max = t.max - e.min),
    r
  );
}
const Hd = 0.35;
function J4(e = Hd) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Hd),
    { x: sg(e, "left", "right"), y: sg(e, "top", "bottom") }
  );
}
function sg(e, t, r) {
  return { min: lg(e, t), max: lg(e, r) };
}
function lg(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const ug = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ci = () => ({ x: ug(), y: ug() }),
  cg = () => ({ min: 0, max: 0 }),
  ge = () => ({ x: cg(), y: cg() });
function xt(e) {
  return [e("x"), e("y")];
}
function eb({ top: e, left: t, right: r, bottom: n }) {
  return { x: { min: t, max: r }, y: { min: e, max: n } };
}
function eM({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function tM(e, t) {
  if (!t) return e;
  const r = t({ x: e.left, y: e.top }),
    n = t({ x: e.right, y: e.bottom });
  return { top: r.y, left: r.x, bottom: n.y, right: n.x };
}
function kc(e) {
  return e === void 0 || e === 1;
}
function Kd({ scale: e, scaleX: t, scaleY: r }) {
  return !kc(e) || !kc(t) || !kc(r);
}
function yn(e) {
  return (
    Kd(e) ||
    tb(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function tb(e) {
  return dg(e.x) || dg(e.y);
}
function dg(e) {
  return e && e !== "0%";
}
function xl(e, t, r) {
  const n = e - r,
    i = t * n;
  return r + i;
}
function fg(e, t, r, n, i) {
  return i !== void 0 && (e = xl(e, i, n)), xl(e, r, n) + t;
}
function Gd(e, t = 0, r = 1, n, i) {
  (e.min = fg(e.min, t, r, n, i)), (e.max = fg(e.max, t, r, n, i));
}
function rb(e, { x: t, y: r }) {
  Gd(e.x, t.translate, t.scale, t.originPoint),
    Gd(e.y, r.translate, r.scale, r.originPoint);
}
function rM(e, t, r, n = !1) {
  const i = r.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, a;
  for (let s = 0; s < i; s++) {
    (o = r[s]), (a = o.projectionDelta);
    const l = o.instance;
    (l && l.style && l.style.display === "contents") ||
      (n &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        di(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      a && ((t.x *= a.x.scale), (t.y *= a.y.scale), rb(e, a)),
      n && yn(o.latestValues) && di(e, o.latestValues));
  }
  (t.x = hg(t.x)), (t.y = hg(t.y));
}
function hg(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Dr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function pg(e, t, [r, n, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    a = he(e.min, e.max, o);
  Gd(e, t[r], t[n], a, t.scale);
}
const nM = ["x", "scaleX", "originX"],
  iM = ["y", "scaleY", "originY"];
function di(e, t) {
  pg(e.x, t, nM), pg(e.y, t, iM);
}
function nb(e, t) {
  return eb(tM(e.getBoundingClientRect(), t));
}
function oM(e, t, r) {
  const n = nb(e, r),
    { scroll: i } = t;
  return i && (Dr(n.x, i.offset.x), Dr(n.y, i.offset.y)), n;
}
const ib = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  aM = new WeakMap();
class sM {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ge()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          r && this.snapToCursor(su(c, "page").point);
      },
      o = (c, d) => {
        const { drag: f, dragPropagation: y, onDragStart: S } = this.getProps();
        if (
          f &&
          !y &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = yS(f)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          xt((w) => {
            let p = this.getAxisMotionValue(w).get() || 0;
            if (rr.test(p)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const m = h.layout.layoutBox[w];
                m && (p = pt(m) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[w] = p;
          }),
          S && J.postRender(() => S(c, d));
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      },
      a = (c, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: y,
          onDirectionLock: S,
          onDrag: v,
        } = this.getProps();
        if (!f && !this.openGlobalLock) return;
        const { offset: w } = d;
        if (y && this.currentDirection === null) {
          (this.currentDirection = lM(w)),
            this.currentDirection !== null && S && S(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, w),
          this.updateAxis("y", d.point, w),
          this.visualElement.render(),
          v && v(c, d);
      },
      s = (c, d) => this.stop(c, d),
      l = () =>
        xt((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new ZS(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: a,
        onSessionEnd: s,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: ib(this.visualElement),
      }
    );
  }
  stop(t, r) {
    const n = this.isDragging;
    if ((this.cancel(), !n)) return;
    const { velocity: i } = r;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && J.postRender(() => o(t, r));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: r } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: n } = this.getProps();
    !n &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      r && r.setActive("whileDrag", !1);
  }
  updateAxis(t, r, n) {
    const { drag: i } = this.getProps();
    if (!n || !ls(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + n[t];
    this.constraints &&
      this.constraints[t] &&
      (a = Y4(a, this.constraints[t], this.elastic[t])),
      o.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: r, dragElastic: n } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      o = this.constraints;
    r && li(r)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : r && i
      ? (this.constraints = X4(i.layoutBox, r))
      : (this.constraints = !1),
      (this.elastic = J4(n)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        xt((a) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(a) &&
            (this.constraints[a] = Z4(i.layoutBox[a], this.constraints[a]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !li(t)) return !1;
    const n = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = oM(n, i.root, this.visualElement.getTransformPagePoint());
    let a = q4(i.layout.layoutBox, o);
    if (r) {
      const s = r(eM(a));
      (this.hasMutatedConstraints = !!s), s && (a = eb(s));
    }
    return a;
  }
  startAnimation(t) {
    const {
        drag: r,
        dragMomentum: n,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: a,
        onDragTransitionEnd: s,
      } = this.getProps(),
      l = this.constraints || {},
      u = xt((c) => {
        if (!ls(c, r, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        a && (d = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          y = i ? 40 : 1e7,
          S = {
            type: "inertia",
            velocity: n ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: y,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...d,
          };
        return this.startAxisValueAnimation(c, S);
      });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, r) {
    const n = this.getAxisMotionValue(t);
    return n.start(Vh(t, n, 0, r, this.visualElement));
  }
  stopAnimation() {
    xt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    xt((t) => {
      var r;
      return (r = this.getAxisMotionValue(t).animation) === null || r === void 0
        ? void 0
        : r.pause();
    });
  }
  getAnimationState(t) {
    var r;
    return (r = this.getAxisMotionValue(t).animation) === null || r === void 0
      ? void 0
      : r.state;
  }
  getAxisMotionValue(t) {
    const r = `_drag${t.toUpperCase()}`,
      n = this.visualElement.getProps(),
      i = n[r];
    return (
      i ||
      this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    xt((r) => {
      const { drag: n } = this.getProps();
      if (!ls(r, n, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(r);
      if (i && i.layout) {
        const { min: a, max: s } = i.layout.layoutBox[r];
        o.set(t[r] - he(a, s, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: r } = this.getProps(),
      { projection: n } = this.visualElement;
    if (!li(r) || !n || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    xt((a) => {
      const s = this.getAxisMotionValue(a);
      if (s && this.constraints !== !1) {
        const l = s.get();
        i[a] = Q4({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      n.root && n.root.updateScroll(),
      n.updateLayout(),
      this.resolveConstraints(),
      xt((a) => {
        if (!ls(a, t, null)) return;
        const s = this.getAxisMotionValue(a),
          { min: l, max: u } = this.constraints[a];
        s.set(he(l, u, i[a]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    aM.set(this.visualElement, this);
    const t = this.visualElement.current,
      r = gr(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      n = () => {
        const { dragConstraints: l } = this.getProps();
        li(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", n);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), n();
    const a = pr(window, "resize", () => this.scalePositionWithinConstraints()),
      s = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (xt((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      a(), r(), o(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: r = !1,
        dragDirectionLock: n = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: a = Hd,
        dragMomentum: s = !0,
      } = t;
    return {
      ...t,
      drag: r,
      dragDirectionLock: n,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: a,
      dragMomentum: s,
    };
  }
}
function ls(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function lM(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? (r = "y") : Math.abs(e.x) > t && (r = "x"), r;
}
class uM extends sn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ue),
      (this.removeListeners = Ue),
      (this.controls = new sM(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ue);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const mg = (e) => (t, r) => {
  e && J.postRender(() => e(t, r));
};
class cM extends sn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ue);
  }
  onPointerDown(t) {
    this.session = new ZS(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: ib(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: r,
      onPan: n,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: mg(t),
      onStart: mg(r),
      onMove: n,
      onEnd: (o, a) => {
        delete this.session, i && J.postRender(() => i(o, a));
      },
    };
  }
  mount() {
    this.removePointerDownListener = gr(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function dM() {
  const e = k.useContext(Sa);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e,
    i = k.useId();
  return k.useEffect(() => n(i), []), !t && r ? [!1, () => r && r(i)] : [!0];
}
function fM() {
  return hM(k.useContext(Sa));
}
function hM(e) {
  return e === null ? !0 : e.isPresent;
}
const Bs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function yg(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const no = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (I.test(e)) e = parseFloat(e);
        else return e;
      const r = yg(e, t.target.x),
        n = yg(e, t.target.y);
      return `${r}% ${n}%`;
    },
  },
  pM = {
    correct: (e, { treeScale: t, projectionDelta: r }) => {
      const n = e,
        i = tn.parse(e);
      if (i.length > 5) return n;
      const o = tn.createTransformer(e),
        a = typeof i[0] != "number" ? 1 : 0,
        s = r.x.scale * t.x,
        l = r.y.scale * t.y;
      (i[0 + a] /= s), (i[1 + a] /= l);
      const u = he(s, l, 0.5);
      return (
        typeof i[2 + a] == "number" && (i[2 + a] /= u),
        typeof i[3 + a] == "number" && (i[3 + a] /= u),
        o(i)
      );
    },
  };
class mM extends k.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: n,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    cz(yM),
      o &&
        (r.group && r.group.add(o),
        n && n.register && i && n.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Bs.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: r,
        visualElement: n,
        drag: i,
        isPresent: o,
      } = this.props,
      a = n.projection;
    return (
      a &&
        ((a.isPresent = o),
        i || t.layoutDependency !== r || r === void 0
          ? a.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? a.promote()
            : a.relegate() ||
              J.postRender(() => {
                const s = a.getStack();
                (!s || !s.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      vh.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: n,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      r && r.group && r.group.remove(i),
      n && n.deregister && n.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function ob(e) {
  const [t, r] = dM(),
    n = k.useContext(xh);
  return _.jsx(mM, {
    ...e,
    layoutGroup: n,
    switchLayoutGroup: k.useContext(eS),
    isPresent: t,
    safeToRemove: r,
  });
}
const yM = {
    borderRadius: {
      ...no,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: no,
    borderTopRightRadius: no,
    borderBottomLeftRadius: no,
    borderBottomRightRadius: no,
    boxShadow: pM,
  },
  ab = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  gM = ab.length,
  gg = (e) => (typeof e == "string" ? parseFloat(e) : e),
  vg = (e) => typeof e == "number" || I.test(e);
function vM(e, t, r, n, i, o) {
  i
    ? ((e.opacity = he(0, r.opacity !== void 0 ? r.opacity : 1, SM(n))),
      (e.opacityExit = he(t.opacity !== void 0 ? t.opacity : 1, 0, bM(n))))
    : o &&
      (e.opacity = he(
        t.opacity !== void 0 ? t.opacity : 1,
        r.opacity !== void 0 ? r.opacity : 1,
        n
      ));
  for (let a = 0; a < gM; a++) {
    const s = `border${ab[a]}Radius`;
    let l = Sg(t, s),
      u = Sg(r, s);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || vg(l) === vg(u)
        ? ((e[s] = Math.max(he(gg(l), gg(u), n), 0)),
          (rr.test(u) || rr.test(l)) && (e[s] += "%"))
        : (e[s] = u);
  }
  (t.rotate || r.rotate) && (e.rotate = he(t.rotate || 0, r.rotate || 0, n));
}
function Sg(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const SM = sb(0, 0.5, WS),
  bM = sb(0.5, 0.95, Ue);
function sb(e, t, r) {
  return (n) => (n < e ? 0 : n > t ? 1 : r(ca(e, t, n)));
}
function bg(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function St(e, t) {
  bg(e.x, t.x), bg(e.y, t.y);
}
function xg(e, t, r, n, i) {
  return (
    (e -= t), (e = xl(e, 1 / r, n)), i !== void 0 && (e = xl(e, 1 / i, n)), e
  );
}
function xM(e, t = 0, r = 1, n = 0.5, i, o = e, a = e) {
  if (
    (rr.test(t) &&
      ((t = parseFloat(t)), (t = he(a.min, a.max, t / 100) - a.min)),
    typeof t != "number")
  )
    return;
  let s = he(o.min, o.max, n);
  e === o && (s -= t),
    (e.min = xg(e.min, t, r, s, i)),
    (e.max = xg(e.max, t, r, s, i));
}
function wg(e, t, [r, n, i], o, a) {
  xM(e, t[r], t[n], t[i], t.scale, o, a);
}
const wM = ["x", "scaleX", "originX"],
  kM = ["y", "scaleY", "originY"];
function kg(e, t, r, n) {
  wg(e.x, t, wM, r ? r.x : void 0, n ? n.x : void 0),
    wg(e.y, t, kM, r ? r.y : void 0, n ? n.y : void 0);
}
function Cg(e) {
  return e.translate === 0 && e.scale === 1;
}
function lb(e) {
  return Cg(e.x) && Cg(e.y);
}
function CM(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function ub(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function _g(e) {
  return pt(e.x) / pt(e.y);
}
class _M {
  constructor() {
    this.members = [];
  }
  add(t) {
    Oh(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Nh(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(t) {
    const r = this.members.findIndex((i) => t === i);
    if (r === 0) return !1;
    let n;
    for (let i = r; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        n = o;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(t, r) {
    const n = this.lead;
    if (t !== n && ((this.prevLead = n), (this.lead = t), t.show(), n)) {
      n.instance && n.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = n),
        r && (t.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((t.snapshot = n.snapshot),
          (t.snapshot.latestValues = n.animationValues || n.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: r, resumingFrom: n } = t;
      r.onExitComplete && r.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Tg(e, t, r) {
  let n = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    a = (r == null ? void 0 : r.z) || 0;
  if (
    ((i || o || a) && (n = `translate3d(${i}px, ${o}px, ${a}px) `),
    (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `),
    r)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: f,
      skewX: y,
      skewY: S,
    } = r;
    u && (n = `perspective(${u}px) ${n}`),
      c && (n += `rotate(${c}deg) `),
      d && (n += `rotateX(${d}deg) `),
      f && (n += `rotateY(${f}deg) `),
      y && (n += `skewX(${y}deg) `),
      S && (n += `skewY(${S}deg) `);
  }
  const s = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (s !== 1 || l !== 1) && (n += `scale(${s}, ${l})`), n || "none";
}
const TM = (e, t) => e.depth - t.depth;
class PM {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Oh(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Nh(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(TM),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function EM(e, t) {
  const r = Qr.now(),
    n = ({ timestamp: i }) => {
      const o = i - r;
      o >= t && (_r(n), e(o - t));
    };
  return J.read(n, !0), () => _r(n);
}
function $M(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function AM(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function RM(e, t, r) {
  const n = We(e) ? e : da(e);
  return n.start(Vh("", n, t, r)), n.animation;
}
const Cc = ["", "X", "Y", "Z"],
  zM = { visibility: "hidden" },
  Pg = 1e3;
let MM = 0;
const gn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function _c(e, t, r, n) {
  const { latestValues: i } = t;
  i[e] && ((r[e] = i[e]), t.setStaticValue(e, 0), n && (n[e] = 0));
}
function cb(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return !1;
  const { visualElement: t } = e.options;
  return t
    ? qS(t)
      ? !0
      : e.parent && !e.parent.hasCheckedOptimisedAppear
      ? cb(e.parent)
      : !1
    : !1;
}
function db({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: r,
  checkIsScrollRoot: n,
  resetTransform: i,
}) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      (this.id = MM++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (gn.totalNodes =
              gn.resolvedTargetDeltas =
              gn.recalculatedProjection =
                0),
            this.nodes.forEach(BM),
            this.nodes.forEach(OM),
            this.nodes.forEach(NM),
            this.nodes.forEach(jM),
            $M(gn);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = a),
        (this.root = s ? s.root || s : this),
        (this.path = s ? [...s.path, s] : []),
        (this.parent = s),
        (this.depth = s ? s.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new PM());
    }
    addEventListener(a, s) {
      return (
        this.eventHandlers.has(a) || this.eventHandlers.set(a, new Wh()),
        this.eventHandlers.get(a).add(s)
      );
    }
    notifyListeners(a, ...s) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...s);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    mount(a, s = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = AM(a)), (this.instance = a);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(a),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        s && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(a, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = EM(f, 250)),
            Bs.hasAnimatedSinceResize &&
              ((Bs.hasAnimatedSinceResize = !1), this.nodes.forEach($g));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: y,
              layout: S,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || GM,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: p } =
                  c.getProps(),
                h = !this.targetLayout || !ub(this.targetLayout, S) || y,
                m = !f && y;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                m ||
                (f && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, m);
                const C = { ...Rh(v, "layout"), onPlay: w, onComplete: p };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((C.delay = 0), (C.type = !1)),
                  this.startAnimation(C);
              } else
                f || $g(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = S;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        _r(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(WM),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.HandoffCancelAllAnimations &&
          cb(this) &&
          window.HandoffCancelAllAnimations(),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: s, layout: l } = this.options;
      if (s === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        a && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Eg);
        return;
      }
      this.isUpdating || this.nodes.forEach(IM),
        (this.isUpdating = !1),
        this.nodes.forEach(VM),
        this.nodes.forEach(FM),
        this.nodes.forEach(DM),
        this.clearAllSnapshots();
      const s = Qr.now();
      (Fe.delta = en(0, 1e3 / 60, s - Fe.timestamp)),
        (Fe.timestamp = s),
        (Fe.isProcessing = !0),
        pc.update.process(Fe),
        pc.preRender.process(Fe),
        pc.render.process(Fe),
        (Fe.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), vh.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(LM), this.sharedNodes.forEach(UM);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        J.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      J.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const a = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ge()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s &&
        s.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          a ? a.layoutBox : void 0
        );
    }
    updateScroll(a = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === a &&
        (s = !1),
        s &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: a,
            isRoot: n(this.instance),
            offset: r(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const a = this.isLayoutDirty || this.shouldResetTransform,
        s = this.projectionDelta && !lb(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      a &&
        (s || yn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return (
        a && (l = this.removeTransform(l)),
        YM(l),
        {
          animationId: this.root.animationId,
          measuredBox: s,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a) return ge();
      const s = a.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (Dr(s.x, l.offset.x), Dr(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = ge();
      St(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            St(s, a);
            const { scroll: f } = this.root;
            f && (Dr(s.x, -f.offset.x), Dr(s.y, -f.offset.y));
          }
          Dr(s.x, c.offset.x), Dr(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = ge();
      St(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          di(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          yn(c.latestValues) && di(l, c.latestValues);
      }
      return yn(this.latestValues) && di(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = ge();
      St(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !yn(u.latestValues)) continue;
        Kd(u.latestValues) && u.updateSnapshot();
        const c = ge(),
          d = u.measurePageBox();
        St(c, d),
          kg(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return yn(this.latestValues) && kg(s, this.latestValues), s;
    }
    setTargetDelta(a) {
      (this.targetDelta = a),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Fe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var s;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          a ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = Fe.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const y = this.getClosestProjectingParent();
          y && y.layout && this.animationProgress !== 1
            ? ((this.relativeParent = y),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ge()),
              (this.relativeTargetOrigin = ge()),
              Mo(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                y.layout.layoutBox
              ),
              St(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ge()), (this.targetWithTransforms = ge())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                G4(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : St(this.target, this.layout.layoutBox),
                rb(this.target, this.targetDelta))
              : St(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const y = this.getClosestProjectingParent();
            y &&
            !!y.resumingFrom == !!this.resumingFrom &&
            !y.options.layoutScroll &&
            y.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = y),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ge()),
                (this.relativeTargetOrigin = ge()),
                Mo(this.relativeTargetOrigin, this.target, y.target),
                St(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          gn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Kd(this.parent.latestValues) ||
          tb(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var a;
      const s = this.getLead(),
        l = !!this.resumingFrom || this !== s;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === Fe.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      St(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        y = this.treeScale.y;
      rM(this.layoutCorrected, this.treeScale, this.path, l),
        s.layout &&
          !s.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((s.target = s.layout.layoutBox), (s.targetWithTransforms = ge()));
      const { target: S } = s;
      if (!S) {
        this.projectionTransform &&
          ((this.projectionDelta = ci()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = ci()),
        (this.projectionDeltaWithTransform = ci()));
      const v = this.projectionTransform;
      zo(this.projectionDelta, this.layoutCorrected, S, this.latestValues),
        (this.projectionTransform = Tg(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== v ||
          this.treeScale.x !== f ||
          this.treeScale.y !== y) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", S)),
        gn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), a)) {
        const s = this.getStack();
        s && s.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(a, s = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = ci();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !s);
      const f = ge(),
        y = l ? l.source : void 0,
        S = this.layout ? this.layout.source : void 0,
        v = y !== S,
        w = this.getStack(),
        p = !w || w.members.length <= 1,
        h = !!(v && !p && this.options.crossfade === !0 && !this.path.some(KM));
      this.animationProgress = 0;
      let m;
      (this.mixTargetDelta = (C) => {
        const P = C / 1e3;
        Ag(d.x, a.x, P),
          Ag(d.y, a.y, P),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Mo(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            HM(this.relativeTarget, this.relativeTargetOrigin, f, P),
            m && CM(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = ge()),
            St(m, this.relativeTarget)),
          v &&
            ((this.animationValues = c), vM(c, u, this.latestValues, P, h, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = P);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (_r(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = J.update(() => {
          (Bs.hasAnimatedSinceResize = !0),
            (this.currentAnimation = RM(0, Pg, {
              ...a,
              onUpdate: (s) => {
                this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s);
              },
              onComplete: () => {
                a.onComplete && a.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const a = this.getStack();
      a && a.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Pg),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let {
        targetWithTransforms: s,
        target: l,
        layout: u,
        latestValues: c,
      } = a;
      if (!(!s || !l || !u)) {
        if (
          this !== a &&
          this.layout &&
          u &&
          fb(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ge();
          const d = pt(this.layout.layoutBox.x);
          (l.x.min = a.target.x.min), (l.x.max = l.x.min + d);
          const f = pt(this.layout.layoutBox.y);
          (l.y.min = a.target.y.min), (l.y.max = l.y.min + f);
        }
        St(s, l),
          di(s, c),
          zo(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new _M()),
        this.sharedNodes.get(a).add(s);
      const u = s.options.initialPromotionConfig;
      s.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(s)
            : void 0,
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? (a = this.getStack()) === null || a === void 0
          ? void 0
          : a.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a) return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        s && this.setOptions({ transition: s });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: a } = this.options;
      if (!a) return;
      let s = !1;
      const { latestValues: l } = a;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (s = !0),
        !s)
      )
        return;
      const u = {};
      l.z && _c("z", a, u, this.animationValues);
      for (let c = 0; c < Cc.length; c++)
        _c(`rotate${Cc[c]}`, a, u, this.animationValues),
          _c(`skew${Cc[c]}`, a, u, this.animationValues);
      a.render();
      for (const c in u)
        a.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      a.scheduleRender();
    }
    getProjectionStyles(a) {
      var s, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return zM;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Fs(a == null ? void 0 : a.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = Fs(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !yn(this.latestValues) &&
            ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Tg(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform));
      const { x: y, y: S } = this.projectionDelta;
      (u.transformOrigin = `${y.origin * 100}% ${S.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (s = f.opacity) !== null && s !== void 0
                      ? s
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const v in yl) {
        if (f[v] === void 0) continue;
        const { correct: w, applyTo: p } = yl[v],
          h = u.transform === "none" ? f[v] : w(f[v], d);
        if (p) {
          const m = p.length;
          for (let C = 0; C < m; C++) u[p[C]] = h;
        } else u[v] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? Fs(a == null ? void 0 : a.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0
          ? void 0
          : s.stop();
      }),
        this.root.nodes.forEach(Eg),
        this.root.sharedNodes.clear();
    }
  };
}
function FM(e) {
  e.updateLayout();
}
function DM(e) {
  var t;
  const r =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      a = r.source !== e.layout.source;
    o === "size"
      ? xt((d) => {
          const f = a ? r.measuredBox[d] : r.layoutBox[d],
            y = pt(f);
          (f.min = n[d].min), (f.max = f.min + y);
        })
      : fb(o, r.layoutBox, n) &&
        xt((d) => {
          const f = a ? r.measuredBox[d] : r.layoutBox[d],
            y = pt(n[d]);
          (f.max = f.min + y),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + y));
        });
    const s = ci();
    zo(s, n, r.layoutBox);
    const l = ci();
    a ? zo(l, e.applyTransform(i, !0), r.measuredBox) : zo(l, n, r.layoutBox);
    const u = !lb(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: y } = d;
        if (f && y) {
          const S = ge();
          Mo(S, r.layoutBox, f.layoutBox);
          const v = ge();
          Mo(v, n, y.layoutBox),
            ub(S, v) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = S),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: n,
      snapshot: r,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: n } = e.options;
    n && n();
  }
  e.options.transition = void 0;
}
function BM(e) {
  gn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function jM(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function LM(e) {
  e.clearSnapshot();
}
function Eg(e) {
  e.clearMeasurements();
}
function IM(e) {
  e.isLayoutDirty = !1;
}
function VM(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function $g(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function OM(e) {
  e.resolveTargetDelta();
}
function NM(e) {
  e.calcProjection();
}
function WM(e) {
  e.resetSkewAndRotation();
}
function UM(e) {
  e.removeLeadSnapshot();
}
function Ag(e, t, r) {
  (e.translate = he(t.translate, 0, r)),
    (e.scale = he(t.scale, 1, r)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Rg(e, t, r, n) {
  (e.min = he(t.min, r.min, n)), (e.max = he(t.max, r.max, n));
}
function HM(e, t, r, n) {
  Rg(e.x, t.x, r.x, n), Rg(e.y, t.y, r.y, n);
}
function KM(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const GM = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  zg = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Mg = zg("applewebkit/") && !zg("chrome/") ? Math.round : Ue;
function Fg(e) {
  (e.min = Mg(e.min)), (e.max = Mg(e.max));
}
function YM(e) {
  Fg(e.x), Fg(e.y);
}
function fb(e, t, r) {
  return (
    e === "position" || (e === "preserve-aspect" && !Ud(_g(t), _g(r), 0.2))
  );
}
const XM = db({
    attachResizeListener: (e, t) => pr(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Tc = { current: void 0 },
  hb = db({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Tc.current) {
        const e = new XM({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Tc.current = e);
      }
      return Tc.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  qM = {
    pan: { Feature: cM },
    drag: { Feature: uM, ProjectionNode: hb, MeasureLayout: ob },
  },
  Yd = { current: null },
  pb = { current: !1 };
function QM() {
  if (((pb.current = !0), !!mh))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Yd.current = e.matches);
      e.addListener(t), t();
    } else Yd.current = !1;
}
function ZM(e, t, r) {
  const { willChange: n } = t;
  for (const i in t) {
    const o = t[i],
      a = r[i];
    if (We(o)) e.addValue(i, o), bl(n) && n.add(i);
    else if (We(a)) e.addValue(i, da(o, { owner: e })), bl(n) && n.remove(i);
    else if (a !== o)
      if (e.hasValue(i)) {
        const s = e.getValue(i);
        s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o);
      } else {
        const s = e.getStaticValue(i);
        e.addValue(i, da(s !== void 0 ? s : o, { owner: e }));
      }
  }
  for (const i in r) t[i] === void 0 && e.removeValue(i);
  return t;
}
const Dg = new WeakMap(),
  JM = [...CS, Oe, tn],
  eF = (e) => JM.find(kS(e)),
  mb = Object.keys(la),
  tF = mb.length,
  Bg = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  rF = bh.length;
function yb(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : yb(e.parent);
}
class nF {
  scrapeMotionValuesFromProps(t, r, n) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: r,
      presenceContext: n,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: a,
    },
    s = {}
  ) {
    (this.resolveKeyframes = (f, y, S, v) =>
      new this.KeyframeResolver(f, y, S, v, this)),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = zh),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => J.render(this.render, !1, !0));
    const { latestValues: l, renderState: u } = a;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = r.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = r),
      (this.presenceContext = n),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = s),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = au(r)),
      (this.isVariantNode = J1(r)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
      r,
      {},
      this
    );
    for (const f in d) {
      const y = d[f];
      l[f] !== void 0 && We(y) && (y.set(l[f], !1), bl(c) && c.add(f));
    }
  }
  mount(t) {
    (this.current = t),
      Dg.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((r, n) => this.bindToMotionValue(n, r)),
      pb.current || QM(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Yd.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    var t;
    Dg.delete(this.current),
      this.projection && this.projection.unmount(),
      _r(this.notifyUpdate),
      _r(this.render),
      this.valueSubscriptions.forEach((r) => r()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const r in this.events) this.events[r].clear();
    for (const r in this.features)
      (t = this.features[r]) === null || t === void 0 || t.unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = In.has(t),
      i = r.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && J.preRender(this.notifyUpdate),
          n && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = r.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), o(), r.owner && r.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...r }, n, i, o) {
    let a, s;
    for (let l = 0; l < tF; l++) {
      const u = mb[l],
        {
          isEnabled: c,
          Feature: d,
          ProjectionNode: f,
          MeasureLayout: y,
        } = la[u];
      f && (a = f),
        c(r) &&
          (!this.features[u] && d && (this.features[u] = new d(this)),
          y && (s = y));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      a
    ) {
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: d,
        layoutScroll: f,
        layoutRoot: y,
      } = r;
      (this.projection = new a(
        this.latestValues,
        r["data-framer-portal-id"] ? void 0 : yb(this.parent)
      )),
        this.projection.setOptions({
          layoutId: l,
          layout: u,
          alwaysMeasureLayout: !!c || (d && li(d)),
          visualElement: this,
          scheduleRender: () => this.scheduleRender(),
          animationType: typeof u == "string" ? u : "both",
          initialPromotionConfig: o,
          layoutScroll: f,
          layoutRoot: y,
        });
    }
    return s;
  }
  updateFeatures() {
    for (const t in this.features) {
      const r = this.features[t];
      r.isMounted ? r.update() : (r.mount(), (r.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ge();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, r) {
    this.latestValues[t] = r;
  }
  update(t, r) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = r);
    for (let n = 0; n < Bg.length; n++) {
      const i = Bg[n];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        a = t[o];
      a && (this.propEventSubscriptions[i] = this.on(i, a));
    }
    (this.prevMotionValues = ZM(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const n = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (n.initial = this.props.initial), n
      );
    }
    const r = {};
    for (let n = 0; n < rF; n++) {
      const i = bh[n],
        o = this.props[i];
      (sa(o) || o === !1) && (r[i] = o);
    }
    return r;
  }
  addVariantChild(t) {
    const r = this.getClosestVariantNode();
    if (r)
      return (
        r.variantChildren && r.variantChildren.add(t),
        () => r.variantChildren.delete(t)
      );
  }
  addValue(t, r) {
    const n = this.values.get(t);
    r !== n &&
      (n && this.removeValue(t),
      this.bindToMotionValue(t, r),
      this.values.set(t, r),
      (this.latestValues[t] = r.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const r = this.valueSubscriptions.get(t);
    r && (r(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, r) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let n = this.values.get(t);
    return (
      n === void 0 &&
        r !== void 0 &&
        ((n = da(r === null ? void 0 : r, { owner: this })),
        this.addValue(t, n)),
      n
    );
  }
  readValue(t, r) {
    var n;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
          n !== void 0
        ? n
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (xS(i) || bS(i))
          ? (i = parseFloat(i))
          : !eF(i) && tn.test(r) && (i = zS(t, r)),
        this.setBaseTarget(t, We(i) ? i.get() : i)),
      We(i) ? i.get() : i
    );
  }
  setBaseTarget(t, r) {
    this.baseTarget[t] = r;
  }
  getBaseTarget(t) {
    var r;
    const { initial: n } = this.props;
    let i;
    if (typeof n == "string" || typeof n == "object") {
      const a = Ah(
        this.props,
        n,
        (r = this.presenceContext) === null || r === void 0 ? void 0 : r.custom
      );
      a && (i = a[t]);
    }
    if (n && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !We(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Wh()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class gb extends nF {
  constructor() {
    super(...arguments), (this.KeyframeResolver = MS);
  }
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, r) {
    return t.style ? t.style[r] : void 0;
  }
  removeValueFromRenderState(t, { vars: r, style: n }) {
    delete r[t], delete n[t];
  }
}
function iF(e) {
  return window.getComputedStyle(e);
}
class oF extends gb {
  constructor() {
    super(...arguments), (this.type = "html");
  }
  readValueFromInstance(t, r) {
    if (In.has(r)) {
      const n = Fh(r);
      return (n && n.default) || 0;
    } else {
      const n = iF(t),
        i = (nS(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return nb(t, r);
  }
  build(t, r, n, i) {
    _h(t, r, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r, n) {
    return $h(t, r, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    We(t) &&
      (this.childSubscription = t.on("change", (r) => {
        this.current && (this.current.textContent = `${r}`);
      }));
  }
  renderInstance(t, r, n, i) {
    lS(t, r, n, i);
  }
}
class aF extends gb {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (In.has(r)) {
      const n = Fh(r);
      return (n && n.default) || 0;
    }
    return (r = uS.has(r) ? r : gh(r)), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return ge();
  }
  scrapeMotionValuesFromProps(t, r, n) {
    return dS(t, r, n);
  }
  build(t, r, n, i) {
    Ph(t, r, n, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, r, n, i) {
    cS(t, r, n, i);
  }
  mount(t) {
    (this.isSVGTag = Eh(t.tagName)), super.mount(t);
  }
}
const sF = (e, t) =>
    wh(e)
      ? new aF(t, { enableHardwareAcceleration: !1 })
      : new oF(t, {
          allowProjection: e !== k.Fragment,
          enableHardwareAcceleration: !0,
        }),
  lF = { layout: { ProjectionNode: hb, MeasureLayout: ob } },
  uF = { ...W4, ...Zz, ...qM, ...lF },
  cF = lz((e, t) => Iz(e, t, uF, sF));
function vb() {
  const e = k.useRef(!1);
  return (
    yh(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function dF() {
  const e = vb(),
    [t, r] = k.useState(0),
    n = k.useCallback(() => {
      e.current && r(t + 1);
    }, [t]);
  return [k.useCallback(() => J.postRender(n), [n]), t];
}
class fF extends k.Component {
  getSnapshotBeforeUpdate(t) {
    const r = this.props.childRef.current;
    if (r && t.isPresent && !this.props.isPresent) {
      const n = this.props.sizeRef.current;
      (n.height = r.offsetHeight || 0),
        (n.width = r.offsetWidth || 0),
        (n.top = r.offsetTop),
        (n.left = r.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function hF({ children: e, isPresent: t }) {
  const r = k.useId(),
    n = k.useRef(null),
    i = k.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: o } = k.useContext(ph);
  return (
    k.useInsertionEffect(() => {
      const { width: a, height: s, top: l, left: u } = i.current;
      if (t || !n.current || !a || !s) return;
      n.current.dataset.motionPopId = r;
      const c = document.createElement("style");
      return (
        o && (c.nonce = o),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    _.jsx(fF, {
      isPresent: t,
      childRef: n,
      sizeRef: i,
      children: k.cloneElement(e, { ref: n }),
    })
  );
}
const Pc = ({
  children: e,
  initial: t,
  isPresent: r,
  onExitComplete: n,
  custom: i,
  presenceAffectsLayout: o,
  mode: a,
}) => {
  const s = fS(pF),
    l = k.useId(),
    u = k.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: r,
        custom: i,
        onExitComplete: (c) => {
          s.set(c, !0);
          for (const d of s.values()) if (!d) return;
          n && n();
        },
        register: (c) => (s.set(c, !1), () => s.delete(c)),
      }),
      o ? [Math.random()] : [r]
    );
  return (
    k.useMemo(() => {
      s.forEach((c, d) => s.set(d, !1));
    }, [r]),
    k.useEffect(() => {
      !r && !s.size && n && n();
    }, [r]),
    a === "popLayout" && (e = _.jsx(hF, { isPresent: r, children: e })),
    _.jsx(Sa.Provider, { value: u, children: e })
  );
};
function pF() {
  return new Map();
}
function mF(e) {
  return k.useEffect(() => () => e(), []);
}
const vn = (e) => e.key || "";
function yF(e, t) {
  e.forEach((r) => {
    const n = vn(r);
    t.set(n, r);
  });
}
function gF(e) {
  const t = [];
  return (
    k.Children.forEach(e, (r) => {
      k.isValidElement(r) && t.push(r);
    }),
    t
  );
}
const vF = ({
  children: e,
  custom: t,
  initial: r = !0,
  onExitComplete: n,
  exitBeforeEnter: i,
  presenceAffectsLayout: o = !0,
  mode: a = "sync",
}) => {
  const s = k.useContext(xh).forceRender || dF()[0],
    l = vb(),
    u = gF(e);
  let c = u;
  const d = k.useRef(new Map()).current,
    f = k.useRef(c),
    y = k.useRef(new Map()).current,
    S = k.useRef(!0);
  if (
    (yh(() => {
      (S.current = !1), yF(u, y), (f.current = c);
    }),
    mF(() => {
      (S.current = !0), y.clear(), d.clear();
    }),
    S.current)
  )
    return _.jsx(_.Fragment, {
      children: c.map((h) =>
        _.jsx(
          Pc,
          {
            isPresent: !0,
            initial: r ? void 0 : !1,
            presenceAffectsLayout: o,
            mode: a,
            children: h,
          },
          vn(h)
        )
      ),
    });
  c = [...c];
  const v = f.current.map(vn),
    w = u.map(vn),
    p = v.length;
  for (let h = 0; h < p; h++) {
    const m = v[h];
    w.indexOf(m) === -1 && !d.has(m) && d.set(m, void 0);
  }
  return (
    a === "wait" && d.size && (c = []),
    d.forEach((h, m) => {
      if (w.indexOf(m) !== -1) return;
      const C = y.get(m);
      if (!C) return;
      const P = v.indexOf(m);
      let A = h;
      if (!A) {
        const E = () => {
          d.delete(m);
          const $ = Array.from(y.keys()).filter((L) => !w.includes(L));
          if (
            ($.forEach((L) => y.delete(L)),
            (f.current = u.filter((L) => {
              const D = vn(L);
              return D === m || $.includes(D);
            })),
            !d.size)
          ) {
            if (l.current === !1) return;
            s(), n && n();
          }
        };
        (A = _.jsx(
          Pc,
          {
            isPresent: !1,
            onExitComplete: E,
            custom: t,
            presenceAffectsLayout: o,
            mode: a,
            children: C,
          },
          vn(C)
        )),
          d.set(m, A);
      }
      c.splice(P, 0, A);
    }),
    (c = c.map((h) => {
      const m = h.key;
      return d.has(m)
        ? h
        : _.jsx(
            Pc,
            { isPresent: !0, presenceAffectsLayout: o, mode: a, children: h },
            vn(h)
          );
    })),
    _.jsx(_.Fragment, {
      children: d.size ? c : c.map((h) => k.cloneElement(h)),
    })
  );
};
var SF = {
    initial: (e) => {
      const { position: t } = e,
        r = ["top", "bottom"].includes(t) ? "y" : "x";
      let n = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
      return t === "bottom" && (n = 1), { opacity: 0, [r]: n * 24 };
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
    },
  },
  Sb = k.memo((e) => {
    const {
        id: t,
        message: r,
        onCloseComplete: n,
        onRequestRemove: i,
        requestClose: o = !1,
        position: a = "bottom",
        duration: s = 5e3,
        containerStyle: l,
        motionVariants: u = SF,
        toastSpacing: c = "0.5rem",
      } = e,
      [d, f] = k.useState(s),
      y = fM();
    Ey(() => {
      y || n == null || n();
    }, [y]),
      Ey(() => {
        f(s);
      }, [s]);
    const S = () => f(null),
      v = () => f(s),
      w = () => {
        y && i();
      };
    k.useEffect(() => {
      y && o && i();
    }, [y, o, i]),
      XR(w, d);
    const p = k.useMemo(
        () => ({
          pointerEvents: "auto",
          maxWidth: 560,
          minWidth: 300,
          margin: c,
          ...l,
        }),
        [l, c]
      ),
      h = k.useMemo(() => KR(a), [a]);
    return _.jsx(cF.div, {
      layout: !0,
      className: "chakra-toast",
      variants: u,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: S,
      onHoverEnd: v,
      custom: { position: a },
      style: h,
      children: _.jsx(Ce.div, {
        role: "status",
        "aria-atomic": "true",
        className: "chakra-toast__inner",
        __css: p,
        children: Or(r, { id: t, onClose: w }),
      }),
    });
  });
Sb.displayName = "ToastComponent";
var jg = {
    path: _.jsxs("g", {
      stroke: "currentColor",
      strokeWidth: "1.5",
      children: [
        _.jsx("path", {
          strokeLinecap: "round",
          fill: "none",
          d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25",
        }),
        _.jsx("path", {
          fill: "currentColor",
          strokeLinecap: "round",
          d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0",
        }),
        _.jsx("circle", {
          fill: "none",
          strokeMiterlimit: "10",
          cx: "12",
          cy: "12",
          r: "11.25",
        }),
      ],
    }),
    viewBox: "0 0 24 24",
  },
  Ca = Vt((e, t) => {
    const {
        as: r,
        viewBox: n,
        color: i = "currentColor",
        focusable: o = !1,
        children: a,
        className: s,
        __css: l,
        ...u
      } = e,
      c = Et("chakra-icon", s),
      d = nu("Icon", e),
      f = {
        w: "1em",
        h: "1em",
        display: "inline-block",
        lineHeight: "1em",
        flexShrink: 0,
        color: i,
        ...l,
        ...d,
      },
      y = { ref: t, focusable: o, className: c, __css: f },
      S = n ?? jg.viewBox;
    if (r && typeof r != "string") return _.jsx(Ce.svg, { as: r, ...y, ...u });
    const v = a ?? jg.path;
    return _.jsx(Ce.svg, {
      verticalAlign: "middle",
      viewBox: S,
      ...y,
      ...u,
      children: v,
    });
  });
Ca.displayName = "Icon";
function bF(e) {
  return _.jsx(Ca, {
    viewBox: "0 0 24 24",
    ...e,
    children: _.jsx("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z",
    }),
  });
}
function xF(e) {
  return _.jsx(Ca, {
    viewBox: "0 0 24 24",
    ...e,
    children: _.jsx("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z",
    }),
  });
}
function Lg(e) {
  return _.jsx(Ca, {
    viewBox: "0 0 24 24",
    ...e,
    children: _.jsx("path", {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",
    }),
  });
}
var wF = p2({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  }),
  Uh = Vt((e, t) => {
    const r = nu("Spinner", e),
      {
        label: n = "Loading...",
        thickness: i = "2px",
        speed: o = "0.45s",
        emptyColor: a = "transparent",
        className: s,
        ...l
      } = Li(e),
      u = Et("chakra-spinner", s),
      c = {
        display: "inline-block",
        borderColor: "currentColor",
        borderStyle: "solid",
        borderRadius: "99999px",
        borderWidth: i,
        borderBottomColor: a,
        borderLeftColor: a,
        animation: `${wF} ${o} linear infinite`,
        ...r,
      };
    return _.jsx(Ce.div, {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: n && _.jsx(Ce.span, { srOnly: !0, children: n }),
    });
  });
Uh.displayName = "Spinner";
var [kF, Hh] = an({
    name: "AlertContext",
    hookName: "useAlertContext",
    providerName: "<Alert />",
  }),
  [CF, Kh] = an({
    name: "AlertStylesContext",
    hookName: "useAlertStyles",
    providerName: "<Alert />",
  }),
  bb = {
    info: { icon: xF, colorScheme: "blue" },
    warning: { icon: Lg, colorScheme: "orange" },
    success: { icon: bF, colorScheme: "green" },
    error: { icon: Lg, colorScheme: "red" },
    loading: { icon: Uh, colorScheme: "blue" },
  };
function _F(e) {
  return bb[e].colorScheme;
}
function TF(e) {
  return bb[e].icon;
}
var xb = Vt(function (t, r) {
  const n = Kh(),
    { status: i } = Hh(),
    o = { display: "inline", ...n.description };
  return _.jsx(Ce.div, {
    ref: r,
    "data-status": i,
    ...t,
    className: Et("chakra-alert__desc", t.className),
    __css: o,
  });
});
xb.displayName = "AlertDescription";
function wb(e) {
  const { status: t } = Hh(),
    r = TF(t),
    n = Kh(),
    i = t === "loading" ? n.spinner : n.icon;
  return _.jsx(Ce.span, {
    display: "inherit",
    "data-status": t,
    ...e,
    className: Et("chakra-alert__icon", e.className),
    __css: i,
    children: e.children || _.jsx(r, { h: "100%", w: "100%" }),
  });
}
wb.displayName = "AlertIcon";
var kb = Vt(function (t, r) {
  const n = Kh(),
    { status: i } = Hh();
  return _.jsx(Ce.div, {
    ref: r,
    "data-status": i,
    ...t,
    className: Et("chakra-alert__title", t.className),
    __css: n.title,
  });
});
kb.displayName = "AlertTitle";
var Cb = Vt(function (t, r) {
  var n;
  const { status: i = "info", addRole: o = !0, ...a } = Li(t),
    s = (n = t.colorScheme) != null ? n : _F(i),
    l = hh("Alert", { ...t, colorScheme: s }),
    u = {
      width: "100%",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      ...l.container,
    };
  return _.jsx(kF, {
    value: { status: i },
    children: _.jsx(CF, {
      value: l,
      children: _.jsx(Ce.div, {
        "data-status": i,
        role: o ? "alert" : void 0,
        ref: r,
        ...a,
        className: Et("chakra-alert", t.className),
        __css: u,
      }),
    }),
  });
});
Cb.displayName = "Alert";
function PF(e) {
  return _.jsx(Ca, {
    focusable: "false",
    "aria-hidden": !0,
    ...e,
    children: _.jsx("path", {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
    }),
  });
}
var _b = Vt(function (t, r) {
  const n = nu("CloseButton", t),
    { children: i, isDisabled: o, __css: a, ...s } = Li(t),
    l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    };
  return _.jsx(Ce.button, {
    type: "button",
    "aria-label": "Close",
    ref: r,
    disabled: o,
    __css: { ...l, ...n, ...a },
    ...s,
    children: i || _.jsx(PF, { width: "1em", height: "1em" }),
  });
});
_b.displayName = "CloseButton";
var EF = {
    top: [],
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    bottom: [],
    "bottom-right": [],
  },
  Fo = $F(EF);
function $F(e) {
  let t = e;
  const r = new Set(),
    n = (i) => {
      (t = i(t)), r.forEach((o) => o());
    };
  return {
    getState: () => t,
    subscribe: (i) => (
      r.add(i),
      () => {
        n(() => e), r.delete(i);
      }
    ),
    removeToast: (i, o) => {
      n((a) => ({ ...a, [o]: a[o].filter((s) => s.id != i) }));
    },
    notify: (i, o) => {
      const a = AF(i, o),
        { position: s, id: l } = a;
      return (
        n((u) => {
          var c, d;
          const y = s.includes("top")
            ? [a, ...((c = u[s]) != null ? c : [])]
            : [...((d = u[s]) != null ? d : []), a];
          return { ...u, [s]: y };
        }),
        l
      );
    },
    update: (i, o) => {
      i &&
        n((a) => {
          const s = { ...a },
            { position: l, index: u } = Py(s, i);
          return (
            l && u !== -1 && (s[l][u] = { ...s[l][u], ...o, message: zF(o) }), s
          );
        });
    },
    closeAll: ({ positions: i } = {}) => {
      n((o) =>
        (
          i ?? [
            "bottom",
            "bottom-right",
            "bottom-left",
            "top",
            "top-left",
            "top-right",
          ]
        ).reduce(
          (l, u) => ((l[u] = o[u].map((c) => ({ ...c, requestClose: !0 }))), l),
          { ...o }
        )
      );
    },
    close: (i) => {
      n((o) => {
        const a = X1(o, i);
        return a
          ? {
              ...o,
              [a]: o[a].map((s) =>
                s.id == i ? { ...s, requestClose: !0 } : s
              ),
            }
          : o;
      });
    },
    isActive: (i) => !!Py(Fo.getState(), i).position,
  };
}
var Ig = 0;
function AF(e, t = {}) {
  var r, n;
  Ig += 1;
  const i = (r = t.id) != null ? r : Ig,
    o = (n = t.position) != null ? n : "bottom";
  return {
    id: i,
    message: e,
    position: o,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => Fo.removeToast(String(i), o),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle,
  };
}
var RF = (e) => {
  const {
      status: t,
      variant: r = "solid",
      id: n,
      title: i,
      isClosable: o,
      onClose: a,
      description: s,
      colorScheme: l,
      icon: u,
    } = e,
    c = n
      ? {
          root: `toast-${n}`,
          title: `toast-${n}-title`,
          description: `toast-${n}-description`,
        }
      : void 0;
  return _.jsxs(Cb, {
    addRole: !1,
    status: t,
    variant: r,
    id: c == null ? void 0 : c.root,
    alignItems: "start",
    borderRadius: "md",
    boxShadow: "lg",
    paddingEnd: 8,
    textAlign: "start",
    width: "auto",
    colorScheme: l,
    children: [
      _.jsx(wb, { children: u }),
      _.jsxs(Ce.div, {
        flex: "1",
        maxWidth: "100%",
        children: [
          i && _.jsx(kb, { id: c == null ? void 0 : c.title, children: i }),
          s &&
            _.jsx(xb, {
              id: c == null ? void 0 : c.description,
              display: "block",
              children: s,
            }),
        ],
      }),
      o &&
        _.jsx(_b, {
          size: "sm",
          onClick: a,
          position: "absolute",
          insetEnd: 1,
          top: 1,
        }),
    ],
  });
};
function zF(e = {}) {
  const { render: t, toastComponent: r = RF } = e;
  return (i) =>
    typeof t == "function" ? t({ ...i, ...e }) : _.jsx(r, { ...i, ...e });
}
var [MF, yD] = an({ name: "ToastOptionsContext", strict: !1 }),
  FF = (e) => {
    const t = k.useSyncExternalStore(Fo.subscribe, Fo.getState, Fo.getState),
      { motionVariants: r, component: n = Sb, portalProps: i } = e,
      a = Object.keys(t).map((s) => {
        const l = t[s];
        return _.jsx(
          "div",
          {
            role: "region",
            "aria-live": "polite",
            "aria-label": `Notifications-${s}`,
            id: `chakra-toast-manager-${s}`,
            style: GR(s),
            children: _.jsx(vF, {
              initial: !1,
              children: l.map((u) =>
                _.jsx(n, { motionVariants: r, ...u }, u.id)
              ),
            }),
          },
          s
        );
      });
    return _.jsx(Zl, { ...i, children: a });
  },
  DF = (e) =>
    function ({ children: r, theme: n = e, toastOptions: i, ...o }) {
      return _.jsxs(UR, {
        theme: n,
        ...o,
        children: [
          _.jsx(MF, {
            value: i == null ? void 0 : i.defaultOptions,
            children: r,
          }),
          _.jsx(FF, { ...i }),
        ],
      });
    },
  BF = DF(mR);
function jF(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function Xd(...e) {
  return (t) => {
    e.forEach((r) => {
      jF(r, t);
    });
  };
}
function LF(...e) {
  return k.useMemo(() => Xd(...e), e);
}
var [gD, IF] = an({ strict: !1, name: "ButtonGroupContext" });
function VF(e) {
  const [t, r] = k.useState(!e);
  return {
    ref: k.useCallback((o) => {
      o && r(o.tagName === "BUTTON");
    }, []),
    type: t ? "button" : void 0,
  };
}
function qd(e) {
  const { children: t, className: r, ...n } = e,
    i = k.isValidElement(t)
      ? k.cloneElement(t, { "aria-hidden": !0, focusable: !1 })
      : t,
    o = Et("chakra-button__icon", r);
  return _.jsx(Ce.span, {
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0,
    ...n,
    className: o,
    children: i,
  });
}
qd.displayName = "ButtonIcon";
function Qd(e) {
  const {
      label: t,
      placement: r,
      spacing: n = "0.5rem",
      children: i = _.jsx(Uh, {
        color: "currentColor",
        width: "1em",
        height: "1em",
      }),
      className: o,
      __css: a,
      ...s
    } = e,
    l = Et("chakra-button__spinner", o),
    u = r === "start" ? "marginEnd" : "marginStart",
    c = k.useMemo(
      () => ({
        display: "flex",
        alignItems: "center",
        position: t ? "relative" : "absolute",
        [u]: t ? n : 0,
        fontSize: "1em",
        lineHeight: "normal",
        ...a,
      }),
      [a, t, u, n]
    );
  return _.jsx(Ce.div, { className: l, ...s, __css: c, children: i });
}
Qd.displayName = "ButtonSpinner";
var Tb = Vt((e, t) => {
  const r = IF(),
    n = nu("Button", { ...r, ...e }),
    {
      isDisabled: i = r == null ? void 0 : r.isDisabled,
      isLoading: o,
      isActive: a,
      children: s,
      leftIcon: l,
      rightIcon: u,
      loadingText: c,
      iconSpacing: d = "0.5rem",
      type: f,
      spinner: y,
      spinnerPlacement: S = "start",
      className: v,
      as: w,
      ...p
    } = Li(e),
    h = k.useMemo(() => {
      const A = { ...(n == null ? void 0 : n._focus), zIndex: 1 };
      return {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        position: "relative",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        outline: "none",
        ...n,
        ...(!!r && { _focus: A }),
      };
    }, [n, r]),
    { ref: m, type: C } = VF(w),
    P = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return _.jsxs(Ce.button, {
    ref: LF(t, m),
    as: w,
    type: f ?? C,
    "data-active": Mt(a),
    "data-loading": Mt(o),
    __css: h,
    className: Et("chakra-button", v),
    ...p,
    disabled: i || o,
    children: [
      o &&
        S === "start" &&
        _.jsx(Qd, {
          className: "chakra-button__spinner--start",
          label: c,
          placement: "start",
          spacing: d,
          children: y,
        }),
      o
        ? c || _.jsx(Ce.span, { opacity: 0, children: _.jsx(Vg, { ...P }) })
        : _.jsx(Vg, { ...P }),
      o &&
        S === "end" &&
        _.jsx(Qd, {
          className: "chakra-button__spinner--end",
          label: c,
          placement: "end",
          spacing: d,
          children: y,
        }),
    ],
  });
});
Tb.displayName = "Button";
function Vg(e) {
  const { leftIcon: t, rightIcon: r, children: n, iconSpacing: i } = e;
  return _.jsxs(_.Fragment, {
    children: [
      t && _.jsx(qd, { marginEnd: i, children: t }),
      n,
      r && _.jsx(qd, { marginStart: i, children: r }),
    ],
  });
}
var [OF, NF] = an({
    name: "FormControlStylesContext",
    errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `,
  }),
  [WF, Pb] = an({ strict: !1, name: "FormControlContext" });
function UF(e) {
  const {
      id: t,
      isRequired: r,
      isInvalid: n,
      isDisabled: i,
      isReadOnly: o,
      ...a
    } = e,
    s = k.useId(),
    l = t || `field-${s}`,
    u = `${l}-label`,
    c = `${l}-feedback`,
    d = `${l}-helptext`,
    [f, y] = k.useState(!1),
    [S, v] = k.useState(!1),
    [w, p] = k.useState(!1),
    h = k.useCallback(
      (E = {}, $ = null) => ({
        id: d,
        ...E,
        ref: Xd($, (L) => {
          L && v(!0);
        }),
      }),
      [d]
    ),
    m = k.useCallback(
      (E = {}, $ = null) => ({
        ...E,
        ref: $,
        "data-focus": Mt(w),
        "data-disabled": Mt(i),
        "data-invalid": Mt(n),
        "data-readonly": Mt(o),
        id: E.id !== void 0 ? E.id : u,
        htmlFor: E.htmlFor !== void 0 ? E.htmlFor : l,
      }),
      [l, i, w, n, o, u]
    ),
    C = k.useCallback(
      (E = {}, $ = null) => ({
        id: c,
        ...E,
        ref: Xd($, (L) => {
          L && y(!0);
        }),
        "aria-live": "polite",
      }),
      [c]
    ),
    P = k.useCallback(
      (E = {}, $ = null) => ({
        ...E,
        ...a,
        ref: $,
        role: "group",
        "data-focus": Mt(w),
        "data-disabled": Mt(i),
        "data-invalid": Mt(n),
        "data-readonly": Mt(o),
      }),
      [a, i, w, n, o]
    ),
    A = k.useCallback(
      (E = {}, $ = null) => ({
        ...E,
        ref: $,
        role: "presentation",
        "aria-hidden": !0,
        children: E.children || "*",
      }),
      []
    );
  return {
    isRequired: !!r,
    isInvalid: !!n,
    isReadOnly: !!o,
    isDisabled: !!i,
    isFocused: !!w,
    onFocus: () => p(!0),
    onBlur: () => p(!1),
    hasFeedbackText: f,
    setHasFeedbackText: y,
    hasHelpText: S,
    setHasHelpText: v,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: a,
    getHelpTextProps: h,
    getErrorMessageProps: C,
    getRootProps: P,
    getLabelProps: m,
    getRequiredIndicatorProps: A,
  };
}
var HF = Vt(function (t, r) {
  const n = hh("Form", t),
    i = Li(t),
    { getRootProps: o, htmlProps: a, ...s } = UF(i),
    l = Et("chakra-form-control", t.className);
  return _.jsx(WF, {
    value: s,
    children: _.jsx(OF, {
      value: n,
      children: _.jsx(Ce.div, {
        ...o({}, r),
        className: l,
        __css: n.container,
      }),
    }),
  });
});
HF.displayName = "FormControl";
var KF = Vt(function (t, r) {
  const n = Pb(),
    i = NF(),
    o = Et("chakra-form__helper-text", t.className);
  return _.jsx(Ce.div, {
    ...(n == null ? void 0 : n.getHelpTextProps(t, r)),
    __css: i.helperText,
    className: o,
  });
});
KF.displayName = "FormHelperText";
function GF(e) {
  const {
    isDisabled: t,
    isInvalid: r,
    isReadOnly: n,
    isRequired: i,
    ...o
  } = YF(e);
  return {
    ...o,
    disabled: t,
    readOnly: n,
    required: i,
    "aria-invalid": Xu(r),
    "aria-required": Xu(i),
    "aria-readonly": Xu(n),
  };
}
function YF(e) {
  var t, r, n;
  const i = Pb(),
    {
      id: o,
      disabled: a,
      readOnly: s,
      required: l,
      isRequired: u,
      isInvalid: c,
      isReadOnly: d,
      isDisabled: f,
      onFocus: y,
      onBlur: S,
      ...v
    } = e,
    w = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return (
    i != null &&
      i.hasFeedbackText &&
      i != null &&
      i.isInvalid &&
      w.push(i.feedbackId),
    i != null && i.hasHelpText && w.push(i.helpTextId),
    {
      ...v,
      "aria-describedby": w.join(" ") || void 0,
      id: o ?? (i == null ? void 0 : i.id),
      isDisabled: (t = a ?? f) != null ? t : i == null ? void 0 : i.isDisabled,
      isReadOnly: (r = s ?? d) != null ? r : i == null ? void 0 : i.isReadOnly,
      isRequired: (n = l ?? u) != null ? n : i == null ? void 0 : i.isRequired,
      isInvalid: c ?? (i == null ? void 0 : i.isInvalid),
      onFocus: Dm(i == null ? void 0 : i.onFocus, y),
      onBlur: Dm(i == null ? void 0 : i.onBlur, S),
    }
  );
}
var Eb = Vt(function (t, r) {
  const { children: n, placeholder: i, className: o, ...a } = t;
  return _.jsxs(Ce.select, {
    ...a,
    ref: r,
    className: Et("chakra-select", o),
    children: [i && _.jsx("option", { value: "", children: i }), n],
  });
});
Eb.displayName = "SelectField";
function XF(e, t) {
  const r = {},
    n = {};
  for (const [i, o] of Object.entries(e))
    t.includes(i) ? (r[i] = o) : (n[i] = o);
  return [r, n];
}
var $b = Vt((e, t) => {
  var r;
  const n = hh("Select", e),
    {
      rootProps: i,
      placeholder: o,
      icon: a,
      color: s,
      height: l,
      h: u,
      minH: c,
      minHeight: d,
      iconColor: f,
      iconSize: y,
      ...S
    } = Li(e),
    [v, w] = XF(S, D_),
    p = GF(w),
    h = {
      width: "100%",
      height: "fit-content",
      position: "relative",
      color: s,
    },
    m = {
      paddingEnd: "2rem",
      ...n.field,
      _focus: {
        zIndex: "unset",
        ...((r = n.field) == null ? void 0 : r._focus),
      },
    };
  return _.jsxs(Ce.div, {
    className: "chakra-select__wrapper",
    __css: h,
    ...v,
    ...i,
    children: [
      _.jsx(Eb, {
        ref: t,
        height: u ?? l,
        minH: c ?? d,
        placeholder: o,
        ...p,
        __css: m,
        children: e.children,
      }),
      _.jsx(Ab, {
        "data-disabled": Mt(p.disabled),
        ...((f || s) && { color: f || s }),
        __css: n.icon,
        ...(y && { fontSize: y }),
        children: a,
      }),
    ],
  });
});
$b.displayName = "Select";
var qF = (e) =>
    _.jsx("svg", {
      viewBox: "0 0 24 24",
      ...e,
      children: _.jsx("path", {
        fill: "currentColor",
        d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z",
      }),
    }),
  QF = Ce("div", {
    baseStyle: {
      position: "absolute",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none",
      top: "50%",
      transform: "translateY(-50%)",
    },
  }),
  Ab = (e) => {
    const { children: t = _.jsx(qF, {}), ...r } = e,
      n = k.cloneElement(t, {
        role: "presentation",
        className: "chakra-select__icon",
        focusable: !1,
        "aria-hidden": !0,
        style: { width: "1em", height: "1em", color: "currentColor" },
      });
    return _.jsx(QF, {
      ...r,
      className: "chakra-select__icon-wrapper",
      children: k.isValidElement(t) ? n : null,
    });
  };
Ab.displayName = "SelectIcon";
const ZF = [
    { country: "Afghanistan", city: "Kabul" },
    { country: "Albania", city: "Tirana" },
    { country: "Algeria", city: "Alger" },
    { country: "American Samoa", city: "Fagatogo" },
    { country: "Andorra", city: "Andorra la Vella" },
    { country: "Angola", city: "Luanda" },
    { country: "Anguilla", city: "The Valley" },
    { country: "Antarctica", city: null },
    { country: "Antigua and Barbuda", city: "Saint John's" },
    { country: "Argentina", city: "Buenos Aires" },
    { country: "Armenia", city: "Yerevan" },
    { country: "Aruba", city: "Oranjestad" },
    { country: "Australia", city: "Canberra" },
    { country: "Austria", city: "Wien" },
    { country: "Azerbaijan", city: "Baku" },
    { country: "Bahamas", city: "Nassau" },
    { country: "Bahrain", city: "al-Manama" },
    { country: "Bangladesh", city: "Dhaka" },
    { country: "Barbados", city: "Bridgetown" },
    { country: "Belarus", city: "Minsk" },
    { country: "Belgium", city: "Bruxelles [Brussel]" },
    { country: "Belize", city: "Belmopan" },
    { country: "Benin", city: "Porto-Novo" },
    { country: "Bermuda", city: "Hamilton" },
    { country: "Bhutan", city: "Thimphu" },
    { country: "Bolivia", city: "La Paz" },
    { country: "Bosnia and Herzegovina", city: "Sarajevo" },
    { country: "Botswana", city: "Gaborone" },
    { country: "Bouvet Island", city: null },
    { country: "Brazil", city: "Brasília" },
    { country: "British Indian Ocean Territory", city: null },
    { country: "Brunei", city: "Bandar Seri Begawan" },
    { country: "Bulgaria", city: "Sofia" },
    { country: "Burkina Faso", city: "Ouagadougou" },
    { country: "Burundi", city: "Bujumbura" },
    { country: "Cambodia", city: "Phnom Penh" },
    { country: "Cameroon", city: "Yaounde" },
    { country: "Canada", city: "Ottawa" },
    { country: "Cape Verde", city: "Praia" },
    { country: "Cayman Islands", city: "George Town" },
    { country: "Central African Republic", city: "Bangui" },
    { country: "Chad", city: "N'Djamena" },
    { country: "Chile", city: "Santiago de Chile" },
    { country: "China", city: "Peking" },
    { country: "Christmas Island", city: "Flying Fish Cove" },
    { country: "Cocos (Keeling) Islands", city: "West Island" },
    { country: "Colombia", city: "Bogota" },
    { country: "Comoros", city: "Moroni" },
    { country: "Congo", city: "Brazzaville" },
    { country: "Cook Islands", city: "Avarua" },
    { country: "Costa Rica", city: "San José" },
    { country: "Croatia", city: "Zagreb" },
    { country: "Cuba", city: "La Habana" },
    { country: "Cyprus", city: "Nicosia" },
    { country: "Czech Republic", city: "Praha" },
    { country: "Denmark", city: "Copenhagen" },
    { country: "Djibouti", city: "Djibouti" },
    { country: "Dominica", city: "Roseau" },
    { country: "Dominican Republic", city: "Santo Domingo de Guzm" },
    { country: "East Timor", city: "Dili" },
    { country: "Ecuador", city: "Quito" },
    { country: "Egypt", city: "Cairo" },
    { country: "El Salvador", city: "San Salvador" },
    { country: "England", city: "London" },
    { country: "Equatorial Guinea", city: "Malabo" },
    { country: "Eritrea", city: "Asmara" },
    { country: "Estonia", city: "Tallinn" },
    { country: "Ethiopia", city: "Addis Abeba" },
    { country: "Falkland Islands", city: "Stanley" },
    { country: "Faroe Islands", city: "Tórshavn" },
    { country: "Fiji Islands", city: "Suva" },
    { country: "Finland", city: "Helsinki [Helsingfors]" },
    { country: "France", city: "Paris" },
    { country: "French Guiana", city: "Cayenne" },
    { country: "French Polynesia", city: "Papeete" },
    { country: "French Southern territories", city: null },
    { country: "Gabon", city: "Libreville" },
    { country: "Gambia", city: "Banjul" },
    { country: "Georgia", city: "Tbilisi" },
    { country: "Germany", city: "Berlin" },
    { country: "Ghana", city: "Accra" },
    { country: "Gibraltar", city: "Gibraltar" },
    { country: "Greece", city: "Athenai" },
    { country: "Greenland", city: "Nuuk" },
    { country: "Grenada", city: "Saint George's" },
    { country: "Guadeloupe", city: "Basse-Terre" },
    { country: "Guam", city: "Aga" },
    { country: "Guatemala", city: "Ciudad de Guatemala" },
    { country: "Guinea", city: "Conakry" },
    { country: "Guinea-Bissau", city: "Bissau" },
    { country: "Guyana", city: "Georgetown" },
    { country: "Haiti", city: "Port-au-Prince" },
    { country: "Heard Island and McDonald Islands", city: null },
    { country: "Holy See (Vatican City State)", city: "Citt" },
    { country: "Honduras", city: "Tegucigalpa" },
    { country: "Hong Kong", city: "Victoria" },
    { country: "Hungary", city: "Budapest" },
    { country: "Iceland", city: "Reykjavík" },
    { country: "India", city: "New Delhi" },
    { country: "Indonesia", city: "Jakarta" },
    { country: "Iran", city: "Tehran" },
    { country: "Iraq", city: "Baghdad" },
    { country: "Ireland", city: "Dublin" },
    { country: "Israel", city: "Jerusalem" },
    { country: "Italy", city: "Roma" },
    { country: "Ivory Coast", city: "Yamoussoukro" },
    { country: "Jamaica", city: "Kingston" },
    { country: "Japan", city: "Tokyo" },
    { country: "Jordan", city: "Amman" },
    { country: "Kazakhstan", city: "Astana" },
    { country: "Kenya", city: "Nairobi" },
    { country: "Kiribati", city: "Bairiki" },
    { country: "Kuwait", city: "Kuwait" },
    { country: "Kyrgyzstan", city: "Bishkek" },
    { country: "Laos", city: "Vientiane" },
    { country: "Latvia", city: "Riga" },
    { country: "Lebanon", city: "Beirut" },
    { country: "Lesotho", city: "Maseru" },
    { country: "Liberia", city: "Monrovia" },
    { country: "Libyan Arab Jamahiriya", city: "Tripoli" },
    { country: "Liechtenstein", city: "Vaduz" },
    { country: "Lithuania", city: "Vilnius" },
    { country: "Luxembourg", city: "Luxembourg [Luxemburg/L" },
    { country: "Macao", city: "Macao" },
    { country: "North Macedonia", city: "Skopje" },
    { country: "Madagascar", city: "Antananarivo" },
    { country: "Malawi", city: "Lilongwe" },
    { country: "Malaysia", city: "Kuala Lumpur" },
    { country: "Maldives", city: "Male" },
    { country: "Mali", city: "Bamako" },
    { country: "Malta", city: "Valletta" },
    { country: "Marshall Islands", city: "Dalap-Uliga-Darrit" },
    { country: "Martinique", city: "Fort-de-France" },
    { country: "Mauritania", city: "Nouakchott" },
    { country: "Mauritius", city: "Port-Louis" },
    { country: "Mayotte", city: "Mamoutzou" },
    { country: "Mexico", city: "Ciudad de M" },
    { country: "Micronesia, Federated States of", city: "Palikir" },
    { country: "Moldova", city: "Chisinau" },
    { country: "Monaco", city: "Monaco-Ville" },
    { country: "Mongolia", city: "Ulan Bator" },
    { country: "Montenegro", city: "Podgorica" },
    { country: "Montserrat", city: "Plymouth" },
    { country: "Morocco", city: "Rabat" },
    { country: "Mozambique", city: "Maputo" },
    { country: "Myanmar", city: "Rangoon (Yangon)" },
    { country: "Namibia", city: "Windhoek" },
    { country: "Nauru", city: "Yaren" },
    { country: "Nepal", city: "Kathmandu" },
    { country: "Netherlands", city: "Amsterdam" },
    { country: "Netherlands Antilles", city: "Willemstad" },
    { country: "New Caledonia", city: "Noum" },
    { country: "New Zealand", city: "Wellington" },
    { country: "Nicaragua", city: "Managua" },
    { country: "Niger", city: "Niamey" },
    { country: "Nigeria", city: "Abuja" },
    { country: "Niue", city: "Alofi" },
    { country: "Norfolk Island", city: "Kingston" },
    { country: "North Korea", city: "Pyongyang" },
    { country: "Northern Ireland", city: "Belfast" },
    { country: "Northern Mariana Islands", city: "Garapan" },
    { country: "Norway", city: "Oslo" },
    { country: "Oman", city: "Masqat" },
    { country: "Pakistan", city: "Islamabad" },
    { country: "Palau", city: "Koror" },
    { country: "Palestine", city: "Gaza" },
    { country: "Panama", city: "Ciudad de Panamá" },
    { country: "Papua New Guinea", city: "Port Moresby" },
    { country: "Paraguay", city: "Asunción" },
    { country: "Peru", city: "Lima" },
    { country: "Philippines", city: "Manila" },
    { country: "Pitcairn", city: "Adamstown" },
    { country: "Poland", city: "Warszawa" },
    { country: "Portugal", city: "Lisboa" },
    { country: "Puerto Rico", city: "San Juan" },
    { country: "Qatar", city: "Doha" },
    { country: "Reunion", city: "Saint-Denis" },
    { country: "Romania", city: "Bucuresti" },
    { country: "Russia", city: "Moscow" },
    { country: "Rwanda", city: "Kigali" },
    { country: "Saint Helena", city: "Jamestown" },
    { country: "Saint Kitts and Nevis", city: "Basseterre" },
    { country: "Saint Lucia", city: "Castries" },
    { country: "Saint Pierre and Miquelon", city: "Saint-Pierre" },
    { country: "Saint Vincent and the Grenadines", city: "Kingstown" },
    { country: "Samoa", city: "Apia" },
    { country: "San Marino", city: "San Marino" },
    { country: "Sao Tome and Principe", city: "São Tomé" },
    { country: "Saudi Arabia", city: "Riyadh" },
    { country: "Scotland", city: "Edinburgh" },
    { country: "Senegal", city: "Dakar" },
    { country: "Serbia", city: "Belgrade" },
    { country: "Seychelles", city: "Victoria" },
    { country: "Sierra Leone", city: "Freetown" },
    { country: "Singapore", city: "Singapore" },
    { country: "Slovakia", city: "Bratislava" },
    { country: "Slovenia", city: "Ljubljana" },
    { country: "Solomon Islands", city: "Honiara" },
    { country: "Somalia", city: "Mogadishu" },
    { country: "South Africa", city: "Pretoria" },
    { country: "South Georgia and the South Sandwich Islands", city: null },
    { country: "South Korea", city: "Seoul" },
    { country: "South Sudan", city: "Juba" },
    { country: "Spain", city: "Madrid" },
    { country: "Sri Lanka", city: "Colombo, Sri Jayawardenepura Kotte" },
    { country: "Sudan", city: "Khartum" },
    { country: "Suriname", city: "Paramaribo" },
    { country: "Svalbard and Jan Mayen", city: "Longyearbyen" },
    { country: "Swaziland", city: "Mbabane" },
    { country: "Sweden", city: "Stockholm" },
    { country: "Switzerland", city: "Bern" },
    { country: "Syria", city: "Damascus" },
    { country: "Tajikistan", city: "Dushanbe" },
    { country: "Tanzania", city: "Dodoma" },
    { country: "Thailand", city: "Bangkok" },
    { country: "The Democratic Republic of Congo", city: "Kinshasa" },
    { country: "Togo", city: "Lomé" },
    { country: "Tokelau", city: "Fakaofo" },
    { country: "Tonga", city: "Nuku'alofa" },
    { country: "Trinidad and Tobago", city: "Port-of-Spain" },
    { country: "Tunisia", city: "Tunis" },
    { country: "Turkey", city: "Ankara" },
    { country: "Turkmenistan", city: "Ashgabat" },
    { country: "Turks and Caicos Islands", city: "Cockburn Town" },
    { country: "Tuvalu", city: "Funafuti" },
    { country: "Uganda", city: "Kampala" },
    { country: "Ukraine", city: "Kyiv" },
    { country: "United Arab Emirates", city: "Abu Dhabi" },
    { country: "United Kingdom", city: "London" },
    { country: "United States", city: "Washington" },
    { country: "United States Minor Outlying Islands", city: null },
    { country: "Uruguay", city: "Montevideo" },
    { country: "Uzbekistan", city: "Toskent" },
    { country: "Vanuatu", city: "Port-Vila" },
    { country: "Venezuela", city: "Caracas" },
    { country: "Vetican City", city: "Vetican City" },
    { country: "Vietnam", city: "Hanoi" },
    { country: "Virgin Islands, British", city: "Road Town" },
    { country: "Virgin Islands, U.S.", city: "Charlotte Amalie" },
    { country: "Wales", city: "Cardiff" },
    { country: "Wallis and Futuna", city: "Mata-Utu" },
    { country: "Western Sahara", city: "El-Aai" },
    { country: "Yemen", city: "Sanaa" },
    { country: "Zambia", city: "Lusaka" },
    { country: "Zimbabwe", city: "Harare" },
  ],
  Rb = Do.createContext(),
  JF = ({ children: e }) => {
    const [t, r] = k.useState([]);
    return (
      k.useEffect(() => {
        r(ZF);
      }, []),
      _.jsx(Rb.Provider, { value: { locations: t }, children: e })
    );
  },
  eD = () => k.useContext(Rb),
  tD = ({ setLocationCountry: e, setLocationCity: t }) => {
    const { locations: r } = eD(),
      [n, i] = k.useState(""),
      o = (s) => {
        i(s.target.value), console.log(n);
      },
      a = () => {
        const [s, l] = n.split(" - ");
        e(s), t(l);
      };
    return _.jsxs("section", {
      className: "location-container",
      children: [
        _.jsx("label", { children: "Select The Location" }),
        _.jsxs("div", {
          className: "location-search",
          children: [
            r && r.length > 0
              ? _.jsx($b, {
                  placeholder: "Select option",
                  value: n,
                  onChange: o,
                  children: r.map((s, l) =>
                    _.jsxs(
                      "option",
                      {
                        value: `${s.country} - ${s.city}`,
                        children: [s.country, " - ", s.city],
                      },
                      l
                    )
                  ),
                })
              : _.jsx("p", { children: "No locations available" }),
            _.jsx(Tb, { colorScheme: "blue", onClick: a, children: "Search" }),
          ],
        }),
      ],
    });
  };
var rD = {
  photo: "https://api.pexels.com/v1/",
  video: "https://api.pexels.com/videos/",
  collections: "https://api.pexels.com/v1/collections/",
};
function Gh(e, t) {
  var r = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "User-Agent": "Pexels/JavaScript",
        Authorization: e,
      },
    },
    n = rD[t];
  return function (i, o) {
    return fetch(
      "" +
        n +
        i +
        "?" +
        (function (a) {
          return Object.keys(a)
            .map(function (s) {
              return s + "=" + a[s];
            })
            .join("&");
        })(o || {}),
      r
    ).then(function (a) {
      if (!a.ok) throw new Error(a.statusText);
      return a.json();
    });
  };
}
function nD(e) {
  var t = Gh(e, "collections");
  return {
    all: function (r) {
      return r === void 0 && (r = {}), t("", r);
    },
    media: function (r) {
      var n = r.id,
        i = (function (o, a) {
          if (o == null) return {};
          var s,
            l,
            u = {},
            c = Object.keys(o);
          for (l = 0; l < c.length; l++)
            a.indexOf((s = c[l])) >= 0 || (u[s] = o[s]);
          return u;
        })(r, ["id"]);
      return t("" + n, i);
    },
    featured: function (r) {
      return r === void 0 && (r = {}), t("featured", r);
    },
  };
}
function zb(e) {
  return !(!e || !e.photos);
}
var iD = {
  __proto__: null,
  isPhotos: zb,
  isVideos: function (e) {
    return !(!e || !e.videos);
  },
  isError: function (e) {
    return !!e.error;
  },
};
function oD(e) {
  var t = Gh(e, "photo");
  return {
    search: function (r) {
      return t("/search", r);
    },
    curated: function (r) {
      return r === void 0 && (r = {}), t("/curated", r);
    },
    show: function (r) {
      return t("/photos/" + r.id);
    },
    random: function () {
      try {
        var r = Math.floor(1e3 * Math.random());
        return Promise.resolve(this.curated({ page: r, per_page: 1 })).then(
          function (n) {
            return zb(n) ? n.photos[0] : n;
          }
        );
      } catch (n) {
        return Promise.reject(n);
      }
    },
  };
}
function aD(e) {
  var t = Gh(e, "video");
  return {
    search: function (r) {
      return t("/search", r);
    },
    popular: function (r) {
      return r === void 0 && (r = {}), t("/popular", r);
    },
    show: function (r) {
      return t("/videos/" + r.id);
    },
  };
}
function sD(e) {
  return { typeCheckers: iD, photos: oD(e), videos: aD(e), collections: nD(e) };
}
const lD = "b6e12d00924f4dabb8021345243005",
  uD = sD("w0EDPActUOgwgqD3KsRFosdmSrNbJlyeU0OoL4WMoDliN3OkM3gWluh6"),
  cD = ({ locationCountry: e, locationCity: t }) => {
    const [r, n] = k.useState(null),
      [i, o] = k.useState("");
    return (
      k.useEffect(() => {
        const a = async () => {
            try {
              const l = await fetch(
                `http://api.weatherapi.com/v1/current.json?key=${lD}&q=${t}&lang=en&units=metric`
              );
              if (!l.ok) throw new Error("Network response was not ok");
              const u = await l.json();
              n(u);
            } catch (l) {
              console.error(l);
            }
          },
          s = async () => {
            var l;
            try {
              const u = await uD.photos.search({ query: `${e}`, per_page: 1 }),
                c = (l = u == null ? void 0 : u.photos) == null ? void 0 : l[0];
              c && o(c.src.medium);
            } catch (u) {
              console.error(u);
            }
          };
        e && t && (a(), s());
      }, [e, t]),
      _.jsx("section", {
        className: "weatherapp-section",
        children: r
          ? _.jsxs(_.Fragment, {
              children: [
                _.jsxs("div", {
                  className: "pt-1",
                  children: [
                    _.jsx("h1", {
                      className:
                        r.location.country.length > 13 ? "small-text" : "",
                      children: r.location.country,
                    }),
                    _.jsx("h2", {
                      className:
                        r.location.name.length > 13 ? "small-text" : "",
                      children: r.location.name,
                    }),
                  ],
                }),
                _.jsx("div", {
                  className: "pt-2",
                  children: _.jsxs("h1", {
                    children: [r.current.temp_c, "°C"],
                  }),
                }),
                _.jsx("div", {
                  className: "pt-3",
                  children: _.jsx("p", { children: r.current.condition.text }),
                }),
                _.jsx("div", {
                  className: "pt-4",
                  children: _.jsx("img", {
                    src: r.current.condition.icon,
                    alt: "weather condition",
                  }),
                }),
                _.jsx("div", {
                  className: "pt-5",
                  style: {
                    backgroundImage: `url(${i})`,
                    backgroundSize: "cover",
                    width: "100%",
                  },
                }),
                _.jsxs("div", {
                  className: "pt-6",
                  children: [
                    _.jsxs("h2", { children: [r.current.windchill_c, "°C"] }),
                    _.jsx("h3", { children: "Wind chill" }),
                  ],
                }),
                _.jsxs("div", {
                  className: "pt-7",
                  children: [
                    _.jsx("h3", { children: "Humidity" }),
                    _.jsxs("h1", { children: [r.current.humidity, "%"] }),
                  ],
                }),
                _.jsxs("div", {
                  className: "pt-8",
                  children: [
                    _.jsx("h2", { children: "Wind" }),
                    _.jsxs("h3", { children: [r.current.wind_mph, " mph"] }),
                  ],
                }),
              ],
            })
          : _.jsx("p", {}),
      })
    );
  },
  dD = () =>
    _.jsxs("nav", {
      className: "bg-white h-12 flex items-center shadow-md",
      children: [
        _.jsx("h1", { children: "SkylineWeather" }),
        _.jsx("a", { href: "https://galoweb.online", children: "Galoweb" }),
      ],
    });
function fD() {
  const [e, t] = k.useState(null),
    [r, n] = k.useState(null);
  return _.jsxs(JF, {
    children: [
      _.jsx(dD, {}),
      _.jsx("div", {
        className: "body-container",
        children: _.jsxs("div", {
          className: "body",
          children: [
            _.jsx(tD, { setLocationCountry: t, setLocationCity: n }),
            _.jsx(cD, { locationCountry: e, locationCity: r }),
          ],
        }),
      }),
    ],
  });
}
const hD = document.getElementById("root");
Ec.createRoot(hD).render(
  _.jsx(Do.StrictMode, { children: _.jsx(BF, { children: _.jsx(fD, {}) }) })
);
