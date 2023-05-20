const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");

// get all products
router.get("/", getProducts);

// get single product
router.get("/:id", getProduct);

// create new product
router.post("/", createProduct);

// delete product
router.delete("/:id", deleteProduct);

// update product
router.patch("/:id", updateProduct);

module.exports = router;
