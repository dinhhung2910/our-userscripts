export const AD_LABELS = [
  'Được tài trợ',
  'Gợi ý cho bạn',
  'Sponsored',
  'Suggested for You',
  'Reels và video ngắn',
];

export const AD_SELECTORS = [
  '[href^="/ads/about"]',
  '[href^="/reel/"]',
];

export const RIGHT_PANEL_SELECTOR = '#ssrb_rhc_start+div';
export const RIGHT_PANEL_ADS_ARIA = [
  '[aria-label="Nhà quảng cáo"]',
];

export const FEED_SELECTOR = '#ssrb_feed_start+div>div';
export const ARTICLES_SELECTOR = `${FEED_SELECTOR}>div:not(.checked)`;
export const INGORED_ARTICLE_CATEGORIES = [
  'SPONSORED', // advertisement
  'ENGAGEMENT', // suggested articles
  'SHOWCASE', // reels
  'FB_SHORTS', // short videos
];

export const INTERVAL_TIME_RE_EVALUATE_ADS = 30000;
export const INTERVAL_TIME_REMOVE_EXISTED_ADS = 2000;

export const STORE_KEY = 'adSelector';
export const DEFAULT_AD_SELECTOR = [
  '[aria-label=Sponsored]',
  'a[role=link][target=_blank]',
];
