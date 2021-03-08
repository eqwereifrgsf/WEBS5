const Axios = require('./Axios');

module.exports = class HttpFacade {
  constructor() {
    this.request = new Axios();
  }

  get(...args) {
    return this.request.get(...args);
  }
};
