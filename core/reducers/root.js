import { combineReducers } from 'redux';
import recipesReducer from './recipes';

export default combineReducers({
  recipes: recipesReducer
});