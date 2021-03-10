const Mongoose = require('../Database/Mongoose');

const { Schema } = Mongoose.Mongoose;

module.exports = class MovieModel {
  static model() {
    return {
      Title: {
        type: String,
        required: true,
      },
      Description: {
        type: String,
      },
      ReleaseDate: {
        type: String,
      },
      MediaType: {
        type: String,
      },
      TmdbID: {
        type: Number,
        unique: true,
      },
      playlists: [{
        type: Schema.ObjectId,
        ref: 'Playlist',
      }],
    };
  }

  static createModel(model) {
    return model;
  }
};
