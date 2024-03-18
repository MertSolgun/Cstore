const Encrypt = require("../helpers/Encrypt");
const { loginSchema } = require("../models/loginModel");
const { registerSchema } = require("../models/registerModel");
const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY;

module.exports.loginSchema = {
  //burasi duzelicekk!
  list: async (req, res) => {
    const data = await loginSchema.find({});
    res.status(200).send({
      error: false,
      data: req.session,
    });
  },
  read: async (req, res) => {
    const data = await loginSchema.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      data: data,
    });
  },
  delete: async (req, res) => {
    const data = await loginSchema.deleteOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      data: data,
    });
  },

  //credentials
  //simpletoken
  //jwt
  login: async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
      // register olan userlar da emaili req.body email ile eşleşenini getiriyor.
      const registerData = await registerSchema.findOne({ email });

      if (
        registerData.email === "admin@admin.com" &&
        registerData.password === Encrypt(password)
      ) {
        const token = jwt.sign({ email: registerData.email }, secretKey, {
          expiresIn: "3d",
        });
        res.send({
          token: token,
          data: registerData,
          message: "Admin Login succesfully",
          isAdmin: true,
        });
      } else if (registerData && registerData.password === Encrypt(password)) {
        const token = jwt.sign({ email: registerData.email }, secretKey, {
          expiresIn: "3d",
        });
        res.send({
          token: token,
          message: "User login succesfully",
          isAdmin: false,
        });
      } else {
        res.status(404).send({
          error: true,
          message: "Invalid email password",
        });
      }
    }
  },
  logout: async (req, res) => {
    req.session = null;
    res.status(200).send({
      error: false,
      message: "Log out ok",
    });
  },
};

//req.bodydan login olucak kullanicinin email pas bilgilerini aliyoruz
// eger email ve pass varsa registeruserData yani veritabanindaki register olmus kullaniciya req.body daki emaili verip onu getiriyoruz.

//registerdata pass kullanabiliriz.. ! req.body deki email ile pass bilgiside geliyor

// samet123@gmail.com
// samet123
