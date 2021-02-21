import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  newPost: function(postData) {
    console.log("post made");
    return axios.post("/api/posts/", postData)
  },
  getAllPosts: function() {
    return axios.get("/api/posts");
  },
  getPosts: function(id) {
    return axios.get("/api/posts/", + id);
  },
  // deletePosts: function(id) {
  //   return axios.get("/api/posts/", + id);
  // },
  // ---------------------------------------------------
  getAllUsers: function() {
    console.log("GET ALL USERS");
  },
  getUser: function(userData) {
    console.log("GET ONE USER" + JSON.stringify(userData));
    return axios.post("/auth/user", userData);
  },
  loginUser: function(userData) {
    console.log("LOGIN USER" + JSON.stringify(userData));
    return axios.post("/auth/login", userData)
  },
  logoutUser: function(userData) {
    console.log("LOGOUT USER" + JSON.stringify(userData));
    localStorage.clear();
    return;
  },
  signUpUser: function(userData) {
    console.log("REGISTER USER" + JSON.stringify(userData));
    return axios.post("/auth/register", userData)
  }
};
