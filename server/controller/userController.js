const db = require("../models");

module.exports = {
  register: (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    console.log(req.body);
    db.User.findOne({ 'email': email }, (err, userMatch) => {
      if (userMatch) {
        console.log(`User Already Exists at ${email}`);
        return res.send("User Already Exists");
      }
      const newUser = new db.User({
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'password': password
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        return res.json(savedUser);
      });
    });
  }
}