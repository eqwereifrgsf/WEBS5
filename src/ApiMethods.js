module.exports = class ApiMethods {
  constructor() {
    this.dict = {};
    this.registerFunc = () => {};
  }

  registerMethod(path, ...args) {
    this.dict[path] = args;
    args.push(path);
    this.getRegister()(...args);
  }

  getAllMethods() {
    return this.dict;
  }

  setRegister(fun) {
    this.registerFunc = fun;
  }

  getRegister() {
    return this.registerFunc;
  }
};
