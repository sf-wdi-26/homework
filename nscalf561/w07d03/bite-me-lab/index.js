// REQUIREMENTS //
var db = require('./models');

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

// ROUTES //
app.get("/", function (req, res){
  // render index.html
  res.sendFile(path.join(views + 'index.html'));
});

// foods index path
app.get("/foods", function (req, res){
  // render foods index as JSON
  db.Food.find({}, function(err, foods) {
    if (err) {
      console.log("ERROR");
      return res.sendStatus(400);
    } 
    res.send(foods); 
  });
});

app.post("/foods", function (req, res){
  var newFood = req.body;

  // add a unique id
  // newFood._id = db.Food[db.Food.length - 1]._id + 1;

  // add new food to DB (array, really...)
  db.Food.create(newFood, function(err, doc) {
    if (err) {
      console.log("ERROR");
      res.redirect('/');
    } else {
  // send a response with newly created object
  res.send(newFood);
    }
  });
});

app.delete("/foods/:id", function (req, res){
  // set the value of the id
  // var targetId = parseInt(req.params.id, 10);
  var id = req.params.id;
  // find item in the array matching the id
  // var targetItem = _.findWhere(foods, {_id: targetId});
  // get the index of the found item
  // var index = db.Food.indexOf(targetItem);
  // remove the item at that index, only remove 1 item
  db.Food.remove(id, function(err, doc) {
    if (err) {
      console.log("ERROR");
    } else {
      console.log("Deleted");
    }
  });
  // render deleted object
  res.send(targetItem);
});

app.listen(3000, function (){
  console.log("listening on port 3000");
});
