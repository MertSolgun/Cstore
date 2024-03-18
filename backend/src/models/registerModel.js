const mongoose = require("mongoose");
const Encrypt = require("../helpers/Encrypt");

const registerSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: [
        (email) => email.includes("@") && email.includes("."),
        "Email type is incorrect !!",
      ],
    },
    password: {
      type: String,
      required: true,
      trim: true,
      set: (password) => Encrypt(password),
    },
  },
  {
    collection: "registerSchema",
    timestamps: true,
  }
);

module.exports = {
  registerSchema: mongoose.model("registerSchema", registerSchema),
};

///kullancilari register et ve sonra login islemini sagla
