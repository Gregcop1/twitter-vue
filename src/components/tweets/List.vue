<template>
  <div class="tweet-list">
    <ListItem v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {mapGetters} from 'vuex';
import {Tweet} from '@/interfaces';
import ListItem from './ListItem.vue';

@Component({
  components: {ListItem},
  computed: mapGetters(['tweets']),
})
export default class List extends Vue {
  private tweets!: Tweet[];
}
</script>

<style lang="scss" scoped>

</style>
