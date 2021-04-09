/* eslint-disable */
const assert = require('assert');
const dotenv = require('dotenv');
const MultiSearch = require('../src/Apis/get/MultiSearch');
const Playlist = require('../src/Apis/get/Playlist');
const Users = require('../src/Apis/get/GetAllUsers');
const User = require('../src/Apis/get/GetUser');

dotenv.config();

describe('Gets', () => {
  describe('MultiSearch', () => {
    it(`Can get /multisearch`, (done) => {
      multiSearch = new MultiSearch();

      const req = {};
      req.params = {};
      req.params.query = 'mission';
      req.query = {};
      const res = {};
      res.status = function() {
        return this;
      };
      res.json = function(response) {
        assert.notStrictEqual(response, null);
        assert.notStrictEqual(response, undefined);
        done();
      };
      multiSearch.method(req, res);
    });
  });
  describe('Playlist', () => {
    it(`Can get /playlist`, (done) => {
      playlist = new Playlist();
      const req = {};
      req.params = {};
      req.query = {};
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
  describe('User', () => {
    it(`Can get /users`, (done) => {
      users = new Users();

      const req = {};
      req.params = {};
      req.query = {};
      const res = {};
      res.status = function() {
        return this;
      };
      res.json = function(response) {
        assert.notStrictEqual(response, null);
        assert.notStrictEqual(response, undefined);
        done();
      };
      users.method(req, res);
    });
  });
});