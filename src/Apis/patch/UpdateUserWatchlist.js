const UserRepository = require('../../Repositories/UserRepository');

module.exports = class UpdateUserWatchlist {
  constructor() {
    this.version = '/v1';
    this.path = `${this.version}/user/:idUser/watchlist/:idTmdb`;
    this.restfulMethod = 'patch';
    this.allowedRoles = ['Superadmin', 'Admin', 'User'];
  }

  async method(req, res) {
    try {
      if (req.JWTPayload.sub === req.params.idUser) {
        const response = UserRepository.AddToWatchlist(req.params.idUser, req.params.idTmdb);
        res.status(200).json(response);
        return;
      }
      res.status(403).send('No permission');
    } catch (error) {
      res.status(500).send('Error');
    }
  }
};
