const mongoose = require("mongoose");
function connectDB() {
  const MONGO_URI =
    process.env.MONGO_URI || "mongodb://127.0.0.1:27017/uberclone";
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => console.log(err));
}

module.exports = connectDB;
