const { registerSchema } = require("../models/registerModel");
const { loginSchema } = require("../models/loginModel");

module.exports.registerSchema = {
  list: async (req, res) => {
    const data = await registerSchema.find();
    res.status(200).send({
      error: "false",
      data: data,
    });
  },
  create: async (req, res) => {
    const { email } = req.body;
    const dupliControl = loginSchema.find({ email });
    if (email === dupliControl) {
      res.status(404).send({
        error: true,
        message: "This email is already registered",
      });
    } else {
      const data = await registerSchema.create(req.body);
      res.status(201).send({
        error: "false",
        data: data,
      });
    }
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
