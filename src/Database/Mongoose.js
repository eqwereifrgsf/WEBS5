const Mongoose = require('mongoose');

Mongoose.connect('mongodb+srv://mongoun:mongopw@cluster0.yxmsq.mongodb.net/webs5?retryWrites=true&w=majority&ssl=true', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
});

module.exports = { Mongoose };
