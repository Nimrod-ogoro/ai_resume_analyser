const pool = require('../config/db'); // Adjust the path as necessary

const findUserByEmail = async (email) => {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0];
};

const createUser = async ({ name, email, password }) => {
  const result = await pool.query(
    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
    [name, email, password]
  );
  return result.rows[0];
};

module.exports = { findUserByEmail, createUser };

