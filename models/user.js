const mongoose = require("mongoose");

const user = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

module.exports = mongoose.model("user", user);
