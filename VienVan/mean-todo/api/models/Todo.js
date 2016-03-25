var mongoose = require('mongoose');

var TodoSchema = mongoose.Schema({
	task: String,
  complete: Boolean
});

module.exports = mongoose.model('Todo', TodoSchema);
