import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/connectDB.js';
import registerRoute from './routes/createUser.js';
import usersRoute from './routes/getUsers.js';
import loginRoute from './routes/login.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is running' });
});

// mount routes under /api
// Mount user related routes under /api/users
app.use('/api/users', registerRoute);
app.use('/api/users', loginRoute);
app.use('/api/users', usersRoute);

// basic error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});

// start server after DB connects
const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
};

start();
