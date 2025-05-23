import {hideDOM, observeDOM} from '../common/util';
import {
  ARTICLES_SELECTOR,
  FEED_HEADING_SELECTOR,
  FEED_HEADING_CONTENT,
  IGNORED_ARTICLE_LABELS,
} from './constants';

const getDataFromDOM = (elm) => {
  const propsKey = Object.keys(elm).find((en) => en.includes('reactProp'));
  if (!propsKey) {
    return null;
  }

  let result = null;
  try {
    result = elm[propsKey].children.props.children.props.children.props.children.props.children.props;
  } catch (e) {
    // ignore e
  }

  return result;
};

const getURITextFromDOM = (elm) => {
  const title = elm.querySelector('h4');
  if (!title) return null;

  // Find the parent element that contains several link elms.
  // The last link element should be the link to the article
  let containerDiv = title.parentElement;
  while (true) {
    if (!containerDiv || containerDiv.querySelectorAll('a').length > 1) {
      break;
    } else {
      containerDiv = containerDiv.parentElement;
    }
  }
  if (!containerDiv) {
    return null;
  }

  const hrefList = containerDiv.querySelectorAll('a');
  const href = hrefList[hrefList.length - 1];

  // Extract reactProps data from elm
  const propsKey = Object.keys(href).find((en) => en.includes('reactProp'));
  if (!propsKey) {
    return null;
  }

  let result = null;
  try {
    result = href[propsKey].children.props.children.props.children.props.props.text.$2;
  } catch (e) {
    // ignore e
  }

  return result;
}

const config = {attributes: false, childList: true, subtree: false};
const callback = function(mutationsList, observer) {
  // Use traditional 'for loops' for IE 11
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      const list = mutation.addedNodes;
      list.forEach((elm) => {
        if (isMainAds(elm)) {
          console.log('removed incoming ad');
          hideDOM(elm);
        }
      });
    }
  }
};

export const isMainAds = (elm, isFinal = false) => {
  if (!elm) return false;
  let isAd = false;

  // Deprecated since 202505
  // const elmProps = getDataFromDOM(elm);
  // if (!elmProps) return false;
  // try {
  //   const label = elmProps.feedEdge.brs_content_label || elmProps.feedEdge.labl_for_coniten_of_brs;
  //   isAd = !label;
  // } catch (e) {
  //   console.log(elmProps);
  //   console.warn(e);
  // }

  if (!isAd) {
    const title = elm.querySelector('h4');
    if (title && title.innerText.includes('Theo dõi')) {
      isAd = true;
    }
  }

  if (!isAd) {
    const text = getURITextFromDOM(elm);
    if (text && text === 'Được tài trợ') {
      isAd = true;
    }
  }

  if (isFinal) {
    // Ignore checking this elm in next times.ß
    elm.classList.add('checked');
  }

  return isAd;
};

export const removeMainAds = (feed) => {
  if (!feed) {
    setTimeout(() => {
      const listHeadings = document.querySelectorAll(FEED_HEADING_SELECTOR);
      let newFeed = null;
      for (let heading of listHeadings) {
        if (heading.innerText == FEED_HEADING_CONTENT) {
          newFeed = newFeed = heading.parentElement.lastElementChild;
        }
      }

      removeMainAds(newFeed);
    });
  } else {
    const articles = feed.querySelectorAll(ARTICLES_SELECTOR);
    articles.forEach((elm) => {
      if (isMainAds(elm, true)) {
        console.log('removed remain ad');
        hideDOM(elm);
      }
    });
  }
};

export const observeFeed = (feed) => {
  if (!feed) {
    setTimeout(() => {
      const listHeadings = document.querySelectorAll(FEED_HEADING_SELECTOR);
      let newFeed = null;
      for (let heading of listHeadings) {
        if (heading.innerText == FEED_HEADING_CONTENT) {
          newFeed = heading.parentElement.lastElementChild;
        }
      }

      observeFeed(newFeed);
    }, 500);
  } else {
    observeDOM(feed, config, callback);
  }
};
