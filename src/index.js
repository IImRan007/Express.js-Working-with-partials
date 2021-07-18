const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const hbs = require("hbs");

// Setting views directory
const staticPath = path.join(__dirname, "../views");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// setting view engine
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

// template engine route
app.get("/", (req, res) => {
  res.render("index");
});

// Built-in Middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Hello from express server");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
