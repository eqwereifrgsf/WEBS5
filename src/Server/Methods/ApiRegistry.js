const ApiMethods = require('./ApiMethods');
const GetUser = require('../../Apis/GetUser');
const Login = require('../../Apis/Login');

const apimethods = new ApiMethods();

// get api methods
const user = new GetUser();
const login = new Login();

// register and inject methods

module.exports = (serverfacade) => {
  apimethods.setRegister(serverfacade.injectApiMethod.bind(serverfacade));
  apimethods.registerMethod(user.path, user.restfulMethod, user.guard, user.method);
  apimethods.registerMethod(login.path, login.restfulMethod, login.method);
};
