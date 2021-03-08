const Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost:27017/PoC-Mongoose', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

module.exports = { Mongoose };
