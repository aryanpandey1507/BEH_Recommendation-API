const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
  blogId: 
          { type: mongoose.Schema.ObjectId,
             ref:"Blog",
             required: true },

  userId: {
    type:mongoose.Schema.ObjectId,
    ref:"User",
    required:true
  },

  commentText: { type: String, required: true },
});

module.exports = mongoose.model(
  "Comments",
  CommentSchema
);
