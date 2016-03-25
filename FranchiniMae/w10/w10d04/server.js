/*
* server.js
*/

// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');
    Todo = require('./models/todo');

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// set view engine to hbs (handlebars)
app.set('view engine', 'hbs');

// connect to mongodb
mongoose.connect('mongodb://localhost/mean_sample');

// parse form data 
app.use(bodyParser.urlencoded({extended: true}));
// parse application/json
app.use(bodyParser.json());

// listen on port 3000
app.listen(3000, function() {
  console.log('server started');
});

/*
* API routes
*/

app.get('/api/todos', function (req, res) {
	Todo.find(function (err, allTodos) {
		if (err) {
			res.status(500).json({error: err.message});
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

// app.get('/api/todos/:id', function (req, res) {

// });

app.put('/api/todos/:id', function (req, res) {
	var id = req.params.id;
	Todo.findById({_id: id}, function (err, foundTodo){
		if (err) console.log(err);
		foundTodo.text = req.body.text;
		foundTodo.save(function (err, saved){
			if (err) { console.log(err);}
			res.json(saved);
		});
	});
});

app.delete('/api/todos/:id', function (req, res) {
	var id = req.params.id;
	Todo.remove({_id: id}, function (err){
		if (err) console.log(err);
	});
});

/*
* Load `views/index.hbs` file
* when any route is requested from the server
*/

app.get('*', function (req, res){
	res.render('index');
});



