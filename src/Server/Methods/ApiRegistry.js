const ApiMethods = require('./ApiMethods');
const HasRole = require('../Middleware/HasRole');
const MultiSearch = require('../../Apis/get/MultiSearch');
const CreatePlaylist = require('../../Apis/post/CreatePlaylist');
const RemovePlaylist = require('../../Apis/delete/RemovePlaylist');
const Playlist = require('../../Apis/get/Playlist');
const Login = require('../../Apis/Login');
const Register = require('../../Apis/Register');
const RemoveUser = require('../../Apis/delete/RemoveUser');
const RemoveMovie = require('../../Apis/delete/RemoveMovie');
const UpdatePlaylist = require('../../Apis/patch/UpdatePlaylist');
const UpdateUser = require('../../Apis/patch/UpdateUser');
const GetUser = require('../../Apis/get/GetUser');
const GetAllUsers = require('../../Apis/get/GetAllUsers');
const GetUserWatchlist = require('../../Apis/get/GetUserWatchlist');

const apimethods = new ApiMethods();

// get api methods
const getMultiSearch = new MultiSearch();
const postCreatePlaylist = new CreatePlaylist();
const removePlaylist = new RemovePlaylist();
const playlist = new Playlist();
const login = new Login();
const register = new Register();
const removeUser = new RemoveUser();
const removeMovie = new RemoveMovie();
const updatePlaylist = new UpdatePlaylist();
const updateUser = new UpdateUser();
const getUser = new GetUser();
const getAllUsers = new GetAllUsers();
const getUserWatchlist = new GetUserWatchlist();

// register and inject methods
module.exports = (serverfacade) => {
  apimethods.setRegister(serverfacade.injectApiMethod.bind(serverfacade));
  apimethods.registerMethod(getMultiSearch.path, getMultiSearch.restfulMethod,
    HasRole(getMultiSearch.allowedRoles), getMultiSearch.method);
  apimethods.registerMethod(login.path, login.restfulMethod, login.method);
  apimethods.registerMethod(register.path, register.restfulMethod, register.method);
  apimethods.registerMethod(postCreatePlaylist.path, postCreatePlaylist.restfulMethod,
    HasRole(postCreatePlaylist.allowedRoles), postCreatePlaylist.method);
  apimethods.registerMethod(updatePlaylist.path, updatePlaylist.restfulMethod,
    HasRole(updatePlaylist.allowedRoles), updatePlaylist.method);
  apimethods.registerMethod(updateUser.path, updateUser.restfulMethod,
    HasRole(updateUser.allowedRoles), updateUser.method);
  apimethods.registerMethod(playlist.path, playlist.restfulMethod,
    HasRole(playlist.allowedRoles), playlist.method);
  apimethods.registerMethod(removePlaylist.path, removePlaylist.restfulMethod,
    HasRole(removePlaylist.allowedRoles), removePlaylist.method);
  apimethods.registerMethod(removeUser.path, removeUser.restfulMethod,
    HasRole(removeUser.allowedRoles), removeUser.method);
  apimethods.registerMethod(removeMovie.path, removeMovie.restfulMethod,
    HasRole(removeMovie.allowedRoles), removeMovie.method);
  apimethods.registerMethod(getUser.path, getUser.restfulMethod,
    HasRole(getUser.allowedRoles), getUser.method);
  apimethods.registerMethod(getAllUsers.path, getAllUsers.restfulMethod,
    HasRole(getAllUsers.allowedRoles), getAllUsers.method);
  apimethods.registerMethod(getUserWatchlist.path, getUserWatchlist.restfulMethod,
    HasRole(getUserWatchlist.allowedRoles), getUserWatchlist.method);
};
