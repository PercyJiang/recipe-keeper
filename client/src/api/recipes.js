import axios from 'axios'

const url = 'http://localhost:5000/recipes'

// read
export const getRecipes = () => axios.get(url)

// create
export const createRecipe = (recipe) => axios.post(url, recipe)

// delete
export const deleteRecipe = (id) => axios.delete(`${url}/${id}`)

// update
export const updateRecipe = (id, newRecipe) => axios.patch(`${url}/${id}`, newRecipe)