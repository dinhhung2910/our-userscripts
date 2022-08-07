import {getSnapshotElmByContent} from '../common/util';
import {AD_LABELS, AD_SELECTORS,
  INTERVAL_TIME_RE_EVALUATE_ADS,
} from './constants';
import {get, push} from '../common/store';

const stringifyClassname = (elmClassName) => {
  const adClassname = '.' + elmClassName
    .split(' ')
    .filter((en) => en)
    .join('.');

  if (adClassname == '.') return null;
  return adClassname;
};

/**
 * evaluate ad classname and save to local database
 */
export const evaluateAdClassname = () => {
  AD_LABELS.forEach((label) => {
    const elm = getSnapshotElmByContent(label);
    if (elm) {
      const adClassname = stringifyClassname(elm.className);

      if (adClassname) {
        push('adSelector', adClassname);
      }
    }
  });

  AD_SELECTORS.forEach((selector) => {
    const listElm = document.querySelectorAll(selector);
    listElm.forEach((elm) => {
      if (elm) {
        // select this node parent
        const adClassname = stringifyClassname(elm.parentElement.className);
        if (adClassname) {
          push('adSelector', adClassname);
        }
      }
    });
  });

  console.log(get('adSelector'));
  console.info('Updated ad selector');
};

const evaluateAdInterval = (time = INTERVAL_TIME_RE_EVALUATE_ADS) => {
  evaluateAdClassname();
  if (get('adSelector') &&
    Array.isArray(get('adSelector')) &&
    get('adSelector').length > 1) {
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
