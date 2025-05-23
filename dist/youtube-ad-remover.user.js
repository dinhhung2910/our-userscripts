// ==UserScript==
// @name Youtube advertisements remover
// @description Remove and auto skip advertisements on youtube web
// @version 1.2.7
// @author Hung Dinh
// @supportURL https://github.com/dinhhung2910/our-userscripts/pulls
// @match *://www.youtube.com/*
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_deleteValue
// @grant GM_listValues
// @grant GM_notification
// @grant GM_xmlhttpRequest
// @grant GM_addValueChangeListener
// @grant GM_removeValueChangeListener
// @grant GM_log
// @namespace Script
// @source https://github.com/dinhhung2910/our-userscripts/blob/main/dist/youtube-ad-remover.user.js
// @updateURL https://github.com/dinhhung2910/our-userscripts/raw/main/dist/youtube-ad-remover.user.js
// ==/UserScript==

(()=>{"use strict";const e=[".ytp-ad-image-overlay","ytd-player-legacy-desktop-watch-ads-renderer","#masthead-ad","ytd-promoted-sparkles-web-renderer"],t=[".ytp-ad-skip-button",".ytp-skip-ad-button",".ytp-ad-skip-button-modern"],r=["video.html5-main-video","video.video-stream.html5-main-video"],n=()=>{const e=document.querySelector("#container div.ad-interrupting video");null!==e&&(e.setAttribute("style","\n      width: 100%;\n      height: 100%;\n      background: black;\n      position: absolute;\n      top: 0;\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: center;\n      left: 0;\n      z-index: 10;\n    "),e.innerHTML="<div>Unskippable advertisement.</div>",r.forEach((e=>{const t=document.querySelector(e);t&&(t.volume=0,t.currentTime=t.currentTime+1e3)})))},d=()=>{e.forEach((e=>{document.querySelectorAll(e).forEach((e=>{(e=>{try{e.parentElement.removeChild(e)}catch(e){console.error(e)}})(e)}))})),document.querySelectorAll("ytd-rich-item-renderer:not(.hided)").forEach((e=>{e.querySelector(".badge-style-type-ad")&&(e.style.display="none",e.classList.add("hided"))}))},o=()=>{t.forEach((e=>{document.querySelectorAll(e).forEach((e=>{e.click()}))}))};window.trustedTypes&&window.trustedTypes.createPolicy&&!window.trustedTypes.defaultPolicy&&window.trustedTypes.createPolicy("default",{createHTML:e=>e}),setInterval(d,400),setInterval(o,400),setInterval(n,400)})();