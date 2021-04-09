const Mongoose = require('mongoose');

Mongoose.connect('mongodb+srv://mongoun:mongopw@cluster0.yxmsq.mongodb.net/webs5?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

module.exports = { Mongoose };
