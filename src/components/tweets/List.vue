<template>
  <div class="tweet-list">
    <ListItem v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" />
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Tweet} from '@/interfaces';
import ListItem from './ListItem.vue';

@Component({
  components: {ListItem},
})
export default class List extends Vue {
  @Prop() public tweets!: Tweet[];
}
</script>

<style lang="scss" scoped>

</style>
