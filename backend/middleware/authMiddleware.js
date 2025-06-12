const jwt = require("jsonwebtoken");
const pool = require("../config/db"); // Adjust the path as necessary

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userQuery = await pool.query("SELECT * FROM users WHERE id = $1", [decoded.id]);

    if (userQuery.rows.length === 0) {
      return res.status(401).json({ message: "Invalid token." });
    }

    req.user = userQuery.rows[0]; // Attach user data to the request
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid or expired token." });
  }
};

module.exports = authenticateToken;
