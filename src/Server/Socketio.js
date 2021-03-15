const io = require('socket.io')(80);

module.exports = class SocketIO {
  constructor() {
    this.rooms = [];
    this.addRoom('chat');
  }

  addRoom(room) {
    this.rooms.push(room);
  }

  messageToRoom(room, args) {
    try {
      io.to(room).emit(args.event, args.message);
    } catch (error) {
      //
    }
  }

  build() {
    io.once('connection', (socket) => {
      socket.once('subscribe', (arg = {}) => {
        try {
          if (this.rooms.includes(arg.room)) {
            socket.join(arg.room);
            io.to('chat').emit('chat', 'someone joined chat');
          }
        } catch (error) {
          //
        }
      });

      socket.once('unsubscribe', (arg = {}) => {
        try {
          if (socket.rooms.includes(arg.room)) {
            socket.leave(arg.room);
            socket.emit('unsubscribe', arg.room);
          }
        } catch (error) {
          //
        }
      });

      socket.once('chat', (arg = {}) => {
        try {
          if (arg.message && arg.event) {
            io.to('chat').emit(arg.event, arg.message);
          }
        } catch (error) {
          //
        }
      });
    });
  }
};
