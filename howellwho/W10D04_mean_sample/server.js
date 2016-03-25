var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
mongoose = require('mongoose');

// parse form data ( application/x-www-form-urlencoded )
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());  // ADD THIS LINE
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
mongoose.connect('mongodb://localhost/mean_todo');
// require Todo model
var Todo = require('./models/todos');
app.listen(3000, function() {
  console.log('server started');
});


// get all todos
app.get('/api/todos', function (req, res) {
 // find all todos in db
 Todo.find(function (err, allTodos) {
   if (err) {
     res.status(500).json({ error: err.message });
   } else {
     res.json(allTodos);
   }
 });
});

// create new todo
app.post('/api/todos', function (req, res) {
 // create new todo with form data (`req.body`)
 var newTodo = new Todo(req.body);

 // save new todo in db
 newTodo.save(function (err, savedTodo) {
   if (err) {
     res.status(500).json({ error: err.message });
   } else {
     res.json(savedTodo);
   }
 });
});

// get one todo
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

// update todo
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

// delete todo
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


// // listen on port 3000
// app.listen(3000, function() {
//  console.log('server started');
// });
