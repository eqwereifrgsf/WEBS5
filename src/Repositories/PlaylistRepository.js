const PlaylistSchema = require('../Schemas/PlaylistSchema');
const UserRepo = require('./UserRepository');
const MovieRepo = require('./MovieRepository');

PlaylistSchema.SchemaModel();

module.exports = class PlaylistRepository {
  static async Create(Model) {
    const playlist = new PlaylistSchema.SchemaModel(Model);
    // eslint-disable-next-line
    const user = await UserRepo.GetById(Model._Creator);
    user.Playlists.push(playlist);
    UserRepo.Save(user);
    return this.Save(playlist);
  }

  static FindByModel(Model) {
    return PlaylistSchema.SchemaModel.find(Model).exec()
      .then((v) => v)
      .catch((err) => { throw new Error(err); });
  }

  static GetById(Id) {
    return PlaylistSchema.SchemaModel.findById(Id).exec()
      .then((v) => v)
      .catch((err) => { throw new Error(err); });
  }

  static GetAllPopulateMovies() {
    return PlaylistSchema.SchemaModel.find({}).populate('Movies').exec()
      .then((v) => v)
      .catch((err) => { throw new Error(err); });
  }

  static async AddMovieToPlaylist(PlaylistID, MovieID) {
    const playlist = await this.GetById(PlaylistID);
    const movie = await MovieRepo.GetById(MovieID);

    playlist.Movies.push(movie);
    movie.Playlists.push(playlist);
    MovieRepo.Save(movie);

    return this.Save(playlist);
  }

  static async RemoveMovieFromPlaylist(PlaylistID, MovieID) {
    const playlist = await this.GetById(PlaylistID);
    const movie = await MovieRepo.GetById(MovieID);

    playlist.Movies.pull(movie);
    movie.Playlists.pull(playlist);
    MovieRepo.Save(movie);

    return this.Save(playlist);
  }

  static Save(Model) {
    return Model.save()
      .then((v) => v)
      .catch(() => false);
  }
};
