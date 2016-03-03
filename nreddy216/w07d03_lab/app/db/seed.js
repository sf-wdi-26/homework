var mongoose = require('mongoose');

var conn = mongoose.connect('mongodb://localhost/quotes-app');

var quote = require("../models/quote");

quote.remove({}, function(err){
  if(err){
    console.log("ERROR: ", err);
  }
});

var quotes = [
  {id: 1, author: "Anonymous", text: "I am god"},
  {id: 2, author: "Anonymous", text: "I think therefore I am"},
  {id: 3, author: "Anonymous", text: "If not now, when?"}
];

quote.create(quotes, function(err, docs){
  if(err){
    console.log("ERROR: ", err);
  }
  else{
    console.log("Created: ", docs);
    mongoose.connection.close();
  }
});
