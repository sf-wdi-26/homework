var mongoose = require('mongoose');

var TodoSchema = mongoose.Schema({
	item: String,
	description: String,
  done: Boolean
});

module.exports = mongoose.model('Todo', TodoSchema);
