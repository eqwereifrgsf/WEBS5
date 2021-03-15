const UserModel = require('../Models/UserModel');
const UserRepo = require('../Repositories/UserRepository');

module.exports = class Login {
  constructor() {
    this.version = '/v1';
    this.path = `${this.version}/register`;
    this.restfulMethod = 'post';
  }

  async method(req, res) {
    const response = await UserRepo
      .Create(UserModel.createNewUser(req.body.Username, req.body.Password, 'Admin'));
    if (response) {
      res.send('Registered.');
      return;
    }
    res.send('Not registered.');
  }
};
