import { handleActions } from 'redux-actions';

import { SET_TALKS } from 'core/constants/action-types';

const INITIAL_STATE = {
	talks: null
};

const talksReducer = handleActions({
	[SET_TALKS]: (state, action) => ({ talks: action.payload })
}, INITIAL_STATE);

export default talksReducer;