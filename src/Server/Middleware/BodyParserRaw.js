const bodyParser = require('body-parser');

module.exports = bodyParser.raw({ inflate: true, limit: '100kb', type: 'application/json' });
