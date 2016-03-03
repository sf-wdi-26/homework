// requires
var mongoose = require('mongoose'); 
// mongoose.connect('mongodb://localhost/quotes_app');

// schema is blueprint / constructor, the model is the table, and it tells the the seed file items where go into 
var QuoteSchema = mongoose.Schema({
  text: String, 
  author: String 
  // future one_to_many relationship will be: something_array: [_id, _id,_ids...]
});

// define model 
var Quote = mongoose.model('Quote', QuoteSchema);

// export to make it available 
module.exports = Quote;