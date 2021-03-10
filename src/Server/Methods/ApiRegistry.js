const ApiMethods = require('./ApiMethods');
const Authentication = require('../Middleware/Authentication');
const GetMultiSearch = require('../../Apis/GetMultiSearch');
const Login = require('../../Apis/Login');
const Register = require('../../Apis/Register');

const apimethods = new ApiMethods();

// get api methods
const getMultiSearch = new GetMultiSearch();
const login = new Login();
const register = new Register();
// register and inject methods
module.exports = (serverfacade) => {
  apimethods.setRegister(serverfacade.injectApiMethod.bind(serverfacade));
  apimethods.registerMethod(getMultiSearch.path, getMultiSearch.restfulMethod,
    Authentication(getMultiSearch.allowedRoles), getMultiSearch.method);
  apimethods.registerMethod(login.path, login.restfulMethod, login.method);
  apimethods.registerMethod(register.path, register.restfulMethod, register.method);
};
