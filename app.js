const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const db = mongoose.connection;
const bodyParser = require("body-parser");
const Joi = require("joi");

/*---------------------/ 
        View Engine
\----------------------*/
// Set the view engine to EJS \\
app.set("view engine", "ejs");

// Set the views directory \\
app.set("views", path.join(__dirname, "views"));

/*---------------------/ 
        Mongoose
\----------------------*/

// Connect to MongoDB \\
mongoose.connect("mongodb://localhost/crud", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

/*---------------------/ 
        Middleware
\----------------------*/
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// A middleware function that logs the request method and URL \\
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

/*---------------------/ 
        Routes
\----------------------*/
// Include the routes from the routes/index.js file \\
app.use("/", require("./routes/index"));

/*---------------------/ 
        Listening
\----------------------*/
app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
