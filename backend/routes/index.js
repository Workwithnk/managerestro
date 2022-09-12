const express = require("express");
const routes = express.Router();
const loginModel = require("../schema/LoginSchema");

const registerModel = require("../schema/RegisterSchema");
const GenerateToken = require("../utils/GenerateToken");

routes.get("/", (req, res) => {
  res.json({ message: "Home page" });
});

routes.post("/login", async (req, res) => {
  let { email, password } = req.body;

  try {
    // const newUser = await loginSchema({
    //   email,
    //   password,
    // });
    const savedUser = await registerModel.findOne({ email: email });
    res.status(200).json({ message: savedUser });
  } catch (e) {
    res.status(400).send("Something went wrong");
  }
});

routes.get("/register", async (req, res) => {
  try {
    let allLoggedInUser = await registerModel.find();
    res.status(200).json({ allLoggedInUser });
  } catch (e) {
    res.status(400).json({ message: e });
  }
});

routes.post("/register", async (req, res) => {
  let { name, email, password, phone } = req.body;

  const token = GenerateToken();

  try {
    const newCreatedUser = await registerModel({
      name,
      email,
      password,
      phone,
      isAdmin: false,
      token: token,
    });
    res.cookie("generatedCookie", token, { httpOnly: true, secure: true });
    const myUser = await newCreatedUser.save();
    res.status(201).json({ message: myUser });
  } catch (e) {
    res.status(400).json({ message: e });
  }
});

module.exports = routes;
