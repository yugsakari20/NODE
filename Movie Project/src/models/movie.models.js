import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  genre: { type: String, required: true },
  director: { type: String, required: true },
  cast: [{ type: String, required: true }],
  rating: { type: Number, min: 0, max: 10, required: true },
  posterUrl: { type: String, required: true },
  trailerUrl: { type: String, required: true },
});

// Virtual field: id (as string)
movieSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are included in JSON and object output
movieSchema.set("toJSON", {
  virtuals: true,
});
movieSchema.set("toObject", {
  virtuals: true,
});

export const Movie = mongoose.model("Movie", movieSchema);
