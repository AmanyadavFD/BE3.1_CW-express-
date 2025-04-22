const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

app.get("/contact", (req, res) => {
  res.send("This is the contact page");
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
});
