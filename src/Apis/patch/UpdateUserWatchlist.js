const UserRepository = require('../../Repositories/UserRepository');

const dict = {};
dict.watching = UserRepository.AddToWatchlist.bind(UserRepository);
module.exports = class UpdateUserWatchlist {
  constructor() {
    this.version = '/v1';
    this.path = `${this.version}/user/:idUser/watchlist/:filter/:movieId`;
    this.restfulMethod = 'patch';
    this.allowedRoles = ['Superadmin', 'Admin', 'User'];
  }

  async method(req, res) {
    try {
      if (req.JWTPayload.sub === req.params.idUser) {
        if (dict[req.params.filter.toLowerCase()]) {
          const call = req.params.filter.toLowerCase();
          const response = dict[call](req.params.idUser, req.params.movieId);
          res.status(200).json(response);
        } else {
          res.status(404).send('Not found');
        }
        return;
      }
      res.status(403).send('No permission');
    } catch (error) {
      res.status(500).send('Error');
    }
  }
};
