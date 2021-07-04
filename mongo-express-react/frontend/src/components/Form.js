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

const Form = ({ formOpen, setFormOpen }) => {
  const classes = useStyles();
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
              Create a new recipe
            </Typography>
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
            <TextField
              required
              id="creator"
              label="Creator"
              variant="outlined"
            />
            <TextField
              id="date"
              label="Created At"
              variant="outlined"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Typography variant="h6" className={classes.typography}>
              Materials
            </Typography>
            <TextField label="material 1"></TextField>
            <TextField label="material 2"></TextField>
            <br></br>
            <br></br>
            <Button variant="outlined" size="small" className={classes.button}>
              more
            </Button>
            <Typography variant="h6" className={classes.typography}>
              Steps
            </Typography>
            <TextField label="step 1"></TextField>
            <TextField label="step 2"></TextField>
            <TextField label="step 3"></TextField>
            <br></br>
            <br></br>
            <Button variant="outlined" size="small" className={classes.button}>
              more
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
