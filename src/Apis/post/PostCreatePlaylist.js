const PlaylistRepository = require('../../Repositories/PlaylistRepository');

module.exports = class GetMultiSearch {
  constructor() {
    this.version = '/v1';
    this.path = `${this.version}/playlist/:query`;
    this.restfulMethod = 'post';
    this.allowedRoles = ['Superadmin', 'Admin', 'User'];
  }

  async method(req, res) {
    const response = await PlaylistRepository.Create({ Title: req.params.query });
    res.status(200).json(response);
  }
};
