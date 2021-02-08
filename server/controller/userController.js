const db = require("../models");

module.exports = {
  getUserInfo: (req, res) => {
    const { email } = req.body
    // console.log(req.body)
    db.User.find({ 'email': email }, (err, found) => {
      if (found.length === 0) {
        res.send("User Does Not Exist")
      } else {
        res.send(found);
      }
    })
  }, 
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
  },
  auth: function(req, res, next) {
    // console.log("#################################auth function user controller")
		// console.log(req.body);
		next();
  },
  authenticate: (req, res) => {
    // console.log("authenticate function user controller")
    let user = JSON.parse(JSON.stringify(req.body)); // hack
    // console.log(req.body)
    console.log("****  In authenticate ****");
    const cleanUser = Object.assign({}, user);
		if (cleanUser) {
			// console.log(`Deleting ${cleanUser.password}`);
			delete cleanUser.password;
		}
    res.json({ user: cleanUser });
    // console.log(user)
	}
}