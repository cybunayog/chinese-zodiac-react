const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
});

module.exports = {
  User: mongoose.model('User', userSchema)
}