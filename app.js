const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;

//setting template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// setting body-parser
app.use(express.urlencoded({ extended: true }));

// setting routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  console.log("req.body", req.body);
  res.render("index");
});

app.listen(port, () => {
  console.log(`The Express Server is running on http://localhost:${port}`);
});
