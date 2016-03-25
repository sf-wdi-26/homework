var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


var TodoSchema = new Schema({
  text: String,
  completed: Boolean
});

var Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;
