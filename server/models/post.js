const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.promise = Promise;

// Define userSchema
const postSchema = new Schema({
	post: { type: String, unique: false },
	user: { type: String, unique: false }
});

// Create reference to User & export
const Post = mongoose.model('Posts', postSchema);
module.exports = Post;
