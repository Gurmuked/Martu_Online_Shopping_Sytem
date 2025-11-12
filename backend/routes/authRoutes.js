const express = require('express');
const router = express.Router();
const User = require('./models/User');
const { generateOtp, sendSms } = require('../utils/otpService');
const bcrypt = require('bcryptjs');

// Register (create user + hashed password)
router.post('/register', async (req, res) => {
  try {
    const { name, phone, password, role } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, phone, passwordHash, role });
    res.status(201).json({ ok: true, userId: user._id });
  } catch (err) { res.status(400).json({ ok:false, message: err.message }); }
});

// Send OTP
router.post('/send-otp', async (req, res) => {
  const { phone } = req.body;
  const code = generateOtp();
  const expiresAt = new Date(Date.now() + 5*60*1000); // 5 min

  const user = await User.findOne({ phone });
  if (!user) return res.status(404).json({ ok:false, message: 'User not found' });

  user.phoneOtp = { code, expiresAt };
  await user.save();

  if (process.env.TWILIO_SID && process.env.TWILIO_AUTH_TOKEN) {
    await sendSms(phone, `Your AgroLink OTP is: ${code}`);
  } else {
    // DEV only: return OTP to client (do NOT use in production)
    console.log(`DEV OTP for ${phone}: ${code}`);
  }

  res.json({ ok: true, message: 'OTP sent (or logged in dev)' });
});

// Verify OTP
router.post('/verify-otp', async (req, res) => {
  const { phone, code } = req.body;
  const user = await User.findOne({ phone });
  if (!user || !user.phoneOtp) return res.status(400).json({ ok:false, message: 'No OTP pending' });

  if (new Date() > user.phoneOtp.expiresAt) {
    user.phoneOtp = null;
    await user.save();
    return res.status(400).json({ ok:false, message: 'OTP expired' });
  }

  if (user.phoneOtp.code !== code) {
    return res.status(400).json({ ok:false, message: 'Invalid OTP' });
  }

  user.isPhoneVerified = true;
  user.phoneOtp = null;
  await user.save();

  res.json({ ok: true, message: 'Phone verified' });
});

module.exports = router;
