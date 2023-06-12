var mongoose = require("mongoose");

var expSchema = mongoose.Schema({
    name: String,
    designation: String,
    thoughts: String,
});

const exp = mongoose.model("experience", expSchema);
module.exports = exp;