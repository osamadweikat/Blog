const router = require("express").Router();
const {
  getAllUsers,
  getUser,
  updateUser,
  getUsersCount,
} = require("../controllers/usersController");
const validateObjectId = require("../middlewares/validateObjectId");
const {
  verifyTokenAndAdmin,
  verifyTokenAndOnlyUser,
} = require("../middlewares/verifyToken");

router.route("/profile").get(verifyTokenAndAdmin, getAllUsers);
router
  .route("/profile/:id")
  .get(validateObjectId, getUser)
  .put(validateObjectId, verifyTokenAndOnlyUser, updateUser);
router.route("/count").get(verifyTokenAndAdmin, getUsersCount);

module.exports = router;
