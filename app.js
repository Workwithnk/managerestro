const express = require("express");
require("./db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes/index"));
app.use(cookieParser());

if (process.env.NODE_ENV == "production") {
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
