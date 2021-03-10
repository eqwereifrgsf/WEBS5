const TMDBRepo = require('../Repositories/TMDBRepository');

module.exports = class GetMultiSearch {
  constructor() {
    this.version = '/v1';
    this.path = `${this.version}/multisearch/:query`;
    this.restfulMethod = 'get';
    this.allowedRoles = ['Superadmin', 'Admin', 'User'];
  }

  async method(req, res) {
    const response = await TMDBRepo.MultiSearch(req.params.query, req.query.language,
      req.query.page, req.query.includeAdult);
    res.status(200).json(response);
  }
};
