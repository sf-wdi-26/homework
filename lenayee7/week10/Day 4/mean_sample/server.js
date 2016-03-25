// require express and other modules
var express = require('express'),
   app = express(),
   bodyParser = require('body-parser'),
   mongoose = require('mongoose');
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


app.get('/api/todos', function (req, res) {

    Todo.find(function (err, allTodos) {
   if (err) {
     res.status(500).json({ error: err.message });
   } else {
     res.json(allTodos);
   }
 });
});

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

app.get('/api/todos/:id', function (req, res) {
  var findById = req.params.id;

  Todo.findOne({_id: id}, function(err, foundTodo) {
    if(err) {
      res.status(500).json({error: err.message});
    } else {
      res.json(foundTodo);
    }
  });
});


app.put('/api/todos/:id', function (req, res) {
  // get todo id from url params (`req.params`)
  var todoId = req.params.id;

  // find todo in db by id
  Todo.findOne({ _id: todoId }, function (err, foundTodo) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      // update the todos's attributes
      foundTodo.title = req.body.title;
      foundTodo.description = req.body.description;
      foundTodo.done = req.body.done;

      // save updated todo in db
      foundTodo.save(function (err, savedTodo) {
        if (err) {
          res.status(500).json({ error: err.message });
        } else {
          res.json(savedTodo);
        }
      });
    }
  });
});


app.delete('/api/todos/:id', function (req, res) {
  // get todo id from url params (`req.params`)
  var todoId = req.params.id;

  // find todo in db by id and remove
  Todo.findOneAndRemove({ _id: todoId }, function (err, deletedTodo) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(deletedTodo);
    }
  });
});

app.get('*', function (req, res) {
 res.render('index');
});

// listen on port 3000
app.listen(3000, function() {
 console.log('server started');
});