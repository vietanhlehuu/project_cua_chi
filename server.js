const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.set("view engine", "ejs");
// Public tat ca cac file trong thu muc views
app.use("/public", express.static(path.join(__dirname, "views")));

// Quan tam tu dong lenh nay tro xuong
app.get("/", function (req, res) {
  res.render("ph");
});

app.get(
  "/place1",
  function (req, res, next) {
    // xac thuc nguoi dung
    const condition = true;
    if (condition) {
      next();
    } else {
      res.redirect("/");
    }
  },
  function (req, res) {
    res.render("place1");
  }
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
