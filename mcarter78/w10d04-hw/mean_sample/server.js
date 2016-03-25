var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

// CONTROLLERS
var todosController = require('./controllers/todosController');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

mongoose.connect('mongodb://localhost/mean_sample');


// API ROUTES

// app.get('/api/todos', function (req, res) {
//   Todo.find(function (err, allTodos) {
//     if (err) {
//       res.status(500).json({ error: err.message });
//     } else {
//       res.json(allTodos);
//     }
//   });
// });
//
// app.post('/api/todos', function (req, res) {
//   var newTodo = new Todo(req.body);
//   newTodo.save(function (err, savedTodo) {
//     if (err) {
//       res.status(500).json({ error: err.message });
//     } else {
//       res.json(savedTodo);
//     }
//   });
// });

app.get('/api/todos', todosController.index);

app.post('/api/todos', todosController.create);

app.get('/api/todos/:id', todosController.show);

app.put('/api/todos/:id', todosController.update);

app.delete('/api/todos/:id', todosController.delete);

/*
* Load `views/index.hbs` file
* when any route is requested from the server
*/

app.get('*', function(req, res){
  res.render('index');
});

// START SERVER
app.listen(port, function(){
  console.log("listening on port", port);
});
