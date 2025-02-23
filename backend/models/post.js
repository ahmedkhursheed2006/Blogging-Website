const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String},
    description: { type: String, required: true },
    thumbnail: { type: String},
    authorID: {
      type: mongoose.Schema.Types.ObjectId ,
      ref:"User",
      required: true
    },
    authorName: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
