const router = require("express").Router();
const {
  ProductsSchema,
  CategorySchema,
} = require("../controllers/adminController");

router.route("/products").get(ProductsSchema.list).post(ProductsSchema.create);

router
  .route("/categories")
  .get(CategorySchema.list)
  .post(CategorySchema.create);

router
  .route("/categories/:categoryId")
  .delete(CategorySchema.delete)
  .get(CategorySchema.read);

router
  .route("/products/:productId")
  .get(ProductsSchema.read)
  .delete(ProductsSchema.delete);

module.exports = router;

// {

//   "title":"caykahva",
//   "description":"deneme099",
//   "price":333,
//   "discountPercentage":20,
//   "rating":3,
//   "stock":3,
//   "brand":"samsung",
//   "thumbnail":"33",
//   "images":"deneme33"

// }
