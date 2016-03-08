//require mongoose dependency
var mongoose = require('mongoose');

//defining schema for quotes
var QuoteSchema = mongoose.Schema({
	text: String,
	author: String
});

// define & name the model with .model (mongoose)
var Quote = mongoose.model('Quote', QuoteSchema);

// export the model to any files that 'require' this one
module.exports = Quote;

