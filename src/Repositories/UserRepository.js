const UserSchema = require('../Schemas/UserSchema');

module.exports = class UserRepository {
  static Create(Model) {
    const user = new UserSchema.SchemaModel(Model);
    return user.save()
      .then((v) => v)
      .catch(() => false);
  }

  static GetById(Id) {
    return UserSchema.SchemaModel.findById(Id).exec()
      .then((v) => v)
      .catch((err) => { console.log(err); });
  }

  static FindByModel(Model) {
    return UserSchema.SchemaModel.find(Model).exec()
      .then((v) => v)
      .catch((err) => { console.log(err); });
  }

  //   Update(Model) {}

  //   Delete(Model) {}

  //   DeleteById(Id) {}
};
