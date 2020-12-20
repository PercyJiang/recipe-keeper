import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'

import useStyles from '../styles/recipes'
import Recipe from './Recipe'

const Recipes = ({ setCurrentId }) => {
    const classes = useStyles()
    const recipes = useSelector((state) => state.recipes)

    const recipeContainer = []
    let recipeGrids = []
    for (let i = 1; i <= recipes.length; i++) {
        recipeGrids.push(
            <Grid className={classes.grid} key={recipes[i - 1]._id} item xs={12} sm={6} md={6}>
                <Recipe recipe={recipes[i - 1]} setCurrentId={setCurrentId} />
            </Grid>
        )
        if (i % 4 === 0 || i === recipes.length) {
            recipeContainer.push(
                <Grid className={classes.mainContainer} key={i}>{recipeGrids}</Grid>
            )
            recipeGrids = []
        }
    }

    return (
        !recipes.length ? <CircularProgress /> : (<Grid>{recipeContainer}</Grid>)
    )
}

export default Recipes