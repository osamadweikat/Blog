const router = require("express").Router();
const { getAllUsers } = require("../controllers/usersController");
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");

router.route("/profile").get(verifyTokenAndAdmin, getAllUsers);

module.exports = router;
