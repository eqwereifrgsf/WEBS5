const express = require('express');

module.exports = class GetUser {
  constructor() {
    this.app = express();
  }

  runServer(port) {
    this.app.listen(port, () => {
      console.log(`Back-end app listening at http://localhost:${port}`);
    });
  }

  addApiMethod(restfulMethod, ...args) {
    this.app[restfulMethod](...args);
  }

  addMiddleware(func) {
    this.app.use(func);
  }
};
