import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { Card, CardHeader, Avatar, CardMedia, CardContent, Typography } from '@material-ui/core'

import UpdateDialog from './UpdateDialog'
import useStyles from '../styles/recipe'
import default_image from '../images/default.jfif'

const Recipe = ({ recipe, setCurrentId }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="creator" className={classes.avatar}>C</Avatar>
                }
                action={<UpdateDialog />}
                title={recipe.recipe_name || 'No Name'}
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
                <Typography> {recipe.materials.map((e) => `#${e} `)}</Typography>
                <br></br>
                <Typography> {recipe.steps.map((e) => `#${e} `)}</Typography>
            </CardContent>
        </Card>
    )
}

export default Recipe