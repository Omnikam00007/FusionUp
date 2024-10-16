var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/login", (req, res) => {
  res.render("login")
})

router.get("/signup", (req, res) => {
  res.render("signUp")
})

router.get("/groups", (req, res) => {
  res.render("groups");
});

router.get("/form", (req, res) =>{
  res.render("form")
});

router.get("/join", (req, res) =>{
  res.render("join")
});
module.exports = router;
