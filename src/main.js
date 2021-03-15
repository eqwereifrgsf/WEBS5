const dotenv = require('dotenv');
const ServerFacade = require('./Server/ServerFacade');
const SocketFacade = require('./Server/SocketFacade');

dotenv.config();
const serverfacade = new ServerFacade();
const socketFacade = new SocketFacade(serverfacade.getServer());

require('./Server/Middleware/MiddlewareRegistry')(serverfacade);
require('./Server/Methods/ApiRegistry')(serverfacade);

function init() {
  serverfacade.startServer(process.env.PORT);
  socketFacade.init();
}
init();
