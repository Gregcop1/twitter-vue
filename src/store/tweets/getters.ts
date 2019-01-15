import {State} from './state';
import {User} from '@/interfaces';

export const getters = {
  fetchTweetsPending: (state: State) => state.fetchPending,
  getTweets: (state: State) => (filter?: User) => {
    return !filter ? state.items : state.items.filter((tweet) => filter.account === tweet.author.account);
  },
};
