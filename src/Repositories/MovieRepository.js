const MovieSchema = require('../Schemas/MovieSchema');

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

  static Save(Model) {
    return Model.save()
      .then((v) => v)
      .catch(() => false);
  }
};
