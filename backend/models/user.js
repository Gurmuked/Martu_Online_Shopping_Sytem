const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true, sparse: true },
  phone: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['buyer','seller','admin'], default: 'seller' },

  // Verification fields
  isPhoneVerified: { type: Boolean, default: false },
  phoneOtp: {
    code: String,
    expiresAt: Date,
  },

  documents: {
    idUrl: String,        // National ID or Kebele upload URL
    kebeleUrl: String,    // optional kebele letter
    selfieUrl: String,    // selfie image URL
  },

  verification: {
    status: { type: String, enum: ['not_requested','pending','approved','rejected'], default: 'not_requested' },
    adminNote: String,
    verifiedAt: Date,
    verifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // admin id
  },

  trustScore: { type: Number, default: 0 },
  verifiedBadge: { type: Boolean, default: false },
},
{ timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
