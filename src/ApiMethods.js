module.exports = class ApiMethods {
  constructor() {
    this.dict = {};
  }

  registerMethod(path, resfulMethod, method, guard) {
    this.dict[path] = [resfulMethod, method, guard];
  }

  getAllMethods() {
    return this.dict;
  }
};
