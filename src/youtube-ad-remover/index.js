import muteAdsInterval from './muteAds';
import removeStaticAdsInterval from './removeStaticAds';
import skipVideoAdsInterval from './skipVideoAds';

(() => {
  if (window.trustedTypes && window.trustedTypes.createPolicy && !window.trustedTypes.defaultPolicy) {
    window.trustedTypes.createPolicy('default', {
        createHTML: string => string
    });
  }
  removeStaticAdsInterval();
  skipVideoAdsInterval();
  muteAdsInterval();
})();
