import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import recipeRoutes from './routes/recipes.js'

// setup middlewares
dotenv.config()
const PORT = process.env.PORT || 5000
const app = express()
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

// specify routers
app.use('/recipes', recipeRoutes)

// connect
mongoose.connect(
    // for mongodb
    process.env.CONNECTION_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(
    () => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
).catch(
    (err) => console.log(err)
)
mongoose.set('useFindAndModify', false)

// heroku
app.get('/', (req, res) => { res.send('hello heroku') })