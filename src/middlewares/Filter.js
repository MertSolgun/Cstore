"use strict";

module.exports = (req, res, next) => {
  const search = req.query.search;
  for (let key in search) {
    search[key] = { $regex: search[key], $options: "i" };
  }

  let limit = Number(req.query.limit);
  limit = limit > 0 ? limit : Number(process.env.DEFAULT_LIMIT);
  console.log(limit);

  res.FilterList = async function (model) {
    return await model.find({ ...search }).limit(limit);
  };
  next();
};
