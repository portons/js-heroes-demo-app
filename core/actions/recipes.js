import { ADD_RECIPE, TOGGLE_FAVORITE, SET_RECIPES } from 'core/consts/action-types';
import { RECIPES_URL } from 'core/consts/config';

export const addRecipe = (title, description) => ({
  type: ADD_RECIPE,
  payload: {
    title,
    description
  }
});

export const toggleFavorite = (title) => ({
  type: TOGGLE_FAVORITE,
  payload: title
});

export const fetchRecipes = () => (dispatch) => {
  fetch(RECIPES_URL)
    .then(response => {
      if (response.status !== 200) {
        console.log(`Error fetching recipes: ${ response.status }`);
      } else {
        response.json().then(data => dispatch(setRecipes(data)));
      }
    })
    .catch(err => console.log(`Error fetching recipes: ${ err }`));
};

export const setRecipes = (data) => ({
  type: SET_RECIPES,
  payload: data
});