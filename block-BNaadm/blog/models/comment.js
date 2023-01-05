var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    text: { type: String, required: true },
    articleId: { type: Schema.Types.ObjectId, required: true, ref: 'Article'   },
    author: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', commentSchema);
