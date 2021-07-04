import React, { useEffect } from "react";
import { Container, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";

import Recipes from "./components/Recipes";
import Header from "./components/Header";
import Form from "./components/Form";
import useStyles from "./styles/App";

import { getRecipes } from "./actions/recipes";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  return (
    <div>
      <Container maxWidth="lg">
        <Header />
        <Recipes />
        <Form />
        <br></br>
        <Button
          variant="outlined"
          color="default"
          size="large"
          className={classes.button}
        >
          <AddIcon />
        </Button>
      </Container>
    </div>
  );
};

export default App;
