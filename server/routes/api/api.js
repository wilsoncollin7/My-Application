const router = require("express").Router();
const postController = require("../../controller/postController");

router.route("/")
  .post(postController.newPost)
  .get(postController.getAllPosts);

router.route("/:id")
  .get(postController.getPosts)
  // .put(postController.updateOne)
  // .delete(postController.remove);

module.exports = router;
