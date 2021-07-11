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

const Materials = ({ fields, setFields }) => {
  const classes = useStyles();
  const loadMaterials = (materials) => {
    return materials.map((material, i) => (
      <TextField
        key={i}
        label={"Material " + (parseInt(i) + 1)}
        value={materials[i]}
        onChange={(e) => {
          materials[i] = e.target.value;
          setFields({
            ...fields,
            Materials: materials,
          });
          setMaterialContainer(loadMaterials(materials));
          console.log("percy: fields: ", fields);
          console.log("percy: materialContainer: ", materialContainer);
        }}
      ></TextField>
    ));
  };
  const [materialContainer, setMaterialContainer] = useState(
    loadMaterials(fields.Materials)
  );
  const addMaterialField = () => {
    const i = materialContainer.length;
    setFields({
      ...fields,
      Materials: [...fields.Materials, (fields.Materials[i] = "")],
    });
    setMaterialContainer(loadMaterials());
    console.log("percy: fields: ", fields);
    console.log("percy: materialContainer: ", materialContainer);
  };
  const removeMaterialField = () => {
    setMaterialContainer(
      materialContainer.slice(0, materialContainer.length - 1)
    );
  };
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
        onClick={() => {
          removeMaterialField();
        }}
      >
        Remove Material
      </Button>
      <Button
        variant="outlined"
        size="small"
        className={classes.button}
        onClick={() => {
          addMaterialField();
        }}
      >
        Add Material
      </Button>
    </Grid>
  );
};

export default Materials;
