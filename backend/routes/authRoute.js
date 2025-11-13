const router = require("express").Router();
const {
  registerUser,
  loginUser,
  verifyUserAccount,
} = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:userId/verify/:token", verifyUserAccount);

module.exports = router;
