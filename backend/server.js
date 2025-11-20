import express from 'express';
import dotenv from 'dotenv';
import connectDB from'./config/connectDB.js';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", authRoutes);

app.get('/', (req, res) => {
  res.send('server is running 123....');
})

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});