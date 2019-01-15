import Vue from 'vue';
import Vuex from 'vuex';
import {tweetsModule as tweets} from '@/store/tweets';
import {userModule as user} from '@/store/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tweets,
    user,
  },
});
