const router = require("express").Router();
const { ProductsSchema } = require("../controllers/adminController");

router.route("/products").get(ProductsSchema.list).post(ProductsSchema.create);

module.exports = router;
