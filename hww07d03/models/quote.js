var mongoose = require('mongoose');

var QuoteSchema = mongoose.Schema({
    text: String,
    author: String
});

var Quote = mongoose.model('Quote', QuoteSchema);

model.exports = Quote;