var express = require('express');
//requiring the express
var app = express();
//this is running express

var ejs = require('ejs');

var bodyParser = require('body-parser');

//bodyParser.urlencoded() returns a function that will be called later in the app.post() route
app.use(bodyParser.urlencoded({extended: false}));

app.set('views', './views');
app.set('view engine', 'ejs');

// app.use(parseUrlencoded);

//store for cities in memory (as long as server is running)
var cities = [];

app.get('/cities', function(req, res) {
	res.render('cities', {cities: cities});
});

//passing multiple middleware functions to this route; they are executed sequentially
app.post('/cities', function (request, response) {
	var city;
	var name = request.body.name;
	var description = request.body.description;
	city = { name: name, description: description};
	cities.push(city);
		//passing local variables to be used in EJS template
	response.render('cities', { cities: cities});
});

app.listen(3000, function () {
	console.log("Go to localhost:3000/");
});