const router = require("express").Router();

const { ProductsSchema } = require("../controllers/productsController");
const { CategorySchema } = require("../controllers/adminController");

router.route("/").get(ProductsSchema.getProducts);

router.route("/categories").get(CategorySchema.list);

router.route("/categories/:categoryId").get(CategorySchema.read);

router.route("/:id").get(ProductsSchema.getSingleProducts);

module.exports = router;
