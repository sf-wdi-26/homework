// taco

var express = require('express');
var app = new express();
var router = express.Router();
var port = 3000;

app.use('/', router);

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

router.route("/taco/:index").get(function (req, res){
	var index = req.params.index;
	var selection = tacos[index] || "Sorry, that's not a taco option";
	res.send( selection );
});

router.route("/burger/:index").get(function (req, res){
	var index = req.params.index;
	var selection = burgers[index] || "Sorry, that's not a burger option";
	res.send( selection );
});

app.listen(port, function (error) {
	console.log('running server on port ' + port);
});
