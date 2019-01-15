import {User} from '@/interfaces';

export interface State {
  user: User;
}

export const state: State = {
  user: {
    name: 'Grégory Copin',
    email: 'gregcop1@gmail.com',
    account: '@gregcop1',
    tweetCount: 500 + Math.ceil(Math.random() * 200),
    subscriber: Math.ceil(Math.random() * 200),
    subscription: Math.ceil(Math.random() * 200),
  },
};
