import express from "express";
import mongoose from "mongoose";

import { RecipesModel } from "../models/recipes.js";

const router = express.Router();

/**
 * Helper function to verify if id exists
 * Returns the error message if not
 * @param {Number} id _id
 * @returns The verification result
 */
const verify_id = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return `id ${id} is not valid`;
  }
  const recipe = await RecipesModel.findById(id);
  if (recipe === null) {
    return `id ${id} is not found`;
  }
  return true;
};

// create
export const createRecipe = async (request, response) => {
  try {
    const recipe = new RecipesModel(request.body);
    await recipe.save();
    response.status(201).json(recipe);
  } catch (error) {
    response.status(404).json({ "controllers/recipes error": error });
  }
};

// read
export const getRecipes = async (request, response) => {
  try {
    const recipes = await RecipesModel.find();
    response.status(200).json(recipes);
  } catch (error) {
    response.status(404).json({ "controllers/recipes error": error });
  }
};
export const getRecipe = async (request, response) => {
  try {
    const { id } = request.params;
    const verify_id_result = await verify_id(id);
    if (verify_id_result !== true) {
      response
        .status(404)
        .json({ "controllers/recipes error": verify_id_result });
      return;
    }
    const recipe = await RecipesModel.findById(id);
    response.status(200).json(recipe);
  } catch (error) {
    response.status(404).json({ "controllers/recipes error": error });
  }
};

// update
export const updateRecipe = async (request, response) => {
  const { id } = request.params;
  const verify_id_result = await verify_id(id);
  if (verify_id_result !== true) {
    response
      .status(404)
      .json({ "controllers/recipes error": verify_id_result });
    return;
  }
  const updatedRecipe = request.body;
  updatedRecipe._id = id;
  await RecipesModel.findByIdAndUpdate(id, updatedRecipe, { new: true });
  response.json(updatedRecipe);
};

// delete
export const deleteRecipe = async (request, response) => {
  const { id } = request.params;
  const verify_id_result = await verify_id(id);
  if (verify_id_result !== true) {
    response
      .status(404)
      .json({ "controllers/recipes error": verify_id_result });
    return;
  }
  await RecipesModel.findByIdAndRemove(id);
  response.json({ message: "controllers/recipes: delete recipe success" });
};

export default router;
