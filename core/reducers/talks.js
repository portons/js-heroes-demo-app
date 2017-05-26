import { handleActions } from 'redux-actions';

import { SET_TALKS } from 'core/constants/action-types';

const talksReducer = handleActions({
	[SET_TALKS]: (state, action) => action.payload.response
}, null);

export default talksReducer;