<template>
  <div id="app">
    <Header />
    <div class="main-container">
      <div class="container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/header/Header.vue';
import {mapActions} from 'vuex';

@Component({
  components: {Header},
  methods: mapActions(['fetchTweets']),
})
export default class App extends Vue {
  private fetchTweets!: () => void;

  public mounted() {
    this.fetchTweets();
  }
}
</script>

<style lang="scss">
  @import "./stylesheets/index.scss";
</style>
