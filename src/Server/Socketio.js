const http = require('http');
const io = require('socket.io')(http);

module.exports = class SocketIO {
  constructor(app) {
    http.Server(app);
    this.rooms = [];
    this.addRoom('chat');
    console.log(`Socket server listening at http://localhost:${process.env.PORT}`);
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
    io.on('connection', (socket) => {
      socket.on('subscribe', (arg = {}) => {
        try {
          if (this.rooms.includes(arg.room)) {
            socket.join(arg.room);
          }
        } catch (error) {
          //
        }
      });

      socket.on('unsubscribe', (arg = {}) => {
        try {
          if (socket.rooms.includes(arg.room)) {
            socket.leave(arg.room);
          }
        } catch (error) {
          //
        }
      });

      socket.on('chat', (arg = {}) => {
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
