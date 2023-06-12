const mongoose = require("mongoose");
const Joi = require('joi');

let modelSchema = mongoose.Schema({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
let Users = mongoose.model("Users", modelSchema);
module.exports = Users;