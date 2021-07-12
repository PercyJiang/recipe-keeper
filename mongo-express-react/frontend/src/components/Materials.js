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
  const makeMaterial = (value, i) => {
    return (
      <TextField
        key={i}
        label={"Material " + (parseInt(i) + 1)}
        value={value}
        onChange={(e) => {
          changeMaterial(e.target.value, i);
          changeFields(e.target.value, i);
        }}
      ></TextField>
    );
  };
  const [materialContainer, setMaterialContainer] = useState(
    fields.Materials.map((value, i) => makeMaterial(value, i))
  );
  const changeMaterial = (value, i) => {
    setMaterialContainer([
      ...materialContainer.slice(0, i),
      makeMaterial(value, i),
      ...materialContainer.slice(i + 1),
    ]);
  };
  const changeFields = (value, i) => {
    setFields({
      ...fields,
      Materials: [
        ...fields.Materials.slice(0, i),
        value,
        ...fields.Materials.slice(i + 1),
      ],
    });
  };
  const addMaterialField = () => {
    const i = materialContainer.length;
    changeMaterial("", i);
    changeFields("", i);
  };
  const removeMaterialField = () => {
    setMaterialContainer(
      materialContainer.slice(0, materialContainer.length - 1)
    );
    setFields({
      ...fields,
      Materials: fields.Materials.slice(0, fields.Materials.length - 1),
    });
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
