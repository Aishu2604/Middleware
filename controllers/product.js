const rootDir = require("../util/path");
const Product = require("../models/product");
const path = require("path");

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
  console.log(req.body);
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getShopFile = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.sendFile(path.join(rootDir, "views", "shop.html"));
  });
  // console.log(rootDir, "PATH");
};
