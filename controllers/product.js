const rootDir = require("../util/path");

const path = require("path");

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
  }

  exports.getShopFile = (req, res, next) => {
    console.log(rootDir, "PATH");
    res.sendFile(path.join(rootDir, "views", "shop.html"));
  }
