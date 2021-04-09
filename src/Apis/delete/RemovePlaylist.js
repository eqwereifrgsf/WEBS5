const PlaylistRepository = require('../../Repositories/PlaylistRepository');

module.exports = class RemovePlaylist {
  constructor() {
    this.version = '/v1';
    this.path = `${this.version}/playlist/:playlistID`;
    this.restfulMethod = 'delete';
    this.allowedRoles = ['Superadmin', 'Admin'];
  }

  async method(req, res) {
    const response = await PlaylistRepository.Remove(req.params.playlistID);
    res.sendCustom(200, req.headers.formatting, response);
  }
};
