const mongoose = require("mongoose");
const { DB_MODEL_REF } = require("../config/constant");

const schema = mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    description: { type: String, trim: true, default: "" },
    link: { type: String, trim: true, default: "" },
    releaseDate: { type: Date, default: "" },
    image: { type: String, trim: true, default: "" },
    bannerImage: { type: String, trim: true, default: "" },
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
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

const Movies = mongoose.model(DB_MODEL_REF.MOVIES, schema);

module.exports = Movies;
