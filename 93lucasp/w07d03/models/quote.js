var mongoose = require('mongoose');

var QuoteSchema = mongoose.Schema({
	quote: String,
	author: String
});

var Quote = mongoose.model('Quote', QuoteSchema);
module.exports = Quote;