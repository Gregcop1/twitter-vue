<template>
  <header class="main-header">
    <div class="container">
      <Nav />
      <p class="logo">
        <i
          class="fa fa-fw"
          :class="{
            'fa-spinner fa-pulse': tweetPending,
            'fa-twitter': !tweetPending,
          }"
        />
      </p>
    </div>
  </header>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Nav from './Nav.vue';
import {mapGetters} from 'vuex';

@Component({
  components: {Nav},
  computed: mapGetters(['tweetPending']),
})
export default class Header extends Vue {
  private tweetPending!: boolean;
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
