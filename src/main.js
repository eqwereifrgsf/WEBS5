const dotenv = require('dotenv');
const ServerFacade = require('./Server/ServerFacade');
const TMDBRepository = require('./Repositories/TMDBRepository');

dotenv.config();
console.log(process.env.API_KEY);
const serverfacade = new ServerFacade();

require('./Server/Middleware/MiddlewareRegistry')(serverfacade);
require('./Server/Methods/ApiRegistry')(serverfacade);

function init() {
  TMDBRepository.MultiSearch();
  serverfacade.startServer(process.env.PORT);
}
init();
