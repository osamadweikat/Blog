const router = require("express").Router();
const {
  sendResetPasswordLink,
  getResetPasswordLink,
  resetPassword,
} = require("../controllers/passwordController");

router.post("/reset-password-link", sendResetPasswordLink);

router
  .route("/reset-password/:userId/:token")
  .get(getResetPasswordLink)
  .post(resetPassword);

module.exports = router;
