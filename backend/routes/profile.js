const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");

router.get("/", authenticateToken, (req, res) => {
  const user = req.user;
  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    subscription: user.subscription,
    created_at: user.created_at,
  });
});

module.exports = router;
