const PlaylistRepository = require('../../Repositories/PlaylistRepository');

module.exports = class GetMultiSearch {
  constructor() {
    this.version = '/v1';
    this.path = `${this.version}/playlist/:title`;
    this.restfulMethod = 'post';
    this.allowedRoles = ['Superadmin', 'Admin', 'User'];
  }

  async method(req, res) {
    const response = await PlaylistRepository.Create(
      {
        Title: req.params.title,
        _Creator: req.JWTPayload.sub,
      },
    );
    res.status(200).json(response);
  }
};
