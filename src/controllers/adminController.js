const { ProductsSchema } = require("../models/productsModel");

module.exports.ProductsSchema = {
  list: async (req, res) => {
    const data = await ProductsSchema.find();
    res.status(200).send({
      error: false,
      data: data,
    });
  },
  create: async (req, res) => {
    const data = await ProductsSchema.create(req.body);
    res.status(201).send({
      error: false,
      body: req.body,
      data: data,
    });
  },
  read: async (req, res) => {
    const data = await ProductsSchema.findOne({ _id: req.params.productId });
    res.status(202).send({
      error: false,
      data: data,
    });
  },
  update: async (req, res) => {
    const data = await ProductsSchema.updateOne(
      { _id: req.params.productId },
      req.body
    );
    const newData = await ProductsSchema.find({ _id: req.params.productId });
    res.status(200).send({
      error: false,
      data: data,
      newData: newData,
    });
  },
  delete: async (req, res) => {
    const data = await ProductsSchema.deleteOne({ _id: req.params.productId });
    res.sendStatus(data.deletedCount >= 1 ? 204 : 404);
  },
};
