"use strict";

const { loginSchema } = require("../controllers/loginController");

module.exports = async (req, res, next) => {
  const { email, password } = req.session;
  if (email && password) {
    const data = await loginSchema.findOne({ email, password });
    if (data) {
      next();
    } else {
      req.session = null;
      res.status(401).send({ error: true, message: "Session expired" });
    }
  } else {
    res.status(401).send({ error: true, message: "Unauthorized" });
  }
};
