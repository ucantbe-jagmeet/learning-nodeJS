const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  res.send("create Product");
};
const getAllProducts = async (req, res) => {
  res.send("list of Products");
};

module.exports = { createProduct, getAllProducts };
