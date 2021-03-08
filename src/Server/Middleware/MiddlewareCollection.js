module.exports = class MiddlewareCollection {
  constructor() {
    this.middleware = [];
  }

  registerMiddleware(middleware) {
    this.middleware.push(middleware);
  }

  getAllMiddleware() {
    return this.middleware;
  }
};
