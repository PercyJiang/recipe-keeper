import React from "react";
import { Container, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import Recipe from "./components/Recipe";
import Header from "./components/Header";
import Form from "./components/Form";
import useStyles from "./styles/App";

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="lg">
        <Header />
        <Recipe />
        {/* <Form /> */}
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
