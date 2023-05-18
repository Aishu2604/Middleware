const path = require("path");
const express = require("express");
const rootDir = require("../util/path");
const router = express.Router();

// /admin/add-product => GET
router.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});

// /admin/add-product => POST
router.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.redirect("/success");
});

module.exports = router;
