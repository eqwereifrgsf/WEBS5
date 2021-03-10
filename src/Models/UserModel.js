module.exports = class UserModel {
  static model() {
    return {
      Username: {
        type: String,
        required: true,
        unique: true,
      },
      Password: String,
      Role: String,
    };
  }

  static createNewUser(Username, Password, Role) {
    return { Username, Password, Role };
  }

  static findExistingUser(Username, Password) {
    return { Username, Password };
  }
};
