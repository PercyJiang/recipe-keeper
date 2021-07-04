import React, { useEffect, useState } from "react";
import { Container, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";

import Recipes from "./components/Recipes";
import Header from "./components/Header";
import CreateDialog from "./components/CreateDialog";
import useStyles from "./styles/App";

import { getRecipes } from "./actions/recipes";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  return (
    <div>
      <Container maxWidth="lg">
        <Header />
        <Recipes />
        <br></br>
        <Button
          variant="outlined"
          color="default"
          size="large"
          className={classes.button}
          onClick={() => {
            setCreateDialogOpen(true);
          }}
        >
          <AddIcon />
        </Button>
        <CreateDialog
          createDialogOpen={createDialogOpen}
          setCreateDialogOpen={setCreateDialogOpen}
        />
      </Container>
    </div>
  );
};

export default App;
