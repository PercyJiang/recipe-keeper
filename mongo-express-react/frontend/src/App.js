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
  // effect
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  // state
  const [formOpen, setFormOpen] = useState(false);
  // const [currentId, setCurrentId] = useState(undefined);
  const [currentRecipe, setCurrentRecipe] = useState(undefined);
  return (
    <div>
      <Container maxWidth="lg">
        <Header />
        <Recipes
          setCurrentRecipe={setCurrentRecipe}
          setFormOpen={setFormOpen}
        />
        <br></br>
        <Button
          variant="outlined"
          color="default"
          size="large"
          className={classes.button}
          onClick={() => {
            setCurrentRecipe(undefined);
            setFormOpen(true);
          }}
        >
          <AddIcon />
        </Button>
      </Container>
      <Form
        formOpen={formOpen}
        setFormOpen={setFormOpen}
        currentRecipe={currentRecipe}
      />
    </div>
  );
};

export default App;
