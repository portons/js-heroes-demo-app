import { handleActions } from 'redux-actions';

import { SET_TALKS, SELECT_TALK } from '../constants/action-types';

const INITIAL_STATE = {
	talks: null,
	selectedTalk: null
};

const talksReducer = handleActions({
	[SET_TALKS]: (state, action) => ({
		...state,
		talks: action.payload.data.response
	}),

	[SELECT_TALK]: (state, action) => ({
		...state,
		selectedTalk: action.payload.talk
	})
}, INITIAL_STATE);

export default talksReducer;