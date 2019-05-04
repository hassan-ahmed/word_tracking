const mongoose = require('mongoose');

const StringSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true,
    default: 0
  }
}, {
  versionKey: false
});


module.exports = mongoose.model('String', StringSchema);
