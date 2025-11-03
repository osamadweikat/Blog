const asyncHandler = require("express-async-handler");
const { User } = require("../models/User");

/**
 * @desc Get All Users Profile
 * @route /api/users/profile
 * @method GET
 * @access private (only admin)
 */
module.exports.getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});
