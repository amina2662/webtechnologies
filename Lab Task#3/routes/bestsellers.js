var express = require('express');
var router = express.Router();
var saved = require("../models/saved");
var upcomings = require("../models/upcomingbooks");


/* GET home page. */
router.get('/', async function(req, res, next) {
  //let Saved = await saved.find();
  //console.log(Saved);
  //res.render('bestsellers', { Saved });
  
  res.render('bestsellers',);
});




router.get('/edit/:id', async function(req, res, next) {
  console.log(req.params.id);
  let Saved = await saved.findById(req.params.id);
  res.redirect('/');
});

router.get('/:id', async function(req, res, next) {
  let upcoming = await upcomings.findById(req.params.id);
  console.log(upcoming);
  let cart = [];
  if(req.cookies.cart) cart = req.cookies.cart;
  cart.push(upcoming);
  res.cookie("cart", cart);
  res.render('bestsellers',{cart});
});
/*
router.get("/:id", (req, res) => {
  let cart = req.cookies["cart"];
  if (!cart) cart = [];
  cart.push(req.params.id);
  res.cookie("cart", cart);
  res.redirect('/bestsellers');
});
*/
module.exports = router;
