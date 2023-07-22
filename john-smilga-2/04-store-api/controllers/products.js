const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({
    featured: true,
    name: "vase table",
    nbHits: products.length,
  });
  res.status(200).json({ products });
};
const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "products  route" });
};

module.exports = { getAllProducts, getAllProductsStatic };
