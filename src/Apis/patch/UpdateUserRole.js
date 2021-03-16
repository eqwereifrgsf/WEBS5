const UserRepository = require('../../Repositories/UserRepository');

module.exports = class UpdateUserRole {
  constructor() {
    this.version = '/v1';
    this.path = `${this.version}/user/:idUser/:role`;
    this.restfulMethod = 'patch';
    this.allowedRoles = ['Superadmin', 'Admin'];
  }

  async method(req, res) {
    try {
      const response = UserRepository.UpdateRole(req.params.idUser, req.params.role);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).send('Error');
    }
  }
};
