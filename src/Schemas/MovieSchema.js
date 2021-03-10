const Mongoose = require('../Database/Mongoose');
const MovieModel = require('../Models/MovieModel');

const { Schema } = Mongoose.Mongoose;
const MovieSchemaModel = new Schema(MovieModel.model());
module.exports = class MovieSchema {
  static get SchemaModel() {
    // eslint-disable-next-line
    return Mongoose.Mongoose.model('Movie', MovieSchemaModel);
  }
};
