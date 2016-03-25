var mongoose = require('mongoose');

var TodoSchema = mongoose.Schema({
  text: String,
  completed: Boolean
});

var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
