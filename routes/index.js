var express = require("express");
var router = express.Router();
var path = require("path");
var fs = require("fs");

let people = [];

/* GET home page. */
router.get("/", function (req, res, next) {
  //how to read data from people.json
  const filePath = path.join(__dirname, "../public/data/people.json");
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error("error", err);
      return res.status(500).send("error");
    }
    const people = JSON.parse(data);
    console.log(people);
    //read people file and render it as people
    res.render("index", { title: "Express", people: people[0].name});
  });
});

module.exports = router;
