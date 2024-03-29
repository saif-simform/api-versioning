const mongoose = require("mongoose");
const { DB_MODEL_REF } = require("../config/constant");

const schema = mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    description: { type: String, trim: true, default: true },
    image: { type: String, trim: true, default: "" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Directors = mongoose.model(DB_MODEL_REF.DIRECTORS, schema);

module.exports = Directors;
