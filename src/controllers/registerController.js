const { registerSchema } = require("../models/registerModel");

module.exports.registerSchema = {
  list: async (req, res) => {
    const data = await registerSchema.find();
    res.status(200).send({
      error: "false",
      data: data,
    });
  },
  create: async (req, res) => {
    const data = await registerSchema.create(req.body);
    res.status(201).send({
      error: "false",
      data: data,
    });
  },
  read: async (req, res) => {
    const data = await registerSchema.findOne({ _id: req.params.userId });
    res.status(201).send({
      error: "false",
      data: data,
    });
  },
  update: async (req, res) => {
    const data = await registerSchema.updateOne(
      { _id: req.params.userId },
      req.body
    );
    const newData = await registerSchema.findOne({ _id: req.params.userId });
    res.status(202).send({
      error: "false",
      data: data,
      newData: newData,
    });
  },
  delete: async (req, res) => {
    const data = await registerSchema.deleteOne({ _id: req.params.userId });
    res.status(204).send({
      error: "false",
      data: data,
    });
  },
};

// {
//   "email":"mert1997@.com",
//   "password":"mert123"
// }
