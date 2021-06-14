import store from '../common/store';
import {hideDOM, observeDOM} from '../common/util';
import {AD_LABELS, ARTICLES_SELECTOR, FEED_SELECTOR} from './constants';

const config = {attributes: false, childList: true, subtree: false};
const callback = function(mutationsList, observer) {
  // Use traditional 'for loops' for IE 11
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      const list = mutation.addedNodes;
      list.forEach((elm) => {
        if (isMainAds(elm)) {
          console.log('removed incoming ad');
          hideDOM(elm);
        }
      });
    }
  }
};

export const isMainAds = (elm) => {
  let isAd = false;

  const adSelector = store.get('adSelector');

  const adTexts = elm.querySelectorAll(adSelector);
  adTexts.forEach((en) => {
    if (typeof en.innerText == 'string') {
      AD_LABELS.forEach((adAria) => {
        if (en.innerText.includes(adAria)) {
          isAd = true;
        }
      });
    }
  });
  return isAd;
};

export const removeMainAds = (feed) => {
  if (!feed) {
    setTimeout(() => {
      const newFeed = document.querySelector(FEED_SELECTOR);
      removeMainAds(newFeed);
    });
  } else {
    const articles = feed.querySelectorAll(ARTICLES_SELECTOR);
    articles.forEach((elm) => {
      if (isMainAds(elm)) {
        console.log('removed remain ad');
        hideDOM(elm);
      }
    });
  }
};

export const observeFeed = (feed) => {
  if (!feed) {
    setTimeout(() => {
      const newFeed = document.querySelector(FEED_SELECTOR);
      observeFeed(newFeed);
    });
  } else {
    observeDOM(feed, config, callback);
  }
};
