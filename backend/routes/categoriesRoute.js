const router = require("express").Router();
const {
  createCategory,
  getAllCategories,
  deleteCategory,
} = require("../controllers/categoriesController");
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");
const validateObjectId = require("../middlewares/validateObjectId");

router
  .route("/")
  .post(verifyTokenAndAdmin, createCategory)
  .get(getAllCategories);

router
  .route("/:id")
  .delete(validateObjectId, verifyTokenAndAdmin, deleteCategory);

module.exports = router;
