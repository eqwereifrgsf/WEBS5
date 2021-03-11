const Auth = require('../../Authentication/Auth');

module.exports = function guard(req, res, next) {
  try {
    const payload = Auth.verifyToken(req.cookies.AuthToken);
    req.JWTPayload = payload;
  } catch (error) {
    //
  }
  next();
};
