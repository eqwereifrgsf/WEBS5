const Mongoose = require('../Database/Mongoose');

const { Schema } = Mongoose.Mongoose;

module.exports = class MovieModel {
  static model() {
    return {
      TmdbID: {
        type: Number,
        unique: true,
      },
      Playlists: [{
        type: Schema.ObjectId,
        ref: 'Playlist',
      }],
    };
  }

  static createModel(model) {
    return model;
  }
};
