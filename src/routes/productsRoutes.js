const router = require("express").Router();

const { ProductsSchema } = require("../controllers/productsController");

router.route("/").get(ProductsSchema.getProducts);

router.route("/:id").get(ProductsSchema.getSingleProducts);

module.exports = router;
