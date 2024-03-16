const { ProductsSchema } = require("../models/productsModel");

//Public only get method

module.exports.ProductsSchema = {
  getProducts: async (req, res) => {
    const data = await res.FilterList(ProductsSchema);
    res.status(200).send({
      error: false,
      data: data,
    });
  },
};

// http://127.0.0.1:8002/products?search[title]=hello&search=[description]=mert
