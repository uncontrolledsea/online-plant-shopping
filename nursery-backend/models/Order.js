const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      },
      name: String,
      price: Number,
      quantity: Number
    }
  ],
  totalAmount: {
    type: Number
  },
  status: {
    type: String,
    default: "Placed" // Placed, Shipped, Delivered
  }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);