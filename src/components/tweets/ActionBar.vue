<template>
  <p class="list-item-actions">
    <button class="fa fa-comment-o fa-fw answer" :class="{active: !!answer}">{{answer}}</button>
    <button class="fa fa-retweet fa-fw retweet" :class="{active: !!retweet}">{{retweet}}</button>
    <button class="fa fa-fw like" :class="{active: !!like, 'fa-heart': !!like, 'fa-heart-o': !like}">{{like}}</button>
    <button class="fa fa-envelope-o fa-fw pm" />
  </p>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class ActionBar extends Vue {
  @Prop() private answer!: number;
  @Prop() private retweet!: number;
  @Prop() private like!: number;
}
</script>

<style lang="scss" scoped>
  .list-item-actions {
    button {
      margin-right: 20px; min-width: 40px;
      font-family: $font; font-size: .9em; font-weight: $fw-semibold; color: $dark-grey;
      transition: color 200ms linear;

      &:before {
        margin-right: 5px;
        font-family: $fontAwesome; font-size: 1.3em;
      }
      &:hover { text-decoration: none; }

    }
    .answer.active, .answer:hover,
    .pm:hover { color: $blue; }
    .like.active, .like:hover { color: $red; }
    .retweet.active, .retweet:hover { color: $green; }
  }
</style>
