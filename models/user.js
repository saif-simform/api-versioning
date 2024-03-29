const mongoose = require("mongoose");
const { DB_MODEL_REF } = require("../config/constant");

const schema = mongoose.Schema(
  {
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    mobileNumber: { type: Number, default: "" },
    image: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
    createdBy: { type: String, default: "" },
    updatedBy: { type: String, default: "" },
  },
  { timestamps: true }
);

const User = mongoose.model(DB_MODEL_REF.USER, schema);

module.exports = User;
