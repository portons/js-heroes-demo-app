import { combineReducers } from 'redux';

import talksReducer from 'core/reducers/talks';

export default combineReducers({
	talks: talksReducer
});