import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
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
    // return axios.post("/auth/logout", userData)
  },
  signUpUser: function(userData) {
    console.log("REGISTER USER" + JSON.stringify(userData));
    return axios.post("/auth/register", userData)
  }
};
