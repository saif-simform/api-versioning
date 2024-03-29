const mongoose = require("mongoose");
const { DB_MODEL_REF, USER_GENDER } = require("../config/constant");

const schema = mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    description: { type: String, trim: true, default: true },
    dob: { type: Number, default: "" },
    gender: {
      type: String,
      default: "M",
    },
    image: { type: String, trim: true, default: "" },
    bannerImage: { type: String, trim: true, default: "" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Actor = mongoose.model(DB_MODEL_REF.ACTOR, schema);

module.exports = Actor;
