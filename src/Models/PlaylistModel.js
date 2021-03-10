const Mongoose = require('../Database/Mongoose');

const { Schema } = Mongoose.Mongoose;

module.exports = class PlaylistModel {
  static model() {
    return {
      Title: {
        type: String,
        required: true,
      },
      Description: {
        type: String,
      },
      movies: [{
        type: Schema.ObjectId,
        ref: 'Movie',
      }],
    };
  }

  static createModel(model) {
    return model;
  }
};
