const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema(
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
    },
  },

  {
    collection: "loginSchema",
    timestamps: true,
  }
);

module.exports = {
  loginSchema: mongoose.model("loginSchema", loginSchema),
};
