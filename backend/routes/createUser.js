import express from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
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

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      user_type,
    });

    await newUser.save();

    // Sign a JWT
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.status(201).json({ message: "Registration successful!", token, user: { username: newUser.username, email: newUser.email, user_type: newUser.user_type } });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error!" });
  }
});



export default router;
