import muteAdsInterval from './muteAds';
import removeStaticAdsInterval from './removeStaticAds';
import skipVideoAdsInterval from './skipVideoAds';

(() => {
  removeStaticAdsInterval();
  skipVideoAdsInterval();
  muteAdsInterval();
})();
