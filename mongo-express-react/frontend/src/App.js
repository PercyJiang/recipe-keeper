import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { getRecipes } from "./actions/recipes";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  const recipes = useSelector((state) => state.recipes);
  console.log("percy debug: recipes: ", recipes);

  return <Container>App</Container>;
};

export default App;
