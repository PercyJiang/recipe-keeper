import mongoose from 'mongoose'

const recipeSchema = mongoose.Schema({
    dish_name: String,
    creator: String,
    image: String,
    materials: [String],
    steps: [String],
    createdAt: { type: Date, default: new Date() }
})

const RecipeModel = mongoose.model('Recipes', recipeSchema)

export default RecipeModel