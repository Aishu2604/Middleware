const path = require("path");

const express = require("express");

const controller = require("../controllers/product");

const rootDir = require("../util/path");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product",controller.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", controller.postAddProduct);

module.exports = router;
