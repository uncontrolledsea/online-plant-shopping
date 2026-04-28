const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  category: {
    type: String // Indoor, Outdoor, Succulent
  },
  image: {
    type: String
  },
  stock: {
    type: Number,
    default: 0
  },
  sunlight: {
    type: String // Low, Medium, High
  },
  water: {
    type: String // Daily, Weekly
  }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);