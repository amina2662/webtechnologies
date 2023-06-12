var express = require('express');
var router = express.Router();

/* GET landing page. */
router.get('/', function(req, res, next) {
  res.render("land/page");
});

router.get("/add", async function(req, res, next) {
    res.render("land/form");
  });

router.get("/log", async function(req, res, next) {
    res.render("land/login");
  });


  router.post("/log", async (req, res) => {
    const { name, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ name });
      if (existingUser) {
        req.send("error!!! A user with this email already exists.");
        return res.render("land/login");
      }
  
      const newUser = new User({ name, password });
      await newUser.save();
      
      req.session.user = newUser;
      req.send("success!!! Registration successful!");
      return res.redirect("/");
    } catch (error) {
      console.log(error.message);
      req.flash("error", "An error occurred during registration.");
      return res.render("/log");
    }
  });
  

/*
router.post("/add", async function(req, res, next) {
    // console.log(req.body);
    let product = new Product(req.body);
    await product.save();
    res.redirect("/product");
  });*/



module.exports = router;