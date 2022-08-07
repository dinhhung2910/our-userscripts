const {checkContainSelectors, removeDOM} = require('../common/util');
const {
  RIGHT_PANEL_SELECTOR,
  RIGHT_PANEL_ADS_ARIA,
  AD_LABELS,
} = require('./constants');

const removeAdsection = (adSection) => {
  if (checkContainSelectors(adSection, RIGHT_PANEL_ADS_ARIA)) {
    removeDOM(adSection);
    console.log('Removed right panel ads');
    return true;
  } else {
    let isAd = false;
    const adContent = adSection.innerText;

    AD_LABELS.forEach((label) => {
      if (adContent.includes(label)) {
        isAd = true;
      }
    });

    if (isAd) {
      removeDOM(adSection);
    }
    return isAd;
  }
};

const removeRightpanelAds = () => {
  const rightRale = document.querySelector(RIGHT_PANEL_SELECTOR);
  if (rightRale) {
    setTimeout(() => {
      const childList = (rightRale.firstElementChild &&
       rightRale.firstElementChild.firstElementChild &&
       rightRale.firstElementChild.firstElementChild.children) || [];

      for (let i = 0; i < childList.length; i++) {
        let adSection = null;
        try {
          adSection = childList[i];
          removeAdsection(adSection);
        } catch (e) {
          // mute
        }
      }
    }, 0);
  }
};

export default removeRightpanelAds;
