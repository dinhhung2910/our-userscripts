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

(()=>{"use strict";var e={990:(e,t,n)=>{function o(e){const t=document.getElementsByTagName("head")[0],n=document.createElement("link");t&&(n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n))}n.r(t),n.d(t,{addExternalStyle:()=>o,observeDOM:()=>r,getSnapshotElmByContent:()=>l,checkContainSelectors:()=>a,removeDOM:()=>s});const r=(e,t,n)=>{const o={attributes:!1,childList:!1,subtree:!1,...t},r=new MutationObserver(n);return r.observe(e,o),()=>r.disconnect()},l=e=>{const t=document.evaluate(`//b[contains(., '${e}')]`,document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);return t&&t.snapshotLength?t.snapshotItem(0):null},a=(e,t)=>{if(!e)return!1;let n=!1;return t.forEach((t=>{((e,t)=>!!e.querySelector(t))(e,t)&&(n=!0)})),n},s=e=>{try{e.parentElement.removeChild(e)}catch(e){console.error(e)}}},758:(e,t,n)=>{n.r(t),n.d(t,{AD_LABELS:()=>o,RIGHT_PANEL_SELECTOR:()=>r,RIGHT_PANEL_ADS_ARIA:()=>l,FEED_SELECTOR:()=>a,ARTICLES_SELECTOR:()=>s,INTERVAL_TIME_RE_EVALUATE_ADS:()=>c,INTERVAL_TIME_REMOVE_EXISTED_ADS:()=>E});const o=["Được tài trợ"],r='[data-pagelet="RightRail"]',l=['[aria-label="Liên kết của nhà quảng cáo"]'],a='[role="feed"]',s="[data-pagelet]",c=3e4,E=2e3}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=n(990),t=n(758);const o=GM_setValue,r=GM_getValue,l=GM_deleteValue,a=GM_listValues,s=(e,t)=>{GM_addValueChangeListener(e,((e,n,o,r)=>t(o,r,n)))},c=(e,t,n)=>{o(e,n(r(e,t)))},E={get:r,set:o,del:l,list:a,onChange:s,update:c,val:e=>({set:o.bind(null,e),get:r.bind(null,e),del:l.bind(null,e),update:c.bind(null,e),onChange:s.bind(null,e)})},i=()=>{t.AD_LABELS.forEach((t=>{const n=(0,e.getSnapshotElmByContent)(t);if(n){const e="."+n.className.split(" ").join(".");o("adSelector",e),console.info("Updated ad selector")}}))},d={attributes:!1,childList:!0,subtree:!1},u=function(t,n){for(const n of t)"childList"===n.type&&n.addedNodes.forEach((t=>{_(t)&&(console.log("removed incoming ad"),(0,e.removeDOM)(t))}))},_=e=>{let n=!1;const o=E.get("adSelector");return e.querySelectorAll(o).forEach((e=>{"string"==typeof e.innerText&&t.AD_LABELS.forEach((t=>{e.innerText.includes(t)&&(n=!0)}))})),n},S=n=>{n?n.querySelectorAll(t.ARTICLES_SELECTOR).forEach((t=>{_(t)&&(console.log("removed remain ad"),(0,e.removeDOM)(t))})):setTimeout((()=>{const e=document.querySelector(t.FEED_SELECTOR);S(e)}))},T=n=>{n?(0,e.observeDOM)(n,d,u):setTimeout((()=>{const e=document.querySelector(t.FEED_SELECTOR);T(e)}))},{checkContainSelectors:m,removeDOM:h}=n(990),{RIGHT_PANEL_SELECTOR:A,RIGHT_PANEL_ADS_ARIA:L}=n(758),R=()=>{(()=>{const e=document.querySelector(A);e&&setTimeout((()=>{let t=null;try{t=e.firstElementChild.firstElementChild}catch(e){}m(t,L)&&(h(t),console.log("Removed right panel ads"))}),0)})(),S()};((e=t.INTERVAL_TIME_RE_EVALUATE_ADS)=>{setInterval(i,e)})(),setInterval(R,t.INTERVAL_TIME_REMOVE_EXISTED_ADS),T()})()})();