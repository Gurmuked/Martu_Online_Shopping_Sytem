import express from "express";
import User from "../models/Users.js"; 

// LOGIN API
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check empty inputs
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required!" });
    }

    // Check user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found! Please register." });
    }

    // Check password (plain text version)
    if (user.password !== password) {
      return res.status(400).json({ message: "Incorrect password!" });
    }

    // Success
    res.status(200).json({
      message: "Login successful!",
      user: {
        username: user.username,
        email: user.email,
        user_type: user.user_type,
      }
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error!" });
  }
});
