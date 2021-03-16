const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  username: String,
  password: String,
  cakeDay: Date,
});


module.exports = {
  users: mongoose.model('users', usersSchema)
}