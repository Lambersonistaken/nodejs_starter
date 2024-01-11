var express = require("express");
var router = express.Router();

const isAuthenticated = true;

router.all("*", (req, res, next) => {
  if (isAuthenticated) {
    next();
  } else {
    res.status(401).json({
      message: "Unauthorized",
      error: "Not Authenticated",
    });
  }
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a success");
});

module.exports = router;
