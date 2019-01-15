import {Tweet} from '@/interfaces';

export interface State {
  fetchPending: boolean;
  items: Tweet[];
}

export const state: State = {
  fetchPending: false,
  items: [],
};
