/* eslint-disable */
const assert = require('assert');
const dotenv = require('dotenv');
const MultiSearch = require('../src/Apis/get/MultiSearch');

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
});