const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);
app.use("/api/user", require('./routes/api/user'))
app.use("/api/wishlist", require('./routes/api/wishlist'))

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/finalproject");

// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://dchiuit9:dchiuit9@ds033449.mlab.com:33449/heroku_s7vpjv9q",
//     {
//       useCreateIndex: true,
//       useNewUrlParser: true
//     }
// );

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
