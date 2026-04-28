const Order = require("../models/Order");

// 📦 Place Order
exports.placeOrder = async (req, res) => {
  try {
    const { items, totalAmount } = req.body;

    const order = new Order({
      user: req.user,
      items,
      totalAmount
    });

    const savedOrder = await order.save();

    res.json(savedOrder);
  } catch (error) {
    res.status(500).json({ msg: "Error placing order" });
  }
};

// 📜 Get My Orders
exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user }).populate("items.product");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching orders" });
  }
};

// 👑 Admin: Get All Orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user").populate("items.product");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching all orders" });
  }
};