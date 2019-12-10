const mongoose = require('mongoose');

const measure = new mongoose.Schema(
  {
    type: String,
    creationDate: String,
    value: Number
  },
  {
    collection: "Measure"
  }
);

module.exports = mongoose.model('Measure', measure);