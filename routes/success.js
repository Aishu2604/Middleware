const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path");
const controller = require("../controllers/contact");

router.get("/success", controller.getSuccess);

module.exports = router;
