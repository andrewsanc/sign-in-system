const express = require("express");
const bcrypt = require("bcrypt");
const colors = require("colors");
const connectDB = require("./config/db");
const User = require("./models/user");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();
connectDB();

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
      res.redirect("/dashboard");
    } else {
      res.redirect("/");
    }
  } catch (err) {
    console.error(err);
  }
});

app.post("/register", async (req, res) => {
  const { email, firstName, lastName, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    await user.save();

    res.redirect("/");
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, console.log(`Server is running on port ${port}`));
