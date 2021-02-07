export default class SearchModel {
  constructor(config) {
    this.config = config;
  }
  getResults = async ( query ) => {
    if (!query || !(query = query.trim()).length) return Promise.reject('query must have at least one non-whitespace character');
    query = encodeURIComponent(query);
    return fetch(`${this.config.host}?q=${query}`)
      .then(r => {
        if (!r.ok) {
          throw new Error(`Error getting results: ${r.status} - ${r.statusText}`);
        }
        return r.json();
      });
  }
}