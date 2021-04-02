const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Simply to test what token is used before implementing Form
const testSchema = mongoose.Schema({
  name: { type: String },
});

testSchema.plugin(uniqueValidator);

module.exports = {
  Test: mongoose.model('Test', testSchema),
}