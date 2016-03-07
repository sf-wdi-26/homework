var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/quotes-app');

var QuoteSchema = mongoose.Schema({
	quote: String,
	author: String
});

var Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote;