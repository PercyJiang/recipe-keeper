import React, { useState, useEffect } from 'react'
import { Paper, TextField, Button } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'

import makeStyles from '../styles/form'
import { createRecipe, updateRecipe } from '../actions/recipes'

const Form = ({ currentId, setCurrentId, setOpen }) => {
    const classes = makeStyles()
    const dispatch = useDispatch()
    const [recipeData, setRecipeData] = useState({
        recipeName: '',
        creator: '',
        image: '',
        materials: '',
        steps: ''
    })
    const recipe = useSelector((state) => (
        currentId ? state.recipes.find((recipe) => recipe._id === currentId) : null
    ))
    useEffect(() => { if (recipe) setRecipeData(recipe) }, [recipe])

    const clear = () => {
        setCurrentId(0)
        setRecipeData({
            recipeName: '',
            creator: '',
            image: '',
            materials: '',
            steps: ''
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (currentId === 0) dispatch(createRecipe(recipeData))
        else dispatch(updateRecipe(currentId, recipeData))
        clear()
        setOpen(false)
    }

    return (
        <Paper className={classes.paper}>
            <form
                autoComplete="off"
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
            >
                <TextField
                    autoFocus
                    fullWidth
                    margin="dense"
                    label="Recipe Name"
                    value={recipeData.recipeName}
                    onChange={(e) => setRecipeData(
                        { ...recipeData, recipeName: e.target.value }
                    )}
                />
                <TextField
                    fullWidth
                    margin="dense"
                    label="Creator"
                    value={recipeData.creator}
                    onChange={(e) => setRecipeData(
                        { ...recipeData, creator: e.target.value }
                    )}
                />
                <TextField
                    multiline
                    fullWidth
                    margin="dense"
                    label="Materials"
                    value={recipeData.materials}
                    onChange={(e) => setRecipeData(
                        { ...recipeData, materials: e.target.value.split(',') }
                    )}
                />
                <TextField
                    multiline
                    fullWidth
                    margin="dense"
                    label="Steps"
                    value={recipeData.steps}
                    onChange={(e) => setRecipeData(
                        { ...recipeData, steps: e.target.value.split(',') }
                    )}
                />
                <div className={classes.fileInput}>
                    Image &nbsp;
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setRecipeData(
                            { ...recipeData, image: base64 }
                        )}
                    />
                </div>
                <Button
                    className={classes.button}
                    variant="contained"
                    onClick={clear}
                >
                    Clear
                </Button>
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </Paper>
    )
}

export default Form