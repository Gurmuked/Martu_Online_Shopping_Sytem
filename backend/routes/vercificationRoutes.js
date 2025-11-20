// const express = require('express');
// const router = express.Router();
// const User = require('./models/User');
// const auth = require('../middleware/auth'); // admin-protected

// // User requests verification (after uploading docs)
// router.post('/request/:userId', async (req, res) => {
//   const user = await User.findById(req.params.userId);
//   if (!user) return res.status(404).json({ ok:false });

//   user.verification.status = 'pending';
//   await user.save();

//   // Optionally notify admin via email or push
//   res.json({ ok: true, message: 'Verification requested' });
// });

// // Admin: list pending verifications
// router.get('/pending', auth.isAdmin, async (req, res) => {
//   const pending = await User.find({ 'verification.status': 'pending' }).select('name phone documents verification');
//   res.json({ ok: true, pending });
// });

// // Admin: approve
// router.post('/approve/:userId', auth.isAdmin, async (req, res) => {
//   const user = await User.findById(req.params.userId);
//   user.verification.status = 'approved';
//   user.verification.verifiedAt = new Date();
//   user.verification.verifiedBy = req.user._id;
//   user.verifiedBadge = true;
//   user.trustScore = (user.trustScore || 0) + 20; // example
//   await user.save();

//   // notify user by SMS/email
//   res.json({ ok: true, message: 'User approved' });
// });

// // Admin: reject
// router.post('/reject/:userId', auth.isAdmin, async (req, res) => {
//   const { reason } = req.body;
//   const user = await User.findById(req.params.userId);
//   user.verification.status = 'rejected';
//   user.verification.adminNote = reason;
//   user.verifiedBadge = false;
//   await user.save();
//   // notify
//   res.json({ ok: true, message: 'User rejected' });
// });

// module.exports = router;
