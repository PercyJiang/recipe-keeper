import { CREATE, READ, UPDATE, DELETE } from "../constants";

const reducers = (recipes = [], action) => {
  switch (action.type) {
    case CREATE:
    case READ:
    case UPDATE:
    case DELETE:
    default:
      return recipes;
  }
};

export default reducers;
