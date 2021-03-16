const UserRepository = require('../../Repositories/UserRepository');

module.exports = class RemoveUser {
  constructor() {
    this.version = '/v1';
    this.path = `${this.version}/user/:userID`;
    this.restfulMethod = 'delete';
    this.allowedRoles = ['Superadmin', 'Admin'];
  }

  async method(req, res) {
    const response = await UserRepository.Remove(req.params.userID);
    res.status(200).json(response);
  }
};
