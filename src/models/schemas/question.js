const { Schema } = require('mongoose');

const questionSchema = new Schema({
  qNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  annotations: [String],
});

module.exports = questionSchema;
