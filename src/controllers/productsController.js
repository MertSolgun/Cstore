const { ProductsSchema } = require("../models/productsModel");

//Public only get method

module.exports.ProductsSchema = {
  getProducts: async (req, res) => {
    const data = await ProductsSchema.find();
    res.status(200).send({
      error: false,
      data: data,
    });
  },
};
