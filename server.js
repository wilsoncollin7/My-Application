const express = require("express");
const path = require('path');
const mongoose = require("mongoose");
require("dotenv/config");
const session = require("express-session");
const MongoStore = require('connect-mongo')(session);

const routes = require("./server/routes");

const app = express();

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// } 

const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(publicPath));;
} 

// Add routes, both API and view
app.use(routes);

mongoose.connect(process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log('Connected to DB!')
);

// Start the API server 
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
