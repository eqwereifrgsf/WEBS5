const MiddlewareCollection = require('./MiddlewareCollection');
const BodyParserRaw = require('./BodyParserRaw');
const BodyParserURL = require('./BodyParserURL');
const CookieParser = require('./CookieParser');
const Authentication = require('./Authentication');

const middlewarecollection = new MiddlewareCollection();

// register middleware
middlewarecollection.registerMiddleware(BodyParserRaw);
middlewarecollection.registerMiddleware(BodyParserURL);
middlewarecollection.registerMiddleware(CookieParser);
middlewarecollection.registerMiddleware(Authentication);

// inject middleware
const middle = middlewarecollection.getAllMiddleware();

module.exports = (serverfacade) => {
  middle.forEach((e) => {
    serverfacade.injectMiddleware(e);
  });
};
