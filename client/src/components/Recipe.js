import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { Card, CardHeader, Avatar, CardMedia, CardContent, Typography, Tooltip, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

import UpdateDialog from './UpdateDialog'
import useStyles from '../styles/recipe'
import default_image from '../images/default.jfif'
import { deleteRecipe } from '../actions/recipes'

const Recipe = ({ recipe, setCurrentId }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="creator" className={classes.avatar}>
                        {recipe.creator}
                    </Avatar>
                }
                action={
                    <UpdateDialog
                        currentId={recipe._id}
                        setCurrentId={setCurrentId}
                        onClick={() => setCurrentId(recipe._id)}
                    />
                }
                title={recipe.recipeName || 'No Name'}
                subheader={
                    <Typography variant="body2">
                        {moment(recipe.createdAt).year() + '-'}
                        {moment(recipe.createdAt).month() + 1 + '-'}
                        {moment(recipe.createdAt).date()}
                    </Typography>
                }
            />
            <CardMedia className={classes.media} image={recipe.image || default_image} />
            <CardContent>
                <Typography>Materials:</Typography>
                {recipe.materials.map(
                    (e) => <Typography key={recipe.materials.indexOf(e)}>&nbsp;&nbsp;{e}</Typography>
                )}
                <br></br>
                <Typography>Steps:</Typography>
                {recipe.steps.map(
                    (e) => <Typography key={recipe.steps.indexOf(e)}>&nbsp;&nbsp;{e}</Typography>
                )}
            </CardContent>
            <Tooltip className={classes.tooltip} title="Delete">
                <IconButton onClick={() => dispatch(deleteRecipe(recipe._id))}>
                    <DeleteIcon className={classes.deleteIcon} />
                </IconButton>
            </Tooltip>

        </Card>
    )
}

export default Recipe