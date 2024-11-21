import {
  Component,
  Directive,
  HostListener,
  Input,
  InputFlags,
  NgModule,
  ViewChild,
  setClassMetadata,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵstyleMapInterpolate2,
  ɵɵviewQuery
} from "./chunk-I3LSPEZA.js";
import "./chunk-EJKICZE7.js";
import "./chunk-KEU2764C.js";
import "./chunk-MWEEZMJP.js";
import {
  __commonJS,
  __esm,
  __export,
  __spreadProps,
  __spreadValues,
  __toCommonJS,
  __toESM
} from "./chunk-KA6IPRFH.js";

// node_modules/preact/dist/preact.module.js
var preact_module_exports = {};
__export(preact_module_exports, {
  Component: () => k,
  Fragment: () => b,
  cloneElement: () => E,
  createContext: () => G,
  createElement: () => _,
  createRef: () => m,
  h: () => _,
  hydrate: () => D,
  isValidElement: () => t,
  options: () => l,
  render: () => B,
  toChildArray: () => H
});
function d(n3, l4) {
  for (var u4 in l4)
    n3[u4] = l4[u4];
  return n3;
}
function w(n3) {
  n3 && n3.parentNode && n3.parentNode.removeChild(n3);
}
function _(l4, u4, t4) {
  var i4, o4, r3, f4 = {};
  for (r3 in u4)
    "key" == r3 ? i4 = u4[r3] : "ref" == r3 ? o4 = u4[r3] : f4[r3] = u4[r3];
  if (arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : t4), "function" == typeof l4 && null != l4.defaultProps)
    for (r3 in l4.defaultProps)
      void 0 === f4[r3] && (f4[r3] = l4.defaultProps[r3]);
  return g(l4, f4, i4, o4, null);
}
function g(n3, t4, i4, o4, r3) {
  var f4 = { type: n3, props: t4, key: i4, ref: o4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r3 ? ++u : r3, __i: -1, __u: 0 };
  return null == r3 && null != l.vnode && l.vnode(f4), f4;
}
function m() {
  return { current: null };
}
function b(n3) {
  return n3.children;
}
function k(n3, l4) {
  this.props = n3, this.context = l4;
}
function x(n3, l4) {
  if (null == l4)
    return n3.__ ? x(n3.__, n3.__i + 1) : null;
  for (var u4; l4 < n3.__k.length; l4++)
    if (null != (u4 = n3.__k[l4]) && null != u4.__e)
      return u4.__e;
  return "function" == typeof n3.type ? x(n3) : null;
}
function C(n3) {
  var l4, u4;
  if (null != (n3 = n3.__) && null != n3.__c) {
    for (n3.__e = n3.__c.base = null, l4 = 0; l4 < n3.__k.length; l4++)
      if (null != (u4 = n3.__k[l4]) && null != u4.__e) {
        n3.__e = n3.__c.base = u4.__e;
        break;
      }
    return C(n3);
  }
}
function S(n3) {
  (!n3.__d && (n3.__d = true) && i.push(n3) && !M.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(M);
}
function M() {
  var n3, u4, t4, o4, r3, e3, c4, s3;
  for (i.sort(f); n3 = i.shift(); )
    n3.__d && (u4 = i.length, o4 = void 0, e3 = (r3 = (t4 = n3).__v).__e, c4 = [], s3 = [], t4.__P && ((o4 = d({}, r3)).__v = r3.__v + 1, l.vnode && l.vnode(o4), O(t4.__P, o4, r3, t4.__n, t4.__P.namespaceURI, 32 & r3.__u ? [e3] : null, c4, null == e3 ? x(r3) : e3, !!(32 & r3.__u), s3), o4.__v = r3.__v, o4.__.__k[o4.__i] = o4, j(c4, o4, s3), o4.__e != e3 && C(o4)), i.length > u4 && i.sort(f));
  M.__r = 0;
}
function P(n3, l4, u4, t4, i4, o4, r3, f4, e3, c4, s3) {
  var a4, p4, y3, d3, w4, _4 = t4 && t4.__k || v, g4 = l4.length;
  for (u4.__d = e3, $(u4, l4, _4), e3 = u4.__d, a4 = 0; a4 < g4; a4++)
    null != (y3 = u4.__k[a4]) && (p4 = -1 === y3.__i ? h : _4[y3.__i] || h, y3.__i = a4, O(n3, y3, p4, i4, o4, r3, f4, e3, c4, s3), d3 = y3.__e, y3.ref && p4.ref != y3.ref && (p4.ref && N(p4.ref, null, y3), s3.push(y3.ref, y3.__c || d3, y3)), null == w4 && null != d3 && (w4 = d3), 65536 & y3.__u || p4.__k === y3.__k ? e3 = I(y3, e3, n3) : "function" == typeof y3.type && void 0 !== y3.__d ? e3 = y3.__d : d3 && (e3 = d3.nextSibling), y3.__d = void 0, y3.__u &= -196609);
  u4.__d = e3, u4.__e = w4;
}
function $(n3, l4, u4) {
  var t4, i4, o4, r3, f4, e3 = l4.length, c4 = u4.length, s3 = c4, a4 = 0;
  for (n3.__k = [], t4 = 0; t4 < e3; t4++)
    null != (i4 = l4[t4]) && "boolean" != typeof i4 && "function" != typeof i4 ? (r3 = t4 + a4, (i4 = n3.__k[t4] = "string" == typeof i4 || "number" == typeof i4 || "bigint" == typeof i4 || i4.constructor == String ? g(null, i4, null, null, null) : y(i4) ? g(b, { children: i4 }, null, null, null) : void 0 === i4.constructor && i4.__b > 0 ? g(i4.type, i4.props, i4.key, i4.ref ? i4.ref : null, i4.__v) : i4).__ = n3, i4.__b = n3.__b + 1, o4 = null, -1 !== (f4 = i4.__i = L(i4, u4, r3, s3)) && (s3--, (o4 = u4[f4]) && (o4.__u |= 131072)), null == o4 || null === o4.__v ? (-1 == f4 && a4--, "function" != typeof i4.type && (i4.__u |= 65536)) : f4 !== r3 && (f4 == r3 - 1 ? a4-- : f4 == r3 + 1 ? a4++ : (f4 > r3 ? a4-- : a4++, i4.__u |= 65536))) : i4 = n3.__k[t4] = null;
  if (s3)
    for (t4 = 0; t4 < c4; t4++)
      null != (o4 = u4[t4]) && 0 == (131072 & o4.__u) && (o4.__e == n3.__d && (n3.__d = x(o4)), V(o4, o4));
}
function I(n3, l4, u4) {
  var t4, i4;
  if ("function" == typeof n3.type) {
    for (t4 = n3.__k, i4 = 0; t4 && i4 < t4.length; i4++)
      t4[i4] && (t4[i4].__ = n3, l4 = I(t4[i4], l4, u4));
    return l4;
  }
  n3.__e != l4 && (l4 && n3.type && !u4.contains(l4) && (l4 = x(n3)), u4.insertBefore(n3.__e, l4 || null), l4 = n3.__e);
  do {
    l4 = l4 && l4.nextSibling;
  } while (null != l4 && 8 === l4.nodeType);
  return l4;
}
function H(n3, l4) {
  return l4 = l4 || [], null == n3 || "boolean" == typeof n3 || (y(n3) ? n3.some(function(n4) {
    H(n4, l4);
  }) : l4.push(n3)), l4;
}
function L(n3, l4, u4, t4) {
  var i4 = n3.key, o4 = n3.type, r3 = u4 - 1, f4 = u4 + 1, e3 = l4[u4];
  if (null === e3 || e3 && i4 == e3.key && o4 === e3.type && 0 == (131072 & e3.__u))
    return u4;
  if (t4 > (null != e3 && 0 == (131072 & e3.__u) ? 1 : 0))
    for (; r3 >= 0 || f4 < l4.length; ) {
      if (r3 >= 0) {
        if ((e3 = l4[r3]) && 0 == (131072 & e3.__u) && i4 == e3.key && o4 === e3.type)
          return r3;
        r3--;
      }
      if (f4 < l4.length) {
        if ((e3 = l4[f4]) && 0 == (131072 & e3.__u) && i4 == e3.key && o4 === e3.type)
          return f4;
        f4++;
      }
    }
  return -1;
}
function T(n3, l4, u4) {
  "-" === l4[0] ? n3.setProperty(l4, null == u4 ? "" : u4) : n3[l4] = null == u4 ? "" : "number" != typeof u4 || p.test(l4) ? u4 : u4 + "px";
}
function A(n3, l4, u4, t4, i4) {
  var o4;
  n:
    if ("style" === l4)
      if ("string" == typeof u4)
        n3.style.cssText = u4;
      else {
        if ("string" == typeof t4 && (n3.style.cssText = t4 = ""), t4)
          for (l4 in t4)
            u4 && l4 in u4 || T(n3.style, l4, "");
        if (u4)
          for (l4 in u4)
            t4 && u4[l4] === t4[l4] || T(n3.style, l4, u4[l4]);
      }
    else if ("o" === l4[0] && "n" === l4[1])
      o4 = l4 !== (l4 = l4.replace(/(PointerCapture)$|Capture$/i, "$1")), l4 = l4.toLowerCase() in n3 || "onFocusOut" === l4 || "onFocusIn" === l4 ? l4.toLowerCase().slice(2) : l4.slice(2), n3.l || (n3.l = {}), n3.l[l4 + o4] = u4, u4 ? t4 ? u4.u = t4.u : (u4.u = e, n3.addEventListener(l4, o4 ? s : c, o4)) : n3.removeEventListener(l4, o4 ? s : c, o4);
    else {
      if ("http://www.w3.org/2000/svg" == i4)
        l4 = l4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l4 && "height" != l4 && "href" != l4 && "list" != l4 && "form" != l4 && "tabIndex" != l4 && "download" != l4 && "rowSpan" != l4 && "colSpan" != l4 && "role" != l4 && "popover" != l4 && l4 in n3)
        try {
          n3[l4] = null == u4 ? "" : u4;
          break n;
        } catch (n4) {
        }
      "function" == typeof u4 || (null == u4 || false === u4 && "-" !== l4[4] ? n3.removeAttribute(l4) : n3.setAttribute(l4, "popover" == l4 && 1 == u4 ? "" : u4));
    }
}
function F(n3) {
  return function(u4) {
    if (this.l) {
      var t4 = this.l[u4.type + n3];
      if (null == u4.t)
        u4.t = e++;
      else if (u4.t < t4.u)
        return;
      return t4(l.event ? l.event(u4) : u4);
    }
  };
}
function O(n3, u4, t4, i4, o4, r3, f4, e3, c4, s3) {
  var a4, h3, v3, p4, w4, _4, g4, m3, x4, C4, S2, M3, $3, I3, H3, L3, T4 = u4.type;
  if (void 0 !== u4.constructor)
    return null;
  128 & t4.__u && (c4 = !!(32 & t4.__u), r3 = [e3 = u4.__e = t4.__e]), (a4 = l.__b) && a4(u4);
  n:
    if ("function" == typeof T4)
      try {
        if (m3 = u4.props, x4 = "prototype" in T4 && T4.prototype.render, C4 = (a4 = T4.contextType) && i4[a4.__c], S2 = a4 ? C4 ? C4.props.value : a4.__ : i4, t4.__c ? g4 = (h3 = u4.__c = t4.__c).__ = h3.__E : (x4 ? u4.__c = h3 = new T4(m3, S2) : (u4.__c = h3 = new k(m3, S2), h3.constructor = T4, h3.render = q), C4 && C4.sub(h3), h3.props = m3, h3.state || (h3.state = {}), h3.context = S2, h3.__n = i4, v3 = h3.__d = true, h3.__h = [], h3._sb = []), x4 && null == h3.__s && (h3.__s = h3.state), x4 && null != T4.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = d({}, h3.__s)), d(h3.__s, T4.getDerivedStateFromProps(m3, h3.__s))), p4 = h3.props, w4 = h3.state, h3.__v = u4, v3)
          x4 && null == T4.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), x4 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
        else {
          if (x4 && null == T4.getDerivedStateFromProps && m3 !== p4 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(m3, S2), !h3.__e && (null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(m3, h3.__s, S2) || u4.__v === t4.__v)) {
            for (u4.__v !== t4.__v && (h3.props = m3, h3.state = h3.__s, h3.__d = false), u4.__e = t4.__e, u4.__k = t4.__k, u4.__k.some(function(n4) {
              n4 && (n4.__ = u4);
            }), M3 = 0; M3 < h3._sb.length; M3++)
              h3.__h.push(h3._sb[M3]);
            h3._sb = [], h3.__h.length && f4.push(h3);
            break n;
          }
          null != h3.componentWillUpdate && h3.componentWillUpdate(m3, h3.__s, S2), x4 && null != h3.componentDidUpdate && h3.__h.push(function() {
            h3.componentDidUpdate(p4, w4, _4);
          });
        }
        if (h3.context = S2, h3.props = m3, h3.__P = n3, h3.__e = false, $3 = l.__r, I3 = 0, x4) {
          for (h3.state = h3.__s, h3.__d = false, $3 && $3(u4), a4 = h3.render(h3.props, h3.state, h3.context), H3 = 0; H3 < h3._sb.length; H3++)
            h3.__h.push(h3._sb[H3]);
          h3._sb = [];
        } else
          do {
            h3.__d = false, $3 && $3(u4), a4 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
          } while (h3.__d && ++I3 < 25);
        h3.state = h3.__s, null != h3.getChildContext && (i4 = d(d({}, i4), h3.getChildContext())), x4 && !v3 && null != h3.getSnapshotBeforeUpdate && (_4 = h3.getSnapshotBeforeUpdate(p4, w4)), P(n3, y(L3 = null != a4 && a4.type === b && null == a4.key ? a4.props.children : a4) ? L3 : [L3], u4, t4, i4, o4, r3, f4, e3, c4, s3), h3.base = u4.__e, u4.__u &= -161, h3.__h.length && f4.push(h3), g4 && (h3.__E = h3.__ = null);
      } catch (n4) {
        if (u4.__v = null, c4 || null != r3) {
          for (u4.__u |= c4 ? 160 : 128; e3 && 8 === e3.nodeType && e3.nextSibling; )
            e3 = e3.nextSibling;
          r3[r3.indexOf(e3)] = null, u4.__e = e3;
        } else
          u4.__e = t4.__e, u4.__k = t4.__k;
        l.__e(n4, u4, t4);
      }
    else
      null == r3 && u4.__v === t4.__v ? (u4.__k = t4.__k, u4.__e = t4.__e) : u4.__e = z(t4.__e, u4, t4, i4, o4, r3, f4, c4, s3);
  (a4 = l.diffed) && a4(u4);
}
function j(n3, u4, t4) {
  u4.__d = void 0;
  for (var i4 = 0; i4 < t4.length; i4++)
    N(t4[i4], t4[++i4], t4[++i4]);
  l.__c && l.__c(u4, n3), n3.some(function(u5) {
    try {
      n3 = u5.__h, u5.__h = [], n3.some(function(n4) {
        n4.call(u5);
      });
    } catch (n4) {
      l.__e(n4, u5.__v);
    }
  });
}
function z(u4, t4, i4, o4, r3, f4, e3, c4, s3) {
  var a4, v3, p4, d3, _4, g4, m3, b3 = i4.props, k4 = t4.props, C4 = t4.type;
  if ("svg" === C4 ? r3 = "http://www.w3.org/2000/svg" : "math" === C4 ? r3 = "http://www.w3.org/1998/Math/MathML" : r3 || (r3 = "http://www.w3.org/1999/xhtml"), null != f4) {
    for (a4 = 0; a4 < f4.length; a4++)
      if ((_4 = f4[a4]) && "setAttribute" in _4 == !!C4 && (C4 ? _4.localName === C4 : 3 === _4.nodeType)) {
        u4 = _4, f4[a4] = null;
        break;
      }
  }
  if (null == u4) {
    if (null === C4)
      return document.createTextNode(k4);
    u4 = document.createElementNS(r3, C4, k4.is && k4), c4 && (l.__m && l.__m(t4, f4), c4 = false), f4 = null;
  }
  if (null === C4)
    b3 === k4 || c4 && u4.data === k4 || (u4.data = k4);
  else {
    if (f4 = f4 && n.call(u4.childNodes), b3 = i4.props || h, !c4 && null != f4)
      for (b3 = {}, a4 = 0; a4 < u4.attributes.length; a4++)
        b3[(_4 = u4.attributes[a4]).name] = _4.value;
    for (a4 in b3)
      if (_4 = b3[a4], "children" == a4)
        ;
      else if ("dangerouslySetInnerHTML" == a4)
        p4 = _4;
      else if (!(a4 in k4)) {
        if ("value" == a4 && "defaultValue" in k4 || "checked" == a4 && "defaultChecked" in k4)
          continue;
        A(u4, a4, null, _4, r3);
      }
    for (a4 in k4)
      _4 = k4[a4], "children" == a4 ? d3 = _4 : "dangerouslySetInnerHTML" == a4 ? v3 = _4 : "value" == a4 ? g4 = _4 : "checked" == a4 ? m3 = _4 : c4 && "function" != typeof _4 || b3[a4] === _4 || A(u4, a4, _4, b3[a4], r3);
    if (v3)
      c4 || p4 && (v3.__html === p4.__html || v3.__html === u4.innerHTML) || (u4.innerHTML = v3.__html), t4.__k = [];
    else if (p4 && (u4.innerHTML = ""), P(u4, y(d3) ? d3 : [d3], t4, i4, o4, "foreignObject" === C4 ? "http://www.w3.org/1999/xhtml" : r3, f4, e3, f4 ? f4[0] : i4.__k && x(i4, 0), c4, s3), null != f4)
      for (a4 = f4.length; a4--; )
        w(f4[a4]);
    c4 || (a4 = "value", "progress" === C4 && null == g4 ? u4.removeAttribute("value") : void 0 !== g4 && (g4 !== u4[a4] || "progress" === C4 && !g4 || "option" === C4 && g4 !== b3[a4]) && A(u4, a4, g4, b3[a4], r3), a4 = "checked", void 0 !== m3 && m3 !== u4[a4] && A(u4, a4, m3, b3[a4], r3));
  }
  return u4;
}
function N(n3, u4, t4) {
  try {
    if ("function" == typeof n3) {
      var i4 = "function" == typeof n3.__u;
      i4 && n3.__u(), i4 && null == u4 || (n3.__u = n3(u4));
    } else
      n3.current = u4;
  } catch (n4) {
    l.__e(n4, t4);
  }
}
function V(n3, u4, t4) {
  var i4, o4;
  if (l.unmount && l.unmount(n3), (i4 = n3.ref) && (i4.current && i4.current !== n3.__e || N(i4, null, u4)), null != (i4 = n3.__c)) {
    if (i4.componentWillUnmount)
      try {
        i4.componentWillUnmount();
      } catch (n4) {
        l.__e(n4, u4);
      }
    i4.base = i4.__P = null;
  }
  if (i4 = n3.__k)
    for (o4 = 0; o4 < i4.length; o4++)
      i4[o4] && V(i4[o4], u4, t4 || "function" != typeof n3.type);
  t4 || w(n3.__e), n3.__c = n3.__ = n3.__e = n3.__d = void 0;
}
function q(n3, l4, u4) {
  return this.constructor(n3, u4);
}
function B(u4, t4, i4) {
  var o4, r3, f4, e3;
  l.__ && l.__(u4, t4), r3 = (o4 = "function" == typeof i4) ? null : i4 && i4.__k || t4.__k, f4 = [], e3 = [], O(t4, u4 = (!o4 && i4 || t4).__k = _(b, null, [u4]), r3 || h, h, t4.namespaceURI, !o4 && i4 ? [i4] : r3 ? null : t4.firstChild ? n.call(t4.childNodes) : null, f4, !o4 && i4 ? i4 : r3 ? r3.__e : t4.firstChild, o4, e3), j(f4, u4, e3);
}
function D(n3, l4) {
  B(n3, l4, D);
}
function E(l4, u4, t4) {
  var i4, o4, r3, f4, e3 = d({}, l4.props);
  for (r3 in l4.type && l4.type.defaultProps && (f4 = l4.type.defaultProps), u4)
    "key" == r3 ? i4 = u4[r3] : "ref" == r3 ? o4 = u4[r3] : e3[r3] = void 0 === u4[r3] && void 0 !== f4 ? f4[r3] : u4[r3];
  return arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t4), g(l4.type, e3, i4 || l4.key, o4 || l4.ref, null);
}
function G(n3, l4) {
  var u4 = { __c: l4 = "__cC" + a++, __: n3, Consumer: function(n4, l5) {
    return n4.children(l5);
  }, Provider: function(n4) {
    var u5, t4;
    return this.getChildContext || (u5 = /* @__PURE__ */ new Set(), (t4 = {})[l4] = this, this.getChildContext = function() {
      return t4;
    }, this.componentWillUnmount = function() {
      u5 = null;
    }, this.shouldComponentUpdate = function(n5) {
      this.props.value !== n5.value && u5.forEach(function(n6) {
        n6.__e = true, S(n6);
      });
    }, this.sub = function(n5) {
      u5.add(n5);
      var l5 = n5.componentWillUnmount;
      n5.componentWillUnmount = function() {
        u5 && u5.delete(n5), l5 && l5.call(n5);
      };
    }), n4.children;
  } };
  return u4.Provider.__ = u4.Consumer.contextType = u4;
}
var n, l, u, t, i, o, r, f, e, c, s, a, h, v, p, y;
var init_preact_module = __esm({
  "node_modules/preact/dist/preact.module.js"() {
    h = {};
    v = [];
    p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    y = Array.isArray;
    n = v.slice, l = { __e: function(n3, l4, u4, t4) {
      for (var i4, o4, r3; l4 = l4.__; )
        if ((i4 = l4.__c) && !i4.__)
          try {
            if ((o4 = i4.constructor) && null != o4.getDerivedStateFromError && (i4.setState(o4.getDerivedStateFromError(n3)), r3 = i4.__d), null != i4.componentDidCatch && (i4.componentDidCatch(n3, t4 || {}), r3 = i4.__d), r3)
              return i4.__E = i4;
          } catch (l5) {
            n3 = l5;
          }
      throw n3;
    } }, u = 0, t = function(n3) {
      return null != n3 && null == n3.constructor;
    }, k.prototype.setState = function(n3, l4) {
      var u4;
      u4 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n3 && (n3 = n3(d({}, u4), this.props)), n3 && d(u4, n3), null != n3 && this.__v && (l4 && this._sb.push(l4), S(this));
    }, k.prototype.forceUpdate = function(n3) {
      this.__v && (this.__e = true, n3 && this.__h.push(n3), S(this));
    }, k.prototype.render = b, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n3, l4) {
      return n3.__v.__b - l4.__v.__b;
    }, M.__r = 0, e = 0, c = F(false), s = F(true), a = 0;
  }
});

// node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module_exports = {};
__export(jsxRuntime_module_exports, {
  Fragment: () => b,
  jsx: () => u2,
  jsxAttr: () => p2,
  jsxDEV: () => u2,
  jsxEscape: () => _2,
  jsxTemplate: () => a2,
  jsxs: () => u2
});
function n2(r3) {
  if (0 === r3.length || false === t2.test(r3))
    return r3;
  for (var e3 = 0, n3 = 0, o4 = "", f4 = ""; n3 < r3.length; n3++) {
    switch (r3.charCodeAt(n3)) {
      case 34:
        f4 = "&quot;";
        break;
      case 38:
        f4 = "&amp;";
        break;
      case 60:
        f4 = "&lt;";
        break;
      default:
        continue;
    }
    n3 !== e3 && (o4 += r3.slice(e3, n3)), o4 += f4, e3 = n3 + 1;
  }
  return n3 !== e3 && (o4 += r3.slice(e3, n3)), o4;
}
function u2(e3, t4, n3, o4, i4, u4) {
  t4 || (t4 = {});
  var a4, c4, l4 = t4;
  "ref" in t4 && (a4 = t4.ref, delete t4.ref);
  var p4 = { type: e3, props: l4, key: n3, ref: a4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i4, __self: u4 };
  if ("function" == typeof e3 && (a4 = e3.defaultProps))
    for (c4 in a4)
      void 0 === l4[c4] && (l4[c4] = a4[c4]);
  return l.vnode && l.vnode(p4), p4;
}
function a2(r3) {
  var t4 = u2(b, { tpl: r3, exprs: [].slice.call(arguments, 1) });
  return t4.key = t4.__v, t4;
}
function p2(e3, t4) {
  if (l.attr) {
    var f4 = l.attr(e3, t4);
    if ("string" == typeof f4)
      return f4;
  }
  if ("ref" === e3 || "key" === e3)
    return "";
  if ("style" === e3 && "object" == typeof t4) {
    var i4 = "";
    for (var u4 in t4) {
      var a4 = t4[u4];
      if (null != a4 && "" !== a4) {
        var p4 = "-" == u4[0] ? u4 : c2[u4] || (c2[u4] = u4.replace(l2, "-$&").toLowerCase()), _4 = ";";
        "number" != typeof a4 || p4.startsWith("--") || o2.test(p4) || (_4 = "px;"), i4 = i4 + p4 + ":" + a4 + _4;
      }
    }
    return e3 + '="' + i4 + '"';
  }
  return null == t4 || false === t4 || "function" == typeof t4 || "object" == typeof t4 ? "" : true === t4 ? e3 : e3 + '="' + n2(t4) + '"';
}
function _2(r3) {
  if (null == r3 || "boolean" == typeof r3 || "function" == typeof r3)
    return null;
  if ("object" == typeof r3) {
    if (void 0 === r3.constructor)
      return r3;
    if (i2(r3)) {
      for (var e3 = 0; e3 < r3.length; e3++)
        r3[e3] = _2(r3[e3]);
      return r3;
    }
  }
  return n2("" + r3);
}
var t2, o2, f2, i2, c2, l2;
var init_jsxRuntime_module = __esm({
  "node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js"() {
    init_preact_module();
    init_preact_module();
    t2 = /["&<]/;
    o2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    f2 = 0;
    i2 = Array.isArray;
    c2 = {};
    l2 = /[A-Z]/g;
  }
});

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes = "";
        for (var i4 = 0; i4 < arguments.length; i4++) {
          var arg = arguments[i4];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// node_modules/preact/hooks/dist/hooks.module.js
function d2(n3, t4) {
  c3.__h && c3.__h(r2, n3, o3 || t4), o3 = 0;
  var u4 = r2.__H || (r2.__H = { __: [], __h: [] });
  return n3 >= u4.__.length && u4.__.push({}), u4.__[n3];
}
function h2(n3) {
  return o3 = 1, p3(D2, n3);
}
function p3(n3, u4, i4) {
  var o4 = d2(t3++, 2);
  if (o4.t = n3, !o4.__c && (o4.__ = [i4 ? i4(u4) : D2(void 0, u4), function(n4) {
    var t4 = o4.__N ? o4.__N[0] : o4.__[0], r3 = o4.t(t4, n4);
    t4 !== r3 && (o4.__N = [r3, o4.__[1]], o4.__c.setState({}));
  }], o4.__c = r2, !r2.u)) {
    var f4 = function(n4, t4, r3) {
      if (!o4.__c.__H)
        return true;
      var u5 = o4.__c.__H.__.filter(function(n5) {
        return !!n5.__c;
      });
      if (u5.every(function(n5) {
        return !n5.__N;
      }))
        return !c4 || c4.call(this, n4, t4, r3);
      var i5 = false;
      return u5.forEach(function(n5) {
        if (n5.__N) {
          var t5 = n5.__[0];
          n5.__ = n5.__N, n5.__N = void 0, t5 !== n5.__[0] && (i5 = true);
        }
      }), !(!i5 && o4.__c.props === n4) && (!c4 || c4.call(this, n4, t4, r3));
    };
    r2.u = true;
    var c4 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
    r2.componentWillUpdate = function(n4, t4, r3) {
      if (this.__e) {
        var u5 = c4;
        c4 = void 0, f4(n4, t4, r3), c4 = u5;
      }
      e3 && e3.call(this, n4, t4, r3);
    }, r2.shouldComponentUpdate = f4;
  }
  return o4.__N || o4.__;
}
function y2(n3, u4) {
  var i4 = d2(t3++, 3);
  !c3.__s && C2(i4.__H, u4) && (i4.__ = n3, i4.i = u4, r2.__H.__h.push(i4));
}
function _3(n3, u4) {
  var i4 = d2(t3++, 4);
  !c3.__s && C2(i4.__H, u4) && (i4.__ = n3, i4.i = u4, r2.__h.push(i4));
}
function A2(n3) {
  return o3 = 5, T2(function() {
    return { current: n3 };
  }, []);
}
function F2(n3, t4, r3) {
  o3 = 6, _3(function() {
    return "function" == typeof n3 ? (n3(t4()), function() {
      return n3(null);
    }) : n3 ? (n3.current = t4(), function() {
      return n3.current = null;
    }) : void 0;
  }, null == r3 ? r3 : r3.concat(n3));
}
function T2(n3, r3) {
  var u4 = d2(t3++, 7);
  return C2(u4.__H, r3) && (u4.__ = n3(), u4.__H = r3, u4.__h = n3), u4.__;
}
function q2(n3, t4) {
  return o3 = 8, T2(function() {
    return n3;
  }, t4);
}
function x2(n3) {
  var u4 = r2.context[n3.__c], i4 = d2(t3++, 9);
  return i4.c = n3, u4 ? (null == i4.__ && (i4.__ = true, u4.sub(r2)), u4.props.value) : n3.__;
}
function P2(n3, t4) {
  c3.useDebugValue && c3.useDebugValue(t4 ? t4(n3) : n3);
}
function b2(n3) {
  var u4 = d2(t3++, 10), i4 = h2();
  return u4.__ = n3, r2.componentDidCatch || (r2.componentDidCatch = function(n4, t4) {
    u4.__ && u4.__(n4, t4), i4[1](n4);
  }), [i4[0], function() {
    i4[1](void 0);
  }];
}
function g2() {
  var n3 = d2(t3++, 11);
  if (!n3.__) {
    for (var u4 = r2.__v; null !== u4 && !u4.__m && null !== u4.__; )
      u4 = u4.__;
    var i4 = u4.__m || (u4.__m = [0, 0]);
    n3.__ = "P" + i4[0] + "-" + i4[1]++;
  }
  return n3.__;
}
function j2() {
  for (var n3; n3 = f3.shift(); )
    if (n3.__P && n3.__H)
      try {
        n3.__H.__h.forEach(z2), n3.__H.__h.forEach(B2), n3.__H.__h = [];
      } catch (t4) {
        n3.__H.__h = [], c3.__e(t4, n3.__v);
      }
}
function w2(n3) {
  var t4, r3 = function() {
    clearTimeout(u4), k2 && cancelAnimationFrame(t4), setTimeout(n3);
  }, u4 = setTimeout(r3, 100);
  k2 && (t4 = requestAnimationFrame(r3));
}
function z2(n3) {
  var t4 = r2, u4 = n3.__c;
  "function" == typeof u4 && (n3.__c = void 0, u4()), r2 = t4;
}
function B2(n3) {
  var t4 = r2;
  n3.__c = n3.__(), r2 = t4;
}
function C2(n3, t4) {
  return !n3 || n3.length !== t4.length || t4.some(function(t5, r3) {
    return t5 !== n3[r3];
  });
}
function D2(n3, t4) {
  return "function" == typeof t4 ? t4(n3) : t4;
}
var t3, r2, u3, i3, o3, f3, c3, e2, a3, v2, l3, m2, s2, k2;
var init_hooks_module = __esm({
  "node_modules/preact/hooks/dist/hooks.module.js"() {
    init_preact_module();
    o3 = 0;
    f3 = [];
    c3 = l;
    e2 = c3.__b;
    a3 = c3.__r;
    v2 = c3.diffed;
    l3 = c3.__c;
    m2 = c3.unmount;
    s2 = c3.__;
    c3.__b = function(n3) {
      r2 = null, e2 && e2(n3);
    }, c3.__ = function(n3, t4) {
      n3 && t4.__k && t4.__k.__m && (n3.__m = t4.__k.__m), s2 && s2(n3, t4);
    }, c3.__r = function(n3) {
      a3 && a3(n3), t3 = 0;
      var i4 = (r2 = n3.__c).__H;
      i4 && (u3 === r2 ? (i4.__h = [], r2.__h = [], i4.__.forEach(function(n4) {
        n4.__N && (n4.__ = n4.__N), n4.i = n4.__N = void 0;
      })) : (i4.__h.forEach(z2), i4.__h.forEach(B2), i4.__h = [], t3 = 0)), u3 = r2;
    }, c3.diffed = function(n3) {
      v2 && v2(n3);
      var t4 = n3.__c;
      t4 && t4.__H && (t4.__H.__h.length && (1 !== f3.push(t4) && i3 === c3.requestAnimationFrame || ((i3 = c3.requestAnimationFrame) || w2)(j2)), t4.__H.__.forEach(function(n4) {
        n4.i && (n4.__H = n4.i), n4.i = void 0;
      })), u3 = r2 = null;
    }, c3.__c = function(n3, t4) {
      t4.some(function(n4) {
        try {
          n4.__h.forEach(z2), n4.__h = n4.__h.filter(function(n5) {
            return !n5.__ || B2(n5);
          });
        } catch (r3) {
          t4.some(function(n5) {
            n5.__h && (n5.__h = []);
          }), t4 = [], c3.__e(r3, n4.__v);
        }
      }), l3 && l3(n3, t4);
    }, c3.unmount = function(n3) {
      m2 && m2(n3);
      var t4, r3 = n3.__c;
      r3 && r3.__H && (r3.__H.__.forEach(function(n4) {
        try {
          z2(n4);
        } catch (n5) {
          t4 = n5;
        }
      }), r3.__H = void 0, t4 && c3.__e(t4, r3.__v));
    };
    k2 = "function" == typeof requestAnimationFrame;
  }
});

// node_modules/preact/compat/dist/compat.module.js
var compat_module_exports = {};
__export(compat_module_exports, {
  Children: () => I2,
  Component: () => k,
  Fragment: () => b,
  PureComponent: () => E2,
  StrictMode: () => mn,
  Suspense: () => D3,
  SuspenseList: () => F3,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => un,
  cloneElement: () => sn,
  createContext: () => G,
  createElement: () => _,
  createFactory: () => cn,
  createPortal: () => P3,
  createRef: () => m,
  default: () => xn,
  findDOMNode: () => vn,
  flushSync: () => pn,
  forwardRef: () => w3,
  hydrate: () => q3,
  isElement: () => gn,
  isFragment: () => ln,
  isMemo: () => an,
  isValidElement: () => fn,
  lazy: () => O2,
  memo: () => C3,
  render: () => $2,
  startTransition: () => yn,
  unmountComponentAtNode: () => hn,
  unstable_batchedUpdates: () => dn,
  useCallback: () => q2,
  useContext: () => x2,
  useDebugValue: () => P2,
  useDeferredValue: () => _n,
  useEffect: () => y2,
  useErrorBoundary: () => b2,
  useId: () => g2,
  useImperativeHandle: () => F2,
  useInsertionEffect: () => Sn,
  useLayoutEffect: () => _3,
  useMemo: () => T2,
  useReducer: () => p3,
  useRef: () => A2,
  useState: () => h2,
  useSyncExternalStore: () => En,
  useTransition: () => bn,
  version: () => on
});
function g3(n3, t4) {
  for (var e3 in n3)
    if ("__source" !== e3 && !(e3 in t4))
      return true;
  for (var r3 in t4)
    if ("__source" !== r3 && n3[r3] !== t4[r3])
      return true;
  return false;
}
function E2(n3, t4) {
  this.props = n3, this.context = t4;
}
function C3(n3, e3) {
  function r3(n4) {
    var t4 = this.props.ref, r4 = t4 == n4.ref;
    return !r4 && t4 && (t4.call ? t4(null) : t4.current = null), e3 ? !e3(this.props, n4) || !r4 : g3(this.props, n4);
  }
  function u4(e4) {
    return this.shouldComponentUpdate = r3, _(n3, e4);
  }
  return u4.displayName = "Memo(" + (n3.displayName || n3.name) + ")", u4.prototype.isReactComponent = true, u4.__f = true, u4;
}
function w3(n3) {
  function t4(t5) {
    if (!("ref" in t5))
      return n3(t5, null);
    var e3 = t5.ref;
    delete t5.ref;
    var r3 = n3(t5, e3);
    return t5.ref = e3, r3;
  }
  return t4.$$typeof = R, t4.render = t4, t4.prototype.isReactComponent = t4.__f = true, t4.displayName = "ForwardRef(" + (n3.displayName || n3.name) + ")", t4;
}
function T3(n3, t4, e3) {
  return n3 && (n3.__c && n3.__c.__H && (n3.__c.__H.__.forEach(function(n4) {
    "function" == typeof n4.__c && n4.__c();
  }), n3.__c.__H = null), null != (n3 = function(n4, t5) {
    for (var e4 in t5)
      n4[e4] = t5[e4];
    return n4;
  }({}, n3)).__c && (n3.__c.__P === e3 && (n3.__c.__P = t4), n3.__c = null), n3.__k = n3.__k && n3.__k.map(function(n4) {
    return T3(n4, t4, e3);
  })), n3;
}
function A3(n3, t4, e3) {
  return n3 && e3 && (n3.__v = null, n3.__k = n3.__k && n3.__k.map(function(n4) {
    return A3(n4, t4, e3);
  }), n3.__c && n3.__c.__P === t4 && (n3.__e && e3.appendChild(n3.__e), n3.__c.__e = true, n3.__c.__P = e3)), n3;
}
function D3() {
  this.__u = 0, this.t = null, this.__b = null;
}
function L2(n3) {
  var t4 = n3.__.__c;
  return t4 && t4.__a && t4.__a(n3);
}
function O2(n3) {
  var e3, r3, u4;
  function o4(o5) {
    if (e3 || (e3 = n3()).then(function(n4) {
      r3 = n4.default || n4;
    }, function(n4) {
      u4 = n4;
    }), u4)
      throw u4;
    if (!r3)
      throw e3;
    return _(r3, o5);
  }
  return o4.displayName = "Lazy", o4.__f = true, o4;
}
function F3() {
  this.u = null, this.o = null;
}
function V2(n3) {
  return this.getChildContext = function() {
    return n3.context;
  }, n3.children;
}
function W(n3) {
  var e3 = this, r3 = n3.i;
  e3.componentWillUnmount = function() {
    B(null, e3.l), e3.l = null, e3.i = null;
  }, e3.i && e3.i !== r3 && e3.componentWillUnmount(), e3.l || (e3.i = r3, e3.l = { nodeType: 1, parentNode: r3, childNodes: [], contains: function() {
    return true;
  }, appendChild: function(n4) {
    this.childNodes.push(n4), e3.i.appendChild(n4);
  }, insertBefore: function(n4, t4) {
    this.childNodes.push(n4), e3.i.appendChild(n4);
  }, removeChild: function(n4) {
    this.childNodes.splice(this.childNodes.indexOf(n4) >>> 1, 1), e3.i.removeChild(n4);
  } }), B(_(V2, { context: e3.context }, n3.__v), e3.l);
}
function P3(n3, e3) {
  var r3 = _(W, { __v: n3, i: e3 });
  return r3.containerInfo = e3, r3;
}
function $2(n3, t4, e3) {
  return null == t4.__k && (t4.textContent = ""), B(n3, t4), "function" == typeof e3 && e3(), n3 ? n3.__c : null;
}
function q3(n3, t4, e3) {
  return D(n3, t4), "function" == typeof e3 && e3(), n3 ? n3.__c : null;
}
function J() {
}
function K() {
  return this.cancelBubble;
}
function Q() {
  return this.defaultPrevented;
}
function cn(n3) {
  return _.bind(null, n3);
}
function fn(n3) {
  return !!n3 && n3.$$typeof === j3;
}
function ln(n3) {
  return fn(n3) && n3.type === b;
}
function an(n3) {
  return !!n3 && !!n3.displayName && ("string" == typeof n3.displayName || n3.displayName instanceof String) && n3.displayName.startsWith("Memo(");
}
function sn(n3) {
  return fn(n3) ? E.apply(null, arguments) : n3;
}
function hn(n3) {
  return !!n3.__k && (B(null, n3), true);
}
function vn(n3) {
  return n3 && (n3.base || 1 === n3.nodeType && n3) || null;
}
function yn(n3) {
  n3();
}
function _n(n3) {
  return n3;
}
function bn() {
  return [false, yn];
}
function En(n3, t4) {
  var e3 = t4(), r3 = h2({ h: { __: e3, v: t4 } }), u4 = r3[0].h, o4 = r3[1];
  return _3(function() {
    u4.__ = e3, u4.v = t4, Cn(u4) && o4({ h: u4 });
  }, [n3, e3, t4]), y2(function() {
    return Cn(u4) && o4({ h: u4 }), n3(function() {
      Cn(u4) && o4({ h: u4 });
    });
  }, [n3]), e3;
}
function Cn(n3) {
  var t4, e3, r3 = n3.v, u4 = n3.__;
  try {
    var o4 = r3();
    return !((t4 = u4) === (e3 = o4) && (0 !== t4 || 1 / t4 == 1 / e3) || t4 != t4 && e3 != e3);
  } catch (n4) {
    return true;
  }
}
var x3, R, k3, I2, N2, M2, U, j3, z3, B3, H2, Z, Y, G2, X, nn, tn, en, rn, un, on, dn, pn, mn, Sn, gn, xn;
var init_compat_module = __esm({
  "node_modules/preact/compat/dist/compat.module.js"() {
    init_preact_module();
    init_preact_module();
    init_hooks_module();
    init_hooks_module();
    (E2.prototype = new k()).isPureReactComponent = true, E2.prototype.shouldComponentUpdate = function(n3, t4) {
      return g3(this.props, n3) || g3(this.state, t4);
    };
    x3 = l.__b;
    l.__b = function(n3) {
      n3.type && n3.type.__f && n3.ref && (n3.props.ref = n3.ref, n3.ref = null), x3 && x3(n3);
    };
    R = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
    k3 = function(n3, t4) {
      return null == n3 ? null : H(H(n3).map(t4));
    };
    I2 = { map: k3, forEach: k3, count: function(n3) {
      return n3 ? H(n3).length : 0;
    }, only: function(n3) {
      var t4 = H(n3);
      if (1 !== t4.length)
        throw "Children.only";
      return t4[0];
    }, toArray: H };
    N2 = l.__e;
    l.__e = function(n3, t4, e3, r3) {
      if (n3.then) {
        for (var u4, o4 = t4; o4 = o4.__; )
          if ((u4 = o4.__c) && u4.__c)
            return null == t4.__e && (t4.__e = e3.__e, t4.__k = e3.__k), u4.__c(n3, t4);
      }
      N2(n3, t4, e3, r3);
    };
    M2 = l.unmount;
    l.unmount = function(n3) {
      var t4 = n3.__c;
      t4 && t4.__R && t4.__R(), t4 && 32 & n3.__u && (n3.type = null), M2 && M2(n3);
    }, (D3.prototype = new k()).__c = function(n3, t4) {
      var e3 = t4.__c, r3 = this;
      null == r3.t && (r3.t = []), r3.t.push(e3);
      var u4 = L2(r3.__v), o4 = false, i4 = function() {
        o4 || (o4 = true, e3.__R = null, u4 ? u4(c4) : c4());
      };
      e3.__R = i4;
      var c4 = function() {
        if (!--r3.__u) {
          if (r3.state.__a) {
            var n4 = r3.state.__a;
            r3.__v.__k[0] = A3(n4, n4.__c.__P, n4.__c.__O);
          }
          var t5;
          for (r3.setState({ __a: r3.__b = null }); t5 = r3.t.pop(); )
            t5.forceUpdate();
        }
      };
      r3.__u++ || 32 & t4.__u || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n3.then(i4, i4);
    }, D3.prototype.componentWillUnmount = function() {
      this.t = [];
    }, D3.prototype.render = function(n3, e3) {
      if (this.__b) {
        if (this.__v.__k) {
          var r3 = document.createElement("div"), o4 = this.__v.__k[0].__c;
          this.__v.__k[0] = T3(this.__b, r3, o4.__O = o4.__P);
        }
        this.__b = null;
      }
      var i4 = e3.__a && _(b, null, n3.fallback);
      return i4 && (i4.__u &= -33), [_(b, null, e3.__a ? null : n3.children), i4];
    };
    U = function(n3, t4, e3) {
      if (++e3[1] === e3[0] && n3.o.delete(t4), n3.props.revealOrder && ("t" !== n3.props.revealOrder[0] || !n3.o.size))
        for (e3 = n3.u; e3; ) {
          for (; e3.length > 3; )
            e3.pop()();
          if (e3[1] < e3[0])
            break;
          n3.u = e3 = e3[2];
        }
    };
    (F3.prototype = new k()).__a = function(n3) {
      var t4 = this, e3 = L2(t4.__v), r3 = t4.o.get(n3);
      return r3[0]++, function(u4) {
        var o4 = function() {
          t4.props.revealOrder ? (r3.push(u4), U(t4, n3, r3)) : u4();
        };
        e3 ? e3(o4) : o4();
      };
    }, F3.prototype.render = function(n3) {
      this.u = null, this.o = /* @__PURE__ */ new Map();
      var t4 = H(n3.children);
      n3.revealOrder && "b" === n3.revealOrder[0] && t4.reverse();
      for (var e3 = t4.length; e3--; )
        this.o.set(t4[e3], this.u = [1, 0, this.u]);
      return n3.children;
    }, F3.prototype.componentDidUpdate = F3.prototype.componentDidMount = function() {
      var n3 = this;
      this.o.forEach(function(t4, e3) {
        U(n3, e3, t4);
      });
    };
    j3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
    z3 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
    B3 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
    H2 = /[A-Z0-9]/g;
    Z = "undefined" != typeof document;
    Y = function(n3) {
      return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n3);
    };
    k.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t4) {
      Object.defineProperty(k.prototype, t4, { configurable: true, get: function() {
        return this["UNSAFE_" + t4];
      }, set: function(n3) {
        Object.defineProperty(this, t4, { configurable: true, writable: true, value: n3 });
      } });
    });
    G2 = l.event;
    l.event = function(n3) {
      return G2 && (n3 = G2(n3)), n3.persist = J, n3.isPropagationStopped = K, n3.isDefaultPrevented = Q, n3.nativeEvent = n3;
    };
    nn = { enumerable: false, configurable: true, get: function() {
      return this.class;
    } };
    tn = l.vnode;
    l.vnode = function(n3) {
      "string" == typeof n3.type && function(n4) {
        var t4 = n4.props, e3 = n4.type, u4 = {}, o4 = -1 === e3.indexOf("-");
        for (var i4 in t4) {
          var c4 = t4[i4];
          if (!("value" === i4 && "defaultValue" in t4 && null == c4 || Z && "children" === i4 && "noscript" === e3 || "class" === i4 || "className" === i4)) {
            var f4 = i4.toLowerCase();
            "defaultValue" === i4 && "value" in t4 && null == t4.value ? i4 = "value" : "download" === i4 && true === c4 ? c4 = "" : "translate" === f4 && "no" === c4 ? c4 = false : "o" === f4[0] && "n" === f4[1] ? "ondoubleclick" === f4 ? i4 = "ondblclick" : "onchange" !== f4 || "input" !== e3 && "textarea" !== e3 || Y(t4.type) ? "onfocus" === f4 ? i4 = "onfocusin" : "onblur" === f4 ? i4 = "onfocusout" : B3.test(i4) && (i4 = f4) : f4 = i4 = "oninput" : o4 && z3.test(i4) ? i4 = i4.replace(H2, "-$&").toLowerCase() : null === c4 && (c4 = void 0), "oninput" === f4 && u4[i4 = f4] && (i4 = "oninputCapture"), u4[i4] = c4;
          }
        }
        "select" == e3 && u4.multiple && Array.isArray(u4.value) && (u4.value = H(t4.children).forEach(function(n5) {
          n5.props.selected = -1 != u4.value.indexOf(n5.props.value);
        })), "select" == e3 && null != u4.defaultValue && (u4.value = H(t4.children).forEach(function(n5) {
          n5.props.selected = u4.multiple ? -1 != u4.defaultValue.indexOf(n5.props.value) : u4.defaultValue == n5.props.value;
        })), t4.class && !t4.className ? (u4.class = t4.class, Object.defineProperty(u4, "className", nn)) : (t4.className && !t4.class || t4.class && t4.className) && (u4.class = u4.className = t4.className), n4.props = u4;
      }(n3), n3.$$typeof = j3, tn && tn(n3);
    };
    en = l.__r;
    l.__r = function(n3) {
      en && en(n3), X = n3.__c;
    };
    rn = l.diffed;
    l.diffed = function(n3) {
      rn && rn(n3);
      var t4 = n3.props, e3 = n3.__e;
      null != e3 && "textarea" === n3.type && "value" in t4 && t4.value !== e3.value && (e3.value = null == t4.value ? "" : t4.value), X = null;
    };
    un = { ReactCurrentDispatcher: { current: { readContext: function(n3) {
      return X.__n[n3.__c].props.value;
    }, useCallback: q2, useContext: x2, useDebugValue: P2, useDeferredValue: _n, useEffect: y2, useId: g2, useImperativeHandle: F2, useInsertionEffect: Sn, useLayoutEffect: _3, useMemo: T2, useReducer: p3, useRef: A2, useState: h2, useSyncExternalStore: En, useTransition: bn } } };
    on = "18.3.1";
    dn = function(n3, t4) {
      return n3(t4);
    };
    pn = function(n3, t4) {
      return n3(t4);
    };
    mn = b;
    Sn = _3;
    gn = fn;
    xn = { useState: h2, useId: g2, useReducer: p3, useEffect: y2, useLayoutEffect: _3, useInsertionEffect: Sn, useTransition: bn, useDeferredValue: _n, useSyncExternalStore: En, startTransition: yn, useRef: A2, useImperativeHandle: F2, useMemo: T2, useCallback: q2, useContext: x2, useDebugValue: P2, version: "18.3.1", Children: I2, render: $2, hydrate: q3, unmountComponentAtNode: hn, createPortal: P3, createElement: _, createContext: G, createFactory: cn, cloneElement: sn, createRef: m, Fragment: b, isValidElement: fn, isElement: gn, isFragment: ln, isMemo: an, findDOMNode: vn, Component: k, PureComponent: E2, memo: C3, forwardRef: w3, flushSync: pn, unstable_batchedUpdates: dn, StrictMode: mn, Suspense: D3, SuspenseList: F3, lazy: O2, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: un };
  }
});

// node_modules/@bytescale/sdk/dist/browser/cjs/main.js
var require_main = __commonJS({
  "node_modules/@bytescale/sdk/dist/browser/cjs/main.js"(exports, module) {
    (function() {
      "use strict";
      var __lib_require__ = {};
      !function() {
        __lib_require__.d = function(exports2, definition) {
          for (var key in definition) {
            if (__lib_require__.o(definition, key) && !__lib_require__.o(exports2, key)) {
              Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
            }
          }
        };
      }();
      !function() {
        __lib_require__.o = function(obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
      }();
      !function() {
        __lib_require__.r = function(exports2) {
          if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
          }
          Object.defineProperty(exports2, "__esModule", { value: true });
        };
      }();
      var __lib_exports__ = {};
      __lib_require__.r(__lib_exports__);
      __lib_require__.d(__lib_exports__, {
        AuthManager: function() {
          return (
            /* reexport */
            AuthManager
          );
        },
        BaseAPI: function() {
          return (
            /* reexport */
            BaseAPI
          );
        },
        BinaryResult: function() {
          return (
            /* reexport */
            BinaryResult
          );
        },
        BytescaleApiClientConfigUtils: function() {
          return (
            /* reexport */
            BytescaleApiClientConfigUtils
          );
        },
        BytescaleApiError: function() {
          return (
            /* reexport */
            BytescaleApiError
          );
        },
        BytescaleGenericError: function() {
          return (
            /* reexport */
            BytescaleGenericError
          );
        },
        CacheApi: function() {
          return (
            /* reexport */
            CacheApi
          );
        },
        CancelledError: function() {
          return (
            /* reexport */
            CancelledError
          );
        },
        CommonTypesNoOp: function() {
          return (
            /* reexport */
            CommonTypesNoOp
          );
        },
        FileApi: function() {
          return (
            /* reexport */
            FileApi
          );
        },
        FolderApi: function() {
          return (
            /* reexport */
            FolderApi
          );
        },
        JSONApiResponse: function() {
          return (
            /* reexport */
            JSONApiResponse
          );
        },
        JobApi: function() {
          return (
            /* reexport */
            JobApi
          );
        },
        UploadApi: function() {
          return (
            /* reexport */
            UploadApi
          );
        },
        UploadManager: function() {
          return (
            /* reexport */
            UploadManager
          );
        },
        UrlBuilder: function() {
          return (
            /* reexport */
            UrlBuilder
          );
        },
        UrlBuilderTypesNoOp: function() {
          return (
            /* reexport */
            UrlBuilderTypesNoOp
          );
        },
        VoidApiResponse: function() {
          return (
            /* reexport */
            VoidApiResponse
          );
        },
        encodeBytescaleQuerystringKVP: function() {
          return (
            /* reexport */
            encodeBytescaleQuerystringKVP
          );
        },
        querystring: function() {
          return (
            /* reexport */
            querystring
          );
        }
      });
      ;
      function _call(body, then, direct) {
        if (direct) {
          return then ? then(body()) : body();
        }
        try {
          var result = Promise.resolve(body());
          return then ? result.then(then) : result;
        } catch (e3) {
          return Promise.reject(e3);
        }
      }
      function _rethrow(thrown, value) {
        if (thrown)
          throw value;
        return value;
      }
      function _finallyRethrows(body, finalizer) {
        try {
          var result = body();
        } catch (e3) {
          return finalizer(true, e3);
        }
        if (result && result.then) {
          return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
        }
        return finalizer(false, result);
      }
      function _await(value, then, direct) {
        if (direct) {
          return then ? then(value) : value;
        }
        if (!value || !value.then) {
          value = Promise.resolve(value);
        }
        return then ? value.then(then) : value;
      }
      function _empty() {
      }
      function _awaitIgnored(value, direct) {
        if (!direct) {
          return value && value.then ? value.then(_empty) : Promise.resolve();
        }
      }
      function _invoke(body, then) {
        var result = body();
        if (result && result.then) {
          return result.then(then);
        }
        return then(result);
      }
      function _typeof(o4) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o5) {
          return typeof o5;
        } : function(o5) {
          return o5 && "function" == typeof Symbol && o5.constructor === Symbol && o5 !== Symbol.prototype ? "symbol" : typeof o5;
        }, _typeof(o4);
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i4 = 0; i4 < props.length; i4++) {
          var descriptor = props[i4];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function _toPropertyKey(t4) {
        var i4 = _toPrimitive(t4, "string");
        return "symbol" == _typeof(i4) ? i4 : i4 + "";
      }
      function _toPrimitive(t4, r3) {
        if ("object" != _typeof(t4) || !t4)
          return t4;
        var e3 = t4[Symbol.toPrimitive];
        if (void 0 !== e3) {
          var i4 = e3.call(t4, r3 || "default");
          if ("object" != _typeof(i4))
            return i4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r3 ? String : Number)(t4);
      }
      var FairMutex = function() {
        function FairMutex2() {
          _classCallCheck(this, FairMutex2);
          this.locked = false;
          this.queue = [];
        }
        return _createClass(FairMutex2, [{
          key: "safe",
          value: function safe(callback) {
            try {
              var _this = this;
              return _await(_this.lock(), function() {
                return _finallyRethrows(callback, function(_wasThrown, _result) {
                  _this.unlock();
                  return _rethrow(_wasThrown, _result);
                });
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }, {
          key: "lock",
          value: function lock() {
            try {
              var _exit = false;
              var _this2 = this;
              return _await(_invoke(function() {
                if (_this2.locked) {
                  var unlockNext;
                  var lockPromise = new Promise(function(resolve) {
                    unlockNext = resolve;
                  });
                  if (unlockNext === void 0) {
                    throw new Error("unlockNext was undefined");
                  }
                  _this2.queue.push({
                    resolve: unlockNext
                  });
                  return _awaitIgnored(lockPromise);
                }
              }, function(_result2) {
                if (_exit)
                  return _result2;
                _this2.locked = true;
              }));
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }, {
          key: "unlock",
          value: function unlock() {
            if (!this.locked) {
              throw new Error("Mutex is not locked.");
            }
            var nextInQueue = this.queue.shift();
            if (nextInQueue !== void 0) {
              nextInQueue.resolve();
            } else {
              this.locked = false;
            }
          }
        }]);
      }();
      ;
      function AuthSessionState_typeof(o4) {
        "@babel/helpers - typeof";
        return AuthSessionState_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o5) {
          return typeof o5;
        } : function(o5) {
          return o5 && "function" == typeof Symbol && o5.constructor === Symbol && o5 !== Symbol.prototype ? "symbol" : typeof o5;
        }, AuthSessionState_typeof(o4);
      }
      function AuthSessionState_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function AuthSessionState_defineProperties(target, props) {
        for (var i4 = 0; i4 < props.length; i4++) {
          var descriptor = props[i4];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, AuthSessionState_toPropertyKey(descriptor.key), descriptor);
        }
      }
      function AuthSessionState_createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          AuthSessionState_defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          AuthSessionState_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function AuthSessionState_toPropertyKey(t4) {
        var i4 = AuthSessionState_toPrimitive(t4, "string");
        return "symbol" == AuthSessionState_typeof(i4) ? i4 : i4 + "";
      }
      function AuthSessionState_toPrimitive(t4, r3) {
        if ("object" != AuthSessionState_typeof(t4) || !t4)
          return t4;
        var e3 = t4[Symbol.toPrimitive];
        if (void 0 !== e3) {
          var i4 = e3.call(t4, r3 || "default");
          if ("object" != AuthSessionState_typeof(i4))
            return i4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r3 ? String : Number)(t4);
      }
      var AuthSessionState = function() {
        function AuthSessionState2() {
          AuthSessionState_classCallCheck(this, AuthSessionState2);
        }
        return AuthSessionState_createClass(AuthSessionState2, null, [{
          key: "getMutex",
          value: (
            /**
             * Called in the browser only.
             */
            function getMutex() {
              var key = AuthSessionState2.mutexKey;
              var mutex = window[key];
              if (mutex === void 0) {
                mutex = new FairMutex();
                window[key] = mutex;
              }
              return mutex;
            }
          )
          /**
           * Called in the browser only.
           */
        }, {
          key: "setSession",
          value: function setSession(session) {
            window[AuthSessionState2.stateKey] = session;
          }
          /**
           * Called in the browser and in Node.js (so we check the env before calling env-specific code).
           */
        }, {
          key: "getSession",
          value: function getSession() {
            if (typeof window === "undefined") {
              return void 0;
            }
            return window[AuthSessionState2.stateKey];
          }
        }]);
      }();
      AuthSessionState.stateKey = "BytescaleSessionState";
      AuthSessionState.mutexKey = "BytescaleSessionStateMutex";
      ;
      function ConsoleUtils_typeof(o4) {
        "@babel/helpers - typeof";
        return ConsoleUtils_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o5) {
          return typeof o5;
        } : function(o5) {
          return o5 && "function" == typeof Symbol && o5.constructor === Symbol && o5 !== Symbol.prototype ? "symbol" : typeof o5;
        }, ConsoleUtils_typeof(o4);
      }
      function ConsoleUtils_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function ConsoleUtils_defineProperties(target, props) {
        for (var i4 = 0; i4 < props.length; i4++) {
          var descriptor = props[i4];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, ConsoleUtils_toPropertyKey(descriptor.key), descriptor);
        }
      }
      function ConsoleUtils_createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          ConsoleUtils_defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          ConsoleUtils_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function ConsoleUtils_toPropertyKey(t4) {
        var i4 = ConsoleUtils_toPrimitive(t4, "string");
        return "symbol" == ConsoleUtils_typeof(i4) ? i4 : i4 + "";
      }
      function ConsoleUtils_toPrimitive(t4, r3) {
        if ("object" != ConsoleUtils_typeof(t4) || !t4)
          return t4;
        var e3 = t4[Symbol.toPrimitive];
        if (void 0 !== e3) {
          var i4 = e3.call(t4, r3 || "default");
          if ("object" != ConsoleUtils_typeof(i4))
            return i4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r3 ? String : Number)(t4);
      }
      var ConsoleUtils = function() {
        function ConsoleUtils2() {
          ConsoleUtils_classCallCheck(this, ConsoleUtils2);
        }
        return ConsoleUtils_createClass(ConsoleUtils2, null, [{
          key: "debug",
          value: function debug(message) {
            console.log(ConsoleUtils2.prefix(message));
          }
        }, {
          key: "warn",
          value: function warn(message) {
            console.warn(ConsoleUtils2.prefix(message));
          }
        }, {
          key: "error",
          value: function error(message) {
            console.error(ConsoleUtils2.prefix(message));
          }
        }, {
          key: "prefix",
          value: function prefix(message) {
            return "[bytescale-sdk] ".concat(message);
          }
        }]);
      }();
      ;
      function runtime_await(value, then, direct) {
        if (direct) {
          return then ? then(value) : value;
        }
        if (!value || !value.then) {
          value = Promise.resolve(value);
        }
        return then ? value.then(then) : value;
      }
      function _catch(body, recover) {
        try {
          var result = body();
        } catch (e3) {
          return recover(e3);
        }
        if (result && result.then) {
          return result.then(void 0, recover);
        }
        return result;
      }
      function runtime_empty() {
      }
      function _continue(value, then) {
        return value && value.then ? value.then(then) : then(value);
      }
      function runtime_invoke(body, then) {
        var result = body();
        if (result && result.then) {
          return result.then(then);
        }
        return then(result);
      }
      function runtime_typeof(o4) {
        "@babel/helpers - typeof";
        return runtime_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o5) {
          return typeof o5;
        } : function(o5) {
          return o5 && "function" == typeof Symbol && o5.constructor === Symbol && o5 !== Symbol.prototype ? "symbol" : typeof o5;
        }, runtime_typeof(o4);
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _unsupportedIterableToArray(o4, minLen) {
        if (!o4)
          return;
        if (typeof o4 === "string")
          return _arrayLikeToArray(o4, minLen);
        var n3 = Object.prototype.toString.call(o4).slice(8, -1);
        if (n3 === "Object" && o4.constructor)
          n3 = o4.constructor.name;
        if (n3 === "Map" || n3 === "Set")
          return Array.from(o4);
        if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
          return _arrayLikeToArray(o4, minLen);
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
          arr2[i4] = arr[i4];
        return arr2;
      }
      function _callSuper(t4, o4, e3) {
        return o4 = _getPrototypeOf(o4), _possibleConstructorReturn(t4, _isNativeReflectConstruct() ? Reflect.construct(o4, e3 || [], _getPrototypeOf(t4).constructor) : o4.apply(t4, e3));
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (runtime_typeof(call) === "object" || typeof call === "function")) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError("Derived constructors may only return object or undefined");
        }
        return _assertThisInitialized(self);
      }
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
        Object.defineProperty(subClass, "prototype", { writable: false });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
        _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
          if (Class2 === null || !_isNativeFunction(Class2))
            return Class2;
          if (typeof Class2 !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }
          if (typeof _cache !== "undefined") {
            if (_cache.has(Class2))
              return _cache.get(Class2);
            _cache.set(Class2, Wrapper);
          }
          function Wrapper() {
            return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
          return _setPrototypeOf(Wrapper, Class2);
        };
        return _wrapNativeSuper(Class);
      }
      function _construct(t4, e3, r3) {
        if (_isNativeReflectConstruct())
          return Reflect.construct.apply(null, arguments);
        var o4 = [null];
        o4.push.apply(o4, e3);
        var p4 = new (t4.bind.apply(t4, o4))();
        return r3 && _setPrototypeOf(p4, r3.prototype), p4;
      }
      function _isNativeReflectConstruct() {
        try {
          var t4 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (t5) {
        }
        return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
          return !!t4;
        })();
      }
      function _isNativeFunction(fn2) {
        try {
          return Function.toString.call(fn2).indexOf("[native code]") !== -1;
        } catch (e3) {
          return typeof fn2 === "function";
        }
      }
      function _setPrototypeOf(o4, p4) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o5, p5) {
          o5.__proto__ = p5;
          return o5;
        };
        return _setPrototypeOf(o4, p4);
      }
      function _getPrototypeOf(o4) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o5) {
          return o5.__proto__ || Object.getPrototypeOf(o5);
        };
        return _getPrototypeOf(o4);
      }
      function _defineProperty(obj, key, value) {
        key = runtime_toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function runtime_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function runtime_defineProperties(target, props) {
        for (var i4 = 0; i4 < props.length; i4++) {
          var descriptor = props[i4];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, runtime_toPropertyKey(descriptor.key), descriptor);
        }
      }
      function runtime_createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          runtime_defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          runtime_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function runtime_toPropertyKey(t4) {
        var i4 = runtime_toPrimitive(t4, "string");
        return "symbol" == runtime_typeof(i4) ? i4 : i4 + "";
      }
      function runtime_toPrimitive(t4, r3) {
        if ("object" != runtime_typeof(t4) || !t4)
          return t4;
        var e3 = t4[Symbol.toPrimitive];
        if (void 0 !== e3) {
          var i4 = e3.call(t4, r3 || "default");
          if ("object" != runtime_typeof(i4))
            return i4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r3 ? String : Number)(t4);
      }
      var BytescaleApiClientConfigUtils = function() {
        function BytescaleApiClientConfigUtils2() {
          runtime_classCallCheck(this, BytescaleApiClientConfigUtils2);
        }
        return runtime_createClass(BytescaleApiClientConfigUtils2, null, [{
          key: "getApiUrl",
          value: function getApiUrl(config) {
            var _a;
            return (_a = config.apiUrl) !== null && _a !== void 0 ? _a : BytescaleApiClientConfigUtils2.defaultApiUrl;
          }
        }, {
          key: "getCdnUrl",
          value: function getCdnUrl(config) {
            var _a;
            return (_a = config.cdnUrl) !== null && _a !== void 0 ? _a : BytescaleApiClientConfigUtils2.defaultCdnUrl;
          }
        }, {
          key: "getFetchApi",
          value: function getFetchApi(config) {
            var _a;
            return (_a = config.fetchApi) !== null && _a !== void 0 ? _a : fetch;
          }
        }, {
          key: "getAccountId",
          value: function getAccountId(config) {
            var _a, _b;
            var accountId;
            if (BytescaleApiClientConfigUtils2.specialApiKeys.includes(config.apiKey)) {
              accountId = BytescaleApiClientConfigUtils2.specialApiKeyAccountId;
            } else {
              accountId = (_b = (_a = config.apiKey.split("_")[1]) === null || _a === void 0 ? void 0 : _a.substr(0, BytescaleApiClientConfigUtils2.accountIdLength)) !== null && _b !== void 0 ? _b : "";
              if (accountId.length !== BytescaleApiClientConfigUtils2.accountIdLength) {
                throw new Error("Invalid Bytescale API key.");
              }
            }
            return accountId;
          }
        }, {
          key: "validate",
          value: function validate(config) {
            var _a;
            if ((config !== null && config !== void 0 ? config : void 0) === void 0) {
              throw new Error("Config parameter required.");
            }
            if (((_a = config.apiKey) !== null && _a !== void 0 ? _a : void 0) === void 0) {
              throw new Error("Please provide an API key via the 'apiKey' config parameter.");
            }
            if (config.apiKey.trim() !== config.apiKey) {
              throw new Error("API key needs trimming (whitespace detected).");
            }
            BytescaleApiClientConfigUtils2.getAccountId(config);
          }
        }]);
      }();
      BytescaleApiClientConfigUtils.defaultApiUrl = "https://api.bytescale.com";
      BytescaleApiClientConfigUtils.defaultCdnUrl = "https://upcdn.io";
      BytescaleApiClientConfigUtils.specialApiKeys = ["free", "demo"];
      BytescaleApiClientConfigUtils.specialApiKeyAccountId = "W142hJk";
      BytescaleApiClientConfigUtils.accountIdLength = 7;
      var BaseAPI = function() {
        function BaseAPI2(config) {
          runtime_classCallCheck(this, BaseAPI2);
          this.config = config;
          BytescaleApiClientConfigUtils.validate(config);
        }
        return runtime_createClass(BaseAPI2, [{
          key: "request",
          value: function request(context, initOverrides, baseUrlOverride) {
            try {
              var _this = this;
              var _a;
              var apiKey = _this.config.apiKey;
              context.headers["Authorization"] = "Bearer ".concat(apiKey);
              var session = AuthSessionState.getSession();
              if ((session === null || session === void 0 ? void 0 : session.accessToken) !== void 0) {
                context.headers["Authorization-Token"] = session.accessToken;
              }
              var nonDefaultBasePaths = _defineProperty({}, BytescaleApiClientConfigUtils.defaultCdnUrl, BytescaleApiClientConfigUtils.getCdnUrl(_this.config));
              return runtime_await(_this.createFetchParams(context, initOverrides, baseUrlOverride === void 0 ? void 0 : (_a = nonDefaultBasePaths[baseUrlOverride]) !== null && _a !== void 0 ? _a : baseUrlOverride), function(_ref) {
                var url = _ref.url, init = _ref.init;
                return BaseAPI2.fetch(url, init, Object.assign(Object.assign({}, _this.config), {
                  isBytescaleApi: true
                }));
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }, {
          key: "encodeParam",
          value: function encodeParam(paramName, paramValue) {
            if (paramName === "filePath") {
              if (!paramValue.startsWith("/")) {
                throw new Error("The 'filePath' parameter must begin with a '/' character.");
              }
              return paramValue;
            }
            return encodeURIComponent(paramValue);
          }
        }, {
          key: "createFetchParams",
          value: function createFetchParams(context, initOverrides, baseUrlOverride) {
            try {
              var _this2 = this;
              var url = (baseUrlOverride !== null && baseUrlOverride !== void 0 ? baseUrlOverride : BytescaleApiClientConfigUtils.getApiUrl(_this2.config)) + context.path;
              if (context.query !== void 0 && Object.keys(context.query).length !== 0) {
                url += "?" + querystring(context.query);
              }
              var configHeaders = _this2.config.headers;
              var _Object$assign = Object.assign({}, context.headers);
              return runtime_await(runtime_await(configHeaders === void 0 ? {} : typeof configHeaders === "function" ? configHeaders() : configHeaders, function(_configHeaders) {
                var headers = Object.assign(_Object$assign, configHeaders === void 0 ? _configHeaders : _configHeaders);
                Object.keys(headers).forEach(function(key) {
                  return headers[key] === void 0 ? delete headers[key] : {};
                });
                var initOverrideFn = typeof initOverrides === "function" ? initOverrides : function() {
                  return runtime_await(initOverrides);
                };
                var initParams = {
                  method: context.method,
                  headers,
                  body: context.body
                };
                var _Object$assign2 = Object.assign({}, initParams);
                return runtime_await(initOverrideFn({
                  init: initParams,
                  context
                }), function(_initOverrideFn) {
                  var overriddenInit = Object.assign(_Object$assign2, _initOverrideFn);
                  var init = Object.assign(Object.assign({}, overriddenInit), {
                    body: JSON.stringify(overriddenInit.body)
                  });
                  return {
                    url,
                    init
                  };
                });
              }, configHeaders === void 0 || !(typeof configHeaders === "function")));
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }], [{
          key: "fetch",
          value: function fetch2(url, init, config) {
            try {
              var _exit = false;
              var _a, _b;
              var response;
              return runtime_await(_continue(_catch(function() {
                return runtime_await(BytescaleApiClientConfigUtils.getFetchApi(config)(url, Object.assign(Object.assign({}, init), {
                  // This is specifically added to cater for Next.js's Fetch implementation, which caches POST requests...
                  //
                  // "fetch requests that use the POST method are also automatically cached."
                  // - https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#caching-data
                  //
                  // However, this is probably a good idea, even for all GET requests, as if the user is refreshing a JWT
                  // or downloading a file via 'FileApi.downloadFile', then they'll likely want the latest.
                  cache: "no-store",
                  // Node does not support full duplex, so default fetch implementations will fail with "RequestInit: duplex option is required when sending a body"
                  // unless the following is set.
                  // https://github.com/nodejs/node/issues/46221#issuecomment-1383246036
                  duplex: "half"
                })), function(_BytescaleApiClientCo) {
                  response = _BytescaleApiClientCo;
                });
              }, function(e3) {
                throw new Error(config.isBytescaleApi ? "Unable to resolve the Bytescale API: ".concat(e3.message, " If the problem persists, and your network connection is OK, then please contact support@bytescale.com and provide: (a) time of failed request in UTC (b) screenshot of failed network response header + body (c) screenshot of failed network request header + body (d) browser and OS version.") : "Unable to resolve URL (".concat(url, "): ").concat(e3.message));
              }), function(_result) {
                var _exit2 = false;
                if (_exit)
                  return _result;
                return response.status >= 200 && response.status < 300 ? response : runtime_invoke(function() {
                  if (config.isBytescaleApi) {
                    var errorText = void 0;
                    var errorJson = void 0;
                    return _continue(_catch(function() {
                      return runtime_await(response.text(), function(_response$text) {
                        errorText = _response$text;
                        errorJson = JSON.parse(errorText);
                      });
                    }, runtime_empty), function() {
                      if (typeof ((_a = errorJson === null || errorJson === void 0 ? void 0 : errorJson.error) === null || _a === void 0 ? void 0 : _a.code) === "string") {
                        throw new BytescaleApiError(errorJson);
                      }
                      if (config.debug === true) {
                        ConsoleUtils.debug("Error response header:");
                        response.headers.forEach(function(headerValue, headerKey) {
                          return ConsoleUtils.debug("".concat(headerKey, ": ").concat(headerValue));
                        });
                        ConsoleUtils.debug("Error response body:");
                        ConsoleUtils.debug(errorText !== null && errorText !== void 0 ? errorText : "<empty>");
                      }
                      throw new BytescaleGenericError(response, errorText, errorJson);
                    });
                  }
                }, function(_result2) {
                  if (_exit2)
                    return _result2;
                  throw new Error("Failure status code (".concat(response.status, ") received for request: ").concat((_b = init.method) !== null && _b !== void 0 ? _b : "GET", " ").concat(url));
                });
              }));
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }]);
      }();
      var CancelledError = function(_Error) {
        function CancelledError2() {
          var _this3;
          runtime_classCallCheck(this, CancelledError2);
          _this3 = _callSuper(this, CancelledError2, ["Operation cancelled by caller."]);
          _this3.name = "CancelledError";
          return _this3;
        }
        _inherits(CancelledError2, _Error);
        return runtime_createClass(CancelledError2);
      }(_wrapNativeSuper(Error));
      var BytescaleGenericError = function(_Error2) {
        function BytescaleGenericError2(response, responseText, responseJson) {
          var _this4;
          runtime_classCallCheck(this, BytescaleGenericError2);
          _this4 = _callSuper(this, BytescaleGenericError2, ["Unable to connect to the Bytescale API (".concat(response.status, "): please try again.")]);
          _this4.response = response;
          _this4.responseText = responseText;
          _this4.responseJson = responseJson;
          _this4.name = "BytescaleGenericError";
          return _this4;
        }
        _inherits(BytescaleGenericError2, _Error2);
        return runtime_createClass(BytescaleGenericError2);
      }(_wrapNativeSuper(Error));
      var BytescaleApiError = function(_Error3) {
        function BytescaleApiError2(response) {
          var _this5;
          runtime_classCallCheck(this, BytescaleApiError2);
          _this5 = _callSuper(this, BytescaleApiError2, [response.error.message]);
          _this5.name = "BytescaleApiError";
          _this5.errorCode = response.error.code;
          _this5.details = response.error.details;
          return _this5;
        }
        _inherits(BytescaleApiError2, _Error3);
        return runtime_createClass(BytescaleApiError2);
      }(_wrapNativeSuper(Error));
      function moveElementToEnd(array, element) {
        return [].concat(_toConsumableArray(array.filter(function(x4) {
          return x4 !== element;
        })), _toConsumableArray(array.filter(function(x4) {
          return x4 === element;
        })));
      }
      function querystring(params) {
        var keysReordered = moveElementToEnd(Object.keys(params), "artifact");
        return keysReordered.map(function(key) {
          return querystringSingleKey(key, params[key]);
        }).filter(function(part) {
          return part.length > 0;
        }).join("&");
      }
      function querystringSingleKey(key, value) {
        if (value instanceof Object) {
          return querystring(value);
        }
        return encodeBytescaleQuerystringKVP(key, String(value));
      }
      function encodeBytescaleQuerystringKVP(key, value) {
        if (key === "a" || key === "artifact") {
          return "".concat(key, "=").concat(encodeURIComponent(value).replace(/%2F/g, "/"));
        }
        return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value));
      }
      var JSONApiResponse = function() {
        function JSONApiResponse2(raw) {
          runtime_classCallCheck(this, JSONApiResponse2);
          this.raw = raw;
        }
        return runtime_createClass(JSONApiResponse2, [{
          key: "value",
          value: function value() {
            try {
              var _this6 = this;
              return runtime_await(_this6.raw.json());
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }]);
      }();
      var VoidApiResponse = function() {
        function VoidApiResponse2(raw) {
          runtime_classCallCheck(this, VoidApiResponse2);
          this.raw = raw;
        }
        return runtime_createClass(VoidApiResponse2, [{
          key: "value",
          value: function value() {
            return runtime_await(void 0);
          }
        }]);
      }();
      var BinaryResult = function() {
        function BinaryResult2(raw) {
          runtime_classCallCheck(this, BinaryResult2);
          this.raw = raw;
        }
        return runtime_createClass(BinaryResult2, [{
          key: "stream",
          value: function stream() {
            if (this.raw.bodyUsed) {
              throw new Error("Response body has already been consumed.");
            }
            if (this.raw.body === null) {
              throw new Error("Response body does not exist.");
            }
            return this.raw.body;
          }
        }, {
          key: "text",
          value: function text() {
            try {
              var _this7 = this;
              return runtime_await(_this7.raw.text());
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }, {
          key: "blob",
          value: function blob() {
            try {
              var _this8 = this;
              return runtime_await(_this8.raw.blob());
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }, {
          key: "json",
          value: function json() {
            try {
              var _this9 = this;
              return runtime_await(_this9.raw.json());
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }]);
      }();
      ;
      function CacheApi_typeof(o4) {
        "@babel/helpers - typeof";
        return CacheApi_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o5) {
          return typeof o5;
        } : function(o5) {
          return o5 && "function" == typeof Symbol && o5.constructor === Symbol && o5 !== Symbol.prototype ? "symbol" : typeof o5;
        }, CacheApi_typeof(o4);
      }
      function CacheApi_await(value, then, direct) {
        if (direct) {
          return then ? then(value) : value;
        }
        if (!value || !value.then) {
          value = Promise.resolve(value);
        }
        return then ? value.then(then) : value;
      }
      function CacheApi_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function CacheApi_defineProperties(target, props) {
        for (var i4 = 0; i4 < props.length; i4++) {
          var descriptor = props[i4];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, CacheApi_toPropertyKey(descriptor.key), descriptor);
        }
      }
      function CacheApi_createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          CacheApi_defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          CacheApi_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function CacheApi_toPropertyKey(t4) {
        var i4 = CacheApi_toPrimitive(t4, "string");
        return "symbol" == CacheApi_typeof(i4) ? i4 : i4 + "";
      }
      function CacheApi_toPrimitive(t4, r3) {
        if ("object" != CacheApi_typeof(t4) || !t4)
          return t4;
        var e3 = t4[Symbol.toPrimitive];
        if (void 0 !== e3) {
          var i4 = e3.call(t4, r3 || "default");
          if ("object" != CacheApi_typeof(i4))
            return i4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r3 ? String : Number)(t4);
      }
      function CacheApi_callSuper(t4, o4, e3) {
        return o4 = CacheApi_getPrototypeOf(o4), CacheApi_possibleConstructorReturn(t4, CacheApi_isNativeReflectConstruct() ? Reflect.construct(o4, e3 || [], CacheApi_getPrototypeOf(t4).constructor) : o4.apply(t4, e3));
      }
      function CacheApi_possibleConstructorReturn(self, call) {
        if (call && (CacheApi_typeof(call) === "object" || typeof call === "function")) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError("Derived constructors may only return object or undefined");
        }
        return CacheApi_assertThisInitialized(self);
      }
      function CacheApi_assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function CacheApi_isNativeReflectConstruct() {
        try {
          var t4 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (t5) {
        }
        return (CacheApi_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
          return !!t4;
        })();
      }
      function CacheApi_getPrototypeOf(o4) {
        CacheApi_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o5) {
          return o5.__proto__ || Object.getPrototypeOf(o5);
        };
        return CacheApi_getPrototypeOf(o4);
      }
      function CacheApi_inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
        Object.defineProperty(subClass, "prototype", { writable: false });
        if (superClass)
          CacheApi_setPrototypeOf(subClass, superClass);
      }
      function CacheApi_setPrototypeOf(o4, p4) {
        CacheApi_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o5, p5) {
          o5.__proto__ = p5;
          return o5;
        };
        return CacheApi_setPrototypeOf(o4, p4);
      }
      var CacheApi = function(_runtime$BaseAPI) {
        function CacheApi2() {
          CacheApi_classCallCheck(this, CacheApi2);
          return CacheApi_callSuper(this, CacheApi2, arguments);
        }
        CacheApi_inherits(CacheApi2, _runtime$BaseAPI);
        return CacheApi_createClass(CacheApi2, [{
          key: "resetCache",
          value: (
            /**
             * Resets the Bytescale CDN cache for a specific path, path prefix, or for your entire account.  You can choose to reset the edge cache, or permanent cache, or both caches.  *Warning:* Resetting the permanent cache (by setting ```resetPermanentCache: true```) may lead to a significant increase in processing time if numerous file transformations need to be re-performed upon their next request.  *Recommended:* Prevent cache resets by adding a ```?v=<etag>``` querystring parameter to your URLs. This ensures your URLs change when your files change, eliminating the need for cache resets. The `etag` field is returned by GetFileDetails and all upload operations, and can be saved to your database.  *Example patterns:*  - ```\"/_*\"``` - ```\"/raw/example.jpg\"``` - ```\"/image/example.jpg\"``` - ```\"/image/customers/abc/_*\"```  You may only use ```*``` at the end of the pattern. You must not include your account ID prefix in the pattern.
             */
            function resetCache(params) {
              try {
                var _this = this;
                var query = {};
                var headers = {};
                headers["Content-Type"] = "application/json";
                return CacheApi_await(_this.request({
                  path: "/v2/accounts/{accountId}/cache/reset".replace(
                    "{".concat("accountId", "}"),
                    // @ts-ignore
                    _this.encodeParam("accountId", params.accountId)
                  ),
                  method: "POST",
                  headers,
                  query,
                  body: params.resetCacheRequest
                }, void 0, [][0]), function(response) {
                  return CacheApi_await(new JSONApiResponse(response).value());
                });
              } catch (e3) {
                return Promise.reject(e3);
              }
            }
          )
        }]);
      }(BaseAPI);
      ;
      function FileApi_typeof(o4) {
        "@babel/helpers - typeof";
        return FileApi_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o5) {
          return typeof o5;
        } : function(o5) {
          return o5 && "function" == typeof Symbol && o5.constructor === Symbol && o5 !== Symbol.prototype ? "symbol" : typeof o5;
        }, FileApi_typeof(o4);
      }
      function FileApi_await(value, then, direct) {
        if (direct) {
          return then ? then(value) : value;
        }
        if (!value || !value.then) {
          value = Promise.resolve(value);
        }
        return then ? value.then(then) : value;
      }
      function FileApi_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function FileApi_defineProperties(target, props) {
        for (var i4 = 0; i4 < props.length; i4++) {
          var descriptor = props[i4];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, FileApi_toPropertyKey(descriptor.key), descriptor);
        }
      }
      function FileApi_createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          FileApi_defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          FileApi_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function FileApi_toPropertyKey(t4) {
        var i4 = FileApi_toPrimitive(t4, "string");
        return "symbol" == FileApi_typeof(i4) ? i4 : i4 + "";
      }
      function FileApi_toPrimitive(t4, r3) {
        if ("object" != FileApi_typeof(t4) || !t4)
          return t4;
        var e3 = t4[Symbol.toPrimitive];
        if (void 0 !== e3) {
          var i4 = e3.call(t4, r3 || "default");
          if ("object" != FileApi_typeof(i4))
            return i4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r3 ? String : Number)(t4);
      }
      function FileApi_callSuper(t4, o4, e3) {
        return o4 = FileApi_getPrototypeOf(o4), FileApi_possibleConstructorReturn(t4, FileApi_isNativeReflectConstruct() ? Reflect.construct(o4, e3 || [], FileApi_getPrototypeOf(t4).constructor) : o4.apply(t4, e3));
      }
      function FileApi_possibleConstructorReturn(self, call) {
        if (call && (FileApi_typeof(call) === "object" || typeof call === "function")) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError("Derived constructors may only return object or undefined");
        }
        return FileApi_assertThisInitialized(self);
      }
      function FileApi_assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function FileApi_isNativeReflectConstruct() {
        try {
          var t4 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (t5) {
        }
        return (FileApi_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
          return !!t4;
        })();
      }
      function FileApi_getPrototypeOf(o4) {
        FileApi_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o5) {
          return o5.__proto__ || Object.getPrototypeOf(o5);
        };
        return FileApi_getPrototypeOf(o4);
      }
      function FileApi_inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
        Object.defineProperty(subClass, "prototype", { writable: false });
        if (superClass)
          FileApi_setPrototypeOf(subClass, superClass);
      }
      function FileApi_setPrototypeOf(o4, p4) {
        FileApi_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o5, p5) {
          o5.__proto__ = p5;
          return o5;
        };
        return FileApi_setPrototypeOf(o4, p4);
      }
      var FileApi = function(_runtime$BaseAPI) {
        function FileApi2() {
          FileApi_classCallCheck(this, FileApi2);
          return FileApi_callSuper(this, FileApi2, arguments);
        }
        FileApi_inherits(FileApi2, _runtime$BaseAPI);
        return FileApi_createClass(FileApi2, [{
          key: "copyFile",
          value: (
            /**
             * Copies a file synchronously.
             */
            function copyFile(params) {
              try {
                var _this = this;
                var query = {};
                var headers = {};
                headers["Content-Type"] = "application/json";
                return FileApi_await(_this.request({
                  path: "/v2/accounts/{accountId}/files/copy".replace(
                    "{".concat("accountId", "}"),
                    // @ts-ignore
                    _this.encodeParam("accountId", params.accountId)
                  ),
                  method: "POST",
                  headers,
                  query,
                  body: params.copyFileRequest
                }, void 0, [][0]), function(response) {
                  return FileApi_await(new JSONApiResponse(response).value());
                });
              } catch (e3) {
                return Promise.reject(e3);
              }
            }
          )
          /**
           * Copies multiple files asynchronously.
           */
        }, {
          key: "copyFileBatch",
          value: function copyFileBatch(params) {
            try {
              var _this2 = this;
              var query = {};
              var headers = {};
              headers["Content-Type"] = "application/json";
              return FileApi_await(_this2.request({
                path: "/v2/accounts/{accountId}/files/copy/batch".replace(
                  "{".concat("accountId", "}"),
                  // @ts-ignore
                  _this2.encodeParam("accountId", params.accountId)
                ),
                method: "POST",
                headers,
                query,
                body: params.copyFileBatchRequest
              }, void 0, [][0]), function(response) {
                return FileApi_await(new JSONApiResponse(response).value());
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
          /**
           * Deletes a file synchronously.  Requires a `secret_*` API key. Alternatively, you can use a `public_*` API key and JWT-based auth.
           */
        }, {
          key: "deleteFile",
          value: function deleteFile(params) {
            try {
              var _this3 = this;
              var query = {};
              if (params.filePath !== void 0) {
                query["filePath"] = params.filePath;
              }
              var headers = {};
              return FileApi_await(_this3.request({
                path: "/v2/accounts/{accountId}/files".replace(
                  "{".concat("accountId", "}"),
                  // @ts-ignore
                  _this3.encodeParam("accountId", params.accountId)
                ),
                method: "DELETE",
                headers,
                query
              }, void 0, [][0]), function(response) {
                return FileApi_await(new VoidApiResponse(response).value());
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
          /**
           * Deletes multiple files asynchronously.  Requires a `secret_*` API key. Alternatively, you can use a `public_*` API key and JWT-based auth.
           */
        }, {
          key: "deleteFileBatch",
          value: function deleteFileBatch(params) {
            try {
              var _this4 = this;
              var query = {};
              var headers = {};
              headers["Content-Type"] = "application/json";
              return FileApi_await(_this4.request({
                path: "/v2/accounts/{accountId}/files/batch".replace(
                  "{".concat("accountId", "}"),
                  // @ts-ignore
                  _this4.encodeParam("accountId", params.accountId)
                ),
                method: "DELETE",
                headers,
                query,
                body: params.deleteFileBatchRequest
              }, void 0, [][0]), function(response) {
                return FileApi_await(new JSONApiResponse(response).value());
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
          /**
           * Downloads a file in its original/unprocessed state.
           */
        }, {
          key: "downloadFile",
          value: function downloadFile(params) {
            try {
              var _this5 = this;
              var query = {};
              if (params.cache !== void 0) {
                query["cache"] = params.cache;
              }
              if (params.cacheTtl !== void 0) {
                query["cache_ttl"] = params.cacheTtl;
              }
              if (params.cacheTtl404 !== void 0) {
                query["cache_ttl_404"] = params.cacheTtl404;
              }
              if (params.version !== void 0) {
                query["version"] = params.version;
              }
              var headers = {};
              return FileApi_await(_this5.request({
                path: "/{accountId}/raw{filePath}".replace(
                  "{".concat("accountId", "}"),
                  // @ts-ignore
                  _this5.encodeParam("accountId", params.accountId)
                ).replace(
                  "{".concat("filePath", "}"),
                  // @ts-ignore
                  _this5.encodeParam("filePath", params.filePath)
                ),
                method: "GET",
                headers,
                query
              }, void 0, ["https://upcdn.io"][0]), function(response) {
                return new BinaryResult(response);
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
          /**
           * Gets the full details (e.g. metadata, tags, etc.) for a file.
           */
        }, {
          key: "getFileDetails",
          value: function getFileDetails(params) {
            try {
              var _this6 = this;
              var query = {};
              if (params.filePath !== void 0) {
                query["filePath"] = params.filePath;
              }
              var headers = {};
              return FileApi_await(_this6.request({
                path: "/v2/accounts/{accountId}/files/details".replace(
                  "{".concat("accountId", "}"),
                  // @ts-ignore
                  _this6.encodeParam("accountId", params.accountId)
                ),
                method: "GET",
                headers,
                query
              }, void 0, [][0]), function(response) {
                return FileApi_await(new JSONApiResponse(response).value());
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
          /**
           * Processes a file and returns the result.
           */
        }, {
          key: "processFile",
          value: function processFile(params) {
            try {
              var _this7 = this;
              var query = {};
              if (params.artifact !== void 0) {
                query["artifact"] = params.artifact;
              }
              if (params.cache !== void 0) {
                query["cache"] = params.cache;
              }
              if (params.cacheOnly !== void 0) {
                query["cache_only"] = params.cacheOnly;
              }
              if (params.cachePerm !== void 0) {
                query["cache_perm"] = params.cachePerm;
              }
              if (params.cacheTtl !== void 0) {
                query["cache_ttl"] = params.cacheTtl;
              }
              if (params.cacheTtl404 !== void 0) {
                query["cache_ttl_404"] = params.cacheTtl404;
              }
              if (params.transformationParams !== void 0) {
                query["transformationParams"] = params.transformationParams;
              }
              if (params.version !== void 0) {
                query["version"] = params.version;
              }
              var headers = {};
              return FileApi_await(_this7.request({
                path: "/{accountId}/{transformation}{filePath}".replace(
                  "{".concat("accountId", "}"),
                  // @ts-ignore
                  _this7.encodeParam("accountId", params.accountId)
                ).replace(
                  "{".concat("filePath", "}"),
                  // @ts-ignore
                  _this7.encodeParam("filePath", params.filePath)
                ).replace(
                  "{".concat("transformation", "}"),
                  // @ts-ignore
                  _this7.encodeParam("transformation", params.transformation)
                ),
                method: "GET",
                headers,
                query
              }, void 0, ["https://upcdn.io"][0]), function(response) {
                return new BinaryResult(response);
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
          /**
           * Processes a file and saves the result.
           */
        }, {
          key: "processFileAndSave",
          value: function processFileAndSave(params) {
            try {
              var _this8 = this;
              var query = {};
              if (params.transformationParams !== void 0) {
                query["transformationParams"] = params.transformationParams;
              }
              var headers = {};
              headers["Content-Type"] = "application/json";
              return FileApi_await(_this8.request({
                path: "/{accountId}/save/{transformation}{filePath}".replace(
                  "{".concat("accountId", "}"),
                  // @ts-ignore
                  _this8.encodeParam("accountId", params.accountId)
                ).replace(
                  "{".concat("filePath", "}"),
                  // @ts-ignore
                  _this8.encodeParam("filePath", params.filePath)
                ).replace(
                  "{".concat("transformation", "}"),
                  // @ts-ignore
                  _this8.encodeParam("transformation", params.transformation)
                ),
                method: "POST",
                headers,
                query,
                body: params.processFileAndSaveRequest
              }, void 0, ["https://upcdn.io"][0]), function(response) {
                return FileApi_await(new JSONApiResponse(response).value());
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }]);
      }(BaseAPI);
      ;
      function FolderApi_typeof(o4) {
        "@babel/helpers - typeof";
        return FolderApi_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o5) {
          return typeof o5;
        } : function(o5) {
          return o5 && "function" == typeof Symbol && o5.constructor === Symbol && o5 !== Symbol.prototype ? "symbol" : typeof o5;
        }, FolderApi_typeof(o4);
      }
      function FolderApi_await(value, then, direct) {
        if (direct) {
          return then ? then(value) : value;
        }
        if (!value || !value.then) {
          value = Promise.resolve(value);
        }
        return then ? value.then(then) : value;
      }
      function FolderApi_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function FolderApi_defineProperties(target, props) {
        for (var i4 = 0; i4 < props.length; i4++) {
          var descriptor = props[i4];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, FolderApi_toPropertyKey(descriptor.key), descriptor);
        }
      }
      function FolderApi_createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          FolderApi_defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          FolderApi_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function FolderApi_toPropertyKey(t4) {
        var i4 = FolderApi_toPrimitive(t4, "string");
        return "symbol" == FolderApi_typeof(i4) ? i4 : i4 + "";
      }
      function FolderApi_toPrimitive(t4, r3) {
        if ("object" != FolderApi_typeof(t4) || !t4)
          return t4;
        var e3 = t4[Symbol.toPrimitive];
        if (void 0 !== e3) {
          var i4 = e3.call(t4, r3 || "default");
          if ("object" != FolderApi_typeof(i4))
            return i4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r3 ? String : Number)(t4);
      }
      function FolderApi_callSuper(t4, o4, e3) {
        return o4 = FolderApi_getPrototypeOf(o4), FolderApi_possibleConstructorReturn(t4, FolderApi_isNativeReflectConstruct() ? Reflect.construct(o4, e3 || [], FolderApi_getPrototypeOf(t4).constructor) : o4.apply(t4, e3));
      }
      function FolderApi_possibleConstructorReturn(self, call) {
        if (call && (FolderApi_typeof(call) === "object" || typeof call === "function")) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError("Derived constructors may only return object or undefined");
        }
        return FolderApi_assertThisInitialized(self);
      }
      function FolderApi_assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function FolderApi_isNativeReflectConstruct() {
        try {
          var t4 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (t5) {
        }
        return (FolderApi_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
          return !!t4;
        })();
      }
      function FolderApi_getPrototypeOf(o4) {
        FolderApi_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o5) {
          return o5.__proto__ || Object.getPrototypeOf(o5);
        };
        return FolderApi_getPrototypeOf(o4);
      }
      function FolderApi_inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
        Object.defineProperty(subClass, "prototype", { writable: false });
        if (superClass)
          FolderApi_setPrototypeOf(subClass, superClass);
      }
      function FolderApi_setPrototypeOf(o4, p4) {
        FolderApi_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o5, p5) {
          o5.__proto__ = p5;
          return o5;
        };
        return FolderApi_setPrototypeOf(o4, p4);
      }
      var FolderApi = function(_runtime$BaseAPI) {
        function FolderApi2() {
          FolderApi_classCallCheck(this, FolderApi2);
          return FolderApi_callSuper(this, FolderApi2, arguments);
        }
        FolderApi_inherits(FolderApi2, _runtime$BaseAPI);
        return FolderApi_createClass(FolderApi2, [{
          key: "copyFolder",
          value: (
            /**
             * Copies a folder asynchronously.  You can use ListFolder to preview the operation using the `dryRun` parameter.
             */
            function copyFolder(params) {
              try {
                var _this = this;
                var query = {};
                var headers = {};
                headers["Content-Type"] = "application/json";
                return FolderApi_await(_this.request({
                  path: "/v2/accounts/{accountId}/folders/copy".replace(
                    "{".concat("accountId", "}"),
                    // @ts-ignore
                    _this.encodeParam("accountId", params.accountId)
                  ),
                  method: "POST",
                  headers,
                  query,
                  body: params.copyFolderRequest
                }, void 0, [][0]), function(response) {
                  return FolderApi_await(new JSONApiResponse(response).value());
                });
              } catch (e3) {
                return Promise.reject(e3);
              }
            }
          )
          /**
           * Copies multiple folders asynchronously.  You can use ListFolder to preview the operation using the `dryRun` parameter.
           */
        }, {
          key: "copyFolderBatch",
          value: function copyFolderBatch(params) {
            try {
              var _this2 = this;
              var query = {};
              var headers = {};
              headers["Content-Type"] = "application/json";
              return FolderApi_await(_this2.request({
                path: "/v2/accounts/{accountId}/folders/copy/batch".replace(
                  "{".concat("accountId", "}"),
                  // @ts-ignore
                  _this2.encodeParam("accountId", params.accountId)
                ),
                method: "POST",
                headers,
                query,
                body: params.copyFolderBatchRequest
              }, void 0, [][0]), function(response) {
                return FolderApi_await(new JSONApiResponse(response).value());
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
          /**
           * Deletes a folder asynchronously.  You can use ListFolder to preview the operation using the `dryRun` parameter.  *External storage:* external files are only deleted when you directly delete a file or subfolder of a folder that has external storage configured. If you delete the folder itself, only the mapping is removed.  Requires a `secret_*` API key. Alternatively, you can use a `public_*` API key and JWT-based auth.
           */
        }, {
          key: "deleteFolder",
          value: function deleteFolder(params) {
            try {
              var _this3 = this;
              var query = {};
              var headers = {};
              headers["Content-Type"] = "application/json";
              return FolderApi_await(_this3.request({
                path: "/v2/accounts/{accountId}/folders".replace(
                  "{".concat("accountId", "}"),
                  // @ts-ignore
                  _this3.encodeParam("accountId", params.accountId)
                ),
                method: "DELETE",
                headers,
                query,
                body: params.deleteFolderRequest
              }, void 0, [][0]), function(response) {
                return FolderApi_await(new JSONApiResponse(response).value());
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
          /**
           * Deletes multiple folders asynchronously.  You can use ListFolder to preview the operation using the `dryRun` parameter.  *External storage:* external files are only deleted when you directly delete a file or subfolder of a folder that has external storage configured. If you delete the folder itself, only the mapping is removed.  Requires a `secret_*` API key. Alternatively, you can use a `public_*` API key and JWT-based auth.
           */
        }, {
          key: "deleteFolderBatch",
          value: function deleteFolderBatch(params) {
            try {
              var _this4 = this;
              var query = {};
              var headers = {};
              headers["Content-Type"] = "application/json";
              return FolderApi_await(_this4.request({
                path: "/v2/accounts/{accountId}/folders/batch".replace(
                  "{".concat("accountId", "}"),
                  // @ts-ignore
                  _this4.encodeParam("accountId", params.accountId)
                ),
                method: "DELETE",
                headers,
                query,
                body: params.deleteFolderBatchRequest
              }, void 0, [][0]), function(response) {
                return FolderApi_await(new JSONApiResponse(response).value());
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
          /**
           * Gets the full details (e.g. permission, storage layer, etc.) for a folder.  Returns an empty object if no settings have been configured for this folder.  Requires a `secret_*` API key. Alternatively, you can use a `public_*` API key and JWT-based auth.
           */
        }, {
          key: "getFolderDetails",
          value: function getFolderDetails(params) {
            try {
              var _this5 = this;
              var query = {};
              if (params.folderPath !== void 0) {
                query["folderPath"] = params.folderPath;
              }
              var headers = {};
              return FolderApi_await(_this5.request({
                path: "/v2/accounts/{accountId}/folders".replace(
                  "{".concat("accountId", "}"),
                  // @ts-ignore
                  _this5.encodeParam("accountId", params.accountId)
                ),
                method: "GET",
                headers,
                query
              }, void 0, [][0]), function(response) {
                return FolderApi_await(new JSONApiResponse(response).value());
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
          /**
           * Lists the folder\'s contents.  The result may be paginated: subsequent pages can be requested by passing the ```cursor``` from the response into the next request.  Pagination is complete when the response includes `isPaginationComplete=true`.
           */
        }, {
          key: "listFolder",
          value: function listFolder(params) {
            try {
              var _this6 = this;
              var query = {};
              if (params.cursor !== void 0) {
                query["cursor"] = params.cursor;
              }
              if (params.dryRun !== void 0) {
                query["dryRun"] = params.dryRun;
              }
              if (params.folderPath !== void 0) {
                query["folderPath"] = params.folderPath;
              }
              if (params.includeFiles !== void 0) {
                query["includeFiles"] = params.includeFiles;
              }
              if (params.includeOverriddenStorage !== void 0) {
                query["includeOverriddenStorage"] = params.includeOverriddenStorage;
              }
              if (params.includePhysicalFolders !== void 0) {
                query["includePhysicalFolders"] = params.includePhysicalFolders;
              }
              if (params.includeVirtualFolders !== void 0) {
                query["includeVirtualFolders"] = params.includeVirtualFolders;
              }
              if (params.limit !== void 0) {
                query["limit"] = params.limit;
              }
              if (params.recursive !== void 0) {
                query["recursive"] = params.recursive;
              }
              var headers = {};
              return FolderApi_await(_this6.request({
                path: "/v2/accounts/{accountId}/folders/list".replace(
                  "{".concat("accountId", "}"),
                  // @ts-ignore
                  _this6.encodeParam("accountId", params.accountId)
                ),
                method: "GET",
                headers,
                query
              }, void 0, [][0]), function(response) {
                return FolderApi_await(new JSONApiResponse(response).value());
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
          /**
           * Creates or updates the folder specified by the `folderPath`.  If the folder\'s ancestors do not exist, they will be created automatically (with empty FolderSettings).  Note: you don\'t need to create folders before uploading files to them.  Requires a `secret_*` API key. Alternatively, you can use a `public_*` API key and JWT-based auth.
           */
        }, {
          key: "putFolder",
          value: function putFolder(params) {
            try {
              var _this7 = this;
              var query = {};
              var headers = {};
              headers["Content-Type"] = "application/json";
              return FolderApi_await(_this7.request({
                path: "/v2/accounts/{accountId}/folders".replace(
                  "{".concat("accountId", "}"),
                  // @ts-ignore
                  _this7.encodeParam("accountId", params.accountId)
                ),
                method: "PUT",
                headers,
                query,
                body: params.putFolderRequest
              }, void 0, [][0]), function(response) {
                return FolderApi_await(new JSONApiResponse(response).value());
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }]);
      }(BaseAPI);
      ;
      function JobApi_typeof(o4) {
        "@babel/helpers - typeof";
        return JobApi_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o5) {
          return typeof o5;
        } : function(o5) {
          return o5 && "function" == typeof Symbol && o5.constructor === Symbol && o5 !== Symbol.prototype ? "symbol" : typeof o5;
        }, JobApi_typeof(o4);
      }
      function JobApi_await(value, then, direct) {
        if (direct) {
          return then ? then(value) : value;
        }
        if (!value || !value.then) {
          value = Promise.resolve(value);
        }
        return then ? value.then(then) : value;
      }
      function JobApi_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function JobApi_defineProperties(target, props) {
        for (var i4 = 0; i4 < props.length; i4++) {
          var descriptor = props[i4];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, JobApi_toPropertyKey(descriptor.key), descriptor);
        }
      }
      function JobApi_createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          JobApi_defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          JobApi_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function JobApi_toPropertyKey(t4) {
        var i4 = JobApi_toPrimitive(t4, "string");
        return "symbol" == JobApi_typeof(i4) ? i4 : i4 + "";
      }
      function JobApi_toPrimitive(t4, r3) {
        if ("object" != JobApi_typeof(t4) || !t4)
          return t4;
        var e3 = t4[Symbol.toPrimitive];
        if (void 0 !== e3) {
          var i4 = e3.call(t4, r3 || "default");
          if ("object" != JobApi_typeof(i4))
            return i4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r3 ? String : Number)(t4);
      }
      function JobApi_callSuper(t4, o4, e3) {
        return o4 = JobApi_getPrototypeOf(o4), JobApi_possibleConstructorReturn(t4, JobApi_isNativeReflectConstruct() ? Reflect.construct(o4, e3 || [], JobApi_getPrototypeOf(t4).constructor) : o4.apply(t4, e3));
      }
      function JobApi_possibleConstructorReturn(self, call) {
        if (call && (JobApi_typeof(call) === "object" || typeof call === "function")) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError("Derived constructors may only return object or undefined");
        }
        return JobApi_assertThisInitialized(self);
      }
      function JobApi_assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function JobApi_isNativeReflectConstruct() {
        try {
          var t4 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (t5) {
        }
        return (JobApi_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
          return !!t4;
        })();
      }
      function JobApi_getPrototypeOf(o4) {
        JobApi_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o5) {
          return o5.__proto__ || Object.getPrototypeOf(o5);
        };
        return JobApi_getPrototypeOf(o4);
      }
      function JobApi_inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
        Object.defineProperty(subClass, "prototype", { writable: false });
        if (superClass)
          JobApi_setPrototypeOf(subClass, superClass);
      }
      function JobApi_setPrototypeOf(o4, p4) {
        JobApi_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o5, p5) {
          o5.__proto__ = p5;
          return o5;
        };
        return JobApi_setPrototypeOf(o4, p4);
      }
      var JobApi = function(_runtime$BaseAPI) {
        function JobApi2() {
          JobApi_classCallCheck(this, JobApi2);
          return JobApi_callSuper(this, JobApi2, arguments);
        }
        JobApi_inherits(JobApi2, _runtime$BaseAPI);
        return JobApi_createClass(JobApi2, [{
          key: "cancelJob",
          value: (
            /**
             * Cancels an in-progress background job.  Requires a `secret_*` API key.
             */
            function cancelJob(params) {
              try {
                var _this = this;
                var query = {};
                var headers = {};
                return JobApi_await(_this.request({
                  path: "/v2/accounts/{accountId}/jobs/{jobType}/{jobId}".replace(
                    "{".concat("accountId", "}"),
                    // @ts-ignore
                    _this.encodeParam("accountId", params.accountId)
                  ).replace(
                    "{".concat("jobId", "}"),
                    // @ts-ignore
                    _this.encodeParam("jobId", params.jobId)
                  ).replace(
                    "{".concat("jobType", "}"),
                    // @ts-ignore
                    _this.encodeParam("jobType", params.jobType)
                  ),
                  method: "DELETE",
                  headers,
                  query
                }, void 0, [][0]), function(response) {
                  return JobApi_await(new VoidApiResponse(response).value());
                });
              } catch (e3) {
                return Promise.reject(e3);
              }
            }
          )
          /**
           * Gets information on a background job.  Requires a `secret_*` API key.
           */
        }, {
          key: "getJob",
          value: function getJob(params) {
            try {
              var _this2 = this;
              var query = {};
              var headers = {};
              return JobApi_await(_this2.request({
                path: "/v2/accounts/{accountId}/jobs/{jobType}/{jobId}".replace(
                  "{".concat("accountId", "}"),
                  // @ts-ignore
                  _this2.encodeParam("accountId", params.accountId)
                ).replace(
                  "{".concat("jobId", "}"),
                  // @ts-ignore
                  _this2.encodeParam("jobId", params.jobId)
                ).replace(
                  "{".concat("jobType", "}"),
                  // @ts-ignore
                  _this2.encodeParam("jobType", params.jobType)
                ),
                method: "GET",
                headers,
                query
              }, void 0, [][0]), function(response) {
                return JobApi_await(new JSONApiResponse(response).value());
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
          /**
           * Lists the 10 most recently created jobs for the specified job type(s).  Requires a `secret_*` API key.
           */
        }, {
          key: "listRecentJobs",
          value: function listRecentJobs(params) {
            try {
              var _this3 = this;
              var query = {};
              if (params.jobType) {
                query["jobType"] = params.jobType;
              }
              var headers = {};
              return JobApi_await(_this3.request({
                path: "/v2/accounts/{accountId}/jobs".replace(
                  "{".concat("accountId", "}"),
                  // @ts-ignore
                  _this3.encodeParam("accountId", params.accountId)
                ),
                method: "GET",
                headers,
                query
              }, void 0, [][0]), function(response) {
                return JobApi_await(new JSONApiResponse(response).value());
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }]);
      }(BaseAPI);
      ;
      function UploadApi_typeof(o4) {
        "@babel/helpers - typeof";
        return UploadApi_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o5) {
          return typeof o5;
        } : function(o5) {
          return o5 && "function" == typeof Symbol && o5.constructor === Symbol && o5 !== Symbol.prototype ? "symbol" : typeof o5;
        }, UploadApi_typeof(o4);
      }
      function UploadApi_await(value, then, direct) {
        if (direct) {
          return then ? then(value) : value;
        }
        if (!value || !value.then) {
          value = Promise.resolve(value);
        }
        return then ? value.then(then) : value;
      }
      function UploadApi_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function UploadApi_defineProperties(target, props) {
        for (var i4 = 0; i4 < props.length; i4++) {
          var descriptor = props[i4];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, UploadApi_toPropertyKey(descriptor.key), descriptor);
        }
      }
      function UploadApi_createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          UploadApi_defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          UploadApi_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function UploadApi_toPropertyKey(t4) {
        var i4 = UploadApi_toPrimitive(t4, "string");
        return "symbol" == UploadApi_typeof(i4) ? i4 : i4 + "";
      }
      function UploadApi_toPrimitive(t4, r3) {
        if ("object" != UploadApi_typeof(t4) || !t4)
          return t4;
        var e3 = t4[Symbol.toPrimitive];
        if (void 0 !== e3) {
          var i4 = e3.call(t4, r3 || "default");
          if ("object" != UploadApi_typeof(i4))
            return i4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r3 ? String : Number)(t4);
      }
      function UploadApi_callSuper(t4, o4, e3) {
        return o4 = UploadApi_getPrototypeOf(o4), UploadApi_possibleConstructorReturn(t4, UploadApi_isNativeReflectConstruct() ? Reflect.construct(o4, e3 || [], UploadApi_getPrototypeOf(t4).constructor) : o4.apply(t4, e3));
      }
      function UploadApi_possibleConstructorReturn(self, call) {
        if (call && (UploadApi_typeof(call) === "object" || typeof call === "function")) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError("Derived constructors may only return object or undefined");
        }
        return UploadApi_assertThisInitialized(self);
      }
      function UploadApi_assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function UploadApi_isNativeReflectConstruct() {
        try {
          var t4 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (t5) {
        }
        return (UploadApi_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
          return !!t4;
        })();
      }
      function UploadApi_getPrototypeOf(o4) {
        UploadApi_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o5) {
          return o5.__proto__ || Object.getPrototypeOf(o5);
        };
        return UploadApi_getPrototypeOf(o4);
      }
      function UploadApi_inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
        Object.defineProperty(subClass, "prototype", { writable: false });
        if (superClass)
          UploadApi_setPrototypeOf(subClass, superClass);
      }
      function UploadApi_setPrototypeOf(o4, p4) {
        UploadApi_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o5, p5) {
          o5.__proto__ = p5;
          return o5;
        };
        return UploadApi_setPrototypeOf(o4, p4);
      }
      var UploadApi = function(_runtime$BaseAPI) {
        function UploadApi2() {
          UploadApi_classCallCheck(this, UploadApi2);
          return UploadApi_callSuper(this, UploadApi2, arguments);
        }
        UploadApi_inherits(UploadApi2, _runtime$BaseAPI);
        return UploadApi_createClass(UploadApi2, [{
          key: "beginMultipartUpload",
          value: (
            /**
             * Begins a new multipart file upload process.
             */
            function beginMultipartUpload(params) {
              try {
                var _this = this;
                var query = {};
                var headers = {};
                headers["Content-Type"] = "application/json";
                return UploadApi_await(_this.request({
                  path: "/v2/accounts/{accountId}/uploads".replace(
                    "{".concat("accountId", "}"),
                    // @ts-ignore
                    _this.encodeParam("accountId", params.accountId)
                  ),
                  method: "POST",
                  headers,
                  query,
                  body: params.beginMultipartUploadRequest
                }, void 0, [][0]), function(response) {
                  return UploadApi_await(new JSONApiResponse(response).value());
                });
              } catch (e3) {
                return Promise.reject(e3);
              }
            }
          )
          /**
           * Marks an upload part as uploaded.  You must call this endpoint after you have successfully issued a `PUT` request to the `uploadUrl` on the corresponding UploadPart.
           */
        }, {
          key: "completeUploadPart",
          value: function completeUploadPart(params) {
            try {
              var _this2 = this;
              var query = {};
              var headers = {};
              headers["Content-Type"] = "application/json";
              return UploadApi_await(_this2.request({
                path: "/v2/accounts/{accountId}/uploads/{uploadId}/parts/{uploadPartIndex}".replace(
                  "{".concat("accountId", "}"),
                  // @ts-ignore
                  _this2.encodeParam("accountId", params.accountId)
                ).replace(
                  "{".concat("uploadId", "}"),
                  // @ts-ignore
                  _this2.encodeParam("uploadId", params.uploadId)
                ).replace(
                  "{".concat("uploadPartIndex", "}"),
                  // @ts-ignore
                  _this2.encodeParam("uploadPartIndex", params.uploadPartIndex)
                ),
                method: "PUT",
                headers,
                query,
                body: params.completeUploadPartRequest
              }, void 0, [][0]), function(response) {
                return UploadApi_await(new JSONApiResponse(response).value());
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
          /**
           * Gets a remaining upload part for a multipart file upload.
           */
        }, {
          key: "getUploadPart",
          value: function getUploadPart(params) {
            try {
              var _this3 = this;
              var query = {};
              var headers = {};
              return UploadApi_await(_this3.request({
                path: "/v2/accounts/{accountId}/uploads/{uploadId}/parts/{uploadPartIndex}".replace(
                  "{".concat("accountId", "}"),
                  // @ts-ignore
                  _this3.encodeParam("accountId", params.accountId)
                ).replace(
                  "{".concat("uploadId", "}"),
                  // @ts-ignore
                  _this3.encodeParam("uploadId", params.uploadId)
                ).replace(
                  "{".concat("uploadPartIndex", "}"),
                  // @ts-ignore
                  _this3.encodeParam("uploadPartIndex", params.uploadPartIndex)
                ),
                method: "GET",
                headers,
                query
              }, void 0, [][0]), function(response) {
                return UploadApi_await(new JSONApiResponse(response).value());
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
          /**
           * Lists the remaining upload parts for a multipart file upload.  An empty array is returned when the upload is complete.
           */
        }, {
          key: "listUploadParts",
          value: function listUploadParts(params) {
            try {
              var _this4 = this;
              var query = {};
              var headers = {};
              return UploadApi_await(_this4.request({
                path: "/v2/accounts/{accountId}/uploads/{uploadId}/parts".replace(
                  "{".concat("accountId", "}"),
                  // @ts-ignore
                  _this4.encodeParam("accountId", params.accountId)
                ).replace(
                  "{".concat("uploadId", "}"),
                  // @ts-ignore
                  _this4.encodeParam("uploadId", params.uploadId)
                ),
                method: "GET",
                headers,
                query
              }, void 0, [][0]), function(response) {
                return UploadApi_await(new JSONApiResponse(response).value());
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
          /**
           * Upload from a URL with a single HTTP request:
           */
        }, {
          key: "uploadFromUrl",
          value: function uploadFromUrl(params) {
            try {
              var _this5 = this;
              var query = {};
              var headers = {};
              headers["Content-Type"] = "application/json";
              return UploadApi_await(_this5.request({
                path: "/v2/accounts/{accountId}/uploads/url".replace(
                  "{".concat("accountId", "}"),
                  // @ts-ignore
                  _this5.encodeParam("accountId", params.accountId)
                ),
                method: "POST",
                headers,
                query,
                body: params.uploadFromUrlRequest
              }, void 0, [][0]), function(response) {
                return UploadApi_await(new JSONApiResponse(response).value());
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }]);
      }(BaseAPI);
      ;
      ;
      ;
      var CommonTypesNoOp = false;
      ;
      function assertUnreachable(x4) {
        throw new Error("Didn't expect to get here: ".concat(JSON.stringify(x4)));
      }
      function isDefinedEntry(object) {
        return object[1] !== void 0 && object[1] !== null;
      }
      ;
      function UrlBuilder_typeof(o4) {
        "@babel/helpers - typeof";
        return UrlBuilder_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o5) {
          return typeof o5;
        } : function(o5) {
          return o5 && "function" == typeof Symbol && o5.constructor === Symbol && o5 !== Symbol.prototype ? "symbol" : typeof o5;
        }, UrlBuilder_typeof(o4);
      }
      function _slicedToArray(arr, i4) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i4) || UrlBuilder_unsupportedIterableToArray(arr, i4) || _nonIterableRest();
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _iterableToArrayLimit(r3, l4) {
        var t4 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
        if (null != t4) {
          var e3, n3, i4, u4, a4 = [], f4 = true, o4 = false;
          try {
            if (i4 = (t4 = t4.call(r3)).next, 0 === l4) {
              if (Object(t4) !== t4)
                return;
              f4 = false;
            } else
              for (; !(f4 = (e3 = i4.call(t4)).done) && (a4.push(e3.value), a4.length !== l4); f4 = true)
                ;
          } catch (r4) {
            o4 = true, n3 = r4;
          } finally {
            try {
              if (!f4 && null != t4["return"] && (u4 = t4["return"](), Object(u4) !== u4))
                return;
            } finally {
              if (o4)
                throw n3;
            }
          }
          return a4;
        }
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      function UrlBuilder_toConsumableArray(arr) {
        return UrlBuilder_arrayWithoutHoles(arr) || UrlBuilder_iterableToArray(arr) || UrlBuilder_unsupportedIterableToArray(arr) || UrlBuilder_nonIterableSpread();
      }
      function UrlBuilder_nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function UrlBuilder_unsupportedIterableToArray(o4, minLen) {
        if (!o4)
          return;
        if (typeof o4 === "string")
          return UrlBuilder_arrayLikeToArray(o4, minLen);
        var n3 = Object.prototype.toString.call(o4).slice(8, -1);
        if (n3 === "Object" && o4.constructor)
          n3 = o4.constructor.name;
        if (n3 === "Map" || n3 === "Set")
          return Array.from(o4);
        if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
          return UrlBuilder_arrayLikeToArray(o4, minLen);
      }
      function UrlBuilder_iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function UrlBuilder_arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return UrlBuilder_arrayLikeToArray(arr);
      }
      function UrlBuilder_arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
          arr2[i4] = arr[i4];
        return arr2;
      }
      function UrlBuilder_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function UrlBuilder_defineProperties(target, props) {
        for (var i4 = 0; i4 < props.length; i4++) {
          var descriptor = props[i4];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, UrlBuilder_toPropertyKey(descriptor.key), descriptor);
        }
      }
      function UrlBuilder_createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          UrlBuilder_defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          UrlBuilder_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function UrlBuilder_toPropertyKey(t4) {
        var i4 = UrlBuilder_toPrimitive(t4, "string");
        return "symbol" == UrlBuilder_typeof(i4) ? i4 : i4 + "";
      }
      function UrlBuilder_toPrimitive(t4, r3) {
        if ("object" != UrlBuilder_typeof(t4) || !t4)
          return t4;
        var e3 = t4[Symbol.toPrimitive];
        if (void 0 !== e3) {
          var i4 = e3.call(t4, r3 || "default");
          if ("object" != UrlBuilder_typeof(i4))
            return i4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r3 ? String : Number)(t4);
      }
      var UrlBuilder = function() {
        function UrlBuilder2() {
          UrlBuilder_classCallCheck(this, UrlBuilder2);
        }
        return UrlBuilder_createClass(UrlBuilder2, null, [{
          key: "url",
          value: (
            /**
             * Builds a URL to either a raw file or a transformed file.
             *
             * Example 1) Getting a publicly-accessible raw file URL:
             *
             *   new UrlBuilder().url({ accountId: "1234abc", filePath: "/example.jpg" })
             *
             * Example 2) Getting a publicly-accessible image URL, resized to 500x500:
             *
             *   new UrlBuilder().url({ accountId: "1234abc", filePath: "/example.jpg", options: { transformation: { type: "image", params: { w: 500, h: 500, fit: "crop" } } } })
             *
             * Example 3) Getting a privately-accessible image URL, resized to 500x500 (requires 'AuthManager.beginAuthSession' to be called before accessing the URL):
             *
             *   new UrlBuilder().url({ accountId: "1234abc", filePath: "/example.jpg", options: { transformation: { type: "image", params: { w: 500, h: 500, fit: "crop" } }, auth: true } })
             *
             * Example 4) Getting a publicly-accessible image URL, resized using a transformation preset called "thumbnail" that was created manually in the Bytescale Dashboard:
             *
             *   new UrlBuilder().url({ accountId: "1234abc", filePath: "/example.jpg", options: { transformation: { type: "preset", preset: "thumbnail" } } })
             */
            function url(params) {
              var _a;
              return ((_a = params.options) === null || _a === void 0 ? void 0 : _a.transformation) === void 0 ? this.raw(params) : this.transformation(params, params.options);
            }
          )
        }, {
          key: "raw",
          value: function raw(params) {
            var _a;
            var baseUrl = this.getBaseUrl(params, "raw");
            var commonParams = this.getCommonQueryParams((_a = params.options) !== null && _a !== void 0 ? _a : {});
            return this.addQueryParams(baseUrl, commonParams);
          }
        }, {
          key: "transformation",
          value: function transformation(params, trans) {
            var _a;
            var baseUrl = this.getBaseUrl(params, trans.transformation === "preset" ? trans.transformationPreset : trans.transformation);
            var transParams = trans.transformation === "preset" ? [] : this.getTransformationParams(trans);
            var commonParams = this.getCommonQueryParams((_a = params.options) !== null && _a !== void 0 ? _a : {});
            var transCommonParams = this.getCommonTransformationQueryParams(trans);
            return this.addQueryParams(baseUrl, [].concat(UrlBuilder_toConsumableArray(transParams), UrlBuilder_toConsumableArray(commonParams), UrlBuilder_toConsumableArray(transCommonParams)));
          }
        }, {
          key: "getBaseUrl",
          value: function getBaseUrl(params, prefix) {
            var _a, _b;
            var cdnUrl = (_b = (_a = params.options) === null || _a === void 0 ? void 0 : _a.cdnUrl) !== null && _b !== void 0 ? _b : BytescaleApiClientConfigUtils.defaultCdnUrl;
            var filePathEncoded = encodeURIComponent(params.filePath).replace(/%2F/g, "/");
            return "".concat(cdnUrl, "/").concat(params.accountId, "/").concat(prefix).concat(filePathEncoded);
          }
        }, {
          key: "getCommonTransformationQueryParams",
          value: function getCommonTransformationQueryParams(trans) {
            return this.makeQueryParams({
              cacheOnly: null,
              cachePermanently: null,
              // Keep this as the last param: this is required for certain transformations, such as async HLS jobs. For example,
              // given an artifact '!f=hls-h264&artifact=/video.m3u8' that returns a master M3U8 playlist containing relative
              // links to child M3U8 playlists (e.g. 'child1.m3u8'), when the child URLs inside the master M3U8 file are resolved
              // by the browser, the 'child1.m3u8' path essentially replaces everything after the '/' on the master M3U8 URL.
              // Thus, if query params existed after the 'artifact' param, they would be wiped out, causing the child M3U8
              // playlist to suddenly reference a different transformation.
              artifact: null
            }, {
              cacheOnly: "cache_only",
              cachePermanently: "cache_perm"
            })(trans);
          }
        }, {
          key: "getCommonQueryParams",
          value: function getCommonQueryParams(params) {
            return this.makeQueryParams({
              cache: null,
              cacheTtl: null,
              cacheTtl404: null,
              version: null,
              forceDownloadPrompt: null
            }, {
              cacheTtl: "cache_ttl",
              cacheTtl404: "cache_ttl_404",
              forceDownloadPrompt: "download"
            })(params);
          }
          /**
           * Masks the querystring params per the 'keys' array.
           *
           * Order sensitive: querystring params will appear per the order of the 'keys' array.
           */
        }, {
          key: "makeQueryParams",
          value: function makeQueryParams(keyPrototype, keyOverrides) {
            return function(data) {
              var result = [];
              var keys = Object.keys(keyPrototype);
              keys.forEach(function(key) {
                var _a;
                var value = data[key];
                if (value !== void 0) {
                  result.push([(_a = keyOverrides[key]) !== null && _a !== void 0 ? _a : key, value.toString()]);
                }
              });
              return result;
            };
          }
        }, {
          key: "getTransformationParams",
          value: function getTransformationParams(trans) {
            var params = trans.transformationParams;
            if (params === void 0) {
              return [];
            }
            var serializeObj = function serializeObj2(obj) {
              return Object.entries(obj).filter(isDefinedEntry).map(function(_ref) {
                var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
                return [key, value.toString()];
              });
            };
            return Array.isArray(params) ? params.flatMap(serializeObj) : serializeObj(params);
          }
        }, {
          key: "addQueryParams",
          value: function addQueryParams(baseUrl, params) {
            if (params.length === 0) {
              return baseUrl;
            }
            return "".concat(baseUrl, "?").concat(params.map(function(_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2), key = _ref4[0], value = _ref4[1];
              return encodeBytescaleQuerystringKVP(key, value);
            }).join("&"));
          }
        }]);
      }();
      ;
      var UrlBuilderTypesNoOp = false;
      ;
      ;
      function UploadManagerBase_empty() {
      }
      function UploadManagerBase_awaitIgnored(value, direct) {
        if (!direct) {
          return value && value.then ? value.then(UploadManagerBase_empty) : Promise.resolve();
        }
      }
      function UploadManagerBase_await(value, then, direct) {
        if (direct) {
          return then ? then(value) : value;
        }
        if (!value || !value.then) {
          value = Promise.resolve(value);
        }
        return then ? value.then(then) : value;
      }
      function UploadManagerBase_rethrow(thrown, value) {
        if (thrown)
          throw value;
        return value;
      }
      function UploadManagerBase_finallyRethrows(body, finalizer) {
        try {
          var result = body();
        } catch (e3) {
          return finalizer(true, e3);
        }
        if (result && result.then) {
          return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
        }
        return finalizer(false, result);
      }
      function UploadManagerBase_continue(value, then) {
        return value && value.then ? value.then(then) : then(value);
      }
      function _async(f4) {
        return function() {
          for (var args = [], i4 = 0; i4 < arguments.length; i4++) {
            args[i4] = arguments[i4];
          }
          try {
            return Promise.resolve(f4.apply(this, args));
          } catch (e3) {
            return Promise.reject(e3);
          }
        };
      }
      function _invokeIgnored(body) {
        var result = body();
        if (result && result.then) {
          return result.then(UploadManagerBase_empty);
        }
      }
      function _settle(pact, state, value) {
        if (!pact.s) {
          if (value instanceof _Pact) {
            if (value.s) {
              if (state & 1) {
                state = value.s;
              }
              value = value.v;
            } else {
              value.o = _settle.bind(null, pact, state);
              return;
            }
          }
          if (value && value.then) {
            value.then(_settle.bind(null, pact, state), _settle.bind(null, pact, 2));
            return;
          }
          pact.s = state;
          pact.v = value;
          var observer = pact.o;
          if (observer) {
            observer(pact);
          }
        }
      }
      var _Pact = function() {
        function _Pact2() {
        }
        _Pact2.prototype.then = function(onFulfilled, onRejected) {
          var result = new _Pact2();
          var state = this.s;
          if (state) {
            var callback = state & 1 ? onFulfilled : onRejected;
            if (callback) {
              try {
                _settle(result, 1, callback(this.v));
              } catch (e3) {
                _settle(result, 2, e3);
              }
              return result;
            } else {
              return this;
            }
          }
          this.o = function(_this) {
            try {
              var value = _this.v;
              if (_this.s & 1) {
                _settle(result, 1, onFulfilled ? onFulfilled(value) : value);
              } else if (onRejected) {
                _settle(result, 1, onRejected(value));
              } else {
                _settle(result, 2, value);
              }
            } catch (e3) {
              _settle(result, 2, e3);
            }
          };
          return result;
        };
        return _Pact2;
      }();
      function _isSettledPact(thenable) {
        return thenable instanceof _Pact && thenable.s & 1;
      }
      function _for(test, update, body) {
        var stage;
        for (; ; ) {
          var shouldContinue = test();
          if (_isSettledPact(shouldContinue)) {
            shouldContinue = shouldContinue.v;
          }
          if (!shouldContinue) {
            return result;
          }
          if (shouldContinue.then) {
            stage = 0;
            break;
          }
          var result = body();
          if (result && result.then) {
            if (_isSettledPact(result)) {
              result = result.s;
            } else {
              stage = 1;
              break;
            }
          }
          if (update) {
            var updateValue = update();
            if (updateValue && updateValue.then && !_isSettledPact(updateValue)) {
              stage = 2;
              break;
            }
          }
        }
        var pact = new _Pact();
        var reject = _settle.bind(null, pact, 2);
        (stage === 0 ? shouldContinue.then(_resumeAfterTest) : stage === 1 ? result.then(_resumeAfterBody) : updateValue.then(_resumeAfterUpdate)).then(void 0, reject);
        return pact;
        function _resumeAfterBody(value) {
          result = value;
          do {
            if (update) {
              updateValue = update();
              if (updateValue && updateValue.then && !_isSettledPact(updateValue)) {
                updateValue.then(_resumeAfterUpdate).then(void 0, reject);
                return;
              }
            }
            shouldContinue = test();
            if (!shouldContinue || _isSettledPact(shouldContinue) && !shouldContinue.v) {
              _settle(pact, 1, result);
              return;
            }
            if (shouldContinue.then) {
              shouldContinue.then(_resumeAfterTest).then(void 0, reject);
              return;
            }
            result = body();
            if (_isSettledPact(result)) {
              result = result.v;
            }
          } while (!result || !result.then);
          result.then(_resumeAfterBody).then(void 0, reject);
        }
        function _resumeAfterTest(shouldContinue2) {
          if (shouldContinue2) {
            result = body();
            if (result && result.then) {
              result.then(_resumeAfterBody).then(void 0, reject);
            } else {
              _resumeAfterBody(result);
            }
          } else {
            _settle(pact, 1, result);
          }
        }
        function _resumeAfterUpdate() {
          if (shouldContinue = test()) {
            if (shouldContinue.then) {
              shouldContinue.then(_resumeAfterTest).then(void 0, reject);
            } else {
              _resumeAfterTest(shouldContinue);
            }
          } else {
            _settle(pact, 1, result);
          }
        }
      }
      function _continueIgnored(value) {
        if (value && value.then) {
          return value.then(UploadManagerBase_empty);
        }
      }
      function UploadManagerBase_typeof(o4) {
        "@babel/helpers - typeof";
        return UploadManagerBase_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o5) {
          return typeof o5;
        } : function(o5) {
          return o5 && "function" == typeof Symbol && o5.constructor === Symbol && o5 !== Symbol.prototype ? "symbol" : typeof o5;
        }, UploadManagerBase_typeof(o4);
      }
      function UploadManagerBase_toConsumableArray(arr) {
        return UploadManagerBase_arrayWithoutHoles(arr) || UploadManagerBase_iterableToArray(arr) || UploadManagerBase_unsupportedIterableToArray(arr) || UploadManagerBase_nonIterableSpread();
      }
      function UploadManagerBase_nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function UploadManagerBase_unsupportedIterableToArray(o4, minLen) {
        if (!o4)
          return;
        if (typeof o4 === "string")
          return UploadManagerBase_arrayLikeToArray(o4, minLen);
        var n3 = Object.prototype.toString.call(o4).slice(8, -1);
        if (n3 === "Object" && o4.constructor)
          n3 = o4.constructor.name;
        if (n3 === "Map" || n3 === "Set")
          return Array.from(o4);
        if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
          return UploadManagerBase_arrayLikeToArray(o4, minLen);
      }
      function UploadManagerBase_iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function UploadManagerBase_arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return UploadManagerBase_arrayLikeToArray(arr);
      }
      function UploadManagerBase_arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
          arr2[i4] = arr[i4];
        return arr2;
      }
      function UploadManagerBase_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function UploadManagerBase_defineProperties(target, props) {
        for (var i4 = 0; i4 < props.length; i4++) {
          var descriptor = props[i4];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, UploadManagerBase_toPropertyKey(descriptor.key), descriptor);
        }
      }
      function UploadManagerBase_createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          UploadManagerBase_defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          UploadManagerBase_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function UploadManagerBase_toPropertyKey(t4) {
        var i4 = UploadManagerBase_toPrimitive(t4, "string");
        return "symbol" == UploadManagerBase_typeof(i4) ? i4 : i4 + "";
      }
      function UploadManagerBase_toPrimitive(t4, r3) {
        if ("object" != UploadManagerBase_typeof(t4) || !t4)
          return t4;
        var e3 = t4[Symbol.toPrimitive];
        if (void 0 !== e3) {
          var i4 = e3.call(t4, r3 || "default");
          if ("object" != UploadManagerBase_typeof(i4))
            return i4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r3 ? String : Number)(t4);
      }
      var UploadManagerBase = function() {
        function UploadManagerBase2(config) {
          UploadManagerBase_classCallCheck(this, UploadManagerBase2);
          this.config = config;
          this.stringMimeType = "text/plain";
          this.defaultMaxConcurrentUploadParts = 4;
          this.intervalMs = 500;
          this.uploadApi = new UploadApi(config);
          this.accountId = BytescaleApiClientConfigUtils.getAccountId(config);
        }
        return UploadManagerBase_createClass(UploadManagerBase2, [{
          key: "upload",
          value: function upload(request) {
            try {
              var _this = this;
              _this.assertNotCancelled(request);
              var source = _this.processUploadSource(request.data);
              var preUploadInfo = _this.getPreUploadInfo(request, source);
              var bytesTotal = preUploadInfo.size;
              var makeOnProgressForPart = _this.makeOnProgressForPartFactory(request, bytesTotal);
              var init = _this.preUpload(source);
              if (request.onProgress !== void 0) {
                request.onProgress(_this.makeProgressEvent(0, bytesTotal));
              }
              return UploadManagerBase_await(_this.beginUpload(request, preUploadInfo), function(uploadInfo) {
                var partCount = uploadInfo.uploadParts.count;
                var parts = UploadManagerBase_toConsumableArray(Array(partCount).keys());
                var _this$makeCancellatio = _this.makeCancellationMethods(), cancel = _this$makeCancellatio.cancel, addCancellationHandler = _this$makeCancellatio.addCancellationHandler;
                var intervalHandle = setInterval(_this.onIntervalTick(request, cancel), _this.intervalMs);
                var uploadedParts;
                return UploadManagerBase_continue(UploadManagerBase_finallyRethrows(function() {
                  return UploadManagerBase_await(_this.mapAsync(parts, preUploadInfo.maxConcurrentUploadParts, _async(function(part) {
                    return _this.uploadPart(request, source, part, uploadInfo, makeOnProgressForPart(), addCancellationHandler);
                  })), function(_this$mapAsync) {
                    uploadedParts = _this$mapAsync;
                    return UploadManagerBase_awaitIgnored(_this.postUpload(init));
                  });
                }, function(_wasThrown, _result) {
                  clearInterval(intervalHandle);
                  return UploadManagerBase_rethrow(_wasThrown, _result);
                }), function() {
                  var etag = uploadedParts.flatMap(function(x4) {
                    return x4.status === "Completed" ? [x4.etag] : [];
                  })[0];
                  return Object.assign(Object.assign({}, uploadInfo.file), {
                    etag
                    // The 'etag' in the original 'uploadInfo.file' will be null, so we set it to the final etag value here.
                  });
                });
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }, {
          key: "getBlobInfo",
          value: function getBlobInfo(_ref) {
            var _ref$value = _ref.value, name = _ref$value.name, size = _ref$value.size, type = _ref$value.type;
            return {
              // Some browsers/OSs return 'type: ""' for files with unknown MIME types, like HEICs, which causes a validation
              // error from the Bytescale API as "" is not a valid MIME type, so we coalesce to undefined here.
              mime: type === "" ? void 0 : type,
              size,
              originalFileName: name,
              maxConcurrentUploadParts: void 0
            };
          }
        }, {
          key: "onIntervalTick",
          value: function onIntervalTick(request, cancel) {
            var _this2 = this;
            return function() {
              if (_this2.isCancelled(request)) {
                cancel();
              }
            };
          }
        }, {
          key: "makeCancellationMethods",
          value: function makeCancellationMethods() {
            var cancellationHandlers = [];
            var addCancellationHandler = function addCancellationHandler2(ca) {
              cancellationHandlers.push(ca);
            };
            var cancel = function cancel2() {
              return cancellationHandlers.forEach(function(x4) {
                return x4();
              });
            };
            return {
              cancel,
              addCancellationHandler
            };
          }
          /**
           * Returns a callback, which when called, returns a callback that can be used by ONE specific part to report its progress.
           */
        }, {
          key: "makeOnProgressForPartFactory",
          value: function makeOnProgressForPartFactory(request, bytesTotal) {
            var _this3 = this;
            var onProgress = request.onProgress;
            if (onProgress === void 0) {
              return function() {
                return function() {
                };
              };
            }
            var bytesSent = 0;
            return function() {
              var bytesSentForPart = 0;
              return function(bytesSentTotalForPart) {
                var delta = bytesSentTotalForPart - bytesSentForPart;
                bytesSentForPart += delta;
                bytesSent += delta;
                onProgress(_this3.makeProgressEvent(bytesSent, bytesTotal));
              };
            };
          }
        }, {
          key: "makeProgressEvent",
          value: function makeProgressEvent(bytesSent, bytesTotal) {
            return {
              bytesTotal,
              bytesSent,
              progress: Math.round(bytesSent / bytesTotal * 100)
            };
          }
        }, {
          key: "assertNotCancelled",
          value: function assertNotCancelled(request) {
            if (this.isCancelled(request)) {
              throw new CancelledError();
            }
          }
        }, {
          key: "isCancelled",
          value: function isCancelled(request) {
            var _a;
            return ((_a = request.cancellationToken) === null || _a === void 0 ? void 0 : _a.isCancelled) === true;
          }
        }, {
          key: "beginUpload",
          value: function beginUpload(request, _ref2) {
            var size = _ref2.size, mime = _ref2.mime, originalFileName = _ref2.originalFileName;
            try {
              var _this4 = this;
              return UploadManagerBase_await(_this4.uploadApi.beginMultipartUpload({
                accountId: _this4.accountId,
                beginMultipartUploadRequest: {
                  metadata: request.metadata,
                  mime,
                  originalFileName,
                  path: request.path,
                  protocol: "1.1",
                  size,
                  tags: request.tags
                }
              }));
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }, {
          key: "uploadPart",
          value: function uploadPart(request, source, partIndex, uploadInfo, onProgress, addCancellationHandler) {
            try {
              var _this5 = this;
              _this5.assertNotCancelled(request);
              return UploadManagerBase_await(_this5.getUploadPart(partIndex, uploadInfo), function(part) {
                _this5.assertNotCancelled(request);
                return UploadManagerBase_await(_this5.putUploadPart(part, source, onProgress, addCancellationHandler), function(etag) {
                  _this5.assertNotCancelled(request);
                  return UploadManagerBase_await(_this5.uploadApi.completeUploadPart({
                    accountId: _this5.accountId,
                    uploadId: uploadInfo.uploadId,
                    uploadPartIndex: partIndex,
                    completeUploadPartRequest: {
                      etag
                    }
                  }));
                });
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
          /**
           * Returns etag for the part.
           */
        }, {
          key: "putUploadPart",
          value: function putUploadPart(part, source, onProgress, addCancellationHandler) {
            try {
              var _this6 = this;
              var contentLength = part.range.inclusiveEnd + 1 - part.range.inclusiveStart;
              return UploadManagerBase_await(_this6.doPutUploadPart(part, contentLength, source, onProgress, addCancellationHandler), function(_ref3) {
                var status = _ref3.status, etag = _ref3.etag;
                if (Math.floor(status / 100) !== 2) {
                  throw new Error("Failed to upload part (".concat(status, ")."));
                }
                if (etag === void 0) {
                  throw new Error("No 'etag' response header found in upload part response.");
                }
                onProgress(contentLength);
                return etag;
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }, {
          key: "getUploadPart",
          value: function getUploadPart(partIndex, uploadInfo) {
            try {
              var _this7 = this;
              if (partIndex === 0) {
                return UploadManagerBase_await(uploadInfo.uploadParts.first);
              }
              return UploadManagerBase_await(_this7.uploadApi.getUploadPart({
                uploadId: uploadInfo.uploadId,
                accountId: _this7.accountId,
                uploadPartIndex: partIndex
              }));
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }, {
          key: "getPreUploadInfo",
          value: function getPreUploadInfo(request, source) {
            var _a, _b, _c;
            var partial = this.getPreUploadInfoPartial(request, source);
            return {
              maxConcurrentUploadParts: (_a = partial.maxConcurrentUploadParts) !== null && _a !== void 0 ? _a : this.defaultMaxConcurrentUploadParts,
              originalFileName: (_b = request.originalFileName) !== null && _b !== void 0 ? _b : partial.originalFileName,
              mime: (_c = request.mime) !== null && _c !== void 0 ? _c : partial.mime,
              size: partial.size
            };
          }
        }, {
          key: "mapAsync",
          value: function mapAsync(items, concurrency, callback) {
            try {
              var result = [];
              var workQueue = UploadManagerBase_toConsumableArray(items);
              return UploadManagerBase_await(Promise.all(UploadManagerBase_toConsumableArray(Array(concurrency).keys()).map(_async(function() {
                return _continueIgnored(_for(function() {
                  return workQueue.length > 0;
                }, void 0, function() {
                  var work = workQueue.shift();
                  return _invokeIgnored(function() {
                    if (work !== void 0) {
                      var _push = result.push;
                      return UploadManagerBase_await(callback(work), function(_callback) {
                        _push.call(result, _callback);
                      });
                    }
                  });
                }));
              }))), function() {
                return result;
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }]);
      }();
      ;
      function UploadManagerBrowserWorkerBase_typeof(o4) {
        "@babel/helpers - typeof";
        return UploadManagerBrowserWorkerBase_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o5) {
          return typeof o5;
        } : function(o5) {
          return o5 && "function" == typeof Symbol && o5.constructor === Symbol && o5 !== Symbol.prototype ? "symbol" : typeof o5;
        }, UploadManagerBrowserWorkerBase_typeof(o4);
      }
      function UploadManagerBrowserWorkerBase_await(value, then, direct) {
        if (direct) {
          return then ? then(value) : value;
        }
        if (!value || !value.then) {
          value = Promise.resolve(value);
        }
        return then ? value.then(then) : value;
      }
      function UploadManagerBrowserWorkerBase_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function UploadManagerBrowserWorkerBase_defineProperties(target, props) {
        for (var i4 = 0; i4 < props.length; i4++) {
          var descriptor = props[i4];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, UploadManagerBrowserWorkerBase_toPropertyKey(descriptor.key), descriptor);
        }
      }
      function UploadManagerBrowserWorkerBase_createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          UploadManagerBrowserWorkerBase_defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          UploadManagerBrowserWorkerBase_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function UploadManagerBrowserWorkerBase_toPropertyKey(t4) {
        var i4 = UploadManagerBrowserWorkerBase_toPrimitive(t4, "string");
        return "symbol" == UploadManagerBrowserWorkerBase_typeof(i4) ? i4 : i4 + "";
      }
      function UploadManagerBrowserWorkerBase_toPrimitive(t4, r3) {
        if ("object" != UploadManagerBrowserWorkerBase_typeof(t4) || !t4)
          return t4;
        var e3 = t4[Symbol.toPrimitive];
        if (void 0 !== e3) {
          var i4 = e3.call(t4, r3 || "default");
          if ("object" != UploadManagerBrowserWorkerBase_typeof(i4))
            return i4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r3 ? String : Number)(t4);
      }
      function UploadManagerBrowserWorkerBase_callSuper(t4, o4, e3) {
        return o4 = UploadManagerBrowserWorkerBase_getPrototypeOf(o4), UploadManagerBrowserWorkerBase_possibleConstructorReturn(t4, UploadManagerBrowserWorkerBase_isNativeReflectConstruct() ? Reflect.construct(o4, e3 || [], UploadManagerBrowserWorkerBase_getPrototypeOf(t4).constructor) : o4.apply(t4, e3));
      }
      function UploadManagerBrowserWorkerBase_possibleConstructorReturn(self, call) {
        if (call && (UploadManagerBrowserWorkerBase_typeof(call) === "object" || typeof call === "function")) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError("Derived constructors may only return object or undefined");
        }
        return UploadManagerBrowserWorkerBase_assertThisInitialized(self);
      }
      function UploadManagerBrowserWorkerBase_assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function UploadManagerBrowserWorkerBase_isNativeReflectConstruct() {
        try {
          var t4 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (t5) {
        }
        return (UploadManagerBrowserWorkerBase_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
          return !!t4;
        })();
      }
      function UploadManagerBrowserWorkerBase_getPrototypeOf(o4) {
        UploadManagerBrowserWorkerBase_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o5) {
          return o5.__proto__ || Object.getPrototypeOf(o5);
        };
        return UploadManagerBrowserWorkerBase_getPrototypeOf(o4);
      }
      function UploadManagerBrowserWorkerBase_inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
        Object.defineProperty(subClass, "prototype", { writable: false });
        if (superClass)
          UploadManagerBrowserWorkerBase_setPrototypeOf(subClass, superClass);
      }
      function UploadManagerBrowserWorkerBase_setPrototypeOf(o4, p4) {
        UploadManagerBrowserWorkerBase_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o5, p5) {
          o5.__proto__ = p5;
          return o5;
        };
        return UploadManagerBrowserWorkerBase_setPrototypeOf(o4, p4);
      }
      var UploadManagerBrowserWorkerBase = function(_UploadManagerBase) {
        function UploadManagerBrowserWorkerBase2() {
          UploadManagerBrowserWorkerBase_classCallCheck(this, UploadManagerBrowserWorkerBase2);
          return UploadManagerBrowserWorkerBase_callSuper(this, UploadManagerBrowserWorkerBase2, arguments);
        }
        UploadManagerBrowserWorkerBase_inherits(UploadManagerBrowserWorkerBase2, _UploadManagerBase);
        return UploadManagerBrowserWorkerBase_createClass(UploadManagerBrowserWorkerBase2, [{
          key: "processUploadSource",
          value: function processUploadSource(data) {
            if (typeof data === "string") {
              return {
                type: "Blob",
                value: new Blob([data], {
                  type: this.stringMimeType
                })
              };
            }
            if (data.byteLength !== void 0) {
              return {
                type: "ArrayBuffer",
                value: data
              };
            }
            if (data.size !== void 0) {
              return {
                type: "Blob",
                value: data
              };
            }
            throw new Error("Unsupported type for 'data' parameter. Please provide a String, Blob, ArrayBuffer, or File object (from a file input element).");
          }
        }, {
          key: "getPreUploadInfoPartial",
          value: function getPreUploadInfoPartial(_request, data) {
            switch (data.type) {
              case "Blob":
                return this.getBlobInfo(data);
              case "ArrayBuffer":
                return {
                  mime: void 0,
                  size: data.value.byteLength,
                  originalFileName: void 0,
                  maxConcurrentUploadParts: void 0
                };
              default:
                assertUnreachable(data);
            }
          }
        }, {
          key: "preUpload",
          value: function preUpload(_source) {
            return void 0;
          }
        }, {
          key: "postUpload",
          value: function postUpload(_init) {
            return UploadManagerBrowserWorkerBase_await();
          }
          // NO-OP.
        }, {
          key: "getRequestBody",
          value: function getRequestBody(part, blob) {
            return part.range.inclusiveEnd === -1 ? new Blob() : blob.value.slice(part.range.inclusiveStart, part.range.inclusiveEnd + 1);
          }
        }]);
      }(UploadManagerBase);
      ;
      function UploadManagerBrowser_typeof(o4) {
        "@babel/helpers - typeof";
        return UploadManagerBrowser_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o5) {
          return typeof o5;
        } : function(o5) {
          return o5 && "function" == typeof Symbol && o5.constructor === Symbol && o5 !== Symbol.prototype ? "symbol" : typeof o5;
        }, UploadManagerBrowser_typeof(o4);
      }
      function UploadManagerBrowser_await(value, then, direct) {
        if (direct) {
          return then ? then(value) : value;
        }
        if (!value || !value.then) {
          value = Promise.resolve(value);
        }
        return then ? value.then(then) : value;
      }
      function UploadManagerBrowser_rethrow(thrown, value) {
        if (thrown)
          throw value;
        return value;
      }
      function UploadManagerBrowser_finallyRethrows(body, finalizer) {
        try {
          var result = body();
        } catch (e3) {
          return finalizer(true, e3);
        }
        if (result && result.then) {
          return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
        }
        return finalizer(false, result);
      }
      function UploadManagerBrowser_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function UploadManagerBrowser_defineProperties(target, props) {
        for (var i4 = 0; i4 < props.length; i4++) {
          var descriptor = props[i4];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, UploadManagerBrowser_toPropertyKey(descriptor.key), descriptor);
        }
      }
      function UploadManagerBrowser_createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          UploadManagerBrowser_defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          UploadManagerBrowser_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function UploadManagerBrowser_toPropertyKey(t4) {
        var i4 = UploadManagerBrowser_toPrimitive(t4, "string");
        return "symbol" == UploadManagerBrowser_typeof(i4) ? i4 : i4 + "";
      }
      function UploadManagerBrowser_toPrimitive(t4, r3) {
        if ("object" != UploadManagerBrowser_typeof(t4) || !t4)
          return t4;
        var e3 = t4[Symbol.toPrimitive];
        if (void 0 !== e3) {
          var i4 = e3.call(t4, r3 || "default");
          if ("object" != UploadManagerBrowser_typeof(i4))
            return i4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r3 ? String : Number)(t4);
      }
      function UploadManagerBrowser_callSuper(t4, o4, e3) {
        return o4 = UploadManagerBrowser_getPrototypeOf(o4), UploadManagerBrowser_possibleConstructorReturn(t4, UploadManagerBrowser_isNativeReflectConstruct() ? Reflect.construct(o4, e3 || [], UploadManagerBrowser_getPrototypeOf(t4).constructor) : o4.apply(t4, e3));
      }
      function UploadManagerBrowser_possibleConstructorReturn(self, call) {
        if (call && (UploadManagerBrowser_typeof(call) === "object" || typeof call === "function")) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError("Derived constructors may only return object or undefined");
        }
        return UploadManagerBrowser_assertThisInitialized(self);
      }
      function UploadManagerBrowser_assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function UploadManagerBrowser_isNativeReflectConstruct() {
        try {
          var t4 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (t5) {
        }
        return (UploadManagerBrowser_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
          return !!t4;
        })();
      }
      function UploadManagerBrowser_getPrototypeOf(o4) {
        UploadManagerBrowser_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o5) {
          return o5.__proto__ || Object.getPrototypeOf(o5);
        };
        return UploadManagerBrowser_getPrototypeOf(o4);
      }
      function UploadManagerBrowser_inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
        Object.defineProperty(subClass, "prototype", { writable: false });
        if (superClass)
          UploadManagerBrowser_setPrototypeOf(subClass, superClass);
      }
      function UploadManagerBrowser_setPrototypeOf(o4, p4) {
        UploadManagerBrowser_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o5, p5) {
          o5.__proto__ = p5;
          return o5;
        };
        return UploadManagerBrowser_setPrototypeOf(o4, p4);
      }
      var UploadManager = function(_UploadManagerBrowser) {
        function UploadManager2() {
          UploadManagerBrowser_classCallCheck(this, UploadManager2);
          return UploadManagerBrowser_callSuper(this, UploadManager2, arguments);
        }
        UploadManagerBrowser_inherits(UploadManager2, _UploadManagerBrowser);
        return UploadManagerBrowser_createClass(UploadManager2, [{
          key: "doPutUploadPart",
          value: function doPutUploadPart(part, _contentLength, source, onProgress, addCancellationHandler) {
            try {
              var _this = this;
              var xhr = new XMLHttpRequest();
              var pending = true;
              addCancellationHandler(function() {
                if (pending) {
                  xhr.abort();
                }
              });
              return UploadManagerBrowser_await(UploadManagerBrowser_finallyRethrows(function() {
                return UploadManagerBrowser_await(new Promise(function(resolve, reject) {
                  xhr.upload.addEventListener("progress", function(evt) {
                    if (evt.lengthComputable) {
                      onProgress(evt.loaded);
                    }
                  }, false);
                  xhr.addEventListener("load", function() {
                    var _a;
                    var etag = (_a = xhr.getResponseHeader("etag")) !== null && _a !== void 0 ? _a : void 0;
                    resolve({
                      etag,
                      status: xhr.status
                    });
                  });
                  xhr.onabort = function() {
                    return reject(new CancelledError());
                  };
                  xhr.onerror = function() {
                    return reject(new Error("File upload error."));
                  };
                  xhr.ontimeout = function() {
                    return reject(new Error("File upload timeout."));
                  };
                  xhr.open("PUT", part.uploadUrl);
                  xhr.send(_this.getRequestBody(part, source));
                }));
              }, function(_wasThrown, _result) {
                pending = false;
                return UploadManagerBrowser_rethrow(_wasThrown, _result);
              }));
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }]);
      }(UploadManagerBrowserWorkerBase);
      ;
      function ServiceWorkerUtils_await(value, then, direct) {
        if (direct) {
          return then ? then(value) : value;
        }
        if (!value || !value.then) {
          value = Promise.resolve(value);
        }
        return then ? value.then(then) : value;
      }
      function ServiceWorkerUtils_empty() {
      }
      function ServiceWorkerUtils_settle(pact, state, value) {
        if (!pact.s) {
          if (value instanceof ServiceWorkerUtils_Pact) {
            if (value.s) {
              if (state & 1) {
                state = value.s;
              }
              value = value.v;
            } else {
              value.o = ServiceWorkerUtils_settle.bind(null, pact, state);
              return;
            }
          }
          if (value && value.then) {
            value.then(ServiceWorkerUtils_settle.bind(null, pact, state), ServiceWorkerUtils_settle.bind(null, pact, 2));
            return;
          }
          pact.s = state;
          pact.v = value;
          var observer = pact.o;
          if (observer) {
            observer(pact);
          }
        }
      }
      var ServiceWorkerUtils_Pact = function() {
        function _Pact2() {
        }
        _Pact2.prototype.then = function(onFulfilled, onRejected) {
          var result = new _Pact2();
          var state = this.s;
          if (state) {
            var callback = state & 1 ? onFulfilled : onRejected;
            if (callback) {
              try {
                ServiceWorkerUtils_settle(result, 1, callback(this.v));
              } catch (e3) {
                ServiceWorkerUtils_settle(result, 2, e3);
              }
              return result;
            } else {
              return this;
            }
          }
          this.o = function(_this) {
            try {
              var value = _this.v;
              if (_this.s & 1) {
                ServiceWorkerUtils_settle(result, 1, onFulfilled ? onFulfilled(value) : value);
              } else if (onRejected) {
                ServiceWorkerUtils_settle(result, 1, onRejected(value));
              } else {
                ServiceWorkerUtils_settle(result, 2, value);
              }
            } catch (e3) {
              ServiceWorkerUtils_settle(result, 2, e3);
            }
          };
          return result;
        };
        return _Pact2;
      }();
      function _switch(discriminant, cases) {
        var dispatchIndex = -1;
        var awaitBody;
        outer: {
          for (var i4 = 0; i4 < cases.length; i4++) {
            var test = cases[i4][0];
            if (test) {
              var testValue = test();
              if (testValue && testValue.then) {
                break outer;
              }
              if (testValue === discriminant) {
                dispatchIndex = i4;
                break;
              }
            } else {
              dispatchIndex = i4;
            }
          }
          if (dispatchIndex !== -1) {
            do {
              var body = cases[dispatchIndex][1];
              while (!body) {
                dispatchIndex++;
                body = cases[dispatchIndex][1];
              }
              var result = body();
              if (result && result.then) {
                awaitBody = true;
                break outer;
              }
              var fallthroughCheck = cases[dispatchIndex][2];
              dispatchIndex++;
            } while (fallthroughCheck && !fallthroughCheck());
            return result;
          }
        }
        var pact = new ServiceWorkerUtils_Pact();
        var reject = ServiceWorkerUtils_settle.bind(null, pact, 2);
        (awaitBody ? result.then(_resumeAfterBody) : testValue.then(_resumeAfterTest)).then(void 0, reject);
        return pact;
        function _resumeAfterTest(value) {
          for (; ; ) {
            if (value === discriminant) {
              dispatchIndex = i4;
              break;
            }
            if (++i4 === cases.length) {
              if (dispatchIndex !== -1) {
                break;
              } else {
                ServiceWorkerUtils_settle(pact, 1, result2);
                return;
              }
            }
            test = cases[i4][0];
            if (test) {
              value = test();
              if (value && value.then) {
                value.then(_resumeAfterTest).then(void 0, reject);
                return;
              }
            } else {
              dispatchIndex = i4;
            }
          }
          do {
            var body2 = cases[dispatchIndex][1];
            while (!body2) {
              dispatchIndex++;
              body2 = cases[dispatchIndex][1];
            }
            var result2 = body2();
            if (result2 && result2.then) {
              result2.then(_resumeAfterBody).then(void 0, reject);
              return;
            }
            var fallthroughCheck2 = cases[dispatchIndex][2];
            dispatchIndex++;
          } while (fallthroughCheck2 && !fallthroughCheck2());
          ServiceWorkerUtils_settle(pact, 1, result2);
        }
        function _resumeAfterBody(result2) {
          for (; ; ) {
            var fallthroughCheck2 = cases[dispatchIndex][2];
            if (!fallthroughCheck2 || fallthroughCheck2()) {
              break;
            }
            dispatchIndex++;
            var body2 = cases[dispatchIndex][1];
            while (!body2) {
              dispatchIndex++;
              body2 = cases[dispatchIndex][1];
            }
            result2 = body2();
            if (result2 && result2.then) {
              result2.then(_resumeAfterBody).then(void 0, reject);
              return;
            }
          }
          ServiceWorkerUtils_settle(pact, 1, result2);
        }
      }
      function ServiceWorkerUtils_continue(value, then) {
        return value && value.then ? value.then(then) : then(value);
      }
      function ServiceWorkerUtils_catch(body, recover) {
        try {
          var result = body();
        } catch (e3) {
          return recover(e3);
        }
        if (result && result.then) {
          return result.then(void 0, recover);
        }
        return result;
      }
      function ServiceWorkerUtils_invoke(body, then) {
        var result = body();
        if (result && result.then) {
          return result.then(then);
        }
        return then(result);
      }
      function ServiceWorkerUtils_awaitIgnored(value, direct) {
        if (!direct) {
          return value && value.then ? value.then(ServiceWorkerUtils_empty) : Promise.resolve();
        }
      }
      var _iteratorSymbol = typeof Symbol !== "undefined" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
      function ServiceWorkerUtils_isSettledPact(thenable) {
        return thenable instanceof ServiceWorkerUtils_Pact && thenable.s & 1;
      }
      function _forTo(array, body, check) {
        var i4 = -1, pact, reject;
        function _cycle(result) {
          try {
            while (++i4 < array.length && (!check || !check())) {
              result = body(i4);
              if (result && result.then) {
                if (ServiceWorkerUtils_isSettledPact(result)) {
                  result = result.v;
                } else {
                  result.then(_cycle, reject || (reject = ServiceWorkerUtils_settle.bind(null, pact = new ServiceWorkerUtils_Pact(), 2)));
                  return;
                }
              }
            }
            if (pact) {
              ServiceWorkerUtils_settle(pact, 1, result);
            } else {
              pact = result;
            }
          } catch (e3) {
            ServiceWorkerUtils_settle(pact || (pact = new ServiceWorkerUtils_Pact()), 2, e3);
          }
        }
        _cycle();
        return pact;
      }
      function _forOf(target, body, check) {
        if (typeof target[_iteratorSymbol] === "function") {
          var _cycle = function _cycle2(result) {
            try {
              while (!(step = iterator.next()).done && (!check || !check())) {
                result = body(step.value);
                if (result && result.then) {
                  if (ServiceWorkerUtils_isSettledPact(result)) {
                    result = result.v;
                  } else {
                    result.then(_cycle2, reject || (reject = ServiceWorkerUtils_settle.bind(null, pact = new ServiceWorkerUtils_Pact(), 2)));
                    return;
                  }
                }
              }
              if (pact) {
                ServiceWorkerUtils_settle(pact, 1, result);
              } else {
                pact = result;
              }
            } catch (e3) {
              ServiceWorkerUtils_settle(pact || (pact = new ServiceWorkerUtils_Pact()), 2, e3);
            }
          };
          var iterator = target[_iteratorSymbol](), step, pact, reject;
          _cycle();
          if (iterator["return"]) {
            var _fixup = function _fixup2(value) {
              try {
                if (!step.done) {
                  iterator["return"]();
                }
              } catch (e3) {
              }
              return value;
            };
            if (pact && pact.then) {
              return pact.then(_fixup, function(e3) {
                throw _fixup(e3);
              });
            }
            _fixup();
          }
          return pact;
        }
        if (!("length" in target)) {
          throw new TypeError("Object is not iterable");
        }
        var values = [];
        for (var i4 = 0; i4 < target.length; i4++) {
          values.push(target[i4]);
        }
        return _forTo(values, function(i5) {
          return body(values[i5]);
        }, check);
      }
      function ServiceWorkerUtils_continueIgnored(value) {
        if (value && value.then) {
          return value.then(ServiceWorkerUtils_empty);
        }
      }
      function ServiceWorkerUtils_typeof(o4) {
        "@babel/helpers - typeof";
        return ServiceWorkerUtils_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o5) {
          return typeof o5;
        } : function(o5) {
          return o5 && "function" == typeof Symbol && o5.constructor === Symbol && o5 !== Symbol.prototype ? "symbol" : typeof o5;
        }, ServiceWorkerUtils_typeof(o4);
      }
      function ServiceWorkerUtils_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function ServiceWorkerUtils_defineProperties(target, props) {
        for (var i4 = 0; i4 < props.length; i4++) {
          var descriptor = props[i4];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, ServiceWorkerUtils_toPropertyKey(descriptor.key), descriptor);
        }
      }
      function ServiceWorkerUtils_createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          ServiceWorkerUtils_defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          ServiceWorkerUtils_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function ServiceWorkerUtils_toPropertyKey(t4) {
        var i4 = ServiceWorkerUtils_toPrimitive(t4, "string");
        return "symbol" == ServiceWorkerUtils_typeof(i4) ? i4 : i4 + "";
      }
      function ServiceWorkerUtils_toPrimitive(t4, r3) {
        if ("object" != ServiceWorkerUtils_typeof(t4) || !t4)
          return t4;
        var e3 = t4[Symbol.toPrimitive];
        if (void 0 !== e3) {
          var i4 = e3.call(t4, r3 || "default");
          if ("object" != ServiceWorkerUtils_typeof(i4))
            return i4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r3 ? String : Number)(t4);
      }
      var ServiceWorkerUtils = function() {
        function ServiceWorkerUtils2() {
          ServiceWorkerUtils_classCallCheck(this, ServiceWorkerUtils2);
        }
        return ServiceWorkerUtils_createClass(ServiceWorkerUtils2, [{
          key: "canUseServiceWorkers",
          value: function canUseServiceWorkers() {
            return "serviceWorker" in navigator;
          }
        }, {
          key: "sendMessage",
          value: function sendMessage(message, config, serviceWorkerScriptFieldName) {
            try {
              var _this = this;
              return ServiceWorkerUtils_await(_this.ensureActiveServiceWorkerExists(message, config, serviceWorkerScriptFieldName), function(result) {
                result.serviceWorker.postMessage(message);
                return result.config;
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }, {
          key: "ensureActiveServiceWorkerExists",
          value: function ensureActiveServiceWorkerExists(initMessage, config, serviceWorkerScriptFieldName) {
            try {
              var _exit = false, _interrupt = false;
              var _this2 = this;
              return ServiceWorkerUtils_await(ServiceWorkerUtils_continue(_switch(config.type, [[function() {
                return "Uninitialized";
              }, function() {
                {
                  return ServiceWorkerUtils_await(_this2.unregisterOnHardReload(), function() {
                    _interrupt = true;
                  });
                }
              }], [function() {
                return "Initialized";
              }, function() {
                {
                  return ServiceWorkerUtils_await(_this2.getActiveServiceWorker(config.serviceWorkerScope), function(serviceWorker) {
                    if (serviceWorker !== void 0) {
                      var _serviceWorker$config = {
                        serviceWorker,
                        config
                      };
                      _exit = true;
                      return _serviceWorker$config;
                    }
                    _interrupt = true;
                  });
                }
              }], [void 0, function() {
                assertUnreachable(config);
              }, ServiceWorkerUtils_empty]]), function(_result) {
                return _exit ? _result : ServiceWorkerUtils_await(_this2.registerServiceWorker(config.serviceWorkerScript, initMessage, serviceWorkerScriptFieldName));
              }));
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
          /**
           * Idempotent.
           *
           * Only returns once the service worker has been activated.
           *
           * We don't need to unregister it: we just need to clear the config when auth ends.
           */
        }, {
          key: "registerServiceWorker",
          value: function registerServiceWorker(serviceWorkerScript, initMessage, serviceWorkerScriptFieldName) {
            try {
              var _this3 = this;
              if (!serviceWorkerScript.startsWith("/")) {
                throw new Error("The '".concat(serviceWorkerScriptFieldName, "' field must start with a '/' and reference a script at the root of your website."));
              }
              var forwardSlashCount = serviceWorkerScript.split("/").length - 1;
              if (forwardSlashCount > 1) {
                ConsoleUtils.warn("The '".concat(serviceWorkerScriptFieldName, "' field should be a root script (e.g. '/script.js'). The Bytescale SDK can only authorize requests originating from webpages that are at the same level as the script or below."));
              }
              return ServiceWorkerUtils_await(ServiceWorkerUtils_catch(function() {
                return ServiceWorkerUtils_await(navigator.serviceWorker.register(serviceWorkerScript), function(registration) {
                  return ServiceWorkerUtils_await(_this3.waitForActiveServiceWorker(registration, initMessage), function(_this3$waitForActiveS) {
                    return {
                      serviceWorker: _this3$waitForActiveS,
                      config: {
                        serviceWorkerScript,
                        serviceWorkerScope: registration.scope,
                        type: "Initialized"
                      }
                    };
                  });
                });
              }, function(e3) {
                throw new Error("Failed to install Bytescale Service Worker (SW). ".concat(e3.name, ": ").concat(e3.message));
              }));
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }, {
          key: "waitForActiveServiceWorker",
          value: function waitForActiveServiceWorker(registration, initMessage) {
            try {
              var _exit2 = false;
              var installing = registration.installing;
              return ServiceWorkerUtils_await(ServiceWorkerUtils_invoke(function() {
                if (installing !== null) {
                  var waitForActive = new Promise(function(resolve) {
                    var stateChangeHandler = function stateChangeHandler2(e3) {
                      var sw = e3.target;
                      if (sw.state === "activated") {
                        installing.removeEventListener("statechange", stateChangeHandler2);
                        resolve(sw);
                      }
                    };
                    installing.addEventListener("statechange", stateChangeHandler);
                  });
                  installing.postMessage(initMessage);
                  return ServiceWorkerUtils_await(waitForActive, function(_await$waitForActive) {
                    _exit2 = true;
                    return _await$waitForActive;
                  });
                }
              }, function(_result2) {
                if (_exit2)
                  return _result2;
                if (registration.active !== null) {
                  return registration.active;
                }
                throw new Error("Service worker was neither 'installing' or 'active'.");
              }));
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }, {
          key: "getActiveServiceWorker",
          value: function getActiveServiceWorker(serviceWorkerScope) {
            try {
              var _this4 = this;
              var _a, _b;
              return ServiceWorkerUtils_await(_this4.getActiveRegistrations(), function(_this4$getActiveRegis) {
                var registrations = _this4$getActiveRegis.filter(function(x4) {
                  return x4.scope === serviceWorkerScope;
                });
                return (_b = (_a = registrations[0]) === null || _a === void 0 ? void 0 : _a.active) !== null && _b !== void 0 ? _b : void 0;
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
          /**
           * Existing active Service Workers will not receive 'fetch' events in sessions that start with a hard reload, so
           * we must unregister them and register a new one. (See: https://github.com/mswjs/msw/issues/98#issuecomment-612118211)
           */
        }, {
          key: "unregisterOnHardReload",
          value: function unregisterOnHardReload() {
            try {
              var _this5 = this;
              var isHardReload = navigator.serviceWorker.controller === null;
              if (!isHardReload) {
                return ServiceWorkerUtils_await();
              }
              return ServiceWorkerUtils_await(_this5.getActiveRegistrations(), function(registrations) {
                return ServiceWorkerUtils_continueIgnored(_forOf(registrations, function(registration) {
                  return ServiceWorkerUtils_awaitIgnored(registration.unregister());
                }));
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }, {
          key: "getActiveRegistrations",
          value: function getActiveRegistrations() {
            try {
              return ServiceWorkerUtils_await(navigator.serviceWorker.getRegistrations(), function(registrations) {
                return registrations.filter(function(registration) {
                  return registration.active !== null;
                });
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }]);
      }();
      ;
      function Scheduler_typeof(o4) {
        "@babel/helpers - typeof";
        return Scheduler_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o5) {
          return typeof o5;
        } : function(o5) {
          return o5 && "function" == typeof Symbol && o5.constructor === Symbol && o5 !== Symbol.prototype ? "symbol" : typeof o5;
        }, Scheduler_typeof(o4);
      }
      function Scheduler_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function Scheduler_defineProperties(target, props) {
        for (var i4 = 0; i4 < props.length; i4++) {
          var descriptor = props[i4];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, Scheduler_toPropertyKey(descriptor.key), descriptor);
        }
      }
      function Scheduler_createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          Scheduler_defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          Scheduler_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function Scheduler_toPropertyKey(t4) {
        var i4 = Scheduler_toPrimitive(t4, "string");
        return "symbol" == Scheduler_typeof(i4) ? i4 : i4 + "";
      }
      function Scheduler_toPrimitive(t4, r3) {
        if ("object" != Scheduler_typeof(t4) || !t4)
          return t4;
        var e3 = t4[Symbol.toPrimitive];
        if (void 0 !== e3) {
          var i4 = e3.call(t4, r3 || "default");
          if ("object" != Scheduler_typeof(i4))
            return i4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r3 ? String : Number)(t4);
      }
      var Scheduler = function() {
        function Scheduler2() {
          Scheduler_classCallCheck(this, Scheduler2);
          this.callbacks = {};
          this.nextId = 0;
          this.intervalId = void 0;
        }
        return Scheduler_createClass(Scheduler2, [{
          key: "schedule",
          value: function schedule(epoch, callback) {
            var handle = this.nextId++;
            this.callbacks[handle] = {
              epoch,
              callback
            };
            this.startInterval();
            return handle;
          }
        }, {
          key: "unschedule",
          value: function unschedule(handle) {
            delete this.callbacks[handle];
            if (Object.keys(this.callbacks).length === 0) {
              this.stopInterval();
            }
          }
        }, {
          key: "startInterval",
          value: function startInterval() {
            var _this = this;
            if (this.intervalId === void 0) {
              this.intervalId = setInterval(function() {
                return _this.checkCallbacks();
              }, 1e3);
            }
          }
        }, {
          key: "stopInterval",
          value: function stopInterval() {
            if (this.intervalId !== void 0) {
              clearInterval(this.intervalId);
              this.intervalId = void 0;
            }
          }
        }, {
          key: "checkCallbacks",
          value: function checkCallbacks() {
            var now = Date.now();
            for (var handleStr in this.callbacks) {
              var handle = parseInt(handleStr);
              if (this.callbacks[handle].epoch <= now) {
                try {
                  this.callbacks[handle].callback();
                } catch (e3) {
                  ConsoleUtils.error("Unhandled error from scheduled callback: ".concat(e3));
                }
                this.unschedule(handle);
              }
            }
          }
        }]);
      }();
      ;
      function AuthManagerBrowser_empty() {
      }
      function AuthManagerBrowser_awaitIgnored(value, direct) {
        if (!direct) {
          return value && value.then ? value.then(AuthManagerBrowser_empty) : Promise.resolve();
        }
      }
      function AuthManagerBrowser_await(value, then, direct) {
        if (direct) {
          return then ? then(value) : value;
        }
        if (!value || !value.then) {
          value = Promise.resolve(value);
        }
        return then ? value.then(then) : value;
      }
      function AuthManagerBrowser_async(f4) {
        return function() {
          for (var args = [], i4 = 0; i4 < arguments.length; i4++) {
            args[i4] = arguments[i4];
          }
          try {
            return Promise.resolve(f4.apply(this, args));
          } catch (e3) {
            return Promise.reject(e3);
          }
        };
      }
      function AuthManagerBrowser_invokeIgnored(body) {
        var result = body();
        if (result && result.then) {
          return result.then(AuthManagerBrowser_empty);
        }
      }
      function AuthManagerBrowser_invoke(body, then) {
        var result = body();
        if (result && result.then) {
          return result.then(then);
        }
        return then(result);
      }
      function AuthManagerBrowser_catch(body, recover) {
        try {
          var result = body();
        } catch (e3) {
          return recover(e3);
        }
        if (result && result.then) {
          return result.then(void 0, recover);
        }
        return result;
      }
      function AuthManagerBrowser_rethrow(thrown, value) {
        if (thrown)
          throw value;
        return value;
      }
      function AuthManagerBrowser_finallyRethrows(body, finalizer) {
        try {
          var result = body();
        } catch (e3) {
          return finalizer(true, e3);
        }
        if (result && result.then) {
          return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
        }
        return finalizer(false, result);
      }
      function AuthManagerBrowser_continueIgnored(value) {
        if (value && value.then) {
          return value.then(AuthManagerBrowser_empty);
        }
      }
      function AuthManagerBrowser_typeof(o4) {
        "@babel/helpers - typeof";
        return AuthManagerBrowser_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o5) {
          return typeof o5;
        } : function(o5) {
          return o5 && "function" == typeof Symbol && o5.constructor === Symbol && o5 !== Symbol.prototype ? "symbol" : typeof o5;
        }, AuthManagerBrowser_typeof(o4);
      }
      function AuthManagerBrowser_defineProperty(obj, key, value) {
        key = AuthManagerBrowser_toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function AuthManagerBrowser_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function AuthManagerBrowser_defineProperties(target, props) {
        for (var i4 = 0; i4 < props.length; i4++) {
          var descriptor = props[i4];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, AuthManagerBrowser_toPropertyKey(descriptor.key), descriptor);
        }
      }
      function AuthManagerBrowser_createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          AuthManagerBrowser_defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          AuthManagerBrowser_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function AuthManagerBrowser_toPropertyKey(t4) {
        var i4 = AuthManagerBrowser_toPrimitive(t4, "string");
        return "symbol" == AuthManagerBrowser_typeof(i4) ? i4 : i4 + "";
      }
      function AuthManagerBrowser_toPrimitive(t4, r3) {
        if ("object" != AuthManagerBrowser_typeof(t4) || !t4)
          return t4;
        var e3 = t4[Symbol.toPrimitive];
        if (void 0 !== e3) {
          var i4 = e3.call(t4, r3 || "default");
          if ("object" != AuthManagerBrowser_typeof(i4))
            return i4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r3 ? String : Number)(t4);
      }
      var AuthManagerImpl = function() {
        function AuthManagerImpl2(serviceWorkerUtils) {
          AuthManagerBrowser_classCallCheck(this, AuthManagerImpl2);
          this.serviceWorkerUtils = serviceWorkerUtils;
          this.serviceWorkerScriptFieldName = "serviceWorkerScript";
          this.contentType = "content-type";
          this.contentTypeJson = "application/json";
          this.contentTypeText = "text/plain";
          this.minJwtTtlSeconds = 10;
          this.retryAuthAfterErrorSeconds = 5;
          this.refreshBeforeExpirySeconds = 20;
          this.scheduler = new Scheduler();
          this.authSessionMutex = AuthSessionState.getMutex();
        }
        return AuthManagerBrowser_createClass(AuthManagerImpl2, [{
          key: "isAuthSessionActive",
          value: function isAuthSessionActive() {
            return AuthSessionState.getSession() !== void 0;
          }
        }, {
          key: "isAuthSessionReady",
          value: function isAuthSessionReady() {
            var _a;
            return ((_a = AuthSessionState.getSession()) === null || _a === void 0 ? void 0 : _a.accessToken) !== void 0;
          }
        }, {
          key: "beginAuthSession",
          value: function beginAuthSession(params) {
            try {
              var _this = this;
              return AuthManagerBrowser_await(_this.authSessionMutex.safe(AuthManagerBrowser_async(function() {
                if (_this.isAuthSessionActive()) {
                  throw new Error("Auth session already active. Please call 'await endAuthSession()' and then call 'await beginAuthSession(...)' to start a new auth session.");
                }
                var newSession = {
                  accessToken: void 0,
                  accessTokenRefreshHandle: void 0,
                  params,
                  isActive: true,
                  authServiceWorker: params.serviceWorkerScript !== void 0 && _this.serviceWorkerUtils.canUseServiceWorkers() ? {
                    serviceWorkerScript: params.serviceWorkerScript,
                    type: "Uninitialized"
                  } : void 0
                };
                AuthSessionState.setSession(newSession);
                return newSession;
              })), function(session) {
                return AuthManagerBrowser_awaitIgnored(_this.refreshAccessToken(session));
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }, {
          key: "endAuthSession",
          value: function endAuthSession() {
            try {
              var _this2 = this;
              return AuthManagerBrowser_await(AuthManagerBrowser_awaitIgnored(_this2.authSessionMutex.safe(AuthManagerBrowser_async(function() {
                var session = AuthSessionState.getSession();
                if (session === void 0) {
                  return;
                }
                AuthSessionState.setSession(void 0);
                session.isActive = false;
                if (session.accessTokenRefreshHandle !== void 0) {
                  _this2.scheduler.unschedule(session.accessTokenRefreshHandle);
                }
                return AuthManagerBrowser_await(_this2.deleteAccessToken(session.params), function() {
                  return AuthManagerBrowser_invokeIgnored(function() {
                    if (session.authServiceWorker !== void 0) {
                      return AuthManagerBrowser_awaitIgnored(_this2.serviceWorkerUtils.sendMessage({
                        type: "SET_BYTESCALE_AUTH_CONFIG",
                        config: []
                      }, session.authServiceWorker, _this2.serviceWorkerScriptFieldName));
                    }
                  });
                });
              }))));
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }, {
          key: "refreshAccessToken",
          value: function refreshAccessToken(session) {
            try {
              var _this3 = this;
              return AuthManagerBrowser_await(AuthManagerBrowser_awaitIgnored(_this3.authSessionMutex.safe(AuthManagerBrowser_async(function() {
                if (!session.isActive) {
                  return;
                }
                var secondsFromNow = function secondsFromNow2(seconds) {
                  return Date.now() + seconds * 1e3;
                };
                var expires = secondsFromNow(_this3.retryAuthAfterErrorSeconds);
                return AuthManagerBrowser_continueIgnored(AuthManagerBrowser_finallyRethrows(function() {
                  return AuthManagerBrowser_catch(function() {
                    var _getAccessToken = _this3.getAccessToken, _session$params = session.params;
                    return AuthManagerBrowser_await(session.params.authHeaders(), function(_session$params$authH) {
                      return AuthManagerBrowser_await(_getAccessToken.call(_this3, _session$params, _session$params$authH), function(jwt) {
                        var setCookie = session.authServiceWorker === void 0;
                        return AuthManagerBrowser_await(_this3.setAccessToken(session.params, jwt, setCookie), function(setTokenResult) {
                          return AuthManagerBrowser_invoke(function() {
                            if (session.authServiceWorker !== void 0) {
                              return AuthManagerBrowser_await(_this3.serviceWorkerUtils.sendMessage({
                                type: "SET_BYTESCALE_AUTH_CONFIG",
                                config: [{
                                  headers: [{
                                    key: "Authorization",
                                    value: "Bearer ".concat(jwt)
                                  }],
                                  expires: secondsFromNow(setTokenResult.ttlSeconds),
                                  urlPrefix: "".concat(_this3.getCdnUrl(session.params), "/").concat(session.params.accountId, "/")
                                }]
                              }, session.authServiceWorker, _this3.serviceWorkerScriptFieldName), function() {
                                return AuthManagerBrowser_awaitIgnored(new Promise(function(resolve) {
                                  return setTimeout(resolve, 100);
                                }));
                              });
                            }
                          }, function() {
                            var desiredTtl = setTokenResult.ttlSeconds - _this3.refreshBeforeExpirySeconds;
                            var actualTtl = Math.max(desiredTtl, _this3.minJwtTtlSeconds);
                            if (desiredTtl !== actualTtl) {
                              ConsoleUtils.warn("JWT expiration is too short: waiting for ".concat(actualTtl, " seconds before refreshing."));
                            }
                            expires = secondsFromNow(actualTtl);
                            session.accessToken = setTokenResult.accessToken;
                          });
                        });
                      });
                    });
                  }, function(e3) {
                    ConsoleUtils.warn("Unable to refresh JWT access token: ".concat(e3));
                  });
                }, function(_wasThrown, _result) {
                  session.accessTokenRefreshHandle = _this3.scheduler.schedule(expires, function() {
                    _this3.refreshAccessToken(session).then(
                      function() {
                      },
                      // Should not occur, as this method shouldn't throw errors.
                      function(e3) {
                        return ConsoleUtils.error("Unexpected error when refreshing JWT access token: ".concat(e3));
                      }
                    );
                  });
                  return AuthManagerBrowser_rethrow(_wasThrown, _result);
                }));
              }))));
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }, {
          key: "getAccessTokenUrl",
          value: function getAccessTokenUrl(params, setCookie) {
            return "".concat(this.getCdnUrl(params), "/api/v1/access_tokens/").concat(params.accountId, "?set-cookie=").concat(setCookie ? "true" : "false");
          }
        }, {
          key: "getCdnUrl",
          value: function getCdnUrl(params) {
            var _a;
            return BytescaleApiClientConfigUtils.getCdnUrl((_a = params.options) !== null && _a !== void 0 ? _a : {});
          }
        }, {
          key: "deleteAccessToken",
          value: function deleteAccessToken(params) {
            try {
              var _this4 = this;
              var _a;
              return AuthManagerBrowser_await(AuthManagerBrowser_awaitIgnored(BaseAPI.fetch(_this4.getAccessTokenUrl(params, true), {
                method: "DELETE",
                credentials: "include",
                headers: {}
              }, {
                isBytescaleApi: true,
                fetchApi: (_a = params.options) === null || _a === void 0 ? void 0 : _a.fetchApi
              })));
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }, {
          key: "setAccessToken",
          value: function setAccessToken(params, jwt, setCookie) {
            try {
              var _this5 = this;
              var _a;
              var request = {
                accessToken: jwt
              };
              return AuthManagerBrowser_await(BaseAPI.fetch(_this5.getAccessTokenUrl(params, setCookie), {
                method: "PUT",
                credentials: "include",
                headers: AuthManagerBrowser_defineProperty({}, _this5.contentType, _this5.contentTypeJson),
                body: JSON.stringify(request)
              }, {
                isBytescaleApi: true,
                fetchApi: (_a = params.options) === null || _a === void 0 ? void 0 : _a.fetchApi
              }), function(response) {
                return AuthManagerBrowser_await(response.json());
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }, {
          key: "getAccessToken",
          value: function getAccessToken(params, headers) {
            try {
              var _this6 = this;
              var _a, _b;
              var endpointName = "Your auth API endpoint";
              var requiredContentType = _this6.contentTypeText;
              return AuthManagerBrowser_await(BaseAPI.fetch(params.authUrl, {
                method: "GET",
                headers
              }, {
                isBytescaleApi: false,
                fetchApi: (_a = params.options) === null || _a === void 0 ? void 0 : _a.fetchApi
              }), function(result) {
                var actualContentType = (_b = result.headers.get(_this6.contentType)) !== null && _b !== void 0 ? _b : "";
                if (actualContentType.split(";")[0] !== requiredContentType) {
                  throw new Error("".concat(endpointName, ' returned "').concat(actualContentType, '" for the ').concat(_this6.contentType, ' response header, but the Bytescale SDK requires "').concat(requiredContentType, '".'));
                }
                return AuthManagerBrowser_await(result.text(), function(jwt) {
                  if (jwt.length === 0) {
                    throw new Error("".concat(endpointName, " returned an empty string. Please return a valid JWT instead."));
                  }
                  if (jwt.trim().length !== jwt.length) {
                    throw new Error("".concat(endpointName, " returned whitespace around the JWT, please remove it."));
                  }
                  return jwt;
                });
              });
            } catch (e3) {
              return Promise.reject(e3);
            }
          }
        }]);
      }();
      var AuthManager = new AuthManagerImpl(new ServiceWorkerUtils());
      ;
      ;
      module.exports = __lib_exports__;
    })();
  }
});

// node_modules/@bytescale/upload-widget/dist/main.js
var require_main2 = __commonJS({
  "node_modules/@bytescale/upload-widget/dist/main.js"(exports, module) {
    (function() {
      "use strict";
      var __webpack_modules__ = {
        /***/
        "./node_modules/@bytescale/style-loader/dist/runtime/injectStylesIntoStyleTag.js": (
          /***/
          function(module2) {
            var stylesInDOM = [];
            function getIndexByIdentifier(identifier) {
              var result = -1;
              for (var i4 = 0; i4 < stylesInDOM.length; i4++) {
                if (stylesInDOM[i4].identifier === identifier) {
                  result = i4;
                  break;
                }
              }
              return result;
            }
            function modulesToDom(list, options) {
              var idCountMap = {};
              var identifiers = [];
              for (var i4 = 0; i4 < list.length; i4++) {
                var item = list[i4];
                var id = options.base ? item[0] + options.base : item[0];
                var count = idCountMap[id] || 0;
                var identifier = "".concat(id, " ").concat(count);
                idCountMap[id] = count + 1;
                var indexByIdentifier = getIndexByIdentifier(identifier);
                var obj = {
                  css: item[1],
                  media: item[2],
                  sourceMap: item[3],
                  supports: item[4],
                  layer: item[5]
                };
                if (indexByIdentifier !== -1) {
                  stylesInDOM[indexByIdentifier].references++;
                  stylesInDOM[indexByIdentifier].updater(obj);
                } else {
                  var updater = addElementStyle(obj, options);
                  options.byIndex = i4;
                  stylesInDOM.splice(i4, 0, {
                    identifier,
                    updater,
                    references: 1
                  });
                }
                identifiers.push(identifier);
              }
              return identifiers;
            }
            function addElementStyle(obj, options) {
              var api = options.domAPI(options);
              api.update(obj);
              var updater = function updater2(newObj) {
                if (newObj) {
                  if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
                    return;
                  }
                  api.update(obj = newObj);
                } else {
                  api.remove();
                }
              };
              return updater;
            }
            module2.exports = function(list, options) {
              options = options || {};
              list = list || [];
              var lastIdentifiers = modulesToDom(list, options);
              return function update(newList) {
                newList = newList || [];
                for (var i4 = 0; i4 < lastIdentifiers.length; i4++) {
                  var identifier = lastIdentifiers[i4];
                  var index = getIndexByIdentifier(identifier);
                  stylesInDOM[index].references--;
                }
                var newLastIdentifiers = modulesToDom(newList, options);
                for (var _i = 0; _i < lastIdentifiers.length; _i++) {
                  var _identifier = lastIdentifiers[_i];
                  var _index = getIndexByIdentifier(_identifier);
                  if (stylesInDOM[_index].references === 0) {
                    stylesInDOM[_index].updater();
                    stylesInDOM.splice(_index, 1);
                  }
                }
                lastIdentifiers = newLastIdentifiers;
              };
            };
          }
        ),
        /***/
        "./node_modules/@bytescale/style-loader/dist/runtime/insertStyleElement.js": (
          /***/
          function(module2) {
            function insertStyleElement(options) {
              if (typeof document === "undefined") {
                return void 0;
              }
              var element = document.createElement("style");
              options.setAttributes(element, options.attributes);
              options.insert(element, options.options);
              return element;
            }
            module2.exports = insertStyleElement;
          }
        ),
        /***/
        "./node_modules/@bytescale/style-loader/dist/runtime/setAttributesWithoutAttributes.js": (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            function setAttributesWithoutAttributes(styleElement) {
              var nonce = true ? __webpack_require__2.nc : 0;
              if (nonce) {
                styleElement.setAttribute("nonce", nonce);
              }
            }
            module2.exports = setAttributesWithoutAttributes;
          }
        ),
        /***/
        "./node_modules/@bytescale/style-loader/dist/runtime/styleDomAPI.js": (
          /***/
          function(module2) {
            function apply(styleElement, options, obj) {
              var css = "";
              if (obj.supports) {
                css += "@supports (".concat(obj.supports, ") {");
              }
              if (obj.media) {
                css += "@media ".concat(obj.media, " {");
              }
              var needLayer = typeof obj.layer !== "undefined";
              if (needLayer) {
                css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
              }
              css += obj.css;
              if (needLayer) {
                css += "}";
              }
              if (obj.media) {
                css += "}";
              }
              if (obj.supports) {
                css += "}";
              }
              options.styleTagTransform(css, styleElement, options.options);
            }
            function removeStyleElement(styleElement) {
              if (styleElement.parentNode === null) {
                return false;
              }
              styleElement.parentNode.removeChild(styleElement);
            }
            function domAPI(options) {
              var styleElement = options.insertStyleElement(options);
              return {
                update: function update(obj) {
                  apply(styleElement, options, obj);
                },
                remove: function remove() {
                  removeStyleElement(styleElement);
                }
              };
            }
            module2.exports = domAPI;
          }
        ),
        /***/
        "./node_modules/@bytescale/style-loader/dist/runtime/styleTagTransform.js": (
          /***/
          function(module2) {
            function styleTagTransform(css, styleElement) {
              if (styleElement === void 0) {
                return;
              }
              if (styleElement.styleSheet) {
                styleElement.styleSheet.cssText = css;
              } else {
                while (styleElement.firstChild) {
                  styleElement.removeChild(styleElement.firstChild);
                }
                styleElement.appendChild(document.createTextNode(css));
              }
            }
            module2.exports = styleTagTransform;
          }
        ),
        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/Modal.scss": (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2("./node_modules/css-loader/dist/runtime/api.js");
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i4) {
              return i4[1];
            });
            ___CSS_LOADER_EXPORT___.push([module2.id, '.upload-widget__body{overflow:hidden}.upload-widget--with-modal{-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;display:-webkit-flex;display:-moz-box;display:flex;position:fixed;top:0;bottom:0;left:0;right:0;z-index:99999}.upload-widget__modal{background:var(--shade-900);border-radius:.5em;z-index:100000;position:relative;overflow:auto;top:-5%;height:60%;width:75%;max-width:65.625em;max-height:41.25em}@media (max-height: 700px){.upload-widget__modal{top:-1%;height:80%}}.upload-widget__modal__close{position:absolute;right:0;top:0;z-index:2}.upload-widget__modal__close a{-moz-transition:0.1s color linear;transition:0.1s color linear;color:var(--shade-500);padding:1.125em 1.0625em .8125em .875em;display:inline-block}.upload-widget--full-screen .upload-widget__modal{top:0;height:100%;width:100%;max-width:none;max-height:none;border-radius:0}.upload-widget__backdrop{content:" ";background:rgba(0,0,0,0.5);position:fixed;left:0;right:0;top:0;bottom:0;z-index:99999}.upload-widget__modal,.upload-widget__backdrop{opacity:0;-moz-transition:0.15s opacity linear;transition:0.15s opacity linear}.upload-widget__modal.show,.upload-widget__backdrop.show{opacity:1}\n', ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploadWidget/UploadWidgetContainer.scss": (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2("./node_modules/css-loader/dist/runtime/api.js");
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i4) {
              return i4[1];
            });
            ___CSS_LOADER_EXPORT___.push([module2.id, ".upload-widget{--btn-text-color: var(--shade-200);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-moz-box-sizing:border-box;box-sizing:border-box;color:var(--shade-100);font-family:var(--base-font-family);font-size:var(--base-font-size);line-height:1;text-align:left;position:static}.upload-widget__root{position:absolute;left:0;right:0;top:0;bottom:0}.upload-widget a,.upload-widget p,.upload-widget button{font-size:inherit;margin:0}.upload-widget a{border-bottom:none;padding:0}.upload-widget svg{margin-bottom:0}.upload-widget__controls{text-align:center;padding:.9375em}.upload-widget__controls--space button:not(:last-child){margin-right:0.5em}.upload-widget a{color:var(--primary-color)}.upload-widget a,.upload-widget a:hover,.upload-widget a:active,.upload-widget a:focus{-webkit-text-decoration:underline;text-decoration:underline}.upload-widget a:hover:not(:disabled):not(.disabled){color:var(--primary-active-color)}.upload-widget .btn{-moz-transition:0.1s border-color linear, 0.1s background-color linear;transition:0.1s border-color linear, 0.1s background-color linear;display:inline-block;font-weight:400;color:var(--btn-text-color);text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:rgba(0,0,0,0);border:.0625em solid rgba(0,0,0,0);padding:0 1em;line-height:3;border-radius:0.3125em}.upload-widget .btn,.upload-widget .btn:hover,.upload-widget .btn:active,.upload-widget .btn:focus{-webkit-text-decoration:none;text-decoration:none}.upload-widget .btn:not(:disabled):not(.disabled){cursor:pointer}.upload-widget .btn:hover:not(:disabled):not(.disabled){color:var(--shade-300)}.upload-widget .btn--primary{color:var(--shade-900);background-color:var(--primary-color);border-color:var(--primary-color)}.upload-widget .btn--primary:hover:not(:disabled):not(.disabled){background-color:var(--primary-active-color);border-color:var(--primary-active-color);color:var(--shade-900)}.upload-widget .btn--primary-outline{color:var(--primary-color);border-color:var(--primary-color)}.upload-widget .btn.disabled{opacity:0.5;cursor:default}.upload-widget .btn--file{position:relative;overflow:hidden;margin-bottom:0}.upload-widget .btn--file__input{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;z-index:-1}.upload-widget .btn--upload{font-size:1.11em;padding:0.2em 1.6em;margin-bottom:1.5em}.upload-widget .text-secondary{color:var(--shade-400)}.upload-widget .vcenter{display:-webkit-flex;display:-moz-box;display:flex;-webkit-align-items:center;-moz-box-align:center;align-items:center}.upload-widget .hcenter{display:-webkit-flex;display:-moz-box;display:flex;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center}.upload-widget .nudge-up-1{position:relative;top:-1px}.upload-widget .ml-0{margin-left:0}.upload-widget .ml-1{margin-left:.3125em}.upload-widget .ml-2{margin-left:.4375em}.upload-widget .ml-3{margin-left:.5em}.upload-widget .ml-4{margin-left:.625em}.upload-widget .mr-0{margin-right:0}.upload-widget .mr-1{margin-right:.3125em}.upload-widget .mr-2{margin-right:.4375em}.upload-widget .mr-3{margin-right:.5em}.upload-widget .mr-4{margin-right:.625em}.upload-widget .mb-0{margin-bottom:0}.upload-widget .mb-1{margin-bottom:.3125em}.upload-widget .mb-2{margin-bottom:.4375em}.upload-widget .mb-3{margin-bottom:.5em}.upload-widget .mb-4{margin-bottom:.625em}.upload-widget .mt-0{margin-top:0}.upload-widget .mt-1{margin-top:.3125em}.upload-widget .mt-2{margin-top:.4375em}.upload-widget .mt-3{margin-top:.5em}.upload-widget .mt-4{margin-top:.625em}.upload-widget .mt-5{margin-top:1.25em}\n", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploadWidget/components/editors/ImageCropper.scss": (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2("./node_modules/css-loader/dist/runtime/api.js");
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i4) {
              return i4[1];
            });
            ___CSS_LOADER_EXPORT___.push([module2.id, '.upload-widget__image-cropper__overlay{position:absolute;background:rgba(255,255,255,0.5)}.upload-widget__image-cropper__clip{overflow:hidden}.upload-widget__image-cropper__clip img{max-width:none;max-width:initial}.upload-widget__image-cropper__clip:before{content:" ";display:block;background:rgba(255,255,255,0.15);position:absolute;left:-2px;right:-2px;top:-2px;bottom:-2px}.upload-widget__image-cropper__clip--circular,.upload-widget__image-cropper__clip--circular:before{border-radius:100%}\n', ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploadWidget/components/editors/ImageEditorLayout.scss": (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2("./node_modules/css-loader/dist/runtime/api.js");
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i4) {
              return i4[1];
            });
            ___CSS_LOADER_EXPORT___.push([module2.id, ".upload-widget__image-editor{display:-webkit-flex;display:-moz-box;display:flex;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;-webkit-align-content:space-between;align-content:space-between;height:100%;width:100%}.upload-widget__image-editor img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.upload-widget__image-editor__header{padding:0.825em 0.8em 0.75em 0.8em}.upload-widget__image-editor__header--empty-non-modal{min-height:.9375em}.upload-widget__image-editor__image{width:100%;-webkit-flex-grow:1;-moz-box-flex:1;flex-grow:1;position:relative}.upload-widget__image-editor__image-padding{position:absolute;top:0;bottom:0;left:.9375em;right:.9375em;display:-webkit-flex;display:-moz-box;display:flex;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center}.upload-widget__image-editor__image-inner{max-width:100%;max-height:100%}.upload-widget__modal .upload-widget__image-editor__header{padding-top:0;padding-bottom:1.3em;margin-top:-1em}\n", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploadWidget/components/editors/Spinner.scss": (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2("./node_modules/css-loader/dist/runtime/api.js");
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i4) {
              return i4[1];
            });
            ___CSS_LOADER_EXPORT___.push([module2.id, "@-webkit-keyframes spinner{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spinner{to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);transform:rotate(360deg)}}.spinner{display:block !important;border:0.275em solid var(--shade-700);border-right-color:transparent;border-radius:50%;-webkit-animation:spinner 0.75s linear infinite;-moz-animation:spinner 0.75s linear infinite;animation:spinner 0.75s linear infinite}.spinner__container{display:-webkit-flex;display:-moz-box;display:flex;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;height:100%;width:100%}\n", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploadWidget/components/editors/shapes/ResizableSquare.scss": (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2("./node_modules/css-loader/dist/runtime/api.js");
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i4) {
              return i4[1];
            });
            ___CSS_LOADER_EXPORT___.push([module2.id, ".upload-widget__resizable-square{position:absolute;cursor:move}.upload-widget__resizable-square__nw,.upload-widget__resizable-square__ne,.upload-widget__resizable-square__sw,.upload-widget__resizable-square__se{width:1em;height:1em;opacity:0.75;background-color:var(--shade-900);border:.0625em solid var(--primary-color);border-radius:100%;position:absolute;display:block !important}.upload-widget__resizable-square__nw{top:-.5em;left:-.5em;cursor:nw-resize}.upload-widget__resizable-square__ne{top:-.5em;right:-.5em;cursor:ne-resize}.upload-widget__resizable-square__sw{bottom:-.5em;left:-.5em;cursor:sw-resize}.upload-widget__resizable-square__se{bottom:-.5em;right:-.5em;cursor:se-resize}\n", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploadWidget/components/fileIcons/ProgressIcon.scss": (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2("./node_modules/css-loader/dist/runtime/api.js");
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i4) {
              return i4[1];
            });
            ___CSS_LOADER_EXPORT___.push([module2.id, ".progress-icon{display:block}.progress-icon__container{display:inline-block;position:relative}.progress-icon__circle{-moz-transition:.35s stroke-dashoffset cubic-bezier(0.33, 1, 0.68, 1), .6s stroke-width cubic-bezier(0.22, 1, 0.36, 1), .6s r cubic-bezier(0.22, 1, 0.36, 1), .3s opacity linear;transition:.35s stroke-dashoffset cubic-bezier(0.33, 1, 0.68, 1), .6s stroke-width cubic-bezier(0.22, 1, 0.36, 1), .6s r cubic-bezier(0.22, 1, 0.36, 1), .3s opacity linear;-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;-moz-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%;stroke:var(--primary-color)}.progress-icon__circle__bg{-moz-transition:.3s opacity linear;transition:.3s opacity linear;fill:var(--shade-700)}.progress-icon__circle--error{stroke:var(--error-color)}.progress-icon__thumbnail{-moz-transition:.2s transform cubic-bezier(0.22, 1, 0.36, 1), .05s opacity linear;transition:.2s transform cubic-bezier(0.22, 1, 0.36, 1), .05s opacity linear;-moz-transition-delay:.3s;transition-delay:.3s;background-repeat:no-repeat;background-position:center center;background-size:contain;opacity:1;position:absolute;left:0;right:0;top:0;bottom:0;-webkit-transform:scale(1, 1);-moz-transform:scale(1, 1);-ms-transform:scale(1, 1);transform:scale(1, 1)}.progress-icon__thumbnail--hidden{opacity:0;-webkit-transform:scale(0.1, 0.1);-moz-transform:scale(0.1, 0.1);-ms-transform:scale(0.1, 0.1);transform:scale(0.1, 0.1)}\n", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploadWidget/components/files/SubmittedFileComponent.scss": (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2("./node_modules/css-loader/dist/runtime/api.js");
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i4) {
              return i4[1];
            });
            ___CSS_LOADER_EXPORT___.push([module2.id, ".upload-widget__internal--md .upload-widget__submitted-file{max-width:100%;width:100%}.upload-widget__internal--lg .upload-widget__submitted-file{max-width:50%;width:50%}.upload-widget__internal--xl .upload-widget__submitted-file{max-width:33.333333%;width:33.333333%}.upload-widget__internal--xl .upload-widget__submitted-file--loners{max-width:46%;width:46%}.upload-widget__submitted-file{-webkit-flex-grow:1;-moz-box-flex:1;flex-grow:1;margin:.3125em 0}.upload-widget__submitted-file__container{margin:0 .3125em;background:var(--shade-800);border-radius:.4375em}.upload-widget__submitted-file__inner{padding:1.3125em 1.4375em;display:-webkit-flex;display:-moz-box;display:flex;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between}.upload-widget__submitted-file__text{margin-left:.4375em;margin-right:.5em;overflow:hidden;-webkit-flex-grow:1;-moz-box-flex:1;flex-grow:1}.upload-widget__submitted-file__action{min-width:4.625em;text-align:right;display:inline-block}.upload-widget__submitted-file__action--performed{color:var(--shade-300)}.upload-widget__submitted-file__message{font-size:0.75em;margin-top:0.2em;display:block;line-height:1.1em}.upload-widget__submitted-file__name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;height:1.1em}\n", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploadWidget/components/internal/UploadWidgetInternal.scss": (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2("./node_modules/css-loader/dist/runtime/api.js");
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i4) {
              return i4[1];
            });
            ___CSS_LOADER_EXPORT___.push([module2.id, ".upload-widget__internal{border-radius:.3125em;position:absolute;top:.9375em;left:.9375em;right:.9375em;bottom:.9375em;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;display:-webkit-flex;display:-moz-box;display:flex}.upload-widget__internal__modal-bg{color:var(--shade-600);position:absolute;z-index:1}.upload-widget__internal__modal-bg--dragging{color:var(--primary-color)}.upload-widget__internal__modal-bg--dragging *{pointer-events:none}.upload-widget__internal__children{-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;display:-webkit-flex;display:-moz-box;display:flex;z-index:2;position:absolute;bottom:0;top:0;left:0;right:0}.upload-widget__internal__children--is-modal{top:2.5em}.upload-widget__internal--draggable{border:.125em dashed var(--shade-600)}.upload-widget__internal--dragging{border-color:var(--primary-color)}.upload-widget__internal--dragging *{pointer-events:none}\n", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploadWidget/screens/UploaderMainScreen.scss": (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2("./node_modules/css-loader/dist/runtime/api.js");
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i4) {
              return i4[1];
            });
            ___CSS_LOADER_EXPORT___.push([module2.id, ".upload-widget__main-screen{display:-webkit-flex;display:-moz-box;display:flex;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;-webkit-align-content:space-between;align-content:space-between;height:100%;width:100%}.upload-widget__main-screen__file-list{margin:auto 0;overflow-y:auto;width:100%}.upload-widget__main-screen__file-list__inner{padding:.9375em;display:-webkit-flex;display:-moz-box;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center}.upload-widget__main-screen__info{color:var(--btn-text-color);text-align:center;padding:1.15em 0}\n", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        "./node_modules/css-loader/dist/runtime/api.js": (
          /***/
          function(module2) {
            module2.exports = function(cssWithMappingToString) {
              var list = [];
              list.toString = function toString() {
                return this.map(function(item) {
                  var content = cssWithMappingToString(item);
                  if (item[2]) {
                    return "@media ".concat(item[2], " {").concat(content, "}");
                  }
                  return content;
                }).join("");
              };
              list.i = function(modules, mediaQuery, dedupe) {
                if (typeof modules === "string") {
                  modules = [[null, modules, ""]];
                }
                var alreadyImportedModules = {};
                if (dedupe) {
                  for (var i4 = 0; i4 < this.length; i4++) {
                    var id = this[i4][0];
                    if (id != null) {
                      alreadyImportedModules[id] = true;
                    }
                  }
                }
                for (var _i = 0; _i < modules.length; _i++) {
                  var item = [].concat(modules[_i]);
                  if (dedupe && alreadyImportedModules[item[0]]) {
                    continue;
                  }
                  if (mediaQuery) {
                    if (!item[2]) {
                      item[2] = mediaQuery;
                    } else {
                      item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                    }
                  }
                  list.push(item);
                }
              };
              return list;
            };
          }
        )
        /******/
      };
      var __webpack_module_cache__ = {};
      function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) {
          return cachedModule.exports;
        }
        var module2 = __webpack_module_cache__[moduleId] = {
          /******/
          id: moduleId,
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
        return module2.exports;
      }
      !function() {
        __webpack_require__.n = function(module2) {
          var getter = module2 && module2.__esModule ? (
            /******/
            function() {
              return module2["default"];
            }
          ) : (
            /******/
            function() {
              return module2;
            }
          );
          __webpack_require__.d(getter, { a: getter });
          return getter;
        };
      }();
      !function() {
        __webpack_require__.d = function(exports2, definition) {
          for (var key in definition) {
            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
              Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
            }
          }
        };
      }();
      !function() {
        __webpack_require__.o = function(obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
      }();
      !function() {
        __webpack_require__.r = function(exports2) {
          if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
          }
          Object.defineProperty(exports2, "__esModule", { value: true });
        };
      }();
      !function() {
        __webpack_require__.nc = void 0;
      }();
      var __webpack_exports__ = {};
      !function() {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
          UploadWidget: function() {
            return (
              /* reexport */
              UploadWidget_UploadWidget
            );
          },
          UploadWidgetLocaleEnUs: function() {
            return (
              /* reexport */
              UploadWidgetLocaleEnUs
            );
          },
          UploadWidgetResult: function() {
            return (
              /* reexport */
              UploadWidgetResult
            );
          },
          UploadWidgetValidationError: function() {
            return (
              /* reexport */
              UploadWidgetValidationError
            );
          }
        });
        ;
        var jsx_runtime_namespaceObject = (init_jsxRuntime_module(), __toCommonJS(jsxRuntime_module_exports));
        ;
        var UploadWidgetLocaleEnUs = {
          addAnotherFileBtn: "Add another file...",
          addAnotherImageBtn: "Add another image...",
          cancelBtn: "cancel",
          cancelBtnClicked: "cancelled",
          cancelPreviewBtn: "Cancel",
          continueBtn: "Continue",
          cropBtn: "Crop",
          customValidationFailed: "Failed to validate file.",
          doneBtn: "Done",
          fileSizeLimitPrefix: "File size limit:",
          finishBtn: "Finished",
          finishBtnIcon: true,
          imageCropNumberPrefix: "Image",
          maxFilesReachedPrefix: "Maximum number of files:",
          maxImagesReachedPrefix: "Maximum number of images:",
          orDragDropFile: "...or drag and drop a file.",
          orDragDropFileMulti: "...or drag and drop files.",
          orDragDropImage: "...or drag and drop an image.",
          orDragDropImageMulti: "...or drag and drop images.",
          processingFile: "Processing file...",
          removeBtn: "remove",
          removeBtnClicked: "removed",
          submitBtnError: "Error!",
          submitBtnLoading: "Please wait...",
          unsupportedFileType: "File type not supported.",
          uploadFileBtn: "Upload a File",
          uploadFileMultiBtn: "Upload a File",
          uploadImageBtn: "Upload an Image",
          uploadImageMultiBtn: "Upload an Image",
          xOfY: "of"
        };
        ;
        var UploadWidgetEditorRequired;
        (function(UploadWidgetEditorRequired2) {
          function from(options2) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            var cropShape = (_b = (_a = options2 === null || options2 === void 0 ? void 0 : options2.images) === null || _a === void 0 ? void 0 : _a.cropShape) !== null && _b !== void 0 ? _b : "rect";
            var crop = (_d = (_c = options2 === null || options2 === void 0 ? void 0 : options2.images) === null || _c === void 0 ? void 0 : _c.crop) !== null && _d !== void 0 ? _d : true;
            return {
              images: {
                allowResizeOnMove: (_f = (_e = options2 === null || options2 === void 0 ? void 0 : options2.images) === null || _e === void 0 ? void 0 : _e.allowResizeOnMove) !== null && _f !== void 0 ? _f : true,
                crop,
                cropFilePath: (_h = (_g = options2 === null || options2 === void 0 ? void 0 : options2.images) === null || _g === void 0 ? void 0 : _g.cropFilePath) !== null && _h !== void 0 ? _h : function(originalImage) {
                  return "".concat(originalImage.filePath, ".crop");
                },
                cropRatio: cropShape === "circ" ? 1 : (_j = options2 === null || options2 === void 0 ? void 0 : options2.images) === null || _j === void 0 ? void 0 : _j.cropRatio,
                cropShape,
                // Prevents introducing a new step for existing users where previously they didn't expect any interruption, but
                // shows previews for new file types (PDFs) to users who are already expecting interruption for image uploads.
                // "If at least one editor option is enabled, then previews are enabled by default".
                preview: (_l = (_k = options2 === null || options2 === void 0 ? void 0 : options2.images) === null || _k === void 0 ? void 0 : _k.preview) !== null && _l !== void 0 ? _l : crop
              }
            };
          }
          UploadWidgetEditorRequired2.from = from;
        })(UploadWidgetEditorRequired || (UploadWidgetEditorRequired = {}));
        ;
        function _slicedToArray(arr, i4) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i4) || _unsupportedIterableToArray(arr, i4) || _nonIterableRest();
        }
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return _arrayLikeToArray(o4, minLen);
          var n3 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n3 === "Object" && o4.constructor)
            n3 = o4.constructor.name;
          if (n3 === "Map" || n3 === "Set")
            return Array.from(o4);
          if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
            return _arrayLikeToArray(o4, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
            arr2[i4] = arr[i4];
          return arr2;
        }
        function _iterableToArrayLimit(r3, l4) {
          var t4 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
          if (null != t4) {
            var e3, n3, i4, u4, a4 = [], f4 = true, o4 = false;
            try {
              if (i4 = (t4 = t4.call(r3)).next, 0 === l4) {
                if (Object(t4) !== t4)
                  return;
                f4 = false;
              } else
                for (; !(f4 = (e3 = i4.call(t4)).done) && (a4.push(e3.value), a4.length !== l4); f4 = true)
                  ;
            } catch (r4) {
              o4 = true, n3 = r4;
            } finally {
              try {
                if (!f4 && null != t4["return"] && (u4 = t4["return"](), Object(u4) !== u4))
                  return;
              } finally {
                if (o4)
                  throw n3;
              }
            }
            return a4;
          }
        }
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        function rgb2hsv(r3, g4, b3) {
          var v3 = Math.max(r3, g4, b3);
          var c4 = v3 - Math.min(r3, g4, b3);
          var h3 = c4 && (v3 === r3 ? (g4 - b3) / c4 : v3 === g4 ? 2 + (b3 - r3) / c4 : 4 + (r3 - g4) / c4);
          return [60 * (h3 < 0 ? h3 + 6 : h3), v3 && c4 / v3, v3];
        }
        function hsv2rgb(h3, s3, v3) {
          var f4 = function f5(n3) {
            var k4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (n3 + h3 / 60) % 6;
            return v3 - v3 * s3 * Math.max(Math.min(k4, 4 - k4, 1), 0);
          };
          return [f4(5), f4(3), f4(1)];
        }
        function hexToRgb(hex) {
          var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
          hex = hex.replace(shorthandRegex, function(_4, r3, g4, b3) {
            return "".concat(r3).concat(r3).concat(g4).concat(g4).concat(b3).concat(b3);
          });
          var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
          if (result === null) {
            throw new Error("Invalid color code: ".concat(hex));
          }
          return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
        }
        function highlightColor(hex, amount) {
          var _hexToRgb = hexToRgb(hex), _hexToRgb2 = _slicedToArray(_hexToRgb, 3), r3 = _hexToRgb2[0], g4 = _hexToRgb2[1], b3 = _hexToRgb2[2];
          var _rgb2hsv = rgb2hsv(r3, g4, b3), _rgb2hsv2 = _slicedToArray(_rgb2hsv, 3), h3 = _rgb2hsv2[0], s3 = _rgb2hsv2[1], v3 = _rgb2hsv2[2];
          var clipToFactor = function clipToFactor2(x4) {
            return Math.min(1, Math.max(0, x4));
          };
          var _hsv2rgb$map = hsv2rgb(h3, clipToFactor(s3 + amount * -1), clipToFactor(v3 / 255 + amount) * 255).map(Math.round), _hsv2rgb$map2 = _slicedToArray(_hsv2rgb$map, 3), rNew = _hsv2rgb$map2[0], gNew = _hsv2rgb$map2[1], bNew = _hsv2rgb$map2[2];
          return "rgb(".concat(rNew, ", ").concat(gNew, ", ").concat(bNew, ")");
        }
        ;
        var UploaderColorOptionsRequired;
        (function(UploaderColorOptionsRequired2) {
          function from(options2) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            var primaryDefault = "#377dff";
            var activeDefault = "#528fff";
            var primary = (_a = options2 === null || options2 === void 0 ? void 0 : options2.primary) !== null && _a !== void 0 ? _a : primaryDefault;
            var active;
            try {
              active = highlightColor(primary, 0.1);
            } catch (e3) {
              console.error("Invalid hex code '".concat(primary, "', using default colours."));
              primary = primaryDefault;
              active = activeDefault;
            }
            return {
              primary,
              active: (_b = options2 === null || options2 === void 0 ? void 0 : options2.active) !== null && _b !== void 0 ? _b : active,
              error: (_c = options2 === null || options2 === void 0 ? void 0 : options2.error) !== null && _c !== void 0 ? _c : "#d23f4d",
              shade100: (_d = options2 === null || options2 === void 0 ? void 0 : options2.shade100) !== null && _d !== void 0 ? _d : "#333",
              shade200: (_e = options2 === null || options2 === void 0 ? void 0 : options2.shade200) !== null && _e !== void 0 ? _e : "#7a7a7a",
              shade300: (_f = options2 === null || options2 === void 0 ? void 0 : options2.shade300) !== null && _f !== void 0 ? _f : "#999",
              shade400: (_g = options2 === null || options2 === void 0 ? void 0 : options2.shade400) !== null && _g !== void 0 ? _g : "#a5a6a8",
              shade500: (_h = options2 === null || options2 === void 0 ? void 0 : options2.shade500) !== null && _h !== void 0 ? _h : "#d3d3d3",
              shade600: (_j = options2 === null || options2 === void 0 ? void 0 : options2.shade600) !== null && _j !== void 0 ? _j : "#dddddd",
              shade700: (_k = options2 === null || options2 === void 0 ? void 0 : options2.shade700) !== null && _k !== void 0 ? _k : "#f0f0f0",
              shade800: (_l = options2 === null || options2 === void 0 ? void 0 : options2.shade800) !== null && _l !== void 0 ? _l : "#f8f8f8",
              shade900: (_m = options2 === null || options2 === void 0 ? void 0 : options2.shade900) !== null && _m !== void 0 ? _m : "#fff"
              // 900 DONE
            };
          }
          UploaderColorOptionsRequired2.from = from;
        })(UploaderColorOptionsRequired || (UploaderColorOptionsRequired = {}));
        ;
        var UploadWidgetFontSizeRequired;
        (function(UploadWidgetFontSizeRequired2) {
          function from(options2) {
            var _a;
            return {
              base: (_a = options2 === null || options2 === void 0 ? void 0 : options2.base) !== null && _a !== void 0 ? _a : 16
            };
          }
          UploadWidgetFontSizeRequired2.from = from;
        })(UploadWidgetFontSizeRequired || (UploadWidgetFontSizeRequired = {}));
        ;
        var UploadWidgetFontFamilyRequired;
        (function(UploadWidgetFontFamilyRequired2) {
          function from(options2) {
            var _a;
            return {
              base: (_a = options2 === null || options2 === void 0 ? void 0 : options2.base) !== null && _a !== void 0 ? _a : "-apple-system, blinkmacsystemfont, Segoe UI, helvetica, arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"
            };
          }
          UploadWidgetFontFamilyRequired2.from = from;
        })(UploadWidgetFontFamilyRequired || (UploadWidgetFontFamilyRequired = {}));
        ;
        var UploadWidgetBreakpointsRequired;
        (function(UploadWidgetBreakpointsRequired2) {
          function from(options2) {
            var _a, _b;
            return {
              fullScreenWidth: (_a = options2 === null || options2 === void 0 ? void 0 : options2.fullScreenWidth) !== null && _a !== void 0 ? _a : 750,
              fullScreenHeight: (_b = options2 === null || options2 === void 0 ? void 0 : options2.fullScreenHeight) !== null && _b !== void 0 ? _b : 420
            };
          }
          UploadWidgetBreakpointsRequired2.from = from;
        })(UploadWidgetBreakpointsRequired || (UploadWidgetBreakpointsRequired = {}));
        ;
        var UploadWidgetStylesRequired;
        (function(UploadWidgetStylesRequired2) {
          function from(options2) {
            return {
              breakpoints: UploadWidgetBreakpointsRequired.from(options2 === null || options2 === void 0 ? void 0 : options2.breakpoints),
              colors: UploaderColorOptionsRequired.from(options2 === null || options2 === void 0 ? void 0 : options2.colors),
              fontFamilies: UploadWidgetFontFamilyRequired.from(options2 === null || options2 === void 0 ? void 0 : options2.fontFamilies),
              fontSizes: UploadWidgetFontSizeRequired.from(options2 === null || options2 === void 0 ? void 0 : options2.fontSizes)
            };
          }
          UploadWidgetStylesRequired2.from = from;
        })(UploadWidgetStylesRequired || (UploadWidgetStylesRequired = {}));
        ;
        var UploadWidgetLocaleDeprecatedFields;
        (function(UploadWidgetLocaleDeprecatedFields2) {
          function migrate(_ref) {
            var addAnotherFileBtn = _ref["addAnotherFile"], addAnotherImageBtn = _ref["addAnotherImage"], cancelBtn = _ref["cancel"], cancelPreviewBtn = _ref["cancelInPreviewWindow"], cancelBtnClicked = _ref["cancelled!"], continueBtn = _ref["continue"], cropBtn = _ref["crop"], doneBtn = _ref["done"], submitBtnError = _ref["error!"], finishBtn = _ref["finish"], finishBtnIcon = _ref["finishIcon"], imageCropNumberPrefix = _ref["image"], maxFilesReachedPrefix = _ref["maxFilesReached"], maxImagesReachedPrefix = _ref["maxImagesReached"], fileSizeLimitPrefix = _ref["maxSize"], xOfY = _ref["of"], orDragDropFileMulti = _ref["orDragDropFiles"], orDragDropImageMulti = _ref["orDragDropImages"], submitBtnLoading = _ref["pleaseWait"], removeBtn = _ref["remove"], removeBtnClicked = _ref["removed!"], uploadFileBtn = _ref["uploadFile"], uploadFileMultiBtn = _ref["uploadFiles"], uploadImageBtn = _ref["uploadImage"], uploadImageMultiBtn = _ref["uploadImages"];
            return {
              addAnotherFileBtn,
              addAnotherImageBtn,
              cancelBtn,
              cancelBtnClicked,
              cancelPreviewBtn,
              continueBtn,
              cropBtn,
              doneBtn,
              fileSizeLimitPrefix,
              finishBtn,
              finishBtnIcon,
              imageCropNumberPrefix,
              maxFilesReachedPrefix,
              maxImagesReachedPrefix,
              orDragDropFileMulti,
              orDragDropImageMulti,
              removeBtn,
              removeBtnClicked,
              submitBtnError,
              submitBtnLoading,
              uploadFileBtn,
              uploadFileMultiBtn,
              uploadImageBtn,
              uploadImageMultiBtn,
              xOfY
            };
          }
          UploadWidgetLocaleDeprecatedFields2.migrate = migrate;
        })(UploadWidgetLocaleDeprecatedFields || (UploadWidgetLocaleDeprecatedFields = {}));
        ;
        function ObjectUtils_slicedToArray(arr, i4) {
          return ObjectUtils_arrayWithHoles(arr) || ObjectUtils_iterableToArrayLimit(arr, i4) || ObjectUtils_unsupportedIterableToArray(arr, i4) || ObjectUtils_nonIterableRest();
        }
        function ObjectUtils_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function ObjectUtils_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return ObjectUtils_arrayLikeToArray(o4, minLen);
          var n3 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n3 === "Object" && o4.constructor)
            n3 = o4.constructor.name;
          if (n3 === "Map" || n3 === "Set")
            return Array.from(o4);
          if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
            return ObjectUtils_arrayLikeToArray(o4, minLen);
        }
        function ObjectUtils_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
            arr2[i4] = arr[i4];
          return arr2;
        }
        function ObjectUtils_iterableToArrayLimit(r3, l4) {
          var t4 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
          if (null != t4) {
            var e3, n3, i4, u4, a4 = [], f4 = true, o4 = false;
            try {
              if (i4 = (t4 = t4.call(r3)).next, 0 === l4) {
                if (Object(t4) !== t4)
                  return;
                f4 = false;
              } else
                for (; !(f4 = (e3 = i4.call(t4)).done) && (a4.push(e3.value), a4.length !== l4); f4 = true)
                  ;
            } catch (r4) {
              o4 = true, n3 = r4;
            } finally {
              try {
                if (!f4 && null != t4["return"] && (u4 = t4["return"](), Object(u4) !== u4))
                  return;
              } finally {
                if (o4)
                  throw n3;
              }
            }
            return a4;
          }
        }
        function ObjectUtils_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        function removeUndefinedAndNullFields(value) {
          return Object.fromEntries(Object.entries(value).filter(function(_ref) {
            var _ref2 = ObjectUtils_slicedToArray(_ref, 2), value2 = _ref2[1];
            return (value2 !== null && value2 !== void 0 ? value2 : void 0) !== void 0;
          }));
        }
        ;
        function _await(value, then, direct) {
          if (direct) {
            return then ? then(value) : value;
          }
          if (!value || !value.then) {
            value = Promise.resolve(value);
          }
          return then ? value.then(then) : value;
        }
        function _async(f4) {
          return function() {
            for (var args = [], i4 = 0; i4 < arguments.length; i4++) {
              args[i4] = arguments[i4];
            }
            try {
              return Promise.resolve(f4.apply(this, args));
            } catch (e3) {
              return Promise.reject(e3);
            }
          };
        }
        var UploadWidgetConfigRequired;
        (function(UploadWidgetConfigRequired2) {
          function from(options2) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            var layout = (_a = options2.layout) !== null && _a !== void 0 ? _a : "modal";
            var multi = (_b = options2.multi) !== null && _b !== void 0 ? _b : options2.maxFileCount !== void 0 && options2.maxFileCount > 1;
            return {
              // Bytescale SDK settings:
              apiKey: options2.apiKey,
              apiUrl: options2.apiUrl,
              cdnUrl: options2.cdnUrl,
              headers: options2.headers,
              // Bytescale Upload Widget settings:
              container: options2.container,
              editor: UploadWidgetEditorRequired.from(options2.editor),
              layout,
              locale: Object.assign(Object.assign({}, UploadWidgetLocaleEnUs), removeUndefinedAndNullFields(Object.assign(Object.assign({}, UploadWidgetLocaleDeprecatedFields.migrate((_c = options2.locale) !== null && _c !== void 0 ? _c : {})), options2.locale))),
              maxFileCount: options2.maxFileCount,
              maxFileSizeBytes: options2.maxFileSizeBytes,
              metadata: options2.metadata,
              mimeTypes: (_d = options2.mimeTypes) === null || _d === void 0 ? void 0 : _d.map(function(x4) {
                return x4.trim().toLowerCase();
              }),
              multi,
              onInit: (_e = options2.onInit) !== null && _e !== void 0 ? _e : function() {
              },
              onUpdate: (_f = options2.onUpdate) !== null && _f !== void 0 ? _f : function() {
              },
              onPreUpload: _async(function(file) {
                var onPreUpload = options2.onPreUpload;
                return onPreUpload === void 0 ? void 0 : onPreUpload(file);
              }),
              path: options2.path,
              showFinishButton: (_g = options2.showFinishButton) !== null && _g !== void 0 ? _g : multi ? layout === "modal" : false,
              showRemoveButton: (_h = options2.showRemoveButton) !== null && _h !== void 0 ? _h : true,
              styles: UploadWidgetStylesRequired.from(options2.styles),
              tags: (_j = options2.tags) !== null && _j !== void 0 ? _j : []
            };
          }
          UploadWidgetConfigRequired2.from = from;
        })(UploadWidgetConfigRequired || (UploadWidgetConfigRequired = {}));
        ;
        var external_preact_namespaceObject = (init_preact_module(), __toCommonJS(preact_module_exports));
        var injectStylesIntoStyleTag = __webpack_require__("./node_modules/@bytescale/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
        var injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag);
        var styleDomAPI = __webpack_require__("./node_modules/@bytescale/style-loader/dist/runtime/styleDomAPI.js");
        var styleDomAPI_default = __webpack_require__.n(styleDomAPI);
        var setAttributesWithoutAttributes = __webpack_require__("./node_modules/@bytescale/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
        var setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes);
        var insertStyleElement = __webpack_require__("./node_modules/@bytescale/style-loader/dist/runtime/insertStyleElement.js");
        var insertStyleElement_default = __webpack_require__.n(insertStyleElement);
        var styleTagTransform = __webpack_require__("./node_modules/@bytescale/style-loader/dist/runtime/styleTagTransform.js");
        var styleTagTransform_default = __webpack_require__.n(styleTagTransform);
        var UploadWidgetContainer = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploadWidget/UploadWidgetContainer.scss");
        ;
        var options = {};
        options.styleTagTransform = styleTagTransform_default();
        options.setAttributes = setAttributesWithoutAttributes_default();
        options.insert = function insertIntoTarget(element) {
          if (typeof document !== "undefined") {
            document.head.appendChild(element);
          }
        };
        options.domAPI = styleDomAPI_default();
        options.insertStyleElement = insertStyleElement_default();
        var update = injectStylesIntoStyleTag_default()(UploadWidgetContainer["default"], options);
        var uploadWidget_UploadWidgetContainer = UploadWidgetContainer["default"] && UploadWidgetContainer["default"].locals ? UploadWidgetContainer["default"].locals : void 0;
        ;
        var external_classnames_namespaceObject = require_classnames();
        var external_classnames_default = __webpack_require__.n(external_classnames_namespaceObject);
        var UploadWidgetInternal = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploadWidget/components/internal/UploadWidgetInternal.scss");
        ;
        var UploadWidgetInternal_options = {};
        UploadWidgetInternal_options.styleTagTransform = styleTagTransform_default();
        UploadWidgetInternal_options.setAttributes = setAttributesWithoutAttributes_default();
        UploadWidgetInternal_options.insert = function insertIntoTarget(element) {
          if (typeof document !== "undefined") {
            document.head.appendChild(element);
          }
        };
        UploadWidgetInternal_options.domAPI = styleDomAPI_default();
        UploadWidgetInternal_options.insertStyleElement = insertStyleElement_default();
        var UploadWidgetInternal_update = injectStylesIntoStyleTag_default()(UploadWidgetInternal["default"], UploadWidgetInternal_options);
        var internal_UploadWidgetInternal = UploadWidgetInternal["default"] && UploadWidgetInternal["default"].locals ? UploadWidgetInternal["default"].locals : void 0;
        ;
        var baseWidth = 600;
        var baseHeight = 400;
        var baseNotchSize = 50;
        var DashedBackgroundSvg = function DashedBackgroundSvg2(_ref) {
          var className = _ref.className, width = _ref.width, height = _ref.height, notchSize = _ref.notchSize;
          var widthDelta = baseWidth - width;
          var heightDelta = baseHeight - height;
          var notchDelta = baseNotchSize - notchSize;
          return (0, jsx_runtime_namespaceObject.jsxs)("svg", Object.assign({
            width,
            height,
            className,
            xmlns: "http://www.w3.org/2000/svg"
          }, {
            children: [(0, jsx_runtime_namespaceObject.jsxs)("defs", {
              children: [(0, jsx_runtime_namespaceObject.jsx)("path", {
                d: "M76 99h".concat(536 - (widthDelta - notchDelta), "a7 7 0 0 1 7 7v").concat(36 - notchDelta, "a7 7 0 0 0 7 7h").concat(36 - notchDelta, "a7 7 0 0 1 7 7v").concat(336 - (heightDelta - notchDelta), "a7 7 0 0 1-7 7H76a7 7 0 0 1-7-7V106a7 7 0 0 1 7-7Z"),
                id: "rectWithNotch"
              }), (0, jsx_runtime_namespaceObject.jsx)("mask", Object.assign({
                id: "rectWithNotchMask",
                maskContentUnits: "userSpaceOnUse",
                maskUnits: "objectBoundingBox",
                x: "0",
                y: "0",
                width,
                height,
                fill: "#fff"
              }, {
                children: (0, jsx_runtime_namespaceObject.jsx)("use", {
                  xlinkHref: "#rectWithNotch"
                })
              }))]
            }), (0, jsx_runtime_namespaceObject.jsx)("use", {
              mask: "url(#rectWithNotchMask)",
              xlinkHref: "#rectWithNotch",
              transform: "translate(-69 -99)",
              stroke: "currentColor",
              strokeWidth: "4",
              fill: "none",
              fillRule: "evenodd",
              strokeDasharray: "4"
            })]
          }));
        };
        ;
        var UploadWidgetInternalBorder = function UploadWidgetInternalBorder2(_ref) {
          var closeButtonSize = _ref.closeButtonSize, isDragging = _ref.isDragging, dimensions = _ref.dimensions;
          if (dimensions === void 0) {
            return (0, jsx_runtime_namespaceObject.jsx)(jsx_runtime_namespaceObject.Fragment, {});
          }
          return (0, jsx_runtime_namespaceObject.jsx)(DashedBackgroundSvg, {
            width: dimensions.width,
            height: dimensions.height,
            notchSize: closeButtonSize,
            className: external_classnames_default()("upload-widget__internal__modal-bg", {
              "upload-widget__internal__modal-bg--dragging": isDragging
            })
          });
        };
        ;
        var compat_namespaceObject = (init_compat_module(), __toCommonJS(compat_module_exports));
        ;
        var __rest = function(s3, e3) {
          var t4 = {};
          for (var p4 in s3)
            if (Object.prototype.hasOwnProperty.call(s3, p4) && e3.indexOf(p4) < 0)
              t4[p4] = s3[p4];
          if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i4 = 0, p4 = Object.getOwnPropertySymbols(s3); i4 < p4.length; i4++) {
              if (e3.indexOf(p4[i4]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p4[i4]))
                t4[p4[i4]] = s3[p4[i4]];
            }
          return t4;
        };
        var ResizedSvg = function ResizedSvg2(_a) {
          var children = _a.children, className = _a.className, originalHeight = _a.originalHeight, originalWidth = _a.originalWidth, style = _a.style, rest = __rest(_a, ["children", "className", "originalHeight", "originalWidth", "style"]);
          var widthMaybe = rest === null || rest === void 0 ? void 0 : rest.width;
          var heightMaybe = rest === null || rest === void 0 ? void 0 : rest.height;
          return (0, jsx_runtime_namespaceObject.jsx)("svg", Object.assign({
            viewBox: "0 0 ".concat(originalWidth, " ").concat(originalHeight),
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className,
            style: Object.assign(Object.assign({}, style), heightMaybe !== void 0 ? {
              height: "".concat(heightMaybe, "px"),
              width: "".concat(heightMaybe * (originalWidth / originalHeight), "px")
            } : widthMaybe !== void 0 ? {
              width: "".concat(widthMaybe, "px"),
              height: "".concat(widthMaybe * (originalHeight / originalWidth), "px")
            } : {})
          }, {
            children
          }));
        };
        ;
        var CloseSvg = function CloseSvg2(_ref) {
          var className = _ref.className, width = _ref.width;
          return (0, jsx_runtime_namespaceObject.jsx)(ResizedSvg, Object.assign({
            originalWidth: 27,
            originalHeight: 26,
            width: width !== null && width !== void 0 ? width : 27,
            className
          }, {
            children: (0, jsx_runtime_namespaceObject.jsxs)("g", Object.assign({
              transform: "rotate(45 6.547 16.13)",
              fill: "currentColor",
              fillRule: "evenodd"
            }, {
              children: [(0, jsx_runtime_namespaceObject.jsx)("rect", {
                x: "7.75",
                width: "2.5",
                height: "18",
                rx: "1.25"
              }), (0, jsx_runtime_namespaceObject.jsx)("rect", {
                transform: "rotate(90 9 9)",
                x: "7.75",
                width: "2.5",
                height: "18",
                rx: "1.25"
              })]
            }))
          }));
        };
        var Modal = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/Modal.scss");
        ;
        var Modal_options = {};
        Modal_options.styleTagTransform = styleTagTransform_default();
        Modal_options.setAttributes = setAttributesWithoutAttributes_default();
        Modal_options.insert = function insertIntoTarget(element) {
          if (typeof document !== "undefined") {
            document.head.appendChild(element);
          }
        };
        Modal_options.domAPI = styleDomAPI_default();
        Modal_options.insertStyleElement = insertStyleElement_default();
        var Modal_update = injectStylesIntoStyleTag_default()(Modal["default"], Modal_options);
        var modal_Modal = Modal["default"] && Modal["default"].locals ? Modal["default"].locals : void 0;
        ;
        function Modal_slicedToArray(arr, i4) {
          return Modal_arrayWithHoles(arr) || Modal_iterableToArrayLimit(arr, i4) || Modal_unsupportedIterableToArray(arr, i4) || Modal_nonIterableRest();
        }
        function Modal_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function Modal_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return Modal_arrayLikeToArray(o4, minLen);
          var n3 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n3 === "Object" && o4.constructor)
            n3 = o4.constructor.name;
          if (n3 === "Map" || n3 === "Set")
            return Array.from(o4);
          if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
            return Modal_arrayLikeToArray(o4, minLen);
        }
        function Modal_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
            arr2[i4] = arr[i4];
          return arr2;
        }
        function Modal_iterableToArrayLimit(r3, l4) {
          var t4 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
          if (null != t4) {
            var e3, n3, i4, u4, a4 = [], f4 = true, o4 = false;
            try {
              if (i4 = (t4 = t4.call(r3)).next, 0 === l4) {
                if (Object(t4) !== t4)
                  return;
                f4 = false;
              } else
                for (; !(f4 = (e3 = i4.call(t4)).done) && (a4.push(e3.value), a4.length !== l4); f4 = true)
                  ;
            } catch (r4) {
              o4 = true, n3 = r4;
            } finally {
              try {
                if (!f4 && null != t4["return"] && (u4 = t4["return"](), Object(u4) !== u4))
                  return;
              } finally {
                if (o4)
                  throw n3;
              }
            }
            return a4;
          }
        }
        function Modal_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var modalTransitionDuration = 250;
        var modalCloseButtonSize = 27;
        var modalCloseButtonPadding = 11;
        var Modal_Modal = function Modal2(_ref) {
          var children = _ref.children, closeModal = _ref.closeModal;
          var _useState = (0, compat_namespaceObject.useState)(false), _useState2 = Modal_slicedToArray(_useState, 2), isClosed = _useState2[0], setIsClosed = _useState2[1];
          var _useState3 = (0, compat_namespaceObject.useState)(false), _useState4 = Modal_slicedToArray(_useState3, 2), visible = _useState4[0], setVisible = _useState4[1];
          var _useState5 = (0, compat_namespaceObject.useState)(false), _useState6 = Modal_slicedToArray(_useState5, 2), showModalAsync = _useState6[0], setShowModalAsync = _useState6[1];
          var showModal = visible && !isClosed;
          var doClose = function doClose2() {
            setIsClosed(true);
          };
          (0, compat_namespaceObject.useEffect)(function() {
            if (!visible) {
              setVisible(true);
            }
          }, [visible]);
          (0, compat_namespaceObject.useEffect)(function() {
            if (!isClosed) {
              return;
            }
            var timeout = setTimeout(function() {
              closeModal();
            }, modalTransitionDuration);
            return function() {
              return clearTimeout(timeout);
            };
          }, [isClosed]);
          (0, compat_namespaceObject.useLayoutEffect)(function() {
            var oldHtmlClass = document.documentElement.className;
            var oldBodyClass = document.body.className;
            document.documentElement.className = "".concat(oldHtmlClass, " upload-widget__html");
            document.body.className = "".concat(oldBodyClass, " upload-widget__body");
            return function() {
              document.documentElement.className = oldHtmlClass;
              document.body.className = oldBodyClass;
            };
          }, []);
          (0, compat_namespaceObject.useEffect)(function() {
            if (showModal && !showModalAsync) {
              var f4 = window.requestAnimationFrame(function() {
                setShowModalAsync(true);
              });
              return function() {
                return window.cancelAnimationFrame(f4);
              };
            } else if (showModalAsync) {
              setShowModalAsync(false);
            }
          }, [showModal]);
          return (0, jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
            children: [showModal && (0, jsx_runtime_namespaceObject.jsx)("div", {
              className: external_classnames_default()("upload-widget__backdrop", {
                show: showModalAsync
              }),
              onMouseDown: doClose
            }), showModal && (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
              className: external_classnames_default()("upload-widget__modal", {
                show: showModalAsync
              })
            }, {
              children: [children, (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
                className: "upload-widget__modal__close"
              }, {
                children: (0, jsx_runtime_namespaceObject.jsx)("a", Object.assign({
                  href: "#close",
                  onClick: function onClick(e3) {
                    e3.preventDefault();
                    doClose();
                  }
                }, {
                  children: (0, jsx_runtime_namespaceObject.jsx)(CloseSvg, {
                    width: modalCloseButtonSize
                  })
                }))
              }))]
            }))]
          });
        };
        ;
        function _toConsumableArray(arr) {
          return _arrayWithoutHoles(arr) || _iterableToArray(arr) || UseDimensionsFromElement_unsupportedIterableToArray(arr) || _nonIterableSpread();
        }
        function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
            return Array.from(iter);
        }
        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr))
            return UseDimensionsFromElement_arrayLikeToArray(arr);
        }
        function UseDimensionsFromElement_slicedToArray(arr, i4) {
          return UseDimensionsFromElement_arrayWithHoles(arr) || UseDimensionsFromElement_iterableToArrayLimit(arr, i4) || UseDimensionsFromElement_unsupportedIterableToArray(arr, i4) || UseDimensionsFromElement_nonIterableRest();
        }
        function UseDimensionsFromElement_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UseDimensionsFromElement_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return UseDimensionsFromElement_arrayLikeToArray(o4, minLen);
          var n3 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n3 === "Object" && o4.constructor)
            n3 = o4.constructor.name;
          if (n3 === "Map" || n3 === "Set")
            return Array.from(o4);
          if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
            return UseDimensionsFromElement_arrayLikeToArray(o4, minLen);
        }
        function UseDimensionsFromElement_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
            arr2[i4] = arr[i4];
          return arr2;
        }
        function UseDimensionsFromElement_iterableToArrayLimit(r3, l4) {
          var t4 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
          if (null != t4) {
            var e3, n3, i4, u4, a4 = [], f4 = true, o4 = false;
            try {
              if (i4 = (t4 = t4.call(r3)).next, 0 === l4) {
                if (Object(t4) !== t4)
                  return;
                f4 = false;
              } else
                for (; !(f4 = (e3 = i4.call(t4)).done) && (a4.push(e3.value), a4.length !== l4); f4 = true)
                  ;
            } catch (r4) {
              o4 = true, n3 = r4;
            } finally {
              try {
                if (!f4 && null != t4["return"] && (u4 = t4["return"](), Object(u4) !== u4))
                  return;
              } finally {
                if (o4)
                  throw n3;
              }
            }
            return a4;
          }
        }
        function UseDimensionsFromElement_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        function useElementRef() {
          var _useState = (0, compat_namespaceObject.useState)(void 0), _useState2 = UseDimensionsFromElement_slicedToArray(_useState, 2), element = _useState2[0], setElement = _useState2[1];
          var elementRef = (0, compat_namespaceObject.useCallback)(function(e3) {
            setElement(e3 !== null && e3 !== void 0 ? e3 : void 0);
          }, []);
          return [element, elementRef];
        }
        function getElementDimensionsOnResize(isElementReady, imageSizeDeps) {
          var _useElementRef = useElementRef(), _useElementRef2 = UseDimensionsFromElement_slicedToArray(_useElementRef, 2), element = _useElementRef2[0], elementRef = _useElementRef2[1];
          var dimensions = doGetElementDimensionsOnResize(isElementReady, element, element, imageSizeDeps);
          return [dimensions, elementRef];
        }
        function getElementDimensionsOnParentResize(isElementReady, imageSizeDeps) {
          var _useElementRef3 = useElementRef(), _useElementRef4 = UseDimensionsFromElement_slicedToArray(_useElementRef3, 2), element = _useElementRef4[0], elementRef = _useElementRef4[1];
          var _useElementRef5 = useElementRef(), _useElementRef6 = UseDimensionsFromElement_slicedToArray(_useElementRef5, 2), parentElement = _useElementRef6[0], parentElementRef = _useElementRef6[1];
          var dimensions = doGetElementDimensionsOnResize(isElementReady, element, parentElement, imageSizeDeps);
          return [dimensions, elementRef, parentElementRef];
        }
        function doGetElementDimensionsOnResize(isElementReady, element, parentElement, imageSizeDeps) {
          var _useState3 = (0, compat_namespaceObject.useState)(void 0), _useState4 = UseDimensionsFromElement_slicedToArray(_useState3, 2), dimensions = _useState4[0], setDimensions = _useState4[1];
          (0, compat_namespaceObject.useLayoutEffect)(function() {
            var updateDimensions = function updateDimensions2() {
              if (isElementReady) {
                setDimensions(getDimensionsFromElement(element));
              }
            };
            if (element === void 0 || parentElement === void 0) {
              return;
            }
            var observer = new ResizeObserver(updateDimensions);
            observer.observe(parentElement);
            return function() {
              return observer.disconnect();
            };
          }, [element, isElementReady].concat(_toConsumableArray(imageSizeDeps)));
          return dimensions;
        }
        function getDimensionsFromElement(element) {
          if (element === void 0) {
            return void 0;
          }
          var domRect = element.getBoundingClientRect();
          return {
            width: domRect.width,
            height: domRect.height,
            x: element.offsetLeft,
            y: element.offsetTop
          };
        }
        ;
        function UploadWidgetInternal_slicedToArray(arr, i4) {
          return UploadWidgetInternal_arrayWithHoles(arr) || UploadWidgetInternal_iterableToArrayLimit(arr, i4) || UploadWidgetInternal_unsupportedIterableToArray(arr, i4) || UploadWidgetInternal_nonIterableRest();
        }
        function UploadWidgetInternal_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UploadWidgetInternal_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return UploadWidgetInternal_arrayLikeToArray(o4, minLen);
          var n3 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n3 === "Object" && o4.constructor)
            n3 = o4.constructor.name;
          if (n3 === "Map" || n3 === "Set")
            return Array.from(o4);
          if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
            return UploadWidgetInternal_arrayLikeToArray(o4, minLen);
        }
        function UploadWidgetInternal_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
            arr2[i4] = arr[i4];
          return arr2;
        }
        function UploadWidgetInternal_iterableToArrayLimit(r3, l4) {
          var t4 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
          if (null != t4) {
            var e3, n3, i4, u4, a4 = [], f4 = true, o4 = false;
            try {
              if (i4 = (t4 = t4.call(r3)).next, 0 === l4) {
                if (Object(t4) !== t4)
                  return;
                f4 = false;
              } else
                for (; !(f4 = (e3 = i4.call(t4)).done) && (a4.push(e3.value), a4.length !== l4); f4 = true)
                  ;
            } catch (r4) {
              o4 = true, n3 = r4;
            } finally {
              try {
                if (!f4 && null != t4["return"] && (u4 = t4["return"](), Object(u4) !== u4))
                  return;
              } finally {
                if (o4)
                  throw n3;
              }
            }
            return a4;
          }
        }
        function UploadWidgetInternal_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var UploadWidgetInternal_UploadWidgetInternal = function UploadWidgetInternal2(_ref) {
          var children = _ref.children, htmlProps = _ref.htmlProps, isDraggable = _ref.isDraggable, isDragging = _ref.isDragging, layout = _ref.layout;
          var _a, _b;
          var _getElementDimensions = getElementDimensionsOnResize(true, []), _getElementDimensions2 = UploadWidgetInternal_slicedToArray(_getElementDimensions, 2), dimensions = _getElementDimensions2[0], containerRef = _getElementDimensions2[1];
          var internalBreakpoints = [{
            width: 650,
            value: "md"
          }, {
            width: 930,
            value: "lg"
          }];
          var lastBreakpoint = "xl";
          var breakpoint = (_b = dimensions === void 0 ? void 0 : (_a = internalBreakpoints.find(function(x4) {
            return dimensions.width <= x4.width;
          })) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : lastBreakpoint;
          return (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
            ref: containerRef,
            className: external_classnames_default()("upload-widget__internal", "upload-widget__internal--".concat(breakpoint), {
              "upload-widget__internal--draggable": isDraggable === true && layout !== "modal",
              "upload-widget__internal--dragging": isDragging === true && layout !== "modal"
            })
          }, htmlProps, {
            children: [isDraggable === true && layout === "modal" && (0, jsx_runtime_namespaceObject.jsx)(UploadWidgetInternalBorder, {
              isDragging: isDragging === true,
              dimensions,
              closeButtonSize: modalCloseButtonSize + modalCloseButtonPadding
            }), (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
              className: external_classnames_default()("upload-widget__internal__children", {
                "upload-widget__internal__children--is-modal": layout === "modal"
              })
            }, {
              children
            }))]
          }));
        };
        ;
        var RightSvg = function RightSvg2(_ref) {
          var className = _ref.className, width = _ref.width;
          return (0, jsx_runtime_namespaceObject.jsx)(ResizedSvg, Object.assign({
            originalWidth: 13,
            originalHeight: 10,
            width: width !== null && width !== void 0 ? width : 13,
            className
          }, {
            children: (0, jsx_runtime_namespaceObject.jsx)("path", {
              d: "M6.293.293a.999.999 0 0 0 0 1.414L8.586 4H1a1 1 0 0 0 0 2h7.586L6.293 8.293a.999.999 0 1 0 1.414 1.414L12.414 5 7.707.293a.999.999 0 0 0-1.414 0Z",
              fill: "currentColor",
              fillRule: "nonzero"
            })
          }));
        };
        ;
        var ConfigError = function ConfigError2(_ref) {
          var error = _ref.error, layout = _ref.layout;
          var _a;
          var errorMessage = ((_a = error.message) !== null && _a !== void 0 ? _a : "unknown error").replace("[upload-js] ", "");
          var isApiKeyError = errorMessage.toLowerCase().includes("api key");
          return (0, jsx_runtime_namespaceObject.jsxs)(UploadWidgetInternal_UploadWidgetInternal, Object.assign({
            layout,
            multi: false
          }, {
            children: [(0, jsx_runtime_namespaceObject.jsx)("h1", {
              children: isApiKeyError ? "Almost there..." : "Oops!"
            }), (0, jsx_runtime_namespaceObject.jsx)("p", {
              children: errorMessage
            }), isApiKeyError ? (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
              className: "mt-5"
            }, {
              children: [(0, jsx_runtime_namespaceObject.jsxs)("a", Object.assign({
                href: "https://www.bytescale.com/get-started",
                className: "btn btn--primary-outline"
              }, {
                children: ["Get API Key ", (0, jsx_runtime_namespaceObject.jsx)(RightSvg, {
                  width: 12,
                  className: "ml-2"
                })]
              })), " "]
            })) : (0, jsx_runtime_namespaceObject.jsx)(jsx_runtime_namespaceObject.Fragment, {})]
          }));
        };
        ;
        function isDefined(object) {
          return object !== void 0;
        }
        function assertUnreachable(_x) {
          throw new Error("Didn't expect to get here: ".concat(JSON.stringify(_x)));
        }
        ;
        function UploadButton_slicedToArray(arr, i4) {
          return UploadButton_arrayWithHoles(arr) || UploadButton_iterableToArrayLimit(arr, i4) || UploadButton_unsupportedIterableToArray(arr, i4) || UploadButton_nonIterableRest();
        }
        function UploadButton_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UploadButton_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return UploadButton_arrayLikeToArray(o4, minLen);
          var n3 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n3 === "Object" && o4.constructor)
            n3 = o4.constructor.name;
          if (n3 === "Map" || n3 === "Set")
            return Array.from(o4);
          if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
            return UploadButton_arrayLikeToArray(o4, minLen);
        }
        function UploadButton_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
            arr2[i4] = arr[i4];
          return arr2;
        }
        function UploadButton_iterableToArrayLimit(r3, l4) {
          var t4 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
          if (null != t4) {
            var e3, n3, i4, u4, a4 = [], f4 = true, o4 = false;
            try {
              if (i4 = (t4 = t4.call(r3)).next, 0 === l4) {
                if (Object(t4) !== t4)
                  return;
                f4 = false;
              } else
                for (; !(f4 = (e3 = i4.call(t4)).done) && (a4.push(e3.value), a4.length !== l4); f4 = true)
                  ;
            } catch (r4) {
              o4 = true, n3 = r4;
            } finally {
              try {
                if (!f4 && null != t4["return"] && (u4 = t4["return"](), Object(u4) !== u4))
                  return;
              } finally {
                if (o4)
                  throw n3;
              }
            }
            return a4;
          }
        }
        function UploadButton_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var UploadButton = function UploadButton2(_ref) {
          var className = _ref.className, options2 = _ref.options, onUpload = _ref.onUpload, text = _ref.text;
          var _a;
          var _useState = (0, compat_namespaceObject.useState)(Math.random()), _useState2 = UploadButton_slicedToArray(_useState, 1), fileInputKey = _useState2[0];
          var _useState3 = (0, compat_namespaceObject.useState)("upload-widget__input-".concat(Math.round(Math.random() * 1e6))), _useState4 = UploadButton_slicedToArray(_useState3, 1), inputId = _useState4[0];
          return (0, jsx_runtime_namespaceObject.jsxs)("label", Object.assign({
            className: external_classnames_default()("btn btn--file", className),
            htmlFor: inputId
          }, {
            children: [text, (0, jsx_runtime_namespaceObject.jsx)("input", Object.assign({
              id: inputId,
              name: inputId,
              accept: (_a = options2.mimeTypes) === null || _a === void 0 ? void 0 : _a.join(","),
              type: "file",
              className: "btn--file__input"
            }, options2.multi ? {
              multiple: true
            } : {}, {
              onChange: function onChange(e3) {
                var _a2, _b;
                var input = e3.target;
                var files = Array.from((_b = (_a2 = input.files) !== null && _a2 !== void 0 ? _a2 : void 0) !== null && _b !== void 0 ? _b : []);
                if (files.length > 0) {
                  onUpload(files);
                }
              }
            }), fileInputKey)]
          }));
        };
        ;
        var UploaderWelcomeScreen = function UploaderWelcomeScreen2(_ref) {
          var addFiles = _ref.addFiles, options2 = _ref.options, isImageUploader = _ref.isImageUploader;
          var multi = options2.multi, locale = options2.locale;
          return (0, jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
            children: [(0, jsx_runtime_namespaceObject.jsx)(UploadButton, {
              options: options2,
              text: isImageUploader ? multi ? locale.uploadImageMultiBtn : locale.uploadImageBtn : multi ? locale.uploadFileMultiBtn : locale.uploadFileBtn,
              className: "btn--primary btn--upload",
              onUpload: addFiles
            }), (0, jsx_runtime_namespaceObject.jsx)("p", Object.assign({
              className: "text-secondary mb-0"
            }, {
              children: isImageUploader ? multi ? locale.orDragDropImageMulti : locale.orDragDropImage : multi ? locale.orDragDropFileMulti : locale.orDragDropFile
            }))]
          });
        };
        var ProgressIcon = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploadWidget/components/fileIcons/ProgressIcon.scss");
        ;
        var ProgressIcon_options = {};
        ProgressIcon_options.styleTagTransform = styleTagTransform_default();
        ProgressIcon_options.setAttributes = setAttributesWithoutAttributes_default();
        ProgressIcon_options.insert = function insertIntoTarget(element) {
          if (typeof document !== "undefined") {
            document.head.appendChild(element);
          }
        };
        ProgressIcon_options.domAPI = styleDomAPI_default();
        ProgressIcon_options.insertStyleElement = insertStyleElement_default();
        var ProgressIcon_update = injectStylesIntoStyleTag_default()(ProgressIcon["default"], ProgressIcon_options);
        var fileIcons_ProgressIcon = ProgressIcon["default"] && ProgressIcon["default"].locals ? ProgressIcon["default"].locals : void 0;
        ;
        function ProgressIcon_slicedToArray(arr, i4) {
          return ProgressIcon_arrayWithHoles(arr) || ProgressIcon_iterableToArrayLimit(arr, i4) || ProgressIcon_unsupportedIterableToArray(arr, i4) || ProgressIcon_nonIterableRest();
        }
        function ProgressIcon_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function ProgressIcon_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return ProgressIcon_arrayLikeToArray(o4, minLen);
          var n3 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n3 === "Object" && o4.constructor)
            n3 = o4.constructor.name;
          if (n3 === "Map" || n3 === "Set")
            return Array.from(o4);
          if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
            return ProgressIcon_arrayLikeToArray(o4, minLen);
        }
        function ProgressIcon_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
            arr2[i4] = arr[i4];
          return arr2;
        }
        function ProgressIcon_iterableToArrayLimit(r3, l4) {
          var t4 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
          if (null != t4) {
            var e3, n3, i4, u4, a4 = [], f4 = true, o4 = false;
            try {
              if (i4 = (t4 = t4.call(r3)).next, 0 === l4) {
                if (Object(t4) !== t4)
                  return;
                f4 = false;
              } else
                for (; !(f4 = (e3 = i4.call(t4)).done) && (a4.push(e3.value), a4.length !== l4); f4 = true)
                  ;
            } catch (r4) {
              o4 = true, n3 = r4;
            } finally {
              try {
                if (!f4 && null != t4["return"] && (u4 = t4["return"](), Object(u4) !== u4))
                  return;
              } finally {
                if (o4)
                  throw n3;
              }
            }
            return a4;
          }
        }
        function ProgressIcon_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var progressWheelVanish = 300;
        var progressWheelDelay = 350;
        var ProgressIcon_ProgressIcon = function ProgressIcon2(_ref) {
          var height = _ref.height, progress = _ref.progress, onCompleteImageSource = _ref.onCompleteImageSource, isError = _ref.isError;
          var _useState = (0, compat_namespaceObject.useState)(progress === 1), _useState2 = ProgressIcon_slicedToArray(_useState, 2), completed = _useState2[0], setCompleted = _useState2[1];
          var radius = height / 2;
          var stokeWidth = radius * 2;
          var size = stokeWidth * 2;
          var circumference = radius * 2 * Math.PI;
          var strokeDashoffset = circumference - progress * circumference;
          var strokeDasharray = "".concat(circumference, " ").concat(circumference);
          (0, compat_namespaceObject.useEffect)(function() {
            if (progress === 1 && !completed) {
              var timeout = setTimeout(function() {
                setCompleted(true);
              }, progressWheelDelay - 50);
              return function() {
                return clearTimeout(timeout);
              };
            }
          }, [progress]);
          return (0, jsx_runtime_namespaceObject.jsxs)("span", Object.assign({
            className: "progress-icon__container"
          }, {
            children: [(0, jsx_runtime_namespaceObject.jsxs)("svg", Object.assign({
              className: "progress-icon",
              width: size,
              height: size
            }, {
              children: [(0, jsx_runtime_namespaceObject.jsx)("circle", {
                className: "progress-icon__circle__bg",
                strokeWidth: 0,
                r: size / 2,
                cx: size / 2,
                cy: size / 2,
                style: {
                  opacity: completed ? 0 : 1
                }
              }), (0, jsx_runtime_namespaceObject.jsx)("circle", {
                className: external_classnames_default()("progress-icon__circle", {
                  "progress-icon__circle--error": isError
                }),
                strokeWidth: completed ? 0 : stokeWidth,
                fill: "transparent",
                r: completed ? 0 : radius,
                cx: stokeWidth,
                cy: stokeWidth,
                style: {
                  strokeDasharray,
                  strokeDashoffset,
                  opacity: completed ? 0 : 1
                }
              })]
            })), (0, jsx_runtime_namespaceObject.jsx)("span", {
              className: external_classnames_default()("progress-icon__thumbnail", {
                "progress-icon__thumbnail--hidden": !completed
              }),
              style: {
                backgroundImage: "url(".concat(onCompleteImageSource, ")")
              }
            })]
          }));
        };
        ;
        var Document = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMjIwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNjAgMjIwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNMTAwIDBIMTVDNyAwIDAgNyAwIDE1djE5MGMwIDggNyAxNSAxNSAxNWgxMzBjOCAwIDE1LTcgMTUtMTVWNjBsLTM1LTI1LTI1LTM1eiIgc3R5bGU9ImZpbGw6IzQyODVmNCIvPjxwYXRoIGQ9Ik00MCAxNjBoODB2LTEwSDQwdjEwem0wIDIwaDYwdi0xMEg0MHYxMHptMC03MHYxMGg4MHYtMTBINDB6bTAgMzBoODB2LTEwSDQwdjEweiIgc3R5bGU9ImZpbGw6I2YxZjFmMSIvPjxwYXRoIGQ9Ik0xMDAgMHY0NWMwIDggNyAxNSAxNSAxNWg0NUwxMDAgMHoiIHN0eWxlPSJmaWxsOiNhMWMyZmEiLz48L3N2Zz4K";
        ;
        var Spreadsheet = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMjEwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNjAgMjEwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNXoiIHN0eWxlPSJmaWxsOiM0M2EwNDciLz48cGF0aCBkPSJNMTYwIDUwaC01MFYwbDUwIDUweiIgc3R5bGU9ImZpbGw6I2M4ZTZjOSIvPjxwYXRoIGQ9Im0xMTAgNTAgNTAgNTBWNTBoLTUweiIgc3R5bGU9ImZpbGw6IzJlN2QzMiIvPjxwYXRoIGQ9Ik0xMTUgMTAwSDM1djcwaDkwdi03MGgtMTB6bS03MCAxMGgyMHYxMEg0NXYtMTB6bTAgMjBoMjB2MTBINDV2LTEwem0wIDIwaDIwdjEwSDQ1di0xMHptNzAgMTBINzV2LTEwaDQwdjEwem0wLTIwSDc1di0xMGg0MHYxMHptMC0yMEg3NXYtMTBoNDB2MTB6IiBzdHlsZT0iZmlsbDojZThmNWU5Ii8+PC9zdmc+Cg==";
        ;
        var Slideshow = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAxLjAwMDAwMCAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNVoiIGZpbGw9IiNEMzUyMzAiLz48cGF0aCBmaWxsPSIjRkY4NDY0IiBkPSJNMTYwIDUwaC01MFYweiIvPjxwYXRoIGZpbGw9IiNCNDQyMjMiIGQ9Im0xMTAgNTAgNTAgNTBWNTB6Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNhKSI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTIxLjY1OSA5NEgzOC4zMzNDMzMuNzM3IDk0IDMwIDk3LjcyMyAzMCAxMDIuM3Y0NS42NWMwIDQuNTc3IDMuNzM3IDguMyA4LjMzMyA4LjNINzUuODN2OC4zYzAgMS45NTktMS42MTMgMy45NjctNC40MjUgNS41MjQtMy4yNDIgMS43ODgtNy41OTEgMi43NzYtMTIuMjM3IDIuNzc2VjE3N2g0MS42NjR2LTQuMTVjLTQuNjYzIDAtOS4wMTItLjk4NC0xMi4yMzctMi43NzYtMi44MTItMS41NTctNC40MjUtMy41NjUtNC40MjUtNS41MjR2LTguM2gzNy40OTdjNC41OTYgMCA4LjMzMy0zLjcyMyA4LjMzMy04LjNWMTAyLjNjMC00LjU3Ny0zLjczNy04LjMtOC4zMzMtOC4zaC0uMDA4Wm0tMzYuNDggNzguODVINzQuODE3YzMuMjQxLTIuMTkxIDUuMTgzLTUuMDg0IDUuMTgzLTguMyAwIDMuMjE2IDEuOTQyIDYuMTA5IDUuMTgzIDguM2gtLjAwNFpNMzguMzMzIDEwMi4zaDgzLjMyNnYzNy4zNUgzOC4zMzNWMTAyLjNjLS4wMTMgMCAwIDAgMCAwWm0wIDQ1LjY1di00LjE1aDgzLjMyNnY0LjE1SDM4LjMzM1oiLz48cGF0aCBkPSJNNjcuOTg2IDEzNi43Yy4zMzYuMi43MTMuMyAxLjA4NS4zLjMxMSAwIC42MzQtLjA3Ni45MzMtLjIxMmwyNC44NTctMTJBMS45OTMgMS45OTMgMCAwIDAgOTYgMTIzYzAtLjc1Mi0uNDQtMS40NTItMS4xNC0xLjc4OGwtMjQuODU2LTEyYTIuMTQ1IDIuMTQ1IDAgMCAwLTIuMDIyLjA4OEExLjk5MyAxLjk5MyAwIDAgMCA2NyAxMTF2MjRjMCAuNjg4LjM3NyAxLjMzNi45ODIgMS43aC4wMDRabTMuMTYxLTIyLjQ2NEw4OS4yOTcgMTIzbC0xOC4xNSA4Ljc2NFYxMTQuMjM2WiIvPjwvZz48L2c+PC9nPjwvc3ZnPgo=";
        ;
        var Archive = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAxLjAwMDAwMCAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNVoiIGZpbGw9IiM4NkFCRUIiLz48cGF0aCBmaWxsPSIjQzRENEYxIiBkPSJNMTYwIDUwaC01MFYweiIvPjxwYXRoIGZpbGw9IiM3MThGQzMiIGQ9Im0xMTAgNTAgNTAgNTBWNTB6Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNhKSI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMzkgOTEuNjkxaDE4LjMzOHY5LjE2OUgzOXpNNDguMTY5IDEwMC44NmgxOC4zMzh2OS4xNjlINDguMTY5eiIvPjxwYXRoIGQ9Ik00OC4xNjkgMTAwLjg2aDkuMTY5djE4LjMzOGgtOS4xNjl6TTM5IDczLjM1M2gxOC4zMzh2OS4xNjlIMzl6TTQ4LjE2OSA4Mi41MjJoMTguMzM4djkuMTY5SDQ4LjE2OXpNMzkgNTUuMDE1aDE4LjMzOHY5LjE2OUgzOXpNNDguMTY5IDY0LjE4NGgxOC4zMzh2OS4xNjlINDguMTY5ek0zOSAzNi42NzZoMTguMzM4djkuMTY5SDM5ek00OC4xNjkgNDUuODQ2aDE4LjMzOHY5LjE2OUg0OC4xNjl6TTM5IDE4LjMzOGgxOC4zMzh2OS4xNjlIMzl6TTQ4LjE2OSAyNy41MDdoMTguMzM4djkuMTY5SDQ4LjE2OXpNMzkgMGgxOC4zMzh2OS4xNjlIMzl6TTQ4LjE2OSA5LjE2OWgxOC4zMzh2OS4xNjlINDguMTY5eiIvPjxwYXRoIGQ9Ik01Mi43NTQgMTE3LjAzYzcuNTk2IDAgMTMuNzUzIDYuMTU3IDEzLjc1MyAxMy43NTN2MTMuNzU0YTkuMTcgOS4xNyAwIDAgMS05LjE2OSA5LjE2OUg0OC4xN2E5LjE3IDkuMTcgMCAwIDEtOS4xNjktOS4xN3YtMTMuNzUzYzAtNy41OTYgNi4xNTgtMTMuNzU0IDEzLjc1NC0xMy43NTRabTAgOS4xNjlhNC41ODUgNC41ODUgMCAwIDAtNC41ODUgNC41ODR2OS4xN2E0LjU4NSA0LjU4NSAwIDEgMCA5LjE3IDB2LTkuMTdhNC41ODUgNC41ODUgMCAwIDAtNC41ODUtNC41ODRaIi8+PC9nPjwvZz48L2c+PC9zdmc+Cg==";
        ;
        var Code = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0xNDUgMjEwSDE1Yy04LjMgMC0xNS02LjctMTUtMTVWMTVDMCA2LjcgNi43IDAgMTUgMGg5NWw1MCA1MHYxNDVjMCA4LjMtNi43IDE1LTE1IDE1WiIgZmlsbD0iIzQwNzREMSIvPjxwYXRoIGZpbGw9IiM4RkIwRUEiIGQ9Ik0xNjAgNTBoLTUwVjB6Ii8+PHBhdGggZmlsbD0iIzQwNjM5RSIgZD0ibTExMCA1MCA1MCA1MFY1MHoiLz48cGF0aCBkPSJNNjkuNjUxIDE2MC4wNjN2LTUuNDE3SDY0LjJjLTMuNDc0IDAtNS43NjYtLjUwMy02Ljg3NC0xLjUwOS0xLjEwOS0xLjAwNi0xLjY2My0yLjIxNy0xLjY2My0zLjYzNCAwLTEuMDUyLjIyOC0yLjY3NC42ODYtNC44NjlsLjg5MS00LjAxMWMuNDgtMi4xNDkuNzItMy44ODYuNzItNS4yMTIgMC0xLjUwOC0uMjU3LTIuODQ1LS43NzEtNC4wMTEtLjUxNS0xLjE2Ni0xLjI4LTIuMjk3LTIuMjk4LTMuMzk0LTEuMDE3LTEuMDk3LTIuNjExLTIuMjE3LTQuNzgyLTMuMzYgMi4xNzEtMS4xNDMgMy43NjUtMi4yNjkgNC43ODItMy4zNzcgMS4wMTgtMS4xMDkgMS43ODMtMi4yNCAyLjI5OC0zLjM5NS41MTQtMS4xNTQuNzcxLTIuNDg1Ljc3MS0zLjk5NCAwLTEuMzI2LS4yNC0zLjA3NC0uNzItNS4yNDZsLS44OTEtNC4wMTFjLS40NTgtMi4xNzItLjY4Ni0zLjc3Mi0uNjg2LTQuOCAwLTEuNDYzLjU2LTIuNjkyIDEuNjgtMy42ODYgMS4xMi0uOTk0IDMuNDA2LTEuNDkxIDYuODU3LTEuNDkxaDUuNDUxVjg5LjE2aC01LjUyYy02LjQyMiAwLTEwLjU2IDEuMDQtMTIuNDExIDMuMTItMS44NTEgMi4wOC0yLjc3NyA0LjQxMS0yLjc3NyA2Ljk5NCAwIDEuMzcyLjE3MSAyLjg2OS41MTQgNC40OTJsLjY1MiAyLjgxMS41ODIgMy4wNTIuNDQ2IDEuODE3Yy4xNi44LjI0IDEuNjIzLjI0IDIuNDY4IDAgMi4yODYtLjc0MyA0LjE4OS0yLjIyOCA1LjcwOS0xLjQ4NiAxLjUyLTQuMDU4IDIuMjgtNy43MTUgMi4yOEgzOC4yOHY1LjQ1MWgzLjE1NGMzLjcwMyAwIDYuMjg2Ljc3MiA3Ljc0OSAyLjMxNSAxLjQ2MyAxLjU0MiAyLjE5NCAzLjQxMSAyLjE5NCA1LjYwNSAwIC44LS4wOCAxLjYzNS0uMjQgMi41MDNsLS40NDYgMS44ODYtLjU4MiAzLjA1MS0uNjUyIDIuODEyYy0uMzQzIDEuNi0uNTE0IDMuMDg1LS41MTQgNC40NTcgMCAyLjYwNi45MjYgNC45MzcgMi43NzcgNi45OTQgMS44NTEgMi4wNTcgNS45ODkgMy4wODYgMTIuNDExIDMuMDg2aDUuNTJabTI3LjI0NiAwYzYuNDIzIDAgMTAuNTY2LTEuMDIzIDEyLjQyOS0zLjA2OSAxLjg2My0yLjA0NSAyLjc5NC00LjM3MSAyLjc5NC02Ljk3NyAwLTEuMzcxLS4xODMtMi44NjgtLjU0OS00LjQ5MWwtLjY1MS0yLjgxMi0uNTgzLTMuMDUxLS40MTEtMS44ODZjLS4xODMtLjgtLjI3NS0xLjYtLjI3NS0yLjQgMC0yLjI4Ni43NDktNC4xOTQgMi4yNDYtNS43MjYgMS40OTctMS41MzEgNC4wNzQtMi4yOTcgNy43MzItMi4yOTdoMy4xMnYtNS40NTFoLTMuMTJjLTMuNzAzIDAtNi4yOTItLjc3Mi03Ljc2Ni0yLjMxNC0xLjQ3NC0xLjU0My0yLjIxMi0zLjQtMi4yMTItNS41NzIgMC0uODIzLjA5Mi0xLjY4LjI3NS0yLjU3MWwuNDExLTEuODE3LjU4My0zLjA1Mi42NTEtMi44MTFjLjM2Ni0xLjYuNTQ5LTMuMDk3LjU0OS00LjQ5MiAwLTIuNTgzLS45MzEtNC45MTQtMi43OTQtNi45OTRzLTYuMDA2LTMuMTItMTIuNDI5LTMuMTJoLTUuNTJ2NS40ODZoNS40NTJjMy40NzQgMCA1Ljc2NS40OTcgNi44NzQgMS40OTEgMS4xMDguOTk0IDEuNjYzIDIuMjEyIDEuNjYzIDMuNjUyIDAgMS4wNTEtLjIyOSAyLjY2Mi0uNjg2IDQuODM0bC0uODkxIDQuMDExYy0uNDM1IDIuMTcyLS42NTIgMy45Mi0uNjUyIDUuMjQ2IDAgMS41MDkuMjQ2IDIuODQuNzM3IDMuOTk0LjQ5MiAxLjE1NSAxLjI0NiAyLjI4NiAyLjI2MyAzLjM5NSAxLjAxNyAxLjEwOCAyLjYxMiAyLjIzNCA0Ljc4MyAzLjM3Ny0yLjE3MSAxLjE0My0zLjc2NiAyLjI2My00Ljc4MyAzLjM2LTEuMDE3IDEuMDk3LTEuNzcxIDIuMjI4LTIuMjYzIDMuMzk0LS40OTEgMS4xNjYtLjczNyAyLjUwMy0uNzM3IDQuMDExIDAgMS4zMjYuMjE3IDMuMDYzLjY1MiA1LjIxMmwuODkxIDQuMDExYy40NTcgMi4xOTUuNjg2IDMuODA2LjY4NiA0LjgzNSAwIDEuNDQtLjU1NSAyLjY2Mi0xLjY2MyAzLjY2OC0xLjEwOSAxLjAwNi0zLjQgMS41MDktNi44NzQgMS41MDloLTUuNDUydjUuNDE3aDUuNTJaIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPgo=";
        ;
        var svgs_Image = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAxLjAwMDAwMCAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNVoiIGZpbGw9IiM0ZDhhZmEiLz48cGF0aCBmaWxsPSIjOTViNmZmIiBkPSJNMTYwIDUwaC01MFYweiIvPjxwYXRoIGZpbGw9IiMzZTcxZTQiIGQ9Im0xMTAgNTAgNTAgNTBWNTB6Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNhKSI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTI3IDE3MUgzM3YtMTguODU3bDI3LjExOC0zMy4wNDkgMzkuNzExIDMzLjA0OUwxMjcgMTQwLjI4OXpNMTMxIDExMC41YzAgOC4wMDktNi40OTEgMTQuNS0xNC41IDE0LjVzLTE0LjUtNi40OTEtMTQuNS0xNC41UzEwOC40OTEgOTYgMTE2LjUgOTZzMTQuNSA2LjQ5MSAxNC41IDE0LjVaIi8+PC9nPjwvZz48L2c+PC9zdmc+Cg==";
        ;
        var Video = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAxLjAwMDAwMCAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNVoiIGZpbGw9IiM4QzUwRTciLz48cGF0aCBmaWxsPSIjQjM4MEZGIiBkPSJNMTYwIDUwaC01MFYweiIvPjxwYXRoIGZpbGw9IiM3QzNGRDgiIGQ9Im0xMTAgNTAgNTAgNTBWNTB6Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNhKSI+PHBhdGggZD0iTTEyNi45NTggMTA0SDMzLjA0MkEyLjA0MiAyLjA0MiAwIDAgMCAzMSAxMDYuMDMxdjYwLjkzOGMwIDEuMTE3LjkxOSAyLjAzMSAyLjA0MiAyLjAzMWg5My45MTZhMi4wNDIgMi4wNDIgMCAwIDAgMi4wNDItMi4wMzFWMTA2LjAzYTIuMDQyIDIuMDQyIDAgMCAwLTIuMDQyLTIuMDMxWm0tNzkuNjI1IDQuMDYzdjguMTI0aC04LjE2NnYtOC4xMjRoOC4xNjZabS04LjE2NiAzNi41NjJoOC4xNjZ2OC4xMjVoLTguMTY2di04LjEyNVptMC00LjA2M3YtOC4xMjVoOC4xNjZ2OC4xMjVoLTguMTY2Wm0wLTEyLjE4N3YtOC4xMjVoOC4xNjZ2OC4xMjVoLTguMTY2Wm0wIDM2LjU2M3YtOC4xMjVoOC4xNjZ2OC4xMjVoLTguMTY2Wm02NS4zMzMtNC4wNjNoLTQ5di00OC43NWg0OXY0OC43NVptMTYuMzMzLTguMTI1aC04LjE2NnYtOC4xMjVoOC4xNjZ2OC4xMjVabTAtMTIuMTg4aC04LjE2NnYtOC4xMjVoOC4xNjZ2OC4xMjVabTAtMTIuMTg3aC04LjE2NnYtOC4xMjVoOC4xNjZ2OC4xMjVabS04LjE2NiAzNi41NjN2LTguMTI1aDguMTY2djguMTI1aC04LjE2NlptOC4xNjYtNDguNzVoLTguMTY2di04LjEyNmg4LjE2NnY4LjEyNloiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L2c+PC9zdmc+Cg==";
        ;
        var Audio = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAxLjAwMDAwMCAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNVoiIGZpbGw9IiMwNzkxRkYiLz48cGF0aCBmaWxsPSIjQjNEREZGIiBkPSJNMTYwIDUwaC01MFYweiIvPjxwYXRoIGZpbGw9IiMwQTdDRDkiIGQ9Im0xMTAgNTAgNTAgNTBWNTB6Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNhKSI+PHBhdGggZD0iTTg5LjQwNSA5NS4wMWM5LjQ4IDIuMDQ1IDE3LjI4MSA2LjkwNCAyMy40MDcgMTQuNTc4IDYuMTI1IDcuNjc0IDkuMTg4IDE2LjQ4IDkuMTg4IDI2LjQxNyAwIDkuOTM3LTMuMDYzIDE4Ljc0My05LjE4OCAyNi40MTYtNi4xMjYgNy42NzQtMTMuOTI4IDEyLjUzNC0yMy40MDcgMTQuNTc5di05LjY0OWM2Ljg1NC0yLjA0NSAxMi40MzEtNS45MTggMTYuNzM0LTExLjYxOCA0LjMwMi01LjcgNi40NTQtMTIuMjc4IDYuNDU0LTE5LjczM3MtMi4xNTItMTQuMDMzLTYuNDU0LTE5LjczM2MtNC4zMDMtNS43LTkuODgtOS41NzMtMTYuNzM0LTExLjYxOFY5NXYuMDFabTExLjU5MiA0MWMwIDguNzctMy44NjQgMTUuMDU1LTExLjU5MiAxOC44NTN2LTM3LjcxMmMzLjIwOCAxLjYwOSA1Ljk0MiA0LjI0IDguMjA0IDcuODk1IDIuMjYxIDMuNjU1IDMuMzkyIDcuMzA5IDMuMzkyIDEwLjk2M2gtLjAwNFpNMzggMTIxLjk3N2gxOC41OTFsMjMuNDA3LTIzLjQ2djc0Ljk3OWwtMjMuNDA3LTIzLjQ2SDM4di0yOC4wNjQuMDA1WiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvZz48L3N2Zz4K";
        ;
        var Unknown = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0xNDUgMjEwSDE1Yy04LjMgMC0xNS02LjctMTUtMTVWMTVDMCA2LjcgNi43IDAgMTUgMGg5NWw1MCA1MHYxNDVjMCA4LjMtNi43IDE1LTE1IDE1WiIgZmlsbD0iI2M5ZGNmZCIvPjxwYXRoIGZpbGw9IiNFQ0YzRkYiIGQ9Ik0xNjAgNTBoLTUwVjB6Ii8+PHBhdGggZmlsbD0iI2JjZDRmZSIgZD0ibTExMCA1MCA1MCA1MFY1MHoiLz48L2c+PC9zdmc+Cg==";
        ;
        function getFileIconImageSource(fileName, mime) {
          var _a;
          var fn2 = fileName.toLowerCase().trim();
          var result = fileExtensionIcons.find(function(x4) {
            return x4.extensions.some(function(ext) {
              return fn2.endsWith(ext);
            }) || x4.mime.some(function(m3) {
              return mime.startsWith(m3);
            });
          });
          return (_a = result === null || result === void 0 ? void 0 : result.icon) !== null && _a !== void 0 ? _a : Unknown;
        }
        var fileExtensionIcons = [{
          icon: Document,
          extensions: [".docx", ".doc", ".txt", ".md", ".markdown", ".mkdown", ".mkdn", ".pdf"],
          mime: ["application/x-abiword", "application/msword", "application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
        }, {
          icon: Spreadsheet,
          extensions: [".xlsx", ".xls", ".csv", ".tsv", ".psv"],
          mime: ["application/ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"]
        }, {
          icon: Slideshow,
          extensions: [".pptx", ".ppt"],
          mime: ["application/vnd.apple.keynote", "application/ms-powerpoint", "application/vnd.openxmlformats-officedocument.presentationml.presentation"]
        }, {
          icon: Archive,
          extensions: [".zip", ".tar", ".tar.gz", ".rar"],
          mime: []
        }, {
          icon: svgs_Image,
          extensions: [],
          mime: ["image/"]
        }, {
          icon: Video,
          extensions: [],
          mime: ["video/"]
        }, {
          icon: Audio,
          extensions: [],
          mime: ["audio/"]
        }, {
          icon: Code,
          extensions: [".json", ".js", ".ts", ".htm", ".html", ".css", ".sass"],
          mime: []
        }];
        var SubmittedFileComponent = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploadWidget/components/files/SubmittedFileComponent.scss");
        ;
        var SubmittedFileComponent_options = {};
        SubmittedFileComponent_options.styleTagTransform = styleTagTransform_default();
        SubmittedFileComponent_options.setAttributes = setAttributesWithoutAttributes_default();
        SubmittedFileComponent_options.insert = function insertIntoTarget(element) {
          if (typeof document !== "undefined") {
            document.head.appendChild(element);
          }
        };
        SubmittedFileComponent_options.domAPI = styleDomAPI_default();
        SubmittedFileComponent_options.insertStyleElement = insertStyleElement_default();
        var SubmittedFileComponent_update = injectStylesIntoStyleTag_default()(SubmittedFileComponent["default"], SubmittedFileComponent_options);
        var files_SubmittedFileComponent = SubmittedFileComponent["default"] && SubmittedFileComponent["default"].locals ? SubmittedFileComponent["default"].locals : void 0;
        ;
        var svgs_Error = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiNkMjNmNGQiIGN4PSIxNSIgY3k9IjE1IiByPSIxNSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuNiA3LjYpIiBmaWxsPSIjRkZGIj48cmVjdCB0cmFuc2Zvcm09InJvdGF0ZSgtNDUgNy40MjUgNy40MjUpIiB4PSI1LjkyNSIgeT0iLTEuNTc1IiB3aWR0aD0iMyIgaGVpZ2h0PSIxOCIgcng9IjEuNSIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDQ1IDcuNDI1IDcuNDI1KSIgeD0iNS45MjUiIHk9Ii0xLjU3NSIgd2lkdGg9IjMiIGhlaWdodD0iMTgiIHJ4PSIxLjUiLz48L2c+PC9nPjwvc3ZnPgo=";
        ;
        var Link = function Link2(_ref) {
          var prefix = _ref.prefix, suffix = _ref.suffix, text = _ref.text, url = _ref.url;
          return (0, jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
            children: [prefix, " ", (0, jsx_runtime_namespaceObject.jsx)("a", Object.assign({
              href: url,
              target: "_blank",
              rel: "noopener"
            }, {
              children: text
            })), " ", suffix]
          });
        };
        function replaceFirstLink(text) {
          var matches = /^(.*?)(https?:\/\/[^\s)]+)(.*?)$/.exec(text);
          if (matches === null) {
            return void 0;
          }
          var prefix = matches[1];
          var url = matches[2];
          var suffix = matches[3];
          return (0, jsx_runtime_namespaceObject.jsx)(Link, {
            text: url,
            url,
            prefix,
            suffix
          });
        }
        function replaceUploadIo(text) {
          var find = "bytescale";
          var index = text.toLowerCase().indexOf(find);
          if (index === -1) {
            return void 0;
          }
          return (0, jsx_runtime_namespaceObject.jsx)(Link, {
            text: "Bytescale",
            url: "https://www.bytescale.com/pricing",
            prefix: text.substring(0, index),
            suffix: text.substring(index + find.length)
          });
        }
        var Hypermedia = function Hypermedia2(_ref2) {
          var text = _ref2.text;
          var _a, _b;
          return (_b = (_a = replaceFirstLink(text)) !== null && _a !== void 0 ? _a : replaceUploadIo(text)) !== null && _b !== void 0 ? _b : (0, jsx_runtime_namespaceObject.jsx)(jsx_runtime_namespaceObject.Fragment, {
            children: text
          });
        };
        ;
        function SubmittedFileComponent_slicedToArray(arr, i4) {
          return SubmittedFileComponent_arrayWithHoles(arr) || SubmittedFileComponent_iterableToArrayLimit(arr, i4) || SubmittedFileComponent_unsupportedIterableToArray(arr, i4) || SubmittedFileComponent_nonIterableRest();
        }
        function SubmittedFileComponent_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function SubmittedFileComponent_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return SubmittedFileComponent_arrayLikeToArray(o4, minLen);
          var n3 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n3 === "Object" && o4.constructor)
            n3 = o4.constructor.name;
          if (n3 === "Map" || n3 === "Set")
            return Array.from(o4);
          if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
            return SubmittedFileComponent_arrayLikeToArray(o4, minLen);
        }
        function SubmittedFileComponent_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
            arr2[i4] = arr[i4];
          return arr2;
        }
        function SubmittedFileComponent_iterableToArrayLimit(r3, l4) {
          var t4 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
          if (null != t4) {
            var e3, n3, i4, u4, a4 = [], f4 = true, o4 = false;
            try {
              if (i4 = (t4 = t4.call(r3)).next, 0 === l4) {
                if (Object(t4) !== t4)
                  return;
                f4 = false;
              } else
                for (; !(f4 = (e3 = i4.call(t4)).done) && (a4.push(e3.value), a4.length !== l4); f4 = true)
                  ;
            } catch (r4) {
              o4 = true, n3 = r4;
            } finally {
              try {
                if (!f4 && null != t4["return"] && (u4 = t4["return"](), Object(u4) !== u4))
                  return;
              } finally {
                if (o4)
                  throw n3;
              }
            }
            return a4;
          }
        }
        function SubmittedFileComponent_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var removalAnimationTime = 1e3;
        var SubmittedFileComponent_SubmittedFileComponent = function SubmittedFileComponent2(_ref) {
          var file = _ref.file, fileCount = _ref.fileCount, remove = _ref.remove, locale = _ref.locale, showRemoveButton = _ref.showRemoveButton;
          var _a, _b;
          var _useState = (0, compat_namespaceObject.useState)(false), _useState2 = SubmittedFileComponent_slicedToArray(_useState, 2), isDelayedRemove = _useState2[0], setIsDelayedRemove = _useState2[1];
          var delayedRemove = function delayedRemove2() {
            setIsDelayedRemove(true);
          };
          (0, compat_namespaceObject.useEffect)(function() {
            if (!isDelayedRemove) {
              return;
            }
            var timeout = setTimeout(function() {
              remove();
            }, removalAnimationTime);
            return function() {
              return clearTimeout(timeout);
            };
          }, [isDelayedRemove]);
          var progressMargin = 0.03;
          var thumbnail = Unknown;
          var progress = 0;
          var fileName;
          var fileMessage;
          switch (file.type) {
            case "preprocessing":
              progress = 0;
              fileName = file.file.name;
              fileMessage = locale.processingFile;
              break;
            case "uploading":
              progress = Math.min(file.progress, 1 - progressMargin);
              fileName = file.file.name;
              break;
            case "uploaded":
              progress = 1;
              thumbnail = getFileIconImageSource(file.uploadedFile.file.name, file.uploadedFile.mime);
              fileName = file.uploadedFile.file.name;
              break;
            case "failed":
              progress = 1;
              thumbnail = svgs_Error;
              fileMessage = (_b = (_a = file.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : "Unexpected error occurred.";
              fileName = file.file.name;
              break;
            default:
              assertUnreachable(file);
          }
          return (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
            className: external_classnames_default()("upload-widget__submitted-file", {
              "upload-widget__submitted-file--loners": fileCount <= 2
            })
          }, {
            children: (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
              className: "upload-widget__submitted-file__container"
            }, {
              children: (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
                className: "upload-widget__submitted-file__inner"
              }, {
                children: [(0, jsx_runtime_namespaceObject.jsx)(ProgressIcon_ProgressIcon, {
                  progress: Math.max(progressMargin, progress),
                  onCompleteImageSource: thumbnail,
                  height: 15,
                  isError: file.type === "failed"
                }), " ", (0, jsx_runtime_namespaceObject.jsxs)("span", Object.assign({
                  className: "upload-widget__submitted-file__text"
                }, {
                  children: [(0, jsx_runtime_namespaceObject.jsx)("span", Object.assign({
                    className: "upload-widget__submitted-file__name",
                    title: fileName
                  }, {
                    children: fileName
                  })), fileMessage !== void 0 && (0, jsx_runtime_namespaceObject.jsx)("span", Object.assign({
                    className: "upload-widget__submitted-file__message"
                  }, {
                    children: (0, jsx_runtime_namespaceObject.jsx)(Hypermedia, {
                      text: fileMessage
                    })
                  }))]
                })), isDelayedRemove ? (0, jsx_runtime_namespaceObject.jsx)("span", Object.assign({
                  className: "upload-widget__submitted-file__action upload-widget__submitted-file__action--performed"
                }, {
                  children: file.type === "uploading" ? locale.cancelBtnClicked : locale.removeBtnClicked
                })) : (0, jsx_runtime_namespaceObject.jsx)(jsx_runtime_namespaceObject.Fragment, {
                  children: (showRemoveButton || file.type === "uploading") && (0, jsx_runtime_namespaceObject.jsx)("a", Object.assign({
                    className: "upload-widget__submitted-file__action",
                    href: "#remove",
                    onClick: function onClick(e3) {
                      e3.preventDefault();
                      delayedRemove();
                    }
                  }, {
                    children: file.type === "uploading" ? locale.cancelBtn : locale.removeBtn
                  }))
                })]
              }))
            }))
          }));
        };
        var UploaderMainScreen = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploadWidget/screens/UploaderMainScreen.scss");
        ;
        var UploaderMainScreen_options = {};
        UploaderMainScreen_options.styleTagTransform = styleTagTransform_default();
        UploaderMainScreen_options.setAttributes = setAttributesWithoutAttributes_default();
        UploaderMainScreen_options.insert = function insertIntoTarget(element) {
          if (typeof document !== "undefined") {
            document.head.appendChild(element);
          }
        };
        UploaderMainScreen_options.domAPI = styleDomAPI_default();
        UploaderMainScreen_options.insertStyleElement = insertStyleElement_default();
        var UploaderMainScreen_update = injectStylesIntoStyleTag_default()(UploaderMainScreen["default"], UploaderMainScreen_options);
        var screens_UploaderMainScreen = UploaderMainScreen["default"] && UploaderMainScreen["default"].locals ? UploaderMainScreen["default"].locals : void 0;
        ;
        var UploaderMainScreen_UploaderMainScreen = function UploaderMainScreen2(_ref) {
          var addFiles = _ref.addFiles, submittedFiles = _ref.submittedFiles, uploadedFiles = _ref.uploadedFiles, options2 = _ref.options, _remove = _ref.remove, finalize = _ref.finalize, isImageUploader = _ref.isImageUploader;
          var finishedUploading = submittedFiles.every(function(x4) {
            return x4.type !== "uploading";
          });
          var canFinish = finishedUploading && uploadedFiles.length > 0;
          var locale = options2.locale;
          var hasButtons = options2.multi || options2.showFinishButton;
          return (
            // Div required to break-out of flex-box layout.
            (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
              className: "upload-widget__main-screen"
            }, {
              children: [(0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
                className: "upload-widget__main-screen__file-list"
              }, {
                children: (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
                  className: "upload-widget__main-screen__file-list__inner"
                }, {
                  children: submittedFiles.map(function(file) {
                    return (0, jsx_runtime_namespaceObject.jsx)(SubmittedFileComponent_SubmittedFileComponent, {
                      file,
                      fileCount: submittedFiles.length,
                      locale,
                      remove: function remove() {
                        return _remove(file.fileIndex);
                      },
                      showRemoveButton: options2.showRemoveButton
                    }, file.fileIndex);
                  })
                }))
              })), hasButtons && (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
                className: "upload-widget__controls"
              }, {
                children: [options2.multi && (options2.maxFileCount === void 0 || submittedFiles.length < options2.maxFileCount ? (0, jsx_runtime_namespaceObject.jsx)(UploadButton, {
                  options: options2,
                  text: isImageUploader ? locale.addAnotherImageBtn : locale.addAnotherFileBtn,
                  onUpload: addFiles
                }) : (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
                  className: "upload-widget__main-screen__info"
                }, {
                  children: [isImageUploader ? locale.maxImagesReachedPrefix : locale.maxFilesReachedPrefix, " ", options2.maxFileCount]
                }))), options2.showFinishButton && (0, jsx_runtime_namespaceObject.jsx)("a", Object.assign({
                  href: "#done",
                  className: external_classnames_default()("btn btn--primary", {
                    disabled: !canFinish
                  }),
                  onClick: function onClick(e3) {
                    e3.preventDefault();
                    if (canFinish) {
                      finalize();
                    }
                  }
                }, {
                  children: finishedUploading ? (0, jsx_runtime_namespaceObject.jsxs)("span", Object.assign({
                    className: "vcenter hcenter"
                  }, {
                    children: [locale.finishBtn, " ", locale.finishBtnIcon && (0, jsx_runtime_namespaceObject.jsx)(RightSvg, {
                      width: 12,
                      className: "ml-2"
                    })]
                  })) : locale.submitBtnLoading
                }))]
              }))]
            }))
          );
        };
        ;
        function isUploadedFile(file) {
          return file.type === "uploaded";
        }
        function isPendingFile(file) {
          return file.type === "preprocessing" || file.type === "uploading";
        }
        function isFailedFile(file) {
          return file.type === "failed";
        }
        ;
        function UseDragDrop_slicedToArray(arr, i4) {
          return UseDragDrop_arrayWithHoles(arr) || UseDragDrop_iterableToArrayLimit(arr, i4) || UseDragDrop_unsupportedIterableToArray(arr, i4) || UseDragDrop_nonIterableRest();
        }
        function UseDragDrop_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UseDragDrop_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return UseDragDrop_arrayLikeToArray(o4, minLen);
          var n3 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n3 === "Object" && o4.constructor)
            n3 = o4.constructor.name;
          if (n3 === "Map" || n3 === "Set")
            return Array.from(o4);
          if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
            return UseDragDrop_arrayLikeToArray(o4, minLen);
        }
        function UseDragDrop_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
            arr2[i4] = arr[i4];
          return arr2;
        }
        function UseDragDrop_iterableToArrayLimit(r3, l4) {
          var t4 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
          if (null != t4) {
            var e3, n3, i4, u4, a4 = [], f4 = true, o4 = false;
            try {
              if (i4 = (t4 = t4.call(r3)).next, 0 === l4) {
                if (Object(t4) !== t4)
                  return;
                f4 = false;
              } else
                for (; !(f4 = (e3 = i4.call(t4)).done) && (a4.push(e3.value), a4.length !== l4); f4 = true)
                  ;
            } catch (r4) {
              o4 = true, n3 = r4;
            } finally {
              try {
                if (!f4 && null != t4["return"] && (u4 = t4["return"](), Object(u4) !== u4))
                  return;
              } finally {
                if (o4)
                  throw n3;
              }
            }
            return a4;
          }
        }
        function UseDragDrop_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        function useDragDrop(acceptFiles) {
          var _useState = (0, compat_namespaceObject.useState)(false), _useState2 = UseDragDrop_slicedToArray(_useState, 2), isDragging = _useState2[0], setIsDragging = _useState2[1];
          var handleDragEnter = function handleDragEnter2(e3) {
            e3.preventDefault();
            e3.stopPropagation();
            setIsDragging(true);
          };
          var handleDragLeave = function handleDragLeave2(e3) {
            var _a;
            e3.preventDefault();
            e3.stopPropagation();
            if (e3.relatedTarget !== null && ((_a = e3 === null || e3 === void 0 ? void 0 : e3.currentTarget) === null || _a === void 0 ? void 0 : _a.contains(e3.relatedTarget)) === true) {
              return;
            }
            setIsDragging(false);
          };
          var handleDragOver = function handleDragOver2(e3) {
            e3.preventDefault();
            e3.stopPropagation();
            if (e3.dataTransfer !== null) {
              e3.dataTransfer.dropEffect = "copy";
            }
          };
          var handleDrop = function handleDrop2(e3) {
            e3.preventDefault();
            e3.stopPropagation();
            setIsDragging(false);
            if (e3.dataTransfer !== null) {
              var files = Array.from(e3.dataTransfer.files);
              if (files.length > 0) {
                acceptFiles(files);
              }
            }
          };
          return {
            isDragging,
            onDrop: function onDrop(e3) {
              return handleDrop(e3);
            },
            onDragOver: function onDragOver(e3) {
              return handleDragOver(e3);
            },
            onDragEnter: function onDragEnter(e3) {
              return handleDragEnter(e3);
            },
            onDragLeave: function onDragLeave(e3) {
              return handleDragLeave(e3);
            }
          };
        }
        ;
        function humanFileSize(bytes) {
          var dp = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
          var reference = bytes;
          var thresh = 1024;
          var sep = " ";
          var r3 = Math.pow(10, dp);
          var units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
          var magnitude = 0;
          if (Math.abs(reference) < thresh) {
            return "".concat(reference).concat(sep).concat(units[magnitude]);
          }
          do {
            bytes /= thresh;
            reference /= thresh;
            ++magnitude;
          } while (Math.round(Math.abs(reference) * r3) / r3 >= thresh && magnitude < units.length - 1);
          var number = bytes.toFixed(dp);
          return number + sep + units[magnitude];
        }
        ;
        var sdk_namespaceObject = require_main();
        ;
        var UploadWidgetResult;
        (function(UploadWidgetResult2) {
          function from(originalFile, editedFile) {
            var _a;
            var calculateFileUrl = function calculateFileUrl2() {
              if (editedFile === void 0) {
                return sdk_namespaceObject.UrlBuilder.url({
                  filePath: originalFile.filePath,
                  accountId: originalFile.accountId
                });
              }
              return sdk_namespaceObject.UrlBuilder.url({
                filePath: editedFile.filePath,
                accountId: editedFile.accountId,
                options: {
                  transformation: "image"
                }
              });
            };
            return {
              accountId: originalFile.accountId,
              etag: originalFile.etag,
              editedFile,
              originalFile,
              fileUrl: calculateFileUrl(),
              filePath: (_a = editedFile === null || editedFile === void 0 ? void 0 : editedFile.filePath) !== null && _a !== void 0 ? _a : originalFile.filePath
            };
          }
          UploadWidgetResult2.from = from;
        })(UploadWidgetResult || (UploadWidgetResult = {}));
        ;
        var RectWithPos;
        (function(RectWithPos2) {
          function toCssProps(r3) {
            return {
              width: r3.width,
              height: r3.height,
              left: r3.x,
              top: r3.y
            };
          }
          RectWithPos2.toCssProps = toCssProps;
        })(RectWithPos || (RectWithPos = {}));
        var ResizableSquare = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploadWidget/components/editors/shapes/ResizableSquare.scss");
        ;
        var ResizableSquare_options = {};
        ResizableSquare_options.styleTagTransform = styleTagTransform_default();
        ResizableSquare_options.setAttributes = setAttributesWithoutAttributes_default();
        ResizableSquare_options.insert = function insertIntoTarget(element) {
          if (typeof document !== "undefined") {
            document.head.appendChild(element);
          }
        };
        ResizableSquare_options.domAPI = styleDomAPI_default();
        ResizableSquare_options.insertStyleElement = insertStyleElement_default();
        var ResizableSquare_update = injectStylesIntoStyleTag_default()(ResizableSquare["default"], ResizableSquare_options);
        var shapes_ResizableSquare = ResizableSquare["default"] && ResizableSquare["default"].locals ? ResizableSquare["default"].locals : void 0;
        ;
        function Draggable_slicedToArray(arr, i4) {
          return Draggable_arrayWithHoles(arr) || Draggable_iterableToArrayLimit(arr, i4) || Draggable_unsupportedIterableToArray(arr, i4) || Draggable_nonIterableRest();
        }
        function Draggable_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function Draggable_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return Draggable_arrayLikeToArray(o4, minLen);
          var n3 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n3 === "Object" && o4.constructor)
            n3 = o4.constructor.name;
          if (n3 === "Map" || n3 === "Set")
            return Array.from(o4);
          if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
            return Draggable_arrayLikeToArray(o4, minLen);
        }
        function Draggable_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
            arr2[i4] = arr[i4];
          return arr2;
        }
        function Draggable_iterableToArrayLimit(r3, l4) {
          var t4 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
          if (null != t4) {
            var e3, n3, i4, u4, a4 = [], f4 = true, o4 = false;
            try {
              if (i4 = (t4 = t4.call(r3)).next, 0 === l4) {
                if (Object(t4) !== t4)
                  return;
                f4 = false;
              } else
                for (; !(f4 = (e3 = i4.call(t4)).done) && (a4.push(e3.value), a4.length !== l4); f4 = true)
                  ;
            } catch (r4) {
              o4 = true, n3 = r4;
            } finally {
              try {
                if (!f4 && null != t4["return"] && (u4 = t4["return"](), Object(u4) !== u4))
                  return;
              } finally {
                if (o4)
                  throw n3;
              }
            }
            return a4;
          }
        }
        function Draggable_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var Draggable = function Draggable2(_ref) {
          var boundary = _ref.boundary, children = _ref.children, className = _ref.className, onMoveCallback = _ref.onMove, style = _ref.style, startingValue = _ref.startingValue, deltaCacheKey = _ref.deltaCacheKey;
          var _useState = (0, compat_namespaceObject.useState)(false), _useState2 = Draggable_slicedToArray(_useState, 2), isDragging = _useState2[0], setIsDragging = _useState2[1];
          var _useState3 = (0, compat_namespaceObject.useState)(0), _useState4 = Draggable_slicedToArray(_useState3, 2), startX = _useState4[0], setStartX = _useState4[1];
          var _useState5 = (0, compat_namespaceObject.useState)(0), _useState6 = Draggable_slicedToArray(_useState5, 2), startY = _useState6[0], setStartY = _useState6[1];
          var _useState7 = (0, compat_namespaceObject.useState)(0), _useState8 = Draggable_slicedToArray(_useState7, 2), lastXDelta = _useState8[0], setLastXDelta = _useState8[1];
          var _useState9 = (0, compat_namespaceObject.useState)(0), _useState10 = Draggable_slicedToArray(_useState9, 2), lastYDelta = _useState10[0], setLastYDelta = _useState10[1];
          var _useState11 = (0, compat_namespaceObject.useState)(startingValue), _useState12 = Draggable_slicedToArray(_useState11, 2), start = _useState12[0], setStart = _useState12[1];
          var clip = function clip2(min, max, value) {
            return Math.min(Math.max(value, min), max);
          };
          var clipDimension = function clipDimension2(length, value) {
            return clip(length * -1, length, value);
          };
          var setPositionStart = function setPositionStart2(e3) {
            setStartX(e3.pageX);
            setStartY(e3.pageY);
          };
          var getPositionDelta = function getPositionDelta2(e3) {
            return {
              x: e3.pageX - startX + lastXDelta,
              y: e3.pageY - startY + lastYDelta
            };
          };
          var onDown = function onDown2(e3) {
            e3.stopPropagation();
            e3.target.setPointerCapture(e3.pointerId);
            setIsDragging(true);
            setPositionStart(e3);
            if (deltaCacheKey === void 0 || startingValue.lastUpdatedBy !== deltaCacheKey) {
              setLastXDelta(0);
              setLastYDelta(0);
              setStart(startingValue);
            }
          };
          var onUp = function onUp2(e3) {
            setIsDragging(false);
            e3.target.releasePointerCapture(e3.pointerId);
            var _getPositionDelta = getPositionDelta(e3), x4 = _getPositionDelta.x, y3 = _getPositionDelta.y;
            setLastYDelta(clipDimension(boundary.height, y3));
            setLastXDelta(clipDimension(boundary.width, x4));
          };
          var onMove = function onMove2(e3) {
            if (!isDragging) {
              return;
            }
            var _getPositionDelta2 = getPositionDelta(e3), x4 = _getPositionDelta2.x, y3 = _getPositionDelta2.y;
            onMoveCallback(x4, y3, start);
          };
          var onTouchStart = function onTouchStart2(e3) {
            e3.preventDefault();
          };
          return (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
            className,
            style,
            onPointerDown: onDown,
            onPointerMove: onMove,
            onPointerUp: onUp,
            onPointerCancel: onUp,
            onTouchStart
          }, {
            children
          }));
        };
        ;
        function ResizableSquare_slicedToArray(arr, i4) {
          return ResizableSquare_arrayWithHoles(arr) || ResizableSquare_iterableToArrayLimit(arr, i4) || ResizableSquare_unsupportedIterableToArray(arr, i4) || ResizableSquare_nonIterableRest();
        }
        function ResizableSquare_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function ResizableSquare_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return ResizableSquare_arrayLikeToArray(o4, minLen);
          var n3 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n3 === "Object" && o4.constructor)
            n3 = o4.constructor.name;
          if (n3 === "Map" || n3 === "Set")
            return Array.from(o4);
          if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
            return ResizableSquare_arrayLikeToArray(o4, minLen);
        }
        function ResizableSquare_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
            arr2[i4] = arr[i4];
          return arr2;
        }
        function ResizableSquare_iterableToArrayLimit(r3, l4) {
          var t4 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
          if (null != t4) {
            var e3, n3, i4, u4, a4 = [], f4 = true, o4 = false;
            try {
              if (i4 = (t4 = t4.call(r3)).next, 0 === l4) {
                if (Object(t4) !== t4)
                  return;
                f4 = false;
              } else
                for (; !(f4 = (e3 = i4.call(t4)).done) && (a4.push(e3.value), a4.length !== l4); f4 = true)
                  ;
            } catch (r4) {
              o4 = true, n3 = r4;
            } finally {
              try {
                if (!f4 && null != t4["return"] && (u4 = t4["return"](), Object(u4) !== u4))
                  return;
              } finally {
                if (o4)
                  throw n3;
              }
            }
            return a4;
          }
        }
        function ResizableSquare_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        function makeDeltaCacheKey(corner, allowResizeOnMove) {
          return allowResizeOnMove ? corner : void 0;
        }
        var CornerDragger = function CornerDragger2(_ref) {
          var boundary = _ref.boundary, corner = _ref.corner, geometry = _ref.geometry, setGeometry = _ref.setGeometry;
          return (0, jsx_runtime_namespaceObject.jsx)(Draggable, {
            className: "upload-widget__resizable-square__".concat(corner),
            boundary,
            deltaCacheKey: void 0,
            startingValue: geometry,
            onMove: function onMove(x4, y3, g4) {
              return setGeometry(corner, {
                x: corner === "nw" || corner === "sw" ? g4.x + x4 : g4.x,
                y: corner === "nw" || corner === "ne" ? g4.y + y3 : g4.y,
                width: corner === "nw" || corner === "sw" ? g4.width - x4 : g4.width + x4,
                height: corner === "nw" || corner === "ne" ? g4.height - y3 : g4.height + y3
              });
            }
          });
        };
        var ResizableSquare_ResizableSquare = function ResizableSquare2(_ref2) {
          var boundary = _ref2.boundary, ratio = _ref2.ratio, onResized = _ref2.onResized, children = _ref2.children, allowResizeOnMove = _ref2.allowResizeOnMove;
          var minSize = 50;
          var adjustedBoundary = {
            width: boundary.width - minSize,
            height: boundary.height - minSize
          };
          var reRatio = function reRatio2(g4, fixed) {
            if (ratio === void 0) {
              return Object.assign(Object.assign({}, g4), {
                lastUpdatedBy: fixed
              });
            }
            var width = Math.min(g4.height * ratio, g4.width);
            var height = width / ratio;
            return {
              lastUpdatedBy: fixed,
              height,
              width,
              x: fixed === "ne" || fixed === "se" ? g4.x : fixed === "center" ? g4.x + g4.width / 2 - width / 2 : g4.x + (g4.width - width),
              y: fixed === "sw" || fixed === "se" ? g4.y : fixed === "center" ? g4.y + g4.height / 2 - height / 2 : g4.y + (g4.height - height)
            };
          };
          var clip = function clip2(g4) {
            var x4 = Math.min(boundary.width - minSize, Math.max(0, g4.x));
            var y3 = Math.min(boundary.height - minSize, Math.max(0, g4.y));
            var xClip = Math.min(0, g4.x);
            var yClip = Math.min(0, g4.y);
            return {
              x: x4,
              y: y3,
              width: Math.max(minSize, Math.min(g4.width + xClip, boundary.width - x4)),
              height: Math.max(minSize, Math.min(g4.height + yClip, boundary.height - y3))
            };
          };
          var clipAndReRatio = function clipAndReRatio2(g4, fixed) {
            return reRatio(clip(g4), fixed);
          };
          var calculateInitialGeometry = function calculateInitialGeometry2() {
            return clipAndReRatio({
              x: 0,
              y: 0,
              width: boundary.width,
              height: boundary.height
            }, "center");
          };
          var _useState = (0, compat_namespaceObject.useState)(calculateInitialGeometry), _useState2 = ResizableSquare_slicedToArray(_useState, 2), geometry = _useState2[0], setGeometryUnsafe = _useState2[1];
          var setGeometry = function setGeometry2(corner, set) {
            return setGeometryUnsafe(clipAndReRatio(set, corner));
          };
          var onGeometryChange = function onGeometryChange2() {
            var isSameAsBoundary = geometry.x === 0 && geometry.y === 0 && geometry.width === boundary.width && geometry.height === boundary.height;
            onResized(isSameAsBoundary ? void 0 : {
              geometry,
              boundary
            });
          };
          (0, compat_namespaceObject.useLayoutEffect)(onGeometryChange, [geometry]);
          (0, compat_namespaceObject.useLayoutEffect)(function() {
            setGeometryUnsafe(calculateInitialGeometry());
            onGeometryChange();
          }, [boundary]);
          return (0, jsx_runtime_namespaceObject.jsxs)(Draggable, Object.assign({
            className: "upload-widget__resizable-square",
            boundary: adjustedBoundary,
            style: RectWithPos.toCssProps(geometry),
            deltaCacheKey: makeDeltaCacheKey("center", allowResizeOnMove),
            startingValue: geometry,
            onMove: function onMove(x4, y3, g4) {
              var clipperNoOp = function clipperNoOp2(newValue) {
                return newValue;
              };
              var clipperRetainSize = function clipperRetainSize2(newValue, size, bound) {
                var newValueClipped = Math.max(0, newValue);
                if (newValueClipped + size > bound) {
                  return bound - size;
                }
                return newValueClipped;
              };
              var clipper = allowResizeOnMove ? clipperNoOp : clipperRetainSize;
              setGeometry("center", {
                x: clipper(g4.x + x4, g4.width, boundary.width),
                y: clipper(g4.y + y3, g4.height, boundary.height),
                width: g4.width,
                height: g4.height
              });
            }
          }, {
            children: [children, (0, jsx_runtime_namespaceObject.jsx)(CornerDragger, {
              corner: "nw",
              setGeometry,
              geometry,
              boundary: adjustedBoundary
            }), (0, jsx_runtime_namespaceObject.jsx)(CornerDragger, {
              corner: "ne",
              setGeometry,
              geometry,
              boundary: adjustedBoundary
            }), (0, jsx_runtime_namespaceObject.jsx)(CornerDragger, {
              corner: "se",
              setGeometry,
              geometry,
              boundary: adjustedBoundary
            }), (0, jsx_runtime_namespaceObject.jsx)(CornerDragger, {
              corner: "sw",
              setGeometry,
              geometry,
              boundary: adjustedBoundary
            })]
          }));
        };
        ;
        var isEditableImage = function isEditableImage2(originalImage) {
          return originalImage.mime.toLowerCase().startsWith("image/");
        };
        var isReadOnlyImage = function isReadOnlyImage2(originalImage) {
          var mime = originalImage.mime.toLowerCase();
          return mime.startsWith("application/pdf") || mime.startsWith("video/");
        };
        ;
        var nativelySupportedImages = ["image/jpeg", "image/gif", "image/png", "image/webp"];
        function calculateImagePreviewUrl(originalImage) {
          if (isImageNativelySupported(originalImage)) {
            try {
              return {
                url: URL.createObjectURL(originalImage.file),
                external: false,
                urlForDimensions: void 0
              };
            } catch (e3) {
            }
          }
          var enlarge = requiresServeSideEnlargement(originalImage);
          var imageUrl = originalImage.fileUrl.replace("/raw/", "/image/");
          var maxDimension = 1e3;
          return {
            url: "".concat(imageUrl, "?f=webp&f2=jpg").concat(enlarge ? "&w=".concat(maxDimension, "&h=").concat(maxDimension, "&fit=max") : ""),
            external: true,
            urlForDimensions: enlarge ? "".concat(imageUrl, "?f=jpg") : void 0
          };
        }
        function isImageNativelySupported(originalImage) {
          return nativelySupportedImages.includes(originalImage.mime);
        }
        function requiresServeSideEnlargement(originalImage) {
          return isReadOnlyImage(originalImage) || originalImage.mime === "image/svg+xml";
        }
        var Spinner = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploadWidget/components/editors/Spinner.scss");
        ;
        var Spinner_options = {};
        Spinner_options.styleTagTransform = styleTagTransform_default();
        Spinner_options.setAttributes = setAttributesWithoutAttributes_default();
        Spinner_options.insert = function insertIntoTarget(element) {
          if (typeof document !== "undefined") {
            document.head.appendChild(element);
          }
        };
        Spinner_options.domAPI = styleDomAPI_default();
        Spinner_options.insertStyleElement = insertStyleElement_default();
        var Spinner_update = injectStylesIntoStyleTag_default()(Spinner["default"], Spinner_options);
        var editors_Spinner = Spinner["default"] && Spinner["default"].locals ? Spinner["default"].locals : void 0;
        ;
        function Spinner_slicedToArray(arr, i4) {
          return Spinner_arrayWithHoles(arr) || Spinner_iterableToArrayLimit(arr, i4) || Spinner_unsupportedIterableToArray(arr, i4) || Spinner_nonIterableRest();
        }
        function Spinner_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function Spinner_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return Spinner_arrayLikeToArray(o4, minLen);
          var n3 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n3 === "Object" && o4.constructor)
            n3 = o4.constructor.name;
          if (n3 === "Map" || n3 === "Set")
            return Array.from(o4);
          if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
            return Spinner_arrayLikeToArray(o4, minLen);
        }
        function Spinner_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
            arr2[i4] = arr[i4];
          return arr2;
        }
        function Spinner_iterableToArrayLimit(r3, l4) {
          var t4 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
          if (null != t4) {
            var e3, n3, i4, u4, a4 = [], f4 = true, o4 = false;
            try {
              if (i4 = (t4 = t4.call(r3)).next, 0 === l4) {
                if (Object(t4) !== t4)
                  return;
                f4 = false;
              } else
                for (; !(f4 = (e3 = i4.call(t4)).done) && (a4.push(e3.value), a4.length !== l4); f4 = true)
                  ;
            } catch (r4) {
              o4 = true, n3 = r4;
            } finally {
              try {
                if (!f4 && null != t4["return"] && (u4 = t4["return"](), Object(u4) !== u4))
                  return;
              } finally {
                if (o4)
                  throw n3;
              }
            }
            return a4;
          }
        }
        function Spinner_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var Spinner_Spinner = function Spinner2() {
          var _a, _b;
          var _getElementDimensions = getElementDimensionsOnResize(true, []), _getElementDimensions2 = Spinner_slicedToArray(_getElementDimensions, 2), dimensions = _getElementDimensions2[0], containerRef = _getElementDimensions2[1];
          var relativeSize = 0.5;
          var lowestDim = Math.min((_a = dimensions === null || dimensions === void 0 ? void 0 : dimensions.width) !== null && _a !== void 0 ? _a : 0, (_b = dimensions === null || dimensions === void 0 ? void 0 : dimensions.height) !== null && _b !== void 0 ? _b : 0);
          var lowestDimCss = "".concat(Math.round(lowestDim * relativeSize), "px");
          return (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
            "class": "spinner__container",
            ref: containerRef
          }, {
            children: (0, jsx_runtime_namespaceObject.jsx)("div", {
              className: "spinner",
              style: {
                width: lowestDimCss,
                height: lowestDimCss
              }
            })
          }));
        };
        var ImageEditorLayout = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploadWidget/components/editors/ImageEditorLayout.scss");
        ;
        var ImageEditorLayout_options = {};
        ImageEditorLayout_options.styleTagTransform = styleTagTransform_default();
        ImageEditorLayout_options.setAttributes = setAttributesWithoutAttributes_default();
        ImageEditorLayout_options.insert = function insertIntoTarget(element) {
          if (typeof document !== "undefined") {
            document.head.appendChild(element);
          }
        };
        ImageEditorLayout_options.domAPI = styleDomAPI_default();
        ImageEditorLayout_options.insertStyleElement = insertStyleElement_default();
        var ImageEditorLayout_update = injectStylesIntoStyleTag_default()(ImageEditorLayout["default"], ImageEditorLayout_options);
        var editors_ImageEditorLayout = ImageEditorLayout["default"] && ImageEditorLayout["default"].locals ? ImageEditorLayout["default"].locals : void 0;
        ;
        function ImageEditorLayout_slicedToArray(arr, i4) {
          return ImageEditorLayout_arrayWithHoles(arr) || ImageEditorLayout_iterableToArrayLimit(arr, i4) || ImageEditorLayout_unsupportedIterableToArray(arr, i4) || ImageEditorLayout_nonIterableRest();
        }
        function ImageEditorLayout_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function ImageEditorLayout_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return ImageEditorLayout_arrayLikeToArray(o4, minLen);
          var n3 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n3 === "Object" && o4.constructor)
            n3 = o4.constructor.name;
          if (n3 === "Map" || n3 === "Set")
            return Array.from(o4);
          if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
            return ImageEditorLayout_arrayLikeToArray(o4, minLen);
        }
        function ImageEditorLayout_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
            arr2[i4] = arr[i4];
          return arr2;
        }
        function ImageEditorLayout_iterableToArrayLimit(r3, l4) {
          var t4 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
          if (null != t4) {
            var e3, n3, i4, u4, a4 = [], f4 = true, o4 = false;
            try {
              if (i4 = (t4 = t4.call(r3)).next, 0 === l4) {
                if (Object(t4) !== t4)
                  return;
                f4 = false;
              } else
                for (; !(f4 = (e3 = i4.call(t4)).done) && (a4.push(e3.value), a4.length !== l4); f4 = true)
                  ;
            } catch (r4) {
              o4 = true, n3 = r4;
            } finally {
              try {
                if (!f4 && null != t4["return"] && (u4 = t4["return"](), Object(u4) !== u4))
                  return;
              } finally {
                if (o4)
                  throw n3;
              }
            }
            return a4;
          }
        }
        function ImageEditorLayout_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var ImageEditorLayout_ImageEditorLayout = function ImageEditorLayout2(_ref) {
          var actions = _ref.actions, originalImage = _ref.originalImage, header = _ref.header, image = _ref.image, modal = _ref.modal;
          var _useState = (0, compat_namespaceObject.useState)(""), _useState2 = ImageEditorLayout_slicedToArray(_useState, 2), imageUrl = _useState2[0], setImageUrl = _useState2[1];
          var _useState3 = (0, compat_namespaceObject.useState)(false), _useState4 = ImageEditorLayout_slicedToArray(_useState3, 2), imageLoaded = _useState4[0], setImageLoaded = _useState4[1];
          var _useState5 = (0, compat_namespaceObject.useState)(false), _useState6 = ImageEditorLayout_slicedToArray(_useState5, 2), imageLoadedReal = _useState6[0], setImageLoadedReal = _useState6[1];
          var _useState7 = (0, compat_namespaceObject.useState)("upload-widget__image-editor__image-".concat(Math.round(Math.random() * 1e5))), _useState8 = ImageEditorLayout_slicedToArray(_useState7, 1), containerId = _useState8[0];
          var _getElementDimensions = getElementDimensionsOnParentResize(imageLoadedReal, [imageUrl, imageLoaded]), _getElementDimensions2 = ImageEditorLayout_slicedToArray(_getElementDimensions, 3), imgDimensions = _getElementDimensions2[0], imgRef = _getElementDimensions2[1], containerRef = _getElementDimensions2[2];
          (0, compat_namespaceObject.useLayoutEffect)(function() {
            var _calculateImagePrevie = calculateImagePreviewUrl(originalImage), url = _calculateImagePrevie.url, external = _calculateImagePrevie.external;
            setImageUrl(url);
            setImageLoaded(!external);
            setImageLoadedReal(false);
          }, [originalImage.fileUrl]);
          return (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
            className: "upload-widget__image-editor"
          }, {
            children: [(0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
              className: external_classnames_default()({
                "upload-widget__image-editor__header": header !== void 0,
                "upload-widget__image-editor__header--empty-non-modal": header === void 0 && !modal
              })
            }, {
              children: header
            })), (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
              className: "upload-widget__image-editor__image",
              ref: containerRef
            }, {
              children: (0, jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
                className: "upload-widget__image-editor__image-padding"
              }, {
                children: [!imageLoaded && (0, jsx_runtime_namespaceObject.jsx)(Spinner_Spinner, {}), (0, jsx_runtime_namespaceObject.jsx)("img", {
                  id: containerId,
                  src: imageUrl,
                  onLoad: function onLoad() {
                    setImageLoaded(true);
                    setImageLoadedReal(true);
                  },
                  className: "upload-widget__image-editor__image-inner",
                  style: imageLoaded ? {} : {
                    display: "none"
                  },
                  ref: imgRef,
                  draggable: false
                }), imgDimensions !== void 0 && imageLoaded && image !== void 0 && image({
                  imgDimensions,
                  imageUrl
                })]
              }))
            })), (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
              className: "upload-widget__image-editor__actions upload-widget__controls upload-widget__controls--space"
            }, {
              children: actions
            }))]
          }));
        };
        ;
        var getImageEditorHeader = function getImageEditorHeader2(_ref) {
          var imageCount = _ref.imageCount, imageIndex = _ref.imageIndex, options2 = _ref.options;
          var locale = options2.locale;
          var multi = options2.multi ? {
            imageIndex,
            imageCount
          } : void 0;
          return multi === void 0 || multi.imageCount === 1 ? void 0 : (0, jsx_runtime_namespaceObject.jsxs)("span", Object.assign({
            className: "text-secondary"
          }, {
            children: [locale.imageCropNumberPrefix, " ", multi.imageIndex + 1, " ", locale.xOfY, " ", multi.imageCount]
          }));
        };
        ;
        function FormUtils_slicedToArray(arr, i4) {
          return FormUtils_arrayWithHoles(arr) || FormUtils_iterableToArrayLimit(arr, i4) || FormUtils_unsupportedIterableToArray(arr, i4) || FormUtils_nonIterableRest();
        }
        function FormUtils_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function FormUtils_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return FormUtils_arrayLikeToArray(o4, minLen);
          var n3 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n3 === "Object" && o4.constructor)
            n3 = o4.constructor.name;
          if (n3 === "Map" || n3 === "Set")
            return Array.from(o4);
          if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
            return FormUtils_arrayLikeToArray(o4, minLen);
        }
        function FormUtils_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
            arr2[i4] = arr[i4];
          return arr2;
        }
        function FormUtils_iterableToArrayLimit(r3, l4) {
          var t4 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
          if (null != t4) {
            var e3, n3, i4, u4, a4 = [], f4 = true, o4 = false;
            try {
              if (i4 = (t4 = t4.call(r3)).next, 0 === l4) {
                if (Object(t4) !== t4)
                  return;
                f4 = false;
              } else
                for (; !(f4 = (e3 = i4.call(t4)).done) && (a4.push(e3.value), a4.length !== l4); f4 = true)
                  ;
            } catch (r4) {
              o4 = true, n3 = r4;
            } finally {
              try {
                if (!f4 && null != t4["return"] && (u4 = t4["return"](), Object(u4) !== u4))
                  return;
              } finally {
                if (o4)
                  throw n3;
              }
            }
            return a4;
          }
        }
        function FormUtils_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var transientFlagTimeout = 1500;
        function useTransientFlag() {
          var _useState = (0, compat_namespaceObject.useState)(void 0), _useState2 = FormUtils_slicedToArray(_useState, 2), onTimeout = _useState2[0], setOnTimeout = _useState2[1];
          var flag = onTimeout !== void 0;
          (0, compat_namespaceObject.useEffect)(function() {
            if (onTimeout !== void 0) {
              var handle = setTimeout(function() {
                setOnTimeout(void 0);
                onTimeout();
              }, transientFlagTimeout);
              return function() {
                return clearTimeout(handle);
              };
            }
            return function() {
            };
          }, [flag]);
          return [flag, function(onTimeout2) {
            return setOnTimeout(onTimeout2 !== null && onTimeout2 !== void 0 ? onTimeout2 : function() {
            });
          }];
        }
        ;
        function SubmitButton_slicedToArray(arr, i4) {
          return SubmitButton_arrayWithHoles(arr) || SubmitButton_iterableToArrayLimit(arr, i4) || SubmitButton_unsupportedIterableToArray(arr, i4) || SubmitButton_nonIterableRest();
        }
        function SubmitButton_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function SubmitButton_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return SubmitButton_arrayLikeToArray(o4, minLen);
          var n3 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n3 === "Object" && o4.constructor)
            n3 = o4.constructor.name;
          if (n3 === "Map" || n3 === "Set")
            return Array.from(o4);
          if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
            return SubmitButton_arrayLikeToArray(o4, minLen);
        }
        function SubmitButton_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
            arr2[i4] = arr[i4];
          return arr2;
        }
        function SubmitButton_iterableToArrayLimit(r3, l4) {
          var t4 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
          if (null != t4) {
            var e3, n3, i4, u4, a4 = [], f4 = true, o4 = false;
            try {
              if (i4 = (t4 = t4.call(r3)).next, 0 === l4) {
                if (Object(t4) !== t4)
                  return;
                f4 = false;
              } else
                for (; !(f4 = (e3 = i4.call(t4)).done) && (a4.push(e3.value), a4.length !== l4); f4 = true)
                  ;
            } catch (r4) {
              o4 = true, n3 = r4;
            } finally {
              try {
                if (!f4 && null != t4["return"] && (u4 = t4["return"](), Object(u4) !== u4))
                  return;
              } finally {
                if (o4)
                  throw n3;
              }
            }
            return a4;
          }
        }
        function SubmitButton_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var SubmitButton = function SubmitButton2(_ref) {
          var busyText = _ref.busyText, idleText = _ref.idleText, locale = _ref.locale, onSubmit = _ref.onSubmit, showIcon = _ref.showIcon;
          var _useState = (0, compat_namespaceObject.useState)(false), _useState2 = SubmitButton_slicedToArray(_useState, 2), isSubmitting = _useState2[0], setIsSubmitting = _useState2[1];
          var _useTransientFlag = useTransientFlag(), _useTransientFlag2 = SubmitButton_slicedToArray(_useTransientFlag, 2), isError = _useTransientFlag2[0], setIsError = _useTransientFlag2[1];
          var isDisabled = isSubmitting || isError;
          var submitAsync = function submitAsync2(e3) {
            e3.preventDefault();
            setIsSubmitting(true);
            onSubmit().then(function() {
            }, function(e4) {
              console.error(e4);
              setIsError();
              setIsSubmitting(false);
            });
          };
          return (0, jsx_runtime_namespaceObject.jsxs)("button", Object.assign({
            disabled: isDisabled,
            onClick: submitAsync,
            className: external_classnames_default()("btn btn--primary", {
              disabled: isDisabled
            })
          }, {
            children: [isSubmitting ? busyText : isError ? locale.submitBtnError : idleText, " ", showIcon && (0, jsx_runtime_namespaceObject.jsx)(RightSvg, {
              width: 12,
              className: "ml-2"
            })]
          }));
        };
        ;
        function ImageEditorButtons_await(value, then, direct) {
          if (direct) {
            return then ? then(value) : value;
          }
          if (!value || !value.then) {
            value = Promise.resolve(value);
          }
          return then ? value.then(then) : value;
        }
        function ImageEditorButtons_async(f4) {
          return function() {
            for (var args = [], i4 = 0; i4 < arguments.length; i4++) {
              args[i4] = arguments[i4];
            }
            try {
              return Promise.resolve(f4.apply(this, args));
            } catch (e3) {
              return Promise.reject(e3);
            }
          };
        }
        var ImageEditorButtons = function ImageEditorButtons2(_ref) {
          var options2 = _ref.options, onFinish = _ref.onFinish;
          var locale = options2.locale;
          return (0, jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
            children: [(0, jsx_runtime_namespaceObject.jsx)("button", Object.assign({
              onClick: function onClick() {
                onFinish(false).then(function() {
                }, function(e3) {
                  console.error("Unable to cancel upload.", e3);
                });
              },
              className: "btn"
            }, {
              children: locale.cancelPreviewBtn
            })), (0, jsx_runtime_namespaceObject.jsx)(SubmitButton, {
              onSubmit: ImageEditorButtons_async(function() {
                return onFinish(true);
              }),
              locale,
              idleText: locale.continueBtn,
              busyText: locale.submitBtnLoading,
              showIcon: false
            })]
          });
        };
        var ImageCropper = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploadWidget/components/editors/ImageCropper.scss");
        ;
        var ImageCropper_options = {};
        ImageCropper_options.styleTagTransform = styleTagTransform_default();
        ImageCropper_options.setAttributes = setAttributesWithoutAttributes_default();
        ImageCropper_options.insert = function insertIntoTarget(element) {
          if (typeof document !== "undefined") {
            document.head.appendChild(element);
          }
        };
        ImageCropper_options.domAPI = styleDomAPI_default();
        ImageCropper_options.insertStyleElement = insertStyleElement_default();
        var ImageCropper_update = injectStylesIntoStyleTag_default()(ImageCropper["default"], ImageCropper_options);
        var editors_ImageCropper = ImageCropper["default"] && ImageCropper["default"].locals ? ImageCropper["default"].locals : void 0;
        ;
        function ImageCropper_await(value, then, direct) {
          if (direct) {
            return then ? then(value) : value;
          }
          if (!value || !value.then) {
            value = Promise.resolve(value);
          }
          return then ? value.then(then) : value;
        }
        function _empty() {
        }
        function _invokeIgnored(body) {
          var result = body();
          if (result && result.then) {
            return result.then(_empty);
          }
        }
        function ImageCropper_async(f4) {
          return function() {
            for (var args = [], i4 = 0; i4 < arguments.length; i4++) {
              args[i4] = arguments[i4];
            }
            try {
              return Promise.resolve(f4.apply(this, args));
            } catch (e3) {
              return Promise.reject(e3);
            }
          };
        }
        function ImageCropper_slicedToArray(arr, i4) {
          return ImageCropper_arrayWithHoles(arr) || ImageCropper_iterableToArrayLimit(arr, i4) || ImageCropper_unsupportedIterableToArray(arr, i4) || ImageCropper_nonIterableRest();
        }
        function ImageCropper_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function ImageCropper_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return ImageCropper_arrayLikeToArray(o4, minLen);
          var n3 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n3 === "Object" && o4.constructor)
            n3 = o4.constructor.name;
          if (n3 === "Map" || n3 === "Set")
            return Array.from(o4);
          if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
            return ImageCropper_arrayLikeToArray(o4, minLen);
        }
        function ImageCropper_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
            arr2[i4] = arr[i4];
          return arr2;
        }
        function ImageCropper_iterableToArrayLimit(r3, l4) {
          var t4 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
          if (null != t4) {
            var e3, n3, i4, u4, a4 = [], f4 = true, o4 = false;
            try {
              if (i4 = (t4 = t4.call(r3)).next, 0 === l4) {
                if (Object(t4) !== t4)
                  return;
                f4 = false;
              } else
                for (; !(f4 = (e3 = i4.call(t4)).done) && (a4.push(e3.value), a4.length !== l4); f4 = true)
                  ;
            } catch (r4) {
              o4 = true, n3 = r4;
            } finally {
              try {
                if (!f4 && null != t4["return"] && (u4 = t4["return"](), Object(u4) !== u4))
                  return;
              } finally {
                if (o4)
                  throw n3;
              }
            }
            return a4;
          }
        }
        function ImageCropper_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        function makeCropJson(originalFilePathRelative, geometry, boundary, nativeImageSize) {
          var scale = nativeImageSize.width / boundary.width;
          return {
            inputPath: originalFilePathRelative,
            pipeline: {
              steps: [{
                geometry: {
                  offset: {
                    x: Math.round(geometry.x * scale),
                    y: Math.round(geometry.y * scale)
                  },
                  size: {
                    width: Math.round(geometry.width * scale),
                    height: Math.round(geometry.height * scale),
                    type: "widthxheight!"
                  }
                },
                type: "crop"
              }]
            }
          };
        }
        var ImageCropper_ImageCropper = function ImageCropper2(props) {
          var options2 = props.options, originalImage = props.originalImage, upload = props.upload, onFinish = props.onFinish;
          var _useState = (0, compat_namespaceObject.useState)(void 0), _useState2 = ImageCropper_slicedToArray(_useState, 2), geometry = _useState2[0], setGeometry = _useState2[1];
          var submit = ImageCropper_async(function(keep) {
            var _a;
            return _invokeIgnored(function() {
              if (!keep || geometry === void 0) {
                onFinish(keep, void 0);
              } else {
                return ImageCropper_await(new Promise(function(resolve) {
                  var _a2;
                  var img = new Image();
                  var imgInfo = calculateImagePreviewUrl(originalImage);
                  img.onload = function() {
                    resolve({
                      width: img.naturalWidth,
                      height: img.naturalHeight
                    });
                  };
                  img.src = (_a2 = imgInfo.urlForDimensions) !== null && _a2 !== void 0 ? _a2 : imgInfo.url;
                }), function(nativeImageSize) {
                  var originalImageUploadedName = originalImage.filePath.substring(originalImage.filePath.lastIndexOf("/") + 1);
                  var cropJson = makeCropJson(originalImageUploadedName, geometry.geometry, geometry.boundary, nativeImageSize);
                  var blob = new Blob([JSON.stringify(cropJson)], {
                    type: "application/json"
                  });
                  var tags = options2.tags, metadata = options2.metadata;
                  return ImageCropper_await(upload.uploadFile({
                    name: "".concat((_a = originalImage.originalFileName) !== null && _a !== void 0 ? _a : "image", ".crop"),
                    type: blob.type,
                    size: blob.size,
                    slice: function slice(start, end) {
                      return blob.slice(start, end);
                    }
                  }, {
                    path: options2.editor.images.cropFilePath(originalImage),
                    // When uploading crops, users expect the crop file to be treated the same as the original image (e.g. when adding expiration rules to images).
                    metadata,
                    tags
                  }), function(editedFile) {
                    onFinish(keep, editedFile);
                  });
                });
              }
            });
          });
          return (0, jsx_runtime_namespaceObject.jsx)(ImageEditorLayout_ImageEditorLayout, {
            modal: options2.layout === "modal",
            header: getImageEditorHeader(props),
            actions: (0, jsx_runtime_namespaceObject.jsx)(ImageEditorButtons, {
              options: options2,
              onFinish: submit
            }),
            image: function image(_ref) {
              var imgDimensions = _ref.imgDimensions, imageUrl = _ref.imageUrl;
              var _a, _b, _c, _d;
              return (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
                className: "upload-widget__image-cropper__overlay",
                style: RectWithPos.toCssProps(imgDimensions)
              }, {
                children: (0, jsx_runtime_namespaceObject.jsx)(ResizableSquare_ResizableSquare, Object.assign({
                  boundary: imgDimensions,
                  onResized: setGeometry,
                  ratio: options2.editor.images.cropRatio,
                  allowResizeOnMove: options2.editor.images.allowResizeOnMove
                }, {
                  children: (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
                    className: external_classnames_default()("upload-widget__image-cropper__clip", {
                      "upload-widget__image-cropper__clip--circular": options2.editor.images.cropShape === "circ"
                    }),
                    style: {
                      width: (_a = geometry === null || geometry === void 0 ? void 0 : geometry.geometry.width) !== null && _a !== void 0 ? _a : imgDimensions.width,
                      height: (_b = geometry === null || geometry === void 0 ? void 0 : geometry.geometry.height) !== null && _b !== void 0 ? _b : imgDimensions.height
                    }
                  }, {
                    children: (0, jsx_runtime_namespaceObject.jsx)("img", {
                      src: imageUrl,
                      draggable: false,
                      style: {
                        width: imgDimensions.width,
                        height: imgDimensions.height,
                        transform: "translateX(".concat(((_c = geometry === null || geometry === void 0 ? void 0 : geometry.geometry.x) !== null && _c !== void 0 ? _c : 0) * -1, "px) translateY(").concat(((_d = geometry === null || geometry === void 0 ? void 0 : geometry.geometry.y) !== null && _d !== void 0 ? _d : 0) * -1, "px)")
                      }
                    })
                  }))
                }))
              }));
            },
            originalImage
          });
        };
        ;
        function ImagePreview_await(value, then, direct) {
          if (direct) {
            return then ? then(value) : value;
          }
          if (!value || !value.then) {
            value = Promise.resolve(value);
          }
          return then ? value.then(then) : value;
        }
        function ImagePreview_async(f4) {
          return function() {
            for (var args = [], i4 = 0; i4 < arguments.length; i4++) {
              args[i4] = arguments[i4];
            }
            try {
              return Promise.resolve(f4.apply(this, args));
            } catch (e3) {
              return Promise.reject(e3);
            }
          };
        }
        var ImagePreview = function ImagePreview2(props) {
          var options2 = props.options, originalImage = props.originalImage, onFinish = props.onFinish;
          var submit = ImagePreview_async(function(keep) {
            onFinish(keep);
            return ImagePreview_await();
          });
          return (0, jsx_runtime_namespaceObject.jsx)(ImageEditorLayout_ImageEditorLayout, {
            modal: options2.layout === "modal",
            header: getImageEditorHeader(props),
            actions: (0, jsx_runtime_namespaceObject.jsx)(ImageEditorButtons, {
              options: options2,
              onFinish: submit
            }),
            originalImage
          });
        };
        ;
        function canCropImage(options2, originalImage) {
          return options2.editor.images.crop && isEditableImage(originalImage);
        }
        var ImageEditor = function ImageEditor2(_ref) {
          var imageCount = _ref.imageCount, imageIndex = _ref.imageIndex, originalImage = _ref.originalImage, upload = _ref.upload, onImageEdited = _ref.onImageEdited, options2 = _ref.options;
          return canCropImage(options2, originalImage) ? (0, jsx_runtime_namespaceObject.jsx)(ImageCropper_ImageCropper, {
            imageCount,
            imageIndex,
            options: options2,
            onFinish: onImageEdited,
            upload,
            originalImage
          }) : (0, jsx_runtime_namespaceObject.jsx)(ImagePreview, {
            imageCount,
            imageIndex,
            options: options2,
            onFinish: function onFinish(keep) {
              return onImageEdited(keep, void 0);
            },
            originalImage
          });
        };
        ;
        function UseImageList_toConsumableArray(arr) {
          return UseImageList_arrayWithoutHoles(arr) || UseImageList_iterableToArray(arr) || UseImageList_unsupportedIterableToArray(arr) || UseImageList_nonIterableSpread();
        }
        function UseImageList_nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UseImageList_iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
            return Array.from(iter);
        }
        function UseImageList_arrayWithoutHoles(arr) {
          if (Array.isArray(arr))
            return UseImageList_arrayLikeToArray(arr);
        }
        function UseImageList_slicedToArray(arr, i4) {
          return UseImageList_arrayWithHoles(arr) || UseImageList_iterableToArrayLimit(arr, i4) || UseImageList_unsupportedIterableToArray(arr, i4) || UseImageList_nonIterableRest();
        }
        function UseImageList_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UseImageList_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return UseImageList_arrayLikeToArray(o4, minLen);
          var n3 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n3 === "Object" && o4.constructor)
            n3 = o4.constructor.name;
          if (n3 === "Map" || n3 === "Set")
            return Array.from(o4);
          if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
            return UseImageList_arrayLikeToArray(o4, minLen);
        }
        function UseImageList_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
            arr2[i4] = arr[i4];
          return arr2;
        }
        function UseImageList_iterableToArrayLimit(r3, l4) {
          var t4 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
          if (null != t4) {
            var e3, n3, i4, u4, a4 = [], f4 = true, o4 = false;
            try {
              if (i4 = (t4 = t4.call(r3)).next, 0 === l4) {
                if (Object(t4) !== t4)
                  return;
                f4 = false;
              } else
                for (; !(f4 = (e3 = i4.call(t4)).done) && (a4.push(e3.value), a4.length !== l4); f4 = true)
                  ;
            } catch (r4) {
              o4 = true, n3 = r4;
            } finally {
              try {
                if (!f4 && null != t4["return"] && (u4 = t4["return"](), Object(u4) !== u4))
                  return;
              } finally {
                if (o4)
                  throw n3;
              }
            }
            return a4;
          }
        }
        function UseImageList_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        function useImageList(images) {
          var _useState = (0, compat_namespaceObject.useState)(images[0]), _useState2 = UseImageList_slicedToArray(_useState, 2), currentImage = _useState2[0], setCurrentImage = _useState2[1];
          var _useState3 = (0, compat_namespaceObject.useState)(0), _useState4 = UseImageList_slicedToArray(_useState3, 2), imageIndex = _useState4[0], setImageIndex = _useState4[1];
          var _useState5 = (0, compat_namespaceObject.useState)(images.length), _useState6 = UseImageList_slicedToArray(_useState5, 2), imageCount = _useState6[0], setImageCount = _useState6[1];
          var editingFiles = images.map(function(x4) {
            return x4.uploadedFile.filePath;
          });
          var currentFile = currentImage.uploadedFile.filePath;
          (0, compat_namespaceObject.useLayoutEffect)(function() {
            var hasFinishedEditing = !editingFiles.includes(currentFile);
            if (hasFinishedEditing) {
              setCurrentImage(images[0]);
              setImageIndex(function(i4) {
                return i4 + 1;
              });
            }
            setImageCount(imageIndex + images.length);
          }, [imageIndex, currentFile].concat(UseImageList_toConsumableArray(editingFiles)));
          return {
            currentFile,
            imageCount,
            imageIndex,
            currentImage
          };
        }
        ;
        var UploaderImageListEditor = function UploaderImageListEditor2(_ref) {
          var images = _ref.images, _onImageEdited = _ref.onImageEdited, upload = _ref.upload, options2 = _ref.options;
          var _useImageList = useImageList(images), currentFile = _useImageList.currentFile, imageCount = _useImageList.imageCount, imageIndex = _useImageList.imageIndex, currentImage = _useImageList.currentImage;
          return (0, jsx_runtime_namespaceObject.jsx)(ImageEditor, {
            options: options2,
            imageCount,
            imageIndex,
            originalImage: currentImage.uploadedFile,
            onImageEdited: function onImageEdited(keep, editedFile) {
              return _onImageEdited(keep, editedFile, currentImage.fileIndex);
            },
            upload
          }, currentFile);
        };
        ;
        function UseShowImageEditor_slicedToArray(arr, i4) {
          return UseShowImageEditor_arrayWithHoles(arr) || UseShowImageEditor_iterableToArrayLimit(arr, i4) || UseShowImageEditor_unsupportedIterableToArray(arr, i4) || UseShowImageEditor_nonIterableRest();
        }
        function UseShowImageEditor_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UseShowImageEditor_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return UseShowImageEditor_arrayLikeToArray(o4, minLen);
          var n3 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n3 === "Object" && o4.constructor)
            n3 = o4.constructor.name;
          if (n3 === "Map" || n3 === "Set")
            return Array.from(o4);
          if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
            return UseShowImageEditor_arrayLikeToArray(o4, minLen);
        }
        function UseShowImageEditor_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
            arr2[i4] = arr[i4];
          return arr2;
        }
        function UseShowImageEditor_iterableToArrayLimit(r3, l4) {
          var t4 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
          if (null != t4) {
            var e3, n3, i4, u4, a4 = [], f4 = true, o4 = false;
            try {
              if (i4 = (t4 = t4.call(r3)).next, 0 === l4) {
                if (Object(t4) !== t4)
                  return;
                f4 = false;
              } else
                for (; !(f4 = (e3 = i4.call(t4)).done) && (a4.push(e3.value), a4.length !== l4); f4 = true)
                  ;
            } catch (r4) {
              o4 = true, n3 = r4;
            } finally {
              try {
                if (!f4 && null != t4["return"] && (u4 = t4["return"](), Object(u4) !== u4))
                  return;
              } finally {
                if (o4)
                  throw n3;
              }
            }
            return a4;
          }
        }
        function UseShowImageEditor_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        function useShowImageEditor(pendingImages, onFileUploadDelay) {
          var _useState = (0, compat_namespaceObject.useState)(false), _useState2 = UseShowImageEditor_slicedToArray(_useState, 2), showImageScreen = _useState2[0], setShowImageScreen = _useState2[1];
          var _useState3 = (0, compat_namespaceObject.useState)(null), _useState4 = UseShowImageEditor_slicedToArray(_useState3, 2), showImageScreenTimeout = _useState4[0], setShowImageScreenTimeout = _useState4[1];
          (0, compat_namespaceObject.useEffect)(function() {
            if (pendingImages.length > 0) {
              var timeout = setTimeout(function() {
                setShowImageScreen(true);
              }, onFileUploadDelay);
              setShowImageScreenTimeout(timeout);
              return function() {
                return clearTimeout(timeout);
              };
            }
            if (showImageScreen) {
              setShowImageScreen(false);
            }
            if (showImageScreenTimeout !== null) {
              clearTimeout(showImageScreenTimeout);
              setShowImageScreenTimeout(null);
            }
          }, [pendingImages.length, showImageScreen]);
          return showImageScreen;
        }
        ;
        function UploadWidget_await(value, then, direct) {
          if (direct) {
            return then ? then(value) : value;
          }
          if (!value || !value.then) {
            value = Promise.resolve(value);
          }
          return then ? value.then(then) : value;
        }
        function _catch(body, recover) {
          try {
            var result = body();
          } catch (e3) {
            return recover(e3);
          }
          if (result && result.then) {
            return result.then(void 0, recover);
          }
          return result;
        }
        function _continue(value, then) {
          return value && value.then ? value.then(then) : then(value);
        }
        function UploadWidget_async(f4) {
          return function() {
            for (var args = [], i4 = 0; i4 < arguments.length; i4++) {
              args[i4] = arguments[i4];
            }
            try {
              return Promise.resolve(f4.apply(this, args));
            } catch (e3) {
              return Promise.reject(e3);
            }
          };
        }
        function _defineProperty(obj, key, value) {
          key = _toPropertyKey(key);
          if (key in obj) {
            Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _toPropertyKey(t4) {
          var i4 = _toPrimitive(t4, "string");
          return "symbol" == _typeof(i4) ? i4 : i4 + "";
        }
        function _toPrimitive(t4, r3) {
          if ("object" != _typeof(t4) || !t4)
            return t4;
          var e3 = t4[Symbol.toPrimitive];
          if (void 0 !== e3) {
            var i4 = e3.call(t4, r3 || "default");
            if ("object" != _typeof(i4))
              return i4;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === r3 ? String : Number)(t4);
        }
        function _typeof(o4) {
          "@babel/helpers - typeof";
          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o5) {
            return typeof o5;
          } : function(o5) {
            return o5 && "function" == typeof Symbol && o5.constructor === Symbol && o5 !== Symbol.prototype ? "symbol" : typeof o5;
          }, _typeof(o4);
        }
        function UploadWidget_toConsumableArray(arr) {
          return UploadWidget_arrayWithoutHoles(arr) || UploadWidget_iterableToArray(arr) || UploadWidget_unsupportedIterableToArray(arr) || UploadWidget_nonIterableSpread();
        }
        function UploadWidget_nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UploadWidget_iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
            return Array.from(iter);
        }
        function UploadWidget_arrayWithoutHoles(arr) {
          if (Array.isArray(arr))
            return UploadWidget_arrayLikeToArray(arr);
        }
        function UploadWidget_slicedToArray(arr, i4) {
          return UploadWidget_arrayWithHoles(arr) || UploadWidget_iterableToArrayLimit(arr, i4) || UploadWidget_unsupportedIterableToArray(arr, i4) || UploadWidget_nonIterableRest();
        }
        function UploadWidget_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UploadWidget_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return UploadWidget_arrayLikeToArray(o4, minLen);
          var n3 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n3 === "Object" && o4.constructor)
            n3 = o4.constructor.name;
          if (n3 === "Map" || n3 === "Set")
            return Array.from(o4);
          if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
            return UploadWidget_arrayLikeToArray(o4, minLen);
        }
        function UploadWidget_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
            arr2[i4] = arr[i4];
          return arr2;
        }
        function UploadWidget_iterableToArrayLimit(r3, l4) {
          var t4 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
          if (null != t4) {
            var e3, n3, i4, u4, a4 = [], f4 = true, o4 = false;
            try {
              if (i4 = (t4 = t4.call(r3)).next, 0 === l4) {
                if (Object(t4) !== t4)
                  return;
                f4 = false;
              } else
                for (; !(f4 = (e3 = i4.call(t4)).done) && (a4.push(e3.value), a4.length !== l4); f4 = true)
                  ;
            } catch (r4) {
              o4 = true, n3 = r4;
            } finally {
              try {
                if (!f4 && null != t4["return"] && (u4 = t4["return"](), Object(u4) !== u4))
                  return;
              } finally {
                if (o4)
                  throw n3;
              }
            }
            return a4;
          }
        }
        function UploadWidget_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var UploadWidget_rest = function(s3, e3) {
          var t4 = {};
          for (var p4 in s3)
            if (Object.prototype.hasOwnProperty.call(s3, p4) && e3.indexOf(p4) < 0)
              t4[p4] = s3[p4];
          if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i4 = 0, p4 = Object.getOwnPropertySymbols(s3); i4 < p4.length; i4++) {
              if (e3.indexOf(p4[i4]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p4[i4]))
                t4[p4[i4]] = s3[p4[i4]];
            }
          return t4;
        };
        function inferMimeType(fileName) {
          var _a, _b;
          var ext = ((_a = fileName.split(".").pop()) !== null && _a !== void 0 ? _a : "").trim().toLowerCase();
          var fallback = "application/octet-stream";
          var commonUnsupportedExtensions = {
            heic: "image/heic",
            heif: "image/heif"
          };
          return (_b = commonUnsupportedExtensions[ext]) !== null && _b !== void 0 ? _b : fallback;
        }
        function isValidMimeType(allowedMimeTypes, file) {
          var _a;
          if (allowedMimeTypes === void 0 || allowedMimeTypes.length === 0) {
            return true;
          }
          var actualMimeType = (_a = file.type === "" ? void 0 : file.type) !== null && _a !== void 0 ? _a : inferMimeType(file.name);
          var normalize = function normalize2(x4) {
            return x4.trim().toLowerCase();
          };
          var actualNormalized = normalize(actualMimeType);
          return allowedMimeTypes.some(function(x4) {
            var requiredNormalized = normalize(x4);
            return requiredNormalized === actualNormalized || requiredNormalized.endsWith("*") && actualNormalized.startsWith(requiredNormalized.substring(0, requiredNormalized.length - 1));
          });
        }
        var UploadWidget2 = function UploadWidget3(_ref) {
          var resolve = _ref.resolve, options2 = _ref.options, upload = _ref.upload;
          var _a;
          var _useState = (0, compat_namespaceObject.useState)(0), _useState2 = UploadWidget_slicedToArray(_useState, 2), setNextSparseFileIndex = _useState2[1];
          var _useState3 = (0, compat_namespaceObject.useState)(true), _useState4 = UploadWidget_slicedToArray(_useState3, 2), isInitialUpdate = _useState4[0], setIsInitialUpdate = _useState4[1];
          var _useState5 = (0, compat_namespaceObject.useState)({}), _useState6 = UploadWidget_slicedToArray(_useState5, 2), submittedFiles = _useState6[0], setSubmittedFiles = _useState6[1];
          var submittedFileList = Object.values(submittedFiles).filter(isDefined);
          var uploadedFiles = submittedFileList.filter(isUploadedFile);
          var pendingFiles = submittedFileList.filter(isPendingFile);
          var failedFiles = submittedFileList.filter(isFailedFile);
          var makeDeps = function makeDeps2(fileLists) {
            return [].concat(UploadWidget_toConsumableArray(fileLists.map(function(x4) {
              return x4.length;
            })), UploadWidget_toConsumableArray(fileLists.flatMap(function(x4) {
              return x4.map(function(y3) {
                return y3.fileIndex;
              });
            })));
          };
          var onFileUploadDelay = progressWheelDelay + (progressWheelVanish - 100);
          var multi = options2.multi, tags = options2.tags, metadata = options2.metadata, path = options2.path;
          var uploadedFilesReady = uploadedFiles.filter(function(x4) {
            return x4.isReady;
          });
          var uploadedFilesNotReady = uploadedFiles.filter(function(x4) {
            return !x4.isReady;
          });
          var uploadedFilesReadyResult = uploadedFilesReady.map(function(x4) {
            return UploadWidgetResult.from(x4.uploadedFile, x4.editedFile);
          });
          var canEditImages = options2.editor.images.crop;
          var canPreviewImages = options2.editor.images.preview;
          var fileRequiresUserInteraction = function fileRequiresUserInteraction2(uploadedFile) {
            return (canEditImages || canPreviewImages) && isEditableImage(uploadedFile) || canPreviewImages && isReadOnlyImage(uploadedFile);
          };
          var showImageEditor = useShowImageEditor(uploadedFilesNotReady, onFileUploadDelay);
          var onFileReady = function onFileReady2(keepFile, editedFile, sparseFileIndex) {
            if (!keepFile) {
              removeSubmittedFile(sparseFileIndex);
            } else {
              updateFile(sparseFileIndex, "uploaded", function(file) {
                return Object.assign(Object.assign({}, file), {
                  editedFile,
                  isReady: true
                });
              });
            }
          };
          var finalize = function finalize2() {
            resolve(uploadedFilesReadyResult);
          };
          (0, compat_namespaceObject.useLayoutEffect)(function() {
            if (isInitialUpdate) {
              setIsInitialUpdate(false);
              return;
            }
            options2.onUpdate({
              failedFiles: failedFiles.map(function(_ref2) {
                var file = _ref2.file, error = _ref2.error;
                return {
                  file,
                  error
                };
              }),
              uploadedFiles: uploadedFilesReadyResult,
              pendingFiles: [].concat(UploadWidget_toConsumableArray(pendingFiles), UploadWidget_toConsumableArray(uploadedFilesNotReady)).map(function(_ref3) {
                var file = _ref3.file;
                return {
                  file
                };
              })
            });
            var shouldCloseModalImmediatelyAfterUpload = !multi && uploadedFilesReady.length > 0 && !options2.showFinishButton && options2.layout === "modal";
            if (shouldCloseModalImmediatelyAfterUpload) {
              var firstUploadedFile = uploadedFilesReadyResult.slice(0, 1);
              var doResolve = function doResolve2() {
                return resolve(firstUploadedFile);
              };
              var previousScreenWasEditor = fileRequiresUserInteraction(uploadedFiles[0].uploadedFile);
              if (previousScreenWasEditor) {
                doResolve();
              } else {
                var timeout = setTimeout(doResolve, onFileUploadDelay);
                return function() {
                  return clearTimeout(timeout);
                };
              }
            }
          }, makeDeps([pendingFiles, uploadedFilesNotReady, uploadedFilesReady, failedFiles]));
          var removeSubmittedFile = function removeSubmittedFile2(fileIndex) {
            setSubmittedFiles(function(x4) {
              var _a2 = x4, _b2 = fileIndex, removed = _a2[_b2], rest = UploadWidget_rest(_a2, [_typeof(_b2) === "symbol" ? _b2 : _b2 + ""]);
              if ((removed === null || removed === void 0 ? void 0 : removed.type) === "uploading") {
                removed.cancel();
              }
              return rest;
            });
          };
          var setSubmittedFile = function setSubmittedFile2(fileIndex, file) {
            setSubmittedFiles(function(x4) {
              return Object.assign(Object.assign({}, x4), _defineProperty({}, fileIndex, file));
            });
          };
          var updateFile = function updateFile2(fileIndex, fileType, file) {
            setSubmittedFiles(function(x4) {
              var oldFile = x4[fileIndex];
              if (oldFile === void 0 || oldFile.type !== fileType) {
                return x4;
              }
              return Object.assign(Object.assign({}, x4), _defineProperty({}, fileIndex, file(oldFile)));
            });
          };
          var doUpload = UploadWidget_async(function(file, fileIndex) {
            var _a2, _b2;
            var raiseValidationError = function raiseValidationError2(errorMessage) {
              var error = new UploadWidgetValidationError(errorMessage);
              setSubmittedFile(fileIndex, {
                file,
                fileIndex,
                error,
                type: "failed"
              });
              throw error;
            };
            var maxFileSizeBytes = options2.maxFileSizeBytes, mimeTypes2 = options2.mimeTypes, onPreUpload = options2.onPreUpload;
            if (maxFileSizeBytes !== void 0 && file.size > maxFileSizeBytes) {
              raiseValidationError("".concat(options2.locale.fileSizeLimitPrefix, " ").concat(humanFileSize(maxFileSizeBytes)));
            }
            if (!isValidMimeType(mimeTypes2, file)) {
              raiseValidationError(options2.locale.unsupportedFileType);
            }
            setSubmittedFile(fileIndex, {
              file,
              fileIndex,
              type: "preprocessing"
            });
            var preUploadResult;
            return _continue(_catch(function() {
              return UploadWidget_await(onPreUpload(file), function(_onPreUpload) {
                preUploadResult = (_a2 = _onPreUpload) !== null && _a2 !== void 0 ? _a2 : void 0;
              });
            }, function(e3) {
              preUploadResult = {
                errorMessage: options2.locale.customValidationFailed
              };
              console.error("[upload-widget] onPreUpload function raised an error.", e3);
            }), function() {
              if ((preUploadResult === null || preUploadResult === void 0 ? void 0 : preUploadResult.errorMessage) !== void 0) {
                raiseValidationError(preUploadResult.errorMessage);
              }
              var fileToUpload = (_b2 = preUploadResult === null || preUploadResult === void 0 ? void 0 : preUploadResult.transformedFile) !== null && _b2 !== void 0 ? _b2 : file;
              return UploadWidget_await(upload.uploadFile(fileToUpload, {
                path,
                metadata,
                tags,
                onBegin: function onBegin(_ref4) {
                  var cancel = _ref4.cancel;
                  return setSubmittedFile(fileIndex, {
                    // IMPORTANT: use 'setSubmittedFile' as file may already exist in collection as a "validating" file.
                    file: fileToUpload,
                    fileIndex,
                    cancel,
                    progress: 0,
                    type: "uploading"
                  });
                },
                onProgress: function onProgress(_ref5) {
                  var bytesSent = _ref5.bytesSent, bytesTotal = _ref5.bytesTotal;
                  return updateFile(fileIndex, "uploading", function(uploadingFile) {
                    return Object.assign(Object.assign({}, uploadingFile), {
                      progress: bytesSent / bytesTotal
                    });
                  });
                }
              }));
            });
          });
          var addFiles = function addFiles2(files) {
            return setNextSparseFileIndex(function(nextSparseFileIndex) {
              var maxFiles = multi ? options2.maxFileCount : 1;
              var filesToTake = maxFiles === void 0 ? files.length : Math.min(files.length, maxFiles - submittedFileList.length);
              if (filesToTake <= 0) {
                return nextSparseFileIndex;
              }
              files.slice(0, filesToTake).forEach(function(file, i4) {
                var fileIndex = nextSparseFileIndex + i4;
                doUpload(file, fileIndex).then(function(uploadedFile) {
                  updateFile(fileIndex, "uploading", function() {
                    return {
                      file,
                      fileIndex,
                      uploadedFile,
                      editedFile: void 0,
                      isReady: !fileRequiresUserInteraction(uploadedFile),
                      type: "uploaded"
                    };
                  });
                }, function(error) {
                  updateFile(fileIndex, "uploading", function(uploadingFile) {
                    return {
                      fileIndex,
                      error,
                      file: uploadingFile.file,
                      type: "failed"
                    };
                  });
                });
              });
              return nextSparseFileIndex + files.length;
            });
          };
          var _b = useDragDrop(addFiles), isDragging = _b.isDragging, rootProps = UploadWidget_rest(_b, ["isDragging"]);
          var mimeTypes = (_a = options2.mimeTypes) !== null && _a !== void 0 ? _a : [];
          var isImageUploader = mimeTypes.length > 0 && mimeTypes.every(function(x4) {
            return x4.trim().toLowerCase().startsWith("image/");
          });
          return (0, jsx_runtime_namespaceObject.jsx)(UploadWidgetInternal_UploadWidgetInternal, Object.assign({
            htmlProps: rootProps,
            isDraggable: true,
            isDragging,
            layout: options2.layout,
            multi: options2.multi
          }, {
            children: submittedFileList.length === 0 ? (0, jsx_runtime_namespaceObject.jsx)(UploaderWelcomeScreen, {
              options: options2,
              addFiles,
              isImageUploader
            }) : showImageEditor && uploadedFilesNotReady.length > 0 ? (0, jsx_runtime_namespaceObject.jsx)(UploaderImageListEditor, {
              images: uploadedFilesNotReady,
              onImageEdited: onFileReady,
              upload,
              options: options2
            }) : (0, jsx_runtime_namespaceObject.jsx)(UploaderMainScreen_UploaderMainScreen, {
              options: options2,
              addFiles,
              submittedFiles: submittedFileList,
              uploadedFiles,
              remove: removeSubmittedFile,
              finalize,
              isImageUploader
            })
          }));
        };
        ;
        var UploadWidgetContainer_UploadWidgetContainer = function UploadWidgetContainer2(_ref) {
          var upload = _ref.upload, resolve = _ref.resolve, reject = _ref.reject, options2 = _ref.options;
          return (0, jsx_runtime_namespaceObject.jsx)(jsx_runtime_namespaceObject.Fragment, {
            children: upload.type === "error" ? (0, jsx_runtime_namespaceObject.jsx)(ConfigError, {
              error: upload.value,
              layout: options2.layout
            }) : (0, jsx_runtime_namespaceObject.jsx)(UploadWidget2, {
              resolve,
              reject,
              options: options2,
              upload: upload.value
            })
          });
        };
        ;
        function ModalContainer_slicedToArray(arr, i4) {
          return ModalContainer_arrayWithHoles(arr) || ModalContainer_iterableToArrayLimit(arr, i4) || ModalContainer_unsupportedIterableToArray(arr, i4) || ModalContainer_nonIterableRest();
        }
        function ModalContainer_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function ModalContainer_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return ModalContainer_arrayLikeToArray(o4, minLen);
          var n3 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n3 === "Object" && o4.constructor)
            n3 = o4.constructor.name;
          if (n3 === "Map" || n3 === "Set")
            return Array.from(o4);
          if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
            return ModalContainer_arrayLikeToArray(o4, minLen);
        }
        function ModalContainer_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
            arr2[i4] = arr[i4];
          return arr2;
        }
        function ModalContainer_iterableToArrayLimit(r3, l4) {
          var t4 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
          if (null != t4) {
            var e3, n3, i4, u4, a4 = [], f4 = true, o4 = false;
            try {
              if (i4 = (t4 = t4.call(r3)).next, 0 === l4) {
                if (Object(t4) !== t4)
                  return;
                f4 = false;
              } else
                for (; !(f4 = (e3 = i4.call(t4)).done) && (a4.push(e3.value), a4.length !== l4); f4 = true)
                  ;
            } catch (r4) {
              o4 = true, n3 = r4;
            } finally {
              try {
                if (!f4 && null != t4["return"] && (u4 = t4["return"](), Object(u4) !== u4))
                  return;
              } finally {
                if (o4)
                  throw n3;
              }
            }
            return a4;
          }
        }
        function ModalContainer_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var ModalContainer = function ModalContainer2(_ref) {
          var widgetProps = _ref.widgetProps;
          var _useState = (0, compat_namespaceObject.useState)(true), _useState2 = ModalContainer_slicedToArray(_useState, 2), isOpen = _useState2[0], setIsOpen = _useState2[1];
          var resolve = function resolve2(files) {
            widgetProps.resolve(files);
            setIsOpen(false);
          };
          var reject = function reject2(error) {
            widgetProps.reject(error);
            setIsOpen(false);
          };
          if (!isOpen) {
            return (0, jsx_runtime_namespaceObject.jsx)(jsx_runtime_namespaceObject.Fragment, {});
          }
          return (0, jsx_runtime_namespaceObject.jsx)(Modal_Modal, Object.assign({
            closeModal: function closeModal() {
              return resolve([]);
            }
          }, {
            children: (0, jsx_runtime_namespaceObject.jsx)(UploadWidgetContainer_UploadWidgetContainer, Object.assign({}, widgetProps, {
              resolve,
              reject
            }))
          }));
        };
        ;
        function RootContainer_slicedToArray(arr, i4) {
          return RootContainer_arrayWithHoles(arr) || RootContainer_iterableToArrayLimit(arr, i4) || RootContainer_unsupportedIterableToArray(arr, i4) || RootContainer_nonIterableRest();
        }
        function RootContainer_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function RootContainer_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return RootContainer_arrayLikeToArray(o4, minLen);
          var n3 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n3 === "Object" && o4.constructor)
            n3 = o4.constructor.name;
          if (n3 === "Map" || n3 === "Set")
            return Array.from(o4);
          if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
            return RootContainer_arrayLikeToArray(o4, minLen);
        }
        function RootContainer_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
            arr2[i4] = arr[i4];
          return arr2;
        }
        function RootContainer_iterableToArrayLimit(r3, l4) {
          var t4 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
          if (null != t4) {
            var e3, n3, i4, u4, a4 = [], f4 = true, o4 = false;
            try {
              if (i4 = (t4 = t4.call(r3)).next, 0 === l4) {
                if (Object(t4) !== t4)
                  return;
                f4 = false;
              } else
                for (; !(f4 = (e3 = i4.call(t4)).done) && (a4.push(e3.value), a4.length !== l4); f4 = true)
                  ;
            } catch (r4) {
              o4 = true, n3 = r4;
            } finally {
              try {
                if (!f4 && null != t4["return"] && (u4 = t4["return"](), Object(u4) !== u4))
                  return;
              } finally {
                if (o4)
                  throw n3;
              }
            }
            return a4;
          }
        }
        function RootContainer_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        var RootContainer = function RootContainer2(_ref) {
          var widgetProps = _ref.widgetProps;
          var _useState = (0, compat_namespaceObject.useState)(0), _useState2 = RootContainer_slicedToArray(_useState, 2), refreshKey = _useState2[0], setRefreshKey = _useState2[1];
          var _useState3 = (0, compat_namespaceObject.useState)(widgetProps.options), _useState4 = RootContainer_slicedToArray(_useState3, 2), options2 = _useState4[0], setOptions = _useState4[1];
          var _getElementDimensions = getElementDimensionsOnResize(true, []), _getElementDimensions2 = RootContainer_slicedToArray(_getElementDimensions, 2), dimensions = _getElementDimensions2[0], containerRef = _getElementDimensions2[1];
          var widgetPropsUpdated = Object.assign(Object.assign({}, widgetProps), {
            options: options2
          });
          (0, compat_namespaceObject.useEffect)(function() {
            options2.onInit({
              close: function close() {
                widgetProps.resolve([]);
              },
              reset: function reset() {
                setRefreshKey(function(x4) {
                  return x4 + 1;
                });
                if (widgetProps.upload.type === "success") {
                  widgetProps.upload.value.cancelAll();
                }
              },
              updateConfig: function updateConfig(newOptionsPartial) {
                setOptions(UploadWidgetConfigRequired.from(newOptionsPartial));
              }
            });
          }, []);
          var isFullScreen = dimensions !== void 0 && (dimensions.width <= options2.styles.breakpoints.fullScreenWidth || dimensions.height <= options2.styles.breakpoints.fullScreenHeight);
          return (0, jsx_runtime_namespaceObject.jsx)(external_preact_namespaceObject.Fragment, {
            children: (0, jsx_runtime_namespaceObject.jsx)("div", Object.assign({
              ref: containerRef,
              className: external_classnames_default()("upload-widget", {
                "upload-widget--with-modal": options2.layout === "modal",
                "upload-widget--full-screen": isFullScreen
              }),
              style: {
                "--error-color": options2.styles.colors.error,
                "--primary-color": options2.styles.colors.primary,
                "--primary-active-color": options2.styles.colors.active,
                "--shade-100": options2.styles.colors.shade100,
                "--shade-200": options2.styles.colors.shade200,
                "--shade-300": options2.styles.colors.shade300,
                "--shade-400": options2.styles.colors.shade400,
                "--shade-500": options2.styles.colors.shade500,
                "--shade-600": options2.styles.colors.shade600,
                "--shade-700": options2.styles.colors.shade700,
                "--shade-800": options2.styles.colors.shade800,
                "--shade-900": options2.styles.colors.shade900,
                "--base-font-family": options2.styles.fontFamilies.base,
                "--base-font-size": "".concat(options2.styles.fontSizes.base, "px")
              }
            }, {
              children: options2.layout === "modal" ? (0, jsx_runtime_namespaceObject.jsx)(ModalContainer, {
                widgetProps: widgetPropsUpdated
              }) : (0, jsx_runtime_namespaceObject.jsx)(UploadWidgetContainer_UploadWidgetContainer, Object.assign({}, widgetPropsUpdated))
            }))
          }, refreshKey);
        };
        ;
        function UploadTracker_typeof(o4) {
          "@babel/helpers - typeof";
          return UploadTracker_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o5) {
            return typeof o5;
          } : function(o5) {
            return o5 && "function" == typeof Symbol && o5.constructor === Symbol && o5 !== Symbol.prototype ? "symbol" : typeof o5;
          }, UploadTracker_typeof(o4);
        }
        function UploadTracker_toConsumableArray(arr) {
          return UploadTracker_arrayWithoutHoles(arr) || UploadTracker_iterableToArray(arr) || UploadTracker_unsupportedIterableToArray(arr) || UploadTracker_nonIterableSpread();
        }
        function UploadTracker_nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function UploadTracker_unsupportedIterableToArray(o4, minLen) {
          if (!o4)
            return;
          if (typeof o4 === "string")
            return UploadTracker_arrayLikeToArray(o4, minLen);
          var n3 = Object.prototype.toString.call(o4).slice(8, -1);
          if (n3 === "Object" && o4.constructor)
            n3 = o4.constructor.name;
          if (n3 === "Map" || n3 === "Set")
            return Array.from(o4);
          if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
            return UploadTracker_arrayLikeToArray(o4, minLen);
        }
        function UploadTracker_iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
            return Array.from(iter);
        }
        function UploadTracker_arrayWithoutHoles(arr) {
          if (Array.isArray(arr))
            return UploadTracker_arrayLikeToArray(arr);
        }
        function UploadTracker_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
            arr2[i4] = arr[i4];
          return arr2;
        }
        function UploadTracker_await(value, then, direct) {
          if (direct) {
            return then ? then(value) : value;
          }
          if (!value || !value.then) {
            value = Promise.resolve(value);
          }
          return then ? value.then(then) : value;
        }
        function _rethrow(thrown, value) {
          if (thrown)
            throw value;
          return value;
        }
        function _finallyRethrows(body, finalizer) {
          try {
            var result = body();
          } catch (e3) {
            return finalizer(true, e3);
          }
          if (result && result.then) {
            return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
          }
          return finalizer(false, result);
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i4 = 0; i4 < props.length; i4++) {
            var descriptor = props[i4];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, UploadTracker_toPropertyKey(descriptor.key), descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }
        function UploadTracker_toPropertyKey(t4) {
          var i4 = UploadTracker_toPrimitive(t4, "string");
          return "symbol" == UploadTracker_typeof(i4) ? i4 : i4 + "";
        }
        function UploadTracker_toPrimitive(t4, r3) {
          if ("object" != UploadTracker_typeof(t4) || !t4)
            return t4;
          var e3 = t4[Symbol.toPrimitive];
          if (void 0 !== e3) {
            var i4 = e3.call(t4, r3 || "default");
            if ("object" != UploadTracker_typeof(i4))
              return i4;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === r3 ? String : Number)(t4);
        }
        var UploadTracker = function() {
          function UploadTracker2(config) {
            _classCallCheck(this, UploadTracker2);
            this.config = config;
            this.uploadCancellations = [];
            this.uploadManager = new sdk_namespaceObject.UploadManager(config);
          }
          return _createClass(UploadTracker2, [{
            key: "cancelAll",
            value: function cancelAll() {
              this.uploadCancellations.forEach(function(cancel) {
                return cancel();
              });
              this.uploadCancellations = [];
            }
          }, {
            key: "uploadFile",
            value: function uploadFile(file, request) {
              try {
                var _this = this;
                var _a;
                var cancel;
                return _finallyRethrows(function() {
                  var cancellationToken = (_a = request.cancellationToken) !== null && _a !== void 0 ? _a : {
                    isCancelled: false
                  };
                  cancel = function cancel2() {
                    cancellationToken.isCancelled = true;
                  };
                  _this.uploadCancellations = [].concat(UploadTracker_toConsumableArray(_this.uploadCancellations), [cancel]);
                  if (request.onBegin !== void 0) {
                    request.onBegin({
                      cancel
                    });
                  }
                  return UploadTracker_await(_this.uploadManager.upload(Object.assign(Object.assign({}, request), {
                    cancellationToken,
                    data: file
                  })), function(fileDetails) {
                    return Object.assign(Object.assign({}, fileDetails), {
                      file
                    });
                  });
                }, function(_wasThrown, _result) {
                  _this.uploadCancellations = _this.uploadCancellations.filter(function(x4) {
                    return x4 !== cancel;
                  });
                  return _rethrow(_wasThrown, _result);
                });
              } catch (e3) {
                return Promise.reject(e3);
              }
            }
          }]);
        }();
        ;
        function UploadWidget_typeof(o4) {
          "@babel/helpers - typeof";
          return UploadWidget_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o5) {
            return typeof o5;
          } : function(o5) {
            return o5 && "function" == typeof Symbol && o5.constructor === Symbol && o5 !== Symbol.prototype ? "symbol" : typeof o5;
          }, UploadWidget_typeof(o4);
        }
        function src_UploadWidget_await(value, then, direct) {
          if (direct) {
            return then ? then(value) : value;
          }
          if (!value || !value.then) {
            value = Promise.resolve(value);
          }
          return then ? value.then(then) : value;
        }
        function UploadWidget_classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function UploadWidget_defineProperties(target, props) {
          for (var i4 = 0; i4 < props.length; i4++) {
            var descriptor = props[i4];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, UploadWidget_toPropertyKey(descriptor.key), descriptor);
          }
        }
        function UploadWidget_createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            UploadWidget_defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            UploadWidget_defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }
        function UploadWidget_toPropertyKey(t4) {
          var i4 = UploadWidget_toPrimitive(t4, "string");
          return "symbol" == UploadWidget_typeof(i4) ? i4 : i4 + "";
        }
        function UploadWidget_toPrimitive(t4, r3) {
          if ("object" != UploadWidget_typeof(t4) || !t4)
            return t4;
          var e3 = t4[Symbol.toPrimitive];
          if (void 0 !== e3) {
            var i4 = e3.call(t4, r3 || "default");
            if ("object" != UploadWidget_typeof(i4))
              return i4;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === r3 ? String : Number)(t4);
        }
        var UploadWidget_UploadWidget = function() {
          function UploadWidget3() {
            UploadWidget_classCallCheck(this, UploadWidget3);
          }
          return UploadWidget_createClass(UploadWidget3, null, [{
            key: "open",
            value: function open(optionsMaybe) {
              try {
                var _a;
                var uploadTracker;
                try {
                  uploadTracker = {
                    type: "success",
                    value: new UploadTracker(optionsMaybe)
                  };
                } catch (e3) {
                  uploadTracker = {
                    type: "error",
                    value: e3
                  };
                }
                var options2 = UploadWidgetConfigRequired.from(optionsMaybe);
                return src_UploadWidget_await(UploadWidget3.getBody(), function(body) {
                  var container = options2.container !== void 0 ? typeof options2.container === "string" ? (_a = document.querySelector(options2.container)) !== null && _a !== void 0 ? _a : void 0 : options2.container : void 0;
                  var widget = document.createElement("div");
                  (container !== null && container !== void 0 ? container : body).appendChild(widget);
                  widget.className = "upload-widget__root";
                  return src_UploadWidget_await(new Promise(function(resolve, reject) {
                    var props = {
                      upload: uploadTracker,
                      resolve,
                      reject,
                      options: options2
                    };
                    (0, external_preact_namespaceObject.render)((0, jsx_runtime_namespaceObject.jsx)(RootContainer, {
                      widgetProps: props
                    }), widget);
                  }), function(uploadedFiles) {
                    widget.remove();
                    if (uploadTracker.type === "success") {
                      uploadTracker.value.cancelAll();
                    }
                    return uploadedFiles;
                  });
                });
              } catch (e3) {
                return Promise.reject(e3);
              }
            }
            /**
             * Required when the 'uploadWidget.open()' method is called from within '<head>'.
             */
          }, {
            key: "getBody",
            value: function getBody() {
              try {
                return src_UploadWidget_await(new Promise(function(resolve) {
                  var attempt = function attempt2() {
                    var _a;
                    var bodyMaybe = (_a = document.body) !== null && _a !== void 0 ? _a : void 0;
                    if (bodyMaybe !== void 0) {
                      resolve(bodyMaybe);
                    }
                    setTimeout(attempt2, 100);
                  };
                  attempt();
                }));
              } catch (e3) {
                return Promise.reject(e3);
              }
            }
          }]);
        }();
        ;
        function UploadWidgetValidationError_typeof(o4) {
          "@babel/helpers - typeof";
          return UploadWidgetValidationError_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o5) {
            return typeof o5;
          } : function(o5) {
            return o5 && "function" == typeof Symbol && o5.constructor === Symbol && o5 !== Symbol.prototype ? "symbol" : typeof o5;
          }, UploadWidgetValidationError_typeof(o4);
        }
        function UploadWidgetValidationError_defineProperties(target, props) {
          for (var i4 = 0; i4 < props.length; i4++) {
            var descriptor = props[i4];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, UploadWidgetValidationError_toPropertyKey(descriptor.key), descriptor);
          }
        }
        function UploadWidgetValidationError_createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            UploadWidgetValidationError_defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            UploadWidgetValidationError_defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }
        function UploadWidgetValidationError_toPropertyKey(t4) {
          var i4 = UploadWidgetValidationError_toPrimitive(t4, "string");
          return "symbol" == UploadWidgetValidationError_typeof(i4) ? i4 : i4 + "";
        }
        function UploadWidgetValidationError_toPrimitive(t4, r3) {
          if ("object" != UploadWidgetValidationError_typeof(t4) || !t4)
            return t4;
          var e3 = t4[Symbol.toPrimitive];
          if (void 0 !== e3) {
            var i4 = e3.call(t4, r3 || "default");
            if ("object" != UploadWidgetValidationError_typeof(i4))
              return i4;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === r3 ? String : Number)(t4);
        }
        function UploadWidgetValidationError_classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _callSuper(t4, o4, e3) {
          return o4 = _getPrototypeOf(o4), _possibleConstructorReturn(t4, _isNativeReflectConstruct() ? Reflect.construct(o4, e3 || [], _getPrototypeOf(t4).constructor) : o4.apply(t4, e3));
        }
        function _possibleConstructorReturn(self, call) {
          if (call && (UploadWidgetValidationError_typeof(call) === "object" || typeof call === "function")) {
            return call;
          } else if (call !== void 0) {
            throw new TypeError("Derived constructors may only return object or undefined");
          }
          return _assertThisInitialized(self);
        }
        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return self;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
          Object.defineProperty(subClass, "prototype", { writable: false });
          if (superClass)
            _setPrototypeOf(subClass, superClass);
        }
        function _wrapNativeSuper(Class) {
          var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
          _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
            if (Class2 === null || !_isNativeFunction(Class2))
              return Class2;
            if (typeof Class2 !== "function") {
              throw new TypeError("Super expression must either be null or a function");
            }
            if (typeof _cache !== "undefined") {
              if (_cache.has(Class2))
                return _cache.get(Class2);
              _cache.set(Class2, Wrapper);
            }
            function Wrapper() {
              return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
            }
            Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
            return _setPrototypeOf(Wrapper, Class2);
          };
          return _wrapNativeSuper(Class);
        }
        function _construct(t4, e3, r3) {
          if (_isNativeReflectConstruct())
            return Reflect.construct.apply(null, arguments);
          var o4 = [null];
          o4.push.apply(o4, e3);
          var p4 = new (t4.bind.apply(t4, o4))();
          return r3 && _setPrototypeOf(p4, r3.prototype), p4;
        }
        function _isNativeReflectConstruct() {
          try {
            var t4 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            }));
          } catch (t5) {
          }
          return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
            return !!t4;
          })();
        }
        function _isNativeFunction(fn2) {
          try {
            return Function.toString.call(fn2).indexOf("[native code]") !== -1;
          } catch (e3) {
            return typeof fn2 === "function";
          }
        }
        function _setPrototypeOf(o4, p4) {
          _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o5, p5) {
            o5.__proto__ = p5;
            return o5;
          };
          return _setPrototypeOf(o4, p4);
        }
        function _getPrototypeOf(o4) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o5) {
            return o5.__proto__ || Object.getPrototypeOf(o5);
          };
          return _getPrototypeOf(o4);
        }
        var UploadWidgetValidationError = function(_Error) {
          function UploadWidgetValidationError2(message) {
            var _this;
            UploadWidgetValidationError_classCallCheck(this, UploadWidgetValidationError2);
            _this = _callSuper(this, UploadWidgetValidationError2, [message]);
            _this.name = "UploadWidgetValidationError";
            return _this;
          }
          _inherits(UploadWidgetValidationError2, _Error);
          return UploadWidgetValidationError_createClass(UploadWidgetValidationError2);
        }(_wrapNativeSuper(Error));
        ;
      }();
      module.exports = __webpack_exports__;
    })();
  }
});

// node_modules/@bytescale/upload-widget-angular/fesm2022/bytescale-upload-widget-angular.mjs
var import_upload_widget = __toESM(require_main2(), 1);
var _c0 = ["container"];
var UploadDropzoneComponent = class _UploadDropzoneComponent {
  options;
  onComplete;
  onUpdate;
  width = "600px";
  height = "375px";
  container;
  ngAfterViewInit() {
    const onUpdateParams = this.onUpdate === void 0 ? {} : {
      onUpdate: this.onUpdate
    };
    import_upload_widget.UploadWidget.open(__spreadProps(__spreadValues(__spreadValues({}, this.getOptions()), onUpdateParams), {
      container: this.container.nativeElement,
      layout: "inline"
    })).then((files) => {
      if (this.onComplete !== void 0) {
        this.onComplete(files);
      }
    }, (error) => console.error("Uploader error.", error));
  }
  getOptions() {
    if (this.options === void 0) {
      throw new Error("[bytescale-upload-widget] You must provide the 'options' attribute to the 'UploadDropzone' component.");
    }
    return this.options;
  }
  static ɵfac = function UploadDropzoneComponent_Factory(t4) {
    return new (t4 || _UploadDropzoneComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _UploadDropzoneComponent,
    selectors: [["upload-dropzone"]],
    viewQuery: function UploadDropzoneComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
      }
    },
    inputs: {
      options: "options",
      onComplete: "onComplete",
      onUpdate: "onUpdate",
      width: "width",
      height: "height"
    },
    decls: 2,
    vars: 4,
    consts: [["container", ""]],
    template: function UploadDropzoneComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelement(0, "div", null, 0);
      }
      if (rf & 2) {
        ɵɵstyleMapInterpolate2("position: relative; width: 100%; min-width: 280px; maxWidth: ", ctx.width, "; height: ", ctx.height, "");
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadDropzoneComponent, [{
    type: Component,
    args: [{
      selector: "upload-dropzone",
      template: `
    <div
      #container
      style="position: relative; width: 100%; min-width: 280px; maxWidth: {{ width }}; height: {{ height }}"
    ></div>
  `
    }]
  }], null, {
    options: [{
      type: Input,
      args: ["options"]
    }],
    onComplete: [{
      type: Input,
      args: ["onComplete"]
    }],
    onUpdate: [{
      type: Input,
      args: ["onUpdate"]
    }],
    width: [{
      type: Input,
      args: ["width"]
    }],
    height: [{
      type: Input,
      args: ["height"]
    }],
    container: [{
      type: ViewChild,
      args: ["container"]
    }]
  });
})();
var UploadButtonDirective = class _UploadButtonDirective {
  options;
  onComplete;
  onClick(event) {
    event.preventDefault();
    import_upload_widget.UploadWidget.open(this.getOptions()).then((files) => {
      if (this.onComplete !== void 0) {
        this.onComplete(files);
      }
    }, (error) => console.error("Uploader error.", error));
  }
  ngOnInit() {
    try {
      this.getOptions();
    } catch (e3) {
      console.error(e3);
    }
  }
  getOptions() {
    if (this.options === void 0) {
      throw new Error("[bytescale-upload-widget] You must provide the 'uploadOptions' attribute to elements marked with the 'uploadButton' directive.");
    }
    return this.options;
  }
  static ɵfac = function UploadButtonDirective_Factory(t4) {
    return new (t4 || _UploadButtonDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _UploadButtonDirective,
    selectors: [["", "uploadButton", ""]],
    hostBindings: function UploadButtonDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function UploadButtonDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    inputs: {
      options: [InputFlags.None, "uploadOptions", "options"],
      onComplete: [InputFlags.None, "uploadComplete", "onComplete"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadButtonDirective, [{
    type: Directive,
    args: [{
      selector: "[uploadButton]"
    }]
  }], null, {
    options: [{
      type: Input,
      args: ["uploadOptions"]
    }],
    onComplete: [{
      type: Input,
      args: ["uploadComplete"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var UploadWidgetModule = class _UploadWidgetModule {
  static ɵfac = function UploadWidgetModule_Factory(t4) {
    return new (t4 || _UploadWidgetModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _UploadWidgetModule,
    declarations: [UploadDropzoneComponent, UploadButtonDirective],
    exports: [UploadDropzoneComponent, UploadButtonDirective]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadWidgetModule, [{
    type: NgModule,
    args: [{
      declarations: [UploadDropzoneComponent, UploadButtonDirective],
      imports: [],
      exports: [UploadDropzoneComponent, UploadButtonDirective]
    }]
  }], null, null);
})();
export {
  UploadButtonDirective,
  UploadDropzoneComponent,
  UploadWidgetModule
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=@bytescale_upload-widget-angular.js.map
