var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  tags: [String],
  author: { type: String, required: true },
  likes: { type: Number },
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
