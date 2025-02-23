const express = require("express");
const Post = require("../models/post");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });


// **Create a New Post**
router.post("/create", upload.single("thumbnail"), async (req, res) => {
  try {
    console.log("📥 Request Body:", req.body);
    console.log("📁 Uploaded File:", req.file);
    const { title, category, description } = req.body;
    const thumbnailPath = req.file ? `/uploads/${req.file.filename}` : null;
    const newPost = new Post({
      title,
      category,
      description,
      thumbnail: thumbnailPath,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {

    console.error("Error creating post:", error);
    res.status(500).json({ error: error.message });
  }
});

// Edit post
router.put("/edit/:id", upload.single("thumbnail"), async (req, res) => {
  try {
    console.log("📥 Edit Request Body:", req.body);
    console.log("📁 Uploaded File:", req.file);

    const { title, category, description } = req.body;
    let updatedData = { title, category, description };

    // If a new file is uploaded, update the thumbnail
    if (req.file) {
      updatedData.thumbnail = `/uploads/${req.file.filename}`;
    }

    // Find and update the post
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, updatedData, { new: true });

    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json(updatedPost);
  } catch (error) {
    console.error("❌ Error updating post:", error);
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

router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
