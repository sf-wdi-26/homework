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
app.use(bodyParser.urlencoded({ extended: true }));


// ROUTES //
app.get("/", function (req, res){
  // render index.html
  res.sendFile(path.join(views + 'index.html'));
});

// foods index path
app.get("/foods", function (req, res){
  db.Food.find({}, function(err, foods){
        if (err) {
            console.log("BAD THING!");
            return res.sendStatus(400);
        }
        res.send(foods);
    });
});

//post a new food
app.post("/foods", function (req, res){
  var name = req.body.name;
  var yumminess = req.body.yumminess;
  db.Food.create({name: name, yumminess: yumminess}, function (err, doc) {
    err ?  res.send("There was an error.") : res.redirect("/")
  });
});

//delete a food
app.delete("/foods/:id", function destroy(req, res){
  var id = req.params.id;
  db.Food.remove({_id: id}, function (err, food) {
    err ? res.send("There was an error.") : res.redirect("/");
  });
});

app.listen(3000, function (){
  console.log("listening on port 3000");
});
