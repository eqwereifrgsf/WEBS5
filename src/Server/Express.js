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

  addApiMethod(path, resfulMethod, method, guard) {
    if (guard !== undefined) {
      this.app[resfulMethod](path, guard, method);
    } else {
      this.app[resfulMethod](path, method);
    }
  }

  addMiddleware(func) {
    this.app.use(func);
  }
};
