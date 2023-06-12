var mongoose = require("mongoose");

var savedSchema = mongoose.Schema({
    author: String,
    published: String,
    pages: String,
    price: String,
});

const saved = mongoose.model("saved", savedSchema);
module.exports = saved;