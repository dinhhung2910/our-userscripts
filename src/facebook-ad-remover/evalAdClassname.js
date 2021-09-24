import {getSnapshotElmByContent} from '../common/util';
import {AD_LABELS, INTERVAL_TIME_RE_EVALUATE_ADS} from './constants';
import {get, push} from '../common/store';

/**
 * evaluate ad classname and save to local database
 */
export const evaluateAdClassname = () => {
  AD_LABELS.forEach((label) => {
    const elm = getSnapshotElmByContent(label);
    if (elm) {
      const adClassname = '.' + elm.className
        .split(' ')
        .filter((en) => en)
        .join('.');

      if (adClassname != '.') {
        push('adSelector', adClassname);
      }

      console.log(get('adSelector'));

      console.info('Updated ad selector');
    }
  });
};

const evaluateAdInterval = (time = INTERVAL_TIME_RE_EVALUATE_ADS) => {
  evaluateAdClassname();
  if (get('adSelector')) {
    return setTimeout(() => {
      evaluateAdInterval();
    }, time);
  } else {
    return setTimeout(() => {
      evaluateAdInterval();
    }, 500);
  }
};

export default evaluateAdInterval;
