/* eslint-disable */
const assert = require('assert');
const dotenv = require('dotenv');
const Register = require('../src/Apis/post/Register');
const Login = require('../src/Apis/post/Login');
const Playlist = require('../src/Apis/post/CreatePlaylist');
const UserRepo = require('../src/Repositories/UserRepository');
const PlaylistRepo = require('../src/Repositories/PlaylistRepository');
const UserModel = require('../src/Models/UserModel');

dotenv.config();

describe('Posts', () => {
  describe('playlist', () => {
    it(`Can post /playlist/:title`, (done) => {
      playlist = new Playlist();

      const regggg = UserRepo.Create(UserModel.createNewUser('testing123', '321gnitset', 'User'));
      regggg.then(function (result) {
        const req = {};
        req.params = {};
        req.params.title = 'testingplaylist';
        req.query = {};
        req.JWTPayload = {};
        req.JWTPayload.sub = result._id;
        const res = {};
        res.status = function() {
          return this;
        };
        res.json = function(response) {
          assert.notStrictEqual(response, null);
          assert.notStrictEqual(response, undefined);
        };
        playlist.method(req, res);
        const rep = UserRepo.GetById(result._id);
        const pget = PlaylistRepo.GetById(result._id);
        pget.then(function(result2) {
          PlaylistRepo.Remove(result2._id);
        });
        rep.then(function (result2) {
          UserRepo.Remove(result2._id);
          });
        done();
      });
    });
  });
  describe('register', () => {
    it(`Can register.`, (done) => {
      register = new Register();

      const req = {};
      req.params = {};
      req.params.title = 'testingregister';
      req.body = {};
      req.body.Username = 'Testuser';
      req.body.Password = 'Testpassword123';
      req.query = {};
      req.JWTPayload = {};
      req.JWTPayload.sub = '604b72ef369c7e46686a0a4c';
      const res = {};
      res.status = function() {
        return this;
      };
      res.json = function(response) {
        assert.notStrictEqual(response, 'Not registered.');
      };
      register.method(req, res);
      done();
    });
  });
  describe('log in', () => {
    it(`Can log in.`, (done) => {
      login = new Login();

      const req = {};
      req.params = {};
      req.params.title = 'testinglogin';
      req.body = {};
      req.body.Username = 'Testuser';
      req.body.Password = 'Testpassword123';
      req.query = {};
      req.JWTPayload = {};
      req.JWTPayload.sub = '604b72ef369c7e46686a0a4c';
      const res = {};
      res.status = function() {
        return this;
      };
      res.json = function(response) {
        assert.notStrictEqual(response, 'Not registered.');
      };
      login.method(req, res);

      const response = UserRepo.FindByModel(UserModel.findExistingUser(req.body.Username, req.body.Password));
      response.then(function(rep) {
        UserRepo.Remove(rep._id);
      });
      done();
    });
  });
});