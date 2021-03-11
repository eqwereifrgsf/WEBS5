const ApiMethods = require('./ApiMethods');
const HasRole = require('../Middleware/HasRole');
const GetMultiSearch = require('../../Apis/get/GetMultiSearch');
const PostCreateMovie = require('../../Apis/post/PostCreateMovie');
const PostCreatePlaylist = require('../../Apis/post/PostCreatePlaylist');
const Login = require('../../Apis/Login');
const Register = require('../../Apis/Register');

const apimethods = new ApiMethods();

// get api methods
const getMultiSearch = new GetMultiSearch();
const postCreateMovie = new PostCreateMovie();
const postCreatePlaylist = new PostCreatePlaylist();
const login = new Login();
const register = new Register();
// register and inject methods
module.exports = (serverfacade) => {
  apimethods.setRegister(serverfacade.injectApiMethod.bind(serverfacade));
  apimethods.registerMethod(getMultiSearch.path, getMultiSearch.restfulMethod,
    HasRole(getMultiSearch.allowedRoles), getMultiSearch.method);
  apimethods.registerMethod(login.path, login.restfulMethod, login.method);
  apimethods.registerMethod(register.path, register.restfulMethod, register.method);
  apimethods.registerMethod(postCreateMovie.path, postCreateMovie.restfulMethod,
    HasRole(postCreateMovie.allowedRoles), postCreateMovie.method);
  apimethods.registerMethod(postCreatePlaylist.path, postCreatePlaylist.restfulMethod,
    HasRole(postCreatePlaylist.allowedRoles), postCreatePlaylist.method);
};
