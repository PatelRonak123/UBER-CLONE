const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./database/db");
connectDB();
const userRoute = require("./routes/user.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRoute);
app.get("/", (req, res) => {
  res.send("Hello Ronak");
});

module.exports = app;
