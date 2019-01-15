<template>
  <div class="tweet-list">
    <ListItem v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" />
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {mapGetters} from 'vuex';
import {Tweet} from '@/interfaces';
import ListItem from './ListItem.vue';
import {User} from '@/interfaces';

@Component({
  components: {ListItem},
  computed: mapGetters(['currentUser', 'getTweets']),
})
export default class List extends Vue {
  @Prop() public onlyOwned!: boolean;
  private currentUser!: User;
  private getTweets!: (filter?: User) => Tweet[];
  private tweets: Tweet[] = [];

public   mounted() {
    this.tweets = this.getTweets(this.onlyOwned ? this.currentUser : undefined);
  }
}
</script>

<style lang="scss" scoped>

</style>
