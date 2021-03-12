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
      Movies: [{
        type: Schema.ObjectId,
        ref: 'Movie',
      },
      ],
      _Creator: { type: Schema.ObjectId, ref: 'User' },
    };
  }

  static createModel(model) {
    return model;
  }
};
