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
        190: (t, e) => {
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.COMBO_BOX_ACCESSIBILITY_KEY_SET =
              e.SELECT_ACCESSIBILITY_KEY_SET =
              e.TABS_ACCESSIBILITY_KEY_SET =
              e.OVERLAY_ACCESSIBILITY_KEY_SET =
              e.DROPDOWN_ACCESSIBILITY_KEY_SET =
              e.POSITIONS =
                void 0),
            (e.POSITIONS = {
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
            (e.DROPDOWN_ACCESSIBILITY_KEY_SET = [
              'Escape',
              'ArrowUp',
              'ArrowDown',
              'Home',
              'End',
              'Enter',
            ]),
            (e.OVERLAY_ACCESSIBILITY_KEY_SET = ['Escape', 'Tab']),
            (e.TABS_ACCESSIBILITY_KEY_SET = [
              'ArrowUp',
              'ArrowLeft',
              'ArrowDown',
              'ArrowRight',
              'Home',
              'End',
            ]),
            (e.SELECT_ACCESSIBILITY_KEY_SET = [
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
            (e.COMBO_BOX_ACCESSIBILITY_KEY_SET = [
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
        949: function (t, e, n) {
          /*
           * HSTabs
           * @version: 2.0.3
           * @author: HTMLStream
           * @license: Licensed under MIT (https://preline.co/docs/license.html)
           * Copyright 2023 HTMLStream
           */
          var o,
            r =
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
          var i = n(969),
            s = n(737),
            a = n(190),
            c = (function (t) {
              function e(e, n, o) {
                var r = t.call(this, e, n, o) || this
                return (
                  (r.toggles = r.el.querySelectorAll('[data-hs-tab]')),
                  (r.extraToggleId = r.el.getAttribute('hs-data-tab-select')),
                  (r.extraToggle = document.querySelector(r.extraToggleId)),
                  (r.current = Array.from(r.toggles).find(function (t) {
                    return t.classList.contains('active')
                  })),
                  (r.currentContentId = r.current.getAttribute('data-hs-tab')),
                  (r.currentContent = document.querySelector(r.currentContentId)),
                  (r.prev = null),
                  (r.prevContentId = null),
                  (r.prevContent = null),
                  r.init(),
                  r
                )
              }
              return (
                r(e, t),
                (e.prototype.init = function () {
                  var t = this
                  this.createCollection(window.$hsTabsCollection, this),
                    this.toggles.forEach(function (e) {
                      e.addEventListener('click', function () {
                        return t.open(e)
                      })
                    }),
                    this.extraToggle &&
                      this.extraToggle.addEventListener('change', function (e) {
                        return t.change(e)
                      })
                }),
                (e.prototype.open = function (t) {
                  ;(this.prev = this.current),
                    (this.prevContentId = this.currentContentId),
                    (this.prevContent = this.currentContent),
                    (this.current = t),
                    (this.currentContentId = this.current.getAttribute('data-hs-tab')),
                    (this.currentContent = document.querySelector(this.currentContentId)),
                    this.prev.classList.remove('active'),
                    this.prevContent.classList.add('hidden'),
                    this.current.classList.add('active'),
                    this.currentContent.classList.remove('hidden'),
                    this.fireEvent('change', {
                      el: t,
                      prev: this.prevContentId,
                      current: this.currentContentId,
                    }),
                    (0, i.dispatch)('change.hs.tab', t, {
                      el: t,
                      prev: this.prevContentId,
                      current: this.currentContentId,
                    })
                }),
                (e.prototype.change = function (t) {
                  var e = document.querySelector('[data-hs-tab="'.concat(t.target.value, '"]'))
                  e && e.click()
                }),
                (e.getInstance = function (t, e) {
                  var n = window.$hsTabsCollection.find(function (e) {
                    return e.element.el === ('string' == typeof t ? document.querySelector(t) : t)
                  })
                  return n ? (e ? n : n.element) : null
                }),
                (e.autoInit = function () {
                  window.$hsTabsCollection || (window.$hsTabsCollection = []),
                    document
                      .querySelectorAll('[role="tablist"]:not(select):not(.--prevent-on-load-init)')
                      .forEach(function (t) {
                        window.$hsTabsCollection.find(function (e) {
                          var n
                          return (
                            (null === (n = null == e ? void 0 : e.element) || void 0 === n
                              ? void 0
                              : n.el) === t
                          )
                        }) || new e(t)
                      }),
                    window.$hsTabsCollection &&
                      document.addEventListener('keydown', function (t) {
                        return e.accessibility(t)
                      })
                }),
                (e.open = function (t) {
                  var e = window.$hsTabsCollection.find(function (e) {
                      return Array.from(e.element.toggles).includes(
                        'string' == typeof t ? document.querySelector(t) : t,
                      )
                    }),
                    n = Array.from(e.element.toggles).find(function (e) {
                      return e === ('string' == typeof t ? document.querySelector(t) : t)
                    })
                  n && !n.classList.contains('active') && e.element.open(n)
                }),
                (e.accessibility = function (t) {
                  var e = document.querySelector('[data-hs-tab]:focus')
                  if (e && a.TABS_ACCESSIBILITY_KEY_SET.includes(t.code) && !t.metaKey) {
                    var n = e.closest('[role="tablist"]').getAttribute('data-hs-tabs-vertical')
                    switch ((t.preventDefault(), console.log('Key code:', t.code), t.code)) {
                      case 'true' === n ? 'ArrowUp' : 'ArrowLeft':
                        this.onArrow()
                        break
                      case 'true' === n ? 'ArrowDown' : 'ArrowRight':
                        this.onArrow(!1)
                        break
                      case 'Home':
                        this.onStartEnd()
                        break
                      case 'End':
                        this.onStartEnd(!1)
                    }
                  }
                }),
                (e.onArrow = function (t) {
                  void 0 === t && (t = !0)
                  var e = document.querySelector('[data-hs-tab]:focus').closest('[role="tablist"]'),
                    n = window.$hsTabsCollection.find(function (t) {
                      return t.element.el === e
                    })
                  if (n) {
                    var o = t
                        ? Array.from(n.element.toggles).reverse()
                        : Array.from(n.element.toggles),
                      r = o.find(function (t) {
                        return document.activeElement === t
                      }),
                      i = o.findIndex(function (t) {
                        return t === r
                      })
                    o[(i = i + 1 < o.length ? i + 1 : 0)].focus(), o[i].click()
                  }
                }),
                (e.onStartEnd = function (t) {
                  void 0 === t && (t = !0)
                  var e = document.querySelector('[data-hs-tab]:focus').closest('[role="tablist"]'),
                    n = window.$hsTabsCollection.find(function (t) {
                      return t.element.el === e
                    })
                  if (n) {
                    var o = t
                      ? Array.from(n.element.toggles)
                      : Array.from(n.element.toggles).reverse()
                    o.length && (o[0].focus(), o[0].click())
                  }
                }),
                (e.on = function (t, e, n) {
                  var o = window.$hsTabsCollection.find(function (t) {
                    return Array.from(t.element.toggles).includes(
                      'string' == typeof e ? document.querySelector(e) : e,
                    )
                  })
                  o && (o.element.events[t] = n)
                }),
                e
              )
            })(s.default)
          window.addEventListener('load', function () {
            c.autoInit()
          }),
            'undefined' != typeof window && (window.HSTabs = c),
            (e.default = c)
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
          e.isEnoughSpace = function (t, e, n, o, r) {
            void 0 === n && (n = 'auto'), void 0 === o && (o = 10), void 0 === r && (r = null)
            var i = e.getBoundingClientRect(),
              s = r ? r.getBoundingClientRect() : null,
              a = window.innerHeight,
              c = s ? i.top - s.top : i.top,
              l = (r ? s.bottom : a) - i.bottom,
              u = t.clientHeight + o
            return 'bottom' === n ? l >= u : 'top' === n ? c >= u : c >= u || l >= u
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
                for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i]
                clearTimeout(o),
                  (o = setTimeout(function () {
                    t.apply(n, r)
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
      var r = e[o]
      if (void 0 !== r) return r.exports
      var i = (e[o] = { exports: {} })
      return t[o].call(i.exports, i, i.exports, n), i.exports
    })(949)
    return n
  })(),
)
