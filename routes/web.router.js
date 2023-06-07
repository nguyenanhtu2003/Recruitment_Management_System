const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index.controller");

router.get("/", indexController.getIndex);
router.get("/job", indexController.getJob);
/* Auth */
router.get("/register", async (req, res, next) => {
  res.render("auth/register.view.ejs");
});

router.get("/login", async (req, res, next) => {
  res.render("auth/login.view.ejs");
});

module.exports = router;
