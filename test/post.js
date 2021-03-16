/* eslint-disable */
const assert = require('assert');
const dotenv = require('dotenv');
const Playlist = require('../src/Apis/get/Playlist');

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
      req.JWTPayload.sub = '1';
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
});