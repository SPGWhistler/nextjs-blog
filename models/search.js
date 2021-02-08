import { cleanPageNumber } from '../lib/utils'

/**
 * A simple model for the search and search-suggest endpoint.
 */
export default class SearchModel {
  constructor(config) {
    this.config = config;
  }
  getResults = async ( query, page ) => {
    if (!query || !(query = query.trim()).length) return Promise.reject('query must have at least one non-whitespace character');
    query = encodeURIComponent(query);
    page = cleanPageNumber(page);
    return fetch(`${this.config.host}?q=${query}&page=${page}`)
      .then(r => {
        if (!r.ok) {
          throw new Error(`Error getting results: ${r.status} - ${r.statusText}`);
        }
        return r.json();
      });
  }
}