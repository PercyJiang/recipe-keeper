import React from "react";
import { useSelector } from "react-redux";
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

const Form = ({ formOpen, setFormOpen, currentId }) => {
  const classes = useStyles();
  const recipe = useSelector((state) =>
    currentId === undefined
      ? undefined
      : state.recipes.find((recipe) => recipe._id === currentId)
  );
  // for update
  const materialContainer = [];
  const stepContainer = [];
  if (recipe !== undefined) {
    for (const k in recipe.Materials) {
      materialContainer.push(
        <TextField
          label={"material " + (parseInt(k) + 1)}
          value={recipe.Materials[k]}
          key={k}
        ></TextField>
      );
    }
    for (const k in recipe.Steps) {
      stepContainer.push(
        <TextField
          label={"step " + k}
          value={recipe.Steps[k]}
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
              {recipe === undefined
                ? "Create a new recipe"
                : "Update recipe " + recipe.RecipeName}
            </Typography>
            <TextField
              required
              id="recipe_name"
              label="Recipe Name"
              variant="outlined"
              value={currentId === undefined ? undefined : recipe.RecipeName}
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
              value={currentId === undefined ? undefined : recipe.Creator}
            />
            <TextField
              id="date"
              label="Created At"
              variant="outlined"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={currentId === undefined ? undefined : "2021-06-17"}
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
                stepContainer.push(
                  <TextField label={"step 1"} key={1}></TextField>
                );
                console.log("percy: stepContainer: ", stepContainer);
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
