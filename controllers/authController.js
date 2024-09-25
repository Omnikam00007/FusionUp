const User = require("../models/userModel");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

passport.use(new localStrategy(User.authenticate()));


const SignUpHandler = async (req, res, next) => {
  console.log(req.body)
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
    skills: skills, // Assuming skills come as a comma-separated string
    pursuingYear,
    division,
    rollNo,
    password,
  });
  User.register(userData, req.body.password).then(() => {
    req.flash(
      "successMessage",
      "Registration successful! You're all set to log in now.",
    );
    res.redirect("/login");
  });
};

module.exports = {
  SignUpHandler,
};
