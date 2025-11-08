const router = require("express").Router();
const validateObjectId = require("../middlewares/validateObjectId");
const {
  createComment,
  getAllComments,
  deleteComment,
  updateComment,
} = require("../controllers/commentsController");
const {
  verifyToken,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

router
  .route("/")
  .post(verifyToken, createComment)
  .get(verifyTokenAndAdmin, getAllComments);

router
  .route("/:id")
  .delete(validateObjectId, verifyToken, deleteComment)
  .put(validateObjectId, verifyToken, updateComment);

module.exports = router;
