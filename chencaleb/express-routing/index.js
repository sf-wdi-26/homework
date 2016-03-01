var express = require('express'),
	app = express();

var ejs = require('ejs');
var bodyParser = require('body-parser');
var parseUrlencoded = 
bodyParser.urlencoded({extended: false});

//color
app.get("/color/:choice", function(req, res) {
	var choice = req.params.choice;
	res.send("You picked: " + choice);
});

//which tacos
var burgers = [
				"Hamburger",
				"Cheese Burger",
				"Dbl Cheese Burger"
				];

var tacos = [
				"Soft Taco",
				"Crunchy Taco",
				"Super Taco"
				];

app.get("/taco/:index", function(req, res) {
	var index = req.params.index;
	var taco = tacos[index];
	res.send(taco);
});

app.get("/burger/:index", function(req, res) {
	var index = req.params.index;
	var burger = burgers[index];
	res.send(burger);
});

//the number guessing game
app.get("/pickanumber", function (req, res) {
	var number = req.query.number;
	if(number == 7) {
		res.send("Nailed it!");
	} else if (number > 7) {
		res.send("Too High!");
	} else {
		res.send("Too Low!");
	}
});


//building cities
var cities = [
				{name: "Berkeley"},
				{name: "San Francisco"},
				{name: "Los Angeles"}
				];

app.get('/cities', function(req, res) {
	res.render('cities', {cities: cities});
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

//stretch exercises

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

/*--- Review ----*/
// app.get("/", function (req, res) {
// 	res.send("Hello World");
// });

// app.get("/burgers", function (req, res) {
// 	res.send(burgers.join(", "));
// });

// app.get("/tacos", function (req, res) {
// 	res.send(tacos.join(", "));
// });

// app.param('name', function(request, response, next) {
// 	var name = request.params.name;
// 	var capitalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
// 	request.params.name = capitalizedName;
// 	next();
// });

// app.get("/greet/:name", function (req, res) {
// 	res.send("Hello, " + req.params.name );
// });

// app.get("/thank", function (req, res) {
// 	var name = req.query.name;
// 	res.send("Thank you, " + name);
// });


app.listen(3000, function () {
	console.log("Go to localhost:3000/");
});