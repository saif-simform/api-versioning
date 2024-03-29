const mongoose = require("mongoose");
const { DB_MODEL_REF } = require("../config/constant");

const schema = mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    description: { type: String, trim: true, default: "" },
    releaseDate: { type: Date, default: "" },
    image: { type: String, trim: true, default: "" },
    bannerImage: { type: String, trim: true, default: "" },
    directors: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: DB_MODEL_REF.DIRECTORS,
      },
    ],
    actor: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: DB_MODEL_REF.ACTOR,
      },
    ],
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const WebSeries = mongoose.model(DB_MODEL_REF.WEB_SERIES, schema);

module.exports = WebSeries;
