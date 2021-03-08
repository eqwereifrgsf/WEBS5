module.exports = class UserModel {
  static model() {
    return { Username: String, Password: String };
  }

  static make(Username, Password) {
    return { Username, Password };
  }
};
