const ServerFacade = require('./Server/ServerFacade');
const ApiMethods = require('./ApiMethods');
const MiddlewareCollection = require('./Server/Middleware/MiddlewareCollection');
const BodyParser = require('./Server/Middleware/BodyParser');
const CookieParser = require('./Server/Middleware/CookieParser');

const GetUser = require('./Apis/GetUser');
const Login = require('./Apis/Login');

const port = 3000;

function init() {
  const serverfacade = new ServerFacade();
  const middlewarecollection = new MiddlewareCollection();
  middlewarecollection.registerMiddleware(BodyParser);
  middlewarecollection.registerMiddleware(CookieParser);
  const apimethods = new ApiMethods();
  const user = new GetUser();
  const login = new Login();

  // inject middleware
  const middle = middlewarecollection.getAllMiddleware();
  serverfacade.injectMiddleware(middle[0]);
  serverfacade.injectMiddleware(middle[1]);

  // register method
  apimethods.setRegister(serverfacade.injectApiMethod.bind(serverfacade));
  apimethods.registerMethod(user.path, user.restfulMethod, user.guard, user.method);
  apimethods.registerMethod(login.path, login.restfulMethod, login.method);

  serverfacade.startServer(port);
}
init();
