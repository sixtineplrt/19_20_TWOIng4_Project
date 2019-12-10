const mongoose = require('mongoose');

const user = new mongoose.Schema(
  {
    location : String,
    personsInHouse : Number,
    houseSize : String,
  },
  {collection : "Users"}
);

module.exports = mongoose.model('User', user);