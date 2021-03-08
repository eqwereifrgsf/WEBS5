const UserModel = require('../Models/UserModel');
const UserRepo = require('../Repositories/UserRepository');
const Auth = require('../Authentication/Auth');

module.exports = class GetUser {
  constructor() {
    this.path = '/user';
    this.restfulMethod = 'get';
  }

  guard(req, res, next) {
    if (Auth.existsToken(req.cookies.AuthToken) === true) {
      next();
    } else {
      next('Not logged in!');
    }
  }

  async method(req, res) {
    UserRepo.Create(UserModel.make('Henk', 'xd123'));
    const response = await UserRepo.FindByModel(UserModel.make('Henk', 'xd123'));
    res.send(response);
  }
};
