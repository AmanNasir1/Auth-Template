const express = require("express");
const User = require("../models/user-model");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/signup", async (req, res) => {
  // res.json({ message: "Register Success" });

  const exist = await User.findOne({ email: req.body.email });
  if (exist) return res.send({ error: "Email Already Exist " });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    await user.save();
    res.send({ success: `User saved successfully. Id is ${user._id}` });
  } catch (err) {
    return res.send({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  // res.json({ message: "Login Success" });

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.send({ error: "Email Not Found" });

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.send({ error: "Password is Incorrect", errortype: "password" });
  }
  res.status(200).send({ success: "Login Succesfull" });
});

module.exports = router;
