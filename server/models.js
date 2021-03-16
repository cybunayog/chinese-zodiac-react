const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  username: String,
  password: String,
  cakeDay: Date,
  id: String
});


module.exports = {
  users: mongoose.model('users', usersSchema)
}