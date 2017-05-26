import { SET_TALKS, SELECT_TALK } from 'core/constants/action-types';

import TALKS_MOCK from 'core/mocks/Fetch talks.json';

export const fetchTalks = () => (dispatch) => dispatch(setTalks(TALKS_MOCK));

const setTalks = (data) => ({
  type: SET_TALKS,
  payload: data
});

export const selectTalk = (talk) => ({
  type: SELECT_TALK,
  payload: {
    talk
  }
});