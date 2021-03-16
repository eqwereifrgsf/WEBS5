const UserModel = require('../Models/UserModel');
const UserRepo = require('../Repositories/UserRepository');

module.exports = class Register {
  constructor() {
    this.version = '/v1';
    this.path = `${this.version}/register`;
    this.restfulMethod = 'post';
  }

  async method(req, res) {
    const response = await UserRepo
      .Create(UserModel.createNewUser(req.body.Username, req.body.Password, 'User'));
    if (response) {
      res.send('Registered.');
      return;
    }
    res.send('Not registered.');
  }
};
