const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/finalproject"
);

const wishlistSeed = [
  {
    title: "Oil",
    comment: "no good",
    link: ["http://www.amazon.com"],
    price: 30,
    image: "http://www.amazon.com",
    date: new Date(Date.now())
  }
];

db.Wishlist
  .remove({})
  .then(() => db.Wishlist.collection.insertMany(wishlistSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
