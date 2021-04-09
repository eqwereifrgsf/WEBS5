const { toXML } = require('jstoxml');
const express = require('express');

module.exports = class GetUser {
  constructor() {
    this.app = express();
    this.app.response.sendCustom = function (statusCode, type = 'json', message) {
      return this.contentType(type)
        .status(statusCode)
        .send(type === 'text/xml' ? toXML(message) : message);
    };
  }

  getApp() {
    return this.app;
  }

  runServer(port) {
    this.app.listen(port, () => {
      // console.log(`Back-end app listening at http://localhost:${port}`);
    });
  }

  addApiMethod(restfulMethod, ...args) {
    this.app[restfulMethod](...args);
  }

  addMiddleware(func) {
    this.app.use(func);
  }
};
