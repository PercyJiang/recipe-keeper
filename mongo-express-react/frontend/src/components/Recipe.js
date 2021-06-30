import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import useStyles from "../styles/Recipe";
import ramen_image from "../images/kimchi_ramen.jpg";

const Recipe = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title="Ramen" subheader="Created by Percy at 06-17-2021" />
      <CardMedia className={classes.media} image={ramen_image} />
      <CardContent>
        <Typography variant="h6">Materials</Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          Ramen, Condiments, Egg, Small Pot
        </Typography>
        <br></br>
        <Typography variant="h6">Steps</Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          1. Boil water in small pot
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          2. Put in ramen and condiments
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          3. Boil
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          4. Add egg
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          5. Boil
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.actions}>
        <IconButton aria-label="add to favorites">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="share">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Recipe;
