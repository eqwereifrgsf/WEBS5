const SocketIO = require('./Socketio');

module.exports = class SocketFacade {
  constructor() {
    this.socketServer = new SocketIO();
  }

  init() {
    this.socketServer.build();
  }

  messageToRoom(room, args) {
    this.socketServer.messageToRoom(room, args);
  }
};
