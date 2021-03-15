const ApiMethods = require('./ApiMethods');
const HasRole = require('../Middleware/HasRole');
const MultiSearch = require('../../Apis/get/MultiSearch');
const CreatePlaylist = require('../../Apis/post/CreatePlaylist');
const AddToPlaylist = require('../../Apis/patch/AddToPlaylist');
const RemoveFromPlaylist = require('../../Apis/patch/RemoveFromPlaylist');
const RemovePlaylist = require('../../Apis/delete/RemovePlaylist');
const Playlist = require('../../Apis/get/Playlist');
const Login = require('../../Apis/Login');
const Register = require('../../Apis/Register');
const RemoveUser = require('../../Apis/delete/RemoveUser');

const apimethods = new ApiMethods();

// get api methods
const getMultiSearch = new MultiSearch();
const postCreatePlaylist = new CreatePlaylist();
const postAddPlaylist = new AddToPlaylist();
const removeFromPlaylist = new RemoveFromPlaylist();
const removePlaylist = new RemovePlaylist();
const playlist = new Playlist();
const login = new Login();
const register = new Register();
const removeUser = new RemoveUser();
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
  apimethods.registerMethod(removeFromPlaylist.path, removeFromPlaylist.restfulMethod,
    HasRole(removeFromPlaylist.allowedRoles), removeFromPlaylist.method);
  apimethods.registerMethod(playlist.path, playlist.restfulMethod,
    HasRole(playlist.allowedRoles), playlist.method);
  apimethods.registerMethod(removePlaylist.path, removePlaylist.restfulMethod,
    HasRole(removePlaylist.allowedRoles), removePlaylist.method);
  apimethods.registerMethod(removeUser.path, removeUser.restfulMethod,
    HasRole(removeUser.allowedRoles), removeUser.method);
};
