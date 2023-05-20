const path = require("path");
const express = require("express");
const rootDir = require("../util/path");
const router = express.Router();
const controller = require("../controllers/contact");

// /admin/add-product => GET
router.get("/contact-us", controller.getContact);

// /admin/add-product => POST
router.post("/contact-us", controller.postContact);

module.exports = router;
