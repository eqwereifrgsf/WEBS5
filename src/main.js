const dotenv = require('dotenv');
const ServerFacade = require('./Server/ServerFacade');

dotenv.config();
const serverfacade = new ServerFacade();

require('./Server/Middleware/MiddlewareRegistry')(serverfacade);
require('./Server/Methods/ApiRegistry')(serverfacade);

function init() {
  serverfacade.startServer(process.env.PORT);
}
init();
