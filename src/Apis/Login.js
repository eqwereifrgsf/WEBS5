const UserModel = require('../Models/UserModel');
const UserRepo = require('../Repositories/UserRepository');
const Auth = require('../Authentication/Auth');

module.exports = class Login {
  constructor() {
    this.path = '/login';
    this.restfulMethod = 'post';
  }

  async method(req, res) {
    const response = await UserRepo
      .FindByModel(UserModel.make(req.body.Username, req.body.Password));
    if (response.length > 0) {
      const token = Auth.generateToken(response[0].Role);
      res.cookie('AuthToken', token);
      res.send('Logged in.');
      return;
    }
    res.send('No access.');
  }
};
