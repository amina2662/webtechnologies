var express = require('express');
var router = express.Router();
var Product = require("../models/product")
/* GET home page. */
router.get('/', async function(req, res, next) {
  let products = await Product.find();
  console.log(products)
  res.render("product/list", {title: "List of Products Available",products});
});

router.get("/add", async function(req, res, next) {
    res.render("product/add");
  });

router.post("/add", async function(req, res, next) {
    // console.log(req.body);
    let product = new Product(req.body);
    await product.save();
    res.redirect("/product");
  });
  router.get("/delete/:id", async function (req, res, next) {
    let product = await Product.findByIdAndDelete(req.params.id);
    res.redirect("/product");
  });


module.exports = router;