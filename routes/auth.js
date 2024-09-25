const express = require("express");
const { SignUpHandler } = require("../controllers/authController.js");
const passport = require("passport");

const router = express.Router();

router.post("/signup", SignUpHandler);

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/",
    failureFlash: true,
  }),
  function (req, res) {
    res.redirect("/");
  }
);

module.exports = router;
