var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  title: String,
  description: String,
  completed: { type: Boolean, default: false }
});

var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
