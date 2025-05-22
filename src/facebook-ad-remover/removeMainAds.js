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

export const isMainAds = (elm) => {
  if (!elm) return false;
  let isAd = false;

  const elmProps = getDataFromDOM(elm);
  if (!elmProps) return false;

  elm.classList.add('checked');

  try {
    isAd = !elmProps.feedEdge.labl_for_coniten_of_brs;
  } catch (e) {
    console.log(elmProps);
    console.warn(e);
  }

  if (!isAd) {
    const title = elm.querySelector('h4');
    if (title && title.innerText.includes('Theo dõi')) {
      isAd = true;
    }
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
      if (isMainAds(elm)) {
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
