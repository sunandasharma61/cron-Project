const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    "Date&Time": {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("schedule", jobSchema);
