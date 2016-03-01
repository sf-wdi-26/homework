// requirements
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

app.get("/greet/:name", function (req, res) {
    res.send( "Hello, " + req.params.name );
});

// a "GET" request to "/" will run the function below
app.get("/", function (req, res) {
    // send back the response: 'Hello World'
   res.send("Hello World");
});

app.get("/burgers", function (req, res) {
	res.send(burgers.join(", "));
});

app.get("/burgers/:id", function(req, res) {
	res.send(burgers[req.params.id])
})

app.get("/tacos", function (req, res) {
	res.send(tacos.join(", "));
});

app.get("/tacos/:id", function(req, res) {
  res.send(tacos[req.params.id])
})

app.get("/thank/:name", function(req, res) {
	var name = req.query.name;
	res.send("Thank you " + name);
});

 
app.get("/pick-a-color/:color", function(req,res) {
  
    res.send("You picked " + req.params.color + "!");

 });

 app.get("/pickanumber/:number", function(req,res) {
  var number = req.params.number;
  if(number == 7 ) {
    res.send("Nailed it " + number + "!");
  }  if(number > 7) {
    res.send("Too High");
  } else {
    res.send("Too Low");
  }

 });


app.listen(3000, function () {
	console.log("Go to localhost:3000/");
});



