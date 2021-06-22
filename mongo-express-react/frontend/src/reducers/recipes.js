const reducers = (recipes = [], action) => {
  switch (action.type) {
    case "createRecipe":
      return [...recipes, action.payload];
    case "getRecipes":
      return action.payload;
    case "getRecipe":
      return recipes;
    case "updateRecipe":
      return recipes.map((recipe) =>
        recipe._id === action.payload._id ? action.payload : recipe
      );
    case "deleteRecipe":
      return recipes.filter((recipe) => recipe._id !== action.payload);
    default:
      return recipes;
  }
};

export default reducers;
