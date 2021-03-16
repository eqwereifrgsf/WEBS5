const dotenv = require('dotenv');
const ServerFacade = require('./Server/ServerFacade');
const SocketFacade = require('./Server/SocketFacade');

dotenv.config();
const serverfacade = new ServerFacade(process.env.PORT);
const socketFacade = new SocketFacade(process.env.SOCKETPORT);

require('./Server/Middleware/MiddlewareRegistry')(serverfacade);
require('./Server/Methods/ApiRegistry')(serverfacade);

function init() {
  serverfacade.startServer();
  socketFacade.init();
}
init();
