const ServerFacade = require('./Server/ServerFacade');

const serverfacade = new ServerFacade();

require('./Server/Middleware/MiddlewareRegistry')(serverfacade);
require('./Server/Methods/ApiRegistry')(serverfacade);

const port = 3000;

function init() {
  serverfacade.startServer(port);
}
init();
