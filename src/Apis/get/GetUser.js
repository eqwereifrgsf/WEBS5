const UserRepository = require('../../Repositories/UserRepository');

const dict = {};
dict.rename = UserRepository.UpdateUsername.bind(UserRepository);
dict.changepassword = UserRepository.UpdatePassword.bind(UserRepository);

module.exports = class GetUser {
  constructor() {
    this.version = '/v1';
    this.path = `${this.version}/user/:idUser/:filter?`;
    this.restfulMethod = 'get';
    this.allowedRoles = ['Superadmin', 'Admin', 'User'];
  }

  async method(req, res) {
    try {
      // eslint-disable-next-line
      if (req.params.idUser === req.JWTPayload.sub) {
        const response = await UserRepository.GetById(req.params.idUser);
        if (req.params.filter) {
          res.status(200).json(response.Watchlist.filter((a) => a.Status === req.params.filter));
        } else {
          res.status(200).json(response);
        }
        return;
      }
      res.status(403).send('No permission');
    } catch (error) {
      res.status(500).send('Error');
    }
  }
};
