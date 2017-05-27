import { get } from 'lodash';

export const talksSelector = (state) => get(state, 'talks.talks.days[0].events');
export const selectedTalkSelector = (state) => state.talks.selectedTalk;