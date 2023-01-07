// models/message.js
const mongoose = require("mongoose");
const Joi = require("joi");

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model("Message", messageSchema);

function validateMessage(message) {
  const schema = {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    message: Joi.string().required(),
  };

  return Joi.validate(message, schema);
}

module.exports.Message = Message;
module.exports.validate = validateMessage;
