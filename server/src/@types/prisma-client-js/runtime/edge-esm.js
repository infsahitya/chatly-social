var Bl = Object.create;
var wi = Object.defineProperty;
var jl = Object.getOwnPropertyDescriptor;
var Ul = Object.getOwnPropertyNames;
var $l = Object.getPrototypeOf,
  ql = Object.prototype.hasOwnProperty;
var xi = ((e) =>
  typeof require != "undefined"
    ? require
    : typeof Proxy != "undefined"
    ? new Proxy(e, {
        get: (t, r) => (typeof require != "undefined" ? require : t)[r],
      })
    : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var gr = (e, t) => () => (e && (t = e((e = 0))), t);
var X = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  yr = (e, t) => {
    for (var r in t) wi(e, r, { get: t[r], enumerable: !0 });
  },
  Vl = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of Ul(t))
        !ql.call(e, i) &&
          i !== r &&
          wi(e, i, {
            get: () => t[i],
            enumerable: !(n = jl(t, i)) || n.enumerable,
          });
    return e;
  };
var Pe = (e, t, r) => (
  (r = e != null ? Bl($l(e)) : {}),
  Vl(
    t || !e || !e.__esModule
      ? wi(r, "default", { value: e, enumerable: !0 })
      : r,
    e,
  )
);
function $(e) {
  return () => e;
}
function qe() {
  return h;
}
var h,
  p = gr(() => {
    "use strict";
    h = {
      abort: $(void 0),
      addListener: $(qe()),
      allowedNodeEnvironmentFlags: new Set(),
      arch: "x64",
      argv: ["/bin/node"],
      argv0: "node",
      chdir: $(void 0),
      config: {
        target_defaults: {
          cflags: [],
          default_configuration: "",
          defines: [],
          include_dirs: [],
          libraries: [],
        },
        variables: {
          clang: 0,
          host_arch: "x64",
          node_install_npm: !1,
          node_install_waf: !1,
          node_prefix: "",
          node_shared_openssl: !1,
          node_shared_v8: !1,
          node_shared_zlib: !1,
          node_use_dtrace: !1,
          node_use_etw: !1,
          node_use_openssl: !1,
          target_arch: "x64",
          v8_no_strict_aliasing: 0,
          v8_use_snapshot: !1,
          visibility: "",
        },
      },
      connected: !1,
      cpuUsage: () => ({ user: 0, system: 0 }),
      cwd: () => "/",
      debugPort: 0,
      disconnect: $(void 0),
      constrainedMemory: () => {},
      emit: $(qe()),
      emitWarning: $(void 0),
      env: {},
      eventNames: () => [],
      execArgv: [],
      execPath: "/",
      exit: $(void 0),
      features: {
        inspector: !1,
        debug: !1,
        uv: !1,
        ipv6: !1,
        tls_alpn: !1,
        tls_sni: !1,
        tls_ocsp: !1,
        tls: !1,
      },
      getMaxListeners: $(0),
      getegid: $(0),
      geteuid: $(0),
      getgid: $(0),
      getgroups: $([]),
      getuid: $(0),
      hasUncaughtExceptionCaptureCallback: $(!1),
      hrtime: $([0, 0]),
      platform: "linux",
      kill: $(!0),
      listenerCount: $(0),
      listeners: $([]),
      memoryUsage: $({
        arrayBuffers: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0,
        rss: 0,
      }),
      nextTick: (e, ...t) => {
        setTimeout(() => {
          e(...t);
        }, 0);
      },
      off: $(qe()),
      on: $(qe()),
      once: $(qe()),
      openStdin: $({}),
      pid: 0,
      ppid: 0,
      prependListener: $(qe()),
      prependOnceListener: $(qe()),
      rawListeners: $([]),
      release: { name: "node" },
      removeAllListeners: $(qe()),
      removeListener: $(qe()),
      resourceUsage: $({
        fsRead: 0,
        fsWrite: 0,
        involuntaryContextSwitches: 0,
        ipcReceived: 0,
        ipcSent: 0,
        majorPageFault: 0,
        maxRSS: 0,
        minorPageFault: 0,
        sharedMemorySize: 0,
        signalsCount: 0,
        swappedOut: 0,
        systemCPUTime: 0,
        unsharedDataSize: 0,
        unsharedStackSize: 0,
        userCPUTime: 0,
        voluntaryContextSwitches: 0,
      }),
      setMaxListeners: $(qe()),
      setUncaughtExceptionCaptureCallback: $(void 0),
      setegid: $(void 0),
      seteuid: $(void 0),
      setgid: $(void 0),
      setgroups: $(void 0),
      setuid: $(void 0),
      sourceMapsEnabled: !1,
      stderr: { fd: 2 },
      stdin: { fd: 0 },
      stdout: { fd: 1 },
      title: "node",
      traceDeprecation: !1,
      umask: $(0),
      uptime: $(0),
      version: "",
      versions: {
        http_parser: "",
        node: "",
        v8: "",
        ares: "",
        uv: "",
        zlib: "",
        modules: "",
        openssl: "",
      },
    };
  });
var b,
  f = gr(() => {
    "use strict";
    b = () => {};
    b.prototype = b;
  });
var x,
  d = gr(() => {
    "use strict";
    x = class {
      constructor(t) {
        this.value = t;
      }
      deref() {
        return this.value;
      }
    };
  });
var fs = X((qt) => {
  "use strict";
  m();
  p();
  f();
  d();
  var Zo = (e, t) => () => (
      t || e((t = { exports: {} }).exports, t), t.exports
    ),
    Kl = Zo((e) => {
      "use strict";
      (e.byteLength = u), (e.toByteArray = c), (e.fromByteArray = P);
      var t = [],
        r = [],
        n = typeof Uint8Array < "u" ? Uint8Array : Array,
        i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (o = 0, s = i.length; o < s; ++o)
        (t[o] = i[o]), (r[i.charCodeAt(o)] = o);
      var o, s;
      (r["-".charCodeAt(0)] = 62), (r["_".charCodeAt(0)] = 63);
      function a(v) {
        var E = v.length;
        if (E % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var A = v.indexOf("=");
        A === -1 && (A = E);
        var M = A === E ? 0 : 4 - (A % 4);
        return [A, M];
      }
      function u(v) {
        var E = a(v),
          A = E[0],
          M = E[1];
        return ((A + M) * 3) / 4 - M;
      }
      function l(v, E, A) {
        return ((E + A) * 3) / 4 - A;
      }
      function c(v) {
        var E,
          A = a(v),
          M = A[0],
          O = A[1],
          S = new n(l(v, M, O)),
          R = 0,
          j = O > 0 ? M - 4 : M,
          U;
        for (U = 0; U < j; U += 4)
          (E =
            (r[v.charCodeAt(U)] << 18) |
            (r[v.charCodeAt(U + 1)] << 12) |
            (r[v.charCodeAt(U + 2)] << 6) |
            r[v.charCodeAt(U + 3)]),
            (S[R++] = (E >> 16) & 255),
            (S[R++] = (E >> 8) & 255),
            (S[R++] = E & 255);
        return (
          O === 2 &&
            ((E = (r[v.charCodeAt(U)] << 2) | (r[v.charCodeAt(U + 1)] >> 4)),
            (S[R++] = E & 255)),
          O === 1 &&
            ((E =
              (r[v.charCodeAt(U)] << 10) |
              (r[v.charCodeAt(U + 1)] << 4) |
              (r[v.charCodeAt(U + 2)] >> 2)),
            (S[R++] = (E >> 8) & 255),
            (S[R++] = E & 255)),
          S
        );
      }
      function g(v) {
        return (
          t[(v >> 18) & 63] + t[(v >> 12) & 63] + t[(v >> 6) & 63] + t[v & 63]
        );
      }
      function y(v, E, A) {
        for (var M, O = [], S = E; S < A; S += 3)
          (M =
            ((v[S] << 16) & 16711680) +
            ((v[S + 1] << 8) & 65280) +
            (v[S + 2] & 255)),
            O.push(g(M));
        return O.join("");
      }
      function P(v) {
        for (
          var E, A = v.length, M = A % 3, O = [], S = 16383, R = 0, j = A - M;
          R < j;
          R += S
        )
          O.push(y(v, R, R + S > j ? j : R + S));
        return (
          M === 1
            ? ((E = v[A - 1]), O.push(t[E >> 2] + t[(E << 4) & 63] + "=="))
            : M === 2 &&
              ((E = (v[A - 2] << 8) + v[A - 1]),
              O.push(t[E >> 10] + t[(E >> 4) & 63] + t[(E << 2) & 63] + "=")),
          O.join("")
        );
      }
    }),
    Ql = Zo((e) => {
      (e.read = function (t, r, n, i, o) {
        var s,
          a,
          u = o * 8 - i - 1,
          l = (1 << u) - 1,
          c = l >> 1,
          g = -7,
          y = n ? o - 1 : 0,
          P = n ? -1 : 1,
          v = t[r + y];
        for (
          y += P, s = v & ((1 << -g) - 1), v >>= -g, g += u;
          g > 0;
          s = s * 256 + t[r + y], y += P, g -= 8
        );
        for (
          a = s & ((1 << -g) - 1), s >>= -g, g += i;
          g > 0;
          a = a * 256 + t[r + y], y += P, g -= 8
        );
        if (s === 0) s = 1 - c;
        else {
          if (s === l) return a ? NaN : (v ? -1 : 1) * (1 / 0);
          (a = a + Math.pow(2, i)), (s = s - c);
        }
        return (v ? -1 : 1) * a * Math.pow(2, s - i);
      }),
        (e.write = function (t, r, n, i, o, s) {
          var a,
            u,
            l,
            c = s * 8 - o - 1,
            g = (1 << c) - 1,
            y = g >> 1,
            P = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            v = i ? 0 : s - 1,
            E = i ? 1 : -1,
            A = r < 0 || (r === 0 && 1 / r < 0) ? 1 : 0;
          for (
            r = Math.abs(r),
              isNaN(r) || r === 1 / 0
                ? ((u = isNaN(r) ? 1 : 0), (a = g))
                : ((a = Math.floor(Math.log(r) / Math.LN2)),
                  r * (l = Math.pow(2, -a)) < 1 && (a--, (l *= 2)),
                  a + y >= 1 ? (r += P / l) : (r += P * Math.pow(2, 1 - y)),
                  r * l >= 2 && (a++, (l /= 2)),
                  a + y >= g
                    ? ((u = 0), (a = g))
                    : a + y >= 1
                    ? ((u = (r * l - 1) * Math.pow(2, o)), (a = a + y))
                    : ((u = r * Math.pow(2, y - 1) * Math.pow(2, o)), (a = 0)));
            o >= 8;
            t[n + v] = u & 255, v += E, u /= 256, o -= 8
          );
          for (
            a = (a << o) | u, c += o;
            c > 0;
            t[n + v] = a & 255, v += E, a /= 256, c -= 8
          );
          t[n + v - E] |= A * 128;
        });
    }),
    Ei = Kl(),
    Ut = Ql(),
    Wo =
      typeof Symbol == "function" && typeof Symbol.for == "function"
        ? Symbol.for("nodejs.util.inspect.custom")
        : null;
  qt.Buffer = T;
  qt.SlowBuffer = Yl;
  qt.INSPECT_MAX_BYTES = 50;
  var on = 2147483647;
  qt.kMaxLength = on;
  T.TYPED_ARRAY_SUPPORT = Jl();
  !T.TYPED_ARRAY_SUPPORT &&
    typeof console < "u" &&
    typeof console.error == "function" &&
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
    );
  function Jl() {
    try {
      let e = new Uint8Array(1),
        t = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(t, Uint8Array.prototype),
        Object.setPrototypeOf(e, t),
        e.foo() === 42
      );
    } catch (e) {
      return !1;
    }
  }
  Object.defineProperty(T.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (T.isBuffer(this)) return this.buffer;
    },
  });
  Object.defineProperty(T.prototype, "offset", {
    enumerable: !0,
    get: function () {
      if (T.isBuffer(this)) return this.byteOffset;
    },
  });
  function Ze(e) {
    if (e > on)
      throw new RangeError(
        'The value "' + e + '" is invalid for option "size"',
      );
    let t = new Uint8Array(e);
    return Object.setPrototypeOf(t, T.prototype), t;
  }
  function T(e, t, r) {
    if (typeof e == "number") {
      if (typeof t == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number',
        );
      return Ti(e);
    }
    return Xo(e, t, r);
  }
  T.poolSize = 8192;
  function Xo(e, t, r) {
    if (typeof e == "string") return Wl(e, t);
    if (ArrayBuffer.isView(e)) return Hl(e);
    if (e == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof e,
      );
    if (
      Ve(e, ArrayBuffer) ||
      (e && Ve(e.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < "u" &&
        (Ve(e, SharedArrayBuffer) || (e && Ve(e.buffer, SharedArrayBuffer))))
    )
      return ts(e, t, r);
    if (typeof e == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number',
      );
    let n = e.valueOf && e.valueOf();
    if (n != null && n !== e) return T.from(n, t, r);
    let i = zl(e);
    if (i) return i;
    if (
      typeof Symbol < "u" &&
      Symbol.toPrimitive != null &&
      typeof e[Symbol.toPrimitive] == "function"
    )
      return T.from(e[Symbol.toPrimitive]("string"), t, r);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof e,
    );
  }
  T.from = function (e, t, r) {
    return Xo(e, t, r);
  };
  Object.setPrototypeOf(T.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(T, Uint8Array);
  function es(e) {
    if (typeof e != "number")
      throw new TypeError('"size" argument must be of type number');
    if (e < 0)
      throw new RangeError(
        'The value "' + e + '" is invalid for option "size"',
      );
  }
  function Gl(e, t, r) {
    return (
      es(e),
      e <= 0
        ? Ze(e)
        : t !== void 0
        ? typeof r == "string"
          ? Ze(e).fill(t, r)
          : Ze(e).fill(t)
        : Ze(e)
    );
  }
  T.alloc = function (e, t, r) {
    return Gl(e, t, r);
  };
  function Ti(e) {
    return es(e), Ze(e < 0 ? 0 : Ai(e) | 0);
  }
  T.allocUnsafe = function (e) {
    return Ti(e);
  };
  T.allocUnsafeSlow = function (e) {
    return Ti(e);
  };
  function Wl(e, t) {
    if (((typeof t != "string" || t === "") && (t = "utf8"), !T.isEncoding(t)))
      throw new TypeError("Unknown encoding: " + t);
    let r = rs(e, t) | 0,
      n = Ze(r),
      i = n.write(e, t);
    return i !== r && (n = n.slice(0, i)), n;
  }
  function Pi(e) {
    let t = e.length < 0 ? 0 : Ai(e.length) | 0,
      r = Ze(t);
    for (let n = 0; n < t; n += 1) r[n] = e[n] & 255;
    return r;
  }
  function Hl(e) {
    if (Ve(e, Uint8Array)) {
      let t = new Uint8Array(e);
      return ts(t.buffer, t.byteOffset, t.byteLength);
    }
    return Pi(e);
  }
  function ts(e, t, r) {
    if (t < 0 || e.byteLength < t)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (e.byteLength < t + (r || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let n;
    return (
      t === void 0 && r === void 0
        ? (n = new Uint8Array(e))
        : r === void 0
        ? (n = new Uint8Array(e, t))
        : (n = new Uint8Array(e, t, r)),
      Object.setPrototypeOf(n, T.prototype),
      n
    );
  }
  function zl(e) {
    if (T.isBuffer(e)) {
      let t = Ai(e.length) | 0,
        r = Ze(t);
      return r.length === 0 || e.copy(r, 0, 0, t), r;
    }
    if (e.length !== void 0)
      return typeof e.length != "number" || _i(e.length) ? Ze(0) : Pi(e);
    if (e.type === "Buffer" && Array.isArray(e.data)) return Pi(e.data);
  }
  function Ai(e) {
    if (e >= on)
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          on.toString(16) +
          " bytes",
      );
    return e | 0;
  }
  function Yl(e) {
    return +e != e && (e = 0), T.alloc(+e);
  }
  T.isBuffer = function (e) {
    return e != null && e._isBuffer === !0 && e !== T.prototype;
  };
  T.compare = function (e, t) {
    if (
      (Ve(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)),
      Ve(t, Uint8Array) && (t = T.from(t, t.offset, t.byteLength)),
      !T.isBuffer(e) || !T.isBuffer(t))
    )
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
      );
    if (e === t) return 0;
    let r = e.length,
      n = t.length;
    for (let i = 0, o = Math.min(r, n); i < o; ++i)
      if (e[i] !== t[i]) {
        (r = e[i]), (n = t[i]);
        break;
      }
    return r < n ? -1 : n < r ? 1 : 0;
  };
  T.isEncoding = function (e) {
    switch (String(e).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  };
  T.concat = function (e, t) {
    if (!Array.isArray(e))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (e.length === 0) return T.alloc(0);
    let r;
    if (t === void 0) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
    let n = T.allocUnsafe(t),
      i = 0;
    for (r = 0; r < e.length; ++r) {
      let o = e[r];
      if (Ve(o, Uint8Array))
        i + o.length > n.length
          ? (T.isBuffer(o) || (o = T.from(o)), o.copy(n, i))
          : Uint8Array.prototype.set.call(n, o, i);
      else if (T.isBuffer(o)) o.copy(n, i);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      i += o.length;
    }
    return n;
  };
  function rs(e, t) {
    if (T.isBuffer(e)) return e.length;
    if (ArrayBuffer.isView(e) || Ve(e, ArrayBuffer)) return e.byteLength;
    if (typeof e != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof e,
      );
    let r = e.length,
      n = arguments.length > 2 && arguments[2] === !0;
    if (!n && r === 0) return 0;
    let i = !1;
    for (;;)
      switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return r;
        case "utf8":
        case "utf-8":
          return vi(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return r * 2;
        case "hex":
          return r >>> 1;
        case "base64":
          return ps(e).length;
        default:
          if (i) return n ? -1 : vi(e).length;
          (t = ("" + t).toLowerCase()), (i = !0);
      }
  }
  T.byteLength = rs;
  function Zl(e, t, r) {
    let n = !1;
    if (
      ((t === void 0 || t < 0) && (t = 0),
      t > this.length ||
        ((r === void 0 || r > this.length) && (r = this.length), r <= 0) ||
        ((r >>>= 0), (t >>>= 0), r <= t))
    )
      return "";
    for (e || (e = "utf8"); ; )
      switch (e) {
        case "hex":
          return uc(this, t, r);
        case "utf8":
        case "utf-8":
          return is(this, t, r);
        case "ascii":
          return sc(this, t, r);
        case "latin1":
        case "binary":
          return ac(this, t, r);
        case "base64":
          return ic(this, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return lc(this, t, r);
        default:
          if (n) throw new TypeError("Unknown encoding: " + e);
          (e = (e + "").toLowerCase()), (n = !0);
      }
  }
  T.prototype._isBuffer = !0;
  function At(e, t, r) {
    let n = e[t];
    (e[t] = e[r]), (e[r] = n);
  }
  T.prototype.swap16 = function () {
    let e = this.length;
    if (e % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let t = 0; t < e; t += 2) At(this, t, t + 1);
    return this;
  };
  T.prototype.swap32 = function () {
    let e = this.length;
    if (e % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let t = 0; t < e; t += 4) At(this, t, t + 3), At(this, t + 1, t + 2);
    return this;
  };
  T.prototype.swap64 = function () {
    let e = this.length;
    if (e % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let t = 0; t < e; t += 8)
      At(this, t, t + 7),
        At(this, t + 1, t + 6),
        At(this, t + 2, t + 5),
        At(this, t + 3, t + 4);
    return this;
  };
  T.prototype.toString = function () {
    let e = this.length;
    return e === 0
      ? ""
      : arguments.length === 0
      ? is(this, 0, e)
      : Zl.apply(this, arguments);
  };
  T.prototype.toLocaleString = T.prototype.toString;
  T.prototype.equals = function (e) {
    if (!T.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
    return this === e ? !0 : T.compare(this, e) === 0;
  };
  T.prototype.inspect = function () {
    let e = "",
      t = qt.INSPECT_MAX_BYTES;
    return (
      (e = this.toString("hex", 0, t)
        .replace(/(.{2})/g, "$1 ")
        .trim()),
      this.length > t && (e += " ... "),
      "<Buffer " + e + ">"
    );
  };
  Wo && (T.prototype[Wo] = T.prototype.inspect);
  T.prototype.compare = function (e, t, r, n, i) {
    if (
      (Ve(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)),
      !T.isBuffer(e))
    )
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
          typeof e,
      );
    if (
      (t === void 0 && (t = 0),
      r === void 0 && (r = e ? e.length : 0),
      n === void 0 && (n = 0),
      i === void 0 && (i = this.length),
      t < 0 || r > e.length || n < 0 || i > this.length)
    )
      throw new RangeError("out of range index");
    if (n >= i && t >= r) return 0;
    if (n >= i) return -1;
    if (t >= r) return 1;
    if (((t >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === e)) return 0;
    let o = i - n,
      s = r - t,
      a = Math.min(o, s),
      u = this.slice(n, i),
      l = e.slice(t, r);
    for (let c = 0; c < a; ++c)
      if (u[c] !== l[c]) {
        (o = u[c]), (s = l[c]);
        break;
      }
    return o < s ? -1 : s < o ? 1 : 0;
  };
  function ns(e, t, r, n, i) {
    if (e.length === 0) return -1;
    if (
      (typeof r == "string"
        ? ((n = r), (r = 0))
        : r > 2147483647
        ? (r = 2147483647)
        : r < -2147483648 && (r = -2147483648),
      (r = +r),
      _i(r) && (r = i ? 0 : e.length - 1),
      r < 0 && (r = e.length + r),
      r >= e.length)
    ) {
      if (i) return -1;
      r = e.length - 1;
    } else if (r < 0)
      if (i) r = 0;
      else return -1;
    if ((typeof t == "string" && (t = T.from(t, n)), T.isBuffer(t)))
      return t.length === 0 ? -1 : Ho(e, t, r, n, i);
    if (typeof t == "number")
      return (
        (t = t & 255),
        typeof Uint8Array.prototype.indexOf == "function"
          ? i
            ? Uint8Array.prototype.indexOf.call(e, t, r)
            : Uint8Array.prototype.lastIndexOf.call(e, t, r)
          : Ho(e, [t], r, n, i)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function Ho(e, t, r, n, i) {
    let o = 1,
      s = e.length,
      a = t.length;
    if (
      n !== void 0 &&
      ((n = String(n).toLowerCase()),
      n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")
    ) {
      if (e.length < 2 || t.length < 2) return -1;
      (o = 2), (s /= 2), (a /= 2), (r /= 2);
    }
    function u(c, g) {
      return o === 1 ? c[g] : c.readUInt16BE(g * o);
    }
    let l;
    if (i) {
      let c = -1;
      for (l = r; l < s; l++)
        if (u(e, l) === u(t, c === -1 ? 0 : l - c)) {
          if ((c === -1 && (c = l), l - c + 1 === a)) return c * o;
        } else c !== -1 && (l -= l - c), (c = -1);
    } else
      for (r + a > s && (r = s - a), l = r; l >= 0; l--) {
        let c = !0;
        for (let g = 0; g < a; g++)
          if (u(e, l + g) !== u(t, g)) {
            c = !1;
            break;
          }
        if (c) return l;
      }
    return -1;
  }
  T.prototype.includes = function (e, t, r) {
    return this.indexOf(e, t, r) !== -1;
  };
  T.prototype.indexOf = function (e, t, r) {
    return ns(this, e, t, r, !0);
  };
  T.prototype.lastIndexOf = function (e, t, r) {
    return ns(this, e, t, r, !1);
  };
  function Xl(e, t, r, n) {
    r = Number(r) || 0;
    let i = e.length - r;
    n ? ((n = Number(n)), n > i && (n = i)) : (n = i);
    let o = t.length;
    n > o / 2 && (n = o / 2);
    let s;
    for (s = 0; s < n; ++s) {
      let a = parseInt(t.substr(s * 2, 2), 16);
      if (_i(a)) return s;
      e[r + s] = a;
    }
    return s;
  }
  function ec(e, t, r, n) {
    return sn(vi(t, e.length - r), e, r, n);
  }
  function tc(e, t, r, n) {
    return sn(dc(t), e, r, n);
  }
  function rc(e, t, r, n) {
    return sn(ps(t), e, r, n);
  }
  function nc(e, t, r, n) {
    return sn(mc(t, e.length - r), e, r, n);
  }
  T.prototype.write = function (e, t, r, n) {
    if (t === void 0) (n = "utf8"), (r = this.length), (t = 0);
    else if (r === void 0 && typeof t == "string")
      (n = t), (r = this.length), (t = 0);
    else if (isFinite(t))
      (t = t >>> 0),
        isFinite(r)
          ? ((r = r >>> 0), n === void 0 && (n = "utf8"))
          : ((n = r), (r = void 0));
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported",
      );
    let i = this.length - t;
    if (
      ((r === void 0 || r > i) && (r = i),
      (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    n || (n = "utf8");
    let o = !1;
    for (;;)
      switch (n) {
        case "hex":
          return Xl(this, e, t, r);
        case "utf8":
        case "utf-8":
          return ec(this, e, t, r);
        case "ascii":
        case "latin1":
        case "binary":
          return tc(this, e, t, r);
        case "base64":
          return rc(this, e, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return nc(this, e, t, r);
        default:
          if (o) throw new TypeError("Unknown encoding: " + n);
          (n = ("" + n).toLowerCase()), (o = !0);
      }
  };
  T.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  };
  function ic(e, t, r) {
    return t === 0 && r === e.length
      ? Ei.fromByteArray(e)
      : Ei.fromByteArray(e.slice(t, r));
  }
  function is(e, t, r) {
    r = Math.min(e.length, r);
    let n = [],
      i = t;
    for (; i < r; ) {
      let o = e[i],
        s = null,
        a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
      if (i + a <= r) {
        let u, l, c, g;
        switch (a) {
          case 1:
            o < 128 && (s = o);
            break;
          case 2:
            (u = e[i + 1]),
              (u & 192) === 128 &&
                ((g = ((o & 31) << 6) | (u & 63)), g > 127 && (s = g));
            break;
          case 3:
            (u = e[i + 1]),
              (l = e[i + 2]),
              (u & 192) === 128 &&
                (l & 192) === 128 &&
                ((g = ((o & 15) << 12) | ((u & 63) << 6) | (l & 63)),
                g > 2047 && (g < 55296 || g > 57343) && (s = g));
            break;
          case 4:
            (u = e[i + 1]),
              (l = e[i + 2]),
              (c = e[i + 3]),
              (u & 192) === 128 &&
                (l & 192) === 128 &&
                (c & 192) === 128 &&
                ((g =
                  ((o & 15) << 18) |
                  ((u & 63) << 12) |
                  ((l & 63) << 6) |
                  (c & 63)),
                g > 65535 && g < 1114112 && (s = g));
        }
      }
      s === null
        ? ((s = 65533), (a = 1))
        : s > 65535 &&
          ((s -= 65536),
          n.push(((s >>> 10) & 1023) | 55296),
          (s = 56320 | (s & 1023))),
        n.push(s),
        (i += a);
    }
    return oc(n);
  }
  var zo = 4096;
  function oc(e) {
    let t = e.length;
    if (t <= zo) return String.fromCharCode.apply(String, e);
    let r = "",
      n = 0;
    for (; n < t; )
      r += String.fromCharCode.apply(String, e.slice(n, (n += zo)));
    return r;
  }
  function sc(e, t, r) {
    let n = "";
    r = Math.min(e.length, r);
    for (let i = t; i < r; ++i) n += String.fromCharCode(e[i] & 127);
    return n;
  }
  function ac(e, t, r) {
    let n = "";
    r = Math.min(e.length, r);
    for (let i = t; i < r; ++i) n += String.fromCharCode(e[i]);
    return n;
  }
  function uc(e, t, r) {
    let n = e.length;
    (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
    let i = "";
    for (let o = t; o < r; ++o) i += gc[e[o]];
    return i;
  }
  function lc(e, t, r) {
    let n = e.slice(t, r),
      i = "";
    for (let o = 0; o < n.length - 1; o += 2)
      i += String.fromCharCode(n[o] + n[o + 1] * 256);
    return i;
  }
  T.prototype.slice = function (e, t) {
    let r = this.length;
    (e = ~~e),
      (t = t === void 0 ? r : ~~t),
      e < 0 ? ((e += r), e < 0 && (e = 0)) : e > r && (e = r),
      t < 0 ? ((t += r), t < 0 && (t = 0)) : t > r && (t = r),
      t < e && (t = e);
    let n = this.subarray(e, t);
    return Object.setPrototypeOf(n, T.prototype), n;
  };
  function ae(e, t, r) {
    if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
    if (e + t > r)
      throw new RangeError("Trying to access beyond buffer length");
  }
  T.prototype.readUintLE = T.prototype.readUIntLE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || ae(e, t, this.length);
    let n = this[e],
      i = 1,
      o = 0;
    for (; ++o < t && (i *= 256); ) n += this[e + o] * i;
    return n;
  };
  T.prototype.readUintBE = T.prototype.readUIntBE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || ae(e, t, this.length);
    let n = this[e + --t],
      i = 1;
    for (; t > 0 && (i *= 256); ) n += this[e + --t] * i;
    return n;
  };
  T.prototype.readUint8 = T.prototype.readUInt8 = function (e, t) {
    return (e = e >>> 0), t || ae(e, 1, this.length), this[e];
  };
  T.prototype.readUint16LE = T.prototype.readUInt16LE = function (e, t) {
    return (
      (e = e >>> 0), t || ae(e, 2, this.length), this[e] | (this[e + 1] << 8)
    );
  };
  T.prototype.readUint16BE = T.prototype.readUInt16BE = function (e, t) {
    return (
      (e = e >>> 0), t || ae(e, 2, this.length), (this[e] << 8) | this[e + 1]
    );
  };
  T.prototype.readUint32LE = T.prototype.readUInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || ae(e, 4, this.length),
      (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
        this[e + 3] * 16777216
    );
  };
  T.prototype.readUint32BE = T.prototype.readUInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || ae(e, 4, this.length),
      this[e] * 16777216 +
        ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
    );
  };
  T.prototype.readBigUInt64LE = at(function (e) {
    (e = e >>> 0), $t(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && hr(e, this.length - 8);
    let n = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
      i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + r * 2 ** 24;
    return BigInt(n) + (BigInt(i) << BigInt(32));
  });
  T.prototype.readBigUInt64BE = at(function (e) {
    (e = e >>> 0), $t(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && hr(e, this.length - 8);
    let n = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e],
      i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r;
    return (BigInt(n) << BigInt(32)) + BigInt(i);
  });
  T.prototype.readIntLE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || ae(e, t, this.length);
    let n = this[e],
      i = 1,
      o = 0;
    for (; ++o < t && (i *= 256); ) n += this[e + o] * i;
    return (i *= 128), n >= i && (n -= Math.pow(2, 8 * t)), n;
  };
  T.prototype.readIntBE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || ae(e, t, this.length);
    let n = t,
      i = 1,
      o = this[e + --n];
    for (; n > 0 && (i *= 256); ) o += this[e + --n] * i;
    return (i *= 128), o >= i && (o -= Math.pow(2, 8 * t)), o;
  };
  T.prototype.readInt8 = function (e, t) {
    return (
      (e = e >>> 0),
      t || ae(e, 1, this.length),
      this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
    );
  };
  T.prototype.readInt16LE = function (e, t) {
    (e = e >>> 0), t || ae(e, 2, this.length);
    let r = this[e] | (this[e + 1] << 8);
    return r & 32768 ? r | 4294901760 : r;
  };
  T.prototype.readInt16BE = function (e, t) {
    (e = e >>> 0), t || ae(e, 2, this.length);
    let r = this[e + 1] | (this[e] << 8);
    return r & 32768 ? r | 4294901760 : r;
  };
  T.prototype.readInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || ae(e, 4, this.length),
      this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
    );
  };
  T.prototype.readInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || ae(e, 4, this.length),
      (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
    );
  };
  T.prototype.readBigInt64LE = at(function (e) {
    (e = e >>> 0), $t(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && hr(e, this.length - 8);
    let n =
      this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (r << 24);
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24)
    );
  });
  T.prototype.readBigInt64BE = at(function (e) {
    (e = e >>> 0), $t(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && hr(e, this.length - 8);
    let n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r)
    );
  });
  T.prototype.readFloatLE = function (e, t) {
    return (
      (e = e >>> 0), t || ae(e, 4, this.length), Ut.read(this, e, !0, 23, 4)
    );
  };
  T.prototype.readFloatBE = function (e, t) {
    return (
      (e = e >>> 0), t || ae(e, 4, this.length), Ut.read(this, e, !1, 23, 4)
    );
  };
  T.prototype.readDoubleLE = function (e, t) {
    return (
      (e = e >>> 0), t || ae(e, 8, this.length), Ut.read(this, e, !0, 52, 8)
    );
  };
  T.prototype.readDoubleBE = function (e, t) {
    return (
      (e = e >>> 0), t || ae(e, 8, this.length), Ut.read(this, e, !1, 52, 8)
    );
  };
  function _e(e, t, r, n, i, o) {
    if (!T.isBuffer(e))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > i || t < o)
      throw new RangeError('"value" argument is out of bounds');
    if (r + n > e.length) throw new RangeError("Index out of range");
  }
  T.prototype.writeUintLE = T.prototype.writeUIntLE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), (r = r >>> 0), !n)) {
      let s = Math.pow(2, 8 * r) - 1;
      _e(this, e, t, r, s, 0);
    }
    let i = 1,
      o = 0;
    for (this[t] = e & 255; ++o < r && (i *= 256); )
      this[t + o] = (e / i) & 255;
    return t + r;
  };
  T.prototype.writeUintBE = T.prototype.writeUIntBE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), (r = r >>> 0), !n)) {
      let s = Math.pow(2, 8 * r) - 1;
      _e(this, e, t, r, s, 0);
    }
    let i = r - 1,
      o = 1;
    for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
      this[t + i] = (e / o) & 255;
    return t + r;
  };
  T.prototype.writeUint8 = T.prototype.writeUInt8 = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || _e(this, e, t, 1, 255, 0),
      (this[t] = e & 255),
      t + 1
    );
  };
  T.prototype.writeUint16LE = T.prototype.writeUInt16LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || _e(this, e, t, 2, 65535, 0),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  };
  T.prototype.writeUint16BE = T.prototype.writeUInt16BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || _e(this, e, t, 2, 65535, 0),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  };
  T.prototype.writeUint32LE = T.prototype.writeUInt32LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || _e(this, e, t, 4, 4294967295, 0),
      (this[t + 3] = e >>> 24),
      (this[t + 2] = e >>> 16),
      (this[t + 1] = e >>> 8),
      (this[t] = e & 255),
      t + 4
    );
  };
  T.prototype.writeUint32BE = T.prototype.writeUInt32BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || _e(this, e, t, 4, 4294967295, 0),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  };
  function os(e, t, r, n, i) {
    cs(t, n, i, e, r, 7);
    let o = Number(t & BigInt(4294967295));
    (e[r++] = o),
      (o = o >> 8),
      (e[r++] = o),
      (o = o >> 8),
      (e[r++] = o),
      (o = o >> 8),
      (e[r++] = o);
    let s = Number((t >> BigInt(32)) & BigInt(4294967295));
    return (
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      r
    );
  }
  function ss(e, t, r, n, i) {
    cs(t, n, i, e, r, 7);
    let o = Number(t & BigInt(4294967295));
    (e[r + 7] = o),
      (o = o >> 8),
      (e[r + 6] = o),
      (o = o >> 8),
      (e[r + 5] = o),
      (o = o >> 8),
      (e[r + 4] = o);
    let s = Number((t >> BigInt(32)) & BigInt(4294967295));
    return (
      (e[r + 3] = s),
      (s = s >> 8),
      (e[r + 2] = s),
      (s = s >> 8),
      (e[r + 1] = s),
      (s = s >> 8),
      (e[r] = s),
      r + 8
    );
  }
  T.prototype.writeBigUInt64LE = at(function (e, t = 0) {
    return os(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  T.prototype.writeBigUInt64BE = at(function (e, t = 0) {
    return ss(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  T.prototype.writeIntLE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), !n)) {
      let a = Math.pow(2, 8 * r - 1);
      _e(this, e, t, r, a - 1, -a);
    }
    let i = 0,
      o = 1,
      s = 0;
    for (this[t] = e & 255; ++i < r && (o *= 256); )
      e < 0 && s === 0 && this[t + i - 1] !== 0 && (s = 1),
        (this[t + i] = (((e / o) >> 0) - s) & 255);
    return t + r;
  };
  T.prototype.writeIntBE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), !n)) {
      let a = Math.pow(2, 8 * r - 1);
      _e(this, e, t, r, a - 1, -a);
    }
    let i = r - 1,
      o = 1,
      s = 0;
    for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
      e < 0 && s === 0 && this[t + i + 1] !== 0 && (s = 1),
        (this[t + i] = (((e / o) >> 0) - s) & 255);
    return t + r;
  };
  T.prototype.writeInt8 = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || _e(this, e, t, 1, 127, -128),
      e < 0 && (e = 255 + e + 1),
      (this[t] = e & 255),
      t + 1
    );
  };
  T.prototype.writeInt16LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || _e(this, e, t, 2, 32767, -32768),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  };
  T.prototype.writeInt16BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || _e(this, e, t, 2, 32767, -32768),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  };
  T.prototype.writeInt32LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || _e(this, e, t, 4, 2147483647, -2147483648),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      (this[t + 2] = e >>> 16),
      (this[t + 3] = e >>> 24),
      t + 4
    );
  };
  T.prototype.writeInt32BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || _e(this, e, t, 4, 2147483647, -2147483648),
      e < 0 && (e = 4294967295 + e + 1),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  };
  T.prototype.writeBigInt64LE = at(function (e, t = 0) {
    return os(
      this,
      e,
      t,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff"),
    );
  });
  T.prototype.writeBigInt64BE = at(function (e, t = 0) {
    return ss(
      this,
      e,
      t,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff"),
    );
  });
  function as(e, t, r, n, i, o) {
    if (r + n > e.length) throw new RangeError("Index out of range");
    if (r < 0) throw new RangeError("Index out of range");
  }
  function us(e, t, r, n, i) {
    return (
      (t = +t),
      (r = r >>> 0),
      i || as(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
      Ut.write(e, t, r, n, 23, 4),
      r + 4
    );
  }
  T.prototype.writeFloatLE = function (e, t, r) {
    return us(this, e, t, !0, r);
  };
  T.prototype.writeFloatBE = function (e, t, r) {
    return us(this, e, t, !1, r);
  };
  function ls(e, t, r, n, i) {
    return (
      (t = +t),
      (r = r >>> 0),
      i || as(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
      Ut.write(e, t, r, n, 52, 8),
      r + 8
    );
  }
  T.prototype.writeDoubleLE = function (e, t, r) {
    return ls(this, e, t, !0, r);
  };
  T.prototype.writeDoubleBE = function (e, t, r) {
    return ls(this, e, t, !1, r);
  };
  T.prototype.copy = function (e, t, r, n) {
    if (!T.isBuffer(e)) throw new TypeError("argument should be a Buffer");
    if (
      (r || (r = 0),
      !n && n !== 0 && (n = this.length),
      t >= e.length && (t = e.length),
      t || (t = 0),
      n > 0 && n < r && (n = r),
      n === r || e.length === 0 || this.length === 0)
    )
      return 0;
    if (t < 0) throw new RangeError("targetStart out of bounds");
    if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
    if (n < 0) throw new RangeError("sourceEnd out of bounds");
    n > this.length && (n = this.length),
      e.length - t < n - r && (n = e.length - t + r);
    let i = n - r;
    return (
      this === e && typeof Uint8Array.prototype.copyWithin == "function"
        ? this.copyWithin(t, r, n)
        : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
      i
    );
  };
  T.prototype.fill = function (e, t, r, n) {
    if (typeof e == "string") {
      if (
        (typeof t == "string"
          ? ((n = t), (t = 0), (r = this.length))
          : typeof r == "string" && ((n = r), (r = this.length)),
        n !== void 0 && typeof n != "string")
      )
        throw new TypeError("encoding must be a string");
      if (typeof n == "string" && !T.isEncoding(n))
        throw new TypeError("Unknown encoding: " + n);
      if (e.length === 1) {
        let o = e.charCodeAt(0);
        ((n === "utf8" && o < 128) || n === "latin1") && (e = o);
      }
    } else
      typeof e == "number"
        ? (e = e & 255)
        : typeof e == "boolean" && (e = Number(e));
    if (t < 0 || this.length < t || this.length < r)
      throw new RangeError("Out of range index");
    if (r <= t) return this;
    (t = t >>> 0), (r = r === void 0 ? this.length : r >>> 0), e || (e = 0);
    let i;
    if (typeof e == "number") for (i = t; i < r; ++i) this[i] = e;
    else {
      let o = T.isBuffer(e) ? e : T.from(e, n),
        s = o.length;
      if (s === 0)
        throw new TypeError(
          'The value "' + e + '" is invalid for argument "value"',
        );
      for (i = 0; i < r - t; ++i) this[i + t] = o[i % s];
    }
    return this;
  };
  var jt = {};
  function Ci(e, t, r) {
    jt[e] = class extends r {
      constructor() {
        super(),
          Object.defineProperty(this, "message", {
            value: t.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          (this.name = `${this.name} [${e}]`),
          this.stack,
          delete this.name;
      }
      get code() {
        return e;
      }
      set code(n) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0,
        });
      }
      toString() {
        return `${this.name} [${e}]: ${this.message}`;
      }
    };
  }
  Ci(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function (e) {
      return e
        ? `${e} is outside of buffer bounds`
        : "Attempt to access memory outside buffer bounds";
    },
    RangeError,
  );
  Ci(
    "ERR_INVALID_ARG_TYPE",
    function (e, t) {
      return `The "${e}" argument must be of type number. Received type ${typeof t}`;
    },
    TypeError,
  );
  Ci(
    "ERR_OUT_OF_RANGE",
    function (e, t, r) {
      let n = `The value of "${e}" is out of range.`,
        i = r;
      return (
        Number.isInteger(r) && Math.abs(r) > 2 ** 32
          ? (i = Yo(String(r)))
          : typeof r == "bigint" &&
            ((i = String(r)),
            (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) &&
              (i = Yo(i)),
            (i += "n")),
        (n += ` It must be ${t}. Received ${i}`),
        n
      );
    },
    RangeError,
  );
  function Yo(e) {
    let t = "",
      r = e.length,
      n = e[0] === "-" ? 1 : 0;
    for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
    return `${e.slice(0, r)}${t}`;
  }
  function cc(e, t, r) {
    $t(t, "offset"),
      (e[t] === void 0 || e[t + r] === void 0) && hr(t, e.length - (r + 1));
  }
  function cs(e, t, r, n, i, o) {
    if (e > r || e < t) {
      let s = typeof t == "bigint" ? "n" : "",
        a;
      throw (
        (o > 3
          ? t === 0 || t === BigInt(0)
            ? (a = `>= 0${s} and < 2${s} ** ${(o + 1) * 8}${s}`)
            : (a = `>= -(2${s} ** ${(o + 1) * 8 - 1}${s}) and < 2 ** ${
                (o + 1) * 8 - 1
              }${s}`)
          : (a = `>= ${t}${s} and <= ${r}${s}`),
        new jt.ERR_OUT_OF_RANGE("value", a, e))
      );
    }
    cc(n, i, o);
  }
  function $t(e, t) {
    if (typeof e != "number") throw new jt.ERR_INVALID_ARG_TYPE(t, "number", e);
  }
  function hr(e, t, r) {
    throw Math.floor(e) !== e
      ? ($t(e, r), new jt.ERR_OUT_OF_RANGE(r || "offset", "an integer", e))
      : t < 0
      ? new jt.ERR_BUFFER_OUT_OF_BOUNDS()
      : new jt.ERR_OUT_OF_RANGE(
          r || "offset",
          `>= ${r ? 1 : 0} and <= ${t}`,
          e,
        );
  }
  var pc = /[^+/0-9A-Za-z-_]/g;
  function fc(e) {
    if (((e = e.split("=")[0]), (e = e.trim().replace(pc, "")), e.length < 2))
      return "";
    for (; e.length % 4 !== 0; ) e = e + "=";
    return e;
  }
  function vi(e, t) {
    t = t || 1 / 0;
    let r,
      n = e.length,
      i = null,
      o = [];
    for (let s = 0; s < n; ++s) {
      if (((r = e.charCodeAt(s)), r > 55295 && r < 57344)) {
        if (!i) {
          if (r > 56319) {
            (t -= 3) > -1 && o.push(239, 191, 189);
            continue;
          } else if (s + 1 === n) {
            (t -= 3) > -1 && o.push(239, 191, 189);
            continue;
          }
          i = r;
          continue;
        }
        if (r < 56320) {
          (t -= 3) > -1 && o.push(239, 191, 189), (i = r);
          continue;
        }
        r = (((i - 55296) << 10) | (r - 56320)) + 65536;
      } else i && (t -= 3) > -1 && o.push(239, 191, 189);
      if (((i = null), r < 128)) {
        if ((t -= 1) < 0) break;
        o.push(r);
      } else if (r < 2048) {
        if ((t -= 2) < 0) break;
        o.push((r >> 6) | 192, (r & 63) | 128);
      } else if (r < 65536) {
        if ((t -= 3) < 0) break;
        o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (r & 63) | 128);
      } else if (r < 1114112) {
        if ((t -= 4) < 0) break;
        o.push(
          (r >> 18) | 240,
          ((r >> 12) & 63) | 128,
          ((r >> 6) & 63) | 128,
          (r & 63) | 128,
        );
      } else throw new Error("Invalid code point");
    }
    return o;
  }
  function dc(e) {
    let t = [];
    for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r) & 255);
    return t;
  }
  function mc(e, t) {
    let r,
      n,
      i,
      o = [];
    for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
      (r = e.charCodeAt(s)), (n = r >> 8), (i = r % 256), o.push(i), o.push(n);
    return o;
  }
  function ps(e) {
    return Ei.toByteArray(fc(e));
  }
  function sn(e, t, r, n) {
    let i;
    for (i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
      t[i + r] = e[i];
    return i;
  }
  function Ve(e, t) {
    return (
      e instanceof t ||
      (e != null &&
        e.constructor != null &&
        e.constructor.name != null &&
        e.constructor.name === t.name)
    );
  }
  function _i(e) {
    return e !== e;
  }
  var gc = (function () {
    let e = "0123456789abcdef",
      t = new Array(256);
    for (let r = 0; r < 16; ++r) {
      let n = r * 16;
      for (let i = 0; i < 16; ++i) t[n + i] = e[r] + e[i];
    }
    return t;
  })();
  function at(e) {
    return typeof BigInt > "u" ? yc : e;
  }
  function yc() {
    throw new Error("BigInt not supported");
  }
});
var w,
  m = gr(() => {
    "use strict";
    w = Pe(fs());
  });
var Bi = X((q) => {
  "use strict";
  m();
  p();
  f();
  d();
  var ee = (e, t) => () => (
      t || e((t = { exports: {} }).exports, t), t.exports
    ),
    Ts = ee((e, t) => {
      "use strict";
      t.exports = function () {
        if (
          typeof Symbol != "function" ||
          typeof Object.getOwnPropertySymbols != "function"
        )
          return !1;
        if (typeof Symbol.iterator == "symbol") return !0;
        var r = {},
          n = Symbol("test"),
          i = Object(n);
        if (
          typeof n == "string" ||
          Object.prototype.toString.call(n) !== "[object Symbol]" ||
          Object.prototype.toString.call(i) !== "[object Symbol]"
        )
          return !1;
        var o = 42;
        r[n] = o;
        for (n in r) return !1;
        if (
          (typeof Object.keys == "function" && Object.keys(r).length !== 0) ||
          (typeof Object.getOwnPropertyNames == "function" &&
            Object.getOwnPropertyNames(r).length !== 0)
        )
          return !1;
        var s = Object.getOwnPropertySymbols(r);
        if (
          s.length !== 1 ||
          s[0] !== n ||
          !Object.prototype.propertyIsEnumerable.call(r, n)
        )
          return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
          var a = Object.getOwnPropertyDescriptor(r, n);
          if (a.value !== o || a.enumerable !== !0) return !1;
        }
        return !0;
      };
    }),
    fn = ee((e, t) => {
      "use strict";
      var r = Ts();
      t.exports = function () {
        return r() && !!Symbol.toStringTag;
      };
    }),
    hc = ee((e, t) => {
      "use strict";
      var r = typeof Symbol < "u" && Symbol,
        n = Ts();
      t.exports = function () {
        return typeof r != "function" ||
          typeof Symbol != "function" ||
          typeof r("foo") != "symbol" ||
          typeof Symbol("bar") != "symbol"
          ? !1
          : n();
      };
    }),
    bc = ee((e, t) => {
      "use strict";
      var r = { foo: {} },
        n = Object;
      t.exports = function () {
        return (
          { __proto__: r }.foo === r.foo && !({ __proto__: null } instanceof n)
        );
      };
    }),
    wc = ee((e, t) => {
      "use strict";
      var r = "Function.prototype.bind called on incompatible ",
        n = Object.prototype.toString,
        i = Math.max,
        o = "[object Function]",
        s = function (l, c) {
          for (var g = [], y = 0; y < l.length; y += 1) g[y] = l[y];
          for (var P = 0; P < c.length; P += 1) g[P + l.length] = c[P];
          return g;
        },
        a = function (l, c) {
          for (var g = [], y = c || 0, P = 0; y < l.length; y += 1, P += 1)
            g[P] = l[y];
          return g;
        },
        u = function (l, c) {
          for (var g = "", y = 0; y < l.length; y += 1)
            (g += l[y]), y + 1 < l.length && (g += c);
          return g;
        };
      t.exports = function (l) {
        var c = this;
        if (typeof c != "function" || n.apply(c) !== o)
          throw new TypeError(r + c);
        for (
          var g = a(arguments, 1),
            y,
            P = function () {
              if (this instanceof y) {
                var O = c.apply(this, s(g, arguments));
                return Object(O) === O ? O : this;
              }
              return c.apply(l, s(g, arguments));
            },
            v = i(0, c.length - g.length),
            E = [],
            A = 0;
          A < v;
          A++
        )
          E[A] = "$" + A;
        if (
          ((y = b(
            "binder",
            "return function (" +
              u(E, ",") +
              "){ return binder.apply(this,arguments); }",
          )(P)),
          c.prototype)
        ) {
          var M = function () {};
          (M.prototype = c.prototype),
            (y.prototype = new M()),
            (M.prototype = null);
        }
        return y;
      };
    }),
    ki = ee((e, t) => {
      "use strict";
      var r = wc();
      t.exports = b.prototype.bind || r;
    }),
    xc = ee((e, t) => {
      "use strict";
      var r = ki();
      t.exports = r.call(b.call, Object.prototype.hasOwnProperty);
    }),
    Fi = ee((e, t) => {
      "use strict";
      var r,
        n = SyntaxError,
        i = b,
        o = TypeError,
        s = function (Q) {
          try {
            return i('"use strict"; return (' + Q + ").constructor;")();
          } catch (K) {}
        },
        a = Object.getOwnPropertyDescriptor;
      if (a)
        try {
          a({}, "");
        } catch (Q) {
          a = null;
        }
      var u = function () {
          throw new o();
        },
        l = a
          ? (function () {
              try {
                return arguments.callee, u;
              } catch (Q) {
                try {
                  return a(arguments, "callee").get;
                } catch (K) {
                  return u;
                }
              }
            })()
          : u,
        c = hc()(),
        g = bc()(),
        y =
          Object.getPrototypeOf ||
          (g
            ? function (Q) {
                return Q.__proto__;
              }
            : null),
        P = {},
        v = typeof Uint8Array > "u" || !y ? r : y(Uint8Array),
        E = {
          "%AggregateError%": typeof AggregateError > "u" ? r : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
          "%ArrayIteratorPrototype%": c && y ? y([][Symbol.iterator]()) : r,
          "%AsyncFromSyncIteratorPrototype%": r,
          "%AsyncFunction%": P,
          "%AsyncGenerator%": P,
          "%AsyncGeneratorFunction%": P,
          "%AsyncIteratorPrototype%": P,
          "%Atomics%": typeof Atomics > "u" ? r : Atomics,
          "%BigInt%": typeof BigInt > "u" ? r : BigInt,
          "%BigInt64Array%": typeof BigInt64Array > "u" ? r : BigInt64Array,
          "%BigUint64Array%": typeof BigUint64Array > "u" ? r : BigUint64Array,
          "%Boolean%": Boolean,
          "%DataView%": typeof DataView > "u" ? r : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": Error,
          "%eval%": void 0,
          "%EvalError%": EvalError,
          "%Float32Array%": typeof Float32Array > "u" ? r : Float32Array,
          "%Float64Array%": typeof Float64Array > "u" ? r : Float64Array,
          "%FinalizationRegistry%":
            typeof FinalizationRegistry > "u" ? r : FinalizationRegistry,
          "%Function%": i,
          "%GeneratorFunction%": P,
          "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
          "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
          "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": c && y ? y(y([][Symbol.iterator]())) : r,
          "%JSON%": typeof JSON == "object" ? JSON : r,
          "%Map%": typeof Map > "u" ? r : Map,
          "%MapIteratorPrototype%":
            typeof Map > "u" || !c || !y ? r : y(new Map()[Symbol.iterator]()),
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": Object,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": typeof Promise > "u" ? r : Promise,
          "%Proxy%": typeof Proxy > "u" ? r : Proxy,
          "%RangeError%": RangeError,
          "%ReferenceError%": ReferenceError,
          "%Reflect%": typeof Reflect > "u" ? r : Reflect,
          "%RegExp%": RegExp,
          "%Set%": typeof Set > "u" ? r : Set,
          "%SetIteratorPrototype%":
            typeof Set > "u" || !c || !y ? r : y(new Set()[Symbol.iterator]()),
          "%SharedArrayBuffer%":
            typeof SharedArrayBuffer > "u" ? r : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": c && y ? y(""[Symbol.iterator]()) : r,
          "%Symbol%": c ? Symbol : r,
          "%SyntaxError%": n,
          "%ThrowTypeError%": l,
          "%TypedArray%": v,
          "%TypeError%": o,
          "%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array,
          "%Uint8ClampedArray%":
            typeof Uint8ClampedArray > "u" ? r : Uint8ClampedArray,
          "%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array,
          "%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array,
          "%URIError%": URIError,
          "%WeakMap%": typeof WeakMap > "u" ? r : WeakMap,
          "%WeakRef%": typeof x > "u" ? r : x,
          "%WeakSet%": typeof WeakSet > "u" ? r : WeakSet,
        };
      if (y)
        try {
          null.error;
        } catch (Q) {
          (A = y(y(Q))), (E["%Error.prototype%"] = A);
        }
      var A,
        M = function Q(K) {
          var k;
          if (K === "%AsyncFunction%") k = s("async function () {}");
          else if (K === "%GeneratorFunction%") k = s("function* () {}");
          else if (K === "%AsyncGeneratorFunction%")
            k = s("async function* () {}");
          else if (K === "%AsyncGenerator%") {
            var pe = Q("%AsyncGeneratorFunction%");
            pe && (k = pe.prototype);
          } else if (K === "%AsyncIteratorPrototype%") {
            var fe = Q("%AsyncGenerator%");
            fe && y && (k = y(fe.prototype));
          }
          return (E[K] = k), k;
        },
        O = {
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": [
            "AsyncGeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": [
            "GeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"],
        },
        S = ki(),
        R = xc(),
        j = S.call(b.call, Array.prototype.concat),
        U = S.call(b.apply, Array.prototype.splice),
        De = S.call(b.call, String.prototype.replace),
        G = S.call(b.call, String.prototype.slice),
        te = S.call(b.call, RegExp.prototype.exec),
        Re =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        re = /\\(\\)?/g,
        Oe = function (Q) {
          var K = G(Q, 0, 1),
            k = G(Q, -1);
          if (K === "%" && k !== "%")
            throw new n("invalid intrinsic syntax, expected closing `%`");
          if (k === "%" && K !== "%")
            throw new n("invalid intrinsic syntax, expected opening `%`");
          var pe = [];
          return (
            De(Q, Re, function (fe, ot, ne, Pt) {
              pe[pe.length] = ne ? De(Pt, re, "$1") : ot || fe;
            }),
            pe
          );
        },
        it = function (Q, K) {
          var k = Q,
            pe;
          if ((R(O, k) && ((pe = O[k]), (k = "%" + pe[0] + "%")), R(E, k))) {
            var fe = E[k];
            if ((fe === P && (fe = M(k)), typeof fe > "u" && !K))
              throw new o(
                "intrinsic " +
                  Q +
                  " exists, but is not available. Please file an issue!",
              );
            return { alias: pe, name: k, value: fe };
          }
          throw new n("intrinsic " + Q + " does not exist!");
        };
      t.exports = function (Q, K) {
        if (typeof Q != "string" || Q.length === 0)
          throw new o("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof K != "boolean")
          throw new o('"allowMissing" argument must be a boolean');
        if (te(/^%?[^%]*%?$/, Q) === null)
          throw new n(
            "`%` may not be present anywhere but at the beginning and end of the intrinsic name",
          );
        var k = Oe(Q),
          pe = k.length > 0 ? k[0] : "",
          fe = it("%" + pe + "%", K),
          ot = fe.name,
          ne = fe.value,
          Pt = !1,
          st = fe.alias;
        st && ((pe = st[0]), U(k, j([0, 1], st)));
        for (var vt = 1, Ye = !0; vt < k.length; vt += 1) {
          var Ee = k[vt],
            Tt = G(Ee, 0, 1),
            Lt = G(Ee, -1);
          if (
            (Tt === '"' ||
              Tt === "'" ||
              Tt === "`" ||
              Lt === '"' ||
              Lt === "'" ||
              Lt === "`") &&
            Tt !== Lt
          )
            throw new n("property names with quotes must have matching quotes");
          if (
            ((Ee === "constructor" || !Ye) && (Pt = !0),
            (pe += "." + Ee),
            (ot = "%" + pe + "%"),
            R(E, ot))
          )
            ne = E[ot];
          else if (ne != null) {
            if (!(Ee in ne)) {
              if (!K)
                throw new o(
                  "base intrinsic for " +
                    Q +
                    " exists, but the property is not available.",
                );
              return;
            }
            if (a && vt + 1 >= k.length) {
              var Bt = a(ne, Ee);
              (Ye = !!Bt),
                Ye && "get" in Bt && !("originalValue" in Bt.get)
                  ? (ne = Bt.get)
                  : (ne = ne[Ee]);
            } else (Ye = R(ne, Ee)), (ne = ne[Ee]);
            Ye && !Pt && (E[ot] = ne);
          }
        }
        return ne;
      };
    }),
    Ec = ee((e, t) => {
      "use strict";
      var r = ki(),
        n = Fi(),
        i = n("%Function.prototype.apply%"),
        o = n("%Function.prototype.call%"),
        s = n("%Reflect.apply%", !0) || r.call(o, i),
        a = n("%Object.getOwnPropertyDescriptor%", !0),
        u = n("%Object.defineProperty%", !0),
        l = n("%Math.max%");
      if (u)
        try {
          u({}, "a", { value: 1 });
        } catch (g) {
          u = null;
        }
      t.exports = function (g) {
        var y = s(r, o, arguments);
        if (a && u) {
          var P = a(y, "length");
          P.configurable &&
            u(y, "length", {
              value: 1 + l(0, g.length - (arguments.length - 1)),
            });
        }
        return y;
      };
      var c = function () {
        return s(r, i, arguments);
      };
      u ? u(t.exports, "apply", { value: c }) : (t.exports.apply = c);
    }),
    Di = ee((e, t) => {
      "use strict";
      var r = Fi(),
        n = Ec(),
        i = n(r("String.prototype.indexOf"));
      t.exports = function (o, s) {
        var a = r(o, !!s);
        return typeof a == "function" && i(o, ".prototype.") > -1 ? n(a) : a;
      };
    }),
    Pc = ee((e, t) => {
      "use strict";
      var r = fn()(),
        n = Di(),
        i = n("Object.prototype.toString"),
        o = function (u) {
          return r && u && typeof u == "object" && Symbol.toStringTag in u
            ? !1
            : i(u) === "[object Arguments]";
        },
        s = function (u) {
          return o(u)
            ? !0
            : u !== null &&
                typeof u == "object" &&
                typeof u.length == "number" &&
                u.length >= 0 &&
                i(u) !== "[object Array]" &&
                i(u.callee) === "[object Function]";
        },
        a = (function () {
          return o(arguments);
        })();
      (o.isLegacyArguments = s), (t.exports = a ? o : s);
    }),
    vc = ee((e, t) => {
      "use strict";
      var r = Object.prototype.toString,
        n = b.prototype.toString,
        i = /^\s*(?:function)?\*/,
        o = fn()(),
        s = Object.getPrototypeOf,
        a = function () {
          if (!o) return !1;
          try {
            return b("return function*() {}")();
          } catch (l) {}
        },
        u;
      t.exports = function (l) {
        if (typeof l != "function") return !1;
        if (i.test(n.call(l))) return !0;
        if (!o) {
          var c = r.call(l);
          return c === "[object GeneratorFunction]";
        }
        if (!s) return !1;
        if (typeof u > "u") {
          var g = a();
          u = g ? s(g) : !1;
        }
        return s(l) === u;
      };
    }),
    Tc = ee((e, t) => {
      "use strict";
      var r = b.prototype.toString,
        n = typeof Reflect == "object" && Reflect !== null && Reflect.apply,
        i,
        o;
      if (typeof n == "function" && typeof Object.defineProperty == "function")
        try {
          (i = Object.defineProperty({}, "length", {
            get: function () {
              throw o;
            },
          })),
            (o = {}),
            n(
              function () {
                throw 42;
              },
              null,
              i,
            );
        } catch (R) {
          R !== o && (n = null);
        }
      else n = null;
      var s = /^\s*class\b/,
        a = function (R) {
          try {
            var j = r.call(R);
            return s.test(j);
          } catch (U) {
            return !1;
          }
        },
        u = function (R) {
          try {
            return a(R) ? !1 : (r.call(R), !0);
          } catch (j) {
            return !1;
          }
        },
        l = Object.prototype.toString,
        c = "[object Object]",
        g = "[object Function]",
        y = "[object GeneratorFunction]",
        P = "[object HTMLAllCollection]",
        v = "[object HTML document.all class]",
        E = "[object HTMLCollection]",
        A = typeof Symbol == "function" && !!Symbol.toStringTag,
        M = !(0 in [,]),
        O = function () {
          return !1;
        };
      typeof document == "object" &&
        ((S = document.all),
        l.call(S) === l.call(document.all) &&
          (O = function (R) {
            if ((M || !R) && (typeof R > "u" || typeof R == "object"))
              try {
                var j = l.call(R);
                return (
                  (j === P || j === v || j === E || j === c) && R("") == null
                );
              } catch (U) {}
            return !1;
          }));
      var S;
      t.exports = n
        ? function (R) {
            if (O(R)) return !0;
            if (!R || (typeof R != "function" && typeof R != "object"))
              return !1;
            try {
              n(R, null, i);
            } catch (j) {
              if (j !== o) return !1;
            }
            return !a(R) && u(R);
          }
        : function (R) {
            if (O(R)) return !0;
            if (!R || (typeof R != "function" && typeof R != "object"))
              return !1;
            if (A) return u(R);
            if (a(R)) return !1;
            var j = l.call(R);
            return j !== g && j !== y && !/^\[object HTML/.test(j) ? !1 : u(R);
          };
    }),
    As = ee((e, t) => {
      "use strict";
      var r = Tc(),
        n = Object.prototype.toString,
        i = Object.prototype.hasOwnProperty,
        o = function (l, c, g) {
          for (var y = 0, P = l.length; y < P; y++)
            i.call(l, y) && (g == null ? c(l[y], y, l) : c.call(g, l[y], y, l));
        },
        s = function (l, c, g) {
          for (var y = 0, P = l.length; y < P; y++)
            g == null ? c(l.charAt(y), y, l) : c.call(g, l.charAt(y), y, l);
        },
        a = function (l, c, g) {
          for (var y in l)
            i.call(l, y) && (g == null ? c(l[y], y, l) : c.call(g, l[y], y, l));
        },
        u = function (l, c, g) {
          if (!r(c)) throw new TypeError("iterator must be a function");
          var y;
          arguments.length >= 3 && (y = g),
            n.call(l) === "[object Array]"
              ? o(l, c, y)
              : typeof l == "string"
              ? s(l, c, y)
              : a(l, c, y);
        };
      t.exports = u;
    }),
    Cs = ee((e, t) => {
      "use strict";
      var r = [
          "BigInt64Array",
          "BigUint64Array",
          "Float32Array",
          "Float64Array",
          "Int16Array",
          "Int32Array",
          "Int8Array",
          "Uint16Array",
          "Uint32Array",
          "Uint8Array",
          "Uint8ClampedArray",
        ],
        n = typeof globalThis > "u" ? global : globalThis;
      t.exports = function () {
        for (var i = [], o = 0; o < r.length; o++)
          typeof n[r[o]] == "function" && (i[i.length] = r[o]);
        return i;
      };
    }),
    _s = ee((e, t) => {
      "use strict";
      var r = Fi(),
        n = r("%Object.getOwnPropertyDescriptor%", !0);
      if (n)
        try {
          n([], "length");
        } catch (i) {
          n = null;
        }
      t.exports = n;
    }),
    Ss = ee((e, t) => {
      "use strict";
      var r = As(),
        n = Cs(),
        i = Di(),
        o = i("Object.prototype.toString"),
        s = fn()(),
        a = _s(),
        u = typeof globalThis > "u" ? global : globalThis,
        l = n(),
        c =
          i("Array.prototype.indexOf", !0) ||
          function (E, A) {
            for (var M = 0; M < E.length; M += 1) if (E[M] === A) return M;
            return -1;
          },
        g = i("String.prototype.slice"),
        y = {},
        P = Object.getPrototypeOf;
      s &&
        a &&
        P &&
        r(l, function (E) {
          var A = new u[E]();
          if (Symbol.toStringTag in A) {
            var M = P(A),
              O = a(M, Symbol.toStringTag);
            if (!O) {
              var S = P(M);
              O = a(S, Symbol.toStringTag);
            }
            y[E] = O.get;
          }
        });
      var v = function (E) {
        var A = !1;
        return (
          r(y, function (M, O) {
            if (!A)
              try {
                A = M.call(E) === O;
              } catch (S) {}
          }),
          A
        );
      };
      t.exports = function (E) {
        if (!E || typeof E != "object") return !1;
        if (!s || !(Symbol.toStringTag in E)) {
          var A = g(o(E), 8, -1);
          return c(l, A) > -1;
        }
        return a ? v(E) : !1;
      };
    }),
    Ac = ee((e, t) => {
      "use strict";
      var r = As(),
        n = Cs(),
        i = Di(),
        o = _s(),
        s = i("Object.prototype.toString"),
        a = fn()(),
        u = typeof globalThis > "u" ? global : globalThis,
        l = n(),
        c = i("String.prototype.slice"),
        g = {},
        y = Object.getPrototypeOf;
      a &&
        o &&
        y &&
        r(l, function (E) {
          if (typeof u[E] == "function") {
            var A = new u[E]();
            if (Symbol.toStringTag in A) {
              var M = y(A),
                O = o(M, Symbol.toStringTag);
              if (!O) {
                var S = y(M);
                O = o(S, Symbol.toStringTag);
              }
              g[E] = O.get;
            }
          }
        });
      var P = function (E) {
          var A = !1;
          return (
            r(g, function (M, O) {
              if (!A)
                try {
                  var S = M.call(E);
                  S === O && (A = S);
                } catch (R) {}
            }),
            A
          );
        },
        v = Ss();
      t.exports = function (E) {
        return v(E)
          ? !a || !(Symbol.toStringTag in E)
            ? c(s(E), 8, -1)
            : P(E)
          : !1;
      };
    }),
    Cc = ee((e) => {
      "use strict";
      var t = Pc(),
        r = vc(),
        n = Ac(),
        i = Ss();
      function o(_) {
        return _.call.bind(_);
      }
      var s = typeof BigInt < "u",
        a = typeof Symbol < "u",
        u = o(Object.prototype.toString),
        l = o(Number.prototype.valueOf),
        c = o(String.prototype.valueOf),
        g = o(Boolean.prototype.valueOf);
      s && (y = o(BigInt.prototype.valueOf));
      var y;
      a && (P = o(Symbol.prototype.valueOf));
      var P;
      function v(_, Ll) {
        if (typeof _ != "object") return !1;
        try {
          return Ll(_), !0;
        } catch (bg) {
          return !1;
        }
      }
      (e.isArgumentsObject = t),
        (e.isGeneratorFunction = r),
        (e.isTypedArray = i);
      function E(_) {
        return (
          (typeof Promise < "u" && _ instanceof Promise) ||
          (_ !== null &&
            typeof _ == "object" &&
            typeof _.then == "function" &&
            typeof _.catch == "function")
        );
      }
      e.isPromise = E;
      function A(_) {
        return typeof ArrayBuffer < "u" && ArrayBuffer.isView
          ? ArrayBuffer.isView(_)
          : i(_) || vt(_);
      }
      e.isArrayBufferView = A;
      function M(_) {
        return n(_) === "Uint8Array";
      }
      e.isUint8Array = M;
      function O(_) {
        return n(_) === "Uint8ClampedArray";
      }
      e.isUint8ClampedArray = O;
      function S(_) {
        return n(_) === "Uint16Array";
      }
      e.isUint16Array = S;
      function R(_) {
        return n(_) === "Uint32Array";
      }
      e.isUint32Array = R;
      function j(_) {
        return n(_) === "Int8Array";
      }
      e.isInt8Array = j;
      function U(_) {
        return n(_) === "Int16Array";
      }
      e.isInt16Array = U;
      function De(_) {
        return n(_) === "Int32Array";
      }
      e.isInt32Array = De;
      function G(_) {
        return n(_) === "Float32Array";
      }
      e.isFloat32Array = G;
      function te(_) {
        return n(_) === "Float64Array";
      }
      e.isFloat64Array = te;
      function Re(_) {
        return n(_) === "BigInt64Array";
      }
      e.isBigInt64Array = Re;
      function re(_) {
        return n(_) === "BigUint64Array";
      }
      e.isBigUint64Array = re;
      function Oe(_) {
        return u(_) === "[object Map]";
      }
      Oe.working = typeof Map < "u" && Oe(new Map());
      function it(_) {
        return typeof Map > "u" ? !1 : Oe.working ? Oe(_) : _ instanceof Map;
      }
      e.isMap = it;
      function Q(_) {
        return u(_) === "[object Set]";
      }
      Q.working = typeof Set < "u" && Q(new Set());
      function K(_) {
        return typeof Set > "u" ? !1 : Q.working ? Q(_) : _ instanceof Set;
      }
      e.isSet = K;
      function k(_) {
        return u(_) === "[object WeakMap]";
      }
      k.working = typeof WeakMap < "u" && k(new WeakMap());
      function pe(_) {
        return typeof WeakMap > "u"
          ? !1
          : k.working
          ? k(_)
          : _ instanceof WeakMap;
      }
      e.isWeakMap = pe;
      function fe(_) {
        return u(_) === "[object WeakSet]";
      }
      fe.working = typeof WeakSet < "u" && fe(new WeakSet());
      function ot(_) {
        return fe(_);
      }
      e.isWeakSet = ot;
      function ne(_) {
        return u(_) === "[object ArrayBuffer]";
      }
      ne.working = typeof ArrayBuffer < "u" && ne(new ArrayBuffer());
      function Pt(_) {
        return typeof ArrayBuffer > "u"
          ? !1
          : ne.working
          ? ne(_)
          : _ instanceof ArrayBuffer;
      }
      e.isArrayBuffer = Pt;
      function st(_) {
        return u(_) === "[object DataView]";
      }
      st.working =
        typeof ArrayBuffer < "u" &&
        typeof DataView < "u" &&
        st(new DataView(new ArrayBuffer(1), 0, 1));
      function vt(_) {
        return typeof DataView > "u"
          ? !1
          : st.working
          ? st(_)
          : _ instanceof DataView;
      }
      e.isDataView = vt;
      var Ye = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
      function Ee(_) {
        return u(_) === "[object SharedArrayBuffer]";
      }
      function Tt(_) {
        return typeof Ye > "u"
          ? !1
          : (typeof Ee.working > "u" && (Ee.working = Ee(new Ye())),
            Ee.working ? Ee(_) : _ instanceof Ye);
      }
      e.isSharedArrayBuffer = Tt;
      function Lt(_) {
        return u(_) === "[object AsyncFunction]";
      }
      e.isAsyncFunction = Lt;
      function Bt(_) {
        return u(_) === "[object Map Iterator]";
      }
      e.isMapIterator = Bt;
      function Il(_) {
        return u(_) === "[object Set Iterator]";
      }
      e.isSetIterator = Il;
      function kl(_) {
        return u(_) === "[object Generator]";
      }
      e.isGeneratorObject = kl;
      function Fl(_) {
        return u(_) === "[object WebAssembly.Module]";
      }
      e.isWebAssemblyCompiledModule = Fl;
      function Vo(_) {
        return v(_, l);
      }
      e.isNumberObject = Vo;
      function Ko(_) {
        return v(_, c);
      }
      e.isStringObject = Ko;
      function Qo(_) {
        return v(_, g);
      }
      e.isBooleanObject = Qo;
      function Jo(_) {
        return s && v(_, y);
      }
      e.isBigIntObject = Jo;
      function Go(_) {
        return a && v(_, P);
      }
      e.isSymbolObject = Go;
      function Dl(_) {
        return Vo(_) || Ko(_) || Qo(_) || Jo(_) || Go(_);
      }
      e.isBoxedPrimitive = Dl;
      function Nl(_) {
        return typeof Uint8Array < "u" && (Pt(_) || Tt(_));
      }
      (e.isAnyArrayBuffer = Nl),
        ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(
          function (_) {
            Object.defineProperty(e, _, {
              enumerable: !1,
              value: function () {
                throw new Error(_ + " is not supported in userland");
              },
            });
          },
        );
    }),
    _c = ee((e, t) => {
      t.exports = function (r) {
        return r instanceof w.Buffer;
      };
    }),
    Sc = ee((e, t) => {
      typeof Object.create == "function"
        ? (t.exports = function (r, n) {
            n &&
              ((r.super_ = n),
              (r.prototype = Object.create(n.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (t.exports = function (r, n) {
            if (n) {
              r.super_ = n;
              var i = function () {};
              (i.prototype = n.prototype),
                (r.prototype = new i()),
                (r.prototype.constructor = r);
            }
          });
    }),
    Ms =
      Object.getOwnPropertyDescriptors ||
      function (e) {
        for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++)
          r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
        return r;
      },
    Mc = /%[sdj%]/g;
  q.format = function (e) {
    if (!mn(e)) {
      for (var t = [], r = 0; r < arguments.length; r++)
        t.push(lt(arguments[r]));
      return t.join(" ");
    }
    for (
      var r = 1,
        n = arguments,
        i = n.length,
        o = String(e).replace(Mc, function (u) {
          if (u === "%%") return "%";
          if (r >= i) return u;
          switch (u) {
            case "%s":
              return String(n[r++]);
            case "%d":
              return Number(n[r++]);
            case "%j":
              try {
                return JSON.stringify(n[r++]);
              } catch (l) {
                return "[Circular]";
              }
            default:
              return u;
          }
        }),
        s = n[r];
      r < i;
      s = n[++r]
    )
      dn(s) || !Vt(s) ? (o += " " + s) : (o += " " + lt(s));
    return o;
  };
  q.deprecate = function (e, t) {
    if (typeof h < "u" && h.noDeprecation === !0) return e;
    if (typeof h > "u")
      return function () {
        return q.deprecate(e, t).apply(this, arguments);
      };
    var r = !1;
    function n() {
      if (!r) {
        if (h.throwDeprecation) throw new Error(t);
        h.traceDeprecation ? console.trace(t) : console.error(t), (r = !0);
      }
      return e.apply(this, arguments);
    }
    return n;
  };
  var an = {},
    Rs = /^$/;
  h.env.NODE_DEBUG &&
    ((un = h.env.NODE_DEBUG),
    (un = un
      .replace(/[|\\{}()[\]^$+?.]/g, "\\$&")
      .replace(/\*/g, ".*")
      .replace(/,/g, "$|^")
      .toUpperCase()),
    (Rs = new RegExp("^" + un + "$", "i")));
  var un;
  q.debuglog = function (e) {
    if (((e = e.toUpperCase()), !an[e]))
      if (Rs.test(e)) {
        var t = h.pid;
        an[e] = function () {
          var r = q.format.apply(q, arguments);
          console.error("%s %d: %s", e, t, r);
        };
      } else an[e] = function () {};
    return an[e];
  };
  function lt(e, t) {
    var r = { seen: [], stylize: Oc };
    return (
      arguments.length >= 3 && (r.depth = arguments[2]),
      arguments.length >= 4 && (r.colors = arguments[3]),
      Ni(t) ? (r.showHidden = t) : t && q._extend(r, t),
      _t(r.showHidden) && (r.showHidden = !1),
      _t(r.depth) && (r.depth = 2),
      _t(r.colors) && (r.colors = !1),
      _t(r.customInspect) && (r.customInspect = !0),
      r.colors && (r.stylize = Rc),
      cn(r, e, r.depth)
    );
  }
  q.inspect = lt;
  lt.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39],
  };
  lt.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    regexp: "red",
  };
  function Rc(e, t) {
    var r = lt.styles[t];
    return r
      ? "\x1B[" + lt.colors[r][0] + "m" + e + "\x1B[" + lt.colors[r][1] + "m"
      : e;
  }
  function Oc(e, t) {
    return e;
  }
  function Ic(e) {
    var t = {};
    return (
      e.forEach(function (r, n) {
        t[r] = !0;
      }),
      t
    );
  }
  function cn(e, t, r) {
    if (
      e.customInspect &&
      t &&
      ln(t.inspect) &&
      t.inspect !== q.inspect &&
      !(t.constructor && t.constructor.prototype === t)
    ) {
      var n = t.inspect(r, e);
      return mn(n) || (n = cn(e, n, r)), n;
    }
    var i = kc(e, t);
    if (i) return i;
    var o = Object.keys(t),
      s = Ic(o);
    if (
      (e.showHidden && (o = Object.getOwnPropertyNames(t)),
      wr(t) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0))
    )
      return Ri(t);
    if (o.length === 0) {
      if (ln(t)) {
        var a = t.name ? ": " + t.name : "";
        return e.stylize("[Function" + a + "]", "special");
      }
      if (br(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
      if (pn(t)) return e.stylize(Date.prototype.toString.call(t), "date");
      if (wr(t)) return Ri(t);
    }
    var u = "",
      l = !1,
      c = ["{", "}"];
    if ((Os(t) && ((l = !0), (c = ["[", "]"])), ln(t))) {
      var g = t.name ? ": " + t.name : "";
      u = " [Function" + g + "]";
    }
    if (
      (br(t) && (u = " " + RegExp.prototype.toString.call(t)),
      pn(t) && (u = " " + Date.prototype.toUTCString.call(t)),
      wr(t) && (u = " " + Ri(t)),
      o.length === 0 && (!l || t.length == 0))
    )
      return c[0] + u + c[1];
    if (r < 0)
      return br(t)
        ? e.stylize(RegExp.prototype.toString.call(t), "regexp")
        : e.stylize("[Object]", "special");
    e.seen.push(t);
    var y;
    return (
      l
        ? (y = Fc(e, t, r, s, o))
        : (y = o.map(function (P) {
            return Ii(e, t, r, s, P, l);
          })),
      e.seen.pop(),
      Dc(y, u, c)
    );
  }
  function kc(e, t) {
    if (_t(t)) return e.stylize("undefined", "undefined");
    if (mn(t)) {
      var r =
        "'" +
        JSON.stringify(t)
          .replace(/^"|"$/g, "")
          .replace(/'/g, "\\'")
          .replace(/\\"/g, '"') +
        "'";
      return e.stylize(r, "string");
    }
    if (Is(t)) return e.stylize("" + t, "number");
    if (Ni(t)) return e.stylize("" + t, "boolean");
    if (dn(t)) return e.stylize("null", "null");
  }
  function Ri(e) {
    return "[" + Error.prototype.toString.call(e) + "]";
  }
  function Fc(e, t, r, n, i) {
    for (var o = [], s = 0, a = t.length; s < a; ++s)
      ks(t, String(s)) ? o.push(Ii(e, t, r, n, String(s), !0)) : o.push("");
    return (
      i.forEach(function (u) {
        u.match(/^\d+$/) || o.push(Ii(e, t, r, n, u, !0));
      }),
      o
    );
  }
  function Ii(e, t, r, n, i, o) {
    var s, a, u;
    if (
      ((u = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] }),
      u.get
        ? u.set
          ? (a = e.stylize("[Getter/Setter]", "special"))
          : (a = e.stylize("[Getter]", "special"))
        : u.set && (a = e.stylize("[Setter]", "special")),
      ks(n, i) || (s = "[" + i + "]"),
      a ||
        (e.seen.indexOf(u.value) < 0
          ? (dn(r) ? (a = cn(e, u.value, null)) : (a = cn(e, u.value, r - 1)),
            a.indexOf(`
`) > -1 &&
              (o
                ? (a = a
                    .split(
                      `
`,
                    )
                    .map(function (l) {
                      return "  " + l;
                    })
                    .join(
                      `
`,
                    )
                    .slice(2))
                : (a =
                    `
` +
                    a
                      .split(
                        `
`,
                      )
                      .map(function (l) {
                        return "   " + l;
                      }).join(`
`))))
          : (a = e.stylize("[Circular]", "special"))),
      _t(s))
    ) {
      if (o && i.match(/^\d+$/)) return a;
      (s = JSON.stringify("" + i)),
        s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
          ? ((s = s.slice(1, -1)), (s = e.stylize(s, "name")))
          : ((s = s
              .replace(/'/g, "\\'")
              .replace(/\\"/g, '"')
              .replace(/(^"|"$)/g, "'")),
            (s = e.stylize(s, "string")));
    }
    return s + ": " + a;
  }
  function Dc(e, t, r) {
    var n = 0,
      i = e.reduce(function (o, s) {
        return (
          n++,
          s.indexOf(`
`) >= 0 && n++,
          o + s.replace(/\u001b\[\d\d?m/g, "").length + 1
        );
      }, 0);
    return i > 60
      ? r[0] +
          (t === ""
            ? ""
            : t +
              `
 `) +
          " " +
          e.join(`,
  `) +
          " " +
          r[1]
      : r[0] + t + " " + e.join(", ") + " " + r[1];
  }
  q.types = Cc();
  function Os(e) {
    return Array.isArray(e);
  }
  q.isArray = Os;
  function Ni(e) {
    return typeof e == "boolean";
  }
  q.isBoolean = Ni;
  function dn(e) {
    return e === null;
  }
  q.isNull = dn;
  function Nc(e) {
    return e == null;
  }
  q.isNullOrUndefined = Nc;
  function Is(e) {
    return typeof e == "number";
  }
  q.isNumber = Is;
  function mn(e) {
    return typeof e == "string";
  }
  q.isString = mn;
  function Lc(e) {
    return typeof e == "symbol";
  }
  q.isSymbol = Lc;
  function _t(e) {
    return e === void 0;
  }
  q.isUndefined = _t;
  function br(e) {
    return Vt(e) && Li(e) === "[object RegExp]";
  }
  q.isRegExp = br;
  q.types.isRegExp = br;
  function Vt(e) {
    return typeof e == "object" && e !== null;
  }
  q.isObject = Vt;
  function pn(e) {
    return Vt(e) && Li(e) === "[object Date]";
  }
  q.isDate = pn;
  q.types.isDate = pn;
  function wr(e) {
    return Vt(e) && (Li(e) === "[object Error]" || e instanceof Error);
  }
  q.isError = wr;
  q.types.isNativeError = wr;
  function ln(e) {
    return typeof e == "function";
  }
  q.isFunction = ln;
  function Bc(e) {
    return (
      e === null ||
      typeof e == "boolean" ||
      typeof e == "number" ||
      typeof e == "string" ||
      typeof e == "symbol" ||
      typeof e > "u"
    );
  }
  q.isPrimitive = Bc;
  q.isBuffer = _c();
  function Li(e) {
    return Object.prototype.toString.call(e);
  }
  function Oi(e) {
    return e < 10 ? "0" + e.toString(10) : e.toString(10);
  }
  var jc = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  function Uc() {
    var e = new Date(),
      t = [Oi(e.getHours()), Oi(e.getMinutes()), Oi(e.getSeconds())].join(":");
    return [e.getDate(), jc[e.getMonth()], t].join(" ");
  }
  q.log = function () {
    console.log("%s - %s", Uc(), q.format.apply(q, arguments));
  };
  q.inherits = Sc();
  q._extend = function (e, t) {
    if (!t || !Vt(t)) return e;
    for (var r = Object.keys(t), n = r.length; n--; ) e[r[n]] = t[r[n]];
    return e;
  };
  function ks(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  var Ct = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
  q.promisify = function (e) {
    if (typeof e != "function")
      throw new TypeError('The "original" argument must be of type Function');
    if (Ct && e[Ct]) {
      var t = e[Ct];
      if (typeof t != "function")
        throw new TypeError(
          'The "util.promisify.custom" argument must be of type Function',
        );
      return (
        Object.defineProperty(t, Ct, {
          value: t,
          enumerable: !1,
          writable: !1,
          configurable: !0,
        }),
        t
      );
    }
    function t() {
      for (
        var r,
          n,
          i = new Promise(function (a, u) {
            (r = a), (n = u);
          }),
          o = [],
          s = 0;
        s < arguments.length;
        s++
      )
        o.push(arguments[s]);
      o.push(function (a, u) {
        a ? n(a) : r(u);
      });
      try {
        e.apply(this, o);
      } catch (a) {
        n(a);
      }
      return i;
    }
    return (
      Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
      Ct &&
        Object.defineProperty(t, Ct, {
          value: t,
          enumerable: !1,
          writable: !1,
          configurable: !0,
        }),
      Object.defineProperties(t, Ms(e))
    );
  };
  q.promisify.custom = Ct;
  function $c(e, t) {
    if (!e) {
      var r = new Error("Promise was rejected with a falsy value");
      (r.reason = e), (e = r);
    }
    return t(e);
  }
  function qc(e) {
    if (typeof e != "function")
      throw new TypeError('The "original" argument must be of type Function');
    function t() {
      for (var r = [], n = 0; n < arguments.length; n++) r.push(arguments[n]);
      var i = r.pop();
      if (typeof i != "function")
        throw new TypeError("The last argument must be of type Function");
      var o = this,
        s = function () {
          return i.apply(o, arguments);
        };
      e.apply(this, r).then(
        function (a) {
          h.nextTick(s.bind(null, null, a));
        },
        function (a) {
          h.nextTick($c.bind(null, a, s));
        },
      );
    }
    return (
      Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
      Object.defineProperties(t, Ms(e)),
      t
    );
  }
  q.callbackify = qc;
});
var Ds = X((Vy, Fs) => {
  "use strict";
  m();
  p();
  f();
  d();
  var Kt = 1e3,
    Qt = Kt * 60,
    Jt = Qt * 60,
    St = Jt * 24,
    Vc = St * 7,
    Kc = St * 365.25;
  Fs.exports = function (e, t) {
    t = t || {};
    var r = typeof e;
    if (r === "string" && e.length > 0) return Qc(e);
    if (r === "number" && isFinite(e)) return t.long ? Gc(e) : Jc(e);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(e),
    );
  };
  function Qc(e) {
    if (((e = String(e)), !(e.length > 100))) {
      var t =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          e,
        );
      if (t) {
        var r = parseFloat(t[1]),
          n = (t[2] || "ms").toLowerCase();
        switch (n) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return r * Kc;
          case "weeks":
          case "week":
          case "w":
            return r * Vc;
          case "days":
          case "day":
          case "d":
            return r * St;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return r * Jt;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return r * Qt;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return r * Kt;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return r;
          default:
            return;
        }
      }
    }
  }
  function Jc(e) {
    var t = Math.abs(e);
    return t >= St
      ? Math.round(e / St) + "d"
      : t >= Jt
      ? Math.round(e / Jt) + "h"
      : t >= Qt
      ? Math.round(e / Qt) + "m"
      : t >= Kt
      ? Math.round(e / Kt) + "s"
      : e + "ms";
  }
  function Gc(e) {
    var t = Math.abs(e);
    return t >= St
      ? gn(e, t, St, "day")
      : t >= Jt
      ? gn(e, t, Jt, "hour")
      : t >= Qt
      ? gn(e, t, Qt, "minute")
      : t >= Kt
      ? gn(e, t, Kt, "second")
      : e + " ms";
  }
  function gn(e, t, r, n) {
    var i = t >= r * 1.5;
    return Math.round(e / r) + " " + n + (i ? "s" : "");
  }
});
var ji = X((Wy, Ns) => {
  "use strict";
  m();
  p();
  f();
  d();
  function Wc(e) {
    (r.debug = r),
      (r.default = r),
      (r.coerce = u),
      (r.disable = o),
      (r.enable = i),
      (r.enabled = s),
      (r.humanize = Ds()),
      (r.destroy = l),
      Object.keys(e).forEach((c) => {
        r[c] = e[c];
      }),
      (r.names = []),
      (r.skips = []),
      (r.formatters = {});
    function t(c) {
      let g = 0;
      for (let y = 0; y < c.length; y++)
        (g = (g << 5) - g + c.charCodeAt(y)), (g |= 0);
      return r.colors[Math.abs(g) % r.colors.length];
    }
    r.selectColor = t;
    function r(c) {
      let g,
        y = null,
        P,
        v;
      function E(...A) {
        if (!E.enabled) return;
        let M = E,
          O = Number(new Date()),
          S = O - (g || O);
        (M.diff = S),
          (M.prev = g),
          (M.curr = O),
          (g = O),
          (A[0] = r.coerce(A[0])),
          typeof A[0] != "string" && A.unshift("%O");
        let R = 0;
        (A[0] = A[0].replace(/%([a-zA-Z%])/g, (U, De) => {
          if (U === "%%") return "%";
          R++;
          let G = r.formatters[De];
          if (typeof G == "function") {
            let te = A[R];
            (U = G.call(M, te)), A.splice(R, 1), R--;
          }
          return U;
        })),
          r.formatArgs.call(M, A),
          (M.log || r.log).apply(M, A);
      }
      return (
        (E.namespace = c),
        (E.useColors = r.useColors()),
        (E.color = r.selectColor(c)),
        (E.extend = n),
        (E.destroy = r.destroy),
        Object.defineProperty(E, "enabled", {
          enumerable: !0,
          configurable: !1,
          get: () =>
            y !== null
              ? y
              : (P !== r.namespaces && ((P = r.namespaces), (v = r.enabled(c))),
                v),
          set: (A) => {
            y = A;
          },
        }),
        typeof r.init == "function" && r.init(E),
        E
      );
    }
    function n(c, g) {
      let y = r(this.namespace + (typeof g == "undefined" ? ":" : g) + c);
      return (y.log = this.log), y;
    }
    function i(c) {
      r.save(c), (r.namespaces = c), (r.names = []), (r.skips = []);
      let g,
        y = (typeof c == "string" ? c : "").split(/[\s,]+/),
        P = y.length;
      for (g = 0; g < P; g++)
        y[g] &&
          ((c = y[g].replace(/\*/g, ".*?")),
          c[0] === "-"
            ? r.skips.push(new RegExp("^" + c.slice(1) + "$"))
            : r.names.push(new RegExp("^" + c + "$")));
    }
    function o() {
      let c = [...r.names.map(a), ...r.skips.map(a).map((g) => "-" + g)].join(
        ",",
      );
      return r.enable(""), c;
    }
    function s(c) {
      if (c[c.length - 1] === "*") return !0;
      let g, y;
      for (g = 0, y = r.skips.length; g < y; g++)
        if (r.skips[g].test(c)) return !1;
      for (g = 0, y = r.names.length; g < y; g++)
        if (r.names[g].test(c)) return !0;
      return !1;
    }
    function a(c) {
      return c
        .toString()
        .substring(2, c.toString().length - 2)
        .replace(/\.\*\?$/, "*");
    }
    function u(c) {
      return c instanceof Error ? c.stack || c.message : c;
    }
    function l() {
      console.warn(
        "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
      );
    }
    return r.enable(r.load()), r;
  }
  Ns.exports = Wc;
});
var Ls = X((Ie, yn) => {
  "use strict";
  m();
  p();
  f();
  d();
  Ie.formatArgs = zc;
  Ie.save = Yc;
  Ie.load = Zc;
  Ie.useColors = Hc;
  Ie.storage = Xc();
  Ie.destroy = (() => {
    let e = !1;
    return () => {
      e ||
        ((e = !0),
        console.warn(
          "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
        ));
    };
  })();
  Ie.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33",
  ];
  function Hc() {
    return typeof window != "undefined" &&
      window.process &&
      (window.process.type === "renderer" || window.process.__nwjs)
      ? !0
      : typeof navigator != "undefined" &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
      ? !1
      : (typeof document != "undefined" &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance) ||
        (typeof window != "undefined" &&
          window.console &&
          (window.console.firebug ||
            (window.console.exception && window.console.table))) ||
        (typeof navigator != "undefined" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
          parseInt(RegExp.$1, 10) >= 31) ||
        (typeof navigator != "undefined" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
  }
  function zc(e) {
    if (
      ((e[0] =
        (this.useColors ? "%c" : "") +
        this.namespace +
        (this.useColors ? " %c" : " ") +
        e[0] +
        (this.useColors ? "%c " : " ") +
        "+" +
        yn.exports.humanize(this.diff)),
      !this.useColors)
    )
      return;
    let t = "color: " + this.color;
    e.splice(1, 0, t, "color: inherit");
    let r = 0,
      n = 0;
    e[0].replace(/%[a-zA-Z%]/g, (i) => {
      i !== "%%" && (r++, i === "%c" && (n = r));
    }),
      e.splice(n, 0, t);
  }
  Ie.log = console.debug || console.log || (() => {});
  function Yc(e) {
    try {
      e ? Ie.storage.setItem("debug", e) : Ie.storage.removeItem("debug");
    } catch (t) {}
  }
  function Zc() {
    let e;
    try {
      e = Ie.storage.getItem("debug");
    } catch (t) {}
    return !e && typeof h != "undefined" && "env" in h && (e = h.env.DEBUG), e;
  }
  function Xc() {
    try {
      return localStorage;
    } catch (e) {}
  }
  yn.exports = ji()(Ie);
  var { formatters: ep } = yn.exports;
  ep.j = function (e) {
    try {
      return JSON.stringify(e);
    } catch (t) {
      return "[UnexpectedJSONParseError]: " + t.message;
    }
  };
});
var Ui = X((hn) => {
  "use strict";
  m();
  p();
  f();
  d();
  hn.isatty = function () {
    return !1;
  };
  function tp() {
    throw new Error("tty.ReadStream is not implemented");
  }
  hn.ReadStream = tp;
  function rp() {
    throw new Error("tty.WriteStream is not implemented");
  }
  hn.WriteStream = rp;
});
var Bs = X(() => {
  "use strict";
  m();
  p();
  f();
  d();
});
var Us = X((mh, js) => {
  "use strict";
  m();
  p();
  f();
  d();
  js.exports = (e, t = h.argv) => {
    let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--",
      n = t.indexOf(r + e),
      i = t.indexOf("--");
    return n !== -1 && (i === -1 || n < i);
  };
});
var Vs = X((wh, qs) => {
  "use strict";
  m();
  p();
  f();
  d();
  var np = Bs(),
    $s = Ui(),
    Ne = Us(),
    { env: ue } = h,
    ct;
  Ne("no-color") || Ne("no-colors") || Ne("color=false") || Ne("color=never")
    ? (ct = 0)
    : (Ne("color") || Ne("colors") || Ne("color=true") || Ne("color=always")) &&
      (ct = 1);
  "FORCE_COLOR" in ue &&
    (ue.FORCE_COLOR === "true"
      ? (ct = 1)
      : ue.FORCE_COLOR === "false"
      ? (ct = 0)
      : (ct =
          ue.FORCE_COLOR.length === 0
            ? 1
            : Math.min(parseInt(ue.FORCE_COLOR, 10), 3)));
  function $i(e) {
    return e === 0
      ? !1
      : { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 };
  }
  function qi(e, t) {
    if (ct === 0) return 0;
    if (Ne("color=16m") || Ne("color=full") || Ne("color=truecolor")) return 3;
    if (Ne("color=256")) return 2;
    if (e && !t && ct === void 0) return 0;
    let r = ct || 0;
    if (ue.TERM === "dumb") return r;
    if (h.platform === "win32") {
      let n = np.release().split(".");
      return Number(n[0]) >= 10 && Number(n[2]) >= 10586
        ? Number(n[2]) >= 14931
          ? 3
          : 2
        : 1;
    }
    if ("CI" in ue)
      return [
        "TRAVIS",
        "CIRCLECI",
        "APPVEYOR",
        "GITLAB_CI",
        "GITHUB_ACTIONS",
        "BUILDKITE",
      ].some((n) => n in ue) || ue.CI_NAME === "codeship"
        ? 1
        : r;
    if ("TEAMCITY_VERSION" in ue)
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(ue.TEAMCITY_VERSION) ? 1 : 0;
    if (ue.COLORTERM === "truecolor") return 3;
    if ("TERM_PROGRAM" in ue) {
      let n = parseInt((ue.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (ue.TERM_PROGRAM) {
        case "iTerm.app":
          return n >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    return /-256(color)?$/i.test(ue.TERM)
      ? 2
      : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
          ue.TERM,
        ) || "COLORTERM" in ue
      ? 1
      : r;
  }
  function ip(e) {
    let t = qi(e, e && e.isTTY);
    return $i(t);
  }
  qs.exports = {
    supportsColor: ip,
    stdout: $i(qi(!0, $s.isatty(1))),
    stderr: $i(qi(!0, $s.isatty(2))),
  };
});
var Qs = X((de, wn) => {
  "use strict";
  m();
  p();
  f();
  d();
  var op = Ui(),
    bn = Bi();
  de.init = fp;
  de.log = lp;
  de.formatArgs = ap;
  de.save = cp;
  de.load = pp;
  de.useColors = sp;
  de.destroy = bn.deprecate(
    () => {},
    "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
  );
  de.colors = [6, 2, 3, 4, 5, 1];
  try {
    let e = Vs();
    e &&
      (e.stderr || e).level >= 2 &&
      (de.colors = [
        20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63,
        68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128,
        129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168,
        169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200,
        201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221,
      ]);
  } catch (e) {}
  de.inspectOpts = Object.keys(h.env)
    .filter((e) => /^debug_/i.test(e))
    .reduce((e, t) => {
      let r = t
          .substring(6)
          .toLowerCase()
          .replace(/_([a-z])/g, (i, o) => o.toUpperCase()),
        n = h.env[t];
      return (
        /^(yes|on|true|enabled)$/i.test(n)
          ? (n = !0)
          : /^(no|off|false|disabled)$/i.test(n)
          ? (n = !1)
          : n === "null"
          ? (n = null)
          : (n = Number(n)),
        (e[r] = n),
        e
      );
    }, {});
  function sp() {
    return "colors" in de.inspectOpts
      ? !!de.inspectOpts.colors
      : op.isatty(h.stderr.fd);
  }
  function ap(e) {
    let { namespace: t, useColors: r } = this;
    if (r) {
      let n = this.color,
        i = "\x1B[3" + (n < 8 ? n : "8;5;" + n),
        o = `  ${i};1m${t} \x1B[0m`;
      (e[0] =
        o +
        e[0]
          .split(
            `
`,
          )
          .join(
            `
` + o,
          )),
        e.push(i + "m+" + wn.exports.humanize(this.diff) + "\x1B[0m");
    } else e[0] = up() + t + " " + e[0];
  }
  function up() {
    return de.inspectOpts.hideDate ? "" : new Date().toISOString() + " ";
  }
  function lp(...e) {
    return h.stderr.write(
      bn.format(...e) +
        `
`,
    );
  }
  function cp(e) {
    e ? (h.env.DEBUG = e) : delete h.env.DEBUG;
  }
  function pp() {
    return h.env.DEBUG;
  }
  function fp(e) {
    e.inspectOpts = {};
    let t = Object.keys(de.inspectOpts);
    for (let r = 0; r < t.length; r++)
      e.inspectOpts[t[r]] = de.inspectOpts[t[r]];
  }
  wn.exports = ji()(de);
  var { formatters: Ks } = wn.exports;
  Ks.o = function (e) {
    return (
      (this.inspectOpts.colors = this.useColors),
      bn
        .inspect(e, this.inspectOpts)
        .split(
          `
`,
        )
        .map((t) => t.trim())
        .join(" ")
    );
  };
  Ks.O = function (e) {
    return (
      (this.inspectOpts.colors = this.useColors),
      bn.inspect(e, this.inspectOpts)
    );
  };
});
var Js = X((Sh, Vi) => {
  "use strict";
  m();
  p();
  f();
  d();
  typeof h == "undefined" ||
  h.type === "renderer" ||
  h.browser === !0 ||
  h.__nwjs
    ? (Vi.exports = Ls())
    : (Vi.exports = Qs());
});
function yp() {
  return !1;
}
var hp,
  bp,
  An,
  Qi = gr(() => {
    "use strict";
    m();
    p();
    f();
    d();
    (hp = {}), (bp = { existsSync: yp, promises: hp }), (An = bp);
  });
var Gi = X((Pb, na) => {
  "use strict";
  m();
  p();
  f();
  d();
  function Ke(e) {
    if (typeof e != "string")
      throw new TypeError(
        "Path must be a string. Received " + JSON.stringify(e),
      );
  }
  function ra(e, t) {
    for (var r = "", n = 0, i = -1, o = 0, s, a = 0; a <= e.length; ++a) {
      if (a < e.length) s = e.charCodeAt(a);
      else {
        if (s === 47) break;
        s = 47;
      }
      if (s === 47) {
        if (!(i === a - 1 || o === 1))
          if (i !== a - 1 && o === 2) {
            if (
              r.length < 2 ||
              n !== 2 ||
              r.charCodeAt(r.length - 1) !== 46 ||
              r.charCodeAt(r.length - 2) !== 46
            ) {
              if (r.length > 2) {
                var u = r.lastIndexOf("/");
                if (u !== r.length - 1) {
                  u === -1
                    ? ((r = ""), (n = 0))
                    : ((r = r.slice(0, u)),
                      (n = r.length - 1 - r.lastIndexOf("/"))),
                    (i = a),
                    (o = 0);
                  continue;
                }
              } else if (r.length === 2 || r.length === 1) {
                (r = ""), (n = 0), (i = a), (o = 0);
                continue;
              }
            }
            t && (r.length > 0 ? (r += "/..") : (r = ".."), (n = 2));
          } else
            r.length > 0
              ? (r += "/" + e.slice(i + 1, a))
              : (r = e.slice(i + 1, a)),
              (n = a - i - 1);
        (i = a), (o = 0);
      } else s === 46 && o !== -1 ? ++o : (o = -1);
    }
    return r;
  }
  function wp(e, t) {
    var r = t.dir || t.root,
      n = t.base || (t.name || "") + (t.ext || "");
    return r ? (r === t.root ? r + n : r + e + n) : n;
  }
  var zt = {
    resolve: function () {
      for (
        var e = "", t = !1, r, n = arguments.length - 1;
        n >= -1 && !t;
        n--
      ) {
        var i;
        n >= 0 ? (i = arguments[n]) : (r === void 0 && (r = h.cwd()), (i = r)),
          Ke(i),
          i.length !== 0 && ((e = i + "/" + e), (t = i.charCodeAt(0) === 47));
      }
      return (
        (e = ra(e, !t)),
        t ? (e.length > 0 ? "/" + e : "/") : e.length > 0 ? e : "."
      );
    },
    normalize: function (e) {
      if ((Ke(e), e.length === 0)) return ".";
      var t = e.charCodeAt(0) === 47,
        r = e.charCodeAt(e.length - 1) === 47;
      return (
        (e = ra(e, !t)),
        e.length === 0 && !t && (e = "."),
        e.length > 0 && r && (e += "/"),
        t ? "/" + e : e
      );
    },
    isAbsolute: function (e) {
      return Ke(e), e.length > 0 && e.charCodeAt(0) === 47;
    },
    join: function () {
      if (arguments.length === 0) return ".";
      for (var e, t = 0; t < arguments.length; ++t) {
        var r = arguments[t];
        Ke(r), r.length > 0 && (e === void 0 ? (e = r) : (e += "/" + r));
      }
      return e === void 0 ? "." : zt.normalize(e);
    },
    relative: function (e, t) {
      if (
        (Ke(e),
        Ke(t),
        e === t || ((e = zt.resolve(e)), (t = zt.resolve(t)), e === t))
      )
        return "";
      for (var r = 1; r < e.length && e.charCodeAt(r) === 47; ++r);
      for (
        var n = e.length, i = n - r, o = 1;
        o < t.length && t.charCodeAt(o) === 47;
        ++o
      );
      for (
        var s = t.length, a = s - o, u = i < a ? i : a, l = -1, c = 0;
        c <= u;
        ++c
      ) {
        if (c === u) {
          if (a > u) {
            if (t.charCodeAt(o + c) === 47) return t.slice(o + c + 1);
            if (c === 0) return t.slice(o + c);
          } else
            i > u &&
              (e.charCodeAt(r + c) === 47 ? (l = c) : c === 0 && (l = 0));
          break;
        }
        var g = e.charCodeAt(r + c),
          y = t.charCodeAt(o + c);
        if (g !== y) break;
        g === 47 && (l = c);
      }
      var P = "";
      for (c = r + l + 1; c <= n; ++c)
        (c === n || e.charCodeAt(c) === 47) &&
          (P.length === 0 ? (P += "..") : (P += "/.."));
      return P.length > 0
        ? P + t.slice(o + l)
        : ((o += l), t.charCodeAt(o) === 47 && ++o, t.slice(o));
    },
    _makeLong: function (e) {
      return e;
    },
    dirname: function (e) {
      if ((Ke(e), e.length === 0)) return ".";
      for (
        var t = e.charCodeAt(0), r = t === 47, n = -1, i = !0, o = e.length - 1;
        o >= 1;
        --o
      )
        if (((t = e.charCodeAt(o)), t === 47)) {
          if (!i) {
            n = o;
            break;
          }
        } else i = !1;
      return n === -1 ? (r ? "/" : ".") : r && n === 1 ? "//" : e.slice(0, n);
    },
    basename: function (e, t) {
      if (t !== void 0 && typeof t != "string")
        throw new TypeError('"ext" argument must be a string');
      Ke(e);
      var r = 0,
        n = -1,
        i = !0,
        o;
      if (t !== void 0 && t.length > 0 && t.length <= e.length) {
        if (t.length === e.length && t === e) return "";
        var s = t.length - 1,
          a = -1;
        for (o = e.length - 1; o >= 0; --o) {
          var u = e.charCodeAt(o);
          if (u === 47) {
            if (!i) {
              r = o + 1;
              break;
            }
          } else
            a === -1 && ((i = !1), (a = o + 1)),
              s >= 0 &&
                (u === t.charCodeAt(s)
                  ? --s === -1 && (n = o)
                  : ((s = -1), (n = a)));
        }
        return r === n ? (n = a) : n === -1 && (n = e.length), e.slice(r, n);
      } else {
        for (o = e.length - 1; o >= 0; --o)
          if (e.charCodeAt(o) === 47) {
            if (!i) {
              r = o + 1;
              break;
            }
          } else n === -1 && ((i = !1), (n = o + 1));
        return n === -1 ? "" : e.slice(r, n);
      }
    },
    extname: function (e) {
      Ke(e);
      for (
        var t = -1, r = 0, n = -1, i = !0, o = 0, s = e.length - 1;
        s >= 0;
        --s
      ) {
        var a = e.charCodeAt(s);
        if (a === 47) {
          if (!i) {
            r = s + 1;
            break;
          }
          continue;
        }
        n === -1 && ((i = !1), (n = s + 1)),
          a === 46
            ? t === -1
              ? (t = s)
              : o !== 1 && (o = 1)
            : t !== -1 && (o = -1);
      }
      return t === -1 ||
        n === -1 ||
        o === 0 ||
        (o === 1 && t === n - 1 && t === r + 1)
        ? ""
        : e.slice(t, n);
    },
    format: function (e) {
      if (e === null || typeof e != "object")
        throw new TypeError(
          'The "pathObject" argument must be of type Object. Received type ' +
            typeof e,
        );
      return wp("/", e);
    },
    parse: function (e) {
      Ke(e);
      var t = { root: "", dir: "", base: "", ext: "", name: "" };
      if (e.length === 0) return t;
      var r = e.charCodeAt(0),
        n = r === 47,
        i;
      n ? ((t.root = "/"), (i = 1)) : (i = 0);
      for (
        var o = -1, s = 0, a = -1, u = !0, l = e.length - 1, c = 0;
        l >= i;
        --l
      ) {
        if (((r = e.charCodeAt(l)), r === 47)) {
          if (!u) {
            s = l + 1;
            break;
          }
          continue;
        }
        a === -1 && ((u = !1), (a = l + 1)),
          r === 46
            ? o === -1
              ? (o = l)
              : c !== 1 && (c = 1)
            : o !== -1 && (c = -1);
      }
      return (
        o === -1 ||
        a === -1 ||
        c === 0 ||
        (c === 1 && o === a - 1 && o === s + 1)
          ? a !== -1 &&
            (s === 0 && n
              ? (t.base = t.name = e.slice(1, a))
              : (t.base = t.name = e.slice(s, a)))
          : (s === 0 && n
              ? ((t.name = e.slice(1, o)), (t.base = e.slice(1, a)))
              : ((t.name = e.slice(s, o)), (t.base = e.slice(s, a))),
            (t.ext = e.slice(o, a))),
        s > 0 ? (t.dir = e.slice(0, s - 1)) : n && (t.dir = "/"),
        t
      );
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null,
  };
  zt.posix = zt;
  na.exports = zt;
});
var oa = X(() => {
  "use strict";
  m();
  p();
  f();
  d();
});
var aa = X((Qb, sa) => {
  "use strict";
  m();
  p();
  f();
  d();
  sa.exports = (e) => {
    let t = e.match(/^[ \t]*(?=\S)/gm);
    return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
  };
});
var la = X((zb, ua) => {
  "use strict";
  m();
  p();
  f();
  d();
  var Ep = aa();
  ua.exports = (e) => {
    let t = Ep(e);
    if (t === 0) return e;
    let r = new RegExp(`^[ \\t]{${t}}`, "gm");
    return e.replace(r, "");
  };
});
var pa = X((s0, Hi) => {
  "use strict";
  m();
  p();
  f();
  d();
  var Pp = Object.prototype.hasOwnProperty,
    ve = "~";
  function Pr() {}
  Object.create &&
    ((Pr.prototype = Object.create(null)), new Pr().__proto__ || (ve = !1));
  function vp(e, t, r) {
    (this.fn = e), (this.context = t), (this.once = r || !1);
  }
  function ca(e, t, r, n, i) {
    if (typeof r != "function")
      throw new TypeError("The listener must be a function");
    var o = new vp(r, n || e, i),
      s = ve ? ve + t : t;
    return (
      e._events[s]
        ? e._events[s].fn
          ? (e._events[s] = [e._events[s], o])
          : e._events[s].push(o)
        : ((e._events[s] = o), e._eventsCount++),
      e
    );
  }
  function Cn(e, t) {
    --e._eventsCount === 0 ? (e._events = new Pr()) : delete e._events[t];
  }
  function we() {
    (this._events = new Pr()), (this._eventsCount = 0);
  }
  we.prototype.eventNames = function () {
    var e = [],
      t,
      r;
    if (this._eventsCount === 0) return e;
    for (r in (t = this._events)) Pp.call(t, r) && e.push(ve ? r.slice(1) : r);
    return Object.getOwnPropertySymbols
      ? e.concat(Object.getOwnPropertySymbols(t))
      : e;
  };
  we.prototype.listeners = function (e) {
    var t = ve ? ve + e : e,
      r = this._events[t];
    if (!r) return [];
    if (r.fn) return [r.fn];
    for (var n = 0, i = r.length, o = new Array(i); n < i; n++) o[n] = r[n].fn;
    return o;
  };
  we.prototype.listenerCount = function (e) {
    var t = ve ? ve + e : e,
      r = this._events[t];
    return r ? (r.fn ? 1 : r.length) : 0;
  };
  we.prototype.emit = function (e, t, r, n, i, o) {
    var s = ve ? ve + e : e;
    if (!this._events[s]) return !1;
    var a = this._events[s],
      u = arguments.length,
      l,
      c;
    if (a.fn) {
      switch ((a.once && this.removeListener(e, a.fn, void 0, !0), u)) {
        case 1:
          return a.fn.call(a.context), !0;
        case 2:
          return a.fn.call(a.context, t), !0;
        case 3:
          return a.fn.call(a.context, t, r), !0;
        case 4:
          return a.fn.call(a.context, t, r, n), !0;
        case 5:
          return a.fn.call(a.context, t, r, n, i), !0;
        case 6:
          return a.fn.call(a.context, t, r, n, i, o), !0;
      }
      for (c = 1, l = new Array(u - 1); c < u; c++) l[c - 1] = arguments[c];
      a.fn.apply(a.context, l);
    } else {
      var g = a.length,
        y;
      for (c = 0; c < g; c++)
        switch ((a[c].once && this.removeListener(e, a[c].fn, void 0, !0), u)) {
          case 1:
            a[c].fn.call(a[c].context);
            break;
          case 2:
            a[c].fn.call(a[c].context, t);
            break;
          case 3:
            a[c].fn.call(a[c].context, t, r);
            break;
          case 4:
            a[c].fn.call(a[c].context, t, r, n);
            break;
          default:
            if (!l)
              for (y = 1, l = new Array(u - 1); y < u; y++)
                l[y - 1] = arguments[y];
            a[c].fn.apply(a[c].context, l);
        }
    }
    return !0;
  };
  we.prototype.on = function (e, t, r) {
    return ca(this, e, t, r, !1);
  };
  we.prototype.once = function (e, t, r) {
    return ca(this, e, t, r, !0);
  };
  we.prototype.removeListener = function (e, t, r, n) {
    var i = ve ? ve + e : e;
    if (!this._events[i]) return this;
    if (!t) return Cn(this, i), this;
    var o = this._events[i];
    if (o.fn)
      o.fn === t && (!n || o.once) && (!r || o.context === r) && Cn(this, i);
    else {
      for (var s = 0, a = [], u = o.length; s < u; s++)
        (o[s].fn !== t || (n && !o[s].once) || (r && o[s].context !== r)) &&
          a.push(o[s]);
      a.length ? (this._events[i] = a.length === 1 ? a[0] : a) : Cn(this, i);
    }
    return this;
  };
  we.prototype.removeAllListeners = function (e) {
    var t;
    return (
      e
        ? ((t = ve ? ve + e : e), this._events[t] && Cn(this, t))
        : ((this._events = new Pr()), (this._eventsCount = 0)),
      this
    );
  };
  we.prototype.off = we.prototype.removeListener;
  we.prototype.addListener = we.prototype.on;
  we.prefixed = ve;
  we.EventEmitter = we;
  typeof Hi < "u" && (Hi.exports = we);
});
var da = X((p0, fa) => {
  "use strict";
  m();
  p();
  f();
  d();
  fa.exports = (e, t = 1, r) => {
    if (
      ((r = { indent: " ", includeEmptyLines: !1, ...r }), typeof e != "string")
    )
      throw new TypeError(
        `Expected \`input\` to be a \`string\`, got \`${typeof e}\``,
      );
    if (typeof t != "number")
      throw new TypeError(
        `Expected \`count\` to be a \`number\`, got \`${typeof t}\``,
      );
    if (typeof r.indent != "string")
      throw new TypeError(
        `Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``,
      );
    if (t === 0) return e;
    let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return e.replace(n, r.indent.repeat(t));
  };
});
var ya = X((E0, ga) => {
  "use strict";
  m();
  p();
  f();
  d();
  ga.exports = ({ onlyFirst: e = !1 } = {}) => {
    let t = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
    ].join("|");
    return new RegExp(t, e ? void 0 : "g");
  };
});
var Yi = X((C0, ha) => {
  "use strict";
  m();
  p();
  f();
  d();
  var Sp = ya();
  ha.exports = (e) => (typeof e == "string" ? e.replace(Sp(), "") : e);
});
var ba = X(($0, Sn) => {
  "use strict";
  m();
  p();
  f();
  d();
  Sn.exports = (e = {}) => {
    let t;
    if (e.repoUrl) t = e.repoUrl;
    else if (e.user && e.repo) t = `https://github.com/${e.user}/${e.repo}`;
    else
      throw new Error(
        "You need to specify either the `repoUrl` option or both the `user` and `repo` options",
      );
    let r = new URL(`${t}/issues/new`),
      n = [
        "body",
        "title",
        "labels",
        "template",
        "milestone",
        "assignee",
        "projects",
      ];
    for (let i of n) {
      let o = e[i];
      if (o !== void 0) {
        if (i === "labels" || i === "projects") {
          if (!Array.isArray(o))
            throw new TypeError(`The \`${i}\` option should be an array`);
          o = o.join(",");
        }
        r.searchParams.set(i, o);
      }
    }
    return r.toString();
  };
  Sn.exports.default = Sn.exports;
});
var Ea = X(() => {
  "use strict";
  m();
  p();
  f();
  d();
});
var Fo = X((MI, Vu) => {
  "use strict";
  m();
  p();
  f();
  d();
  Vu.exports = (function () {
    function e(t, r, n, i, o) {
      return t < r || n < r ? (t > n ? n + 1 : t + 1) : i === o ? r : r + 1;
    }
    return function (t, r) {
      if (t === r) return 0;
      if (t.length > r.length) {
        var n = t;
        (t = r), (r = n);
      }
      for (
        var i = t.length, o = r.length;
        i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1);

      )
        i--, o--;
      for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); ) s++;
      if (((i -= s), (o -= s), i === 0 || o < 3)) return o;
      var a = 0,
        u,
        l,
        c,
        g,
        y,
        P,
        v,
        E,
        A,
        M,
        O,
        S,
        R = [];
      for (u = 0; u < i; u++) R.push(u + 1), R.push(t.charCodeAt(s + u));
      for (var j = R.length - 1; a < o - 3; )
        for (
          A = r.charCodeAt(s + (l = a)),
            M = r.charCodeAt(s + (c = a + 1)),
            O = r.charCodeAt(s + (g = a + 2)),
            S = r.charCodeAt(s + (y = a + 3)),
            P = a += 4,
            u = 0;
          u < j;
          u += 2
        )
          (v = R[u]),
            (E = R[u + 1]),
            (l = e(v, l, c, A, E)),
            (c = e(l, c, g, M, E)),
            (g = e(c, g, y, O, E)),
            (P = e(g, y, P, S, E)),
            (R[u] = P),
            (y = g),
            (g = c),
            (c = l),
            (l = v);
      for (; a < o; )
        for (A = r.charCodeAt(s + (l = a)), P = ++a, u = 0; u < j; u += 2)
          (v = R[u]), (R[u] = P = e(v, l, P, A, R[u + 1])), (l = v);
      return P;
    };
  })();
});
m();
p();
f();
d();
var gs = {};
yr(gs, { defineExtension: () => ds, getExtensionContext: () => ms });
m();
p();
f();
d();
m();
p();
f();
d();
function ds(e) {
  return typeof e == "function" ? e : (t) => t.$extends(e);
}
m();
p();
f();
d();
function ms(e) {
  return e;
}
var hs = {};
yr(hs, { validator: () => ys });
m();
p();
f();
d();
m();
p();
f();
d();
function ys(...e) {
  return (t) => t;
}
var Ps = {};
yr(Ps, {
  Extensions: () => bs,
  Public: () => ws,
  Result: () => xs,
  Utils: () => Es,
});
m();
p();
f();
d();
var bs = {};
m();
p();
f();
d();
var ws = {};
m();
p();
f();
d();
var xs = {};
m();
p();
f();
d();
var Es = {};
m();
p();
f();
d();
m();
p();
f();
d();
m();
p();
f();
d();
var ut = (e, t) => {
  let r = {};
  for (let n of e) {
    let i = n[t];
    r[i] = n;
  }
  return r;
};
function vs(e) {
  return e.substring(0, 1).toLowerCase() + e.substring(1);
}
var Mi = class {
  constructor(t) {
    this.document = t;
    (this.compositeNames = new Set(this.datamodel.types.map((r) => r.name))),
      (this.typeAndModelMap = this.buildTypeModelMap()),
      (this.mappingsMap = this.buildMappingsMap()),
      (this.outputTypeMap = this.buildMergedOutputTypeMap()),
      (this.rootFieldMap = this.buildRootFieldMap()),
      (this.inputTypesByName = this.buildInputTypesMap());
  }
  get datamodel() {
    return this.document.datamodel;
  }
  get mappings() {
    return this.document.mappings;
  }
  get schema() {
    return this.document.schema;
  }
  get inputObjectTypes() {
    return this.schema.inputObjectTypes;
  }
  get outputObjectTypes() {
    return this.schema.outputObjectTypes;
  }
  isComposite(t) {
    return this.compositeNames.has(t);
  }
  getOtherOperationNames() {
    return [
      Object.values(this.mappings.otherOperations.write),
      Object.values(this.mappings.otherOperations.read),
    ].flat();
  }
  hasEnumInNamespace(t, r) {
    var n;
    return (
      ((n = this.schema.enumTypes[r]) == null
        ? void 0
        : n.find((i) => i.name === t)) !== void 0
    );
  }
  resolveInputObjectType(t) {
    return this.inputTypesByName.get(Si(t.type, t.namespace));
  }
  resolveOutputObjectType(t) {
    var r;
    if (t.location === "outputObjectTypes")
      return this.outputObjectTypes[
        (r = t.namespace) != null ? r : "prisma"
      ].find((n) => n.name === t.type);
  }
  buildModelMap() {
    return ut(this.datamodel.models, "name");
  }
  buildTypeMap() {
    return ut(this.datamodel.types, "name");
  }
  buildTypeModelMap() {
    return { ...this.buildTypeMap(), ...this.buildModelMap() };
  }
  buildMappingsMap() {
    return ut(this.mappings.modelOperations, "model");
  }
  buildMergedOutputTypeMap() {
    return {
      model: ut(this.schema.outputObjectTypes.model, "name"),
      prisma: ut(this.schema.outputObjectTypes.prisma, "name"),
    };
  }
  buildRootFieldMap() {
    return {
      ...ut(this.outputTypeMap.prisma.Query.fields, "name"),
      ...ut(this.outputTypeMap.prisma.Mutation.fields, "name"),
    };
  }
  buildInputTypesMap() {
    let t = new Map();
    for (let r of this.inputObjectTypes.prisma) t.set(Si(r.name, "prisma"), r);
    if (!this.inputObjectTypes.model) return t;
    for (let r of this.inputObjectTypes.model) t.set(Si(r.name, "model"), r);
    return t;
  }
};
function Si(e, t) {
  return t ? `${t}.${e}` : e;
}
m();
p();
f();
d();
m();
p();
f();
d();
var Be;
((t) => {
  let e;
  ((S) => (
    (S.findUnique = "findUnique"),
    (S.findUniqueOrThrow = "findUniqueOrThrow"),
    (S.findFirst = "findFirst"),
    (S.findFirstOrThrow = "findFirstOrThrow"),
    (S.findMany = "findMany"),
    (S.create = "create"),
    (S.createMany = "createMany"),
    (S.update = "update"),
    (S.updateMany = "updateMany"),
    (S.upsert = "upsert"),
    (S.delete = "delete"),
    (S.deleteMany = "deleteMany"),
    (S.groupBy = "groupBy"),
    (S.count = "count"),
    (S.aggregate = "aggregate"),
    (S.findRaw = "findRaw"),
    (S.aggregateRaw = "aggregateRaw")
  ))((e = t.ModelAction || (t.ModelAction = {})));
})(Be || (Be = {}));
m();
p();
f();
d();
var xn = Pe(Js()),
  dp = 100,
  xr = [],
  Gs,
  Ws;
typeof h != "undefined" &&
  typeof ((Gs = h.stderr) == null ? void 0 : Gs.write) != "function" &&
  (xn.default.log = (Ws = console.debug) != null ? Ws : console.log);
function mp(e) {
  let t = (0, xn.default)(e),
    r = Object.assign(
      (...n) => (
        (t.log = r.log),
        n.length !== 0 && xr.push([e, ...n]),
        xr.length > dp && xr.shift(),
        t("", ...n)
      ),
      t,
    );
  return r;
}
var Hs = Object.assign(mp, xn.default);
function zs(e = 7500) {
  let t = xr.map((r) =>
    r.map((n) => (typeof n == "string" ? n : JSON.stringify(n))).join(" "),
  ).join(`
`);
  return t.length < e ? t : t.slice(-e);
}
function Ys() {
  xr.length = 0;
}
var be = Hs;
m();
p();
f();
d();
var Ki,
  Zs,
  Xs,
  ea,
  ta = !0;
typeof h != "undefined" &&
  (({
    FORCE_COLOR: Ki,
    NODE_DISABLE_COLORS: Zs,
    NO_COLOR: Xs,
    TERM: ea,
  } = h.env || {}),
  (ta = h.stdout && h.stdout.isTTY));
var gp = {
  enabled:
    !Zs && Xs == null && ea !== "dumb" && ((Ki != null && Ki !== "0") || ta),
};
function H(e, t) {
  let r = new RegExp(`\\x1b\\[${t}m`, "g"),
    n = `\x1B[${e}m`,
    i = `\x1B[${t}m`;
  return function (o) {
    return !gp.enabled || o == null
      ? o
      : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
  };
}
var Bh = H(0, 0),
  pt = H(1, 22),
  En = H(2, 22),
  jh = H(3, 23),
  Pn = H(4, 24),
  Uh = H(7, 27),
  $h = H(8, 28),
  qh = H(9, 29),
  Vh = H(30, 39),
  Gt = H(31, 39),
  vn = H(32, 39),
  Wt = H(33, 39),
  Ht = H(34, 39),
  Kh = H(35, 39),
  ft = H(36, 39),
  Qh = H(37, 39),
  Tn = H(90, 39),
  Jh = H(90, 39),
  Gh = H(40, 49),
  Wh = H(41, 49),
  Hh = H(42, 49),
  zh = H(43, 49),
  Yh = H(44, 49),
  Zh = H(45, 49),
  Xh = H(46, 49),
  eb = H(47, 49);
m();
p();
f();
d();
m();
p();
f();
d();
m();
p();
f();
d();
m();
p();
f();
d();
var Ji = [
  "darwin",
  "darwin-arm64",
  "debian-openssl-1.0.x",
  "debian-openssl-1.1.x",
  "debian-openssl-3.0.x",
  "rhel-openssl-1.0.x",
  "rhel-openssl-1.1.x",
  "rhel-openssl-3.0.x",
  "linux-arm64-openssl-1.1.x",
  "linux-arm64-openssl-1.0.x",
  "linux-arm64-openssl-3.0.x",
  "linux-arm-openssl-1.1.x",
  "linux-arm-openssl-1.0.x",
  "linux-arm-openssl-3.0.x",
  "linux-musl",
  "linux-musl-openssl-3.0.x",
  "linux-musl-arm64-openssl-1.1.x",
  "linux-musl-arm64-openssl-3.0.x",
  "linux-nixos",
  "linux-static-x64",
  "linux-static-arm64",
  "windows",
  "freebsd11",
  "freebsd12",
  "freebsd13",
  "openbsd",
  "netbsd",
  "arm",
];
m();
p();
f();
d();
var ia = "library";
function Mt(e) {
  let t = xp();
  return (
    t ||
    ((e == null ? void 0 : e.config.engineType) === "library"
      ? "library"
      : (e == null ? void 0 : e.config.engineType) === "binary"
      ? "binary"
      : (e == null ? void 0 : e.config.engineType) === "wasm"
      ? "wasm"
      : ia)
  );
}
function xp() {
  let e = h.env.PRISMA_CLIENT_ENGINE_TYPE;
  return e === "library"
    ? "library"
    : e === "binary"
    ? "binary"
    : e === "wasm"
    ? "wasm"
    : void 0;
}
m();
p();
f();
d();
var Er = Pe(Gi());
function Wi(e) {
  return Er.default.sep === Er.default.posix.sep
    ? e
    : e.split(Er.default.sep).join(Er.default.posix.sep);
}
var Yt = {};
yr(Yt, {
  error: () => Cp,
  info: () => Ap,
  log: () => Tp,
  query: () => _p,
  should: () => ma,
  tags: () => vr,
  warn: () => zi,
});
m();
p();
f();
d();
var vr = {
    error: Gt("prisma:error"),
    warn: Wt("prisma:warn"),
    info: ft("prisma:info"),
    query: Ht("prisma:query"),
  },
  ma = { warn: () => !h.env.PRISMA_DISABLE_WARNINGS };
function Tp(...e) {
  console.log(...e);
}
function zi(e, ...t) {
  ma.warn() && console.warn(`${vr.warn} ${e}`, ...t);
}
function Ap(e, ...t) {
  console.info(`${vr.info} ${e}`, ...t);
}
function Cp(e, ...t) {
  console.error(`${vr.error} ${e}`, ...t);
}
function _p(e, ...t) {
  console.log(`${vr.query} ${e}`, ...t);
}
m();
p();
f();
d();
function _n(e, t) {
  if (!e)
    throw new Error(
      `${t}. This should never happen. If you see this error, please, open an issue at https://github.com/prisma/prisma/issues/new?assignees=&labels=kind%2Fbug&projects=&template=bug_report.yml`,
    );
}
m();
p();
f();
d();
function Rt(e, t) {
  throw new Error(t);
}
m();
p();
f();
d();
function Zi(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
m();
p();
f();
d();
var Xi = (e, t) => e.reduce((r, n) => ((r[t(n)] = n), r), {});
m();
p();
f();
d();
function Zt(e, t) {
  let r = {};
  for (let n of Object.keys(e)) r[n] = t(e[n], n);
  return r;
}
m();
p();
f();
d();
function eo(e, t) {
  if (e.length === 0) return;
  let r = e[0];
  for (let n = 1; n < e.length; n++) t(r, e[n]) < 0 && (r = e[n]);
  return r;
}
m();
p();
f();
d();
function N(e, t) {
  Object.defineProperty(e, "name", { value: t, configurable: !0 });
}
m();
p();
f();
d();
var wa = new Set(),
  Mn = (e, t, ...r) => {
    wa.has(e) || (wa.add(e), zi(t, ...r));
  };
m();
p();
f();
d();
var me = class extends Error {
  constructor(r, { code: n, clientVersion: i, meta: o, batchRequestIdx: s }) {
    super(r);
    (this.name = "PrismaClientKnownRequestError"),
      (this.code = n),
      (this.clientVersion = i),
      (this.meta = o),
      Object.defineProperty(this, "batchRequestIdx", {
        value: s,
        enumerable: !1,
        writable: !0,
      });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientKnownRequestError";
  }
};
N(me, "PrismaClientKnownRequestError");
var dt = class extends me {
  constructor(t, r) {
    super(t, { code: "P2025", clientVersion: r }),
      (this.name = "NotFoundError");
  }
};
N(dt, "NotFoundError");
m();
p();
f();
d();
var Y = class e extends Error {
  constructor(r, n, i) {
    super(r);
    (this.name = "PrismaClientInitializationError"),
      (this.clientVersion = n),
      (this.errorCode = i),
      Error.captureStackTrace(e);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientInitializationError";
  }
};
N(Y, "PrismaClientInitializationError");
m();
p();
f();
d();
var Le = class extends Error {
  constructor(r, n) {
    super(r);
    (this.name = "PrismaClientRustPanicError"), (this.clientVersion = n);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientRustPanicError";
  }
};
N(Le, "PrismaClientRustPanicError");
m();
p();
f();
d();
var ge = class extends Error {
  constructor(r, { clientVersion: n, batchRequestIdx: i }) {
    super(r);
    (this.name = "PrismaClientUnknownRequestError"),
      (this.clientVersion = n),
      Object.defineProperty(this, "batchRequestIdx", {
        value: i,
        writable: !0,
        enumerable: !1,
      });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientUnknownRequestError";
  }
};
N(ge, "PrismaClientUnknownRequestError");
m();
p();
f();
d();
var Te = class extends Error {
  constructor(r, { clientVersion: n }) {
    super(r);
    this.name = "PrismaClientValidationError";
    this.clientVersion = n;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientValidationError";
  }
};
N(Te, "PrismaClientValidationError");
m();
p();
f();
d();
var Tr = class {
  constructor(t) {
    this._engine = t;
  }
  prometheus(t) {
    return this._engine.metrics({ format: "prometheus", ...t });
  }
  json(t) {
    return this._engine.metrics({ format: "json", ...t });
  }
};
m();
p();
f();
d();
m();
p();
f();
d();
function Ar(e) {
  let t;
  return {
    get() {
      return t || (t = { value: e() }), t.value;
    },
  };
}
function Mp(e, t) {
  let r = Ar(() => Rp(t));
  Object.defineProperty(e, "dmmf", { get: () => r.get() });
}
function Rp(e) {
  return {
    datamodel: { models: to(e.models), enums: to(e.enums), types: to(e.types) },
  };
}
function to(e) {
  return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
}
m();
p();
f();
d();
var $x = [
    "JsonNullValueInput",
    "NullableJsonNullValueInput",
    "JsonNullValueFilter",
  ],
  Rn = Symbol(),
  ro = new WeakMap(),
  Xe = class {
    constructor(t) {
      t === Rn
        ? ro.set(this, `Prisma.${this._getName()}`)
        : ro.set(
            this,
            `new Prisma.${this._getNamespace()}.${this._getName()}()`,
          );
    }
    _getName() {
      return this.constructor.name;
    }
    toString() {
      return ro.get(this);
    }
  },
  Cr = class extends Xe {
    _getNamespace() {
      return "NullTypes";
    }
  },
  _r = class extends Cr {};
io(_r, "DbNull");
var Sr = class extends Cr {};
io(Sr, "JsonNull");
var Mr = class extends Cr {};
io(Mr, "AnyNull");
var no = {
  classes: { DbNull: _r, JsonNull: Sr, AnyNull: Mr },
  instances: { DbNull: new _r(Rn), JsonNull: new Sr(Rn), AnyNull: new Mr(Rn) },
};
function io(e, t) {
  Object.defineProperty(e, "name", { value: t, configurable: !0 });
}
m();
p();
f();
d();
m();
p();
f();
d();
m();
p();
f();
d();
m();
p();
f();
d();
function Rr(e) {
  return {
    ok: !1,
    error: e,
    map() {
      return Rr(e);
    },
    flatMap() {
      return Rr(e);
    },
  };
}
var oo = class {
    constructor() {
      this.registeredErrors = [];
    }
    consumeError(t) {
      return this.registeredErrors[t];
    }
    registerNewError(t) {
      let r = 0;
      for (; this.registeredErrors[r] !== void 0; ) r++;
      return (this.registeredErrors[r] = { error: t }), r;
    }
  },
  so = (e) => {
    let t = new oo(),
      r = mt(t, e.startTransaction.bind(e));
    return {
      errorRegistry: t,
      queryRaw: mt(t, e.queryRaw.bind(e)),
      executeRaw: mt(t, e.executeRaw.bind(e)),
      flavour: e.flavour,
      startTransaction: async (...n) => (await r(...n)).map((o) => Op(t, o)),
      close: mt(t, e.close.bind(e)),
    };
  },
  Op = (e, t) => ({
    flavour: t.flavour,
    options: t.options,
    queryRaw: mt(e, t.queryRaw.bind(t)),
    executeRaw: mt(e, t.executeRaw.bind(t)),
    commit: mt(e, t.commit.bind(t)),
    rollback: mt(e, t.rollback.bind(t)),
    dispose: Ip(e, t.dispose.bind(t)),
  });
function mt(e, t) {
  return async (...r) => {
    try {
      return await t(...r);
    } catch (n) {
      let i = e.registerNewError(n);
      return Rr({ kind: "GenericJs", id: i });
    }
  };
}
function Ip(e, t) {
  return (...r) => {
    try {
      return t(...r);
    } catch (n) {
      let i = e.registerNewError(n);
      return Rr({ kind: "GenericJs", id: i });
    }
  };
}
var c3 = Pe(Ea()),
  Ol = Pe(pa());
Qi();
var nn = Pe(Gi());
m();
p();
f();
d();
var ke = class e {
  constructor(t, r) {
    if (t.length - 1 !== r.length)
      throw t.length === 0
        ? new TypeError("Expected at least 1 string")
        : new TypeError(
            `Expected ${t.length} strings to have ${t.length - 1} values`,
          );
    let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
    (this.values = new Array(n)),
      (this.strings = new Array(n + 1)),
      (this.strings[0] = t[0]);
    let i = 0,
      o = 0;
    for (; i < r.length; ) {
      let s = r[i++],
        a = t[i];
      if (s instanceof e) {
        this.strings[o] += s.strings[0];
        let u = 0;
        for (; u < s.values.length; )
          (this.values[o++] = s.values[u++]), (this.strings[o] = s.strings[u]);
        this.strings[o] += a;
      } else (this.values[o++] = s), (this.strings[o] = a);
    }
  }
  get text() {
    let t = 1,
      r = this.strings[0];
    for (; t < this.strings.length; ) r += `$${t}${this.strings[t++]}`;
    return r;
  }
  get sql() {
    let t = 1,
      r = this.strings[0];
    for (; t < this.strings.length; ) r += `?${this.strings[t++]}`;
    return r;
  }
  inspect() {
    return { text: this.text, sql: this.sql, values: this.values };
  }
};
function kp(e, t = ",", r = "", n = "") {
  if (e.length === 0)
    throw new TypeError(
      "Expected `join([])` to be called with an array of multiple elements, but got an empty array",
    );
  return new ke([r, ...Array(e.length - 1).fill(t), n], e);
}
function Pa(e) {
  return new ke([e], []);
}
var Fp = Pa("");
function va(e, ...t) {
  return new ke(e, t);
}
m();
p();
f();
d();
m();
p();
f();
d();
function Or(e) {
  return {
    getKeys() {
      return Object.keys(e);
    },
    getPropertyValue(t) {
      return e[t];
    },
  };
}
m();
p();
f();
d();
function Ae(e, t) {
  return {
    getKeys() {
      return [e];
    },
    getPropertyValue() {
      return t();
    },
  };
}
m();
p();
f();
d();
m();
p();
f();
d();
var Qe = class {
  constructor() {
    this._map = new Map();
  }
  get(t) {
    var r;
    return (r = this._map.get(t)) == null ? void 0 : r.value;
  }
  set(t, r) {
    this._map.set(t, { value: r });
  }
  getOrCreate(t, r) {
    let n = this._map.get(t);
    if (n) return n.value;
    let i = r();
    return this.set(t, i), i;
  }
};
function Ot(e) {
  let t = new Qe();
  return {
    getKeys() {
      return e.getKeys();
    },
    getPropertyValue(r) {
      return t.getOrCreate(r, () => e.getPropertyValue(r));
    },
    getPropertyDescriptor(r) {
      var n;
      return (n = e.getPropertyDescriptor) == null ? void 0 : n.call(e, r);
    },
  };
}
m();
p();
f();
d();
var Ca = Pe(Bi());
m();
p();
f();
d();
var On = { enumerable: !0, configurable: !0, writable: !0 };
function In(e) {
  let t = new Set(e);
  return {
    getOwnPropertyDescriptor: () => On,
    has: (r, n) => t.has(n),
    set: (r, n, i) => t.add(n) && Reflect.set(r, n, i),
    ownKeys: () => [...t],
  };
}
var Ta = Symbol.for("nodejs.util.inspect.custom");
function Je(e, t) {
  let r = Dp(t),
    n = new Set(),
    i = new Proxy(e, {
      get(o, s) {
        if (n.has(s)) return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      },
      has(o, s) {
        var u, l;
        if (n.has(s)) return !0;
        let a = r.get(s);
        return a
          ? (l = (u = a.has) == null ? void 0 : u.call(a, s)) != null
            ? l
            : !0
          : Reflect.has(o, s);
      },
      ownKeys(o) {
        let s = Aa(Reflect.ownKeys(o), r),
          a = Aa(Array.from(r.keys()), r);
        return [...new Set([...s, ...a, ...n])];
      },
      set(o, s, a) {
        var l, c;
        let u = r.get(s);
        return ((c =
          (l = u == null ? void 0 : u.getPropertyDescriptor) == null
            ? void 0
            : l.call(u, s)) == null
          ? void 0
          : c.writable) === !1
          ? !1
          : (n.add(s), Reflect.set(o, s, a));
      },
      getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable) return a;
        let u = r.get(s);
        return u
          ? u.getPropertyDescriptor
            ? { ...On, ...(u == null ? void 0 : u.getPropertyDescriptor(s)) }
            : On
          : a;
      },
      defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      },
    });
  return (
    (i[Ta] = function (o, s, a = Ca.inspect) {
      let u = { ...this };
      return delete u[Ta], a(u, s);
    }),
    i
  );
}
function Dp(e) {
  let t = new Map();
  for (let r of e) {
    let n = r.getKeys();
    for (let i of n) t.set(i, r);
  }
  return t;
}
function Aa(e, t) {
  return e.filter((r) => {
    var i, o;
    let n = t.get(r);
    return (o =
      (i = n == null ? void 0 : n.has) == null ? void 0 : i.call(n, r)) != null
      ? o
      : !0;
  });
}
m();
p();
f();
d();
function Ir(e) {
  return {
    getKeys() {
      return e;
    },
    has() {
      return !1;
    },
    getPropertyValue() {},
  };
}
m();
p();
f();
d();
m();
p();
f();
d();
var Xt = class {
  constructor(t = 0, r) {
    this.context = r;
    this.lines = [];
    this.currentLine = "";
    this.currentIndent = 0;
    this.currentIndent = t;
  }
  write(t) {
    return typeof t == "string" ? (this.currentLine += t) : t.write(this), this;
  }
  writeJoined(t, r) {
    let n = r.length - 1;
    for (let i = 0; i < r.length; i++)
      this.write(r[i]), i !== n && this.write(t);
    return this;
  }
  writeLine(t) {
    return this.write(t).newLine();
  }
  newLine() {
    this.lines.push(this.indentedCurrentLine()),
      (this.currentLine = ""),
      (this.marginSymbol = void 0);
    let t = this.afterNextNewLineCallback;
    return (this.afterNextNewLineCallback = void 0), t == null || t(), this;
  }
  withIndent(t) {
    return this.indent(), t(this), this.unindent(), this;
  }
  afterNextNewline(t) {
    return (this.afterNextNewLineCallback = t), this;
  }
  indent() {
    return this.currentIndent++, this;
  }
  unindent() {
    return this.currentIndent > 0 && this.currentIndent--, this;
  }
  addMarginSymbol(t) {
    return (this.marginSymbol = t), this;
  }
  toString() {
    return this.lines.concat(this.indentedCurrentLine()).join(`
`);
  }
  getCurrentLineLength() {
    return this.currentLine.length;
  }
  indentedCurrentLine() {
    let t = this.currentLine.padStart(
      this.currentLine.length + 2 * this.currentIndent,
    );
    return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
  }
};
m();
p();
f();
d();
m();
p();
f();
d();
function er(e) {
  return (
    e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
  );
}
function kn(e) {
  return e.toString() !== "Invalid Date";
}
m();
p();
f();
d();
m();
p();
f();
d();
var tr = 9e15,
  bt = 1e9,
  ao = "0123456789abcdef",
  Dn =
    "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
  Nn =
    "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
  uo = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -tr,
    maxE: tr,
    crypto: !1,
  },
  Ra,
  et,
  L = !0,
  Bn = "[DecimalError] ",
  ht = Bn + "Invalid argument: ",
  Oa = Bn + "Precision limit exceeded",
  Ia = Bn + "crypto unavailable",
  ka = "[object Decimal]",
  xe = Math.floor,
  ie = Math.pow,
  Np = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  Lp = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  Bp = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  Fa = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  Ue = 1e7,
  D = 7,
  jp = 9007199254740991,
  Up = Dn.length - 1,
  lo = Nn.length - 1,
  C = { toStringTag: ka };
C.absoluteValue = C.abs = function () {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), F(e);
};
C.ceil = function () {
  return F(new this.constructor(this), this.e + 1, 2);
};
C.clampedTo = C.clamp = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  if (((e = new i(e)), (t = new i(t)), !e.s || !t.s)) return new i(NaN);
  if (e.gt(t)) throw Error(ht + t);
  return (r = n.cmp(e)), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
};
C.comparedTo = C.cmp = function (e) {
  var t,
    r,
    n,
    i,
    o = this,
    s = o.d,
    a = (e = new o.constructor(e)).d,
    u = o.s,
    l = e.s;
  if (!s || !a)
    return !u || !l ? NaN : u !== l ? u : s === a ? 0 : !s ^ (u < 0) ? 1 : -1;
  if (!s[0] || !a[0]) return s[0] ? u : a[0] ? -l : 0;
  if (u !== l) return u;
  if (o.e !== e.e) return (o.e > e.e) ^ (u < 0) ? 1 : -1;
  for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (s[t] !== a[t]) return (s[t] > a[t]) ^ (u < 0) ? 1 : -1;
  return n === i ? 0 : (n > i) ^ (u < 0) ? 1 : -1;
};
C.cosine = C.cos = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.d
    ? r.d[0]
      ? ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + D),
        (n.rounding = 1),
        (r = $p(n, ja(n, r))),
        (n.precision = e),
        (n.rounding = t),
        F(et == 2 || et == 3 ? r.neg() : r, e, t, !0))
      : new n(1)
    : new n(NaN);
};
C.cubeRoot = C.cbrt = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s,
    a,
    u,
    l,
    c = this,
    g = c.constructor;
  if (!c.isFinite() || c.isZero()) return new g(c);
  for (
    L = !1,
      o = c.s * ie(c.s * c, 1 / 3),
      !o || Math.abs(o) == 1 / 0
        ? ((r = ye(c.d)),
          (e = c.e),
          (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"),
          (o = ie(r, 1 / 3)),
          (e = xe((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
          o == 1 / 0
            ? (r = "5e" + e)
            : ((r = o.toExponential()),
              (r = r.slice(0, r.indexOf("e") + 1) + e)),
          (n = new g(r)),
          (n.s = c.s))
        : (n = new g(o.toString())),
      s = (e = g.precision) + 3;
    ;

  )
    if (
      ((a = n),
      (u = a.times(a).times(a)),
      (l = u.plus(c)),
      (n = W(l.plus(c).times(a), l.plus(u), s + 2, 1)),
      ye(a.d).slice(0, s) === (r = ye(n.d)).slice(0, s))
    )
      if (((r = r.slice(s - 3, s + 1)), r == "9999" || (!i && r == "4999"))) {
        if (!i && (F(a, e + 1, 0), a.times(a).times(a).eq(c))) {
          n = a;
          break;
        }
        (s += 4), (i = 1);
      } else {
        (!+r || (!+r.slice(1) && r.charAt(0) == "5")) &&
          (F(n, e + 1, 1), (t = !n.times(n).times(n).eq(c)));
        break;
      }
  return (L = !0), F(n, e, g.rounding, t);
};
C.decimalPlaces = C.dp = function () {
  var e,
    t = this.d,
    r = NaN;
  if (t) {
    if (((e = t.length - 1), (r = (e - xe(this.e / D)) * D), (e = t[e]), e))
      for (; e % 10 == 0; e /= 10) r--;
    r < 0 && (r = 0);
  }
  return r;
};
C.dividedBy = C.div = function (e) {
  return W(this, new this.constructor(e));
};
C.dividedToIntegerBy = C.divToInt = function (e) {
  var t = this,
    r = t.constructor;
  return F(W(t, new r(e), 0, 1, 1), r.precision, r.rounding);
};
C.equals = C.eq = function (e) {
  return this.cmp(e) === 0;
};
C.floor = function () {
  return F(new this.constructor(this), this.e + 1, 3);
};
C.greaterThan = C.gt = function (e) {
  return this.cmp(e) > 0;
};
C.greaterThanOrEqualTo = C.gte = function (e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
C.hyperbolicCosine = C.cosh = function () {
  var e,
    t,
    r,
    n,
    i,
    o = this,
    s = o.constructor,
    a = new s(1);
  if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
  if (o.isZero()) return a;
  (r = s.precision),
    (n = s.rounding),
    (s.precision = r + Math.max(o.e, o.sd()) + 4),
    (s.rounding = 1),
    (i = o.d.length),
    i < 32
      ? ((e = Math.ceil(i / 3)), (t = (1 / Un(4, e)).toString()))
      : ((e = 16), (t = "2.3283064365386962890625e-10")),
    (o = rr(s, 1, o.times(t), new s(1), !0));
  for (var u, l = e, c = new s(8); l--; )
    (u = o.times(o)), (o = a.minus(u.times(c.minus(u.times(c)))));
  return F(o, (s.precision = r), (s.rounding = n), !0);
};
C.hyperbolicSine = C.sinh = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  if (!i.isFinite() || i.isZero()) return new o(i);
  if (
    ((t = o.precision),
    (r = o.rounding),
    (o.precision = t + Math.max(i.e, i.sd()) + 4),
    (o.rounding = 1),
    (n = i.d.length),
    n < 3)
  )
    i = rr(o, 2, i, i, !0);
  else {
    (e = 1.4 * Math.sqrt(n)),
      (e = e > 16 ? 16 : e | 0),
      (i = i.times(1 / Un(5, e))),
      (i = rr(o, 2, i, i, !0));
    for (var s, a = new o(5), u = new o(16), l = new o(20); e--; )
      (s = i.times(i)), (i = i.times(a.plus(s.times(u.times(s).plus(l)))));
  }
  return (o.precision = t), (o.rounding = r), F(i, t, r, !0);
};
C.hyperbolicTangent = C.tanh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + 7),
        (n.rounding = 1),
        W(r.sinh(), r.cosh(), (n.precision = e), (n.rounding = t)))
    : new n(r.s);
};
C.inverseCosine = C.acos = function () {
  var e,
    t = this,
    r = t.constructor,
    n = t.abs().cmp(1),
    i = r.precision,
    o = r.rounding;
  return n !== -1
    ? n === 0
      ? t.isNeg()
        ? je(r, i, o)
        : new r(0)
      : new r(NaN)
    : t.isZero()
    ? je(r, i + 4, o).times(0.5)
    : ((r.precision = i + 6),
      (r.rounding = 1),
      (t = t.asin()),
      (e = je(r, i + 4, o).times(0.5)),
      (r.precision = i),
      (r.rounding = o),
      e.minus(t));
};
C.inverseHyperbolicCosine = C.acosh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.lte(1)
    ? new n(r.eq(1) ? 0 : NaN)
    : r.isFinite()
    ? ((e = n.precision),
      (t = n.rounding),
      (n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4),
      (n.rounding = 1),
      (L = !1),
      (r = r.times(r).minus(1).sqrt().plus(r)),
      (L = !0),
      (n.precision = e),
      (n.rounding = t),
      r.ln())
    : new n(r);
};
C.inverseHyperbolicSine = C.asinh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return !r.isFinite() || r.isZero()
    ? new n(r)
    : ((e = n.precision),
      (t = n.rounding),
      (n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6),
      (n.rounding = 1),
      (L = !1),
      (r = r.times(r).plus(1).sqrt().plus(r)),
      (L = !0),
      (n.precision = e),
      (n.rounding = t),
      r.ln());
};
C.inverseHyperbolicTangent = C.atanh = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  return i.isFinite()
    ? i.e >= 0
      ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
      : ((e = o.precision),
        (t = o.rounding),
        (n = i.sd()),
        Math.max(n, e) < 2 * -i.e - 1
          ? F(new o(i), e, t, !0)
          : ((o.precision = r = n - i.e),
            (i = W(i.plus(1), new o(1).minus(i), r + e, 1)),
            (o.precision = e + 4),
            (o.rounding = 1),
            (i = i.ln()),
            (o.precision = e),
            (o.rounding = t),
            i.times(0.5)))
    : new o(NaN);
};
C.inverseSine = C.asin = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  return i.isZero()
    ? new o(i)
    : ((t = i.abs().cmp(1)),
      (r = o.precision),
      (n = o.rounding),
      t !== -1
        ? t === 0
          ? ((e = je(o, r + 4, n).times(0.5)), (e.s = i.s), e)
          : new o(NaN)
        : ((o.precision = r + 6),
          (o.rounding = 1),
          (i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan()),
          (o.precision = r),
          (o.rounding = n),
          i.times(2)));
};
C.inverseTangent = C.atan = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s,
    a,
    u,
    l = this,
    c = l.constructor,
    g = c.precision,
    y = c.rounding;
  if (l.isFinite()) {
    if (l.isZero()) return new c(l);
    if (l.abs().eq(1) && g + 4 <= lo)
      return (s = je(c, g + 4, y).times(0.25)), (s.s = l.s), s;
  } else {
    if (!l.s) return new c(NaN);
    if (g + 4 <= lo) return (s = je(c, g + 4, y).times(0.5)), (s.s = l.s), s;
  }
  for (
    c.precision = a = g + 10,
      c.rounding = 1,
      r = Math.min(28, (a / D + 2) | 0),
      e = r;
    e;
    --e
  )
    l = l.div(l.times(l).plus(1).sqrt().plus(1));
  for (
    L = !1, t = Math.ceil(a / D), n = 1, u = l.times(l), s = new c(l), i = l;
    e !== -1;

  )
    if (
      ((i = i.times(u)),
      (o = s.minus(i.div((n += 2)))),
      (i = i.times(u)),
      (s = o.plus(i.div((n += 2)))),
      s.d[t] !== void 0)
    )
      for (e = t; s.d[e] === o.d[e] && e--; );
  return (
    r && (s = s.times(2 << (r - 1))),
    (L = !0),
    F(s, (c.precision = g), (c.rounding = y), !0)
  );
};
C.isFinite = function () {
  return !!this.d;
};
C.isInteger = C.isInt = function () {
  return !!this.d && xe(this.e / D) > this.d.length - 2;
};
C.isNaN = function () {
  return !this.s;
};
C.isNegative = C.isNeg = function () {
  return this.s < 0;
};
C.isPositive = C.isPos = function () {
  return this.s > 0;
};
C.isZero = function () {
  return !!this.d && this.d[0] === 0;
};
C.lessThan = C.lt = function (e) {
  return this.cmp(e) < 0;
};
C.lessThanOrEqualTo = C.lte = function (e) {
  return this.cmp(e) < 1;
};
C.logarithm = C.log = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    u,
    l = this,
    c = l.constructor,
    g = c.precision,
    y = c.rounding,
    P = 5;
  if (e == null) (e = new c(10)), (t = !0);
  else {
    if (((e = new c(e)), (r = e.d), e.s < 0 || !r || !r[0] || e.eq(1)))
      return new c(NaN);
    t = e.eq(10);
  }
  if (((r = l.d), l.s < 0 || !r || !r[0] || l.eq(1)))
    return new c(r && !r[0] ? -1 / 0 : l.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (t)
    if (r.length > 1) o = !0;
    else {
      for (i = r[0]; i % 10 === 0; ) i /= 10;
      o = i !== 1;
    }
  if (
    ((L = !1),
    (a = g + P),
    (s = yt(l, a)),
    (n = t ? Ln(c, a + 10) : yt(e, a)),
    (u = W(s, n, a, 1)),
    kr(u.d, (i = g), y))
  )
    do
      if (
        ((a += 10),
        (s = yt(l, a)),
        (n = t ? Ln(c, a + 10) : yt(e, a)),
        (u = W(s, n, a, 1)),
        !o)
      ) {
        +ye(u.d).slice(i + 1, i + 15) + 1 == 1e14 && (u = F(u, g + 1, 0));
        break;
      }
    while (kr(u.d, (i += 10), y));
  return (L = !0), F(u, g, y);
};
C.minus = C.sub = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    u,
    l,
    c,
    g,
    y,
    P = this,
    v = P.constructor;
  if (((e = new v(e)), !P.d || !e.d))
    return (
      !P.s || !e.s
        ? (e = new v(NaN))
        : P.d
        ? (e.s = -e.s)
        : (e = new v(e.d || P.s !== e.s ? P : NaN)),
      e
    );
  if (P.s != e.s) return (e.s = -e.s), P.plus(e);
  if (
    ((l = P.d), (y = e.d), (a = v.precision), (u = v.rounding), !l[0] || !y[0])
  ) {
    if (y[0]) e.s = -e.s;
    else if (l[0]) e = new v(P);
    else return new v(u === 3 ? -0 : 0);
    return L ? F(e, a, u) : e;
  }
  if (((r = xe(e.e / D)), (c = xe(P.e / D)), (l = l.slice()), (o = c - r), o)) {
    for (
      g = o < 0,
        g
          ? ((t = l), (o = -o), (s = y.length))
          : ((t = y), (r = c), (s = l.length)),
        n = Math.max(Math.ceil(a / D), s) + 2,
        o > n && ((o = n), (t.length = 1)),
        t.reverse(),
        n = o;
      n--;

    )
      t.push(0);
    t.reverse();
  } else {
    for (n = l.length, s = y.length, g = n < s, g && (s = n), n = 0; n < s; n++)
      if (l[n] != y[n]) {
        g = l[n] < y[n];
        break;
      }
    o = 0;
  }
  for (
    g && ((t = l), (l = y), (y = t), (e.s = -e.s)),
      s = l.length,
      n = y.length - s;
    n > 0;
    --n
  )
    l[s++] = 0;
  for (n = y.length; n > o; ) {
    if (l[--n] < y[n]) {
      for (i = n; i && l[--i] === 0; ) l[i] = Ue - 1;
      --l[i], (l[n] += Ue);
    }
    l[n] -= y[n];
  }
  for (; l[--s] === 0; ) l.pop();
  for (; l[0] === 0; l.shift()) --r;
  return l[0]
    ? ((e.d = l), (e.e = jn(l, r)), L ? F(e, a, u) : e)
    : new v(u === 3 ? -0 : 0);
};
C.modulo = C.mod = function (e) {
  var t,
    r = this,
    n = r.constructor;
  return (
    (e = new n(e)),
    !r.d || !e.s || (e.d && !e.d[0])
      ? new n(NaN)
      : !e.d || (r.d && !r.d[0])
      ? F(new n(r), n.precision, n.rounding)
      : ((L = !1),
        n.modulo == 9
          ? ((t = W(r, e.abs(), 0, 3, 1)), (t.s *= e.s))
          : (t = W(r, e, 0, n.modulo, 1)),
        (t = t.times(e)),
        (L = !0),
        r.minus(t))
  );
};
C.naturalExponential = C.exp = function () {
  return co(this);
};
C.naturalLogarithm = C.ln = function () {
  return yt(this);
};
C.negated = C.neg = function () {
  var e = new this.constructor(this);
  return (e.s = -e.s), F(e);
};
C.plus = C.add = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    u,
    l,
    c,
    g = this,
    y = g.constructor;
  if (((e = new y(e)), !g.d || !e.d))
    return (
      !g.s || !e.s
        ? (e = new y(NaN))
        : g.d || (e = new y(e.d || g.s === e.s ? g : NaN)),
      e
    );
  if (g.s != e.s) return (e.s = -e.s), g.minus(e);
  if (
    ((l = g.d), (c = e.d), (a = y.precision), (u = y.rounding), !l[0] || !c[0])
  )
    return c[0] || (e = new y(g)), L ? F(e, a, u) : e;
  if (((o = xe(g.e / D)), (n = xe(e.e / D)), (l = l.slice()), (i = o - n), i)) {
    for (
      i < 0
        ? ((r = l), (i = -i), (s = c.length))
        : ((r = c), (n = o), (s = l.length)),
        o = Math.ceil(a / D),
        s = o > s ? o + 1 : s + 1,
        i > s && ((i = s), (r.length = 1)),
        r.reverse();
      i--;

    )
      r.push(0);
    r.reverse();
  }
  for (
    s = l.length,
      i = c.length,
      s - i < 0 && ((i = s), (r = c), (c = l), (l = r)),
      t = 0;
    i;

  )
    (t = ((l[--i] = l[i] + c[i] + t) / Ue) | 0), (l[i] %= Ue);
  for (t && (l.unshift(t), ++n), s = l.length; l[--s] == 0; ) l.pop();
  return (e.d = l), (e.e = jn(l, n)), L ? F(e, a, u) : e;
};
C.precision = C.sd = function (e) {
  var t,
    r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(ht + e);
  return (
    r.d ? ((t = Da(r.d)), e && r.e + 1 > t && (t = r.e + 1)) : (t = NaN), t
  );
};
C.round = function () {
  var e = this,
    t = e.constructor;
  return F(new t(e), e.e + 1, t.rounding);
};
C.sine = C.sin = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + D),
        (n.rounding = 1),
        (r = Vp(n, ja(n, r))),
        (n.precision = e),
        (n.rounding = t),
        F(et > 2 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
C.squareRoot = C.sqrt = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s = this,
    a = s.d,
    u = s.e,
    l = s.s,
    c = s.constructor;
  if (l !== 1 || !a || !a[0])
    return new c(!l || (l < 0 && (!a || a[0])) ? NaN : a ? s : 1 / 0);
  for (
    L = !1,
      l = Math.sqrt(+s),
      l == 0 || l == 1 / 0
        ? ((t = ye(a)),
          (t.length + u) % 2 == 0 && (t += "0"),
          (l = Math.sqrt(t)),
          (u = xe((u + 1) / 2) - (u < 0 || u % 2)),
          l == 1 / 0
            ? (t = "5e" + u)
            : ((t = l.toExponential()),
              (t = t.slice(0, t.indexOf("e") + 1) + u)),
          (n = new c(t)))
        : (n = new c(l.toString())),
      r = (u = c.precision) + 3;
    ;

  )
    if (
      ((o = n),
      (n = o.plus(W(s, o, r + 2, 1)).times(0.5)),
      ye(o.d).slice(0, r) === (t = ye(n.d)).slice(0, r))
    )
      if (((t = t.slice(r - 3, r + 1)), t == "9999" || (!i && t == "4999"))) {
        if (!i && (F(o, u + 1, 0), o.times(o).eq(s))) {
          n = o;
          break;
        }
        (r += 4), (i = 1);
      } else {
        (!+t || (!+t.slice(1) && t.charAt(0) == "5")) &&
          (F(n, u + 1, 1), (e = !n.times(n).eq(s)));
        break;
      }
  return (L = !0), F(n, u, c.rounding, e);
};
C.tangent = C.tan = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + 10),
        (n.rounding = 1),
        (r = r.sin()),
        (r.s = 1),
        (r = W(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0)),
        (n.precision = e),
        (n.rounding = t),
        F(et == 2 || et == 4 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
C.times = C.mul = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    u,
    l,
    c = this,
    g = c.constructor,
    y = c.d,
    P = (e = new g(e)).d;
  if (((e.s *= c.s), !y || !y[0] || !P || !P[0]))
    return new g(
      !e.s || (y && !y[0] && !P) || (P && !P[0] && !y)
        ? NaN
        : !y || !P
        ? e.s / 0
        : e.s * 0,
    );
  for (
    r = xe(c.e / D) + xe(e.e / D),
      u = y.length,
      l = P.length,
      u < l && ((o = y), (y = P), (P = o), (s = u), (u = l), (l = s)),
      o = [],
      s = u + l,
      n = s;
    n--;

  )
    o.push(0);
  for (n = l; --n >= 0; ) {
    for (t = 0, i = u + n; i > n; )
      (a = o[i] + P[n] * y[i - n - 1] + t),
        (o[i--] = a % Ue | 0),
        (t = (a / Ue) | 0);
    o[i] = (o[i] + t) % Ue | 0;
  }
  for (; !o[--s]; ) o.pop();
  return (
    t ? ++r : o.shift(),
    (e.d = o),
    (e.e = jn(o, r)),
    L ? F(e, g.precision, g.rounding) : e
  );
};
C.toBinary = function (e, t) {
  return fo(this, 2, e, t);
};
C.toDecimalPlaces = C.toDP = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (Se(e, 0, bt),
        t === void 0 ? (t = n.rounding) : Se(t, 0, 8),
        F(r, e + r.e + 1, t))
  );
};
C.toExponential = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = Ge(n, !0))
      : (Se(e, 0, bt),
        t === void 0 ? (t = i.rounding) : Se(t, 0, 8),
        (n = F(new i(n), e + 1, t)),
        (r = Ge(n, !0, e + 1))),
    n.isNeg() && !n.isZero() ? "-" + r : r
  );
};
C.toFixed = function (e, t) {
  var r,
    n,
    i = this,
    o = i.constructor;
  return (
    e === void 0
      ? (r = Ge(i))
      : (Se(e, 0, bt),
        t === void 0 ? (t = o.rounding) : Se(t, 0, 8),
        (n = F(new o(i), e + i.e + 1, t)),
        (r = Ge(n, !1, e + n.e + 1))),
    i.isNeg() && !i.isZero() ? "-" + r : r
  );
};
C.toFraction = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    u,
    l,
    c,
    g,
    y,
    P = this,
    v = P.d,
    E = P.constructor;
  if (!v) return new E(P);
  if (
    ((l = r = new E(1)),
    (n = u = new E(0)),
    (t = new E(n)),
    (o = t.e = Da(v) - P.e - 1),
    (s = o % D),
    (t.d[0] = ie(10, s < 0 ? D + s : s)),
    e == null)
  )
    e = o > 0 ? t : l;
  else {
    if (((a = new E(e)), !a.isInt() || a.lt(l))) throw Error(ht + a);
    e = a.gt(t) ? (o > 0 ? t : l) : a;
  }
  for (
    L = !1,
      a = new E(ye(v)),
      c = E.precision,
      E.precision = o = v.length * D * 2;
    (g = W(a, t, 0, 1, 1)), (i = r.plus(g.times(n))), i.cmp(e) != 1;

  )
    (r = n),
      (n = i),
      (i = l),
      (l = u.plus(g.times(i))),
      (u = i),
      (i = t),
      (t = a.minus(g.times(i))),
      (a = i);
  return (
    (i = W(e.minus(r), n, 0, 1, 1)),
    (u = u.plus(i.times(l))),
    (r = r.plus(i.times(n))),
    (u.s = l.s = P.s),
    (y =
      W(l, n, o, 1)
        .minus(P)
        .abs()
        .cmp(W(u, r, o, 1).minus(P).abs()) < 1
        ? [l, n]
        : [u, r]),
    (E.precision = c),
    (L = !0),
    y
  );
};
C.toHexadecimal = C.toHex = function (e, t) {
  return fo(this, 16, e, t);
};
C.toNearest = function (e, t) {
  var r = this,
    n = r.constructor;
  if (((r = new n(r)), e == null)) {
    if (!r.d) return r;
    (e = new n(1)), (t = n.rounding);
  } else {
    if (((e = new n(e)), t === void 0 ? (t = n.rounding) : Se(t, 0, 8), !r.d))
      return e.s ? r : e;
    if (!e.d) return e.s && (e.s = r.s), e;
  }
  return (
    e.d[0]
      ? ((L = !1), (r = W(r, e, 0, t, 1).times(e)), (L = !0), F(r))
      : ((e.s = r.s), (r = e)),
    r
  );
};
C.toNumber = function () {
  return +this;
};
C.toOctal = function (e, t) {
  return fo(this, 8, e, t);
};
C.toPower = C.pow = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a = this,
    u = a.constructor,
    l = +(e = new u(e));
  if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new u(ie(+a, l));
  if (((a = new u(a)), a.eq(1))) return a;
  if (((n = u.precision), (o = u.rounding), e.eq(1))) return F(a, n, o);
  if (((t = xe(e.e / D)), t >= e.d.length - 1 && (r = l < 0 ? -l : l) <= jp))
    return (i = Na(u, a, r, n)), e.s < 0 ? new u(1).div(i) : F(i, n, o);
  if (((s = a.s), s < 0)) {
    if (t < e.d.length - 1) return new u(NaN);
    if ((e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1))
      return (a.s = s), a;
  }
  return (
    (r = ie(+a, l)),
    (t =
      r == 0 || !isFinite(r)
        ? xe(l * (Math.log("0." + ye(a.d)) / Math.LN10 + a.e + 1))
        : new u(r + "").e),
    t > u.maxE + 1 || t < u.minE - 1
      ? new u(t > 0 ? s / 0 : 0)
      : ((L = !1),
        (u.rounding = a.s = 1),
        (r = Math.min(12, (t + "").length)),
        (i = co(e.times(yt(a, n + r)), n)),
        i.d &&
          ((i = F(i, n + 5, 1)),
          kr(i.d, n, o) &&
            ((t = n + 10),
            (i = F(co(e.times(yt(a, t + r)), t), t + 5, 1)),
            +ye(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = F(i, n + 1, 0)))),
        (i.s = s),
        (L = !0),
        (u.rounding = o),
        F(i, n, o))
  );
};
C.toPrecision = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = Ge(n, n.e <= i.toExpNeg || n.e >= i.toExpPos))
      : (Se(e, 1, bt),
        t === void 0 ? (t = i.rounding) : Se(t, 0, 8),
        (n = F(new i(n), e, t)),
        (r = Ge(n, e <= n.e || n.e <= i.toExpNeg, e))),
    n.isNeg() && !n.isZero() ? "-" + r : r
  );
};
C.toSignificantDigits = C.toSD = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (Se(e, 1, bt), t === void 0 ? (t = n.rounding) : Se(t, 0, 8)),
    F(new n(r), e, t)
  );
};
C.toString = function () {
  var e = this,
    t = e.constructor,
    r = Ge(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
C.truncated = C.trunc = function () {
  return F(new this.constructor(this), this.e + 1, 1);
};
C.valueOf = C.toJSON = function () {
  var e = this,
    t = e.constructor,
    r = Ge(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function ye(e) {
  var t,
    r,
    n,
    i = e.length - 1,
    o = "",
    s = e[0];
  if (i > 0) {
    for (o += s, t = 1; t < i; t++)
      (n = e[t] + ""), (r = D - n.length), r && (o += gt(r)), (o += n);
    (s = e[t]), (n = s + ""), (r = D - n.length), r && (o += gt(r));
  } else if (s === 0) return "0";
  for (; s % 10 === 0; ) s /= 10;
  return o + s;
}
function Se(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(ht + e);
}
function kr(e, t, r, n) {
  var i, o, s, a;
  for (o = e[0]; o >= 10; o /= 10) --t;
  return (
    --t < 0 ? ((t += D), (i = 0)) : ((i = Math.ceil((t + 1) / D)), (t %= D)),
    (o = ie(10, D - t)),
    (a = e[i] % o | 0),
    n == null
      ? t < 3
        ? (t == 0 ? (a = (a / 100) | 0) : t == 1 && (a = (a / 10) | 0),
          (s =
            (r < 4 && a == 99999) ||
            (r > 3 && a == 49999) ||
            a == 5e4 ||
            a == 0))
        : (s =
            (((r < 4 && a + 1 == o) || (r > 3 && a + 1 == o / 2)) &&
              ((e[i + 1] / o / 100) | 0) == ie(10, t - 2) - 1) ||
            ((a == o / 2 || a == 0) && ((e[i + 1] / o / 100) | 0) == 0))
      : t < 4
      ? (t == 0
          ? (a = (a / 1e3) | 0)
          : t == 1
          ? (a = (a / 100) | 0)
          : t == 2 && (a = (a / 10) | 0),
        (s = ((n || r < 4) && a == 9999) || (!n && r > 3 && a == 4999)))
      : (s =
          (((n || r < 4) && a + 1 == o) || (!n && r > 3 && a + 1 == o / 2)) &&
          ((e[i + 1] / o / 1e3) | 0) == ie(10, t - 3) - 1),
    s
  );
}
function Fn(e, t, r) {
  for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
    for (o = i.length; o--; ) i[o] *= t;
    for (i[0] += ao.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
      i[n] > r - 1 &&
        (i[n + 1] === void 0 && (i[n + 1] = 0),
        (i[n + 1] += (i[n] / r) | 0),
        (i[n] %= r));
  }
  return i.reverse();
}
function $p(e, t) {
  var r, n, i;
  if (t.isZero()) return t;
  (n = t.d.length),
    n < 32
      ? ((r = Math.ceil(n / 3)), (i = (1 / Un(4, r)).toString()))
      : ((r = 16), (i = "2.3283064365386962890625e-10")),
    (e.precision += r),
    (t = rr(e, 1, t.times(i), new e(1)));
  for (var o = r; o--; ) {
    var s = t.times(t);
    t = s.times(s).minus(s).times(8).plus(1);
  }
  return (e.precision -= r), t;
}
var W = (function () {
  function e(n, i, o) {
    var s,
      a = 0,
      u = n.length;
    for (n = n.slice(); u--; )
      (s = n[u] * i + a), (n[u] = s % o | 0), (a = (s / o) | 0);
    return a && n.unshift(a), n;
  }
  function t(n, i, o, s) {
    var a, u;
    if (o != s) u = o > s ? 1 : -1;
    else
      for (a = u = 0; a < o; a++)
        if (n[a] != i[a]) {
          u = n[a] > i[a] ? 1 : -1;
          break;
        }
    return u;
  }
  function r(n, i, o, s) {
    for (var a = 0; o--; )
      (n[o] -= a), (a = n[o] < i[o] ? 1 : 0), (n[o] = a * s + n[o] - i[o]);
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, i, o, s, a, u) {
    var l,
      c,
      g,
      y,
      P,
      v,
      E,
      A,
      M,
      O,
      S,
      R,
      j,
      U,
      De,
      G,
      te,
      Re,
      re,
      Oe,
      it = n.constructor,
      Q = n.s == i.s ? 1 : -1,
      K = n.d,
      k = i.d;
    if (!K || !K[0] || !k || !k[0])
      return new it(
        !n.s || !i.s || (K ? k && K[0] == k[0] : !k)
          ? NaN
          : (K && K[0] == 0) || !k
          ? Q * 0
          : Q / 0,
      );
    for (
      u
        ? ((P = 1), (c = n.e - i.e))
        : ((u = Ue), (P = D), (c = xe(n.e / P) - xe(i.e / P))),
        re = k.length,
        te = K.length,
        M = new it(Q),
        O = M.d = [],
        g = 0;
      k[g] == (K[g] || 0);
      g++
    );
    if (
      (k[g] > (K[g] || 0) && c--,
      o == null
        ? ((U = o = it.precision), (s = it.rounding))
        : a
        ? (U = o + (n.e - i.e) + 1)
        : (U = o),
      U < 0)
    )
      O.push(1), (v = !0);
    else {
      if (((U = (U / P + 2) | 0), (g = 0), re == 1)) {
        for (y = 0, k = k[0], U++; (g < te || y) && U--; g++)
          (De = y * u + (K[g] || 0)), (O[g] = (De / k) | 0), (y = De % k | 0);
        v = y || g < te;
      } else {
        for (
          y = (u / (k[0] + 1)) | 0,
            y > 1 &&
              ((k = e(k, y, u)),
              (K = e(K, y, u)),
              (re = k.length),
              (te = K.length)),
            G = re,
            S = K.slice(0, re),
            R = S.length;
          R < re;

        )
          S[R++] = 0;
        (Oe = k.slice()), Oe.unshift(0), (Re = k[0]), k[1] >= u / 2 && ++Re;
        do
          (y = 0),
            (l = t(k, S, re, R)),
            l < 0
              ? ((j = S[0]),
                re != R && (j = j * u + (S[1] || 0)),
                (y = (j / Re) | 0),
                y > 1
                  ? (y >= u && (y = u - 1),
                    (E = e(k, y, u)),
                    (A = E.length),
                    (R = S.length),
                    (l = t(E, S, A, R)),
                    l == 1 && (y--, r(E, re < A ? Oe : k, A, u)))
                  : (y == 0 && (l = y = 1), (E = k.slice())),
                (A = E.length),
                A < R && E.unshift(0),
                r(S, E, R, u),
                l == -1 &&
                  ((R = S.length),
                  (l = t(k, S, re, R)),
                  l < 1 && (y++, r(S, re < R ? Oe : k, R, u))),
                (R = S.length))
              : l === 0 && (y++, (S = [0])),
            (O[g++] = y),
            l && S[0] ? (S[R++] = K[G] || 0) : ((S = [K[G]]), (R = 1));
        while ((G++ < te || S[0] !== void 0) && U--);
        v = S[0] !== void 0;
      }
      O[0] || O.shift();
    }
    if (P == 1) (M.e = c), (Ra = v);
    else {
      for (g = 1, y = O[0]; y >= 10; y /= 10) g++;
      (M.e = g + c * P - 1), F(M, a ? o + M.e + 1 : o, s, v);
    }
    return M;
  };
})();
function F(e, t, r, n) {
  var i,
    o,
    s,
    a,
    u,
    l,
    c,
    g,
    y,
    P = e.constructor;
  e: if (t != null) {
    if (((g = e.d), !g)) return e;
    for (i = 1, a = g[0]; a >= 10; a /= 10) i++;
    if (((o = t - i), o < 0))
      (o += D),
        (s = t),
        (c = g[(y = 0)]),
        (u = (c / ie(10, i - s - 1)) % 10 | 0);
    else if (((y = Math.ceil((o + 1) / D)), (a = g.length), y >= a))
      if (n) {
        for (; a++ <= y; ) g.push(0);
        (c = u = 0), (i = 1), (o %= D), (s = o - D + 1);
      } else break e;
    else {
      for (c = a = g[y], i = 1; a >= 10; a /= 10) i++;
      (o %= D),
        (s = o - D + i),
        (u = s < 0 ? 0 : (c / ie(10, i - s - 1)) % 10 | 0);
    }
    if (
      ((n =
        n ||
        t < 0 ||
        g[y + 1] !== void 0 ||
        (s < 0 ? c : c % ie(10, i - s - 1))),
      (l =
        r < 4
          ? (u || n) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : u > 5 ||
            (u == 5 &&
              (r == 4 ||
                n ||
                (r == 6 &&
                  (o > 0 ? (s > 0 ? c / ie(10, i - s) : 0) : g[y - 1]) % 10 &
                    1) ||
                r == (e.s < 0 ? 8 : 7)))),
      t < 1 || !g[0])
    )
      return (
        (g.length = 0),
        l
          ? ((t -= e.e + 1),
            (g[0] = ie(10, (D - (t % D)) % D)),
            (e.e = -t || 0))
          : (g[0] = e.e = 0),
        e
      );
    if (
      (o == 0
        ? ((g.length = y), (a = 1), y--)
        : ((g.length = y + 1),
          (a = ie(10, D - o)),
          (g[y] = s > 0 ? ((c / ie(10, i - s)) % ie(10, s) | 0) * a : 0)),
      l)
    )
      for (;;)
        if (y == 0) {
          for (o = 1, s = g[0]; s >= 10; s /= 10) o++;
          for (s = g[0] += a, a = 1; s >= 10; s /= 10) a++;
          o != a && (e.e++, g[0] == Ue && (g[0] = 1));
          break;
        } else {
          if (((g[y] += a), g[y] != Ue)) break;
          (g[y--] = 0), (a = 1);
        }
    for (o = g.length; g[--o] === 0; ) g.pop();
  }
  return (
    L &&
      (e.e > P.maxE
        ? ((e.d = null), (e.e = NaN))
        : e.e < P.minE && ((e.e = 0), (e.d = [0]))),
    e
  );
}
function Ge(e, t, r) {
  if (!e.isFinite()) return Ba(e);
  var n,
    i = e.e,
    o = ye(e.d),
    s = o.length;
  return (
    t
      ? (r && (n = r - s) > 0
          ? (o = o.charAt(0) + "." + o.slice(1) + gt(n))
          : s > 1 && (o = o.charAt(0) + "." + o.slice(1)),
        (o = o + (e.e < 0 ? "e" : "e+") + e.e))
      : i < 0
      ? ((o = "0." + gt(-i - 1) + o), r && (n = r - s) > 0 && (o += gt(n)))
      : i >= s
      ? ((o += gt(i + 1 - s)),
        r && (n = r - i - 1) > 0 && (o = o + "." + gt(n)))
      : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)),
        r && (n = r - s) > 0 && (i + 1 === s && (o += "."), (o += gt(n)))),
    o
  );
}
function jn(e, t) {
  var r = e[0];
  for (t *= D; r >= 10; r /= 10) t++;
  return t;
}
function Ln(e, t, r) {
  if (t > Up) throw ((L = !0), r && (e.precision = r), Error(Oa));
  return F(new e(Dn), t, 1, !0);
}
function je(e, t, r) {
  if (t > lo) throw Error(Oa);
  return F(new e(Nn), t, r, !0);
}
function Da(e) {
  var t = e.length - 1,
    r = t * D + 1;
  if (((t = e[t]), t)) {
    for (; t % 10 == 0; t /= 10) r--;
    for (t = e[0]; t >= 10; t /= 10) r++;
  }
  return r;
}
function gt(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Na(e, t, r, n) {
  var i,
    o = new e(1),
    s = Math.ceil(n / D + 4);
  for (L = !1; ; ) {
    if (
      (r % 2 && ((o = o.times(t)), Sa(o.d, s) && (i = !0)),
      (r = xe(r / 2)),
      r === 0)
    ) {
      (r = o.d.length - 1), i && o.d[r] === 0 && ++o.d[r];
      break;
    }
    (t = t.times(t)), Sa(t.d, s);
  }
  return (L = !0), o;
}
function _a(e) {
  return e.d[e.d.length - 1] & 1;
}
function La(e, t, r) {
  for (var n, i = new e(t[0]), o = 0; ++o < t.length; )
    if (((n = new e(t[o])), n.s)) i[r](n) && (i = n);
    else {
      i = n;
      break;
    }
  return i;
}
function co(e, t) {
  var r,
    n,
    i,
    o,
    s,
    a,
    u,
    l = 0,
    c = 0,
    g = 0,
    y = e.constructor,
    P = y.rounding,
    v = y.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new y(
      e.d
        ? e.d[0]
          ? e.s < 0
            ? 0
            : 1 / 0
          : 1
        : e.s
        ? e.s < 0
          ? 0
          : e
        : 0 / 0,
    );
  for (
    t == null ? ((L = !1), (u = v)) : (u = t), a = new y(0.03125);
    e.e > -2;

  )
    (e = e.times(a)), (g += 5);
  for (
    n = ((Math.log(ie(2, g)) / Math.LN10) * 2 + 5) | 0,
      u += n,
      r = o = s = new y(1),
      y.precision = u;
    ;

  ) {
    if (
      ((o = F(o.times(e), u, 1)),
      (r = r.times(++c)),
      (a = s.plus(W(o, r, u, 1))),
      ye(a.d).slice(0, u) === ye(s.d).slice(0, u))
    ) {
      for (i = g; i--; ) s = F(s.times(s), u, 1);
      if (t == null)
        if (l < 3 && kr(s.d, u - n, P, l))
          (y.precision = u += 10), (r = o = a = new y(1)), (c = 0), l++;
        else return F(s, (y.precision = v), P, (L = !0));
      else return (y.precision = v), s;
    }
    s = a;
  }
}
function yt(e, t) {
  var r,
    n,
    i,
    o,
    s,
    a,
    u,
    l,
    c,
    g,
    y,
    P = 1,
    v = 10,
    E = e,
    A = E.d,
    M = E.constructor,
    O = M.rounding,
    S = M.precision;
  if (E.s < 0 || !A || !A[0] || (!E.e && A[0] == 1 && A.length == 1))
    return new M(A && !A[0] ? -1 / 0 : E.s != 1 ? NaN : A ? 0 : E);
  if (
    (t == null ? ((L = !1), (c = S)) : (c = t),
    (M.precision = c += v),
    (r = ye(A)),
    (n = r.charAt(0)),
    Math.abs((o = E.e)) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      (E = E.times(e)), (r = ye(E.d)), (n = r.charAt(0)), P++;
    (o = E.e),
      n > 1 ? ((E = new M("0." + r)), o++) : (E = new M(n + "." + r.slice(1)));
  } else
    return (
      (l = Ln(M, c + 2, S).times(o + "")),
      (E = yt(new M(n + "." + r.slice(1)), c - v).plus(l)),
      (M.precision = S),
      t == null ? F(E, S, O, (L = !0)) : E
    );
  for (
    g = E,
      u = s = E = W(E.minus(1), E.plus(1), c, 1),
      y = F(E.times(E), c, 1),
      i = 3;
    ;

  ) {
    if (
      ((s = F(s.times(y), c, 1)),
      (l = u.plus(W(s, new M(i), c, 1))),
      ye(l.d).slice(0, c) === ye(u.d).slice(0, c))
    )
      if (
        ((u = u.times(2)),
        o !== 0 && (u = u.plus(Ln(M, c + 2, S).times(o + ""))),
        (u = W(u, new M(P), c, 1)),
        t == null)
      )
        if (kr(u.d, c - v, O, a))
          (M.precision = c += v),
            (l = s = E = W(g.minus(1), g.plus(1), c, 1)),
            (y = F(E.times(E), c, 1)),
            (i = a = 1);
        else return F(u, (M.precision = S), O, (L = !0));
      else return (M.precision = S), u;
    (u = l), (i += 2);
  }
}
function Ba(e) {
  return String((e.s * e.s) / 0);
}
function po(e, t) {
  var r, n, i;
  for (
    (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;
    n++
  );
  for (i = t.length; t.charCodeAt(i - 1) === 48; --i);
  if (((t = t.slice(n, i)), t)) {
    if (
      ((i -= n),
      (e.e = r = r - n - 1),
      (e.d = []),
      (n = (r + 1) % D),
      r < 0 && (n += D),
      n < i)
    ) {
      for (n && e.d.push(+t.slice(0, n)), i -= D; n < i; )
        e.d.push(+t.slice(n, (n += D)));
      (t = t.slice(n)), (n = D - t.length);
    } else n -= i;
    for (; n--; ) t += "0";
    e.d.push(+t),
      L &&
        (e.e > e.constructor.maxE
          ? ((e.d = null), (e.e = NaN))
          : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
  } else (e.e = 0), (e.d = [0]);
  return e;
}
function qp(e, t) {
  var r, n, i, o, s, a, u, l, c;
  if (t.indexOf("_") > -1) {
    if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), Fa.test(t))) return po(e, t);
  } else if (t === "Infinity" || t === "NaN")
    return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
  if (Lp.test(t)) (r = 16), (t = t.toLowerCase());
  else if (Np.test(t)) r = 2;
  else if (Bp.test(t)) r = 8;
  else throw Error(ht + t);
  for (
    o = t.search(/p/i),
      o > 0
        ? ((u = +t.slice(o + 1)), (t = t.substring(2, o)))
        : (t = t.slice(2)),
      o = t.indexOf("."),
      s = o >= 0,
      n = e.constructor,
      s &&
        ((t = t.replace(".", "")),
        (a = t.length),
        (o = a - o),
        (i = Na(n, new n(r), o, o * 2))),
      l = Fn(t, r, Ue),
      c = l.length - 1,
      o = c;
    l[o] === 0;
    --o
  )
    l.pop();
  return o < 0
    ? new n(e.s * 0)
    : ((e.e = jn(l, c)),
      (e.d = l),
      (L = !1),
      s && (e = W(e, i, a * 4)),
      u && (e = e.times(Math.abs(u) < 54 ? ie(2, u) : It.pow(2, u))),
      (L = !0),
      e);
}
function Vp(e, t) {
  var r,
    n = t.d.length;
  if (n < 3) return t.isZero() ? t : rr(e, 2, t, t);
  (r = 1.4 * Math.sqrt(n)),
    (r = r > 16 ? 16 : r | 0),
    (t = t.times(1 / Un(5, r))),
    (t = rr(e, 2, t, t));
  for (var i, o = new e(5), s = new e(16), a = new e(20); r--; )
    (i = t.times(t)), (t = t.times(o.plus(i.times(s.times(i).minus(a)))));
  return t;
}
function rr(e, t, r, n, i) {
  var o,
    s,
    a,
    u,
    l = 1,
    c = e.precision,
    g = Math.ceil(c / D);
  for (L = !1, u = r.times(r), a = new e(n); ; ) {
    if (
      ((s = W(a.times(u), new e(t++ * t++), c, 1)),
      (a = i ? n.plus(s) : n.minus(s)),
      (n = W(s.times(u), new e(t++ * t++), c, 1)),
      (s = a.plus(n)),
      s.d[g] !== void 0)
    ) {
      for (o = g; s.d[o] === a.d[o] && o--; );
      if (o == -1) break;
    }
    (o = a), (a = n), (n = s), (s = o), l++;
  }
  return (L = !0), (s.d.length = g + 1), s;
}
function Un(e, t) {
  for (var r = e; --t; ) r *= e;
  return r;
}
function ja(e, t) {
  var r,
    n = t.s < 0,
    i = je(e, e.precision, 1),
    o = i.times(0.5);
  if (((t = t.abs()), t.lte(o))) return (et = n ? 4 : 1), t;
  if (((r = t.divToInt(i)), r.isZero())) et = n ? 3 : 2;
  else {
    if (((t = t.minus(r.times(i))), t.lte(o)))
      return (et = _a(r) ? (n ? 2 : 3) : n ? 4 : 1), t;
    et = _a(r) ? (n ? 1 : 4) : n ? 3 : 2;
  }
  return t.minus(i).abs();
}
function fo(e, t, r, n) {
  var i,
    o,
    s,
    a,
    u,
    l,
    c,
    g,
    y,
    P = e.constructor,
    v = r !== void 0;
  if (
    (v
      ? (Se(r, 1, bt), n === void 0 ? (n = P.rounding) : Se(n, 0, 8))
      : ((r = P.precision), (n = P.rounding)),
    !e.isFinite())
  )
    c = Ba(e);
  else {
    for (
      c = Ge(e),
        s = c.indexOf("."),
        v
          ? ((i = 2), t == 16 ? (r = r * 4 - 3) : t == 8 && (r = r * 3 - 2))
          : (i = t),
        s >= 0 &&
          ((c = c.replace(".", "")),
          (y = new P(1)),
          (y.e = c.length - s),
          (y.d = Fn(Ge(y), 10, i)),
          (y.e = y.d.length)),
        g = Fn(c, 10, i),
        o = u = g.length;
      g[--u] == 0;

    )
      g.pop();
    if (!g[0]) c = v ? "0p+0" : "0";
    else {
      if (
        (s < 0
          ? o--
          : ((e = new P(e)),
            (e.d = g),
            (e.e = o),
            (e = W(e, y, r, n, 0, i)),
            (g = e.d),
            (o = e.e),
            (l = Ra)),
        (s = g[r]),
        (a = i / 2),
        (l = l || g[r + 1] !== void 0),
        (l =
          n < 4
            ? (s !== void 0 || l) && (n === 0 || n === (e.s < 0 ? 3 : 2))
            : s > a ||
              (s === a &&
                (n === 4 ||
                  l ||
                  (n === 6 && g[r - 1] & 1) ||
                  n === (e.s < 0 ? 8 : 7)))),
        (g.length = r),
        l)
      )
        for (; ++g[--r] > i - 1; ) (g[r] = 0), r || (++o, g.unshift(1));
      for (u = g.length; !g[u - 1]; --u);
      for (s = 0, c = ""; s < u; s++) c += ao.charAt(g[s]);
      if (v) {
        if (u > 1)
          if (t == 16 || t == 8) {
            for (s = t == 16 ? 4 : 3, --u; u % s; u++) c += "0";
            for (g = Fn(c, i, t), u = g.length; !g[u - 1]; --u);
            for (s = 1, c = "1."; s < u; s++) c += ao.charAt(g[s]);
          } else c = c.charAt(0) + "." + c.slice(1);
        c = c + (o < 0 ? "p" : "p+") + o;
      } else if (o < 0) {
        for (; ++o; ) c = "0" + c;
        c = "0." + c;
      } else if (++o > u) for (o -= u; o--; ) c += "0";
      else o < u && (c = c.slice(0, o) + "." + c.slice(o));
    }
    c = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + c;
  }
  return e.s < 0 ? "-" + c : c;
}
function Sa(e, t) {
  if (e.length > t) return (e.length = t), !0;
}
function Kp(e) {
  return new this(e).abs();
}
function Qp(e) {
  return new this(e).acos();
}
function Jp(e) {
  return new this(e).acosh();
}
function Gp(e, t) {
  return new this(e).plus(t);
}
function Wp(e) {
  return new this(e).asin();
}
function Hp(e) {
  return new this(e).asinh();
}
function zp(e) {
  return new this(e).atan();
}
function Yp(e) {
  return new this(e).atanh();
}
function Zp(e, t) {
  (e = new this(e)), (t = new this(t));
  var r,
    n = this.precision,
    i = this.rounding,
    o = n + 4;
  return (
    !e.s || !t.s
      ? (r = new this(NaN))
      : !e.d && !t.d
      ? ((r = je(this, o, 1).times(t.s > 0 ? 0.25 : 0.75)), (r.s = e.s))
      : !t.d || e.isZero()
      ? ((r = t.s < 0 ? je(this, n, i) : new this(0)), (r.s = e.s))
      : !e.d || t.isZero()
      ? ((r = je(this, o, 1).times(0.5)), (r.s = e.s))
      : t.s < 0
      ? ((this.precision = o),
        (this.rounding = 1),
        (r = this.atan(W(e, t, o, 1))),
        (t = je(this, o, 1)),
        (this.precision = n),
        (this.rounding = i),
        (r = e.s < 0 ? r.minus(t) : r.plus(t)))
      : (r = this.atan(W(e, t, o, 1))),
    r
  );
}
function Xp(e) {
  return new this(e).cbrt();
}
function ef(e) {
  return F((e = new this(e)), e.e + 1, 2);
}
function tf(e, t, r) {
  return new this(e).clamp(t, r);
}
function rf(e) {
  if (!e || typeof e != "object") throw Error(Bn + "Object expected");
  var t,
    r,
    n,
    i = e.defaults === !0,
    o = [
      "precision",
      1,
      bt,
      "rounding",
      0,
      8,
      "toExpNeg",
      -tr,
      0,
      "toExpPos",
      0,
      tr,
      "maxE",
      0,
      tr,
      "minE",
      -tr,
      0,
      "modulo",
      0,
      9,
    ];
  for (t = 0; t < o.length; t += 3)
    if (((r = o[t]), i && (this[r] = uo[r]), (n = e[r]) !== void 0))
      if (xe(n) === n && n >= o[t + 1] && n <= o[t + 2]) this[r] = n;
      else throw Error(ht + r + ": " + n);
  if (((r = "crypto"), i && (this[r] = uo[r]), (n = e[r]) !== void 0))
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (
          typeof crypto != "undefined" &&
          crypto &&
          (crypto.getRandomValues || crypto.randomBytes)
        )
          this[r] = !0;
        else throw Error(Ia);
      else this[r] = !1;
    else throw Error(ht + r + ": " + n);
  return this;
}
function nf(e) {
  return new this(e).cos();
}
function of(e) {
  return new this(e).cosh();
}
function Ua(e) {
  var t, r, n;
  function i(o) {
    var s,
      a,
      u,
      l = this;
    if (!(l instanceof i)) return new i(o);
    if (((l.constructor = i), Ma(o))) {
      (l.s = o.s),
        L
          ? !o.d || o.e > i.maxE
            ? ((l.e = NaN), (l.d = null))
            : o.e < i.minE
            ? ((l.e = 0), (l.d = [0]))
            : ((l.e = o.e), (l.d = o.d.slice()))
          : ((l.e = o.e), (l.d = o.d ? o.d.slice() : o.d));
      return;
    }
    if (((u = typeof o), u === "number")) {
      if (o === 0) {
        (l.s = 1 / o < 0 ? -1 : 1), (l.e = 0), (l.d = [0]);
        return;
      }
      if ((o < 0 ? ((o = -o), (l.s = -1)) : (l.s = 1), o === ~~o && o < 1e7)) {
        for (s = 0, a = o; a >= 10; a /= 10) s++;
        L
          ? s > i.maxE
            ? ((l.e = NaN), (l.d = null))
            : s < i.minE
            ? ((l.e = 0), (l.d = [0]))
            : ((l.e = s), (l.d = [o]))
          : ((l.e = s), (l.d = [o]));
        return;
      } else if (o * 0 !== 0) {
        o || (l.s = NaN), (l.e = NaN), (l.d = null);
        return;
      }
      return po(l, o.toString());
    } else if (u !== "string") throw Error(ht + o);
    return (
      (a = o.charCodeAt(0)) === 45
        ? ((o = o.slice(1)), (l.s = -1))
        : (a === 43 && (o = o.slice(1)), (l.s = 1)),
      Fa.test(o) ? po(l, o) : qp(l, o)
    );
  }
  if (
    ((i.prototype = C),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.EUCLID = 9),
    (i.config = i.set = rf),
    (i.clone = Ua),
    (i.isDecimal = Ma),
    (i.abs = Kp),
    (i.acos = Qp),
    (i.acosh = Jp),
    (i.add = Gp),
    (i.asin = Wp),
    (i.asinh = Hp),
    (i.atan = zp),
    (i.atanh = Yp),
    (i.atan2 = Zp),
    (i.cbrt = Xp),
    (i.ceil = ef),
    (i.clamp = tf),
    (i.cos = nf),
    (i.cosh = of),
    (i.div = sf),
    (i.exp = af),
    (i.floor = uf),
    (i.hypot = lf),
    (i.ln = cf),
    (i.log = pf),
    (i.log10 = df),
    (i.log2 = ff),
    (i.max = mf),
    (i.min = gf),
    (i.mod = yf),
    (i.mul = hf),
    (i.pow = bf),
    (i.random = wf),
    (i.round = xf),
    (i.sign = Ef),
    (i.sin = Pf),
    (i.sinh = vf),
    (i.sqrt = Tf),
    (i.sub = Af),
    (i.sum = Cf),
    (i.tan = _f),
    (i.tanh = Sf),
    (i.trunc = Mf),
    e === void 0 && (e = {}),
    e && e.defaults !== !0)
  )
    for (
      n = [
        "precision",
        "rounding",
        "toExpNeg",
        "toExpPos",
        "maxE",
        "minE",
        "modulo",
        "crypto",
      ],
        t = 0;
      t < n.length;

    )
      e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
  return i.config(e), i;
}
function sf(e, t) {
  return new this(e).div(t);
}
function af(e) {
  return new this(e).exp();
}
function uf(e) {
  return F((e = new this(e)), e.e + 1, 3);
}
function lf() {
  var e,
    t,
    r = new this(0);
  for (L = !1, e = 0; e < arguments.length; )
    if (((t = new this(arguments[e++])), t.d)) r.d && (r = r.plus(t.times(t)));
    else {
      if (t.s) return (L = !0), new this(1 / 0);
      r = t;
    }
  return (L = !0), r.sqrt();
}
function Ma(e) {
  return e instanceof It || (e && e.toStringTag === ka) || !1;
}
function cf(e) {
  return new this(e).ln();
}
function pf(e, t) {
  return new this(e).log(t);
}
function ff(e) {
  return new this(e).log(2);
}
function df(e) {
  return new this(e).log(10);
}
function mf() {
  return La(this, arguments, "lt");
}
function gf() {
  return La(this, arguments, "gt");
}
function yf(e, t) {
  return new this(e).mod(t);
}
function hf(e, t) {
  return new this(e).mul(t);
}
function bf(e, t) {
  return new this(e).pow(t);
}
function wf(e) {
  var t,
    r,
    n,
    i,
    o = 0,
    s = new this(1),
    a = [];
  if (
    (e === void 0 ? (e = this.precision) : Se(e, 1, bt),
    (n = Math.ceil(e / D)),
    this.crypto)
  )
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
        (i = t[o]),
          i >= 429e7
            ? (t[o] = crypto.getRandomValues(new Uint32Array(1))[0])
            : (a[o++] = i % 1e7);
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes((n *= 4)); o < n; )
        (i =
          t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24)),
          i >= 214e7
            ? crypto.randomBytes(4).copy(t, o)
            : (a.push(i % 1e7), (o += 4));
      o = n / 4;
    } else throw Error(Ia);
  else for (; o < n; ) a[o++] = (Math.random() * 1e7) | 0;
  for (
    n = a[--o],
      e %= D,
      n && e && ((i = ie(10, D - e)), (a[o] = ((n / i) | 0) * i));
    a[o] === 0;
    o--
  )
    a.pop();
  if (o < 0) (r = 0), (a = [0]);
  else {
    for (r = -1; a[0] === 0; r -= D) a.shift();
    for (n = 1, i = a[0]; i >= 10; i /= 10) n++;
    n < D && (r -= D - n);
  }
  return (s.e = r), (s.d = a), s;
}
function xf(e) {
  return F((e = new this(e)), e.e + 1, this.rounding);
}
function Ef(e) {
  return (e = new this(e)), e.d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function Pf(e) {
  return new this(e).sin();
}
function vf(e) {
  return new this(e).sinh();
}
function Tf(e) {
  return new this(e).sqrt();
}
function Af(e, t) {
  return new this(e).sub(t);
}
function Cf() {
  var e = 0,
    t = arguments,
    r = new this(t[e]);
  for (L = !1; r.s && ++e < t.length; ) r = r.plus(t[e]);
  return (L = !0), F(r, this.precision, this.rounding);
}
function _f(e) {
  return new this(e).tan();
}
function Sf(e) {
  return new this(e).tanh();
}
function Mf(e) {
  return F((e = new this(e)), e.e + 1, 1);
}
C[Symbol.for("nodejs.util.inspect.custom")] = C.toString;
C[Symbol.toStringTag] = "Decimal";
var It = (C.constructor = Ua(uo));
Dn = new It(Dn);
Nn = new It(Nn);
var tt = It;
function nr(e) {
  return It.isDecimal(e)
    ? !0
    : e !== null &&
        typeof e == "object" &&
        typeof e.s == "number" &&
        typeof e.e == "number" &&
        typeof e.toFixed == "function" &&
        Array.isArray(e.d);
}
m();
p();
f();
d();
var Fr = class {
  constructor(t, r, n, i, o) {
    (this.modelName = t),
      (this.name = r),
      (this.typeName = n),
      (this.isList = i),
      (this.isEnum = o);
  }
  _toGraphQLInputType() {
    let t = this.isList ? "List" : "",
      r = this.isEnum ? "Enum" : "";
    return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
  }
};
function ir(e) {
  return e instanceof Fr;
}
m();
p();
f();
d();
m();
p();
f();
d();
var $n = class {
  constructor(t) {
    this.value = t;
  }
  write(t) {
    t.write(this.value);
  }
  markAsError() {
    this.value.markAsError();
  }
};
m();
p();
f();
d();
var qn = (e) => e,
  Vn = { bold: qn, red: qn, green: qn, dim: qn, enabled: !1 },
  $a = { bold: pt, red: Gt, green: vn, dim: En, enabled: !0 },
  or = {
    write(e) {
      e.writeLine(",");
    },
  };
m();
p();
f();
d();
var We = class {
  constructor(t) {
    this.contents = t;
    this.isUnderlined = !1;
    this.color = (t) => t;
  }
  underline() {
    return (this.isUnderlined = !0), this;
  }
  setColor(t) {
    return (this.color = t), this;
  }
  write(t) {
    let r = t.getCurrentLineLength();
    t.write(this.color(this.contents)),
      this.isUnderlined &&
        t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(
            this.color("~".repeat(this.contents.length)),
          );
        });
  }
};
m();
p();
f();
d();
var wt = class {
  constructor() {
    this.hasError = !1;
  }
  markAsError() {
    return (this.hasError = !0), this;
  }
};
var sr = class extends wt {
  constructor() {
    super(...arguments);
    this.items = [];
  }
  addItem(r) {
    return this.items.push(new $n(r)), this;
  }
  getField(r) {
    return this.items[r];
  }
  getPrintWidth() {
    return this.items.length === 0
      ? 2
      : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
  }
  write(r) {
    if (this.items.length === 0) {
      this.writeEmpty(r);
      return;
    }
    this.writeWithItems(r);
  }
  writeEmpty(r) {
    let n = new We("[]");
    this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
  }
  writeWithItems(r) {
    let { colors: n } = r.context;
    r
      .writeLine("[")
      .withIndent(() => r.writeJoined(or, this.items).newLine())
      .write("]"),
      this.hasError &&
        r.afterNextNewline(() => {
          r.writeLine(n.red("~".repeat(this.getPrintWidth())));
        });
  }
};
m();
p();
f();
d();
var qa = ": ",
  Kn = class {
    constructor(t, r) {
      this.name = t;
      this.value = r;
      this.hasError = !1;
    }
    markAsError() {
      this.hasError = !0;
    }
    getPrintWidth() {
      return this.name.length + this.value.getPrintWidth() + qa.length;
    }
    write(t) {
      let r = new We(this.name);
      this.hasError && r.underline().setColor(t.context.colors.red),
        t.write(r).write(qa).write(this.value);
    }
  };
m();
p();
f();
d();
var le = class e extends wt {
  constructor() {
    super(...arguments);
    this.fields = {};
    this.suggestions = [];
  }
  addField(r) {
    this.fields[r.name] = r;
  }
  addSuggestion(r) {
    this.suggestions.push(r);
  }
  getField(r) {
    return this.fields[r];
  }
  getDeepField(r) {
    let [n, ...i] = r,
      o = this.getField(n);
    if (!o) return;
    let s = o;
    for (let a of i) {
      let u;
      if (
        (s.value instanceof e
          ? (u = s.value.getField(a))
          : s.value instanceof sr && (u = s.value.getField(Number(a))),
        !u)
      )
        return;
      s = u;
    }
    return s;
  }
  getDeepFieldValue(r) {
    var n;
    return r.length === 0
      ? this
      : (n = this.getDeepField(r)) == null
      ? void 0
      : n.value;
  }
  hasField(r) {
    return !!this.getField(r);
  }
  removeAllFields() {
    this.fields = {};
  }
  removeField(r) {
    delete this.fields[r];
  }
  getFields() {
    return this.fields;
  }
  isEmpty() {
    return Object.keys(this.fields).length === 0;
  }
  getFieldValue(r) {
    var n;
    return (n = this.getField(r)) == null ? void 0 : n.value;
  }
  getDeepSubSelectionValue(r) {
    let n = this;
    for (let i of r) {
      if (!(n instanceof e)) return;
      let o = n.getSubSelectionValue(i);
      if (!o) return;
      n = o;
    }
    return n;
  }
  getDeepSelectionParent(r) {
    let n = this.getSelectionParent();
    if (!n) return;
    let i = n;
    for (let o of r) {
      let s = i.value.getFieldValue(o);
      if (!s || !(s instanceof e)) return;
      let a = s.getSelectionParent();
      if (!a) return;
      i = a;
    }
    return i;
  }
  getSelectionParent() {
    let r = this.getField("select");
    if ((r == null ? void 0 : r.value) instanceof e)
      return { kind: "select", value: r.value };
    let n = this.getField("include");
    if ((n == null ? void 0 : n.value) instanceof e)
      return { kind: "include", value: n.value };
  }
  getSubSelectionValue(r) {
    var n;
    return (n = this.getSelectionParent()) == null
      ? void 0
      : n.value.fields[r].value;
  }
  getPrintWidth() {
    let r = Object.values(this.fields);
    return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
  }
  write(r) {
    let n = Object.values(this.fields);
    if (n.length === 0 && this.suggestions.length === 0) {
      this.writeEmpty(r);
      return;
    }
    this.writeWithContents(r, n);
  }
  writeEmpty(r) {
    let n = new We("{}");
    this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
  }
  writeWithContents(r, n) {
    r.writeLine("{").withIndent(() => {
      r.writeJoined(or, [...n, ...this.suggestions]).newLine();
    }),
      r.write("}"),
      this.hasError &&
        r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
  }
};
m();
p();
f();
d();
var ce = class extends wt {
  constructor(r) {
    super();
    this.text = r;
  }
  getPrintWidth() {
    return this.text.length;
  }
  write(r) {
    let n = new We(this.text);
    this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
  }
};
var mo = class {
  constructor(t) {
    this.errorMessages = [];
    this.arguments = t;
  }
  write(t) {
    t.write(this.arguments);
  }
  addErrorMessage(t) {
    this.errorMessages.push(t);
  }
  renderAllMessages(t) {
    return this.errorMessages.map((r) => r(t)).join(`
`);
  }
};
function Qn(e) {
  return new mo(Va(e));
}
function Va(e) {
  let t = new le();
  for (let [r, n] of Object.entries(e)) {
    let i = new Kn(r, Ka(n));
    t.addField(i);
  }
  return t;
}
function Ka(e) {
  if (typeof e == "string") return new ce(JSON.stringify(e));
  if (typeof e == "number" || typeof e == "boolean") return new ce(String(e));
  if (typeof e == "bigint") return new ce(`${e}n`);
  if (e === null) return new ce("null");
  if (e === void 0) return new ce("undefined");
  if (nr(e)) return new ce(`new Prisma.Decimal("${e.toFixed()}")`);
  if (e instanceof Uint8Array)
    return w.Buffer.isBuffer(e)
      ? new ce(`Buffer.alloc(${e.byteLength})`)
      : new ce(`new Uint8Array(${e.byteLength})`);
  if (e instanceof Date) {
    let t = kn(e) ? e.toISOString() : "Invalid Date";
    return new ce(`new Date("${t}")`);
  }
  return e instanceof Xe
    ? new ce(`Prisma.${e._getName()}`)
    : ir(e)
    ? new ce(`prisma.${vs(e.modelName)}.$fields.${e.name}`)
    : Array.isArray(e)
    ? Of(e)
    : typeof e == "object"
    ? Va(e)
    : new ce(Object.prototype.toString.call(e));
}
function Of(e) {
  let t = new sr();
  for (let r of e) t.addItem(Ka(r));
  return t;
}
function Qa(e) {
  if (e === void 0) return "";
  let t = Qn(e);
  return new Xt(0, { colors: Vn }).write(t).toString();
}
m();
p();
f();
d();
m();
p();
f();
d();
m();
p();
f();
d();
m();
p();
f();
d();
m();
p();
f();
d();
var Dr = "<unknown>";
function Ja(e) {
  var t = e.split(`
`);
  return t.reduce(function (r, n) {
    var i = Ff(n) || Nf(n) || jf(n) || Vf(n) || $f(n);
    return i && r.push(i), r;
  }, []);
}
var If =
    /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  kf = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function Ff(e) {
  var t = If.exec(e);
  if (!t) return null;
  var r = t[2] && t[2].indexOf("native") === 0,
    n = t[2] && t[2].indexOf("eval") === 0,
    i = kf.exec(t[2]);
  return (
    n && i != null && ((t[2] = i[1]), (t[3] = i[2]), (t[4] = i[3])),
    {
      file: r ? null : t[2],
      methodName: t[1] || Dr,
      arguments: r ? [t[2]] : [],
      lineNumber: t[3] ? +t[3] : null,
      column: t[4] ? +t[4] : null,
    }
  );
}
var Df =
  /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function Nf(e) {
  var t = Df.exec(e);
  return t
    ? {
        file: t[2],
        methodName: t[1] || Dr,
        arguments: [],
        lineNumber: +t[3],
        column: t[4] ? +t[4] : null,
      }
    : null;
}
var Lf =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
  Bf = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function jf(e) {
  var t = Lf.exec(e);
  if (!t) return null;
  var r = t[3] && t[3].indexOf(" > eval") > -1,
    n = Bf.exec(t[3]);
  return (
    r && n != null && ((t[3] = n[1]), (t[4] = n[2]), (t[5] = null)),
    {
      file: t[3],
      methodName: t[1] || Dr,
      arguments: t[2] ? t[2].split(",") : [],
      lineNumber: t[4] ? +t[4] : null,
      column: t[5] ? +t[5] : null,
    }
  );
}
var Uf = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function $f(e) {
  var t = Uf.exec(e);
  return t
    ? {
        file: t[3],
        methodName: t[1] || Dr,
        arguments: [],
        lineNumber: +t[4],
        column: t[5] ? +t[5] : null,
      }
    : null;
}
var qf =
  /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function Vf(e) {
  var t = qf.exec(e);
  return t
    ? {
        file: t[2],
        methodName: t[1] || Dr,
        arguments: [],
        lineNumber: +t[3],
        column: t[4] ? +t[4] : null,
      }
    : null;
}
var go = class {
    getLocation() {
      return null;
    }
  },
  yo = class {
    constructor() {
      this._error = new Error();
    }
    getLocation() {
      let t = this._error.stack;
      if (!t) return null;
      let n = Ja(t).find((i) => {
        if (!i.file) return !1;
        let o = Wi(i.file);
        return (
          o !== "<anonymous>" &&
          !o.includes("@prisma") &&
          !o.includes("/packages/client/src/runtime/") &&
          !o.endsWith("/runtime/binary.js") &&
          !o.endsWith("/runtime/library.js") &&
          !o.endsWith("/runtime/edge.js") &&
          !o.endsWith("/runtime/edge-esm.js") &&
          !o.startsWith("internal/") &&
          !i.methodName.includes("new ") &&
          !i.methodName.includes("getCallSite") &&
          !i.methodName.includes("Proxy.") &&
          i.methodName.split(".").length < 4
        );
      });
      return !n || !n.file
        ? null
        : {
            fileName: n.file,
            lineNumber: n.lineNumber,
            columnNumber: n.column,
          };
    }
  };
function xt(e) {
  return e === "minimal" ? new go() : new yo();
}
m();
p();
f();
d();
m();
p();
f();
d();
m();
p();
f();
d();
var Ga = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 };
function ar(e = {}) {
  let t = Qf(e);
  return Object.entries(t).reduce(
    (n, [i, o]) => (
      Ga[i] !== void 0 ? (n.select[i] = { select: o }) : (n[i] = o), n
    ),
    { select: {} },
  );
}
function Qf(e = {}) {
  return typeof e._count == "boolean"
    ? { ...e, _count: { _all: e._count } }
    : e;
}
function Jn(e = {}) {
  return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
}
function Wa(e, t) {
  let r = Jn(e);
  return t({ action: "aggregate", unpacker: r, argsMapper: ar })(e);
}
m();
p();
f();
d();
function Jf(e = {}) {
  let { select: t, ...r } = e;
  return typeof t == "object"
    ? ar({ ...r, _count: t })
    : ar({ ...r, _count: { _all: !0 } });
}
function Gf(e = {}) {
  return typeof e.select == "object"
    ? (t) => Jn(e)(t)._count
    : (t) => Jn(e)(t)._count._all;
}
function Ha(e, t) {
  return t({ action: "count", unpacker: Gf(e), argsMapper: Jf })(e);
}
m();
p();
f();
d();
function Wf(e = {}) {
  let t = ar(e);
  if (Array.isArray(t.by))
    for (let r of t.by) typeof r == "string" && (t.select[r] = !0);
  else typeof t.by == "string" && (t.select[t.by] = !0);
  return t;
}
function Hf(e = {}) {
  return (t) => (
    typeof (e == null ? void 0 : e._count) == "boolean" &&
      t.forEach((r) => {
        r._count = r._count._all;
      }),
    t
  );
}
function za(e, t) {
  return t({ action: "groupBy", unpacker: Hf(e), argsMapper: Wf })(e);
}
function Ya(e, t, r) {
  if (t === "aggregate") return (n) => Wa(n, r);
  if (t === "count") return (n) => Ha(n, r);
  if (t === "groupBy") return (n) => za(n, r);
}
m();
p();
f();
d();
function Za(e, t) {
  let r = t.fields.filter((i) => !i.relationName),
    n = Xi(r, (i) => i.name);
  return new Proxy(
    {},
    {
      get(i, o) {
        if (o in i || typeof o == "symbol") return i[o];
        let s = n[o];
        if (s) return new Fr(e, o, s.type, s.isList, s.kind === "enum");
      },
      ...In(Object.keys(n)),
    },
  );
}
m();
p();
f();
d();
m();
p();
f();
d();
var Xa = (e) => (Array.isArray(e) ? e : e.split(".")),
  ho = (e, t) => Xa(t).reduce((r, n) => r && r[n], e),
  eu = (e, t, r) =>
    Xa(t).reduceRight(
      (n, i, o, s) => Object.assign({}, ho(e, s.slice(0, o)), { [i]: n }),
      r,
    );
function zf(e, t) {
  return e === void 0 || t === void 0 ? [] : [...t, "select", e];
}
function Yf(e, t, r) {
  return t === void 0 ? (e != null ? e : {}) : eu(t, r, e || !0);
}
function bo(e, t, r, n, i, o) {
  let a = e._runtimeDataModel.models[t].fields.reduce(
    (u, l) => ({ ...u, [l.name]: l }),
    {},
  );
  return (u) => {
    let l = xt(e._errorFormat),
      c = zf(n, i),
      g = Yf(u, o, c),
      y = r({ dataPath: c, callsite: l })(g),
      P = Zf(e, t);
    return new Proxy(y, {
      get(v, E) {
        if (!P.includes(E)) return v[E];
        let M = [a[E].type, r, E],
          O = [c, g];
        return bo(e, ...M, ...O);
      },
      ...In([...P, ...Object.getOwnPropertyNames(y)]),
    });
  };
}
function Zf(e, t) {
  return e._runtimeDataModel.models[t].fields
    .filter((r) => r.kind === "object")
    .map((r) => r.name);
}
m();
p();
f();
d();
m();
p();
f();
d();
var ou = Pe(da());
m();
p();
f();
d();
Qi();
m();
p();
f();
d();
m();
p();
f();
d();
m();
p();
f();
d();
var tu = {
  keyword: ft,
  entity: ft,
  value: (e) => pt(Ht(e)),
  punctuation: Ht,
  directive: ft,
  function: ft,
  variable: (e) => pt(Ht(e)),
  string: (e) => pt(vn(e)),
  boolean: Wt,
  number: ft,
  comment: Tn,
};
var Xf = (e) => e,
  Gn = {},
  ed = 0,
  B = {
    manual: Gn.Prism && Gn.Prism.manual,
    disableWorkerMessageHandler:
      Gn.Prism && Gn.Prism.disableWorkerMessageHandler,
    util: {
      encode: function (e) {
        if (e instanceof $e) {
          let t = e;
          return new $e(t.type, B.util.encode(t.content), t.alias);
        } else
          return Array.isArray(e)
            ? e.map(B.util.encode)
            : e
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/\u00a0/g, " ");
      },
      type: function (e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      objId: function (e) {
        return (
          e.__id || Object.defineProperty(e, "__id", { value: ++ed }), e.__id
        );
      },
      clone: function e(t, r) {
        let n,
          i,
          o = B.util.type(t);
        switch (((r = r || {}), o)) {
          case "Object":
            if (((i = B.util.objId(t)), r[i])) return r[i];
            (n = {}), (r[i] = n);
            for (let s in t) t.hasOwnProperty(s) && (n[s] = e(t[s], r));
            return n;
          case "Array":
            return (
              (i = B.util.objId(t)),
              r[i]
                ? r[i]
                : ((n = []),
                  (r[i] = n),
                  t.forEach(function (s, a) {
                    n[a] = e(s, r);
                  }),
                  n)
            );
          default:
            return t;
        }
      },
    },
    languages: {
      extend: function (e, t) {
        let r = B.util.clone(B.languages[e]);
        for (let n in t) r[n] = t[n];
        return r;
      },
      insertBefore: function (e, t, r, n) {
        n = n || B.languages;
        let i = n[e],
          o = {};
        for (let a in i)
          if (i.hasOwnProperty(a)) {
            if (a == t) for (let u in r) r.hasOwnProperty(u) && (o[u] = r[u]);
            r.hasOwnProperty(a) || (o[a] = i[a]);
          }
        let s = n[e];
        return (
          (n[e] = o),
          B.languages.DFS(B.languages, function (a, u) {
            u === s && a != e && (this[a] = o);
          }),
          o
        );
      },
      DFS: function e(t, r, n, i) {
        i = i || {};
        let o = B.util.objId;
        for (let s in t)
          if (t.hasOwnProperty(s)) {
            r.call(t, s, t[s], n || s);
            let a = t[s],
              u = B.util.type(a);
            u === "Object" && !i[o(a)]
              ? ((i[o(a)] = !0), e(a, r, null, i))
              : u === "Array" && !i[o(a)] && ((i[o(a)] = !0), e(a, r, s, i));
          }
      },
    },
    plugins: {},
    highlight: function (e, t, r) {
      let n = { code: e, grammar: t, language: r };
      return (
        B.hooks.run("before-tokenize", n),
        (n.tokens = B.tokenize(n.code, n.grammar)),
        B.hooks.run("after-tokenize", n),
        $e.stringify(B.util.encode(n.tokens), n.language)
      );
    },
    matchGrammar: function (e, t, r, n, i, o, s) {
      for (let E in r) {
        if (!r.hasOwnProperty(E) || !r[E]) continue;
        if (E == s) return;
        let A = r[E];
        A = B.util.type(A) === "Array" ? A : [A];
        for (let M = 0; M < A.length; ++M) {
          let O = A[M],
            S = O.inside,
            R = !!O.lookbehind,
            j = !!O.greedy,
            U = 0,
            De = O.alias;
          if (j && !O.pattern.global) {
            let G = O.pattern.toString().match(/[imuy]*$/)[0];
            O.pattern = RegExp(O.pattern.source, G + "g");
          }
          O = O.pattern || O;
          for (let G = n, te = i; G < t.length; te += t[G].length, ++G) {
            let Re = t[G];
            if (t.length > e.length) return;
            if (Re instanceof $e) continue;
            if (j && G != t.length - 1) {
              O.lastIndex = te;
              var g = O.exec(e);
              if (!g) break;
              var c = g.index + (R ? g[1].length : 0),
                y = g.index + g[0].length,
                a = G,
                u = te;
              for (
                let k = t.length;
                a < k && (u < y || (!t[a].type && !t[a - 1].greedy));
                ++a
              )
                (u += t[a].length), c >= u && (++G, (te = u));
              if (t[G] instanceof $e) continue;
              (l = a - G), (Re = e.slice(te, u)), (g.index -= te);
            } else {
              O.lastIndex = 0;
              var g = O.exec(Re),
                l = 1;
            }
            if (!g) {
              if (o) break;
              continue;
            }
            R && (U = g[1] ? g[1].length : 0);
            var c = g.index + U,
              g = g[0].slice(U),
              y = c + g.length,
              P = Re.slice(0, c),
              v = Re.slice(y);
            let re = [G, l];
            P && (++G, (te += P.length), re.push(P));
            let Oe = new $e(E, S ? B.tokenize(g, S) : g, De, g, j);
            if (
              (re.push(Oe),
              v && re.push(v),
              Array.prototype.splice.apply(t, re),
              l != 1 && B.matchGrammar(e, t, r, G, te, !0, E),
              o)
            )
              break;
          }
        }
      }
    },
    tokenize: function (e, t) {
      let r = [e],
        n = t.rest;
      if (n) {
        for (let i in n) t[i] = n[i];
        delete t.rest;
      }
      return B.matchGrammar(e, r, t, 0, 0, !1), r;
    },
    hooks: {
      all: {},
      add: function (e, t) {
        let r = B.hooks.all;
        (r[e] = r[e] || []), r[e].push(t);
      },
      run: function (e, t) {
        let r = B.hooks.all[e];
        if (!(!r || !r.length)) for (var n = 0, i; (i = r[n++]); ) i(t);
      },
    },
    Token: $e,
  };
B.languages.clike = {
  comment: [
    { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
    { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
  },
  "class-name": {
    pattern:
      /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: !0,
    inside: { punctuation: /[.\\]/ },
  },
  keyword:
    /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(?:true|false)\b/,
  function: /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  punctuation: /[{}[\];(),.:]/,
};
B.languages.javascript = B.languages.extend("clike", {
  "class-name": [
    B.languages.clike["class-name"],
    {
      pattern:
        /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
      lookbehind: !0,
    },
  ],
  keyword: [
    { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
    {
      pattern:
        /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0,
    },
  ],
  number:
    /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  function:
    /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  operator:
    /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
});
B.languages.javascript["class-name"][0].pattern =
  /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
B.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern:
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
    lookbehind: !0,
    greedy: !0,
  },
  "function-variable": {
    pattern:
      /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: "function",
  },
  parameter: [
    {
      pattern:
        /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
      lookbehind: !0,
      inside: B.languages.javascript,
    },
    {
      pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
      inside: B.languages.javascript,
    },
    {
      pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: B.languages.javascript,
    },
    {
      pattern:
        /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: B.languages.javascript,
    },
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
});
B.languages.markup && B.languages.markup.tag.addInlined("script", "javascript");
B.languages.js = B.languages.javascript;
B.languages.typescript = B.languages.extend("javascript", {
  keyword:
    /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
  builtin:
    /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
});
B.languages.ts = B.languages.typescript;
function $e(e, t, r, n, i) {
  (this.type = e),
    (this.content = t),
    (this.alias = r),
    (this.length = (n || "").length | 0),
    (this.greedy = !!i);
}
$e.stringify = function (e, t) {
  return typeof e == "string"
    ? e
    : Array.isArray(e)
    ? e
        .map(function (r) {
          return $e.stringify(r, t);
        })
        .join("")
    : td(e.type)(e.content);
};
function td(e) {
  return tu[e] || Xf;
}
function ru(e) {
  return rd(e, B.languages.javascript);
}
function rd(e, t) {
  return B.tokenize(e, t)
    .map((n) => $e.stringify(n))
    .join("");
}
m();
p();
f();
d();
var nu = Pe(la());
function iu(e) {
  return (0, nu.default)(e);
}
var Wn = class e {
  static read(t) {
    let r;
    try {
      r = An.readFileSync(t, "utf-8");
    } catch (n) {
      return null;
    }
    return e.fromContent(r);
  }
  static fromContent(t) {
    let r = t.split(/\r?\n/);
    return new e(1, r);
  }
  constructor(t, r) {
    (this.firstLineNumber = t), (this.lines = r);
  }
  get lastLineNumber() {
    return this.firstLineNumber + this.lines.length - 1;
  }
  mapLineAt(t, r) {
    if (
      t < this.firstLineNumber ||
      t > this.lines.length + this.firstLineNumber
    )
      return this;
    let n = t - this.firstLineNumber,
      i = [...this.lines];
    return (i[n] = r(i[n])), new e(this.firstLineNumber, i);
  }
  mapLines(t) {
    return new e(
      this.firstLineNumber,
      this.lines.map((r, n) => t(r, this.firstLineNumber + n)),
    );
  }
  lineAt(t) {
    return this.lines[t - this.firstLineNumber];
  }
  prependSymbolAt(t, r) {
    return this.mapLines((n, i) => (i === t ? `${r} ${n}` : `  ${n}`));
  }
  slice(t, r) {
    let n = this.lines.slice(t - 1, r).join(`
`);
    return new e(
      t,
      iu(n).split(`
`),
    );
  }
  highlight() {
    let t = ru(this.toString());
    return new e(
      this.firstLineNumber,
      t.split(`
`),
    );
  }
  toString() {
    return this.lines.join(`
`);
  }
};
var nd = {
    red: Gt,
    gray: Tn,
    dim: En,
    bold: pt,
    underline: Pn,
    highlightSource: (e) => e.highlight(),
  },
  id = {
    red: (e) => e,
    gray: (e) => e,
    dim: (e) => e,
    bold: (e) => e,
    underline: (e) => e,
    highlightSource: (e) => e,
  };
function od(
  { callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: i },
  o,
) {
  var g;
  let s = {
    functionName: `prisma.${r}()`,
    message: t,
    isPanic: n != null ? n : !1,
    callArguments: i,
  };
  if (!e || typeof window != "undefined" || h.env.NODE_ENV === "production")
    return s;
  let a = e.getLocation();
  if (!a || !a.lineNumber || !a.columnNumber) return s;
  let u = Math.max(1, a.lineNumber - 3),
    l = (g = Wn.read(a.fileName)) == null ? void 0 : g.slice(u, a.lineNumber),
    c = l == null ? void 0 : l.lineAt(a.lineNumber);
  if (l && c) {
    let y = ad(c),
      P = sd(c);
    if (!P) return s;
    (s.functionName = `${P.code})`),
      (s.location = a),
      n ||
        (l = l.mapLineAt(a.lineNumber, (E) => E.slice(0, P.openingBraceIndex))),
      (l = o.highlightSource(l));
    let v = String(l.lastLineNumber).length;
    if (
      ((s.contextLines = l
        .mapLines((E, A) => o.gray(String(A).padStart(v)) + " " + E)
        .mapLines((E) => o.dim(E))
        .prependSymbolAt(a.lineNumber, o.bold(o.red("\u2192")))),
      i)
    ) {
      let E = y + v + 1;
      (E += 2), (s.callArguments = (0, ou.default)(i, E).slice(E));
    }
  }
  return s;
}
function sd(e) {
  let t = Object.keys(Be.ModelAction).join("|"),
    n = new RegExp(String.raw`\.(${t})\(`).exec(e);
  if (n) {
    let i = n.index + n[0].length,
      o = e.lastIndexOf(" ", n.index) + 1;
    return { code: e.slice(o, i), openingBraceIndex: i };
  }
  return null;
}
function ad(e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    if (e.charAt(r) !== " ") return t;
    t++;
  }
  return t;
}
function ud(
  {
    functionName: e,
    location: t,
    message: r,
    isPanic: n,
    contextLines: i,
    callArguments: o,
  },
  s,
) {
  let a = [""],
    u = t ? " in" : ":";
  if (
    (n
      ? (a.push(
          s.red(
            `Oops, an unknown error occurred! This is ${s.bold(
              "on us",
            )}, you did nothing wrong.`,
          ),
        ),
        a.push(
          s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${u}`),
        ))
      : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${u}`)),
    t && a.push(s.underline(ld(t))),
    i)
  ) {
    a.push("");
    let l = [i.toString()];
    o && (l.push(o), l.push(s.dim(")"))), a.push(l.join("")), o && a.push("");
  } else a.push(""), o && a.push(o), a.push("");
  return (
    a.push(r),
    a.join(`
`)
  );
}
function ld(e) {
  let t = [e.fileName];
  return (
    e.lineNumber && t.push(String(e.lineNumber)),
    e.columnNumber && t.push(String(e.columnNumber)),
    t.join(":")
  );
}
function ur(e) {
  let t = e.showColors ? nd : id,
    r = od(e, t);
  return ud(r, t);
}
function su(e, t, r, n) {
  return e === Be.ModelAction.findFirstOrThrow ||
    e === Be.ModelAction.findUniqueOrThrow
    ? cd(t, r, n)
    : n;
}
function cd(e, t, r) {
  return async (n) => {
    if ("rejectOnNotFound" in n.args) {
      let o = ur({
        originalMethod: n.clientMethod,
        callsite: n.callsite,
        message: "'rejectOnNotFound' option is not supported",
      });
      throw new Te(o, { clientVersion: t });
    }
    return await r(n).catch((o) => {
      throw o instanceof me && o.code === "P2025"
        ? new dt(`No ${e} found`, t)
        : o;
    });
  };
}
m();
p();
f();
d();
function He(e) {
  return e.replace(/^./, (t) => t.toLowerCase());
}
var pd = [
    "findUnique",
    "findUniqueOrThrow",
    "findFirst",
    "findFirstOrThrow",
    "create",
    "update",
    "upsert",
    "delete",
  ],
  fd = ["aggregate", "count", "groupBy"];
function wo(e, t) {
  var i;
  let r = (i = e._extensions.getAllModelExtensions(t)) != null ? i : {},
    n = [
      dd(e, t),
      gd(e, t),
      Or(r),
      Ae("name", () => t),
      Ae("$name", () => t),
      Ae("$parent", () => e._appliedParent),
    ];
  return Je({}, n);
}
function dd(e, t) {
  let r = He(t),
    n = Object.keys(Be.ModelAction).concat("count");
  return {
    getKeys() {
      return n;
    },
    getPropertyValue(i) {
      let o = i,
        s = (u) => e._request(u);
      s = su(o, t, e._clientVersion, s);
      let a = (u) => (l) => {
        let c = xt(e._errorFormat);
        return e._createPrismaPromise((g) => {
          let y = {
            args: l,
            dataPath: [],
            action: o,
            model: t,
            clientMethod: `${r}.${i}`,
            jsModelName: r,
            transaction: g,
            callsite: c,
          };
          return s({ ...y, ...u });
        });
      };
      return pd.includes(o) ? bo(e, t, a) : md(i) ? Ya(e, i, a) : a({});
    },
  };
}
function md(e) {
  return fd.includes(e);
}
function gd(e, t) {
  return Ot(
    Ae("fields", () => {
      let r = e._runtimeDataModel.models[t];
      return Za(t, r);
    }),
  );
}
m();
p();
f();
d();
function au(e) {
  return e.replace(/^./, (t) => t.toUpperCase());
}
var xo = Symbol();
function Nr(e) {
  let t = [yd(e), Ae(xo, () => e), Ae("$parent", () => e._appliedParent)],
    r = e._extensions.getAllClientExtensions();
  return r && t.push(Or(r)), Je(e, t);
}
function yd(e) {
  let t = Object.keys(e._runtimeDataModel.models),
    r = t.map(He),
    n = [...new Set(t.concat(r))];
  return Ot({
    getKeys() {
      return n;
    },
    getPropertyValue(i) {
      let o = au(i);
      if (e._runtimeDataModel.models[o] !== void 0) return wo(e, o);
      if (e._runtimeDataModel.models[i] !== void 0) return wo(e, i);
    },
    getPropertyDescriptor(i) {
      if (!r.includes(i)) return { enumerable: !1 };
    },
  });
}
function Hn(e) {
  return e[xo] ? e[xo] : e;
}
function uu(e) {
  if (typeof e == "function") return e(this);
  let t = Hn(this),
    r = Object.create(t, {
      _extensions: { value: this._extensions.append(e) },
      _appliedParent: { value: this, configurable: !0 },
      $use: { value: void 0 },
      $on: { value: void 0 },
    });
  return Nr(r);
}
m();
p();
f();
d();
m();
p();
f();
d();
function lu({ result: e, modelName: t, select: r, extensions: n }) {
  let i = n.getAllComputedFields(t);
  if (!i) return e;
  let o = [],
    s = [];
  for (let a of Object.values(i)) {
    if (r) {
      if (!r[a.name]) continue;
      let u = a.needs.filter((l) => !r[l]);
      u.length > 0 && s.push(Ir(u));
    }
    hd(e, a.needs) && o.push(bd(a, Je(e, o)));
  }
  return o.length > 0 || s.length > 0 ? Je(e, [...o, ...s]) : e;
}
function hd(e, t) {
  return t.every((r) => Zi(e, r));
}
function bd(e, t) {
  return Ot(Ae(e.name, () => e.compute(t)));
}
m();
p();
f();
d();
function zn({
  visitor: e,
  result: t,
  args: r,
  runtimeDataModel: n,
  modelName: i,
}) {
  var s;
  if (Array.isArray(t)) {
    for (let a = 0; a < t.length; a++)
      t[a] = zn({
        result: t[a],
        args: r,
        modelName: i,
        runtimeDataModel: n,
        visitor: e,
      });
    return t;
  }
  let o = (s = e(t, i, r)) != null ? s : t;
  return (
    r.include &&
      cu({
        includeOrSelect: r.include,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e,
      }),
    r.select &&
      cu({
        includeOrSelect: r.select,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e,
      }),
    o
  );
}
function cu({
  includeOrSelect: e,
  result: t,
  parentModelName: r,
  runtimeDataModel: n,
  visitor: i,
}) {
  for (let [o, s] of Object.entries(e)) {
    if (!s || t[o] == null) continue;
    let u = n.models[r].fields.find((c) => c.name === o);
    if (!u || u.kind !== "object" || !u.relationName) continue;
    let l = typeof s == "object" ? s : {};
    t[o] = zn({
      visitor: i,
      result: t[o],
      args: l,
      modelName: u.type,
      runtimeDataModel: n,
    });
  }
}
function pu({
  result: e,
  modelName: t,
  args: r,
  extensions: n,
  runtimeDataModel: i,
}) {
  return n.isEmpty() || e == null || typeof e != "object" || !i.models[t]
    ? e
    : zn({
        result: e,
        args: r != null ? r : {},
        modelName: t,
        runtimeDataModel: i,
        visitor: (s, a, u) =>
          lu({ result: s, modelName: He(a), select: u.select, extensions: n }),
      });
}
m();
p();
f();
d();
m();
p();
f();
d();
function fu(e) {
  if (e instanceof ke) return wd(e);
  if (Array.isArray(e)) {
    let r = [e[0]];
    for (let n = 1; n < e.length; n++) r[n] = Lr(e[n]);
    return r;
  }
  let t = {};
  for (let r in e) t[r] = Lr(e[r]);
  return t;
}
function wd(e) {
  return new ke(e.strings, e.values);
}
function Lr(e) {
  if (typeof e != "object" || e == null || e instanceof Xe || ir(e)) return e;
  if (nr(e)) return new tt(e.toFixed());
  if (er(e)) return new Date(+e);
  if (ArrayBuffer.isView(e)) return e.slice(0);
  if (Array.isArray(e)) {
    let t = e.length,
      r;
    for (r = Array(t); t--; ) r[t] = Lr(e[t]);
    return r;
  }
  if (typeof e == "object") {
    let t = {};
    for (let r in e)
      r === "__proto__"
        ? Object.defineProperty(t, r, {
            value: Lr(e[r]),
            configurable: !0,
            enumerable: !0,
            writable: !0,
          })
        : (t[r] = Lr(e[r]));
    return t;
  }
  Rt(e, "Unknown value");
}
function mu(e, t, r, n = 0) {
  return e._createPrismaPromise((i) => {
    var s, a;
    let o = t.customDataProxyFetch;
    return (
      "transaction" in t &&
        i !== void 0 &&
        (((s = t.transaction) == null ? void 0 : s.kind) === "batch" &&
          t.transaction.lock.then(),
        (t.transaction = i)),
      n === r.length
        ? e._executeRequest(t)
        : r[n]({
            model: t.model,
            operation: t.model ? t.action : t.clientMethod,
            args: fu((a = t.args) != null ? a : {}),
            __internalParams: t,
            query: (u, l = t) => {
              let c = l.customDataProxyFetch;
              return (
                (l.customDataProxyFetch = bu(o, c)),
                (l.args = u),
                mu(e, l, r, n + 1)
              );
            },
          })
    );
  });
}
function gu(e, t) {
  let { jsModelName: r, action: n, clientMethod: i } = t,
    o = r ? n : i;
  if (e._extensions.isEmpty()) return e._executeRequest(t);
  let s = e._extensions.getAllQueryCallbacks(r != null ? r : "$none", o);
  return mu(e, t, s);
}
function yu(e) {
  return (t) => {
    let r = { requests: t },
      n = t[0].extensions.getAllBatchQueryCallbacks();
    return n.length ? hu(r, n, 0, e) : e(r);
  };
}
function hu(e, t, r, n) {
  if (r === t.length) return n(e);
  let i = e.customDataProxyFetch,
    o = e.requests[0].transaction;
  return t[r]({
    args: {
      queries: e.requests.map((s) => ({
        model: s.modelName,
        operation: s.action,
        args: s.args,
      })),
      transaction: o
        ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 }
        : void 0,
    },
    __internalParams: e,
    query(s, a = e) {
      let u = a.customDataProxyFetch;
      return (a.customDataProxyFetch = bu(i, u)), hu(a, t, r + 1, n);
    },
  });
}
var du = (e) => e;
function bu(e = du, t = du) {
  return (r) => e(t(r));
}
m();
p();
f();
d();
m();
p();
f();
d();
function xu(e, t, r) {
  let n = He(r);
  return !t.result || !(t.result.$allModels || t.result[n])
    ? e
    : xd({
        ...e,
        ...wu(t.name, e, t.result.$allModels),
        ...wu(t.name, e, t.result[n]),
      });
}
function xd(e) {
  let t = new Qe(),
    r = (n, i) =>
      t.getOrCreate(n, () =>
        i.has(n)
          ? [n]
          : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]),
      );
  return Zt(e, (n) => ({ ...n, needs: r(n.name, new Set()) }));
}
function wu(e, t, r) {
  return r
    ? Zt(r, ({ needs: n, compute: i }, o) => ({
        name: o,
        needs: n ? Object.keys(n).filter((s) => n[s]) : [],
        compute: Ed(t, o, i),
      }))
    : {};
}
function Ed(e, t, r) {
  var i;
  let n = (i = e == null ? void 0 : e[t]) == null ? void 0 : i.compute;
  return n ? (o) => r({ ...o, [t]: n(o) }) : r;
}
function Eu(e, t) {
  if (!t) return e;
  let r = { ...e };
  for (let n of Object.values(t))
    if (e[n.name]) for (let i of n.needs) r[i] = !0;
  return r;
}
var Yn = class {
    constructor(t, r) {
      this.extension = t;
      this.previous = r;
      this.computedFieldsCache = new Qe();
      this.modelExtensionsCache = new Qe();
      this.queryCallbacksCache = new Qe();
      this.clientExtensions = Ar(() => {
        var t, r;
        return this.extension.client
          ? {
              ...((r = this.previous) == null
                ? void 0
                : r.getAllClientExtensions()),
              ...this.extension.client,
            }
          : (t = this.previous) == null
          ? void 0
          : t.getAllClientExtensions();
      });
      this.batchCallbacks = Ar(() => {
        var n, i, o;
        let t =
            (i =
              (n = this.previous) == null
                ? void 0
                : n.getAllBatchQueryCallbacks()) != null
              ? i
              : [],
          r = (o = this.extension.query) == null ? void 0 : o.$__internalBatch;
        return r ? t.concat(r) : t;
      });
    }
    getAllComputedFields(t) {
      return this.computedFieldsCache.getOrCreate(t, () => {
        var r;
        return xu(
          (r = this.previous) == null ? void 0 : r.getAllComputedFields(t),
          this.extension,
          t,
        );
      });
    }
    getAllClientExtensions() {
      return this.clientExtensions.get();
    }
    getAllModelExtensions(t) {
      return this.modelExtensionsCache.getOrCreate(t, () => {
        var n, i;
        let r = He(t);
        return !this.extension.model ||
          !(this.extension.model[r] || this.extension.model.$allModels)
          ? (n = this.previous) == null
            ? void 0
            : n.getAllModelExtensions(t)
          : {
              ...((i = this.previous) == null
                ? void 0
                : i.getAllModelExtensions(t)),
              ...this.extension.model.$allModels,
              ...this.extension.model[r],
            };
      });
    }
    getAllQueryCallbacks(t, r) {
      return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
        var s, a;
        let n =
            (a =
              (s = this.previous) == null
                ? void 0
                : s.getAllQueryCallbacks(t, r)) != null
              ? a
              : [],
          i = [],
          o = this.extension.query;
        return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations)
          ? n
          : (o[t] !== void 0 &&
              (o[t][r] !== void 0 && i.push(o[t][r]),
              o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)),
            t !== "$none" &&
              o.$allModels !== void 0 &&
              (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]),
              o.$allModels.$allOperations !== void 0 &&
                i.push(o.$allModels.$allOperations)),
            o[r] !== void 0 && i.push(o[r]),
            o.$allOperations !== void 0 && i.push(o.$allOperations),
            n.concat(i));
      });
    }
    getAllBatchQueryCallbacks() {
      return this.batchCallbacks.get();
    }
  },
  Zn = class e {
    constructor(t) {
      this.head = t;
    }
    static empty() {
      return new e();
    }
    static single(t) {
      return new e(new Yn(t));
    }
    isEmpty() {
      return this.head === void 0;
    }
    append(t) {
      return new e(new Yn(t, this.head));
    }
    getAllComputedFields(t) {
      var r;
      return (r = this.head) == null ? void 0 : r.getAllComputedFields(t);
    }
    getAllClientExtensions() {
      var t;
      return (t = this.head) == null ? void 0 : t.getAllClientExtensions();
    }
    getAllModelExtensions(t) {
      var r;
      return (r = this.head) == null ? void 0 : r.getAllModelExtensions(t);
    }
    getAllQueryCallbacks(t, r) {
      var n, i;
      return (i =
        (n = this.head) == null ? void 0 : n.getAllQueryCallbacks(t, r)) != null
        ? i
        : [];
    }
    getAllBatchQueryCallbacks() {
      var t, r;
      return (r =
        (t = this.head) == null ? void 0 : t.getAllBatchQueryCallbacks()) !=
        null
        ? r
        : [];
    }
  };
m();
p();
f();
d();
var Pu = be("prisma:client"),
  vu = { Vercel: "vercel", "Netlify CI": "netlify" };
function Tu({ postinstall: e, ciName: t, clientVersion: r }) {
  if (
    (Pu("checkPlatformCaching:postinstall", e),
    Pu("checkPlatformCaching:ciName", t),
    e === !0 && t && t in vu)
  ) {
    let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${vu[t]}-build`;
    throw (console.error(n), new Y(n, r));
  }
}
m();
p();
f();
d();
function Au(e, t) {
  return e
    ? e.datasources
      ? e.datasources
      : e.datasourceUrl
      ? { [t[0]]: { url: e.datasourceUrl } }
      : {}
    : {};
}
m();
p();
f();
d();
m();
p();
f();
d();
m();
p();
f();
d();
function Br({ error: e, user_facing_error: t }, r) {
  return t.error_code
    ? new me(t.message, {
        code: t.error_code,
        clientVersion: r,
        meta: t.meta,
        batchRequestIdx: t.batch_request_idx,
      })
    : new ge(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
}
m();
p();
f();
d();
var lr = class {};
m();
p();
f();
d();
function Xn(e, t) {
  return {
    batch: e,
    transaction:
      (t == null ? void 0 : t.kind) === "batch"
        ? { isolationLevel: t.options.isolationLevel }
        : void 0,
  };
}
m();
p();
f();
d();
var Eo = Pe(Yi());
m();
p();
f();
d();
function Cu(e) {
  return e
    ? e
        .replace(/".*"/g, '"X"')
        .replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`)
    : "";
}
m();
p();
f();
d();
function _u(e) {
  return e
    .split(
      `
`,
    )
    .map((t) =>
      t
        .replace(
          /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/,
          "",
        )
        .replace(/\+\d+\s*ms$/, ""),
    ).join(`
`);
}
m();
p();
f();
d();
var Pd = Pe(oa()),
  Su = Pe(ba());
function Mu({
  title: e,
  user: t = "prisma",
  repo: r = "prisma",
  template: n = "bug_report.md",
  body: i,
}) {
  return (0, Su.default)({ user: t, repo: r, template: n, title: e, body: i });
}
function Ru({
  version: e,
  platform: t,
  title: r,
  description: n,
  engineVersion: i,
  database: o,
  query: s,
}) {
  var y, P;
  let a = zs(6e3 - ((y = s == null ? void 0 : s.length) != null ? y : 0)),
    u = _u((0, Eo.default)(a)),
    l = n
      ? `# Description
\`\`\`
${n}
\`\`\``
      : "",
    c = (0,
    Eo.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${(P = h.version) == null ? void 0 : P.padEnd(19)}| 
| OS              | ${t == null ? void 0 : t.padEnd(19)}|
| Prisma Client   | ${e == null ? void 0 : e.padEnd(19)}|
| Query Engine    | ${i == null ? void 0 : i.padEnd(19)}|
| Database        | ${o == null ? void 0 : o.padEnd(19)}|

${l}

## Logs
\`\`\`
${u}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? Cu(s) : ""}
\`\`\`
`),
    g = Mu({ title: r, body: c });
  return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${Pn(g)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
}
m();
p();
f();
d();
m();
p();
f();
d();
m();
p();
f();
d();
var vd = "Cloudflare-Workers",
  Td = "node";
function Ou() {
  var e, t, r;
  return typeof Netlify == "object"
    ? "netlify"
    : typeof EdgeRuntime == "string"
    ? "edge-light"
    : ((e = globalThis.navigator) == null ? void 0 : e.userAgent) === vd
    ? "workerd"
    : globalThis.Deno
    ? "deno"
    : globalThis.__lagon__
    ? "lagon"
    : ((r = (t = globalThis.process) == null ? void 0 : t.release) == null
        ? void 0
        : r.name) === Td
    ? "node"
    : globalThis.Bun
    ? "bun"
    : globalThis.fastly
    ? "fastly"
    : "unknown";
}
function ei({
  inlineDatasources: e,
  overrideDatasources: t,
  env: r,
  clientVersion: n,
}) {
  var u, l;
  let i,
    o = Object.keys(e)[0],
    s = (u = e[o]) == null ? void 0 : u.url,
    a = (l = t[o]) == null ? void 0 : l.url;
  if (
    (o === void 0
      ? (i = void 0)
      : a
      ? (i = a)
      : s != null && s.value
      ? (i = s.value)
      : s != null && s.fromEnvVar && (i = r[s.fromEnvVar]),
    (s == null ? void 0 : s.fromEnvVar) !== void 0 && i === void 0)
  )
    throw Ou() === "workerd"
      ? new Y(
          `error: Environment variable not found: ${s.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`,
          n,
        )
      : new Y(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
  if (i === void 0)
    throw new Y(
      "error: Missing URL environment variable, value, or override.",
      n,
    );
  return i;
}
m();
p();
f();
d();
m();
p();
f();
d();
var ti = class extends Error {
  constructor(r, n) {
    super(r);
    (this.clientVersion = n.clientVersion), (this.cause = n.cause);
  }
  get [Symbol.toStringTag]() {
    return this.name;
  }
};
var Me = class extends ti {
  constructor(r, n) {
    var i;
    super(r, n);
    this.isRetryable = (i = n.isRetryable) != null ? i : !0;
  }
};
m();
p();
f();
d();
m();
p();
f();
d();
function J(e, t) {
  return { ...e, isRetryable: t };
}
var cr = class extends Me {
  constructor(r) {
    super("This request must be retried", J(r, !0));
    this.name = "ForcedRetryError";
    this.code = "P5001";
  }
};
N(cr, "ForcedRetryError");
m();
p();
f();
d();
var kt = class extends Me {
  constructor(r, n) {
    super(r, J(n, !1));
    this.name = "InvalidDatasourceError";
    this.code = "P5002";
  }
};
N(kt, "InvalidDatasourceError");
m();
p();
f();
d();
var Ft = class extends Me {
  constructor(r, n) {
    super(r, J(n, !1));
    this.name = "NotImplementedYetError";
    this.code = "P5004";
  }
};
N(Ft, "NotImplementedYetError");
m();
p();
f();
d();
m();
p();
f();
d();
var z = class extends Me {
  constructor(r, n) {
    super(r, n);
    this.response = n.response;
    let i = this.response.headers.get("prisma-request-id");
    if (i) {
      let o = `(The request id was: ${i})`;
      this.message = this.message + " " + o;
    }
  }
};
var Dt = class extends z {
  constructor(r) {
    super("Schema needs to be uploaded", J(r, !0));
    this.name = "SchemaMissingError";
    this.code = "P5005";
  }
};
N(Dt, "SchemaMissingError");
m();
p();
f();
d();
m();
p();
f();
d();
var Po = "This request could not be understood by the server",
  jr = class extends z {
    constructor(r, n, i) {
      super(n || Po, J(r, !1));
      this.name = "BadRequestError";
      this.code = "P5000";
      i && (this.code = i);
    }
  };
N(jr, "BadRequestError");
m();
p();
f();
d();
var Ur = class extends z {
  constructor(r, n) {
    super("Engine not started: healthcheck timeout", J(r, !0));
    this.name = "HealthcheckTimeoutError";
    this.code = "P5013";
    this.logs = n;
  }
};
N(Ur, "HealthcheckTimeoutError");
m();
p();
f();
d();
var $r = class extends z {
  constructor(r, n, i) {
    super(n, J(r, !0));
    this.name = "EngineStartupError";
    this.code = "P5014";
    this.logs = i;
  }
};
N($r, "EngineStartupError");
m();
p();
f();
d();
var qr = class extends z {
  constructor(r) {
    super("Engine version is not supported", J(r, !1));
    this.name = "EngineVersionNotSupportedError";
    this.code = "P5012";
  }
};
N(qr, "EngineVersionNotSupportedError");
m();
p();
f();
d();
var vo = "Request timed out",
  Vr = class extends z {
    constructor(r, n = vo) {
      super(n, J(r, !1));
      this.name = "GatewayTimeoutError";
      this.code = "P5009";
    }
  };
N(Vr, "GatewayTimeoutError");
m();
p();
f();
d();
var Ad = "Interactive transaction error",
  Kr = class extends z {
    constructor(r, n = Ad) {
      super(n, J(r, !1));
      this.name = "InteractiveTransactionError";
      this.code = "P5015";
    }
  };
N(Kr, "InteractiveTransactionError");
m();
p();
f();
d();
var Cd = "Request parameters are invalid",
  Qr = class extends z {
    constructor(r, n = Cd) {
      super(n, J(r, !1));
      this.name = "InvalidRequestError";
      this.code = "P5011";
    }
  };
N(Qr, "InvalidRequestError");
m();
p();
f();
d();
var To = "Requested resource does not exist",
  Jr = class extends z {
    constructor(r, n = To) {
      super(n, J(r, !1));
      this.name = "NotFoundError";
      this.code = "P5003";
    }
  };
N(Jr, "NotFoundError");
m();
p();
f();
d();
var Ao = "Unknown server error",
  pr = class extends z {
    constructor(r, n, i) {
      super(n || Ao, J(r, !0));
      this.name = "ServerError";
      this.code = "P5006";
      this.logs = i;
    }
  };
N(pr, "ServerError");
m();
p();
f();
d();
var Co = "Unauthorized, check your connection string",
  Gr = class extends z {
    constructor(r, n = Co) {
      super(n, J(r, !1));
      this.name = "UnauthorizedError";
      this.code = "P5007";
    }
  };
N(Gr, "UnauthorizedError");
m();
p();
f();
d();
var _o = "Usage exceeded, retry again later",
  Wr = class extends z {
    constructor(r, n = _o) {
      super(n, J(r, !0));
      this.name = "UsageExceededError";
      this.code = "P5008";
    }
  };
N(Wr, "UsageExceededError");
async function _d(e) {
  let t;
  try {
    t = await e.text();
  } catch (r) {
    return { type: "EmptyError" };
  }
  try {
    let r = JSON.parse(t);
    if (typeof r == "string")
      switch (r) {
        case "InternalDataProxyError":
          return { type: "DataProxyError", body: r };
        default:
          return { type: "UnknownTextError", body: r };
      }
    if (typeof r == "object" && r !== null) {
      if ("is_panic" in r && "message" in r && "error_code" in r)
        return { type: "QueryEngineError", body: r };
      if (
        "EngineNotStarted" in r ||
        "InteractiveTransactionMisrouted" in r ||
        "InvalidRequestError" in r
      ) {
        let n = Object.values(r)[0].reason;
        return typeof n == "string" &&
          !["SchemaMissing", "EngineVersionNotSupported"].includes(n)
          ? { type: "UnknownJsonError", body: r }
          : { type: "DataProxyError", body: r };
      }
    }
    return { type: "UnknownJsonError", body: r };
  } catch (r) {
    return t === ""
      ? { type: "EmptyError" }
      : { type: "UnknownTextError", body: t };
  }
}
async function Hr(e, t) {
  if (e.ok) return;
  let r = { clientVersion: t, response: e },
    n = await _d(e);
  if (n.type === "QueryEngineError")
    throw new me(n.body.message, { code: n.body.error_code, clientVersion: t });
  if (n.type === "DataProxyError") {
    if (n.body === "InternalDataProxyError")
      throw new pr(r, "Internal Data Proxy error");
    if ("EngineNotStarted" in n.body) {
      if (n.body.EngineNotStarted.reason === "SchemaMissing") return new Dt(r);
      if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported")
        throw new qr(r);
      if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
        let { msg: i, logs: o } =
          n.body.EngineNotStarted.reason.EngineStartupError;
        throw new $r(r, i, o);
      }
      if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
        let { msg: i, error_code: o } =
          n.body.EngineNotStarted.reason.KnownEngineStartupError;
        throw new Y(i, t, o);
      }
      if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
        let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
        throw new Ur(r, i);
      }
    }
    if ("InteractiveTransactionMisrouted" in n.body) {
      let i = {
        IDParseError: "Could not parse interactive transaction ID",
        NoQueryEngineFoundError:
          "Could not find Query Engine for the specified host and transaction ID",
        TransactionStartError: "Could not start interactive transaction",
      };
      throw new Kr(r, i[n.body.InteractiveTransactionMisrouted.reason]);
    }
    if ("InvalidRequestError" in n.body)
      throw new Qr(r, n.body.InvalidRequestError.reason);
  }
  if (e.status === 401 || e.status === 403) throw new Gr(r, fr(Co, n));
  if (e.status === 404) return new Jr(r, fr(To, n));
  if (e.status === 429) throw new Wr(r, fr(_o, n));
  if (e.status === 504) throw new Vr(r, fr(vo, n));
  if (e.status >= 500) throw new pr(r, fr(Ao, n));
  if (e.status >= 400) throw new jr(r, fr(Po, n));
}
function fr(e, t) {
  return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
}
m();
p();
f();
d();
function Iu(e) {
  let t = Math.pow(2, e) * 50,
    r = Math.ceil(Math.random() * t) - Math.ceil(t / 2),
    n = t + r;
  return new Promise((i) => setTimeout(() => i(n), n));
}
m();
p();
f();
d();
function ku(e) {
  var r;
  if (
    !!(
      (r = e.generator) != null &&
      r.previewFeatures.some((n) => n.toLowerCase().includes("metrics"))
    )
  )
    throw new Y(
      "The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate",
      e.clientVersion,
    );
}
m();
p();
f();
d();
var Fu = {
  "@prisma/debug": "workspace:*",
  "@prisma/engines-version":
    "5.6.0-32.e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
  "@prisma/fetch-engine": "workspace:*",
  "@prisma/get-platform": "workspace:*",
  "@swc/core": "1.3.96",
  "@swc/jest": "0.2.29",
  "@types/jest": "29.5.8",
  "@types/node": "18.18.9",
  execa: "5.1.1",
  jest: "29.7.0",
  typescript: "5.2.2",
};
m();
p();
f();
d();
m();
p();
f();
d();
var zr = class extends Me {
  constructor(r, n) {
    super(
      `Cannot fetch data from service:
${r}`,
      J(n, !0),
    );
    this.name = "RequestError";
    this.code = "P5010";
  }
};
N(zr, "RequestError");
async function Nt(e, t, r = (n) => n) {
  var i;
  let n = t.clientVersion;
  try {
    return typeof fetch == "function"
      ? await r(fetch)(e, t)
      : await r(So)(e, t);
  } catch (o) {
    let s = (i = o.message) != null ? i : "Unknown error";
    throw new zr(s, { clientVersion: n });
  }
}
function Md(e) {
  return { ...e.headers, "Content-Type": "application/json" };
}
function Rd(e) {
  return { method: e.method, headers: Md(e) };
}
function Od(e, t) {
  return {
    text: () => Promise.resolve(w.Buffer.concat(e).toString()),
    json: () =>
      Promise.resolve().then(() => JSON.parse(w.Buffer.concat(e).toString())),
    ok: t.statusCode >= 200 && t.statusCode <= 299,
    status: t.statusCode,
    url: t.url,
    headers: new Mo(t.headers),
  };
}
async function So(e, t = {}) {
  let r = Id("https"),
    n = Rd(t),
    i = [],
    { origin: o } = new URL(e);
  return new Promise((s, a) => {
    var l;
    let u = r.request(e, n, (c) => {
      let {
        statusCode: g,
        headers: { location: y },
      } = c;
      g >= 301 &&
        g <= 399 &&
        y &&
        (y.startsWith("http") === !1 ? s(So(`${o}${y}`, t)) : s(So(y, t))),
        c.on("data", (P) => i.push(P)),
        c.on("end", () => s(Od(i, c))),
        c.on("error", a);
    });
    u.on("error", a), u.end((l = t.body) != null ? l : "");
  });
}
var Id = typeof xi != "undefined" ? xi : () => {},
  Mo = class {
    constructor(t = {}) {
      this.headers = new Map();
      for (let [r, n] of Object.entries(t))
        if (typeof n == "string") this.headers.set(r, n);
        else if (Array.isArray(n)) for (let i of n) this.headers.set(r, i);
    }
    append(t, r) {
      this.headers.set(t, r);
    }
    delete(t) {
      this.headers.delete(t);
    }
    get(t) {
      var r;
      return (r = this.headers.get(t)) != null ? r : null;
    }
    has(t) {
      return this.headers.has(t);
    }
    set(t, r) {
      this.headers.set(t, r);
    }
    forEach(t, r) {
      for (let [n, i] of this.headers) t.call(r, i, n, this);
    }
  };
var kd = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/,
  Du = be("prisma:client:dataproxyEngine");
async function Fd(e, t) {
  var s, a, u;
  let r = Fu["@prisma/engines-version"],
    n = (s = t.clientVersion) != null ? s : "unknown";
  if (h.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
    return h.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
  if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory") return n;
  let [i, o] = (a = n == null ? void 0 : n.split("-")) != null ? a : [];
  if (o === void 0 && kd.test(i)) return i;
  if (o !== void 0 || n === "0.0.0" || n === "in-memory") {
    if (e.startsWith("localhost") || e.startsWith("127.0.0.1")) return "0.0.0";
    let [l] = (u = r.split("-")) != null ? u : [],
      [c, g, y] = l.split("."),
      P = Dd(`<=${c}.${g}.${y}`),
      v = await Nt(P, { clientVersion: n });
    if (!v.ok)
      throw new Error(
        `Failed to fetch stable Prisma version, unpkg.com status ${v.status} ${
          v.statusText
        }, response body: ${(await v.text()) || "<empty body>"}`,
      );
    let E = await v.text();
    Du("length of body fetched from unpkg.com", E.length);
    let A;
    try {
      A = JSON.parse(E);
    } catch (M) {
      throw (
        (console.error("JSON.parse error: body fetched from unpkg.com: ", E), M)
      );
    }
    return A.version;
  }
  throw new Ft(
    "Only `major.minor.patch` versions are supported by Accelerate.",
    { clientVersion: n },
  );
}
async function Nu(e, t) {
  let r = await Fd(e, t);
  return Du("version", r), r;
}
function Dd(e) {
  return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
}
var Lu = 3,
  Ro = be("prisma:client:dataproxyEngine"),
  Oo = class {
    constructor({
      apiKey: t,
      tracingHelper: r,
      logLevel: n,
      logQueries: i,
      engineHash: o,
    }) {
      (this.apiKey = t),
        (this.tracingHelper = r),
        (this.logLevel = n),
        (this.logQueries = i),
        (this.engineHash = o);
    }
    build({ traceparent: t, interactiveTransaction: r } = {}) {
      let n = {
        Authorization: `Bearer ${this.apiKey}`,
        "Prisma-Engine-Hash": this.engineHash,
      };
      this.tracingHelper.isEnabled() &&
        (n.traceparent = t != null ? t : this.tracingHelper.getTraceParent()),
        r && (n["X-transaction-id"] = r.id);
      let i = this.buildCaptureSettings();
      return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n;
    }
    buildCaptureSettings() {
      let t = [];
      return (
        this.tracingHelper.isEnabled() && t.push("tracing"),
        this.logLevel && t.push(this.logLevel),
        this.logQueries && t.push("query"),
        t
      );
    }
  },
  Yr = class extends lr {
    constructor(r) {
      super();
      ku(r),
        (this.config = r),
        (this.env = { ...this.config.env, ...h.env }),
        (this.inlineSchema = r.inlineSchema),
        (this.inlineDatasources = r.inlineDatasources),
        (this.inlineSchemaHash = r.inlineSchemaHash),
        (this.clientVersion = r.clientVersion),
        (this.engineHash = r.engineVersion),
        (this.logEmitter = r.logEmitter),
        (this.tracingHelper = this.config.tracingHelper);
    }
    apiKey() {
      return this.headerBuilder.apiKey;
    }
    version() {
      return this.engineHash;
    }
    async start() {
      this.startPromise !== void 0 && (await this.startPromise),
        (this.startPromise = (async () => {
          let [r, n] = this.extractHostAndApiKey();
          (this.host = r),
            (this.headerBuilder = new Oo({
              apiKey: n,
              tracingHelper: this.tracingHelper,
              logLevel: this.config.logLevel,
              logQueries: this.config.logQueries,
              engineHash: this.engineHash,
            })),
            (this.remoteClientVersion = await Nu(r, this.config)),
            Ro("host", this.host);
        })()),
        await this.startPromise;
    }
    async stop() {}
    propagateResponseExtensions(r) {
      var n, i;
      (n = r == null ? void 0 : r.logs) != null &&
        n.length &&
        r.logs.forEach((o) => {
          switch (o.level) {
            case "debug":
            case "error":
            case "trace":
            case "warn":
            case "info":
              break;
            case "query": {
              let s =
                typeof o.attributes.query == "string" ? o.attributes.query : "";
              if (!this.tracingHelper.isEnabled()) {
                let [a] = s.split("/* traceparent");
                s = a;
              }
              this.logEmitter.emit("query", {
                query: s,
                timestamp: o.timestamp,
                duration: o.attributes.duration_ms,
                params: o.attributes.params,
                target: o.attributes.target,
              });
            }
          }
        }),
        (i = r == null ? void 0 : r.traces) != null &&
          i.length &&
          this.tracingHelper.createEngineSpan({ span: !0, spans: r.traces });
    }
    on(r, n) {
      if (r === "beforeExit")
        throw new Error(
          '"beforeExit" hook is not applicable to the remote query engine',
        );
      this.logEmitter.on(r, n);
    }
    async url(r) {
      return (
        await this.start(),
        `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${r}`
      );
    }
    async uploadSchema() {
      let r = { name: "schemaUpload", internal: !0 };
      return this.tracingHelper.runInChildSpan(r, async () => {
        let n = await Nt(await this.url("schema"), {
          method: "PUT",
          headers: this.headerBuilder.build(),
          body: this.inlineSchema,
          clientVersion: this.clientVersion,
        });
        n.ok || Ro("schema response status", n.status);
        let i = await Hr(n, this.clientVersion);
        if (i)
          throw (
            (this.logEmitter.emit("warn", {
              message: `Error while uploading schema: ${i.message}`,
            }),
            i)
          );
        this.logEmitter.emit("info", {
          message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`,
        });
      });
    }
    request(
      r,
      { traceparent: n, interactiveTransaction: i, customDataProxyFetch: o },
    ) {
      return this.requestInternal({
        body: r,
        traceparent: n,
        interactiveTransaction: i,
        customDataProxyFetch: o,
      });
    }
    async requestBatch(
      r,
      { traceparent: n, transaction: i, customDataProxyFetch: o },
    ) {
      let s = (i == null ? void 0 : i.kind) === "itx" ? i.options : void 0,
        a = Xn(r, i),
        { batchResult: u, elapsed: l } = await this.requestInternal({
          body: a,
          customDataProxyFetch: o,
          interactiveTransaction: s,
          traceparent: n,
        });
      return u.map((c) =>
        "errors" in c && c.errors.length > 0
          ? Br(c.errors[0], this.clientVersion)
          : { data: c, elapsed: l },
      );
    }
    requestInternal({
      body: r,
      traceparent: n,
      customDataProxyFetch: i,
      interactiveTransaction: o,
    }) {
      return this.withRetry({
        actionGerund: "querying",
        callback: async ({ logHttpCall: s }) => {
          let a = o
            ? `${o.payload.endpoint}/graphql`
            : await this.url("graphql");
          s(a);
          let u = await Nt(
            a,
            {
              method: "POST",
              headers: this.headerBuilder.build({
                traceparent: n,
                interactiveTransaction: o,
              }),
              body: JSON.stringify(r),
              clientVersion: this.clientVersion,
            },
            i,
          );
          u.ok || Ro("graphql response status", u.status),
            await this.handleError(await Hr(u, this.clientVersion));
          let l = await u.json(),
            c = l.extensions;
          if ((c && this.propagateResponseExtensions(c), l.errors))
            throw l.errors.length === 1
              ? Br(l.errors[0], this.config.clientVersion)
              : new ge(l.errors, { clientVersion: this.config.clientVersion });
          return l;
        },
      });
    }
    async transaction(r, n, i) {
      let o = {
        start: "starting",
        commit: "committing",
        rollback: "rolling back",
      };
      return this.withRetry({
        actionGerund: `${o[r]} transaction`,
        callback: async ({ logHttpCall: s }) => {
          var a, u;
          if (r === "start") {
            let l = JSON.stringify({
                max_wait:
                  (a = i == null ? void 0 : i.maxWait) != null ? a : 2e3,
                timeout: (u = i == null ? void 0 : i.timeout) != null ? u : 5e3,
                isolation_level: i == null ? void 0 : i.isolationLevel,
              }),
              c = await this.url("transaction/start");
            s(c);
            let g = await Nt(c, {
              method: "POST",
              headers: this.headerBuilder.build({ traceparent: n.traceparent }),
              body: l,
              clientVersion: this.clientVersion,
            });
            await this.handleError(await Hr(g, this.clientVersion));
            let y = await g.json(),
              P = y.extensions;
            P && this.propagateResponseExtensions(P);
            let v = y.id,
              E = y["data-proxy"].endpoint;
            return { id: v, payload: { endpoint: E } };
          } else {
            let l = `${i.payload.endpoint}/${r}`;
            s(l);
            let c = await Nt(l, {
              method: "POST",
              headers: this.headerBuilder.build({ traceparent: n.traceparent }),
              clientVersion: this.clientVersion,
            });
            await this.handleError(await Hr(c, this.clientVersion));
            let y = (await c.json()).extensions;
            y && this.propagateResponseExtensions(y);
            return;
          }
        },
      });
    }
    extractHostAndApiKey() {
      let r = { clientVersion: this.clientVersion },
        n = Object.keys(this.inlineDatasources)[0],
        i = ei({
          inlineDatasources: this.inlineDatasources,
          overrideDatasources: this.config.overrideDatasources,
          clientVersion: this.clientVersion,
          env: this.env,
        }),
        o;
      try {
        o = new URL(i);
      } catch (c) {
        throw new kt(
          `Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\``,
          r,
        );
      }
      let { protocol: s, host: a, searchParams: u } = o;
      if (s !== "prisma:")
        throw new kt(
          `Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\``,
          r,
        );
      let l = u.get("api_key");
      if (l === null || l.length < 1)
        throw new kt(
          `Error validating datasource \`${n}\`: the URL must contain a valid API key`,
          r,
        );
      return [a, l];
    }
    metrics() {
      throw new Ft("Metrics are not yet supported for Accelerate", {
        clientVersion: this.clientVersion,
      });
    }
    async withRetry(r) {
      var n;
      for (let i = 0; ; i++) {
        let o = (s) => {
          this.logEmitter.emit("info", { message: `Calling ${s} (n=${i})` });
        };
        try {
          return await r.callback({ logHttpCall: o });
        } catch (s) {
          if (!(s instanceof Me) || !s.isRetryable) throw s;
          if (i >= Lu) throw s instanceof cr ? s.cause : s;
          this.logEmitter.emit("warn", {
            message: `Attempt ${i + 1}/${Lu} failed for ${r.actionGerund}: ${
              (n = s.message) != null ? n : "(unknown)"
            }`,
          });
          let a = await Iu(i);
          this.logEmitter.emit("warn", { message: `Retrying after ${a}ms` });
        }
      }
    }
    async handleError(r) {
      if (r instanceof Dt)
        throw (
          (await this.uploadSchema(),
          new cr({ clientVersion: this.clientVersion, cause: r }))
        );
      if (r) throw r;
    }
  };
m();
p();
f();
d();
m();
p();
f();
d();
function Bu(e) {
  if ((e == null ? void 0 : e.kind) === "itx") return e.options.id;
}
m();
p();
f();
d();
var ko = {};
yr(ko, {
  QueryEngine: () => Xr,
  __wbg_call_9495de66fdbe016b: () => Wd,
  __wbg_debug_7960d327fd96f71a: () => bm,
  __wbg_error_f851667af71bcfc6: () => lm,
  __wbg_error_fd84ca2a8a977774: () => mm,
  __wbg_error_fe807da27c4a4ced: () => sm,
  __wbg_get_baf4855f9a986186: () => em,
  __wbg_info_5566be377f5b52ae: () => ym,
  __wbg_log_7b690f184ae4519b: () => hm,
  __wbg_new_9d3a9ce4282a18a8: () => im,
  __wbg_new_abda76e883ba8a5f: () => am,
  __wbg_parse_3ac95b51fc312db8: () => om,
  __wbg_resolve_fd40f858d9db1a04: () => dm,
  __wbg_set_wasm: () => Io,
  __wbg_stack_658279fe44541cf6: () => um,
  __wbg_stringify_029a979dfb73aa17: () => Xd,
  __wbg_then_ec5db6d509eb475f: () => fm,
  __wbg_warn_48cbddced45e5414: () => gm,
  __wbindgen_cb_drop: () => pm,
  __wbindgen_closure_wrapper2989: () => wm,
  __wbindgen_error_new: () => zd,
  __wbindgen_is_function: () => tm,
  __wbindgen_is_string: () => rm,
  __wbindgen_is_undefined: () => Zd,
  __wbindgen_object_clone_ref: () => Yd,
  __wbindgen_object_drop_ref: () => Hd,
  __wbindgen_string_get: () => nm,
  __wbindgen_string_new: () => Gd,
  __wbindgen_throw: () => cm,
  debug_panic: () => Kd,
  dmmf: () => Vd,
  getBuildTimeInfo: () => qd,
  init: () => Qd,
});
m();
p();
f();
d();
var I;
function Io(e) {
  I = e;
}
var Nd =
    typeof TextDecoder == "undefined"
      ? (0, module.require)("util").TextDecoder
      : TextDecoder,
  ju = new Nd("utf-8", { ignoreBOM: !0, fatal: !0 });
ju.decode();
var ri = null;
function ii() {
  return (
    (ri === null || ri.byteLength === 0) &&
      (ri = new Uint8Array(I.memory.buffer)),
    ri
  );
}
function dr(e, t) {
  return (e = e >>> 0), ju.decode(ii().subarray(e, e + t));
}
var rt = new Array(128).fill(void 0);
rt.push(void 0, null, !0, !1);
var Zr = rt.length;
function se(e) {
  Zr === rt.length && rt.push(rt.length + 1);
  let t = Zr;
  return (Zr = rt[t]), (rt[t] = e), t;
}
function V(e) {
  return rt[e];
}
function Ld(e) {
  e < 132 || ((rt[e] = Zr), (Zr = e));
}
function Ce(e) {
  let t = V(e);
  return Ld(e), t;
}
var oe = 0,
  Bd =
    typeof TextEncoder == "undefined"
      ? (0, module.require)("util").TextEncoder
      : TextEncoder,
  oi = new Bd("utf-8"),
  jd =
    typeof oi.encodeInto == "function"
      ? function (e, t) {
          return oi.encodeInto(e, t);
        }
      : function (e, t) {
          let r = oi.encode(e);
          return t.set(r), { read: e.length, written: r.length };
        };
function he(e, t, r) {
  if (r === void 0) {
    let a = oi.encode(e),
      u = t(a.length, 1) >>> 0;
    return (
      ii()
        .subarray(u, u + a.length)
        .set(a),
      (oe = a.length),
      u
    );
  }
  let n = e.length,
    i = t(n, 1) >>> 0,
    o = ii(),
    s = 0;
  for (; s < n; s++) {
    let a = e.charCodeAt(s);
    if (a > 127) break;
    o[i + s] = a;
  }
  if (s !== n) {
    s !== 0 && (e = e.slice(s)), (i = r(i, n, (n = s + e.length * 3), 1) >>> 0);
    let a = ii().subarray(i + s, i + n),
      u = jd(e, a);
    s += u.written;
  }
  return (oe = s), i;
}
function si(e) {
  return e == null;
}
var ni = null;
function Fe() {
  return (
    (ni === null || ni.byteLength === 0) &&
      (ni = new Int32Array(I.memory.buffer)),
    ni
  );
}
function Ud(e, t, r, n) {
  let i = { a: e, b: t, cnt: 1, dtor: r },
    o = (...s) => {
      i.cnt++;
      let a = i.a;
      i.a = 0;
      try {
        return n(a, i.b, ...s);
      } finally {
        --i.cnt === 0 ? I.__wbindgen_export_2.get(i.dtor)(a, i.b) : (i.a = a);
      }
    };
  return (o.original = i), o;
}
function $d(e, t, r) {
  I.wasm_bindgen__convert__closures__invoke1_mut__hc8730847d9f9e207(
    e,
    t,
    se(r),
  );
}
function qd() {
  let e = I.getBuildTimeInfo();
  return Ce(e);
}
function Vd(e) {
  let t, r;
  try {
    let l = I.__wbindgen_add_to_stack_pointer(-16),
      c = he(e, I.__wbindgen_malloc, I.__wbindgen_realloc),
      g = oe;
    I.dmmf(l, c, g);
    var n = Fe()[l / 4 + 0],
      i = Fe()[l / 4 + 1],
      o = Fe()[l / 4 + 2],
      s = Fe()[l / 4 + 3],
      a = n,
      u = i;
    if (s) throw ((a = 0), (u = 0), Ce(o));
    return (t = a), (r = u), dr(a, u);
  } finally {
    I.__wbindgen_add_to_stack_pointer(16), I.__wbindgen_free(t, r, 1);
  }
}
function Kd(e) {
  try {
    let o = I.__wbindgen_add_to_stack_pointer(-16);
    var t = si(e) ? 0 : he(e, I.__wbindgen_malloc, I.__wbindgen_realloc),
      r = oe;
    I.debug_panic(o, t, r);
    var n = Fe()[o / 4 + 0],
      i = Fe()[o / 4 + 1];
    if (i) throw Ce(n);
  } finally {
    I.__wbindgen_add_to_stack_pointer(16);
  }
}
function Qd() {
  I.init();
}
function ai(e, t) {
  try {
    return e.apply(this, t);
  } catch (r) {
    I.__wbindgen_exn_store(se(r));
  }
}
function Jd(e, t, r, n) {
  I.wasm_bindgen__convert__closures__invoke2_mut__h0a290c7e33a927ff(
    e,
    t,
    se(r),
    se(n),
  );
}
var Xr = class e {
  static __wrap(t) {
    t = t >>> 0;
    let r = Object.create(e.prototype);
    return (r.__wbg_ptr = t), r;
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return (this.__wbg_ptr = 0), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    I.__wbg_queryengine_free(t);
  }
  constructor(t, r, n) {
    try {
      let a = I.__wbindgen_add_to_stack_pointer(-16);
      I.queryengine_new(a, se(t), se(r), si(n) ? 0 : se(n));
      var i = Fe()[a / 4 + 0],
        o = Fe()[a / 4 + 1],
        s = Fe()[a / 4 + 2];
      if (s) throw Ce(o);
      return e.__wrap(i);
    } finally {
      I.__wbindgen_add_to_stack_pointer(16);
    }
  }
  connect(t) {
    let r = he(t, I.__wbindgen_malloc, I.__wbindgen_realloc),
      n = oe,
      i = I.queryengine_connect(this.__wbg_ptr, r, n);
    return Ce(i);
  }
  disconnect(t) {
    let r = he(t, I.__wbindgen_malloc, I.__wbindgen_realloc),
      n = oe,
      i = I.queryengine_disconnect(this.__wbg_ptr, r, n);
    return Ce(i);
  }
  query(t, r, n) {
    let i = he(t, I.__wbindgen_malloc, I.__wbindgen_realloc),
      o = oe,
      s = he(r, I.__wbindgen_malloc, I.__wbindgen_realloc),
      a = oe;
    var u = si(n) ? 0 : he(n, I.__wbindgen_malloc, I.__wbindgen_realloc),
      l = oe;
    let c = I.queryengine_query(this.__wbg_ptr, i, o, s, a, u, l);
    return Ce(c);
  }
  startTransaction(t, r) {
    let n = he(t, I.__wbindgen_malloc, I.__wbindgen_realloc),
      i = oe,
      o = he(r, I.__wbindgen_malloc, I.__wbindgen_realloc),
      s = oe,
      a = I.queryengine_startTransaction(this.__wbg_ptr, n, i, o, s);
    return Ce(a);
  }
  commitTransaction(t, r) {
    let n = he(t, I.__wbindgen_malloc, I.__wbindgen_realloc),
      i = oe,
      o = he(r, I.__wbindgen_malloc, I.__wbindgen_realloc),
      s = oe,
      a = I.queryengine_commitTransaction(this.__wbg_ptr, n, i, o, s);
    return Ce(a);
  }
  dmmf(t) {
    let r = he(t, I.__wbindgen_malloc, I.__wbindgen_realloc),
      n = oe,
      i = I.queryengine_dmmf(this.__wbg_ptr, r, n);
    return Ce(i);
  }
  rollbackTransaction(t, r) {
    let n = he(t, I.__wbindgen_malloc, I.__wbindgen_realloc),
      i = oe,
      o = he(r, I.__wbindgen_malloc, I.__wbindgen_realloc),
      s = oe,
      a = I.queryengine_rollbackTransaction(this.__wbg_ptr, n, i, o, s);
    return Ce(a);
  }
  sdlSchema() {
    let t = I.queryengine_sdlSchema(this.__wbg_ptr);
    return Ce(t);
  }
  metrics(t) {
    let r = he(t, I.__wbindgen_malloc, I.__wbindgen_realloc),
      n = oe,
      i = I.queryengine_metrics(this.__wbg_ptr, r, n);
    return Ce(i);
  }
};
function Gd(e, t) {
  let r = dr(e, t);
  return se(r);
}
function Wd() {
  return ai(function (e, t, r) {
    let n = V(e).call(V(t), V(r));
    return se(n);
  }, arguments);
}
function Hd(e) {
  Ce(e);
}
function zd(e, t) {
  let r = new Error(dr(e, t));
  return se(r);
}
function Yd(e) {
  let t = V(e);
  return se(t);
}
function Zd(e) {
  return V(e) === void 0;
}
function Xd() {
  return ai(function (e) {
    let t = JSON.stringify(V(e));
    return se(t);
  }, arguments);
}
function em() {
  return ai(function (e, t) {
    let r = Reflect.get(V(e), V(t));
    return se(r);
  }, arguments);
}
function tm(e) {
  return typeof V(e) == "function";
}
function rm(e) {
  return typeof V(e) == "string";
}
function nm(e, t) {
  let r = V(t),
    n = typeof r == "string" ? r : void 0;
  var i = si(n) ? 0 : he(n, I.__wbindgen_malloc, I.__wbindgen_realloc),
    o = oe;
  (Fe()[e / 4 + 1] = o), (Fe()[e / 4 + 0] = i);
}
function im(e, t) {
  try {
    var r = { a: e, b: t },
      n = (o, s) => {
        let a = r.a;
        r.a = 0;
        try {
          return Jd(a, r.b, o, s);
        } finally {
          r.a = a;
        }
      };
    let i = new Promise(n);
    return se(i);
  } finally {
    r.a = r.b = 0;
  }
}
function om() {
  return ai(function (e, t) {
    let r = JSON.parse(dr(e, t));
    return se(r);
  }, arguments);
}
function sm(e) {
  console.error(V(e));
}
function am() {
  let e = new Error();
  return se(e);
}
function um(e, t) {
  let r = V(t).stack,
    n = he(r, I.__wbindgen_malloc, I.__wbindgen_realloc),
    i = oe;
  (Fe()[e / 4 + 1] = i), (Fe()[e / 4 + 0] = n);
}
function lm(e, t) {
  let r, n;
  try {
    (r = e), (n = t), console.error(dr(e, t));
  } finally {
    I.__wbindgen_free(r, n, 1);
  }
}
function cm(e, t) {
  throw new Error(dr(e, t));
}
function pm(e) {
  let t = Ce(e).original;
  return t.cnt-- == 1 ? ((t.a = 0), !0) : !1;
}
function fm(e, t) {
  let r = V(e).then(V(t));
  return se(r);
}
function dm(e) {
  let t = Promise.resolve(V(e));
  return se(t);
}
function mm(e, t, r, n) {
  console.error(V(e), V(t), V(r), V(n));
}
function gm(e, t, r, n) {
  console.warn(V(e), V(t), V(r), V(n));
}
function ym(e, t, r, n) {
  console.info(V(e), V(t), V(r), V(n));
}
function hm(e, t, r, n) {
  console.log(V(e), V(t), V(r), V(n));
}
function bm(e, t, r, n) {
  console.debug(V(e), V(t), V(r), V(n));
}
function wm(e, t, r) {
  let n = Ud(e, t, 138, $d);
  return se(n);
}
var Uu = {
  async loadLibrary(e) {
    var s;
    let { generator: t, clientVersion: r, adapter: n } = e,
      i = await ((s = e.getQueryEngineWasmModule) == null ? void 0 : s.call(e));
    if (
      (t == null ? void 0 : t.previewFeatures.includes("driverAdapters")) ===
      void 0
    )
      throw new Y(
        'The `driverAdapters` preview feature is required with `engineType="wasm"`',
        r,
      );
    if (n === void 0)
      throw new Y(
        'The `adapter` option for `PrismaClient` is required with `engineType="wasm"`',
        r,
      );
    if (i == null)
      throw new Y(
        "The loaded wasm module was unexpectedly `undefined` or `null` once loaded",
        r,
      );
    let o = new WebAssembly.Instance(i, { "./query_engine_bg.js": ko });
    return (
      Io(o.exports),
      {
        debugPanic() {
          return Promise.reject("{}");
        },
        dmmf() {
          return Promise.resolve("{}");
        },
        version() {
          return { commit: "unknown", version: "unknown" };
        },
        QueryEngine: Xr,
      }
    );
  },
};
var xm = "P2036",
  ze = be("prisma:client:libraryEngine");
function Em(e) {
  return e.item_type === "query" && "query" in e;
}
function Pm(e) {
  return "level" in e ? e.level === "error" && e.message === "PANIC" : !1;
}
var Z2 = [...Ji, "native"],
  $u = 0,
  en = class extends lr {
    constructor(r, n) {
      var a, u, l;
      super();
      let i = Mt(r.generator);
      (this.libraryLoader = n != null ? n : Uu),
        (this.config = r),
        (this.libraryStarted = !1),
        (this.logQueries = (a = r.logQueries) != null ? a : !1),
        (this.logLevel = (u = r.logLevel) != null ? u : "error"),
        (this.logEmitter = r.logEmitter),
        (this.datamodel = atob(r.inlineSchema)),
        r.enableDebugLogs && (this.logLevel = "debug");
      let o = Object.keys(r.overrideDatasources)[0],
        s = (l = r.overrideDatasources[o]) == null ? void 0 : l.url;
      o !== void 0 && s !== void 0 && (this.datasourceOverrides = { [o]: s }),
        (this.libraryInstantiationPromise = this.instantiateLibrary()),
        this.checkForTooManyEngines();
    }
    checkForTooManyEngines() {
      $u === 10 &&
        console.warn(
          `${Wt(
            "warn(prisma-client)",
          )} This is the 10th instance of Prisma Client being started. Make sure this is intentional.`,
        );
    }
    async transaction(r, n, i) {
      var u, l, c, g, y;
      await this.start();
      let o = JSON.stringify(n),
        s;
      if (r === "start") {
        let P = JSON.stringify({
          max_wait: (u = i == null ? void 0 : i.maxWait) != null ? u : 2e3,
          timeout: (l = i == null ? void 0 : i.timeout) != null ? l : 5e3,
          isolation_level: i == null ? void 0 : i.isolationLevel,
        });
        s = await ((c = this.engine) == null
          ? void 0
          : c.startTransaction(P, o));
      } else
        r === "commit"
          ? (s = await ((g = this.engine) == null
              ? void 0
              : g.commitTransaction(i.id, o)))
          : r === "rollback" &&
            (s = await ((y = this.engine) == null
              ? void 0
              : y.rollbackTransaction(i.id, o)));
      let a = this.parseEngineResponse(s);
      if (vm(a)) {
        let P = this.getExternalAdapterError(a);
        throw P
          ? P.error
          : new me(a.message, {
              code: a.error_code,
              clientVersion: this.config.clientVersion,
              meta: a.meta,
            });
      }
      return a;
    }
    async instantiateLibrary() {
      if ((ze("internalSetup"), this.libraryInstantiationPromise))
        return this.libraryInstantiationPromise;
      (this.platform = await this.getPlatform()),
        await this.loadEngine(),
        this.version();
    }
    async getPlatform() {}
    parseEngineResponse(r) {
      if (!r)
        throw new ge("Response from the Engine was empty", {
          clientVersion: this.config.clientVersion,
        });
      try {
        return JSON.parse(r);
      } catch (n) {
        throw new ge("Unable to JSON.parse response from engine", {
          clientVersion: this.config.clientVersion,
        });
      }
    }
    async loadEngine() {
      var r, n;
      if (!this.engine) {
        this.QueryEngineConstructor ||
          ((this.library = await this.libraryLoader.loadLibrary(this.config)),
          (this.QueryEngineConstructor = this.library.QueryEngine));
        try {
          let i = new x(this),
            { adapter: o } = this.config;
          o && ze("Using driver adapter: %O", o),
            (this.engine = new this.QueryEngineConstructor(
              {
                datamodel: this.datamodel,
                env: h.env,
                logQueries: (r = this.config.logQueries) != null ? r : !1,
                ignoreEnvVarErrors: !0,
                datasourceOverrides:
                  (n = this.datasourceOverrides) != null ? n : {},
                logLevel: this.logLevel,
                configDir: this.config.cwd,
                engineProtocol: "json",
              },
              (s) => {
                var a;
                (a = i.deref()) == null || a.logger(s);
              },
              o,
            )),
            $u++;
        } catch (i) {
          let o = i,
            s = this.parseInitError(o.message);
          throw typeof s == "string"
            ? o
            : new Y(s.message, this.config.clientVersion, s.error_code);
        }
      }
    }
    logger(r) {
      var i;
      let n = this.parseEngineResponse(r);
      if (n) {
        if ("span" in n) {
          this.config.tracingHelper.createEngineSpan(n);
          return;
        }
        (n.level =
          (i = n == null ? void 0 : n.level.toLowerCase()) != null
            ? i
            : "unknown"),
          Em(n)
            ? this.logEmitter.emit("query", {
                timestamp: new Date(),
                query: n.query,
                params: n.params,
                duration: Number(n.duration_ms),
                target: n.module_path,
              })
            : Pm(n)
            ? (this.loggerRustPanic = new Le(
                this.getErrorMessageWithLink(
                  `${n.message}: ${n.reason} in ${n.file}:${n.line}:${n.column}`,
                ),
                this.config.clientVersion,
              ))
            : this.logEmitter.emit(n.level, {
                timestamp: new Date(),
                message: n.message,
                target: n.module_path,
              });
      }
    }
    getErrorMessageWithLink(r) {
      var n;
      return Ru({
        platform: this.platform,
        title: r,
        version: this.config.clientVersion,
        engineVersion: (n = this.versionInfo) == null ? void 0 : n.commit,
        database: this.config.activeProvider,
        query: this.lastQuery,
      });
    }
    parseInitError(r) {
      try {
        return JSON.parse(r);
      } catch (n) {}
      return r;
    }
    parseRequestError(r) {
      try {
        return JSON.parse(r);
      } catch (n) {}
      return r;
    }
    on(r, n) {
      if (r === "beforeExit")
        throw new Error(
          '"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.',
        );
      this.logEmitter.on(r, n);
    }
    async start() {
      if (
        (await this.libraryInstantiationPromise,
        await this.libraryStoppingPromise,
        this.libraryStartingPromise)
      )
        return (
          ze(
            `library already starting, this.libraryStarted: ${this.libraryStarted}`,
          ),
          this.libraryStartingPromise
        );
      if (this.libraryStarted) return;
      let r = async () => {
        var n;
        ze("library starting");
        try {
          let i = { traceparent: this.config.tracingHelper.getTraceParent() };
          await ((n = this.engine) == null
            ? void 0
            : n.connect(JSON.stringify(i))),
            (this.libraryStarted = !0),
            ze("library started");
        } catch (i) {
          let o = this.parseInitError(i.message);
          throw typeof o == "string"
            ? i
            : new Y(o.message, this.config.clientVersion, o.error_code);
        } finally {
          this.libraryStartingPromise = void 0;
        }
      };
      return (
        (this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan(
          "connect",
          r,
        )),
        this.libraryStartingPromise
      );
    }
    async stop() {
      if (
        (await this.libraryStartingPromise,
        await this.executingQueryPromise,
        this.libraryStoppingPromise)
      )
        return ze("library is already stopping"), this.libraryStoppingPromise;
      if (!this.libraryStarted) return;
      let r = async () => {
        var i;
        await new Promise((o) => setTimeout(o, 5)), ze("library stopping");
        let n = { traceparent: this.config.tracingHelper.getTraceParent() };
        await ((i = this.engine) == null
          ? void 0
          : i.disconnect(JSON.stringify(n))),
          (this.libraryStarted = !1),
          (this.libraryStoppingPromise = void 0),
          ze("library stopped");
      };
      return (
        (this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan(
          "disconnect",
          r,
        )),
        this.libraryStoppingPromise
      );
    }
    version() {
      var r, n, i;
      return (
        (this.versionInfo = (r = this.library) == null ? void 0 : r.version()),
        (i = (n = this.versionInfo) == null ? void 0 : n.version) != null
          ? i
          : "unknown"
      );
    }
    debugPanic(r) {
      var n;
      return (n = this.library) == null ? void 0 : n.debugPanic(r);
    }
    async request(r, { traceparent: n, interactiveTransaction: i }) {
      var a, u;
      ze(`sending request, this.libraryStarted: ${this.libraryStarted}`);
      let o = JSON.stringify({ traceparent: n }),
        s = JSON.stringify(r);
      try {
        await this.start(),
          (this.executingQueryPromise =
            (a = this.engine) == null
              ? void 0
              : a.query(s, o, i == null ? void 0 : i.id)),
          (this.lastQuery = s);
        let l = this.parseEngineResponse(await this.executingQueryPromise);
        if (l.errors)
          throw l.errors.length === 1
            ? this.buildQueryError(l.errors[0])
            : new ge(JSON.stringify(l.errors), {
                clientVersion: this.config.clientVersion,
              });
        if (this.loggerRustPanic) throw this.loggerRustPanic;
        return { data: l, elapsed: 0 };
      } catch (l) {
        if (l instanceof Y) throw l;
        if (
          l.code === "GenericFailure" &&
          (u = l.message) != null &&
          u.startsWith("PANIC:")
        )
          throw new Le(
            this.getErrorMessageWithLink(l.message),
            this.config.clientVersion,
          );
        let c = this.parseRequestError(l.message);
        throw typeof c == "string"
          ? l
          : new ge(
              `${c.message}
${c.backtrace}`,
              { clientVersion: this.config.clientVersion },
            );
      }
    }
    async requestBatch(r, { transaction: n, traceparent: i }) {
      ze("requestBatch");
      let o = Xn(r, n);
      await this.start(),
        (this.lastQuery = JSON.stringify(o)),
        (this.executingQueryPromise = this.engine.query(
          this.lastQuery,
          JSON.stringify({ traceparent: i }),
          Bu(n),
        ));
      let s = await this.executingQueryPromise,
        a = this.parseEngineResponse(s);
      if (a.errors)
        throw a.errors.length === 1
          ? this.buildQueryError(a.errors[0])
          : new ge(JSON.stringify(a.errors), {
              clientVersion: this.config.clientVersion,
            });
      let { batchResult: u, errors: l } = a;
      if (Array.isArray(u))
        return u.map((c) => {
          var g;
          return c.errors && c.errors.length > 0
            ? (g = this.loggerRustPanic) != null
              ? g
              : this.buildQueryError(c.errors[0])
            : { data: c, elapsed: 0 };
        });
      throw l && l.length === 1
        ? new Error(l[0].error)
        : new Error(JSON.stringify(a));
    }
    buildQueryError(r) {
      if (r.user_facing_error.is_panic)
        return new Le(
          this.getErrorMessageWithLink(r.user_facing_error.message),
          this.config.clientVersion,
        );
      let n = this.getExternalAdapterError(r.user_facing_error);
      return n ? n.error : Br(r, this.config.clientVersion);
    }
    getExternalAdapterError(r) {
      var n;
      if (r.error_code === xm && this.config.adapter) {
        let i = (n = r.meta) == null ? void 0 : n.id;
        _n(
          typeof i == "number",
          "Malformed external JS error received from the engine",
        );
        let o = this.config.adapter.errorRegistry.consumeError(i);
        return _n(o, "External error with reported id was not registered"), o;
      }
    }
    async metrics(r) {
      await this.start();
      let n = await this.engine.metrics(JSON.stringify(r));
      return r.format === "prometheus" ? n : this.parseEngineResponse(n);
    }
  };
function vm(e) {
  return typeof e == "object" && e !== null && e.error_code !== void 0;
}
function qu(e, t) {
  let r;
  try {
    r = ei({
      inlineDatasources: t.inlineDatasources,
      overrideDatasources: t.overrideDatasources,
      env: { ...t.env, ...h.env },
      clientVersion: t.clientVersion,
    });
  } catch (i) {}
  return (
    e.noEngine !== !0 &&
      r != null &&
      r.startsWith("prisma://") &&
      Mn(
        "recommend--no-engine",
        "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)",
      ),
    Mt(t.generator) === "wasm" && t.adapter !== void 0
      ? new en(t)
      : ((r != null && r.startsWith("prisma://")) || e.noEngine, new Yr(t))
  );
}
m();
p();
f();
d();
function ui({ generator: e }) {
  var t;
  return (t = e == null ? void 0 : e.previewFeatures) != null ? t : [];
}
m();
p();
f();
d();
m();
p();
f();
d();
m();
p();
f();
d();
var Wu = Pe(Fo());
m();
p();
f();
d();
function Ju(e, t) {
  let r = Gu(e),
    n = Tm(r),
    i = Cm(n);
  i ? li(i, t) : t.addErrorMessage(() => "Unknown error");
}
function Gu(e) {
  return e.errors.flatMap((t) => (t.kind === "Union" ? Gu(t) : [t]));
}
function Tm(e) {
  let t = new Map(),
    r = [];
  for (let n of e) {
    if (n.kind !== "InvalidArgumentType") {
      r.push(n);
      continue;
    }
    let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`,
      o = t.get(i);
    o
      ? t.set(i, {
          ...n,
          argument: {
            ...n.argument,
            typeNames: Am(o.argument.typeNames, n.argument.typeNames),
          },
        })
      : t.set(i, n);
  }
  return r.push(...t.values()), r;
}
function Am(e, t) {
  return [...new Set(e.concat(t))];
}
function Cm(e) {
  return eo(e, (t, r) => {
    let n = Ku(t),
      i = Ku(r);
    return n !== i ? n - i : Qu(t) - Qu(r);
  });
}
function Ku(e) {
  let t = 0;
  return (
    Array.isArray(e.selectionPath) && (t += e.selectionPath.length),
    Array.isArray(e.argumentPath) && (t += e.argumentPath.length),
    t
  );
}
function Qu(e) {
  switch (e.kind) {
    case "InvalidArgumentValue":
    case "ValueTooLarge":
      return 20;
    case "InvalidArgumentType":
      return 10;
    case "RequiredArgumentMissing":
      return -10;
    default:
      return 0;
  }
}
m();
p();
f();
d();
var nt = class {
  constructor(t, r) {
    this.name = t;
    this.value = r;
    this.isRequired = !1;
  }
  makeRequired() {
    return (this.isRequired = !0), this;
  }
  write(t) {
    let {
      colors: { green: r },
    } = t.context;
    t.addMarginSymbol(r(this.isRequired ? "+" : "?")),
      t.write(r(this.name)),
      this.isRequired || t.write(r("?")),
      t.write(r(": ")),
      typeof this.value == "string"
        ? t.write(r(this.value))
        : t.write(this.value);
  }
};
m();
p();
f();
d();
var ci = class {
  constructor() {
    this.fields = [];
  }
  addField(t, r) {
    return (
      this.fields.push({
        write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
        },
      }),
      this
    );
  }
  write(t) {
    let {
      colors: { green: r },
    } = t.context;
    t.writeLine(r("{"))
      .withIndent(() => {
        t.writeJoined(or, this.fields).newLine();
      })
      .write(r("}"))
      .addMarginSymbol(r("+"));
  }
};
function li(e, t) {
  switch (e.kind) {
    case "IncludeAndSelect":
      _m(e, t);
      break;
    case "IncludeOnScalar":
      Sm(e, t);
      break;
    case "EmptySelection":
      Mm(e, t);
      break;
    case "UnknownSelectionField":
      Rm(e, t);
      break;
    case "UnknownArgument":
      Om(e, t);
      break;
    case "UnknownInputField":
      Im(e, t);
      break;
    case "RequiredArgumentMissing":
      km(e, t);
      break;
    case "InvalidArgumentType":
      Fm(e, t);
      break;
    case "InvalidArgumentValue":
      Dm(e, t);
      break;
    case "ValueTooLarge":
      Nm(e, t);
      break;
    case "SomeFieldsMissing":
      Lm(e, t);
      break;
    case "TooManyFieldsGiven":
      Bm(e, t);
      break;
    case "Union":
      Ju(e, t);
      break;
    default:
      throw new Error("not implemented: " + e.kind);
  }
}
function _m(e, t) {
  var n, i;
  let r = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  r &&
    r instanceof le &&
    ((n = r.getField("include")) == null || n.markAsError(),
    (i = r.getField("select")) == null || i.markAsError()),
    t.addErrorMessage(
      (o) =>
        `Please ${o.bold("either")} use ${o.green("`include`")} or ${o.green(
          "`select`",
        )}, but ${o.red("not both")} at the same time.`,
    );
}
function Sm(e, t) {
  var s, a;
  let [r, n] = pi(e.selectionPath),
    i = e.outputType,
    o = (s = t.arguments.getDeepSelectionParent(r)) == null ? void 0 : s.value;
  if (o && ((a = o.getField(n)) == null || a.markAsError(), i))
    for (let u of i.fields)
      u.isRelation && o.addSuggestion(new nt(u.name, "true"));
  t.addErrorMessage((u) => {
    let l = `Invalid scalar field ${u.red(`\`${n}\``)} for ${u.bold(
      "include",
    )} statement`;
    return (
      i ? (l += ` on model ${u.bold(i.name)}. ${tn(u)}`) : (l += "."),
      (l += `
Note that ${u.bold("include")} statements only accept relation fields.`),
      l
    );
  });
}
function Mm(e, t) {
  var o, s;
  let r = e.outputType,
    n =
      (o = t.arguments.getDeepSelectionParent(e.selectionPath)) == null
        ? void 0
        : o.value,
    i = (s = n == null ? void 0 : n.isEmpty()) != null ? s : !1;
  n && (n.removeAllFields(), Yu(n, r)),
    t.addErrorMessage((a) =>
      i
        ? `The ${a.red("`select`")} statement for type ${a.bold(
            r.name,
          )} must not be empty. ${tn(a)}`
        : `The ${a.red("`select`")} statement for type ${a.bold(
            r.name,
          )} needs ${a.bold("at least one truthy value")}.`,
    );
}
function Rm(e, t) {
  var o;
  let [r, n] = pi(e.selectionPath),
    i = t.arguments.getDeepSelectionParent(r);
  i &&
    ((o = i.value.getField(n)) == null || o.markAsError(),
    Yu(i.value, e.outputType)),
    t.addErrorMessage((s) => {
      let a = [`Unknown field ${s.red(`\`${n}\``)}`];
      return (
        i && a.push(`for ${s.bold(i.kind)} statement`),
        a.push(`on model ${s.bold(`\`${e.outputType.name}\``)}.`),
        a.push(tn(s)),
        a.join(" ")
      );
    });
}
function Om(e, t) {
  var i;
  let r = e.argumentPath[0],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  n instanceof le &&
    ((i = n.getField(r)) == null || i.markAsError(), jm(n, e.arguments)),
    t.addErrorMessage((o) =>
      Hu(
        o,
        r,
        e.arguments.map((s) => s.name),
      ),
    );
}
function Im(e, t) {
  var o;
  let [r, n] = pi(e.argumentPath),
    i = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  if (i instanceof le) {
    (o = i.getDeepField(e.argumentPath)) == null || o.markAsError();
    let s = i.getDeepFieldValue(r);
    s instanceof le && Zu(s, e.inputType);
  }
  t.addErrorMessage((s) =>
    Hu(
      s,
      n,
      e.inputType.fields.map((a) => a.name),
    ),
  );
}
function Hu(e, t, r) {
  let n = [`Unknown argument \`${e.red(t)}\`.`],
    i = $m(t, r);
  return (
    i && n.push(`Did you mean \`${e.green(i)}\`?`),
    r.length > 0 && n.push(tn(e)),
    n.join(" ")
  );
}
function km(e, t) {
  let r;
  t.addErrorMessage((u) =>
    (r == null ? void 0 : r.value) instanceof ce && r.value.text === "null"
      ? `Argument \`${u.green(o)}\` must not be ${u.red("null")}.`
      : `Argument \`${u.green(o)}\` is missing.`,
  );
  let n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  if (!(n instanceof le)) return;
  let [i, o] = pi(e.argumentPath),
    s = new ci(),
    a = n.getDeepFieldValue(i);
  if (a instanceof le)
    if (
      ((r = a.getField(o)),
      r && a.removeField(o),
      e.inputTypes.length === 1 && e.inputTypes[0].kind === "object")
    ) {
      for (let u of e.inputTypes[0].fields)
        s.addField(u.name, u.typeNames.join(" | "));
      a.addSuggestion(new nt(o, s).makeRequired());
    } else {
      let u = e.inputTypes.map(zu).join(" | ");
      a.addSuggestion(new nt(o, u).makeRequired());
    }
}
function zu(e) {
  return e.kind === "list" ? `${zu(e.elementType)}[]` : e.name;
}
function Fm(e, t) {
  var i;
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  n instanceof le &&
    ((i = n.getDeepFieldValue(e.argumentPath)) == null || i.markAsError()),
    t.addErrorMessage((o) => {
      let s = fi(
        "or",
        e.argument.typeNames.map((a) => o.green(a)),
      );
      return `Argument \`${o.bold(
        r,
      )}\`: Invalid value provided. Expected ${s}, provided ${o.red(
        e.inferredType,
      )}.`;
    });
}
function Dm(e, t) {
  var i;
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  n instanceof le &&
    ((i = n.getDeepFieldValue(e.argumentPath)) == null || i.markAsError()),
    t.addErrorMessage((o) => {
      let s = [`Invalid value for argument \`${o.bold(r)}\``];
      if (
        (e.underlyingError && s.push(`: ${e.underlyingError}`),
        s.push("."),
        e.argument.typeNames.length > 0)
      ) {
        let a = fi(
          "or",
          e.argument.typeNames.map((u) => o.green(u)),
        );
        s.push(` Expected ${a}.`);
      }
      return s.join("");
    });
}
function Nm(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath),
    i;
  if (n instanceof le) {
    let o = n.getDeepField(e.argumentPath),
      s = o == null ? void 0 : o.value;
    s == null || s.markAsError(), s instanceof ce && (i = s.text);
  }
  t.addErrorMessage((o) => {
    let s = ["Unable to fit value"];
    return (
      i && s.push(o.red(i)),
      s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``),
      s.join(" ")
    );
  });
}
function Lm(e, t) {
  let r = e.argumentPath[e.argumentPath.length - 1],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  if (n instanceof le) {
    let i = n.getDeepFieldValue(e.argumentPath);
    i instanceof le && Zu(i, e.inputType);
  }
  t.addErrorMessage((i) => {
    let o = [
      `Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`,
    ];
    return (
      e.constraints.minFieldCount === 1
        ? e.constraints.requiredFields
          ? o.push(
              `${i.green("at least one of")} ${fi(
                "or",
                e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``),
              )} arguments.`,
            )
          : o.push(`${i.green("at least one")} argument.`)
        : o.push(
            `${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`,
          ),
      o.push(tn(i)),
      o.join(" ")
    );
  });
}
function Bm(e, t) {
  let r = e.argumentPath[e.argumentPath.length - 1],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath),
    i = [];
  if (n instanceof le) {
    let o = n.getDeepFieldValue(e.argumentPath);
    o instanceof le && (o.markAsError(), (i = Object.keys(o.getFields())));
  }
  t.addErrorMessage((o) => {
    let s = [
      `Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`,
    ];
    return (
      e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1
        ? s.push(`${o.green("exactly one")} argument,`)
        : e.constraints.maxFieldCount == 1
        ? s.push(`${o.green("at most one")} argument,`)
        : s.push(
            `${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`,
          ),
      s.push(
        `but you provided ${fi(
          "and",
          i.map((a) => o.red(a)),
        )}. Please choose`,
      ),
      e.constraints.maxFieldCount === 1
        ? s.push("one.")
        : s.push(`${e.constraints.maxFieldCount}.`),
      s.join(" ")
    );
  });
}
function Yu(e, t) {
  for (let r of t.fields)
    e.hasField(r.name) || e.addSuggestion(new nt(r.name, "true"));
}
function jm(e, t) {
  for (let r of t)
    e.hasField(r.name) ||
      e.addSuggestion(new nt(r.name, r.typeNames.join(" | ")));
}
function Zu(e, t) {
  if (t.kind === "object")
    for (let r of t.fields)
      e.hasField(r.name) ||
        e.addSuggestion(new nt(r.name, r.typeNames.join(" | ")));
}
function pi(e) {
  let t = [...e],
    r = t.pop();
  if (!r) throw new Error("unexpected empty path");
  return [t, r];
}
function tn({ green: e, enabled: t }) {
  return (
    "Available options are " +
    (t ? `listed in ${e("green")}` : "marked with ?") +
    "."
  );
}
function fi(e, t) {
  if (t.length === 1) return t[0];
  let r = [...t],
    n = r.pop();
  return `${r.join(", ")} ${e} ${n}`;
}
var Um = 3;
function $m(e, t) {
  let r = 1 / 0,
    n;
  for (let i of t) {
    let o = (0, Wu.default)(e, i);
    o > Um || (o < r && ((r = o), (n = i)));
  }
  return n;
}
function di({
  args: e,
  errors: t,
  errorFormat: r,
  callsite: n,
  originalMethod: i,
  clientVersion: o,
}) {
  let s = Qn(e);
  for (let g of t) li(g, s);
  let a = r === "pretty" ? $a : Vn,
    u = s.renderAllMessages(a),
    l = new Xt(0, { colors: a }).write(s).toString(),
    c = ur({
      message: u,
      callsite: n,
      originalMethod: i,
      showColors: r === "pretty",
      callArguments: l,
    });
  throw new Te(c, { clientVersion: o });
}
var qm = {
  findUnique: "findUnique",
  findUniqueOrThrow: "findUniqueOrThrow",
  findFirst: "findFirst",
  findFirstOrThrow: "findFirstOrThrow",
  findMany: "findMany",
  count: "aggregate",
  create: "createOne",
  createMany: "createMany",
  update: "updateOne",
  updateMany: "updateMany",
  upsert: "upsertOne",
  delete: "deleteOne",
  deleteMany: "deleteMany",
  executeRaw: "executeRaw",
  queryRaw: "queryRaw",
  aggregate: "aggregate",
  groupBy: "groupBy",
  runCommandRaw: "runCommandRaw",
  findRaw: "findRaw",
  aggregateRaw: "aggregateRaw",
};
function Xu({
  modelName: e,
  action: t,
  args: r,
  runtimeDataModel: n,
  extensions: i,
  callsite: o,
  clientMethod: s,
  errorFormat: a,
  clientVersion: u,
}) {
  let l = new Do({
    runtimeDataModel: n,
    modelName: e,
    action: t,
    rootArgs: r,
    callsite: o,
    extensions: i,
    selectionPath: [],
    argumentPath: [],
    originalMethod: s,
    errorFormat: a,
    clientVersion: u,
  });
  return { modelName: e, action: qm[t], query: No(r, l) };
}
function No({ select: e, include: t, ...r } = {}, n) {
  return { arguments: tl(r, n), selection: Vm(e, t, n) };
}
function Vm(e, t, r) {
  return (
    e &&
      t &&
      r.throwValidationError({
        kind: "IncludeAndSelect",
        selectionPath: r.getSelectionPath(),
      }),
    e ? Jm(e, r) : Km(r, t)
  );
}
function Km(e, t) {
  let r = {};
  return (
    e.model && !e.isRawAction() && ((r.$composites = !0), (r.$scalars = !0)),
    t && Qm(r, t, e),
    r
  );
}
function Qm(e, t, r) {
  for (let [n, i] of Object.entries(t)) {
    let o = r.findField(n);
    o &&
      (o == null ? void 0 : o.kind) !== "object" &&
      r.throwValidationError({
        kind: "IncludeOnScalar",
        selectionPath: r.getSelectionPath().concat(n),
        outputType: r.getOutputTypeDescription(),
      }),
      i === !0
        ? (e[n] = !0)
        : typeof i == "object" && (e[n] = No(i, r.nestSelection(n)));
  }
}
function Jm(e, t) {
  let r = {},
    n = t.getComputedFields(),
    i = Eu(e, n);
  for (let [o, s] of Object.entries(i)) {
    let a = t.findField(o);
    (n != null && n[o] && !a) ||
      (s === !0
        ? (r[o] = !0)
        : typeof s == "object" && (r[o] = No(s, t.nestSelection(o))));
  }
  return r;
}
function el(e, t) {
  if (e === null) return null;
  if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
    return e;
  if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
  if (er(e)) {
    if (kn(e)) return { $type: "DateTime", value: e.toISOString() };
    t.throwValidationError({
      kind: "InvalidArgumentValue",
      selectionPath: t.getSelectionPath(),
      argumentPath: t.getArgumentPath(),
      argument: { name: t.getArgumentName(), typeNames: ["Date"] },
      underlyingError: "Provided Date object is invalid",
    });
  }
  if (ir(e))
    return {
      $type: "FieldRef",
      value: { _ref: e.name, _container: e.modelName },
    };
  if (Array.isArray(e)) return Gm(e, t);
  if (ArrayBuffer.isView(e))
    return { $type: "Bytes", value: w.Buffer.from(e).toString("base64") };
  if (Wm(e)) return e.values;
  if (nr(e)) return { $type: "Decimal", value: e.toFixed() };
  if (e instanceof Xe) {
    if (e !== no.instances[e._getName()])
      throw new Error("Invalid ObjectEnumValue");
    return { $type: "Enum", value: e._getName() };
  }
  if (Hm(e)) return e.toJSON();
  if (typeof e == "object") return tl(e, t);
  t.throwValidationError({
    kind: "InvalidArgumentValue",
    selectionPath: t.getSelectionPath(),
    argumentPath: t.getArgumentPath(),
    argument: { name: t.getArgumentName(), typeNames: [] },
    underlyingError: `We could not serialize ${Object.prototype.toString.call(
      e,
    )} value. Serialize the object to JSON or implement a ".toJSON()" method on it`,
  });
}
function tl(e, t) {
  if (e.$type) return { $type: "Json", value: JSON.stringify(e) };
  let r = {};
  for (let n in e) {
    let i = e[n];
    i !== void 0 && (r[n] = el(i, t.nestArgument(n)));
  }
  return r;
}
function Gm(e, t) {
  let r = [];
  for (let n = 0; n < e.length; n++) {
    let i = t.nestArgument(String(n)),
      o = e[n];
    o === void 0 &&
      t.throwValidationError({
        kind: "InvalidArgumentValue",
        selectionPath: i.getSelectionPath(),
        argumentPath: i.getArgumentPath(),
        argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] },
        underlyingError:
          "Can not use `undefined` value within array. Use `null` or filter out `undefined` values",
      }),
      r.push(el(o, i));
  }
  return r;
}
function Wm(e) {
  return typeof e == "object" && e !== null && e.__prismaRawParameters__ === !0;
}
function Hm(e) {
  return typeof e == "object" && e !== null && typeof e.toJSON == "function";
}
var Do = class e {
  constructor(t) {
    this.params = t;
    this.params.modelName &&
      (this.model = this.params.runtimeDataModel.models[this.params.modelName]);
  }
  throwValidationError(t) {
    var r;
    di({
      errors: [t],
      originalMethod: this.params.originalMethod,
      args: (r = this.params.rootArgs) != null ? r : {},
      callsite: this.params.callsite,
      errorFormat: this.params.errorFormat,
      clientVersion: this.params.clientVersion,
    });
  }
  getSelectionPath() {
    return this.params.selectionPath;
  }
  getArgumentPath() {
    return this.params.argumentPath;
  }
  getArgumentName() {
    return this.params.argumentPath[this.params.argumentPath.length - 1];
  }
  getOutputTypeDescription() {
    if (!(!this.params.modelName || !this.model))
      return {
        name: this.params.modelName,
        fields: this.model.fields.map((t) => ({
          name: t.name,
          typeName: "boolean",
          isRelation: t.kind === "object",
        })),
      };
  }
  isRawAction() {
    return [
      "executeRaw",
      "queryRaw",
      "runCommandRaw",
      "findRaw",
      "aggregateRaw",
    ].includes(this.params.action);
  }
  getComputedFields() {
    if (this.params.modelName)
      return this.params.extensions.getAllComputedFields(this.params.modelName);
  }
  findField(t) {
    var r;
    return (r = this.model) == null
      ? void 0
      : r.fields.find((n) => n.name === t);
  }
  nestSelection(t) {
    let r = this.findField(t),
      n = (r == null ? void 0 : r.kind) === "object" ? r.type : void 0;
    return new e({
      ...this.params,
      modelName: n,
      selectionPath: this.params.selectionPath.concat(t),
    });
  }
  nestArgument(t) {
    return new e({
      ...this.params,
      argumentPath: this.params.argumentPath.concat(t),
    });
  }
};
m();
p();
f();
d();
var rl = (e) => ({ command: e });
m();
p();
f();
d();
m();
p();
f();
d();
var nl = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
m();
p();
f();
d();
function rn(e) {
  try {
    return il(e, "fast");
  } catch (t) {
    return il(e, "slow");
  }
}
function il(e, t) {
  return JSON.stringify(e.map((r) => zm(r, t)));
}
function zm(e, t) {
  return typeof e == "bigint"
    ? { prisma__type: "bigint", prisma__value: e.toString() }
    : er(e)
    ? { prisma__type: "date", prisma__value: e.toJSON() }
    : tt.isDecimal(e)
    ? { prisma__type: "decimal", prisma__value: e.toJSON() }
    : w.Buffer.isBuffer(e)
    ? { prisma__type: "bytes", prisma__value: e.toString("base64") }
    : Ym(e) || ArrayBuffer.isView(e)
    ? {
        prisma__type: "bytes",
        prisma__value: w.Buffer.from(e).toString("base64"),
      }
    : typeof e == "object" && t === "slow"
    ? sl(e)
    : e;
}
function Ym(e) {
  return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer
    ? !0
    : typeof e == "object" && e !== null
    ? e[Symbol.toStringTag] === "ArrayBuffer" ||
      e[Symbol.toStringTag] === "SharedArrayBuffer"
    : !1;
}
function sl(e) {
  if (typeof e != "object" || e === null) return e;
  if (typeof e.toJSON == "function") return e.toJSON();
  if (Array.isArray(e)) return e.map(ol);
  let t = {};
  for (let r of Object.keys(e)) t[r] = ol(e[r]);
  return t;
}
function ol(e) {
  return typeof e == "bigint" ? e.toString() : sl(e);
}
var Zm = /^(\s*alter\s)/i,
  al = be("prisma:client");
function Lo(e, t, r, n) {
  if (
    !(e !== "postgresql" && e !== "cockroachdb") &&
    r.length > 0 &&
    Zm.exec(t)
  )
    throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
}
var Bo =
    ({ clientMethod: e, activeProvider: t, activeProviderFlavour: r }) =>
    (n) => {
      r !== void 0 && (t = r);
      let i = "",
        o;
      if (Array.isArray(n)) {
        let [s, ...a] = n;
        (i = s), (o = { values: rn(a || []), __prismaRawParameters__: !0 });
      } else
        switch (t) {
          case "sqlite":
          case "mysql": {
            (i = n.sql),
              (o = { values: rn(n.values), __prismaRawParameters__: !0 });
            break;
          }
          case "cockroachdb":
          case "postgresql":
          case "postgres": {
            (i = n.text),
              (o = { values: rn(n.values), __prismaRawParameters__: !0 });
            break;
          }
          case "sqlserver": {
            (i = nl(n)),
              (o = { values: rn(n.values), __prismaRawParameters__: !0 });
            break;
          }
          default:
            throw new Error(`The ${t} provider does not support ${e}`);
        }
      return (
        o != null && o.values
          ? al(`prisma.${e}(${i}, ${o.values})`)
          : al(`prisma.${e}(${i})`),
        { query: i, parameters: o }
      );
    },
  ul = {
    requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    },
    middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new ke(t, r);
    },
  },
  ll = {
    requestArgsToMiddlewareArgs(e) {
      return [e];
    },
    middlewareArgsToRequestArgs(e) {
      return e[0];
    },
  };
m();
p();
f();
d();
function jo(e) {
  return function (r) {
    let n,
      i = (o = e) => {
        try {
          return o === void 0 || (o == null ? void 0 : o.kind) === "itx"
            ? n != null
              ? n
              : (n = cl(r(o)))
            : cl(r(o));
        } catch (s) {
          return Promise.reject(s);
        }
      };
    return {
      then(o, s) {
        return i().then(o, s);
      },
      catch(o) {
        return i().catch(o);
      },
      finally(o) {
        return i().finally(o);
      },
      requestTransaction(o) {
        let s = i(o);
        return s.requestTransaction ? s.requestTransaction(o) : s;
      },
      [Symbol.toStringTag]: "PrismaPromise",
    };
  };
}
function cl(e) {
  return typeof e.then == "function" ? e : Promise.resolve(e);
}
m();
p();
f();
d();
var pl = {
    isEnabled() {
      return !1;
    },
    getTraceParent() {
      return "00-10-10-00";
    },
    async createEngineSpan() {},
    getActiveContext() {},
    runInChildSpan(e, t) {
      return t();
    },
  },
  Uo = class {
    isEnabled() {
      return this.getGlobalTracingHelper().isEnabled();
    }
    getTraceParent(t) {
      return this.getGlobalTracingHelper().getTraceParent(t);
    }
    createEngineSpan(t) {
      return this.getGlobalTracingHelper().createEngineSpan(t);
    }
    getActiveContext() {
      return this.getGlobalTracingHelper().getActiveContext();
    }
    runInChildSpan(t, r) {
      return this.getGlobalTracingHelper().runInChildSpan(t, r);
    }
    getGlobalTracingHelper() {
      var t, r;
      return (r =
        (t = globalThis.PRISMA_INSTRUMENTATION) == null ? void 0 : t.helper) !=
        null
        ? r
        : pl;
    }
  };
function fl(e) {
  return e.includes("tracing") ? new Uo() : pl;
}
m();
p();
f();
d();
function dl(e, t = () => {}) {
  let r,
    n = new Promise((i) => (r = i));
  return {
    then(i) {
      return --e === 0 && r(t()), i == null ? void 0 : i(n);
    },
  };
}
m();
p();
f();
d();
var Xm = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"],
  ml = Xm;
m();
p();
f();
d();
function gl(e) {
  return typeof e == "string"
    ? e
    : e.reduce(
        (t, r) => {
          let n = typeof r == "string" ? r : r.level;
          return n === "query"
            ? t
            : t && (r === "info" || t === "info")
            ? "info"
            : n;
        },
        void 0,
      );
}
m();
p();
f();
d();
var mi = class {
  constructor() {
    this._middlewares = [];
  }
  use(t) {
    this._middlewares.push(t);
  }
  get(t) {
    return this._middlewares[t];
  }
  has(t) {
    return !!this._middlewares[t];
  }
  length() {
    return this._middlewares.length;
  }
};
m();
p();
f();
d();
var hl = Pe(Yi());
m();
p();
f();
d();
function gi(e) {
  return typeof e.batchRequestIdx == "number";
}
m();
p();
f();
d();
function yi(e) {
  return e === null
    ? e
    : Array.isArray(e)
    ? e.map(yi)
    : typeof e == "object"
    ? eg(e)
      ? tg(e)
      : Zt(e, yi)
    : e;
}
function eg(e) {
  return e !== null && typeof e == "object" && typeof e.$type == "string";
}
function tg({ $type: e, value: t }) {
  switch (e) {
    case "BigInt":
      return BigInt(t);
    case "Bytes":
      return w.Buffer.from(t, "base64");
    case "DateTime":
      return new Date(t);
    case "Decimal":
      return new tt(t);
    case "Json":
      return JSON.parse(t);
    default:
      Rt(t, "Unknown tagged value");
  }
}
m();
p();
f();
d();
function yl(e) {
  if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
  let t = [];
  return (
    e.modelName && t.push(e.modelName),
    e.query.arguments && t.push($o(e.query.arguments)),
    t.push($o(e.query.selection)),
    t.join("")
  );
}
function $o(e) {
  return `(${Object.keys(e)
    .sort()
    .map((r) => {
      let n = e[r];
      return typeof n == "object" && n !== null ? `(${r} ${$o(n)})` : r;
    })
    .join(" ")})`;
}
m();
p();
f();
d();
var rg = {
  aggregate: !1,
  aggregateRaw: !1,
  createMany: !0,
  createOne: !0,
  deleteMany: !0,
  deleteOne: !0,
  executeRaw: !0,
  findFirst: !1,
  findFirstOrThrow: !1,
  findMany: !1,
  findRaw: !1,
  findUnique: !1,
  findUniqueOrThrow: !1,
  groupBy: !1,
  queryRaw: !1,
  runCommandRaw: !0,
  updateMany: !0,
  updateOne: !0,
  upsertOne: !0,
};
function qo(e) {
  return rg[e];
}
m();
p();
f();
d();
var hi = class {
  constructor(t) {
    this.options = t;
    this.tickActive = !1;
    this.batches = {};
  }
  request(t) {
    let r = this.options.batchBy(t);
    return r
      ? (this.batches[r] ||
          ((this.batches[r] = []),
          this.tickActive ||
            ((this.tickActive = !0),
            h.nextTick(() => {
              this.dispatchBatches(), (this.tickActive = !1);
            }))),
        new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        }))
      : this.options.singleLoader(t);
  }
  dispatchBatches() {
    for (let t in this.batches) {
      let r = this.batches[t];
      delete this.batches[t],
        r.length === 1
          ? this.options
              .singleLoader(r[0].request)
              .then((n) => {
                n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
              })
              .catch((n) => {
                r[0].reject(n);
              })
          : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)),
            this.options
              .batchLoader(r.map((n) => n.request))
              .then((n) => {
                if (n instanceof Error)
                  for (let i = 0; i < r.length; i++) r[i].reject(n);
                else
                  for (let i = 0; i < r.length; i++) {
                    let o = n[i];
                    o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
                  }
              })
              .catch((n) => {
                for (let i = 0; i < r.length; i++) r[i].reject(n);
              }));
    }
  }
  get [Symbol.toStringTag]() {
    return "DataLoader";
  }
};
var ng = be("prisma:client:request_handler"),
  bi = class {
    constructor(t, r) {
      (this.logEmitter = r),
        (this.client = t),
        (this.dataloader = new hi({
          batchLoader: yu(async ({ requests: n, customDataProxyFetch: i }) => {
            let { transaction: o, otelParentCtx: s } = n[0],
              a = n.map((g) => g.protocolQuery),
              u = this.client._tracingHelper.getTraceParent(s),
              l = n.some((g) => qo(g.protocolQuery.action));
            return (
              await this.client._engine.requestBatch(a, {
                traceparent: u,
                transaction: ig(o),
                containsWrite: l,
                customDataProxyFetch: i,
              })
            ).map((g, y) => {
              if (g instanceof Error) return g;
              try {
                return this.mapQueryEngineResult(n[y], g);
              } catch (P) {
                return P;
              }
            });
          }),
          singleLoader: async (n) => {
            var s;
            let i =
                ((s = n.transaction) == null ? void 0 : s.kind) === "itx"
                  ? bl(n.transaction)
                  : void 0,
              o = await this.client._engine.request(n.protocolQuery, {
                traceparent: this.client._tracingHelper.getTraceParent(),
                interactiveTransaction: i,
                isWrite: qo(n.protocolQuery.action),
                customDataProxyFetch: n.customDataProxyFetch,
              });
            return this.mapQueryEngineResult(n, o);
          },
          batchBy: (n) => {
            var i;
            return (i = n.transaction) != null && i.id
              ? `transaction-${n.transaction.id}`
              : yl(n.protocolQuery);
          },
          batchOrder(n, i) {
            var o, s;
            return ((o = n.transaction) == null ? void 0 : o.kind) ===
              "batch" &&
              ((s = i.transaction) == null ? void 0 : s.kind) === "batch"
              ? n.transaction.index - i.transaction.index
              : 0;
          },
        }));
    }
    async request(t) {
      try {
        return await this.dataloader.request(t);
      } catch (r) {
        let { clientMethod: n, callsite: i, transaction: o, args: s } = t;
        this.handleAndLogRequestError({
          error: r,
          clientMethod: n,
          callsite: i,
          transaction: o,
          args: s,
        });
      }
    }
    mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
      let i = n == null ? void 0 : n.data,
        o = n == null ? void 0 : n.elapsed,
        s = this.unpack(i, t, r);
      return h.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o } : s;
    }
    handleAndLogRequestError(t) {
      try {
        this.handleRequestError(t);
      } catch (r) {
        throw (
          (this.logEmitter &&
            this.logEmitter.emit("error", {
              message: r.message,
              target: t.clientMethod,
              timestamp: new Date(),
            }),
          r)
        );
      }
    }
    handleRequestError({
      error: t,
      clientMethod: r,
      callsite: n,
      transaction: i,
      args: o,
    }) {
      if ((ng(t), og(t, i) || t instanceof dt)) throw t;
      if (t instanceof me && sg(t)) {
        let a = wl(t.meta);
        di({
          args: o,
          errors: [a],
          callsite: n,
          errorFormat: this.client._errorFormat,
          originalMethod: r,
          clientVersion: this.client._clientVersion,
        });
      }
      let s = t.message;
      throw (
        (n &&
          (s = ur({
            callsite: n,
            originalMethod: r,
            isPanic: t.isPanic,
            showColors: this.client._errorFormat === "pretty",
            message: s,
          })),
        (s = this.sanitizeMessage(s)),
        t.code
          ? new me(s, {
              code: t.code,
              clientVersion: this.client._clientVersion,
              meta: t.meta,
              batchRequestIdx: t.batchRequestIdx,
            })
          : t.isPanic
          ? new Le(s, this.client._clientVersion)
          : t instanceof ge
          ? new ge(s, {
              clientVersion: this.client._clientVersion,
              batchRequestIdx: t.batchRequestIdx,
            })
          : t instanceof Y
          ? new Y(s, this.client._clientVersion)
          : t instanceof Le
          ? new Le(s, this.client._clientVersion)
          : ((t.clientVersion = this.client._clientVersion), t))
      );
    }
    sanitizeMessage(t) {
      return this.client._errorFormat && this.client._errorFormat !== "pretty"
        ? (0, hl.default)(t)
        : t;
    }
    unpack(t, r, n) {
      if (!t || (t.data && (t = t.data), !t)) return t;
      let i = Object.values(t)[0],
        o = r.filter((a) => a !== "select" && a !== "include"),
        s = yi(ho(i, o));
      return n ? n(s) : s;
    }
    get [Symbol.toStringTag]() {
      return "RequestHandler";
    }
  };
function ig(e) {
  if (e) {
    if (e.kind === "batch")
      return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
    if (e.kind === "itx") return { kind: "itx", options: bl(e) };
    Rt(e, "Unknown transaction kind");
  }
}
function bl(e) {
  return { id: e.id, payload: e.payload };
}
function og(e, t) {
  return (
    gi(e) &&
    (t == null ? void 0 : t.kind) === "batch" &&
    e.batchRequestIdx !== t.index
  );
}
function sg(e) {
  return e.code === "P2009" || e.code === "P2012";
}
function wl(e) {
  if (e.kind === "Union") return { kind: "Union", errors: e.errors.map(wl) };
  if (Array.isArray(e.selectionPath)) {
    let [, ...t] = e.selectionPath;
    return { ...e, selectionPath: t };
  }
  return e;
}
m();
p();
f();
d();
var xl = "5.6.0";
var El = xl;
m();
p();
f();
d();
function Pl(e) {
  return e.map((t) => {
    let r = {};
    for (let n of Object.keys(t)) r[n] = vl(t[n]);
    return r;
  });
}
function vl({ prisma__type: e, prisma__value: t }) {
  switch (e) {
    case "bigint":
      return BigInt(t);
    case "bytes":
      return w.Buffer.from(t, "base64");
    case "decimal":
      return new tt(t);
    case "datetime":
    case "date":
      return new Date(t);
    case "time":
      return new Date(`1970-01-01T${t}Z`);
    case "array":
      return t.map(vl);
    default:
      return t;
  }
}
m();
p();
f();
d();
var _l = Pe(Fo());
m();
p();
f();
d();
var Z = class extends Error {
  constructor(t) {
    super(
      t +
        `
Read more at https://pris.ly/d/client-constructor`,
    ),
      (this.name = "PrismaClientConstructorValidationError");
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientConstructorValidationError";
  }
};
N(Z, "PrismaClientConstructorValidationError");
var Tl = [
    "datasources",
    "datasourceUrl",
    "errorFormat",
    "adapter",
    "log",
    "__internal",
  ],
  Al = ["pretty", "colorless", "minimal"],
  Cl = ["info", "query", "warn", "error"],
  ug = {
    datasources: (e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e))
          throw new Z(
            `Invalid value ${JSON.stringify(
              e,
            )} for "datasources" provided to PrismaClient constructor`,
          );
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = mr(r, t) || ` Available datasources: ${t.join(", ")}`;
            throw new Z(
              `Unknown datasource ${r} provided to PrismaClient constructor.${i}`,
            );
          }
          if (typeof n != "object" || Array.isArray(n))
            throw new Z(`Invalid value ${JSON.stringify(
              e,
            )} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object")
            for (let [i, o] of Object.entries(n)) {
              if (i !== "url")
                throw new Z(`Invalid value ${JSON.stringify(
                  e,
                )} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof o != "string")
                throw new Z(`Invalid value ${JSON.stringify(
                  o,
                )} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    },
    adapter: (e, t) => {
      if (e === null) return;
      if (e === void 0)
        throw new Z(
          '"adapter" property must not be undefined, use null to conditionally disable driver adapters.',
        );
      if (!ui(t).includes("driverAdapters"))
        throw new Z(
          '"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.',
        );
      if (Mt() === "binary")
        throw new Z(
          'Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.',
        );
    },
    datasourceUrl: (e) => {
      if (typeof e != "undefined" && typeof e != "string")
        throw new Z(`Invalid value ${JSON.stringify(
          e,
        )} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    },
    errorFormat: (e) => {
      if (e) {
        if (typeof e != "string")
          throw new Z(
            `Invalid value ${JSON.stringify(
              e,
            )} for "errorFormat" provided to PrismaClient constructor.`,
          );
        if (!Al.includes(e)) {
          let t = mr(e, Al);
          throw new Z(
            `Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`,
          );
        }
      }
    },
    log: (e) => {
      if (!e) return;
      if (!Array.isArray(e))
        throw new Z(
          `Invalid value ${JSON.stringify(
            e,
          )} for "log" provided to PrismaClient constructor.`,
        );
      function t(r) {
        if (typeof r == "string" && !Cl.includes(r)) {
          let n = mr(r, Cl);
          throw new Z(
            `Invalid log level "${r}" provided to PrismaClient constructor.${n}`,
          );
        }
      }
      for (let r of e) {
        t(r);
        let n = {
          level: t,
          emit: (i) => {
            let o = ["stdout", "event"];
            if (!o.includes(i)) {
              let s = mr(i, o);
              throw new Z(
                `Invalid value ${JSON.stringify(
                  i,
                )} for "emit" in logLevel provided to PrismaClient constructor.${s}`,
              );
            }
          },
        };
        if (r && typeof r == "object")
          for (let [i, o] of Object.entries(r))
            if (n[i]) n[i](o);
            else
              throw new Z(
                `Invalid property ${i} for "log" provided to PrismaClient constructor`,
              );
      }
    },
    __internal: (e) => {
      if (!e) return;
      let t = ["debug", "hooks", "engine", "measurePerformance"];
      if (typeof e != "object")
        throw new Z(
          `Invalid value ${JSON.stringify(
            e,
          )} for "__internal" to PrismaClient constructor`,
        );
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = mr(r, t);
          throw new Z(
            `Invalid property ${JSON.stringify(
              r,
            )} for "__internal" provided to PrismaClient constructor.${n}`,
          );
        }
    },
  };
function Sl(e, t) {
  for (let [r, n] of Object.entries(e)) {
    if (!Tl.includes(r)) {
      let i = mr(r, Tl);
      throw new Z(
        `Unknown property ${r} provided to PrismaClient constructor.${i}`,
      );
    }
    ug[r](n, t);
  }
  if (e.datasourceUrl && e.datasources)
    throw new Z(
      'Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them',
    );
}
function mr(e, t) {
  if (t.length === 0 || typeof e != "string") return "";
  let r = lg(e, t);
  return r ? ` Did you mean "${r}"?` : "";
}
function lg(e, t) {
  if (t.length === 0) return null;
  let r = t.map((i) => ({ value: i, distance: (0, _l.default)(e, i) }));
  r.sort((i, o) => (i.distance < o.distance ? -1 : 1));
  let n = r[0];
  return n.distance < 3 ? n.value : null;
}
m();
p();
f();
d();
function Ml(e) {
  return e.length === 0
    ? Promise.resolve([])
    : new Promise((t, r) => {
        let n = new Array(e.length),
          i = null,
          o = !1,
          s = 0,
          a = () => {
            o || (s++, s === e.length && ((o = !0), i ? r(i) : t(n)));
          },
          u = (l) => {
            o || ((o = !0), r(l));
          };
        for (let l = 0; l < e.length; l++)
          e[l].then(
            (c) => {
              (n[l] = c), a();
            },
            (c) => {
              if (!gi(c)) {
                u(c);
                return;
              }
              c.batchRequestIdx === l ? u(c) : (i || (i = c), a());
            },
          );
      });
}
var Et = be("prisma:client");
typeof globalThis == "object" && (globalThis.NODE_CLIENT = !0);
var cg = {
    requestArgsToMiddlewareArgs: (e) => e,
    middlewareArgsToRequestArgs: (e) => e,
  },
  pg = Symbol.for("prisma.client.transaction.id"),
  fg = {
    id: 0,
    nextId() {
      return ++this.id;
    },
  };
function dg(e) {
  class t {
    constructor(n) {
      this._middlewares = new mi();
      this._createPrismaPromise = jo();
      this.$extends = uu;
      var u, l, c, g, y, P;
      Tu(e), n && Sl(n, e);
      let i = n != null && n.adapter ? so(n.adapter) : void 0,
        o = new Ol.EventEmitter().on("error", () => {});
      (this._extensions = Zn.empty()),
        (this._previewFeatures = ui(e)),
        (this._clientVersion = (u = e.clientVersion) != null ? u : El),
        (this._activeProvider = e.activeProvider),
        (this._tracingHelper = fl(this._previewFeatures));
      let s = {
          rootEnvPath:
            e.relativeEnvPaths.rootEnvPath &&
            nn.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath),
          schemaEnvPath:
            e.relativeEnvPaths.schemaEnvPath &&
            nn.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath),
        },
        a = (l = e.injectableEdgeEnv) == null ? void 0 : l.call(e);
      try {
        let v = n != null ? n : {},
          E = (c = v.__internal) != null ? c : {},
          A = E.debug === !0;
        A && be.enable("prisma:client");
        let M = nn.default.resolve(e.dirname, e.relativePath);
        An.existsSync(M) || (M = e.dirname),
          Et("dirname", e.dirname),
          Et("relativePath", e.relativePath),
          Et("cwd", M);
        let O = E.engine || {};
        if (
          (v.errorFormat
            ? (this._errorFormat = v.errorFormat)
            : h.env.NODE_ENV === "production"
            ? (this._errorFormat = "minimal")
            : h.env.NO_COLOR
            ? (this._errorFormat = "colorless")
            : (this._errorFormat = "colorless"),
          (this._runtimeDataModel = e.runtimeDataModel),
          (this._engineConfig = {
            cwd: M,
            dirname: e.dirname,
            enableDebugLogs: A,
            allowTriggerPanic: O.allowTriggerPanic,
            datamodelPath: nn.default.join(
              e.dirname,
              (g = e.filename) != null ? g : "schema.prisma",
            ),
            prismaPath: (y = O.binaryPath) != null ? y : void 0,
            engineEndpoint: O.endpoint,
            generator: e.generator,
            showColors: this._errorFormat === "pretty",
            logLevel: v.log && gl(v.log),
            logQueries:
              v.log &&
              !!(typeof v.log == "string"
                ? v.log === "query"
                : v.log.find((S) =>
                    typeof S == "string" ? S === "query" : S.level === "query",
                  )),
            env: (P = a == null ? void 0 : a.parsed) != null ? P : {},
            flags: [],
            getQueryEngineWasmModule: e.getQueryEngineWasmModule,
            clientVersion: e.clientVersion,
            engineVersion: e.engineVersion,
            previewFeatures: this._previewFeatures,
            activeProvider: e.activeProvider,
            inlineSchema: e.inlineSchema,
            overrideDatasources: Au(v, e.datasourceNames),
            inlineDatasources: e.inlineDatasources,
            inlineSchemaHash: e.inlineSchemaHash,
            tracingHelper: this._tracingHelper,
            logEmitter: o,
            isBundled: e.isBundled,
            adapter: i,
          }),
          Et("clientVersion", e.clientVersion),
          (this._engine = qu(e, this._engineConfig)),
          (this._requestHandler = new bi(this, o)),
          v.log)
        )
          for (let S of v.log) {
            let R =
              typeof S == "string" ? S : S.emit === "stdout" ? S.level : null;
            R &&
              this.$on(R, (j) => {
                var U;
                Yt.log(
                  `${(U = Yt.tags[R]) != null ? U : ""}`,
                  j.message || j.query,
                );
              });
          }
        this._metrics = new Tr(this._engine);
      } catch (v) {
        throw ((v.clientVersion = this._clientVersion), v);
      }
      return (this._appliedParent = Nr(this));
    }
    get [Symbol.toStringTag]() {
      return "PrismaClient";
    }
    $use(n) {
      this._middlewares.use(n);
    }
    $on(n, i) {
      n === "beforeExit"
        ? this._engine.on("beforeExit", i)
        : this._engine.on(n, (o) => {
            var a, u, l, c;
            let s = o.fields;
            return i(
              n === "query"
                ? {
                    timestamp: o.timestamp,
                    query:
                      (a = s == null ? void 0 : s.query) != null ? a : o.query,
                    params:
                      (u = s == null ? void 0 : s.params) != null
                        ? u
                        : o.params,
                    duration:
                      (l = s == null ? void 0 : s.duration_ms) != null
                        ? l
                        : o.duration,
                    target: o.target,
                  }
                : {
                    timestamp: o.timestamp,
                    message:
                      (c = s == null ? void 0 : s.message) != null
                        ? c
                        : o.message,
                    target: o.target,
                  },
            );
          });
    }
    $connect() {
      try {
        return this._engine.start();
      } catch (n) {
        throw ((n.clientVersion = this._clientVersion), n);
      }
    }
    async $disconnect() {
      try {
        await this._engine.stop();
      } catch (n) {
        throw ((n.clientVersion = this._clientVersion), n);
      } finally {
        Ys();
      }
    }
    $executeRawInternal(n, i, o, s) {
      var l;
      let a = this._activeProvider,
        u = (l = this._engineConfig.adapter) == null ? void 0 : l.flavour;
      return this._request({
        action: "executeRaw",
        args: o,
        transaction: n,
        clientMethod: i,
        argsMapper: Bo({
          clientMethod: i,
          activeProvider: a,
          activeProviderFlavour: u,
        }),
        callsite: xt(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      });
    }
    $executeRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0) {
          let [s, a] = Rl(n, i);
          return (
            Lo(
              this._activeProvider,
              s.text,
              s.values,
              Array.isArray(n)
                ? "prisma.$executeRaw`<SQL>`"
                : "prisma.$executeRaw(sql`<SQL>`)",
            ),
            this.$executeRawInternal(o, "$executeRaw", s, a)
          );
        }
        throw new Te(
          "`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n",
          { clientVersion: this._clientVersion },
        );
      });
    }
    $executeRawUnsafe(n, ...i) {
      return this._createPrismaPromise(
        (o) => (
          Lo(
            this._activeProvider,
            n,
            i,
            "prisma.$executeRawUnsafe(<SQL>, [...values])",
          ),
          this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])
        ),
      );
    }
    $runCommandRaw(n) {
      if (e.activeProvider !== "mongodb")
        throw new Te(
          `The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,
          { clientVersion: this._clientVersion },
        );
      return this._createPrismaPromise((i) =>
        this._request({
          args: n,
          clientMethod: "$runCommandRaw",
          dataPath: [],
          action: "runCommandRaw",
          argsMapper: rl,
          callsite: xt(this._errorFormat),
          transaction: i,
        }),
      );
    }
    async $queryRawInternal(n, i, o, s) {
      var l;
      let a = this._activeProvider,
        u = (l = this._engineConfig.adapter) == null ? void 0 : l.flavour;
      return this._request({
        action: "queryRaw",
        args: o,
        transaction: n,
        clientMethod: i,
        argsMapper: Bo({
          clientMethod: i,
          activeProvider: a,
          activeProviderFlavour: u,
        }),
        callsite: xt(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      }).then(Pl);
    }
    $queryRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0)
          return this.$queryRawInternal(o, "$queryRaw", ...Rl(n, i));
        throw new Te(
          "`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n",
          { clientVersion: this._clientVersion },
        );
      });
    }
    $queryRawUnsafe(n, ...i) {
      return this._createPrismaPromise((o) =>
        this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]),
      );
    }
    _transactionWithArray({ promises: n, options: i }) {
      let o = fg.nextId(),
        s = dl(n.length),
        a = n.map((u, l) => {
          var y, P;
          if ((u == null ? void 0 : u[Symbol.toStringTag]) !== "PrismaPromise")
            throw new Error(
              "All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.",
            );
          let c = i == null ? void 0 : i.isolationLevel,
            g = { kind: "batch", id: o, index: l, isolationLevel: c, lock: s };
          return (P =
            (y = u.requestTransaction) == null ? void 0 : y.call(u, g)) != null
            ? P
            : u;
        });
      return Ml(a);
    }
    async _transactionWithCallback({ callback: n, options: i }) {
      let o = { traceparent: this._tracingHelper.getTraceParent() },
        s = await this._engine.transaction("start", o, i),
        a;
      try {
        let u = { kind: "itx", ...s };
        (a = await n(this._createItxClient(u))),
          await this._engine.transaction("commit", o, s);
      } catch (u) {
        throw (
          (await this._engine.transaction("rollback", o, s).catch(() => {}), u)
        );
      }
      return a;
    }
    _createItxClient(n) {
      return Nr(
        Je(Hn(this), [
          Ae("_appliedParent", () => this._appliedParent._createItxClient(n)),
          Ae("_createPrismaPromise", () => jo(n)),
          Ae(pg, () => n.id),
          Ir(ml),
        ]),
      );
    }
    $transaction(n, i) {
      let o;
      typeof n == "function"
        ? (o = () => this._transactionWithCallback({ callback: n, options: i }))
        : (o = () => this._transactionWithArray({ promises: n, options: i }));
      let s = { name: "transaction", attributes: { method: "$transaction" } };
      return this._tracingHelper.runInChildSpan(s, o);
    }
    _request(n) {
      var l;
      n.otelParentCtx = this._tracingHelper.getActiveContext();
      let i = (l = n.middlewareArgsMapper) != null ? l : cg,
        o = {
          args: i.requestArgsToMiddlewareArgs(n.args),
          dataPath: n.dataPath,
          runInTransaction: !!n.transaction,
          action: n.action,
          model: n.model,
        },
        s = {
          middleware: {
            name: "middleware",
            middleware: !0,
            attributes: { method: "$use" },
            active: !1,
          },
          operation: {
            name: "operation",
            attributes: {
              method: o.action,
              model: o.model,
              name: o.model ? `${o.model}.${o.action}` : o.action,
            },
          },
        },
        a = -1,
        u = async (c) => {
          let g = this._middlewares.get(++a);
          if (g)
            return this._tracingHelper.runInChildSpan(s.middleware, (M) =>
              g(c, (O) => (M == null || M.end(), u(O))),
            );
          let { runInTransaction: y, args: P, ...v } = c,
            E = { ...n, ...v };
          P && (E.args = i.middlewareArgsToRequestArgs(P)),
            n.transaction !== void 0 && y === !1 && delete E.transaction;
          let A = await gu(this, E);
          return E.model
            ? pu({
                result: A,
                modelName: E.model,
                args: E.args,
                extensions: this._extensions,
                runtimeDataModel: this._runtimeDataModel,
              })
            : A;
        };
      return this._tracingHelper.runInChildSpan(s.operation, () => u(o));
    }
    async _executeRequest({
      args: n,
      clientMethod: i,
      dataPath: o,
      callsite: s,
      action: a,
      model: u,
      argsMapper: l,
      transaction: c,
      unpacker: g,
      otelParentCtx: y,
      customDataProxyFetch: P,
    }) {
      try {
        n = l ? l(n) : n;
        let v = { name: "serialize" },
          E = this._tracingHelper.runInChildSpan(v, () =>
            Xu({
              modelName: u,
              runtimeDataModel: this._runtimeDataModel,
              action: a,
              args: n,
              clientMethod: i,
              callsite: s,
              extensions: this._extensions,
              errorFormat: this._errorFormat,
              clientVersion: this._clientVersion,
            }),
          );
        return (
          be.enabled("prisma:client") &&
            (Et("Prisma Client call:"),
            Et(`prisma.${i}(${Qa(n)})`),
            Et("Generated request:"),
            Et(
              JSON.stringify(E, null, 2) +
                `
`,
            )),
          (c == null ? void 0 : c.kind) === "batch" && (await c.lock),
          this._requestHandler.request({
            protocolQuery: E,
            modelName: u,
            action: a,
            clientMethod: i,
            dataPath: o,
            callsite: s,
            args: n,
            extensions: this._extensions,
            transaction: c,
            unpacker: g,
            otelParentCtx: y,
            otelChildCtx: this._tracingHelper.getActiveContext(),
            customDataProxyFetch: P,
          })
        );
      } catch (v) {
        throw ((v.clientVersion = this._clientVersion), v);
      }
    }
    get $metrics() {
      if (!this._hasPreviewFlag("metrics"))
        throw new Te(
          "`metrics` preview feature must be enabled in order to access metrics API",
          { clientVersion: this._clientVersion },
        );
      return this._metrics;
    }
    _hasPreviewFlag(n) {
      var i;
      return !!(
        (i = this._engineConfig.previewFeatures) != null && i.includes(n)
      );
    }
  }
  return t;
}
function Rl(e, t) {
  return mg(e) ? [new ke(e, t), ul] : [e, ll];
}
function mg(e) {
  return Array.isArray(e) && Array.isArray(e.raw);
}
m();
p();
f();
d();
var gg = new Set([
  "toJSON",
  "$$typeof",
  "asymmetricMatch",
  Symbol.iterator,
  Symbol.toStringTag,
  Symbol.isConcatSpreadable,
  Symbol.toPrimitive,
]);
function yg(e) {
  return new Proxy(e, {
    get(t, r) {
      if (r in t) return t[r];
      if (!gg.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
    },
  });
}
m();
p();
f();
d();
var export_warnEnvConflicts = void 0;
export {
  Be as DMMF,
  Mi as DMMFClass,
  Hs as Debug,
  tt as Decimal,
  gs as Extensions,
  Tr as MetricsClient,
  dt as NotFoundError,
  Xe as ObjectEnumValue,
  Y as PrismaClientInitializationError,
  me as PrismaClientKnownRequestError,
  Le as PrismaClientRustPanicError,
  ge as PrismaClientUnknownRequestError,
  Te as PrismaClientValidationError,
  hs as Public,
  ke as Sql,
  Ps as Types,
  Mp as defineDmmfProperty,
  Fp as empty,
  dg as getPrismaClient,
  ml as itxClientDenyList,
  kp as join,
  yg as makeStrictEnum,
  $x as objectEnumNames,
  no as objectEnumValues,
  Pa as raw,
  va as sqltag,
  export_warnEnvConflicts as warnEnvConflicts,
  Mn as warnOnce,
};
//# sourceMappingURL=edge-esm.js.map
