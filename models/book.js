/**
 * A simple model for the books endpoint.
 */
export default class BookModel {
  constructor(config) {
    this.config = config;
  }
  getResult = async ( id ) => {
    if (!id || !(id = id.trim()).length) return Promise.reject('id must have at least one non-whitespace character');
    id = encodeURIComponent(id);
    return fetch(`${this.config.host}/${id}?fields=id,authors,desc,large_image,title`)
      .then(r => {
        if (!r.ok) {
          throw new Error(`Error getting result: ${r.status} - ${r.statusText}`);
        }
        return r.json();
      });
  }
}