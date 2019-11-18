const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/finalproject"
);

// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://dchiuit9:dchiuit9@ds033449.mlab.com:33449/heroku_s7vpjv9q",
//     {
//       useCreateIndex: true,
//       useNewUrlParser: true
//     }
// );

const wishlistSeed = [
  {
    name: "Daniel Chiu",
    item: "DJI Mavic Pro 4K Quadcopter",
    comment: "For Thanksgiving",
    link: "https://www.amazon.com/DJI-Mavic-Pro-Quadcopter-Battery/dp/B01MUAWOXB/ref=sr_1_7",
    price: 899,
    image: "https://images-na.ssl-images-amazon.com/images/I/71EtCHXpfhL._SL1500_.jpg",
    date: new Date(Date.now())
  },
  {
    name: "Daniel Chiu",
    item: "Apple MacBook Pro",
    comment: "For Christmas",
    link: "https://www.amazon.com/Apple-MacBook-15-inch-512GB-Storage/dp/B07S58MHXF/ref=sr_1_1_sspa",
    price: 2349,
    image: "https://images-na.ssl-images-amazon.com/images/I/61iVOmuO1pL._SL1500_.jpg",
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
