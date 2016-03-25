var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');
    methodOverride = require('method-override')

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// set view engine to hbs (handlebars)
app.set('view engine', 'hbs');

var Todo = require('./models/todo');

app.get('/api/todos', function(req, res){
  Todo.find(function (err, allTodos) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(allTodos);
    }
  });
});

app.post('/api/todos', function(req, res){
  var newTodo = new Todo(req.body);
 newTodo.save(function (err, savedTodo) {
   if (err) {
     res.status(500).json({ error: err.message });
   } else {
     res.json(savedTodo);
   }
 });
});

app.get('/api/todos/:id', function(req, res){

});

app.put('/api/todos/:id', function(req, res){
  var todoid = req.params.id;
  Todo.save({_id: todoid}, function(err){
    if (err) {
      console.log("err", err)
    }
    res.json({message: 'todo updated'});
  })
});

app.delete('/api/todos/:id', function(req, res){
  var todoid = req.params.id;
  Todo.remove({_id: todoid}, function(err){
      if (err) {
        console.log ("error", err);
      }
  res.json({message: 'todo successfully deleted'});
  }).select('-__v');


});


app.get('*', function(req, res){
  res.render('index');
})





// connect to mongodb
mongoose.connect('mongodb://localhost/mean_sample');




// listen on port 3000
app.listen(3000, function() {
  console.log('server started');
});
