import evaluateAdInterval from './evalAdClassname';
import removeExistedAdsInterval from './removeExistedAds';
import {observeFeed} from './removeMainAds';

(() => {
  evaluateAdInterval();
  removeExistedAdsInterval();
  observeFeed();
})();
