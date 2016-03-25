var mongoose = require('mongoose');
var Todo = require('./todo');

var ListSchema = new mongoose.Schema({
	name: String,
	todos: [Todo.schema]
});

var List = mongoose.model('List', ListSchema);
module.exports = List;