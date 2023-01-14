const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send("<h1>Hello Developer!</h1>");
});

app.get("/home", function (req, res) {
  //   res.setHeader("Content-Type", "text/html");
  //   res.send("<h1>Welcome Home!</h1>");
  res.sendFile(__dirname + "/view" + "/index.html");
});

app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/view" + "/about.html");
});

app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/view" + "/contact.html");
});

app.get("/landing", function (req, res) {
  res.sendFile(__dirname + "/view" + "/landing.html");
});

app.get("/person", function (req, res) {
  res.setHeader("Content-Type", "text/json");
  res.json({ name: "Rei", height: "170cm" });
});

app.listen(5001);
