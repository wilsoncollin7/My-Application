const path = require("path");
const router = require('express').Router();
const authRoutes = require('./auth');

// Auth Routes
router.use('/auth', authRoutes);

// if no API routes are hit, send to react app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
