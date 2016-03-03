var mongoose = require('mongoose');

var quoteSchema = mongoose.Schema({
  author: String,
  text: String
});

var Quote = mongoose.model('quote', quoteSchema);

module.exports = Quote;
