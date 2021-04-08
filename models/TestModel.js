const mongoose = require('mongoose');

// Simply to test what token is used before implementing Form
const testSchema = mongoose.Schema({
  name: { type: String },
});

module.exports = {
  Test: mongoose.model('Test', testSchema),
}