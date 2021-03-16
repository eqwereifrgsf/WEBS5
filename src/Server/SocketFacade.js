const SocketIO = require('./Socketio');

module.exports = class SocketFacade {
  constructor(port) {
    this.socketServer = new SocketIO(port);
  }

  init() {
    this.socketServer.build();
  }

  stop() {
    this.socketServer.closeServer();
  }

  messageToRoom(room, args) {
    this.socketServer.messageToRoom(room, args);
  }
};
