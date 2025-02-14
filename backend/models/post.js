const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String }, // Assuming a URL or file path
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
