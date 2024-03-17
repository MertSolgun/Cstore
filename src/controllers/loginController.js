const Encrypt = require("../helpers/Encrypt");
const { loginSchema } = require("../models/loginModel");
const { registerSchema } = require("../models/registerModel");

module.exports.loginSchema = {
  //burasi duzelicekk!
  list: async (req, res) => {
    const { email, password } = req.session;
    if (email && password) {
      const data = await loginSchema.find({ email, password });
      res.status(200).send({
        error: false,
        data: req.session,
      });
    } else {
      res.status(401).send({ error: true, message: "Unauthorized" });
    }
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
  login: async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
      // register olan userlar da emaili req.body email ile eşleşenini getiriyor.
      const registerData = await registerSchema.findOne({ email });

      if (
        registerData.email === "admin@admin.com" &&
        registerData.password === Encrypt(password)
      ) {
        req.session.email = registerData.email;
        req.session.password = registerData.password;
        req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 3;
        res.send({
          data: registerData,
          message: "Admin Login Ok",
          isAdmin: true,
        });
      } else if (registerData && registerData.password === Encrypt(password)) {
        req.session.email = registerData.email;
        req.session.password = registerData.password;
        res.send({
          data: registerData,
          message: "User login ok",
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
