const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();
connectDB();

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/login", (req, res) => {
  res.send("login");
});

app.listen(port, console.log(`Server is running on port ${port}`));
