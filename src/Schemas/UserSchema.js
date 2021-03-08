const Mongoose = require('../Database/Mongoose');
const UserModel = require('../Models/UserModel');

const { Schema } = Mongoose.Mongoose;
const UserSchemaModel = new Schema(UserModel.model());
module.exports = class UserSchema {
  static get SchemaModel() {
    // eslint-disable-next-line
    return Mongoose.Mongoose.model('User', UserSchemaModel);
  }
};
