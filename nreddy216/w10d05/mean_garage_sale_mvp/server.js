/*
* server.js
*/

//require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');
    // methodOverride = require('method-override');

var Item = require('./models/Item');
var User = require('./models/User');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

//configure body parser (for receiving form data)
app.use(bodyParser.urlencoded({extended: true}));
//parse application/json
app.use(bodyParser.json());


//set view engine to hbs (handlebars)
app.set('view engine', 'hbs');

//connect to mongodb
mongoose.connect('mongodb://localhost/mean-garage-sale-mvp');


//ROUTES

//items ============================================
//GET
app.get('/api/items', function(req, res){
  Item.find(function(err, allItems){
    if(err){
      res.status(500).json({error: err.message});
    } else {
      res.json(allItems);
    }
  });
});

//POST item up for sale
app.post('/api/items', function(req, res){
  var item = new Item(req.body);

  item.save(function(error){
    if(error) res.json({message: 'Could not create item ', error});

    res.json({item: item});
  })
});

//show individual ; get one item
app.get('/api/items/:id', function (req, res) {
  // get item id from url params (`req.params`)
  var itemId = req.params.id;

  // find item in db by id
  Item.findOne({ _id: itemId }, function (err, foundItem) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(foundItem);
    }
  });
});

//update
app.put('/api/items/:id', function(req, res){
  console.log('anything');
  Item.findById({_id: req.params.id}, function(err, item){
    if(err){
      console.log("err ", err);
    } else {
      console.log('anything? in put update');
      item.text = req.body.text;
      item.soldStatus = req.body.soldStatus;
      item.save(function(error, savedItem){
        if(error){
          console.log(error);
        } else {
          res.json(savedItem);
        }
      });
    }
  });
});

app.delete('/api/items/:id', function(req, res){
  Item.remove({_id: req.params.id}, function(err, deletedItem){
    if(err){
      console.log("err, ", err);
    } else {
      res.json(deletedItem);
    }
  });
});

//load views/index.hbs file with any route

app.get('*', function(req, res){
  res.render('index');
});


//listen on port 3000
app.listen(3000, function(){
  console.log('server started');
});
