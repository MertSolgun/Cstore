const router = require("express").Router();
const { ProductsSchema } = require("../controllers/adminController");

router.route("/products").get(ProductsSchema.list).post(ProductsSchema.create);

router
  .route("/products/:productId")
  .get(ProductsSchema.read)
  .delete(ProductsSchema.delete);

module.exports = router;
