const UserRepository = require('../../Repositories/UserRepository');

const dict = {};
dict.rename = UserRepository.UpdateUsername.bind(UserRepository);
dict.changepassword = UserRepository.UpdatePassword.bind(UserRepository);

module.exports = class GetAllUsers {
  constructor() {
    this.version = '/v1';
    this.path = `${this.version}/user`;
    this.restfulMethod = 'get';
    this.allowedRoles = ['Superadmin', 'Admin'];
  }

  async method(req, res) {
    try {
      const response = UserRepository.GetAll();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).send('Error');
    }
  }
};
