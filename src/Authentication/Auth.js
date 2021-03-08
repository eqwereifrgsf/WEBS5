const crypto = require('crypto');

const authtokens = {};

module.exports = class Auth {
  static generateToken() {
    const token = crypto.randomBytes(64).toString('hex');
    return token;
  }

  static addToken(key, value) {
    authtokens[key] = value;
  }

  static existsToken(key) {
    if (authtokens[key] !== undefined) {
      return true;
    }

    return false;
  }

  //   removeToken() {

//   }
};
