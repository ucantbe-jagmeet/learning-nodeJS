const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  //   throw new Error("testing async errors");

  const products = await Product.find({}).select("name price");
  res.status(200).json({ products, nbHits: products.length });

  res.status(200).json({ msg: `Products Testing Route` });
};
const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  //   console.log(queryObject);

  let result = Product.find(queryObject);
  // sort
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }

  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  }

  const products = await result;

  res.status(200).json({ products, nbHits: products.length });
};

module.exports = { getAllProducts, getAllProductsStatic };
