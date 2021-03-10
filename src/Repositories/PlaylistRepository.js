const PlaylistSchema = require('../Schemas/PlaylistSchema');

module.exports = class PlaylistRepository {
  static Create(Model) {
    const playlist = new PlaylistSchema.SchemaModel(Model);
    return playlist.save()
      .then((v) => v)
      .catch(() => false);
  }
};
