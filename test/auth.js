/* eslint-disable */
const assert = require('assert');
const dotenv = require('dotenv');
const Auth = require('../src/Authentication/Auth');

dotenv.config();

describe('Authentication', () => {
  describe('Generate token', () => {
    it(`Can generate a token with subject 1 and role Admin`, (done) => {
      const x = Auth.generateToken('1', 'Admin');
      assert.notStrictEqual(x, null);
      assert.notStrictEqual(x, undefined);
      done();
    });
  });

  describe('Verify token', () => {
    it(`Can verify a generated token with subject 1 and role Admin`, (done) => {
      const x = Auth.generateToken('1', 'Admin');
      const y = Auth.verifyToken(x);
      assert.strictEqual(y.loggedInAs, 'Admin');
      done();
    });
  });

  describe('Verify faulty token', () => {
    it(`Cannot verify a faulty token`, (done) => {
      const x = Auth.generateToken('1', 'Admin') + 'weqhweqweqw';
      assert.throws(() => Auth.verifyToken(x), Error);
      done();
    });
  });
});
