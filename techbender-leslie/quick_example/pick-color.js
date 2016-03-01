var express = require('express');
var app = express();

var ejs = require('ejs');
var bodyParser = require('body-parser');

var parseUrlencoded = bodyParser.urlencoded({extended: false});

app.param('color', function(request, response, next) {
  // get name from params
  var color = request.params.name;
  // pass control to the next middleware function
  next();
});

app.get("/pick-a-color/:color", function (req, res) {
  res.send("You picked: " + req.params.color );
});

app.listen(3000, function() {
    console.log("Go to localhost:3000/");
});
