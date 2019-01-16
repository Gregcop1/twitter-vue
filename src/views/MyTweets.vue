<template>
  <div class="my-tweets">
    <LeftSidebar />
    <div class="column main-content">
      <List :tweets="tweets" />
    </div>
  </div>
</template>

<script lang="ts">
import { Getter } from 'vuex-class';
import { Component, Vue } from 'vue-property-decorator';
import WriterContainer from '@/components/writer/WriterContainer.vue';
import LeftSidebar from '@/components/sidebar/LeftSidebar.vue';
import List from '@/components/tweets/List.vue';
import {Tweet} from '../interfaces';

@Component({
  components: {
    LeftSidebar,
    List,
    WriterContainer,
  },
})
export default class Home extends Vue {
  @Getter('ownTweets') public tweets!: Tweet[];
}
</script>
