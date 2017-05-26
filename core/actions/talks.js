import { SET_TALKS } from 'core/constants/action-types';

import TALKS_MOCK from 'core/mocks/Fetch talks.json';

export const fetchTalks = () => (dispatch) => dispatch(setTalks(TALKS_MOCK));

const setTalks = (data) => ({
  type: SET_TALKS,
  payload: data
});