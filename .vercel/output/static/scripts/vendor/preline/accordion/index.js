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
        460: function (t, e, n) {
          /*
           * HSAccordion
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
          var r = n(969),
            c = (function (t) {
              function e(e, n, o) {
                var i = t.call(this, e, n, o) || this
                return (
                  (i.toggle = i.el.querySelector('.hs-accordion-toggle') || null),
                  (i.content = i.el.querySelector('.hs-accordion-content') || null),
                  (i.group = i.el.closest('.hs-accordion-group') || null),
                  (i.isAlwaysOpened = i.group.hasAttribute('data-hs-accordion-always-open') || !1),
                  i.toggle && i.content && i.init(),
                  i
                )
              }
              return (
                i(e, t),
                (e.prototype.init = function () {
                  var t = this
                  this.createCollection(window.$hsAccordionCollection, this),
                    this.toggle.addEventListener('click', function () {
                      t.el.classList.contains('active') ? t.hide() : t.show()
                    })
                }),
                (e.prototype.show = function () {
                  var t = this
                  this.group &&
                    !this.isAlwaysOpened &&
                    this.group.querySelector('.hs-accordion.active') &&
                    this.group.querySelector('.hs-accordion.active') !== this.el &&
                    window.$hsAccordionCollection
                      .find(function (e) {
                        return e.element.el === t.group.querySelector('.hs-accordion.active')
                      })
                      .element.hide()
                  if (this.el.classList.contains('active')) return !1
                  this.el.classList.add('active'),
                    (this.content.style.display = 'block'),
                    (this.content.style.height = '0'),
                    setTimeout(function () {
                      t.content.style.height = ''.concat(t.content.scrollHeight, 'px')
                    }),
                    (0, r.afterTransition)(this.content, function () {
                      ;(t.content.style.display = 'block'),
                        (t.content.style.height = ''),
                        t.fireEvent('open', t.el),
                        (0, r.dispatch)('open.hs.accordion', t.el, t.el)
                    })
                }),
                (e.prototype.hide = function () {
                  var t = this
                  if (!this.el.classList.contains('active')) return !1
                  this.el.classList.remove('active'),
                    (this.content.style.height = ''.concat(this.content.scrollHeight, 'px')),
                    setTimeout(function () {
                      t.content.style.height = '0'
                    }),
                    (0, r.afterTransition)(this.content, function () {
                      ;(t.content.style.display = ''),
                        (t.content.style.height = '0'),
                        t.fireEvent('close', t.el),
                        (0, r.dispatch)('close.hs.accordion', t.el, t.el)
                    })
                }),
                (e.getInstance = function (t, e) {
                  var n = window.$hsAccordionCollection.find(function (e) {
                    return e.element.el === ('string' == typeof t ? document.querySelector(t) : t)
                  })
                  return n ? (e ? n : n.element.el) : null
                }),
                (e.show = function (t) {
                  var e = window.$hsAccordionCollection.find(function (e) {
                    return e.element.el === ('string' == typeof t ? document.querySelector(t) : t)
                  })
                  e && 'block' !== e.element.content.style.display && e.element.show()
                }),
                (e.hide = function (t) {
                  var e = window.$hsAccordionCollection.find(function (e) {
                    return e.element.el === ('string' == typeof t ? document.querySelector(t) : t)
                  })
                  e && 'block' === e.element.content.style.display && e.element.hide()
                }),
                (e.autoInit = function () {
                  window.$hsAccordionCollection || (window.$hsAccordionCollection = []),
                    document
                      .querySelectorAll('.hs-accordion:not(.--prevent-on-load-init)')
                      .forEach(function (t) {
                        window.$hsAccordionCollection.find(function (e) {
                          var n
                          return (
                            (null === (n = null == e ? void 0 : e.element) || void 0 === n
                              ? void 0
                              : n.el) === t
                          )
                        }) || new e(t)
                      })
                }),
                (e.on = function (t, e, n) {
                  var o = window.$hsAccordionCollection.find(function (t) {
                    return t.element.el === ('string' == typeof e ? document.querySelector(e) : e)
                  })
                  o && (o.element.events[t] = n)
                }),
                e
              )
            })(n(737).default)
          window.addEventListener('load', function () {
            c.autoInit()
          }),
            'undefined' != typeof window && (window.HSAccordion = c),
            (e.default = c)
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
            var r = e.getBoundingClientRect(),
              c = i ? i.getBoundingClientRect() : null,
              s = window.innerHeight,
              l = c ? r.top - c.top : r.top,
              a = (i ? c.bottom : s) - r.bottom,
              u = t.clientHeight + o
            return 'bottom' === n ? a >= u : 'top' === n ? l >= u : l >= u || a >= u
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
                for (var i = [], r = 0; r < arguments.length; r++) i[r] = arguments[r]
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
      var r = (e[o] = { exports: {} })
      return t[o].call(r.exports, r, r.exports, n), r.exports
    })(460)
    return n
  })(),
)
