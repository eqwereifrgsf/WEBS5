const ApiMethods = require('./ApiMethods');
const HasRole = require('../Middleware/HasRole');
const GetMultiSearch = require('../../Apis/get/GetMultiSearch');
const PostCreatePlaylist = require('../../Apis/post/PostCreatePlaylist');
const PostAddPlaylist = require('../../Apis/post/PostAddPlaylist');
const Login = require('../../Apis/Login');
const Register = require('../../Apis/Register');

const apimethods = new ApiMethods();

// get api methods
const getMultiSearch = new GetMultiSearch();
const postCreatePlaylist = new PostCreatePlaylist();
const postAddPlaylist = new PostAddPlaylist();
const login = new Login();
const register = new Register();
// register and inject methods
module.exports = (serverfacade) => {
  apimethods.setRegister(serverfacade.injectApiMethod.bind(serverfacade));
  apimethods.registerMethod(getMultiSearch.path, getMultiSearch.restfulMethod,
    HasRole(getMultiSearch.allowedRoles), getMultiSearch.method);
  apimethods.registerMethod(login.path, login.restfulMethod, login.method);
  apimethods.registerMethod(register.path, register.restfulMethod, register.method);
  apimethods.registerMethod(postCreatePlaylist.path, postCreatePlaylist.restfulMethod,
    HasRole(postCreatePlaylist.allowedRoles), postCreatePlaylist.method);
  apimethods.registerMethod(postAddPlaylist.path, postAddPlaylist.restfulMethod,
    HasRole(postAddPlaylist.allowedRoles), postAddPlaylist.method);
};
