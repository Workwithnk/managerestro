const express = require("express");
require("./db");
const loginModel = require("./schema/LoginSchema");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home page");
});

app.post("/login", async (req, res) => {
  let { getName, getEmail, getPass } = req.body;
  console.log(req.body);
  try {
    const newUser = await loginModel({
      name: getName,
      email: getEmail,
      password: getPass,
    });
    const saveToDB = await newUser.save();
    console.log(saveToDB);
    res.status(201).send("User Logged In..");
  } catch (e) {
    res.status(400).send("Something went wrong");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
