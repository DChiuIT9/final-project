const router = require("express").Router();
const wishlistController = require("../../controllers/wishlistController");

router
  .route("/")
  .get(wishlistController.findAll);

module.exports = router;
