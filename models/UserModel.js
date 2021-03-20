const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  }
});

userSchema.plugin(uniqueValidator);


module.exports = {
  User: mongoose.model('User', userSchema)
}