import {INTERVAL_TIME, SKIP_AD_LABELS} from './constants';

export const skipVideoAds = () => {
  SKIP_AD_LABELS.forEach((label) => {
    document.querySelectorAll(label).forEach((elm) => {
      elm.click();
    });
  });
};

const skipVideoAdsInterval = () => {
  setInterval(skipVideoAds, INTERVAL_TIME);
};

export default skipVideoAdsInterval;
