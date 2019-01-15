import {State} from './state';

export const getters = {
  fetchTweetsPending: (state: State) => state.fetchPending,
  tweets: (state: State) => state.items,
};
