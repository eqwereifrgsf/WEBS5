const crypto = require('crypto');

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
    const signature = crypto.createHmac('sha256', process.env.SECRET).update(`${Buffer.from(JSON.stringify(header)).toString('base64')}.${Buffer.from(JSON.stringify(payload)).toString('base64')}`).digest('hex');
    const token = `${Buffer.from(JSON.stringify(header)).toString('base64')}.${Buffer.from(JSON.stringify(payload)).toString('base64')}.${Buffer.from(signature).toString('base64')}`;
    return token;
  }

  static verifyToken(token) {
    if (typeof token === 'string') {
      const splitToken = token.split('.');
      if (splitToken.length === 3) {
        const toVerify = Buffer.from(crypto.createHmac('sha256', process.env.SECRET).update(`${splitToken[0]}.${splitToken[1]}`).digest('hex')).toString('base64');
        if (toVerify === splitToken[2]) {
          return JSON.parse(Buffer.from(splitToken[1], 'base64')).loggedInAs;
        }
      }
    }
    return 'guest';
  }
};
