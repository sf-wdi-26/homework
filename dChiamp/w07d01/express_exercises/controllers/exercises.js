var express = require('express'),
    router = express.Router(),
    ejs = require('ejs'),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST


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
var cities = []

// mids

app.set('view engine', 'ejs');

var parseUrlencoded = bodyParser.urlencoded({extended: false});

app.param('name', function(req, res, next) {
  var name = req.params.name;
  var capitalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  req.params.name = capitalizedName; 
  next();
})  

// routes
app.get("/greet/:name", function (req, res){
  res.send( "Hello, " + req.params.name);
})

app.get("/thank", function (req, res) {
  var name = req.query.name;
  res.send("Thank you, " + name);
})

app.get('/', function(req, res) {
  res.send("what up world")
})

app.get("/burgers", function (req, res) { 
    res.send(burgers.join(", "));
});

app.get("/tacos", function (req, res) {      
    res.send(tacos.join(", "));
});

// exercises:

// pick a color
app.get("/pick-a-color/:color", function(req,res) {
  res.send("you picked: " + req.params.color)
})

// which taco
app.get("/tacos/:id", function (req, res) {
  var id = req.params.id
  var choice = tacos[id]
  res.send(choice)
})

app.get("/burgers/:id", function (req, res) {
  var id = req.params.id
  var choice = burgers[id]
  res.send(choice)
})

// number guess
app.get("/pickanumber/:num", function (req, res) {
  var num = req.params.num
  if (num == 9 ) {
    res.send("you nailed it!")
  } else if (num < 9 ){
    res.send("too low")
  } else {
    res.send("too high")
  }
})
  // OR

app.get("/pickanumber/", function (req, res) {
  var num = req.query.num
  if (num == 9 ) {
    res.send("you nailed it!")
  } else if (num < 9 ){
    res.send("too low")
  } else {
    res.send("too high")
  }
})


// cities
app.get('/cities', function(req,res){
  res.render('cities', {cities: cities})
})

app.post('/cities', parseUrlencoded, function(req,res){
  var city;
  var name = req.body.name;
  city = {name: name};
  cities.push(city);
  res.render('cities', {cities: cities})
});
  // delete city

// router.delete('/cities/:id', function(req,res){
//   var id = req.body.id
//   for(i in cities){
//     if(cities[i]["id"] == req.params.id){
//       delete cities[i]
//     }
//   }
//     // res.json({message : 'deleted' });
// });

// calculator 
app.get("/multiply", function(req, res){
  var x = req.query.x;
  var y = req.query.y;
  var total = x*y;
  res.send( total );
});

app.get('/calculator/:num/:div', function(req,res){
  var x = req.params.num
  var y = req.params.num.div
  var quot = ( x / y )
  res.send(quot);
  cosnole.log(quot);
  // res.send(x);
})
// http://localhost:3000/add?x=4&y=3


module.exports = router