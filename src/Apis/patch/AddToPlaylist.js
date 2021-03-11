const PlaylistRepository = require('../../Repositories/PlaylistRepository');

module.exports = class GetMultiSearch {
  constructor() {
    this.version = '/v1';
    this.path = `${this.version}/playlist/:idPlaylist/:idMovie`;
    this.restfulMethod = 'patch';
    this.allowedRoles = ['Superadmin', 'Admin', 'User'];
  }

  async method(req, res) {
    try {
      const response = await PlaylistRepository.AddMovieToPlaylist(req.params.idPlaylist,
        req.params.idMovie);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).send('Error');
    }
  }
};
