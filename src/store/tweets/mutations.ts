import {State} from './state';
import {Tweet} from '@/interfaces';

export const mutations = {
  fetchTweetsPending: (state: State) => state.fetchPending = true,
  fetchTweetsSuccess: (state: State, payload: Tweet[]) => {
    state.fetchPending = false;
    state.items = payload;
  },
};
