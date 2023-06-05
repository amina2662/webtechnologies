var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
  title: String,
  slug: String,
  attraction: String,
});
const Product = mongoose.model("destinations", productSchema);
module.exports = Product;