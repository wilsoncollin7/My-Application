const express = require('express');
const router = express.Router();
const userController = require("../../controller/userController");

// this route is just used to get the user basic info
router.post('/user', userController.getUserInfo)
router.post('/login', userController.auth, userController.authenticate);
// router.post('/logout', userController.logout);
router.post('/register', userController.register);

module.exports = router;
