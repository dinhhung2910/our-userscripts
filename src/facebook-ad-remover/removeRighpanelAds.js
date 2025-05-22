const {removeDOM} = require('../common/util');
const {
  RIGHT_PANEL_SELECTOR,
  RIGHT_PANEL_ADS_HEADING_CONTENT,
} = require('./constants');

const removeRightpanelAds = () => {
  const rightRale = document.querySelector(RIGHT_PANEL_SELECTOR);
  if (rightRale) {
    const adHeadings = rightRale.querySelectorAll('h3');
    
    let adHeading = null;
    for (const heading of adHeadings) {
      if (heading.innerText == RIGHT_PANEL_ADS_HEADING_CONTENT) {
        adHeading = heading;
      }
    }

    let adComponent = adHeading;
    if (adHeading) {
      while (adComponent) {
        if (adComponent.parentElement && adComponent.parentElement.querySelectorAll('h3').length > 1) {
          break;
        }

        adComponent = adComponent.parentElement;
      }
    }

    if (adComponent) {
      console.log('Remove right panel ADs');
      removeDOM(adComponent);
    }
  }
};

export default removeRightpanelAds;
