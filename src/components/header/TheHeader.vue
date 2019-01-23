<template>
  <header class="main-header">
    <div class="container">
      <TheMainNav />
      <p class="logo">
        <i
          :class="['fa', 'fa-fw', {
            'fa-spinner fa-pulse': tweetPending,
            'fa-twitter': !tweetPending,
          }]"
        />
      </p>
    </div>
  </header>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Getter} from 'vuex-class';
import TheMainNav from './TheMainNav.vue';

@Component({
  components: {TheMainNav},
})
export default class TheHeader extends Vue {
  @Getter('tweetPending') private tweetPending!: boolean;
}
</script>

<style lang="scss" scoped>
  .main-header {
    background-color: $white; box-shadow: 0 2px 3px $grey;
    text-align: center;

    .container { position: relative; }
    .logo {
      display: inline-block; margin: 10px 0;
      color: $blue;

      .fa { font-size: 1.5em; }
    }
  }
</style>
