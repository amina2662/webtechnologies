var express = require('express');
var router = express.Router();
var upcomings = require("../models/upcomingbooks");

/* GET home page. */
router.get('/', async function(req, res, next) {
  let books = await upcomings.find();
  console.log(books);
  res.render('upcomingbooks', {  books });
});
router.get('/delete/:id', async function(req, res, next) {
  console.log(req.params.id)
  let cart = req.cookies["cart"];
  if (!cart) 
     cart = [];
  let index = cart.find((c) => c == req.params.id);
  cart.splice(index, 1);
  res.cookie("cart", cart);
  return res.redirect("back");
});
router.get('/:id', async function(req, res, next) {
let cart = req.cookies.cart;
  if(!cart) cart = [];
  res.render("bestsellers", {cart})
});

module.exports = router;
