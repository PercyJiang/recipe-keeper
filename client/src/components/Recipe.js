import React from 'react'
import { Card, CardHeader, Avatar, CardMedia, CardContent, Typography } from '@material-ui/core'

import useStyles from '../styles/recipe'
import default_image from '../images/default.jfif'

const Recipe = () => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="creator" className={classes.avatar}>C</Avatar>
                }
                // action={
                //     <IconButton aria-label="settings">
                //         <MoreVertIcon />
                //     </IconButton>
                // }
                title="Recipe Name"
                subheader="September 14, 2016"
            />
            <CardMedia className={classes.media} image={default_image} />
            <CardContent>
                <Typography>These are the materials</Typography>
                <br></br>
                <Typography>These are the steps</Typography>
            </CardContent>
        </Card>
    )
}

export default Recipe