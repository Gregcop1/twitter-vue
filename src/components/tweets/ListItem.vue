<template>
  <div  class="block list-item">
    <img :src="getAvatar(tweet.author.email)" :alt="tweet.author.name" class="avatar" />
    <div class="list-item-content">
      <p class="list-item-meta">
        <span class="list-item-name">{{tweet.author.name}}</span>
        <span class="list-item-account">{{tweet.author.account}}</span>
        <span class="list-item-date"></span>
      </p>
      <p class="list-item-message">{{tweet.message}}</p>
      <img v:if="tweet.image" :src="tweet.image" class="list-item-image" alt=""/>
      <ActionBar
        :answer="tweet.shares.answer"
        :like="tweet.shares.like"
        :retweet="tweet.shares.retweet"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import gravatarHelper from '@/helpers/gravatar';
import {Tweet} from '@/interfaces';
import ActionBar from './ActionBar.vue';

@Component({
  components: {ActionBar},
})
export default class ListItem extends Vue {
  @Prop() public tweet!: Tweet;

  public getAvatar: (email: string) => string = gravatarHelper.getAvatar;
}
</script>

<style lang="scss" scoped>
  .block.list-item {
    margin-bottom: 0; border-top: 1px solid $light-blue; transition: background 200ms linear;
    &:hover { background: $light-grey; }

    .avatar { float: left; margin-right: 10px; border-radius: 24px; width: 48px; }
    .list-item-content { display: inline-block; width: 512px; }
    .list-item-name { font-weight: $fw-bold; }
    .list-item-account,
    .list-item-date {
      display: inline-block; margin-left: 3px;
      color: $dark-grey;
    }
    .list-item-date:before { margin-right: 3px; content: '\00b7'; }
    p { margin: 0; }
    .list-item-message { margin: 5px 0; }
    .list-item-image { margin: 5px 0; border-radius: 3px; }
  }
</style>
