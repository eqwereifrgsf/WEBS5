const UserRepository = require('../../Repositories/UserRepository');
const TMDBRepo = require('../../Repositories/TMDBRepository');

module.exports = class GetUserWatchlist {
  constructor() {
    this.version = '/v1';
    this.path = `${this.version}/user/:idUser/:filter?`;
    this.restfulMethod = 'get';
    this.allowedRoles = ['Superadmin', 'Admin', 'User'];
  }

  async method(req, res) {
    const cap = req.params.filter.charAt(0).toUpperCase() + req.params.filter.slice(1);
    // const addExternalFromWatchlistArray = async (response) => {
    //   const newResponse = JSON.parse(JSON.stringify(response));
    //   // eslint-disable-next-line
    //     for (const watchlist of newResponse) {
    //     // eslint-disable-next-line
    //       const x = await addExternalFromWatchlist(watchlist);
    //     watchlist[cap] = x.Movies;
    //   }
    //   return newResponse;
    // };
    const addExternalFromWatchlist = async (response) => {
      const newResponse = JSON.parse(JSON.stringify(response));
      if (newResponse[cap]) {
      // eslint-disable-next-line
        for (const movie of newResponse[cap]) {
        // eslint-disable-next-line
            const externalMovie = await TMDBRepo.GetMovie(movie.TmdbID);
          // eslint-disable-next-line
            movie.externalMovie = externalMovie;
        }
      }
      return newResponse;
    };
    if (req.params.filter) {
      const response = await
      UserRepository.GetSpecificWatchlist(req.params.idUser, cap);
      const newResponse = await addExternalFromWatchlist(response);
      res.sendCustom(200, req.headers.formatting, newResponse);
    }
  }
};
