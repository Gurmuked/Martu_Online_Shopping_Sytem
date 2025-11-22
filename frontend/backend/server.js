import express from 'express';
import dotenv from 'dotenv';
import connectDB from'./config/connectDB.js';
import cors from 'cors';
import authRoutes from './routes/createUser.js';
import Users from './routes/getUsers.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes

//Create Users
app.use("/api", authRoutes);
//Get Users
app.use('/api', Users)

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});