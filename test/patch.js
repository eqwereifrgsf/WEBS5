/* eslint-disable */
const assert = require('assert');
const dotenv = require('dotenv');
const Playlist = require('../src/Apis/patch/UpdatePlaylist');
const User = require('../src/Apis/patch/UpdateUser');

dotenv.config();

describe('Patches', () => {
    describe('playlist', () => {
        it(`Can patch playlist`, (done) => {
          playlist = new Playlist();
          const req = {};
          req.params = {};
          req.params.title = 'testingplaylistupdate';
          req.query = {};
          req.body = { "array": [ { "op": "rename", "path": "/Title", "value": "xd" }, { "op": "add", "path": "/Movies", "value": "604f3ea58180465f6c82e530" }, { "op": "remove", "path": "/Movies", "value": "604f3ea58180465f6c82e52e" } ] };
          req.body.Username = 'Testuser';
          req.body.Password = 'Testpassword123';
          req.JWTPayload = {};
          req.JWTPayload.sub = '604b72ef369c7e46686a0a4c';
          const res = {};
          res.status = function() {
            return this;
          };
          res.json = function(response) {
            assert.notStrictEqual(response, 'Error');
          };
          playlist.method(req, res);
          done();
        });
      });
    describe('user', () => {
        it(`Can patch user`, (done) => {
          user = new User();
          const req = {};
          req.params = {};
          req.params.title = 'testingplaylistupdate';
          req.params.idUser = "606f6e6d96078b3c507a3e4b";
          req.query = {};
          req.body = { "array": [ { "op": "rename", "path": "/Username", "value": "Henk" }, { "op": "changepassword", "path": "/Password", "value": "based456" }, { "op": "changerole", "path": "/Role", "value": "Administrator" }, { "op": "addtowatchlist", "path": "/Watching", "value": "604f3ea58180465f6c82e531" }, { "op": "addtowatchlist", "path": "/Dropped", "value": "604f3ea58180465f6c82e53a" }, { "op": "removefromwatchlist", "path": "/Dropped", "value": "604f3ea58180465f6c82e531" } ] };
          req.JWTPayload = {};
          req.JWTPayload.sub = '604b72ef369c7e46686a0a4c';
          const res = {};
          res.status = function() {
            return this;
          };
          res.json = function(response) {
            assert.notStrictEqual(response, 'Error');
          };
          user.method(req, res);
          done();
        });
      });
});