import React from "react";
import { Paper, TextField, Button, Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import FileBase from "react-file-base64";

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
          <div className={classes.fileInput}>
            Image &nbsp;
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => console.log()}
            />
          </div>
          <TextField required id="creator" label="Creator" variant="outlined" />
          <TextField
            id="date"
            label="Created At"
            variant="outlined"
            type="date"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Typography variant="h6">Materials</Typography>
          <TextField label="material 1"></TextField>
          <TextField label="material 2"></TextField>
          <br></br>
          <Button>more</Button>
          <Typography variant="h6">Steps</Typography>
          <TextField label="step 1"></TextField>
          <TextField label="step 2"></TextField>
          <TextField label="step 3"></TextField>
          <br></br>
          <Button>more</Button>
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
