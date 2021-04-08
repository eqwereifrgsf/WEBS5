const UserSchema = require('../Schemas/UserSchema');
const PlaylistSchema = require('../Schemas/PlaylistSchema');

UserSchema.SchemaModel();

module.exports = class UserRepository {
  static Create(Model) {
    const user = new UserSchema.SchemaModel(Model);
    return this.Save(user);
  }

  static GetAll() {
    return UserSchema.SchemaModel.find({}).populate('Watching').populate('Dropped').exec()
      .then((v) => v)
      .catch((err) => { throw new Error(err); });
  }

  static GetById(Id) {
    return UserSchema.SchemaModel.findById(Id).populate('Watching').populate('Dropped').exec()
      .then((v) => v)
      .catch((err) => { throw new Error(err); });
  }

  static GetSpecificWatchlist(Id, Filter) {
    console.log(Filter);
    return UserSchema.SchemaModel.findById(Id).populate(Filter).exec()
      .then((v) => v)
      .catch((err) => { throw new Error(err); });
  }

  static FindByModel(Model) {
    return UserSchema.SchemaModel.find(Model).exec()
      .then((v) => v)
      .catch((err) => { throw new Error(err); });
  }

  static async RemoveFromPlaylists(Playlist, UserID) {
    const user = await this.GetById(UserID);
    user.Playlists.pull(Playlist);
    return this.Save(user);
  }

  static async UpdateUsername(UserID, Username) {
    const user = await this.GetById(UserID);
    user.Username = Username;
    return this.Save(user);
  }

  static async UpdatePassword(UserID, Password) {
    const user = await this.GetById(UserID);
    user.Password = Password;
    return this.Save(user);
  }

  static async UpdateRole(UserID, Role) {
    const user = await this.GetById(UserID);
    if (Role === 'Admin' || Role === 'Superadmin' || Role === 'User') {
      if (user.Role === 'Admin' && Role === 'Superadmin') {
        return false;
      }
      user.Role = Role;
      return this.Save(user);
    }
    return false;
  }

  static async AddToWatchlist(UserID, movieId) {
    const user = await this.GetById(UserID);
    user.Watching.push(movieId);
    return this.Save(user);
  }

  static async AddToDroplist(UserID, movieId) {
    const user = await this.GetById(UserID);
    user.Dropped.push(movieId);
    return this.Save(user);
  }

  static async Remove(UserID) {
    const user = await this.GetById(UserID);
    if (user != null) {
      // eslint-disable-next-line
      for (const playlistId of user.Playlists) {
        // eslint-disable-next-line
        await PlaylistSchema.SchemaModel.findById(playlistId).exec()
          .then((v) => PlaylistSchema.SchemaModel.deleteOne(v))
          .catch((err) => { throw new Error(err); });
      }
      await UserSchema.SchemaModel.deleteOne(user);
      return true;
    }
    return false;
  }

  static Save(Model) {
    return Model.save()
      .then((v) => v)
      .catch(() => false);
  }

  //   Update(Model) {}

  //   Delete(Model) {}

  //   DeleteById(Id) {}
};
