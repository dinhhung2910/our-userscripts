import {removeDOM} from '../common/util';
import {AD_LABELS, DISPLAY_ITEM, DISPLAY_ITEM_AD, INTERVAL_TIME} from './constants';

export const removeStaticAds = () => {
  AD_LABELS.forEach((label) => {
    document.querySelectorAll(label).forEach((elm) => {
      removeDOM(elm);
    });
  });

  document.querySelectorAll(DISPLAY_ITEM).forEach((elm) => {
    if (elm.querySelector(DISPLAY_ITEM_AD)) {
      removeDOM(elm);
    }
  });
};

const removeStaticAdsInterval = () => {
  return setInterval(removeStaticAds, INTERVAL_TIME);
};

export default removeStaticAdsInterval;
