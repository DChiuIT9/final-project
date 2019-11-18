const path = require("path");
const router = require("express").Router();
// const userRoutes = require("./user");
const wishlistRoutes = require("./wishlist");

// router.use("/users", userRoutes);

router.use("/wishlist", wishlistRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
