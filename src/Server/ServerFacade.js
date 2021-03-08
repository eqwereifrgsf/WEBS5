const WebServer = require('./Express');

module.exports = class ServerFacade {
  constructor() {
    this.webserver = new WebServer();
  }

  startServer(port) {
    this.port = port;
    this.webserver.runServer(port);
  }

  injectApiMethod(path, resfulMethod, method, guard) {
    this.webserver.addApiMethod(path, resfulMethod, method, guard);
  }

  injectMiddleware(middleware) {
    this.webserver.addMiddleware(middleware);
  }
};
