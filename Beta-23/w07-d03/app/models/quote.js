var mongoose = require('mongoose');

var	QuoteSchema = mongoose.Schema({
	author: String,
	text: String
})

var Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote;