import * as api from "../api/recipes";

// create
export const createRecipe = (recipe) => async (dispatch) => {
  try {
    const { data } = await api.createRecipe(recipe);
    dispatch({ type: "createRecipe", payload: data });
  } catch (error) {
    console.log("actions/recipes error: ", error.response.data);
  }
};

// read
export const getRecipes = () => async (dispatch) => {
  try {
    const { data } = await api.getRecipes();
    dispatch({ type: "getRecipes", payload: data });
  } catch (error) {
    console.log("actions/recipes error: ", error.response.data);
  }
};
export const getRecipe = (id) => async (dispatch) => {
  try {
    const { data } = await api.getRecipe(id);
    dispatch({ type: "getRecipe", payload: data });
  } catch (error) {
    console.log("actions/recipes error: ", error.response.data);
  }
};

// update
export const updateRecipe = (id, recipe) => async (dispatch) => {
  try {
    const { data } = await api.updateRecipe(id, recipe);
    dispatch({ type: "updateRecipe", payload: data });
  } catch (error) {
    console.log("actions/recipes error: ", error.response.data);
  }
};

// delete
export const deleteRecipe = (id) => async (dispatch) => {
  try {
    await await api.deleteRecipe(id);
    dispatch({ type: "deleteRecipe", payload: id });
  } catch (error) {
    console.log("actions/recipes error: ", error.response.data);
  }
};
