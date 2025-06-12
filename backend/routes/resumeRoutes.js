const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { uploadResume } = require('../controllers/uploadResumes'); // ✅ Only import uploadResume
const multer = require('multer');
const {getUserResumes} = require('../controllers/getResumes')

const upload = multer({ dest: 'uploads/' }); // ✅ Define multer upload only once

router.post('/upload', authMiddleware, upload.single('resume'), uploadResume);
// GET /api/resumes
router.get('/', authMiddleware, getUserResumes);

module.exports = router;
