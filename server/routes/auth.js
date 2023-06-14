const express = require("express");
const User = require("../models/user-model");

const router = express.Router();

router.post("/signup", (req, res) => {
  res.json({ message: "Register Success" });
});

router.post("/login", (req, res) => {
  res.json({ message: "Login Success" });
});

module.exports = router;
