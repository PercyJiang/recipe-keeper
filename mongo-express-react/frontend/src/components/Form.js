import React from "react";
import {
  Dialog,
  Paper,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import FileBase from "react-file-base64";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "50ch",
    },
  },
  fileInput: {
    width: "97%",
    margin: "10px 17px",
  },
  typography: {
    marginLeft: 15,
    marginTop: 10,
  },
  button: {
    position: "relative",
    float: "right",
    marginRight: 20,
  },
}));

const Form = ({ formOpen, setFormOpen, currentRecipe }) => {
  const classes = useStyles();
  // for update
  const materialContainer = [];
  const stepContainer = [];
  if (currentRecipe !== undefined) {
    for (const k in currentRecipe.Materials) {
      materialContainer.push(
        <TextField
          label={"material " + (parseInt(k) + 1)}
          value={currentRecipe.Materials[k]}
          key={k}
        ></TextField>
      );
    }
    for (const k in currentRecipe.Steps) {
      stepContainer.push(
        <TextField
          label={"step " + k}
          value={currentRecipe.Steps[k]}
          key={k}
        ></TextField>
      );
    }
  }
  return (
    <Dialog
      open={formOpen}
      onClose={() => {
        setFormOpen(false);
      }}
    >
      <Paper elevation={3}>
        <form className={classes.form}>
          <div>
            <Typography variant="h4" className={classes.typography}>
              {currentRecipe === undefined
                ? "Create a new recipe"
                : "Update recipe " + currentRecipe.RecipeName}
            </Typography>
            <TextField
              required
              id="recipe_name"
              label="Recipe Name"
              variant="outlined"
              value={
                currentRecipe === undefined
                  ? undefined
                  : currentRecipe.RecipeName
              }
            />
            <div className={classes.fileInput}>
              Image &nbsp;
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) => console.log()}
              />
            </div>
            <TextField
              required
              id="creator"
              label="Creator"
              variant="outlined"
              value={
                currentRecipe === undefined ? undefined : currentRecipe.Creator
              }
            />
            <TextField
              id="date"
              label="Created At"
              variant="outlined"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={currentRecipe === undefined ? undefined : "2021-06-17"}
            />
            <Typography variant="h6" className={classes.typography}>
              Materials
            </Typography>
            {materialContainer}
            <br></br>
            <br></br>
            <Button variant="outlined" size="small" className={classes.button}>
              Add Material
            </Button>
            <Typography variant="h6" className={classes.typography}>
              Steps
            </Typography>
            {stepContainer}
            <br></br>
            <br></br>
            <Button
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={() => {
                console.log("percy: here");
              }}
            >
              Add Step
            </Button>
            <br></br>
            <br></br>
          </div>
        </form>
        <br></br>
        <Button
          variant="contained"
          color="default"
          size="large"
          className={classes.button}
        >
          <CheckIcon />
          Submit
        </Button>
      </Paper>
    </Dialog>
  );
};

export default Form;
