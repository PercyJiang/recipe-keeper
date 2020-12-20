import { CREATE, DELETE, FETCH_ALL, UPDATE } from '../constants/actionTypes'
import * as api from '../api/recipes'

// read
export const getRecipes = () => async (dispatch) => {
    try {
        const { data } = await api.getRecipes()
        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log('action error: ', error)
    }
}

// create
export const createRecipe = (recipe) => async (dispatch) => {
    try {
        const { data } = await api.createRecipe(recipe)
        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log('action error: ', error)
    }
}

// delete
export const deleteRecipe = (id) => async (dispatch) => {
    try {
        await await api.deleteRecipe(id)
        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log('action error: ', error)
    }
}

// update
export const updateRecipe = (id, recipe) => async (dispatch) => {
    try {
        const { data } = await api.updateRecipe(id, recipe)
        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log('action error: ', error)
    }
}