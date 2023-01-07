const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/submit-form", (req, res) => {
  // Get the form data from the request body
  const formData = req.body;
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  console.log(formData);
  console.log(name, email, message);
  // Process the form data (e.g. validate, save to database, etc.)

  // Send a response to the client
  res.send("Form submitted successfully");
});

module.exports = router;
