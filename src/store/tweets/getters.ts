import {State} from './state';
import {Tweet} from '@/interfaces';
import store from '@/store.ts';

export const getters = {
  tweets: (state: State): Tweet[] => state.items,
  ownTweets: (state: State): Tweet[] =>
    state.items.filter((tweet) => store.getters.currentUser.account === tweet.author.account),
  tweetPending: (state: State) => state.tweetPending,
};
