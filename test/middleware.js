/* eslint-disable */
const assert = require('assert');
const dotenv = require('dotenv');
const Auth = require('../src/Server/Middleware/Authentication');
const HasRole = require('../src/Server/Middleware/HasRole');

dotenv.config();

describe('Middleware', () => {
  describe('Authentication', () => {
    it(`Can verify a token signed with secret TESTLMAO`, (done) => {
      const req = {};
      req.cookies = {};
      req.cookies.AuthToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDUwODU3MTI1Y2EzMDBhMWNhZTFmNjkiLCJsb2dnZWRJbkFzIjoiQWRtaW4iLCJpYXQiOjE2MTU4OTA2MTR9.ZTA4MjA3ZDA2OWYwOTA1MzEzYTJkODAwODVhNDQ3YmNlNzRjMjhkMGEzYjQxYTQyYmVlNzE1ZDdhNGM3M2E5NQ==';
      req.JWTPayload = {};
      Auth(req, null, () => {
        assert.strictEqual(req.JWTPayload.loggedInAs, 'Admin');
        done();
      });
    });
  });

  describe('HasRole', () => {
    it(`Only allows passage when user has a certain role.`, (done) => {
      const req = {};
      req.cookies = {};
      req.cookies.AuthToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDUwODU3MTI1Y2EzMDBhMWNhZTFmNjkiLCJsb2dnZWRJbkFzIjoiQWRtaW4iLCJpYXQiOjE2MTU4OTA2MTR9.ZTA4MjA3ZDA2OWYwOTA1MzEzYTJkODAwODVhNDQ3YmNlNzRjMjhkMGEzYjQxYTQyYmVlNzE1ZDdhNGM3M2E5NQ==';
      req.JWTPayload = {};
      req.JWTPayload.loggedInAs = 'Admin';
      let hasRole = HasRole(['Admin', 'User']);
      
      hasRole(req, null, () => {
        done();
      })
    });
  });

  describe('DoesNotHaveRole', () => {
    it(`Doesn't allow passage when user doesn't have the role.`, (done) => {
      const req = {};
      req.cookies = {};
      req.cookies.AuthToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDUwODU3MTI1Y2EzMDBhMWNhZTFmNjkiLCJsb2dnZWRJbkFzIjoiQWRtaW4iLCJpYXQiOjE2MTU4OTA2MTR9.ZTA4MjA3ZDA2OWYwOTA1MzEzYTJkODAwODVhNDQ3YmNlNzRjMjhkMGEzYjQxYTQyYmVlNzE1ZDdhNGM3M2E5NQ==';
      req.JWTPayload = {};
      req.JWTPayload.loggedInAs = 'Admin';
      const hasRole = HasRole(['User']);
      
      const res = {};
      res.status = function() {
        return this;
      }
      res.send = function(message) {
        assert.strictEqual(message, 'Unauthorized.');
        done();
      }

      hasRole(req, res, () => {
        
      })
    });
  });
});

