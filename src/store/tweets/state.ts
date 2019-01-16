import {Tweet} from '@/interfaces';

export interface State {
  tweetPending: boolean;
  items: Tweet[];
}

export const state: State = {
  tweetPending: false,
  items: [],
};
