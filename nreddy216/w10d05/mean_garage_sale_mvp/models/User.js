var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password_digest: String,
  phoneNumber: String,
  profileBio: String,
  profilePhoto: String,
  userZipCode: String,
  reviews: [], //create model for Reviews ?
  serviceRating: Number,
  friendlinessRating: Number
  // items: [ItemSchema] //better way for this?

});

module.exports = mongoose.model('User', UserSchema);
