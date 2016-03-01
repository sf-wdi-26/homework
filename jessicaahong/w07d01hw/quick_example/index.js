var express = require('express'),
	app = express();

var ejs = require('ejs');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended:false});


var burgers = [
				'Hamburger',
				'Cheeseburger',
				'Double Double Animal Style'
				];

var tacos = [
				'Soft Taco',
				'Crunchy Taco',
				'Fish Taco'
];

//middleware
app.param('name', function (request, response, next) {
	var name = request.params.name;
	var capitalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
	request.params.name = capitalizedName;
	next();
});

//routes
app.get("/", function (req, res) {
	res.send("hello cruel world");
});

app.get("/burgers", function (req, res) {
	res.send(burgers.join(", "));
});

app.get("/tacos", function (req, res) {
	res.send(tacos.join(", "));
});

app.get("/greet/:name", function (req, res) {
	res.send("Howdy " + req.params.name + "!");
});

app.get("/thank", function (req, res) {
	var name = req.query.name;
	res.send("Thank you, " + name + ".");
});

//homework challenge: pick-a-color

app.get("/pick-a-color/:color", function (req, res) {
	res.send("You picked: " + req.params.color + "!");
});

//homework challenge: which taco/burger
app.get("/taco/:id", function (req, res) {
	// console.log(req.params.id);
	var id = req.params.id;
	var selection = tacos[id] || "Sorry dood that's not on the menu";
	res.send(selection);
	// for (i = 0; i < tacos.length; i ++) {
	// 	if (req.params.id == tacos[i].id) {
	// 		taco = tacos[i];
	// 		res.json(taco);
	// 	}
	// }
});

app.get("/burger/:id", function (req, res) {
	var id = req.params.id;
	var selection = burgers[id] || "Sorry dood that's not on the menu";
	res.send(selection);
});

//homework challenge: number guessing game
app.get("/pickanumber", function (req, res) {
	var number = req.query.number;
	if (number === 7) {
		res.send("Nailed it!");
	} else if (number < 7) {
		res.send("Too low!");
	} else {
		res.send("Too high!");
	}
});

//homework challenge: building cities
app.set('views', './views');
app.set('view engine', 'ejs');

var cities = [
	{name: "San Francisco"},
	{name: "Chicago"},
	{name: "Des Moines"}
];

app.get("/cities", function (req, res) {
	// res.send(cities);
	res.render("cities", { cities: cities });
});

app.post("/cities", parseUrlencoded, function (req, res) {
	city = req.body;
	cities.push(city);
	res.render('cities', {cities: cities});
});

app.get("/cities/:id", function (req, res) {
	var id = req.params.id;
	var city = cities[id];
	res.render('city_show', {city: city});
});

//work in progress for delete route
app.delete("/cities/:id", function (req, res) {
	var id = req.params.id;
	delete cities[id];
	res.json({message : "deleted"});
});

//homework stretch exercises
app.get("/multiply", function (req, res) {
	var x = req.query.x;
	var y = req.query.y;
	var product = x*y;
	res.send("The product of " + x + " and " + y + " is " + product + ".");
});

app.get("/add", function (req, res) {
	var x = req.query.x;
	var y = req.query.y;
	var sum = Number(x) + Number(y);
	res.send("The sum of " + x + " and " + y + " is " + sum + ".");
});

app.listen(3000, function() {
	console.log("Go to localhost:3000/");
});