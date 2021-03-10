const MovieRepo = require('../../Repositories/MovieRepository');

module.exports = class GetMultiSearch {
  constructor() {
    this.version = '/v1';
    this.path = `${this.version}/movie/:query`;
    this.restfulMethod = 'post';
    this.allowedRoles = ['Superadmin', 'Admin', 'User'];
  }

  async method(req, res) {
    const response = await MovieRepo.Create({ Title: 'hallo', Description: 'hoi' });
    res.status(200).json(response);
  }
};
