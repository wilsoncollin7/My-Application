const db = require("../models");

module.exports = {
  getAllPosts: (req, res) => {
    console.log("get all posts");
    db.Post
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }, 
  newPost: (req, res) => {
    console.log(req.body);
    db.Post
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}
