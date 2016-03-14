var Mongoose = require('mongoose');

module.exports = Mongoose.model('User',{
	gh: {
		id: String,
		access_token: String, 
		username: String,
		email: String
	} 
});