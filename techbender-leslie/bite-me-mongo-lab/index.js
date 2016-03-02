// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    _ = require("underscore"),
    views = path.join(process.cwd(), "views/");

var db = require('./models');

// CONFIG //
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));
app.use(bodyParser.urlencoded({ extended: true }));

// DATA //
// var foods =[
//   {_id: 0, name: "Sushiritto", yumminess: "quite"},
//   {_id: 1, name: "Green Eggs & Ham", yumminess: "sure"},
//   {_id: 2, name: "Crayfish", yumminess: "depending"},
//   {_id: 3, name: "Foie Gras", yumminess: "omg"},
//   {_id: 4, name: "Kale", yumminess: "meh"}
// ];

// ROUTES //
app.get("/", function (req, res){
  res.sendFile(path.join(views + 'index.html'));
});

// foods index path
app.get("/foods", function (req, res){
  db.Food.find({}, function(err, foods){
    if (err) {
      console.log("Something went wront!");
      return res.sendStatus(400);
    }
    // res.render("index", {foods: foods}); NOT THIS, NO VIEW
    res.send(foods);  //WHAT THE HELL IS THIS????
  });
});

app.post("/foods", function (req, res){
  var newFood = req.body;
  db.Food.create(newFood, function(err, food){
    if (err) {
      console.log(err);
      return res.sendStatus(400);
    }
    res.send(food);
  });
});

app.delete("/foods/:id", function (req, res){
  // set the value of the id
  var id= req.params.id;
  db.Food.remove({_id: id}, function(req, food) {
    if (err) {
      console.log(err);
      return res.sendStatus(400);
    }
    res.sendStatus(200);
  });
});


app.listen(3000, function (){
  console.log("listening on port 3000");
});
