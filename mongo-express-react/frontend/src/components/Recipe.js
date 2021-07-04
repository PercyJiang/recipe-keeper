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
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import ramen_image from "../images/kimchi_ramen.jpg";

const useStyles = makeStyles(() => ({
  root: {
    margin: "auto",
    marginTop: 20,
    width: 700,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const Recipe = ({ recipe }) => {
  const classes = useStyles();
  let materialString = "";
  for (const key in recipe.Materials) {
    materialString += recipe.Materials[key] + ", ";
  }
  const stepContainer = [];
  for (const key in recipe.Steps) {
    const step = key + ". " + recipe.Steps[key];
    stepContainer.push(
      <Typography key={key} variant="body1" color="textSecondary" component="p">
        {step}
      </Typography>
    );
  }
  materialString = materialString.substr(0, materialString.length - 2);
  return (
    <Card className={classes.root}>
      <CardHeader
        title={recipe.RecipeName}
        subheader={`Created by ${recipe.Creator} at ${recipe.CreatedAt}`}
      />
      <CardMedia className={classes.media} image={ramen_image} />
      <CardContent>
        <Typography variant="h6">Materials</Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {materialString}
        </Typography>
        <br></br>
        <Typography variant="h6">Steps</Typography>
        {stepContainer}
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
