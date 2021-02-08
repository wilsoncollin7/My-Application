module.exports = {
  register: (req, res) => {
    const { fisrtName, lastName, email, password } = req.body;
    console.log(req.body);
    return res.json(req.body);
  }
}