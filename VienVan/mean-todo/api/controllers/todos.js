var Todo = require('../models/Todo');

var todosController = {
  getAll: function(req, res) {
    Todo.find(function(err, allTodos) {
      err ? res.status(500).json({error: err.message}) : res.json(allTodos);
    })
    // res.send("successfully hitting get api")
  },
  createTodo: function(req, res) {
    var newTodo = new Todo(req.body);
    newTodo.save(function(err, savedTodo) {
      err ? res.status(500).json({error: err.message}) : res.json(savedTodo);
    })
  },
  removeTodo: function(req, res) {
  var id = req.params.id;
  Todo.remove({_id: id}, function(error) {
    if(error) res.json({message: 'Could not delete todo b/c:' + error});

    res.json({message: 'Todo successfully deleted'});
  }).select('-__v');
  },
  updateTodo: function(req, res) {
    var id = req.params.id;

 Todo.findById({_id: id}, function(error, todo) {
   if(error) res.json({message: 'Could not find todo b/c:' + error});

   if(req.body.name) todo.name = req.body.name;
   if(req.body.location) todo.location = req.body.location;
   if(req.body.status) todo.status = req.body.status;

   todo.save(function(error) {
     if(error) res.json({messsage: 'Could not update todo b/c:' + error});

     res.json({message: 'Todo successfully updated', todo: todo});
   });
 }).select('-__v');
  }
}

module.exports = todosController;
