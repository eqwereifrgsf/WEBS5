const UserModel = require('../Models/UserModel');
const UserRepo = require('../Repositories/UserRepository');
const Auth = require('../Authentication/Auth');

module.exports = class Login {
  constructor() {
    this.version = '/v1';
    this.path = `${this.version}/login`;
    this.restfulMethod = 'post';
  }

  async method(req, res) {
    const response = await UserRepo
      .FindByModel(UserModel.findExistingUser(req.body.Username, req.body.Password));
    if (response.length > 0) {
      // eslint-disable-next-line
      const token = Auth.generateToken(response[0]._id, response[0].Role);
      res.cookie('AuthToken', token);
      res.send('Logged in.');
      return;
    }
    res.send('No access.');
  }
};
