const express = require('express');
const router = express.Router();
const postController = require("../../controller/postController");

// this route is just used to get the user basic info
router.get('/getPosts', postController.getAllPosts);
router.post('/newPost', postController.newPost);

module.exports = router;
