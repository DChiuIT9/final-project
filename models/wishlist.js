const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
  name: { type: String, required: true }, 
  item: { type: String, required: true },
  comment: { type: String, required: true },
  link: String,
  price: { type: Number },
  date: { type: Date, default: Date.now }
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;
