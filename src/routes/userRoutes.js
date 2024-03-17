const router = require("express").Router();
const { registerSchema } = require("../controllers/registerController");
const { loginSchema } = require("../controllers/loginController");

//register
router.route("/login").get(loginSchema.list).post(loginSchema.login);

router.route("/register").post(registerSchema.create);

router.route("/logout").get(loginSchema.logout);

router
  .route("/register/:userId")
  .get(registerSchema.read)
  .put(registerSchema.update)
  .delete(registerSchema.delete);

//login

module.exports = router;
