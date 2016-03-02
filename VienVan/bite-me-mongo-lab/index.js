// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    _ = require("underscore"),
    views = path.join(process.cwd(), "views/"),
    db = require('./models');

// CONFIG //
// serve js & css files
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));
// body parser config to accept all datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES //
app.get("/", function (req, res){
  // render index.html
  res.sendFile(path.join(views + 'index.html'));
});

// foods index path
app.get("/foods", function (req, res){
  // render foods index as JSON
  db.Food.find({}, function(err, foods) {
    err ? res.sendStatus(400) : res.send(foods);
  })
});

app.post("/foods", function (req, res){
  var newFood = req.body;
  db.Food.create(newFood);
  res.redirect('/');
});

app.delete("/foods/:id", function (req, res){
  var id = req.params.id;
  db.Food.remove({_id:id}, function(food, err) {
    res.sendFile(path.join(views + 'index.html'));
  });
});

app.listen(3000, function (){
  console.log("listening on port 3000");
});
