var express = require('express'),
	app = express(),
	port = 3000,
	correct_number = 7;

	var burgers = [
									"Hamburger", 
									"Cheese Burger",
									"Dble Cheese Burger"
								];	

var tacos = [
                "Soft Taco",
                "Crunchy Taco",
                "Super Taco"
               ];

	app.get('/', function (req, res) {
		res.send("Hello World");
	});

	app.get('/burgers', function (req, res) {
		res.send(burgers.join(", "));
	});

	app.get('/burger/:index', function(req, res) {
		var index = req.params.index;
		var selection = burgers[index] || "Sorry, that's not a burger option";
		res.send(selections);
	});

	app.get('/tacos', function (req, res) {
		res.send(tacos.join(", "));
	});

	app.get('/taco/:index', function(req, res) {
		var index = req.params.index;
		var selection = tacos[index] || "Sorry, that's not a taco option";
		res.send(selection);
	});

	app.param('name', function(request, response, next) {
		var name = request.params.name;
		var capitalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
		request.params.name = capitalizedName;
		next();
	});

	app.get('/greet/:name', function (req, res) {
		res.send( "hello, " + req.params.name);
	});

	app.get('/thank', function (req, res) {
		var name = req.query.name;
		res.send("Thank you, " + name);
	});

	app.get('/color/:choice', function(req, res) {
		var choice = req.params.choice;
		res.send("Your color is: " + choice);
	});

	app.get('/pick-a-number/:num', function(req, res) {
		var num = req.params.num;
		if ( num === correct_number) {
			res.send("Nailed it!");
		} else if (num > correct_number) {
			res.send("Too High!");
		} else {
			res.send("Too Low");
		}
	});

	app.get('/pick-a-number', function(req, res) {
		var num = req.query.num;
		if (num === correct_number) {
			res.send("Nailed it!");
		} else if (num > correct_number) {
			res.send("Too High!");
		} else {
			res.send("Too Low");
		}
	});

	app.get('/add', function (req, res) {
		var x = req.query.x;
		var y = req.query.y;
		var total = x + y;
		res.send(total);
	});

	app.get('/multiply', function(req, res) {
		var x = req.query.x;
		var y = req.query.y;
		var total = x*y;
		res.send(total);
	});

	app.listen(port, function () {
		console.log("Go to localhost:3000/");
	});
























