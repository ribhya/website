!(function (t, e) {
  if ('object' == typeof exports && 'object' == typeof module) module.exports = e()
  else if ('function' == typeof define && define.amd) define([], e)
  else {
    var n = e()
    for (var o in n) ('object' == typeof exports ? exports : t)[o] = n[o]
  }
})(self, () =>
  (() => {
    'use strict'
    var t = {
        737: (t, e) => {
          /*
           * HSBasePlugin
           * @version: 2.0.3
           * @author: HTMLStream
           * @license: Licensed under MIT (https://preline.co/docs/license.html)
           * Copyright 2023 HTMLStream
           */
          Object.defineProperty(e, '__esModule', { value: !0 })
          var n = (function () {
            function t(t, e, n) {
              ;(this.el = t),
                (this.options = e),
                (this.events = n),
                (this.el = t),
                (this.options = e),
                (this.events = {})
            }
            return (
              (t.prototype.createCollection = function (t, e) {
                var n
                t.push({
                  id:
                    (null === (n = null == e ? void 0 : e.el) || void 0 === n ? void 0 : n.id) ||
                    t.length + 1,
                  element: e,
                })
              }),
              (t.prototype.fireEvent = function (t, e) {
                if ((void 0 === e && (e = null), this.events.hasOwnProperty(t)))
                  return this.events[t](e)
              }),
              (t.prototype.on = function (t, e) {
                this.events[t] = e
              }),
              t
            )
          })()
          e.default = n
        },
        652: function (t, e, n) {
          /*
           * HSCollapse
           * @version: 2.0.3
           * @author: HTMLStream
           * @license: Licensed under MIT (https://preline.co/docs/license.html)
           * Copyright 2023 HTMLStream
           */
          var o,
            i =
              (this && this.__extends) ||
              ((o = function (t, e) {
                return (
                  (o =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e
                      }) ||
                    function (t, e) {
                      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    }),
                  o(t, e)
                )
              }),
              function (t, e) {
                if ('function' != typeof e && null !== e)
                  throw new TypeError(
                    'Class extends value ' + String(e) + ' is not a constructor or null',
                  )
                function n() {
                  this.constructor = t
                }
                o(t, e),
                  (t.prototype =
                    null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
              })
          Object.defineProperty(e, '__esModule', { value: !0 })
          var s = n(969),
            r = (function (t) {
              function e(e, n, o) {
                var i = t.call(this, e, n, o) || this
                return (
                  (i.contentId = i.el.dataset.hsCollapse),
                  (i.content = document.querySelector(i.contentId)),
                  (i.animationInProcess = !1),
                  i.content && i.init(),
                  i
                )
              }
              return (
                i(e, t),
                (e.prototype.init = function () {
                  var t = this
                  this.createCollection(window.$hsCollapseCollection, this),
                    this.el.addEventListener('click', function () {
                      t.content.classList.contains('open') ? t.hide() : t.show()
                    })
                }),
                (e.prototype.hideAllMegaMenuItems = function () {
                  this.content
                    .querySelectorAll('.hs-mega-menu-content.block')
                    .forEach(function (t) {
                      t.classList.remove('block'), t.classList.add('hidden')
                    })
                }),
                (e.prototype.show = function () {
                  var t = this
                  if (this.animationInProcess || this.el.classList.contains('open')) return !1
                  ;(this.animationInProcess = !0),
                    this.el.classList.add('open'),
                    this.content.classList.add('open'),
                    this.content.classList.remove('hidden'),
                    (this.content.style.height = '0'),
                    setTimeout(function () {
                      t.content.style.height = ''.concat(t.content.scrollHeight, 'px')
                    }),
                    (0, s.afterTransition)(this.content, function () {
                      ;(t.content.style.height = ''),
                        t.fireEvent('open', t.el),
                        (0, s.dispatch)('open.hs.collapse', t.el, t.el),
                        (t.animationInProcess = !1)
                    })
                }),
                (e.prototype.hide = function () {
                  var t = this
                  if (this.animationInProcess || !this.el.classList.contains('open')) return !1
                  ;(this.animationInProcess = !0),
                    this.el.classList.remove('open'),
                    (this.content.style.height = ''.concat(this.content.scrollHeight, 'px')),
                    setTimeout(function () {
                      t.content.style.height = '0'
                    }),
                    this.content.classList.remove('open'),
                    (0, s.afterTransition)(this.content, function () {
                      t.content.classList.add('hidden'),
                        (t.content.style.height = ''),
                        t.fireEvent('hide', t.el),
                        (0, s.dispatch)('hide.hs.collapse', t.el, t.el),
                        (t.animationInProcess = !1)
                    }),
                    this.content.querySelectorAll('.hs-mega-menu-content.block').length &&
                      this.hideAllMegaMenuItems()
                }),
                (e.getInstance = function (t, e) {
                  void 0 === e && (e = !1)
                  var n = window.$hsCollapseCollection.find(function (e) {
                    return e.element.el === ('string' == typeof t ? document.querySelector(t) : t)
                  })
                  return n ? (e ? n : n.element.el) : null
                }),
                (e.autoInit = function () {
                  window.$hsCollapseCollection || (window.$hsCollapseCollection = []),
                    document
                      .querySelectorAll('.hs-collapse-toggle:not(.--prevent-on-load-init)')
                      .forEach(function (t) {
                        window.$hsCollapseCollection.find(function (e) {
                          var n
                          return (
                            (null === (n = null == e ? void 0 : e.element) || void 0 === n
                              ? void 0
                              : n.el) === t
                          )
                        }) || new e(t)
                      })
                }),
                (e.show = function (t) {
                  var e = window.$hsCollapseCollection.find(function (e) {
                    return e.element.el === ('string' == typeof t ? document.querySelector(t) : t)
                  })
                  e && e.element.content.classList.contains('hidden') && e.element.show()
                }),
                (e.hide = function (t) {
                  var e = window.$hsCollapseCollection.find(function (e) {
                    return e.element.el === ('string' == typeof t ? document.querySelector(t) : t)
                  })
                  e && !e.element.content.classList.contains('hidden') && e.element.hide()
                }),
                (e.on = function (t, e, n) {
                  var o = window.$hsCollapseCollection.find(function (t) {
                    return t.element.el === ('string' == typeof e ? document.querySelector(e) : e)
                  })
                  o && (o.element.events[t] = n)
                }),
                e
              )
            })(n(737).default)
          window.addEventListener('load', function () {
            r.autoInit()
          }),
            'undefined' != typeof window && (window.HSCollapse = r),
            (e.default = r)
        },
        969: function (t, e) {
          var n = this
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.menuSearchHistory =
              e.classToClassList =
              e.htmlToElement =
              e.afterTransition =
              e.dispatch =
              e.debounce =
              e.isFormElement =
              e.isParentOrElementHidden =
              e.isEnoughSpace =
              e.isIpadOS =
              e.isIOS =
              e.getClassPropertyAlt =
              e.getClassProperty =
                void 0)
          e.getClassProperty = function (t, e, n) {
            return (
              void 0 === n && (n = ''),
              (window.getComputedStyle(t).getPropertyValue(e) || n).replace(' ', '')
            )
          }
          e.getClassPropertyAlt = function (t, e, n) {
            void 0 === n && (n = '')
            var o = ''
            return (
              t.classList.forEach(function (t) {
                t.includes(e) && (o = t)
              }),
              o.match(/:(.*)]/) ? o.match(/:(.*)]/)[1] : n
            )
          }
          e.isIOS = function () {
            return (
              !!/iPad|iPhone|iPod/.test(navigator.platform) ||
              (navigator.maxTouchPoints &&
                navigator.maxTouchPoints > 2 &&
                /MacIntel/.test(navigator.platform))
            )
          }
          e.isIpadOS = function () {
            return (
              navigator.maxTouchPoints &&
              navigator.maxTouchPoints > 2 &&
              /MacIntel/.test(navigator.platform)
            )
          }
          e.isEnoughSpace = function (t, e, n, o, i) {
            void 0 === n && (n = 'auto'), void 0 === o && (o = 10), void 0 === i && (i = null)
            var s = e.getBoundingClientRect(),
              r = i ? i.getBoundingClientRect() : null,
              l = window.innerHeight,
              c = r ? s.top - r.top : s.top,
              a = (i ? r.bottom : l) - s.bottom,
              u = t.clientHeight + o
            return 'bottom' === n ? a >= u : 'top' === n ? c >= u : c >= u || a >= u
          }
          e.isFormElement = function (t) {
            return (
              t instanceof HTMLInputElement ||
              t instanceof HTMLTextAreaElement ||
              t instanceof HTMLSelectElement
            )
          }
          var o = function (t) {
            return !!t && ('none' === window.getComputedStyle(t).display || o(t.parentElement))
          }
          e.isParentOrElementHidden = o
          e.debounce = function (t, e) {
            var o
            return (
              void 0 === e && (e = 200),
              function () {
                for (var i = [], s = 0; s < arguments.length; s++) i[s] = arguments[s]
                clearTimeout(o),
                  (o = setTimeout(function () {
                    t.apply(n, i)
                  }, e))
              }
            )
          }
          e.dispatch = function (t, e, n) {
            void 0 === n && (n = null)
            var o = new CustomEvent(t, {
              detail: { payload: n },
              bubbles: !0,
              cancelable: !0,
              composed: !1,
            })
            e.dispatchEvent(o)
          }
          e.afterTransition = function (t, e) {
            var n = function () {
              e(), t.removeEventListener('transitionend', n, !0)
            }
            'all 0s ease 0s' !== window.getComputedStyle(t, null).getPropertyValue('transition')
              ? t.addEventListener('transitionend', n, !0)
              : e()
          }
          e.htmlToElement = function (t) {
            var e = document.createElement('template')
            return (t = t.trim()), (e.innerHTML = t), e.content.firstChild
          }
          e.classToClassList = function (t, e, n) {
            void 0 === n && (n = ' '),
              t.split(n).forEach(function (t) {
                return e.classList.add(t)
              })
          }
          e.menuSearchHistory = {
            historyIndex: -1,
            addHistory: function (t) {
              this.historyIndex = t
            },
            existsInHistory: function (t) {
              return t > this.historyIndex
            },
            clearHistory: function () {
              this.historyIndex = -1
            },
          }
        },
      },
      e = {}
    var n = (function n(o) {
      var i = e[o]
      if (void 0 !== i) return i.exports
      var s = (e[o] = { exports: {} })
      return t[o].call(s.exports, s, s.exports, n), s.exports
    })(652)
    return n
  })(),
)
