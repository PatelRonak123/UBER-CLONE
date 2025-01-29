const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use("/", (req, res) => {
  res.send("Hello Server");
});

module.exports = app;
