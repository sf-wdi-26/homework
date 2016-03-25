var express = require('express'),
		app = express(),
		bodyParser = require('body-parser'),
		mongoose = require('mongoose');
var Todo = require('./model/todo');
var List = require('./model/list');

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// set view engine to hbs
app.set('view engine', 'hbs');

// connect to mongodb
mongoose.connect('mongodb://localhost/mean_sample');



/*
* API routes
*/

//LISTS
app.get('/api/lists', function (req, res) {
	List.find(function (err, allLists) {
		if (err) {
			res.status(500).json({ error: err.message });
		} else {
			res.json(allLists);
		}
	});
});

app.post('/api/lists', function (req, res) {
	var newList = new List(req.body);
	newList.save(function (err, savedList) {
		console.log(savedList);
		if (err) {
			res.status(500).json({ error: err.message });
		} else {
			res.json(savedList);
		}
	});
});

app.get('/api/lists/:id', function (req, res) {
	var listID = req.params.id;
	List.find({_id: listID}, function (err, list) {
		if (err) {
			res.status(500).json({ error: err.message });
		} else {
			res.json(list);
		}
	});
});

app.put('/api/lists/:id', function (req, res) {
	var listID = req.params.id;
	List.find({_id: listID}, function (err, list) {
		if (err) {
			res.status(500).josn({ error: err.message });
		} else {
			list.name = req.body.name;
			if (req.body.todos) {
				list.todos = req.body.todos; //might revisit
			}
			list.save(function (err, savedList) {
				if (err) {
					res.status(500).json({ error: err.message });
				} else {
					console.log("changes saved.");
					res.json(savedList);
				}
			});
		}
	});
});

app.delete('/api/lists/:id', function (req, res) {
	var listID = req.params.id;
	List.remove({_id: listID}, function (err, deletedList) {
		if (err) {
			console.log("List could not be deleted");
			res.status(500).json({ error: err.message });
		} else {
			console.log("List deleted.");
			res.json(deletedList);
		}
	});
});

//TODO
app.get('/api/lists/:list_id/todos', function (req, res) {
	Todo.find(function (err, allTodos) {
		if (err) {
			res.status(500).json({ error: err.message });
		} else {
			res.json(allTodos);
		}
	});
});

app.post('/api/lists/:list_id/todos', function (req, res) {
	var newTodo = new Todo(req.body);
	newTodo.save(function (err, savedTodo) {
		console.log(savedTodo);
		if (err) {
			res.status(500).json({ error: err.message });
		} else {
			res.json(savedTodo);
		}
	});
});

app.get('/api/lists/:list_id/todos/:id', function (req, res) {
	var todoID = req.params.id;
	Todo.find({_id: todoID}, function (err, todo) {
		if (err) {
			res.status(500).json({ error: err.message });
		} else {
			res.json(todo);
		}
	});
});

app.put('/api/lists/:list_id/todos/:id', function (req, res) {
	var todoID = req.params.id;
	Todo.find({_id: todoID}, function (err, todo) {
		if (err) {
			res.status(500).json({ error: err.message });
		} else {
			todo.name = req.body.name;
			if (req.body.lists) {
				list.todos = req.body.todos; //might revisit
			}
			list.save(function (err, savedList) {
				if (err) {
					res.status(500).json({ error: err.message });
				} else {
					console.log("changes saved.");
					res.json(savedList);
				}
			});
		}
	});
});

app.delete('/api/lists/:list_id/todos/:id', function (req, res) {
	var todoID = req.params.id;
	Todo.remove({_id: todoID}, function (err, deletedTodo) {
		if (err) {
			console.log("todo could not be deleted");
			res.status(500).json({ error: err.message });
		} else {
			console.log("todo deleted.");
			res.json(deletedTodo);
		}
	});
});



/*
* Load `views/index.hbs` file
* when any route is requested from the server
*/

app.get('*', function (req, res) {
	res.render('index');
});


// listen on port 3000
app.listen(3000, function() {
	console.log('server started');
});