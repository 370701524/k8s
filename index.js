const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./models/user");
const initData = require("./utils");

mongoose
  .connect("mongodb://192.168.186.130:27017/work", {})
  .then(() => {
    console.log("Database Connected");
    initData();
  })
  .catch((err) => console.log(err));

const app = express();

app.get("/", async (req, res) => {
  res.send({ msg: "hello" });
});

app.get("/users", async (req, res) => {
  const data = await userModel.find();
  res.send({ msg: "success", data });
});

app.listen(8008, () => console.log("express is work"));
