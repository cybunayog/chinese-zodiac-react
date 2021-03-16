const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  username: {
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


module.exports = {
  users: mongoose.model('users', usersSchema)
}