const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

// **Create a New Post**
router.post("/", async (req, res) => {
  try {
    console.log("Request body received:", req.body);
    const { title, category, description, thumbnail } = req.body;

    const newPost = new Post({
      title,
      category,
      description,
      thumbnail,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    
    console.error("Error creating post:", error); 
    res.status(500).json({ error: error.message });
  }
});

// **Get All Posts**
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// **Get a Single Post by ID**
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
