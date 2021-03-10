const Mongoose = require('../Database/Mongoose');
const PlaylistModel = require('../Models/PlaylistModel');

const { Schema } = Mongoose.Mongoose;
const PlaylistSchemaModel = new Schema(PlaylistModel.model());
module.exports = class PlaylistSchema {
  static get SchemaModel() {
    // eslint-disable-next-line
    return Mongoose.Mongoose.model('Playlist', PlaylistSchemaModel);
  }
};
