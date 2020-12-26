const {checkContainSelectors, removeDOM} = require('../common/util');
const {RIGHT_PANEL_SELECTOR, RIGHT_PANEL_ADS_ARIA} = require('./constants');

const removeRightpanelAds = () => {
  const rightRale = document.querySelector(RIGHT_PANEL_SELECTOR);
  if (rightRale) {
    setTimeout(() => {
      let adSection = null;
      try {
        adSection = rightRale.firstElementChild.firstElementChild;
      } catch (e) {
        // mute
      }

      if (checkContainSelectors(adSection, RIGHT_PANEL_ADS_ARIA)) {
        removeDOM(adSection);
        console.log('Removed right panel ads');
      }
    }, 0);
  }
};

export default removeRightpanelAds;
