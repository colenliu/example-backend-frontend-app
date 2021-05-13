var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/signup", async (req, res) => {
  const { email, firstName } = req.body;

  if (email && firstName) {
    console.log("user recognized!");
    return res.sendStatus(200);
  }
});

module.exports = router;
