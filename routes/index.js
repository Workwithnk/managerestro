const express = require("express");
const routes = express.Router();
const recipeModel = require("../schema/RecipeSchema");
const registerModel = require("../schema/RegisterSchema");
const GenerateToken = require("../utils/GenerateToken");

routes.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    if (email && password) {
      const savedUser = await registerModel.findOne({ email, password });
      res.status(200).json({ message: savedUser });
    }
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
    if (name && email && password && phone) {
      const newCreatedUser = await registerModel({
        name,
        email,
        password,
        phone,
        isAdmin: false,
        token: token,
      });

      const myUser = await newCreatedUser.save();
      res.status(201).json({ message: myUser });
    }
  } catch (e) {
    res.status(400).json({ message: e });
  }
});

routes.post("/additem", async (req, res) => {
  let { category, image, description, price, title, email, discount } =
    req.body;

  try {
    if (
      category &&
      image &&
      description &&
      price &&
      title &&
      email &&
      discount
    ) {
      let newRecipe = await recipeModel({
        category,
        image,
        description,
        price,
        title,
        email,
        discount,
      });
      let savedRecipe = await newRecipe.save();
      res.status(201).json({ data: savedRecipe });
    }
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

routes.get("/discount/:offerPercentage", async (req, res) => {
  let percentage = req.params.offerPercentage;
  try {
    let allOfferedData = await recipeModel.find({ discount: percentage });
    res.json({ data: allOfferedData });
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

module.exports = routes;
