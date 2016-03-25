/*
* server.js
*/

//require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');
    // methodOverride = require('method-override');

var Todo = require('./models/Todo')

//configure body parser (for receiving form data)
app.use(express.static(__dirname + '/public'));

// serve static files from public folder
app.use(bodyParser.urlencoded({extended: true}));
//parse application/json
app.use(bodyParser.json());


//set view engine to hbs (handlebars)
app.set('view engine', 'hbs');

//connect to mongodb
mongoose.connect('mongodb://localhost/mean_todo_list_lab');


//ROUTES

//GET
app.get('/api/todos', function(req, res){
  Todo.find(function(err, allTodos){
    if(err){
      res.status(500).json({error: err.message});
    } else {
      res.json(allTodos);
    }
  });
});

//POST
app.post('/api/todos', function(req, res){
  var todo = new Todo(req.body);
  todo.completed = false;

  todo.save(function(error){
    if(error) res.json({message: 'Could not create todo ', error});

    res.json({todo: todo});
  })
});

//show individual ; get one todo
app.get('/api/todos/:id', function (req, res) {
  // get todo id from url params (`req.params`)
  var todoId = req.params.id;

  // find todo in db by id
  Todo.findOne({ _id: todoId }, function (err, foundTodo) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(foundTodo);
    }
  });
});

//update
app.put('/api/todos/:id', function(req, res){
  console.log('anything');
  Todo.findById({_id: req.params.id}, function(err, todo){
    if(err){
      console.log("err ", err);
    } else {
      console.log('anything? in put update');
      todo.text = req.body.text;
      todo.completed = req.body.completed;
      todo.save(function(error, savedTodo){
        if(error){
          console.log(error);
        } else {
          res.json(savedTodo);
        }
      });
    }
  });
});

app.delete('/api/todos/:id', function(req, res){
  Todo.remove({_id: req.params.id}, function(err, deletedTodo){
    if(err){
      console.log("err, ", err);
    } else {
      res.json(deletedTodo);
    }
  });
});

//load views/index.hbs file with any route

app.get('*', function(req, res){
  res.render('index');
});


//listen on port 3000
app.listen(3000, function(){
  console.log('server started');
});
