import React from "react";
import { Container, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import useStyles from "./styles/App";
import Recipe from "./components/Recipe";
import Header from "./components/Header";
import Form from "./components/Form";

const App = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Header />
      <Recipe />
      <Form />
      <Button variant="contained" color="default" size="large">
        <AddIcon />
      </Button>
    </Container>
  );
};

export default App;
