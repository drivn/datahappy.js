!(function () {
  function e(e) {
    return e && e.__esModule ? e.default : e;
  }
  function t(e, t, r, n) {
    Object.defineProperty(e, t, {
      get: r,
      set: n,
      enumerable: !0,
      configurable: !0,
    });
  }
  var r = {};
  function n(e, t, r, n, o) {
    var i = {};
    Object.keys(n).forEach(function (e) {
      i[e] = n[e];
    }),
      (i.enumerable = !!i.enumerable),
      (i.configurable = !!i.configurable),
      ("value" in i || i.initializer) && (i.writable = !0),
      (i = r
        .slice()
        .reverse()
        .reduce(function (r, n) {
          return (n && n(e, t, r)) || r;
        }, i));
    var a =
      Object.prototype.hasOwnProperty.call(i, "get") ||
      Object.prototype.hasOwnProperty.call(i, "set");
    return (
      o &&
        void 0 !== i.initializer &&
        !a &&
        ((i.value = i.initializer ? i.initializer.call(o) : void 0),
        (i.initializer = void 0)),
      a && (delete i.writable, delete i.initializer, delete i.value),
      void 0 === i.initializer && (Object.defineProperty(e, t, i), (i = null)),
      i
    );
  }
  function o(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function a(e) {
    if (Array.isArray(e)) return e;
  }
  function c(e) {
    if (Array.isArray(e)) return o(e);
  }
  function u(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function s(e) {
    this.wrapped = e;
  }
  function f(e) {
    var t, r;
    function n(t, r) {
      try {
        var i = e[t](r),
          a = i.value,
          c = a instanceof s;
        Promise.resolve(c ? a.wrapped : a).then(
          function (e) {
            c ? n("next", e) : o(i.done ? "return" : "normal", e);
          },
          function (e) {
            n("throw", e);
          }
        );
      } catch (e) {
        o("throw", e);
      }
    }
    function o(e, o) {
      switch (e) {
        case "return":
          t.resolve({ value: o, done: !0 });
          break;
        case "throw":
          t.reject(o);
          break;
        default:
          t.resolve({ value: o, done: !1 });
      }
      (t = t.next) ? n(t.key, t.arg) : (r = null);
    }
    (this._invoke = function (e, o) {
      return new Promise(function (i, a) {
        var c = { key: e, arg: o, resolve: i, reject: a, next: null };
        r ? (r = r.next = c) : ((t = r = c), n(e, o));
      });
    }),
      "function" != typeof e.return && (this.return = void 0);
  }
  function l(e, t) {
    var r = {},
      n = !1;
    function o(r, o) {
      return (
        (n = !0),
        (o = new Promise(function (t) {
          t(e[r](o));
        })),
        { done: !1, value: t(o) }
      );
    }
    return (
      "function" == typeof Symbol &&
        Symbol.iterator &&
        (r[Symbol.iterator] = function () {
          return this;
        }),
      (r.next = function (e) {
        return n ? ((n = !1), e) : o("next", e);
      }),
      "function" == typeof e.throw &&
        (r.throw = function (e) {
          if (n) throw ((n = !1), e);
          return o("throw", e);
        }),
      "function" == typeof e.return &&
        (r.return = function (e) {
          return o("return", e);
        }),
      r
    );
  }
  function p(e) {
    var t;
    if ("function" == typeof Symbol) {
      if (Symbol.asyncIterator && null != (t = e[Symbol.asyncIterator]))
        return t.call(e);
      if (Symbol.iterator && null != (t = e[Symbol.iterator])) return t.call(e);
    }
    throw new TypeError("Object is not async iterable");
  }
  function d(e, t, r, n, o, i, a) {
    try {
      var c = e[i](a),
        u = c.value;
    } catch (e) {
      return void r(e);
    }
    c.done ? t(u) : Promise.resolve(u).then(n, o);
  }
  function h(e) {
    return function () {
      var t = this,
        r = arguments;
      return new Promise(function (n, o) {
        var i = e.apply(t, r);
        function a(e) {
          d(i, n, o, a, c, "next", e);
        }
        function c(e) {
          d(i, n, o, a, c, "throw", e);
        }
        a(void 0);
      });
    };
  }
  function y(e) {
    return new s(e);
  }
  function v(e, t) {
    if (t.has(e))
      throw new TypeError(
        "Cannot initialize the same private elements twice on an object"
      );
  }
  function m(e, t) {
    if (t.set)
      return (
        "__destrObj" in t ||
          (t.__destrObj = {
            set value(r) {
              t.set.call(e, r);
            },
          }),
        t.__destrObj
      );
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    return t;
  }
  function b(e, t) {
    return t.get ? t.get.call(e) : t.value;
  }
  function g(e, t, r) {
    if (t.set) t.set.call(e, r);
    else {
      if (!t.writable)
        throw new TypeError("attempted to set read only private field");
      t.value = r;
    }
  }
  function w(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function k(e, t) {
    if (void 0 === e)
      throw new TypeError(
        "attempted to " + t + " private static field before its declaration"
      );
  }
  function S(e, t) {
    if (e !== t)
      throw new TypeError("Private static access of wrong provenance");
  }
  function _(e) {
    throw new Error(
      'Class "' + e + '" cannot be referenced in computed property keys.'
    );
  }
  function O(e, t, r) {
    if (!t.has(e))
      throw new TypeError(
        "attempted to " + r + " private field on non-instance"
      );
    return t.get(e);
  }
  function x(e, t) {
    return m(e, O(e, t, "set"));
  }
  function P(e, t) {
    return b(e, O(e, t, "get"));
  }
  function T(e, t, r) {
    v(e, t), t.set(e, r);
  }
  function E(e, t) {
    if (!Object.prototype.hasOwnProperty.call(e, t))
      throw new TypeError("attempted to use private field on non-instance");
    return e;
  }
  t(r, "applyDecoratedDescriptor", function () {
    return n;
  }),
    t(r, "arrayLikeToArray", function () {
      return o;
    }),
    t(r, "arrayWithHoles", function () {
      return a;
    }),
    t(r, "arrayWithoutHoles", function () {
      return c;
    }),
    t(r, "assertThisInitialized", function () {
      return u;
    }),
    t(r, "asyncGenerator", function () {
      return f;
    }),
    t(r, "asyncGeneratorDelegate", function () {
      return l;
    }),
    t(r, "asyncIterator", function () {
      return p;
    }),
    t(r, "asyncToGenerator", function () {
      return h;
    }),
    t(r, "awaitAsyncGenerator", function () {
      return y;
    }),
    t(r, "awaitValue", function () {
      return s;
    }),
    t(r, "checkPrivateRedeclaration", function () {
      return v;
    }),
    t(r, "classApplyDescriptorDestructureSet", function () {
      return m;
    }),
    t(r, "classApplyDescriptorGet", function () {
      return b;
    }),
    t(r, "classApplyDescriptorSet", function () {
      return g;
    }),
    t(r, "classCallCheck", function () {
      return w;
    }),
    t(r, "classCheckPrivateStaticFieldDescriptor", function () {
      return k;
    }),
    t(r, "classCheckPrivateStaticAccess", function () {
      return S;
    }),
    t(r, "classNameTDZError", function () {
      return _;
    }),
    t(r, "classPrivateFieldDestructureSet", function () {
      return x;
    }),
    t(r, "classPrivateFieldGet", function () {
      return P;
    }),
    t(r, "classPrivateFieldInit", function () {
      return T;
    }),
    t(r, "classPrivateFieldLooseBase", function () {
      return E;
    }),
    t(r, "classPrivateFieldLooseKey", function () {
      return j;
    }),
    t(r, "classPrivateFieldSet", function () {
      return R;
    }),
    t(r, "classPrivateMethodGet", function () {
      return L;
    }),
    t(r, "classPrivateMethodInit", function () {
      return C;
    }),
    t(r, "classPrivateMethodSet", function () {
      return D;
    }),
    t(r, "classStaticPrivateFieldDestructureSet", function () {
      return N;
    }),
    t(r, "classStaticPrivateFieldSpecGet", function () {
      return U;
    }),
    t(r, "classStaticPrivateFieldSpecSet", function () {
      return F;
    }),
    t(r, "construct", function () {
      return q;
    }),
    t(r, "createClass", function () {
      return H;
    }),
    t(r, "createSuper", function () {
      return Z;
    }),
    t(r, "decorate", function () {
      return oe;
    }),
    t(r, "defaults", function () {
      return ge;
    }),
    t(r, "defineEnumerableProperties", function () {
      return we;
    }),
    t(r, "defineProperty", function () {
      return ke;
    }),
    t(r, "extends", function () {
      return _e;
    }),
    t(r, "get", function () {
      return Pe;
    }),
    t(r, "getPrototypeOf", function () {
      return $;
    }),
    t(r, "inherits", function () {
      return Te;
    }),
    t(r, "inheritsLoose", function () {
      return Ee;
    }),
    t(r, "initializerDefineProperty", function () {
      return Ae;
    }),
    t(r, "initializerWarningHelper", function () {
      return Ie;
    }),
    t(r, "_instanceof", function () {
      return je;
    }),
    t(r, "interopRequireDefault", function () {
      return Re;
    }),
    t(r, "interopRequireWildcard", function () {
      return Ce;
    }),
    t(r, "isNativeFunction", function () {
      return De;
    }),
    t(r, "isNativeReflectConstruct", function () {
      return W;
    }),
    t(r, "iterableToArray", function () {
      return Q;
    }),
    t(r, "iterableToArrayLimit", function () {
      return Ne;
    }),
    t(r, "iterableToArrayLimitLoose", function () {
      return Ue;
    }),
    t(r, "jsx", function () {
      return Fe;
    }),
    t(r, "newArrowCheck", function () {
      return Ge;
    }),
    t(r, "nonIterableRest", function () {
      return X;
    }),
    t(r, "nonIterableSpread", function () {
      return ze;
    }),
    t(r, "objectSpread", function () {
      return Me;
    }),
    t(r, "objectWithoutProperties", function () {
      return qe;
    }),
    t(r, "objectWithoutPropertiesLoose", function () {
      return Be;
    }),
    t(r, "possibleConstructorReturn", function () {
      return Y;
    }),
    t(r, "readOnlyError", function () {
      return Ve;
    }),
    t(r, "set", function () {
      return We;
    }),
    t(r, "setPrototypeOf", function () {
      return z;
    }),
    t(r, "skipFirstGeneratorNext", function () {
      return Je;
    }),
    t(r, "slicedToArray", function () {
      return $e;
    }),
    t(r, "slicedToArrayLoose", function () {
      return Ke;
    }),
    t(r, "superPropBase", function () {
      return Oe;
    }),
    t(r, "taggedTemplateLiteral", function () {
      return Ye;
    }),
    t(r, "taggedTemplateLiteralLoose", function () {
      return Ze;
    }),
    t(r, "_throw", function () {
      return Qe;
    }),
    t(r, "toArray", function () {
      return te;
    }),
    t(r, "toConsumableArray", function () {
      return Xe;
    }),
    t(r, "toPrimitive", function () {
      return re;
    }),
    t(r, "toPropertyKey", function () {
      return ne;
    }),
    t(r, "typeOf", function () {
      return K;
    }),
    t(r, "unsupportedIterableToArray", function () {
      return ee;
    }),
    t(r, "wrapAsyncGenerator", function () {
      return et;
    }),
    t(r, "wrapNativeSuper", function () {
      return rt;
    }),
    t(r, "__decorate", function () {
      return nt;
    }),
    t(r, "__metadata", function () {
      return it;
    }),
    t(r, "__param", function () {
      return ot;
    }),
    "function" == typeof Symbol &&
      Symbol.asyncIterator &&
      (f.prototype[Symbol.asyncIterator] = function () {
        return this;
      }),
    (f.prototype.next = function (e) {
      return this._invoke("next", e);
    }),
    (f.prototype.throw = function (e) {
      return this._invoke("throw", e);
    }),
    (f.prototype.return = function (e) {
      return this._invoke("return", e);
    });
  var A,
    I = 0;
  function j(e) {
    return "__private_" + I++ + "_" + e;
  }
  function R(e, t, r) {
    return g(e, O(e, t, "set"), r), r;
  }
  function L(e, t, r) {
    if (!t.has(e))
      throw new TypeError("attempted to get private field on non-instance");
    return r;
  }
  function C(e, t) {
    v(e, t), t.add(e);
  }
  function D() {
    throw new TypeError("attempted to reassign private method");
  }
  function N(e, t, r) {
    return S(e, t), S(r, "set"), m(e, r);
  }
  function U(e, t, r) {
    return S(e, t), S(r, "get"), b(e, r);
  }
  function F(e, t, r, n) {
    return S(e, t), S(r, "set"), g(e, r, n), n;
  }
  function G(e, t) {
    return (G =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function z(e, t) {
    return G(e, t);
  }
  function M() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function () {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  }
  function B(e, t, r) {
    return (B = M()
      ? Reflect.construct
      : function (e, t, r) {
          var n = [null];
          n.push.apply(n, t);
          var o = new (Function.bind.apply(e, n))();
          return r && z(o, r.prototype), o;
        }).apply(null, arguments);
  }
  function q(e, t, r) {
    return B.apply(null, arguments);
  }
  function V(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function H(e, t, r) {
    return t && V(e.prototype, t), r && V(e, r), e;
  }
  function W() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  }
  function J(e) {
    return (J = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function $(e) {
    return J(e);
  }
  function K(e) {
    return e && e.constructor === Symbol ? "symbol" : typeof e;
  }
  function Y(e, t) {
    return !t || ("object" !== K(t) && "function" != typeof t) ? u(e) : t;
  }
  function Z(e) {
    var t = W();
    return function () {
      var r,
        n = $(e);
      if (t) {
        var o = $(this).constructor;
        r = Reflect.construct(n, arguments, o);
      } else r = n.apply(this, arguments);
      return Y(this, r);
    };
  }
  function Q(e) {
    if (
      ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
      null != e["@@iterator"]
    )
      return Array.from(e);
  }
  function X() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  function ee(e, t) {
    if (e) {
      if ("string" == typeof e) return o(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      return (
        "Object" === r && e.constructor && (r = e.constructor.name),
        "Map" === r || "Set" === r
          ? Array.from(r)
          : "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? o(e, t)
          : void 0
      );
    }
  }
  function te(e) {
    return a(e) || Q(e) || ee(e, i) || X();
  }
  function re(e, t) {
    if ("object" !== K(e) || null === e) return e;
    var r = e[Symbol.toPrimitive];
    if (void 0 !== r) {
      var n = r.call(e, t || "default");
      if ("object" !== K(n)) return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t ? String : Number)(e);
  }
  function ne(e) {
    var t = re(e, "string");
    return "symbol" === K(t) ? t : String(t);
  }
  function oe(e, t, r) {
    var n,
      o,
      i,
      a = t(function (e) {
        !(function (e, t) {
          ["method", "field"].forEach(function (r) {
            t.forEach(function (t) {
              t.kind === r && "own" === t.placement && se(e, t);
            });
          });
        })(e, c.elements);
      }, r),
      c = (function (e, t) {
        var r = [],
          n = [],
          o = { static: [], prototype: [], own: [] };
        if (
          (e.forEach(function (e) {
            fe(e, o);
          }),
          e.forEach(function (e) {
            if (!ce(e)) return r.push(e);
            var t = (function (e, t) {
              for (
                var r = [], n = [], o = e.decorators, i = o.length - 1;
                i >= 0;
                i--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var c = le(e),
                  u = he((0, o[i])(c) || c);
                fe((e = u.element), t), u.finisher && n.push(u.finisher);
                var s = u.extras;
                if (s) {
                  for (var f = 0; f < s.length; f++) fe(s[f], t);
                  r.push.apply(r, s);
                }
              }
              return { element: e, finishers: n, extras: r };
            })(e, o);
            r.push(t.element),
              r.push.apply(r, t.extras),
              n.push.apply(n, t.finishers);
          }),
          !t)
        )
          return { elements: r, finishers: n };
        var i = (function (e, t) {
          for (var r = [], n = t.length - 1; n >= 0; n--) {
            var o = ye(e),
              i = ve((0, t[n])(o) || o);
            if (
              (void 0 !== i.finisher && r.push(i.finisher),
              void 0 !== i.elements)
            ) {
              e = i.elements;
              for (var a = 0; a < e.length - 1; a++)
                for (var c = a + 1; c < e.length; c++)
                  if (
                    e[a].key === e[c].key &&
                    e[a].placement === e[c].placement
                  )
                    throw new TypeError(
                      "Duplicated element (" + e[a].key + ")"
                    );
            }
          }
          return { elements: e, finishers: r };
        })(r, t);
        return n.push.apply(n, i.finishers), (i.finishers = n), i;
      })(
        (function (e) {
          for (
            var t = [],
              r = function (e) {
                return (
                  "method" === e.kind &&
                  e.key === i.key &&
                  e.placement === i.placement
                );
              },
              n = 0;
            n < e.length;
            n++
          ) {
            var o,
              i = e[n];
            if ("method" === i.kind && (o = t.find(r)))
              if (ue(i.descriptor) || ue(o.descriptor)) {
                if (ce(i) || ce(o))
                  throw new ReferenceError(
                    "Duplicated methods (" + i.key + ") can't be decorated."
                  );
                o.descriptor = i.descriptor;
              } else {
                if (ce(i)) {
                  if (ce(o))
                    throw new ReferenceError(
                      "Decorators can't be placed on different accessors with for the same property (" +
                        i.key +
                        ")."
                    );
                  o.decorators = i.decorators;
                }
                ae(i, o);
              }
            else t.push(i);
          }
          return t;
        })(a.d.map(ie)),
        e
      );
    return (
      (n = a.F),
      (o = c.elements),
      (i = n.prototype),
      ["method", "field"].forEach(function (e) {
        o.forEach(function (t) {
          var r = t.placement;
          t.kind !== e ||
            ("static" !== r && "prototype" !== r) ||
            se("static" === r ? n : i, t);
        });
      }),
      (function (e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = (0, t[r])(e);
          if (void 0 !== n) {
            if ("function" != typeof n)
              throw new TypeError("Finishers must return a constructor.");
            e = n;
          }
        }
        return e;
      })(a.F, c.finishers)
    );
  }
  function ie(e) {
    var t,
      r = ne(e.key);
    "method" === e.kind
      ? ((t = {
          value: e.value,
          writable: !0,
          configurable: !0,
          enumerable: !1,
        }),
        Object.defineProperty(e.value, "name", {
          value: "symbol" === _typeof(r) ? "" : r,
          configurable: !0,
        }))
      : "get" === e.kind
      ? (t = { get: e.value, configurable: !0, enumerable: !1 })
      : "set" === e.kind
      ? (t = { set: e.value, configurable: !0, enumerable: !1 })
      : "field" === e.kind &&
        (t = { configurable: !0, writable: !0, enumerable: !0 });
    var n = {
      kind: "field" === e.kind ? "field" : "method",
      key: r,
      placement: e.static ? "static" : "field" === e.kind ? "own" : "prototype",
      descriptor: t,
    };
    return (
      e.decorators && (n.decorators = e.decorators),
      "field" === e.kind && (n.initializer = e.value),
      n
    );
  }
  function ae(e, t) {
    void 0 !== e.descriptor.get
      ? (t.descriptor.get = e.descriptor.get)
      : (t.descriptor.set = e.descriptor.set);
  }
  function ce(e) {
    return e.decorators && e.decorators.length;
  }
  function ue(e) {
    return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
  }
  function se(e, t) {
    var r = t.descriptor;
    if ("field" === t.kind) {
      var n = t.initializer;
      r = {
        enumerable: r.enumerable,
        writable: r.writable,
        configurable: r.configurable,
        value: void 0 === n ? void 0 : n.call(e),
      };
    }
    Object.defineProperty(e, t.key, r);
  }
  function fe(e, t, r) {
    var n = t[e.placement];
    if (!r && -1 !== n.indexOf(e.key))
      throw new TypeError("Duplicated element (" + e.key + ")");
    n.push(e.key);
  }
  function le(e) {
    var t = {
      kind: e.kind,
      key: e.key,
      placement: e.placement,
      descriptor: e.descriptor,
    };
    return (
      Object.defineProperty(t, Symbol.toStringTag, {
        value: "Descriptor",
        configurable: !0,
      }),
      "field" === e.kind && (t.initializer = e.initializer),
      t
    );
  }
  function pe(e) {
    if (void 0 !== e)
      return te(e).map(function (e) {
        var t = de(e);
        return (
          me(e, "finisher", "An element descriptor"),
          me(e, "extras", "An element descriptor"),
          t
        );
      });
  }
  function de(e) {
    var t = String(e.kind);
    if ("method" !== t && "field" !== t)
      throw new TypeError(
        'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
          t +
          '"'
      );
    var r = ne(e.key),
      n = String(e.placement);
    if ("static" !== n && "prototype" !== n && "own" !== n)
      throw new TypeError(
        'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
          n +
          '"'
      );
    var o = e.descriptor;
    me(e, "elements", "An element descriptor");
    var i = { kind: t, key: r, placement: n, descriptor: Object.assign({}, o) };
    return (
      "field" !== t
        ? me(e, "initializer", "A method descriptor")
        : (me(o, "get", "The property descriptor of a field descriptor"),
          me(o, "set", "The property descriptor of a field descriptor"),
          me(o, "value", "The property descriptor of a field descriptor"),
          (i.initializer = e.initializer)),
      i
    );
  }
  function he(e) {
    return {
      element: de(e),
      finisher: be(e, "finisher"),
      extras: pe(e.extras),
    };
  }
  function ye(e) {
    var t = { kind: "class", elements: e.map(le) };
    return (
      Object.defineProperty(t, Symbol.toStringTag, {
        value: "Descriptor",
        configurable: !0,
      }),
      t
    );
  }
  function ve(e) {
    var t = String(e.kind);
    if ("class" !== t)
      throw new TypeError(
        'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
          t +
          '"'
      );
    me(e, "key", "A class descriptor"),
      me(e, "placement", "A class descriptor"),
      me(e, "descriptor", "A class descriptor"),
      me(e, "initializer", "A class descriptor"),
      me(e, "extras", "A class descriptor");
    var r = be(e, "finisher");
    return { elements: pe(e.elements), finisher: r };
  }
  function me(e, t, r) {
    if (void 0 !== e[t])
      throw new TypeError(r + " can't have a ." + t + " property.");
  }
  function be(e, t) {
    var r = e[t];
    if (void 0 !== r && "function" != typeof r)
      throw new TypeError("Expected '" + t + "' to be a function");
    return r;
  }
  function ge(e, t) {
    for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
      var o = r[n],
        i = Object.getOwnPropertyDescriptor(t, o);
      i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
    }
    return e;
  }
  function we(e, t) {
    for (var r in t) {
      ((i = t[r]).configurable = i.enumerable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, r, i);
    }
    if (Object.getOwnPropertySymbols)
      for (var n = Object.getOwnPropertySymbols(t), o = 0; o < n.length; o++) {
        var i,
          a = n[o];
        ((i = t[a]).configurable = i.enumerable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, a, i);
      }
    return e;
  }
  function ke(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function Se() {
    return (
      (Se =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
      Se.apply(this, arguments)
    );
  }
  function _e() {
    return Se.apply(this, arguments);
  }
  function Oe(e, t) {
    for (
      ;
      !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = $(e));

    );
    return e;
  }
  function xe(e, t, r) {
    return (xe =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (e, t, r) {
            var n = Oe(e, t);
            if (n) {
              var o = Object.getOwnPropertyDescriptor(n, t);
              return o.get ? o.get.call(r || e) : o.value;
            }
          })(e, t, r);
  }
  function Pe(e, t, r) {
    return xe(e, t, r);
  }
  function Te(e, t) {
    if ("function" != typeof t && null !== t)
      throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      t && z(e, t);
  }
  function Ee(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      (e.__proto__ = t);
  }
  function Ae(e, t, r, n) {
    r &&
      Object.defineProperty(e, t, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : void 0,
      });
  }
  function Ie(e, t) {
    throw new Error(
      "Decorating class property failed. Please ensure that proposal-class-properties is enabled and set to use loose mode. To use proposal-class-properties in spec mode with decorators, wait for the next major version of decorators in stage 2."
    );
  }
  function je(e, t) {
    return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance]
      ? !!t[Symbol.hasInstance](e)
      : e instanceof t;
  }
  function Re(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function Le() {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap();
    return (
      (Le = function () {
        return e;
      }),
      e
    );
  }
  function Ce(e) {
    if (e && e.__esModule) return e;
    if (null === e || ("object" != typeof e && "function" != typeof e))
      return { default: e };
    var t = Le();
    if (t && t.has(e)) return t.get(e);
    var r = {},
      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o in e)
      if (Object.prototype.hasOwnProperty.call(e, o)) {
        var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
      }
    return (r.default = e), t && t.set(e, r), r;
  }
  function De(e) {
    return -1 !== Function.toString.call(e).indexOf("[native code]");
  }
  function Ne(e, t) {
    var r =
      null == e
        ? null
        : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
    if (null != r) {
      var n,
        o,
        i = [],
        a = !0,
        c = !1;
      try {
        for (
          r = r.call(e);
          !(a = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t);
          a = !0
        );
      } catch (e) {
        (c = !0), (o = e);
      } finally {
        try {
          a || null == r.return || r.return();
        } finally {
          if (c) throw o;
        }
      }
      return i;
    }
  }
  function Ue(e, t) {
    var r =
      e &&
      (("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"]);
    if (null != r) {
      var n = [];
      for (
        r = r.call(e);
        !(_step = r.next()).done && (n.push(_step.value), !t || n.length !== t);

      );
      return n;
    }
  }
  function Fe(e, t, r, n) {
    A ||
      (A =
        ("function" == typeof Symbol &&
          Symbol.for &&
          Symbol.for("react.element")) ||
        60103);
    var o = e && e.defaultProps,
      i = arguments.length - 3;
    if ((t || 0 === i || (t = { children: void 0 }), t && o))
      for (var a in o) void 0 === t[a] && (t[a] = o[a]);
    else t || (t = o || {});
    if (1 === i) t.children = n;
    else if (i > 1) {
      for (var c = new Array(i), u = 0; u < i; u++) c[u] = arguments[u + 3];
      t.children = c;
    }
    return {
      $$typeof: A,
      type: e,
      key: void 0 === r ? null : "" + r,
      ref: null,
      props: t,
      _owner: null,
    };
  }
  function Ge(e, t) {
    if (e !== t) throw new TypeError("Cannot instantiate an arrow function");
  }
  function ze() {
    throw new TypeError(
      "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  function Me(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(r).filter(function (e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable;
          })
        )),
        n.forEach(function (t) {
          ke(e, t, r[t]);
        });
    }
    return e;
  }
  function Be(e, t) {
    if (null == e) return {};
    var r,
      n,
      o = {},
      i = Object.keys(e);
    for (n = 0; n < i.length; n++)
      (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
    return o;
  }
  function qe(e, t) {
    if (null == e) return {};
    var r,
      n,
      o = Be(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++)
        (r = i[n]),
          t.indexOf(r) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
  }
  function Ve(e) {
    throw new Error('"' + e + '" is read-only');
  }
  function He(e, t, r, n) {
    return (He =
      "undefined" != typeof Reflect && Reflect.set
        ? Reflect.set
        : function (e, t, r, n) {
            var o,
              i = Oe(e, t);
            if (i) {
              if ((o = Object.getOwnPropertyDescriptor(i, t)).set)
                return o.set.call(n, r), !0;
              if (!o.writable) return !1;
            }
            if ((o = Object.getOwnPropertyDescriptor(n, t))) {
              if (!o.writable) return !1;
              (o.value = r), Object.defineProperty(n, t, o);
            } else ke(n, t, r);
            return !0;
          })(e, t, r, n);
  }
  function We(e, t, r, n, o) {
    if (!He(e, t, r, n || e) && o) throw new Error("failed to set property");
    return r;
  }
  function Je(e) {
    return function () {
      var t = e.apply(this, arguments);
      return t.next(), t;
    };
  }
  function $e(e, t) {
    return a(e) || Q(e) || ee(e, t) || X();
  }
  function Ke(e, t) {
    return a(e) || Ue(e, t) || ee(e, t) || X();
  }
  function Ye(e, t) {
    return (
      t || (t = e.slice(0)),
      Object.freeze(
        Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
      )
    );
  }
  function Ze(e, t) {
    return t || (t = e.slice(0)), (e.raw = t), e;
  }
  function Qe(e) {
    throw e;
  }
  function Xe(e) {
    return c(e) || Q(e) || ee(e) || ze();
  }
  function et(e) {
    return function () {
      return new f(e.apply(this, arguments));
    };
  }
  function tt(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (
      (tt = function (e) {
        if (null === e || !De(e)) return e;
        if ("function" != typeof e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== t) {
          if (t.has(e)) return t.get(e);
          t.set(e, r);
        }
        function r() {
          return q(e, arguments, $(this).constructor);
        }
        return (
          (r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          z(r, e)
        );
      }),
      tt(e)
    );
  }
  function rt(e) {
    return tt(e);
  }
  function nt(e, t, r, n) {
    var o,
      i = arguments.length,
      a =
        i < 3
          ? t
          : null === n
          ? (n = Object.getOwnPropertyDescriptor(t, r))
          : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      a = Reflect.decorate(e, t, r, n);
    else
      for (var c = e.length - 1; c >= 0; c--)
        (o = e[c]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
    return i > 3 && a && Object.defineProperty(t, r, a), a;
  }
  function ot(e, t) {
    return function (r, n) {
      t(r, n, e);
    };
  }
  function it(e, t) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
      return Reflect.metadata(e, t);
  }
  Object.create;
  Object.create;
  var at = {},
    ct = (function (e) {
      var t,
        r = Object.prototype,
        n = r.hasOwnProperty,
        o = "function" == typeof Symbol ? Symbol : {},
        i = o.iterator || "@@iterator",
        a = o.asyncIterator || "@@asyncIterator",
        c = o.toStringTag || "@@toStringTag";
      function u(e, t, r) {
        return (
          Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          e[t]
        );
      }
      try {
        u({}, "");
      } catch (e) {
        u = function (e, t, r) {
          return (e[t] = r);
        };
      }
      function s(e, t, r, n) {
        var o = t && t.prototype instanceof v ? t : v,
          i = Object.create(o.prototype),
          a = new E(n || []);
        return (
          (i._invoke = (function (e, t, r) {
            var n = l;
            return function (o, i) {
              if (n === d) throw new Error("Generator is already running");
              if (n === h) {
                if ("throw" === o) throw i;
                return I();
              }
              for (r.method = o, r.arg = i; ; ) {
                var a = r.delegate;
                if (a) {
                  var c = x(a, r);
                  if (c) {
                    if (c === y) continue;
                    return c;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (n === l) throw ((n = h), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                n = d;
                var u = f(e, t, r);
                if ("normal" === u.type) {
                  if (((n = r.done ? h : p), u.arg === y)) continue;
                  return { value: u.arg, done: r.done };
                }
                "throw" === u.type &&
                  ((n = h), (r.method = "throw"), (r.arg = u.arg));
              }
            };
          })(e, r, a)),
          i
        );
      }
      function f(e, t, r) {
        try {
          return { type: "normal", arg: e.call(t, r) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      e.wrap = s;
      var l = "suspendedStart",
        p = "suspendedYield",
        d = "executing",
        h = "completed",
        y = {};
      function v() {}
      function m() {}
      function b() {}
      var g = {};
      u(g, i, function () {
        return this;
      });
      var w = Object.getPrototypeOf,
        k = w && w(w(A([])));
      k && k !== r && n.call(k, i) && (g = k);
      var S = (b.prototype = v.prototype = Object.create(g));
      function _(e) {
        ["next", "throw", "return"].forEach(function (t) {
          u(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function O(e, t) {
        function r(o, i, a, c) {
          var u = f(e[o], e, i);
          if ("throw" !== u.type) {
            var s = u.arg,
              l = s.value;
            return l && "object" == typeof l && n.call(l, "__await")
              ? t.resolve(l.__await).then(
                  function (e) {
                    r("next", e, a, c);
                  },
                  function (e) {
                    r("throw", e, a, c);
                  }
                )
              : t.resolve(l).then(
                  function (e) {
                    (s.value = e), a(s);
                  },
                  function (e) {
                    return r("throw", e, a, c);
                  }
                );
          }
          c(u.arg);
        }
        var o;
        this._invoke = function (e, n) {
          function i() {
            return new t(function (t, o) {
              r(e, n, t, o);
            });
          }
          return (o = o ? o.then(i, i) : i());
        };
      }
      function x(e, r) {
        var n = e.iterator[r.method];
        if (n === t) {
          if (((r.delegate = null), "throw" === r.method)) {
            if (
              e.iterator.return &&
              ((r.method = "return"),
              (r.arg = t),
              x(e, r),
              "throw" === r.method)
            )
              return y;
            (r.method = "throw"),
              (r.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return y;
        }
        var o = f(n, e.iterator, r.arg);
        if ("throw" === o.type)
          return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), y;
        var i = o.arg;
        return i
          ? i.done
            ? ((r[e.resultName] = i.value),
              (r.next = e.nextLoc),
              "return" !== r.method && ((r.method = "next"), (r.arg = t)),
              (r.delegate = null),
              y)
            : i
          : ((r.method = "throw"),
            (r.arg = new TypeError("iterator result is not an object")),
            (r.delegate = null),
            y);
      }
      function P(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function T(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function E(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(P, this),
          this.reset(!0);
      }
      function A(e) {
        if (e) {
          var r = e[i];
          if (r) return r.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var o = -1,
              a = function r() {
                for (; ++o < e.length; )
                  if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
                return (r.value = t), (r.done = !0), r;
              };
            return (a.next = a);
          }
        }
        return { next: I };
      }
      function I() {
        return { value: t, done: !0 };
      }
      return (
        (m.prototype = b),
        u(S, "constructor", b),
        u(b, "constructor", m),
        (m.displayName = u(b, c, "GeneratorFunction")),
        (e.isGeneratorFunction = function (e) {
          var t = "function" == typeof e && e.constructor;
          return (
            !!t &&
            (t === m || "GeneratorFunction" === (t.displayName || t.name))
          );
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, b)
              : ((e.__proto__ = b), u(e, c, "GeneratorFunction")),
            (e.prototype = Object.create(S)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        _(O.prototype),
        u(O.prototype, a, function () {
          return this;
        }),
        (e.AsyncIterator = O),
        (e.async = function (t, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new O(s(t, r, n, o), i);
          return e.isGeneratorFunction(r)
            ? a
            : a.next().then(function (e) {
                return e.done ? e.value : a.next();
              });
        }),
        _(S),
        u(S, c, "Generator"),
        u(S, i, function () {
          return this;
        }),
        u(S, "toString", function () {
          return "[object Generator]";
        }),
        (e.keys = function (e) {
          var t = [];
          for (var r in e) t.push(r);
          return (
            t.reverse(),
            function r() {
              for (; t.length; ) {
                var n = t.pop();
                if (n in e) return (r.value = n), (r.done = !1), r;
              }
              return (r.done = !0), r;
            }
          );
        }),
        (e.values = A),
        (E.prototype = {
          constructor: E,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = t),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = t),
              this.tryEntries.forEach(T),
              !e)
            )
              for (var r in this)
                "t" === r.charAt(0) &&
                  n.call(this, r) &&
                  !isNaN(+r.slice(1)) &&
                  (this[r] = t);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var r = this;
            function o(n, o) {
              return (
                (c.type = "throw"),
                (c.arg = e),
                (r.next = n),
                o && ((r.method = "next"), (r.arg = t)),
                !!o
              );
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var a = this.tryEntries[i],
                c = a.completion;
              if ("root" === a.tryLoc) return o("end");
              if (a.tryLoc <= this.prev) {
                var u = n.call(a, "catchLoc"),
                  s = n.call(a, "finallyLoc");
                if (u && s) {
                  if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                } else if (u) {
                  if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                } else {
                  if (!s)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r];
              if (
                o.tryLoc <= this.prev &&
                n.call(o, "finallyLoc") &&
                this.prev < o.finallyLoc
              ) {
                var i = o;
                break;
              }
            }
            i &&
              ("break" === e || "continue" === e) &&
              i.tryLoc <= t &&
              t <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = e),
              (a.arg = t),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                : this.complete(a)
            );
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              y
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t];
              if (r.finallyLoc === e)
                return this.complete(r.completion, r.afterLoc), T(r), y;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t];
              if (r.tryLoc === e) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  T(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, r, n) {
            return (
              (this.delegate = { iterator: A(e), resultName: r, nextLoc: n }),
              "next" === this.method && (this.arg = t),
              y
            );
          },
        }),
        e
      );
    })(at);
  try {
    regeneratorRuntime = ct;
  } catch (e) {
    "object" == typeof globalThis
      ? (globalThis.regeneratorRuntime = ct)
      : Function("r", "regeneratorRuntime = r")(ct);
  }
  var ut,
    st = {
      LEAD_CREATION: "lead_creation",
      USER_CREATION: "user_creation",
      LOGIN: "login",
      ACTIVATION: "activation",
      PURCHASE: "purchase",
      TRIAL_START: "trial_start",
      SUBSCRIPTION_START: "subscription_start",
    },
    ft = { CAPI: "capi" },
    lt = {
      LEAD: "Lead",
      COMPLETE_REGISTRATION: "CompleteRegistration",
      PURCHASE: "Purchase",
      START_TRIAL: "StartTrial",
      SUBSCRIBE: "Subscribe",
    },
    pt = {
      CAMPAIGN_FIRST: "dh_campaign_first",
      CAMPAIGN_LATEST: "dh_campaign",
    },
    dt = new Uint8Array(16);
  function ht() {
    if (
      !ut &&
      !(ut =
        ("undefined" != typeof crypto &&
          crypto.getRandomValues &&
          crypto.getRandomValues.bind(crypto)) ||
        ("undefined" != typeof msCrypto &&
          "function" == typeof msCrypto.getRandomValues &&
          msCrypto.getRandomValues.bind(msCrypto)))
    )
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
      );
    return ut(dt);
  }
  var yt =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  for (
    var vt = function (e) {
        return "string" == typeof e && yt.test(e);
      },
      mt = [],
      bt = 0;
    bt < 256;
    ++bt
  )
    mt.push((bt + 256).toString(16).substr(1));
  var gt = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      r = (
        mt[e[t + 0]] +
        mt[e[t + 1]] +
        mt[e[t + 2]] +
        mt[e[t + 3]] +
        "-" +
        mt[e[t + 4]] +
        mt[e[t + 5]] +
        "-" +
        mt[e[t + 6]] +
        mt[e[t + 7]] +
        "-" +
        mt[e[t + 8]] +
        mt[e[t + 9]] +
        "-" +
        mt[e[t + 10]] +
        mt[e[t + 11]] +
        mt[e[t + 12]] +
        mt[e[t + 13]] +
        mt[e[t + 14]] +
        mt[e[t + 15]]
      ).toLowerCase();
    if (!vt(r)) throw TypeError("Stringified UUID is invalid");
    return r;
  };
  var wt,
    kt = function (e, t, r) {
      var n = (e = e || {}).random || (e.rng || ht)();
      if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), t)) {
        r = r || 0;
        for (var o = 0; o < 16; ++o) t[r + o] = n[o];
        return t;
      }
      return gt(n);
    },
    St = function () {
      var e = localStorage.getItem("dh_anonymous_id");
      return e || ((e = kt()), localStorage.setItem("dh_anonymous_id", e), e);
    },
    _t = function () {
      return window.analytics || window.rudderanalytics || null;
    },
    Ot =
      ((wt = r.asyncToGenerator(
        e(at).mark(function t() {
          var r;
          return e(at).wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!(r = _t()) || !r.ready) {
                    e.next = 5;
                    break;
                  }
                  return (
                    (e.next = 4),
                    new Promise(function (e) {
                      return r.ready(e);
                    })
                  );
                case 4:
                  r = _t();
                case 5:
                  return e.abrupt("return", r);
                case 6:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      )),
      function () {
        return wt.apply(this, arguments);
      }),
    xt = (function () {
      var t = r.asyncToGenerator(
        e(at).mark(function t() {
          var r;
          return e(at).wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), Ot();
                case 2:
                  if (!(r = e.sent)) {
                    e.next = 8;
                    break;
                  }
                  if (!(r.user && r.user() && r.user().anonymousId)) {
                    e.next = 6;
                    break;
                  }
                  return e.abrupt("return", r.user().anonymousId());
                case 6:
                  if (!r.getAnonymousId) {
                    e.next = 8;
                    break;
                  }
                  return e.abrupt("return", r.getAnonymousId());
                case 8:
                  return e.abrupt("return", St());
                case 9:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      );
      return function () {
        return t.apply(this, arguments);
      };
    })(),
    Pt = (function () {
      var t = r.asyncToGenerator(
        e(at).mark(function t() {
          var r;
          return e(at).wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), Ot();
                case 2:
                  if (null != (r = e.sent)) {
                    e.next = 5;
                    break;
                  }
                  return e.abrupt("return", null);
                case 5:
                  if (!(r.user && r.user() && r.user().id)) {
                    e.next = 9;
                    break;
                  }
                  return e.abrupt("return", r.user().id());
                case 9:
                  if (!r.getUserId) {
                    e.next = 13;
                    break;
                  }
                  return e.abrupt("return", r.getUserId());
                case 13:
                  return e.abrupt("return", null);
                case 14:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      );
      return function () {
        return t.apply(this, arguments);
      };
    })(),
    Tt = (function () {
      var t = r.asyncToGenerator(
        e(at).mark(function t() {
          var n, o, i, a;
          return e(at).wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!datahappy._webId) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return", datahappy._webId);
                case 2:
                  return (e.t0 = r), (e.next = 5), Promise.all([xt(), Pt()]);
                case 5:
                  return (
                    (e.t1 = e.sent),
                    (n = e.t0.slicedToArray.call(e.t0, e.t1, 2)),
                    (o = n[0]),
                    (i = n[1]),
                    (a = i ? "uid_t_".concat(i) : "aid_t_".concat(o)),
                    (datahappy._webId = a),
                    e.abrupt("return", a)
                  );
                case 12:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      );
      return function () {
        return t.apply(this, arguments);
      };
    })(),
    Et = (function () {
      var t = r.asyncToGenerator(
        e(at).mark(function t() {
          var r;
          return e(at).wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), Tt();
                case 2:
                  return (r = e.sent), e.abrupt("return", r.split("_t_")[1]);
                case 4:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      );
      return function () {
        return t.apply(this, arguments);
      };
    })(),
    At = {
      anonymousId: xt,
      userId: Pt,
      webId: Tt,
      externalId: Et,
      trackPageview: function (e, t) {
        var n = _t();
        if (!n || !n.page) return !1;
        var o = {};
        t && (o.context = { campaign: t });
        var i =
          (e &&
            r.objectSpread(
              {},
              e.name && { utm_campaign_first: e.name },
              e.source && { utm_source_first: e.source },
              e.medium && { utm_medium_first: e.medium },
              e.term && { utm_term_first: e.term },
              e.content && { utm_content_first: e.content }
            )) ||
          {};
        return n.page(i, o), !0;
      },
      identifyUser: function (e) {
        var t = _t();
        t && t.identify(e, null, { integrations: { All: !1 } });
      },
    },
    It = (function () {
      var t = r.asyncToGenerator(
        e(at).mark(function t(r) {
          var n, o, i;
          return e(at).wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    datahappy.config.server &&
                    datahappy.config.server.host &&
                    datahappy.config.server.authToken
                  ) {
                    e.next = 3;
                    break;
                  }
                  return (
                    console.error(
                      "[datahappy] Skipping – server host or authToken not set"
                    ),
                    e.abrupt("return")
                  );
                case 3:
                  return (e.next = 5), jt(r);
                case 5:
                  return (
                    (n = e.sent),
                    (o = datahappy.config.server.path || "/t"),
                    (e.next = 9),
                    fetch("".concat(datahappy.config.server.host).concat(o), {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(n),
                    })
                  );
                case 9:
                  return (i = e.sent), e.abrupt("return", i.text());
                case 11:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      );
      return function (e) {
        return t.apply(this, arguments);
      };
    })();
  function jt(e) {
    return Rt.apply(this, arguments);
  }
  function Rt() {
    return (Rt = r.asyncToGenerator(
      e(at).mark(function t(n) {
        var o, i, a, c, u, s, f, l, p, d, h, y, v, m;
        return e(at).wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (o = n.eventName),
                  (i = n.eventProperties),
                  (a = n.userTraits),
                  (c = n.eventId),
                  (e.t0 = r),
                  (e.next = 4),
                  Promise.all([At.anonymousId(), At.userId()])
                );
              case 4:
                return (
                  (e.t1 = e.sent),
                  (u = e.t0.slicedToArray.call(e.t0, e.t1, 2)),
                  (s = u[0]),
                  (f = u[1]),
                  (l = n.userId || f),
                  (p = datahappy.getFirstCampaign()),
                  (d = datahappy.getLatestCampaign()),
                  (e.next = 13),
                  At.externalId()
                );
              case 13:
                return (
                  (h = e.sent),
                  (y = datahappy.config.server.authToken),
                  (v = datahappy.getFBCookies()),
                  (m =
                    v && r.defineProperty({}, ft.CAPI, r.objectSpread({}, v))),
                  e.abrupt(
                    "return",
                    r.objectSpread(
                      { anonymousId: s },
                      l && { userId: l },
                      { event: o, messageId: c },
                      i && Object.keys(i).length > 0 && { properties: i },
                      {
                        context: r.objectSpread(
                          {},
                          d && { campaign: d },
                          p && { campaignFirst: p },
                          {
                            page: {
                              url:
                                window.location.origin +
                                window.location.pathname,
                            },
                            userAgent: navigator.userAgent,
                            locale: navigator.language,
                          },
                          h && { externalId: h },
                          a && Object.keys(a).length > 0 && { traits: a }
                        ),
                      },
                      m && { integrations: m },
                      {
                        channel: "web",
                        timestamp: new Date().toISOString(),
                        authToken: y,
                      }
                    )
                  )
                );
              case 18:
              case "end":
                return e.stop();
            }
        }, t);
      })
    )).apply(this, arguments);
  }
  var Lt,
    Ct = { trackEvent: It },
    Dt =
      (ke((Lt = {}), st.LEAD_CREATION, lt.LEAD),
      ke(Lt, st.USER_CREATION, lt.COMPLETE_REGISTRATION),
      ke(Lt, st.PURCHASE, lt.PURCHASE),
      ke(Lt, st.TRIAL_START, lt.START_TRIAL),
      ke(Lt, st.SUBSCRIPTION_START, lt.SUBSCRIBE),
      Lt),
    Nt = (function () {
      var t = h(
        e(at).mark(function t(r) {
          var n, o, i;
          return e(at).wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), At.externalId();
                case 2:
                  (n = e.sent),
                    ((o = document.createElement("script")).type =
                      "text/javascript"),
                    (o.text =
                      "!function(f,b,e,v,n,t,s)\n    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n    n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n    n.queue=[];t=b.createElement(e);t.async=!0;\n    t.src=v;s=b.getElementsByTagName(e)[0];\n    s.parentNode.insertBefore(t,s)}(window, document,'script',\n    'https://connect.facebook.net/en_US/fbevents.js');\n    fbq('init', '".concat(
                        r,
                        "');\n    fbq('track', 'PageView');"
                      )),
                    (i =
                      document.getElementsByTagName(
                        "script"
                      )[0]).parentNode.insertBefore(o, i);
                case 8:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      );
      return function (e) {
        return t.apply(this, arguments);
      };
    })(),
    Ut = {
      loadSnippet: Nt,
      trackPageview: function () {
        window.fbq && window.fbq("track", "PageView");
      },
      trackEvent: function (e) {
        if (datahappy.config.pixels && datahappy.config.pixels.facebook) {
          var t = e.eventProperties,
            r = e.eventId,
            n = e.eventName,
            o = datahappy.config.pixels.facebook.eventMappings,
            i = (o && o[n]) || Dt[n],
            a = "track";
          i ? (n = i) : (a = "trackCustom");
          var c = {
              revenue: "value",
              currency: "currency",
              orderId: "order_id",
              subscriptionId: "subscription_id",
            },
            u =
              t &&
              Object.keys(t)
                .filter(function (e) {
                  return Object.keys(c).includes(e);
                })
                .reduce(function (e, r) {
                  return (e[c[r]] = t[r]), e;
                }, {});
          window.fbq && window.fbq(a, n, u || {}, { eventID: r });
        }
      },
      getCookies: function () {
        var e = document.cookie
            .split("; ")
            .filter(function (e) {
              return e.includes("_fbp=");
            })
            .map(function (e) {
              return e.split("_fbp=")[1];
            }),
          t = document.cookie
            .split("; ")
            .filter(function (e) {
              return e.includes("_fbc=");
            })
            .map(function (e) {
              return e.split("_fbc=")[1];
            }),
          r = Me(
            {},
            (e = (e.length && e[0]) || null) && { fbp: e },
            (t = (t.length && t[0]) || null) && { fbc: t }
          );
        return Object.keys(r).length ? r : null;
      },
    },
    Ft = function () {
      return kt();
    },
    Gt = function () {
      datahappy.config.pixels &&
        datahappy.config.pixels.facebook &&
        Ut.trackPageview();
    },
    zt = function (e) {
      datahappy.config.pixels &&
        datahappy.config.pixels.facebook &&
        Ut.trackEvent(e);
    },
    Mt = (function () {
      var t = h(
        e(at).mark(function t(r) {
          var n, o, i, a, c, u;
          return e(at).wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (n = datahappy.config.appDownloadLinks),
                    (o = new URL(r || n.baseURL)),
                    (i = o.searchParams),
                    (a = datahappy.getLatestCampaign()) &&
                      (a.source &&
                      a.medium &&
                      a.medium.match(
                        /cpc|ppc|paidsearch|cpv|cpa|cpp|paidsocial|display|cpm|banner/i
                      )
                        ? (c = n.sourceMappings[a.source.toLowerCase()])
                          ? (o.pathname = "/".concat(c))
                          : i.set(
                              "adgroup",
                              "".concat(a.source, " / ").concat(a.medium)
                            )
                        : a.source &&
                          i.set(
                            "adgroup",
                            "".concat(a.source, " / ").concat(a.medium)
                          ),
                      a.name && i.set("campaign", a.name),
                      a.term && !i.has("adgroup") && i.set("adgroup", a.term),
                      a.content && i.set("creative", a.content),
                      a.source && i.set("source", a.source),
                      a.medium && i.set("medium", a.medium)),
                    (e.next = 7),
                    At.webId()
                  );
                case 7:
                  return (
                    (u = e.sent) && i.set("label", u),
                    (o.search = i.toString()),
                    e.abrupt("return", o.href)
                  );
                case 11:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      );
      return function (e) {
        return t.apply(this, arguments);
      };
    })(),
    Bt = { generateAppDownloadURL: Mt },
    qt = (function () {
      var t = h(
        e(at).mark(function t(r) {
          var n, o, i, a, c, u;
          return e(at).wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (n = datahappy.config.appDownloadLinks),
                    (o = new URL(n.baseURL)),
                    (i = o.searchParams),
                    (a = datahappy.getLatestCampaign()),
                    i.set("pid", "website"),
                    a &&
                      (a.source && i.set("pid", a.source),
                      a.name && i.set("c", a.name),
                      a.medium && i.set("af_channel", a.medium),
                      a.term && i.set("af_adset", a.term),
                      a.content && i.set("af_ad", a.content)),
                    i.set("af_ua", navigator.userAgent),
                    (e.next = 9),
                    At.webId()
                  );
                case 9:
                  return (
                    (c = e.sent),
                    i.set("dh_web_id", c),
                    (u = datahappy.getFBCookies()) &&
                      u.fbp &&
                      i.set("dh_fbp", u.fbp),
                    u && u.fbc && i.set("dh_fbc", u.fbc),
                    i.set("af_js_web", "true"),
                    (o.search = i.toString()),
                    e.abrupt("return", o.href)
                  );
                case 17:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      );
      return function (e) {
        return t.apply(this, arguments);
      };
    })(),
    Vt = { generateAppDownloadURL: qt },
    Ht = {};
  (Ht.init = function (t) {
    var r, n, o, i;
    (this.config = t),
      (r = new URLSearchParams(window.location.search).get("dh_uid")) &&
        At.identifyUser(r),
      (function () {
        var e = Ht.currentUTMs(),
          t =
            (document.referrer && new URL(document.referrer).hostname) || null;
        if (!e && t && t !== location.hostname) {
          var r = t.match(/google|bing|baidu|yandex|duckduckgo/i),
            n = t.match(
              /facebook|instagram|youtube|twitter|snapchat|tiktok|pinterest|linkedin/i
            );
          e =
            null !== r
              ? { source: r[0], medium: "organic" }
              : null !== n
              ? { source: n[0], medium: "social" }
              : { source: t.replace("www.", ""), medium: "referral" };
        }
        if (!e) return;
        Ht.getFirstCampaign() ||
          localStorage.setItem(pt.CAMPAIGN_FIRST, JSON.stringify(e));
        localStorage.setItem(pt.CAMPAIGN_LATEST, JSON.stringify(e));
      })(),
      this.config.pixels &&
        this.config.pixels.facebook &&
        this.config.pixels.facebook.pixelId &&
        Ut.loadSnippet(this.config.pixels.facebook.pixelId),
      this.config.appDownloadLinks &&
        ((n = 0),
        (o = setInterval(function () {
          var t = "a.dh-cta-app-download",
            r = Ht.config.appDownloadLinks.ctaSelector;
          r && (t += ", ".concat(r));
          var i = document.querySelectorAll(t);
          i.length
            ? (Ht.config.debug &&
                console.log("[datahappy] Updating app download CTAs:", i),
              i.forEach(function (t) {
                t.addEventListener(
                  "click",
                  h(
                    e(at).mark(function r() {
                      var n;
                      return e(at).wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), Ht.generateAppDownloadURL(t);
                            case 2:
                              (n = e.sent) && t.setAttribute("href", n);
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, r);
                    })
                  )
                );
              }),
              clearInterval(o))
            : ((n += 1),
              Ht.config.debug &&
                console.log(
                  "[datahappy] Download CTAs not found (attempt ".concat(n, ")")
                ),
              8 === n && clearInterval(o));
        }, Ht.config.appDownloadLinks.interval || 250))),
      this.config.linker &&
        ((i = document.querySelectorAll("a[href^='".concat(Ht.linker, "']"))),
        Ht.config.debug && console.log("[datahappy] Linking links:", i),
        i.forEach(function (t) {
          t.addEventListener(
            "click",
            h(
              e(at).mark(function r() {
                var n,
                  o,
                  i,
                  a,
                  c,
                  u,
                  s,
                  f,
                  l,
                  p,
                  d,
                  h,
                  y,
                  v,
                  m,
                  b,
                  g,
                  w,
                  k,
                  S,
                  _;
                return e(at).wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = new URLSearchParams()),
                            (e.next = 3),
                            At.userId()
                          );
                        case 3:
                          for (
                            (o = e.sent) && n.set("dh_uid", o),
                              i = window.datahappy.getLatestCampaign(),
                              a = !0,
                              c = !1,
                              u = void 0,
                              e.prev = 7,
                              s = Object.entries(i)[Symbol.iterator]();
                            !(a = (f = s.next()).done);
                            a = !0
                          )
                            (l = $e(f.value, 2)),
                              (p = l[0]),
                              (d = l[1]),
                              n.set(p, d);
                          e.next = 15;
                          break;
                        case 11:
                          (e.prev = 11),
                            (e.t0 = e.catch(7)),
                            (c = !0),
                            (u = e.t0);
                        case 15:
                          (e.prev = 15),
                            (e.prev = 16),
                            a || null == s.return || s.return();
                        case 18:
                          if (((e.prev = 18), !c)) {
                            e.next = 21;
                            break;
                          }
                          throw u;
                        case 21:
                          return e.finish(18);
                        case 22:
                          return e.finish(15);
                        case 23:
                          if (!n.toString()) {
                            e.next = 46;
                            break;
                          }
                          for (
                            h = new URL(t),
                              y = h.searchParams,
                              v = !0,
                              m = !1,
                              b = void 0,
                              e.prev = 28,
                              g = n.entries()[Symbol.iterator]();
                            !(v = (w = g.next()).done);
                            v = !0
                          )
                            (k = $e(w.value, 2)),
                              (S = k[0]),
                              (_ = k[1]),
                              y.set(S, _);
                          e.next = 36;
                          break;
                        case 32:
                          (e.prev = 32),
                            (e.t1 = e.catch(28)),
                            (m = !0),
                            (b = e.t1);
                        case 36:
                          (e.prev = 36),
                            (e.prev = 37),
                            v || null == g.return || g.return();
                        case 39:
                          if (((e.prev = 39), !m)) {
                            e.next = 42;
                            break;
                          }
                          throw b;
                        case 42:
                          return e.finish(39);
                        case 43:
                          return e.finish(36);
                        case 44:
                          (h.search = y.toString()),
                            t.setAttribute("href", h.href);
                        case 46:
                        case "end":
                          return e.stop();
                      }
                  },
                  r,
                  null,
                  [
                    [7, 11, 15, 23],
                    [16, , 18, 22],
                    [28, 32, 36, 44],
                    [37, , 39, 43],
                  ]
                );
              })
            )
          );
        }));
    var a = window.location.origin;
    (a = a.substring(a.indexOf("//") + 2).replace("www.", "")),
      console.log(
        "✨ ".concat(
          a,
          " make better (data driven) decisions thanks to datahappy.co – visit to find out more ✨"
        )
      ),
      (this.initialized = !0);
  }),
    (Ht.ready = function (e) {
      this.initialized && e();
    }),
    (Ht.trackPageview = function () {
      var e = this.getFirstCampaign(),
        t = this.getLatestCampaign(),
        r = At.trackPageview(e, t);
      Gt(),
        r ||
          (this.config.hooks &&
            this.config.hooks.trackPageview &&
            this.config.hooks.trackPageview(e, t));
    }),
    (Ht.trackLeadCreation = function (e) {
      (e.eventName = st.LEAD_CREATION), Ht.trackEvent(e);
    }),
    (Ht.trackUserCreation = (function () {
      var t = h(
        e(at).mark(function t(r) {
          var n, o;
          return e(at).wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (n = r.userId), (e.next = 3), At.userId();
                case 3:
                  if (((o = e.sent), n && !o && At.identifyUser(n), n || o)) {
                    e.next = 8;
                    break;
                  }
                  return (
                    console.error(
                      "[datahappy] Skipping trackUserCreated – userId param not set"
                    ),
                    e.abrupt("return")
                  );
                case 8:
                  (r.eventName = st.USER_CREATION), Ht.trackEvent(r);
                case 10:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      );
      return function (e) {
        return t.apply(this, arguments);
      };
    })()),
    (Ht.trackPurchase = function (e) {
      (e.eventName = st.PURCHASE), Ht.trackEvent(e);
    }),
    (Ht.trackTrialStart = function (e) {
      (e.eventName = st.TRIAL_START), Ht.trackEvent(e);
    }),
    (Ht.trackSubscriptionStart = function (e) {
      (e.eventName = st.SUBSCRIPTION_START), Ht.trackEvent(e);
    }),
    (Ht.trackEvent = function (e) {
      var t = e.eventProperties && e.eventProperties.orderId;
      (e.eventId = t || Ft()), zt(e), Ct.trackEvent(e);
    }),
    (Ht.generateAppDownloadURL = h(
      e(at).mark(function t() {
        var r,
          n = arguments;
        return e(at).wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((r = n.length > 0 && void 0 !== n[0] ? n[0] : null),
                    "adjust" !== this.config.appDownloadLinks.provider)
                  ) {
                    e.next = 3;
                    break;
                  }
                  return e.abrupt("return", Bt.generateAppDownloadURL(r));
                case 3:
                  if ("appsflyer" !== this.config.appDownloadLinks.provider) {
                    e.next = 5;
                    break;
                  }
                  return e.abrupt("return", Vt.generateAppDownloadURL(r));
                case 5:
                  return e.abrupt("return", null);
                case 6:
                case "end":
                  return e.stop();
              }
          },
          t,
          this
        );
      })
    )),
    (Ht.currentUTMs = function () {
      var e = new URLSearchParams(window.location.search),
        t = {
          utm_campaign: "name",
          utm_source: "source",
          utm_medium: "medium",
          utm_term: "term",
          utm_content: "content",
        },
        r = Array.from(e.keys())
          .filter(function (e) {
            return e.includes("utm_");
          })
          .reduce(function (r, n) {
            return (r[t[n]] = e.get(n)), r;
          }, {});
      return Object.keys(r).length > 0 ? r : null;
    }),
    (Ht.getFirstCampaign = function () {
      var e = localStorage.getItem(pt.CAMPAIGN_FIRST);
      return e ? JSON.parse(e) : null;
    }),
    (Ht.getLatestCampaign = function () {
      var e = localStorage.getItem(pt.CAMPAIGN_LATEST);
      return e ? JSON.parse(e) : null;
    }),
    (Ht.getFBCookies = function () {
      return Ut.getCookies();
    });
  var Wt = (window.datahappy && window.datahappy.buffered) || null;
  (Ht.version = window.datahappy.version),
    (window.datahappy = Ht),
    Wt &&
      (function (e) {
        var t = !0,
          r = !1,
          n = void 0;
        try {
          for (
            var o, i = e[Symbol.iterator]();
            !(t = (o = i.next()).done);
            t = !0
          ) {
            var a,
              c = te(o.value),
              u = c[0],
              s = c.slice(1);
            (a = Ht)[u].apply(a, Xe(s));
          }
        } catch (e) {
          (r = !0), (n = e);
        } finally {
          try {
            t || null == i.return || i.return();
          } finally {
            if (r) throw n;
          }
        }
      })(Wt);
})();
