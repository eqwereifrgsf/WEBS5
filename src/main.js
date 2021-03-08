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

  // register method
  apimethods.registerMethod(user.path, user.restfulMethod, user.method, user.guard);
  apimethods.registerMethod(login.path, login.restfulMethod, login.method);

  // inject middleware
  const middle = middlewarecollection.getAllMiddleware();
  serverfacade.injectMiddleware(middle[0]);
  serverfacade.injectMiddleware(middle[1]);

  // inject method
  const dict = apimethods.getAllMethods();
  serverfacade.injectApiMethod('/user', dict['/user'][0], dict['/user'][1], dict['/user'][2]);
  serverfacade.injectApiMethod('/login', dict['/login'][0], dict['/login'][1]);

  serverfacade.startServer(port);
}
init();
