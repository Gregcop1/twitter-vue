<template>
  <div class="home">
    <LeftSidebar />
    <div class="column main-content">
      <WriterContainer />
      <List :tweets="tweets" />
    </div>
    <RightSidebar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WriterContainer from '@/components/writer/WriterContainer.vue';
import LeftSidebar from '@/components/sidebar/LeftSidebar.vue';
import RightSidebar from '@/components/sidebar/RightSidebar.vue';
import List from '@/components/tweets/List.vue';
import {Getter} from 'vuex-class';
import {Tweet} from '../interfaces';

@Component({
  components: {
    LeftSidebar,
    List,
    RightSidebar,
    WriterContainer,
  },
})
export default class Home extends Vue {
  @Getter('tweets') public tweets!: Tweet[];
}
</script>
