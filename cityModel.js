var mongoose = require("mongoose");
//var Schema = mongoose.Schema;

var citySchema = new mongoose.Schema({
  country: {
    type: String
  },
  city: {
    type: String
  }
});

module.exports = mongoose.model("cities", citySchema);
