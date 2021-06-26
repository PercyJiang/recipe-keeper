import React from "react";
import { Container } from "@material-ui/core";

import useStyles from "./styles/App";
import Recipe from "./components/Recipe";

const App = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Recipe />
    </Container>
  );
};

export default App;
