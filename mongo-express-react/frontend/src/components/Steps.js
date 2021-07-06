import React, { useState } from "react";
import { Grid, Button, Typography, TextField } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
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

const Steps = ({ fields, setFields }) => {
  const classes = useStyles();
  const [stepContainer, setStepContainer] = useState(
    Object.keys(fields.Steps).map((k) => (
      <TextField
        key={k}
        label={"Step " + k}
        value={fields.Steps[k]}
      ></TextField>
    ))
  );
  const addStepField = () => {
    const i = stepContainer.length;
    setStepContainer([
      ...stepContainer,
      <TextField
        key={parseInt(i) + 1}
        label={"Step " + (parseInt(i) + 1)}
      ></TextField>,
    ]);
  };
  const removeStepField = () => {
    setStepContainer(stepContainer.slice(0, stepContainer.length - 1));
  };
  return (
    <Grid>
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
          removeStepField();
        }}
      >
        Remove Step
      </Button>
      <Button
        variant="outlined"
        size="small"
        className={classes.button}
        onClick={() => {
          addStepField();
        }}
      >
        Add Step
      </Button>
    </Grid>
  );
};

export default Steps;
