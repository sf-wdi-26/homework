//requirements

var express = require('express'),
  app = express();


//burgers and tacos
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


//a GET request to "/" will run the function below
app.get('/', function(req, res){
  //send back response : Hello World
  res.send("Hello World");
});

//GET all the burgers
app.get("/burgers", function(req, res){
  //send all the burgers
  res.send(burgers.join(", "));
});

//GET ALL THE tacos
app.get("/tacos", function(req, res){
  res.send(tacos.join(", "));
});

//SHOW TACO BY ID
app.get("/tacos/:id", function(req, res){
  res.send(tacos[req.params.id]);
});
//SHOW BURGER BY ID
app.get("/burgers/:id", function(req, res){
  res.send(burgers[req.params.id]);
});



//another example of some simple middleware
//call this function on every route with the param of 'name'
app.param('name', function(request, response, next){
  //get name from params
  var name = request.params.name;
  //capitalize the name
  var capitalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  //set the value of the name to the capitalized version
  request.params.name = capitalizedName;
  //pass control to the next middleware function
  next();
});

// access by localhost / greet / nidhi
app.get("/greet/:name", function (req, res){
  res.send("Hello, " + req.params.name);
});

//query params
// localhost:3000/thank?name=jane
app.get("/thank", function(req, res){
  var name = req.query.name;
  res.send("Thank you, " + name);
});


//NUMBER GUESSING GAME
app.get("/pickanumber", function(req, res){
  var number = req.query.number;

  if(number>7){
    res.send("Too high");
  }
  else if(number==7){
    res.send("You picked " + number + "!");
  }
  else{
    res.send("Too low");
  }
});


app.get("/pick-a-color/:color", function(req, res){
  var color = req.params.color;
  res.send("Your color: " + color);
});


//multiply route uses query params x and y
//multiply 5 and 2 and return 10 is the result
//create an add route Too
app.get("/multiply", function(req, res){
  var x = req.query.x;
  var y = req.query.y;
  res.send(x*y + " is the product.");
});

app.get("/add", function(req, res){
  var x = req.query.x;
  var y = req.query.y;
  res.send(x+y + " is the sum.");
});



//start the server
app.listen(3000, function(){
  console.log("Go to localhost:3000/");
});
