/* eslint-disable camelcase */
// ==UserScript==
// @name        Facebook advertisements remover
// @version     1.2.0
// @author      Hung Dinh
// @description Remove advertisements on facebook web
// @homepage    https://github.com/dinhhung2910/our-userscripts#readme
// @supportURL  https://github.com/dinhhung2910/our-userscripts/pulls
// @match       https://www.facebook.com/**
// @namespace   Script
// @updateURL   https://github.com/dinhhung2910/our-userscripts/raw/main/dist/facebook-ad-remover.user.js
// @source      https://github.com/dinhhung2910/our-userscripts/blob/main/dist/facebook-ad-remover.user.js
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// @grant       GM_listValues
// @grant       GM_notification
// @grant       GM_xmlhttpRequest
// @grant       GM_addValueChangeListener
// @grant       GM_removeValueChangeListener
// @grant       GM_log
// ==/UserScript==

(() => {
  'use strict';
  const e = {
    990: (e, t, o) => {
      /**
       * @param {*} e
       */
      function n(e) {
        const t = document.getElementsByTagName('head')[0];
        const o = document.createElement('link');
        t &&
            ((o.type = 'text/css'),
            (o.rel = 'stylesheet'),
            (o.href = e),
            t.appendChild(o));
      }
      o.r(t),
      o.d(t, {
        addExternalStyle: () => n,
        observeDOM: () => r,
        getSnapshotElmByContent: () => l,
        checkContainSelectors: () => a,
        removeDOM: () => s,
      });
      const r = (e, t, o) => {
        const n = {attributes: !1, childList: !1, subtree: !1, ...t};
        const r = new MutationObserver(o);
        return r.observe(e, n), () => r.disconnect();
      };
      const l = (e) => {
        const t = document.evaluate(
          `//b[contains(., '${e}')]`,
          document,
          null,
          XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
          null,
        );
        return t && t.snapshotLength ? t.snapshotItem(0) : null;
      };
      const a = (e, t) => {
        if (!e) return !1;
        let o = !1;
        return (
          t.forEach((t) => {
            ((e, t) => !!e.querySelector(t))(e, t) && (o = !0);
          }),
          o
        );
      };
      const s = (e) => {
        try {
          e.parentElement.removeChild(e);
        } catch (e) {
          console.error(e);
        }
      };
    },
    758: (e, t, o) => {
      o.r(t),
      o.d(t, {
        AD_LABELS: () => n,
        RIGHT_PANEL_SELECTOR: () => r,
        RIGHT_PANEL_ADS_ARIA: () => l,
        FEED_SELECTOR: () => a,
        ARTICLES_SELECTOR: () => s,
        INTERVAL_TIME_RE_EVALUATE_ADS: () => c,
        INTERVAL_TIME_REMOVE_EXISTED_ADS: () => E,
      });
      const n = ['Được tài trợ'];
      const r = '[data-pagelet="RightRail"]';
      const l = ['[aria-label="Liên kết của nhà quảng cáo"]'];
      const a = '[role="feed"]';
      const s = '[data-pagelet]';
      const c = 3e4;
      const E = 2e3;
    },
  };
  const t = {};
  /**
   * @return {*}
   * @param {*} n
   */
  function o(n) {
    if (t[n]) return t[n].exports;
    const r = (t[n] = {exports: {}});
    return e[n](r, r.exports, o), r.exports;
  }
  (o.d = (e, t) => {
    if (t) {
      // eslint-disable-next-line guard-for-in
      for (const n in t) {
        o.o(t, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, {enumerable: !0, get: t[n]});
      }
    }
  }),
  (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
  (o.r = (e) => {
    'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}),
    Object.defineProperty(e, '__esModule', {value: !0});
  }),
  (() => {
    const e = o(990);
    const t = o(758);
    const n = GM_setValue;
    const r = GM_getValue;
    const l = GM_deleteValue;
    const a = GM_listValues;
    const s = (e, t) => {
      GM_addValueChangeListener(e, (e, o, n, r) => t(n, r, o));
    };
    const c = (e, t, o) => {
      n(e, o(r(e, t)));
    };
    const E = {
      get: r,
      set: n,
      del: l,
      list: a,
      onChange: s,
      update: c,
      val: (e) => ({
        set: n.bind(null, e),
        get: r.bind(null, e),
        del: l.bind(null, e),
        update: c.bind(null, e),
        onChange: s.bind(null, e),
      }),
    };
    const i = (o = t.INTERVAL_TIME_RE_EVALUATE_ADS) => (
      t.AD_LABELS.forEach((t) => {
        const o = (0, e.getSnapshotElmByContent)(t);
        if (o) {
          const e = '.' + o.className.split(' ').join('.');
          n('adSelector', e), console.info('Updated ad selector');
        }
      }),
      r('adSelector') ?
        setTimeout(() => {
          i();
        }, o) :
        setTimeout(() => {
          i();
        }, 500)
    );
    const d = i;
    const u = {attributes: !1, childList: !0, subtree: !1};
    const _ = function(t, o) {
      for (const o of t) {
        'childList' === o.type &&
              o.addedNodes.forEach((t) => {
                S(t) &&
                  (console.log('removed incoming ad'), (0, e.removeDOM)(t));
              });
      }
    };
    const S = (e) => {
      let o = !1;
      const n = E.get('adSelector');
      return (
        e.querySelectorAll(n).forEach((e) => {
          'string' == typeof e.innerText &&
                t.AD_LABELS.forEach((t) => {
                  e.innerText.includes(t) && (o = !0);
                });
        }),
        o
      );
    };
    const T = (o) => {
      o ?
        o.querySelectorAll(t.ARTICLES_SELECTOR).forEach((t) => {
          S(t) && (console.log('removed remain ad'), (0, e.removeDOM)(t));
        }) :
        setTimeout(() => {
          const e = document.querySelector(t.FEED_SELECTOR);
          T(e);
        });
    };
    const m = (o) => {
      o ?
        (0, e.observeDOM)(o, u, _) :
        setTimeout(() => {
          const e = document.querySelector(t.FEED_SELECTOR);
          m(e);
        });
    };
    const {checkContainSelectors: h, removeDOM: A} = o(990);
    const {RIGHT_PANEL_SELECTOR: L, RIGHT_PANEL_ADS_ARIA: R} = o(758);
    const p = () => {
      (() => {
        const e = document.querySelector(L);
        e &&
              setTimeout(() => {
                let t = null;
                try {
                  t = e.firstElementChild.firstElementChild;
                } catch (e) {}
                h(t, R) && (A(t), console.log('Removed right panel ads'));
              }, 0);
      })(),
      T();
    };
    d(), setInterval(p, t.INTERVAL_TIME_REMOVE_EXISTED_ADS), m();
  })();
})();
