const MovieRepository = require('../../Repositories/MovieRepository');

module.exports = class RemoveMovie {
  constructor() {
    this.version = '/v1';
    this.path = `${this.version}/movie/:movieID`;
    this.restfulMethod = 'delete';
    this.allowedRoles = ['Superadmin', 'Admin'];
  }

  async method(req, res) {
    const response = await MovieRepository.Remove(req.params.movieID);
    res.status(200).json(response);
  }
};
