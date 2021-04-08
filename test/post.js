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
        done();
      };
      playlist.method(req, res);
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
        done();
      };
      register.method(req, res);
    });
  });
});