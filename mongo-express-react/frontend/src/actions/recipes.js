import { CREATE, READ, UPDATE, DELETE } from "../constants";
import * as api from "../api/recipes";

// create
export const createRecipe = (recipe) => async (dispatch) => {
  try {
    const { data } = await api.createRecipe(recipe);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log("actions/recipes error: ", error);
  }
};

// read
export const getRecipes = () => async (dispatch) => {
  try {
    const { data } = await api.getRecipes();
    dispatch({ type: READ, payload: data });
  } catch (error) {
    console.log("actions/recipes error: ", error);
  }
};
export const getRecipe = (id) => async (dispatch) => {
  try {
    const { data } = await api.getRecipe(id);
    dispatch({ type: READ, payload: data });
  } catch (error) {
    console.log("actions/recipes error: ", error);
  }
};

// update
export const updateRecipe = (id, recipe) => async (dispatch) => {
  try {
    const { data } = await api.updateRecipe(id, recipe);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log("actions/recipes error: ", error);
  }
};

// delete
export const deleteRecipe = (id) => async (dispatch) => {
  try {
    await await api.deleteRecipe(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log("actions/recipes error: ", error);
  }
};
