import {INTERVAL_TIME_REMOVE_EXISTED_ADS} from './constants';
import {removeMainAds} from './removeMainAds';
import removeRightpanelAds from './removeRighpanelAds';

export const removeExistedAds = () => {
  removeRightpanelAds();
  removeMainAds();
};

const removeExistedAdsInterval = () => {
  setInterval(removeExistedAds, INTERVAL_TIME_REMOVE_EXISTED_ADS);
};

export default removeExistedAdsInterval;
