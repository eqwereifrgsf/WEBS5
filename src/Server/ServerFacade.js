const WebServer = require('./Express');

module.exports = class ServerFacade {
  constructor() {
    this.webserver = new WebServer();
  }

  startServer(port) {
    this.port = port;
    this.webserver.runServer(port);
  }

  injectApiMethod(...args) {
    const path = args[args.length - 1];
    args.pop();
    args.splice(1, 0, path);
    const restfulMethod = args[0];
    args.shift();
    this.webserver.addApiMethod(restfulMethod, ...args);
  }

  injectMiddleware(middleware) {
    this.webserver.addMiddleware(middleware);
  }
};
