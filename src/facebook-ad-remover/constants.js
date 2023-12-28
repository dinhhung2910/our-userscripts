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

export const RIGHT_PANEL_SELECTOR = 'div[role=complementary]';
export const RIGHT_PANEL_ADS_HEADING_CONTENT = 'Được tài trợ';

export const FEED_HEADING_SELECTOR = 'h3';
export const FEED_HEADING_CONTENT = 'Bài viết trên Bảng tin';

export const ARTICLES_SELECTOR = `:scope>div:not(.checked)`;
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
