// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const cloudinary = require('../config/cloudinary');
// const User = require('./models/User');
// const { CloudinaryStorage } = require('multer-storage-cloudinary');

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: 'agrolink/verification',
//     allowed_formats: ['jpg','jpeg','png','pdf'],
//   }
// });

// const parser = multer({ storage });

// router.post('/upload/:type', parser.single('file'), async (req, res) => {
//   // :type => id / kebele / selfie
//   const userId = req.body.userId;
//   const type = req.params.type;
//   if (!req.file) return res.status(400).json({ ok:false, message: 'No file' });

//   const user = await User.findById(userId);
//   if (!user) return res.status(404).json({ ok:false, message: 'User not found' });

//   // file.path contains Cloudinary URL
//   if (type === 'id') user.documents.idUrl = req.file.path;
//   else if (type === 'kebele') user.documents.kebeleUrl = req.file.path;
//   else if (type === 'selfie') user.documents.selfieUrl = req.file.path;
//   else return res.status(400).json({ ok:false, message: 'Invalid type' });

//   await user.save();
//   res.json({ ok: true, url: req.file.path });
// });

// module.exports = router;
