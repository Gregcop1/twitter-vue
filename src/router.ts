import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store.ts';
import Home from './views/Home.vue';
import MyTweets from './views/MyTweets.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/my-tweets',
      name: 'my-tweets',
      component: MyTweets,
    },
  ],
});
