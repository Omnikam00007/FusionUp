const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const SignUpHandler = async (req, res, next) => {
  console.log(req.body);
  const {
    fullName,
    mobileNo,
    username,
    email,
    skills,
    pursuingYear,
    division,
    rollNo,
    password,
  } = req.body;
  const userData = new User({
    fullName,
    mobileNo,
    username,
    email,
    skills: skills,
    password: await bcrypt.hash(password, 10),
    pursuingYear,
    division,
    rollNo,
  });

  await userData.save();
  await res.redirect("/login")
};

const loginHandler = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });
  console.log(password);
  
  const isValidPassword = await bcrypt.compare(password, user.password);
  req.session.username = user.username;
  if (!isValidPassword) {
    return res.redirect("/login");
  } else {
    return res.redirect("/")  
  }
};

module.exports = {
  SignUpHandler,
  loginHandler
};
