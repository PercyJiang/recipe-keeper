import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

import Recipe from "./Recipe";

const Recipes = ({ setCurrentRecipe, setFormOpen }) => {
  const recipes = useSelector((state) => state.recipes);
  const recipeContainer = [];
  for (const key in recipes) {
    const recipe = recipes[key];
    recipeContainer.push(
      <Grid key={recipe._id} item>
        <Recipe
          recipe={recipe}
          setCurrentRecipe={setCurrentRecipe}
          setFormOpen={setFormOpen}
        />
      </Grid>
    );
  }
  return <Grid>{recipeContainer}</Grid>;
};

export default Recipes;
