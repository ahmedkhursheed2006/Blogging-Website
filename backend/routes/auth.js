const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User").default;

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    console.log("Received Signup Request", req.body);

    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: { id: newUser._id, name: newUser.name, email: newUser.email }
    });

  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});


// Login Route
router.post("/login", async (req, res) => {
  try {
    console.log("Received Login Request", req.body);

    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });

  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});


//Google Route

router.post("/google", async (req, res) => {
  try {
    console.log("Received Google Auth Request", req.body);

    const { name, email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Check if the user already exists
    let user = await User.findOne({ email });

    if (!user) {
      // If user does not exist, create a new one (without password)
      user = new User({ name, email, password: " ", authType: "google" , });
      await user.save();
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({
      message: "Google authentication successful",
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });

  } catch (err) {
    console.error("Google Auth Error:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});


module.exports = router;
