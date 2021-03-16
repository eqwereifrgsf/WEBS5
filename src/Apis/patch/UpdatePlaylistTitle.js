const PlaylistRepository = require('../../Repositories/PlaylistRepository');
// const MovieRepository = require('../../Repositories/MovieRepository');

module.exports = class GetMultiSearch {
  constructor() {
    this.version = '/v1';
    this.path = `${this.version}/playlist/:idPlaylist/:playlistTitle`;
    this.restfulMethod = 'put';
    this.allowedRoles = ['Superadmin', 'Admin', 'User'];
  }

  async method(req, res) {
    try {
      const response = await PlaylistRepository.UpdatePlaylist(req.params.idPlaylist,
        req.params.playlistTitle);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).send('Error');
    }
  }
};
