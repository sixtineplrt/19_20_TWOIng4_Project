const mongoose = require('mongoose');

const sensor = new mongoose.Schema(
  {
    creationDate: String,
    location: String,
  },
  {
    collection : "Sensor"
  }
);

module.exports = mongoose.model('Sensor', sensor);