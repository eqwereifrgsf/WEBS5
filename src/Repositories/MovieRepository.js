const MovieSchema = require('../Schemas/MovieSchema');

module.exports = class MovieRepository {
  static Create(Model) {
    const movie = new MovieSchema.SchemaModel(Model);
    return movie.save()
      .then((v) => v)
      .catch(() => false);
  }
};
