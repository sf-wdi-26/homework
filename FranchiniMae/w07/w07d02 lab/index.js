// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    _ = require("underscore"),
    views = path.join(process.cwd(), "views/");

// CONFIG //
// serve js & css files
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));
// body parser config to accept all datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// DATA //
// var foods =[
//   {_id: 0, name: "Sushiritto", yumminess: "quite"},
//   {_id: 1, name: "Green Eggs & Ham", yumminess: "sure"},
//   {_id: 2, name: "Crayfish", yumminess: "depending"},
//   {_id: 3, name: "Foie Gras", yumminess: "omg"},
//   {_id: 4, name: "Kale", yumminess: "meh"}
// ];

var db = require('./models');

// ROUTES //
app.get("/", function (req, res){
  // render index.html
  res.sendFile(path.join(views + 'index.html'));
});


// foods index path
app.get("/foods", function (req, res){

  db.Food.find({}, function(err, foods) {
    if (err) {
      console.log("Error");
      res.redirect("/");
    }
  res.send(foods);
  });
});


app.post("/foods", function create(req, res){
  var newFood = req.body;
  db.Food.create(newFood, function(err, foods){
    if (err) {
      console.log(err);
      return res.sendStatus(400);
    }
    res.send(foods);
  });
});

app.delete("/foods/:id", function (req, res){
  db.Food.findByIdAndRemove(req.params.id, function (err, foods) {
    if (err) {
      console.log(err);
    } else {
      res.send(foods);
    }
  });

});


app.listen(3000, function (){
  console.log("listening on port 3000");
});
