const FormData = require("./models/formdata");

// Create a new document
const data = new FormData({
  name: "John",
  email: "john@example.com",
  message: "Hello",
});
data.save((error) => {
  if (error) {
    // Handle the error
  } else {
    // The document was saved successfully
  }
});

// Read all documents
FormData.find((error, data) => {
  if (error) {
    // Handle the error
  } else {
    // The documents are stored in the data array
  }
});
