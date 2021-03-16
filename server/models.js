const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  username: String,
  password: String,
});


module.exports = {
  users: mongoose.model('users', usersSchema)
}