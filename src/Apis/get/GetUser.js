const UserRepository = require('../../Repositories/UserRepository');
const TMDBRepo = require('../../Repositories/TMDBRepository');

const dict = {};
dict.rename = UserRepository.UpdateUsername.bind(UserRepository);
dict.changepassword = UserRepository.UpdatePassword.bind(UserRepository);

module.exports = class GetUser {
  constructor() {
    this.version = '/v1';
    this.path = `${this.version}/user/:idUser`;
    this.restfulMethod = 'get';
    this.allowedRoles = ['Superadmin', 'Admin', 'User'];
  }

  async method(req, res) {
    const addExternalFromWatchlist = async (response) => {
      const newResponse = JSON.parse(JSON.stringify(response));
      if (newResponse.Watching) {
        // eslint-disable-next-line
        for (const movie of newResponse.Watching) {
          // eslint-disable-next-line
          const externalMovie = await TMDBRepo.GetMovie(movie.TmdbID);
          movie.externalMovie = externalMovie;
        }
      }
      if (newResponse.Dropped) {
        // eslint-disable-next-line
        for (const movie of newResponse.Dropped) {
          // eslint-disable-next-line
          const externalMovie = await TMDBRepo.GetMovie(movie.TmdbID);
          movie.externalMovie = externalMovie;
        }
      }
      return newResponse;
    };
    try {
      // eslint-disable-next-line
      if (req.params.idUser === req.JWTPayload.sub || req.JWTPayload.loggedInAs !== 'User') {
        const response = await UserRepository.GetById(req.params.idUser);
        const newResponse = await addExternalFromWatchlist(response);
        res.sendCustom(200, req.headers.formatting, newResponse);
        return;
      }
      res.status(403).send('No permission');
    } catch (error) {
      res.status(500).send('Error');
    }
  }
};
