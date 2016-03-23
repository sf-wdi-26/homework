var mongoose = require('mongoose');

var WineSchema = mongoose.Schema({
	name: String,
	year: String,
	grapes: String,
	country: String,
	region: String,
	price: String,
	description: String,
	picture: String
});

module.exports = mongoose.model('Wine', WineSchema);