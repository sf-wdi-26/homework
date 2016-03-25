var Todo = require('../models/todo');

var todosController = {
  index: function(req, res) {
    Todo.find({}, function(err, todos) {
      res.json(todos);
    });
  },
  show: function(req, res) {
    var id = req.params.id;
    Todo.findById(id, function(err, todo) {
      res.json(todo);
    });
  },
  create: function(req, res) {
    var newTodo = new Todo(req.body);
    newTodo.save(function(err, todo){
      res.json(todo);
    });
  },
  update: function(req, res) {
    var id = req.params.id;
    Todo.findById(id, function(err, todo) {
      if(req.body.title) todo.title = req.body.title;
      if(req.body.description) todo.description = req.body.description;
      if(req.body.completed) todo.completed = req.body.completed;
      todo.save(function(err, updatedTodo) {
        console.log('updated', updatedTodo);
      });
    });
  },
  delete: function() {
    var id = req.params.id;
    Todo.findByIdAndRemove(id, function(err, todo) {
      console.log('removed', todo);
    });
  }
};

module.exports = todosController;
