import React from "react";
import { Container, Button } from "@material-ui/core";

import {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from "./api/recipes";

const App = () => {
  return (
    <Container>
      App
      <Button
        onClick={() => {
          getRecipes().then((result) => console.log(result.data));
        }}
      >
        getRecipes
      </Button>
      <Button
        onClick={() => {
          getRecipe("60cc121e31a80e364c7d6111")
            .then((result) => console.log(result.data))
            .catch((error, message) => {
              console.log(error.response.data);
            });
        }}
      >
        getRecipe
      </Button>
      <Button
        onClick={() => {
          createRecipe({
            Materials: ["Ramen", "Condiments", "Egg", "Small Pot"],
            RecipeName: "Ramen",
            Image: "None",
            Creator: "Spongebob",
            CreatedAt: "06-21-2021",
            Steps: {
              1: "Boil water in small pot",
              2: "Put in ramen and condiments",
              3: "Boil",
              4: "Add egg",
              5: "Boil",
            },
          }).then((result) => console.log(result.data));
        }}
      >
        createRecipe
      </Button>
      <Button
        onClick={() => {
          updateRecipe("60d1581a40d013021e67e03b", {
            Materials: ["Ramen", "Condiments", "Egg", "Small Pot"],
            RecipeName: "Ramen",
            Image: "None",
            Creator: "Star",
            CreatedAt: "06-21-2021",
            Steps: {
              1: "Boil water in small pot",
              2: "Put in ramen and condiments",
              3: "Boil",
              4: "Add egg",
              5: "Boil",
            },
          })
            .then((result) => console.log(result.data))
            .catch((error) => {
              console.log(error);
              console.log(error.status);
              console.log(error.message);
              console.log(error.headers);
              console.log(error.body);
            });
        }}
      >
        updateRecipe
      </Button>
      <Button
        onClick={() => {
          deleteRecipe("60d1581a40d013021e67e03b").then((result) =>
            console.log(result.data)
          );
        }}
      >
        deleteRecipe
      </Button>
    </Container>
  );
};

export default App;
