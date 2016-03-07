var mongoose = require('mongoose');

var QuoteSchema = mongoose.Schema({
	quote: String,
	orator: String
});

module.exports = mongoose.model('Quote', QuoteSchema);