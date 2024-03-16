const router = require("express").Router();

const { ProductsSchema } = require("../controllers/productsController");

router.route("/").get(ProductsSchema.getProducts);

module.exports = router;
