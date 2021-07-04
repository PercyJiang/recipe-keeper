import React, { useEffect, useState } from "react";
import { Container, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";

import Recipes from "./components/Recipes";
import Header from "./components/Header";
import Form from "./components/Form";

import { getRecipes } from "./actions/recipes";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  button: {
    position: "fixed",
    bottom: 20,
    right: 150,
  },
}));

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  const [formOpen, setFormOpen] = useState(false);
  const [currentId, setCurrentId] = useState(undefined);
  return (
    <div>
      <Container maxWidth="lg">
        <Header />
        <Recipes setCurrentId={setCurrentId} />
        <br></br>
        <Button
          variant="outlined"
          color="default"
          size="large"
          className={classes.button}
          onClick={() => {
            setFormOpen(true);
          }}
        >
          <AddIcon />
        </Button>
      </Container>
      <Form
        formOpen={formOpen}
        setFormOpen={setFormOpen}
        currentId={currentId}
      />
    </div>
  );
};

export default App;
