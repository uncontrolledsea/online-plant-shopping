const express = require("express");
const router = express.Router();
const {
  addProduct,
  getProducts,
  getProductById,
  deleteProduct
} = require("../controllers/productController");

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

// Public
router.get("/", getProducts);
router.get("/:id", getProductById);

// Protected (Admin only)
router.post("/", auth, admin, addProduct);
router.delete("/:id", auth, admin, deleteProduct);

module.exports = router;