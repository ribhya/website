!(function (e, t) {
  if ('object' == typeof exports && 'object' == typeof module) module.exports = t()
  else if ('function' == typeof define && define.amd) define([], t)
  else {
    var n = t()
    for (var o in n) ('object' == typeof exports ? exports : e)[o] = n[o]
  }
})(self, () =>
  (() => {
    'use strict'
    var e = {
        492: (e, t, n) => {
          n.r(t),
            n.d(t, {
              afterMain: () => x,
              afterRead: () => g,
              afterWrite: () => C,
              applyStyles: () => _,
              arrow: () => J,
              auto: () => a,
              basePlacements: () => l,
              beforeMain: () => b,
              beforeRead: () => y,
              beforeWrite: () => O,
              bottom: () => r,
              clippingParents: () => u,
              computeStyles: () => ne,
              createPopper: () => _e,
              createPopperBase: () => Te,
              createPopperLite: () => je,
              detectOverflow: () => we,
              end: () => f,
              eventListeners: () => re,
              flip: () => ge,
              hide: () => xe,
              left: () => s,
              main: () => E,
              modifierPhases: () => L,
              offset: () => Oe,
              placements: () => v,
              popper: () => d,
              popperGenerator: () => De,
              popperOffsets: () => Se,
              preventOverflow: () => Ce,
              read: () => w,
              reference: () => h,
              right: () => i,
              start: () => c,
              top: () => o,
              variationPlacements: () => m,
              viewport: () => p,
              write: () => S,
            })
          var o = 'top',
            r = 'bottom',
            i = 'right',
            s = 'left',
            a = 'auto',
            l = [o, r, i, s],
            c = 'start',
            f = 'end',
            u = 'clippingParents',
            p = 'viewport',
            d = 'popper',
            h = 'reference',
            m = l.reduce(function (e, t) {
              return e.concat([t + '-' + c, t + '-' + f])
            }, []),
            v = [].concat(l, [a]).reduce(function (e, t) {
              return e.concat([t, t + '-' + c, t + '-' + f])
            }, []),
            y = 'beforeRead',
            w = 'read',
            g = 'afterRead',
            b = 'beforeMain',
            E = 'main',
            x = 'afterMain',
            O = 'beforeWrite',
            S = 'write',
            C = 'afterWrite',
            L = [y, w, g, b, E, x, O, S, C]
          function A(e) {
            return e ? (e.nodeName || '').toLowerCase() : null
          }
          function P(e) {
            if (null == e) return window
            if ('[object Window]' !== e.toString()) {
              var t = e.ownerDocument
              return (t && t.defaultView) || window
            }
            return e
          }
          function I(e) {
            return e instanceof P(e).Element || e instanceof Element
          }
          function D(e) {
            return e instanceof P(e).HTMLElement || e instanceof HTMLElement
          }
          function T(e) {
            return (
              'undefined' != typeof ShadowRoot &&
              (e instanceof P(e).ShadowRoot || e instanceof ShadowRoot)
            )
          }
          const _ = {
            name: 'applyStyles',
            enabled: !0,
            phase: 'write',
            fn: function (e) {
              var t = e.state
              Object.keys(t.elements).forEach(function (e) {
                var n = t.styles[e] || {},
                  o = t.attributes[e] || {},
                  r = t.elements[e]
                D(r) &&
                  A(r) &&
                  (Object.assign(r.style, n),
                  Object.keys(o).forEach(function (e) {
                    var t = o[e]
                    !1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? '' : t)
                  }))
              })
            },
            effect: function (e) {
              var t = e.state,
                n = {
                  popper: { position: t.options.strategy, left: '0', top: '0', margin: '0' },
                  arrow: { position: 'absolute' },
                  reference: {},
                }
              return (
                Object.assign(t.elements.popper.style, n.popper),
                (t.styles = n),
                t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                function () {
                  Object.keys(t.elements).forEach(function (e) {
                    var o = t.elements[e],
                      r = t.attributes[e] || {},
                      i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(
                        function (e, t) {
                          return (e[t] = ''), e
                        },
                        {},
                      )
                    D(o) &&
                      A(o) &&
                      (Object.assign(o.style, i),
                      Object.keys(r).forEach(function (e) {
                        o.removeAttribute(e)
                      }))
                  })
                }
              )
            },
            requires: ['computeStyles'],
          }
          function j(e) {
            return e.split('-')[0]
          }
          var M = Math.max,
            H = Math.min,
            k = Math.round
          function B() {
            var e = navigator.userAgentData
            return null != e && e.brands && Array.isArray(e.brands)
              ? e.brands
                  .map(function (e) {
                    return e.brand + '/' + e.version
                  })
                  .join(' ')
              : navigator.userAgent
          }
          function q() {
            return !/^((?!chrome|android).)*safari/i.test(B())
          }
          function W(e, t, n) {
            void 0 === t && (t = !1), void 0 === n && (n = !1)
            var o = e.getBoundingClientRect(),
              r = 1,
              i = 1
            t &&
              D(e) &&
              ((r = (e.offsetWidth > 0 && k(o.width) / e.offsetWidth) || 1),
              (i = (e.offsetHeight > 0 && k(o.height) / e.offsetHeight) || 1))
            var s = (I(e) ? P(e) : window).visualViewport,
              a = !q() && n,
              l = (o.left + (a && s ? s.offsetLeft : 0)) / r,
              c = (o.top + (a && s ? s.offsetTop : 0)) / i,
              f = o.width / r,
              u = o.height / i
            return { width: f, height: u, top: c, right: l + f, bottom: c + u, left: l, x: l, y: c }
          }
          function R(e) {
            var t = W(e),
              n = e.offsetWidth,
              o = e.offsetHeight
            return (
              Math.abs(t.width - n) <= 1 && (n = t.width),
              Math.abs(t.height - o) <= 1 && (o = t.height),
              { x: e.offsetLeft, y: e.offsetTop, width: n, height: o }
            )
          }
          function Y(e, t) {
            var n = t.getRootNode && t.getRootNode()
            if (e.contains(t)) return !0
            if (n && T(n)) {
              var o = t
              do {
                if (o && e.isSameNode(o)) return !0
                o = o.parentNode || o.host
              } while (o)
            }
            return !1
          }
          function $(e) {
            return P(e).getComputedStyle(e)
          }
          function V(e) {
            return ['table', 'td', 'th'].indexOf(A(e)) >= 0
          }
          function K(e) {
            return ((I(e) ? e.ownerDocument : e.document) || window.document).documentElement
          }
          function N(e) {
            return 'html' === A(e)
              ? e
              : e.assignedSlot || e.parentNode || (T(e) ? e.host : null) || K(e)
          }
          function U(e) {
            return D(e) && 'fixed' !== $(e).position ? e.offsetParent : null
          }
          function F(e) {
            for (var t = P(e), n = U(e); n && V(n) && 'static' === $(n).position; ) n = U(n)
            return n && ('html' === A(n) || ('body' === A(n) && 'static' === $(n).position))
              ? t
              : n ||
                  (function (e) {
                    var t = /firefox/i.test(B())
                    if (/Trident/i.test(B()) && D(e) && 'fixed' === $(e).position) return null
                    var n = N(e)
                    for (T(n) && (n = n.host); D(n) && ['html', 'body'].indexOf(A(n)) < 0; ) {
                      var o = $(n)
                      if (
                        'none' !== o.transform ||
                        'none' !== o.perspective ||
                        'paint' === o.contain ||
                        -1 !== ['transform', 'perspective'].indexOf(o.willChange) ||
                        (t && 'filter' === o.willChange) ||
                        (t && o.filter && 'none' !== o.filter)
                      )
                        return n
                      n = n.parentNode
                    }
                    return null
                  })(e) ||
                  t
          }
          function z(e) {
            return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y'
          }
          function X(e, t, n) {
            return M(e, H(t, n))
          }
          function G(e) {
            return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e)
          }
          function Z(e, t) {
            return t.reduce(function (t, n) {
              return (t[n] = e), t
            }, {})
          }
          const J = {
            name: 'arrow',
            enabled: !0,
            phase: 'main',
            fn: function (e) {
              var t,
                n = e.state,
                a = e.name,
                c = e.options,
                f = n.elements.arrow,
                u = n.modifiersData.popperOffsets,
                p = j(n.placement),
                d = z(p),
                h = [s, i].indexOf(p) >= 0 ? 'height' : 'width'
              if (f && u) {
                var m = (function (e, t) {
                    return G(
                      'number' !=
                        typeof (e =
                          'function' == typeof e
                            ? e(Object.assign({}, t.rects, { placement: t.placement }))
                            : e)
                        ? e
                        : Z(e, l),
                    )
                  })(c.padding, n),
                  v = R(f),
                  y = 'y' === d ? o : s,
                  w = 'y' === d ? r : i,
                  g = n.rects.reference[h] + n.rects.reference[d] - u[d] - n.rects.popper[h],
                  b = u[d] - n.rects.reference[d],
                  E = F(f),
                  x = E ? ('y' === d ? E.clientHeight || 0 : E.clientWidth || 0) : 0,
                  O = g / 2 - b / 2,
                  S = m[y],
                  C = x - v[h] - m[w],
                  L = x / 2 - v[h] / 2 + O,
                  A = X(S, L, C),
                  P = d
                n.modifiersData[a] = (((t = {})[P] = A), (t.centerOffset = A - L), t)
              }
            },
            effect: function (e) {
              var t = e.state,
                n = e.options.element,
                o = void 0 === n ? '[data-popper-arrow]' : n
              null != o &&
                ('string' != typeof o || (o = t.elements.popper.querySelector(o))) &&
                Y(t.elements.popper, o) &&
                (t.elements.arrow = o)
            },
            requires: ['popperOffsets'],
            requiresIfExists: ['preventOverflow'],
          }
          function Q(e) {
            return e.split('-')[1]
          }
          var ee = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
          function te(e) {
            var t,
              n = e.popper,
              a = e.popperRect,
              l = e.placement,
              c = e.variation,
              u = e.offsets,
              p = e.position,
              d = e.gpuAcceleration,
              h = e.adaptive,
              m = e.roundOffsets,
              v = e.isFixed,
              y = u.x,
              w = void 0 === y ? 0 : y,
              g = u.y,
              b = void 0 === g ? 0 : g,
              E = 'function' == typeof m ? m({ x: w, y: b }) : { x: w, y: b }
            ;(w = E.x), (b = E.y)
            var x = u.hasOwnProperty('x'),
              O = u.hasOwnProperty('y'),
              S = s,
              C = o,
              L = window
            if (h) {
              var A = F(n),
                I = 'clientHeight',
                D = 'clientWidth'
              if (
                (A === P(n) &&
                  'static' !== $((A = K(n))).position &&
                  'absolute' === p &&
                  ((I = 'scrollHeight'), (D = 'scrollWidth')),
                l === o || ((l === s || l === i) && c === f))
              )
                (C = r),
                  (b -=
                    (v && A === L && L.visualViewport ? L.visualViewport.height : A[I]) - a.height),
                  (b *= d ? 1 : -1)
              if (l === s || ((l === o || l === r) && c === f))
                (S = i),
                  (w -=
                    (v && A === L && L.visualViewport ? L.visualViewport.width : A[D]) - a.width),
                  (w *= d ? 1 : -1)
            }
            var T,
              _ = Object.assign({ position: p }, h && ee),
              j =
                !0 === m
                  ? (function (e, t) {
                      var n = e.x,
                        o = e.y,
                        r = t.devicePixelRatio || 1
                      return { x: k(n * r) / r || 0, y: k(o * r) / r || 0 }
                    })({ x: w, y: b }, P(n))
                  : { x: w, y: b }
            return (
              (w = j.x),
              (b = j.y),
              d
                ? Object.assign(
                    {},
                    _,
                    (((T = {})[C] = O ? '0' : ''),
                    (T[S] = x ? '0' : ''),
                    (T.transform =
                      (L.devicePixelRatio || 1) <= 1
                        ? 'translate(' + w + 'px, ' + b + 'px)'
                        : 'translate3d(' + w + 'px, ' + b + 'px, 0)'),
                    T),
                  )
                : Object.assign(
                    {},
                    _,
                    (((t = {})[C] = O ? b + 'px' : ''),
                    (t[S] = x ? w + 'px' : ''),
                    (t.transform = ''),
                    t),
                  )
            )
          }
          const ne = {
            name: 'computeStyles',
            enabled: !0,
            phase: 'beforeWrite',
            fn: function (e) {
              var t = e.state,
                n = e.options,
                o = n.gpuAcceleration,
                r = void 0 === o || o,
                i = n.adaptive,
                s = void 0 === i || i,
                a = n.roundOffsets,
                l = void 0 === a || a,
                c = {
                  placement: j(t.placement),
                  variation: Q(t.placement),
                  popper: t.elements.popper,
                  popperRect: t.rects.popper,
                  gpuAcceleration: r,
                  isFixed: 'fixed' === t.options.strategy,
                }
              null != t.modifiersData.popperOffsets &&
                (t.styles.popper = Object.assign(
                  {},
                  t.styles.popper,
                  te(
                    Object.assign({}, c, {
                      offsets: t.modifiersData.popperOffsets,
                      position: t.options.strategy,
                      adaptive: s,
                      roundOffsets: l,
                    }),
                  ),
                )),
                null != t.modifiersData.arrow &&
                  (t.styles.arrow = Object.assign(
                    {},
                    t.styles.arrow,
                    te(
                      Object.assign({}, c, {
                        offsets: t.modifiersData.arrow,
                        position: 'absolute',
                        adaptive: !1,
                        roundOffsets: l,
                      }),
                    ),
                  )),
                (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                  'data-popper-placement': t.placement,
                }))
            },
            data: {},
          }
          var oe = { passive: !0 }
          const re = {
            name: 'eventListeners',
            enabled: !0,
            phase: 'write',
            fn: function () {},
            effect: function (e) {
              var t = e.state,
                n = e.instance,
                o = e.options,
                r = o.scroll,
                i = void 0 === r || r,
                s = o.resize,
                a = void 0 === s || s,
                l = P(t.elements.popper),
                c = [].concat(t.scrollParents.reference, t.scrollParents.popper)
              return (
                i &&
                  c.forEach(function (e) {
                    e.addEventListener('scroll', n.update, oe)
                  }),
                a && l.addEventListener('resize', n.update, oe),
                function () {
                  i &&
                    c.forEach(function (e) {
                      e.removeEventListener('scroll', n.update, oe)
                    }),
                    a && l.removeEventListener('resize', n.update, oe)
                }
              )
            },
            data: {},
          }
          var ie = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
          function se(e) {
            return e.replace(/left|right|bottom|top/g, function (e) {
              return ie[e]
            })
          }
          var ae = { start: 'end', end: 'start' }
          function le(e) {
            return e.replace(/start|end/g, function (e) {
              return ae[e]
            })
          }
          function ce(e) {
            var t = P(e)
            return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset }
          }
          function fe(e) {
            return W(K(e)).left + ce(e).scrollLeft
          }
          function ue(e) {
            var t = $(e),
              n = t.overflow,
              o = t.overflowX,
              r = t.overflowY
            return /auto|scroll|overlay|hidden/.test(n + r + o)
          }
          function pe(e) {
            return ['html', 'body', '#document'].indexOf(A(e)) >= 0
              ? e.ownerDocument.body
              : D(e) && ue(e)
                ? e
                : pe(N(e))
          }
          function de(e, t) {
            var n
            void 0 === t && (t = [])
            var o = pe(e),
              r = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
              i = P(o),
              s = r ? [i].concat(i.visualViewport || [], ue(o) ? o : []) : o,
              a = t.concat(s)
            return r ? a : a.concat(de(N(s)))
          }
          function he(e) {
            return Object.assign({}, e, {
              left: e.x,
              top: e.y,
              right: e.x + e.width,
              bottom: e.y + e.height,
            })
          }
          function me(e, t, n) {
            return t === p
              ? he(
                  (function (e, t) {
                    var n = P(e),
                      o = K(e),
                      r = n.visualViewport,
                      i = o.clientWidth,
                      s = o.clientHeight,
                      a = 0,
                      l = 0
                    if (r) {
                      ;(i = r.width), (s = r.height)
                      var c = q()
                      ;(c || (!c && 'fixed' === t)) && ((a = r.offsetLeft), (l = r.offsetTop))
                    }
                    return { width: i, height: s, x: a + fe(e), y: l }
                  })(e, n),
                )
              : I(t)
                ? (function (e, t) {
                    var n = W(e, !1, 'fixed' === t)
                    return (
                      (n.top = n.top + e.clientTop),
                      (n.left = n.left + e.clientLeft),
                      (n.bottom = n.top + e.clientHeight),
                      (n.right = n.left + e.clientWidth),
                      (n.width = e.clientWidth),
                      (n.height = e.clientHeight),
                      (n.x = n.left),
                      (n.y = n.top),
                      n
                    )
                  })(t, n)
                : he(
                    (function (e) {
                      var t,
                        n = K(e),
                        o = ce(e),
                        r = null == (t = e.ownerDocument) ? void 0 : t.body,
                        i = M(
                          n.scrollWidth,
                          n.clientWidth,
                          r ? r.scrollWidth : 0,
                          r ? r.clientWidth : 0,
                        ),
                        s = M(
                          n.scrollHeight,
                          n.clientHeight,
                          r ? r.scrollHeight : 0,
                          r ? r.clientHeight : 0,
                        ),
                        a = -o.scrollLeft + fe(e),
                        l = -o.scrollTop
                      return (
                        'rtl' === $(r || n).direction &&
                          (a += M(n.clientWidth, r ? r.clientWidth : 0) - i),
                        { width: i, height: s, x: a, y: l }
                      )
                    })(K(e)),
                  )
          }
          function ve(e, t, n, o) {
            var r =
                'clippingParents' === t
                  ? (function (e) {
                      var t = de(N(e)),
                        n = ['absolute', 'fixed'].indexOf($(e).position) >= 0 && D(e) ? F(e) : e
                      return I(n)
                        ? t.filter(function (e) {
                            return I(e) && Y(e, n) && 'body' !== A(e)
                          })
                        : []
                    })(e)
                  : [].concat(t),
              i = [].concat(r, [n]),
              s = i[0],
              a = i.reduce(
                function (t, n) {
                  var r = me(e, n, o)
                  return (
                    (t.top = M(r.top, t.top)),
                    (t.right = H(r.right, t.right)),
                    (t.bottom = H(r.bottom, t.bottom)),
                    (t.left = M(r.left, t.left)),
                    t
                  )
                },
                me(e, s, o),
              )
            return (
              (a.width = a.right - a.left),
              (a.height = a.bottom - a.top),
              (a.x = a.left),
              (a.y = a.top),
              a
            )
          }
          function ye(e) {
            var t,
              n = e.reference,
              a = e.element,
              l = e.placement,
              u = l ? j(l) : null,
              p = l ? Q(l) : null,
              d = n.x + n.width / 2 - a.width / 2,
              h = n.y + n.height / 2 - a.height / 2
            switch (u) {
              case o:
                t = { x: d, y: n.y - a.height }
                break
              case r:
                t = { x: d, y: n.y + n.height }
                break
              case i:
                t = { x: n.x + n.width, y: h }
                break
              case s:
                t = { x: n.x - a.width, y: h }
                break
              default:
                t = { x: n.x, y: n.y }
            }
            var m = u ? z(u) : null
            if (null != m) {
              var v = 'y' === m ? 'height' : 'width'
              switch (p) {
                case c:
                  t[m] = t[m] - (n[v] / 2 - a[v] / 2)
                  break
                case f:
                  t[m] = t[m] + (n[v] / 2 - a[v] / 2)
              }
            }
            return t
          }
          function we(e, t) {
            void 0 === t && (t = {})
            var n = t,
              s = n.placement,
              a = void 0 === s ? e.placement : s,
              c = n.strategy,
              f = void 0 === c ? e.strategy : c,
              m = n.boundary,
              v = void 0 === m ? u : m,
              y = n.rootBoundary,
              w = void 0 === y ? p : y,
              g = n.elementContext,
              b = void 0 === g ? d : g,
              E = n.altBoundary,
              x = void 0 !== E && E,
              O = n.padding,
              S = void 0 === O ? 0 : O,
              C = G('number' != typeof S ? S : Z(S, l)),
              L = b === d ? h : d,
              A = e.rects.popper,
              P = e.elements[x ? L : b],
              D = ve(I(P) ? P : P.contextElement || K(e.elements.popper), v, w, f),
              T = W(e.elements.reference),
              _ = ye({ reference: T, element: A, strategy: 'absolute', placement: a }),
              j = he(Object.assign({}, A, _)),
              M = b === d ? j : T,
              H = {
                top: D.top - M.top + C.top,
                bottom: M.bottom - D.bottom + C.bottom,
                left: D.left - M.left + C.left,
                right: M.right - D.right + C.right,
              },
              k = e.modifiersData.offset
            if (b === d && k) {
              var B = k[a]
              Object.keys(H).forEach(function (e) {
                var t = [i, r].indexOf(e) >= 0 ? 1 : -1,
                  n = [o, r].indexOf(e) >= 0 ? 'y' : 'x'
                H[e] += B[n] * t
              })
            }
            return H
          }
          const ge = {
            name: 'flip',
            enabled: !0,
            phase: 'main',
            fn: function (e) {
              var t = e.state,
                n = e.options,
                f = e.name
              if (!t.modifiersData[f]._skip) {
                for (
                  var u = n.mainAxis,
                    p = void 0 === u || u,
                    d = n.altAxis,
                    h = void 0 === d || d,
                    y = n.fallbackPlacements,
                    w = n.padding,
                    g = n.boundary,
                    b = n.rootBoundary,
                    E = n.altBoundary,
                    x = n.flipVariations,
                    O = void 0 === x || x,
                    S = n.allowedAutoPlacements,
                    C = t.options.placement,
                    L = j(C),
                    A =
                      y ||
                      (L === C || !O
                        ? [se(C)]
                        : (function (e) {
                            if (j(e) === a) return []
                            var t = se(e)
                            return [le(e), t, le(t)]
                          })(C)),
                    P = [C].concat(A).reduce(function (e, n) {
                      return e.concat(
                        j(n) === a
                          ? (function (e, t) {
                              void 0 === t && (t = {})
                              var n = t,
                                o = n.placement,
                                r = n.boundary,
                                i = n.rootBoundary,
                                s = n.padding,
                                a = n.flipVariations,
                                c = n.allowedAutoPlacements,
                                f = void 0 === c ? v : c,
                                u = Q(o),
                                p = u
                                  ? a
                                    ? m
                                    : m.filter(function (e) {
                                        return Q(e) === u
                                      })
                                  : l,
                                d = p.filter(function (e) {
                                  return f.indexOf(e) >= 0
                                })
                              0 === d.length && (d = p)
                              var h = d.reduce(function (t, n) {
                                return (
                                  (t[n] = we(e, {
                                    placement: n,
                                    boundary: r,
                                    rootBoundary: i,
                                    padding: s,
                                  })[j(n)]),
                                  t
                                )
                              }, {})
                              return Object.keys(h).sort(function (e, t) {
                                return h[e] - h[t]
                              })
                            })(t, {
                              placement: n,
                              boundary: g,
                              rootBoundary: b,
                              padding: w,
                              flipVariations: O,
                              allowedAutoPlacements: S,
                            })
                          : n,
                      )
                    }, []),
                    I = t.rects.reference,
                    D = t.rects.popper,
                    T = new Map(),
                    _ = !0,
                    M = P[0],
                    H = 0;
                  H < P.length;
                  H++
                ) {
                  var k = P[H],
                    B = j(k),
                    q = Q(k) === c,
                    W = [o, r].indexOf(B) >= 0,
                    R = W ? 'width' : 'height',
                    Y = we(t, {
                      placement: k,
                      boundary: g,
                      rootBoundary: b,
                      altBoundary: E,
                      padding: w,
                    }),
                    $ = W ? (q ? i : s) : q ? r : o
                  I[R] > D[R] && ($ = se($))
                  var V = se($),
                    K = []
                  if (
                    (p && K.push(Y[B] <= 0),
                    h && K.push(Y[$] <= 0, Y[V] <= 0),
                    K.every(function (e) {
                      return e
                    }))
                  ) {
                    ;(M = k), (_ = !1)
                    break
                  }
                  T.set(k, K)
                }
                if (_)
                  for (
                    var N = function (e) {
                        var t = P.find(function (t) {
                          var n = T.get(t)
                          if (n)
                            return n.slice(0, e).every(function (e) {
                              return e
                            })
                        })
                        if (t) return (M = t), 'break'
                      },
                      U = O ? 3 : 1;
                    U > 0;
                    U--
                  ) {
                    if ('break' === N(U)) break
                  }
                t.placement !== M &&
                  ((t.modifiersData[f]._skip = !0), (t.placement = M), (t.reset = !0))
              }
            },
            requiresIfExists: ['offset'],
            data: { _skip: !1 },
          }
          function be(e, t, n) {
            return (
              void 0 === n && (n = { x: 0, y: 0 }),
              {
                top: e.top - t.height - n.y,
                right: e.right - t.width + n.x,
                bottom: e.bottom - t.height + n.y,
                left: e.left - t.width - n.x,
              }
            )
          }
          function Ee(e) {
            return [o, i, r, s].some(function (t) {
              return e[t] >= 0
            })
          }
          const xe = {
            name: 'hide',
            enabled: !0,
            phase: 'main',
            requiresIfExists: ['preventOverflow'],
            fn: function (e) {
              var t = e.state,
                n = e.name,
                o = t.rects.reference,
                r = t.rects.popper,
                i = t.modifiersData.preventOverflow,
                s = we(t, { elementContext: 'reference' }),
                a = we(t, { altBoundary: !0 }),
                l = be(s, o),
                c = be(a, r, i),
                f = Ee(l),
                u = Ee(c)
              ;(t.modifiersData[n] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: f,
                hasPopperEscaped: u,
              }),
                (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                  'data-popper-reference-hidden': f,
                  'data-popper-escaped': u,
                }))
            },
          }
          const Oe = {
            name: 'offset',
            enabled: !0,
            phase: 'main',
            requires: ['popperOffsets'],
            fn: function (e) {
              var t = e.state,
                n = e.options,
                r = e.name,
                a = n.offset,
                l = void 0 === a ? [0, 0] : a,
                c = v.reduce(function (e, n) {
                  return (
                    (e[n] = (function (e, t, n) {
                      var r = j(e),
                        a = [s, o].indexOf(r) >= 0 ? -1 : 1,
                        l = 'function' == typeof n ? n(Object.assign({}, t, { placement: e })) : n,
                        c = l[0],
                        f = l[1]
                      return (
                        (c = c || 0),
                        (f = (f || 0) * a),
                        [s, i].indexOf(r) >= 0 ? { x: f, y: c } : { x: c, y: f }
                      )
                    })(n, t.rects, l)),
                    e
                  )
                }, {}),
                f = c[t.placement],
                u = f.x,
                p = f.y
              null != t.modifiersData.popperOffsets &&
                ((t.modifiersData.popperOffsets.x += u), (t.modifiersData.popperOffsets.y += p)),
                (t.modifiersData[r] = c)
            },
          }
          const Se = {
            name: 'popperOffsets',
            enabled: !0,
            phase: 'read',
            fn: function (e) {
              var t = e.state,
                n = e.name
              t.modifiersData[n] = ye({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: 'absolute',
                placement: t.placement,
              })
            },
            data: {},
          }
          const Ce = {
            name: 'preventOverflow',
            enabled: !0,
            phase: 'main',
            fn: function (e) {
              var t = e.state,
                n = e.options,
                a = e.name,
                l = n.mainAxis,
                f = void 0 === l || l,
                u = n.altAxis,
                p = void 0 !== u && u,
                d = n.boundary,
                h = n.rootBoundary,
                m = n.altBoundary,
                v = n.padding,
                y = n.tether,
                w = void 0 === y || y,
                g = n.tetherOffset,
                b = void 0 === g ? 0 : g,
                E = we(t, { boundary: d, rootBoundary: h, padding: v, altBoundary: m }),
                x = j(t.placement),
                O = Q(t.placement),
                S = !O,
                C = z(x),
                L = 'x' === C ? 'y' : 'x',
                A = t.modifiersData.popperOffsets,
                P = t.rects.reference,
                I = t.rects.popper,
                D =
                  'function' == typeof b
                    ? b(Object.assign({}, t.rects, { placement: t.placement }))
                    : b,
                T =
                  'number' == typeof D
                    ? { mainAxis: D, altAxis: D }
                    : Object.assign({ mainAxis: 0, altAxis: 0 }, D),
                _ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                k = { x: 0, y: 0 }
              if (A) {
                if (f) {
                  var B,
                    q = 'y' === C ? o : s,
                    W = 'y' === C ? r : i,
                    Y = 'y' === C ? 'height' : 'width',
                    $ = A[C],
                    V = $ + E[q],
                    K = $ - E[W],
                    N = w ? -I[Y] / 2 : 0,
                    U = O === c ? P[Y] : I[Y],
                    G = O === c ? -I[Y] : -P[Y],
                    Z = t.elements.arrow,
                    J = w && Z ? R(Z) : { width: 0, height: 0 },
                    ee = t.modifiersData['arrow#persistent']
                      ? t.modifiersData['arrow#persistent'].padding
                      : { top: 0, right: 0, bottom: 0, left: 0 },
                    te = ee[q],
                    ne = ee[W],
                    oe = X(0, P[Y], J[Y]),
                    re = S ? P[Y] / 2 - N - oe - te - T.mainAxis : U - oe - te - T.mainAxis,
                    ie = S ? -P[Y] / 2 + N + oe + ne + T.mainAxis : G + oe + ne + T.mainAxis,
                    se = t.elements.arrow && F(t.elements.arrow),
                    ae = se ? ('y' === C ? se.clientTop || 0 : se.clientLeft || 0) : 0,
                    le = null != (B = null == _ ? void 0 : _[C]) ? B : 0,
                    ce = $ + ie - le,
                    fe = X(w ? H(V, $ + re - le - ae) : V, $, w ? M(K, ce) : K)
                  ;(A[C] = fe), (k[C] = fe - $)
                }
                if (p) {
                  var ue,
                    pe = 'x' === C ? o : s,
                    de = 'x' === C ? r : i,
                    he = A[L],
                    me = 'y' === L ? 'height' : 'width',
                    ve = he + E[pe],
                    ye = he - E[de],
                    ge = -1 !== [o, s].indexOf(x),
                    be = null != (ue = null == _ ? void 0 : _[L]) ? ue : 0,
                    Ee = ge ? ve : he - P[me] - I[me] - be + T.altAxis,
                    xe = ge ? he + P[me] + I[me] - be - T.altAxis : ye,
                    Oe =
                      w && ge
                        ? (function (e, t, n) {
                            var o = X(e, t, n)
                            return o > n ? n : o
                          })(Ee, he, xe)
                        : X(w ? Ee : ve, he, w ? xe : ye)
                  ;(A[L] = Oe), (k[L] = Oe - he)
                }
                t.modifiersData[a] = k
              }
            },
            requiresIfExists: ['offset'],
          }
          function Le(e, t, n) {
            void 0 === n && (n = !1)
            var o,
              r,
              i = D(t),
              s =
                D(t) &&
                (function (e) {
                  var t = e.getBoundingClientRect(),
                    n = k(t.width) / e.offsetWidth || 1,
                    o = k(t.height) / e.offsetHeight || 1
                  return 1 !== n || 1 !== o
                })(t),
              a = K(t),
              l = W(e, s, n),
              c = { scrollLeft: 0, scrollTop: 0 },
              f = { x: 0, y: 0 }
            return (
              (i || (!i && !n)) &&
                (('body' !== A(t) || ue(a)) &&
                  (c =
                    (o = t) !== P(o) && D(o)
                      ? { scrollLeft: (r = o).scrollLeft, scrollTop: r.scrollTop }
                      : ce(o)),
                D(t)
                  ? (((f = W(t, !0)).x += t.clientLeft), (f.y += t.clientTop))
                  : a && (f.x = fe(a))),
              {
                x: l.left + c.scrollLeft - f.x,
                y: l.top + c.scrollTop - f.y,
                width: l.width,
                height: l.height,
              }
            )
          }
          function Ae(e) {
            var t = new Map(),
              n = new Set(),
              o = []
            function r(e) {
              n.add(e.name),
                [].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
                  if (!n.has(e)) {
                    var o = t.get(e)
                    o && r(o)
                  }
                }),
                o.push(e)
            }
            return (
              e.forEach(function (e) {
                t.set(e.name, e)
              }),
              e.forEach(function (e) {
                n.has(e.name) || r(e)
              }),
              o
            )
          }
          var Pe = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
          function Ie() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
            return !t.some(function (e) {
              return !(e && 'function' == typeof e.getBoundingClientRect)
            })
          }
          function De(e) {
            void 0 === e && (e = {})
            var t = e,
              n = t.defaultModifiers,
              o = void 0 === n ? [] : n,
              r = t.defaultOptions,
              i = void 0 === r ? Pe : r
            return function (e, t, n) {
              void 0 === n && (n = i)
              var r,
                s,
                a = {
                  placement: 'bottom',
                  orderedModifiers: [],
                  options: Object.assign({}, Pe, i),
                  modifiersData: {},
                  elements: { reference: e, popper: t },
                  attributes: {},
                  styles: {},
                },
                l = [],
                c = !1,
                f = {
                  state: a,
                  setOptions: function (n) {
                    var r = 'function' == typeof n ? n(a.options) : n
                    u(),
                      (a.options = Object.assign({}, i, a.options, r)),
                      (a.scrollParents = {
                        reference: I(e) ? de(e) : e.contextElement ? de(e.contextElement) : [],
                        popper: de(t),
                      })
                    var s,
                      c,
                      p = (function (e) {
                        var t = Ae(e)
                        return L.reduce(function (e, n) {
                          return e.concat(
                            t.filter(function (e) {
                              return e.phase === n
                            }),
                          )
                        }, [])
                      })(
                        ((s = [].concat(o, a.options.modifiers)),
                        (c = s.reduce(function (e, t) {
                          var n = e[t.name]
                          return (
                            (e[t.name] = n
                              ? Object.assign({}, n, t, {
                                  options: Object.assign({}, n.options, t.options),
                                  data: Object.assign({}, n.data, t.data),
                                })
                              : t),
                            e
                          )
                        }, {})),
                        Object.keys(c).map(function (e) {
                          return c[e]
                        })),
                      )
                    return (
                      (a.orderedModifiers = p.filter(function (e) {
                        return e.enabled
                      })),
                      a.orderedModifiers.forEach(function (e) {
                        var t = e.name,
                          n = e.options,
                          o = void 0 === n ? {} : n,
                          r = e.effect
                        if ('function' == typeof r) {
                          var i = r({ state: a, name: t, instance: f, options: o }),
                            s = function () {}
                          l.push(i || s)
                        }
                      }),
                      f.update()
                    )
                  },
                  forceUpdate: function () {
                    if (!c) {
                      var e = a.elements,
                        t = e.reference,
                        n = e.popper
                      if (Ie(t, n)) {
                        ;(a.rects = {
                          reference: Le(t, F(n), 'fixed' === a.options.strategy),
                          popper: R(n),
                        }),
                          (a.reset = !1),
                          (a.placement = a.options.placement),
                          a.orderedModifiers.forEach(function (e) {
                            return (a.modifiersData[e.name] = Object.assign({}, e.data))
                          })
                        for (var o = 0; o < a.orderedModifiers.length; o++)
                          if (!0 !== a.reset) {
                            var r = a.orderedModifiers[o],
                              i = r.fn,
                              s = r.options,
                              l = void 0 === s ? {} : s,
                              u = r.name
                            'function' == typeof i &&
                              (a = i({ state: a, options: l, name: u, instance: f }) || a)
                          } else (a.reset = !1), (o = -1)
                      }
                    }
                  },
                  update:
                    ((r = function () {
                      return new Promise(function (e) {
                        f.forceUpdate(), e(a)
                      })
                    }),
                    function () {
                      return (
                        s ||
                          (s = new Promise(function (e) {
                            Promise.resolve().then(function () {
                              ;(s = void 0), e(r())
                            })
                          })),
                        s
                      )
                    }),
                  destroy: function () {
                    u(), (c = !0)
                  },
                }
              if (!Ie(e, t)) return f
              function u() {
                l.forEach(function (e) {
                  return e()
                }),
                  (l = [])
              }
              return (
                f.setOptions(n).then(function (e) {
                  !c && n.onFirstUpdate && n.onFirstUpdate(e)
                }),
                f
              )
            }
          }
          var Te = De(),
            _e = De({ defaultModifiers: [re, Se, ne, _, Oe, ge, Ce, J, xe] }),
            je = De({ defaultModifiers: [re, Se, ne, _] })
        },
        190: (e, t) => {
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.COMBO_BOX_ACCESSIBILITY_KEY_SET =
              t.SELECT_ACCESSIBILITY_KEY_SET =
              t.TABS_ACCESSIBILITY_KEY_SET =
              t.OVERLAY_ACCESSIBILITY_KEY_SET =
              t.DROPDOWN_ACCESSIBILITY_KEY_SET =
              t.POSITIONS =
                void 0),
            (t.POSITIONS = {
              auto: 'auto',
              'auto-start': 'auto-start',
              'auto-end': 'auto-end',
              top: 'top',
              'top-left': 'top-start',
              'top-right': 'top-end',
              bottom: 'bottom',
              'bottom-left': 'bottom-start',
              'bottom-right': 'bottom-end',
              right: 'right',
              'right-start': 'right-start',
              'right-end': 'right-end',
              left: 'left',
              'left-start': 'left-start',
              'left-end': 'left-end',
            }),
            (t.DROPDOWN_ACCESSIBILITY_KEY_SET = [
              'Escape',
              'ArrowUp',
              'ArrowDown',
              'Home',
              'End',
              'Enter',
            ]),
            (t.OVERLAY_ACCESSIBILITY_KEY_SET = ['Escape', 'Tab']),
            (t.TABS_ACCESSIBILITY_KEY_SET = [
              'ArrowUp',
              'ArrowLeft',
              'ArrowDown',
              'ArrowRight',
              'Home',
              'End',
            ]),
            (t.SELECT_ACCESSIBILITY_KEY_SET = [
              'ArrowUp',
              'ArrowLeft',
              'ArrowDown',
              'ArrowRight',
              'Home',
              'End',
              'Escape',
              'Enter',
              'Tab',
            ]),
            (t.COMBO_BOX_ACCESSIBILITY_KEY_SET = [
              'ArrowUp',
              'ArrowLeft',
              'ArrowDown',
              'ArrowRight',
              'Home',
              'End',
              'Escape',
              'Enter',
            ])
        },
        737: (e, t) => {
          /*
           * HSBasePlugin
           * @version: 2.0.3
           * @author: HTMLStream
           * @license: Licensed under MIT (https://preline.co/docs/license.html)
           * Copyright 2023 HTMLStream
           */
          Object.defineProperty(t, '__esModule', { value: !0 })
          var n = (function () {
            function e(e, t, n) {
              ;(this.el = e),
                (this.options = t),
                (this.events = n),
                (this.el = e),
                (this.options = t),
                (this.events = {})
            }
            return (
              (e.prototype.createCollection = function (e, t) {
                var n
                e.push({
                  id:
                    (null === (n = null == t ? void 0 : t.el) || void 0 === n ? void 0 : n.id) ||
                    e.length + 1,
                  element: t,
                })
              }),
              (e.prototype.fireEvent = function (e, t) {
                if ((void 0 === t && (t = null), this.events.hasOwnProperty(e)))
                  return this.events[e](t)
              }),
              (e.prototype.on = function (e, t) {
                this.events[e] = t
              }),
              e
            )
          })()
          t.default = n
        },
        610: function (e, t, n) {
          /*
           * HSDropdown
           * @version: 2.0.3
           * @author: HTMLStream
           * @license: Licensed under MIT (https://preline.co/docs/license.html)
           * Copyright 2023 HTMLStream
           */
          var o,
            r =
              (this && this.__extends) ||
              ((o = function (e, t) {
                return (
                  (o =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t
                      }) ||
                    function (e, t) {
                      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }),
                  o(e, t)
                )
              }),
              function (e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError(
                    'Class extends value ' + String(t) + ' is not a constructor or null',
                  )
                function n() {
                  this.constructor = e
                }
                o(e, t),
                  (e.prototype =
                    null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
              }),
            i =
              (this && this.__spreadArray) ||
              function (e, t, n) {
                if (n || 2 === arguments.length)
                  for (var o, r = 0, i = t.length; r < i; r++)
                    (!o && r in t) ||
                      (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]))
                return e.concat(o || Array.prototype.slice.call(t))
              }
          Object.defineProperty(t, '__esModule', { value: !0 })
          var s = n(969),
            a = n(492),
            l = n(737),
            c = n(190),
            f = (function (e) {
              function t(t, n, o) {
                var r = e.call(this, t, n, o) || this
                return (
                  (r.toggle =
                    r.el.querySelector(':scope > .hs-dropdown-toggle') || r.el.children[0]),
                  (r.menu = r.el.querySelector(':scope > .hs-dropdown-menu')),
                  (r.eventMode = (0, s.getClassProperty)(r.el, '--trigger', 'click')),
                  (r.closeMode = (0, s.getClassProperty)(r.el, '--auto-close', 'true')),
                  (r.animationInProcess = !1),
                  r.toggle && r.menu && r.init(),
                  r
                )
              }
              return (
                r(t, e),
                (t.prototype.init = function () {
                  var e = this
                  if (
                    (this.createCollection(window.$hsDropdownCollection, this),
                    this.toggle.disabled)
                  )
                    return !1
                  this.toggle.addEventListener('click', function () {
                    return e.onClickHandler()
                  }),
                    (0, s.isIOS)() ||
                      (0, s.isIpadOS)() ||
                      (this.el.addEventListener('mouseenter', function () {
                        return e.onMouseEnterHandler()
                      }),
                      this.el.addEventListener('mouseleave', function () {
                        return e.onMouseLeaveHandler()
                      }))
                }),
                (t.prototype.resizeHandler = function () {
                  this.eventMode = (0, s.getClassProperty)(this.el, '--trigger', 'click')
                }),
                (t.prototype.onClickHandler = function () {
                  this.el.classList.contains('open') && !this.menu.classList.contains('hidden')
                    ? this.close()
                    : this.open()
                }),
                (t.prototype.onMouseEnterHandler = function () {
                  if ('hover' !== this.eventMode) return !1
                  this.el._popper && this.forceClearState(),
                    !this.el.classList.contains('open') &&
                      this.menu.classList.contains('hidden') &&
                      this.open()
                }),
                (t.prototype.onMouseLeaveHandler = function () {
                  if ('hover' !== this.eventMode) return !1
                  this.el.classList.contains('open') &&
                    !this.menu.classList.contains('hidden') &&
                    this.close()
                }),
                (t.prototype.destroyPopper = function () {
                  this.menu.classList.remove('block'),
                    this.menu.classList.add('hidden'),
                    (this.menu.style.inset = null),
                    (this.menu.style.position = null),
                    this.el && this.el._popper && this.el._popper.destroy(),
                    (this.animationInProcess = !1)
                }),
                (t.prototype.absoluteStrategyModifiers = function () {
                  var e = this
                  return [
                    {
                      name: 'applyStyles',
                      fn: function (t) {
                        var n = (
                            window.getComputedStyle(e.el).getPropertyValue('--strategy') ||
                            'absolute'
                          ).replace(' ', ''),
                          o = (
                            window.getComputedStyle(e.el).getPropertyValue('--adaptive') ||
                            'adaptive'
                          ).replace(' ', '')
                        ;(t.state.elements.popper.style.position = n),
                          (t.state.elements.popper.style.transform =
                            'adaptive' === o ? t.state.styles.popper.transform : null),
                          (t.state.elements.popper.style.top = null),
                          (t.state.elements.popper.style.bottom = null),
                          (t.state.elements.popper.style.left = null),
                          (t.state.elements.popper.style.right = null),
                          (t.state.elements.popper.style.margin = 0)
                      },
                    },
                    { name: 'computeStyles', options: { adaptive: !1 } },
                  ]
                }),
                (t.prototype.open = function () {
                  var e = this
                  if (this.el.classList.contains('open')) return !1
                  if (this.animationInProcess) return !1
                  this.animationInProcess = !0
                  var t = (
                      window.getComputedStyle(this.el).getPropertyValue('--placement') || ''
                    ).replace(' ', ''),
                    n = (
                      window.getComputedStyle(this.el).getPropertyValue('--flip') || 'true'
                    ).replace(' ', ''),
                    o = (
                      window.getComputedStyle(this.el).getPropertyValue('--strategy') || 'fixed'
                    ).replace(' ', ''),
                    r = parseInt(
                      (
                        window.getComputedStyle(this.el).getPropertyValue('--offset') || '10'
                      ).replace(' ', ''),
                    )
                  'static' !== o &&
                    (this.el._popper = (0, a.createPopper)(this.el, this.menu, {
                      placement: c.POSITIONS[t] || 'bottom-start',
                      strategy: o,
                      modifiers: i(
                        i([], 'fixed' !== o ? this.absoluteStrategyModifiers() : [], !0),
                        [
                          { name: 'flip', enabled: 'true' === n },
                          { name: 'offset', options: { offset: [0, r] } },
                        ],
                        !1,
                      ),
                    })),
                    (this.menu.style.margin = null),
                    this.menu.classList.remove('hidden'),
                    this.menu.classList.add('block'),
                    setTimeout(function () {
                      e.el.classList.add('open'), (e.animationInProcess = !1)
                    }),
                    this.fireEvent('open', this.el),
                    (0, s.dispatch)('open.hs.dropdown', this.el, this.el)
                }),
                (t.prototype.close = function (e) {
                  var t = this
                  if (
                    (void 0 === e && (e = !0),
                    this.animationInProcess || !this.el.classList.contains('open'))
                  )
                    return !1
                  if (((this.animationInProcess = !0), e)) {
                    var n = this.el.querySelector('[data-hs-dropdown-transition]') || this.menu
                    ;(0, s.afterTransition)(n, function () {
                      return t.destroyPopper()
                    })
                  } else this.destroyPopper()
                  ;(this.menu.style.margin = null),
                    this.el.classList.remove('open'),
                    this.fireEvent('close', this.el),
                    (0, s.dispatch)('close.hs.dropdown', this.el, this.el)
                }),
                (t.prototype.forceClearState = function () {
                  this.destroyPopper(),
                    (this.menu.style.margin = null),
                    this.el.classList.remove('open')
                }),
                (t.getInstance = function (e, t) {
                  var n = window.$hsDropdownCollection.find(function (t) {
                    return t.element.el === ('string' == typeof e ? document.querySelector(e) : e)
                  })
                  return n ? (t ? n : n.element.el) : null
                }),
                (t.autoInit = function () {
                  if (
                    (window.$hsDropdownCollection || (window.$hsDropdownCollection = []),
                    document
                      .querySelectorAll('.hs-dropdown:not(.--prevent-on-load-init)')
                      .forEach(function (e) {
                        window.$hsDropdownCollection.find(function (t) {
                          var n
                          return (
                            (null === (n = null == t ? void 0 : t.element) || void 0 === n
                              ? void 0
                              : n.el) === e
                          )
                        }) || new t(e)
                      }),
                    window.$hsDropdownCollection)
                  ) {
                    document.addEventListener('keydown', function (e) {
                      return t.accessibility(e)
                    }),
                      window.addEventListener('click', function (e) {
                        var n = e.target
                        t.closeCurrentlyOpened(n)
                      })
                    var e = window.innerWidth
                    window.addEventListener('resize', function () {
                      window.innerWidth !== e &&
                        ((e = innerWidth), t.closeCurrentlyOpened(null, !1))
                    })
                  }
                }),
                (t.open = function (e) {
                  var t = window.$hsDropdownCollection.find(function (t) {
                    return t.element.el === ('string' == typeof e ? document.querySelector(e) : e)
                  })
                  t && t.element.menu.classList.contains('hidden') && t.element.open()
                }),
                (t.close = function (e) {
                  var t = window.$hsDropdownCollection.find(function (t) {
                    return t.element.el === ('string' == typeof e ? document.querySelector(e) : e)
                  })
                  t && !t.element.menu.classList.contains('hidden') && t.element.close()
                }),
                (t.accessibility = function (e) {
                  this.history = s.menuSearchHistory
                  var t = window.$hsDropdownCollection.find(function (e) {
                    return e.element.el.classList.contains('open')
                  })
                  if (
                    t &&
                    (c.DROPDOWN_ACCESSIBILITY_KEY_SET.includes(e.code) ||
                      (4 === e.code.length && e.code[e.code.length - 1].match(/^[A-Z]*$/))) &&
                    !e.metaKey &&
                    !t.element.menu.querySelector('input:focus')
                  )
                    switch ((console.log('Key code:', e.code), e.code)) {
                      case 'Escape':
                        t.element.menu.querySelector('.hs-select.active') ||
                          (e.preventDefault(), this.onEscape(e))
                        break
                      case 'Enter':
                        t.element.menu.querySelector('.hs-select button:focus') ||
                          t.element.menu.querySelector('.hs-collapse-toggle:focus') ||
                          this.onEnter(e)
                        break
                      case 'ArrowUp':
                        e.preventDefault(), this.onArrow()
                        break
                      case 'ArrowDown':
                        e.preventDefault(), this.onArrow(!1)
                        break
                      case 'Home':
                        e.preventDefault(), this.onStartEnd()
                        break
                      case 'End':
                        e.preventDefault(), this.onStartEnd(!1)
                        break
                      default:
                        e.preventDefault(), this.onFirstLetter(e.key)
                    }
                }),
                (t.onEscape = function (e) {
                  var t = e.target.closest('.hs-dropdown.open')
                  if (
                    window.$hsDropdownCollection.find(function (e) {
                      return e.element.el === t
                    })
                  ) {
                    var n = window.$hsDropdownCollection.find(function (e) {
                      return e.element.el === t
                    })
                    n && (n.element.close(), n.element.toggle.focus())
                  } else this.closeCurrentlyOpened()
                }),
                (t.onEnter = function (e) {
                  var t = e.target.parentElement
                  if (
                    window.$hsDropdownCollection.find(function (e) {
                      return e.element.el === t
                    })
                  ) {
                    e.preventDefault()
                    var n = window.$hsDropdownCollection.find(function (e) {
                      return e.element.el === t
                    })
                    n && n.element.open()
                  }
                }),
                (t.onArrow = function (e) {
                  void 0 === e && (e = !0)
                  var t = window.$hsDropdownCollection.find(function (e) {
                    return e.element.el.classList.contains('open')
                  })
                  if (t) {
                    var n = t.element.menu
                    if (!n) return !1
                    var o = (
                        e
                          ? Array.from(
                              n.querySelectorAll(
                                'a:not([hidden]), .hs-dropdown > button:not([hidden])',
                              ),
                            ).reverse()
                          : Array.from(
                              n.querySelectorAll(
                                'a:not([hidden]), .hs-dropdown > button:not([hidden])',
                              ),
                            )
                      ).filter(function (e) {
                        return !e.classList.contains('disabled')
                      }),
                      r = n.querySelector('a:focus, button:focus'),
                      i = o.findIndex(function (e) {
                        return e === r
                      })
                    i + 1 < o.length && i++, o[i].focus()
                  }
                }),
                (t.onStartEnd = function (e) {
                  void 0 === e && (e = !0)
                  var t = window.$hsDropdownCollection.find(function (e) {
                    return e.element.el.classList.contains('open')
                  })
                  if (t) {
                    var n = t.element.menu
                    if (!n) return !1
                    var o = (
                      e
                        ? Array.from(n.querySelectorAll('a'))
                        : Array.from(n.querySelectorAll('a')).reverse()
                    ).filter(function (e) {
                      return !e.classList.contains('disabled')
                    })
                    o.length && o[0].focus()
                  }
                }),
                (t.onFirstLetter = function (e) {
                  var t = this,
                    n = window.$hsDropdownCollection.find(function (e) {
                      return e.element.el.classList.contains('open')
                    })
                  if (n) {
                    var o = n.element.menu
                    if (!o) return !1
                    var r = Array.from(o.querySelectorAll('a')),
                      i = function () {
                        return r.findIndex(function (n, o) {
                          return (
                            n.innerText.toLowerCase().charAt(0) === e.toLowerCase() &&
                            t.history.existsInHistory(o)
                          )
                        })
                      },
                      s = i()
                    ;-1 === s && (this.history.clearHistory(), (s = i())),
                      -1 !== s && (r[s].focus(), this.history.addHistory(s))
                  }
                }),
                (t.closeCurrentlyOpened = function (e, t) {
                  void 0 === e && (e = null), void 0 === t && (t = !0)
                  var n =
                      e &&
                      e.closest('.hs-dropdown') &&
                      e.closest('.hs-dropdown').parentElement.closest('.hs-dropdown')
                        ? e.closest('.hs-dropdown').parentElement.closest('.hs-dropdown')
                        : null,
                    o = n
                      ? window.$hsDropdownCollection.filter(function (e) {
                          return (
                            e.element.el.classList.contains('open') &&
                            e.element.menu
                              .closest('.hs-dropdown')
                              .parentElement.closest('.hs-dropdown') === n
                          )
                        })
                      : window.$hsDropdownCollection.filter(function (e) {
                          return e.element.el.classList.contains('open')
                        })
                  e &&
                    e.closest('.hs-dropdown') &&
                    'inside' ===
                      (0, s.getClassPropertyAlt)(e.closest('.hs-dropdown'), '--auto-close') &&
                    (o = o.filter(function (t) {
                      return t.element.el !== e.closest('.hs-dropdown')
                    })),
                    o &&
                      o.forEach(function (e) {
                        if ('false' === e.element.closeMode || 'outside' === e.element.closeMode)
                          return !1
                        e.element.close(t)
                      })
                }),
                (t.on = function (e, t, n) {
                  var o = window.$hsDropdownCollection.find(function (e) {
                    return e.element.el === ('string' == typeof t ? document.querySelector(t) : t)
                  })
                  o && (o.element.events[e] = n)
                }),
                t
              )
            })(l.default)
          window.addEventListener('load', function () {
            f.autoInit()
          }),
            window.addEventListener('resize', function () {
              window.$hsDropdownCollection || (window.$hsDropdownCollection = []),
                window.$hsDropdownCollection.forEach(function (e) {
                  return e.element.resizeHandler()
                })
            }),
            'undefined' != typeof window && (window.HSDropdown = f),
            (t.default = f)
        },
        969: function (e, t) {
          var n = this
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.menuSearchHistory =
              t.classToClassList =
              t.htmlToElement =
              t.afterTransition =
              t.dispatch =
              t.debounce =
              t.isFormElement =
              t.isParentOrElementHidden =
              t.isEnoughSpace =
              t.isIpadOS =
              t.isIOS =
              t.getClassPropertyAlt =
              t.getClassProperty =
                void 0)
          t.getClassProperty = function (e, t, n) {
            return (
              void 0 === n && (n = ''),
              (window.getComputedStyle(e).getPropertyValue(t) || n).replace(' ', '')
            )
          }
          t.getClassPropertyAlt = function (e, t, n) {
            void 0 === n && (n = '')
            var o = ''
            return (
              e.classList.forEach(function (e) {
                e.includes(t) && (o = e)
              }),
              o.match(/:(.*)]/) ? o.match(/:(.*)]/)[1] : n
            )
          }
          t.isIOS = function () {
            return (
              !!/iPad|iPhone|iPod/.test(navigator.platform) ||
              (navigator.maxTouchPoints &&
                navigator.maxTouchPoints > 2 &&
                /MacIntel/.test(navigator.platform))
            )
          }
          t.isIpadOS = function () {
            return (
              navigator.maxTouchPoints &&
              navigator.maxTouchPoints > 2 &&
              /MacIntel/.test(navigator.platform)
            )
          }
          t.isEnoughSpace = function (e, t, n, o, r) {
            void 0 === n && (n = 'auto'), void 0 === o && (o = 10), void 0 === r && (r = null)
            var i = t.getBoundingClientRect(),
              s = r ? r.getBoundingClientRect() : null,
              a = window.innerHeight,
              l = s ? i.top - s.top : i.top,
              c = (r ? s.bottom : a) - i.bottom,
              f = e.clientHeight + o
            return 'bottom' === n ? c >= f : 'top' === n ? l >= f : l >= f || c >= f
          }
          t.isFormElement = function (e) {
            return (
              e instanceof HTMLInputElement ||
              e instanceof HTMLTextAreaElement ||
              e instanceof HTMLSelectElement
            )
          }
          var o = function (e) {
            return !!e && ('none' === window.getComputedStyle(e).display || o(e.parentElement))
          }
          t.isParentOrElementHidden = o
          t.debounce = function (e, t) {
            var o
            return (
              void 0 === t && (t = 200),
              function () {
                for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i]
                clearTimeout(o),
                  (o = setTimeout(function () {
                    e.apply(n, r)
                  }, t))
              }
            )
          }
          t.dispatch = function (e, t, n) {
            void 0 === n && (n = null)
            var o = new CustomEvent(e, {
              detail: { payload: n },
              bubbles: !0,
              cancelable: !0,
              composed: !1,
            })
            t.dispatchEvent(o)
          }
          t.afterTransition = function (e, t) {
            var n = function () {
              t(), e.removeEventListener('transitionend', n, !0)
            }
            'all 0s ease 0s' !== window.getComputedStyle(e, null).getPropertyValue('transition')
              ? e.addEventListener('transitionend', n, !0)
              : t()
          }
          t.htmlToElement = function (e) {
            var t = document.createElement('template')
            return (e = e.trim()), (t.innerHTML = e), t.content.firstChild
          }
          t.classToClassList = function (e, t, n) {
            void 0 === n && (n = ' '),
              e.split(n).forEach(function (e) {
                return t.classList.add(e)
              })
          }
          t.menuSearchHistory = {
            historyIndex: -1,
            addHistory: function (e) {
              this.historyIndex = e
            },
            existsInHistory: function (e) {
              return e > this.historyIndex
            },
            clearHistory: function () {
              this.historyIndex = -1
            },
          }
        },
      },
      t = {}
    function n(o) {
      var r = t[o]
      if (void 0 !== r) return r.exports
      var i = (t[o] = { exports: {} })
      return e[o].call(i.exports, i, i.exports, n), i.exports
    }
    return (
      (n.d = (e, t) => {
        for (var o in t)
          n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] })
      }),
      (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (n.r = (e) => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      n(610)
    )
  })(),
)
