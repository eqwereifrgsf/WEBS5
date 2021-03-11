module.exports = function guard(allowedRoles) {
  return function cb(req, res, next) {
    if (req.JWTPayload) {
      if (allowedRoles.includes(req.JWTPayload.loggedInAs)) {
        return next();
      }
    }
    return res.status(401).send('Unauthorized.');
  };
};
