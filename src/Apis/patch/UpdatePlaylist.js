// const PlaylistRepository = require('../../Repositories/PlaylistRepository');

module.exports = class GetMultiSearch {
  constructor() {
    this.version = '/v1';
    this.path = `${this.version}/playlist/:idPlaylist`;
    this.restfulMethod = 'patch';
    this.allowedRoles = ['Superadmin', 'Admin', 'User'];
  }

  async method(req, res) {
    try {
      // const obj = JSON.parse(req.body);
      // const obj = req.body.toString();
      console.log(JSON.parse(req.body.toString('utf-8')));
      // const json = JSON.parse(req.body);
      // console.log(JSON.stringify(json));
    //   const playlistobj = await PlaylistRepository.GetById(req.params.idPlaylist);
    //   console.log(playlistobj);
    //   const response = await PlaylistRepository.UpdatePlaylist(req.params.idPlaylist,
    //     req.params.playlistTitle);
    //   res.status(200).json(response);
    } catch (error) {
      res.status(500).send('Error');
    }
  }
};
