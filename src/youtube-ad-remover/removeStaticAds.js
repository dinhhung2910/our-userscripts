import {removeDOM} from '../common/util';
import {AD_LABELS, INTERVAL_TIME} from './constants';

export const removeStaticAds = () => {
  AD_LABELS.forEach((label) => {
    document.querySelectorAll(label).forEach((elm) => {
      removeDOM(elm);
    });
  });
};

const removeStaticAdsInterval = () => {
  return setInterval(removeStaticAds, INTERVAL_TIME);
};

export default removeStaticAdsInterval;
