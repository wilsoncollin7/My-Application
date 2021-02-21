const router = require("express").Router();
const postController = require("../../controller/postController");

router.route("/")
  .post(postController.newPost)
  .get(postController.getAllPosts);

router.route("/:id")
  .get(postController.getPosts)
  .delete(postController.deletePost);

module.exports = router;
