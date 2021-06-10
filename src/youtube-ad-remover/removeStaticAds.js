import {removeDOM} from '../common/util';
import {AD_LABELS, DISPLAY_ITEM, DISPLAY_ITEM_AD, INTERVAL_TIME} from './constants';

export const removeStaticAds = () => {
  AD_LABELS.forEach((label) => {
    document.querySelectorAll(label).forEach((elm) => {
      removeDOM(elm);
    });
  });

  // this is the advertisement in dashboard page
  // if it is removed, it will be appended later
  // so, hide it is the best choice
  document.querySelectorAll(DISPLAY_ITEM).forEach((elm) => {
    if (elm.querySelector(DISPLAY_ITEM_AD)) {
      elm.style.display = 'none';
      elm.classList.add('hided');
    }
  });
};

const removeStaticAdsInterval = () => {
  return setInterval(removeStaticAds, INTERVAL_TIME);
};

export default removeStaticAdsInterval;
