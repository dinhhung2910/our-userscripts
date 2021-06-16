export const AD_LABELS = [
  'Được tài trợ',
  'Gợi ý cho bạn',
  'Sponsored',
  'Suggested for You',
];

export const RIGHT_PANEL_SELECTOR = '[data-pagelet="RightRail"]';
export const RIGHT_PANEL_ADS_ARIA = [
  '[aria-label="Liên kết của nhà quảng cáo"]',
];

export const FEED_SELECTOR = '[role="feed"]';
export const ARTICLES_SELECTOR = '[data-pagelet]:not(.hided)';

export const INTERVAL_TIME_RE_EVALUATE_ADS = 30000;
export const INTERVAL_TIME_REMOVE_EXISTED_ADS = 2000;

export const STORE_KEY = 'adSelector';
export const DEFAULT_AD_SELECTOR = [
  '[aria-label=Sponsored]',
];
