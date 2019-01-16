import {State} from './state';
import {Tweet} from '@/interfaces';

export const mutations = {
  addTweetSuccess: (state: State, payload: Tweet) => {
    state.tweetPending = false;
    state.items = [payload, ...state.items];
  },
  fetchTweetsSuccess: (state: State, payload: Tweet[]) => {
    state.tweetPending = false;
    state.items = payload;
  },
  tweetPending: (state: State) => state.tweetPending = true,
};
