const mongoose = require("mongoose");

const MONGO_DB = process.env.MONGO_DB;
mongoose
  .connect(MONGO_DB)
  .then(() => console.log("Db connected"))
  .catch((err) => console.log("Db not connected", err));
