const Product = require("../models/productModel");
const mongoose = require("mongoose");

const getProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json(products);
};

const getProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Product does not exist" });
  }

  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({ error: "Product does not exist" });
  }

  return res.status(200).json(product);
};

const createProduct = async (req, res) => {
  const { name, description, price, category } = req.body;

  const newProduct = new Product({
    name,
    description,
    price,
    category,
  });

  // save to db
  try {
    const product = await newProduct.save();
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({ error: "Product does not exist" });
  }

  const product = await Product.findOneAndDelete({ _id: id });

  if (!product) {
    return res.status(404).json({ error: "Product does not exist" });
  }

  res.status(200).json(product);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({ error: "Product does not exist" });
  }

  const product = await Product.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!product) {
    return res.status(404).json({ error: "Product does not exist" });
  }

  res.status(200).json(product);
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
