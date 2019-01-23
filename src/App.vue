<template>
  <div id="app">
    <TheHeader />
    <div class="main-container">
      <div class="container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {Action} from 'vuex-class';
import TheHeader from './components/header/TheHeader.vue';

@Component({
  components: {TheHeader},
})
export default class App extends Vue {
  @Action('fetchTweets') private fetchTweets!: () => void;

  public mounted() {
    this.fetchTweets();
  }
}
</script>

<style lang="scss">
  @import "./stylesheets/index.scss";

  .main-container {
    padding: $page-padding 0;

    .column { display: inline-block; vertical-align: top; }
    .aside-primary,
    .aside-secondary { width: 23%; }
    .aside-primary { margin-right: $page-padding; }
    .aside-secondary { margin-left: $page-padding; }
    .main-content { width: 50%; }
  }
</style>
