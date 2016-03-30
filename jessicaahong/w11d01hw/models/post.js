var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  created: { type: Date },
  title: String,
  content: String
});


var Post = mongoose.model('Post', postSchema);
module.exports = Post;