import store from '../common/store';
import {DEFAULT_AD_SELECTOR, STORE_KEY} from './constants';
import evaluateAdInterval from './evalAdClassname';
import removeExistedAdsInterval from './removeExistedAds';
import {observeFeed} from './removeMainAds';

(() => {
  store.set(STORE_KEY, DEFAULT_AD_SELECTOR);
  evaluateAdInterval();
  removeExistedAdsInterval();
  observeFeed();
})();
