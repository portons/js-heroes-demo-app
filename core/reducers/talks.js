import { handleActions } from 'redux-actions';
import { isEqual } from 'lodash';

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

	[SELECT_TALK]: (state, { payload: { talk } }) => {
		if (isEqual(state.selectedTalk, talk)) {
			return ({
				...state,
				selectedTalk: null
			});
		}

		return ({
			...state,
			selectedTalk: talk
		});
	}
}, INITIAL_STATE);

export default talksReducer;