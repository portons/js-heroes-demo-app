import { handleActions } from 'redux-actions';

import { SET_TALKS } from '../constants/action-types';

const talksReducer = handleActions({
	[SET_TALKS]: (state, action) => action.payload.data.response
}, null);

export default talksReducer;