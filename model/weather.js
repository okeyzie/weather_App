const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
  },
  temperature: {
    type: String,
  },
  condition: {
    type: String,
  },
  humidity: {
    type: String,
  },
  wind: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const Weather = mongoose.model("Weather", weatherSchema);

module.exports = Weather;

