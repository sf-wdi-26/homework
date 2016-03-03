var express = require('express');
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

// another example of some simple middleware
// call this function on every route with the param of 'name'
app.param('name', function(request, response, next) {
  var name = request.params.name;
  var capitalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  request.params.name = capitalizedName;
  next();
});

app.get("/thank", function (req, res){
	var name = req.query.name;
	res.send("Thank you, " + name);
});

app.get("/greet/:name", function (req, res) {
    res.send( "Hello, " + req.params.name );
});

app.get("/", function (req, res) {
	res.send("Hello World");
});

app.get("/burgers", function (req, res) {
	res.send(burgers.join(", "));
});

app.get("/tacos", function (req, res){
	res.send(tacos.join(", "));
});

app.get("/pick-a-color/:color", function(req, res){
	var color = req.params.color;
	res.send("You picked: " + color);
});

app.get("/taco/:index", function(req, res) {
	var index = req.params.index;
	var selection = tacos[index] || "try again";
		res.send(selection);
});

app.get("/burger/:index", function(req, res) {
	var index = req.params.index;
	var selection = burgers[index] || "try again";
		res.send(selection);
});

app.get("/pickanumber", function(req, res) {
	var number = req.query.number;
	if (number ===7) {
		res.send("You picked " + number + "!");
	}
	else if (number < 7) {
		res.send("Too Low");
	}
	else {
		res.send("Too High");
	}
});




app.listen(3000, function(){
	console.log("Go to localhost:3000/");
});