const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String},
    description: { type: String, required: true },
    thumbnail: { type: String},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
