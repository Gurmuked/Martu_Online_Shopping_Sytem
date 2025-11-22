import express from "express";
import User from "../models/Users.js"; // Make sure path is correct

const router = express.Router();

// GET all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from DB
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error!" });
  }
});

export default router;
