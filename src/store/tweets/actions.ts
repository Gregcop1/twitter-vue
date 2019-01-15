import {ActionTree, Store} from 'vuex';
import tweetsHelper from '@/helpers/tweets';
import {Tweet} from '@/interfaces';
import {State} from './state';

export const actions: any = {
  fetchTweets: async ({commit, dispatch, state}: Store<State>): Promise<Tweet[]> => {
    if (!state.items.length) { // only fetch first time
      commit('fetchTweetsPending');

      return await new Promise((success) => {
        setTimeout(() => {
          commit('fetchTweetsSuccess', tweetsHelper.generateTweets(30));
          success();
        }, 1000);
      });
    }

    return Promise.resolve([]);
  },
};
