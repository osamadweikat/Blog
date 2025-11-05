const router = require("express").Router();
const {
  getAllUsers,
  getUser,
  updateUser,
  getUsersCount,
  profilePhotoUpload,
  deleteUser,
} = require("../controllers/usersController");
const photoUpload = require("../middlewares/photoUpload");
const validateObjectId = require("../middlewares/validateObjectId");
const {
  verifyTokenAndAdmin,
  verifyTokenAndOnlyUser,
  verifyToken,
  verifyTokenAndAuthorization,
} = require("../middlewares/verifyToken");

router.route("/profile").get(verifyTokenAndAdmin, getAllUsers);

router
  .route("/profile/:id")
  .get(validateObjectId, getUser)
  .put(validateObjectId, verifyTokenAndOnlyUser, updateUser)
  .delete(validateObjectId, verifyTokenAndAuthorization, deleteUser);

router
  .route("/profile/profile-photo-upload")
  .post(verifyToken, photoUpload.single("image"), profilePhotoUpload);

router.route("/count").get(verifyTokenAndAdmin, getUsersCount);

module.exports = router;
