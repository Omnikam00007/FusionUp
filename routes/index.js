var express = require("express");
var router = express.Router();
const { groupHandler } = require("../controllers/groupController");
const GroupRegistration = require("../models/groupModel");

router.get("/", async (req, res) => {
    const data = await GroupRegistration.find({isActive: true});
    res.render("index", {data});
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signUp");
});

router.get("/groups", async (req, res) => {
  const username = req.session.username;
  const data = await GroupRegistration.find({ username: username });
  res.render("groups", {data});
});

router.get("/form" ,(req, res) => {
  res.render("form");
});

router.post("/form", groupHandler);

router.get("/join", (req, res) => {
  res.render("join");
});

router.post("/toggle-status/:id", async (req, res) => {
  const id = req.params.id;
  const data = await GroupRegistration.findById(id);
  data.isActive = !data.isActive;

  await data.save();
});

router.delete('/delete-group/:id', async (req, res) => {
  try {
      const group = await GroupRegistration.findByIdAndDelete(req.params.id);
      if (!group) {
          return res.status(404).send('Group not found');
      }
      res.send('');
  } catch (error) {
      console.error('Error deleting group:', error);
      res.status(500).send('Error deleting group');
  }
});

module.exports = router;
