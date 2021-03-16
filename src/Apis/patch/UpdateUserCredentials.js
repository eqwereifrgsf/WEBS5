const UserRepository = require('../../Repositories/UserRepository');

const dict = {};
dict.rename = UserRepository.UpdateUsername.bind(UserRepository);
dict.changepassword = UserRepository.UpdatePassword.bind(UserRepository);

module.exports = class UpdateUserCredentials {
  constructor() {
    this.version = '/v1';
    this.path = `${this.version}/user/:idUser`;
    this.restfulMethod = 'patch';
    this.allowedRoles = ['Superadmin', 'Admin', 'User'];
  }

  async method(req, res) {
    try {
      const obj = JSON.parse(req.body.toString('utf-8'));
      // eslint-disable-next-line
      for (const entry of obj.array) {
        dict[entry.op](req.params.idUser, entry.value);
      }
      res.status(200).json('OK');
    } catch (error) {
      res.status(500).send('Error');
    }
  }
};
