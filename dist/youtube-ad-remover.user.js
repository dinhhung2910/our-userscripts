// ==UserScript==
// @name        Youtube advertisements remover
// @version     1.2.2
// @author      Hung Dinh
// @description Remove and auto skip advertisements on youtube web
// @homepage    https://github.com/dinhhung2910/our-userscripts#readme
// @supportURL  https://github.com/dinhhung2910/our-userscripts/pulls
// @match       *://www.youtube.com/*
// @namespace   Script
// @updateURL   https://github.com/dinhhung2910/our-userscripts/raw/main/dist/youtube-ad-remover.user.js
// @source      https://github.com/dinhhung2910/our-userscripts/blob/main/dist/youtube-ad-remover.user.js
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

(()=>{"use strict";const e=[".ytp-ad-image-overlay","ytd-player-legacy-desktop-watch-ads-renderer","#masthead-ad","ytd-promoted-sparkles-web-renderer"],t=[".ytp-ad-skip-button"],r=()=>{const e=document.querySelector(".ytp-ad-player-overlay");null!==e&&(e.setAttribute("style","\n      width: 100%;\n      height: 100%;\n      background: black;\n      position: absolute;\n      top: 0;\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: center;\n      left: 0;\n      z-index: 10;\n    "),e.innerHTML="<div>Unskippable advertisement.</div>",document.querySelector("video.html5-main-video").volume=0)},n=()=>{t.forEach((e=>{document.querySelectorAll(e).forEach((e=>{e.click()}))}))};setInterval((()=>{e.forEach((e=>{document.querySelectorAll(e).forEach((e=>{(e=>{try{e.parentElement.removeChild(e)}catch(e){console.error(e)}})(e)}))})),document.querySelectorAll("ytd-rich-item-renderer:not(.hided)").forEach((e=>{e.querySelector(".badge-style-type-ad")&&(e.style.display="none",e.classList.add("hided"))}))}),400),setInterval(n,400),setInterval(r,400)})();