const PlaylistRepository = require('../../Repositories/PlaylistRepository');
const TMDBRepo = require('../../Repositories/TMDBRepository');

module.exports = class GetMultiSearch {
  constructor() {
    this.version = '/v1';
    this.path = `${this.version}/playlist/:playlistID?`;
    this.restfulMethod = 'get';
    this.allowedRoles = ['Superadmin', 'Admin', 'User'];
  }

  async method(req, res) {
    const { playlistID } = req.params;
    if (req.params.playlistID) {
      const response = await PlaylistRepository.GetById(playlistID);
      res.status(200).json(response);
    } else {
      const response = await PlaylistRepository.GetAllPopulateMovies();
      const newResponse = JSON.parse(JSON.stringify(response));
      // eslint-disable-next-line
      for (const playlist of newResponse) {
        // eslint-disable-next-line
        for (const movie of playlist.Movies) {
          // eslint-disable-next-line
            const externalMovie = await TMDBRepo.GetMovie(movie.TmdbID);
          // eslint-disable-next-line
            movie.externalMovie = externalMovie;
        }
      }
      res.status(200).json(newResponse);
    }
  }
};
