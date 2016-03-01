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

app.get("/", function (req, res){
	res.send("Hello Al");
});

app.get("/burgers", function (req, res){
	res.send(burgers.join(","));
});

app.get("/tacos", function (req, res){
	res.send(tacos.join(","));
});

app.param('name', function(request, response, next){

	var name = request.params.name;
	var capitalizeName = name[0].toUpperCase() + name.slice(1).toLowerCase();
	request.params.name = capitalizeName;
	next();	
});

app.get("/greet/:name", function (req, res){
	res.send( "Hi, " + req.params.name);
});

app.get("/thank", function (req, res){
	var name = req.query.name;
	res.send("Thank you", + name);
});

app.listen(3000, function(){
	console.log("tacos/");
});