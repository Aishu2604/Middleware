const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path");
const controller = require("../controllers/product");

router.get("/", controller.getShopFile);

module.exports = router;
