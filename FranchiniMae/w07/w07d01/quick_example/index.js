//requirements
var express = require('express'),
	app = express();

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

// another exmaple of some simple middleware
// call this function on every route with the param of 'name'
app.param('name', function(request, response, next) {
	// get name from params
	var name = request.params.name;
	// capitalize the name
	var capitalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
	// set the value of the name to the capitalized version
	request.params.name = capitalizedName;
	// pass control to the next middleware function
	next();
});

//requesting URL parameters
app.get("/greet/:name", function (req, res) {
	res.send( "Hello, " + req.params.name );
});

//practicing query params
app.get("/thank", function (req, res) {
	var name = req.params.name;
	res.send("Thank you, " + name);
});

//middleware for color
app.param('color', function(request, response, next) {
	// get name from params
	var color = request.params.color;
	next();
});

app.get("/pick-a-color/:color", function (req, res) {
	res.send("You picked: " + req.params.color);
});

var number = 2;
app.get("/pick-a-number", function (req, res) {
	var num = req.query.num;
	if (num == number) {
		res.send("Nailed it!");
	} else if (num > number) {
		res.send("Too High!");
	} else {
		res.send("Too Low");
	}
});

//a "GET" request to "/" will run the functionb below
app.get("/", function (req, res) {
	// send back the response: 'Hello World'
	res.send("Hello World");
});

app.get("/burgers", function (req, res) {
	//send all the burgers
	res.send(burgers.join(", "));
});

app.get("/burgers/:index", function (req, res) {
	var index = req.params.index;
	var burger = burgers[index];
	res.send ( burger ); 
});

app.get("/tacos", function (req, res) {
	//send all the tacos
	res.send(tacos.join(", "));
});

app.get('/tacos/:index', function (req, res) {
	var index = req.params.index;
	var taco = tacos[index];
	res.send( taco );
});

// start the server
app.listen(3000, function () {
	console.log("Go to localhost:3000/");
});