export const FETCH_REPORTS_SUCCESS = 'FETCH_REPORTS_SUCCESS'
export const FETCH_REPORTS = 'FETCH_REPORTS'
export const FETCH_REPORTS_FAILURE = 'FETCH_REPORTS_FAILURE'
export const FETCH_INFO_SUCCESS = 'FETCH_INFO_SUCCESS'
export const FETCH_INFO = 'FETCH_INFO'
export const FETCH_INFO_FAILURE = 'FETCH_INFO_FAILURE'
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS'
export const FETCH_ARTICLES = 'FETCH_ARTICLES'
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE'
export const FETCH_BLOG_SUCCESS = 'FETCH_BLOG_SUCCESS'
export const FETCH_BLOG = 'FETCH_BLOG'
export const FETCH_BLOG_FAILURE = 'FETCH_BLOG_FAILURE'

export interface reportWelcome {
    count:    number;
    next:     string;
    previous: string;
    results:  reportResult[];
}

export interface reportResult {
    id:           number;
    title:        string;
    url:          string;
    image_url:    string;
    news_site:    string;
    summary:      string;
    published_at: string;
    updated_at:   string;
}