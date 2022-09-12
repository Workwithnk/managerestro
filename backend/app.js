const express = require("express");
require("./db");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes/index"));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
