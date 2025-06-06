import {INTERVAL_TIME, MAIN_VIDEO, VIDEO_AD_OVERLAY} from './constants';

export const muteAds = () => {
  const adOverlay = document.querySelector(VIDEO_AD_OVERLAY);
  if (adOverlay !== null) {
    adOverlay.setAttribute('style', `
      width: 100%;
      height: 100%;
      background: black;
      position: absolute;
      top: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      left: 0;
      z-index: 10;
    `);

    adOverlay.innerHTML = '<div>Unskippable advertisement.</div>';

    MAIN_VIDEO.forEach((queryMainVideo) => {
      const video = document.querySelector(queryMainVideo);
      if (video) {
        video.volume = 0;
        video.currentTime = video.currentTime + 1000;
      }
    });
  }
};

const muteAdsInterval = () => {
  setInterval(muteAds, INTERVAL_TIME);
};

export default muteAdsInterval;
