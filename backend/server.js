const express = require('express');
const cors = require('cors');
require('dotenv').config();
const profileRoutes = require("./routes/profile");
const resumeRoutes = require('./routes/resumeRoutes');
const pool = require('./config/db');
const app = express();
 
// Middleware
app.use(cors());
app.use(express.json());



// Routes
const authRoutes = require('./routes/auth.routes');
app.use('/api/auth', authRoutes);
app.use("/api/profile", profileRoutes);

app.use('/api/resumes', resumeRoutes);

pool.connect()
  .then(() => console.log('✅ PostgreSQL connected successfully!'))
  .catch(err => console.error('❌ PostgreSQL connection error:', err));
// Database connection



app.get('/', (req, res) => res.send('API Running...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
