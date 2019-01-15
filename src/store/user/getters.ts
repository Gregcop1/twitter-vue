import {State} from './state';

export const getters = {
  currentUser: (state: State) => state.user,
};
