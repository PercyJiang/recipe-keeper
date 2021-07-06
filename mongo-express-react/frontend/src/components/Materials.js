import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";

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

const Materials = () => {
  const classes = useStyles();
  const materialContainer = [];
  // if (currentRecipe !== undefined) {
  //   for (const k in currentRecipe.Materials) {
  //     materialContainer.push(
  //       <TextField
  //         key={k}
  //         label={"Material " + (parseInt(k) + 1)}
  //         value={currentRecipe.Materials[k]}
  //       ></TextField>
  //     );
  //   }
  // }
  // const addMaterialField = () => {
  //   setFields({ ...fields, Materials: [...fields.Materials, ""] });
  // };
  return (
    <Grid>
      <Typography variant="h6" className={classes.typography}>
        Materials
      </Typography>
      {materialContainer}
      <br></br>
      <br></br>
      <Button
        variant="outlined"
        size="small"
        className={classes.button}
        onClick={() => {}}
      >
        Remove Material
      </Button>
      <Button
        variant="outlined"
        size="small"
        className={classes.button}
        onClick={() => {}}
      >
        Add Material
      </Button>
    </Grid>
  );
};

export default Materials;
