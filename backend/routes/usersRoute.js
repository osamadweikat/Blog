const router = require("express").Router();
const { getAllUsers, getUser } = require("../controllers/usersController");
const validateObjectId = require("../middlewares/validateObjectId");
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");

router.route("/profile").get(verifyTokenAndAdmin, getAllUsers);
router.route("/profile/:id").get(validateObjectId, getUser);

module.exports = router;
