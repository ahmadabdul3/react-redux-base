var mongoose = require('mongoose');

var ChatMessageSchema = new mongoose.Schema(
  {
  	text: String,
  	senderId: String,
  	receiverId: String,
  },
  {
    timestamps: true,
  }
);

// CommentSchema.methods.upvote = function(cb) {
//   this.upvotes += 1;
//   this.save(cb);
// };
// CommentSchema.methods.downvote = function(cb) {
//   this.upvotes -= 1;
//   this.save(cb);
// };

mongoose.model('ChatMessage', ChatMessageSchema);
