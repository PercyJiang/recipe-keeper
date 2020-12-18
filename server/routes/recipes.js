import express from 'express'

import { createRecipe, deleteRecipe, getRecipe, getRecipes, updateRecipe } from '../controllers/recipes.js'

const router = express.Router()

// read
router.get('/', getRecipes)
router.get('/:id', getRecipe)

// create
router.post('/', createRecipe)

// delete
router.delete('/:id', deleteRecipe)

// update
router.patch('/:id', updateRecipe)

export default router