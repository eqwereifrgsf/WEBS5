/* eslint-disable */
const assert = require('assert');
const dotenv = require('dotenv');
const io = require("socket.io-client");
const SocketFacade = require('../src/Server/SocketFacade');

dotenv.config();
describe('Socket can connect', () => {
  describe('Connection', () => {
    it(`Can connect to sockets on http://localhost:${process.env.SOCKETPORT}`, (done) => {
      const socketFacade = new SocketFacade();
      socketFacade.init();
      const socket = io(`ws://localhost:${process.env.SOCKETPORT}`);

      socket.on('connect', () => {
        socket.disconnect();
        done();
      });
    });
  });

  describe('Subscribe', () => {
    it('Can subscribe to room', (done) => {
      const socketFacade = new SocketFacade();
      socketFacade.init();
      const socket = io(`ws://localhost:${process.env.SOCKETPORT}`);

      socket.on('connect', () => {
        socket.emit('subscribe', {room: 'chat'});
      });

      socket.on('chat', () => {
        socket.disconnect();
        done();
      });
    });
  });

  describe('Unsubscribe', () => {
    it('Can unsubscribe from room', (done) => {
      const socketFacade = new SocketFacade();
      socketFacade.init();
      const socket = io(`ws://localhost:${process.env.SOCKETPORT}`);

      socket.on('connect', () => {
        socket.emit('subscribe', {room: 'chat'});
      });
      socket.on('chat', () => {
        done();
      });

      socket.on('unsubscribe', (room) => {
        if (assert.strictEqual(room, 'chat')) {
          socket.disconnect();
          done();
        }
      });
    });
  });
});
