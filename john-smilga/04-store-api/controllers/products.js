const getAllProductsStatic = async (req, res) => {
  throw new Error("testing async errors");
  res.status(200).json({ msg: `Products Testing Route` });
};
const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: `Products Route` });
};

module.exports = { getAllProducts, getAllProductsStatic };