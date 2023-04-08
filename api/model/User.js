const mongoose = require("mongoose");
const validator = require('validator');

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: {
    type:String,
    required:[true , "Enter your Email"],
    unique:true,
    validate:[validator.isEmail, "Please Enter a valid Email"]
  },
});

module.exports = mongoose.model("User", userSchema);
