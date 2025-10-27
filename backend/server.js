import express from 'express';
import dotenv from 'dotenv';
import connectDB from'./config/connectDB.js';

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('server is running ....');
})

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});