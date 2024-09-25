const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const flash = require("req-flash")
const User = require("./models/userModel")

const authRouter = require("./routes/auth");
const indexRouter = require("./routes/index");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "ryouikiTenkai",
  }),
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/", indexRouter);
app.use("/auth", authRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

const mongoose = require("mongoose");

const link = "mongodb://localhost:27017/FusionUp"
mongoose
  .connect(link)
  .then(() => console.log("Connected"))
  .catch((err) => console.error("Connection error:", err));


module.exports = app;
