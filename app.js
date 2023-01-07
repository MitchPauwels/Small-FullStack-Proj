const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = mongoose.connection;

/*---------------------/ 
        View Engine
\----------------------*/
// Set the view engine to EJS \\
app.set("view engine", "ejs");

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

// A middleware function that logs the request method and URL \\
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
/*---------------------/ 
          EJS
\----------------------*/

/*---------------------/ 
        Routes
\----------------------*/

// A route that handles GET requests to the root path \\
app.get("/", (req, res) => {
  res.send("Root Page");
});

// A route that captures the value of an "id" parameter in the URL
app.get("/users/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});
/*---------------------/ 
        Listening
\----------------------*/
app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
