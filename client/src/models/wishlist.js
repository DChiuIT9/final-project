const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
  item: { type: String, required: true },
  comment: { type: String },
  link: { type: [String], required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  amazonId: { type: String, required: true, unique: true }
});

const Gift = mongoose.model("Book", wishlistSchema);

module.exports = Gift;
