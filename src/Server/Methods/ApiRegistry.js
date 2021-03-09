const ApiMethods = require('./ApiMethods');
const Authentication = require('../Middleware/Authentication');
const GetUser = require('../../Apis/GetUser');
const GetMultiSearch = require('../../Apis/GetMultiSearch');
const Login = require('../../Apis/Login');

const apimethods = new ApiMethods();

// get api methods
const user = new GetUser();
const getMultiSearch = new GetMultiSearch();
const login = new Login();
// register and inject methods
module.exports = (serverfacade) => {
  apimethods.setRegister(serverfacade.injectApiMethod.bind(serverfacade));
  apimethods.registerMethod(user.path, user.restfulMethod, user.guard, user.method);
  apimethods.registerMethod(getMultiSearch.path, getMultiSearch.restfulMethod,
    Authentication(getMultiSearch.allowedRoles), getMultiSearch.method);
  apimethods.registerMethod(login.path, login.restfulMethod, login.method);
};
