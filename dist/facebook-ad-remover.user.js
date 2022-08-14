// ==UserScript==
// @name        Facebook advertisements remover
// @version     1.5.3
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

(()=>{"use strict";var e={990:(e,t,n)=>{function r(e){const t=document.getElementsByTagName("head")[0],n=document.createElement("link");t&&(n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n))}n.r(t),n.d(t,{addExternalStyle:()=>r,checkContainSelectors:()=>s,getSnapshotElmByContent:()=>l,hideDOM:()=>E,observeDOM:()=>o,removeDOM:()=>c});const o=(e,t,n)=>{const r={attributes:!1,childList:!1,subtree:!1,...t},o=new MutationObserver(n);return o.observe(e,r),()=>o.disconnect()},l=e=>{const t=["b","span"];let n=null;for(let r=0;r<t.length;r++){const o=t[r];if(n&&n.snapshotLength)break;n=document.evaluate(`//${o}[contains(., '${e}')]`,document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null)}return n&&n.snapshotLength?n.snapshotItem(0):null},s=(e,t)=>{if(!e)return!1;let n=!1;return t.forEach((t=>{((e,t)=>!!e.querySelector(t))(e,t)&&(n=!0)})),n},c=e=>{try{e.parentElement.removeChild(e)}catch(e){console.error(e)}},E=e=>{try{e.style.display="none",e.classList.add("hided")}catch(e){console.error(e)}}},758:(e,t,n)=>{n.r(t),n.d(t,{AD_LABELS:()=>r,AD_SELECTORS:()=>o,ARTICLES_SELECTOR:()=>E,DEFAULT_AD_SELECTOR:()=>_,FEED_SELECTOR:()=>c,INGORED_ARTICLE_CATEGORIES:()=>d,INTERVAL_TIME_REMOVE_EXISTED_ADS:()=>i,INTERVAL_TIME_RE_EVALUATE_ADS:()=>a,RIGHT_PANEL_ADS_ARIA:()=>s,RIGHT_PANEL_SELECTOR:()=>l,STORE_KEY:()=>u});const r=["Được tài trợ","Gợi ý cho bạn","Sponsored","Suggested for You","Reels và video ngắn"],o=['[href^="/ads/about"]','[href^="/reel/"]'],l="#ssrb_rhc_start+div",s=['[aria-label="Nhà quảng cáo"]'],c='[role="feed"]',E=`${c}>div:not(.checked)`,d=["SPONSORED","ENGAGEMENT","SHOWCASE","FB_SHORTS"],a=3e4,i=2e3,u="adSelector",_=["[aria-label=Sponsored]","a[role=link][target=_blank]"]}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,n),l.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const e=GM_setValue,t=GM_getValue,r=GM_deleteValue,o=GM_listValues,l=(e,t)=>{GM_addValueChangeListener(e,((e,n,r,o)=>t(r,o,n)))},s=(n,r,o)=>{e(n,o(t(n,r)))},c={get:t,set:e,del:r,list:o,onChange:l,update:s,val:n=>({set:e.bind(null,n),get:t.bind(null,n),del:r.bind(null,n),update:s.bind(null,n),onChange:l.bind(null,n)})};var E=n(758),d=n(990);const a={attributes:!1,childList:!0,subtree:!1},i=function(e,t){for(const t of e)"childList"===t.type&&t.addedNodes.forEach((e=>{u(e)&&(console.log("removed incoming ad"),(0,d.hideDOM)(e))}))},u=e=>{if(!e)return!1;let t=!1;const n=(e=>{const t=Object.keys(e).find((e=>e.includes("reactProp")));if(!t)return null;let n=null;try{n=e[t].children.props.children.props}catch(e){}return n})(e);if(!n)return!1;e.classList.add("checked");try{t=E.INGORED_ARTICLE_CATEGORIES.includes(n.feedEdge.category)}catch(e){console.warn(e)}return t},_=e=>{e?e.querySelectorAll(E.ARTICLES_SELECTOR).forEach((e=>{u(e)&&(console.log("removed remain ad"),(0,d.hideDOM)(e))})):setTimeout((()=>{const e=document.querySelector(E.FEED_SELECTOR);_(e)}))},h=e=>{e?(0,d.observeDOM)(e,a,i):setTimeout((()=>{const e=document.querySelector(E.FEED_SELECTOR);h(e)}))},{checkContainSelectors:S,removeDOM:T}=n(990),{RIGHT_PANEL_SELECTOR:O,RIGHT_PANEL_ADS_ARIA:R,AD_LABELS:A}=n(758),f=e=>{if(S(e,R))return T(e),console.log("Removed right panel ads"),!0;{let t=!1;const n=e.innerText;return A.forEach((e=>{n.includes(e)&&(t=!0)})),t&&T(e),t}},L=()=>{(()=>{const e=document.querySelector(O);e&&setTimeout((()=>{const t=e.firstElementChild&&e.firstElementChild.firstElementChild&&e.firstElementChild.firstElementChild.children||[];for(let e=0;e<t.length;e++){let n=null;try{n=t[e],f(n)}catch(e){}}}),0)})(),_()};c.set(E.STORE_KEY,E.DEFAULT_AD_SELECTOR),setInterval(L,E.INTERVAL_TIME_REMOVE_EXISTED_ADS),h()})()})();