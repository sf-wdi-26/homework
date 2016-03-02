var express = require('express'),
        app = express(),
       path = require('path'),
     logger = require('morgan'),
     router = express.Router(),
        ejs = require('ejs'),
 bodyParser = require('body-parser');

// mids
app.set('view engine', 'ejs');

// var parseUrlencoded = bodyParser.urlencoded({extended: false});
app.use(bodyParser.urlencoded({ extended: false }));

app.param('name', function(req, res, next) {
  var name = req.params.name;
  var capitalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  req.params.name = capitalizedName; 
  next();
})  

app.use(require('./controllers'));

app.listen(3000);