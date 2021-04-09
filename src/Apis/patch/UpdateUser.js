const UserRepository = require('../../Repositories/UserRepository');

const dict = {};
dict.rename = UserRepository.UpdateUsername.bind(UserRepository);
dict.changepassword = UserRepository.UpdatePassword.bind(UserRepository);
dict.changerole = UserRepository.UpdateRole.bind(UserRepository);
dict.addtowatchlist = UserRepository.UpdateWatchlist.bind(UserRepository);
dict.removefromwatchlist = UserRepository.RemoveFromWatchlist.bind(UserRepository);

module.exports = class UpdateUserCredentials {
  constructor() {
    this.version = '/v1';
    this.path = `${this.version}/user/:idUser`;
    this.restfulMethod = 'patch';
    this.allowedRoles = ['Superadmin', 'Admin', 'User'];
  }

  async method(req, res) {
    try {
      console.log(req.body);
      let obj = {};
      try {
        obj = JSON.parse(req.body.toString('utf-8'));
      } catch (e) {
        obj = req.body;
      }
      // eslint-disable-next-line
      for (const entry of obj.array) {
        // eslint-disable-next-line
        await dict[entry.op](req.params.idUser, entry.value, entry.path.substring(1));
      }
      res.sendCustom(200, req.headers.formatting, 'OK');
    } catch (error) {
      console.log(error);
      res.status(500).send('Error');
    }
  }
};
