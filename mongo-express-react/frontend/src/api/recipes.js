import axios from "axios";
import { URL } from "../constants";

// create
export const createRecipe = (recipe) => axios.post(URL, recipe);

// read
export const getRecipes = () => axios.get(URL);
export const getRecipe = (id) => axios.get(`${URL}/${id}`);

// update
export const updateRecipe = (id, recipe) => axios.patch(`${URL}/${id}`, recipe);

// delete
export const deleteRecipe = (id) => axios.delete(`${URL}/${id}`);
