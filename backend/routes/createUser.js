import express from "express";
import User from "../models/Users.js";


const router = express.Router();

// REGISTER API
router.post("/register", async (req, res) => {
  try {
    const { username, email, password, confirm_password, user_type } = req.body;

    // Check empty fields
    if (!username || !email || !password || !confirm_password || !user_type) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // Password match
    if (password !== confirm_password) {
      return res.status(400).json({ message: "Passwords do not match!" });
    }

    // Check email exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered!" });
    }

    // Create user
    const newUser = new User({
      username,
      email,
      password,
      user_type,
    });

    await newUser.save();

    res.status(201).json({ message: "Registration successful!" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error!" });
  }
});



export default router;
