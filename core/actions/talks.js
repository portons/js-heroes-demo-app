import { API_URL } from 'core/constants/config';
import { SET_TALKS } from 'core/constants/action-types';

export const fetchTalks = () => (dispatch) => {
	fetch(API_URL).then(response => {
		response.json().then(data => dispatch(setTalks(data)));
	});
};

const setTalks = (data) => ({
  type: SET_TALKS,
  payload: data
});