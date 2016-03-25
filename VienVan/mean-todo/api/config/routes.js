var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var todosController = require('../controllers/todos');

// http://127.0.0.1:3000/criminals
router.route('/api/todos')
  .get(todosController.getAll)
  .post(todosController.createTodo);
router.route('/api/todos/:id')
  .patch(todosController.updateTodo)
  .delete(todosController.removeTodo);


module.exports = router;
