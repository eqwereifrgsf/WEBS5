/* eslint-disable */
const assert = require('assert');
const dotenv = require('dotenv');
const Register = require('../src/Apis/post/Register');
const Login = require('../src/Apis/post/Login');
const Playlist = require('../src/Apis/post/CreatePlaylist');

dotenv.config();

describe('Posts', () => {
  describe('playlist', () => {
    it(`Can post /playlist/:title`, (done) => {
      playlist = new Playlist();

      const req = {};
      req.params = {};
      req.params.title = 'testingplaylist';
      req.query = {};
      req.JWTPayload = {};
      req.JWTPayload.sub = '604b72ef369c7e46686a0a4c';
      const res = {};
      res.status = function() {
        return this;
      };
      res.json = function(response) {
        assert.notStrictEqual(response, null);
        assert.notStrictEqual(response, undefined);
      };
      playlist.method(req, res);
      done();
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
      done();
    });
  });
});