const express = require("express");
const bodyParser = require('body-parser');
const morgan = require('morgan')
const session = require('express-session')
const passport = require('./passport');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Config Passport
app.use(passport.initialize())
app.use(passport.session()) 

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

// Configure HTTP requests
var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
};

app.use(allowCrossDomain);

require('dotenv').config()

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/finalproject");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://" + process.env.db_id + ":" + process.env.db_pw + "@ds033449.mlab.com:33449/heroku_s7vpjv9q",
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
