import express from 'express'
import mongoose from 'mongoose'

import RecipeModel from '../models/recipe.js'

const router = express.Router()

// read
export const getRecipes = async (req, res) => {
    try {
        const recipes = await RecipeModel.find()
        res.status(200).json(recipes)
    } catch (error) {
        res.status(404).json({ 'controller error': error })
    }
}
export const getRecipe = async (req, res) => {
    try {
        const { id } = req.params
        const recipe = await RecipeModel.findById(id)
        res.status(200).json(recipe)
    } catch (error) {
        res.status(404).json({ 'controller error': error })
    }
}

// create
export const createRecipe = async (req, res) => {
    try {
        const recipe = new RecipeModel(req.body)
        await recipe.save()
        res.status(201).json(recipe)
    } catch (error) {
        res.status(404).json({ 'controller error': error })
    }
}

// delete
export const deleteRecipe = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`controller: id ${id} not found`)
    }
    await RecipeModel.findByIdAndRemove(id)
    res.json({ message: 'controller: delete recipe success' })
}

// update
export const updateRecipe = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`controller: id ${id} not found`)
    }
    const updatedRecipe = req.body
    updateRecipe._id = id
    await RecipeModel.findByIdAndUpdate(id, updatedRecipe, { new: true })
    res.json(updatedRecipe)
}

export default router