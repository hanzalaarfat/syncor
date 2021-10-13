const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    code: {
      type: String,
    },
    amount: {
      type: Number,
    },
    fob: {
      type: Number,
    },
    kgrs: {
      type: Number,
    },
    des: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
