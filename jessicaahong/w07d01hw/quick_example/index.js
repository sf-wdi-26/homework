var express = require('express'),
	app = express();

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



app.listen(3000, function() {
	console.log("Go to localhost:3000/");
});