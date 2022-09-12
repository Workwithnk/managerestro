const mongoose = require("mongoose");
const GenerateToken = require("../utils/GenerateToken");

const registerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
});

const registerModel = mongoose.model("register", registerSchema);

const generateToken = GenerateToken();

module.exports = registerModel;
