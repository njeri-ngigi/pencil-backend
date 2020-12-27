const { Schema } = require('mongoose');

const topicSchema = new Schema({
  tNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  path: [String],
});

module.exports = topicSchema;
