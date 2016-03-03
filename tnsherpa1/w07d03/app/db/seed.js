//require mongoose to CRUD db
var mongoose = require('mongoose');
//connect to db
var conn = mongoose.connect('mongodb://localhost/quotes-app');
//require models in this controller
var Quote = require("../models/Quote");
//remove anything previously existed 
Quote.remove({}, function(err) {
  if (err) {
    console.log("ERROR:", err);
  }
});

 var quotes = [
  {text: "It is the possibilty of having a dream come true that makes life interesting.", author: "Paulo Coelho"},
  {text: "If you wanna know about somebody, let him be free", author: "Tashi Sherpa"},
  {text: "If you do what you can only do, you'll be the same", author: "KungFu Panda"}
];
//create quotes and disconnect from db
Quote.create(quotes, function(err, docs) {
  if (err) {
    console.log("ERROR:", err);
  } else {
    console.log("Created:", docs);
    mongoose.connection.close();
  }
});