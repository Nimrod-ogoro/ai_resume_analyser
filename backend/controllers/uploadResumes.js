const path = require('path');
const multer = require('multer');

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/resumes');
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// Route handler
const uploadResume = async (req, res) => {
  try {
    const file = req.file;
    const userId = req.user.id; // assuming JWT auth middleware sets req.user

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }

    // Save file info to DB
    const result = await req.db.query(
      `INSERT INTO resumes (user_id, filename, filepath, mimetype) VALUES ($1, $2, $3, $4) RETURNING *`,
      [userId, file.filename, file.path, file.mimetype]
    );

    res.status(201).json({ message: 'Resume uploaded', resume: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Upload failed.' });
  }
};

module.exports = {
  upload,
  uploadResume
};
