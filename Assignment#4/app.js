var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var landRouter = require('./routes/landingpage');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/homepage');
var contactusRouter = require('./routes/contactus');
var categoriesRouter = require('./routes/categories');
var bestsellersRouter = require('./routes/bestsellers');
var upcomingbooksRouter = require('./routes/upcomingbooks');

var app = express();

// view engine setup
var expressLayouts = require("express-ejs-layouts");
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/land', landRouter);
app.use('/users', usersRouter);
app.use('/categories', categoriesRouter);
app.use('/contactus', contactusRouter);
app.use('/bestsellers', bestsellersRouter);
app.use('/upcomingbooks', upcomingbooksRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoose
  .connect("mongodb://0.0.0.0/BookStoreDataBase")
  .then(() => console.log("Connected to Mongo...."))
  .catch((error) => console.log(error.message));

module.exports = app;
