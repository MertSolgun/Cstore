"use strict";

module.exports = (req, res, next) => {
  const search = req.query.search;
  for (let key in search) {
    search[key] = { $regex: search[key], $options: "i" };
  }

  res.FilterList = async function (model) {
    return await model.find({ ...search });
  };
  next();
};
