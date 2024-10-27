const express = require("express");
const { SignUpHandler, loginHandler } = require("../controllers/authController.js");
const passport = require("passport");

const router = express.Router();

router.post("/signup", SignUpHandler);

router.post("/login", loginHandler);

module.exports = router;
