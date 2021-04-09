const Mongoose = require('mongoose');

Mongoose.connect('mongodb+srv://mongoun:mongopw@cluster0.yxmsq.mongodb.net/webs5?retryWrites=true&w=majority&ssl=true', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
  .then(() => console.log('Database connected!'))
  .catch((err) => console.log(err));

module.exports = { Mongoose };
