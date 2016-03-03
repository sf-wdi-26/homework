var express =require('express'),
	app = express();


tovar burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];
var tacos = [
				"Soft Taco",
                "Crunchy Taco",
                "Super Taco"

			];


app.get("/", function (req, res) {
res.send("Hello Tacos");
});

app.get("/burgers", function (req, res) {    
    res.send(burgers.join(", "));
});

app.get("/tacos", function (req, res) {          
    res.send(tacos.join(", "));
});

app.listen(3000, function () {
    console.log("Go to localhost:3000/");
});

app.param('name', function(request, response, next) {

		var name = request.params.name;

		var capitalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase();

		var request.params.name = capitalizedName;

		next();

	})

app.get("/greet/:name", function (req, res) {
    res.send( "Hello, " + req.params.name );
});

app.get("/thank", function (req, res) {
    var name = req.query.name;
    res.send("Thank you, " + name);
});