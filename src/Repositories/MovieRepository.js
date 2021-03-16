const MovieSchema = require('../Schemas/MovieSchema');

MovieSchema.SchemaModel();

module.exports = class MovieRepository {
  static Create(Model) {
    const movie = new MovieSchema.SchemaModel(Model);
    return this.Save(movie);
  }

  static GetById(Id) {
    return MovieSchema.SchemaModel.findById(Id).exec()
      .then((v) => v)
      .catch((err) => { throw new Error(err); });
  }

  static async RemoveFromPlaylists(Playlist, MovieID) {
    const movie = await this.GetById(MovieID);
    movie.Playlists.pull(Playlist);
    return this.Save(movie);
  }

  static async Remove(MovieID) {
    const movie = await this.GetById(MovieID);
    if (movie != null) {
      // eslint-disable-next-line
      for (const playlistId of movie.Playlists) {
        this.RemoveFromPlaylists(playlistId, movie);
      }
      await MovieSchema.SchemaModel.deleteOne(movie);
      return true;
    }
    return false;
  }

  static Save(Model) {
    return Model.save()
      .then((v) => v)
      .catch(() => false);
  }
};
