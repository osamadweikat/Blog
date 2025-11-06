const fs = require("fs");
const path = require("path");
const asyncHanddler = require("express-async-handler");
const { Post, validateCreatePost } = require("../models/Post");
const { cloudinaryUploadImage } = require("../utils/cloudinary");

/**
 * @desc Create New Post
 * @route /api/posts
 * @method POST
 * @access private (only logged in user)
 */
module.exports.createPost = asyncHanddler(async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No image provided" });
  }

  const { error } = validateCreatePost(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const imagePath = path.join(__dirname, `../images/${req.file.filename}`);
  const result = await cloudinaryUploadImage(imagePath);

  const post = await Post.create({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    user: req.user.id,
    image: {
      url: result.secure_url,
      publicId: result.public_id,
    },
  });

  res.status(201).json(post);
  fs.unlink(imagePath);
});
