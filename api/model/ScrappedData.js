const mongoose = require("mongoose");

const ScrappedDataSchema = new mongoose.Schema({
  balance: {
    type: String,
    required: true,
  },

  equity: {
    type: String,
    required: true,
  },

  currency: {
    type: String,
    required: true,
  },

  marketwatchTime: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ScrappedData", ScrappedDataSchema);
