const PlaylistRepository = require('../../Repositories/PlaylistRepository');

module.exports = class RemovePlaylist {
  constructor() {
    this.version = '/v1';
    this.path = `${this.version}/playlist/:playlistID`;
    this.restfulMethod = 'delete';
    this.allowedRoles = ['Superadmin', 'Admin', 'User'];
  }

  async method(req, res) {
    const response = await PlaylistRepository.Remove(req.params.playlistID);
    res.status(200).json(response);
  }
};
