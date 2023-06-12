var express = require('express');
var router = express.Router();
var exp = require("../models/experience");

/* GET home page. */
router.get('/', async function(req, res, next) {
  let exps = await exp.find();
  console.log(exps);
  res.render('homepage', {exps});
});

router.get('/add', function(req, res, next) {
  res.render('experience');
});

router.post('/add', async function(req, res, next) {
  //console.log(req.body);
  let review = new exp(req.body);
  await review.save();
  res.redirect('/');
});


module.exports = router;
