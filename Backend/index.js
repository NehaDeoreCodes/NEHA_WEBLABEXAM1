const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Schema = mongoose.Schema;
mongoose.connect("mongodb://127.0.0.1:27017/User").then(() => {
  console.log("connected");
});
app.use(express.json());
app.use(cors());
const UserSchema = new Schema({
  id: Number,
  name: String,
  addr: String,
  price:Number
  
});
const userSchema = new Schema({
  empid: Number,
  name: String,
  email: String,
  password: String,
});

const userModel = mongoose.model("users", userSchema);
app.get("/users", async (req, res) => {
  var ans = await userModel.find();
  res.send(ans);
});

app.post("/users", async (req, res) => {
  try {
    var instance = new userModel(req.body);
    await instance.save();
    res.send("user added successfully");
  } catch (err) {
    console.log(err);
  }
});

const userMode = mongoose.model("User", UserSchema);
app.get("/User", async (req, res) => {
  var ans1 = await userModel.find();
  res.send(ans1);
});

app.post("/User", async (req, res) => {
  try {
    var instance1 = new userModel(req.body);
    await instance1.save();
    res.send("User added successfully");
  } catch (err) {
    console.log(err);
  }
});
app.listen(9073);
