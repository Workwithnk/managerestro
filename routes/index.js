const express = require("express");
const routes = express.Router();
const recipeModel = require("../schema/RecipeSchema");
const registerModel = require("../schema/RegisterSchema");
const GenerateToken = require("../utils/GenerateToken");

routes.get("/", (req, res) => {
  res.json({ message: "Home page" });
});

routes.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
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
    // res.cookie("sid", token, { httpOnly: true });

    const myUser = await newCreatedUser.save();
    res.status(201).json({ message: myUser });
  } catch (e) {
    res.status(400).json({ message: e });
  }
});

routes.post("/additem", async (req, res) => {
  let { category, image, description, price, title, email } = req.body;

  try {
    let newRecipe = await recipeModel({
      category,
      image,
      description,
      price,
      title,
      email,
    });
    let savedRecipe = await newRecipe.save();
    res.status(201).json({ data: savedRecipe });
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

routes.get("/additem", async (req, res) => {
  try {
    let allFoodData = await recipeModel.find();
    res.status(200).json({ foodData: allFoodData });
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

routes.post("/loggeduser", async (req, res) => {
  const { token } = req.body;
  try {
    let loggedUserDetails = await registerModel.findOne({ token });
    res.status(200).json({ loggedUser: loggedUserDetails });
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

module.exports = routes;
