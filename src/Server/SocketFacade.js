const SocketIO = require('./Socketio');

module.exports = class SocketFacade {
  constructor(app) {
    this.socketServer = new SocketIO(app);
  }

  init() {
    this.socketServer.build();
  }

  messageToRoom(room, args) {
    this.socketServer.messageToRoom(room, args);
  }
};
