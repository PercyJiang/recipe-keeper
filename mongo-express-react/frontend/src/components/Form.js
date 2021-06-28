import React from "react";
import { Paper, TextField, Button, Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

import useStyles from "../styles/Form";

const Form = () => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Create Recipe
      </Typography>
      <form className={classes.form}>
        <div>
          <TextField
            required
            id="recipe_name"
            label="Recipe Name"
            variant="outlined"
          />
          <TextField required id="creator" label="Creator" variant="outlined" />
        </div>
      </form>
      <Button variant="contained" color="default" size="large">
        <CheckIcon />
        Submit
      </Button>
    </Paper>
  );
};

export default Form;
