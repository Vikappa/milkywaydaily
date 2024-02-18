/* eslint-disable @typescript-eslint/no-explicit-any */
export const FETCH_REPORTS_SUCCESS = 'FETCH_REPORTS_SUCCESS'
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS'
export const FETCH_INFO_SUCCESS = 'FETCH_INFO_SUCCESS'
export const FETCH_BLOG_SUCCESS = 'FETCH_BLOG_SUCCESS'

export interface infoWelCome {
    version:    string;
    news_sites: string[];
}

export interface blogWelcome {
    count:    number;
    next:     string;
    previous: null;
    results:  blogResult[];
}

export interface blogResult {
    id:           number;
    title:        string;
    url:          string;
    image_url:    string;
    news_site:    string;
    summary:      string;
    published_at: Date;
    updated_at:   Date;
    featured:     boolean;
    launches:     any[];
    events:       any[];
}

export interface articleWelcome {
    count:    number;
    next:     string;
    previous: null;
    results:  articleResult[];
}

export interface articleResult {
    id:           number;
    title:        string;
    url:          string;
    image_url:    string;
    news_site:    string;
    summary:      string;
    published_at: Date;
    updated_at:   Date;
    featured:     boolean;
    launches:     Launch[];
    events:       any[];
}

export interface Launch {
    launch_id: string;
    provider:  string;
}

export interface reportWelcome {
    count:    number;
    next:     string;
    previous: null;
    results:  reportResult[];
}

export interface reportResult {
    id:           number;
    title:        string;
    url:          string;
    image_url:    string;
    news_site:    string;
    summary:      string;
    published_at: Date;
    updated_at:   Date;
}
