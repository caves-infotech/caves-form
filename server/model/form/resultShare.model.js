// models/file.model.js
const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  resultId: {
    type: String,
    required: true,
  },
  formType: {
    type: String,
    required: true,
  },
  fileUrl: {
    type: String,
    required: true,
  },
  cloudinaryId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("File", fileSchema);