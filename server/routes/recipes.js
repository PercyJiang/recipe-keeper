import express from 'express'

import { createRecipe, deleteRecipe, getRecipes, updateRecipe } from '../controllers/recipes.js'

const router = express.Router()

// read
router.get('/', getRecipes)

// create
router.post('/', createRecipe)

// delete
router.delete('/:id', deleteRecipe)

// update
router.patch('/:id', updateRecipe)

export default router