// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    _ = require("underscore"),
    views = path.join(process.cwd(), "views/");

var db = require('./models');

// CONFIG //
// serve js & css files
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));
// body parser config to accept all datatypes
app.use(bodyParser.urlencoded({ extended: true }))

// ROUTES //
app.get("/", function (req, res){
  // render index.html
  res.sendFile(path.join(views + 'index.html'));
});

// foods index path
app.get("/foods", function (req, res){
  db.Food.find({}, function(err, foods){
        if (err) {
            console.log(err);
            return res.sendStatus(400);
        }
        res.send(foods);
    });
});

app.post("/foods", function (req, res){
  var newFood = req.body;
  // add new food to DB (array, really...)
  db.Food.create(newFood, function(err, food) {
    if(err) {
      console.log(err);
      return res.sendStatus(400);
    } else {
      res.send(food);
    }
  });
});

app.delete("/foods/:id", function (req, res){
  // set the value of the id
  var targetId = req.params.id;
  db.Food.remove({_id: id}, function(err, food) {
    if(err) {
      console.log(err);
      return res.sendStatus(400);
    }
    res.sendStatus(200);
  });
  
});

app.listen(3000, function (){
  console.log("listening on port 3000");
});
