var mongoose = require("mongoose");

var upcomingSchema = mongoose.Schema({
    author: String,
    published: String,
    pages: String,
    price: String,
});

const upcomings = mongoose.model("upcomings", upcomingSchema);
module.exports = upcomings;