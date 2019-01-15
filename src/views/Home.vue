<template>
  <div class="home">
    <LeftSidebar />
    <div class="column main-content">
      <WriterContainer />
      <List />
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

@Component({
  components: {
    LeftSidebar,
    List,
    RightSidebar,
    WriterContainer,
  },
})
export default class Home extends Vue {}
</script>
