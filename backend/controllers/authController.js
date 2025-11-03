const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { User, validateRegiserUser } = require("../models/User");

/**
 * @desc Register New User
 * @router /api/auth/register
 * @method POST
 * @access public
 */
module.exports.registerUser = asyncHandler(async (req, res) => {
  const { error } = validateRegiserUser(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({ message: "user already exist" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });
  await user.save();

  res
    .status(201)
    .json({ message: "User registered successfully, please log in" });
});
