const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    maxLength: 20,
    lowerCase: true,
    unique: false,
  },
  description: { type: String, required: true, maxLength: 250 },
  place: { type: String, required: true },
  phone: { type: Number, required: true },
});
module.exports = mongoose.model("Post", postSchema);
