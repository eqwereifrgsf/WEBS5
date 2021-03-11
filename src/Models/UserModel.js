const Mongoose = require('../Database/Mongoose');

const { Schema } = Mongoose.Mongoose;

module.exports = class UserModel {
  static model() {
    return {
      Username: {
        type: String,
        required: true,
        unique: true,
      },
      Password: {
        type: String,
        required: true,
      },
      Role: String,
      Playlists: [{
        type: Schema.ObjectId,
        ref: 'Playlist',
      }],
    };
  }

  static createNewUser(Username, Password, Role) {
    return { Username, Password, Role };
  }

  static findExistingUser(Username, Password) {
    return { Username, Password };
  }
};
