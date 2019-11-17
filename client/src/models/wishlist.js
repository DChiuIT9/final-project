const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishlistSchema = mongoose.Schema({
  item: { type: String, required: true },
  comment: { type: String },
  link: { type: [String], required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  amazonId: { type: String, required: true, unique: true }
});

const Gift = mongoose.model("Wishlist", wishlistSchema);

module.exports = Gift;
