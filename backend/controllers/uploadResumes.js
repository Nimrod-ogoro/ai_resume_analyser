const pool = require("../config/db");

const uploadResume = async (req, res) => {
  try {
    const { id } = req.user; // get user from JWT middleware
    const file = req.file;

    if (!file) return res.status(400).json({ error: "No file uploaded." });

    const { filename, path: filepath, mimetype } = file;

    const result = await pool.query(
      "INSERT INTO resumes (user_id, filename, filepath, mimetype) VALUES ($1, $2, $3, $4) RETURNING *",
      [id, filename, filepath, mimetype]
    );

    res.status(201).json({ resume: result.rows[0] });
  } catch (err) {
    console.error("Upload error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { uploadResume };

