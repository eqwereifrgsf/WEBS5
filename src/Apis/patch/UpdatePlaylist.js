const PlaylistRepository = require('../../Repositories/PlaylistRepository');

const dict = {};
dict.rename = PlaylistRepository.UpdatePlaylistTitle.bind(PlaylistRepository);
dict.add = PlaylistRepository.AddMovieToPlaylist.bind(PlaylistRepository);
dict.remove = PlaylistRepository.RemoveMovieFromPlaylist.bind(PlaylistRepository);

module.exports = class UpdatePlaylist {
  constructor() {
    this.version = '/v1';
    this.path = `${this.version}/playlist/:idPlaylist`;
    this.restfulMethod = 'patch';
    this.allowedRoles = ['Superadmin', 'Admin', 'User'];
  }

  async method(req, res) {
    try {
      // const obj = JSON.parse(req.body);
      let obj = {};
      try {
        obj = JSON.parse(req.body.toString('utf-8'));
      } catch (e) {
        obj = req.body;
      }
      // eslint-disable-next-line
      for (const entry of obj.array) {
        // eslint-disable-next-line
        await dict[entry.op](req.params.idPlaylist, entry.value);
      }
      res.sendCustom(200, req.headers.formatting, 'OK');
    } catch (error) {
      res.status(500).send('Error');
    }
  }
};
