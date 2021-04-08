/* eslint-disable */
const assert = require('assert');
const dotenv = require('dotenv');
const io = require("socket.io-client");
const SocketFacade = require('../src/Server/SocketFacade');

dotenv.config();
describe('Sockets', () => {
  describe('Connection', () => {
    it(`Can connect to sockets on http://localhost:${process.env.SOCKETPORT}`, (done) => {
      const socketFacade = new SocketFacade(process.env.SOCKETPORT);
      socketFacade.init();
      const socket = io(`ws://localhost:${process.env.SOCKETPORT}`);

      socket.on('connect', () => {
        socket.disconnect();
        socketFacade.stop();
        done();
      });
    });
  });

  describe('Subscribe', () => {
    it('Can subscribe to room', (done) => {
      const socketFacade = new SocketFacade(process.env.SOCKETPORT);
      socketFacade.init();
      const socket = io(`ws://localhost:${process.env.SOCKETPORT}`);

      socket.on('connect', () => {
        socket.emit('subscribe', {room: 'chat'});
      });

      socket.on('chat', () => {
        socket.disconnect();
        socketFacade.stop();
      });
      done();
    });
  });

  describe('Chat', () => {
    it('Can receive a message', (done) => {
      const socketFacade = new SocketFacade(process.env.SOCKETPORT);
      socketFacade.init();
      const socket = io(`ws://localhost:${process.env.SOCKETPORT}`);

      socket.on('connect', () => {
        socket.emit('subscribe', {room: 'chat'});
      });
      let onceSwitch = true;
      socket.on('chat', (message) => {
        if (!onceSwitch) {
          assert.strictEqual(message, 'VERIFICATION');
          socket.disconnect();
          socketFacade.stop();
        }
        if (onceSwitch) {
          onceSwitch = false;
          const m = {};
          m.event = 'chat';
          m.message = 'VERIFICATION';
          socketFacade.messageToRoom('chat', m);
        }
      });
      done();
    });
  });

  describe('Unsubscribe', () => {
    it('Can unsubscribe from room', (done) => {
      const socketFacade = new SocketFacade(process.env.SOCKETPORT);
      socketFacade.init();
      const socket = io(`ws://localhost:${process.env.SOCKETPORT}`);

      socket.on('connect', () => {
        socket.emit('subscribe', {room: 'chat'});
      });
      socket.on('chat', () => {
        socket.emit('unsubscribe', {room: 'chat'});
      });

      socket.on('unsubscribe', (room) => {
        assert.strictEqual(room, 'chat');
        socket.disconnect();
        socketFacade.stop();
      });
      done();
    });
  });
});
