const router = require("express").Router();
const wishlistController = require("../../controllers/wishlistController");
const wishList = require("../../models");

router
  .route("/")
  .get(wishlistController.findAll)
  .post(wishlistController.create);

router.route("/create").post(function (req, res) {
  var wishListItem = new wishList();
  var returnObject = {};

  wishListItem.item = "item2";
  wishListItem.comment = "comment3";
  wishListItem.link = "https://daneilChiu.com";
  wishListItem.price = 90;
  console.log(req);
  wishListItem.save(function(err){
    if(err){
      console.log(err.message);
      returnObject.message = err.message;
      returnObject.data = {};
      res.status(500);
    }
    else{
      returnObject.message = "Workout successfully created";
      returnObject.data = wishListItem;
      res.status(201);
    }
    res.send(returnObject);
  });
});

module.exports = router;
