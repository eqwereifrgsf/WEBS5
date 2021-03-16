/* eslint-disable */
const assert = require('assert');
const dotenv = require('dotenv');
const io = require("socket.io-client");
const SocketFacade = require('../src/Server/SocketFacade');

dotenv.config();
describe('Socket can connect', () => {
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
        done();
      });
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
        done();
      });
    });
  });
});
