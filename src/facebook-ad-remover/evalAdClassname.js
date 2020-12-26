import {getSnapshotElmByContent} from '../common/util';
import {AD_LABELS, INTERVAL_TIME_RE_EVALUATE_ADS} from './constants';
import {get, set} from '../common/store';

/**
 * evaluate ad classname and save to local database
 */
export const evaluateAdClassname = () => {
  AD_LABELS.forEach((label) => {
    const elm = getSnapshotElmByContent(label);
    if (elm) {
      const adClassname = '.' + elm.className.split(' ').join('.');

      set('adSelector', adClassname);
      console.info('Updated ad selector');
    }
  });
};

const evaluateAdInterval = (time = INTERVAL_TIME_RE_EVALUATE_ADS) => {
  evaluateAdClassname();
  setInterval(evaluateAdClassname, time);
};

export default evaluateAdInterval;
