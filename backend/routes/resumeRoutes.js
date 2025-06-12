const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { upload, uploadResume } = require('../controllers/uploadResumes');

router.post('/upload', authMiddleware, upload.single('resume'), uploadResume);

module.exports = router;
