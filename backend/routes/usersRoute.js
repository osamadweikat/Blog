const router = require("express").Router();
const { getAllUsers } = require("../controllers/usersController");

router.route("/profile").get(getAllUsers);

module.exports = router;
