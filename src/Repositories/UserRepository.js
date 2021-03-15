const UserSchema = require('../Schemas/UserSchema');
const PlaylistSchema = require('../Schemas/PlaylistSchema');

UserSchema.SchemaModel();

module.exports = class UserRepository {
  static Create(Model) {
    const user = new UserSchema.SchemaModel(Model);
    return this.Save(user);
  }

  static GetById(Id) {
    return UserSchema.SchemaModel.findById(Id).exec()
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

  static async Remove(UserID) {
    const user = await this.GetById(UserID);
    if (user != null) {
      // eslint-disable-next-line
      for (const playlistId of user.Playlists) {
        // eslint-disable-next-line
        const xd = await PlaylistSchema.SchemaModel.findById(playlistId).exec()
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
