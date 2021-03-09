const Auth = require('../../Authentication/Auth');

module.exports = function guard(allowedRoles) {
  return function cb(req, res, next) {
    if (allowedRoles.includes(Auth.verifyToken(req.cookies.AuthToken))) {
      next();
      return;
    }
    next('Not logged in!');
  };
};
