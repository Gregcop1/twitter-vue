import {ActionTree, Store} from 'vuex';
import tweetsHelper from '@/helpers/tweets';
import {Tweet, User} from '@/interfaces';
import {State} from './state';

interface TweetSubmission {
  message: string;
  user: User;
}

export const actions: any = {
  addTweet: async ({commit}: Store<State>, {message, user}: TweetSubmission): Promise<Tweet> => {
    commit('tweetPending');

    return await new Promise((success) => {
      setTimeout(() => {
        commit('addTweetSuccess', {
          author: user,
          date: new Date().getTime(),
          message,
          shares: {
            answer: 0,
            like: 0,
            retweet: 0,
          },
        });
        success();
      }, 1000);
    });
  },
  fetchTweets: async ({commit, state}: Store<State>): Promise<Tweet[]> => {
    if (!state.items.length) { // only fetch first time
      commit('tweetPending');

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
