const pool = require('../config/db');

const getUserResumes = async (req, res) => {
  try {
    const { id } = req.user;
    const result = await pool.query('SELECT * FROM resumes WHERE user_id = $1', [id]);
    res.json(result.rows);
  } catch (err) {
    console.error('Error retrieving resumes:', err);
    res.status(500).json({ error: 'Server error' });
  }
};
module.exports = {getUserResumes}