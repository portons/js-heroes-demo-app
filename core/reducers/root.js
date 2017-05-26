import { combineReducers } from 'redux';

import talksReducer from '../reducers/talks';

export default combineReducers({
	talks: talksReducer
});