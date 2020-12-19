import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'

import useStyles from '../styles/recipes'
import Recipe from './Recipe'

const Recipes = ({ setCurrentId }) => {
    const classes = useStyles()
    const recipes = useSelector((state) => state.recipes)

    return (
        !recipes.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer}>
                {recipes.map((recipe) => (
                    <Grid key={recipe._id} item xs={12} sm={6} md={6}>
                        <Recipe recipe={recipe} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Recipes