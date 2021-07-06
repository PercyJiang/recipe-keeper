import React, { useState, useEffect } from "react";
import {
  Dialog,
  Paper,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import FileBase from "react-file-base64";

import Materials from "./Materials";
import Steps from "./Steps";

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
  const [fields, setFields] = useState({});
  useEffect(() => {
    if (currentRecipe !== undefined) {
      setFields({
        Title: "Update recipe " + currentRecipe.RecipeName,
        RecipeName: currentRecipe.RecipeName,
        Image: undefined,
        Creator: currentRecipe.Creator,
        CreatedAt: "2021-07-04",
        Materials: currentRecipe.Materials,
        Steps: currentRecipe.Steps,
      });
    } else {
      setFields({
        Title: "Create a new recipe",
        RecipeName: undefined,
        Image: undefined,
        Creator: undefined,
        CreatedAt: undefined,
        Materials: [],
        Steps: {},
      });
    }
  }, [currentRecipe]);
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
              {fields.Title}
            </Typography>
            <TextField
              required
              id="recipe_name"
              label="Recipe Name"
              variant="outlined"
              value={fields.RecipeName}
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
              value={fields.Creator}
            />
            <TextField
              id="date"
              label="Created At"
              variant="outlined"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={fields.CreatedAt}
            />
            <Materials fields={fields} setFields={setFields} />
            <Steps fields={fields} setFields={setFields} />
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
