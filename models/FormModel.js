const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const formSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  q1: {
    type: String
  },
  q2: {
    type: Number
  },
  q3: {
    type: String
  },
  q4: {
    type: String
  },
  q5: {
    type: String
  },
  q6: {
    type: String
  },
  q7: {
    type: String
  },
  q8: {
    type: String
  },
  q9: {
    type: String
  },
  q10: {
    type: String
  }
});

formSchema.plugin(uniqueValidator);

module.exports = {
  Form: mongoose.model('Form', formSchema)
}
