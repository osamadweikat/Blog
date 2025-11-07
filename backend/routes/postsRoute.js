const router = require("express").Router();
const {
  createPost,
  getAllPosts,
  getPost,
  getPostCount,
} = require("../controllers/postsController");
const photoUpload = require("../middlewares/photoUpload");
const { verifyToken } = require("../middlewares/verifyToken");
const validateObjectId = require("../middlewares/validateObjectId");

router
  .route("/")
  .post(verifyToken, photoUpload.single("image"), createPost)
  .get(getAllPosts);

router.route("/count").get(getPostCount);

router.route("/:id").get(validateObjectId, getPost);

module.exports = router;
