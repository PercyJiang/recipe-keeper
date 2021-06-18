import mongoose from "mongoose";

export const RecipesModel = mongoose.model(
  "recipes",
  mongoose.Schema({
    RecipeName: String,
    Image: String,
    Creator: String,
    CreatedAt: String,
    Materials: Array,
    Steps: Map,
  })
);
