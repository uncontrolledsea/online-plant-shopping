const express = require("express");
const router = express.Router();
const {
  placeOrder,
  getMyOrders,
  getAllOrders
} = require("../controllers/orderController");

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

// User routes
router.post("/", auth, placeOrder);
router.get("/my", auth, getMyOrders);

// Admin route
router.get("/", auth, admin, getAllOrders);

module.exports = router;