import { ADD_RECIPE, TOGGLE_FAVORITE, SET_RECIPES } from 'core/consts/action-types'

const recipesReducer = (recipes = [], action) => {

  switch (action.type) {
    case ADD_RECIPE:
      return recipes.concat(Object.assign(action.payload, { favorite: false }));

    case TOGGLE_FAVORITE:
      return recipes.map(recipe =>
        recipe.title !== action.payload
          ? recipe
          : Object.assign({}, recipe, { favorite: !recipe.favorite })
      );

    case SET_RECIPES:
      return action.payload.recipes;
  }

  return recipes;
};

export default recipesReducer;