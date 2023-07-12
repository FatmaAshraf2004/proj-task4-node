const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  roles: {
    type: [String],
    default: ['Employee']
  },
  active: {
    type: Boolean,
    default: true
  }
})

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const bcrypt = require("bcrypt");

// const userSchema = new Schema({
//   email: {
//     type: String,
//     trim: true,
//     unique: true,
//     required: true
//   },
//   password: {
//     type: String,
//     trim: true,
//     required: true
//   },
//   name: {
//     type: String,
//     trim: true,
//     required: true
//   },
// });

// userSchema.pre("save", async function (next) {
//   let user = this;
//   if (!user.isModified("password")) {
//     return next();
//   }
//   try {
//     let hashedPassword = await bcrypt.hash(user.password, 8);
//     user.password = hashedPassword;
//     return next();
//   } catch (err) {
//     return next(err);
//   }
// });

// mongoose.model("User", userSchema);