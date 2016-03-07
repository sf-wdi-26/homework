var mongoose = require('mongoose');
var conn = mongoose.connect('mongodb://localhost/quotes-app');
var Quote = require("../models/Quote");
Quote.remove({}, function(err) {
  if (err) {
    console.log("ERROR:", err);
  }
});

 var quotes = [
  {id: 1, quote: "I like that cover of Hotline Bling. It has... emotion.", orator: "Nick"},
  {id: 2, quote: "I'd like to think I know JavaScript... intimately.", orator: "Nick"},
  {id: 3, quote: "The ellipses make it seem creepier... everything I say.", orator: "Nick"},
  {id: 4, quote: "How do you pronounce orator?", orator: "Nicholas Gerard Scalf"}
];

Quote.create(quotes, function(err, docs) {
  if (err) {
    console.log("ERROR:", err);
  } else {
    console.log("Created:", docs);
    mongoose.connection.close();
  }
});