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
    let page = 0;
    try {
      const pagenumber = parseInt(req.query.page, 10);
      if (pagenumber < Number.MAX_SAFE_INTEGER) {
        page = pagenumber;
      }
    } catch (e) {
      //
    }
    const addExternalFromPlaylistArray = async (response) => {
      const newResponse = JSON.parse(JSON.stringify(response));
      // eslint-disable-next-line
      for (const playlist of newResponse) {
        // eslint-disable-next-line
        const x = await addExternalFromPlaylist(playlist);
        playlist.Movies = x.Movies;
      }
      return newResponse;
    };

    const addExternalFromPlaylist = async (response) => {
      const newResponse = JSON.parse(JSON.stringify(response));
      // eslint-disable-next-line
      for (const movie of newResponse.Movies) {
        // eslint-disable-next-line
          const externalMovie = await TMDBRepo.GetMovie(movie.TmdbID);
        // eslint-disable-next-line
          movie.externalMovie = externalMovie;
      }
      return newResponse;
    };

    if (req.params.playlistID) {
      const response = await PlaylistRepository.GetByIdPopulateMovies(playlistID);
      const newResponse = await addExternalFromPlaylist(response);
      res.sendCustom(200, req.headers.formatting, newResponse);
    } else {
      const response = await PlaylistRepository.GetAllPopulateMovies(page);
      const newResponse = await addExternalFromPlaylistArray(response);
      res.status(200).json(newResponse);
    }
  }
};
