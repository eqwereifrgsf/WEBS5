const MiddlewareCollection = require('./MiddlewareCollection');
const BodyParser = require('./BodyParser');
const CookieParser = require('./CookieParser');

const middlewarecollection = new MiddlewareCollection();

// register middleware
middlewarecollection.registerMiddleware(BodyParser);
middlewarecollection.registerMiddleware(CookieParser);

// inject middleware
const middle = middlewarecollection.getAllMiddleware();

module.exports = (serverfacade) => {
  middle.forEach((e) => {
    serverfacade.injectMiddleware(e);
  });
};
