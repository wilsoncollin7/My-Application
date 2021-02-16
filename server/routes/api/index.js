const router = require("express").Router();
const apiRoutes = require("./api");

// trails routes
router.use("/posts", apiRoutes);

module.exports = router;
