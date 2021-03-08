const crypto = require('crypto');

const authtokens = {};

module.exports = class Auth {
  static generateToken(role) {
    const header = {
      alg: 'HS256',
      typ: 'JWT',
    };
    const payload = {
      loggedInAs: role,
      iat: Math.floor(new Date().getTime() / 1000),
    };
    const signature = crypto.createHmac('sha256', process.env.SECRET).update(`${Buffer.from(header).toString('base64')}.${Buffer.from(payload).toString('base64')}`).digest('hex');
    const token = `${Buffer.from(header).toString('base64')}.${Buffer.from(payload).toString('base64')}.${Buffer.from(signature).toString('base64')}`;
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
