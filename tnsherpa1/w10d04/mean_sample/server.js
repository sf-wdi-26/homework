// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Todo = require('./models/todo');
// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// serve static files from public folder
app.use(express.static(__dirname + '/public'));
// set view engine to hbs (handlebars)
app.set('view engine', 'hbs');
// connect to mongodb
mongoose.connect('mongodb://localhost/mean_sample');

// ALL API ROUTES

// Get ToDos
app.get('/api/todos', function (req, res) {
  //Find all Todos and send Json as response
    Todo.find(function (err, allTodos) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(allTodos);
    }
  });
});

// Create ToDos 
app.post('/api/todos', function (req, res) {
  var newTodo = new Todo(req.body);
  newTodo.save(function (err, savedTodo) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(savedTodo);
    }
  });
});

// SHOW todo
app.get('/api/todos/:id', function (req, res) {
  //grab 'req.params.id'
  var id = req.params.id;
  // Find a todo in db by id
  Todo.findById({_id: id}, function(err, thisTodo){
  if (err){
    res.status(500).json({error: err.message});
  } else {
    res.json(thisTodo);
  } 
  });
});

// UPDATE ToDo
app.put('/api/todos/:id', function (req, res) {
  //Grab the id from params
  var id = req.params.id;
  //Find todo by Id in db
  Todo.findById({_id: id}, function(err, thisTodo){
    if (err) {
      res.status(500).json({error: err.message});
    } else {
      thisTodo.title = req.body.title;
      thisTodo.description = req.body.description;
      thisTodo.done = req.body.done;

      thisTodo.save(function(err, savedTodo){
        if(err) {
          res.status(500).json({error: err.message});
        } else {
          res.json(savedTodo);
        }
      });
    }
  });
});

// DELETE ToDo
app.delete('/api/todos/:id', function (req, res) {
  //grab the id from params
  var id = req.params.id;
  //find the todo by id and remove
  Todo.findOneAndRemove({_id: id}, function(err, thisTodo){
    if (err) {
      res.status(500).json({error: err.message});
    } else {
      res.json(thisTodo);
    }
  });


});


app.get('*', function (req, res) {
  res.render('../views/index.hbs');
});
// listen on port 3000
app.listen(3000, function() {
  console.log('server started');
});