const {
  CategorySchema,
  ProductsSchema,
} = require("./src/models/productsModel");

module.exports = async () => {
  const categorySchema = await CategorySchema.findOne();
  if (categorySchema) {
    ProductsSchema.updateMany(
      {
        category: { $exists: false },
      },
      {
        category: categorySchema._id,
      }
    ).catch((error) => console.log(error));
  }
  console.log("Sync success");
};
