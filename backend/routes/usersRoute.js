const router = require("express").Router();
const {
  getAllUsers,
  getUser,
  updateUser,
  getUsersCount,
  profilePhotoUpload,
} = require("../controllers/usersController");
const photoUpload = require("../middlewares/photoUpload");
const validateObjectId = require("../middlewares/validateObjectId");
const {
  verifyTokenAndAdmin,
  verifyTokenAndOnlyUser,
  verifyToken,
} = require("../middlewares/verifyToken");

router.route("/profile").get(verifyTokenAndAdmin, getAllUsers);

router
  .route("/profile/:id")
  .get(validateObjectId, getUser)
  .put(validateObjectId, verifyTokenAndOnlyUser, updateUser);

router
  .route("/profile/profile-photo-upload")
  .post(verifyToken, photoUpload.single("image"), profilePhotoUpload);

router.route("/count").get(verifyTokenAndAdmin, getUsersCount);

module.exports = router;
