const router = require("express").Router();
const { createCategory } = require("../controllers/categoriesController");
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");

router.route("/").post(verifyTokenAndAdmin, createCategory);

module.exports = router;
